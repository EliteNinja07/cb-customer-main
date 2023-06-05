import { LockIcon, UnlockIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Flex,
  Icon,
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
  formatAddress,
  formatMoney,
  formatPercent,
  formatVip,
  getAvatar,
  getDayYmHm,
  getLevelInfo,
  MyIcon,
  request,
  useMyState,
  useMyToast,
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
export default ({ tdata, onLockChange, api, methods }: any) => {
  const { snap } = useMyState();
  const { showRes } = useMyToast();
  const [currentId, setCurrentId] = useState<number>();

  const onLockSubmit = (id: number) => {
    request('bonus/unlock', { data: { id: id } })
      .then((res: any) => {
        showRes(res);
        if (res.code == 0) {
          onLockChange(1);
        }
      })
      .catch(showRes);
  };

  return (
    <TableContainer pt='3px' w='100%'>
      <Table variant='simple' size='md' w='100%'>
        <Thead h='50px' w='100%'>
          <Tr>
            <Th>
              <FormattedMessage id='text.Nickname' />
            </Th>
            <Th>
              <FormattedMessage id='text.Level' />
            </Th>
            <Th>
              <FormattedMessage id='text.Type' />
            </Th>
            <Th>
              <FormattedMessage id='text.FriendBonus' />
            </Th>
            <Th>
              <FormattedMessage id='text.BonusRate' />
            </Th>
            <Th>
              <FormattedMessage id='text.Bonus' />
            </Th>
            <Th>
              <FormattedMessage id='text.Date' />
            </Th>
            <Th>
              <FormattedMessage id='text.Status' />
            </Th>
          </Tr>
        </Thead>
        <Tbody w='100%'>
          {tdata?.map((res: any, index: number) => {
            return (
              <Tr key={index}>
                <Td w='250px'>
                  {!res.from ? (
                    <>-</>
                  ) : (
                    <Popover
                      placement='top'
                      onOpen={() => setCurrentId(res.from.id)}
                    >
                      <PopoverTrigger>
                        <Flex alignItems='center' pb={2}>
                          <Flex sx={styles.AvatarInfo}>
                            <Avatar
                              src={getAvatar(res?.from?.avatar)}
                              w='40px'
                              h='40px'
                            />
                            <Flex sx={styles.vipInfo} w='full'>
                              <Text w='full'>
                                {formatVip(res?.from?.vips_id)}
                              </Text>
                            </Flex>
                          </Flex>
                          <Flex flexDir='column' pl={2}>
                            <Text fontWeight='410' lineHeight='1rem'>
                              {res?.from?.nickname}
                            </Text>
                            <Flex fontSize='13px' alignItems='center'>
                              <MyIcon
                                icon=''
                                fontSize='15px'
                                w='auto'
                                h='20px'
                              />
                              <Text pl={2}>
                                {formatAddress(res?.from?.address)}
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </PopoverTrigger>
                      <UserPopover
                        visible={currentId === res.from.id}
                        currentId={currentId}
                        methods={methods}
                      />
                    </Popover>
                  )}
                </Td>
                <Td>{!res.from ? <>-</> : getLevelInfo(snap, res?.from)}</Td>
                <Td>
                  <FormattedMessage id={`text.` + res?.type} />
                </Td>
                <Td>
                  <Flex w='full'>
                    <Image src={MoneyImg} boxSize='20px' mr={1} />
                    {formatMoney(res.friend_bonus, '')}
                  </Flex>
                </Td>
                <Td>{formatPercent(res.bonus_rate)}</Td>
                <Td>
                  <Flex w='full'>
                    <Image src={MoneyImg} boxSize='20px' mr={1} />
                    {formatMoney(res.bonus, '')}
                  </Flex>
                </Td>
                <Td>{getDayYmHm(res.created_at)}</Td>
                <Td>
                  <Flex
                    alignItems='center'
                    sx={{ cursor: 'pointer' }}
                    color={res.status == 2 ? '#0052ff' : '#89909e'}
                    onClick={() => {
                      if (res.status != 'Success') {
                        onLockSubmit(res.id);
                      }
                    }}
                  >
                    <Icon
                      as={res.status == 'Success' ? UnlockIcon : LockIcon}
                    />
                    <Text pl={1} fontSize='14px'>
                      {res.status == 'Success' ? (
                        <FormattedMessage id='text.Unlocked' />
                      ) : (
                        <FormattedMessage id='text.Locked' />
                      )}
                    </Text>
                  </Flex>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
