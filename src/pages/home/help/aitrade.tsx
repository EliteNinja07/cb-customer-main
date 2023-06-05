import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Divider,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import MyIconTitle1 from "@/assets/images/help/ProAppIcon.svg";
import MyFootIcon from "@/assets/images/footer-cta-icon.svg";
import FixedRightList from "./components/FixedRightList";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../../common";

const styles = {
  helpSearchC: {
    width: "100%",
    minHeight: "calc(100vh - 68px - 64px)",
    display: "block",
    backgroundColor: "#fff",
    _dark: {
      backgroundColor: "#000",
    },
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

const RListC = [
  {
    label: "Getting started",
    href: "",
  },
  {
    label: "Managing my account",
    href: "",
  },
  {
    label: "Trading and funding",
    href: "",
  },
  {
    label: "Taxes, reports, and financial services",
    href: "",
  },
  {
    label: "Privacy and security",
    href: "",
  },
  {
    label: "Other topics",
    href: "",
  },
  {
    label: "Asset Directory",
    href: "",
  },
];

export default () => {
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
                <BreadcrumbItem>
                  <BreadcrumbLink>Ai trade</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Flex alignItems="center" pt={10}>
              <Image boxSize="58px" marginRight="30px" src={MyIconTitle1} />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize="2rem"
                pl={3}
              >
                Getting started
              </Text>
            </Flex>
            <Flex flexDir="column" sx={styles.gettingList}>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize="1.4rem"
                py={7}
              >
                Getting started with Coinbase
              </Text>
              <UnorderedList>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">Create a Coinbase account</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">How to verify your identity on Coinbase</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">What is 2-step verification?</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">Supported cryptocurrencies</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">Learning rewards</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">What is Coinbase?</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">New user incentive</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">Information on opening an account (Japan)</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">
                    Frequently Asked Questions about Opening an Account (FAQ)
                    (Japan)
                  </Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">First stake incentive</Link>
                </ListItem>
              </UnorderedList>
            </Flex>

            <Flex flexDir="column" sx={styles.gettingList}>
              <Divider />
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize="1.4rem"
                py={7}
              >
                Verify my account
              </Text>
              <UnorderedList>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">How to verify your identity on Coinbase</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">
                    Identity document verification troubleshooting
                  </Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">
                    Available two-step verification apps (TOTP)
                  </Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">What is 2-step verification?</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">Set up 2-step verification</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">
                    How do I verify my identity through the mobile app?
                  </Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">
                    How do I verify my phone number when using the mobile app?
                  </Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">
                    Enabling Duo or Google Authenticator (TOTP)
                  </Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">Identity photo verification</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">Device confirmation troubleshooting</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">Security keys FAQ</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">Security key restrictions</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">How to enable a webcam</Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">
                    Verifying my information (for US customers)
                  </Link>
                </ListItem>
                <ListItem sx={styles.ListItems}>
                  <Link to="#">Coinbase Security Prompt</Link>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w={{ base: "100%", sm: "100%", md: "33%", lg: "33%" }}
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
            display="block"
          >
            <FixedRightList list={RListC} />
          </Flex>
        </Flex>
      </Flex>
      <Flex sx={styles.footers}>
        <Flex flexDir="column">
          <Flex justifyContent="center">
            <Image boxSize="55px" src={MyFootIcon} />
          </Flex>
          <Text
            fontWeight="var(--cds-fontWeights-medium)"
            py={12}
            fontSize="1.8rem"
          >
            Can't find what you're looking for?
          </Text>
          <PrimaryButton
            borderRadius="4px"
            w="327px"
            margin="0 auto"
            fontSize="14px"
            h="43px"
          >
            Contact us
          </PrimaryButton>
        </Flex>
      </Flex>
    </Flex>
  );
};
