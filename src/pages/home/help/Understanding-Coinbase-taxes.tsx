import GiveCrypto from "@/assets/images/give-crypto.svg";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { MyCard, useMyIntl, PrimaryButton } from "../../../common";
import GettingFooter from "./components/GettingFooter";
import PageHelpful from "./components/PageHelpful";

const styles = {
  helpSearchC: {
    width: "100%",
    minHeight: "calc(100vh - 68px - 64px)",
    display: "block",
    backgroundColor: "#fff",
    _dark: {
      backgroundColor: "#000",
    },
  },
  headSearch: {
    border: "1px solid #5b636ea8",
    height: "60px",
    alignItems: "center",
    margin: "24px 0",
    borderRadius: "50px",
  },
  headIcon: {
    padding: "0 1.6rem",
  },
  headClone: {
    padding: "0 1.3rem",
  },
  gettingList: {
    padding: "2rem 0 1rem 0",
  },
  ListItems: {
    lineHeight: "2rem",
    "&:hover": {
      color: "#1652f0",
      textDecoration: "underline",
    },
  },
  GettingRightFixed: {
    borderLeft: "1px solid #98989829",
    fontSize: "14px",
    position: "fixed",
    top: "100px",
  },
  GettingRightRel: {
    borderLeft: "1px solid #98989829",
    fontSize: "14px",
    position: "relative",
    top: "0",
  },
  footers: {
    backgroundColor: "#90909024",
    padding: "6rem 0",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "2rem",
  },
  CellLink: {
    color: "#050f19",
    borderLeft: "4px solid #fff",
    padding: "0.35rem 0 0.35rem 1rem",
  },
  RAcives: {
    borderLeft: "4px solid #1652f0",
    color: "#1652f0",
    padding: "0.35rem 0 0.35rem 1rem",
  },
};
export default () => {
  const [getFixed, setFixed] = useState<any>(styles.GettingRightRel);
  const onScroll = (e: any) => {
    if (document.body.clientWidth > 768) {
      if (e.target.documentElement.scrollTop > 100) {
        setFixed(styles.GettingRightFixed);
      } else {
        setFixed(styles.GettingRightRel);
      }
    }
  };
  const resizeUpdate = (e: any) => {
    if (document.body.clientWidth < 768) {
      setFixed(styles.GettingRightRel);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", resizeUpdate);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("resize", resizeUpdate);
    };
  });
  const { lang } = useMyIntl("UnderstandingCoinbasetaxes");
  return (
    <Flex sx={styles.helpSearchC}>
      <Flex w="100%" flexDir="column" margin="0 auto" px={5}>
        <Flex sx={styles.headSearch}>
          <Flex sx={styles.headIcon}>
            <SearchIcon />
          </Flex>
          <Flex flex="1" pr={4}>
            <Input variant="unstyled" placeholder="How can we help you?" />
          </Flex>
          <Flex sx={styles.headClone}>
            <SmallCloseIcon boxSize={6} />
          </Flex>
        </Flex>
        <Flex pt={10} flexWrap="wrap">
          <Flex
            flexDir="column"
            flex="1"
            sx={{
              padding: {
                base: "0 0.2rem",
                sm: "0 0.2rem",
                md: "0 2rem 0 0",
                lg: "0 2rem 0 0",
              },
            }}
          >
            <Flex>
              <Breadcrumb color="#708599" fontSize="13px">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/home/help">{lang[0]}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/home/help/Taxes-and-reports">
                    {lang[1]}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>{lang[2]}</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize="var(--cds-sizes-10)"
              py={3}
            >
              {lang[3]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[4]}
              <Link color="#1652f0" href="#">
                {lang[5]}
              </Link>
              {lang[6]}
              <Link color="#1652f0" href="#">
                {lang[7]}
              </Link>
              {lang[8]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[9]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Text as="b">{lang[10]}</Text>
              {lang[11]}
              <Link color="#1652f0" href="#">
                {lang[12]}
              </Link>
              {lang[13]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[14]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                <Link color="#1652f0" href="#">
                  {lang[15]}
                </Link>
              </Text>
              <Text as="li" display="list-item">
                <Link color="#1652f0" href="#">
                  {lang[16]}
                </Link>
              </Text>
              <Text as="li" display="list-item">
                <Link color="#1652f0" href="#">
                  {lang[17]}
                </Link>
              </Text>
              <Text as="li" display="list-item">
                <Link color="#1652f0" href="#">
                  {lang[18]}
                </Link>
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[19]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[20]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[21]}
              <Link color="#1652f0" href="#">
                {lang[22]}
              </Link>
              .
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[23]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[24]}
              <Link color="#1652f0" href="#">
                {lang[25]}
              </Link>
              {lang[26]}
              <Link color="#1652f0" href="#">
                {lang[27]}
              </Link>
              {lang[28]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[29]}
              <Link color="#1652f0" href="#">
                {lang[30]}
              </Link>
              {lang[31]}
              <Link color="#1652f0" href="#">
                {lang[32]}
              </Link>
              .
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[33]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[34]}
              <Link color="#1652f0" href="#">
                {lang[35]}
              </Link>
              {lang[36]}
              <Link color="#1652f0" href="#">
                {lang[37]}
              </Link>
              .
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[38]}
              <Link color="#1652f0" href="#">
                {lang[39]}
              </Link>
              {lang[40]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[41]}
              <Link color="#1652f0" href="#">
                {lang[42]}
              </Link>
              {lang[43]}
              <Link color="#1652f0" href="#">
                {lang[44]}
              </Link>
              .
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[45]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[46]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[47]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[48]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[49]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[50]}
            </Text>
            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                {lang[51]}
              </Text>
              <Text as="li" display="list-item">
                {lang[52]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[53]}
              <Link color="#1652f0" href="#">
                {lang[54]}
              </Link>
              {lang[55]}
              <Link color="#1652f0" href="#">
                {lang[56]}
              </Link>
              .
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[57]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[58]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[59]}
            </Text>
            <Text fontSize="1rem" pt={6} pb={4}>
              {lang[60]}
              <Link color="#1652f0" href="#">
                {lang[61]}
              </Link>
              .
              <Link color="#1652f0" href="#">
                {lang[62]}
              </Link>
              {lang[63]}
            </Text>
            <MyCard>
              <Flex
                w="full"
                py={5}
                px={6}
                alignItems="center"
                justifyContent="center"
              >
                <Flex flex="1" flexDir="column">
                  <Text color="#708599">{lang[64]}</Text>
                  <Text fontSize="1.6rem" fontWeight="500" pt={1} pb={3}>
                    {lang[65]}
                  </Text>
                  <PrimaryButton w="160px" borderRadius="5px">
                    {lang[66]}
                  </PrimaryButton>
                </Flex>
                <Flex>
                  <Image boxSize="100px" src={GiveCrypto} />
                </Flex>
              </Flex>
            </MyCard>
            <PageHelpful />
          </Flex>
          <Flex
            w={{ base: "100%", sm: "100%", md: "33%", lg: "33%" }}
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
            display="block"
          ></Flex>
        </Flex>
      </Flex>
      <GettingFooter />
    </Flex>
  );
};
