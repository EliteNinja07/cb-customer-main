import {
  Avatar,
  Flex,
  Text,
  Image,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  Tag,
  Icon,
  Tooltip,
  Heading,
  SimpleGrid,
  HStack,
  Button,
} from '@chakra-ui/react';
import {
  formatAddress,
  formatMoney,
  formatVip,
  getAvatar,
  useMyState,
  useMyToast,
} from '@/common';
import {
  AddIcon,
  CheckCircleIcon,
  CopyIcon,
  EmailIcon,
} from '@chakra-ui/icons';
import { FormattedMessage, useIntl } from 'react-intl';
import Loyalty from '../../assets/images/Loyalty.svg';

import MoneyImg from '@/assets/images/usdc.svg';
import { getFollowStatus } from '../../constants';
import { useEffect, useState } from 'react';
import { onFollow, onUnFollow } from '@api/friends';
import { showUsers } from '@api/user';
import { IUserPopoverDetail } from '@/typings';
import { useCopyToClipboard } from 'react-use';

const styles = {
  Divider: {
    borderLeft: '1px solid #8d8d8d30',
    borderRight: '1px solid #8d8d8d30',
  },
  Online: {
    position: 'relative',
  },
  OnlineDot: {
    width: '8px',
    height: '8px',
    borderRadius: '100%',
    backgroundColor: '#52c41a',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
};

const UserPopover: any = (props: any) => {
  const intl = useIntl();
  const followStatus: any = getFollowStatus(intl);
  const [isLoading, setIsLoading] = useState(false);
  const { showRes, showSuccess } = useMyToast();
  const [userDetail, setUserDetail] = useState<IUserPopoverDetail>();
  const { methods, currentId, visible } = props;
  const { snap } = useMyState();
  const [copyState, copy] = useCopyToClipboard();
  const refreshUserDetail = () =>
    showUsers(currentId).then((res) => setUserDetail(res.data));

  useEffect(() => {
    visible && refreshUserDetail();
    if (!visible) copyState.value = undefined;
  }, [visible, currentId]);

  if (!visible || !userDetail) return null;
  return (
    <PopoverContent>
      <PopoverArrow />
      <PopoverBody>
        <Flex p={2}>
          <Flex sx={styles.Online}>
            <Avatar
              size='md'
              name={userDetail?.nickname || '-'}
              src={getAvatar(userDetail?.avatar)}
            />
            {userDetail?.online_status ? (
              <Flex sx={styles.OnlineDot}></Flex>
            ) : (
              ''
            )}
          </Flex>
          <Flex flexDir='column' pl='10px' isTruncated>
            <Text
              as='b'
              color='var(--cds-colors-blue-60)'
              fontSize='1.2rem'
              lineHeight='1.5rem'
              isTruncated
            >
              {userDetail?.nickname || '-'}
            </Text>
            <Flex>
              <Tag
                variant='solid'
                borderRadius='full'
                colorScheme='messenger'
                size='sm'
              >
                {formatVip(userDetail?.vips_id)}
              </Tag>
            </Flex>
          </Flex>
        </Flex>
        <Flex alignItems='center' py={1} px={2}>
          {copyState.value ? (
            <Icon as={CheckCircleIcon}></Icon>
          ) : (
            <Icon
              as={CopyIcon}
              onClick={() => {
                if (snap.session.user.vips_id === 1) return;
                copy(userDetail?.address);
                showSuccess({ title: 'copied' });
              }}
            />
          )}
          <Tooltip label={formatAddress(userDetail?.address)}>
            <Heading
              mx={2}
              as='b'
              fontSize='1rem'
              fontWeight='var(--cds-fontWeights-medium)'
              noOfLines={1}
            >
              {formatAddress(userDetail?.address)}
            </Heading>
          </Tooltip>
        </Flex>
        <SimpleGrid py={2} columns={2} spacing={1}>
          <Flex flexDir='column' textAlign='center'>
            <Text
              fontSize='0.9rem'
              color='#5b616e'
              display='flex'
              justifyContent='center'
            >
              <Image w='20px' pr='5px' src={MoneyImg} />
              <FormattedMessage id='text.Income' />
            </Text>
            <Tooltip
              label={formatMoney(parseFloat(userDetail?.total_income), '')}
            >
              <Heading
                w='95%'
                fontSize='0.9rem'
                color='var(--cds-colors-chakra-body-text)'
                noOfLines={1}
              >
                {formatMoney(parseFloat(userDetail?.total_income), '')}
              </Heading>
            </Tooltip>
          </Flex>
          <Flex flexDir='column' textAlign='center' sx={styles.Divider}>
            <Text
              fontSize='0.9rem'
              color='#5b616e'
              display='flex'
              justifyContent='center'
            >
              <Image w='20px' pr='5px' src={Loyalty} />
              <FormattedMessage id='text.Loyalty' />
            </Text>
            <Tooltip
              label={formatMoney(
                parseFloat(userDetail?.total_loyalty_value),
                '',
              )}
            >
              <Heading
                w='87%'
                margin='0 auto'
                fontSize='0.9rem'
                as='b'
                noOfLines={1}
              >
                {formatMoney(parseFloat(userDetail?.total_loyalty_value), '')}
              </Heading>
            </Tooltip>
          </Flex>
          {/* <Flex flexDir="column" textAlign="center">
            <Text
              fontSize="0.9rem"
              color="#5b616e"
              display="flex"
              justifyContent="center"
            >
              <Image w="20px" pr="5px" src={Fans} />
              Fans
            </Text>
            <Text
              fontSize="0.9rem"
              fontWeight="var(--cds-fontWeights-medium)"
            >
              Show VIP3 ↑
            </Text>
          </Flex> */}
        </SimpleGrid>
        <HStack
          alignItems='center'
          justifyContent='center'
          spacing='24px'
          pb={3}
          pt={2}
        >
          <Button
            px='2rem'
            size='sm'
            isLoading={isLoading}
            colorScheme='messenger'
            isDisabled={!userDetail?.follow_status}
            leftIcon={<AddIcon />}
            onClick={() => {
              setIsLoading(true);
              if (userDetail?.follow_status == 'No') {
                onFollow({ users_id: userDetail.id })
                  .then(refreshUserDetail)
                  .catch((err) => showRes(err))
                  .finally(() => setIsLoading(false));
              } else {
                onUnFollow({ users_id: userDetail.id })
                  .then(refreshUserDetail)
                  .catch((err) => showRes(err))
                  .finally(() => setIsLoading(false));
              }
            }}
          >
            {
              followStatus[
                userDetail?.follow_status ? userDetail?.follow_status : 'No'
              ]
            }
          </Button>
          <Button
            px='2.5rem'
            size='sm'
            variant='outline'
            colorScheme='messenger'
            disabled
            isDisabled={userDetail?.follow_status != 'Both'}
            leftIcon={<EmailIcon />}
            onClick={() => {
              methods?.onSendMessage(userDetail);
            }}
          >
            <FormattedMessage id='text.PM' />
          </Button>
        </HStack>
      </PopoverBody>
    </PopoverContent>
  );
};

export default UserPopover;
