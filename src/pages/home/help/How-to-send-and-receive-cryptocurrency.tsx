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
  const { lang } = useMyIntl("Howtosendandreceivecryptocurrency");
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
            <Alert
              status="info"
              bg="#cf20301a"
              py={6}
              sx={{ borderRadius: "10px", border: "1px solid #cf2030" }}
            >
              <Flex>
                {" "}
                <Image boxSize="var(--cds-sizes-6)" src={Close} />
                <Text pl={3}>
                  {lang[4]}
                  <Link color="#1652f0" href="#">
                    {lang[5]}
                  </Link>
                  .
                </Text>
              </Flex>
            </Alert>
            <Text fontSize="1rem" pt={6}>
              {lang[6]}
              <Link color="#1652f0" href="#">
                {lang[7]}
              </Link>
              {lang[8]}
            </Text>
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
            <Text fontSize="1rem" pt={6}>
              {lang[11]}
              <Link color="#1652f0" href="#">
                {lang[12]}
              </Link>
              {lang[13]}
              <Link color="#1652f0" href="#">
                {lang[14]}
              </Link>
              .
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Link color="#1652f0" href="#">
                {lang[15]}
              </Link>
              {lang[16]}
              <Link color="#1652f0" href="#">
                {lang[17]}
              </Link>
              {lang[18]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[19]}
            </Text>
            <Flex w="full" py={5}>
              <video
                controls
                width="100%"
                src="/img/mov/How to receive cryptocurrency on Coinbase.mp4"
              ></video>
            </Flex>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="lis t-item">
                {lang[20]}
              </Text>
              <Text as="li" display="lis t-item">
                {lang[21]}
                <Text as="b">{lang[22]}</Text>
                {lang[23]}
              </Text>
              <Text as="li" display="lis t-item">
                {lang[24]}
                <Text as="b">{lang[25]}</Text>
                {lang[26]}
              </Text>
              <Text as="li" display="lis t-item">
                {lang[27]}
              </Text>
              <Text as="li" display="lis t-item">
                {lang[28]}
              </Text>
              <Text as="li" display="lis t-item">
                {lang[29]}
                <Text as="b">{lang[30]}</Text>
                {lang[31]}
              </Text>
              <Text as="li" display="lis t-item">
                {lang[32]}
                <Link color="#1652f0" href="#">
                  {lang[33]}
                </Link>
                ).
              </Text>
              <Text as="li" display="lis t-item">
                {lang[34]}
                <Text as="b">{lang[35]}</Text>.
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[36]}
            </Text>
            <Flex w="full" py={5}>
              <video
                controls
                width="100%"
                src="/img/mov/How to send crypto using the Coinbase app.mp4"
              ></video>
            </Flex>
            <Text fontSize="1rem" pt={6}>
              {lang[37]}
              <Text as="b">{lang[38]}</Text>
              {lang[39]}
              <Text as="b">{lang[40]}</Text>
              {lang[41]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[42]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[43]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[44]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[45]}
              <Link color="#1652f0" href="#">
                {lang[46]}
              </Link>
              {lang[47]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[48]}
              <Text as="b">{lang[49]}</Text>.
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[50]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[51]}
              <Text as="b">{lang[52]}</Text>.
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[53]}
              <Link color="#1652f0" href="#">
                {lang[54]}
              </Link>
              {lang[55]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Link color="#1652f0" href="#">
                {lang[56]}
              </Link>
              {lang[57]}
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
                            <Text>{lang[58]}</Text>
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
                          {lang[59]}
                        </Text>
                        <Text as="b">{lang[60]}</Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="lis t-item">
                            {lang[61]}
                            <Link color="#1652f0" href="#">
                              {lang[62]}
                            </Link>
                            {lang[63]}
                            <Link color="#1652f0" href="#">
                              {lang[64]}
                            </Link>
                            {lang[65]}
                          </Text>
                          <Text as="li" display="lis t-item">
                            {lang[66]}
                          </Text>
                          <Text as="li" display="lis t-item">
                            {lang[67]}
                            <Link color="#1652f0" href="#">
                              {lang[68]}
                            </Link>
                            {lang[69]}
                            <Link color="#1652f0" href="#">
                              {lang[70]}
                            </Link>
                            .
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Text as="b">{lang[71]}</Text>
                          <Link color="#1652f0" href="#">
                            {lang[72]}
                          </Link>
                          .
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="lis t-item">
                            {lang[73]}
                          </Text>
                          <Text as="li" display="lis t-item">
                            {lang[74]}
                          </Text>
                        </Text>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[75]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[76]}
              <Text as="b">{lang[77]}</Text>
              {lang[78]}
              <Link color="#1652f0" href="#">
                {lang[79]}
              </Link>
              {lang[80]}
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
                <Text pl={3}>{lang[81]}</Text>
              </Flex>
            </Alert>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[82]}
            </Text>
            <Flex w="full" py={5}>
              <video
                controls
                width="100%"
                src="/img/mov/How to receive cryptocurrency on Coinbase.mp4"
              ></video>
            </Flex>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="lis t-item">
                {lang[83]}
                <Link color="#1652f0" href="#">
                  {lang[84]}
                </Link>
                {lang[85]}
                <Text as="b">{lang[86]}</Text>
                {lang[87]}
              </Text>
              <Text as="li" display="lis t-item">
                {lang[88]}
                <Text as="b">{lang[89]}</Text>.
              </Text>
              <Text as="li" display="lis t-item">
                {lang[90]}
                <Text as="b">{lang[91]}</Text>
                {lang[92]}
              </Text>
              <Text as="li" display="lis t-item">
                {lang[93]}
                <Link color="#1652f0" href="#">
                  {lang[94]}
                </Link>
                ).
              </Text>
              <Text as="li" display="lis t-item">
                {lang[95]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[96]}
            </Text>
            <Flex w="full" py={5}>
              <video
                controls
                width="100%"
                src="/img/mov/How to receive crypto using the Coinbase app.mp4"
              ></video>
            </Flex>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="lis t-item">
                {lang[97]}
                <Text as="b">{lang[98]}</Text>
                {lang[99]}
                <Text as="b">{lang[100]}</Text>
                {lang[101]}
              </Text>
              <Text as="li" display="lis t-item">
                {lang[102]}
              </Text>
              <Text as="li" display="lis t-item">
                {lang[103]}
                <Link color="#1652f0" href="#">
                  {lang[104]}
                </Link>
                ).
              </Text>
              <Text as="li" display="lis t-item">
                {lang[105]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Text as="b">{lang[106]}</Text>
              {lang[107]}
              <Text as="b">{lang[108]}</Text>
              {lang[109]}
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
                            <Text>{lang[110]}</Text>
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
                          {lang[111]}
                        </Text>
                        <Text
                          as="ul"
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="lis t-item">
                            {lang[112]}
                          </Text>
                          <Text as="li" display="lis t-item">
                            {lang[113]}
                          </Text>
                          <Text as="li" display="lis t-item">
                            {lang[114]}
                          </Text>
                          <Text as="li" display="lis t-item">
                            {lang[115]}
                          </Text>
                          <Text as="li" display="lis t-item">
                            {lang[116]}
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
