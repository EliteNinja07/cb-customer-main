import MyIconTitle1 from "@/assets/images/getStarted-0.svg";
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

import { useMyIntl } from "../../../common/libs/intl/useMyIntl";
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
  const { lang } = useMyIntl("GettingstartedwithCoinbase");
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
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>{lang[1]}</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Flex alignItems="center" pt={10}>
              <Image boxSize="58px" marginRight="30px" src={MyIconTitle1} />
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
                pt={8}
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
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/create-a-Coinbase-account">
                    {lang[4]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/verify-your-identify-on-coinbase">
                    {lang[5]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/what-is-2-step-verification">
                    {lang[6]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/earn">{lang[7]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Learning-rewards">{lang[8]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Coinbase">{lang[9]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/New-user-incentive">{lang[10]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/First-stake-incentive">{lang[11]}</Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={8}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[12]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Identity-document-verification-troubleshooting">
                    {lang[13]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Available-two-step-verification-apps">
                    {lang[14]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-2-step-verification">
                    {lang[15]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Set-up-2-step-verification">
                    {lang[16]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-verify-my-identity-through-the-mobile-app">
                    {lang[17]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Enabling-Duo-or-Google-Authenticator">
                    {lang[18]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Identity-photo-verification">
                    {lang[19]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Device-confirmation-troubleshooting">
                    {lang[20]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Security-keys-FAQ">{lang[21]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Security-key-restrictions">
                    {lang[22]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-to-enable-a-webcam">{lang[23]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Verifying-my-information">
                    {lang[24]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/Coinbase-Security-Prompt">
                    {lang[25]}
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={8}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[26]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-add-a-payment-method-on-the-mobile-app">
                    {lang[27]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-buy-cryptocurrency-with-a-credit-or-debit-card-in-Europe-and-the-UK">
                    {lang[28]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-verify-my-bank-info">
                    {lang[29]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Cash-balances">{lang[30]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-to-successfully-verify-a-billing-address">
                    {lang[31]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Payment-methods-for-Canadian-customers">
                    {lang[32]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Payment-methods-for-European-customers">
                    {lang[33]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Payment-methods-for-Singapore-customers">
                    {lang[34]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Payment-methods-for-UK-customers">
                    {lang[35]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Payment-methods-for-US-customers">
                    {lang[36]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/PayPal-FAQ">{lang[37]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Using-a-bank-account-as-a-payment-method-for-US-customers">
                    {lang[38]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-are-my-payment-method-verification-amounts-incorrect">
                    {lang[39]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Instant-Cashouts">{lang[40]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/Gift-cards">{lang[41]}</Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={8}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[42]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Coinbase">{lang[43]}</Link>
                </Text>
                {/*<Text as="li" display="list-item" pt={6}><Link to="/home/help/Crypto-Glossary">*/}
                {/*    {lang[44]}*/}
                {/*</Link></Text>*/}
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Can-I-cancel-a-cryptocurrency-transaction">
                    {lang[45]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-get-a-crypto-address">
                    {lang[46]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Learning-rewards">{lang[47]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-do-cryptocurrencies-change-value">
                    {lang[48]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-do-I-see-cryptocurrencies">
                    {lang[49]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-a-transaction-hash-ID">
                    {lang[50]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Trade-page-information">{lang[51]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Ethereum-Classic">
                    {lang[52]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Bitcoin">{lang[53]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-the-Bitcoin-Blockchain">
                    {lang[54]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Bitcoin-Cash">{lang[55]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Ethereum">{lang[56]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Ethereum-Classic-and-the-Ethereum-hard-fork">
                    {lang[57]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-EIP-1559">{lang[58]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Coinbase-Pro">{lang[59]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Where-is-my-crypto-address">
                    {lang[60]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Altcoins-and-ICOs">{lang[61]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/USD-Coin-rewards-FAQ">{lang[62]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/USDC-Regions">{lang[63]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Where-can-I-spend-Bitcoin">
                    {lang[64]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-Litecoin">{lang[65]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Cardano-address-restrictions">
                    {lang[66]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-Bundles-FAQ">{lang[67]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-is-a-Bitcoin-wallet">
                    {lang[68]}
                  </Link>
                </Text>
                {/*<Text as="li" display="list-item" pt={6}><Link to="/home/help/Stellar-Lumen-distribution">*/}
                {/*    {lang[69]}*/}
                {/*</Link></Text>*/}
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Orchid-FAQ">{lang[70]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/KNC-token-upgrade">{lang[71]}</Link>
                </Text>
                {/*<Text as="li" display="list-item" pt={6}><Link to="/home/help/Bitcoin-glossary">*/}
                {/*    {lang[72]}*/}
                {/*</Link></Text>*/}
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/What-is-ERC20">{lang[73]}</Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={8}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                {lang[74]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Can-I-create-a-Coinbase-account-in-the-name-of-a-trust">
                    {lang[75]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Does-Coinbase-have-phone-support-in-my-country">
                    {lang[76]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-Support-contact-information">
                    {lang[77]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-mobile-devices-does-Coinbase-support">
                    {lang[78]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-set-up-a-vault">
                    {lang[79]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/International-support">{lang[80]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Invest-responsibly">{lang[81]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Vaults">{lang[82]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-mobile-devices-does-Coinbase-support">
                    {lang[83]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-Sweepstakes">{lang[84]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Sharing-my-Coinbase-Portfolio">
                    {lang[85]}
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
              <Flex sx={styles.RAcives}>
                <Link to="/home/help/Getting-started">{lang[86]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Managing-my-account">{lang[87]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Trading-and-funding">{lang[88]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/taxes-and-reports">{lang[89]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Privacy-and-security">{lang[90]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Other-topics">{lang[91]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help">{lang[92]}</Link>
              </Flex>
            </div>
          </Flex>
        </Flex>
      </Flex>
      <GettingFooter />
    </Flex>
  );
};
