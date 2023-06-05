import { MyContent } from "../../../common/components/MyContent";

import Bitcoin from "@/assets/images/Ultimate_Guide_Bitcoin.svg";
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
  const { lang } = useMyIntl("WhatisBitcoin");
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
          fontSize="3rem"
          py={3}
          id="wib"
        >
          {lang[2]}
        </Text>
        <Wrap py={6} spacing="24px" flexWrap="wrap">
          <WrapItem flexDir="column" flex="1">
            <Flex w="full">
              <Image src={Bitcoin} w="full" />
            </Flex>
            <Text pt={6}>
              <Text
                fontSize="1rem"
                lineHeight="1.8rem"
                mt={6}
                p={6}
                background="#f2f2f2"
              >
                {lang[3]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" pt={12}>
              {lang[4]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={4}
            >
              <Text as="li" display="list-item">
                {lang[5]}
              </Text>
              <Text as="li" display="list-item">
                {lang[6]}
              </Text>
              <Text as="li" display="list-item">
                {lang[7]}
              </Text>
              <Text as="li" display="list-item">
                {lang[8]}
              </Text>
              <Text as="li" display="list-item">
                {lang[9]}
              </Text>
            </Text>
            <Text mt={6} p={6} background="#f2f2f2">
              <Text fontSize="1.2rem">
                <Text as="b">{lang[10]}</Text>
              </Text>
              <Text fontSize="1rem" lineHeight="1.8rem" pt={6}>
                <Text as="b">{lang[11]}</Text>
                <Text>{lang[12]}</Text>
              </Text>
              <Text fontSize="1rem" lineHeight="1.8rem">
                <Text as="b">{lang[13]}</Text>
                <Text>{lang[14]}</Text>
              </Text>
              <Text fontSize="1rem" lineHeight="1.8rem">
                <Text as="b">{lang[15]}</Text>
                <Text>{lang[16]}</Text>
              </Text>
              <Text fontSize="1rem" lineHeight="1.8rem">
                <Text as="b">{lang[17]}</Text>
                <Text>{lang[18]}</Text>
              </Text>
              <Text fontSize="1rem" lineHeight="1.8rem">
                <Text as="b">{lang[19]}</Text>
                <Text>{lang[20]}</Text>
              </Text>
              <Text fontSize="1rem">
                <Text as="b">{lang[21]}</Text>
                <Text>{lang[22]}</Text>
              </Text>
            </Text>
            <Flex w="full" pt={6}>
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/588GZOzTuNevqr0QmTpsAT/7dad6d4417c9e16c97301bf9f9006cd3/1a_bitcoin-trading.gif?w=1180"
                w="full"
              />
            </Flex>
            <Text as="i" fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[23]}
            </Text>
            <Text fontSize="1rem" lineHeight="1.8rem" pt={4}>
              {lang[24]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
            >
              {lang[25]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[26]}
            </Text>
            <Flex w="full" pt={6}>
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/5yNb5wRPLGPHE6BYSOSxZj/beffa175416271651f5866f68aa5ca81/2a_bitcoin-stats.gif?w=1180"
                w="full"
              />
            </Flex>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={4}
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[27]}</Text>
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[28]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[29]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[30]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[31]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={4}
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[32]}</Text>
                {lang[33]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[34]}</Text>
                {lang[35]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[36]}</Text>
                {lang[37]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="wcb"
            >
              {lang[38]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[39]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={4}
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[40]}</Text>
                {lang[41]}
              </Text>
              <Text as="li" display="list-item">
                {lang[42]}
                <Text as="b">{lang[43]}</Text>
                {lang[44]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[45]}</Text>
                {lang[46]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[47]}</Text>
              {lang[48]}
            </Text>
            <Flex w="full" pt={6}>
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/1qaTRyEdeiWwdgtnXO25uN/fc4812e6a87abfe37618822ca9bcbdbe/bitcoin-global.7c14fb6033095342edf8db0bdabc536c.gif?w=1180"
                w="full"
              />
            </Flex>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} as="i">
              {lang[49]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="hbw"
            >
              {lang[50]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[51]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[52]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[53]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={4}
              pb={6}
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[54]}</Text>
                {lang[55]}
              </Text>
            </Text>
            <Flex w="full">
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/1LXdPeBbP8hKrzGrS17Srr/1fe1bdbe92061d5b7adbaca45c284fc4/bitcoin-attack.png?w=1180&fm=png"
                w="full"
              />
            </Flex>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={4}
              pb={6}
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[56]}</Text>
                {lang[57]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[58]}</Text>
                {lang[59]}
              </Text>
              <Text as="li" display="list-item">
                {lang[60]}
                <Text as="b">{lang[61]}</Text>
                {lang[62]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[63]}</Text>
                {lang[64]}
              </Text>
            </Text>
            <Flex w="full">
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/1CrMtxowXiSzcQoGMXuNAX/f3e4b477f6037ed151bfbdc1d1a95d33/Screen_Shot_2020-12-04_at_12.38.15_PM.png?w=1180&fm=png"
                w="full"
              />
            </Flex>
            <Text fontSize="1.2rem" pt={12}>
              {lang[65]}
            </Text>
            <Text fontSize="1.2rem" pt={12} pb={12} as="i">
              {lang[66]}
            </Text>
            <Text background="#f2f2f2" p={6} mt={6}>
              <Text as="b" fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
                {lang[67]}
              </Text>
              <Text as="b" fontSize="1rem" lineHeight="1.8rem">
                {lang[68]}
              </Text>
              <Text fontSize="1rem" lineHeight="1.8rem">
                {lang[69]}
              </Text>
            </Text>
            <Flex w="full">
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/2cc8Af1P2jYsuPcNpnKpf0/d0a19522f6774c81175a77064aacbf91/bitcoin-stats.2c6915799e4611f2d58e7435deea1421.gif?w=1180"
                w="full"
              />
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="htgb"
            >
              {lang[70]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[71]}
            </Text>
            <Text fontSize="1rem" lineHeight="1.8rem" pt={6}>
              {lang[72]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[73]}
            </Text>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Text as="li" display="list-item">
                {lang[74]}
              </Text>
              <Text as="li" display="list-item">
                {lang[75]}
              </Text>
              <Text as="li" display="list-item">
                {lang[76]}
              </Text>
              <Text as="li" display="list-item">
                {lang[77]}
                <Text as="b">{lang[78]}</Text>
              </Text>
              <Text as="li" display="list-item">
                {lang[79]}
                <Text as="b">{lang[80]}</Text>
                {lang[81]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} as="i">
              {lang[82]}
            </Text>
            <Text background="#f2f2f2" p={6} mt={6}>
              <Text as="b" fontSize="1.2rem">
                {lang[83]}
              </Text>
              <Text fontSize="1rem" lineHeight="1.8rem" pt={6}>
                <Text as="b">{lang[84]}</Text>
                <Text>{lang[85]}</Text>
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="htub"
            >
              {lang[86]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[87]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={4}
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[88]}</Text>
                {lang[89]}
              </Text>
            </Text>
            <Text as="ul" listStyleType="disc" fontSize="1.2rem" pl={4}>
              <Text as="li" display="list-item">
                <Text as="b">{lang[90]}</Text>
                {lang[91]}
              </Text>
            </Text>
            <Text as="ul" listStyleType="disc" fontSize="1.2rem" pl={4}>
              <Text as="li" display="list-item">
                <Text as="b">{lang[92]}</Text>
                {lang[93]}
              </Text>
            </Text>
            <Text as="ul" fontSize="1.2rem" pl={8} pb={6}>
              <Text as="li">{lang[94]}</Text>
              <Text as="li">{lang[95]}</Text>
              <Text as="li">{lang[96]}</Text>
              <Text as="li">{lang[97]}</Text>
              <Text as="li">{lang[98]}</Text>
            </Text>
            <Text as="i" fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[99]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="hdub"
            >
              {lang[100]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[101]}</Text>
              {lang[102]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[103]}</Text>
              {lang[104]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[105]}</Text>
              {lang[106]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[107]}</Text>
              {lang[108]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[109]}</Text>
              {lang[110]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[111]}</Text>
              {lang[112]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="hdub"
            >
              {lang[113]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[114]}
            </Text>
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
                  <Link href="#wib">{lang[115]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#wcb">{lang[116]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#hbw">{lang[117]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#htgb">{lang[118]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#htub">{lang[119]}</Link>
                </ListItem>
              </List>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
