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
  Input,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

import { useMyIntl } from "../../../common";
import { MyCard } from "../../../common/components/MyCard";
import GettingFooter from "./components/GettingFooter";
import PageHelpful from "./components/PageHelpful";

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
  const { lang } = useMyIntl("Myinvestmentperformance");
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
                  <BreadcrumbLink href="/home/help/Trading-and-funding">
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
              fontSize="var(--cds-sizes-10)"
              py={3}
            >
              {lang[3]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[4]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[5]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[6]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[7]}
            </Text>
            <Text as="b">{lang[8]}</Text>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                {lang[9]}
                <Text as="b">{lang[10]}</Text>.
              </Text>
              <Text as="li" display="list-item">
                {lang[11]}
                <Text as="b">{lang[12]}</Text>.
              </Text>
              <Text as="li" display="list-item">
                {lang[13]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[14]}
            </Text>
            <Text as="b">{lang[15]}</Text>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                {lang[16]}
                <Text as="b">{lang[17]}</Text>.
              </Text>
              <Text as="li" display="list-item">
                {lang[18]}
                <Text as="b">{lang[19]}</Text>.
              </Text>
              <Text as="li" display="list-item">
                {lang[20]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[21]}
            </Text>
            <Text fontSize="1rem" pt={6} pb={3}>
              {lang[22]}
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
                            fontSize="var(--cds-fontSizes-xl)"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[23]}</Text>
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}
                        </AccordionButton>
                      </h1>
                      <AccordionPanel pb={4}>
                        <MyCard w="full" pt={3} mt={5}>
                          <TableContainer w="full">
                            <Table variant="simple">
                              <Thead>
                                <Tr>
                                  <Th>{lang[24]}</Th>
                                  <Th>{lang[25]}</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                <Tr>
                                  <Td>{lang[26]}</Td>
                                  <Td>
                                    <Text>{lang[27]}</Text>
                                    <Text pt={3}>
                                      <b>{lang[28]}</b>
                                      {lang[29]}
                                    </Text>
                                    <Text pt={3}>
                                      <b>{lang[30]}</b>
                                      {lang[31]}
                                    </Text>
                                    <Text pt={3}>
                                      <b>{lang[32]}</b>
                                      {lang[33]}
                                    </Text>
                                    <Text pt={3}>
                                      <b>{lang[34]}</b>
                                      {lang[35]}
                                    </Text>
                                    <Text pt={3}>
                                      <b>{lang[36]}</b>
                                      {lang[37]}
                                    </Text>
                                    <Text pt={3}>{lang[38]}</Text>
                                    <Text pt={3}>
                                      <b>{lang[39]}</b>
                                      {lang[40]}
                                    </Text>
                                    <Text pt={3}>{lang[41]}</Text>
                                    <Text pt={3}>
                                      <b>{lang[42]}</b>
                                      {lang[43]}
                                    </Text>
                                    <Text pt={3}>{lang[44]}</Text>
                                  </Td>
                                </Tr>
                                <Tr>
                                  <Td borderBottom="none">{lang[45]}</Td>
                                  <Td borderBottom="none">
                                    <Text>
                                      {lang[46]}
                                      <b>{lang[47]}</b>
                                      {lang[48]}
                                    </Text>
                                    <Text pt={3}>{lang[49]}</Text>
                                    <Text pt={3}>{lang[50]}</Text>
                                    <Text pt={3}>{lang[51]}</Text>
                                    <Text pt={3}>{lang[52]}</Text>
                                  </Td>
                                </Tr>
                              </Tbody>
                            </Table>
                          </TableContainer>
                        </MyCard>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[53]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[54]}
              <Text as="b">{lang[55]}</Text>
              {lang[56]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[57]}
            </Text>
            <Text fontSize="1rem" pt={6} pb={3}>
              {lang[58]}
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
                            fontSize="var(--cds-fontSizes-xl)"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[59]}</Text>
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}
                        </AccordionButton>
                      </h1>
                      <AccordionPanel pb={4}>
                        <MyCard w="full" pt={3} mt={5}>
                          <TableContainer w="full">
                            <Table variant="simple">
                              <Tbody>
                                <Tr>
                                  <Td>{lang[60]}</Td>
                                  <Td>
                                    <Text>{lang[61]}</Text>{" "}
                                    <Text pt={3}>{lang[62]}</Text>
                                    <Text pt={3}>{lang[63]}</Text>
                                    <Text pt={3}>{lang[64]}</Text>
                                    <Text pt={3}>{lang[65]}</Text>
                                  </Td>
                                </Tr>
                                <Tr>
                                  <Td>{lang[66]}</Td>
                                  <Td>
                                    <Text>{lang[67]}</Text>
                                    <Text pt={3}>
                                      <b>{lang[68]}</b>
                                      {lang[69]}
                                    </Text>
                                    <Text pt={3}>
                                      <b>{lang[70]}</b>
                                      {lang[71]}
                                    </Text>
                                    <Text pt={3}>
                                      <b>{lang[72]}</b>
                                      {lang[73]}
                                    </Text>
                                    <Text pt={3}>
                                      <b>{lang[74]}</b>
                                      {lang[75]}
                                    </Text>
                                    <Text pt={3}>
                                      <b>{lang[76]}</b>
                                      {lang[77]}
                                    </Text>
                                  </Td>
                                </Tr>
                                <Tr>
                                  <Td>{lang[78]}</Td>
                                  <Td>{lang[79]}</Td>
                                </Tr>
                                <Tr>
                                  <Td>{lang[80]}</Td>
                                  <Td>{lang[81]}</Td>
                                </Tr>
                                <Tr>
                                  <Td borderBottom="none">{lang[82]}</Td>
                                  <Td borderBottom="none">{lang[83]}</Td>
                                </Tr>
                              </Tbody>
                            </Table>
                          </TableContainer>
                        </MyCard>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[84]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[85]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[86]}
              <Link color="#1652f0" href="#">
                {lang[87]}
              </Link>
              .
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[88]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[89]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[90]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[91]}
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
                {lang[92]}
              </Text>
              <Text as="li" display="list-item">
                {lang[93]}
              </Text>
              <Text as="li" display="list-item">
                {lang[94]}
              </Text>
              <Text as="li" display="list-item">
                {lang[95]}
                <Link color="#1652f0" href="#">
                  {lang[96]}
                </Link>
                .
              </Text>
              <Text
                as="ul"
                fontSize="1rem"
                listStyleType="circle"
                pt={6}
                pl={6}
                pb="4"
              >
                <Text as="li" display="list-item">
                  {lang[97]}
                  <Text as="b">{lang[98]}</Text>
                  {lang[99]}
                  <Text as="b">{lang[100]}</Text>.
                </Text>
                <Text as="li" display="list-item">
                  <Text as="li" display="list-item">
                    {lang[101]}
                    <Text as="b">{lang[102]}</Text>.
                  </Text>
                </Text>
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[103]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[104]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[105]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[106]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[107]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[108]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[109]}
              <Link color="#1652f0" href="#">
                {lang[110]}
              </Link>
              {lang[111]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[112]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[113]}
              <Link color="#1652f0" href="#">
                {lang[114]}
              </Link>
              {lang[115]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[116]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[117]}
            </Text>
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
