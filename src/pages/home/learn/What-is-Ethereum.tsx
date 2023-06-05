import { MyContent } from "../../../common/components/MyContent";

import Ethereum from "@/assets/images/what-is-ethereum.svg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  const { lang } = useMyIntl("WhatisEthereum");
  return (
    <MyContent w={{ base: "100%", sm: "100%", md: "100%", lg: "1300px" }}>
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
        <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="2rem" py={3}>
          {lang[2]}
        </Text>
        <Text color="#5b616e">{lang[3]}</Text>
        <Wrap py={6} spacing="24px" flexWrap="wrap">
          <WrapItem flexDir="column" flex="1">
            <Flex w="full">
              <Image src={Ethereum} w="full" />
            </Flex>
            <Text
              sx={{ background: "#f2f2f2", _dark: { background: "#333" } }}
              p={6}
              mt={12}
            >
              {lang[4]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[5]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[6]}
            </Text>
            <Text as="ul" listStyleType="disc" fontSize="1.2rem" pl={4} pt={6}>
              <Text as="li" display="list-item">
                {lang[7]}
              </Text>
              <Text as="li" display="list-item">
                {lang[8]}
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
              <Text as="li" display="list-item">
                {lang[17]}
                <Text as="b">{lang[18]}</Text>
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[19]}
              <Text as="b">{lang[20]}</Text>
              {lang[21]}
              <Text as="b">{lang[22]}</Text>
              {lang[23]}
              <Text as="b">{lang[24]}</Text>
              {lang[25]}
            </Text>
            <Text
              sx={{ background: "#f2f2f2", _dark: { background: "#333" } }}
              p={6}
              mt={12}
            >
              <Text as="b" fontSize="1.2rem">
                {lang[26]}
              </Text>
              <Text fontSize="1rem" lineHeight="1.8rem" pt={6}>
                {lang[27]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={2}
              fontSize="2rem"
              id="ies"
            >
              {lang[28]}
            </Text>
            <Text fontSize="1.2rem" pt={4} pb={5}>
              {lang[29]}
              <Text as="i">{lang[30]}</Text>
              {lang[31]}
            </Text>
            <Flex w="full">
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/213mgIWTLehOb4p6YaOw3X/851b7a5d3f2a08deff0c990eed2b3b20/is-ethereum-secure.png?w=1180&fm=png"
                w="full"
              />
            </Flex>
            <Text fontSize="1.2rem" pt={5}>
              {lang[32]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[33]}
              <Text as="i">{lang[34]}</Text>
              {lang[35]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[36]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="hdew"
            >
              {lang[37]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[38]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[39]}
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
                {lang[40]}
              </Text>
              <Text as="li" display="list-item">
                {lang[41]}
              </Text>
              <Text as="li" display="list-item">
                {lang[42]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="wie"
            >
              {lang[43]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[44]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[45]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[46]}</Text>
              {lang[47]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[48]}</Text>
              {lang[49]}
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
                {lang[50]}
              </Text>
              <Text as="li" display="list-item">
                {lang[51]}
              </Text>
              <Text as="li" display="list-item">
                {lang[52]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="2rem"
              id="wis"
            >
              {lang[53]}
            </Text>
            <Flex w="full">
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/6Rdv667M3OCOWkCYPJILFP/c83b7b04e346f708243895f1f92380a9/what-is-proof-of-stake.png?w=1180&fm=png"
                w="full"
              />
            </Flex>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[54]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[55]}</Text>
              {lang[56]}
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
                {lang[57]}
                <Text as="b">{lang[58]}</Text>
                {lang[59]}
              </Text>
              <Text as="li" display="list-item">
                {lang[60]}
                <Text as="b">{lang[61]}</Text>
                {lang[62]}
              </Text>
              <Text as="li" display="list-item">
                {lang[63]}
                <Text as="b">{lang[64]}</Text>
                {lang[65]}
              </Text>
              <Text as="li" display="list-item">
                {lang[66]}
                <Text as="b">{lang[67]}</Text> .
              </Text>
              <Text as="li" display="list-item">
                {lang[68]}
              </Text>
              <Text as="li" display="list-item">
                {lang[69]}
                <Text as="b">{lang[70]}</Text>
                {lang[71]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[72]}</Text>
              {lang[73]}
            </Text>
            <Text
              sx={{ background: "#f2f2f2", _dark: { background: "#333" } }}
              p={6}
              mt={12}
            >
              <Text as="b" fontSize="1.2rem">
                {lang[74]}
              </Text>
              <Text fontSize="1rem" lineHeight="1.8rem" pt={6}>
                {lang[75]}
                <Text as="b">{lang[76]}</Text>
                {lang[77]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="2rem"
              id="abhe"
            >
              {lang[78]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[79]}</Text>
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
                {lang[80]}
              </Text>{" "}
              <Text as="i">{lang[81]}</Text>
              {lang[82]}
            </Text>
            <Text fontSize="1rem" lineHeight="1.8rem" pt={6}>
              {lang[83]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[84]}</Text>
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
                {lang[85]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[86]}</Text>
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
                {lang[87]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[88]}</Text>
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
                {lang[89]}
              </Text>
              <Text as="li" display="list-item">
                {lang[90]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[91]}</Text>
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
                {lang[92]}
              </Text>
              <Text as="li" display="list-item">
                {lang[93]}
              </Text>
              <Text as="li" display="list-item">
                {lang[94]}
              </Text>
              <Text as="li" display="list-item">
                {lang[95]}
              </Text>
              <Text as="li" display="list-item">
                {lang[96]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[97]}</Text>
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
                {lang[98]}
              </Text>
              <Text as="li" display="list-item">
                {lang[99]}
              </Text>
              <Text as="li" display="list-item">
                {lang[100]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[101]}</Text>
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
                {lang[102]}
              </Text>
              <Text as="li" display="list-item">
                {lang[103]}
              </Text>
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="b">{lang[104]}</Text>
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
                {lang[105]}
              </Text>
              <Text as="li" display="list-item">
                {lang[106]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="2rem"
              id="hdub"
            >
              {lang[107]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[108]}
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
                <Text as="b">{lang[109]}</Text>
                {lang[110]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[111]}</Text>
                {lang[112]}
              </Text>
              <Text as="li" display="list-item">
                <Text as="b">{lang[113]}</Text>
                {lang[114]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="2rem"
              id="hdeh"
            >
              {lang[115]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[116]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[117]}
              <Text as="i">{lang[118]}</Text>
              {lang[119]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="2rem"
              id="wnfe"
            >
              {lang[120]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[121]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[122]}
            </Text>
          </WrapItem>
          <WrapItem
            w="400px"
            sx={{ display: { base: "none", sm: "none", lg: "block" } }}
          >
            <Flex sx={getFixed} py="0.8rem" px="1.2rem">
              <List>
                <ListItem
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  color="#5b616e"
                  pb={2}
                >
                  <Link to="#ies">{lang[123]}</Link>
                </ListItem>
                <ListItem
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  color="#5b616e"
                  pb={2}
                >
                  <Link to="#hdew">{lang[124]}</Link>
                </ListItem>
                <ListItem
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  color="#5b616e"
                  pb={2}
                >
                  <Link to="#wie">{lang[125]}</Link>
                </ListItem>
                <ListItem
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  color="#5b616e"
                  pb={2}
                >
                  <Link to="#wis">{lang[126]}</Link>
                </ListItem>
                <ListItem
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  color="#5b616e"
                  pb={2}
                >
                  <Link to="#abhe">{lang[127]}</Link>
                </ListItem>
                <ListItem
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  color="#5b616e"
                  pb={2}
                >
                  <Link to="#hdub">{lang[128]}</Link>
                </ListItem>
                <ListItem
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  color="#5b616e"
                  pb={2}
                >
                  <Link to="#hdeh">{lang[129]}</Link>
                </ListItem>
                <ListItem
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  color="#5b616e"
                  pb={2}
                >
                  <Link to="#wnfe">{lang[130]}</Link>
                </ListItem>
              </List>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
