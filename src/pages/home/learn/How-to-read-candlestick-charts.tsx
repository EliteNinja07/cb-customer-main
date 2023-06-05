import { MyContent } from "../../../common/components/MyContent";

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
  const { lang } = useMyIntl("Howtoreadcandlestickcharts");
  return (
    <MyContent w="100%" px={3}>
      <Flex w="full" flexDir="column">
        <Flex>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home/learn">{lang[0]}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home/learn#Tips-and-tutorials">
                {lang[1]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="3rem" py={3}>
          {lang[2]}
        </Text>
        <Wrap py={6} spacing="24px" flexWrap="wrap">
          <WrapItem flexDir="column" flex="1">
            <Flex w="full" py={5}>
              <video
                controls
                width="100%"
                src="/img/mov/Coinbase Learn How to read candlestick charts.mp4"
              ></video>
            </Flex>
            <Text fontSize="1.2rem" pt={12}>
              {lang[3]}
              <Text as="b">{lang[4]}</Text>
              {lang[5]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={12}>
              {lang[6]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="wacc"
            >
              {lang[7]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[8]}
            </Text>
            <Flex w="full">
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/6dANpxqC7MEQlgNrv3kUKH/2ef342d9ff4bc1def274c9104bc2604f/Coinbase_Pro.png?w=1180&fm=png"
                w="full"
              />
            </Flex>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[9]}
            </Text>
            <Flex w="full">
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/38ywDcjGnJ8fvGUrf8k6l7/a52b3c4bbadb8d985ab70f585932c003/candlestick_diagram.png?w=1180&fm=png"
                w="full"
              />
            </Flex>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[10]}</Text>
                {lang[11]}
                <Text as="b">{lang[12]}</Text>
                {lang[13]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[14]}</Text>
                {lang[15]}
              </Text>
              <Text as="li" display="list-item">
                {" "}
                <Text as="b">{lang[16]}</Text>
                {lang[17]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="wdctu"
            >
              {lang[18]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[19]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                A long wick on the bottom of a candle, for instance, might mean
                that traders are buying into an asset as prices fall, which may
                be a good indicator that the asset is on its way up.
              </Text>
              <Text as="li" display="list-item">
                {lang[20]}
                <Text as="i">{lang[21]}</Text>
                {lang[22]}
              </Text>
              <Text as="li" display="list-item">
                {lang[23]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" pb={6}>
              {lang[24]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="htrocs"
            >
              {lang[25]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[26]}
            </Text>
            <Flex w="full">
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/5xLa1Ab5BFlUa40uyt1tFH/8ed1dab134f2fc7e819c6b8d497f4835/candlestick_patterns.png?w=1180&fm=png"
                w="full"
              />
            </Flex>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[27]}</Text>
                {lang[28]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[29]}</Text>
                {lang[30]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[31]}</Text>
                {lang[32]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[33]}</Text>
                {lang[34]}
                <Text as="b">{lang[35]}</Text>
                {lang[36]}
                <Text as="b">{lang[37]}</Text>
                {lang[38]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" pb={6} pt={6}>
              {lang[39]}
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
                  <Link href="#wacc">{lang[40]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#wdctu">{lang[41]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#htrocs">{lang[42]}</Link>
                </ListItem>
              </List>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
