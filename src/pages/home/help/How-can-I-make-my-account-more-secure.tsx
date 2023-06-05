import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
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
  const { lang } = useMyIntl("HowcanImakemyaccountmoresecure");
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
            <Text fontSize="1rem" pt={6}>
              {lang[4]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[5]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[6]}
              <Link color="#1652f0" href="#">
                {lang[7]}
              </Link>
              {lang[8]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[9]}
              <Link color="#1652f0" href="#">
                {lang[10]}
              </Link>
              ,
              <Link color="#1652f0" href="#">
                {lang[11]}
              </Link>
              {lang[12]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[13]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[14]}
              <Link color="#1652f0" href="#">
                {lang[15]}
              </Link>
              .
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[16]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[17]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[18]}
              <Link color="#1652f0" href="#">
                {lang[19]}
              </Link>
              {lang[20]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[21]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[22]}
              <Link color="#1652f0" href="#">
                {lang[23]}
              </Link>
              .{lang[24]}
              <Link color="#1652f0" href="#">
                {lang[25]}
              </Link>
              {lang[26]}
              <Link color="#1652f0" href="#">
                {lang[27]}
              </Link>
              .
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[28]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[29]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[30]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[31]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[32]}
              <Link color="#1652f0" href="#">
                https://haveibeenpwned.com/
              </Link>
              {lang[33]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[34]}
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
                {lang[35]}
              </Text>
              <Text as="li" display="list-item">
                {lang[36]}
              </Text>
              <Text as="li" display="list-item">
                {lang[37]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[38]}
              <Link color="#1652f0" href="#">
                {lang[39]}
              </Link>
              .
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[40]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[41]}
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
              </Text>
              <Text as="li" display="list-item">
                {lang[44]}
              </Text>
              <Text as="li" display="list-item">
                {lang[45]}
              </Text>
              <Text as="li" display="list-item">
                {lang[46]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[47]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[48]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[49]}
              <Link color="#1652f0" href="#">
                {lang[50]}
              </Link>
              {lang[51]}
              <Link color="#1652f0" href="#">
                {lang[52]}
              </Link>
              {lang[53]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[54]}
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
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[63]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[64]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[65]}
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
                {lang[66]}
              </Text>
              <Text as="li" display="list-item">
                {lang[67]}
              </Text>
              <Text as="li" display="list-item">
                {lang[68]}
              </Text>
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
              <Link color="#1652f0" href="#">
                https://www.coinbase.com/
              </Link>
              {lang[72]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[73]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[74]}
              <Link color="#1652f0" href="#">
                {lang[75]}
              </Link>
              .
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[76]}
              <Link color="#1652f0" href="#">
                {lang[77]}
              </Link>
              {lang[78]}
              <Link color="#1652f0" href="#">
                {lang[79]}
              </Link>
              {lang[80]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[81]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[82]}
              <Link color="#1652f0" href="#">
                {lang[83]}
              </Link>
              {lang[84]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[85]}
              <Link color="#1652f0" href="#">
                {lang[86]}
              </Link>
              {lang[87]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[88]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[89]}
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
                {lang[90]}
              </Text>
              <Text as="li" display="list-item">
                {lang[91]}
              </Text>
              <Text as="li" display="list-item">
                {lang[92]}
              </Text>
              <Text as="li" display="list-item">
                {lang[93]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[94]}
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
                {lang[95]}
              </Text>
              <Text as="li" display="list-item">
                {lang[96]}
                <Link color="#1652f0" href="#">
                  {lang[97]}
                </Link>
                )
              </Text>
              <Text as="li" display="list-item">
                {lang[98]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Text as="b">{lang[99]}</Text>
              {lang[100]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[101]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[102]}
              <Link color="#1652f0" href="#">
                {lang[103]}
              </Link>
              {lang[104]}
              <Link color="#1652f0" href="#">
                {lang[105]}
              </Link>
              {lang[106]}
              <Link color="#1652f0" href="#">
                {lang[107]}
              </Link>
              .
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[108]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[109]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[110]}
              <Link color="#1652f0" href="#">
                {lang[111]}
              </Link>
              {lang[112]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[113]}
              <Link color="#1652f0" href="#">
                {lang[114]}
              </Link>
              {lang[115]}
              <Link color="#1652f0" href="#">
                security@coinbase.com
              </Link>
              {lang[116]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.75rem"
              letterSpacing="-0.08rem"
              id="#"
            >
              {lang[117]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[118]}
              <Link color="#1652f0" href="#">
                {lang[119]}
              </Link>
              {lang[120]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[121]}
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
                {lang[122]}
              </Text>
              <Text as="li" display="list-item">
                {lang[123]}
              </Text>
              <Text as="li" display="list-item">
                {lang[124]}
              </Text>
              <Text as="li" display="list-item">
                {lang[125]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[126]}
              <Link color="#1652f0" href="#">
                {lang[127]}
              </Link>
              .
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[128]}
              <Link color="#1652f0" href="#">
                https://blog.coinbase.com/tagged/security
              </Link>
              .
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
