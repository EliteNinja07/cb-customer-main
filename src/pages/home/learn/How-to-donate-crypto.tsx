import { MyContent } from "../../../common/components/MyContent";

import DonatingCrypto from "@/assets/images/Donating-Crypto.svg";
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
  const { lang } = useMyIntl("Howtodonatecrypto");
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
        <Text color="#5b616e" fontSize="1.2rem" pt={4} pb={4}>
          {lang[3]}
        </Text>
        <Wrap py={6} spacing="24px" flexWrap="wrap">
          <WrapItem flexDir="column" flex="1">
            <Flex w="full">
              <Image src={DonatingCrypto} w="full" />
            </Flex>
            <Text fontSize="1.2rem" pt={12}>
              {lang[4]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[5]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[6]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[7]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="cip"
            >
              {lang[8]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[9]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[10]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="cchta"
            >
              {lang[11]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[12]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[13]}</Text>
              {lang[14]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[15]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[16]}</Text>
              {lang[17]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[18]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="cdcb"
            >
              {lang[19]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[20]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[21]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[22]}</Text>
              {lang[23]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[24]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[25]}</Text>
              {lang[26]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[27]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="scmc"
            >
              {lang[28]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[29]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[30]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="wnac"
            >
              {lang[31]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[32]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[33]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[34]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[35]}
              <Text as="b">{lang[36]}</Text>
              {lang[37]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[38]}
              <Text as="b">{lang[39]}</Text>
              {lang[40]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[41]}
              <Text as="b">{lang[42]}</Text>
              {lang[43]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[44]}
              <Text as="b">{lang[45]}</Text>
              {lang[46]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[47]}
              <Text as="b">{lang[48]}</Text>
              {lang[49]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[50]}
              <Text as="b">{lang[51]}</Text>
              {lang[52]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[53]}
              <Text as="b">{lang[54]}</Text>
              {lang[55]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[56]}
              <Text as="b">{lang[57]}</Text>
              {lang[58]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[59]}
              <Text as="b">{lang[60]}</Text>
              {lang[61]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[62]}
              <Text as="b">{lang[63]}</Text>
              {lang[64]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[65]}
              <Text as="b">{lang[66]}</Text>
              {lang[67]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[68]}
              <Text as="b">{lang[69]}</Text>
              {lang[70]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[71]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} as="i">
              {lang[72]}
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
                  <Link href="#cip">{lang[73]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#cchta">{lang[74]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#cdcb">{lang[75]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#scmc">{lang[76]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#wnac">{lang[77]}</Link>
                </ListItem>
              </List>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
