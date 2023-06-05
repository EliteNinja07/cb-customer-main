import MyNewUserChecklistBuyCrypto from "@/assets/images/help/newUserChecklistBuyCrypto.svg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useMyIntl } from "../../../common";
import GettingFooter from "./components/GettingFooter";

const styles = {
  helpSearchC: {
    width: "100%",
    minHeight: "calc(100vh - 68px - 64px)",
    display: "block",
  },
  headSearch: {
    border: "1px solid #5b636ea8",
    height: "60px",
    alignItems: "center",
    margin: "24px 0",
    borderRadius: "50px",
  },
  headIcon: {
    padding: "0 1.6rem",
  },
  headClone: {
    padding: "0 1.3rem",
  },
  gettingList: {
    padding: "2rem 0 1rem 0",
  },
  ListItems: {
    lineHeight: "2rem",
    "&:hover": {
      color: "#1652f0",
      textDecoration: "underline",
    },
  },
  GettingRightFixed: {
    borderLeft: "1px solid #98989829",
    fontSize: "14px",
    position: "fixed",
    top: "100px",
  },
  GettingRightRel: {
    borderLeft: "1px solid #98989829",
    fontSize: "14px",
    position: "relative",
    top: "0",
  },
  footers: {
    backgroundColor: "#90909024",
    padding: "6rem 0",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "2rem",
  },
  CellLink: {
    color: "#050f19",
    borderLeft: "4px solid #fff",
    padding: "0.35rem 0 0.35rem 1rem",
  },
  RAcives: {
    borderLeft: "4px solid #1652f0",
    color: "#1652f0",
    padding: "0.35rem 0 0.35rem 1rem",
  },
};
export default () => {
  const [getFixed, setFixed] = useState<any>(styles.GettingRightRel);
  const onScroll = (e: any) => {
    if (document.body.clientWidth > 768) {
      if (e.target.documentElement.scrollTop > 100) {
        setFixed(styles.GettingRightFixed);
      } else {
        setFixed(styles.GettingRightRel);
      }
    }
  };
  const resizeUpdate = (e: any) => {
    if (document.body.clientWidth < 768) {
      setFixed(styles.GettingRightRel);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", resizeUpdate);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("resize", resizeUpdate);
    };
  });
  const { lang } = useMyIntl("Sendingorreceivingcryptocurrency");
  return (
    <Flex sx={styles.helpSearchC}>
      <Flex w="100%" flexDir="column" margin="0 auto" px={5}>
        <Flex pt={10} flexWrap="wrap">
          <Flex
            flexDir="column"
            flex="1"
            sx={{
              padding: {
                base: "0 0.2rem",
                sm: "0 0.2rem",
                md: "0 2rem 0 0",
                lg: "0 2rem 0 0",
              },
            }}
          >
            <Flex>
              <Breadcrumb color="#708599" fontSize="13px">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/home/help">{lang[0]}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink>{lang[1]}</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Flex alignItems="center" pt={10}>
              <Image
                boxSize="58px"
                marginRight="30px"
                src={MyNewUserChecklistBuyCrypto}
              />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize={{
                  base: "1.75rem",
                  sm: "1.75rem",
                  md: "2.5rem",
                  lg: "2.5rem",
                }}
                pl={3}
              >
                {lang[2]}
              </Text>
            </Flex>
            <Flex flexDir="column" sx={styles.gettingList}>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[3]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/How-to-send-and-receive-cryptocurrency">
                    {lang[4]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Off-chain-sending-and-receiving">
                    {lang[5]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/I-sent-funds-to-the-wrong-address">
                    {lang[6]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-is-my-cryptocurrency-send-delayed">
                    {lang[7]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-is-my-transaction-pending">
                    {lang[8]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Assets-on-multiple-networks">
                    {lang[9]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Available-balance">{lang[10]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Destination-Tag-memo-FAQ">
                    {lang[11]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-to-send-and-receive-cryptocurrency">
                    {lang[12]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Does-Coinbase-support-smart-contracts">
                    {lang[13]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-return-a-cryptocurrency-transaction">
                    {lang[14]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Money-left-my-bank-account-where-is-my-digital-currency">
                    {lang[15]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Using-Destination-Tags-Memos-on-Coinbase">
                    {lang[16]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/When-will-I-receive-my-cryptocurrency-from-my-card-purchase">
                    {lang[17]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/When-will-my-digital-currency-purchase-or-local-currency-deposit-arrive">
                    {lang[18]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Top-up-a-crypto-send">{lang[19]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Does-Coinbase-support-Binance-Chain-BEP-2">
                    {lang[20]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Unsupported-Crypto-Recovery">
                    {lang[21]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Send-crypto-to-Mexico">{lang[22]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Crypto-gifts">{lang[23]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/My-investment-performance">
                    {lang[24]}
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[25]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Can-I-use-my-Coinbase-account-to-purchase-cryptocurrency-for-resale">
                    {lang[26]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Cancelling-a-purchase">{lang[27]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-to-set-up-recurring-buys">
                    {lang[28]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-buy-cryptocurrency">
                    {lang[29]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Increase-your-account-limits">
                    {lang[30]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-cash-out-my-funds">
                    {lang[31]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-long-does-a-purchase-or-deposit-take-to-complete">
                    {lang[32]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-long-does-a-sell-or-cashout-withdrawal-take-to-complete">
                    {lang[33]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Limits-and-account-levels">
                    {lang[34]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Purchasing-up-to-your-buy-limit">
                    {lang[35]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-the-minimum-amount-of-cryptocurrency-that-I-can-purchase">
                    {lang[36]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/When-do-my-limits-replenish">
                    {lang[37]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-cant-I-see-my-transaction-on-the-blockchain">
                    {lang[38]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-did-my-limits-change">
                    {lang[39]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-does-a-buy-take-so-long">
                    {lang[40]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-does-a-sell-take-so-long">
                    {lang[41]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-to-link-my-Coinbase-Wallet-to-my-Coinbasecom-account">
                    {lang[42]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-the-Experimental-asset-label">
                    {lang[43]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Understanding-slippage-and-spread">
                    {lang[44]}
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="/home/help/Advanced-Trade"
              >
                {lang[45]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/What-is-Advanced-Trade">{lang[46]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Advanced-Trade-dashboard-overvie">
                    {lang[47]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Understanding-the-order-types">
                    {lang[48]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Order-management">{lang[49]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Advanced-Trade-fees">{lang[50]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-slippage">{lang[51]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Advanced-Trade-error-messages">
                    {lang[52]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-a-view-only-market">
                    {lang[53]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/New-asset-listings">{lang[54]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/DeFi-Investment-Risks">{lang[55]}</Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[56]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Coinbase-pricing-and-fees-disclosures">
                    {lang[57]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-are-miner-fees-and-does-Coinbase-pay-them">
                    {lang[58]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/What-are-price-alerts">{lang[59]}</Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[60]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/How-to-send-and-receive-cryptocurrency">
                    {lang[61]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Convert-cryptocurrency-FAQ">
                    {lang[62]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Ripple-SEC-Lawsuit">{lang[63]}</Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[64]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/How-long-do-international-deposits-and-withdrawals-take">
                    {lang[65]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Available-transaction-types">
                    {lang[66]}
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="/home/help/Borrow"
              >
                {lang[67]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Borrow-Getting-started">{lang[68]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Payments-and-collateral">
                    {lang[69]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Loan-health">{lang[70]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Managing-my-loan">{lang[71]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Contacting-Coinbase">{lang[72]}</Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[73]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/line-of-credit-getting-started">
                    {lang[74]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Payments-and-collateral">
                    {lang[75]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Credit-health">{lang[76]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Managing-my-credit-account">
                    {lang[77]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Contacting-Coinbase">{lang[78]}</Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="/home/help/Coinbase-Card"
              >
                {lang[79]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
                pb={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Coinbase-Card-for-the-US">
                    {lang[80]}
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="Coinbaseearn"
              >
                {lang[81]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/DeFi-Yield">{lang[82]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Ethereum-20-Staking">{lang[83]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Earn-rewards-with-staking-and-inflation-on-Coinbase">
                    {lang[84]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Tracking-your-rewards-payouts">
                    {lang[85]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/USD-Coin-rewards-FAQ">{lang[86]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Dai-Rewards">{lang[87]}</Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[88]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Getting-started-with-Direct-Deposit">
                    {lang[89]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Managing-my-Direct-Deposit">
                    {lang[90]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Troubleshooting-Direct-Deposit-issues">
                    {lang[91]}
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[92]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
                pb={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Using-Coinbase-Pay">{lang[93]}</Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="/home/help/Asset-ratings"
              >
                {lang[94]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Asset-ratings-basics">{lang[95]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Trade-page-information">{lang[96]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Legal-Removals">{lang[97]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Asset-Ratings-Reviews-Content-Policy">
                    {lang[98]}
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[99]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/What-is-a-DEX">{lang[100]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-a-Dapp-Wallet">{lang[101]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Trading-on-a-DEX">{lang[102]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/DEX-Trading-Fees">{lang[103]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Check-Transaction-Status">
                    {lang[104]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Other-Questions">{lang[105]}</Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="/home/help/Staking-Rewards"
              >
                {lang[106]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/cbETH-Intro">{lang[107]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Using-cbETH">{lang[108]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Sourcing-cbETH-for-Exchange-customers">
                    {lang[109]}
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[110]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Overview">{lang[111]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Rewards-FAQ">{lang[112]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Trust-and-safety">{lang[113]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Account-details">{lang[114]}</Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[115]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Coinbase-Card-for-the-EU-and-UK">
                    {lang[116]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-countries-and-US-states-are-supported-for-Coinbase-and-cash-balances">
                    {lang[117]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-does-a-negative-balance-occur">
                    {lang[118]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-Card-for-the-US">
                    {lang[119]}
                  </Link>
                </Text>
              </Text>
            </Flex>
          </Flex>
          <Flex
            w={{ base: "100%", sm: "100%", md: "33%", lg: "33%" }}
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
            display="block"
          >
            <div style={getFixed}>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Getting-started">{lang[120]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Managing-my-account">{lang[121]}</Link>
              </Flex>
              <Flex sx={styles.RAcives}>
                <Link to="/home/help/Trading-and-funding">{lang[122]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/taxes-and-reports">{lang[123]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Privacy-and-security">{lang[124]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Other-topics">{lang[125]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help">{lang[126]}</Link>
              </Flex>
            </div>
          </Flex>
        </Flex>
      </Flex>
      <GettingFooter />
    </Flex>
  );
};
