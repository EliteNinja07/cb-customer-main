import {
  Avatar,
  AvatarGroup,
  Flex,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Sparklines, SparklinesLine } from "react-sparklines";

let styles = {
  Ftd: {
    paddingLeft: 0,
  },
  Ltd: {
    tetxAlign: "center",
    paddingRight: 0,
  },
  fdFOne: {
    width: "full",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default ({ funds, talang }: any) => {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    setItems(funds);
  }, [funds]);

  const RetSelect = (res: any, index: number) => {
    const objInfo = JSON.parse(res.profits);
    let arrList = [];
    for (let i in objInfo) {
      arrList.push({ code: i, val: objInfo[i] });
    }
    return (
      <Select
        border="0px"
        fontSize="0.9rem"
        textAlign="center"
        w="110px"
        placeholder=""
        onClick={(e) => {
          e.stopPropagation();
        }}
        size="sm"
        onChange={(e: any) => {
          let set_items = JSON.parse(JSON.stringify(items));
          let dev = objInfo[e.target.value];
          set_items[index] = { ...set_items[index], ...dev };
          setItems(set_items);
        }}
      >
        {arrList?.map((res: any) => {
          return (
            <option key={`code_${res.code}`} value={res?.code}>
              {res.code} <FormattedMessage id="text.Days" />
            </option>
          );
        })}
      </Select>
    );
  };

  const strEnd = (res: any) => {
    return `${(res.apr_start * 100).toFixed(0)}% ~
    ${(res.apr_end * 100).toFixed(0)}%`;
  };

  return (
    <TableContainer pt="3px" w="100%">
      <Table variant="simple" size="md" w="100%">
        <Thead h="50px" w="100%">
          <Tr>
            <Th sx={styles.Ftd}>
              <FormattedMessage id="text.Name" />
            </Th>
            <Th textAlign="center">
              <FormattedMessage id="text.FundType" />
              {talang?.tableTd?.td2}
            </Th>
            <Th textAlign="center">
              <FormattedMessage id="text.RiskProfiles" />
              {talang?.tableTd?.td3}
            </Th>
            <Th textAlign="center">
              <FormattedMessage id="text.APY" />
              {talang?.tableTd?.td4}
            </Th>
            <Th sx={styles.Ltd}>
              <FormattedMessage id="text.StakingTerm" />
              {talang?.tableTd?.td5}
            </Th>
          </Tr>
        </Thead>
        <Tbody w="100%">
          {items?.map((item: any, index: number) => {
            return (
              <Tr
                key={"tr_" + item.id}
                sx={{ cursor: "pointer" }}
                onClick={(e) => {
                  // history.push(
                  //   `/home/earndet?symbol=${item?.main_coin?.symbol}`
                  // );
                }}
              >
                <Td display="flex" alignItems="center" sx={styles.Ftd}>
                  <Flex sx={styles.fdFOne}>
                    <Flex sx={{ flex: 1, alignItems: "center" }}>
                      {item.sub_coin === null ? (
                        <Avatar
                          src={item.main_coin.icon}
                          size="sm"
                          mr="3"
                          bg="gray.0"
                        />
                      ) : (
                        <AvatarGroup size="sm" max={2} mr="3" spacing="-1rem">
                          <Avatar src={item.main_coin.icon} bg="gray.0" />
                          <Avatar src={item.sub_coin.icon} bg="gray.0" />
                        </AvatarGroup>
                      )}
                      <Text>
                        {item.sub_coin === null
                          ? item.main_coin.symbol
                          : item.main_coin.symbol + "/" + item.sub_coin.symbol}
                      </Text>
                    </Flex>
                    <Flex sx={{ width: "120px", maxHeight: "55px" }}>
                      <Sparklines
                        data={
                          item?.main_coin?.sparkline
                            ? JSON.parse(item?.main_coin?.sparkline)
                            : [0, 0, 0, 0]
                        }
                      >
                        <SparklinesLine color="rgb(0,82,255)" />
                      </Sparklines>
                    </Flex>
                  </Flex>
                </Td>
                <Td textAlign="center">
                  {/* {FundsProductTypeEnum[item.product_type]} */}
                  <FormattedMessage id={`text.` + item.product_type} />
                </Td>
                <Td textAlign="center">
                  <FormattedMessage id={`text.` + item.risk_type} />
                  {/* {FundsRiskTypeEnum[item.risk_type]} */}
                </Td>
                <Td textAlign="center">
                  <Text
                    color="#098551"
                    fontWeight="var(--cds-fontWeights-medium)"
                    fontSize="1.1rem"
                  >
                    {strEnd(item)}
                  </Text>
                </Td>
                <Td sx={styles.Ltd}>{RetSelect(item, index)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
