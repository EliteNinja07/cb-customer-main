import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
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
import React, { useEffect, useState } from "react";

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
  const { lang } = useMyIntl("PayPalFAQ");
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
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                {lang[5]}
                <Link color="#1652f0" href="#">
                  {lang[6]}
                </Link>
                {lang[7]}
              </Text>
              <Text as="li" display="list-item">
                {lang[8]}
                <Link color="#1652f0" href="#">
                  {lang[9]}
                </Link>
                {lang[10]}
                <Link color="#1652f0" href="#">
                  {lang[11]}
                </Link>
                {lang[12]}
              </Text>
              <Text as="li" display="list-item">
                {lang[13]}
                <Text as="b">{lang[14]}</Text>
                {lang[15]}
                <Text as="b">{lang[16]}</Text>.
              </Text>
            </Text>
            <Text as="b">{lang[17]}</Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                {lang[18]}
              </Text>
              <Text as="li" display="list-item">
                {lang[19]}
              </Text>
              <Text as="li" display="list-item">
                {lang[20]}
              </Text>
              <Text as="li" display="list-item">
                {lang[21]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[22]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[23]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[24]}
            </Text>
            <Text as="b">{lang[25]}</Text>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[26]}</Text>
              </Text>
              <Text as="li" display="list-item">
                {lang[27]}
              </Text>
            </Text>
            <Text as="b">{lang[28]}</Text>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[29]}</Text>
                {lang[30]}
                <Text as="b">{lang[31]}</Text>.
              </Text>
              <Text as="li" display="list-item">
                {lang[32]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[33]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[34]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[35]}
            </Text>
            <Text as="b">{lang[36]}</Text>
            <MyCard w="full" pt={3} mt={5}>
              <TableContainer w="full">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>{lang[37]}</Th>
                      <Th>USD</Th>
                      <Th>{lang[38]}</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <b>{lang[39]}</b>
                      </Td>
                      <Td>$25,000</Td>
                      <Td>24 hours</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <b>{lang[40]}</b>
                      </Td>
                      <Td>$10,000</Td>
                      <Td>{lang[41]}</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <b>{lang[42]}</b>
                      </Td>
                      <Td>$1,000</Td>
                      <Td>{lang[43]}</Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom="none">
                        <b>{lang[44]}</b>
                      </Td>
                      <Td borderBottom="none">$1,000</Td>
                      <Td borderBottom="none">{lang[45]}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </MyCard>
            <Text pt={5}>
              <b>{lang[46]}</b>
            </Text>
            <MyCard w="full" pt={3} mt={5}>
              <TableContainer w="full">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>{lang[47]}</Th>
                      <Th>EUR</Th>
                      <Th>GBP</Th>
                      <Th>CAD</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <b>{lang[48]}</b>
                      </Td>
                      <Td>7,500</Td>
                      <Td>6,500</Td>
                      <Td>12,000</Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom="none">
                        <b>{lang[49]}</b>
                      </Td>
                      <Td borderBottom="none">20,000</Td>
                      <Td borderBottom="none">20,000</Td>
                      <Td borderBottom="none">30,000</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </MyCard>
            <Text pt={5}>
              <b>{lang[50]}</b>
            </Text>
            <MyCard w="full" pt={3} mt={5}>
              <TableContainer w="full">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th></Th>
                      <Th>{lang[51]}</Th>
                      <Th>{lang[52]}</Th>
                      <Th>{lang[53]}</Th>
                      <Th>{lang[54]}</Th>
                      <Th>{lang[55]}</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <b>US</b>
                      </Td>
                      <Td>USD</Td>
                      <Td>{lang[56]}</Td>
                      <Td>USD</Td>
                      <Td>USD</Td>
                      <Td>{lang[57]}</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <b>EU</b>
                      </Td>
                      <Td>EUR</Td>
                      <Td>{lang[58]}</Td>
                      <Td>{lang[59]}</Td>
                      <Td>EUR</Td>
                      <Td>{lang[60]}</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <b>UK**</b>
                      </Td>
                      <Td>{lang[61]}</Td>
                      <Td>{lang[62]}</Td>
                      <Td>{lang[63]}</Td>
                      <Td>{lang[64]}</Td>
                      <Td>{lang[65]}</Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom="none">
                        <b>CA</b>
                      </Td>
                      <Td borderBottom="none">{lang[66]}</Td>
                      <Td borderBottom="none">{lang[67]}</Td>
                      <Td borderBottom="none">{lang[68]}</Td>
                      <Td borderBottom="none">{lang[69]}</Td>
                      <Td borderBottom="none">CAD</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </MyCard>
            <Text fontSize="1rem" pt={6}>
              {lang[70]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[71]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[72]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[73]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[74]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[75]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[76]}
              <Link color="#1652f0" href="#">
                {lang[77]}
              </Link>
              {lang[78]}
              <Link color="#1652f0" href="#">
                {lang[79]}
              </Link>
              .
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[80]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[81]}
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
