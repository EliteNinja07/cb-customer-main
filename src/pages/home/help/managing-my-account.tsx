import MycontactInfoSvg from "@/assets/images/help/contactInfo-1.svg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import GettingFooter from "./components/GettingFooter";

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
    _dark: {
      color: "#fff",
      borderLeft: "4px solid #000",
    },
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
        {/*<Flex sx={styles.headSearch}>*/}
        {/*  <Flex sx={styles.headIcon}>*/}
        {/*    <SearchIcon />*/}
        {/*  </Flex>*/}
        {/*  <Flex flex="1" pr={4}>*/}
        {/*    <Input variant="unstyled" placeholder="How can we help you?" />*/}
        {/*  </Flex>*/}
        {/*  <Flex sx={styles.headClone}>*/}
        {/*    <SmallCloseIcon boxSize={6} />*/}
        {/*  </Flex>*/}
        {/*</Flex>*/}
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
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>Managing my account</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Flex alignItems="center" pt={10}>
              <Image boxSize="45px" src={MycontactInfoSvg} />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize={{
                  base: "1.75rem",
                  sm: "1.75rem",
                  md: "2.5rem",
                  lg: "2.5rem",
                }}
                pl={3}
              >
                Managing my account
              </Text>
            </Flex>
            <Flex flexDir="column" sx={styles.gettingList}>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                Get back into my account
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Accessing-my-account">
                    Accessing my account
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/i-cant-remember-my-password">
                    I can't remember my password
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/2-step-verification-troubleshooting">
                    2-step verification troubleshooting
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Lost-email-access">
                    Lost email access
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Reset-my-password">
                    Reset my password
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Restoring-2-step-verification-from-a-secret-seed">
                    Restoring 2-step verification from a secret seed
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/reset-my-password">
                    Why can't I reset my password?
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="#"
              >
                Link a payment method
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Can-I-withdraw-from-my-EUR-balance-to-my-verified-UK-bank-account">
                    Can I withdraw from my EUR balance to my verified UK bank
                    account?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Troubleshooting-SEPA-deposits-and-withdrawals">
                    Troubleshooting SEPA deposits and withdrawals
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Troubleshooting-UK-bank-account-deposits-and-withdrawals">
                    Troubleshooting UK bank account deposits and withdrawals
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/How-do-I-make-a-purchase-using-a-3D-secure-card-on-the-mobile-app">
                    How do I make a purchase using a 3D secure card on the
                    mobile app?
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="/home/help/"
              >
                Verify my identity
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/EU-verification-levels-FAQ">
                    EU verification levels FAQ
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/ive-installed-a-smartphone-2-factor-app-how-do-i-stop-receiving-sms-codes">
                    I've installed a smartphone 2-factor app. How do I stop
                    receiving SMS codes?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Landlines-and-2-step-verification">
                    Landlines and 2-step verification
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/The-link-in-my-verification-email-is-missing-expired-or-invalid">
                    The link in my verification email is missing, expired, or
                    invalid
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Using-and-managing-security-keys">
                    Using and managing security keys
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/What-type-of-photo-ID-can-I-provide">
                    What type of photo ID can I provide?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/troubleshooting-coinbase-emails">
                    Why didn't I receive a verification email?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Why-is-my-vault-withdrawal-pending">
                    Why is my vault withdrawal pending?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Why-isnt-my-authy-device-recognized">
                    Why isn't my authy device recognized?
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="/home/help/"
              >
                Update my account
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/How-can-I-close-my-account">
                    How can I close my account?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-can-I-update-my-legal-name">
                    How can I update my legal name?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-change-my-country-state-or-address">
                    How do I change my country, state, or address?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-change-my-email-address">
                    How do I change my email address?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Identity-Verification-FAQ">
                    Identity Verification FAQ
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Customer-Entity-Update">
                    Customer Entity Update
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Customer-Account-Update">
                    Customer Account Update
                  </Link>
                </Text>
              </Text>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={6}
                fontSize={{
                  base: "1.25rem",
                  sm: "1.25rem",
                  md: "1.75rem",
                  lg: "1.75rem",
                }}
                id="/home/help/"
              >
                Other
              </Text>
              <Text
                as="ul"
                listStyleType="disc"
                fontSize="1.1rem"
                pt={6}
                pl={6}
              >
                <Text as="li" display="list-item">
                  <Link to="/home/help/Address-book-allowlist">
                    Address book allowlist
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Escheatment-and-unclaimed-funds">
                    Escheatment and unclaimed funds
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-delete-a-crypto-address-associated-with-my-Coinbase-account">
                    How do I delete a crypto address associated with my Coinbase
                    account?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Withdraw-funds-from-a-closed-account">
                    Withdraw funds from a closed account
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/How-do-I-gain-access-to-a-deceased-family-members-Coinbase-account">
                    How do I gain access to a deceased family member's Coinbase
                    account?
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6}>
                  <Link to="/home/help/Prohibited-regions">
                    Prohibited regions
                  </Link>
                </Text>
                <Text as="li" display="list-item" pt={6} pb={6}>
                  <Link to="/home/help/Peer-to-peer-contact-management">
                    Peer-to-peer contact management
                  </Link>
                </Text>
              </Text>
              <Divider />
            </Flex>
          </Flex>
          <Flex
            w={{ base: "100%", sm: "100%", md: "33%", lg: "33%" }}
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
            display="block"
          >
            <div style={getFixed}>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Getting-started">Getting started</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Managing-my-account">
                  Managing my account
                </Link>
              </Flex>
              <Flex sx={styles.RAcives}>
                <Link to="/home/help/Trading-and-funding">
                  Trading and funding
                </Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/taxes-and-reports">
                  Taxes, reports, and financial services
                </Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Privacy-and-security">
                  Privacy and security
                </Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help/Other-topics">Other topics</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link to="/home/help">Asset Directory</Link>
              </Flex>
            </div>
          </Flex>
        </Flex>
      </Flex>
      <GettingFooter />
    </Flex>
  );
};
