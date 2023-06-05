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
  Image,
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
  const { lang } = useMyIntl("TradingonaDEX");
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
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[5]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[6]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[7]}
                          </Text>
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/7nv1oXdbzvsFMqviHf79x0/4eaa293f3e0317a86a775bacc4316dfe/trading_with_a_dex_-_welcome_page.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[8]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[9]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[10]}
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
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[16]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/3QhBv5bqghJEfRCcqQN0qQ/bd281dbba9cff17bb228a5bf28429895/trading_with_a_dex_-_trade_now_.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[17]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/6gRhTXnXPTf74EEIqlUjGj/b25490414846736055a253e449ef0c59/trading_with_a_dex_-_buy_ETH_with_cash____or_to____receive_ETH_from_another_wallet___..png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[18]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[19]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/3uDLpdWU0l4vXUXo5RrwvQ/48bb1e3e153ef02b852798af6c5ae8a7/trading_with_a_dex_-_transfer_now.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[20]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/3ilGweXc3j4JTWVxeew7pd/ce05fb97393fc992b9ce230a63de2b67/trading_with_a_dex_-_return_to_dex.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[21]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/2DlToyxsNAGUq872O422cS/8e1706be38018ae58881cba0d813d447/trade_with_a_dex_-_approve_ETH.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[22]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Flex w="full">
                            <Image src="https://images.ctfassets.net/7ca8qfn907uv/rnMS3mKVUeJA62T0YNGfY/1e505768a5e5a51cfc5212484d3599f7/trade_with_a_dex_-_order_preview_page.png" />
                          </Flex>
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
                            <Text>{lang[23]}</Text>
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
                          {lang[24]}
                          <Link color="#1652f0" href="#">
                            {lang[25]}
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
                            <Text>{lang[26]}</Text>
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
                          {lang[27]}
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
                            <Text>{lang[28]}</Text>
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
                          {lang[29]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[30]}
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
                            {lang[31]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[32]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[33]}
                          </Text>
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/3Kx55BBp8iI16S49pZp4CX/4e8bc4b5cc9850761d2c3a1d81411f5a/trade_with_a_dex_-_using_an_existing_dapp_wallet.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[34]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/2DlToyxsNAGUq872O422cS/8e1706be38018ae58881cba0d813d447/trade_with_a_dex_-_approve_ETH.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[35]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/2dkfDUY9Cju0crYxe2ZA5c/5a8e69b2347b975032387714204a2549/trade_with_a_dex_-_proceed_to_conversion.png" />
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
                            <Text>{lang[36]}</Text>
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
                          {lang[37]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[38]}
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
