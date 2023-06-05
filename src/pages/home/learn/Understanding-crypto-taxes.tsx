import { MyContent } from "../../../common/components/MyContent";

import taxes from "@/assets/images/taxes__1_.svg";
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
  const { lang } = useMyIntl("Understandingcryptotaxes");
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
        <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="3rem" py={3}>
          {lang[2]}
        </Text>
        <Text color="#5b616e" fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
          {lang[3]}
        </Text>
        <Wrap py={6} spacing="24px" flexWrap="wrap">
          <WrapItem flexDir="column" flex="1">
            <Flex w="full">
              <Image src={taxes} w="full" />
            </Flex>
            <Text fontSize="1.2rem" pt={12} pb={6}>
              {lang[4]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[5]}
            </Text>
            <Flex mt={6} p={6} background="#f2f2f2">
              <Text as="b" fontSize="1.2rem">
                {lang[6]}
              </Text>
              <Text fontSize="1rem" lineHeight="1.8rem" pt={6} pb={6}>
                {lang[7]}
              </Text>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="2rem"
              id="dioc"
            >
              {lang[8]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[9]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[10]}
              <Text as="i">{lang[11]}</Text>
              {lang[12]}
              <Text as="b">{lang[13]}</Text>
              {lang[14]}
              <Text as="b">{lang[15]}</Text>
              {lang[16]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={6}
              pb={4}
              fontSize="1.2rem"
            >
              {lang[17]}
            </Text>
            <Flex
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
            >
              <Flex as="li" display="list-item">
                <Text as="b">{lang[18]}</Text>
                {lang[19]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[20]}</Text>
                {lang[21]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[22]}</Text>
                {lang[23]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[24]}</Text>
                {lang[25]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[26]}</Text>
                {lang[27]}
              </Flex>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.2rem"
            >
              {lang[28]}
            </Text>
            <Flex
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Flex as="li" display="list-item">
                <Text as="b">{lang[29]}</Text>
                {lang[30]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[31]}</Text>
                {lang[32]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[33]}</Text>
                {lang[34]}
              </Flex>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.2rem"
            >
              {lang[35]}
            </Text>
            <Flex
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Flex as="li" display="list-item">
                <Text as="b">{lang[36]}</Text>
                {lang[37]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[38]}</Text>
                {lang[39]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[40]}</Text>
                {lang[41]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[42]}</Text>
                {lang[43]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[44]}</Text>
                {lang[45]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[46]}</Text>
                {lang[47]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[48]}</Text>
                {lang[49]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[50]}</Text>
                {lang[51]}
              </Flex>
            </Flex>
            <Flex mt={6} p={6} background="#f2f2f2">
              <Text fontSize="1.2rem" as="b">
                {lang[52]}
              </Text>
              <Text fontSize="1rem" lineHeight="1.8rem" pt={6}>
                {lang[53]}
              </Text>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="2rem"
              id="hmdi"
            >
              {lang[54]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[55]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.2rem"
            >
              {lang[56]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[57]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[58]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.2rem"
            >
              {lang[59]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[60]}
            </Text>
            <Text as="b">{lang[61]}</Text>
            <Flex mt={6} p={6} background="#f2f2f2">
              <Text as="b" fontSize="1.2rem">
                {lang[62]}
              </Text>
              <Text pt={6}>
                When you buy cryptocurrency, your cost basis is generally
                determined by how much you paid for it. However, if you received
                crypto from mining or staking, your cost basis is determined by
                the fair market value when you received it. Your cost basis for
                gifted crypto will depend on both the basis the person who
                transferred it to you had and the fair market value when you
                received it.
              </Text>
            </Flex>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[63]}
            </Text>
            <Text as="b" fontSize="1.2rem">
              {lang[64]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[65]}
            </Text>
            <Flex
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Flex as="li" display="list-item">
                <Text as="b">{lang[66]}</Text>
                {lang[67]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[68]}</Text>
                {lang[69]}
              </Flex>
            </Flex>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[70]}
            </Text>
            <Text as="b" fontSize="1.2rem">
              {lang[71]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[72]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[73]}
            </Text>
            <Flex mt={6} p={6} background="#f2f2f2">
              <Text fontSize="1.2rem" as="b">
                Coinbase Gain/Loss Report
              </Text>
              <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
                {lang[74]}
              </Text>
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
                  <Link href="#dioc">{lang[75]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#hmdi">{lang[76]}</Link>
                </ListItem>
              </List>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
