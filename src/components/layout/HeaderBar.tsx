import {
  Flex,
  HStack,
  IconButton,
  Image,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AiTradeSwiper from "./AiTradeSwiper";
import HeaderAvatar from "./HeaderAvatar";
import MyRefer from "./Refer";
import MyRedEnvelope from "./RedEnvelope";
import {
  useMyToast,
  request,
  SecondaryButton,
  PrimaryButton,
  MyIconButton,
  MyIcon,
  MyDivider,
  stateActions,
} from "../../common";
import { useLocation, useNavigate } from "react-router";
import { FormattedMessage, useIntl } from "react-intl";

const styles = {
  BaseHeader: {
    WebkitBoxAlign: "center",
    alignItems: "center",
    padding: "16px 24px",
    borderBottom: "1px solid var(--cds-colors-line)",
    position: "fixed",
    left: "0px",
    transition: "top 350ms ease 0s",
    top: "0px",
    right: "0px",
    zIndex: "100",
    marginLeft: { base: "0", sm: "0", md: "87px", lg: "240px" },
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    minHeight: "68px",
    maxHeight: "68px",
    _light: { bg: "gray.0" },
    _dark: { bg: "gray.99" },
  },
  Logo: {
    display: { base: "block", sm: "block", md: "none", lg: "none" },
  },
  LogoImg: {
    w: "32px",
    h: "32px",
  },
  BaseHeaderLeft: {
    flexDirection: "row",
    height: "100%",
    fontSize: "20px",
    fontWeight: "var(--cds-fontWeights-medium)",
    WebkitBoxAlign: "center",
    alignItems: "center",
    flexShrink: "0",
    paddingRight: "16px",
    marginBottom: "5px",
    display: { base: "none", sm: "none", md: "block", lg: "block" },
  },
  BaseHeaderCenter: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    overflowX: "auto",
    whiteSpace: "nowrap",
  },
  BaseHeaderRight: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    flexShrink: "0",
  },
  BadgeBtn: {
    position: "absolute",
    width: "10px",
    height: "10px",
    top: "5px",
    right: "5px",
    backgroundColor: "#cf202f",
    borderRadius: "100%",
  },
};

export default ({ user, account, onSidebarChange }: any) => {
  const { showRes } = useMyToast();
  const [get_has_new_message, sethas_new_message] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [getPageName, setPageName] = useState(
    location.pathname.replace("/home/", "")
  );
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const intl = useIntl();

  const titleCase = (str: string) => {
    let tmp = str.toLowerCase();
    tmp = tmp.split("/")[0];
    tmp = tmp.charAt(0).toUpperCase() + tmp.slice(1);
    // console.log("tmp", str, tmp);
    return intl.formatMessage({ id: "home.sidebar." + tmp });
  };

  useEffect(() => {
    setPageName(location.pathname.replace("/home/", ""));
  }, [location.pathname]);

  const api = {
    has_new_message: () => {
      request("sys_messages/has_new_message", {}).then((res) => {
        sethas_new_message(res?.data.has_new_message);
      });
      // .catch(showRes);
    },
  };

  const methods = {
    onSetTimeout: () => {
      setTimeout(() => {
        stateActions.me();
        methods?.onSetTimeout();
      }, 30000);
    },
  };

  useEffect(() => {
    methods?.onSetTimeout();
    api.has_new_message();
  }, []);

  return (
    <Flex sx={styles.BaseHeader}>
      <Flex sx={styles.Logo}>
        <Flex flexDir="row" w="34px" h="34px">
          <IconButton
            size="trans"
            variant="trans"
            icon={<Image src="/img/logo-small.svg" sx={styles.LogoImg} />}
            aria-label={""}
          />
        </Flex>
      </Flex>
      <Flex sx={styles.BaseHeaderLeft}>{titleCase(getPageName)}</Flex>
      <Flex sx={styles.BaseHeaderCenter}></Flex>
      <Flex sx={styles.BaseHeaderRight}>
        <HStack spacing="10px">
          {/* <SecondaryButton link="/home/test">测试功能</SecondaryButton> */}
          <Flex animation="heartbeat 1.5s ease-in-out infinite both">
            <PrimaryButton
              colorScheme="primary"
              onClick={() => {
                console.log(user?.show_card_at, user?.trailed_at);
                if (user?.show_card_at || user?.trailed_at) {
                  navigate("/home/aitrade");
                } else {
                  onOpen();
                }
              }}
            >
              <FormattedMessage
                id="text.AiTrade"
                values={{ name: "Ai Trade" }}
              />
            </PrimaryButton>
          </Flex>
          <MyIconButton link="/home/notifications">
            <MyIcon w="40px" fontSize="16px" icon="" />
            {get_has_new_message ? <Flex sx={styles.BadgeBtn}></Flex> : ""}
          </MyIconButton>
          <Flex
            onClick={() => {
              onSidebarChange(1);
            }}
            sx={{
              display: { base: "block", sm: "block", md: "none", lg: "none" },
            }}
          >
            <MyIconButton>
              <MyIcon w="40px" fontSize="16px" icon="" />
            </MyIconButton>
          </Flex>
          <MyDivider />
          <HeaderAvatar account={account} user={user} />
        </HStack>
      </Flex>
      <AiTradeSwiper user={user} onModalClose={onClose} isModalOpen={isOpen} />
      <MyRefer />
      <MyRedEnvelope />
    </Flex>
  );
};
