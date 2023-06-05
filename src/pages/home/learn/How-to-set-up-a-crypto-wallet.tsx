import { MyContent } from "../../../common/components/MyContent";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
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
  const { lang } = useMyIntl("Howtosetupacryptowallet");
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
                src="/img/mov/Coinbase Learn How to set up a crypto wallet"
              ></video>
            </Flex>
            <Text fontSize="1.2rem" pt={12} pb={12}>
              {lang[3]}
            </Text>
            <Text fontSize="1.2rem" pb={12}>
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
              <Text as="i">{lang[7]}</Text>
              {lang[8]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[9]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[10]}
            </Text>
            <Text fontSize="1.2rem" pl={6} pt={6}>
              1.<Text as="b">{lang[11]}</Text>
              {lang[12]}
            </Text>
            <Text fontSize="1.2rem" pl={6}>
              2.<Text as="b">{lang[13]}</Text>
              {lang[14]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              <Text as="b">{lang[15]}</Text>
              {lang[16]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="ssyt"
            >
              {lang[17]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[18]}
            </Text>
            <Text fontSize="1.2rem" pb={6}>
              {lang[19]}
            </Text>
            <Text fontSize="1.2rem" pb={6}>
              {lang[20]}
            </Text>
            <Text fontSize="1.2rem" pl={6} pt={6}>
              1.<Text as="b">{lang[21]}</Text>
              {lang[22]}
            </Text>
            <Text fontSize="1.2rem" pl={6}>
              2.<Text as="b">{lang[23]}</Text>
              {lang[24]}
            </Text>
            <Text fontSize="1.2rem" pl={6}>
              3.<Text as="b">{lang[25]}</Text>
              {lang[26]}
            </Text>
            <Text fontSize="1.2rem" pl={6}>
              4.<Text as="b">{lang[27]}</Text>
              {lang[28]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[29]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="2rem"
              id="tydis"
            >
              {lang[30]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[31]}
            </Text>
            <Text fontSize="1.2rem" pb={6}>
              {lang[32]}
            </Text>
            <Text fontSize="1.2rem" pl={6} pt={6}>
              1.<Text as="b">{lang[33]}</Text>
              {lang[34]}
            </Text>
            <Text fontSize="1.2rem" pl={6} pt={6}>
              2.<Text as="b">{lang[35]}</Text>
              {lang[36]}
            </Text>
            <Text fontSize="1.2rem" pl={6} pt={6}>
              3.<Text as="b">{lang[37]}</Text>
              {lang[38]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[39]}
            </Text>
          </WrapItem>
          <WrapItem
            w="400px"
            sx={{ display: { base: "none", sm: "none", lg: "block" } }}
          ></WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
