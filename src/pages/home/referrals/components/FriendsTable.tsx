import {
  Avatar,
  Flex,
  Image,
  Popover,
  PopoverTrigger,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';
import MoneyImg from '../../../../assets/images/usdc.svg';
import {
  MyIcon,
  formatAddress,
  formatMoney,
  getAvatar,
  getDayYmHm,
  getLevelInfo,
  useMyState,
} from '../../../../common';
import UserPopover from '../../../../components/UserPopover';
import { showUsers } from '../../../../api/user';
import { useState } from 'react';
let styles = {
  Ftd: {
    paddingLeft: 0,
  },
  Ltd: {
    paddingRight: 0,
  },
  AvatarInfo: {
    position: 'relative',
  },
  vipInfo: {
    position: 'absolute',
    bottom: '-0.6rem',
    left: 0,
    right: 0,
    backgroundColor: '#57b4fc',
    color: '#fff',
    fontSize: '12px',
    lineHeight: '18px',
    borderRadius: '100px',
    textAlign: 'center',
  },
};
export default ({ tdata, lang, api, methods }: any) => {
  const { snap } = useMyState();
  const [currentId, setCurrentId] = useState<number>();

  return (
    <TableContainer pt='3px' w='100%'>
      <Table variant='simple' size='md' w='100%'>
        <Thead h='50px' w='100%'>
          <Tr>
            <Th>
              <FormattedMessage id='text.Nickname' />
              {lang?.tableTd?.td1}
            </Th>
            <Th>
              <FormattedMessage id='text.Level' />
              {lang?.tableTd?.td2}
            </Th>
            <Th>
              {lang?.tableTd?.td3}
              <FormattedMessage id='text.ReferralCount' />
            </Th>
            <Th>
              {lang?.tableTd?.td4}
              <FormattedMessage id='text.StakingAmount' />
            </Th>
            <Th>
              {lang?.tableTd?.td5}
              <FormattedMessage id='text.TotalBonus' />
            </Th>
            <Th>
              {lang?.tableTd?.td6}
              <FormattedMessage id='text.Registered' />
            </Th>
            <Th>
              {lang?.tableTd?.td7}
              <FormattedMessage id='text.StakingTime' />
            </Th>
            {/* <Th>{lang?.tableTd?.td7}</Th> */}
          </Tr>
        </Thead>
        <Tbody w='100%'>
          {tdata?.map((res: any, index: number) => {
            return (
              <Tr key={index}>
                <Td w='250px'>
                  <Popover placement='top' onOpen={() => setCurrentId(res.id)}>
                    <PopoverTrigger>
                      <Flex alignItems='center' pb={2}>
                        <Flex sx={styles.AvatarInfo}>
                          <Avatar
                            src={getAvatar(res.avatar)}
                            w='40px'
                            h='40px'
                          />
                          <Flex sx={styles.vipInfo} w='full'>
                            <Text w='full'>VIP{res.vips_id - 1}</Text>
                          </Flex>
                        </Flex>
                        <Flex flexDir='column' pl={2}>
                          <Text fontWeight='410' lineHeight='1rem'>
                            {res.nickname}
                          </Text>
                          <Flex fontSize='13px' alignItems='center'>
                            <MyIcon
                              icon=''
                              fontSize='15px'
                              w='auto'
                              h='20px'
                            />
                            <Text pl={2}>{formatAddress(res.address)}</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </PopoverTrigger>
                    <UserPopover
                      visible={currentId === res.id}
                      currentId={currentId}
                      methods={methods}
                    />
                  </Popover>
                </Td>
                <Td>{getLevelInfo(snap, res)}</Td>
                <Td>{res.referral_count}</Td>
                <Td>
                  <Flex>
                    <Image w='25px' pr='5px' src={MoneyImg} />
                    {formatMoney(res.total_staking_amount, '')}
                  </Flex>
                </Td>
                <Td>
                  <Flex>
                    <Image w='25px' pr='5px' src={MoneyImg} />
                    {formatMoney(res.total_balance, '')}
                  </Flex>
                </Td>
                <Td>{getDayYmHm(res.created_at)}</Td>
                <Td>{getDayYmHm(res.first_staking_time)}</Td>
                {/* <Td>
                  <Flex
                    alignItems="center"
                    color={res.status > 1 ? "#0052ff" : "#89909e"}
                  >
                    <Icon as={CheckCircleIcon} />
                    <Text pl={1} fontSize="14px">
                      {lang?.NotVerified[res.status - 1]}
                    </Text>
                  </Flex>
                </Td> */}
              </Tr>
            );
          })}

          {/* <Tr>
            <Td w="250px">
              <Flex alignItems="center" pb={2}>
                <Flex sx={styles.AvatarInfo}>
                  <Avatar src="/img/coins/eth.png" w="40px" h="40px" />
                  <Flex sx={styles.vipInfo} w="full">
                    <Text w="full">VIP1</Text>
                  </Flex>
                </Flex>
                <Flex flexDir="column" pl={2}>
                  <Text fontWeight="410" lineHeight="1rem">
                    Tether
                  </Text>
                  <Flex fontSize="13px" alignItems="center">
                    <MyIcon icon="" fontSize="15px" w="auto" h="20px" />
                    <Text pl={2}>0x60222...1C41</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Td>
            <Td>closed</Td>
            <Td>closed</Td>
            <Td>3232</Td>
            <Td>20/30</Td>
            <Td>3232</Td>
            <Td>
              <Flex alignItems="center" color="#0052ff">
                <Icon as={CheckCircleIcon} />
                <Text pl={1} fontSize="14px">
                  {lang?.NotVerified}
                </Text>
              </Flex>
            </Td>
          </Tr> */}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
