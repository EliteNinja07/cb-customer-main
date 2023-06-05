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
  const { lang } = useMyIntl("CoinbaseDecentralizedID");
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
            <Text fontSize="1rem" pt={6}>
              {lang[5]}
            </Text>
            <Text fontSize="1rem" pt={6}>
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
                        <Text fontSize="1rem" pt={6}>
                          {lang[9]}
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
                          {lang[10]}
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
                            {lang[11]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[12]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[13]}
                          </Text>
                          <Text
                            as="ul"
                            fontSize="1rem"
                            listStyleType="circle"
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
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[16]}
                          </Text>
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/53c9ikX12QwoLnFvoK1Ufp/9dba003f75b5a2c17c9b6902f2554076/Existing_customer_-_ID.gif" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[17]}
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
                            {lang[18]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[19]}
                          </Text>
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
                          <Text as="li" display="list-item">
                            {lang[24]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[25]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[26]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[27]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[28]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[29]}
                          <Link color="#1652f0" href="#">
                            {lang[30]}
                          </Link>
                          .
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
                          {lang[31]}
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
                            {lang[32]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[33]}
                          </Text>
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/1dUJ9mKHMuyjPeJ1yGtnAr/7e5ed3e1ea3198bb93321194c12bac9f/unnamed__17_.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[34]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[35]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/49IeZA6NmYAtZjCOz36jas/7165a7edeb5c48690bf0e1c096d9ad36/Screen_Shot_2022-10-07_at_10.43.08_AM.png" />
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
                          {lang[36]}
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
                            {lang[37]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[38]}
                            <Link color="#1652f0" href="#">
                              {lang[39]}
                            </Link>
                            {lang[40]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[41]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[42]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[43]}
                          </Text>
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/7pYh7waDCHA5yA9MAuF6qP/5578fd92a98b20ca0635c5812566f879/New_User_-_Claim_ID.gif" />
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
                          {lang[44]}
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
                            {lang[45]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[46]}
                          </Text>
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/8Y8ZHao69IGMRnxxzVd1O/d67bdc48b7d7432c1691a26e55030974/claim_free_username.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[47]}
                        </Text>
                        <Flex w="full">
                          <Image src="https://images.ctfassets.net/7ca8qfn907uv/6KHJjmeYnMHhZLFXmgOjrD/8e71ffe34eea130d8f985d67c07247e7/unnamed__19_.png" />
                        </Flex>
                        <Text fontSize="1rem" pt={6}>
                          {lang[48]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[49]}
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
                          {lang[50]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[51]}
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
                            {lang[52]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[53]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[54]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[55]}
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
                        <Text fontSize="1rem" pt={6}>
                          {lang[63]}
                          <Link color="#1652f0" href="#">
                            {lang[64]}
                          </Link>
                          .
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
              {lang[65]}
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
                            <Text>{lang[66]}</Text>
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
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[67]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[68]}
                            <Link color="#1652f0" href="#">
                              {lang[69]}
                            </Link>
                            {lang[70]}
                            <Link color="#1652f0" href="#">
                              {lang[71]}
                            </Link>
                            {lang[72]}
                            <Link color="#1652f0" href="#">
                              {lang[73]}
                            </Link>
                            {lang[74]}
                            <Link color="#1652f0" href="#">
                              {lang[75]}
                            </Link>
                            .
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[76]}
                            <Link color="#1652f0" href="https://ens.domains/">
                              {lang[77]}
                            </Link>
                            .{" "}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Text as="b">{lang[78]}</Text>
                          {lang[79]}
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
                            <Text>{lang[80]}</Text>
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
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[81]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[82]}
                            <Link color="#1652f0" href="#">
                              EIP-3668
                            </Link>
                            {lang[83]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[84]}
                          </Text>
                          <Text
                            as="ul"
                            fontSize="1rem"
                            listStyleType="circle"
                            pt={6}
                            pl={6}
                            pb="4"
                          >
                            <Text as="li" display="list-item">
                              <Text as="b">
                                <Text as="i">{lang[85]}</Text>
                              </Text>
                            </Text>
                            <Text as="li" display="list-item">
                              <Text as="b">
                                <Text as="i">{lang[86]}</Text>
                              </Text>
                            </Text>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[87]}
                            <Link color="#1652f0" href="#">
                              {lang[88]}
                            </Link>
                            {lang[89]}
                          </Text>
                          <Text
                            as="ul"
                            fontSize="1rem"
                            listStyleType="circle"
                            pt={6}
                            pl={6}
                            pb="4"
                          >
                            <Text as="li" display="list-item">
                              <Text as="li" display="list-item">
                                <Text as="b">{lang[90]}</Text>
                                {lang[91]}
                              </Text>
                            </Text>
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[92]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[93]}
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
                            <Text>{lang[94]}</Text>
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
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[95]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[96]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[97]}
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
                            <Text>{lang[98]}</Text>
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
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[99]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[100]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[101]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[102]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Flex w="full">
                            <Image src="https://images.ctfassets.net/7ca8qfn907uv/3XfUIp8Pbn4k9KjSvz0yjF/85c3ecd413ed2f569ac8d49d30ec26a0/addresses.png" />
                          </Flex>
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
                            <Text>{lang[103]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text as="b">{lang[104]}</Text>
                        <Text
                          as="ul"
                          listStyleType="decimal"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[105]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[106]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Flex w="full">
                            <Image src="https://images.ctfassets.net/7ca8qfn907uv/4Hcbxl63PVUzq955Sbr11Q/68df9996d5329c5d5cd052f4f1aaf813/428.png" />
                          </Flex>
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
                            <Text>{lang[107]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>{" "}
                      </h1>
                      <AccordionPanel pb={4}>
                        <Text as="b">{lang[108]}</Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[109]}
                          <Link color="#1652f0" href="#">
                            {lang[110]}
                          </Link>
                          {lang[111]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          <Flex w="full">
                            <Image src="https://images.ctfassets.net/7ca8qfn907uv/ijKcgVeRgvrjxZsLwuB1n/44b0a1c4ee2a900ca4744d1afa6d65a0/primary_ens_name.png" />
                          </Flex>
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
                            <Text>{lang[112]}</Text>
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
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[116]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[117]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[118]}
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[119]}
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
                            {lang[120]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[121]}
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
                          {lang[122]}
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
                            <Text as="li" display="list-item">
                              {lang[123]}
                            </Text>
                          </Text>
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[124]}
                          <Link color="#1652f0" href="#">
                            EIP-3668
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
                            <Text>{lang[125]}</Text>
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
                          {lang[126]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[127]}
                          <Link color="#1652f0" href="#">
                            EIP-3668
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
              {lang[128]}
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
                            <Text>{lang[129]}</Text>
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
                          {lang[130]}
                          <Link color="#1652f0" href="#">
                            {lang[131]}
                          </Link>
                          {lang[132]}
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
                            <Text>{lang[133]}</Text>
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
                          {lang[134]}
                        </Text>
                        <Text fontSize="1rem" pt={6}>
                          {lang[135]}
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
                            <Text>{lang[136]}</Text>
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
                          {lang[137]}
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
                            {lang[138]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[139]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[140]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[141]}
                          </Text>
                        </Text>
                        {lang[142]}
                        <Text as="i">{lang[143]}</Text>).
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
                            <Text>{lang[144]}</Text>
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
                          listStyleType="disc"
                          fontSize="1rem"
                          pt={6}
                          pl={6}
                          pb="4"
                        >
                          <Text as="li" display="list-item">
                            {lang[145]}
                          </Text>
                          <Text as="li" display="list-item">
                            {lang[146]}
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
