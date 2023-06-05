import {
  Flex,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";

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
  const { lang } = useMyIntl("ConnectdappwalletwithQRcode");
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
                  <BreadcrumbLink href="/home/help/Dapps">
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
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/7LCavVvWgzQMcTBPQu9rxw/0253b81eaebdbfdeeadd4c3378e5e5d2/connect_wallet_uniswap.png" />
            </Flex>
            <Text fontSize="1rem" pt={6}>
              {lang[6]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[7]}
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/6UnEKK11wWmg5Crmn09luG/c03a560eac1fe220cdd47aa32ce51cc1/select_coinbase.png" />
            </Flex>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/3kUHm2cCQd5JqQ0A4Fy97Z/32de63853fba29e6c50317a221ee329c/Scan_instructions.png" />
            </Flex>
            <Text fontSize="1rem" pt={6}>
              {lang[8]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[9]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[10]}
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/24ikFIQIm2kV741JcM8bmu/ba4d6df21ae5e36f13c9f7fe928dd3d9/tap_3_bars.png" />
            </Flex>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/28YzR3qcSp9Gpdw2dHRyjd/3a221f5a2952af6a12aa4eebfb12059e/select_scan.png" />
            </Flex>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/7dbSqMCkmVwb1dQY4fDs3v/a9c55fc03444f0932f8c2661f75bd40a/scan_qr_code.png" />
            </Flex>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/5AokrCEPoTc4N1uBEuU9JD/5028f5d7edf49f93110d69f3c46fd6f9/connection_confirmation.png" />
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
              {lang[11]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[12]}
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/1KXtneLF3EVZBZSZYOy0HU/f9767fda9c852e506505bab74704f594/confrim_swap.png" />
            </Flex>
            <Text fontSize="1rem" pt={6}>
              {lang[13]}
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/2tjTBDXkc7A8ZdkCCysnmv/56b017cd48cee05ab0256791cd1fd9cf/phone_sig._request.png" />
            </Flex>
            <Text fontSize="1rem" pt={6}>
              {lang[14]}
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/3lpjCCtbtB7Oh1UJ1xxmo9/2147b707a9597a6f35e8a20bc1a58305/confirm_on_phone.png" />
            </Flex>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/4fFesW1HrwlSEpx39kigxE/2291377a70f6febd60b971f1680ca9b0/Screenshot_2022-10-27_at_11.37.20_AM.png" />
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
              {lang[15]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[16]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[17]}
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/3A1a7RWrhKPtGv9NCvyofZ/4dd8ff3ee35d9aaed460c1b7d3205b1a/scan_qr_code.png" />
            </Flex>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/6yFhANTyra13xv72nWVms3/704b3c5bbdb7365926bb7537b1c7e0b9/Screenshot_2022-10-27_at_12.22.22_PM.png" />
            </Flex>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/2HM0uLT98ZGxHwDkPr9fPt/c2aa0db1cb7b52e315dca61dfa119ce7/Screenshot_2022-10-27_at_12.22.32_PM.png" />
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
              {lang[18]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[19]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[20]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[21]}
              <Link color="#1652f0" href="#">
                {lang[22]}
              </Link>
              {lang[23]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[24]}
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/71q7kyhj4L3TacWtQqzG8k/f4ef2096c0005b4a4123c165c88f284b/Screenshot_2022-11-02_at_12.19.22_PM.png" />
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
              {lang[25]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              If you connected to a dapp, you can disconnect directly from the
              Coinbase app. To do this;
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
                {lang[26]}
              </Text>
              <Text as="li" display="list-item">
                {lang[27]}
              </Text>
              <Text as="li" display="list-item">
                {lang[28]}
              </Text>
              <Text as="li" display="list-item">
                {lang[29]}
              </Text>
              <Text as="li" display="list-item">
                {lang[30]}
              </Text>
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/30Jpn03sEWsIaNLOvJIHJN/621bdc8c97e680a9ffa5de4bd189f70f/Screenshot_2022-11-02_at_12.42.55_PM.png" />
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
