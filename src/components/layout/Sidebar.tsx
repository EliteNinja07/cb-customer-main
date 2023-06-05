import {
  Avatar,
  Box,
  CloseButton,
  Divider,
  Flex,
  IconButton,
  Image,
  Stack,
  Tag,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useLocation } from "react-router";
import {
  MyIcon,
  PrimaryButton,
  SideNavButton,
  SideNavFButton,
} from "../../common";
import { formatMoney } from "../../common/utils/formatHelper";
import MenuGift from "./MenuGift";

import "./sidebar.scss";

const styles = {
  SideBarNavigation: {
    position: "fixed",
    transition: "top 350ms ease 0s",
    top: "0px",
    bottom: "0px",
    left: 0,
    right: { base: 0, sm: 0, md: "none", lg: "none" },
    minHeight: "var(--full-view-height,100vh)",
    zIndex: 1000,
    justifyContent: {
      base: "flex-end",
      sm: "flex-end",
      md: "fleft",
      lg: "left",
    },
    width: { base: "100vw", sm: "100vw", md: "87px", lg: "240px" },
    display: { base: "flex", sm: "flex", md: "block", lg: "block" },
  },
  SideBarNavigation2: {
    position: "fixed",
    transition: "top 350ms ease 0s",
    top: "0px",
    bottom: "0px",
    left: 0,
    right: { base: 0, sm: 0, md: "none", lg: "none" },
    minHeight: "var(--full-view-height,100vh)",
    zIndex: 1000,
    justifyContent: {
      base: "flex-end",
      sm: "flex-end",
      md: "fleft",
      lg: "left",
    },
    width: { base: "100vw", sm: "100vw", md: "87px", lg: "240px" },
    display: { base: "none", sm: "none", md: "block", lg: "block" },
  },
  Sidebar: {
    height: "100%",
    minWidth: { base: "70vw", sm: "70vw", md: "87px", lg: "240px" },
    width: { base: "70vw", sm: "70vw", md: "87px", lg: "240px" },
    position: "sticky",
    left: "0px",
    top: "0px",
    zIndex: "2",
    backgroundColor: "#fff",
    overflowY: { base: "auto", sm: "auto", md: "initial", lg: "initial" },
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    minHeight: "var(--full-view-height,100vh)",
    borderRight: { base: "none", sm: "none", md: "1px solid", lg: "1px solid" },
    borderLeft: { base: "1px solid", sm: "1px solid", md: "none", lg: "none" },
    // paddingRight: { base: "0", sm: "0", md: "3", lg: "4" },
    // paddingLeft: { base: "0", sm: "0", md: "2", lg: "4" },
    paddingBottom: "2rem",
    paddingTop: "2rem",
    _dark: {
      background: "hsla(0deg, 0%, 0%, 0.96)",
    },
  },
  Logo: {
    flexDir: "column",
    // pl: { base: 4, sm: 4, md: 4, lg: 2 },
    paddingRight: { base: "0", sm: "0", md: "1.8rem", lg: "1.8rem" },
    paddingLeft: { base: "0", sm: "0", md: "1.8rem", lg: "1.8rem" },
    pb: 8,
    display: { base: "none", sm: "none", md: "flex", lg: "flex" },
    // pt: 2,
  },
  LogoButton: {
    pos: "relative",
    w: "34px",
    h: "34px",
  },
  LogoImg: {
    w: "32px",
    h: "32px",
  },
  NavUl: {
    mt: 0,
    ml: 1,
    mb: 0,
    py: 0,
    px: "0.7rem",
    gap: 1,
    display: "flex",
    flexDir: "column",
  },
  NavButtonContainer: {
    w: "100%",
    justifyContent: {
      base: "center",
      sm: "center",
      md: "center",
      lg: "flex-start",
    },
    flexDir: "row",
    alignItems: "center",
    py: 2,
    px: 4,
  },
  NavIcon: {
    pl: { base: 0, sm: 0, md: 2, lg: 0 },
  },
  NavText: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "var(--cds-fontWeights-medium)",
    fontFamily: "var(--cds-font-display)",
    justifyContent: "start",
    display: { base: "none", sm: "none", md: "none", lg: "block" },
  },
  sidebar_children_list_c: {
    background: "hsla(0, 0%, 100%, 0.7)",
    _dark: {
      background: "hsla(0, 0%, 0%, 0.7)",
    },
  },
  SUserInfo: {
    display: { base: "flex", sm: "flex", md: "none", lg: "none" },
    borderBottom: "1px solid var(--cds-colors-chakra-border-color)",
    position: "relative",
  },
  CloseButton: {
    position: "fixed",
    right: "1rem",
    top: "1rem",
    zIndex: 9999,
  },
};

const sidebars = [
  {
    label: "Earn",
    icon: "",
    seicon: "",
    url: "/home/earn",
  },
  {
    label: "Assets",
    icon: "",
    seicon: "",
    url: "/home/assets",
  },
  {
    label: "Transfer",
    icon: "",
    seicon: "",
    url: "/home/transfer",
  },
  {
    label: "Referrals",
    icon: "",
    seicon: "",
    url: "/home/referrals",
  },
  {
    label: "Bonus",
    icon: "",
    seicon: "",
    url: "/home/bonus",
  },
  {
    label: "Gift",
    icon: "",
    seicon: "",
    url: "/home/gift",
  },
  // {
  //   label: "Learn",
  //   icon: "",
  //   seicon: "",
  //   url: "/home/learn",
  // },
  {
    label: "More",
    icon: "",
    seicon: "",
    url: "#",
    children: [
      {
        label: "Invite",
        icon: "",
        seicon: "",
        url: "/home/invite",
      },
      {
        label: "Calculator",
        icon: "",
        seicon: "",
        url: "/home/calculator",
      },
      // {
      //   label: "Help",
      //   icon: "",
      //   seicon: "",
      //   url: "/home/help",
      // },
      {
        label: "Support",
        icon: "",
        seicon: "",
        url: "/home/support",
      },
    ],
  },
];

export default ({ showSidebar = false, user }: any) => {
  const location = useLocation();
  const { toggleColorMode } = useColorMode();
  const intl = useIntl();
  const [getShowS, setShowS] = useState(false);
  useEffect(() => {
    setShowS(showSidebar > 1);
  }, [showSidebar]);

  return (
    <Flex
      as="nav"
      sx={getShowS ? styles.SideBarNavigation : styles.SideBarNavigation2}
    >
      <Flex display="contents">
        <Box as="nav" sx={styles.Sidebar} color="border">
          <Flex sx={styles.Logo}>
            <Flex flexDir="row" w="34px">
              <IconButton
                size="trans"
                variant="trans"
                icon={<Image src="/img/logo-small.svg" sx={styles.LogoImg} />}
                aria-label={""}
              />
            </Flex>
          </Flex>
          <Flex mx={5} mb={7} pb={5} flexDir="column" sx={styles.SUserInfo}>
            <Flex sx={styles.CloseButton}>
              <CloseButton
                size="lg"
                color="#000"
                sx={{ _dark: { color: "#fff" } }}
                onClick={() => setShowS(false)}
              />
            </Flex>
            <Flex alignItems="center">
              <Avatar w="40px" h="40px" />
              <Flex flexDir="column" flex="1" px={3}>
                <Text
                  fontWeight="var(--cds-fontWeights-medium)"
                  color="#333"
                  // fontWeight="1.8rem"
                  sx={{ _dark: { color: "#fff" } }}
                >
                  {user?.nickname ?? "-"}
                </Text>
                <Tag
                  borderRadius="full"
                  variant="solid"
                  size="sm"
                  textAlign="center"
                  w="43px"
                  colorScheme="messenger"
                >
                  Vip{user?.vips_id ? user?.vips_id - 1 : "0"}
                </Tag>
              </Flex>
            </Flex>
            <Flex pt={6} pb={2} alignItems="center">
              <Flex flex="1">
                <Divider bg="#dee2e6" />
              </Flex>
              <Flex>
                <PrimaryButton h="20px" px={3}>
                  <MyIcon icon="" w="10px" h="20px" fontSize="12px" />
                  <Text pl={2}>$10</Text>
                </PrimaryButton>
              </Flex>
            </Flex>
            <Flex flexDir="column" px={2} pt={2}>
              <Text color="#999" pt={1} fontSize="0.9rem" h="23px">
                <FormattedMessage id="text.Staking" />
              </Text>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                color="#333"
                fontSize="1.5rem"
                sx={{ _dark: { color: "#fff" } }}
              >
                {formatMoney(user?.total_staking_amount)}
              </Text>
            </Flex>
            <Flex flexDir="column" px={2} pt={3}>
              <Text color="#999" pt={1} fontSize="0.9rem" h="23px">
                <FormattedMessage id="text.Withdrawal" />
              </Text>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                color="#333"
                fontSize="1.5rem"
                sx={{ _dark: { color: "#fff" } }}
              >
                {formatMoney(user?.total_withdrawable_amount)}
              </Text>
            </Flex>
            <Flex
              py={4}
              justifyContent="center"
              onClick={() => setShowS(false)}
            >
              <PrimaryButton h="35px" px={3} link="/home/transfer?tab=Staking">
                <FormattedMessage id="text.Staking" />
              </PrimaryButton>
              <PrimaryButton
                h="35px"
                ml={3}
                px={3}
                link="/home/transfer?tab=Withdrawal"
              >
                <FormattedMessage id="text.Withdrawal" />
              </PrimaryButton>
            </Flex>
          </Flex>
          <Stack as="ul" sx={styles.NavUl}>
            {sidebars.map((res: any, index: number) => {
              return (
                <li
                  style={{ listStyle: "none" }}
                  className="sidebar_list"
                  key={"sidebar_" + index}
                  onClick={() => setShowS(false)}
                >
                  <SideNavButton
                    title={intl.formatMessage({
                      id: "home.sidebar." + res?.label,
                    })}
                    link={res.url}
                    icon={location.pathname == res.url ? res.seicon : res.icon}
                    selected={location.pathname == res.url}
                  />
                  {res?.children?.length > 0 ? (
                    <Flex
                      className="sidebar-children-c"
                      ml={{ base: "0", sm: "0", md: "45px", lg: "200px" }}
                    >
                      <Flex
                        className="sidebar-children-list-c"
                        sx={styles.sidebar_children_list_c}
                        flexDir="column"
                      >
                        <ul>
                          {res?.children?.map((json: any, idx: number) => {
                            return (
                              <li
                                style={{ listStyle: "none" }}
                                className="sidebar_list"
                                key={`sidebar_f_${index}_${idx}`}
                                onClick={() => setShowS(false)}
                              >
                                <SideNavFButton
                                  title={intl.formatMessage({
                                    id: "home.sidebar." + json?.label,
                                  })}
                                  link={json.url}
                                  icon={
                                    location.pathname == json.url
                                      ? json.seicon
                                      : json.icon
                                  }
                                  selected={location.pathname == json.url}
                                />
                              </li>
                            );
                          })}
                        </ul>
                      </Flex>
                    </Flex>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </Stack>
          <MenuGift />
        </Box>
        <Box></Box>
      </Flex>
    </Flex>
  );
};
