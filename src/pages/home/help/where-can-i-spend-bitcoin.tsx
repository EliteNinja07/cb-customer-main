import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useMyIntl } from "../../../common";
import GettingFooter from "./components/GettingFooter";
import PageHelpful from "./components/PageHelpful";

const styles = {
  helpSearchC: {
    width: "100%",
    minHeight: "calc(100vh - 68px - 64px)",
    display: "block",
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
  const { lang } = useMyIntl("Inthebeginningtherewas");
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
                  <BreadcrumbLink href="/home/help/getting-started">
                    {lang[1]}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>Where can I spend Bitcoin?</BreadcrumbLink>
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
            <Text fontSize="1rem" pt={6}>
              {lang[3]}
              <Link color="#1652f0" href="#">
                {lang[4]}
              </Link>
              {lang[5]}
              <Link color="#1652f0" href="#">
                {lang[6]}
              </Link>
              {lang[7]}
              <Link color="#1652f0" href="#">
                {lang[8]}
              </Link>
              {lang[9]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.3rem"
              id="#"
            >
              {lang[10]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.3rem"
              id="#"
            >
              {lang[11]}
            </Text>
            <Text as="b">{lang[12]}</Text>
            <Text fontSize="1rem" pt={6}>
              {lang[13]}
              <Link color="#1652f0" href="#">
                {lang[14]}
              </Link>
              {lang[15]}
              <Link color="#1652f0" href="#">
                {lang[16]}
              </Link>
              {lang[17]}
              <Link color="#1652f0" href="#">
                {lang[18]}
              </Link>
              {lang[19]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.3rem"
              id="#"
            >
              {lang[20]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[21]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.3rem"
              id="#"
            >
              {lang[22]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[23]}
              <Link color="#1652f0" href="#">
                Overstock.com
              </Link>
              {lang[24]}
            </Text>
            <Text as="b">{lang[25]}</Text>
            <Text fontSize="1rem" pt={6}>
              {lang[26]}
            </Text>
            <Text as="b">{lang[27]}</Text>
            <Text fontSize="1rem" pt={6}>
              {lang[28]}
              <Link color="#1652f0" href="#">
                {lang[29]}
              </Link>
              {lang[30]}
              <Link color="#1652f0" href="#">
                {lang[31]}
              </Link>
              {lang[32]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.3rem"
              id="#"
            >
              {lang[33]}
            </Text>
            <Text as="b">{lang[34]}</Text>
            <Text fontSize="1rem" pt={6}>
              {lang[35]}
              <Link color="#1652f0" href="#">
                {lang[36]}
              </Link>
              {lang[37]}
              <Link color="#1652f0" href="#">
                {lang[38]}
              </Link>
              {lang[39]}
            </Text>
            <Text as="b" pt={6}>
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
              <Link color="#1652f0" href="#">
                {lang[45]}
              </Link>
              {lang[46]}
              <Link color="#1652f0" href="#">
                {lang[47]}
              </Link>
              {lang[48]}
              <Link color="#1652f0" href="#">
                {lang[49]}
              </Link>
              {lang[50]}
              <Link color="#1652f0" href="#">
                {lang[51]}
              </Link>
              .
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.3rem"
              id="#"
            >
              {lang[52]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[53]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[54]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[55]}
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
                {lang[56]}
              </Text>
              <Text as="li" display="list-item">
                {lang[57]}
              </Text>
              <Text as="li" display="list-item">
                {lang[58]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[59]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.3rem"
              id="#"
            >
              {lang[60]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[61]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.3rem"
              id="#"
            >
              {lang[62]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[63]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[64]}
              <Link color="#1652f0" href="#">
                {lang[65]}
              </Link>
              {lang[66]}
              <Link color="#1652f0" href="#">
                {lang[67]}
              </Link>
              {lang[68]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[69]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.3rem"
              id="#"
            >
              {lang[70]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[71]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[72]}
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
                {lang[73]}
              </Text>
              <Text as="li" display="list-item">
                {lang[74]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[75]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[76]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[77]}
            </Text>
          </Flex>
          <Flex
            w={{ base: "100%", sm: "100%", md: "33%", lg: "33%" }}
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
            display="block"
          ></Flex>
        </Flex>
      </Flex>
      <PageHelpful />
      <GettingFooter />
    </Flex>
  );
};
