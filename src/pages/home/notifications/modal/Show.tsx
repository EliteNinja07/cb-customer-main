import { AddIcon, CheckCircleIcon, EmailIcon } from '@chakra-ui/icons';
import { Avatar, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { useSetState } from 'react-use';
import Loyalty from '../../../../assets/images/Loyalty.svg';
import MyVericon from '../../../../assets/images/VerifyIconSvg.svg';
import MyWithdrawal from '../../../../assets/images/pagethreesvg10.svg';
import MyWithdrawalSuccess from '../../../../assets/images/pagethreesvg24.svg';
import MyPersonalinfoicon from '../../../../assets/images/personalinfoicon.svg';

import { onFollow } from '@api/friends';
import { showUsers } from '@api/user';
import { getFollowStatus } from '@constants/index';
import {
  formatAddress,
  formatCoins,
  formatDay,
  formatMoney,
  getAvatar,
} from '../../../../common';
import IconAirdrop from '../icon/airdrop';
import IconCheckup from '../icon/checkup';
import IconFriend from '../icon/friend';
import IconGift from '../icon/gift';
import IconIncome from '../icon/income';
import IconMessage from '../icon/message';
import IconResume from '../icon/resume';

const styles = {
  titles: {
    fontSize: '1.2rem',
    fontWeight: '450',
  },
  content: {
    fontSize: '1rem',
    padding: '1rem 0',
  },
  times: {
    justifyContent: 'space-between',
    padding: '10px 0',
    alignItems: 'center',
  },
  itemList: {
    height: '50px',
    lineHeight: '50px',
    justifyContent: 'space-between',
    fontSize: '1.1rem',
    borderTop: '1px solid #98989829',
    _dark: {
      borderTop: '1px solid #ffffff29',
    },
    paddingInline: '15px',
  },
};

export default ({ params, methods, api, onChange }: any) => {
  const [content, setContent] = useSetState({
    icon: undefined,
    title: undefined,
    subTitle: undefined,
    linkDesc: undefined,
    link: '#',
    article: undefined,
    status: (
      <Text color='green'>
        <FormattedMessage id='text.COMPELETED' />
      </Text>
    ),
  } as any);
  const intl = useIntl();
  const followStatus: any = getFollowStatus(intl);
  const [follower, setFollower] = useSetState<any>();
  useEffect(() => {
    if (params.type === 'AddFriend') {
      const user = params?.fromUser;
      user &&
        showUsers(user.id).then((res) => {
          console.log('follow', res.data);
          setFollower(res.data);
        });
    }
  }, [params?.fromUser?.id]);

  useEffect(() => {
    if (params.type !== 'AddFriend') api?.show({ id: params?.id });

    let data = JSON.parse(params.content);

    switch (params.type) {
      case 'ProfileVerifyFailed':
        setContent({
          icon: <Image src={MyPersonalinfoicon} boxSize='80px' />,
          title: <FormattedMessage id='text.FAILED' />,
          subTitle: (
            <FormattedMessage
              id={`notify.ProfileVerifyFailed.error.` + data.reason}
            />
          ),
          link: '/home/settings/info',
          status: (
            <Text color='red'>
              <FormattedMessage id='text.FAILED' />
            </Text>
          ),
        });
        break;
      case 'WithdrawalFailed':
        setContent({
          icon: <Image src={MyWithdrawal} boxSize='80px' />,
          title: <FormattedMessage id='text.FAILED' />,
          subTitle: <FormattedMessage id={`notify.WithdrawalFailedContent`} />,
          link: '/home/settings/info',
          linkDesc: <FormattedMessage id='text.WithdrawalFailed' />,
          status: (
            <Text color='red'>
              <FormattedMessage id='text.FAILED' />
            </Text>
          ),
        });
        break;
      case 'IdentityVerifyFailed':
        setContent({
          icon: <Image src={MyVericon} boxSize='80px' />,
          title: <FormattedMessage id='text.FAILED' />,
          subTitle: (
            <FormattedMessage
              id={`notify.ProfileVerifyFailed.error.` + data.reason}
            />
          ),
          link: '/home/settings/info',
          status: (
            <Text color='red'>
              <FormattedMessage id='text.FAILED' />
            </Text>
          ),
        });
        break;
      case 'VipUpgrade':
        setContent({
          icon: (
            <Image
              src={'/img/vips/vip' + (data.vip.id - 1) + '.svg'}
              w='80px'
              h='80px'
            />
          ),
          title: <FormattedMessage id='text.Congratulations' />,
          subTitle: (
            <>
              <FormattedMessage id='notify.VipUpgrade.desc' />
              {data.vip.id - 1}
            </>
          ),
          link: '/home/vip',
        });
        break;
      case 'WithdrawalInvite':
        setContent({
          icon: <Image src={MyWithdrawalSuccess} boxSize='80px' />,
          title: <FormattedMessage id='notify.WithdrawalInvite' />,
          subTitle: (
            <Flex flexDir='column' pt={7} pb={5}>
              <Flex
                sx={{
                  alignItems: 'center',
                  backgroundColor: '#eee',
                  padding: '0 1rem',
                  borderRadius: '10px',
                  _dark: {
                    backgroundColor: '#222',
                  },
                }}
              >
                <Flex>
                  <Avatar src={getAvatar(params?.fromUser?.avatar)} size='md' />
                </Flex>
                <Flex
                  flexDir='column'
                  sx={{ flex: 1, textAlign: 'left', padding: '15px 1rem' }}
                >
                  <Text
                    w='full'
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: '450',
                      lineHeight: '23px',
                    }}
                  >
                    {params?.fromUser?.nickname || (
                      <FormattedMessage id='friend.modal.nickname' />
                    )}
                  </Text>
                  <Text w='full'>
                    {formatAddress(params?.fromUser?.address)}
                  </Text>
                </Flex>
                <Flex flexDir='column' sx={{ textAlign: 'right' }}>
                  <Text
                    w='full'
                    sx={{
                      color: '#0052ff',
                      fontSize: '1rem',
                      fontWeight: '450',
                    }}
                  >{`+ ${formatMoney(data?.pending?.balance, '')} USDC`}</Text>
                  <Text
                    w='full'
                    sx={{
                      fontSize: '0.8rem',
                    }}
                  >{`≈ ${formatMoney(data?.pending?.usd, '')}`}</Text>
                </Flex>
              </Flex>
              <Flex pt={6} justifyContent='center'>
                <Button
                  onClick={() => {
                    onChange();
                  }}
                  mr={4}
                  colorScheme='messenger'
                >
                  <FormattedMessage id='text.Cancel' />
                </Button>
                <Button
                  onClick={() => {
                    api?.onApprove({ assets_id: data?.pending?.id });
                  }}
                  colorScheme='messenger'
                >
                  <FormattedMessage id='text.OK' />
                </Button>
              </Flex>
            </Flex>
          ),
          status: (
            <Text color='pink'>
              <FormattedMessage id='text.WAITING' />
            </Text>
          ),
        });
        break;
      case 'ProfileVerify':
        setContent({
          icon: <Image src={MyPersonalinfoicon} boxSize='80px' />,
          title: <FormattedMessage id='text.Congratulations' />,
          subTitle: <FormattedMessage id='notify.ProfileVerify' />,
          link: '/home/settings/info',
        });
        break;
      case 'PledgeMessage':
        setContent({
          icon: <IconIncome boxSize='80px' color='#0052ff' />,
          title: '+ ' + formatCoins(params?.usdc, 'USDC'),
          subTitle: formatMoney(params?.usd, '+≈ $'),
          linkDesc: (
            <FormattedMessage
              id='notify.PledgeMessage.desc'
              values={{ round: data.profit.round }}
            />
          ),
          link: '/home/aitrade',
        });
        break;
      case 'Staking':
        setContent({
          icon: <IconIncome boxSize='80px' color='#0052ff' />,
          title: '+ ' + formatCoins(params?.usdc, 'USDC'),
          subTitle: formatMoney(params?.usd, '+≈ $'),
          linkDesc: <FormattedMessage id='notify.Staking.desc' />,
          link: '/home/assets',
        });
        break;
      case 'Airdrop':
        setContent({
          icon: <IconAirdrop boxSize='80px' color='#0052ff' />,
          title: '+ ' + formatCoins(params?.usdc, 'AIRDROP COUPON'),
          subTitle: formatMoney(params?.usd, '+≈ $'),
          link: '/home/gift',
          linkDesc: <FormattedMessage id='notify.Airdrop' />,
        });
        break;
      case 'AddFriend':
        setContent({
          icon: <Icon as={IconFriend} boxSize='80px' color='#0052ff' />,
          title: <FormattedMessage id='text.Notice' />,
          // subTitle: <FormattedMessage id="notify.AddFriend" />,
          subTitle: (
            <Flex flexDir='column' pt={4} pb={2}>
              <Flex flexDir='column' pb={4}>
                <FormattedMessage id='notify.AddFriend' />
              </Flex>
              <Flex
                sx={{
                  alignItems: 'center',
                  backgroundColor: '#eee',
                  padding: '0 1rem',
                  borderRadius: '10px',
                  _dark: {
                    backgroundColor: '#222',
                  },
                }}
              >
                <Flex>
                  <Avatar src={getAvatar(params?.fromUser?.avatar)} size='md' />
                </Flex>
                <Flex
                  flexDir='column'
                  sx={{ flex: 1, textAlign: 'left', padding: '15px 1rem' }}
                >
                  <Text
                    w='full'
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: '450',
                      lineHeight: '23px',
                    }}
                  >
                    {params?.fromUser?.nickname || (
                      <FormattedMessage id='friend.modal.nickname' />
                    )}
                  </Text>
                  <Text w='full'>
                    {formatAddress(params?.fromUser?.address)}
                  </Text>
                </Flex>
                <Flex>
                  {follower.follow_status != 'Both' && (
                    <Button
                      size='sm'
                      mr={2}
                      onClick={() => {
                        onFollow({ users_id: data?.friend?.id }).then(() => {
                          showUsers(params?.fromUser.id).then((res) => {
                            setFollower(res.data);
                          });
                        });
                      }}
                      leftIcon={<AddIcon />}
                      colorScheme='messenger'
                    >
                      {followStatus[follower?.follow_status || 'No']}
                    </Button>
                  )}
                  <Button
                    size='sm'
                    isDisabled={follower.follow_status != 'Both'}
                    onClick={() => {
                      methods?.onSendMessage({ users_id: data?.friend?.id });
                    }}
                    leftIcon={<EmailIcon />}
                    colorScheme='messenger'
                  >
                    <FormattedMessage id='text.PM' />
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          ),
          link: '/home/referrals',
        });
        break;
      case 'FriendMessage':
        setContent({
          icon: <Icon as={IconMessage} boxSize='80px' color='#0052ff' />,
          title: <FormattedMessage id='send.message.content' />,
          subTitle: (
            <Flex flexDir='column' pt={4} pb={2}>
              <Flex
                sx={{
                  alignItems: 'center',
                  backgroundColor: '#eee',
                  padding: '0 1rem',
                  borderRadius: '10px',
                  _dark: {
                    backgroundColor: '#222',
                  },
                }}
              >
                <Flex>
                  <Avatar src={getAvatar(params?.fromUser?.avatar)} size='md' />
                </Flex>
                <Flex
                  flexDir='column'
                  sx={{ flex: 1, textAlign: 'left', padding: '15px 1rem' }}
                >
                  <Text
                    w='full'
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: '450',
                      lineHeight: '23px',
                    }}
                  >
                    {params?.fromUser?.nickname || (
                      <FormattedMessage id='friend.modal.nickname' />
                    )}
                  </Text>
                  <Text w='full'>
                    {formatAddress(params?.fromUser?.address)}
                  </Text>
                </Flex>
                <Flex>
                  <Button
                    size='xs'
                    colorScheme='pink'
                    onClick={() => {
                      methods?.onSendMessage({ users_id: data?.fromUser?.id });
                    }}
                  >
                    <FormattedMessage id='send.message.reply' />
                  </Button>
                </Flex>
              </Flex>
              <Flex flexDir='column' pt={4}>
                {data?.content}
              </Flex>
            </Flex>
          ),
        });
        break;
      case 'GiftReceived':
        setContent({
          icon: <IconGift boxSize='80px' color='#0052ff' />,
          title: '+ ' + formatCoins(params?.usdc, 'AIRDROP COUPON'),
          subTitle: formatMoney(params?.usd, '+≈ $'),
          link: '/home/gift',
          linkDesc: <FormattedMessage id='notify.GiftReceived' />,
        });
        break;
      case 'ResumeOrder':
        setContent({
          icon: <IconResume boxSize='80px' color='#0052ff' />,
          title: '+ ' + formatCoins(params?.usdc, 'USDC'),
          subTitle: formatMoney(params?.usd, '+≈ $'),
          linkDesc: (
            <FormattedMessage
              id='notify.PledgeMessage.desc'
              values={{ round: data.profit.round }}
            />
          ),
          link: '/home/aitrade',
        });
        // setContent({
        //   icon: <IconResume boxSize="80px" color="#0052ff" />,
        //   title: <FormattedMessage id="text.Notice" />,
        //   subTitle: <FormattedMessage id="notify.ResumeOrder" />,
        //   link: "/home/aitrade",
        // });
        break;
      case 'LoyaltyNotEnough':
        setContent({
          icon: <Image src={Loyalty} boxSize='80px' color='#0052ff' />,
          title: <FormattedMessage id='text.LoyaltyNotEnough' />,
          subTitle: (
            <Flex sx={{ justifyContent: 'center' }}>
              <Button
                colorScheme='messenger'
                size='sm'
                onClick={() => {
                  methods?.onRestoredOrder(data?.profit?.id);
                }}
              >
                <FormattedMessage id='text.Restored' />
              </Button>
            </Flex>
          ),
          link: '',
        });
        break;
      case 'SupportAnswered':
        setContent({
          icon: <IconCheckup boxSize='80px' color='#0052ff' />,
          title: <FormattedMessage id='text.Notice' />,
          subTitle: <FormattedMessage id='notify.SupportAnswered' />,
          link: '/home/support',
        });
        break;
      case 'IdentityVerify':
        setContent({
          icon: <Image src={MyVericon} boxSize='80px' />,
          title: <FormattedMessage id='text.Congratulations' />,
          subTitle: <FormattedMessage id='notify.IdentityVerify' />,
          linkDesc: <></>,
          link: '/home/settings/identity',
        });
        break;
      case 'FriendHelpWithdrawal':
        setContent({
          icon: <Icon as={CheckCircleIcon} boxSize='80px' color='#0052ff' />,
          title: <FormattedMessage id='text.Congratulations' />,
          subTitle: <FormattedMessage id='notify.FriendHelpWithdrawal' />,
          link: '/home/assets',
        });
        break;
      case 'Withdrawal':
        setContent({
          icon: <Icon as={CheckCircleIcon} boxSize='80px' color='#0052ff' />,
          title: '+ ' + formatCoins(params?.usdc, 'USDC'),
          subTitle: formatMoney(params?.usd, '+≈ $'),
          link: '/home/assets',
          linkDesc: <FormattedMessage id='notify.Withdrawal' />,
        });
        break;
    }
  }, [params, follower]);

  return (
    <Flex flexDir='column'>
      <Flex flexDir='column' p={'50px'}>
        <Flex pt={2} pb={2}>
          <Flex sx={{ w: 'full', justifyContent: 'center' }}>
            {content.icon || ''}
          </Flex>
        </Flex>
        <Flex
          flexDir='column'
          sx={{ textAlign: 'center', padding: '1.5rem 0 2rem 0' }}
        >
          <Text
            w='full'
            sx={{ fontSize: '1.5rem', fontWeight: '450', lineHeight: 1.5 }}
          >
            {content.title || ''}
          </Text>
          <Flex
            w='full'
            sx={{
              fontSize: '1.1rem',
              mt: '0.5rem',
              lineHeight: 1.4,
              color: '#666',
              display: 'block',
              _dark: {
                color: 'inherit',
              },
            }}
          >
            {content.subTitle || ''}
          </Flex>
        </Flex>
      </Flex>
      <Flex sx={styles?.itemList}>
        <Flex>{content.linkDesc}</Flex>
        <Flex>
          <Button colorScheme='messenger' variant='link'>
            <Link to={content?.link}>
              <FormattedMessage id='text.DETAIL' />
            </Link>
          </Button>
        </Flex>
      </Flex>
      <Flex sx={styles?.itemList}>
        <Flex>{formatDay(params?.created_at)}</Flex>
        <Flex>{content.status}</Flex>
      </Flex>
    </Flex>
  );
};
