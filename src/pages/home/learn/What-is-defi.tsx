import { MyContent } from "../../../common/components/MyContent";

import Defi from "@/assets/images/coinbase-lend.svg";
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
  const { lang } = useMyIntl("WhatisDeFi");
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
        <Wrap py={6} spacing="24px" flexWrap="wrap">
          <WrapItem flexDir="column" flex="1">
            <Flex w="full">
              <Image src={Defi} w="full" />
            </Flex>
            <Flex
              fontSize="1rem"
              mt={6}
              p={6}
              w="full"
              flexDir="column"
              sx={{ background: "#f2f2f2", _dark: { background: "#555" } }}
            >
              <Text as="b">{lang[3]}</Text>
              <Text pt={6}>{lang[4]}</Text>
            </Flex>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[5]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="2rem"
              id="#"
            >
              {lang[6]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[7]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="2rem"
              id="#"
            >
              {lang[8]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[9]}</Text>
                {lang[10]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[11]}</Text>
                {lang[12]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[13]}</Text>
                {lang[14]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[15]}</Text>
                {lang[16]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[17]}</Text>
              {lang[18]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="2rem"
              id="#"
            >
              {lang[19]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[20]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[21]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                <Text as="b">{lang[22]}</Text>
                {lang[23]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[24]}</Text>
                {lang[25]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[26]}</Text>
                {lang[27]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[28]}</Text>
                {lang[29]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[30]}</Text>
                {lang[31]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="2rem"
              id="#"
            >
              {lang[32]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                {lang[33]}
              </Text>
              <Text as="li" display="list-item">
                {lang[34]}
              </Text>
              <Text as="li" display="list-item">
                {lang[35]}
              </Text>
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
