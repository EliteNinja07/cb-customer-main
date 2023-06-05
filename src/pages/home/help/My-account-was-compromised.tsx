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
  AlertIcon,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useMyIntl } from "../../../common/libs/intl/useMyIntl";
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
  const { lang } = useMyIntl("Myaccountwascompromised");
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
                  <BreadcrumbLink href="/home/help/Privacy-and-security">
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
            <Alert
              status="info"
              bg="#f5f8ff"
              py={6}
              sx={{ borderRadius: "10px", border: "1px solid #5b616e33" }}
            >
              {" "}
              <Flex>
                {" "}
                <AlertIcon boxSize="var(--cds-sizes-6)" color="#1652f0" />
                <Text pl={3}>
                  {lang[4]}
                  <Text
                    as="ul"
                    listStyleType="disc"
                    fontSize="1rem"
                    pt={6}
                    pl={6}
                    pb="4"
                  >
                    <Text as="li" display="list-item">
                      <Text as="b">{lang[5]}</Text>
                      {lang[6]}
                    </Text>
                    <Text as="li" display="list-item">
                      <Text as="b">{lang[7]}</Text>
                      {lang[8]}
                    </Text>
                  </Text>
                </Text>
              </Flex>
            </Alert>

            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[9]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[10]}
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
                            <Text>{lang[11]}</Text>
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
                          {lang[12]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[13]}
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
                            {lang[14]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[15]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[16]}
                          </Text>
                        </Text>
                        <Text
                          fontWeight="var(--cds-fontWeights-medium)"
                          pt={12}
                          pb={4}
                          fontSize="1.25rem"
                          id="#"
                        >
                          {lang[17]}
                        </Text>

                        <Text fontSize="1rem" pt={6}>
                          {lang[18]}
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
                            {lang[19]}
                            <Text as="b">{lang[20]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[21]}
                            <Text as="b">{lang[22]}</Text>
                            {lang[23]}
                            <Text as="b">{lang[24]}</Text>.{" "}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[25]}
                            <Text as="b">{lang[26]}</Text>
                            {lang[27]}
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
                            fontSize="var(--cds-fontSizes-xl)"
                            fontWeight="var(--cds-fontWeights-medium)"
                            textAlign="left"
                          >
                            <Text>{lang[28]}</Text>
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
                          {lang[29]}
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
                            {lang[30]}
                            <Text as="b">{lang[31]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[32]}
                            <Text as="b">{lang[33]}</Text>
                            {lang[34]}
                            <Text as="b">{lang[35]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[36]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[37]}
                            <Text as="b">{lang[38]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[39]}
                            <Text as="b">{lang[40]}</Text>
                            {lang[41]}
                          </Text>
                        </Text>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>
            <Text fontSize="1rem" pt={6}>
              <Text as="b">{lang[42]}</Text>
              {lang[43]}
              <Link color="#1652f0" href="#">
                {lang[44]}
              </Link>
              {lang[45]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[46]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[47]}
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
                {lang[48]}
              </Text>
              <Text as="ul" fontSize="1rem" pt={6} pl={6} pb="4">
                <Text as="li" display="list-item">
                  <Text as="li" display="list-item">
                    {lang[49]}
                  </Text>
                </Text>
              </Text>
              <Text as="li" display="list-item">
                {lang[50]}
              </Text>
              <Text as="ul" fontSize="1rem" pt={6} pl={6} pb="4">
                <Text as="li" display="list-item">
                  <Text as="li" display="list-item">
                    {lang[51]}
                  </Text>
                </Text>
              </Text>
              <Text as="li" display="list-item">
                {lang[52]}
                <Link color="#1652f0" href="#">
                  {lang[53]}
                </Link>
                .
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[54]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[55]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[56]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[57]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[58]}
              <Link color="#1652f0" href="#">
                {lang[59]}
              </Link>
              {lang[60]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[61]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[62]}
              <Link color="#1652f0" href="#">
                {lang[63]}
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
              {lang[64]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[65]}
              <Link color="#1652f0" href="#">
                {lang[66]}
              </Link>
              {lang[67]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[68]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[69]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[70]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[71]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[72]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[73]}
              <Link color="#1652f0" href="#">
                {lang[74]}
              </Link>
              {lang[75]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[76]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[77]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[78]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[79]}
              <Link color="#1652f0" href="#">
                {lang[80]}
              </Link>
              {lang[81]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[82]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[83]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Link color="#1652f0" href="#">
                {lang[84]}
              </Link>
              {lang[85]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Link color="#1652f0" href="#">
                {lang[86]}
              </Link>
              {lang[87]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Link color="#1652f0" href="#">
                {lang[88]}
              </Link>
              {lang[89]}
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
