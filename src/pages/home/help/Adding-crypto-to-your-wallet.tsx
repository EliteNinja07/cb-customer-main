import {
  Flex,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Box,
  Image,
  Link,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import { useMyIntl } from "../../../common/libs/intl/useMyIntl";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
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
  const { lang } = useMyIntl("Addingcryptotoyourwallet");
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
            <Text fontSize="1rem" pt={6}>
              {lang[4]}
              <Link color="#1652f0" href="#">
                {lang[5]}
              </Link>
              {lang[6]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[7]}
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
                            <Text>{lang[8]}</Text>
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
                          {lang[9]}
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
                            {lang[10]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[11]}
                            <Text as="b">{lang[12]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[13]}
                            <Text as="b">{lang[14]}</Text>
                            {lang[15]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[16]}
                            <Text as="b">{lang[17]}</Text>
                            {lang[18]}
                          </Text>
                        </Text>
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
                          <Text as="li" display="list-item">
                            {lang[23]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[24]}
                          <Link color="#1652f0" href="#">
                            {lang[25]}
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
                            <Text>{lang[26]}</Text>
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
                          {lang[27]}
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
                            {lang[28]}
                            <Text as="b">{lang[29]}</Text>
                            {lang[30]}
                            <Text as="b">{lang[31]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[32]}
                            <Text as="b">{lang[33]}</Text>
                            {lang[34]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[35]}
                            <Text as="b">{lang[36]}</Text>
                            {lang[37]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[38]}
                            <Text as="b">{lang[39]}</Text>
                            {lang[40]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[41]}
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
                            <Text as="b">{lang[45]}</Text>
                            {lang[46]}
                            <Text as="b">{lang[47]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[48]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[49]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[50]}
                            <Text as="b">{lang[51]}</Text>
                            {lang[52]}
                            <Text as="b">{lang[53]}</Text>
                            {lang[54]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[55]}
                            <Text as="b">{lang[56]}</Text>
                            {lang[57]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Text as="b">{lang[58]}</Text>
                          {lang[59]}
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
                            <Text>{lang[60]}</Text>
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
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[61]}
                            <Text as="b">{lang[62]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[63]}
                            <Text as="b">{lang[64]}</Text>.{" "}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[65]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[66]}
                            <Text as="b">{lang[67]}</Text>
                            {lang[68]}
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
                            <Text>{lang[69]}</Text>
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
                          {lang[70]}
                        </Text>
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
                          {lang[71]}
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
                            {lang[72]}
                            <Text as="b">{lang[73]}</Text>
                            {lang[74]}
                            <Text as="b">{lang[75]}</Text>
                            {lang[76]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[77]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[78]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[79]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[80]}
                          </Text>
                        </Text>
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
                          {lang[81]}
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
                            {lang[82]}
                            <Text as="b">{lang[83]}</Text>.{" "}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[84]}
                            <Text as="b">{lang[85]}</Text>
                            {lang[86]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[87]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[88]}
                          </Text>
                        </Text>
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
                          {lang[89]}
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
                            {lang[90]}
                            <Text as="b">{lang[91]}</Text>.{" "}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[92]}
                            <Text as="b">{lang[93]}</Text>
                            {lang[94]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[95]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[96]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[97]}
                          <Link color="#1652f0" href="#">
                            {lang[98]}
                          </Link>
                          {lang[99]}
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
                          <Text as="b">{lang[101]}</Text>
                          {lang[102]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[103]}
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
                            {lang[104]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[105]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[106]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[107]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[108]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[109]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[110]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Flex w="full">
                            <Image src="https://images.ctfassets.net/7ca8qfn907uv/5cM3hBmN9qFL6lqsU2yvJO/c498b99168cfdc78b9c3f975f3abca15/Third_party_provider.png" />
                          </Flex>
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
                base: "1em",
                sm: "1rem",
                md: "1.25rem",
                lg: "1.25rem",
              }}
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[111]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[112]}
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
