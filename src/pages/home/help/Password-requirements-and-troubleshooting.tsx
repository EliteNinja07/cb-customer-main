import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
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
                  <BreadcrumbLink href="/home/help/Privacy-and-security">
                    Privacy and security
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>
                    Password requirements and troubleshooting
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize="var(--cds-sizes-10)"
              py={3}
            >
              Password requirements and troubleshooting
            </Text>
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
                  <Text as="b">Important</Text>
                  <Text fontSize="1rem" pt={6}>
                    Coinbase Support will NEVER ask for your account password or
                    2-step verification codes.
                  </Text>
                </Text>
              </Flex>
            </Alert>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              Password Requirements
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              What are the password requirements on Coinbase?
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
                Passwords must be at least 8 characters long and have an
                estimated offline crack time over 6,000 seconds.
              </Text>
              <Text as="li" display="list-item">
                We do not enforce arbitrary restrictions on numbers, special
                characters, or maximum password length.
              </Text>
              <Text as="li" display="list-item">
                Any passwords longer than 72 characters will be truncated.
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              How do I choose a good password?
            </Text>

            <Text fontSize="1rem" pt={6}>
              Coinbase strongly recommends the use of password manager software,
              such as 1Password or LastPass. A password manager can generate
              random, unique passwords for each website you visit. It can also
              automatically fill in passwords for you and can protect you
              against phishing attacks.
            </Text>
            <Text fontSize="1rem" pt={6}>
              If you don't want to use a password manager:
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
                Be sure to use a long, random password that is unique to your
                Coinbase account.
              </Text>
              <Text as="li" display="list-item">
                Do not reuse passwords from other websites, especially your
                email account.
              </Text>
              <Text as="li" display="list-item">
                You can use a passphrase (a sentence or group of words), but do
                not choose a phrase from a book or a movie as hackers have
                access to sophisticated databases of such quotes.
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              My password is long and random, why does it have a low crack time?
            </Text>

            <Text fontSize="1rem" pt={6}>
              We check all passwords against password dumps and leaks across the
              internet. It's possible that your password was found in one of
              these dumps. We recommend you change your password immediately if
              this is the case.
            </Text>

            <Text fontSize="1rem" pt={6}>
              Read our complete
              <Link color="#1652f0" href="#">
                Password FAQ
              </Link>{" "}
              for more information.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              Password Troubleshooting
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              How do I reset my password?
            </Text>
            <Text fontSize="1rem" pt={6}>
              If you forgot or need to reset your password, use these steps:
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
                Visit the Coinbase Password Reset page.
              </Text>
              <Text as="li" display="list-item">
                Enter your email address and select reset password.
              </Text>
              <Text as="li" display="list-item">
                Check your inbox (and spam folder) for a password reset email
                from us.
              </Text>
              <Text as="li" display="list-item">
                Select the link in the email to open the password reset page.
              </Text>
              <Text as="li" display="list-item">
                Create a new password and complete this action.
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              Once complete, then you should now be able to
              <Link color="#1652f0" href="#">
                sign in to Coinbase.
              </Link>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              Why can't I reset my password?
            </Text>
            <Text fontSize="1rem" pt={6}>
              Coinbase takes a number of steps to ensure the security of our
              customers' accounts. These include enforcing strong passwords,
              2-step verification, and device verification.
            </Text>
            <Text fontSize="1rem" pt={6}>
              When a customer attempts to reset their password, we take
              precautions to ensure that it is a legitimate request. This means
              that our customers may only reset their passwords from devices
              they have previously verified, or from locations they have
              previously signed in from. This requirement provides a safeguard
              against attempts to illegitimately reset your password.
            </Text>
            <Text fontSize="1rem" pt={6}>
              If you are having trouble resetting your password, you'll need to:
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
                Reset it from a device you have previously used to access
                Coinbase.
              </Text>
              <Text as="li" display="list-item">
                Reset it from a location (IP address) you've previously used to
                access Coinbase.
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              If you no longer have access to a previously validated device or
              IP address, please contact
              <Link color="#1652f0" href="#">
                Coinbase Support
              </Link>
              so we can have a member of our security team assist you with a
              password reset.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              Why will my password reset require 24 hours to process?
            </Text>
            <Text fontSize="1rem" pt={6}>
              As noted above, Coinbase only processes password reset requests
              from devices that have been previously authorized to access your
              account. If you are resetting your password from a new device, our
              system may delay the processing time for 24 hours in the interest
              of keeping your account secure. This can be bypassed by resetting
              your password from a previously verified device.
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
