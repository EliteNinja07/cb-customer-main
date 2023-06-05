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
  const { lang } = useMyIntl("Earncryptousingdapps");
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
                {lang[5]}
              </Text>
              <Text as="li" display="list-item">
                {lang[6]}
              </Text>
              <Text as="li" display="list-item">
                {lang[7]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[8]}
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/459khmn5alhMYSGn1jLoCl/d9372b735815b3294753809cf7dd238d/Coinbase_Wallet_defi_tab_earn_crypto_using_dapps.png" />
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
              {lang[9]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[10]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Link color="#1652f0" href="#">
                {lang[11]}
              </Link>
              {lang[12]}
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
              {lang[13]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[14]}
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
                            <Text>{lang[15]}</Text>
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
                          {lang[16]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[17]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[18]}
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
                            <Text>{lang[19]}</Text>
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
                          {lang[20]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[21]}
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
                            {lang[22]}
                            <Link
                              color="#1652f0"
                              href="https://app.compound.finance"
                            >
                              {lang[23]}
                            </Link>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[24]}
                            <Text as="b">{lang[25]}</Text>
                            {lang[26]}
                            <Text as="b">{lang[27]}</Text>
                            {lang[28]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[29]}
                            <Text as="b">{lang[30]}</Text>
                            {lang[31]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[32]}
                            <Text as="b">{lang[33]}</Text>
                            {lang[34]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[35]}
                            <Text as="b">{lang[36]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[37]}
                            <Text as="b">{lang[38]}</Text>
                            {lang[39]}
                            <Text as="b">{lang[40]}</Text>
                            {lang[41]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
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
                            {lang[45]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[46]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[47]}
                            <Link color="#1652f0" href="#">
                              {lang[48]}
                            </Link>
                            {lang[49]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[50]}
                            <Text as="b">{lang[51]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[52]}
                            <Text as="b">{lang[53]}</Text>
                            {lang[54]}
                            <Text as="b">{lang[55]}</Text>
                            {lang[56]}
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
                          {lang[57]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[58]}
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
                            {lang[59]}
                            <Text as="b">{lang[60]}</Text>
                            {lang[61]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[62]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[63]}
                            <Text as="b">{lang[64]}</Text>
                            {lang[65]}
                            <Text as="b">{lang[66]}</Text>
                            {lang[67]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[68]}
                            <Text as="b">{lang[69]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[70]}
                            <Text as="b">{lang[71]}</Text>
                            {lang[72]}
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
                            <Text>Aave</Text>
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
                          {lang[73]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[74]}
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
                            {lang[75]}
                            <Link color="#1652f0" href="https://app.aave.com">
                              https://app.aave.com
                            </Link>
                            .
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[76]}
                            <Text as="b">{lang[77]}</Text>
                            {lang[78]}
                            <Text as="b">{lang[79]}</Text>
                            {lang[80]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[81]}
                            <Text as="b">{lang[82]}</Text>
                            {lang[83]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[84]}
                            <Text as="b">{lang[85]}</Text>
                            {lang[86]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[87]}
                            <Text as="b">{lang[88]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[89]}
                            <Text as="b">{lang[90]}</Text>
                            {lang[91]}
                            <Text as="b">{lang[92]}</Text>
                            {lang[93]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[94]}
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
                            {lang[95]}
                            <Text as="b">{lang[96]}</Text>
                            {lang[97]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[98]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[99]}
                            <Text as="b">{lang[100]}</Text>
                            {lang[101]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[102]}
                            <Text as="b">{lang[103]}</Text>
                            {lang[104]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[105]}
                            <Text as="b">{lang[106]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[107]}
                            <Text as="b">{lang[108]}</Text>
                            {lang[109]}
                            <Text as="b">{lang[110]}</Text>
                            {lang[111]}
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
                          {lang[112]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[113]}
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
                            {lang[114]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[115]}
                            <Text as="b">{lang[116]}</Text>
                            {lang[117]}
                            <Text as="b">{lang[118]}</Text>
                            {lang[119]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[120]}
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
                            <Text>dYdX</Text>
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
                          {lang[121]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[122]}
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
                            {lang[123]}
                            <Link color="#1652f0" href="#">
                              https://trade.dydx.exchange/portfolio/overview
                            </Link>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[124]}
                            <Text as="b">{lang[125]}</Text>
                            {lang[126]}
                            <Text as="b">{lang[127]}</Text>
                            {lang[128]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[129]}
                            <Text as="b">{lang[130]}</Text>
                            {lang[131]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[132]}
                            <Text as="b">{lang[133]}</Text> to lend your total
                            balance.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[134]}
                            <Text as="b">{lang[135]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[136]}
                            <Text as="b">{lang[137]}</Text>
                            {lang[138]}
                            <Text as="b">{lang[139]}</Text>
                            {lang[140]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[141]}
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
                            {lang[142]}
                            <Text as="b">{lang[143]}</Text>
                            {lang[144]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[145]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[146]}
                            <Text as="b">{lang[147]}</Text>
                            {lang[148]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[149]}
                            <Text as="b">{lang[150]}</Text>
                            {lang[151]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[152]}
                            <Text as="b">{lang[153]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[154]}
                            <Text as="b">{lang[155]}</Text>
                            {lang[156]}
                            <Text as="b">{lang[157]}</Text>
                            {lang[158]}
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
                          {lang[159]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[160]}
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
                            {lang[161]}
                            <Text as="b">{lang[162]}</Text>
                            {lang[163]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[164]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[165]}
                            <Text as="b">{lang[166]}</Text>
                            {lang[167]}
                            <Text as="b">{lang[168]}</Text>
                            {lang[169]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[170]}
                            <Text as="b">{lang[171]}</Text>.
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[172]}
                            <Text as="b">{lang[173]}</Text>
                            {lang[174]}
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
