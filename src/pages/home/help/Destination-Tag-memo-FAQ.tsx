import {
  Flex,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import { useMyIntl } from "../../../common";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

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
  const { lang } = useMyIntl("DestinationTagmemoFAQ");
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
            <MyAlert type="2">
              <Flex flexDir="column">
                <Text
                  fontWeight="var(--cds-fontWeights-medium)"
                  fontSize="1.25rem"
                  id="#"
                >
                  {lang[4]}
                </Text>
                <Text fontSize="1rem" pt={3}>
                  {lang[5]}
                </Text>
              </Flex>
            </MyAlert>
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
            <UnorderedList>
              <ListItem>{lang[9]}</ListItem>
              <ListItem>{lang[10]}</ListItem>
            </UnorderedList>
            <Text fontSize="1rem" pt={6}>
              <Text as="b">{lang[11]}</Text>
              {lang[12]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[13]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[14]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[15]}
              <Text as="b">{lang[16]}</Text>
              {lang[17]}
            </Text>
            <UnorderedList>
              <ListItem>
                <b>{lang[18]}</b>
                {lang[19]}
              </ListItem>
              <ListItem>
                <b>{lang[20]}</b>: wallets stored on a hardware device like a
                USB, and are stored offline
              </ListItem>
            </UnorderedList>
            <Text fontSize="1rem" pt={6}>
              <b>{lang[21]}</b>
              {lang[22]}
              <Link color="#1652f0" href="#">
                {lang[23]}
              </Link>
              .
            </Text>
            <b>{lang[24]}</b>
            <UnorderedList>
              <ListItem>{lang[25]}</ListItem>
            </UnorderedList>
            <OrderedList>
              <ListItem>{lang[26]}</ListItem>
              <ListItem>{lang[27]}</ListItem>
            </OrderedList>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[28]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[29]}
            </Text>
            <MyCard w="full" pt={3} mt={5}>
              <TableContainer w="full">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>{lang[30]}</Th>
                      <Th>{lang[31]}</Th>
                      <Th>{lang[32]}</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <Link color="#0052ff">{lang[33]}</Link>
                      </Td>
                      <Td>{lang[34]}</Td>
                      <Td>{lang[35]}</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Link color="#0052ff">{lang[36]}</Link>
                      </Td>
                      <Td>{lang[37]}</Td>
                      <Td>{lang[38]}</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Link color="#0052ff">{lang[39]}</Link>
                      </Td>
                      <Td>{lang[40]}</Td>
                      <Td>{lang[41]}</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Link color="#0052ff">{lang[42]}</Link>
                      </Td>
                      <Td>{lang[43]}</Td>
                      <Td>{lang[44]}</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Link color="#0052ff">{lang[45]}</Link>
                      </Td>
                      <Td>{lang[46]}</Td>
                      <Td>{lang[47]}</Td>
                    </Tr>
                    <Tr>
                      <Td borderBottom="none">
                        <Link color="#0052ff">{lang[48]}</Link>
                      </Td>
                      <Td borderBottom="none">{lang[49]}</Td>
                      <Td borderBottom="none">{lang[50]}</Td>
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
              {lang[51]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[52]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[53]}
              <Link color="#1652f0" href="#">
                {lang[54]}
              </Link>
              .
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[55]}
              <Link color="#1652f0" href="#">
                {lang[56]}
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
              {lang[57]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[58]}
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
