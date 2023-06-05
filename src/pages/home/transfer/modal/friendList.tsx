import {
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  Avatar,
  Button,
  Flex,
  Highlight,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { formatAddress, getAvatar, useListPage } from '../../../../common';
import { MyPagination } from '../../../../components/MyPagination';
import NoActivity from '../../../../components/NoActivity';

const styles = {
  friend_list_c: {
    alignItems: 'center',
    borderBottom: '1px solid #e2e8f0',
    padding: '15px 0',
    justifyContent: 'space-between',
  },
  FriendName: {
    fontSize: '1rem',
    fontWeight: '500',
  },
};
export default ({ onClose, tdata, api }: any) => {
  const [friendList, setFriendList] = useState<any>([]);
  const { getData, getList, pagination, params } = useListPage({
    baseUri: 'friends/my_friends',
  });

  useEffect(() => {
    console.log(tdata, 'tdata');

    setFriendList(getData?.data);
  }, [getData?.data]);

  return (
    <AlertDialogContent>
      <AlertDialogCloseButton />
      <AlertDialogHeader fontSize='lg' fontWeight='bold'>
        <FormattedMessage id='friend.modal.title' />
      </AlertDialogHeader>
      <AlertDialogBody>
        <Text sx={{ fontSize: '1rem', pt: 4, pb: 3 }}>
          <Highlight query='--' styles={{ fontWeight: 'bold' }}>
            {tdata?.message || '--'}
          </Highlight>
        </Text>
        <Flex flexDir='column' w='full'>
          {friendList?.length > 0 ? (
            <Flex flexDir='column' sx={{ minHeight: '200px' }}>
              {friendList?.map((res: any, index: number) => {
                return (
                  <Flex sx={styles.friend_list_c} key={`fried_${index}`}>
                    <Flex>
                      <Avatar
                        size='sm'
                        name={res?.to_user?.nickname}
                        src={getAvatar(res?.to_user?.avatar)}
                      />
                    </Flex>
                    <Flex
                      sx={{ width: '70%', padding: '0 10px' }}
                      flexDir='column'
                    >
                      <Text sx={styles.FriendName} w='full'>
                        {res?.to_user?.nickname || (
                          <FormattedMessage id='friend.modal.nickname' />
                        )}
                      </Text>
                      <Text sx={{ fontSize: '0.8rem', color: '#999' }}>
                        {formatAddress(res?.to_user?.address)}
                      </Text>
                    </Flex>
                    <Flex sx={{ padding: '0 10px' }}>
                      <Button
                        colorScheme='messenger'
                        size='sm'
                        isDisabled={
                          res?.to_user?.today_had_help_count >
                          res?.to_user?.vip.max_help_withdraw_count
                        }
                        onClick={() => {
                          api?.onSendInvite(
                            {
                              assets_id: tdata?.assets_id,
                              to_users_id: res?.to_users_id,
                            },
                            (e: any) => {
                              if (e) {
                                res.isDisabled = true;
                                setFriendList(
                                  JSON.parse(JSON.stringify(friendList)),
                                );
                              }
                            },
                          );
                        }}
                      >
                        <FormattedMessage id='friend.modal.send.btn' />
                      </Button>
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>
          ) : (
            <NoActivity />
          )}
          <MyPagination {...pagination} />
        </Flex>
      </AlertDialogBody>
    </AlertDialogContent>
  );
};
