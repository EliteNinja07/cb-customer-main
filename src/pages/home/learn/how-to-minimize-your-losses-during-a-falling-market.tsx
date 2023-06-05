import { MyContent } from "../../../common/components/MyContent";

import Weathering from "@/assets/images/Weathering-the-crypto-dip.svg";
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
  const { lang } = useMyIntl("keywaystomanageacryptodowncycle");
  return (
    <MyContent w="100%" px={3}>
      <Flex w="full" flexDir="column">
        <Flex>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home/learn">{lang[0]}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home/learn/#Crypto-Basics">
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
        <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
          {lang[3]}
        </Text>
        <Wrap py={6} spacing="24px" flexWrap="wrap">
          <WrapItem flexDir="column" flex="1">
            <Flex w="full">
              <Image src={Weathering} w="full" />
            </Flex>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[4]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[5]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="1-Dont-fall-prey-to-FOMO-and-FUD"
            >
              {lang[6]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[7]}
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
                {lang[8]}
              </Text>
              <Text as="li" display="list-item">
                {lang[9]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[10]}</Text>
              {lang[11]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="2-Set-clear-goals-diversify-and-only-trade-within-your-means"
            >
              {lang[12]}
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
                {lang[13]}
              </Text>
              <Text as="li" display="list-item">
                {lang[14]}
              </Text>
              <Text as="li" display="list-item">
                {lang[15]}
              </Text>
              <Text as="li" display="list-item">
                {lang[16]}
              </Text>
              <Text as="li" display="list-item">
                {lang[17]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[18]}</Text>
              {lang[19]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="3-HODLing-and-long-term-thinking"
            >
              {lang[20]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[21]}
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
                {lang[22]}
              </Text>
              <Text as="li" display="list-item">
                {lang[23]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[24]}</Text>
              {lang[25]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="4 Be ready to ride out the dip or take profits"
            >
              {lang[26]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[27]}
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
                {lang[28]}
              </Text>
              <Text as="li" display="list-item">
                {lang[29]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[30]}</Text>
              {lang[31]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="5-See-the-opportunities"
            >
              {lang[32]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[33]}
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
                {lang[34]}
              </Text>
              <Text as="li" display="list-item">
                {lang[35]}
              </Text>
              <Text as="li" display="list-item">
                {lang[36]}
              </Text>
              <Text as="li" display="list-item">
                {lang[37]}
              </Text>
              <Text as="li" display="list-item">
                {lang[38]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[39]}</Text>
              {lang[40]}
            </Text>
          </WrapItem>
          <WrapItem
            w="400px"
            sx={{ display: { base: "none", sm: "none", lg: "block" } }}
          >
            <Flex sx={getFixed} py="0.8rem" px="1.2rem">
              <List>
                <ListItem color="#5b616e" fontSize="  1.2rem" pb={2}>
                  <Link href="#1-Dont-fall-prey-to-FOMO-and-FUD">
                    {lang[41]}
                  </Link>
                </ListItem>
                <ListItem color="#5b616e" fontSize="  1.2rem" pb={2}>
                  <Link href="#2-Set-clear-goals-diversify-and-only-trade-within-your-means">
                    {lang[42]}
                  </Link>
                </ListItem>
                <ListItem color="#5b616e" fontSize="  1.2rem" pb={2}>
                  <Link href="#3-HODLing-and-long-term-thinking">
                    {lang[43]}
                  </Link>
                </ListItem>
                <ListItem color="#5b616e" fontSize="  1.2rem" pb={2}>
                  <Link href="#4 Be ready to ride out the dip or take profits">
                    {lang[44]}
                  </Link>
                </ListItem>
                <ListItem color="#5b616e" fontSize="  1.2rem" pb={2}>
                  <Link href="#5-See-the-opportunities">{lang[45]}</Link>
                </ListItem>
              </List>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
