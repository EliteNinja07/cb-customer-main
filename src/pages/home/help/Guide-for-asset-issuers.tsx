import {
  AddIcon,
  MinusIcon,
  SearchIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
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
  const { lang } = useMyIntl("Guideforassetissuers");
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
                  <BreadcrumbLink href="/home/help/Other-topics">
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
            <Flex>
              {" "}
              <Accordion w="100%" allowMultiple>
                {" "}
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      {" "}
                      <h1>
                        {" "}
                        <AccordionButton
                          py={5}
                          sx={{ color: "#1652f0", _hover: { bg: "none" } }}
                        >
                          {" "}
                          <Box
                            flex="1"
                            fontSize="var(--cds-fontSizes-xl)"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[4]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text as="b">{lang[5]}</Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[6]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[7]}
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
                              {lang[8]}
                            </Link>
                          </Text>
                          <Text as="li" display="list-item">
                            <Link color="#1652f0" href="#">
                              {lang[9]}
                            </Link>
                          </Text>
                          <Text as="li" display="list-item">
                            <Link color="#1652f0" href="#">
                              {lang[10]}
                            </Link>
                          </Text>
                          <Text as="li" display="list-item">
                            <Link color="#1652f0" href="#">
                              {lang[11]}
                            </Link>
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[12]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[13]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[14]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[15]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[16]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[17]}
                          <Link color="#1652f0" href="#">
                            {lang[18]}
                          </Link>
                          {lang[19]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[20]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[21]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[22]}
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
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[25]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[26]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[27]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[28]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[29]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[30]}
                          <Link color="#1652f0" href="#">
                            listings-support@coinbase.com
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
                          {lang[31]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[32]}
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
                            listings-support@coinbase.com
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
                          {lang[35]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[36]}
                          <Link color="#1652f0" href="#">
                            listings-support@coinbase.com
                          </Link>
                          {lang[37]}
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[38]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[39]}
                          <Link color="#1652f0" href="#">
                            listings-support@coinbase.com
                          </Link>
                          .
                        </Text>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>
            <Flex>
              {" "}
              <Accordion w="100%" allowMultiple>
                {" "}
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      {" "}
                      <h1>
                        {" "}
                        <AccordionButton
                          py={5}
                          sx={{ color: "#1652f0", _hover: { bg: "none" } }}
                        >
                          {" "}
                          <Box
                            flex="1"
                            fontSize="var(--cds-fontSizes-xl)"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[40]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text fontSize="1rem" pt={6}>
                          {lang[41]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[42]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/7fzuSJ3JeDLsonlUajwKIP/041d7a9a4976fd11e9bae0e16b99113c/logos.png" />
                        </Flex>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[43]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[44]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Text as="b">{lang[45]}</Text>
                          {lang[46]}
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
                            {lang[47]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[48]}
                          </Text>
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/3FaTuYYyQ0MqQJ5KDKvCfb/de64be923460b99b33ab5ef74cb24e7d/file_size.png" />
                        </Flex>
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
                        <Text fontSize="1rem" pt={6}>
                          {lang[51]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/0UThHOYrcDWOlrrGDph1dW/c10e1f4e6898a07c2c3af4e17f4c8037/cropping.png" />
                        </Flex>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
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
                        <Text as="b">{lang[55]}</Text>
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
                        </Text>
                        <Text as="b">{lang[58]}</Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            <Text as="li" display="list-item">
                              {lang[59]}
                            </Text>
                          </Text>
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/1MD4ArVhNKPHM3qRZaYTDD/c2612bd75f88823fc908c7cd3df9a7f0/background.png" />
                        </Flex>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[60]}
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
                            {lang[61]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[62]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[63]}
                          </Text>
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/5HH5y42GdsB9I62L0aGiQC/3def1ee57c82aafa7fd3da16f9918e35/do.png" />
                        </Flex>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          Don’t
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
                            {lang[64]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[65]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[66]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[67]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[68]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[69]}
                          </Text>
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/0alnxkaY48nv2pODBYOkzs/b7b28810801ea9291a5770afaa4b741e/don_t.png" />
                        </Flex>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>
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
