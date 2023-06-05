import { AddIcon, CopyIcon, EmailIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Tag,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Loyalty from '../../../../assets/images/Loyalty.svg';
import MoneyImg from '../../../../assets/images/usdc.svg';
import {
  formatAddress,
  formatMoney,
  formatVip,
  getAvatar,
} from '../../../../common';
import { onUnFollow, onFollow } from '@api/friends';

const styles = {
  RankingC: {
    position: 'relative',
    height: '230px',
    fontWeight: 'var(--cds-fontWeights-medium)',
  },
  MaxTagPrice: {
    maxWidth: '160px',
    backgroundColor: 'rgb(150 191 242 / 22%)',
    color: '#57b4fc',
    display: 'block',
    padding: '0 1rem',
    height: '38px',
    lineHeight: '39px',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '450',
    borderRadius: '100px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    _dark: { color: '#fff' },
  },
  MMaxTagPrice: {
    maxWidth: '140px',
    backgroundColor: 'rgb(150 191 242 / 22%)',
    color: '#57b4fc',
    display: 'block',
    padding: '0 1rem',
    height: '38px',
    lineHeight: '39px',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '450',
    borderRadius: '100px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    _dark: { color: '#fff' },
  },
  Tags: {},
  AvatarC: {
    position: 'relative',
  },
  Avatar: {
    border: '3px solid #4a00ff45',
  },
  Member: {
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    borderRadius: '100px',
    overflow: 'hidden',
    right: 0,
    color: '#fff',
    background: '#40a9ff',
  },
  MNumber: {
    background: '#1552f0',
    padding: ' 2px 12px',
  },
  MinMember: {
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    height: '25px',
    borderRadius: '100px',
    overflow: 'hidden',
    right: 0,
    color: '#fff',
    background: '#40a9ff',
    scale: 0.8,
    alignItems: 'center',
  },
  MinNumber: {
    background: '#1552f0',
    padding: ' 2px 6px',
  },
  MVip: {
    padding: '2px 8px',
    textAlign: 'center',
    flex: '1',
  },
  MinVip: {
    padding: '2px',
    textAlign: 'center',
    flex: '1',
    fontSize: '13px',
  },
  RankingTwo: {
    position: 'absolute',
    textAlign: 'center',
    zIndex: 2,
    left: 0,
    bottom: '8px',
    cursor: 'pointer',
  },
  RankingThree: {
    position: 'absolute',
    textAlign: 'center',
    zIndex: 2,
    right: 0,
    bottom: '8px',
    cursor: 'pointer',
  },
  Divider: {
    borderLeft: '1px solid #8d8d8d30',
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
  textHidden: {
    display: 'block',
    maxWidth: '120px',
    padding: '1rem 0 0.5rem 0',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    height: '40px',
  },
  loyalty: {
    flex: 1,
    display: 'block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: '#333',
    _dark: {
      color: '#fff',
    },
  },
};

export default ({ api, followStatus, tdata, methods }: any) => {
  const [getRankingOne, setRankingOne] = useState<any>({});
  const [getRankingTwo, setRankingTwo] = useState<any>({});
  const [getRankingtThree, setRankingtThree] = useState<any>({});

  useEffect(() => {
    setRankingOne(tdata ? tdata[0] : {});
    setRankingTwo(tdata ? tdata[1] : {});
    setRankingtThree(tdata ? tdata[2] : {});
  }, [tdata]);

  const PopoverC: any = (res: any) => {
    return (
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Flex p={2}>
            <Flex sx={styles.Online}>
              <Avatar
                size='md'
                name={res?.user?.nickname || '-'}
                src={getAvatar(res?.user?.avatar)}
              />
              {res?.user?.online_status ? (
                <Flex sx={styles.OnlineDot}></Flex>
              ) : (
                ''
              )}
            </Flex>
            <Flex flexDir='column' pl='10px'>
              <Text
                as='b'
                color='var(--cds-colors-blue-60)'
                fontSize='1.2rem'
                lineHeight='1.5rem'
              >
                {res?.user?.nickname || '-'}
              </Text>
              <Flex>
                <Tag
                  variant='solid'
                  borderRadius='full'
                  colorScheme='messenger'
                  size='sm'
                >
                  {formatVip(res?.user?.vips_id || '')}
                </Tag>
              </Flex>
            </Flex>
          </Flex>
          <Flex alignItems='center' py={1} px={2}>
            <Icon as={CopyIcon} />
            <Tooltip label={formatAddress(res?.user?.address)}>
              <Heading
                mx={2}
                as='b'
                fontSize='1rem'
                fontWeight='var(--cds-fontWeights-medium)'
                noOfLines={1}
              >
                {formatAddress(res?.user?.address)}
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
                label={formatMoney(parseFloat(res?.user?.total_income), '')}
              >
                <Heading
                  w='95%'
                  fontSize='0.9rem'
                  color='var(--cds-colors-chakra-body-text)'
                  noOfLines={1}
                >
                  {formatMoney(parseFloat(res?.user?.total_income), '')}
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
                  parseFloat(res?.user?.total_loyalty_value),
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
                  {formatMoney(parseFloat(res?.user?.total_loyalty_value), '')}
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
              colorScheme='messenger'
              isDisabled={!res?.user?.follow_status}
              leftIcon={<AddIcon />}
              onClick={() => {
                if (res?.user?.follow_status == 'No') {
                  onFollow({ users_id: res?.users_id }).then(() =>
                    api.getEarnIndex(),
                  );
                } else {
                  onUnFollow({ users_id: res?.users_id }).then(() =>
                    api.getEarnIndex(),
                  );
                }
              }}
            >
              {
                followStatus[
                  res?.user?.follow_status ? res?.user?.follow_status : 'No'
                ]
              }
            </Button>
            <Button
              px='2.5rem'
              size='sm'
              variant='outline'
              colorScheme='messenger'
              disabled
              isDisabled={res?.user?.follow_status != 'Both'}
              leftIcon={<EmailIcon />}
              onClick={() => {
                methods?.onSendMessage(res);
              }}
            >
              <FormattedMessage id='text.PM' />
            </Button>
          </HStack>
        </PopoverBody>
      </PopoverContent>
    );
  };
  return (
    <Flex my={6} mx={2} sx={styles.RankingC}>
      <Flex sx={styles.RankingTwo} flexDir='column' alignItems='center'>
        <Tooltip label={formatMoney(getRankingTwo?.airdrop, '')}>
          <Flex sx={styles.MMaxTagPrice}>
            +{formatMoney(getRankingTwo?.airdrop, '')}
          </Flex>
        </Tooltip>
        <Popover placement='top'>
          <PopoverTrigger>
            <Flex pt={4} sx={styles.AvatarC}>
              <Avatar
                sx={styles.Avatar}
                size='lg'
                name={getRankingTwo?.user?.nickname || '-'}
                src={getAvatar(getRankingTwo?.user?.avatar)}
              />
              <Flex sx={styles.MinMember}>
                <Flex sx={styles.MinNumber}>2</Flex>
                <Center sx={styles.MinVip}>
                  {formatVip(getRankingTwo?.user?.vips_id || '')}
                </Center>
              </Flex>
            </Flex>
          </PopoverTrigger>
          {PopoverC(getRankingTwo)}
        </Popover>
        <Flex sx={styles.textHidden}>
          {getRankingTwo?.user?.nickname || '-'}
        </Flex>
        <Flex alignItems='center'>
          <Tooltip label={formatMoney(getRankingTwo?.loyalty, '')}>
            <Heading
              pl={1}
              fontSize='1rem'
              fontWeight='390'
              w='100px'
              noOfLines={1}
              sx={{ _dark: { color: '#fff' } }}
            >
              <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image w='15px' h='15px' src={Loyalty} />
                <Flex pl={1} sx={styles.loyalty}>
                  {formatMoney(getRankingTwo?.loyalty, '')}
                </Flex>
              </Flex>
            </Heading>
          </Tooltip>
        </Flex>
      </Flex>
      <Flex
        w='full'
        flexDir='column'
        sx={{ cursor: 'pointer' }}
        alignItems='center'
      >
        <Tooltip label={formatMoney(getRankingOne?.airdrop, '')}>
          <Flex sx={styles.MaxTagPrice} mb={4}>
            +{formatMoney(getRankingOne?.airdrop, '')}
          </Flex>
        </Tooltip>
        <Popover placement='top'>
          <PopoverTrigger>
            <Flex pt={4} sx={styles.AvatarC}>
              <Avatar
                sx={styles.Avatar}
                size='xl'
                w='90px'
                h='90px'
                name={getRankingOne?.user?.nickname || '-'}
                src={getAvatar(getRankingOne?.user?.avatar)}
              />
              <Flex sx={styles.Member}>
                <Flex sx={styles.MNumber}>1</Flex>
                <Center sx={styles.MVip}>
                  {formatVip(getRankingOne?.user?.vips_id || '')}
                </Center>
              </Flex>
            </Flex>
          </PopoverTrigger>
          {PopoverC(getRankingOne)}
        </Popover>
        <Flex sx={styles.textHidden}>
          {getRankingOne?.user?.nickname || '-'}
        </Flex>
        <Flex alignItems='center' pt={1}>
          <Tooltip label={formatMoney(getRankingOne?.loyalty, '')}>
            <Heading
              pl={1}
              fontSize='1rem'
              fontWeight='390'
              w='100px'
              noOfLines={1}
              sx={{ _dark: { color: '#fff' } }}
            >
              <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image w='15px' h='15px' src={Loyalty} />
                <Flex sx={styles.loyalty} pl={1}>
                  {formatMoney(getRankingOne?.loyalty, '')}
                </Flex>
              </Flex>
            </Heading>
          </Tooltip>
        </Flex>
      </Flex>
      <Flex sx={styles.RankingThree} flexDir='column' alignItems='center'>
        <Tooltip label={formatMoney(getRankingtThree?.airdrop, '')}>
          <Flex sx={styles.MMaxTagPrice}>
            +{formatMoney(getRankingtThree?.airdrop, '')}
          </Flex>
        </Tooltip>
        <Popover placement='top'>
          <PopoverTrigger>
            <Flex pt={4} sx={styles.AvatarC}>
              <Avatar
                sx={styles.Avatar}
                size='lg'
                name={getRankingtThree?.user?.nickname || '-'}
                src={getAvatar(getRankingtThree?.user?.avatar)}
              />
              <Flex sx={styles.MinMember}>
                <Flex sx={styles.MinNumber}>3</Flex>
                <Center sx={styles.MinVip}>
                  {formatVip(getRankingtThree?.user?.vips_id || '')}
                </Center>
              </Flex>
            </Flex>
          </PopoverTrigger>
          {PopoverC(getRankingtThree)}
        </Popover>
        <Flex sx={styles.textHidden}>
          {getRankingtThree?.user?.nickname || '-'}
        </Flex>
        <Flex alignItems='center'>
          <Tooltip label={formatMoney(getRankingtThree?.loyalty, '')}>
            <Heading
              pl={1}
              fontSize='1rem'
              fontWeight='390'
              w='100px'
              noOfLines={1}
              sx={{ _dark: { color: '#fff' } }}
            >
              <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image w='15px' h='15px' src={Loyalty} />
                <Flex pl={1} sx={styles.loyalty}>
                  {formatMoney(getRankingtThree?.loyalty, '')}
                </Flex>
              </Flex>
            </Heading>
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
};
