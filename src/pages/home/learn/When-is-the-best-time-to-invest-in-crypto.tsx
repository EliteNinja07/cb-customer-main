import { MyContent } from "../../../common/components/MyContent";

import BTC from "@/assets/images/BTC_dollar.svg";
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
  const { lang } = useMyIntl("Whenisthebesttimetoinvestincrypto");
  return (
    <MyContent w="100%" px={3}>
      <Flex w="full" flexDir="column">
        <Flex>
          {" "}
          <Breadcrumb>
            {" "}
            <BreadcrumbItem>
              <BreadcrumbLink href="/home/learn">{lang[0]}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              {" "}
              <BreadcrumbLink href="/home/learn#Tips-and-tutorials">
                {lang[1]}
              </BreadcrumbLink>{" "}
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="3rem" py={3}>
          {lang[2]}
        </Text>
        <Text color="#5b616e" fontSize="1.2rem" pt={4} pb={4}>
          {lang[3]}
        </Text>
        <Wrap py={6} spacing="24px" flexWrap="wrap">
          <WrapItem flexDir="column" flex="1">
            <Flex w="full" py={5}>
              <video
                controls
                width="100%"
                src="/img/mov/Coinbase Learn When is the best time to invest in crypto.mp4"
              ></video>
            </Flex>
            <Text fontSize="1.2rem" pt={12} pb={6}>
              {lang[4]}
            </Text>
            <Text fontSize="1.2rem" pb={6}>
              {lang[5]}
              <Text as="b">{lang[6]}</Text>
              {lang[7]}
            </Text>
            <Text fontSize="1.2rem" pb={12}>
              {lang[8]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="widca"
            >
              {lang[9]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[10]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[11]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="watbdca"
            >
              {lang[12]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[13]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[14]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="widcame"
            >
              {lang[15]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[16]}
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
                <Text as="b">{lang[17]}</Text>
                {lang[18]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[19]}</Text>
                {lang[20]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[21]}</Text>
                {lang[22]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={6}
              pb={2}
              fontSize="2rem"
              id="hddca"
            >
              {lang[23]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[24]}
              <Text as="b">{lang[25]}</Text>
            </Text>
            <Text fontSize="1.4rem" pb={6} as="b">
              {lang[26]}
            </Text>
            <Flex w="100%" borderBottom="2px solid #000">
              <Text fontSize="1.2rem" w="33%"></Text>
              <Text fontSize="1.2rem" as="b" w="33%">
                {lang[27]}
              </Text>
              <Text fontSize="1.2rem" as="b" w="33%">
                {lang[28]}
              </Text>
            </Flex>
            <Flex w="100%">
              <Text
                fontSize="1.2rem"
                w="20%"
                borderRight="1px solid #000"
              ></Text>
              <Text fontSize="1.2rem" w="20%">
                {lang[29]}
              </Text>
              <Text fontSize="1.2rem" w="20%" borderRight="1px solid #000">
                {lang[30]}
              </Text>
              <Text fontSize="1.2rem" w="20%">
                {lang[31]}
              </Text>
              <Text fontSize="1.2rem" w="20%">
                {lang[32]}
              </Text>
            </Flex>
            <Flex
              w="100%"
              borderTop="1px solid rgba(0, 0, 0, 0.067)"
              borderBottom="1px solid rgba(0, 0, 0, 0.067)"
              background="rgba(0, 0, 0, 0.027) !important"
            >
              <Text fontSize="1.2rem" w="20%" borderRight="1px solid #000">
                {lang[33]}
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $100
              </Text>
              <Text fontSize="1.2rem" w="20%" borderRight="1px solid #000">
                $100
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $16,300
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $16,300
              </Text>
            </Flex>
            <Flex w="100%">
              <Text fontSize="1.2rem" w="20%" borderRight="1px solid #000">
                {lang[34]}
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $5,300
              </Text>
              <Text
                fontSize="1.2rem"
                color="#ff2b00"
                w="20%"
                borderRight="1px solid #000"
              >
                $2,986
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $16,300
              </Text>
              <Text fontSize="1.2rem" color="#ff2b00" w="20%">
                $4,521
              </Text>
            </Flex>
            <Flex w="100%" background="rgba(0, 0, 0, 0.027) !important">
              <Text fontSize="1.2rem" w="20%" borderRight="1px solid #000">
                Dec 16, 2019
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $10,500
              </Text>
              <Text
                fontSize="1.2rem"
                color="#2bbf7f"
                w="20%"
                borderRight="1px solid #000"
              >
                $11,982
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $16,300
              </Text>
              <Text fontSize="1.2rem" color="#ff2b00" w="20%">
                $8,611
              </Text>
            </Flex>
            <Flex w="100%">
              <Text fontSize="1.2rem" w="20%" borderRight="1px solid #000">
                {lang[35]}
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $16,300
              </Text>
              <Text
                fontSize="1.2rem"
                color="#2bbf7f"
                w="20%"
                borderRight="1px solid #000"
              >
                $65,176
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $16,300
              </Text>
              <Text fontSize="1.2rem" color="#2bbf7f" w="20%">
                $34,719
              </Text>
            </Flex>
            <Flex w="100%" background="rgba(0, 0, 0, 0.027) !important">
              <Text fontSize="1.2rem" as="b" w="33%">
                {lang[36]}
              </Text>
              <Text fontSize="1.2rem" as="b" color="#2bbf7f" w="33%">
                299%
              </Text>
              <Text fontSize="1.2rem" as="b" color="#2bbf7f" w="33%">
                113%
              </Text>
            </Flex>

            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[37]}
              <Text as="b">{lang[38]}</Text>
              {lang[39]}
            </Text>
            <Text fontSize="1.4rem" pt={6} pb={6} as="b">
              {lang[40]}
            </Text>
            <Flex w="100%">
              <Image src={BTC} w="full" />
            </Flex>
            <Text fontSize="0.5rem" pb={6} color="#708599">
              {lang[41]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[42]}
            </Text>
            <Text fontSize="1.4rem" pb={6} as="b">
              {lang[43]}
            </Text>
            <Flex w="100%" borderBottom="2px solid #000">
              <Text fontSize="1.2rem" w="33%"></Text>
              <Text fontSize="1.2rem" as="b" w="33%">
                {lang[44]}
              </Text>
              <Text fontSize="1.2rem" as="b" w="33%">
                {lang[45]}
              </Text>
            </Flex>
            <Flex w="100%">
              <Text
                fontSize="1.2rem"
                w="20%"
                borderRight="1px solid #000"
              ></Text>
              <Text fontSize="1.2rem" w="20%">
                {lang[46]}
              </Text>
              <Text fontSize="1.2rem" w="20%" borderRight="1px solid #000">
                {lang[47]}
              </Text>
              <Text fontSize="1.2rem" w="20%">
                {lang[48]}
              </Text>
              <Text fontSize="1.2rem" w="20%">
                {lang[49]}
              </Text>
            </Flex>
            <Flex
              w="100%"
              borderTop="1px solid rgba(0, 0, 0, 0.067)"
              borderBottom="1px solid rgba(0, 0, 0, 0.067)"
              background="rgba(0, 0, 0, 0.027) !important"
            >
              <Text fontSize="1.2rem" w="20%" borderRight="1px solid #000">
                {lang[50]}
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $100
              </Text>
              <Text fontSize="1.2rem" w="20%" borderRight="1px solid #000">
                $100
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $5,000
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $$5,000
              </Text>
            </Flex>
            <Flex w="100%">
              <Text fontSize="1.2rem" w="20%" borderRight="1px solid #000">
                {lang[51]}
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $2,600
              </Text>
              <Text
                fontSize="1.2rem"
                color="#2bbf7f"
                w="20%"
                borderRight="1px solid #000"
              >
                $3,267
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $5,000
              </Text>
              <Text fontSize="1.2rem" color="#2bbf7f" w="20%">
                $8,844
              </Text>
            </Flex>
            <Flex w="100%" background="rgba(0, 0, 0, 0.027) !important">
              <Text fontSize="1.2rem" w="20%" borderRight="1px solid #000">
                {lang[52]}
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $5,000
              </Text>
              <Text
                fontSize="1.2rem"
                color="#2bbf7f"
                w="20%"
                borderRight="1px solid #000"
              >
                $13,240
              </Text>
              <Text fontSize="1.2rem" w="20%">
                $5,000
              </Text>
              <Text fontSize="1.2rem" color="#2bbf7f" w="20%">
                $23,462
              </Text>
            </Flex>
            <Flex w="100%">
              <Text fontSize="1.2rem" as="b" w="33%">
                {lang[53]}
              </Text>
              <Text fontSize="1.2rem" as="b" color="#2bbf7f" w="33%">
                299%
              </Text>
              <Text fontSize="1.2rem" as="b" color="#2bbf7f" w="33%">
                113%
              </Text>
            </Flex>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[54]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[55]}
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
                  <Link href="#widca">{lang[56]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#watbdca">{lang[57]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#widcame">{lang[58]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#hddca">{lang[59]}</Link>
                </ListItem>
              </List>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
