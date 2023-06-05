import { Flex, Text, Highlight } from "@chakra-ui/react";
import TimeTab from "./TimeTab";
import MyChartsLine from "../ChartsLine";
import { useEffect, useState } from "react";
import { formatPercent, objectArr } from "../../common";

export default ({ chardata }: any) => {
  const [resChartData, setChartRes] = useState<any>({});
  const [getQuotesType, setQuotesType] = useState("1D");
  const [getQuotesData, setQuotesData] = useState([]);
  const getChartData = () => {
    setChartRes(chardata);
    setQuotesData(
      chardata?.data
        ? objectArr(chardata?.data[getQuotesType], getQuotesType)
        : []
    );
  };
  useEffect(() => {
    if (chardata?.data) {
      getChartData();
    }
  }, [chardata]);
  return (
    <>
      <Flex pt={2} px={6} flexWrap="wrap">
        <Flex flexDir="column" flex="1" className="balance-l-c">
          <Text
            fontWeight="var(--cds-fontWeights-medium)"
            py={2}
            fontSize="2.3rem"
            lineHeight="2.3rem"
          >
            ${chardata?.info?.market_data?.current_price?.usd}
          </Text>
          {chardata?.info?.market_data?.price_change_percentage_24h > 0 ? (
            <Text color="#098551">
              <Highlight query="All time" styles={{ color: "#000" }}>
                {`↗ ${formatPercent(
                  chardata?.info?.market_data?.price_change_percentage_24h / 100
                )} All time`}
              </Highlight>
            </Text>
          ) : (
            <Text color="#f00">
              <Highlight query="All time" styles={{ color: "#000" }}>
                {`↙ ${formatPercent(
                  chardata?.info?.market_data?.price_change_percentage_24h
                )} All time`}
              </Highlight>
            </Text>
          )}
        </Flex>
        <Flex className="balance-r-c">
          <TimeTab
            onChange={(key: string) => {
              setQuotesType(key);
              setQuotesData(objectArr(resChartData?.data[key], key));
              console.log(key, "eee");
            }}
          />
        </Flex>
      </Flex>
      <Flex w="full" pb={2}>
        <MyChartsLine data={getQuotesData} type={getQuotesType} />
      </Flex>
    </>
  );
};
