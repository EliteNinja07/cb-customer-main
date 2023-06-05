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
  Alert,
  AlertDescription,
  AlertIcon,
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
  const { lang } = useMyIntl("VerifyyouridentityonCoinbase");
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
                  <BreadcrumbLink href="/home/help/">{lang[0]}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/home/help/getting-started">
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
              fontSize="3rem"
              py={3}
            >
              {lang[3]}
            </Text>
            <Text fontSize="1.1rem" pt={6}>
              {lang[4]}
            </Text>
            <Flex w="full" py={5}>
              <video
                controls
                width="100%"
                src="/img/mov/How to verify your ID on Coinbase.mp4"
              ></video>
            </Flex>
            <Flex mt={10} pt={6}>
              <Alert
                status="warning"
                variant="subtle"
                bg="#f4c62117"
                py={6}
                sx={{ borderRadius: "10px", border: "1px solid #f4c622" }}
              >
                <Flex>
                  <AlertIcon w="var(--cds-sizes-6)" color="#f4c622" />{" "}
                  <AlertDescription>
                    <Text>
                      <Text as="b">{lang[5]}</Text>
                      <Text
                        as="ul"
                        listStyleType="disc"
                        fontSize="1.1rem"
                        pt={6}
                        pl={6}
                      >
                        <Text as="li" display="list-item">
                          {lang[6]}
                        </Text>
                        <Text as="li" display="list-item" pt={6}>
                          {lang[7]}
                        </Text>
                      </Text>
                    </Text>
                  </AlertDescription>
                </Flex>{" "}
              </Alert>{" "}
            </Flex>
            <Flex>
              <Accordion w="100%" allowMultiple>
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
                            fontSize="1.5rem"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[8]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>{" "}
                      <AccordionPanel pb={4}>
                        {" "}
                        <Text>{lang[9]}</Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[10]}
                          <Link color="#1652f0" href="#">
                            {lang[11]}
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
                            fontSize="1.5rem"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[12]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>{" "}
                      <AccordionPanel pb={4}>
                        {" "}
                        <Text as="b">{lang[13]}</Text>
                        <Text as="b" fontSize="1.1rem" pt={6}>
                          {lang[14]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item" pb={6}>
                            {lang[15]}
                          </Text>
                        </Text>
                        <Text as="b" fontSize="1.1rem" pt={6}>
                          {lang[16]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            {lang[17]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[18]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[19]}
                          </Text>
                        </Text>
                        <Text fontSize="1.1rem" pt={6} pb={6} pl={4}>
                          <Text as="b">{lang[20]}</Text>
                          {lang[21]}
                        </Text>
                        <Text as="b" fontSize="1.1rem" pt={6}>
                          {lang[22]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            {lang[23]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[24]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[25]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[26]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[27]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[28]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[29]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[30]}
                          </Text>
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
                            fontSize="1.5rem"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[31]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>{" "}
                      <AccordionPanel pb={4}>
                        {" "}
                        <Text as="b">{lang[32]}</Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            {lang[33]}
                          </Text>
                        </Text>
                        <Text as="li" display="list-item" pt={6}>
                          {lang[34]}
                        </Text>
                        <Text as="li" display="list-item" pt={6}>
                          {lang[35]}
                        </Text>
                        <Text as="li" display="list-item" pt={6}>
                          {lang[36]}
                        </Text>
                        <Text as="li" display="list-item" pt={6}>
                          {lang[37]}
                        </Text>
                        <Text as="li" display="list-item" pt={6}>
                          {lang[38]}
                        </Text>
                        <Text as="li" display="list-item" pt={6}>
                          {lang[39]}
                        </Text>
                        <Text as="li" display="list-item" pt={6}>
                          {lang[40]}
                        </Text>
                        <Text as="li" display="list-item" pt={6} pb={6}>
                          {lang[41]}
                        </Text>
                        <Text as="b" fontSize="1.1rem" pt={6}>
                          {lang[42]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[43]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1.1rem"
                          pt={6}
                          pl={6}
                        >
                          <Text as="li" display="list-item">
                            {lang[44]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[45]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[46]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[47]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[48]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[49]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[50]}
                          </Text>
                          <Text as="li" display="list-item" pt={6}>
                            {lang[51]}
                          </Text>
                        </Text>
                        <Text fontSize="1.1rem" pt={6}>
                          {lang[52]}
                        </Text>
                        <Text fontSize="1.1rem" pt={6} pb={6}>
                          {lang[53]}
                          <Link color="#1652f0" href="#">
                            {lang[54]}
                          </Link>
                          {lang[55]}
                        </Text>
                        <Flex w="full">
                          <Image
                            src="https://images.ctfassets.net/7ca8qfn907uv/1VseI61bzuafT3mJlb65ii/46a772582719ebcf3b61cd391003a5e3/Article-Inline-841998.png"
                            w="full"
                          />
                        </Flex>
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
                            fontSize="1.5rem"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[56]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>
                      <AccordionPanel pb={4}>
                        {" "}
                        <Text>
                          {lang[57]}
                          <Link color="#1652f0" href="#">
                            {lang[58]}
                          </Link>
                          {lang[59]}
                        </Text>
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
