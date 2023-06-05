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

import { MyCard } from "../../../common/components/MyCard";
import { useMyIntl } from "../../../common/libs/intl/useMyIntl";
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
  const { lang } = useMyIntl("Trackingyourrewardspayouts");
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
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[8]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[9]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[10]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[11]}
              <Link color="#1652f0" href="#">
                {lang[12]}
              </Link>
              {lang[13]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[14]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[15]}
              <Link color="#1652f0" href="#">
                {lang[16]}
              </Link>
              {lang[17]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[18]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[19]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[20]}
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
            <Text fontSize="1rem" pt={6}>
              {lang[22]}
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
                <Link color="#1652f0" href="#">
                  {lang[23]}
                </Link>
              </Text>
              <Text as="li" display="list-item">
                <Link color="#1652f0" href="#">
                  {lang[24]}
                </Link>
              </Text>
              <Text as="li" display="list-item">
                <Link color="#1652f0" href="#">
                  {lang[25]}
                </Link>
              </Text>
            </Text>
            <MyCard w="full" pt={3} mt={5}>
              <TableContainer w="full">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>{lang[26]}</Th>
                      <Th>{lang[27]}</Th>
                      <Th>{lang[28]}</Th>
                      <Th>{lang[29]}</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <Link color="#0052ff">{lang[30]}</Link>
                      </Td>
                      <Td>{lang[31]}</Td>
                      <Td>{lang[32]}</Td>
                      <Td>
                        {lang[33]}
                        <Link color="#0052ff">{lang[34]}</Link>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Link color="#0052ff">{lang[35]}</Link>
                      </Td>
                      <Td>{lang[36]}</Td>
                      <Td>{lang[37]}</Td>
                      <Td>
                        {lang[38]}
                        <Link color="#0052ff">{lang[39]}</Link>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Link color="#0052ff">{lang[40]}</Link>
                      </Td>
                      <Td>{lang[41]}</Td>
                      <Td>{lang[42]}</Td>
                      <Td>
                        {lang[43]}
                        <Link color="#0052ff">{lang[44]}</Link>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Link color="#0052ff">{lang[45]}</Link>
                      </Td>
                      <Td>{lang[46]}</Td>
                      <Td>{lang[47]}</Td>
                      <Td>
                        {lang[48]}
                        <Link color="#0052ff">{lang[49]}</Link>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Link color="#0052ff">{lang[50]}</Link>
                      </Td>
                      <Td>{lang[51]}</Td>
                      <Td>{lang[52]}</Td>
                      <Td>
                        {lang[53]}
                        <Link color="#0052ff">{lang[54]}</Link>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Link color="#0052ff">{lang[55]}</Link>
                      </Td>
                      <Td>{lang[56]}</Td>
                      <Td>{lang[57]}</Td>
                      <Td>
                        {lang[58]}
                        <Link color="#0052ff">{lang[59]}</Link>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Link color="#0052ff">{lang[60]}</Link>
                      </Td>
                      <Td>{lang[61]}</Td>
                      <Td>{lang[62]}</Td>
                      <Td>
                        {lang[63]}
                        <Link color="#0052ff">{lang[64]}</Link>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom="none">
                        <Link color="#0052ff">{lang[65]}</Link>
                      </Td>
                      <Td borderBottom="none">{lang[66]}</Td>
                      <Td borderBottom="none">{lang[67]}</Td>
                      <Td borderBottom="none">
                        {lang[68]}
                        <Link color="#0052ff">{lang[69]}</Link>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </MyCard>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[70]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[71]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[72]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[73]}
              <Link color="#1652f0" href="#">
                {lang[74]}
              </Link>
              {lang[75]}
              <Link color="#1652f0" href="#">
                {lang[76]}
              </Link>
              {lang[77]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[78]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[79]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Text as="b">{lang[80]}</Text>
              {lang[81]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[82]}
              <Link color="#1652f0" href="#">
                {lang[83]}
              </Link>
              .
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
