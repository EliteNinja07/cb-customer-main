import { MyContent } from "../../../common/components/MyContent";

import Equity from "@/assets/images/Former_Private_Equity__1_.svg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
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
  const { lang } = useMyIntl(
    "ExperttipsAformerprivateequitymanagerwhonowfundsDeFitech"
  );
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
            <Flex w="full">
              <Image src={Equity} w="full" />
            </Flex>
            <Text fontSize="1.2rem" pt={12} pb={12} as="i">
              {lang[3]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[4]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={8}
              pb={2}
              fontSize="2rem"
              id="wnac"
            >
              {lang[5]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[6]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={8}
              pb={2}
              fontSize="2rem"
              id="wnac"
            >
              {lang[7]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[8]}
              <Text as="i">{lang[9]}</Text>
              {lang[10]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={8}
              pb={2}
              fontSize="2rem"
              id="wnac"
            >
              {lang[11]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[12]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={8}
              pb={2}
              fontSize="2rem"
              id="wnac"
            >
              {lang[13]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[14]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={8}
              pb={2}
              fontSize="2rem"
              id="wnac"
            >
              {lang[15]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[16]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={8}
              pb={2}
              fontSize="2rem"
              id="wnac"
            >
              {lang[17]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[18]}
              <Text as="i">{lang[19]}</Text>
              {lang[20]}
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
