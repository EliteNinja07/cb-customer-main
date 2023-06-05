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
  Alert,
  AlertIcon,
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
  const { lang } = useMyIntl("PaymentmethodsforUScustomers");
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
            <Text as="b">{lang[5]}</Text>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                {lang[6]}
                <Link color="#1652f0" href="#">
                  {lang[7]}
                </Link>
                {lang[8]}
                <Link color="#1652f0" href="#">
                  {lang[9]}
                </Link>
                {lang[10]}
              </Text>
              <Text as="li" display="list-item">
                {lang[11]}
                <Text as="b">{lang[12]}</Text>
              </Text>
              <Text as="li" display="list-item">
                {lang[13]}
              </Text>
              <Text as="li" display="list-item">
                {lang[14]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Text as="b">{lang[15]}</Text>
              {lang[16]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[17]}
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
                            <Text>{lang[18]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[19]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[20]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[21]}
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
                            {lang[22]}
                            <Link color="#1652f0" href="#">
                              {lang[23]}
                            </Link>
                            .
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[24]}
                            <Text as="b">{lang[25]}</Text>
                            {lang[26]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[27]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[28]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[29]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[30]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[31]}
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
                            {lang[32]}
                            <Link color="#1652f0" href="#">
                              {lang[33]}
                            </Link>
                            .
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[34]}
                            <Text as="b">{lang[35]}</Text>
                            {lang[36]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[37]}
                            <Text as="b">{lang[38]}</Text>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[39]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[40]}
                            <Text as="b">{lang[41]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[42]}
                            <Text as="b">{lang[43]}</Text>.
                          </Text>
                        </Text>
                        <Text as="ul" fontSize="1rem" pt={6} pl={6} pb="4">
                          <Text as="li" display="list-item">
                            <Text as="li" display="list-item">
                              {lang[44]}
                            </Text>
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[45]}
                          <Link color="#1652f0" href="#">
                            {lang[46]}
                          </Link>
                          {lang[47]}
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
                            10
                          </Text>
                          <Text as="li" display="list-item">
                            20
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[48]}
                          <Link color="#1652f0" href="#">
                            {lang[49]}
                          </Link>
                          {lang[50]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[51]}
                          <Link color="#1652f0" href="#">
                            {lang[52]}
                          </Link>
                          {lang[53]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Link color="#1652f0" href="#">
                            {lang[54]}
                          </Link>
                          {lang[55]}
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
              id="#"
            >
              {lang[56]}
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
                            <Text>{lang[57]}</Text>
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
                          {lang[58]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[59]}
                          <Link color="#1652f0" href="#">
                            {lang[60]}
                          </Link>
                          .
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[61]}
                          <Link color="#1652f0" href="#">
                            {lang[62]}
                          </Link>
                          {lang[63]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.75rem"
                          letterSpacing="-0.08rem"
                          id="#"
                        >
                          {lang[64]}
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
                            {lang[65]}
                            <Link color="#1652f0" href="#">
                              {lang[66]}
                            </Link>
                            {lang[67]}
                            <Text as="b">{lang[68]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[69]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[70]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[71]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[72]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[73]}
                          <Link color="#1652f0" href="#">
                            {lang[74]}
                          </Link>
                          {lang[75]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[76]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Text as="b">{lang[77]}</Text>
                          {lang[78]}
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
              id="#"
            >
              {lang[79]}
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
                            <Text>{lang[80]}</Text>
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
                          {lang[81]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[82]}
                          <Link color="#1652f0" href="#">
                            {lang[83]}
                          </Link>
                          .
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[84]}
                          <Link color="#1652f0" href="#">
                            {lang[85]}
                          </Link>
                          {lang[86]}
                          <Link color="#1652f0" href="#">
                            {lang[87]}
                          </Link>
                          {lang[88]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[89]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[90]}
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
                            {lang[91]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[92]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[93]}
                            <Text as="b">{lang[94]}</Text>
                            {lang[95]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[96]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[97]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[98]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[99]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[100]}
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
                            {lang[101]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[102]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[103]}
                            <Link color="#1652f0" href="#">
                              {lang[104]}
                            </Link>
                          </Text>
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
              id="#"
            >
              {lang[105]}
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
                            <Text>{lang[106]}</Text>
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
                          {lang[107]}
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
                            {lang[108]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[109]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[110]}
                            <Text as="b">{lang[111]}</Text>
                            {lang[112]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[113]}
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
                            {lang[114]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[115]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[116]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[117]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[118]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[119]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[120]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[121]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[122]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[123]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[124]}
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
                            {lang[125]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[126]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[127]}
                            <Link color="#1652f0" href="#">
                              {lang[128]}
                            </Link>
                            {lang[129]}
                          </Text>
                        </Text>

                        <Text fontSize="1rem" pt={6}>
                          {lang[130]}
                          <Link color="#1652f0" href="#">
                            {lang[131]}
                          </Link>
                          {lang[132]}
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
              id="#"
            >
              {lang[133]}
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
                            <Text>{lang[134]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[135]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[136]}
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
                            {lang[137]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[138]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[139]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[140]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[141]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[142]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[143]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[144]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[145]}
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
                            {lang[146]}
                            <Text as="b">{lang[147]}</Text>
                            {lang[148]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[149]}
                            <Text as="b">{lang[150]}</Text>
                            {lang[151]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[152]}
                            <Text as="b">{lang[153]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[154]}
                            <Text as="b">{lang[155]}</Text>
                            {lang[156]}
                            <Text as="b">{lang[157]}</Text>
                            {lang[158]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[159]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Text as="i">{lang[160]}</Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[161]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          <Text as="i">{lang[162]}</Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[163]}
                          <Link color="#1652f0" href="#">
                            {lang[164]}
                          </Link>
                          {lang[165]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[166]}
                          <Link color="#1652f0" href="#">
                            {lang[167]}
                          </Link>
                          {lang[168]}
                          <Link color="#1652f0" href="#">
                            {lang[169]}
                          </Link>
                          {lang[170]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[171]}
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
                            {lang[172]}
                            <Text as="b">{lang[173]}</Text>
                            {lang[174]}
                            <Text as="b">{lang[175]}</Text>
                            {lang[176]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[177]}
                            <Text as="b">{lang[178]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[179]}
                            <Text as="b">{lang[180]}</Text>
                            {lang[181]}
                            <Text as="b">{lang[182]}</Text>
                            {lang[183]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[184]}
                            <Text as="b">{lang[185]}</Text>
                            {lang[186]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[187]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Text as="i">{lang[188]}</Text>
                        </Text>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>
            <Alert
              status="info"
              bg="#f5f8ff"
              py={6}
              sx={{ borderRadius: "10px", border: "1px solid #5b616e33" }}
            >
              {" "}
              <Flex>
                {" "}
                <AlertIcon boxSize="var(--cds-sizes-6)" color="#1652f0" />
                <Text pl={3}>
                  <Text
                    fontWeight="var(--cds-fontWeights-medium)"
                    fontSize="1.25rem"
                    id="#"
                  >
                    {lang[189]}
                  </Text>
                  <Text fontSize="1rem" pt={6}>
                    {lang[190]}
                    <Link color="#1652f0" href="#">
                      {lang[191]}
                    </Link>
                    .
                  </Text>
                </Text>
              </Flex>
            </Alert>
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
