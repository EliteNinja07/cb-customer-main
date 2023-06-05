import MyTaxSeason from "@/assets/images/help/taxSeason.svg";
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
  const { lang } = useMyIntl("Taxes");
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
              <Image boxSize="58px" marginRight="30px" src={MyTaxSeason} />
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
                  <Link to="/home/help/Understanding-Coinbase-taxes">
                    {lang[4]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Using-TurboTax-or-CoinTracker-to-report-on-cryptocurrency">
                    {lang[5]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/GiveCrypto">{lang[6]}</Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Taxes-for-German-customers">
                    {lang[7]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Ensure-youre-not-paying-taxes-twice">
                    {lang[8]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Do-I-qualify-for-Coinbase-tax-forms-for-the-2021-tax-season">
                    {lang[9]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Edit-transaction-details">
                    {lang[10]}
                  </Link>{" "}
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Cost-basis-accounting">{lang[11]}</Link>{" "}
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
                {lang[12]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Form-8949">{lang[13]}</Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Form-W-9">{lang[14]}</Link>
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
                {lang[15]}
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Download-my-tax-reports">
                    {lang[16]}
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Accessing-my-account-documents">
                    {lang[17]}
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
                <Link to="/home/help/Getting-started">{lang[18]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Managing-my-account">{lang[19]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Trading-and-funding">{lang[20]}</Link>
              </Flex>
              <Flex sx={styles.RAcives}>
                <Link to="/home/help/taxes-and-reports">{lang[21]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Privacy-and-security">{lang[22]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Other-topics">{lang[23]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help">{lang[24]}</Link>
              </Flex>
            </div>
          </Flex>
        </Flex>
      </Flex>
      <GettingFooter />
    </Flex>
  );
};
