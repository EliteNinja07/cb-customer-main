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
                  <BreadcrumbLink href="/home/help/Wallet">
                    Coinbase Wallet
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>Earn crypto using dapps</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize={{
                base: "1.75rem",
                sm: "1.75rem",
                md: "2.5rem",
                lg: "2.5rem",
              }}
              py={3}
            >
              Earn crypto using dapps
            </Text>
            <Text fontSize="1rem" pt={6}>
              On the DeFi tab, keep track of the interest you earn for holding
              crypto by interacting with DeFi (decentralized finance) apps. If
              you’re currently lending crypto, the supplied list breaks down
              your lending history and displays:
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
                The crypto you’ve lent
              </Text>
              <Text as="li" display="list-item">
                The dapp you lent your crypto to
              </Text>
              <Text as="li" display="list-item">
                The amount of the crypto you’ve supplied
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              If you tap on an asset on your supplied list, then the dapp will
              open up in the dapp browser.
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/459khmn5alhMYSGn1jLoCl/d9372b735815b3294753809cf7dd238d/Coinbase_Wallet_defi_tab_earn_crypto_using_dapps.png" />
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize={{
                base: "1.25rem",
                sm: "1.25rem",
                md: "1.75rem",
                lg: "1.75rem",
              }}
              letterSpacing="-0.08rem"
              id="#"
            >
              How it works
            </Text>
            <Text fontSize="1rem" pt={6}>
              DeFi lending dapps let anyone lend out their crypto to earn
              interest. Interest rates vary and are based on supply and demand.
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Link color="#1652f0" href="#">
                Learn more about DeFi{" "}
              </Link>
              and how people are engaging with it today.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize={{
                base: "1.25rem",
                sm: "1.25rem",
                md: "1.75rem",
                lg: "1.75rem",
              }}
              letterSpacing="-0.08rem"
              id="#"
            >
              Lend or withdraw assets
            </Text>
            <Text fontSize="1rem" pt={6}>
              Learn how to lend crypto using a dapp to earn interest on your
              assets. Select one of the popular dapps below.
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
                            <Text>Important</Text>
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
                          fontSize={{
                            base: "1em",
                            sm: "1rem",
                            md: "1.25rem",
                            lg: "1.25rem",
                          }}
                          letterSpacing="-0.08rem"
                          id="#"
                        >
                          Tips for lending and withdrawing assets on dapps
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          You will need to pay a network fee in ETH each time
                          you lend or withdraw assets. If you don’t have enough
                          ETH to cover the transaction, you’ll need to add more
                          to your wallet in order to complete it. Network fees
                          are paid to network participants for processing crypto
                          transactions and securing the respective network.
                          These fees do not go to Coinbase.
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          Additionally, if you are withdrawing assets, there
                          needs to be enough liquidity in the lending pool in
                          order to withdraw your assets. If there is not enough
                          liquidity, you’ll need to wait for more to be added in
                          order to withdraw your assets. This means more lenders
                          will need to add assets or borrowers will need to
                          repay their loans in order for you to withdraw your
                          assets.
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
                            <Text>Compound</Text>
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
                          fontSize={{
                            base: "1em",
                            sm: "1rem",
                            md: "1.25rem",
                            lg: "1.25rem",
                          }}
                          letterSpacing="-0.08rem"
                          id="#"
                        >
                          Lend crypto
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          For first-time lenders:
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
                            Using the dapp browser, go to Compound:
                            <Link color="#1652f0" href="#">
                              https://app.compound.finance
                            </Link>
                          </Text>
                          <Text as="li" display="list-item">
                            Tap <Text as="b">Connect wallet</Text>, then tap
                            <Text as="b">Coinbase Wallet</Text>
                            when prompted to connect a wallet.
                          </Text>
                          <Text as="li" display="list-item">
                            Tap
                            <Text as="b">Enable</Text>
                            to give the dapp permission to withdraw assets from
                            your wallet. This will require paying a one-time
                            network fee in ETH, but will not withdraw any assets
                            from your wallet.
                          </Text>
                          <Text as="li" display="list-item">
                            Enter the amount or tap
                            <Text as="b">MAX</Text>
                            to lend your total balance.
                          </Text>
                          <Text as="li" display="list-item">
                            Tap
                            <Text as="b">Supply to continue</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            Review the details in the
                            <Text as="b">
                              <Text as="b">Confirm</Text>
                              Payment
                            </Text>
                            window, then tap
                            <Text as="b">Confirm</Text>
                            to complete the transaction.
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          For current lenders:
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
                            On the
                            <Link color="#1652f0" href="#">
                              DeFi
                            </Link>
                            tab, select the asset from your supplied list to
                            open the protocol from the dapp browser.
                          </Text>
                          <Text as="li" display="list-item">
                            From the protocol, select the asset from your supply
                            list.
                          </Text>
                          <Text as="li" display="list-item">
                            Enter the amount or tap
                            <Link color="#1652f0" href="#">
                              MAX
                            </Link>
                            to lend your total balance.
                          </Text>
                          <Text as="li" display="list-item">
                            Tap
                            <Text as="b">Approve to continue</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            Review the details in the
                            <Text as="b">
                              <Text as="b">Confirm</Text>
                              Payment
                            </Text>
                            window, then tap
                            <Text as="b">Confirm</Text>
                            to complete the transaction.
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize={{
                            base: "1em",
                            sm: "1rem",
                            md: "1.25rem",
                            lg: "1.25rem",
                          }}
                          letterSpacing="-0.08rem"
                          id="#"
                        >
                          Withdraw crypto
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          To withdraw your crypto:
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
                            On the
                            <Text as="b">DeFi tab</Text>, tap the asset you’d
                            like to withdraw from Compound. The protocol will
                            open from the dapp browser.
                          </Text>
                          <Text as="li" display="list-item">
                            Select the asset again from your supply list to
                            start the withdrawal process.
                          </Text>
                          <Text as="li" display="list-item">
                            On the
                            <Text as="b">Withdraw</Text>
                            tab, enter the amount you’d like to withdraw or tap
                            <Text as="b">MAX</Text>
                            to select your entire balance.
                          </Text>
                          <Text as="li" display="list-item">
                            Tap
                            <Text as="b">Withdraw</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            Review the details in the
                            <Text as="b">Confirm Payment</Text>
                            window, then tap Confirm to complete the
                            transaction.
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
                            <Text>Aave</Text>
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
                          fontSize={{
                            base: "1em",
                            sm: "1rem",
                            md: "1.25rem",
                            lg: "1.25rem",
                          }}
                          letterSpacing="-0.08rem"
                          id="#"
                        >
                          Lend crypto
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          For first-time lenders:
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
                            From the dapp browser, go to Aave:
                            <Link color="#1652f0" href="#">
                              https://app.aave.com
                            </Link>
                            .
                          </Text>
                          <Text as="li" display="list-item">
                            Tap
                            <Text as="b">Connect wallet</Text>, then tap
                            <Text as="b">Coinbase</Text>
                            when prompted to connect a wallet.
                          </Text>
                          <Text as="li" display="list-item">
                            Tap
                            <Text as="b">Supply</Text>
                            by the asset you’d like to lend.
                          </Text>
                          <Text as="li" display="list-item">
                            Enter the amount or tap
                            <Text as="b">MAX</Text>
                            to lend your total balance. (In addition to a
                            network fee, you’ll also need to pay an initial
                            approval transaction fee.)
                          </Text>
                          <Text as="li" display="list-item">
                            Tap <Text as="b">A pprove to continue</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            Review the details in the
                            <Text as="b">Confirm Payment</Text>
                            window, then tap
                            <Text as="b">Confirm</Text>
                            to complete the transaction.
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          For current lenders:
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
                            On the <Text as="b">DeFi</Text>
                            tab, select the asset from your supplied list to
                            open the protocol from the dapp browser.
                          </Text>
                          <Text as="li" display="list-item">
                            From the protocol, select the asset from your supply
                            list.
                          </Text>
                          <Text as="li" display="list-item">
                            Tap
                            <Text as="b">Supply</Text>
                            by the asset you’d like to lend.
                          </Text>
                          <Text as="li" display="list-item">
                            Enter the amount or tap
                            <Text as="b">MAX</Text>
                            to lend your total balance.
                          </Text>
                          <Text as="li" display="list-item">
                            Tap
                            <Text as="b">Approve to continue</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            Review the details in the
                            <Text as="b">Confirm Payment</Text>
                            window, then tap
                            <Text as="b">Confirm</Text>
                            to complete the transaction.
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize={{
                            base: "1em",
                            sm: "1rem",
                            md: "1.25rem",
                            lg: "1.25rem",
                          }}
                          letterSpacing="-0.08rem"
                          id="#"
                        >
                          Withdraw crypto
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          To withdraw your crypto:
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
                            On the DeFi tab, tap the asset you’d like to
                            withdraw from Aave. This will open the protocol from
                            the dapp browser.
                          </Text>
                          <Text as="li" display="list-item">
                            On the <Text as="b">Dashboard</Text>
                            page, tap <Text as="b">Withdraw</Text>
                            by the desired asset.
                          </Text>
                          <Text as="li" display="list-item">
                            Enter the amount you’d like to withdraw and submit
                            the transaction.
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
                            <Text>dYdX</Text>
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
                          fontSize={{
                            base: "1em",
                            sm: "1rem",
                            md: "1.25rem",
                            lg: "1.25rem",
                          }}
                          letterSpacing="-0.08rem"
                          id="#"
                        >
                          Lend crypto
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          For first-time lenders:
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
                            From the dapp browser, go to dYdX:
                            <Link color="#1652f0" href="#">
                              https://trade.dydx.exchange/portfolio/overview
                            </Link>
                          </Text>
                          <Text as="li" display="list-item">
                            Tap
                            <Text as="b">Connect wallet</Text>, then tap
                            <Text as="b">Coinbase Wallet</Text>
                            when prompted to connect a wallet.
                          </Text>
                          <Text as="li" display="list-item">
                            Tap
                            <Text as="b">Supply</Text>
                            by the asset you’d like to lend.
                          </Text>
                          <Text as="li" display="list-item">
                            Enter the amount or tap
                            <Text as="b">MAX</Text>
                            to lend your total balance.
                          </Text>
                          <Text as="li" display="list-item">
                            Tap
                            <Text as="b">Approve to continue</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            Review the details in the
                            <Text as="b">Confirm Payment</Text>
                            window, then tap
                            <Text as="b">Confirm</Text>
                            to complete the transaction.
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          For current lenders:
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
                            On the <Text as="b">DeFi</Text>
                            tab, select the asset from your supplied list to
                            open the protocol from the dapp browser.
                          </Text>
                          <Text as="li" display="list-item">
                            From the protocol, select the asset from your supply
                            list.
                          </Text>
                          <Text as="li" display="list-item">
                            Tap
                            <Text as="b">Supply</Text>
                            by the asset you’d like to lend.
                          </Text>
                          <Text as="li" display="list-item">
                            Enter the amount or tap
                            <Text as="b">MAX</Text>
                            to lend your total balance.
                          </Text>
                          <Text as="li" display="list-item">
                            Tap <Text as="b">Approve to continue</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            Review the details in the
                            <Text as="b">Confirm Payment</Text>
                            window, then tap
                            <Text as="b">Confirm</Text>
                            to complete the transaction.
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize={{
                            base: "1em",
                            sm: "1rem",
                            md: "1.25rem",
                            lg: "1.25rem",
                          }}
                          letterSpacing="-0.08rem"
                          id="#"
                        >
                          Withdraw crypto
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          To withdraw your crypto:
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
                            On the <Text as="b">DeFi</Text>
                            tab, tap the asset you’d like to withdraw from dYdX.
                            This will open the protocol from the dapp browser.
                          </Text>
                          <Text as="li" display="list-item">
                            Select the asset again from your dYdX supply list to
                            start the withdrawal process.
                          </Text>
                          <Text as="li" display="list-item">
                            On the
                            <Text as="b">Withdraw</Text>
                            tab, enter the amount you’d like to withdraw or tap
                            <Text as="b">MAX</Text>
                            to select your entire balance.
                          </Text>
                          <Text as="li" display="list-item">
                            Tap
                            <Text as="b">Withdraw</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            Review the details in the
                            <Text as="b">Confirm Payment</Text>
                            window, then tap Confirm to complete the
                            transaction.
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
