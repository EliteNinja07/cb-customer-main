import { MyContent } from "../../../common/components/MyContent";

import Blockchain from "@/assets/images/Learn_Illustration_Ultimate_Guide_Blockchain.svg";
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
  const { lang } = useMyIntl("Whatisablockchain");
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
          id="wiab"
          py={3}
        >
          {lang[2]}
        </Text>
        <Wrap py={6} spacing="24px" flexWrap="wrap">
          <WrapItem flexDir="column" flex="1">
            <Flex w="full">
              <Image src={Blockchain} w="full" />
            </Flex>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[3]}
              <Text as="b">{lang[4]}</Text>
              {lang[5]}
            </Text>
            <Text as="i" borderLeft="8px solid #0052ff" pl={6}>
              <Text as="b">{lang[6]}</Text>
              {lang[7]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[8]}</Text>
                {lang[9]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[10]}</Text>
                {lang[11]}
              </Text>
              <Text as="li" display="list-item">
                {lang[12]}
                <Text as="b">{lang[13]}</Text>
                {lang[14]}
              </Text>
              <Flex w="full">
                <Image
                  src="//images.ctfassets.net/q5ulk4bp65r7/0FbNtfSpCRcAbMcEgrzNg/c80025da573dc11dc083aaad519c8356/1a_bitcoin-stats.gif?w=1180"
                  w="full"
                />
              </Flex>
              <Text as="li" display="list-item">
                {lang[15]}
                <Text as="b">{lang[16]}</Text>
                {lang[17]}
              </Text>
            </Text>
            <Text pl={6} borderLeft="8px solid #0052ff" as="i">
              {lang[18]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="2.0rem"
              id="aob"
              as="b"
            >
              {lang[19]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[20]}</Text>
                {lang[21]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[22]}</Text>
                {lang[23]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[24]}</Text>
                {lang[25]}
              </Text>
            </Text>
            <Flex w="full">
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/3FPOf4ixrzn4mcfEiNjPXN/d03c347f7ae58fcec43667f91fccdcf4/2a_crypto-vault.jpg?w=1180&fm=png"
                w="full"
              />
            </Flex>
            <Text
              fontSize="1rem"
              lineHeight="1.8rem"
              mt={6}
              p={6}
              sx={{ background: "#f2f2f2", _dark: { background: "#333" } }}
            >
              <Text as="b">{lang[26]}</Text>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={4}
                fontSize="1rem"
              >
                {lang[27]}
              </Text>
              <Text fontSize="1rem">{lang[28]}</Text>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={3}
                pb={2}
                fontSize="1rem"
              >
                {lang[29]}
              </Text>
              <Text fontSize="1rem">{lang[30]}</Text>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                pt={3}
                pb={2}
                fontSize="1rem"
              >
                {lang[31]}
              </Text>
              <Text fontSize="1rem">{lang[32]}</Text>
            </Text>
            <Flex w="full" pt={6}>
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/6OpdnXLShiVbbxA4VGjzC7/c3178368b629a3ce2ced301e5cbf36e3/3a_crypto-mobile-family.png?w=1180&fm=png"
                w="full"
              />
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2.0rem"
              id="hbw"
            >
              {lang[33]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[34]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[35]}</Text>
                {lang[36]}
              </Text>
              <Text as="li" display="list-item">
                {lang[37]}
                <Text as="b">{lang[38]}</Text> .{lang[39]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[40]}</Text>
                {lang[41]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[42]}</Text>
                {lang[43]}
              </Text>
            </Text>
            <Text
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pb={6}
              borderLeft="8px solid #0052ff"
              pl={6}
              as="i"
            >
              {lang[44]}
            </Text>
            <Text
              fontSize="1rem"
              lineHeight="1.8rem"
              mt={6}
              p={6}
              sx={{ background: "#f2f2f2", _dark: { background: "#333" } }}
            >
              <Text as="b">{lang[45]}</Text>
              <Text pt={6}>
                <Text
                  fontWeight="var(--cds-fontWeights-medium)"
                  pt={3}
                  pb={2}
                  as="b"
                >
                  {lang[46]}
                </Text>
              </Text>
              <Text>{lang[47]}</Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={2}
              fontSize="2rem"
              id={"witb"}
            >
              {lang[48]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[49]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Text as="li" display="list-item">
                {lang[50]}
              </Text>
              <Text as="li" display="list-item">
                {lang[51]}
              </Text>
              <Text as="li" display="list-item">
                {lang[52]}
              </Text>
              <Text as="li" display="list-item">
                {lang[53]}
                <Text as="b">{lang[54]}</Text>
                {lang[55]}
              </Text>
              <Text as="li" display="list-item">
                {lang[56]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[57]}</Text>
                {lang[58]}
              </Text>
            </Text>
            <Text as="i" borderLeft="8px solid #0052ff" pl={6}>
              {lang[59]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={2}
              fontSize="2.0rem"
              id="wtfb"
            >
              {lang[60]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[61]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Text as="li" display="list-item">
                {lang[62]}
                <Text as="b">{lang[63]}</Text>
                {lang[64]}
              </Text>
              <Text as="li" display="list-item">
                {lang[65]}
                <Text as="b">{lang[66]}</Text>
                {lang[67]}
              </Text>
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
                  <Link href="#wiab">{lang[68]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#aob">{lang[69]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#hbw">{lang[70]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#witb">{lang[71]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#wtfb">{lang[72]}</Link>
                </ListItem>
              </List>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
