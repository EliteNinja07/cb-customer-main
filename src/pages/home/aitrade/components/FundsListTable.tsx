import Fee from '@/assets/images/fee.svg';
import Income from '@/assets/images/income.svg';
import LoyaltyImg from '@/assets/images/Loyalty.svg';
import Notactivated from '@/assets/images/Notactivated.svg';
import NotProtected from '@/assets/images/NotProtected.svg';
import Protected from '@/assets/images/Protected.svg';
import MoneyImg from '@/assets/images/usdc.svg';
import {
  Button,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import {
  formatMoney,
  formatPercent,
  request,
  useMyToast,
} from '../../../../common';
import { MyPagination } from '../../../../components/MyPagination';
import MyNoActivity from '../../../../components/NoActivity';
import MyNotEnoughLoyalty from '../../../../components/NotEnoughLoyalty';
import UpgradeItem from '../../../../components/UpgradeItem';
import DetailTable from '../modal/DetailTable';

let styles = {
  Ftd: {
    padding: 0,
  },
  Ltd: {
    padding: 0,
    borderLeft: '1px solid #edf2f7 !important',
    borderRight: '1px solid #edf2f7 !important',
  },
  Fitd: {
    padding: '0 10px',
  },
};
export default ({ api, getData, pagination }: any) => {
  const [modalInfo, setModalInfo] = useState<any>();
  const { showRes, showSuccess } = useMyToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let profitResId = '';
  const apis = {
    on_manual_exchange: (id: number) => {
      request('ai_trade/manual_exchange', { data: { pledge_profits_id: id } })
        .then((res: any) => {
          api?.onShow();
          api?.onGetTableList();
          onClose();
          if (res?.code == 0 && res?.data?.message) {
            showSuccess({ description: res?.data?.message, title: 'Ok' });
          }
        })
        .catch(showRes);
    },
  };

  const methods = {
    onRecharge: () => {
      setModalInfo({
        w: '800px',
        title: <FormattedMessage id='text.Recharge.btn' />,
        ch: (
          <UpgradeItem
            onChange={() => {
              setModalInfo({
                title: '',
                ch: (
                  <MyNotEnoughLoyalty
                    id={profitResId}
                    methods={methods}
                    onChange={() => {
                      api.onShow();
                      api?.onGetTableList();
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
  };

  const ManualExchange = (id: any) => {
    return (
      <Flex flexDir='column'>
        <Flex sx={{ padding: '2rem 0 1rem 0' }}>
          <Text sx={{ fontSize: '1.2rem', fontWeight: '500' }}>
            <FormattedMessage id='text.ManualExchange' />
          </Text>
        </Flex>
        <Text pb={3}>
          <FormattedMessage id='ManualExchange.Intro' />
          <Link style={{ color: '#0078FF' }} to='/home/learn'>
            <FormattedMessage id='text.LearnMore' />
            ...
          </Link>
        </Text>
        <Flex sx={{ justifyContent: 'flex-end', paddingBottom: '1rem' }}>
          <Button
            colorScheme='red'
            onClick={() => {
              apis?.on_manual_exchange(id);
              // console.log("兑换");
            }}
            ml={3}
          >
            <FormattedMessage id='text.Exchange' />
          </Button>
        </Flex>
      </Flex>
    );
  };

  const GTag = ({ profit }: any) => {
    // 如果未打开
    if (!profit.can_profit_guarantee) {
      return (
        <>
          <Text pb={1}>
            <Image w='20px' src={Notactivated} />
          </Text>
          <Tag color='#8f8f8f82' background='none' fontSize='0.8rem'>
            <Text
              border='1px dashed'
              pr='5px'
              pl='5px'
              borderRadius='var(--cds-radii-md)'
            >
              <FormattedMessage id='text.NotActivated' />
            </Text>
          </Tag>
        </>
      );
    }
    // 如果不需要补
    if (profit.profit_guarantee_amount == 0)
      return (
        <>
          <Text pb={1}>
            <Image w='20px' src={Income} />
          </Text>
          <Tag background='none' fontSize='0.8rem'>
            {profit.actual_apy / profit.leverage < 0.1 ? (
              <Text
                color='#00bcd4'
                fontWeight='500'
                border='1px dashed'
                pr='5px'
                pl='5px'
                borderRadius='var(--cds-radii-md)'
              >
                <FormattedMessage id='text.Complete' />:{' '}
                {formatPercent((profit.actual_apy / profit.leverage) * 10)}
              </Text>
            ) : (
              <Text
                color='#098551'
                fontWeight='500'
                border='1px dashed'
                pr='5px'
                pl='5px'
                borderRadius='var(--cds-radii-md)'
              >
                <FormattedMessage id='text.Complete' />: 100%
              </Text>
            )}
          </Tag>
        </>
      );

    if (!profit.done_profit_guarantee) {
      // 如果需要补，但loyalty不够
      return (
        <Flex
          flexDir='column'
          justifyContent='center'
          sx={{ cursor: 'pointer' }}
          onClick={() => {
            profitResId = profit?.id;
            setModalInfo({
              title: <FormattedMessage id='text.RestoredOrder' />,
              ch: (
                <MyNotEnoughLoyalty
                  id={profit?.id}
                  methods={methods}
                  onChange={() => {
                    api.onShow();
                    api?.onGetTableList();
                    onClose();
                  }}
                />
              ),
            });
            onOpen();
          }}
        >
          <VStack>
            <Text as='del' color='#cf202f' pb={1}>
              <Flex fontWeight='500' className='bounce-in-fwd'>
                <Image w='25px' pr='5px' src={NotProtected} />
                {formatMoney(profit.profit_guarantee_amount, '')}
              </Flex>
            </Text>
            <Tag color='#cf202f' background='none' fontSize='0.8rem'>
              <Text
                border='1px dashed'
                pr='5px'
                pl='5px'
                borderRadius='var(--cds-radii-md)'
              >
                <FormattedMessage id='text.NotEnoughLoyalty' />
              </Text>
            </Tag>
          </VStack>
        </Flex>
      );
    } else {
      // 如果需要补，loyalty足够
      return (
        <>
          <Text as='div' pb={1} sx={{ textAlign: 'center' }}>
            <Flex>
              <Image w='25px' pr='5px' src={Protected} />
              {formatMoney(profit.profit_guarantee_amount, '')}
            </Flex>
          </Text>
          <Tag color={'blue.60'} background='none' fontSize='0.8rem'>
            <Text
              border='1px dashed'
              pr='5px'
              pl='5px'
              borderRadius='var(--cds-radii-md)'
            >
              <FormattedMessage id='text.ProfitGuarantee' />
            </Text>
          </Tag>
        </>
      );
    }
  };
  const RTag = ({ profit }: any) => {
    // 如果未打开
    if (!profit.can_profit_guarantee) {
      return (
        <>
          <Text>
            <Flex>
              <Image w='25px' pr='5px' src={Notactivated} />
              {profit.round}
            </Flex>
          </Text>
        </>
      );
    }
    // 如果不需要补
    if (profit.profit_guarantee_amount == 0)
      return (
        <>
          <Flex>
            <Image w='25px' pr='5px' src={Income} />
            {profit.round}
          </Flex>
        </>
      );

    if (!profit.done_profit_guarantee) {
      // 如果需要补，但loyalty不够
      return (
        <>
          <Flex color='#cf202f' fontWeight='500'>
            <Image w='25px' pr='5px' src={NotProtected} />
            {profit.round}
          </Flex>
        </>
      );
    } else {
      // 如果需要补，loyalty足够
      return (
        <>
          <Flex color={'blue.60'}>
            <Image w='25px' pr='5px' src={Protected} />
            {profit.round}
          </Flex>
        </>
      );
    }
  };

  return (
    <>
      <TableContainer w='100%' sx={{ overflowX: 'scroll' }}>
        {!getData?.data || getData?.data?.length == 0 ? (
          <MyNoActivity />
        ) : (
          <Table variant='simple' size='md' w='100%'>
            <Thead h='50px' w='100%'>
              <Tr>
                <Th sx={styles.Ftd}>
                  <FormattedMessage id='text.Datetime' />
                </Th>
                <Th>
                  <FormattedMessage id='text.Round' />
                </Th>
                <Th>
                  <FormattedMessage id='text.Staking' />
                </Th>
                <Th>
                  <FormattedMessage id='text.Leverage' />
                </Th>
                <Th>
                  <FormattedMessage id='text.Duration' />
                </Th>
                <Th>
                  <FormattedMessage id='text.LoanAmount' />
                </Th>
                <Th>
                  <FormattedMessage id='text.LoanCharges' />
                </Th>
                <Th>
                  <FormattedMessage id='text.AllEarnings' />
                </Th>
                <Th>
                  <FormattedMessage id='text.CurrentAPY' />
                </Th>
                <Th>
                  <FormattedMessage id='text.LoanFee' />
                </Th>
                <Th>
                  <FormattedMessage id='text.ActualIncome' />
                </Th>
                <Th>
                  <FormattedMessage id='text.LoyaltyFee' />
                </Th>
                <Th>
                  <FormattedMessage id='text.Loyalty' />
                </Th>
                <Th>
                  <FormattedMessage id='text.Guaranteed' />
                </Th>
                <Th textAlign='center'>
                  <FormattedMessage id='text.Status' />
                </Th>
              </Tr>
            </Thead>
            <Tbody w='100%'>
              {getData?.data?.map((profit: any, index: number) => {
                return (
                  <Tr key={'tr_' + index}>
                    <Td sx={styles.Ftd}>{profit.datetime}</Td>
                    <Td>
                      <HStack justifyContent='center'>
                        <RTag profit={profit} />
                      </HStack>
                    </Td>
                    <Td>
                      <Flex>
                        <Image w='25px' pr='5px' src={MoneyImg} />
                        {formatMoney(profit.staking, '')}
                      </Flex>
                    </Td>
                    <Td textAlign='center'>{profit.leverage}x</Td>
                    <Td textAlign='center'>
                      {profit.duration} <FormattedMessage id='text.Days' />
                    </Td>
                    <Td>
                      <Flex>
                        <Image w='25px' pr='5px' src={MoneyImg} />
                        {formatMoney(profit.loan_amount, '')}
                      </Flex>
                    </Td>
                    <Td textAlign='center'>
                      {formatPercent(profit.loan_charges)}
                    </Td>
                    <Td>
                      {profit?.exchange_status == 'Stopped' ? (
                        <Flex>
                          <Button
                            textDecoration='underline'
                            colorScheme='red'
                            variant='link'
                            fontSize='15px'
                            fontWeight='500'
                            onClick={() => {
                              setModalInfo({
                                w: '400px',
                                title: '',
                                ch: ManualExchange(profit?.id),
                              });
                              onOpen();
                            }}
                          >
                            <FormattedMessage id='text.ManualExchange' />
                          </Button>
                        </Flex>
                      ) : (
                        <Flex>
                          <Image w='25px' h='25px' pr='5px' src={MoneyImg} />
                          <Button
                            textDecoration='underline'
                            colorScheme='messenger'
                            variant='link'
                            fontSize='15px'
                            fontWeight='500'
                            onClick={() => {
                              setModalInfo({
                                w: '1360px',
                                title: '',
                                ch: (
                                  <DetailTable
                                    tdata={JSON.parse(profit.funds_detail_json)}
                                  />
                                ),
                              });
                              onOpen();
                            }}
                          >
                            {formatMoney(profit.income, '')}
                          </Button>
                        </Flex>
                      )}
                    </Td>
                    <Td>
                      {formatPercent(profit.actual_apy / profit.leverage)} *
                      {profit.leverage}x
                    </Td>
                    <Td>
                      <Flex>
                        <Image w='25px' pr='5px' src={Fee} />
                        {formatMoney(profit.loan_charges_fee, '')}
                      </Flex>
                    </Td>
                    <Td>
                      <Flex>
                        <Image w='25px' pr='5px' src={MoneyImg} />
                        {profit.actual_income > 0 ? (
                          <Text color='#098551' fontWeight='500'>
                            {formatMoney(profit.actual_income, '')}
                          </Text>
                        ) : (
                          <Text
                            as='del'
                            color='#cf202f'
                            fontWeight='500'
                            className='bounce-in-fwd'
                          >
                            {formatMoney(profit.actual_income, '')}
                          </Text>
                        )}
                      </Flex>
                    </Td>
                    <Td>
                      <Flex>
                        <Image w='25px' pr='5px' src={Fee} />
                        {formatMoney(profit.loyalty_fee, '')}
                      </Flex>
                    </Td>
                    <Td>
                      <Flex>
                        <Image w='25px' pr='5px' src={LoyaltyImg} />
                        {formatMoney(profit.loyalty_amount, '')}
                      </Flex>
                    </Td>
                    <Td textAlign='center'>
                      {formatPercent(profit.minimum_guarantee_apy)}
                    </Td>
                    <Td pt={1} pb={0}>
                      <HStack flexDirection='column'>
                        <GTag profit={profit} />
                      </HStack>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        )}
      </TableContainer>
      <MyPagination {...pagination} />
      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent sx={{ width: '100%', maxWidth: modalInfo?.w }}>
          <ModalHeader>{modalInfo?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalInfo?.ch}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
