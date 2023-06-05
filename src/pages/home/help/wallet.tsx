import MyIconTitle1 from "@/assets/images/wallet.svg";
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
  const { lang } = useMyIntl("CoinbaseWallet");
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
                  <Link to="/home/help/What-is-Coinbase-Wallet">{lang[4]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Whats-the-difference-between-Coinbasecom-and-Coinbase-Wallet">
                    {lang[5]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Create-a-Coinbase-Wallet">
                    {lang[6]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/Supported-assets-and-networks">
                    {lang[7]}
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
                {lang[8]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Manage-your-wallet">{lang[9]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Adding-crypto-to-your-wallet">
                    {lang[10]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-Decentralized-ID">
                    {lang[11]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Using-the-Explore-Tab">{lang[12]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Token-Management">{lang[13]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/Multi-Wallet-support-for-Ethereum-and-Solana">
                    {lang[14]}
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
                {lang[15]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-happens-if-I-send-crypto-to-the-wrong-address">
                    {lang[16]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-move-crypto-between-my-Coinbase-Wallet-and-Coinbasecom-account">
                    {lang[17]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-send-and-receive-crypto">
                    {lang[18]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Adjusting-network-fees">{lang[19]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Bridging-your-crypto">{lang[20]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/Layer-2-networks-and-sidechains">
                    {lang[21]}
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
                {lang[22]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Whats-a-dapp">{lang[23]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Earn-crypto-using-dapps">
                    {lang[24]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Swap">{lang[25]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/Transaction-previews">{lang[26]}</Link>
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
                {lang[27]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Set-up-the-Coinbase-Wallet-browser-extension">
                    {lang[28]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Supported-networks-and-assets">
                    {lang[29]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Add-funds-to-the-Coinbase-Wallet">
                    {lang[30]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Send-and-receive-crypto">
                    {lang[31]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/Using-Coinbase-Pay">{lang[32]}</Link>
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
                {lang[33]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Dapp-permissions-and-token-approvals">
                    {lang[34]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Avoiding-crypto-scams">{lang[35]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={10}>
                  <Link to="/home/help/Identify-and-avoid-malicious-dapps">
                    {lang[36]}
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={8}
                fontSize={{
                  base: "1.75rem",
                  sm: "1.75rem",
                  md: "2.5rem",
                  lg: "2.5rem",
                }}
                id="#"
              >
                {lang[37]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Text as="li" display="list-item" pt={6} pb={10}>
                    <Link to="/home/help/NFT-Offers-Tab">{lang[38]}</Link>
                  </Text>
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
                {lang[39]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Troubleshooting-and-tips">
                    {lang[40]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Linking-to-Instagram">{lang[41]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Moving-unsupported-assets">
                    {lang[42]}
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
            <div style={getFixed}></div>
          </Flex>
        </Flex>
      </Flex>
      <GettingFooter />
    </Flex>
  );
};
