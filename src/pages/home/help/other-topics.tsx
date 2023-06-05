import MySafeSvg from "@/assets/images/help/other.svg";
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
  const { lang } = useMyIntl("CoinbaseOnebeta");
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
              <Image boxSize="58px" marginRight="30px" src={MySafeSvg} />
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
              <Text as="ul" listStyleType="disc" fontSize="1.1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-One">{lang[4]}</Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-Account-Protection">
                    {lang[5]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-One-free-trial">{lang[6]}</Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-One-billing-plans">
                    {lang[7]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Download-Form-8949-for-Coinbase-One">
                    {lang[8]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Messari-Pro-free-trial">{lang[9]}</Link>
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
                {lang[10]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1.1rem" pl={6}>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Behavior-policy">{lang[11]}</Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Can-I-open-a-Coinbase-account-if-Im-under-18">
                    {lang[12]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-suspended-states">
                    {lang[13]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/E-Money-License">{lang[14]}</Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-is-Coinbase-insured">
                    {lang[15]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/LocalBitcoins-and-Coinbase">
                    {lang[16]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Who-do-I-contact-for-a-subpoena-request,-dispute,-or-to-send-a-legal-document">
                    {lang[17]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-do-I-have-to-provide-extra-information-when-I-send-money">
                    {lang[18]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-does-Coinbase-ask-for-my-personal-information-when-making-certain-transactions">
                    {lang[19]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-is-Coinbase-requesting-my-country-ID">
                    {lang[20]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Customer-account-update-for-German-customers-August-2021">
                    {lang[21]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Summary-of-German-user-agreement-changes-August-2021">
                    {lang[22]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Confirming-my-personal-information">
                    {lang[23]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Enhancing-Trust-with-Regulatory-Compliance">
                    {lang[24]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/July-2021-User-Agreement">
                    {lang[25]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/January-2022-Coinbase-User-Agreement-Update">
                    {lang[26]}
                  </Link>{" "}
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
                {lang[27]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-am-I-unable-to-upload-my-ID">
                    {lang[28]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-Service-during-COVID-19">
                    {lang[29]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Device-troubleshooting">{lang[30]}</Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Adjusting-your-display-settings">
                    {lang[31]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Troubleshooting-Coinbase-emails">
                    {lang[32]}
                  </Link>{" "}
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
                {lang[33]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Bankruptcy-trustee-guide">
                    {lang[34]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-User-Research">{lang[35]}</Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Does-Coinbase-freeze-accounts">
                    {lang[36]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-does-USAAs-Coinbase-integration-work">
                    {lang[37]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-on-social-media">
                    {lang[38]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/The-Coinbase-referral-program">
                    {lang[39]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/The-Newcastle-merchant-survey">
                    {lang[40]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/what-to-expect-during-the-planned-ethereum-network-upgrade-constantinople">
                    {lang[41]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Brexit-FAQ">{lang[42]}</Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-to-send-a-complaint">
                    {lang[43]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Coinbase-Community-Standards">
                    {lang[44]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Guide-for-asset-issuers">
                    {lang[45]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Non-Customer-privacy-FAQ">
                    {lang[46]}
                  </Link>{" "}
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
                <Link to="/home/help/Getting-started">{lang[47]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Managing-my-account">{lang[48]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Trading-and-funding">{lang[49]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/taxes-and-reports">{lang[50]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Privacy-and-security">{lang[51]}</Link>
              </Flex>
              <Flex sx={styles.RAcives}>
                <Link to="/home/help/Other-topics">{lang[52]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help">{lang[53]}</Link>
              </Flex>
            </div>
          </Flex>
        </Flex>
      </Flex>
      <GettingFooter />
    </Flex>
  );
};
