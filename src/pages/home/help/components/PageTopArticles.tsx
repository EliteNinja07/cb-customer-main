import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const styles = {
  LinkA: {
    _hover: {
      color: "#0052ff",
    },
  },
};
export default () => {
  // const { lang } = useMyIntl("HowtoverifyyouridentityonCoinbase");
  const lang = "";
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
      py={10}
      px={{ base: 6, sm: 6, md: 0, lg: 0 }}
    >
      <Flex py={3} sx={styles.LinkA}>
        <Link to="why-is-my-transaction-pending">{lang[0]}</Link>
      </Flex>
      <Flex py={3} sx={styles.LinkA}>
        <Link to="Tracking-your-rewards-payouts">{lang[1]}</Link>
      </Flex>
      <Flex py={3} sx={styles.LinkA}>
        <Link to="Available-balance">{lang[2]}</Link>
      </Flex>
      <Flex py={3} sx={styles.LinkA}>
        <Link to="verify-your-identify-on-coinbase">{lang[3]}</Link>
      </Flex>
      <Flex py={3} sx={styles.LinkA}>
        <Link to="Coinbase-pricing-and-fees-disclosures">{lang[4]}</Link>
      </Flex>
      <Flex py={3} sx={styles.LinkA}>
        <Link to="Earn-rewards-with-staking-and-inflation-on-Coinbase">
          {lang[5]}
        </Link>
      </Flex>
    </SimpleGrid>
  );
};
