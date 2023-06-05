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
  const { lang } = useMyIntl("Troubleshootingandtips");
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
                  <BreadcrumbLink href="/home/help/Wallet">
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
              fontSize={{
                base: "1.75rem",
                sm: "1.75rem",
                md: "2.5rem",
                lg: "2.5rem",
              }}
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
                  <Text
                    fontWeight="var(--cds-fontWeights-medium)"
                    fontSize={{
                      base: "1em",
                      sm: "1rem",
                      md: "1.25rem",
                      lg: "1.25rem",
                    }}
                    letterSpacing="-0.08rem"
                    id="#"
                  >
                    {lang[4]}
                  </Text>
                  <Text fontSize="1rem" pt={6}>
                    {lang[5]}
                    <Link color="#1652f0" href="#">
                      {lang[6]}
                    </Link>
                    {lang[7]}
                  </Text>
                </Text>
              </Flex>
            </Alert>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize={{
                base: "1.25rem",
                sm: "1.25rem",
                md: "1.75rem",
                lg: "1.75rem",
              }}
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[8]}
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
                            <Text>{lang[9]}</Text>
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
                          fontSize={{
                            base: "1em",
                            sm: "1rem",
                            md: "1.25rem",
                            lg: "1.25rem",
                          }}
                          letterSpacing="-0.08rem"
                          id="#"
                        >
                          {lang[10]}
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
                            {lang[11]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[12]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[13]}
                          <Link color="#1652f0" href="#">
                            {lang[14]}
                          </Link>
                          {lang[15]}
                        </Text>
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
                                fontSize={{
                                  base: "1em",
                                  sm: "1rem",
                                  md: "1.25rem",
                                  lg: "1.25rem",
                                }}
                                letterSpacing="-0.08rem"
                                id="#"
                              >
                                {lang[16]}
                              </Text>
                              <Text fontSize="1rem" pt={6}>
                                {lang[17]}
                              </Text>
                            </Text>
                          </Flex>
                        </Alert>
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
                        <Text fontSize="1rem" pt={6}>
                          {lang[19]}
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
                            {lang[20]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[21]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[22]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[23]}
                          <Link color="#1652f0" href="#">
                            {lang[24]}
                          </Link>
                          {lang[25]}
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
              fontSize={{
                base: "1.25rem",
                sm: "1.25rem",
                md: "1.75rem",
                lg: "1.75rem",
              }}
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[26]}
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
                            <Text>{lang[27]}</Text>
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
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[32]}
                            <Text as="b">{lang[33]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[34]}
                            <Text as="b">{lang[35]}</Text>
                            {lang[36]}
                            <Text as="b">{lang[37]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[38]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[39]}
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
                            <Text>{lang[42]}</Text>
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
                          {lang[43]}
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
                            {lang[44]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[45]}
                            <Text as="b">{lang[46]}</Text>
                            {lang[47]}
                            <Text as="b">{lang[48]}</Text>.
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[49]}
                          <Link color="#1652f0" href="#">
                            {lang[50]}
                          </Link>
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
              fontSize={{
                base: "1.25rem",
                sm: "1.25rem",
                md: "1.75rem",
                lg: "1.75rem",
              }}
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[51]}
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
                            <Text>{lang[52]}</Text>
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
                          {lang[53]}
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
                            {lang[54]}
                            <Link color="#1652f0" href="#">
                              {lang[55]}
                            </Link>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[56]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[57]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[58]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[59]}
                          </Text>
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
                            {lang[60]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[61]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[62]}
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
                            <Text>{lang[63]}</Text>
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
                          {lang[64]}
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
                            {lang[65]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[66]}
                            <Link color="#1652f0" href="#">
                              {lang[67]}
                            </Link>
                            {lang[68]}
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
              fontSize={{
                base: "1.25rem",
                sm: "1.25rem",
                md: "1.75rem",
                lg: "1.75rem",
              }}
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[69]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[70]}
              <Link color="#1652f0" href="#">
                {lang[71]}
              </Link>
              {lang[72]}
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
                            <Text>{lang[73]}</Text>
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
                          {lang[74]}
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
                            {lang[75]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[76]}
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
                            <Text>{lang[77]}</Text>
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
                          {lang[78]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[79]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[80]}
                          <Text as="b">{lang[81]}</Text>
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/6qCWHzqRJMTgnjyLvnPmNp/1f4144bd9c758358fe01532f6a3421ed/Opensea_details_coinbase_wallet_troubleshooting_and_tips.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[82]}
                          <Text as="b">{lang[83]}</Text>
                          {lang[84]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[85]}
                          <Text as="b">{lang[86]}</Text>
                          {lang[87]}
                          <Text as="b">{lang[88]}</Text>.
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[89]}
                          <Text as="b">{lang[90]}</Text>
                          {lang[91]}
                          <Text as="b">{lang[92]}</Text>
                          {lang[93]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[94]}
                          <Text as="b">{lang[95]}</Text>.
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[96]}
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
              fontSize={{
                base: "1.25rem",
                sm: "1.25rem",
                md: "1.75rem",
                lg: "1.75rem",
              }}
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[97]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[98]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize={{
                base: "1.25rem",
                sm: "1.25rem",
                md: "1.75rem",
                lg: "1.75rem",
              }}
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[99]}
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
                            <Text>{lang[100]}</Text>
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
                          {lang[101]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[102]}
                          <Text as="b">{lang[103]}</Text>
                          {lang[104]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/l730k3jgE1nihu9OVPyL5/368e7e78461cfd0f0091f27ff2389a1f/explorer.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[105]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[106]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/4OniuElSlaepfAYStvpoM5/6cfed76de1b1c32b1799fa365e4d7f02/receive_crypto.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[107]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/26MQX3dmgpKmHwRElpDsY3/6bff9dbeb8c0cdff807d4ef2a7c97d0e/explorer2.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[108]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Flex w="full">
                            <Image src="https://images.ctfassets.net/7ca8qfn907uv/TgJx0Rpuhi0RUZqCL7pG5/2ce805c4732073e89a1f00793b33f076/internal_txs.png" />
                          </Flex>
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
