import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router";
import { InviteGiftModal } from "../Modals/InviteGiftModal";
import giftIcon from "/img/giftbox-1.svg";

const styles = {
  gift_c: {
    position: "relative",
    margin: "1rem",
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#eef0f3",
    borderRadius: { base: "20px", sm: "20px", md: "100%", lg: "20px" },
    padding: "1rem",
    cursor: "pointer",
    _dark: {
      backgroundColor: "#1a202c",
    },
  },
};
export default () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Flex
        sx={styles.gift_c}
        onClick={() => {
          navigate("/home/invite");
        }}
      >
        <Flex pr={{ base: 0, sm: 0, md: 0, lg: 2 }}>
          <Image
            w={{ base: "42px", sm: "42px", md: "90px", lg: "42px" }}
            src={giftIcon}
          />
        </Flex>
        <Flex px={2} flexDir="column">
          <Text
            sx={{
              color: "#000",
              fontSize: "1rem",
              lineHeight: "20px",
              fontWeight: "500",
              _dark: {
                color: "#fff",
              },
            }}
          >
            <FormattedMessage id="earn.verify.get10" />
          </Text>
          <Text sx={{ fontSize: "0.8rem", color: "#999" }}>
            <FormattedMessage id="earn.verify.friends" />
          </Text>
        </Flex>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xs", sm: "xs", md: "md", lg: "lg" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <InviteGiftModal onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
