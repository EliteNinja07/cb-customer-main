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
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import {
  AddIcon,
  MinusIcon,
  SearchIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import { useMyIntl } from "../../../common";
import { useEffect, useState } from "react";
import GettingFooter from "./components/GettingFooter";
import PageHelpful from "./components/PageHelpful";

const styles = {
  helpSearchC: {
    width: "100%",
    minHeight: "calc(100vh - 68px - 64px)",
    display: "block",
    _dark: {
      backgroundColor: "#000",
    },
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
    _dark: {
      color: "#fff",
      borderLeft: "4px solid #000",
    },
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
  const { lang } = useMyIntl("CreateaCoinbaseaccount");
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
            <Flex mt={3} pt={6}>
              <Alert
                status="warning"
                variant="subtle"
                bg="#f4c62117"
                py={6}
                sx={{
                  borderRadius: "10px",
                  border: "1px solid #f4c622",
                }}
              >
                <Flex>
                  <AlertIcon w="var(--cds-sizes-6)" color="#f4c622" />{" "}
                  <AlertDescription>
                    <Text
                      fontWeight="var(--cds-fontWeights-medium)"
                      fontSize="1.25rem"
                      id="#"
                    >
                      {lang[4]}
                    </Text>
                    <Text fontSize="1rem" pt={6}>
                      {lang[5]}
                      <Link
                        color="#1652f0"
                        href="/home/help/is-this-email-really-from-coinbase"
                      >
                        {lang[6]}
                      </Link>
                      {lang[7]}
                    </Text>
                  </AlertDescription>
                </Flex>{" "}
              </Alert>{" "}
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="as"
            >
              {lang[8]}
            </Text>
            <Text fontSize="1.1rem" pt={6}>
              {lang[9]}
              <Link color="#1652f0" href="#">
                {lang[10]}
              </Link>
              {lang[11]}
              <Link color="#1652f0" href="#">
                {lang[12]}
              </Link>
              {lang[13]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="al"
            >
              {lang[14]}
            </Text>
            <Text as="ul" listStyleType="disc" fontSize="1rem" pt={6} pl={6}>
              <Text as="li" display="list-item">
                {lang[15]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[16]}
                <Link color="#1652f0" href="#">
                  {lang[17]}
                </Link>
                {lang[18]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[19]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[20]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[21]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[22]}
              <Link color="#1652f0" href="#">
                {lang[23]}
              </Link>
              .
            </Text>
            <Flex w="full" py={5}>
              <video
                controls
                width="100%"
                src="/img/mov/How to create an account using the Coinbase app.mp4"
              ></video>
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
                            <Text>{lang[24]}</Text>
                          </Box>{" "}
                          {isExpanded ? (
                            <MinusIcon fontSize="1.5rem" />
                          ) : (
                            <AddIcon fontSize="1.5rem" />
                          )}{" "}
                        </AccordionButton>
                      </h1>
                      <AccordionPanel pb={4}>
                        <Flex w="full" py={5}>
                          <video
                            controls
                            width="100%"
                            src="/img/mov/How to create a Coinbase account.mp4"
                          ></video>
                        </Flex>
                      </AccordionPanel>{" "}
                    </>
                  )}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="ad"
            >
              {lang[25]}
            </Text>
            <Text fontSize="1.1rem" pt={6}>
              {lang[26]}
              <Link color="#1652f0" href="https://www.coinbase.com">
                https://www.coinbase.com
              </Link>
              {lang[27]}
              <Link color="#1652f0" href="#">
                {lang[28]}
              </Link>
              {lang[29]}
              <Link color="#1652f0" href="#">
                {lang[30]}
              </Link>
              {lang[31]}
            </Text>
            <Text fontSize="1.1rem" pt={6}>
              <Text as="b">{lang[32]}</Text>
              {lang[33]}
            </Text>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1.1rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Text as="li" display="list-item">
                {lang[34]}
                <Text as="b">{lang[35]}</Text>.
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[36]}
              </Text>
              <Text as="ul" fontSize="1rem" pl={6}>
                <Text as="li" pt={6}>
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
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[41]}
                <Link color="#1652f0" href="#">
                  {lang[42]}
                </Link>
                {lang[43]}
                <Link color="#1652f0" href="#">
                  {lang[44]}
                </Link>
                .
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[45]}
                <Text as="b">{lang[46]}</Text>
                {lang[47]}
                <Text as="b">{lang[48]}</Text>
                {lang[49]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[50]}
              </Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="af"
            >
              {lang[51]}
            </Text>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Text as="li" display="list-item">
                {lang[52]}
                <Text as="b">{lang[53]}</Text>
                {lang[54]}
                <Link color="#1652f0" href="#">
                  {lang[55]}
                </Link>
                .
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[56]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[57]}
              </Text>
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
                <Text pl={3}>{lang[58]}</Text>
              </Flex>
            </Alert>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="ag"
            >
              {lang[59]}
            </Text>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1.1rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Text as="li" display="list-item">
                {lang[60]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[61]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[62]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[63]}
                <Text as="b">{lang[64]}</Text>
                {lang[65]}
                <Text as="b">{lang[66]}</Text>
                {lang[67]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[68]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[69]}
                <Text as="b">{lang[70]}</Text>
                {lang[71]}
                <Text as="b">{lang[72]}</Text>.
              </Text>
            </Text>
            <Text fontSize="1.1rem" pt={6}>
              {lang[73]}
              <Text as="b">{lang[74]}</Text>.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="ah"
            >
              {lang[75]}
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
                {lang[76]}
              </Text>
              <Text as="ul" fontSize="1rem" pt={6} pl={6} pb="4">
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
              <Text as="li" display="list-item">
                {lang[81]}
              </Text>
              <Text as="ul" fontSize="1rem" pt={6} pl={6} pb="4">
                <Text as="li" display="list-item">
                  {lang[82]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[83]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[84]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[85]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[86]}
                </Text>
              </Text>
              <Text as="li" display="list-item">
                {lang[87]}
                <Text as="b">{lang[88]}</Text>
                {lang[89]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[90]}
              <Link color="#1652f0" href="#">
                {lang[91]}
              </Link>
              .
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
                  <Text fontSize="1rem">{lang[92]}</Text>
                </Text>
              </Flex>
            </Alert>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="aj"
            >
              {lang[93]}
            </Text>
            <Text
              as="ul"
              listStyleType="decimal"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb={6}
            >
              <Text as="li" display="list-item">
                {lang[94]}
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[95]}
                <Link color="#1652f0" href="#">
                  {lang[96]}
                </Link>
                .
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[97]}
              <Link color="#1652f0" href="#">
                {lang[98]}
              </Link>
              {lang[99]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="ak"
            >
              {lang[100]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[101]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[102]}
              <Link color="#1652f0" href="#">
                {lang[103]}
              </Link>
              {lang[104]}
            </Text>
            <Text as="ul" listStyleType="disc" fontSize="1rem" pt={6} pl={6}>
              <Text as="li" display="list-item">
                {lang[105]}
                <Link color="#1652f0" href="#">
                  {lang[106]}
                </Link>
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[107]}
                <Link color="#1652f0" href="#">
                  {lang[108]}
                </Link>
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[109]}
                <Link color="#1652f0" href="#">
                  {lang[110]}
                </Link>
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[111]}
                <Link color="#1652f0" href="#">
                  {lang[112]}
                </Link>
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[113]}
                <Link color="#1652f0" href="#">
                  {lang[114]}
                </Link>
              </Text>
              <Text as="li" display="list-item" pt={6}>
                {lang[115]}
                <Link color="#1652f0" href="#">
                  {lang[116]}
                </Link>
              </Text>
            </Text>
          </Flex>
          <Flex
            w={{ base: "100%", sm: "100%", md: "33%", lg: "33%" }}
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
            display="block"
          >
            <div style={getFixed}>
              <Flex sx={styles.RAcives}>
                <Link href="#as">{lang[117]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link href="#al">{lang[118]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link href="#ad">{lang[119]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link href="#af">{lang[120]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link href="#ag">{lang[121]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link href="#ah">{lang[122]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link href="#aj">{lang[123]}</Link>
              </Flex>
              <Flex sx={styles.CellLink}>
                <Link href="#ak">{lang[124]}</Link>
              </Flex>
            </div>
          </Flex>
        </Flex>
      </Flex>
      <PageHelpful />
      <GettingFooter />
    </Flex>
  );
};
