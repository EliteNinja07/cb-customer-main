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
  const { lang } = useMyIntl("USDCRegions");
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
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.3rem"
              id="#"
            >
              {lang[4]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[5]}
              <Link color="#1652f0" href="#">
                {lang[6]}
              </Link>
              {lang[7]}
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
                            <Text>{lang[8]}</Text>
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
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[9]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[10]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[11]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[12]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[13]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[14]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[15]}
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
                            <Text>{lang[16]}</Text>
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
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
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
                            {lang[20]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[21]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[22]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[23]}
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
                            <Text>{lang[24]}</Text>
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
                          as="ul"
                          listStyleType="disc"
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
                          <Text as="li" display="list-item">
                            {lang[28]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[29]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[30]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[31]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[32]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[33]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[34]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[35]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[36]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[37]}
                          </Text>
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
                          <Text as="li" display="list-item">
                            {lang[42]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[43]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[44]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[45]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[46]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[47]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[48]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[49]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[50]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[51]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[52]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[53]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[54]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[55]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[56]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[57]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[58]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[59]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[60]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[61]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[62]}
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
                            <Text>{lang[63]}</Text>
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
                          </Text>
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
                          <Text as="li" display="list-item">
                            {lang[70]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[71]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[72]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[73]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[74]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[75]}
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
                            <Text>{lang[76]}</Text>
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
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[77]}
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
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[79]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[80]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[81]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[82]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[83]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[84]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[85]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[86]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[87]}
                          </Text>
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
              fontSize="1.3rem"
              id="#"
            >
              {lang[91]}
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
                            <Text>{lang[92]}</Text>
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
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[93]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[94]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[95]}
                          </Text>
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
                          <Text as="li" display="list-item">
                            {lang[102]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[103]}
                          </Text>
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
                            <Text>{lang[108]}</Text>
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
                          <Text as="li" display="list-item">
                            {lang[115]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[116]}
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
                            <Text>{lang[117]}</Text>
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
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[118]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[119]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[120]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[121]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[122]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[123]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[124]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[125]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[126]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[127]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[128]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[129]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[130]}
                          </Text>
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
                          <Text as="li" display="list-item">
                            {lang[135]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[136]}
                          </Text>
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
                          <Text as="li" display="list-item">
                            {lang[143]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[144]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[145]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[146]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[147]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[148]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[149]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[150]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[151]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[152]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[153]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[154]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[155]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[156]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[157]}
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
                            <Text>{lang[158]}</Text>
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
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[159]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[160]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[161]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[162]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[163]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[164]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[165]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[166]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[167]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[168]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[169]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[170]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[171]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[172]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[173]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[174]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[175]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[176]}
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
                            <Text>{lang[177]}</Text>
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
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[178]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[179]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[180]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[181]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[182]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[183]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[184]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[185]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[186]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[187]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[188]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[189]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[190]}
                          </Text>
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
