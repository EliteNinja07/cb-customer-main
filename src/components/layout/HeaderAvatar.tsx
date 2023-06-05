import {
  Avatar,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Switch,
  Tag,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { useDisconnect } from "wagmi";
import {
  MyButton,
  formatAddress,
  formatVip,
  getAvatar,
  state,
  stateActions,
} from "../../common";

const styles = {
  HAvatar: {
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
  UModal: {
    position: "absolute",
    right: { base: 0, sm: 0, md: "3rem", lg: "3rem" },
    top: { base: 0, sm: 0, md: "67px", lg: "67px" },
    left: { base: 0, sm: 0, md: "auto", lg: "auto" },
    bottom: { base: 0, sm: 0, md: "auto", lg: "auto" },
    margin: { base: 0, sm: 0 },
    borderRadius: { base: 0, sm: 0, md: "10px", lg: "10px" },
    width: { base: "100vw", sm: "100vw", md: "350px", lg: "350px" },
    maxWidth: { base: "100vw", sm: "100vw", md: "400px", lg: "400px" },
  },
  ModalAvatar: {
    position: "relative",
  },
  Uvip: {
    position: "absolute",
    bottom: "-0.7rem",
  },
  UCell: {
    padding: "0 1rem",
    _hover: { bg: "#f8f8f8" },
    _dark: {
      _hover: { bg: "#293241" },
    },
  },
  UCellA: {
    borderTop: "1px solid var(--cds-colors-chakra-border-color)",
    display: "flex",
    padding: "12px 0",
    width: "100%",
  },
};

export default function HeaderAvatar({ user }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { disconnect, isSuccess } = useDisconnect();

  useEffect(() => {
    if (isSuccess) stateActions.walletLogout();
  }, [isSuccess]);

  return (
    <>
      <Avatar
        onClick={onOpen}
        sx={styles.HAvatar}
        src={getAvatar(user?.avatar)}
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
        size="xs"
      >
        <ModalOverlay />
        <ModalContent sx={styles.UModal}>
          <ModalCloseButton />
          <ModalBody px={0} pb={0} overflow="hidden">
            <Flex
              sx={styles.ModalAvatar}
              flexDir="column"
              alignItems="center"
              mt={{ base: 10, sm: 10, md: 5, lg: 5 }}
            >
              <Avatar
                name={user?.nickname ?? "-"}
                onClick={onOpen}
                size="lg"
                src={getAvatar(user?.avatar)}
              />
              <Flex sx={styles.Uvip}>
                <Tag
                  variant="solid"
                  borderRadius="full"
                  py="0px"
                  px="0.6rem"
                  colorScheme="twitter"
                >
                  {formatVip(user?.vips_id)}
                </Tag>
              </Flex>
            </Flex>
            <Flex justifyContent="center" pt={8} w="full" flexDir="column">
              <Text
                fontSize="1.1rem"
                w="100%"
                textAlign="center"
                fontWeight="var(--cds-fontWeights-medium)"
              >
                {user?.nickname ?? "-"}
              </Text>
              <Text
                color="#858585"
                fontSize="0.8rem"
                w="100%"
                pt={2}
                textAlign="center"
              >
                {user?.email ?? "-"}
              </Text>
            </Flex>
            <Flex justifyContent="center" py={5}>
              <Link to="/home/settings/info" onClick={onClose}>
                <MyButton
                  fontWeight="var(--cds-fontWeights-medium)"
                  borderRadius="full"
                >
                  <FormattedMessage id="text.ManageYourProfile" />
                </MyButton>
              </Link>
            </Flex>

            <SimpleGrid columns={1}>
              <Flex sx={styles.UCell}>
                <Link
                  to="/home/settings/email"
                  onClick={onClose}
                  style={styles.UCellA}
                >
                  <FormattedMessage id="text.Settings" />
                </Link>
              </Flex>
              <Flex sx={styles.UCell}>
                <Flex style={styles.UCellA} alignItems="center">
                  <Flex flex="1">
                    <FormattedMessage id="text.DarkMode" />
                  </Flex>
                  <Switch
                    defaultChecked={colorMode === "dark"}
                    onChange={() => toggleColorMode()}
                  />
                </Flex>
              </Flex>
              <Flex sx={styles.UCell}>
                <Flex sx={styles.UCellA} flexDir="column">
                  <Text
                    fontWeight="var(--cds-fontWeights-medium)"
                    fontSize="1.1rem"
                    lineHeight="1rem"
                  >
                    {formatAddress(user?.address)}
                  </Text>
                </Flex>
              </Flex>
              <Flex sx={styles.UCell}>
                <Link to="#" style={styles.UCellA}>
                  <Text
                    color="#e4317c"
                    onClick={() => {
                      onClose();
                      state.storage.isLogin = false;
                      state.session.ready = false;
                      disconnect();
                    }}
                  >
                    <FormattedMessage id="text.SignOut" />
                  </Text>
                </Link>
              </Flex>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
