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
                  <BreadcrumbLink href="/home/help">
                    Coinbase Help Center
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/home/help/Trading-and-funding">
                    Trading and funding
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>Using cbETH</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize="var(--cds-sizes-10)"
              py={3}
            >
              Using cbETH
            </Text>
            <Text fontSize="1rem" pt={6}>
              Coinbase is allowing customers who stake ETH to receive an ERC20{" "}
              <Text as="i">utility token</Text>
              called Coinbase Wrapped Staked ETH (“cbETH”), which is a liquid
              representation of their staked-ETH.
            </Text>
            <Text fontSize="1rem" pt={6}>
              All staked-ETH is locked until a future Ethereum protocol upgrade
              is complete. In the meantime, Coinbase has created cbETH to give
              customers the option to sell, transfer, spend, or otherwise use
              their staked-ETH while it remains locked.
            </Text>
            <Text fontSize="1rem" pt={6}>
              Holders of cbETH will be able to move these tokens to a
              self-custodied wallet and trade them off the Coinbase platform.
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
                            <Text>
                              How do I wrap my staked ETH (ETH2) for cbETH?
                            </Text>
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
                          To wrap your ETH2 for cbETH:
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
                            Log in to your Coinbase account and navigate to the
                            assets page.
                          </Text>
                          <Text as="li" display="list-item">
                            Under ‘Your Assets' select ‘Ethereum 2’ to go to the
                            ETH2 asset details page
                          </Text>
                          <Text as="li" display="list-item">
                            At the bottom of your screen, select ‘Want to sell
                            or send your ETH2’
                          </Text>
                          <Text as="li" display="list-item">
                            You will be taken to the ETH2 wrapping page where
                            you will be given information about cbETH.
                          </Text>
                          <Text as="li" display="list-item">
                            Select ‘Continue’ to proceed to wrap your ETH2
                          </Text>
                          <Flex w="full">
                            <Image src="https://images.ctfassets.net/7ca8qfn907uv/2OzN63gi0AObeosco9Lsux/1a1a1203d8431f8e38b7e91af1c5b61e/Screen_Shot_2022-10-14_at_1.29.07_PM.png" />
                          </Flex>
                          <Text as="li" display="list-item">
                            Enter the dollar amount or absolute value of ETH2
                            you wish to wrap
                          </Text>
                          <Text as="li" display="list-item">
                            Select ‘Preview’ to view how much cbETH you will
                            receive
                          </Text>
                          <Text as="li" display="list-item">
                            Select ‘Accept and wrap now’
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          On the completion page you can see the amount of ETH2
                          you have wrapped and the cbETH you have received. From
                          there you can also choose to ‘Trade cbETH’ or return
                          to your account by selecting ‘View cbETH balance’.
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
                            <Text>Is there a fee to wrap my ETH2?</Text>
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
                          No, there’s no fee for wrapping your ETH2. You’ll be
                          charged standard fees if you later transfer or trade
                          your cbETH.
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
                            <Text>
                              How many cbETH units will I get if I wrap my ETH2?
                            </Text>
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
                          The number of cbETH units you receive upon wrapping is
                          based on the ETH2-cbETH conversion rate. The
                          conversion rate will change over time as interest is
                          earned on the underlying staked ETH, or due to an
                          unlikely slashing event. The ETH2-cbETH conversion
                          rate also represents the ratio of ETH2 units
                          underlying the total supply of cbETH.
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
                            <Text>
                              Why does my account balance seem to decrease when
                              I wrap?
                            </Text>
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
                          Your account balance is based on the market prices of
                          cbETH and ETH2, which can deviate. We always wrap at
                          the conversion rate with zero fees, so the cbETH you
                          receive represents the same amount of staked ETH even
                          if the cash value is different. You can unwrap your
                          cbETH at any time to restore your previous balance of
                          ETH2.
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
                            <Text>Can I unwrap my cbETH?</Text>
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
                          Yes, you can unwrap your cbETH and receive the
                          underlying ETH2. The amount of ETH2 you’ll receive is
                          equal to the amount of cbETH multiplied by the
                          conversion rate. The conversion rate will grow over
                          time so long as staking interest exceeds penalties
                          from very rare slashing events.
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
                            <Text>
                              Why doesn’t the cbETH price match the ETH2 price?
                            </Text>
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
                          cbETH and ETH2 trade on a wide range of crypto
                          exchanges and their market prices can deviate. The
                          market may value cbETH less than the underlying staked
                          ETH it represents, which is how the market currently
                          values many liquid staking tokens.
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          Separately, cbETH is designed to include all staking
                          interest earned on the underlying ETH, which may also
                          cause price deviations over time.
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
                            <Text>Will I earn interest if I own cbETH?</Text>
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
                          Yes, but not directly through Coinbase. Instead, the
                          price of the cbETH utility token is intended to
                          reflect the price of the underlying staked ETH plus
                          any accrued interest. If you notice cbETH being worth
                          slightly more than ETH, that’s because of the interest
                          the token has earned.
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
                            <Text>
                              How is cbETH different from other liquid staking
                              assets?
                            </Text>
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
                          cbETH is different in two ways. First, cbETH is not
                          meant to track the price of ETH 1:1 like some other
                          liquid staking assets (such as stETH). Instead,
                          cbETH’s conversion rate represents its fair value.
                          Second, we don’t charge a fee to wrap your ETH2.
                          Therefore, the cbETH you receive represents the same
                          amount of ETH2 you started with and earns the same
                          amount of interest.
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          We wrote a white paper for cbETH with in-depth
                          technical details.
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
                            <Text>What happens if I sell my cbETH?</Text>
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
                          If you sell your cbETH then you won’t be able to
                          unwrap it for ETH2. cbETH represents staked ETH on
                          Coinbase, and if you sell it to someone else, then
                          you’ll give up your ability to redeem it for ETH2.
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
                            <Text>Is wrapping my ETH2 a taxable event?</Text>
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
                          At this time there is no official guidance from tax
                          authorities available. In the reports we prepare for
                          customers, we carry the cost basis of your ETH2
                          forward and do not recognize a disposition. When you
                          unwrap, the same treatment applies.
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
                            <Text>
                              Why is the staked ETH interest rate measured in
                              APY and not APR?
                            </Text>
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
                          APY (Annual Percentage Yield) is a better measure of
                          the interest earned on staked ETH than APR (Annual
                          Percentage Rate) because you earn interest on your
                          accrued interest as well as your staked principal.
                          Coinbase pools interest earned and distributes it to
                          customers proportionally.
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
                            <Text>
                              Will I be able to buy, sell, or transfer cbETH?
                            </Text>
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
                          Yes, all eligible customers will be able to buy, sell,
                          or transfer cbETH.
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          This includes:
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
                            Wrapping your staked ETH (ETH2) for cbETH
                          </Text>
                          <Text as="li" display="list-item">
                            Buying cbETH directly on the Coinbase exchange
                          </Text>
                          <Text as="li" display="list-item">
                            Selling / converting your cbETH into any available
                            fiat or crypto
                          </Text>
                          <Text as="li" display="list-item">
                            Sending / receiving cbETH off-platform to/from a
                            self-custodied wallet
                          </Text>
                          <Text as="li" display="list-item">
                            Unwrapping your cbETH for staked ETH (ETH2)
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          You will
                          <Link color="#1652f0" href="#">
                            not
                          </Link>
                          be able to:
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
                              Unstake your ETH2 to redeem your ETH2 interest
                              earned at this time. This will be enabled after a
                              future Ethereum protocol upgrade.
                            </Text>
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          Please note that by transferring or selling your cbETH
                          tokens, you’re transferring the right to redeem cbETH
                          for the underlying asset (ETH2) to the new owner of
                          the cbETH tokens.
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
                            <Text>
                              What happens to my ETH2 balance when I wrap it for
                              cbETH?
                            </Text>
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
                          When you wrap your ETH2 for cbETH you will see a
                          decrease in your ETH2 balance. You will be credited
                          with an amount of cbETH dictated by the conversion
                          rate.
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
                            <Text>Will dapps support cbETH?</Text>
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
                          We expect that some dapps will integrate and support
                          cbETH in the near future.
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
                            <Text>Where can I see my cbETH balance?</Text>
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
                          You can find your cbETH balance under the assets page.
                          Select cbETH under ‘Your Assets’ and you will be taken
                          to the cbETH asset detail page where you can view your
                          balance.
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/4PExARhKTPWEMMULGoYEnM/1355c696f6e4235c183ee27d690b44b6/cbeth_balance.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          Select your balance to go to the cbETH wallet page
                          where you can view your balance and also see your
                          history of wrapped transactions.
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/1DI6ii6JoercrlWUhtpgyR/0c4a16e35135d116a1aa073e00de7348/cbeth_balance2.png" />
                        </Flex>
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
                            <Text>
                              How do I transfer my cbETH to another address?
                            </Text>
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
                          To transfer your cbETH:
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
                            Select the ‘Send’ button on the homepage of your
                            Coinbase app.
                          </Text>
                          <Text as="li" display="list-item">
                            Select the asset you wish to send - Coinbase Wrapped
                            ETH (cbETH)
                          </Text>
                          <Text as="li" display="list-item">
                            Enter the dollar amount or absolute value you wish
                            to transfer
                          </Text>
                          <Text as="li" display="list-item">
                            Enter the Ethereum address of the recipient and
                            click ‘Preview send’
                          </Text>
                          <Text as="li" display="list-item">
                            Review the details of your transaction, including
                            the Coinbase and network fee
                          </Text>
                          <Text as="li" display="list-item">
                            If everything looks good, select ‘Send now’ to send
                            your cbETH
                          </Text>
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/5JWN6O7VaasoyKprPN8nM5/5580fe14a5e41f3cbf426cc1535dce18/transfer_cbeth1.png" />
                        </Flex>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/6gEzVBFjbMCD7rjXAfcV2f/e7e453f2117083b32e46178cf892c11b/transfer_cbeth2.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          Please note that by transferring your cbETH tokens,
                          you’re transferring the right to redeem cbETH for the
                          underlying asset (ETH2) to the new holder of the cbETH
                          tokens.
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          If you are sending the tokens to a self-custodied
                          wallet, you will be able to send them back to Coinbase
                          in the future.
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
              fontSize="1.25rem"
              id="#"
            >
              View our other help articles to learn more about cbETH:
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
                <Link color="#1652f0" href="#">
                  cbETH Intro
                </Link>
              </Text>
              <Text as="li" display="list-item">
                <Link color="#1652f0" href="#">
                  Sourcing cbETH for Exchange customers
                </Link>
              </Text>
            </Text>
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
