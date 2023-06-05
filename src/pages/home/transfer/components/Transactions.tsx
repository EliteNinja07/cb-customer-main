import { Button, Divider, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  MyCard,
  MyIcon,
  TextCardHeader,
  formatAddress,
  formatCoins,
  getDateAll,
  useMyState,
} from '../../../../common';
import MyNoActivity from '../../../../components/NoActivity';
import EnclosedTab from './EnclosedTab';

const styles = {
  withdrawBtn: {
    width: '35px',
    height: '35px',
    borderRadius: '100%',
    backgroundColor: '#f5f5f5',
    _dark: {
      background: 'none',
      border: '1px solid #ffffff29',
      color: '#5b616e',
    },
  },
};

export default ({ data, onCancel }: any) => {
  const { snap } = useMyState();
  const [items, setItems] = useState([]);
  const [cancelLoading, setCancelLoading] = useState(false);
  useEffect(() => {
    setItems(data?.Withdrawal);
    console.log(data, 'datas');
  }, [data]);

  return (
    <MyCard flexDir='column'>
      <TextCardHeader>
        <FormattedMessage id='text.Transactions' />
      </TextCardHeader>
      <Divider />
      <Flex px={6} py={5} flexDir='column'>
        <EnclosedTab
          onChange={(e: string) => {
            console.log(e, 'eee');
            setItems(data?.[e] ?? []);
          }}
        />
        {items?.length > 0 ? (
          items?.map((res: any, index: number) => {
            return (
              <Flex key={`wits_${index}`} alignItems='center' mt={6}>
                <Flex flexDir='column' textAlign='center'>
                  <Text w='full' lineHeight='20px'>
                    {getDateAll(res?.created_at, 'month')}
                  </Text>
                  <Text w='full'> {getDateAll(res?.created_at, 'day')}</Text>
                </Flex>
                <Flex
                  sx={styles.withdrawBtn}
                  alignItems='center'
                  justifyContent='center'
                  mx={4}
                >
                  <MyIcon icon='' fontSize='12px' />
                </Flex>
                <Flex flex='1' flexDir='column'>
                  <Text
                    fontWeight='var(--cds-fontWeights-medium)'
                    lineHeight='20px'
                  >
                    <FormattedMessage id={`text.` + res?.pending_status} />{' '}
                    {res?.symbol}
                  </Text>
                  <Text color='#89909e'>
                    To:
                    {formatAddress(
                      snap.storage.address ? snap.storage.address : ''
                    )}
                  </Text>
                </Flex>
                <Flex
                  w={'md'}
                  alignItems={'center'}
                  justifyContent={'flex-start'}
                >
                  <FormattedMessage id={`text.` + res?.pending_status} />
                  {res.pending_status === 'APPROVE' && (
                    <Button
                      borderRadius={'full'}
                      size={'xs'}
                      isLoading={cancelLoading}
                      ml={'1.5'}
                      onClick={() => {
                        setCancelLoading(true);
                        onCancel(res.id).finally(() => {
                          setCancelLoading(false);
                        });
                      }}
                    >
                      <FormattedMessage id='text.Cancel' />
                    </Button>
                  )}
                </Flex>
                <Flex textAlign='right' flexDir='column' w={{ base: "100%", sm: "100%", md: "200px", lg: "200px" }}>
                  <Text
                    w='full'
                    lineHeight='20px'
                    fontWeight='var(--cds-fontWeights-medium)'
                  ></Text>
                  <Flex flexDir='column'>
                    <Text w='full' sx={{ fontSize: '1rem' }}>
                      +{formatCoins(res?.balance, 'USDC')}
                    </Text>
                    <Text w='full' color='#89909e'>
                      (FEE:{formatCoins(res?.pending_fee, 'USDC')})
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            );
          })
        ) : (
          <MyNoActivity label={<FormattedMessage id='text.NoActivityYet' />} />
        )}
      </Flex>
    </MyCard>
  );
};
