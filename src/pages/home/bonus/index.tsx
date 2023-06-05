import pagethreesvg20 from '@/assets/images/pagethreesvg20.svg';
import pagethreesvg21 from '@/assets/images/pagethreesvg21.svg';
import pagethreesvg22 from '@/assets/images/pagethreesvg22.svg';
import pagethreesvg23 from '@/assets/images/pagethreesvg23.svg';
import pagethreesvg24 from '@/assets/images/pagethreesvg24.svg';
import pagethreesvg25 from '@/assets/images/pagethreesvg25.svg';
import pagethreesvg26 from '@/assets/images/pagethreesvg26.svg';
import SendMessage from '@/components/Message';
import {
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  MyCard,
  MyContent,
  TextBody,
  TextCardHeader,
  formatMoney,
  getDayYmHm,
  request,
  useListPage,
  useMyState,
  useMyToast,
} from '@/common';
import { MyPagination } from '@/components/MyPagination';
import NoActivity from '@/components/NoActivity';
import CardItem from './components/CardItem';
import FriendsTable from './components/FriendsTable';
import SearchForm from './components/SearchForm';
import './style.scss';

export default () => {
  const defauleDark = useColorModeValue('ant', 'antdark');
  const { showRes } = useMyToast();
  const [getRData, setRData] = useState([]);
  const [sModal, setModal] = useState<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [usdcPrice, setUsdcPrice] = useState(1);
  const { getData, getList, pagination, params } = useListPage({
    baseUri: 'bonus/list',
  });
  const api = {
    getTableList: () => {
      //获取列表信息
      getList(params);
    },
    getPrice: () => {
      request('coins/get_price', { data: { symbol: 'USDC' } })
        .then((res) => {
          setUsdcPrice(res.data.price ?? 1);
        })
        .catch(showRes);
    },
    getRightItems: () => {
      request('bonus/statistics', {})
        .then((res) => {
          setRData(res.data || []);
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
    api.getPrice();
  }, []);

  return (
    <MyContent w='100%'>
      <Flex w='full' flexWrap='wrap'>
        <Flex className='bonus-l-c'>
          <MyCard flexDir='column' w='full' pb={2}>
            <TextCardHeader pb={0}>
              {/* {lang?.TeamBonus?.title} */}
              <FormattedMessage id='text.TeamBonus' />
            </TextCardHeader>
            <TextBody pl='6' pb='4'>
              {/* {lang?.TeamBonus?.desc} */}
              <FormattedMessage id='bonus.desc' />
            </TextBody>
            <Divider />
            <ConfigProvider prefixCls={defauleDark}>
              <SearchForm
                onChange={(res: any) => {
                  getList(res);
                }}
              />
              <Divider />
              <FriendsTable
                tdata={getData?.data}
                api={api}
                methods={methods}
                onLockChange={() => {
                  getList(params);
                }}
              />
              {!getData?.data || getData?.data?.length == 0 ? (
                <NoActivity />
              ) : (
                ''
              )}
              <MyPagination {...pagination} />
            </ConfigProvider>
          </MyCard>
        </Flex>
        <Flex className='bonus-r-c' ml='24px' flexDir='column'>
          <CardItem
            keyIdx='7'
            icon={pagethreesvg20}
            title={<FormattedMessage id='text.TeamBonus' />}
            val={formatMoney(getRData[0], '')}
            des={getDayYmHm(getRData[7]) + ' - ' + getDayYmHm(getRData[8])}
          />
          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 1, lg: 1 }}
            spacingX='5px'
            w='full'
          >
            <CardItem
              keyIdx='1'
              icon={pagethreesvg21}
              title={<FormattedMessage id='bonus.level1' />}
              val={formatMoney(getRData[1], '')}
              des={`≈ ${formatMoney(getRData[1] * usdcPrice, '$')}`}
            />
            <CardItem
              keyIdx='2'
              icon={pagethreesvg22}
              title={<FormattedMessage id='bonus.level2' />}
              val={formatMoney(getRData[2], '')}
              des={`≈ ${formatMoney(getRData[2] * usdcPrice, '$')}`}
            />
            <CardItem
              keyIdx='3'
              icon={pagethreesvg23}
              title={<FormattedMessage id='bonus.level3' />}
              val={formatMoney(getRData[3], '')}
              des={`≈ ${formatMoney(getRData[3] * usdcPrice, '$')}`}
            />
            <CardItem
              keyIdx='4'
              icon={pagethreesvg24}
              title={<FormattedMessage id='text.ReferralBonus' />}
              val={formatMoney(getRData[4], '')}
              des={`≈ ${formatMoney(getRData[4] * usdcPrice, '$')}`}
            />
            <CardItem
              keyIdx='5'
              icon={pagethreesvg25}
              title={<FormattedMessage id='text.LockedBonus' />}
              val={formatMoney(getRData[5], '')}
              apis={api}
              isDisabled={getRData[5] == 0}
              btnname={<FormattedMessage id='text.unlock' />}
            />
            <CardItem
              keyIdx='6'
              icon={pagethreesvg26}
              title={<FormattedMessage id='text.PendingBonus' />}
              val={formatMoney(getRData[6], '')}
              btnname={<FormattedMessage id='text.Detail' />}
              isDisabled
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
