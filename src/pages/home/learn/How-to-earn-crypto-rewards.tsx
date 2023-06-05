import { MyContent } from "../../../common/components/MyContent";

import EarningRewards from "@/assets/images/Earning-Rewards.svg";
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

  const { lang } = useMyIntl("HowToEarnCryptoRewards");
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
              <Image src={EarningRewards} w="full" />
            </Flex>
            <Text fontSize="1.2rem" pt={12} pb={12}>
              {lang[4]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="clr"
            >
              {lang[5]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[6]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[7]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[26]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="ssyt"
            >
              {lang[8]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[9]}
            </Text>
            <Text fontSize="1.2rem" pb={6}>
              {lang[10]}
            </Text>
            <Text fontSize="1.2rem" pb={6}>
              {lang[11]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="tydis"
            >
              {lang[12]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[13]}
            </Text>
            <Text fontSize="1.2rem" pb={6}>
              {lang[14]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="lscc"
            >
              {lang[15]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[16]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="lcda"
            >
              {lang[17]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[18]}
            </Text>
            <Text fontSize="1.2rem" pb={6}>
              {lang[19]}
            </Text>
            <Text fontSize="1.2rem" fontWeight="500" pb={6}>
              {lang[20]}
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
                  <Link href="#clr">{lang[21]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#ssyt">{lang[22]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#tydis">{lang[23]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#lscc">{lang[24]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#lcda">{lang[25]}</Link>
                </ListItem>
              </List>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
