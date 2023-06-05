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

import { useMyIntl } from "../../../common";
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
  const { lang } = useMyIntl("PaymentmethodsforEuropeancustomers");
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
              <Link color="#1652f0" href="#">
                {lang[5]}
              </Link>
              .
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[6]}
              <Link color="#1652f0" href="#">
                {lang[7]}
              </Link>
              .
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[8]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Text as="b">{lang[9]}</Text>
              {lang[10]}
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
                            <Text>{lang[11]}</Text>
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
                          fontSize="1.75rem"
                          letterSpacing="-0.08rem"
                          id="#"
                        >
                          {lang[12]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[13]}
                          <Text as="i">{lang[14]}</Text> if sent over a weekend
                          or bank holiday.
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[15]}
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
                            {lang[16]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[17]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[18]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[19]}
                          </Text>
                          <Text as="li" display="list-item">
                            <Text as="b">{lang[20]}</Text>
                            {lang[21]}
                          </Text>
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
                            <Text>{lang[22]}</Text>
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
                          {lang[23]}
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
                            {lang[24]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[25]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[26]}
                          </Text>
                          <Text as="ul" fontSize="1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              <Text as="li" display="list-item">
                                {lang[27]}
                              </Text>
                            </Text>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[28]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[29]}
                          <Text as="b">{lang[30]}</Text>
                          {lang[31]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[32]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[33]}
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
                            <Text>{lang[34]}</Text>
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
                          {lang[35]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[36]}
                        </Text>
                        <Text as="b">{lang[37]}</Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[38]}
                            <Text as="b">{lang[39]}</Text>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[40]}
                            <Text as="b">{lang[41]}</Text>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[42]}
                            <Text as="b">{lang[43]}</Text>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[44]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[45]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[46]}
                          <Text as="b">{lang[47]}</Text>
                          {lang[48]}
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
                            <Text>{lang[49]}</Text>
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
                          {lang[50]}
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
                            {lang[51]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[52]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[53]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[54]}
                          <Link color="#1652f0" href="#">
                            {lang[55]}
                          </Link>
                          .
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
                            <Text>{lang[56]}</Text>
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
                          {lang[57]}
                        </Text>
                        <Text as="b">{lang[58]}</Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[59]}
                            <Link color="#1652f0" href="#">
                              {lang[60]}
                            </Link>
                            .
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[61]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[62]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[63]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[64]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[65]}
                          </Text>
                        </Text>
                        <Text as="b">{lang[66]}</Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[67]}
                            <Link color="#1652f0" href="#">
                              {lang[68]}
                            </Link>
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
                        <Link color="#1652f0" href="#">
                          {lang[73]}
                        </Link>
                        <Text fontSize="1rem" pt={6}>
                          <Text fontSize="1rem" pt={6}>
                            {lang[74]}
                          </Text>
                          {lang[75]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[76]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[77]}
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
                            <Text>{lang[78]}</Text>
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
                          {lang[79]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[80]}
                          <Link color="#1652f0" href="#">
                            {lang[81]}
                          </Link>
                          .
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[82]}
                          <Link color="#1652f0" href="#">
                            {lang[83]}
                          </Link>
                          {lang[84]}
                          <Link color="#1652f0" href="#">
                            {lang[85]}
                          </Link>
                          {lang[86]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[87]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[88]}
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
                            {lang[89]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[90]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[91]}
                            <Text as="b">{lang[92]}</Text>
                            {lang[93]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
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
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[98]}
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
                            {lang[99]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[100]}
                            <Link color="#1652f0" href="#">
                              {lang[101]}
                            </Link>
                          </Text>
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
                            <Text>{lang[102]}</Text>
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
                          {lang[103]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[104]}
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
                            {lang[105]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[106]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[107]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[108]}
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
                            {lang[109]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[110]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[111]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[112]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[113]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[114]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[115]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[116]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[117]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[118]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[119]}
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
                            {lang[120]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[121]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[122]}
                            <Link color="#1652f0" href="#">
                              {lang[123]}
                            </Link>
                            {lang[124]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[125]}
                          <Link color="#1652f0" href="#">
                            {lang[126]}
                          </Link>
                          {lang[127]}
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
                            <Text>{lang[128]}</Text>
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
                          {lang[129]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[130]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[131]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.75rem"
                          letterSpacing="-0.08rem"
                          id="#"
                        >
                          {lang[132]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[133]}
                        </Text>
                        <Text as="b">{lang[134]}</Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[135]}
                            <Text as="b">{lang[136]}</Text>
                            {lang[137]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[138]}
                            <Text as="b">{lang[139]}</Text>
                            {lang[140]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[141]}
                            <Text as="b">{lang[142]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[143]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[144]}
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
                            <Text>{lang[145]}</Text>
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
                          {lang[146]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[147]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[148]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[149]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[150]}
                        </Text>
                        <Text as="b">{lang[151]}</Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[152]}
                            <Text as="b">{lang[153]}</Text>
                            {lang[154]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[155]}
                            <Text as="b">{lang[156]}</Text>
                            {lang[157]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[158]}
                            <Text as="b">{lang[159]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[160]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[161]}
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
