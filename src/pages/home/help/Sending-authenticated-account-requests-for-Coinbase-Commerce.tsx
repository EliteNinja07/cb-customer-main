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
                  <BreadcrumbLink href="/home/help/Privacy-and-security">
                    Privacy and security
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>
                    Sending authenticated account requests for Coinbase Commerce
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize="var(--cds-sizes-10)"
              py={3}
            >
              Sending authenticated account requests for Coinbase Commerce
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              Introduction
            </Text>
            <Text fontSize="1rem" pt={6}>
              Since Coinbase Commerce doesn't store any identification data, we
              need to rely on other methods to verify that you are the
              legitimate owner of the Commerce account when processing certain
              requests. The only way to do this securely is to use your private
              key to sign messages.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              Steps
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
                Make sure you have your recovery phrase handy. Remember to
                always store your recovery phrase securely.
              </Text>
              <Text as="li" display="list-item">
                Go to
                <Link color="#1652f0" href="#">
                  https://mycrypto.com/sign-and-verify-message/sign
                </Link>
                Double check the URL & SSL certificate. It should say
                <Link color="#1652f0" href="#">
                  https://www.mycrypto.com
                </Link>
                & MyCrypto, Inc (US) in your URL bar.
              </Text>
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/2hSIUNHDVqL0fFXoJRvR8I/cf48795be3b56c9f5f393994e9c96130/Sending_Authenticated_Account_Requests_-_Image_2.png" />
            </Flex>
            <Text fontSize="1rem" pt={6}>
              3. Choose the option
              <Text as="b">Mnemonic Phrase</Text>, acknowledge the warnings that
              you see on the screen, and select
              <Text as="b">Continue</Text>.
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/0lzxzzT99IO0KaDmC1gmf9/708c3ccb8585eec87e9c612b89cff872/Sending_Authenticated_Account_Requests_-_Image_3.png" />
            </Flex>
            <Text fontSize="1rem" pt={6}>
              4. Type your recovery phrase on the top box, leave the password
              field empty, and select
              <Text as="b">Choose Address</Text>.
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/7l899hIgTMOFgdFifpPSec/50e4efc86c974eefd4b8a0db82bb9b6f/Sending_Authenticated_Account_Requests_-_Image_4.png" />
            </Flex>
            <Text fontSize="1rem" pt={6}>
              5. In the window that pops up, select the first address and then
              select
              <Text as="b">Unlock</Text>.
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/2hcD8K4SGq4y9or2AOYMqe/d7c6513ac5e5ce452aa4ddede5bea0ea/Sending_Authenticated_Account_Requests_-_Image_5.png" />
            </Flex>
            <Text fontSize="1rem" pt={6}>
              6. Type your request in the Message box, and then select
              <Text as="b">Sign Message</Text>. Please use one of the following
              messages:
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
                <Text as="i">
                  I request to reset my 2 factor token for my Coinbase Commerce
                  account linked to email address
                </Text>
              </Text>
              <Text as="li" display="list-item">
                <Text as="i">
                  I request to delete the Coinbase Commerce account linked to
                  the email address
                </Text>
              </Text>
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/7w4scnI9xFmm90Ahqebgye/248009f0345f88a23a4a94c4cc72d46d/Sending_Authenticated_Account_Requests_-_Image_6.png" />
            </Flex>
            <Text fontSize="1rem" pt={6}>
              7. Your signed message will be displayed to you in the Signature
              section of the page. Please copy this full message, including the
              opening and closing brackets, to your clipboard, as you will need
              to send it to us for verification.
            </Text>
            <Text fontSize="1rem" pt={6}>
              8. Write an email message to commerce@coinbase.com including the
              full signature as the body of the message. Please use the subject:
              Account Request.
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/5mB5WBplCBz8lMuVaB67QS/5fe423dce8bc3fce718a6791e8febc58/Sending_Authenticated_Account_Requests_-_Image_8.png" />
            </Flex>
            <Text fontSize="1rem" pt={6}>
              9. That's all. We will verify your signature and process your
              request as soon as possible. Close your browser and, again,
              remember to store your recovery phrase securely.
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
