import { MyContent } from "../../../common/components/MyContent";

import Staking from "@/assets/images/Learn_Illustration_What_is_Staking.svg";
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
import { useState } from "react";
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
  const { lang } = useMyIntl("Whatisstaking");
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
          fontSize="var(--cds-sizes-10)"
          py={3}
        >
          {lang[2]}
        </Text>
        <Wrap py={6} spacing="24px" flexWrap="wrap">
          <WrapItem flexDir="column" flex="1">
            <Flex w="full">
              <Image src={Staking} w="full" />
            </Flex>
            <Text fontSize="  1.2rem" pt={6}>
              {lang[3]}
              <Text as="b">{lang[4]}</Text>
              {lang[5]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="How-does-staking-work"
            >
              {lang[6]}
            </Text>
            <Text fontSize="  1.2rem" pt={6}>
              {lang[7]}
            </Text>
            <Text fontSize="  1.2rem" pt={6}>
              {lang[8]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="Why-dont-all-cryptocurrencies-have-staking"
            >
              {lang[9]}
            </Text>
            <Text fontSize="  1.2rem" pt={6}>
              {lang[10]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="  1.2rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                {lang[11]}
              </Text>
              <Text as="li" display="list-item">
                {lang[12]}
              </Text>
            </Text>
            <Text fontSize="  1.2rem" pt={6}>
              {lang[13]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="What-is-Proof-of-Stake"
            >
              {lang[14]}
            </Text>
            <Text fontSize="  1.2rem" pt={6}>
              {lang[15]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="  1.2rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                {lang[16]}
              </Text>
              <Text as="li" display="list-item">
                {lang[17]}
              </Text>
              <Text as="li" display="list-item">
                {lang[18]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="What-are-the-advantages-of-staking"
            >
              {lang[19]}
            </Text>
            <Text fontSize="  1.2rem" pt={6}>
              {lang[20]}
            </Text>
            <Text fontSize="  1.2rem" pt={6}>
              {lang[21]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="What-are-some-staking-risks"
            >
              {lang[22]}
            </Text>
            <Text fontSize="  1.2rem" pt={6}>
              {lang[23]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="How-do-I-start-staking"
            >
              {lang[24]}
            </Text>
            <Text fontSize="  1.2rem" pt={6}>
              {lang[25]}
            </Text>
            <Text fontSize="  1.2rem" pt={6}>
              {lang[26]}
            </Text>
            <Text fontSize="  1.2rem" pt={6}>
              <Link color="#1652f0" href="/home/learn/#Crypto-Basics">
                {lang[27]}
              </Link>
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
                  <Link href="#How-does-staking-work">{lang[28]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#Why-dont-all-cryptocurrencies-have-staking">
                    {lang[29]}
                  </Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#What-is-Proof-of-Stake">{lang[30]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#Advantages-of-staking">{lang[31]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#What-are-some-staking-risks">{lang[32]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#How-do-I-start-staking">{lang[33]}</Link>
                </ListItem>
              </List>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
