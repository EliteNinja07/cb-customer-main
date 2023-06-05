import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
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
                  <BreadcrumbLink href="/home/help/Trading-and-funding">
                    Trading and funding
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>Send crypto to Mexico</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize="var(--cds-sizes-10)"
              py={3}
            >
              Send crypto to Mexico
            </Text>
            <Text fontSize="1rem" pt={6}>
              In partnership with Remitly, Coinbase US customers can safely send
              cryptocurrency to recipients in Mexico, and the recipients can
              instantly convert their crypto to cash and pick up the cash from a
              convenient location of their choice.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              How does it work?
            </Text>
            <Text fontSize="1rem" pt={6}>
              US customers send crypto to recipients in Mexico simply using the
              recipient’s email address. The recipient will get an email that
              funds were sent to them. If they do not have a Coinbase account,
              they can create one and the funds will be readily available.
              Recipients can convert their crypto to cash and instantly pick it
              up—there are more than 20,000 locations to choose from.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              Why do I need to verify my identity?
            </Text>
            <Text fontSize="1rem" pt={6}>
              To comply with financial regulations, Coinbase requires all of our
              customers to verify their identity. Recipients must verify their
              identity by providing their legal name, date of birth, and home
              address to pick up their cash. Verifying your identity on Coinbase
              helps protect you from fraud and allows Coinbase to offer you all
              of our services and products.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              Will this feature be available in more regions?
            </Text>
            <Text fontSize="1rem" pt={6}>
              We’re working on making this available in more regions. At this
              time,
              <Text as="b">only US customers</Text> can send funds to friends
              and family in Mexico for instant withdrawal and
              <Text as="b">only recipients in Mexico</Text>
              can cash out their funds and immediately pick it up.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              Sender
            </Text>
            <Text fontSize="1rem" pt={6}>
              Instantly send crypto to your friends and family in Mexico, and
              they can convert their crypto to cash and instantly pick it up
              from a location of their choice. To send crypto, follow the steps
              below:
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
                Tap the announcement banner in the Coinbase mobile app.
              </Text>
              <Text as="li" display="list-item">
                Tap
                <Text as="b">Send crypto</Text>.
              </Text>
              <Text as="li" display="list-item">
                Choose your asset and enter the amount of crypto you'd like to
                send.
              </Text>
              <Text as="li" display="list-item">
                Tap
                <Text as="b">Continue</Text>.
              </Text>
              <Text as="li" display="list-item">
                Enter the recipient’s information (either their mobile or email
                address) and a note (optional), then tap
                <Text as="b">Preview send</Text>.
              </Text>
              <Text as="li" display="list-item">
                Confirm the transaction details and tap
                <Text as="b">Send now</Text>
                to complete the transfer.
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              You’ll receive a confirmation when your send is successfully sent.
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Text as="b">Important:</Text>
              If you send crypto to the wrong recipient and it’s claimed before
              you can cancel the transaction, your crypto will be lost. All
              sends to crypto addresses are irreversible.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              Receiver
            </Text>
            <Text fontSize="1rem" pt={6}>
              You’ll receive an email notification or text message when funds
              are sent to you. Note that you will need to create a Coinbase
              account—if you haven’t already done so—and verify your identity in
              order to cash out the funds sent to you.
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
                Open the notification.
              </Text>
              <Text as="li" display="list-item">
                Tap
                <Link color="#1652f0" href="#">
                  Get my cash
                </Link>
                .
              </Text>
              <Text as="li" display="list-item">
                Enter the amount you’d like to cash out.
              </Text>
              <Text as="li" display="list-item">
                Select your pickup location.
              </Text>
              <Text as="li" display="list-item">
                Confirm the transaction details and tap
                <Link color="#1652f0" href="#">
                  Cash out now
                </Link>
                .
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              Once complete, you’ll receive a receipt with a tracking code and
              network ID. Bring your government-issued ID, tracking code, and
              network ID when you pick up your cash. Tap
              <Text as="b">View pickup location</Text>
              to find your nearest location for pick up.
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
                  For example, if you selected BanCoppel as your pickup
                  location, then you’ll see the nearest BanCoppel locations for
                  you to pick up your cash.
                </Text>
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              If you have any issues with picking up your cash or any withdrawal
              issues, please visit Remitly’s
              <Link color="#1652f0" href="#">
                Help Center
              </Link>
              for further assistance.
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
