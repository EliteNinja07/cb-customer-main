import {
  formatMoney,
  MyCard,
  TextCardHeader,
  formatPercent,
} from "../../../../common";
import CardChartsLine from "../../../../components/CardChartsLine";
import { Divider, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MyItem from "./item";
import { FormattedMessage, useIntl } from "react-intl";

const styles = {
  itemsTitle: {
    fontSize: "1.2rem",
    fontWeight: "400",
  },
  itemsVal: {
    fontSize: "1rem",
    fontWeight: 400,
    padding: "0.2rem 0",
  },
  coinLogo: {
    width: "40px",
    height: "40px",
    borderRadius: "100px",
    border: "1px solid #999",
  },
  coinName: {
    fontSize: "2rem",
    padding: "0 1rem",
  },
};

export default ({ tdata }: any) => {
  const [getInfo, setInfo] = useState<any>({});
  const intl = useIntl();

  useEffect(() => {
    setInfo(tdata?.info);
  }, [tdata?.info]);

  const fanyi = [
    {
      label: intl.formatMessage({ id: "coin.MarketStats" }),
      desc: intl.formatMessage({
        id: "coin.MarketStatsDesc",
      }),
      val: formatMoney(getInfo?.market_data?.market_cap?.usd),
    },
    {
      label: intl.formatMessage({ id: "coin.Volume24h" }),
      desc: intl.formatMessage({
        id: "coin.Volume24hDesc",
      }),
      val: formatMoney(getInfo?.market_data?.market_cap_change_24h, ""),
    },
    {
      label: intl.formatMessage({ id: "coin.Circulating" }),
      desc: intl.formatMessage({
        id: "coin.CirculatingDesc",
      }),
      val: formatMoney(getInfo?.market_data?.circulating_supply, ""),
    },
    {
      label: intl.formatMessage({ id: "coin.Popularity" }),
      desc: intl.formatMessage({
        id: "coin.PopularityDesc",
      }),
      val: `#${getInfo?.market_cap_rank ?? ""}`,
    },

    {
      label: intl.formatMessage({ id: "coin.AllTimeHigh" }),
      desc: intl.formatMessage({
        id: "coin.AllTimeHighDesc",
      }),
      val: formatMoney(getInfo?.market_data?.ath.usd),
    },
    {
      label: intl.formatMessage({ id: "coin.AllTimeLow" }),
      desc: intl.formatMessage({
        id: "coin.AllTimeLowDesc",
      }),
      val: formatMoney(getInfo?.market_data?.atl.usd),
    },
    {
      label: intl.formatMessage({ id: "coin.PRICECHANGE24H" }),
      desc: intl.formatMessage({
        id: "coin.PRICECHANGE24HDesc",
      }),
      val: formatMoney(getInfo?.market_data?.price_change_24h),
    },
    {
      label: intl.formatMessage({ id: "coin.PRICECHANGE7D" }),
      desc: intl.formatMessage({
        id: "coin.PRICECHANGE7DDesc",
      }),
      val: formatMoney(
        getInfo?.market_data?.price_change_percentage_7d_in_currency.usd
      ),
    },

    {
      label: intl.formatMessage({ id: "coin.PRICECHANGE1H" }),
      desc: intl.formatMessage({
        id: "coin.PRICECHANGE1HDesc",
      }),
      val: formatPercent(
        getInfo?.market_data?.price_change_percentage_1h_in_currency.usd / 100
      ),
    },
  ];

  return (
    <MyCard flexDir="column" pt={6} mb={5}>
      <Flex px={6} sx={{ alignItems: "center" }}>
        <Image src={getInfo?.image?.small} sx={styles.coinLogo} />
        <Text sx={styles.coinName}>{getInfo?.symbol}</Text>
      </Flex>
      <CardChartsLine chardata={tdata} />
      <Divider />
      <TextCardHeader>
        <FormattedMessage id="coin.MarketStats" />
      </TextCardHeader>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 4 }}
        spacing={15}
        px={6}
      >
        <MyItem
          label={fanyi[0].label}
          desc={fanyi[0].desc}
          val={fanyi[0].val}
        />
        <MyItem
          label={fanyi[1].label}
          desc={fanyi[1].desc}
          val={fanyi[1].val}
        />
        <MyItem
          label={fanyi[2].label}
          desc={fanyi[2].desc}
          val={fanyi[2].val}
        />
        <MyItem
          label={fanyi[3].label}
          desc={fanyi[3].desc}
          val={fanyi[3].val}
        />
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 4 }}
        spacing={15}
        px={6}
        py={6}
      >
        {/* <MyItem
          label={"TRADING ACTIVITY--"}
          desc={`The percentage of Coinbase customers who increased or decreased their net position in BTC over the past 24 hours through trading.
          What this means:
          Increased buying activity can signal that the asset is gaining popularity.`}
          val={`HK$${getInfo?.market_cap_rank}T`}
        /> */}
        <MyItem
          label={fanyi[4].label}
          desc={fanyi[4].desc}
          val={fanyi[4].val}
        />
        <MyItem
          label={fanyi[5].label}
          desc={fanyi[5].desc}
          val={fanyi[5].val}
        />
        <MyItem
          label={fanyi[6].label}
          desc={fanyi[6].desc}
          val={fanyi[6].val}
        />
        <MyItem
          label={fanyi[7].label}
          desc={fanyi[7].desc}
          val={fanyi[7].val}
        />
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 4 }}
        spacing={15}
        px={6}
        pb={6}
      >
        <MyItem
          label={fanyi[8].label}
          desc={fanyi[8].desc}
          val={fanyi[8].val}
        />
      </SimpleGrid>
    </MyCard>
  );
};
