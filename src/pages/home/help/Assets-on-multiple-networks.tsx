import {
  Flex,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  ListItem,
  UnorderedList,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Box,
  Image,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import { useMyIntl } from "../../../common";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";

import GettingFooter from "./components/GettingFooter";
import PageHelpful from "./components/PageHelpful";
import { MyAlert } from "../../../common";
import { MyCard } from "../../../common/components/MyCard";

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
  const { lang } = useMyIntl("Assetsonmultiplenetworks");
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
        <Flex pt={10} flexWrap="wrap" w="100%">
          <Flex
            flexDir="column"
            sx={{
              width: { base: "100%", sm: "100%", md: "67%", lg: "67%" },
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
            <MyAlert type="3">
              <Text>{lang[4]}</Text>
            </MyAlert>
            <MyAlert type="2" mt={4}>
              <Text>{lang[5]}</Text>
            </MyAlert>
            <Text fontSize="1rem" pt={6}>
              {lang[6]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[7]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[8]}
            </Text>
            <MyCard w="100%" pt={3} mt={5}>
              <TableContainer w="100%">
                <Table variant="simple" w="100%">
                  <Thead>
                    <Tr>
                      <Th>{lang[9]}</Th>
                      <Th>{lang[10]}</Th>
                      <Th>{lang[11]}</Th>
                      <Th>{lang[12]}</Th>
                      <Th>{lang[13]}</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <b>IOTX</b>
                      </Td>
                      <Td>{lang[14]}</Td>
                      <Td>{lang[15]}</Td>
                      <Td>
                        {lang[16]}
                        <b>{lang[17]}</b>
                      </Td>
                      <Td>{lang[18]}</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <b>IOTX</b>
                      </Td>
                      <Td>{lang[19]}</Td>
                      <Td>{lang[20]}</Td>
                      <Td>
                        {lang[21]}
                        <b>{lang[22]}</b>
                      </Td>
                      <Td>{lang[23]}</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <b>USDC</b>
                      </Td>
                      <Td>{lang[24]}</Td>
                      <Td>{lang[25]}</Td>
                      <Td>
                        {lang[26]}
                        <b>{lang[27]}</b>
                        {lang[28]}
                        <b>
                          {lang[29]}
                          <br />
                          {lang[30]}
                        </b>
                      </Td>
                      <Td>{lang[31]}</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <b>USDC</b>
                      </Td>
                      <Td>{lang[32]}</Td>
                      <Td>{lang[33]}</Td>
                      <Td>
                        {lang[34]}
                        <b>{lang[35]}</b>
                        {lang[36]}
                        <b>{lang[37]}</b>
                      </Td>
                      <Td>{lang[38]}</Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom="none">
                        <b>USDC</b>
                      </Td>
                      <Td borderBottom="none">{lang[39]}</Td>
                      <Td borderBottom="none">{lang[40]}</Td>
                      <Td borderBottom="none">
                        {lang[41]}
                        <b>{lang[42]}</b>
                        {lang[43]}
                        <b>{lang[44]}</b>
                      </Td>
                      <Td borderBottom="none">{lang[45]}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </MyCard>
            <Text fontSize="1rem" py={6}>
              <b>{lang[46]}</b>
              {lang[47]}
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
                            <Text>{lang[48]}</Text>
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}
                        </AccordionButton>
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text as="b">{lang[49]}</Text>
                        <UnorderedList fontSize="1rem">
                          <ListItem>
                            {lang[50]}
                            <Text as="b">{lang[51]}</Text>
                            {lang[52]}
                            <Text as="b">{lang[53]}</Text>
                            {lang[54]}
                          </ListItem>
                          <ListItem>{lang[55]}</ListItem>
                          <ListItem>{lang[56]}</ListItem>
                          <ListItem>{lang[57]}</ListItem>
                        </UnorderedList>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[58]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/5fttSZDqjMHC4GDwOckNfC/1fcc5e010d655908988c2ee1c768a720/send-mobile-8jun-v2.gif" />
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[59]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/2uQmI8sKc77tl1E3o7rH9t/928f943240cb991424f9c1908f01384c/Send-Web-8Jun.gif" />
                        </Flex>
                        <Text pt={5} pb={3}>
                          <b>{lang[60]}</b>
                        </Text>
                        <UnorderedList fontSize="1rem">
                          <ListItem>{lang[61]}</ListItem>
                          <ListItem>{lang[62]}</ListItem>
                          <ListItem>{lang[63]}</ListItem>
                          <ListItem>{lang[64]}</ListItem>
                        </UnorderedList>
                        <Text as="b">{lang[65]}</Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/6DkkYTFlZPubelzTJufhGt/e523a5581c816388bdc50c1b3a240bd1/Receive-mobile-8Jun.gif" />
                        </Flex>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[66]}
                        </Text>
                        <Flex w="full" fontSize="1rem" pt={6}>
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/6TvGF9trPJw1GGRbevtimB/8a1c992dfb4adca70dd6da577708c94e/Receive-Web-8Jun.gif" />
                        </Flex>
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
                            fontSize="var(--cds-fontSizes-xl)"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[67]}</Text>
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}
                        </AccordionButton>
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text fontSize="1rem" pt={6}>
                          {lang[68]}
                        </Text>
                        <MyCard w="full" pt={3} mt={5}>
                          <TableContainer w="full">
                            <Table variant="simple">
                              <Thead>
                                <Tr>
                                  <Th>{lang[69]}</Th>
                                  <Th>{lang[70]}</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                <Tr>
                                  <Td>
                                    <Link color="#0052ff">Dai</Link>(DAI)
                                  </Td>
                                  <Td>{lang[71]}</Td>
                                </Tr>
                                <Tr>
                                  <Td>
                                    <Link color="#0052ff">{lang[72]}</Link>(ETH)
                                  </Td>
                                  <Td>{lang[73]}</Td>
                                </Tr>
                                <Tr>
                                  <Td>
                                    <Link color="#0052ff">Polygon</Link>(MATIC)
                                  </Td>
                                  <Td>{lang[74]}</Td>
                                </Tr>
                                <Tr>
                                  <Td borderBottom="none">
                                    <Link color="#0052ff">{lang[75]}</Link>
                                    (USDC)
                                  </Td>
                                  <Td borderBottom="none">{lang[76]}</Td>
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
                            <Text>{lang[77]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}
                        </AccordionButton>{" "}
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text py={3}>
                          <b>{lang[78]}</b>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          Deposits will be processed from Optimism in just a
                          matter of minutes. In very rare cases, extremely large
                          deposits may incur a maximum delay of up to seven
                          days. Layer 2 blockchains, such as Optimism, institute
                          a delay as a mechanism to protect the security of
                          their network. On Optimism, this protective mechanism
                          is called a
                          <Link color="#1652f0" href="#">
                            {lang[79]}
                          </Link>
                          {lang[80]}
                        </Text>
                        <Text py={3}>
                          <b>{lang[81]}</b>
                        </Text>
                        <UnorderedList fontSize="1rem">
                          <ListItem>{lang[82]}</ListItem>
                        </UnorderedList>
                        <Text py={3}>
                          <b>{lang[83]}</b>
                        </Text>
                        <UnorderedList fontSize="1rem">
                          <ListItem>
                            {lang[84]}
                            <Link color="#1652f0" href="#">
                              {lang[85]}
                            </Link>
                            {lang[86]}
                            <Link color="#1652f0" href="#">
                              {lang[87]}
                            </Link>
                            {lang[88]}
                            <Link color="#1652f0" href="#">
                              {lang[89]}
                            </Link>
                            {lang[90]}
                            <Link color="#1652f0" href="#">
                              {lang[91]}
                            </Link>
                            {lang[92]}
                          </ListItem>
                        </UnorderedList>
                        <Text py={3}>
                          <b>{lang[93]}</b>
                        </Text>
                        <UnorderedList fontSize="1rem">
                          <ListItem>{lang[94]}</ListItem>
                        </UnorderedList>
                        <Text py={3}>
                          <b>{lang[95]}</b>
                        </Text>
                        <UnorderedList fontSize="1rem">
                          <ListItem>{lang[96]}</ListItem>
                        </UnorderedList>
                        <Text py={3}>
                          <b>{lang[97]}</b>
                        </Text>
                        <UnorderedList fontSize="1rem">
                          <ListItem>{lang[98]}</ListItem>
                        </UnorderedList>
                        <Text py={3}>
                          <b>{lang[99]}</b>
                        </Text>
                        <UnorderedList fontSize="1rem">
                          <ListItem>{lang[100]}</ListItem>
                        </UnorderedList>
                        <Text py={3}>
                          <b>{lang[101]}</b>
                        </Text>
                        <UnorderedList fontSize="1rem">
                          <ListItem>{lang[102]}</ListItem>
                        </UnorderedList>
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
