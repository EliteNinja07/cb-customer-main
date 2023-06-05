import {
  Flex,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";

import { useMyIntl } from "../../../common";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";

import GettingFooter from "./components/GettingFooter";
import PageHelpful from "./components/PageHelpful";
import { MyAlert } from "../../../common";

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
  const { lang } = useMyIntl("Avoidingcryptocurrencyscams");
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
                  <BreadcrumbLink href="/home/help/Privacy-and-security">
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
            <Text fontSize="1rem" pt={6}>
              {lang[4]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Text as="b">{lang[5]}</Text>
              {lang[6]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[7]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[8]}
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
                {lang[9]}
              </Text>
              <Text as="li" display="list-item">
                {lang[10]}
              </Text>
              <Text as="li" display="list-item">
                {lang[11]}
              </Text>
              <Text as="li" display="list-item">
                {lang[12]}
                <Link color="#1652f0" href="#">
                  {lang[13]}
                </Link>
                {lang[14]}
                <Link color="#1652f0" href="#">
                  {lang[15]}
                </Link>
                {lang[16]}
              </Text>
              <Text as="li" display="list-item">
                {lang[17]}
              </Text>
            </Text>
            <Flex mt={10} pt={6}>
              <MyAlert type="1">
                <Flex flexDir="column">
                  <b>{lang[18]}</b>
                  <Text fontSize="1rem" pt={3}>
                    {lang[19]}
                  </Text>
                  <Text
                    fontWeight="var(--cds-fontWeights-medium)"
                    pt={4}
                    pb={1}
                    fontSize="1.25rem"
                    id="#"
                  >
                    {lang[20]}
                  </Text>
                  <Text
                    as="ul"
                    listStyleType="disc"
                    fontSize="1rem"
                    pt={4}
                    pl={6}
                    pb="4"
                  >
                    <Text as="li" display="list-item">
                      {lang[21]}
                    </Text>
                    <Text as="li" display="list-item">
                      {lang[22]}
                    </Text>
                    <Text as="li" display="list-item">
                      {lang[23]}
                    </Text>
                    <Text as="li" display="list-item">
                      {lang[24]}
                    </Text>
                  </Text>
                  <Text fontSize="1rem" pt={4}>
                    {lang[25]}
                  </Text>
                </Flex>
              </MyAlert>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[26]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[27]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Link color="#1652f0" href="#">
                {lang[28]}
              </Link>
              {lang[29]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[30]}
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/4dQKSpy24TuKHjuKa6k9sb/430b658064cb65997e2c7164aadff440/Social_Scam_consumer_avoiding_crypto_scams.png" />
            </Flex>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                {lang[31]}
              </Text>
              <Text as="li" display="list-item">
                {lang[32]}
              </Text>
              <Text as="li" display="list-item">
                {lang[33]}
              </Text>
              <Text as="li" display="list-item">
                {lang[34]}
              </Text>
              <Text as="li" display="list-item">
                {lang[35]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[36]}
              <Link color="#1652f0" href="#">
                {lang[37]}
              </Link>
              {lang[38]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[39]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[40]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[41]}
              <Link color="#1652f0" href="#">
                {lang[42]}
              </Link>
              {lang[43]}
              <Link color="#1652f0" href="#">
                {lang[44]}
              </Link>
              {lang[45]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[46]}
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
                {lang[47]}
              </Text>
              <Text as="li" display="list-item">
                {lang[48]}
              </Text>
              <Text as="li" display="list-item">
                {lang[49]}
              </Text>
              <Text as="li" display="list-item">
                {lang[50]}
              </Text>
            </Text>
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
                {lang[54]}
              </Text>
              <Text as="li" display="list-item">
                {lang[55]}
              </Text>
              <Text as="li" display="list-item">
                {lang[56]}
              </Text>
              <Text as="li" display="list-item">
                {lang[57]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[58]}
              <Link color="#1652f0" href="#">
                {lang[59]}
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
              {lang[60]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[61]}
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
                {lang[62]}
              </Text>
              <Text as="li" display="list-item">
                {lang[63]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[64]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[65]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[66]}
              <Link color="#1652f0" href="#">
                {lang[67]}
              </Link>
              {lang[68]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[69]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[70]}
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
                {lang[71]}
                <Link color="#1652f0" href="#">
                  {lang[72]}
                </Link>
                {lang[73]}
              </Text>
              <Text as="li" display="list-item">
                {lang[74]}
              </Text>
              <Text as="li" display="list-item">
                {lang[75]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[76]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[77]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[78]}
              <Link color="#1652f0" href="#">
                {lang[79]}
              </Link>
              {lang[80]}
              <Link color="#1652f0" href="#">
                {lang[81]}
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
              {lang[82]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[83]}
              <Text as="b">{lang[84]}</Text>.{lang[85]}
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
