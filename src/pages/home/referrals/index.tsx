import {
  Divider,
  Flex,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useColorModeValue,
  Modal,
  useDisclosure,
} from '@chakra-ui/react';
import pagethreesvg13 from '../../../assets/images/pagethreesvg13.svg';
import pagethreesvg14 from '../../../assets/images/pagethreesvg14.svg';
import pagethreesvg16 from '../../../assets/images/pagethreesvg15.svg';
import pagethreesvg17 from '../../../assets/images/pagethreesvg16.svg';
import pagethreesvg15 from '../../../assets/images/pagethreesvg17.svg';
import pagethreesvg18 from '../../../assets/images/pagethreesvg18.svg';
import pagethreesvg19 from '../../../assets/images/pagethreesvg19.svg';
import MoneyImg from '../../../assets/images/usdc.svg';
import {
  formatMoney,
  MyCard,
  MyContent,
  request,
  TextBody,
  TextCardHeader,
  useListPage,
  useMyToast,
} from '../../../common';
import CardItem from './components/CardItem';
import FriendsTable from './components/FriendsTable';
import SearchForm from './components/SearchForm';
import SendMessage from '../../../components/Message';

import './style.scss';

import { ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { MyPagination } from '../../../components/MyPagination';
import NoActivity from '../../../components/NoActivity';

export default () => {
  const defauleDark = useColorModeValue('ant', 'antdark');
  const [getRData, setRData] = useState([]);
  const [sModal, setModal] = useState<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { showRes } = useMyToast();
  const [getRes, setRes] = useState<any>({});
  const { getData, getList, pagination } = useListPage({
    baseUri: 'referrals/list',
  });
  const intl = useIntl();

  const api = {
    getRightItems: () => {
      request('referrals/statistics', {})
        .then((res) => {
          setRData(res.data);
        })
        .catch(showRes);
    },
  };

  const methods = {
    onSendMessage: (data: any) => {
      // 打开留言
      setModal({
        title: <FormattedMessage id='send.title' />,
        ch: <SendMessage tdata={data} onClose={onClose} />,
      });
      onOpen();
    },
  };

  useEffect(() => {
    api.getRightItems();
  }, []);
  return (
    <MyContent w='100%'>
      <Flex w='full' flexWrap='wrap'>
        <Flex className='referrals-l-c'>
          <MyCard flexDir='column' w='full' pb={2}>
            <TextCardHeader pb={0}>
              <FormattedMessage id='text.MyFriends' />
            </TextCardHeader>
            <TextBody pl='6' pb='4'>
              <FormattedMessage id='referrals.subTitle' />
            </TextBody>
            <Divider />
            <ConfigProvider prefixCls={defauleDark}>
              <SearchForm
                onChange={(res: any) => {
                  getList(res);
                }}
              />
              <Divider />
              <FriendsTable tdata={getData?.data} api={api} methods={methods} />
              {!getData?.data || getData?.data?.length == 0 ? (
                <NoActivity />
              ) : (
                ''
              )}
              <MyPagination {...pagination} />
            </ConfigProvider>
          </MyCard>
        </Flex>
        <Flex className='referrals-r-c' flexDir='column'>
          <CardItem
            icon={pagethreesvg13}
            title={getRData[0]}
            des={intl.formatMessage({ id: 'referrals.label1' })}
            toolt=''
          />
          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 1, lg: 1 }}
            spacingX='5px'
            w='full'
          >
            <CardItem
              icon={pagethreesvg14}
              title={getRData[1]}
              des={intl.formatMessage({ id: 'referrals.label2' })}
              toolt=''
            />
            <CardItem
              icon={pagethreesvg15}
              title={getRData[2]}
              des={intl.formatMessage({ id: 'referrals.label3' })}
              toolt=''
            />
            <CardItem
              icon={pagethreesvg16}
              title={getRData[3]}
              des={intl.formatMessage({ id: 'referrals.label4' })}
              toolt={intl.formatMessage({ id: 'referrals.tooltip4' })}
            />
            <CardItem
              icon={pagethreesvg17}
              title={getRData[4]}
              des={intl.formatMessage({ id: 'referrals.label5' })}
              toolt={intl.formatMessage({ id: 'referrals.tooltip5' })}
            />
            <CardItem
              icon={pagethreesvg18}
              title={formatMoney(getRData[5], '')}
              des={intl.formatMessage({ id: 'text.TotalStaking' })}
              toolt=''
              titleicon={<Image boxSize='20px' mr={1} src={MoneyImg} />}
            />
            <CardItem
              icon={pagethreesvg19}
              title={formatMoney(getRData[6], '')}
              des={intl.formatMessage({ id: 'text.TotalEarning' })}
              toolt=''
              titleicon={<Image boxSize='20px' mr={1} src={MoneyImg} />}
            />
          </SimpleGrid>
        </Flex>
      </Flex>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{sModal?.title}</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>{sModal?.ch}</ModalBody>
        </ModalContent>
      </Modal>
    </MyContent>
  );
};
