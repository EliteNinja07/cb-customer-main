import { Flex, Text, Image, Highlight } from "@chakra-ui/react";
import {
  request,
  formatMoney,
  formatPercent,
  MyCard,
  useMyToast,
} from "../../common";
import TimeTab from "../TimeTab";
import MoneyImg from "../../assets/images/usdc.svg";
import AssetsLine from "../AssetsLine";
import { useEffect, useState } from "react";
import NoActivity from "../NoActivity";
import { FormattedMessage, useIntl } from "react-intl";

export default ({ apiurl, xkey = "datetime", ykey = "balance" }: any) => {
  const { showRes } = useMyToast();
  const [resChartData, setChartRes] = useState<any>({});
  const [resHeaderData, setHeaderData] = useState<any>({});
  const [getQuotesType, setQuotesType] = useState("1D");
  const [getQuotesData, setQuotesData] = useState([]);
  const intl = useIntl();
  const api = {
    onShow: () => {
      request(apiurl, {})
        .then((res: any) => {
          // console.log(res, "res", res.data.data["1D"]);
          setChartRes(res.data.data);
          setHeaderData(res.data.header);
          setQuotesData(res.data.data["1D"]);
        })
        .catch(showRes);
    },
  };
  const actions = {
    onGetQuotesData: () => {
      // console.log(getQuotesData?.length > 0, "getQuotesData");
      if (getQuotesData?.length > 0) {
        return (
          <>
            <AssetsLine
              data={getQuotesData}
              type={getQuotesType}
              xkey={xkey}
              ykey={ykey}
            />
          </>
        );
      } else {
        return <NoActivity type="2" />;
      }
    },
  };
  useEffect(() => {
    api.onShow();
  }, []);
  return (
    <MyCard flexDir="column" pt={6} mb={5}>
      <Flex pt={2} px={6} flexWrap="wrap">
        <Flex flexDir="column" flex="1" className="balance-l-c">
          <Text color="#5b616e" fontSize="1.2rem">
            <FormattedMessage
              id={ykey == "balance" ? "text.MyBalance" : "text.YouYield"}
            />
          </Text>
          <Flex
            fontWeight="var(--cds-fontWeights-medium)"
            py={2}
            fontSize="2.3rem"
            lineHeight="2.3rem"
          >
            <Image w="36px" h="36px" pr="var(--cds-space-1)" src={MoneyImg} />
            {formatMoney(resHeaderData?.balance, "")}
          </Flex>
          {parseFloat(resHeaderData?.rate) >= 0 ? (
            <Text color="#098551">
              <Highlight query="All time" styles={{ color: "#000" }}>
                {"↗ " +
                  formatPercent(resHeaderData?.rate) +
                  intl.formatMessage({ id: "text.AllTime" })}
              </Highlight>
            </Text>
          ) : (
            <Text color="#f00">
              <Highlight query="All time" styles={{ color: "#000" }}>
                {"↙ " +
                  formatPercent(resHeaderData?.rate) +
                  intl.formatMessage({ id: "text.AllTime" })}
              </Highlight>
            </Text>
          )}
        </Flex>
        <Flex className="balance-r-c">
          <TimeTab
            onChange={(res: string) => {
              setQuotesType(res);
              setQuotesData(resChartData[res]);
            }}
          />
        </Flex>
      </Flex>
      <Flex pt={2} h="330px">
        {actions.onGetQuotesData()}
      </Flex>
    </MyCard>
  );
};
