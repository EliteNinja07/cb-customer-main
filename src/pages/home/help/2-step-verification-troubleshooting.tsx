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
  const { lang } = useMyIntl("stepverificationtroubleshooting");
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
                  <BreadcrumbLink>{lang[2]}</BreadcrumbLink>
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
            <MyAlert type="2">
              <Flex flexDir="column">
                <Text as="b" fontSize="1.1rem">
                  {lang[4]}
                </Text>
                <Text fontSize="1.1rem" pt={2} pb={6}>
                  {lang[5]}
                </Text>
                <Text as="b" fontSize="1.1rem" pt={2}>
                  {lang[6]}
                </Text>
                <Text fontSize="1.1rem" pt={2} pb={3}>
                  {lang[7]}
                  <Link color="#1652f0" href="#">
                    {lang[8]}
                  </Link>
                  .
                </Text>
                <Text as="b" fontSize="1.1rem" pt={2}>
                  {lang[9]}
                </Text>
                <Text fontSize="1.1rem" pt={2}>
                  {lang[10]}
                </Text>
              </Flex>
            </MyAlert>

            <Text fontSize="1.1rem" pt={6}>
              {lang[11]}
            </Text>
            <Text fontSize="1.1rem" pt={6}>
              {lang[12]}
            </Text>
            <Text as="b" fontSize="1.1rem" pt={6}>
              {lang[13]}
            </Text>
            <Text as="ul" listStyleType="disc" fontSize="1.1rem" pt={6} pl={6}>
              <Text as="li" display="list-item">
                {lang[14]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[15]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[16]}
              </Text>
            </Text>
            <Text fontSize="1.1rem" pt={6} pb={12}>
              {lang[17]}
              <Link color="#1652f0" href="#">
                {lang[18]}
              </Link>
              .
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
                            fontSize="1.5rem"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[19]}</Text>
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
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            {lang[20]}
                            <Link color="#1652f0" href="#">
                              {lang[21]}
                            </Link>
                            {lang[22]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[23]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[24]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[25]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          fontSize="1.5rem"
                          id="#"
                        >
                          {lang[26]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[27]}
                          <Link color="#1652f0" href="#">
                            {lang[28]}
                          </Link>
                          {lang[29]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[30]}
                          <Text as="b">{lang[31]}</Text>
                          {lang[32]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          fontSize="1.5rem"
                          id="#"
                        >
                          {lang[33]}
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
                            {lang[34]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[35]}
                            <Link color="#1652f0" href="#">
                              {lang[36]}
                            </Link>
                            {lang[37]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[38]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[39]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[40]}
                          </Text>
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[41]}
                          <Text as="b">{lang[42]}</Text>
                          {lang[43]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          fontSize="1.5rem"
                          id="#"
                        >
                          {lang[44]}
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
                            {lang[45]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[46]}
                            <Text as="b">{lang[47]}</Text> {">"}
                            <Text as="b">{lang[48]}</Text>
                          </Text>
                          <Text as="ul" fontSize="1.1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              <Text as="b">{lang[49]}</Text>
                              {lang[50]}
                            </Text>
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[51]}
                          </Text>
                          <Text as="ul" fontSize="1.1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              {lang[52]}
                            </Text>
                            <Text as="li" display="list-item" pt={6}>
                              {lang[53]}
                            </Text>
                          </Text>
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[54]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[55]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[56]}
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
                            <Text>{lang[57]}</Text>
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
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={6}
                          fontSize="1.5rem"
                          id="#"
                        >
                          {lang[58]}
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
                            {lang[59]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[60]}
                            <Link color="#1652f0" href="#">
                              {lang[61]}
                            </Link>
                            {lang[62]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[63]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[64]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={6}
                          fontSize="1.5rem"
                          id="#"
                        >
                          {lang[65]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6} pb={6}>
                          If you're using an authenticator app and no longer
                          have access to your old mobile device, but remember
                          the phone number associated with your account, you'll
                          need to first disable your authenticator app in order
                          to complete the account recovery process.
                        </Text>
                        <Text as="b" fontSize="1.1rem">
                          To disable your authenticator:
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[66]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[67]}
                          <Text as="b">{lang[68]}</Text> {">"}
                          <Text as="b">{lang[69]}</Text>
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            <Text as="b">{lang[70]}</Text>
                            {lang[71]}
                          </Text>
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[72]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[73]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[74]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[75]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[76]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          fontSize="1.5rem"
                          id="#"
                        >
                          {lang[77]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[78]}
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
                            <Text>{lang[79]}</Text>
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}
                        </AccordionButton>
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[80]}
                          <Text as="b">{lang[81]}</Text>
                          {lang[82]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[83]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            {lang[84]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[85]}
                            <Link color="#1652f0" href="#">
                              {lang[86]}
                            </Link>
                            {lang[87]}
                            <Link color="#1652f0" href="#">
                              {lang[88]}
                            </Link>
                            .
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[89]}
                          </Text>
                          <Text as="ul" fontSize="1.1rem" pt={6} pl={6} pb="4">
                            <Text as="li" display="list-item">
                              {lang[90]}
                            </Text>
                            <Text as="li" display="list-item" pt={6}>
                              {lang[91]}
                            </Text>
                            <Text as="li" display="list-item" pt={6}>
                              {lang[92]}
                            </Text>
                            <Text as="li" display="list-item" pt={6}>
                              {lang[93]}
                            </Text>
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[94]}
                            <Link color="#1652f0" href="#">
                              {lang[95]}
                            </Link>
                            {lang[96]}
                            <Link color="#1652f0" href="#">
                              {lang[97]}
                            </Link>
                            .)
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[98]}
                          </Text>
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[99]}
                          <Link color="#1652f0" href="#">
                            {lang[100]}
                          </Link>
                          {lang[101]}
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
                            <Text>{lang[102]}</Text>
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
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={6}
                          fontSize="1.5rem"
                          id="#"
                        >
                          {lang[103]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            {lang[104]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[105]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[106]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[107]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={6}
                          fontSize="1.5rem"
                          id="#"
                        >
                          {lang[108]}
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
                            {lang[109]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[110]}
                            <Link color="#1652f0" href="#">
                              {lang[111]}
                            </Link>
                            {lang[112]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[113]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[114]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[115]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={6}
                          fontSize="1.5rem"
                          id="#"
                        >
                          {lang[116]}
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
                            {lang[117]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[118]}
                            <Text as="b">{lang[119]}</Text>
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[120]}
                          </Text>
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[121]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[122]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[123]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={6}
                          fontSize="1.5rem"
                          id="#"
                        >
                          {lang[124]}
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
                            {lang[125]}
                            <Link color="#1652f0" href="#">
                              {lang[126]}
                            </Link>
                            {lang[127]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[128]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[129]}
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
