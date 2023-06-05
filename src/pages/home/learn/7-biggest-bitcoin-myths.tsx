import debunking from "@/assets/images/debunking-bitcoin-myths-1__2_.svg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Link,
  List,
  ListItem,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMyIntl } from "../../../common";
import { MyContent } from "../../../common/components/MyContent";

const styles = {
  Fiexs: {
    position: "fixed",
    top: "100px",
    background: "#f2f2f2",
    _dark: { background: "#333" },
  },
  Relative: {
    position: "relative",
    top: "0",
    background: "#f2f2f2",
    _dark: { background: "#333" },
  },
};
export default () => {
  const [getFixed, setFixed] = useState({});
  const onScroll = (e: any) => {
    if (e.target.documentElement.scrollTop > 300) {
      setFixed(styles.Fiexs);
    } else {
      setFixed(styles.Relative);
    }
    console.log(e.target.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  const { lang } = useMyIntl("biggestBitcoinmyths");
  return (
    <MyContent w="100%" px={3}>
      <Flex w="full" flexDir="column">
        <Flex>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home/learn">{lang[0]}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home/learn#Crypto-Basics">
                {lang[1]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        <Text
          fontWeight="var(--cds-fontWeights-medium)"
          fontSize={{ base: "2rem", sm: "2rem", md: "3rem", lg: "3rem" }}
          py={3}
        >
          {lang[2]}
        </Text>
        <Wrap py={6} spacing="24px" flexWrap="wrap">
          <WrapItem flexDir="column" flex="1">
            <Flex w="full">
              <Image src={debunking} w="full" />
            </Flex>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[3]}
              <Text as="b">{lang[4]}</Text>
              {lang[5]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="Bitcoin-is-a-bubble"
            >
              {lang[6]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[7]}
              <Text as="b">{lang[8]}</Text>
              {lang[9]}
            </Text>
            <Flex mt={6} p={6} background="#f2f2f2">
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize="1.25rem"
                id="#"
              >
                {lang[10]}
              </Text>
              <Flex
                as="ul"
                listStyleType="disc"
                fontSize="1rem"
                lineHeight="1.8rem"
                pt={6}
                pl={6}
                pb="4"
              >
                <Text as="li" display="list-item">
                  {lang[11]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[12]}
                </Text>
              </Flex>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="Bitcoin-has-no-real-world-uses"
            >
              {lang[13]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[14]}
              <Text as="b">{lang[15]}</Text>
              {lang[16]}
            </Text>
            <Flex mt={6} p={6} background="#f2f2f2">
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize="1.25rem"
                id="#"
              >
                {lang[17]}
              </Text>
              <Flex
                as="ul"
                listStyleType="disc"
                fontSize="1rem"
                lineHeight="1.8rem"
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
                <Text as="li" display="list-item">
                  {lang[22]}
                </Text>
              </Flex>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="Bitcoin-doesnt-have-real-value"
            >
              {lang[23]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[24]}
              <Text as="b">{lang[25]}</Text>
              {lang[26]}
            </Text>
            <Flex mt={6} p={6} background="#f2f2f2">
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize="1.25rem"
                id="#"
              >
                {lang[27]}
              </Text>
              <Flex
                as="ul"
                listStyleType="disc"
                fontSize="1rem"
                lineHeight="1.8rem"
                pt={6}
                pl={6}
                pb="4"
              >
                <Text as="li" display="list-item">
                  {lang[28]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[29]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[30]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[31]}
                </Text>
              </Flex>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="Bitcoin-will-just-be-replaced-by-a-competitor"
            >
              {lang[32]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[33]}
              <Text as="b">{lang[34]}</Text>.
            </Text>
            <Flex mt={6} p={6} background="#f2f2f2">
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize="1.25rem"
                id="#"
              >
                {lang[35]}
              </Text>
              <Flex
                as="ul"
                listStyleType="disc"
                fontSize="1rem"
                lineHeight="1.8rem"
                pt={6}
                pl={6}
                pb="4"
              >
                <Text as="li" display="list-item">
                  {lang[36]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[37]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[38]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[39]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[40]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[41]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[42]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[43]}
                </Text>
              </Flex>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="Investing-in-Bitcoin-is-gambling"
            >
              {lang[44]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[45]}
              <Text as="b">{lang[46]}</Text>
              {lang[47]}
            </Text>
            <Flex mt={6} p={6} background="#f2f2f2">
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize="1.25rem"
                id="#"
              >
                {lang[48]}
              </Text>
              <Flex
                as="ul"
                listStyleType="disc"
                fontSize="1rem"
                lineHeight="1.8rem"
                pt={6}
                pl={6}
                pb="4"
              >
                <Text as="li" display="list-item">
                  {lang[49]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[50]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[51]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[52]}
                </Text>
              </Flex>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="Bitcoin-isn-secure"
            >
              {lang[53]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[54]}</Text>
              {lang[55]}
            </Text>
            <Flex mt={6} p={6} background="#f2f2f2">
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize="1.25rem"
                id="#"
              >
                {lang[56]}
              </Text>
              <Flex
                as="ul"
                listStyleType="disc"
                fontSize="1rem"
                lineHeight="1.8rem"
                pt={6}
                pl={6}
                pb="4"
              >
                <Text as="li" display="list-item">
                  {lang[57]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[58]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[59]}
                </Text>
              </Flex>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="Bitcoin-is-bad-for-the-environment"
            >
              {lang[60]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[61]}
            </Text>
            <Flex mt={6} p={6} background="#f2f2f2">
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize="1.25rem"
                id="#"
              >
                {lang[62]}
              </Text>
              <Flex
                as="ul"
                listStyleType="disc"
                fontSize="1rem"
                lineHeight="1.8rem"
                pt={6}
                pl={6}
                pb="4"
              >
                <Text as="li" display="list-item">
                  {lang[63]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[64]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[65]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[66]}
                </Text>
              </Flex>
            </Flex>
          </WrapItem>
          <WrapItem
            w="400px"
            sx={{ display: { base: "none", sm: "none", lg: "block" } }}
          >
            <Flex sx={getFixed} py="0.8rem" px="1.2rem">
              <List>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#Bitcoin-is-a-bubble">{lang[67]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#Bitcoin-has-no-real-world-uses">{lang[68]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#Bitcoin-doesnt-have-real-value">{lang[69]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#Bitcoin-will-just-be-replaced-by-a-competitor">
                    {lang[70]}
                  </Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#Investing-in-Bitcoin-is-gambling">
                    {lang[71]}
                  </Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="Bitcoin-isn-secure">{lang[72]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#Bitcoin-is-bad-for-the-environment">
                    {lang[73]}
                  </Link>
                </ListItem>
              </List>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
