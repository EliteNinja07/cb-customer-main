import {
  CloseButton,
  Divider,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Top50 from '../../../assets/images/championship_team.svg';
import {
  MyCard,
  MyCardDivider,
  MyContent,
  MyIcon,
  TextCardHeader,
  YourYieldButton,
  request,
  useMyState,
  useMyToast,
} from '../../../common';
import SendMessage from '../../../components/Message';
import HowEarningWorksCard from './components/HowEarningWorksCard';
import MemberTable from './components/MemberTable';
import Ranking from './components/Ranking';
import TTabs from './components/Tabs';
import Time from './components/Time';
import VerifyIdentifyCard from './components/VerifyIdentifyCard';
import WatchListCard from './components/WatchListCard';
import YourYieldCard from './components/YourYieldCard';
import './style.scss';
import { getFollowStatus } from '../../../constants';

export default () => {
  const intl = useIntl();

  const [sModal, setModal] = useState<any>();
  const FollowStatus = getFollowStatus(intl);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [getType, setType] = useState(0);
  const { snap } = useMyState();
  const { showRes } = useMyToast();
  const [table, setTable] = useState([]);
  const [getRes, setRes] = useState<any>({});
  const [getRankingShow, setRankingShow] = useState(
    document.body.clientWidth < 600 ? false : true,
  );
  const [getEarnLShow, setEarnLShow] = useState(true);

  const api = {
    getEarnIndex: () => {
      request('earn/show', {})
        .then((res) => {
          setRes(res?.data);
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
    resizeUpdate: () => {
      if (document.body.clientWidth < 600) {
        setRankingShow(false);
      } else {
        setRankingShow(true);
        setEarnLShow(true);
      }
    },
    onVerifyIdentifyCard: () => {
      if (
        getEarnLShow &&
        snap.session.user &&
        !snap.session.user?.identity_verified_at
      ) {
        return <VerifyIdentifyCard />;
      }
    },
    onGetEarnLShow: () => {
      if (getEarnLShow) {
        return (
          <Flex className='earn-l-c'>
            <YourYieldCard
              user={snap.session.user}
              ydata={getRes?.your_yield}
            />
            <WatchListCard wdata={getRes.funds} />
            <HowEarningWorksCard />
          </Flex>
        );
      }
    },
    onGetRankingShow: () => {
      if (getRankingShow) {
        return (
          <Flex className='earn-r-c'>
            <MyCard
              direction='column'
              mt={{ base: '-24px', sm: '-24px', md: 'unset', lg: 'unset' }}
              sx={{ overflow: 'hidden' }}
            >
              <Flex h='70px' alignItems='center' justifyContent='space-between'>
                <Flex sx={{ flex: 1, alignItems: 'center' }}>
                  <Image w='70px' p='0 0 0 30px' src={Top50} />
                  <TextCardHeader>
                    <FormattedMessage id='text.Top50' />
                  </TextCardHeader>
                </Flex>
                <Flex pr={2}>
                  <CloseButton
                    size='md'
                    className='sm-ranking-close-btn'
                    onClick={() => {
                      setRankingShow(false);
                      setEarnLShow(true);
                    }}
                  />
                </Flex>
              </Flex>
              <MyCardDivider></MyCardDivider>
              <Flex pt={2}>
                <TTabs
                  onChange={(e: any) => {
                    setType(e);
                  }}
                />
              </Flex>
              <Time
                tdata={getType ? getRes?.jackpot?.prev : getRes.jackpot?.now}
              />
              <Ranking
                api={api}
                followStatus={FollowStatus}
                methods={methods}
                tdata={
                  getType
                    ? getRes?.jackpot?.prev?.users
                    : getRes?.jackpot?.now?.users
                }
              />
              <Divider orientation='horizontal' />
              <MemberTable
                api={api}
                followStatus={FollowStatus}
                methods={methods}
                tdata={
                  getType
                    ? getRes?.jackpot?.prev?.users
                    : getRes?.jackpot?.now?.users
                }
              />
            </MyCard>
          </Flex>
        );
      }
    },
  };

  useEffect(() => {
    api.getEarnIndex();
    window.addEventListener('resize', methods.resizeUpdate);
    return () => {
      window.removeEventListener('resize', methods.resizeUpdate);
    };
  }, []);

  return (
    <MyContent>
      <Flex direction='column' align='start'>
        {methods.onVerifyIdentifyCard()}
        <Flex w='full' flexWrap='wrap' className='earn-c'>
          {methods.onGetEarnLShow()}
          {methods.onGetRankingShow()}
        </Flex>
      </Flex>
      <Flex className='sm-ranking-btn-c'>
        <YourYieldButton
          w='40px'
          h='40px'
          onClick={() => {
            setEarnLShow(false);
            setRankingShow(true);
          }}
          p={0}
        >
          <MyIcon icon='' w='30px' h='30px' fontSize='1.3rem' />
        </YourYieldButton>
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
