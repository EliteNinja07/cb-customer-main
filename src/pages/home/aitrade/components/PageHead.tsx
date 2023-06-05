import {
  Flex,
  HStack,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import NotProtected from "../../../../assets/images/NotProtected.svg";
import Notactivated from "../../../../assets/images/Notactivated.svg";
import Protected from "../../../../assets/images/Protected.svg";
import MyBigbaby from "../../../../assets/images/htmlSvg1.svg";
import MyBigbaby1 from "../../../../assets/images/htmlSvg8.svg";
import Income from "../../../../assets/images/income.svg";
import {
  formatMoney,
  formatPercent,
  getDayYmHm,
  useListPage,
} from "../../../../common";

import * as dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc as any);

export default ({ pledge }: any) => {
  const [showTimes, setShowTimes] = useState("");
  const { getData } = useListPage({
    baseUri: "ai_trade/profits",
  });
  const onTimes = () => {
    setShowTimes(`${dayjs.utc().format("DD/MM/YYYY HH:mm:ss A")}`);
    setTimeout(() => {
      onTimes();
    }, 1000);
  };
  useEffect(() => {
    onTimes();
  }, []);
  const RTag = ({ profit }: any) => {
    // 如果未打开
    if (!profit.can_profit_guarantee) {
      return (
        <>
          <Flex
            p="3px 0 3px 5px"
            justifyContent="flex-end"
            background="#cecece21"
            borderRadius="100px 0 0 100px"
            alignItems="center"
            lineHeight="1rem"
            color="#9b9999ad"
          >
            <Text
              w="20px"
              h="20px"
              m="0 5px"
              background="#5ab6fe54"
              borderRadius="5px"
              textAlign="center"
              lineHeight="1.2rem"
              color="white"
            >
              {profit.round}
            </Text>
            <FormattedMessage id="text.Income" />
            <Text color="#606060e3" pl={1}>
              $ {formatMoney(profit.actual_income, "")}
            </Text>
            <Flex
              borderRadius="5px"
              border="1px dashed #9b9999ad"
              p="0 5px"
              ml={1}
              mr={1}
            >
              <FormattedMessage id="text.NotActivated" />
            </Flex>
            <Image w="25px" p="0 5px" src={Notactivated} />
          </Flex>
        </>
      );
    }
    // 如果不需要补
    if (profit.profit_guarantee_amount == 0)
      return (
        <>
          {profit.actual_apy / profit.leverage < 0.1 ? (
            <Flex
              p="3px 0 3px 5px"
              justifyContent="flex-end"
              background="#cecece21"
              borderRadius="100px 0 0 100px"
              alignItems="center"
              lineHeight="1rem"
              color="#9b9999ad"
            >
              <Text
                w="20px"
                h="20px"
                m="0 5px"
                background="#5ab6fe54"
                borderRadius="5px"
                textAlign="center"
                lineHeight="1.2rem"
                color="white"
              >
                {profit.round}
              </Text>
              <FormattedMessage id="text.Income" />
              <Text color="#00bcd4" pl={1}>
                $ {formatMoney(profit.actual_income, "")}
              </Text>
              <Flex
                borderRadius="5px"
                border="1px dashed #9b9999ad"
                p="0 5px"
                ml={1}
              >
                <FormattedMessage id="text.Complete" />:
                <Text color="#00bcd4">
                  {formatPercent((profit.actual_apy / profit.leverage) * 10)}
                </Text>
              </Flex>
              <Image w="25px" p="0 5px" src={Income} />
            </Flex>
          ) : (
            <Flex
              p="3px 0 3px 5px"
              justifyContent="flex-end"
              background="#cecece21"
              borderRadius="100px 0 0 100px"
              alignItems="center"
              lineHeight="1rem"
              color="#9b9999ad"
            >
              <Text
                w="20px"
                h="20px"
                m="0 5px"
                background="#5ab6fe54"
                borderRadius="5px"
                textAlign="center"
                lineHeight="1.2rem"
                color="white"
              >
                {profit.round}
              </Text>
              <FormattedMessage id="text.Income" />
              <Text color="#72b599" pl={1}>
                $ {formatMoney(profit.actual_income, "")}
              </Text>
              <Flex
                borderRadius="5px"
                border="1px dashed #9b9999ad"
                p="0 5px"
                ml={1}
              >
                <FormattedMessage id="text.Complete" />:{" "}
                <Text color="#72b599">100%</Text>
              </Flex>
              <Image w="25px" p="0 5px" src={Income} />
            </Flex>
          )}
        </>
      );

    if (!profit.done_profit_guarantee) {
      // 如果需要补，但loyalty不够
      return (
        <>
          <Flex
            p="3px 0 3px 5px"
            justifyContent="flex-end"
            background="#ee888817"
            borderRadius="100px 0 0 100px"
            alignItems="center"
            lineHeight="1rem"
            color="#9b9999ad"
          >
            <Text
              w="20px"
              h="20px"
              m="0 5px"
              background="#5ab6fe54"
              borderRadius="5px"
              textAlign="center"
              lineHeight="1.2rem"
              color="white"
            >
              {profit.round}
            </Text>
            <FormattedMessage id="text.Income" />
            <Text color="#f98585e3" pl={1}>
              $ {formatMoney(profit.actual_income, "")}
            </Text>
            <Flex
              borderRadius="5px"
              border="1px dashed #9b9999ad"
              p="0 5px"
              ml={1}
              mr={1}
            >
              <FormattedMessage id="text.NotEnoughLoyalty" />
              <Text color="#f98585e3" pl={1}>
                {formatMoney(profit.profit_guarantee_amount, "")}
              </Text>
            </Flex>
            <Image w="25px" p="0 5px" src={NotProtected} />
          </Flex>
        </>
      );
    } else {
      // 如果需要补，loyalty足够
      return (
        <>
          <Flex
            p="3px 0 3px 5px"
            justifyContent="flex-end"
            background="#86b7f817"
            borderRadius="100px 0 0 100px"
            alignItems="center"
            lineHeight="1rem"
            color="#9b9999ad"
          >
            <Text
              w="20px"
              h="20px"
              m="0 5px"
              background="#5ab6fe54"
              borderRadius="5px"
              textAlign="center"
              lineHeight="1.2rem"
              color="white"
            >
              {profit.round}
            </Text>
            <FormattedMessage id="text.Income" />
            <Text color="#6996f4" pl={1}>
              $ {formatMoney(profit.actual_income, "")}
            </Text>
            <Flex
              borderRadius="5px"
              border="1px dashed #9b9999ad"
              p="0 5px"
              ml={1}
              mr={1}
            >
              <FormattedMessage id="text.ProfitGuarantee" />
              <Text color="#6996f4" pl={1}>
                {formatMoney(profit.profit_guarantee_amount, "")}
              </Text>
            </Flex>
            <Image w="25px" p="0 5px" src={Protected} />
          </Flex>
        </>
      );
    }
  };

  return (
    <Flex
      alignItems="center"
      pt={2}
      pb={2}
      pl={{
        base: "calc(50vw - 186px)",
        sm: "calc(50vw - 186px)",
        md: 0,
        lg: 0,
      }}
    >
      <Text
        position="absolute"
        top="5px"
        left={{
          base: "calc(50vw - 170px)",
          sm: "calc(50vw - 170px)",
          md: "unset",
          lg: "unset",
        }}
        textAlign="center"
        w={{
          base: "100vw",
          sm: "100vw",
          md: "unset",
          lg: "unset",
        }}
        right={{ base: "unset", sm: "unset", md: "39px", lg: "39px" }}
      >
        <Text
          as="span"
          border="1px dashed #999999"
          px={1}
          borderRadius={5}
          mr={2}
        >
          <FormattedMessage id="text.Utctime" />
        </Text>
        {showTimes}
      </Text>
      <Flex>
        {pledge?.earnings_this_node > 0 ? (
          <Image
            src={MyBigbaby1}
            h={{ base: "110px", sm: "110px", md: "130px", lg: "130px" }}
            w={{ base: "110px", sm: "110px", md: "150px", lg: "150px" }}
            pb={1}
          />
        ) : (
          <Flex>
            {pledge?.earnings_this_node < 0 ? (
              <Image
                src="/img/noactivity.svg"
                h={{ base: "110px", sm: "110px", md: "130px", lg: "130px" }}
                w={{ base: "110px", sm: "110px", md: "150px", lg: "150px" }}
                pb={1}
              />
            ) : (
              <Image
                src={MyBigbaby}
                h={{ base: "110px", sm: "110px", md: "130px", lg: "130px" }}
                w={{ base: "110px", sm: "110px", md: "150px", lg: "150px" }}
                pb={1}
              />
            )}
          </Flex>
        )}
      </Flex>
      <Flex flexDir="column">
        {pledge?.status == "Finished" ? (
          <Flex
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <Flex
              sx={{
                fontSize: {
                  base: "2.1rem",
                  sm: "2.1rem",
                  md: "2.1rem",
                  lg: "2.5rem",
                },
                lineHeight: "2rem",
                paddingRight: "10px",
              }}
            >
              <Flex fontWeight="500" whiteSpace="nowrap">
                <FormattedMessage id="trade.head.0" />
                <Text whiteSpace="nowrap" as="b" color="#57b4fc">
                  &nbsp;CO&nbsp;
                </Text>
                <Text>
                  <FormattedMessage id="trade.intro.text" />
                </Text>
              </Flex>
            </Flex>
          </Flex>
        ) : (
          <Flex
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <Flex
              sx={{
                fontSize: {
                  base: "2.1rem",
                  sm: "2.1rem",
                  md: "2.1rem",
                  lg: "2.5rem",
                },
                lineHeight: "2rem",
                paddingRight: "10px",
              }}
            >
              {pledge?.earnings_this_node > 0 ? (
                <Flex fontWeight="500" whiteSpace="nowrap" color="#088550">
                  <Text whiteSpace="nowrap" as="b" color="#57b4fc">
                    CO&nbsp;
                  </Text>
                  <Text
                    className="tracking-in-expand"
                    w={{ base: "200px", sm: "200px", md: "220px", lg: "220px" }}
                    textAlign="center"
                  >
                    <FormattedMessage id="trade.head.3" />
                  </Text>
                </Flex>
              ) : (
                <Flex>
                  {pledge?.earnings_this_node < 0 ? (
                    <Flex whiteSpace="nowrap" color="#cf202f" fontWeight="500">
                      <Text as="b" color="#57b4fc">
                        CO&nbsp;
                      </Text>
                      <Text
                        className="bounce-in-fwd"
                        w={{
                          base: "200px",
                          sm: "200px",
                          md: "220px",
                          lg: "220px",
                        }}
                        textAlign="center"
                      >
                        <FormattedMessage id="trade.head.5" />
                      </Text>
                    </Flex>
                  ) : (
                    <Flex whiteSpace="nowrap" fontWeight="500">
                      <FormattedMessage id="trade.head.0" />
                      <Text as="b" color="#57b4fc" px={2}>
                        CO&nbsp;
                      </Text>
                      !
                    </Flex>
                  )}
                </Flex>
              )}
            </Flex>
            <Flex
              fontSize={{
                base: "1.3rem",
                sm: "1.3rem",
                md: "2.1rem",
                lg: "2.5rem",
              }}
              fontWeight="500"
              lineHeight="2rem"
            >
              {pledge?.earnings_this_node > 0 ? (
                <Text fontWeight="500" whiteSpace="nowrap">
                  <FormattedMessage id="trade.head.4" />
                </Text>
              ) : (
                <Flex>
                  {pledge?.earnings_this_node < 0 ? (
                    <Text fontWeight="500" whiteSpace="nowrap">
                      <FormattedMessage id="trade.head.6" />
                    </Text>
                  ) : (
                    <Text whiteSpace="nowrap">
                      <FormattedMessage
                        id="trade.head.1"
                        values={{ name: "Ai Trade" }}
                      />
                    </Text>
                  )}
                </Flex>
              )}
            </Flex>
          </Flex>
        )}

        <Flex
          flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        >
          <Text
            color="#9a9a9a"
            pt={{ base: 0, sm: 0, md: 2, lg: 4 }}
            pr={5}
            lineHeight="1.2rem"
          >
            <FormattedMessage id="trade.head.2" />
          </Text>
          <Text
            color="#9a9a9a"
            pt={{ base: 0, sm: 0, md: 2, lg: 4 }}
            lineHeight="1.2rem"
            fontSize={{ base: "0.7rem", sm: "0.7rem", md: "1rem", lg: "1rem" }}
          >
            {getDayYmHm(pledge?.started_at)} - {getDayYmHm(pledge?.ended_at)}
          </Text>
        </Flex>
      </Flex>

      <Flex
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        sx={{
          overflowX: "hidden",
          position: "absolute",
          top: "35px",
          right: "39px",
          h: "110px",
          overflowY: "auto",
        }}
      >
        <Table minHeight="105px" className="slide-in-bottom">
          <Tbody>
            {getData?.data?.map((profit: any, index: number) => {
              return (
                <Tr key={"tr_" + index}>
                  <Td
                    p="4px 0"
                    border="unset"
                    w="100%"
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <HStack flexDirection="column">
                      <RTag profit={profit} />
                    </HStack>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
};
