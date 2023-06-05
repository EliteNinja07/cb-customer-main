import {
  Flex,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import GettingFooter from "./components/GettingFooter";
import PageHelpful from "./components/PageHelpful";
import { MyAlert, useMyIntl } from "../../../common";

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
export default () => {
  const { lang } = useMyIntl("Accessingmyaccount");
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
                  <BreadcrumbLink href="/home/help/getting-started">
                    {lang[1]}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="/home/help/create-a-coinbase-account">
                    {lang[2]}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>

            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize="3rem"
              py={3}
            >
              {lang[3]}
            </Text>
            <MyAlert>
              <Flex>
                <b>{lang[4]}</b>
                <Text fontSize="1.1rem">{lang[5]}</Text>
              </Flex>
            </MyAlert>

            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={6}
              fontSize="1.5rem"
              id=" #"
            >
              {lang[6]}
            </Text>
            <Text fontSize="1.1rem" pt={6}>
              {lang[7]}
            </Text>
            <Text as="b" fontSize="1.1rem" pt={6}>
              {lang[8]}
            </Text>
            <Text as="ul" listStyleType="disc" fontSize="1.1rem" pt={6} pl={6}>
              <Text as="li" display="list-item">
                {lang[9]}
                <Link color="#1652f0" href="#">
                  {lang[10]}
                </Link>
                .
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[11]}
                <Link color="#1652f0" href="#">
                  {lang[12]}
                </Link>
                .
              </Text>
            </Text>
            <Text as="b" fontSize="1.1rem" pt={6}>
              {lang[13]}
              <Link color="#1652f0" href="#">
                {lang[14]}
              </Link>
              {lang[15]}
            </Text>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1.1rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Text as="li" display="list-item">
                {lang[16]}
              </Text>
              <Text as="ul" fontSize="1.1rem" pt={6} pl={6} pb="4">
                <Text as="li" display="list-item">
                  {lang[17]}
                  <Link color="#1652f0" href="#">
                    {lang[18]}
                  </Link>
                  {lang[19]}
                  <Link color="#1652f0" href="#">
                    {lang[20]}
                  </Link>
                  .
                </Text>
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[21]}
              </Text>
            </Text>

            <Text fontSize="1.1rem" pt={6}>
              {lang[22]}
            </Text>

            <Text fontSize="1.1rem" pt={6}>
              {lang[23]}
            </Text>

            <Text fontSize="1.1rem" pt={6} pb={6}>
              {lang[24]}
            </Text>
            <Flex w="full">
              <Image
                src="https://images.ctfassets.net/7ca8qfn907uv/1HiTinocSoM8Z4eEjqRQKn/2e00d02e5d6db2b69f00b82c8a246c2d/Disbled_sends_consumer_accessing_my_account.png"
                w="full"
              />
            </Flex>
            <Text as="b" fontSize="1.1rem" pt={6} pb={12}>
              {lang[25]}
            </Text>
            <Flex>
              <Accordion w="100%" allowMultiple>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h1>
                        <AccordionButton
                          py={5}
                          sx={{ color: "#1652f0", _hover: { bg: "none" } }}
                        >
                          <Box
                            flex="1"
                            fontSize="1.5rem"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[26]}</Text>
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}
                        </AccordionButton>
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            {lang[27]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[28]}
                          </Text>
                          <Text as="ul" fontSize="1.1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              {lang[29]}
                            </Text>
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[30]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[31]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[32]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[33]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[34]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[35]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[36]}
                          </Text>
                        </Text>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Flex>
            <Flex>
              <Accordion w="100%" allowMultiple>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h1>
                        <AccordionButton
                          py={5}
                          sx={{ color: "#1652f0", _hover: { bg: "none" } }}
                        >
                          <Box
                            flex="1"
                            fontSize="1.5rem"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[37]}</Text>
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}
                        </AccordionButton>
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            {lang[38]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[39]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[40]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[41]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[42]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[43]}
                          </Text>
                          <Text as="ul" fontSize="1.1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              {lang[44]}
                            </Text>
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[45]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[46]}
                          </Text>
                        </Text>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Flex>
            <PageHelpful />
          </Flex>
          <Flex
            w={{ base: "100%", sm: "100%", md: "33%", lg: "33%" }}
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
            display="block"
          ></Flex>
        </Flex>
      </Flex>
      <GettingFooter />
    </Flex>
  );
};
