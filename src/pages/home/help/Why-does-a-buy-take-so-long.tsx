import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
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
                  <BreadcrumbLink>Why does a buy take so long?</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize="var(--cds-sizes-10)"
              py={3}
            >
              Why does a buy take so long?
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              US Customers
            </Text>
            <Text fontSize="1rem" pt={6}>
              Coinbase uses the
              <Link color="#1652f0" href="#">
                ACH bank transfer system
              </Link>{" "}
              for payments with your bank account. The
              <Link color="#1652f0" href="#">
                ACH bank transfer system
              </Link>{" "}
              typically takes 3-5 business days to complete after initiating a
              purchase. Once Coinbase receives the payment and the transaction
              shows as completed in the
              <Link color="#1652f0" href="#">
                History page
              </Link>
              , cryptocurrency is made available in your account.
            </Text>
            <Text fontSize="1rem" pt={6}>
              Please visit this
              <Link color="#1652f0" href="#">
                help page
              </Link>
              for more information on buys and payment methods.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              Business days
            </Text>
            <Text fontSize="1rem" pt={6}>
              Usually "business days" means
              <Text as="b">Monday–Friday, 9am–5pm.</Text>
              Holidays and weekends are not counted as business days. When you
              place an order in the evening, the ACH transfer is not started
              until the following business day. Your transaction details will
              always show the expected completion date of your order, taking all
              these factors into account.
            </Text>
            <Text fontSize="1rem" pt={6}>
              ACH transfers usually complete by the end of the business day -
              11:59 PM PT, as Coinbase is based in San Francisco, CA.
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/65F9hjhfme7QdTTIlf5mPw/54e4867ef13a3e7f9812f2fa3ca200de/Article-Inline-526542.png" />
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              European Customers
            </Text>
            <Text fontSize="1rem" pt={6}>
              Since your local currency is stored within your Coinbase account,
              all buys and sells occur instantly. For more information on the
              timing of deposits and withdrawals, please see
              <Link color="#1652f0" href="#">
                How long do international deposits and withdrawals take?
              </Link>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              Canadian Customers
            </Text>
            <Text fontSize="1rem" pt={6}>
              For Canadian Customers, purchases made using credit or debit cards
              are available instantly. For more information, please see
              <Link color="#1652f0" href="#">
                Payment Methods for Canadian Customers.
              </Link>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              Singapore Customers
            </Text>
            <Text fontSize="1rem" pt={6}>
              For Singapore Customers, deposits via our payment provider only
              take a couple of minutes to complete. For more information, please
              see
              <Link color="#1652f0" href="#">
                Payment Methods for Singapore Customers.
              </Link>
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
