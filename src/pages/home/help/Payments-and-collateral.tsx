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
  const { lang } = useMyIntl("Paymentsandcollateral");
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
                  <BreadcrumbLink href="/home/help/Trading-and-funding">
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
                            <Text>{lang[4]}</Text>
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
                          {lang[5]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[6]}
                          <Link
                            color="#1652f0"
                            href="https://www.coinbase.com/borrow"
                          >
                            https://www.coinbase.com/borrow.
                          </Link>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[7]}
                        </Text>
                        <Text as="b">{lang[8]}</Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[9]}
                        </Text>
                        <Text as="b">{lang[10]}</Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[11]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[12]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[13]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[14]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[15]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[16]}
                        </Text>
                        <Text as="b">{lang[17]}</Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[18]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[19]}
                          <Link color="#1652f0" href="#">
                            {lang[20]}
                          </Link>
                        </Text>
                        <Text as="b">{lang[21]}</Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[22]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[23]}
                          <Link color="#1652f0" href="#">
                            {lang[24]}
                          </Link>
                          {lang[25]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[26]}
                        </Text>
                        <Text as="b">{lang[27]}</Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[28]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[29]}
                          <Link color="#1652f0" href="#">
                            {lang[30]}
                          </Link>
                          {lang[31]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[32]}
                          <Link color="#1652f0" href="#">
                            {lang[33]}
                          </Link>
                          {lang[34]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[35]}
                        </Text>
                        <Text as="b">{lang[36]}</Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[37]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
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
                        <Text as="b">{lang[41]}</Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[42]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[43]}
                        </Text>
                        <Text as="b">{lang[44]}</Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[45]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[46]}
                          <Link color="#1652f0" href="#">
                            {lang[47]}
                          </Link>
                          {lang[48]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[49]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[50]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[51]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
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
                          {lang[57]}
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
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[59]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[60]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[61]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[62]}
                          <Link color="#1652f0" href="#">
                            {lang[63]}
                          </Link>
                          {lang[64]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[65]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[66]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[67]}
                          <Link color="#1652f0" href="#">
                            {lang[68]}
                          </Link>
                          {lang[69]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[70]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[71]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[72]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[73]}
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
                            {lang[74]}
                            <Link color="#1652f0" href="#">
                              {lang[75]}
                            </Link>
                            {lang[76]}
                            <Link color="#1652f0" href="#">
                              {lang[77]}
                            </Link>
                            .
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[78]}
                            <Link color="#1652f0" href="#">
                              {lang[79]}
                            </Link>
                            .
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[80]}
                            <Link color="#1652f0" href="#">
                              {lang[81]}
                            </Link>
                            .
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[82]}
                            <Link color="#1652f0" href="#">
                              {lang[83]}
                            </Link>
                            {lang[84]}
                            <Link color="#1652f0" href="#">
                              {lang[85]}
                            </Link>
                            .
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[86]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[87]}
                          <Link color="#1652f0" href="#">
                            {lang[88]}
                          </Link>
                          .
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
