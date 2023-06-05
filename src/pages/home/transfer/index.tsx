import {
  AlertDialog,
  AlertDialogOverlay,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useSetState } from 'react-use';
import {
  MyContent,
  request,
  stateActions,
  useMyState,
  useMyToast,
} from '@/common';
import CryptoGifts from './components/CryptoGifts';
import RecentSends from './components/RecentSends';
import Transactions from './components/Transactions';
import WithdrawalAndStaking from './components/WithdrawalAndStaking';
import MServiceCharge from './modal/ServiceCharge';
import MFriendList from './modal/friendList';
import MIdentityDialog from './modal/identityDialog';
import MupGrade from './modal/upgrade';
import './style.scss';
import { showTransfer } from '@/api/transfer';

export default () => {
  const cancelRef: any = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showRes } = useMyToast();
  const { snap } = useMyState();
  const { showError, showSuccess } = useMyToast();


  const intl = useIntl();
  const [res, setRes] = useSetState<any>({
    transactions: {
      Withdrawal: [],
      Staking: [],
    },
    recent_sends: [],
    price: {
      usdc: 1,
      usdt: 1,
    },
    coins: [],
    dialog: <></>,
    preWithdrawal: {},
  });

  const api = {
    show: () => {
      showTransfer().then((json) => {
        console.log(json, 'shows');
        setRes(json?.data);
      });
    },
    pre_withdrawal: () =>
      request('transfer/pre_withdrawal').then((json) => {
        const preWithdrawal = JSON.parse(JSON.stringify(json?.data));
        setRes({ preWithdrawal });
        return preWithdrawal;
      }),
    pre_staking: () => request('transfer/pre_staking', {}),
    getStaking: (data: any, setData: any) => {
      return request('transfer/staking', { data: data })
        .then((res) => {
          setData(res);
        })
        .catch(showRes);
    },
    staking_from_wallet: (data: any) => {
      request('transfer/staking_from_wallet', { data: data })
        .then((res) => {
          showSuccess({
            description: intl.formatMessage({ id: 'success.StakingSuccess' }),
          });
          api.show();
          api.pre_withdrawal();
        })
        .catch(() => {
          showError({
            description: intl.formatMessage({ id: 'error.common' }),
          });
        });
    },
    staking_from_withdrawable: (data: any) => {
      request('transfer/staking_from_withdrawable', { data: data })
        .then((res) => {
          showSuccess({
            description: intl.formatMessage({ id: 'success.StakingSuccess' }),
          });
          api.show();
          api.pre_withdrawal();
        })
        .catch((err) => {
          showError({
            description: intl.formatMessage({ id: 'error.common' }),
          });
        });
    },
    cancelWithdraw: (id: number) => {
      return request('/transfer/cancel_friend_help', { data: { id } }).then(
        (res) => {
          console.log(res);

          api.show();
        },
      );
    },
    onWithdraw: (getInputAmount: any, useFree: boolean, setInputAmount: any) => {
      request('transfer/withdraw', {
        data: { input_amount: getInputAmount, useFree },
      })
        .then((res: any) => {
          if (res?.code === 0) {
            showRes(res);
            setInputAmount({ amount: 0 });
            onClose();
          } else {
            setRes({
              dialog: (
                <MupGrade
                  tdata={{
                    ...res?.data,
                    flag: true,
                    input_amount: getInputAmount,
                  }}
                  methods={methods}
                  onClose={onClose}
                />
              ),
            });
            onOpen();
          }
        })
        .catch((err) => {
          console.log('====', err);
          if (err.code == 10006) {
            onClose();
            setRes({
              dialog: <MIdentityDialog message={err} onClose={onClose} />,
            });
            onOpen();
            return false;
          }
          if (err.code == 10004) {
            console.log({
              flag: false,
              message: err.message,
            });
            onClose();
            setRes({
              dialog: (
                <MupGrade
                  tdata={{
                    flag: false,
                    message: err.message,
                  }}
                  methods={methods}
                  onClose={onClose}
                />
              ),
            });
            onOpen();
            return false;
          }
          if (err.code == 10010) {
            setRes({
              dialog: (
                <MFriendList
                  tdata={{
                    flag: false,
                    ...JSON.parse(err.message),
                  }}
                  api={api}
                  onClose={onClose}
                />
              ),
            });
            onOpen();
            return false;
          }
          if (err.code == 10006) {
            setRes({
              dialog: <MIdentityDialog message={err} onClose={onClose} />,
            });
            onOpen();
            return false;
          }

          showRes(err);
        })
        .finally(api.show);
    },
    onStaking: (params: any) => {
      request('transfer/submit_staking', { data: params })
        .then(() => {
          showSuccess({
            description: intl.formatMessage({ id: 'success.StakingSuccess' }),
          });
          api.show();
          // api.getTransactions();
          // api.getRecentSends();
        })
        .catch((err) => {
          showError({
            description: intl.formatMessage({ id: 'error.common' }),
          });
        });
    },
    onSendInvite: (data: any, funct: any) => {
      request('friends/send_invite', { data: data })
        .then((res) => {
          showRes(res);
          return funct(res);
        })
        .catch(showRes);
    },
    getTransactions: () => {
      request('transfer/get_transactions', {})
        .then((res) => {
          setRes({ transactions: res?.data });
        })
        .catch(showRes);
    },
    getRecentSends: () => {
      request('transfer/get_recent_sends', {})
        .then((res) => {
          setRes({ recent_sends: res?.data || [] });
        })
        .catch(showRes);
    },
  };

  const methods = {
    onFriendFun: (data: any) => {
      onClose();
      setRes({
        dialog: <MFriendList api={api} tdata={data} onClose={onClose} />,
      });
      onOpen();
    },
    handleCancelWithdraw: async (id: number) => {
      return api.cancelWithdraw(id).then(() =>
        stateActions.me().then((res) => {
          setRes({
            preWithdrawal: {
              balance: res.total_balance,
            },
          });
        }),
      );
    },
    withdraw: (getInputAmount: number, OUData: any, setInputAmount: any) => {
      setRes({
        dialog: (
          <MServiceCharge
            value={getInputAmount}
            tdata={OUData}
            onClose={onClose}
            onChange={(useFree: boolean) => {
              api.onWithdraw(getInputAmount, useFree, setInputAmount);
            }}
          />
        ),
      });
      onOpen();
    },
  };

  useEffect(() => {
    api.show();
    api.pre_withdrawal();
  }, []);

  return (
    <MyContent w='100%'>
      <Flex flexWrap='wrap'>
        <Flex flexDir='column' className='trans-l-c'>
          <WithdrawalAndStaking
            api={api}
            methods={methods}
            user={snap.session.user}
            res={res}
          />
          <Transactions
            data={res?.transactions}
            onCancel={methods.handleCancelWithdraw}
          />
        </Flex>
        <Flex className='trans-r-c' flexDir='column'>
          <CryptoGifts />
          <RecentSends data={res?.recent_sends} />
        </Flex>
      </Flex>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>{res?.dialog}</AlertDialogOverlay>
      </AlertDialog>
    </MyContent>
  );
};
