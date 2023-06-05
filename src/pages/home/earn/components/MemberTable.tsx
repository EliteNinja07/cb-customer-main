import {
  Avatar,
  Flex,
  Heading,
  Image,
  Popover,
  PopoverTrigger,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Loyalty from '../../../../assets/images/Loyalty.svg';
import AirdropImg from '../../../../assets/images/airdrop.svg';
import { formatMoney, formatVip, getAvatar } from '../../../../common';
import MycChakraPagination from '../../../../components/MycChakraPagination';
import MyNoActivity from '../../../../components/NoActivity';
import UserPopover from '../../../../components/UserPopover';

const styles = {
  AvatarImg: {
    position: 'relative',
    width: '38px',
    height: '38px',
  },
  Uvip: {
    position: 'absolute',
    bottom: '-0.8rem',
    color: '#ecf3ff',
    fontSize: '12px',
    height: '18px',
    lineHeight: '18px',
    backgroundColor: ' #57b4fc',
    padding: '0 0.4rem',
    borderRadius: '100px',
    fontWeight: 300,
    left: 0,
    right: 0,
  },
};

export default ({ api, followStatus, tdata, methods }: any) => {
  const [CurrentPage, setCurrentPage] = useState(0);
  const [AllList, setAllList] = useState([]);
  const [list, setLIst] = useState([]);
  const [currentId, setCurrentId] = useState<number>();

  const Fmethods = {
    onReturnDAta: (data: any) => {
      let newData: any = [];
      let arrRes: any = [];
      let len = 0;
      if (data?.length > 3) {
        let maxLeng = data?.length;
        len = maxLeng - 3;
        let arrData = JSON.parse(JSON.stringify(data || []));
        newData = arrData.splice(3, maxLeng);
        let n = 25;
        let num = len % n === 0 ? len / n : Math.floor(len / n + 1);
        for (let i = 0; i < num; i++) {
          arrRes[i] = [];
          for (let k = 0; k < newData?.length; k++) {
            if (k < n) {
              if (newData[i * n + k]) {
                arrRes[i].push(newData[i * n + k]);
              }
            } else {
              break;
            }
          }
        }
        setLIst(arrRes[0]);
        setAllList(arrRes);
      } else {
        setLIst([]);
        setAllList([]);
      }
    },
  };

  useEffect(() => {
    Fmethods?.onReturnDAta(tdata ? tdata : []);
  }, [tdata]);

  return list && list.length > 0 ? (
    <>
      <TableContainer w='100%'>
        <Table
          variant='simple'
          w='100%'
          size='md'
          fontWeight='var(--cds-fontWeights-medium)'
        >
          <Thead h='50px' w='100%'>
            <Tr>
              <Th px={3}>
                <FormattedMessage id='text.Rank' />
              </Th>
              <Th px={2} textAlign='center'>
                <FormattedMessage id='text.User' />
              </Th>
              <Th p={0}>
                <Flex justifyContent='flex-end' p='20px 0 10px 0'>
                  <Image w='25px' h='25px' p='0 5px 10px 0' src={Loyalty} />
                  <FormattedMessage id='text.Loyalty' />
                </Flex>
              </Th>
              <Th p={0}>
                <Flex justifyContent='flex-end' p='20px 5px 10px 0'>
                  <Image w='25px' h='25px' p='0 5px 10px 0' src={AirdropImg} />
                  <FormattedMessage id='text.Airdrop' />
                </Flex>
              </Th>
            </Tr>
          </Thead>
          <Tbody w='100%'>
            {list?.map((res: any, index: number) => {
              return (
                <Tr key={`tr_` + index}>
                  <Td w='23px' px={3} py={0}>
                    <Tag>{CurrentPage * 25 + index + 4}</Tag>
                  </Td>
                  <Td
                    display='flex'
                    pt={3}
                    pb={7}
                    px={0}
                    alignItems='center'
                    justifyContent='center'
                  >
                    <Popover
                      placement='top'
                      onOpen={() => setCurrentId(res.user.id)}
                    >
                      <PopoverTrigger>
                        <Flex sx={{ cursor: 'pointer' }}>
                          <Flex sx={styles.AvatarImg}>
                            <Avatar
                              src={getAvatar(res?.user?.avatar)}
                              w='38px'
                              h='38px'
                              mr='2'
                            />
                            <Flex sx={styles.Uvip}>
                              {formatVip(res?.user?.vips_id)}
                            </Flex>
                          </Flex>
                        </Flex>
                      </PopoverTrigger>
                      <UserPopover
                        visible={currentId === res.user.id}
                        currentId={currentId}
                        methods={methods}
                      />
                    </Popover>
                  </Td>
                  <Td isNumeric px={2}>
                    <Tooltip label={formatMoney(res?.loyalty, '')}>
                      <Heading
                        pl={1}
                        fontSize='14px'
                        fontWeight='400'
                        minW='104px'
                        color='var(--cds-colors-chakra-body-text)'
                        noOfLines={1}
                      >
                        <Flex sx={{ justifyContent: 'flex-end' }}>
                          {/* <Image w="15px" h="15px" src={Loyalty} /> */}
                          <Text pl={1}>{formatMoney(res?.loyalty, '')}</Text>
                        </Flex>
                      </Heading>
                    </Tooltip>
                  </Td>
                  <Td isNumeric px={2}>
                    <Tooltip label={formatMoney(res?.airdrop, '')}>
                      <Heading
                        pl={1}
                        fontSize='14px'
                        fontWeight='400'
                        minW='104px'
                        noOfLines={1}
                        color='#57b4fc'
                      >
                        +{formatMoney(res?.airdrop, '')}
                      </Heading>
                    </Tooltip>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <MycChakraPagination
        tdata={AllList}
        current={CurrentPage}
        onChange={(data: any) => {
          setCurrentPage(data?.page);
          setLIst(AllList[data?.page]);
        }}
      />
    </>
  ) : (
    <MyNoActivity label={<FormattedMessage id='text.NoActivityYet' />} />
  );
};
