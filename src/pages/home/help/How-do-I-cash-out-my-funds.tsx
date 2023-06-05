import Close from "@/assets/images/close.svg";
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
  const { lang } = useMyIntl("HowdoIcashoutmyfunds");
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
                  <BreadcrumbLink href="/home/help/Trading-and-funding">
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
            </Text>
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
                    <Text as="b">{lang[5]}</Text>
                    <Text
                      as="ul"
                      listStyleType="disc"
                      fontSize="1rem"
                      pt={6}
                      pl={6}
                      pb="4"
                    >
                      <Text as="li" display="list-item">
                        {lang[6]}
                      </Text>
                      <Text as="li" display="list-item">
                        {lang[7]}
                        <Link color="#1652f0" href="#">
                          {lang[8]}
                        </Link>
                        {lang[9]}
                      </Text>
                      <Text as="li" display="list-item">
                        {lang[10]}
                      </Text>
                      <Text as="li" display="list-item">
                        {lang[11]}
                        <Link color="#1652f0" href="#">
                          {lang[12]}
                        </Link>
                      </Text>
                      <Text as="li" display="list-item">
                        {lang[13]}
                        <Link color="#1652f0" href="#">
                          {lang[14]}
                        </Link>
                      </Text>
                      <Text as="li" display="list-item">
                        {lang[15]}
                        <Link color="#1652f0" href="#">
                          {lang[16]}
                        </Link>
                        {lang[17]}
                      </Text>
                    </Text>
                  </AlertDescription>
                </Flex>{" "}
              </Alert>{" "}
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
                            <Text>{lang[18]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[19]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[20]}
                            <Text as="b">{lang[21]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[22]}
                            <Text as="b">{lang[23]}</Text>
                            {lang[24]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[25]}
                            <Text as="b">{lang[26]}</Text>
                            {lang[27]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[28]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[29]}
                            <Text as="b">{lang[30]}</Text>
                            {lang[31]}
                            <Text as="b">{lang[32]}</Text>
                            {lang[33]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[34]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[35]}
                            <Text as="b">{lang[36]}</Text>
                            {lang[37]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[38]}
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
                            <Text>{lang[39]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>
                      <AccordionPanel pb={4}>
                        <Alert
                          status="info"
                          bg="#cf20301a"
                          py={6}
                          sx={{
                            borderRadius: "10px",
                            border: "1px solid #cf2030",
                          }}
                        >
                          <Flex>
                            {" "}
                            <Image boxSize="var(--cds-sizes-6)" src={Close} />
                            <Text pl={3}>
                              <Text
                                fontWeight="var(--cds-fontWeights-medium)"
                                fontSize="1.25rem"
                                id="#"
                              >
                                {lang[40]}
                              </Text>
                              <Text fontSize="1rem" pt={6}>
                                {lang[41]}
                              </Text>
                            </Text>
                          </Flex>
                        </Alert>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[42]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[43]}
                            <Link color="#1652f0" href="#">
                              {lang[44]}
                            </Link>
                            .
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[45]}
                            <Text as="b">{lang[46]}</Text>
                            {lang[47]}
                            <Text as="b">{lang[48]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[49]}
                            <Text as="b">{lang[50]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[51]}
                            <Text as="b">{lang[52]}</Text>
                            {lang[53]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.75rem"
                          letterSpacing="-0.08rem"
                          id="#"
                        >
                          {lang[54]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[55]}
                            <Text as="b">{lang[56]}</Text>
                            {lang[57]}
                            <Text as="b">{lang[58]}</Text>
                            {lang[59]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[60]}
                            <Text as="b">{lang[61]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[62]}
                            <Text as="b">{lang[63]}</Text>
                            {lang[64]}
                          </Text>
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
