import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { parseUnits } from 'ethers/lib/utils';
import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useSetState } from 'react-use';
import {
  erc20ABI,
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import DefLogo from '@/assets/images/logo-small.svg';
import MoneyImg from '@/assets/images/usdc.svg';
import {
  Coins,
  formatCoins,
  formatMoney,
  getErrorMessage,
  PrimaryButton,
  stateActions,
  useMyState,
  useMyToast,
} from '@/common';
import InputChange from './InputChange';
import { MemberShipTips } from './MemberShipTips';
import { StakingSelectAsset } from '../modal/StakingSelectAsset';

const styles = {
  FormC: {
    border: '1px solid #b2b2b238',
    borderRadius: '8px',
  },
  MPointer: {
    cursor: 'pointer',
  },
  ArrowBackIcon: {
    position: 'absolute',
  },
};

export default ({ price, balance, api }: any) => {
  const { snap } = useMyState();
  const { user } = snap.session;
  const {
    isOpen: isSelectOpen,
    onOpen: onSelectOpen,
    onClose: onSelectClose,
  } = useDisclosure();

  const { showError } = useMyToast();

  const intl = useIntl();
  const toast = useToast();
  const modalTypeItems = [
    {
      label: intl.formatMessage({ id: 'text.FromWallet' }),
      value: 'FromWallet',
    },
    {
      label: intl.formatMessage({ id: 'text.FromWithdrawable' }),
      value: 'FromWithdrawable',
    },
  ];

  const [data, setData] = useSetState<any>({
    coinIndex: 0, // 弹窗中选中的coin的index
    res: {}, // pre_staking 接口返回的数据
    coins: {
      // 弹窗中的数据
      FromWithdrawable: [
        { ...Coins[0], balance: balance, usd: balance * price.usdc },
      ],
      FromWallet: Coins,
    },
    modalType: 'FromWallet', // 弹窗的类型，参考 modalTypeItems
    modalName: intl.formatMessage({ id: 'text.FromWallet' }),
    coin: Coins[0], // 当前选中的coin
    amount: '', // 输入的金额
    showTrailTip: user.vips_id === 1 && user.membership_card,
  });

  useEffect(() => {
    setData({ showMemberTip: user.vips_id === 1 && !user.membership_card });
  }, [user]);

  useEffect(() => {
    setData({
      coins: {
        FromWithdrawable: [
          {
            ...data.coins.FromWithdrawable[0],
            balance: balance,
            usd: balance * price.usdc,
          },
        ],
        FromWallet: data.coins.wallet,
      },
      coin: {
        ...data?.coin,
        ...{ balance: balance, usd: balance * price.usdc },
      },
    });
  }, [balance, price]);

  const balances = useContractReads({
    contracts: [
      {
        address: data?.coins['FromWallet']
          ? data?.coins['FromWallet'][0].address
          : Coins[0].address, // usdc
        abi: erc20ABI,
        functionName: 'balanceOf',
        args: [user.address],
      },
      {
        address: data?.coins['FromWallet']
          ? data?.coins['FromWallet'][1].address
          : Coins[1].address, // usdt
        abi: erc20ABI,
        functionName: 'balanceOf',
        args: [user.address],
      },
    ],
  });

  const { config } = usePrepareContractWrite({
    address: data?.coin.address as any,
    abi: erc20ABI,
    functionName: 'transfer',
    args: data?.amount
      ? [
          data?.coin.symbol == 'USDC' ? user.usdcReceive : user.usdtReceive,
          parseUnits(data?.amount, 6),
        ]
      : undefined, // constants.MaxUint256,
    enabled: Boolean(data?.amount),
    onError(error) {
      stateActions.subLoading();
      showError({ description: getErrorMessage(error.message, intl) });
    },
  });

  const { write } = useContractWrite({
    ...config,
    onError(error) {
      stateActions.subLoading();
      showError({ description: getErrorMessage(error.message, intl) });
    },
    onSuccess(res) {
      stateActions.subLoading();
      let params = {
        coins_id: data?.coin.id,
        symbol: data?.coin.symbol,
        amount: parseFloat(data?.amount),
        hash: res.hash,
      };
      // api.onStaking(params);
      api.staking_from_wallet(params);
    },
  });

  const ViInputAmount = () => {
    if (!data?.amount) {
      return {
        status: true,
        label: intl.formatMessage({ id: 'transfer.requiredAmount2' }),
      };
    }
    if (parseFloat(data?.amount) > parseFloat(data?.coin?.balance)) {
      return {
        status: true,
        label: intl.formatMessage({ id: 'transfer.requiredAmount5' }),
      };
    }
    return { status: false, label: '' };
  };

  const onSubmit = () => {
    return api.getStaking(
      {
        symbol: data?.coin.symbol,
        type: data?.modalType,
        input_amount: parseFloat(data?.amount),
      },
      (res: any) => {
        if (res?.code == 0) {
          if (data?.modalType == 'FromWithdrawable') {
            api.staking_from_withdrawable({ amount: parseFloat(data?.amount) });
          } else {
            write?.();
          }
        }
      },
    );
  };

  useEffect(() => {
    if (balances?.data?.length != 2) return;
    let coin1 = data?.coins['FromWallet']
      ? data?.coins['FromWallet'][0]
      : Coins[0];
    let coin2 = data?.coins['FromWallet']
      ? data?.coins['FromWallet'][1]
      : Coins[1];
    coin1.balance = balances?.data[0].toNumber() / 1000000;
    coin1.usd = coin1.balance * price?.usdc;
    coin2.balance = balances?.data[1].toNumber() / 1000000;
    coin2.usd = coin2?.balance * price?.usdc;
    setData({
      coins: {
        FromWithdrawable: data.coins.FromWithdrawable,
        FromWallet: [coin1, coin2],
      },
      coin: data.coinIndex == 0 ? coin1 : coin2,
    });
  }, [balances.data]);

  // const
  useEffect(() => {
    api.pre_staking().then((res: any) => {
      setData({
        res: res.data,
      });
    });
  }, []);

  return (
    <Flex flexDir='column' position={'relative'}>
      {data.showMemberTip && <MemberShipTips></MemberShipTips>}
      {/*{data.showTrailTip &&*/}
      {/*  <TrailTips enjoyed={data.showTrailTip} onClick={() => stateActions.toggleNewbieCard()} />}*/}
      <Flex
        justifyContent='center'
        alignItems='center'
        pt={8}
        pb={2}
        color='#0052ff'
      >
        <InputChange
          defaultval={data?.amount}
          value={data?.amount}
          placeholder='0'
          symbol={data?.coin?.symbol}
          onChange={(val: number) => {
            setData({ amount: val });
          }}
        />
      </Flex>
      <Flex
        color='#5b616e'
        w='full'
        justifyContent='center'
        mb={4}
        h='18px'
        sx={{ textAlign: 'center' }}
      >
        {ViInputAmount().label}
      </Flex>
      <Flex justifyContent='center'>
        <Text
          py={0.5}
          px={4}
          bg='#f5f8ff'
          sx={{
            cursor: 'pointer',
            bg: '#f5f8ff',
            fontSize: '1rem',
            border: '1px solid #dedfe2',
            borderRadius: '6px',
            color: '#89909e',
          }}
          onClick={() => {
            setData({ amount: ('' + data?.coin?.balance).replace(',', '') });
            // if (data?.coin?.balance) {
            //   setData({ amount: ("" + data?.coin?.balance).replace(",", "") });
            // } else {
            //   setData({
            //     amount: ("" + data?.coin?.balance).replace(",", ""),
            //   });
            // }
          }}
        >
          <FormattedMessage id='text.StakingAll' />
        </Text>
      </Flex>
      <Flex
        mx={{ base: 1, sm: 1, md: 9, lg: 9 }}
        sx={styles.FormC}
        mt={6}
        flexDir='column'
      >
        <Flex
          alignItems='center'
          py='24px'
          px={{ base: 2, sm: 2, md: 4, lg: 4 }}
          color='#5b616e'
          w='full'
          sx={styles.MPointer}
          onClick={onSelectOpen}
        >
          <Flex alignItems='center' pl={{ base: 1, sm: 1, md: 3, lg: 3 }}>
            <Text
              pr={{ base: 2, sm: 2, md: 4, lg: 4 }}
              fontWeight='410'
              w={
                data?.modalType == 'FromWallet'
                  ? { base: '85px', sm: '85px', md: '100px', lg: '100px' }
                  : { base: '100px', sm: '100px', md: '160px', lg: '160px' }
              }
            >
              {data?.modalName}
            </Text>
            <Image
              borderRadius='full'
              w='30px'
              h='30px'
              src={data?.coin?.icon || MoneyImg}
            />
          </Flex>
          <Flex flex='1' pl={3}>
            <Text>{data?.coin?.symbol || 'USD Coin'}</Text>
          </Flex>
          <Icon fontSize='30px' as={ChevronRightIcon} />
        </Flex>
        <Divider />
        <Flex
          alignItems='center'
          py='24px'
          px={{ base: 2, sm: 2, md: 4, lg: 4 }}
          color='#5b616e'
          w='full'
        >
          <Flex
            alignItems='center'
            w='140px'
            pl={{ base: 1, sm: 1, md: 3, lg: 3 }}
          >
            <Text
              pr={{ base: 2, sm: 2, md: 4, lg: 4 }}
              fontWeight='410'
              w={{ base: '85px', sm: '85px', md: '100px', lg: '100px' }}
            >
              <FormattedMessage id='text.to' />
            </Text>
            <Image borderRadius='full' w='30px' h='30px' src={DefLogo} />
          </Flex>
          <Flex flex='1' pl={3}>
            <Text>Coinbase</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex mx={9} pt={5}>
        <PrimaryButton
          w='full'
          h='50px'
          isDisabled={ViInputAmount().status}
          onClick={onSubmit}
        >
          <FormattedMessage id='text.Continue' />
        </PrimaryButton>
      </Flex>
      <Flex alignItems='center' px={9} py={5} color='#5b616e'>
        <Flex w='full'>
          <Text>{`${data?.coin.symbol} balance`}</Text>
        </Flex>
        <Flex w='full' textAlign='right'>
          <Text w='full'>
            {formatCoins(data?.coin?.balance, data?.coin.symbol)}
            {formatMoney(data?.coin.usd, ' ≈ $')}
          </Text>
        </Flex>
      </Flex>

      <StakingSelectAsset
        open={isSelectOpen}
        onClose={onSelectClose}
        data={data}
        modalTypeItems={modalTypeItems}
        onChange={(res: any) => {
          setData({
            coinIndex: res?.coinIndex,
            coin: res?.conin,
            modalType: res?.modalType,
            modalName: res?.modalName,
          });
          onSelectClose();
        }}
      />
    </Flex>
  );
};
