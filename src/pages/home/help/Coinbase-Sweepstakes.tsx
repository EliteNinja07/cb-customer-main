import {
  Flex,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Box,
  Link,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import { useMyIntl } from "../../../common";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

import GettingFooter from "./components/GettingFooter";
import PageHelpful from "./components/PageHelpful";

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
  const { lang } = useMyIntl("CoinbaseSweepstakes");
  return (
    <Flex sx={styles.helpSearchC}>
      <Flex w="100%" flexDir="column" margin="0 auto" px={5}>
        <Flex sx={styles.headSearch}>
          <Flex sx={styles.headIcon}>
            <SearchIcon />
          </Flex>
          <Flex flex="1" pr={4}>
            <Input variant="unstyled" placeholder="How can we help you?" />
          </Flex>
          <Flex sx={styles.headClone}>
            <SmallCloseIcon boxSize={6} />
          </Flex>
        </Flex>
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
                  <BreadcrumbLink href="/home/help/getting-started">
                    {lang[1]}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="/home/help/Coinbase-Sweepstakes">
                    {lang[2]}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize="3rem"
              py={3}
            >
              {lang[3]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[4]}
            </Text>
            <Flex>
              {" "}
              <Accordion w="100%" allowMultiple>
                {" "}
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      {" "}
                      <h1>
                        {" "}
                        <AccordionButton
                          py={5}
                          sx={{ color: "#1652f0", _hover: { bg: "none" } }}
                        >
                          {" "}
                          <Box
                            flex="1"
                            fontSize="var(--cds-fontSizes-xl)"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[5]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text fontSize="1rem" pt={6}>
                          {lang[6]}
                          <Link color="#1652f0" href="#">
                            {lang[7]}
                          </Link>
                          {lang[8]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Text fontSize="1rem" pt={6}>
                            {lang[9]}
                            <Link color="#1652f0" href="#">
                              {lang[10]}
                            </Link>
                            {lang[11]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[12]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[13]}
                          </Text>
                          <Text as="ul" fontSize="1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              {lang[14]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[15]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[16]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[17]}
                            </Text>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[18]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[19]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[20]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[21]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[22]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[23]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[24]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[25]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[26]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[27]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[28]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[29]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[30]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[31]}
                            <Link color="#1652f0" href="#">
                              {lang[32]}
                            </Link>
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[33]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[34]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[35]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[36]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[37]}
                          </Text>
                          <Text as="ul" fontSize="1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              {lang[38]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[39]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[40]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[41]}
                            </Text>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[42]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[43]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[44]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[45]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[46]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[47]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[48]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            info@mail.coinbase.com
                          </Text>
                          <Text as="li" display="list-item">
                            no-reply@coinbase.com
                          </Text>
                          <Text as="li" display="list-item">
                            marketing@cb.mail.coinbase.com
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[49]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[50]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[51]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[52]}
                            <Link color="#1652f0" href="#">
                              {lang[53]}
                            </Link>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[54]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[55]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[56]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[57]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[58]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[59]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[60]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[61]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[62]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[63]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[64]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[65]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[66]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[67]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[68]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[69]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[70]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[71]}
                          <Link color="#1652f0" href="#">
                            {lang[72]}
                          </Link>
                          .
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[73]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[74]}
                        </Text>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>
            <Flex>
              {" "}
              <Accordion w="100%" allowMultiple>
                {" "}
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      {" "}
                      <h1>
                        {" "}
                        <AccordionButton
                          py={5}
                          sx={{ color: "#1652f0", _hover: { bg: "none" } }}
                        >
                          {" "}
                          <Box
                            flex="1"
                            fontSize="var(--cds-fontSizes-xl)"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[75]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text fontSize="1rem" pt={6}>
                          {lang[76]}
                          <Link color="#1652f0" href="#">
                            {lang[77]}
                          </Link>
                          {lang[78]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[79]}
                          <Link color="#1652f0" href="#">
                            {lang[80]}
                          </Link>
                          {lang[81]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[82]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[83]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[84]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[85]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[86]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[87]}
                          </Text>
                          <Text as="ul" fontSize="1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              {lang[88]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[89]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[90]}
                            </Text>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[91]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[92]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[93]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[94]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[95]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[96]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[97]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[98]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[99]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[100]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[101]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[102]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[103]}
                          </Text>
                          <Text as="ul" fontSize="1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              {lang[104]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[105]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[106]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[107]}
                            </Text>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[108]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[109]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[110]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[111]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[112]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[113]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[114]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            info@mail.coinbase.com
                          </Text>
                          <Text as="li" display="list-item">
                            no-reply@coinbase.com
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[115]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[116]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[117]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          If you haven’t received a confirmation email, make
                          sure that:
                        </Text>
                        <Text as="ul" fontSize="1rem" pt={6} pl={6} pb="4">
                          <Text as="li" display="list-item">
                            {lang[118]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[119]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[120]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[121]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[122]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[123]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[124]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[125]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[126]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[127]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[128]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[129]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[130]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[131]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[132]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[133]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[134]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[135]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          For more information, please see the
                          <Link color="#1652f0" href="#">
                            {lang[136]}
                          </Link>
                          .
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[137]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[138]}
                          <Link color="#1652f0" href="#">
                            {lang[139]}
                          </Link>
                          {lang[140]}
                        </Text>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>
            <Flex>
              {" "}
              <Accordion w="100%" allowMultiple>
                {" "}
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      {" "}
                      <h1>
                        {" "}
                        <AccordionButton
                          py={5}
                          sx={{ color: "#1652f0", _hover: { bg: "none" } }}
                        >
                          {" "}
                          <Box
                            flex="1"
                            fontSize="var(--cds-fontSizes-xl)"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[141]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text fontSize="1rem" pt={6}>
                          {lang[142]}
                          <Link color="#1652f0" href="#">
                            {lang[143]}
                          </Link>
                          {lang[144]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[145]}
                          <Link color="#1652f0" href="#">
                            {lang[146]}
                          </Link>
                          {lang[147]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[148]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            <Text as="li" display="list-item">
                              <Text as="b">{lang[149]}</Text>
                              {lang[150]}
                            </Text>
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[151]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[152]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[153]}
                          <Link color="#1652f0" href="#">
                            {lang[154]}
                          </Link>
                          {lang[155]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[156]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[157]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[158]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[159]}
                          </Text>
                          <Text as="li" display="list-item">
                            <Link color="#1652f0" href="#">
                              {lang[160]}
                            </Link>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[161]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[162]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[163]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[164]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[165]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[166]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[167]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[168]}
                            <Link color="#1652f0" href="#">
                              {lang[169]}
                            </Link>
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[170]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[171]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[172]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[173]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[174]}
                          </Text>
                          <Text as="ul" fontSize="1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              {lang[175]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[176]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[177]}
                            </Text>
                            <Text as="li" display="list-item">
                              {lang[178]}
                            </Text>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[179]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[180]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[181]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[182]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[183]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[184]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[185]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            info@mail.coinbase.com
                          </Text>
                          <Text as="li" display="list-item">
                            no-reply@coinbase.com
                          </Text>
                          <Text as="li" display="list-item">
                            marketing@cb.mail.coinbase.com
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[186]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[187]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[188]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[189]}
                            <Link color="#1652f0" href="#">
                              {lang[190]}
                            </Link>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[191]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[192]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[193]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[194]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[195]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[196]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[197]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[198]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[199]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[200]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[201]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[202]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[203]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[204]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[205]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[206]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[207]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[208]}
                          <Link color="#1652f0" href="#">
                            {lang[209]}
                          </Link>
                          .
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.3rem"
                          id="#"
                        >
                          {lang[210]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[211]}
                          <Link color="#1652f0" href="#">
                            {lang[212]}
                          </Link>
                          {lang[213]}
                        </Text>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>
          </Flex>
          <Flex
            w={{ base: "100%", sm: "100%", md: "33%", lg: "33%" }}
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
            display="block"
          ></Flex>
        </Flex>
      </Flex>
      <PageHelpful />
      <GettingFooter />
    </Flex>
  );
};
