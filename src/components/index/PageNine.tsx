import { Avatar, AvatarGroup, Flex, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { MyContent } from "../../common";

const styles = {
  TableHead: {
    fontSize: "1.1rem",
    backgroundColor: "rgb(238, 240, 243)",
    borderBottom: "2px solid #000",
    _dark: {
      backgroundColor: "var(--cds-colors-gray-800)",
      borderBottom: "2px solid #fff",
    },
  },
  td: {
    w: "15vw",
    justifyContent: "center",
    minWidth: "102px",
    alignItems: "center",
  },
  td1: {
    lineHeight: "55px",
    width: "450px",
    minWidth: "172px",
    justifyContent: "space-between",
  },
  td2: {
    w: "26vw",
    justifyContent: "center",
    lineHeight: "55px",
    minWidth: "172px",
    maxWidth: "390px",
    ml: "-1rem",
  },
  th: {
    w: "15vw",
    justifyContent: "center",
    lineHeight: "20px",
    fontWeight: "var(--cds-fontWeights-medium)",
    minWidth: "102px",
    textAlign: "center",
    alignItems: "center",
    p: "1rem 0",
    m: "0 auto",
  },
  th1: {
    width: "450px",
    justifyContent: "center",
    lineHeight: "20px",
    fontWeight: "var(--cds-fontWeights-medium)",
    minWidth: "172px",
    textAlign: "center",
    alignItems: "center",
    p: "1rem 0",
  },
  th2: {
    w: "26vw",
    justifyContent: "center",
    lineHeight: "20px",
    fontWeight: "var(--cds-fontWeights-medium)",
    minWidth: "172px",
    maxWidth: "390px",
    ml: "-1rem",
    textAlign: "center",
    alignItems: "center",
    p: "1rem 0",
  },
};

const tabList = [
  <FormattedMessage id="text.All" />,
  <FormattedMessage id="text.Staking" />,
  <FormattedMessage id="text.DeFiYield" />,
];

export default function PageNine({ funds }: any) {
  const [getTabIdx, setTabIdx] = useState(0);
  const [items, setItems] = useState<any>([]);

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
        // defaultValue={pledge?.leverage}
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

  useEffect(() => {
    setItems(funds);
  }, [funds]);

  return (
    <MyContent w={{ base: "100%", sm: "100%", md: "100%", lg: "1270px" }}>
      <Flex
        p={{
          base: "margin: 0 1rem",
          sm: "margin: 0 1rem",
          md: "margin: 0 1rem",
          lg: "5rem 0",
        }}
        flexDir="column"
      >
        <Text
          pl="1rem"
          fontWeight="var(--cds-fontWeights-medium)"
          fontSize={{
            base: "1.5rem",
            sm: "1.5rem",
            md: "1.5rem",
            lg: "2.8rem",
          }}
          lineHeight={{ base: "2rem", sm: "2rem", md: "2rem", lg: "3rem" }}
        >
          <FormattedMessage id="home.nine.1" />
        </Text>
        <Flex display="flex" cursor="pointer" p="1rem 0 0 1rem">
          {tabList.map((res: any, index: number) => {
            return (
              <Text
                fontSize="1.1rem"
                fontWeight="var(--cds-fontWeights-medium)"
                marginRight="2rem"
                p="1rem 0"
                sx={
                  index == getTabIdx
                    ? { color: "#0d6efd", borderBottom: "2px solid #0d6efd" }
                    : {}
                }
                key={"nine_tab_" + index}
                onClick={() => {
                  setTabIdx(index);
                  if (index == 0) {
                    setItems(funds);
                    return;
                  }
                  let list: any = [];
                  funds.map((res: any) => {
                    if (index == 1) {
                      if (
                        res.product_type == "Earn" ||
                        res.product_type == "DEFIStaking"
                      ) {
                        list.push(res);
                      }
                    }
                    if (index == 2) {
                      if (
                        res.product_type != "Earn" &&
                        res.product_type != "DEFIStaking"
                      ) {
                        list.push(res);
                      }
                    }
                  });
                  setItems(list);
                }}
              >
                {res}
              </Text>
            );
          })}
        </Flex>
        <Flex overflow="auto">
          <Flex w="100vw" flexDir="column" maxWidth="1270px" minWidth="650px">
            <Flex sx={styles.TableHead} pl="1rem">
              <Flex sx={styles.th1}>
                <FormattedMessage id="text.Name" />
              </Flex>
              <Flex sx={styles.th2}>
                <FormattedMessage id="text.FundType" />
              </Flex>
              <Flex sx={styles.th}>
                <FormattedMessage id="text.RiskProfiles" />
              </Flex>
              <Flex sx={styles.th}>
                <FormattedMessage id="text.APY" />
              </Flex>
              <Flex sx={styles.th}>
                <FormattedMessage id="text.StakingTerm" />
              </Flex>
            </Flex>
            {items?.map((item: any, index: number) => {
              return (
                <Flex
                  fontSize="1rem"
                  pl="1rem"
                  borderBottom="1px solid #b2b2b238"
                  key={"flex_" + index}
                >
                  <Flex sx={styles.td1} alignItems="center">
                    <Flex
                      sx={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {item.sub_coin === null ? (
                        <Avatar
                          src={item.main_coin.icon}
                          size="sm"
                          bg="gray.0"
                        />
                      ) : (
                        <AvatarGroup size="sm" max={2} spacing="-1rem">
                          <Avatar src={item.main_coin.icon} bg="gray.0" />
                          <Avatar src={item.sub_coin.icon} bg="gray.0" />
                        </AvatarGroup>
                      )}
                      <Flex sx={{ flex: 1, textAlign: "left" }}>
                        <Text w="full" pl={2}>
                          {item.sub_coin === null
                            ? item.main_coin.symbol
                            : item.main_coin.symbol +
                              "/" +
                              item.sub_coin.symbol}
                        </Text>
                      </Flex>
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
                  <Flex sx={styles.td2} m="0 auto">
                    <FormattedMessage id={"text." + item.product_type} />
                  </Flex>
                  <Flex sx={styles.td} m="0 auto">
                    <FormattedMessage id={"text." + item.risk_type} />
                  </Flex>
                  <Flex sx={styles.td} m="0 auto">
                    <Text
                      color="#098551"
                      fontWeight="var(--cds-fontWeights-medium)"
                      fontSize="1.1rem"
                    >
                      {strEnd(item)}
                    </Text>
                  </Flex>
                  <Flex sx={styles.td} m="0 auto">
                    {RetSelect(item, index)}
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
        <Flex
          p="3rem 1rem 0.1rem 1rem"
          fontSize="0.8rem"
          mb="0"
          flexDir="column"
        >
          <Text w="full">
            <FormattedMessage id="home.nine.2" />
          </Text>
          <Text w="full">
            <FormattedMessage id="home.nine.3" />
          </Text>
          <Text w="full">
            <FormattedMessage id="home.nine.4" />
          </Text>
          <Text>
            <FormattedMessage id="home.nine.5" />
          </Text>
        </Flex>
      </Flex>
    </MyContent>
  );
}
