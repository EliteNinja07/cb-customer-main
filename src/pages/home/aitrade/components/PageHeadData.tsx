import AirdropImg from "../../../../assets/images/airdrop.svg";
import LoyaltyImg from "../../../../assets/images/Loyalty.svg";
import MoneyImg from "../../../../assets/images/usdc.svg";
import { Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MyDurationSelect from "./durationSelect";
import MyLeveSelect from "./leverageSelect";
import { FormattedMessage, useIntl } from "react-intl";
import {
  formatMoney,
  formatPercent,
  MyCard,
  MyRender,
  request,
  useMyToast,
} from "../../../../common";

export default ({ pledge, user, funds, jackpothasuser, staking, api }: any) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const { showRes } = useMyToast();
  const [getRData, setRData] = useState([]);
  const [usdcPrice, setUsdcPrice] = useState(1);
  const intl = useIntl();

  const onUpdateLeverage = (val: string, def: string) => {
    request("ai_trade/update_leverage", { data: { leverage: val } })
      .then((res: any) => {
        res.message = intl.formatMessage({ id: "trade.update.level" });
        api.onShow();
        showRes(res);
      })
      .catch((err) => {
        setUserInfo({ ...userInfo, ...{ leverage: def } });
        showRes(err);
      });
  };
  const getPrice = () => {
    request("coins/get_price", { data: { symbol: "USDC" } })
      .then((res) => {
        setUsdcPrice(res.data.price ?? 1);
      })
      .catch(showRes);
  };
  const getRightItems = () => {
    request("bonus/statistics", {})
      .then((res) => {
        setRData(res.data || []);
      })
      .catch(showRes);
  };
  useEffect(() => {
    getRightItems();
    getPrice();
  }, []);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  const onUpdateMaxStakingDay = (val: string, def: string) => {
    request("ai_trade/update_max_staking_day", { data: { duration: val } })
      .then((res) => {
        api.onShow();
        showRes(res);
      })
      .catch((err) => {
        setUserInfo({ ...userInfo, ...{ duration: def } });
        showRes(err);
      });
  };

  const Components = {};

  return (
    <MyCard flexDir="column">
      <Flex w="full" pt={10}>
        <SimpleGrid
          columns={{ base: 2, sm: 2, md: 4, lg: 6 }}
          px={6}
          spacing={10}
          w="full"
        >
          <Flex flexDir="column" borderBottom="1px dashed #60646975" pb={4}>
            <Text
              color="#5b616e"
              fontSize="0.9rem"
              border="1px dashed var(--cds-colors-line)"
              p={1}
              borderRadius="full"
              textAlign="center"
              mb={6}
              minWidth="140px"
              backgroundColor="#9b9b9b14"
            >
              <FormattedMessage id="text.StakingAmount" />
            </Text>
            <Flex alignItems="center" justifyContent="center">
              <Image w="30px" h="30px" pb="10px" pr="5px" src={MoneyImg} />
              <Flex fontSize="1.2rem" flexDir="column">
                <MyRender
                  render={() => {
                    let amount = 0;
                    if (!pledge || pledge.status == "Finished") {
                      amount = 0;
                    } else if (pledge.is_trail) {
                      amount = pledge.staking;
                    } else {
                      amount = staking?.balance;
                    }
                    return (
                      <>
                        <Text>{formatMoney(amount, "")}</Text>
                        <Text
                          fontSize="0.8rem"
                          color="#88878796"
                          lineHeight="10px"
                        >{`≈ ${formatMoney(amount * usdcPrice, "$")}`}</Text>
                      </>
                    );
                  }}
                />
                {/* {formatMoney(
                  pledge && pledge.is_trail ? pledge.staking : staking?.balance,
                  ""
                )}
                <Text
                  fontSize="0.8rem"
                  color="#88878796"
                  lineHeight="10px"
                >{`≈ ${formatMoney(
                  (pledge && pledge.is_trail
                    ? pledge.staking
                    : staking?.balance) * usdcPrice,
                  "$"
                )}`}</Text> */}
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" borderBottom="1px dashed #60646975" pb={4}>
            <Text
              color="#5b616e"
              fontSize="0.9rem"
              border="1px dashed var(--cds-colors-line)"
              p={1}
              borderRadius="full"
              textAlign="center"
              mb={6}
              minWidth="140px"
              backgroundColor="#9b9b9b14"
            >
              <FormattedMessage id="text.Leverage" />
            </Text>
            <Flex>
              <MyLeveSelect
                defaultValue={userInfo?.leverage}
                onChange={onUpdateLeverage}
              />
            </Flex>
          </Flex>
          <Flex flexDir="column" borderBottom="1px dashed #60646975" pb={4}>
            <Text
              color="#5b616e"
              fontSize="0.9rem"
              border="1px dashed var(--cds-colors-line)"
              p={1}
              borderRadius="full"
              textAlign="center"
              mb={6}
              minWidth="140px"
              backgroundColor="#9b9b9b14"
            >
              <FormattedMessage id="text.EstimateAPY" />
            </Text>
            <Text fontSize="1.2rem" textAlign="center">
              10% * {user?.leverage}x
            </Text>
          </Flex>
          <Flex flexDir="column" borderBottom="1px dashed #60646975" pb={4}>
            <Text
              color="#5b616e"
              fontSize="0.9rem"
              border="1px dashed var(--cds-colors-line)"
              p={1}
              borderRadius="full"
              textAlign="center"
              mb={6}
              minWidth="140px"
              backgroundColor="#9b9b9b14"
            >
              <FormattedMessage id="text.CurrentAPY" />
            </Text>
            <MyRender
              render={() => {
                let apy = 0;
                if (!pledge || pledge.status == "Finished") {
                  apy = 0;
                } else {
                  apy = pledge?.actual_apy / userInfo?.leverage;
                }
                return (
                  <>
                    <Text fontSize="1.2rem" textAlign="center">
                      {formatPercent(apy)} * {userInfo?.leverage}x
                    </Text>
                  </>
                );
              }}
            />
            {/* {pledge ? (
              <Text fontSize="1.2rem" textAlign="center">
                {pledge
                  ? pledge.status == "Finished"
                    ? 0
                    : formatPercent(pledge.actual_apy / userInfo?.leverage)
                  : formatPercent(pledge?.actual_apy)}
                *{userInfo?.leverage}x
              </Text>
            ) : (
              <Text fontSize="1.2rem" textAlign="center">
                -
              </Text>
            )} */}
            {/* <Text fontSize="1.2rem" textAlign="center">
              {formatPercent(pledge?.actual_apy)}
            </Text> */}
          </Flex>
          <Flex flexDir="column" borderBottom="1px dashed #60646975" pb={4}>
            <Text
              color="#5b616e"
              fontSize="0.9rem"
              border="1px dashed var(--cds-colors-line)"
              p={1}
              borderRadius="full"
              textAlign="center"
              mb={6}
              minWidth="140px"
              backgroundColor="#9b9b9b14"
            >
              <FormattedMessage id="text.LoyaltyToday" />
            </Text>
            <Flex alignItems="center" fontSize="1.2rem" justifyContent="center">
              <Image w="25px" h="25px" pr="5px" src={LoyaltyImg} />
              {formatMoney(user?.total_today_loyalty_value, "")}
            </Flex>
          </Flex>
          <Flex flexDir="column" borderBottom="1px dashed #60646975" pb={4}>
            <Text
              color="#5b616e"
              fontSize="0.9rem"
              border="1px dashed var(--cds-colors-line)"
              p={1}
              borderRadius="full"
              textAlign="center"
              mb={6}
              minWidth="140px"
              backgroundColor="#9b9b9b14"
            >
              <FormattedMessage id="text.TotalLoyalty" />
            </Text>
            <Flex alignItems="center" justifyContent="center">
              <Image w="25px" h="25px" pr="5px" src={LoyaltyImg} />
              {pledge?.earnings_this_node < 0 ? (
                <Text
                  as="del"
                  className="bounce-in-fwd"
                  fontWeight="900"
                  fontSize="1.2rem"
                  color="#cf202f"
                >
                  {formatMoney(jackpothasuser?.loyalty, "")}
                </Text>
              ) : (
                <Text fontSize="1.2rem">
                  {formatMoney(user?.total_loyalty_value, "")}
                </Text>
              )}
            </Flex>
          </Flex>
          {/*  </SimpleGrid>*/}
          {/*</Flex>*/}
          {/*<Flex w="full" p={6} pt={10} >*/}
          {/*  <SimpleGrid*/}
          {/*    columns={{ base: 2, sm: 2, md: 4, lg: 6 }}*/}
          {/*    spacing={10}*/}
          {/*    w="full"*/}
          {/*  >*/}
          <Flex
            flexDir="column"
            borderBottom={{
              base: "1px dashed var(--cds-colors-line)",
              sm: "1px dashed var(--cds-colors-line)",
              md: "1px dashed var(--cds-colors-line)",
              lg: "none",
            }}
            pb={4}
          >
            <MyRender
              render={() => {
                let amount = 0;
                if (!pledge || pledge.status == "Finished") {
                  amount = 0;
                } else {
                  amount = pledge?.earnings_this_node;
                }
                if (amount < 0) {
                  return (
                    <>
                      <Text
                        color="#5b616e"
                        fontSize="0.9rem"
                        border="1px dashed var(--cds-colors-line)"
                        p={1}
                        borderRadius="full"
                        textAlign="center"
                        mb={6}
                        minWidth="140px"
                        backgroundColor="#9b9b9b14"
                      >
                        <FormattedMessage id="text.ThisNodeEarnings" />
                      </Text>
                      <Flex alignItems="center" justifyContent="center">
                        <Image
                          w="25px"
                          h="30px"
                          pb="10px"
                          pr="5px"
                          src={MoneyImg}
                        />
                        <Flex
                          alignItems="center"
                          fontSize="1.2rem"
                          flexDir="column"
                        >
                          {formatMoney(amount, "")}
                          <Text
                            fontSize="0.8rem"
                            color="#88878796"
                            lineHeight="10px"
                          >{`≈ ${formatMoney(amount * usdcPrice, "$")}`}</Text>
                        </Flex>
                      </Flex>
                    </>
                  );
                } else {
                  return (
                    <>
                      <Text
                        className="tracking-in-expand"
                        color="#5b616e"
                        fontSize="0.9rem"
                        border="1px dashed var(--cds-colors-line)"
                        p={1}
                        borderRadius="full"
                        textAlign="center"
                        mb={6}
                        minWidth="140px"
                        backgroundColor="#9b9b9b14"
                      >
                        <FormattedMessage id="text.ThisNodeEarnings" />
                      </Text>
                      <Flex alignItems="center" justifyContent="center">
                        <Image
                          w="25px"
                          h="30px"
                          pb="10px"
                          pr="5px"
                          src={MoneyImg}
                        />
                        <Flex
                          alignItems="center"
                          fontSize="1.2rem"
                          flexDir="column"
                        >
                          {formatMoney(amount, "")}
                          <Text
                            fontSize="0.8rem"
                            color="#88878796"
                            lineHeight="10px"
                          >{`≈ ${formatMoney(amount * usdcPrice, "$")}`}</Text>
                        </Flex>
                      </Flex>
                    </>
                  );
                }
              }}
            />
            {/* {pledge?.earnings_this_node > 0 ? (
              <Text
                className="tracking-in-expand"
                color="#5b616e"
                fontSize="0.9rem"
                border="1px dashed var(--cds-colors-line)"
                p={1}
                borderRadius="full"
                textAlign="center"
                mb={6}
                minWidth="140px"
                backgroundColor="#9b9b9b14"
              >
                <FormattedMessage id="text.ThisNodeEarnings" />
              </Text>
            ) : (
              <Text
                color="#5b616e"
                fontSize="0.9rem"
                border="1px dashed var(--cds-colors-line)"
                p={1}
                borderRadius="full"
                textAlign="center"
                mb={6}
                minWidth="140px"
                backgroundColor="#9b9b9b14"
              >
                <FormattedMessage id="text.ThisNodeEarnings" />
              </Text>
            )}
            <Flex alignItems="center" justifyContent="center">
              <Image w="25px" h="30px" pb="10px" pr="5px" src={MoneyImg} />
              <Flex alignItems="center" fontSize="1.2rem" flexDir="column">
                {formatMoney(pledge?.earnings_this_node, "")}
                <Text
                  fontSize="0.8rem"
                  color="#88878796"
                  lineHeight="10px"
                >{`≈ ${formatMoney(
                  pledge?.earnings_this_node * usdcPrice,
                  "$"
                )}`}</Text>
              </Flex>
            </Flex> */}
          </Flex>
          <Flex
            flexDir="column"
            borderBottom={{
              base: "1px dashed var(--cds-colors-line)",
              sm: "1px dashed var(--cds-colors-line)",
              md: "1px dashed var(--cds-colors-line)",
              lg: "none",
            }}
            pb={4}
          >
            <Text
              color="#5b616e"
              fontSize="0.9rem"
              border="1px dashed var(--cds-colors-line)"
              p={1}
              borderRadius="full"
              textAlign="center"
              mb={6}
              minWidth="140px"
              backgroundColor="#9b9b9b14"
            >
              <FormattedMessage id="text.EarningsToday" />
            </Text>
            <Flex alignItems="center" justifyContent="center">
              <Image w="25px" h="30px" pr="5px" pb="10px" src={MoneyImg} />
              <Flex fontSize="1.2rem" flexDir="column">
                {formatMoney(pledge?.earnings_today, "")}
                <Text
                  fontSize="0.8rem"
                  color="#88878796"
                  lineHeight="10px"
                >{`≈ ${formatMoney(
                  pledge?.earnings_today * usdcPrice,
                  "$"
                )}`}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDir="column"
            borderBottom={{
              base: "1px dashed var(--cds-colors-line)",
              sm: "1px dashed var(--cds-colors-line)",
              md: "none",
              lg: "none",
            }}
            pb={4}
          >
            <Text
              color="#5b616e"
              fontSize="0.9rem"
              border="1px dashed var(--cds-colors-line)"
              p={1}
              borderRadius="full"
              textAlign="center"
              mb={6}
              minWidth="140px"
              backgroundColor="#9b9b9b14"
            >
              <FormattedMessage id="text.JoinedFunds" />
            </Text>
            <Text fontSize="1.2rem" textAlign="center">
              {funds?.length ?? "-"}
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            borderBottom={{
              base: "1px dashed var(--cds-colors-line)",
              sm: "1px dashed var(--cds-colors-line)",
              md: "none",
              lg: "none",
            }}
            pb={4}
          >
            <Text
              color="#5b616e"
              fontSize="0.9rem"
              border="1px dashed var(--cds-colors-line)"
              p={1}
              borderRadius="full"
              textAlign="center"
              mb={6}
              minWidth="140px"
              backgroundColor="#9b9b9b14"
            >
              <FormattedMessage id="text.Duration" />
            </Text>
            <Flex>
              <MyDurationSelect
                defaultValue={userInfo?.duration}
                onChange={onUpdateMaxStakingDay}
              />
            </Flex>
          </Flex>
          <Flex flexDir="column" pb={4}>
            <Text
              color="#5b616e"
              fontSize="0.9rem"
              border="1px dashed var(--cds-colors-line)"
              p={1}
              borderRadius="full"
              textAlign="center"
              mb={6}
              minWidth="140px"
              backgroundColor="#9b9b9b14"
            >
              <FormattedMessage id="text.LoyaltyRanking" />
            </Text>
            <Text textAlign="center" fontSize="1.2rem">
              {jackpothasuser?.rank ?? "-"}
            </Text>
          </Flex>
          <Flex flexDir="column" pb={4}>
            <Text
              color="#5b616e"
              fontSize="0.9rem"
              border="1px dashed var(--cds-colors-line)"
              p={1}
              borderRadius="full"
              textAlign="center"
              mb={6}
              minWidth="140px"
              backgroundColor="#9b9b9b14"
            >
              <FormattedMessage id="text.EstimateAirdrop" />
            </Text>
            <Flex alignItems="center" fontSize="1.2rem" justifyContent="center">
              <Image w="25px" h="25px" pr="5px" src={AirdropImg} />
              {formatMoney(jackpothasuser?.airdrop, "")}
            </Flex>
          </Flex>
        </SimpleGrid>
      </Flex>
    </MyCard>
  );
};
