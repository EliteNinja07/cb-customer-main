import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
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

import { useMyIntl } from "../../../common/libs/intl/useMyIntl";
import FixedRightList from "./components/FixedRightList";
import GettingFooter from "./components/GettingFooter";
import PageHelpful from "./components/PageHelpful";

const styles = {
  helpSearchC: {
    width: "100%",
    minHeight: "calc(100vh - 68px - 64px)",
    display: "block",
    backgroundColor: "#fff",
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
  footers: {
    backgroundColor: "#90909024",
    padding: "6rem 0",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "2rem",
  },
};
const RListC = [
  {
    label: "Setting up a vault",
    href: "#as",
  },
  {
    label: "What's the difference between an individual and group vault?",
    href: "#ad",
  },
];
export default () => {
  const { lang } = useMyIntl("HowdoIsetupavault");
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
                  <BreadcrumbLink href="/home/help/How-do-i-set-up-a-vault">
                    {lang[2]}
                  </BreadcrumbLink>
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
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.3rem"
              id="as"
            >
              {lang[4]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[5]}
            </Text>
            <Text as="ul" listStyleType="decimal" pt={6} pl={6} pb="4">
              <Text as="li" display="list-item">
                {lang[6]}
              </Text>
              <Text as="li" display="list-item">
                {lang[7]}
              </Text>
              <Text as="li" display="list-item">
                {lang[8]}
              </Text>
              <Text as="li" display="list-item">
                {lang[9]}
              </Text>
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/6652Xifke9kr65aP5HANDC/756a72c2ed60c55401aff7093da7f848/How_do_I_set_up_a_vault_-_image_2.png" />
            </Flex>
            <Text fontSize="1rem" pt={6}>
              {lang[10]}
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/4NLpAsqXYXwpZTjlL3S3Tj/40fcbe4cf1cead5968a164db3251c89c/How_do_I_set_up_a_vault_-_image_3.png" />
            </Flex>
            <Text fontSize="1rem" pt={6}>
              {lang[11]}
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/1EwwE1LtxayVi569DS0wtF/d3d27356698d2a5063e186cfb01ddaed/How_do_I_set_up_a_vault_-_image_5.png" />
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.3rem"
              id="#"
            >
              {lang[12]}
            </Text>
            <Flex w="full">
              <Image src="https://images.ctfassets.net/7ca8qfn907uv/6MRQskEjfOBmvk4nXtRuj2/c018454d8e3fd542df0abd340bca75aa/How_do_I_set_up_a_vault_-_image_4.png" />
            </Flex>
            <Text fontSize="1rem" pt={6}>
              {lang[13]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[14]}
              <Link color="#1652f0" href="#">
                {lang[15]}
              </Link>
              {lang[16]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.3rem"
              id="ad"
            >
              {lang[17]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[18]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[19]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              <Text fontWeight="var(--cds-fontWeights-medium)">{lang[20]}</Text>
              {lang[21]}
            </Text>
            <PageHelpful />
          </Flex>
          <Flex
            w={{ base: "100%", sm: "100%", md: "33%", lg: "33%" }}
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
            display="block"
          >
            <FixedRightList list={RListC} />
          </Flex>
        </Flex>
      </Flex>
      <GettingFooter />
    </Flex>
  );
};
