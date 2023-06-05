import {
  AddIcon,
  MinusIcon,
  SearchIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useMyIntl } from "../../../common/libs/intl/useMyIntl";
import FixedRightList from "./components/FixedRightList";
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
  const RListC = [
    {
      label: "Instant Card Cashouts",
      href: "#as",
    },
    {
      label: "Instant Bank Cashouts",
      href: "#ad",
    },
  ];
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
  const { lang } = useMyIntl("InstantCashouts");
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
                  <BreadcrumbLink>{lang[2]}</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize="var(--cds-sizes-10)"
              py={3}
            >
              {lang[3]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[4]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[5]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[6]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[7]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[8]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[9]}
              <Link color="#1652f0" href="#">
                {lang[10]}
              </Link>
              {lang[11]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="as"
            >
              {lang[12]}
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
                            <Text>{lang[13]}</Text>
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
                          {lang[14]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[15]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[16]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[17]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.75rem"
                          letterSpacing="-0.08rem"
                          id="#"
                        >
                          {lang[18]}
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
                            {lang[19]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[20]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[21]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[22]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[23]}
                        </Text>
                        <Text as="b">{lang[24]}</Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[25]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[26]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[27]}
                          </Text>
                        </Text>
                        <Text as="b">{lang[28]}</Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
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
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[31]}
                          <Link color="#1652f0" href="#">
                            {lang[32]}
                          </Link>
                          {lang[33]}
                          <Link color="#1652f0" href="#">
                            {lang[34]}
                          </Link>
                          {lang[35]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[36]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[37]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[38]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[39]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[40]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Text as="b">{lang[41]}</Text>
                          {lang[42]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[43]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Link color="#1652f0" href="#">
                            {lang[44]}
                          </Link>
                          {lang[45]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[46]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[47]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[48]}
                          <Text as="b">GBP, Euro,</Text>
                          {lang[49]}
                          <Text as="b">USD</Text>
                          {lang[50]}
                          <Text as="b">USD</Text>
                          {lang[51]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[52]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[53]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[54]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[55]}
                          <Link color="#1652f0" href="#">
                            {lang[56]}
                          </Link>
                          .
                        </Text>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="ad"
            >
              {lang[57]}
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
                            <Text>{lang[58]}</Text>
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
                          {lang[59]}
                          <Link color="#1652f0" href="#">
                            {lang[60]}
                          </Link>
                          {lang[61]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[62]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[63]}
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
                            {lang[64]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[65]}
                            <Link color="#1652f0" href="#">
                              {lang[66]}
                            </Link>
                            {lang[67]}
                            <Link color="#1652f0" href="#">
                              {lang[68]}
                            </Link>
                            *.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[69]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[70]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[71]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[72]}
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
                            {lang[73]}
                            <Text as="b">USD</Text>
                            {lang[74]}
                            <Link color="#1652f0" href="#">
                              {lang[75]}
                            </Link>
                            {lang[76]}
                            <Text as="b">USD</Text>
                            {lang[77]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[78]}
                            <Link color="#1652f0" href="#">
                              {lang[79]}
                            </Link>
                            {lang[80]}
                            <Link color="#1652f0" href="#">
                              {lang[81]}
                            </Link>
                            .
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[82]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[83]}
                          <Link color="#1652f0" href="#">
                            {lang[84]}
                          </Link>
                          .
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[85]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[86]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[87]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[88]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[89]}
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
                            {lang[90]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[91]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[92]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[93]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[94]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[95]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[96]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[97]}
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
          >
            <FixedRightList list={RListC} />
          </Flex>
        </Flex>
      </Flex>
      <PageHelpful />
      <GettingFooter />
    </Flex>
  );
};
