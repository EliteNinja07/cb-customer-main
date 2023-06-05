import {
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  MyCard,
  MyContent,
  formatDay,
  formatMoney,
  request,
  useListPage,
  useMyToast,
} from '../../../common';
import SendMessage from '../../../components/Message';
import { MyPagination } from '../../../components/MyPagination';
import NoActivity from '../../../components/NoActivity';
import MyNotEnoughLoyalty from '../../../components/NotEnoughLoyalty';
import UpgradeItem from '../../../components/UpgradeItem';
import Show from './modal/Show';

const styles = {
  Items: {
    borderBottom: '1px solid #f0f0f0',
    _dark: {
      borderBottom: '1px solid #333',
    },
    alignItems: 'center',
    cursor: 'pointer',
    '&:last-child': {
      border: 'none',
    },
  },
  NTitle: {
    alignItems: 'center',
    fontSize: '1.1rem',
    _dark: {
      color: '#fff',
    },
  },
  BadgeRead: {
    backgroundColor: '#0052ff',
    borderRadius: '100%',
    width: '8px',
    height: '8px',
  },
  ActTitle: {
    alignItems: 'center',
    fontSize: '1.2rem',
    fontWeight: '450',
    _dark: {
      color: '#fff',
    },
  },
};
export default () => {
  const [notData, setApiData] = useState<any>([]);
  const defauleDark = useColorModeValue('ant', 'antdark');
  const [getModalCont, setModalCont] = useState<any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showRes } = useMyToast();
  const { getData, getList, pagination, params } = useListPage({
    baseUri: 'sys_messages/list',
  });

  const api = {
    onApprove: (data: any) => {
      request('friends/approve', {
        data: data,
      })
        .then((res) => {
          console.log(params, 'params');
          getList(params);
          onClose();
        })
        .catch(showRes);
    },
    show: (data: any) => {
      request('sys_messages/show', {
        data: data,
      })
        .then((res) => {})
        .catch(showRes);
    },
    onShowFriend: (id: any, steData: any) => {
      request('friends/show_friend', {
        data: { users_id: id },
      })
        .then((res) => {
          return steData(res?.data);
        })
        .catch(showRes);
    },
  };

  const methods = {
    onSendMessage: (data: any) => {
      // 打开留言
      onClose();
      setModalCont({
        title: <FormattedMessage id='send.title' />,
        ch: (
          <ModalBody>
            <SendMessage tdata={data} onClose={onClose} />
          </ModalBody>
        ),
      });
      onOpen();
    },
    onRestoredOrder: (id: string) => {
      setModalCont({
        title: <FormattedMessage id='text.RestoredOrder' />,
        ch: (
          <Flex px={'2rem'} flexDir='column'>
            <MyNotEnoughLoyalty
              id={id}
              methods={methods}
              onChange={() => {
                onClose();
              }}
            />
          </Flex>
        ),
      });
    },
    onRecharge: (id: any) => {
      setModalCont({
        w: '800px',
        title: <FormattedMessage id='text.Recharge.btn' />,
        ch: (
          <UpgradeItem
            onChange={() => {
              setModalCont({
                title: <FormattedMessage id='text.RestoredOrder' />,
                ch: (
                  <MyNotEnoughLoyalty
                    id={id}
                    methods={methods}
                    onChange={() => {
                      onClose();
                    }}
                  />
                ),
              });
            }}
          />
        ),
      });
    },
    onShowFriend: (res: any) => {
      console.log(res, 'data');
      api.show({ id: res.id });
      if (
        res?.type == 'WithdrawalInvite' ||
        res?.type == 'FriendMessage' ||
        res?.type == 'AddFriend'
      ) {
        let data = JSON.parse(res?.content);
        console.log(data, 'data3');
        api.onShowFriend(data?.fromUser?.id || data?.friend.id, (json: any) => {
          res.fromUser = json?.friend;
          setModalCont({
            title: <FormattedMessage id={`text.${res?.type}`} />,
            ch: (
              <ModalBody sx={{ margin: 0, padding: 0 }}>
                <Show
                  params={res}
                  api={api}
                  methods={methods}
                  onChange={() => {
                    onClose();
                  }}
                />
              </ModalBody>
            ),
          });
        });
      } else {
        setModalCont({
          title: <FormattedMessage id={`text.${res?.type}`} />,
          ch: (
            <ModalBody sx={{ margin: 0, padding: 0 }}>
              <Show
                params={res}
                api={api}
                methods={methods}
                onChange={() => {
                  onClose();
                }}
              />
            </ModalBody>
          ),
        });
      }
    },
  };

  useEffect(() => {
    setApiData(getData?.data ? JSON.parse(JSON.stringify(getData?.data)) : []);
  }, [getData]);

  return (
    <>
      <MyContent w='100%'>
        <MyCard flexDir='column'>
          {notData?.map((res: any, index: number) => {
            return (
              <Flex
                py={5}
                w='full'
                px={5}
                key={`nots_${index}`}
                sx={styles.Items}
                onClick={() => {
                  onOpen();
                  methods?.onShowFriend(res);
                }}
              >
                <Flex pr={3} alignItems='center'>
                  {!res?.has_read ? <Text sx={styles.BadgeRead}></Text> : ''}
                </Flex>
                <Flex sx={{ flex: '1' }} flexDir='column'>
                  <Flex
                    color='#5b616e'
                    w='full'
                    sx={res?.has_read ? styles.NTitle : styles.ActTitle}
                  >
                    <FormattedMessage id={`text.${res?.type}`} />
                    <Text sx={{ fontSize: '2rem' }}>・</Text>
                    {formatDay(res?.created_at)}
                  </Flex>
                  <Text w='full' fontSize='1rem' color='#666'>
                    <FormattedMessage id={`notify.${res?.type}`} />
                  </Text>
                </Flex>
                {parseFloat(res?.usdc) > 0 ? (
                  <Flex flexDir='column' sx={{ textAlign: 'right' }}>
                    <Text
                      fontSize='1.1rem'
                      sx={{ _dark: { color: '#3773f5', fontWeight: 450 } }}
                    >
                      + {formatMoney(res?.usdc, '')} USDC
                    </Text>
                    <Text sx={{ _dark: { color: '#fff' } }}>
                      ≈ {formatMoney(res?.usd, '')}
                    </Text>
                  </Flex>
                ) : (
                  ''
                )}
              </Flex>
            );
          })}
          {!getData?.data || getData?.data?.length == 0 ? <NoActivity /> : ''}
          <ConfigProvider prefixCls={defauleDark}>
            <MyPagination {...pagination} />
          </ConfigProvider>
        </MyCard>
      </MyContent>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}
        onCloseComplete={() => {
          getList(params);
          console.log(params, 'params');
        }}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent sx={{ width: '100%', maxWidth: getModalCont?.w }}>
          <ModalHeader>{getModalCont?.title}</ModalHeader>
          <Divider />
          <ModalCloseButton />
          {getModalCont?.ch}
        </ModalContent>
      </Modal>
    </>
  );
};
