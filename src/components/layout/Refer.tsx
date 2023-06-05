import ReferImg from "@/assets/images/giftBoxRewards-1.svg";
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
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router";
import { PrimaryButton } from "../../common";

export default () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let friends_info = localStorage.getItem("friends");
  const navigate = useNavigate();

  useEffect(() => {
    if (!friends_info) {
      onOpen();
    }
    localStorage.setItem("friends", "1");
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "xs", sm: "xs", md: "md", lg: "lg" }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir="column">
            <Flex w="full" justifyContent="center" py={5} mt={6}>
              <Image w="190px" src={ReferImg} />
            </Flex>
            <Text
              px={1}
              w="full"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "400",
                lineHeight: "1.9rem",
                textAlign: "center",
              }}
            >
              <FormattedMessage id="modal.ModalReferTitle" />
            </Text>
            <Text
              px={1}
              py={3}
              sx={{
                width: { base: "80%", sm: "80%", md: "90%", lg: "90%" },
                lineHeight: "1.22rem",
                margin: "0 auto",
                fontSize: "0.9rem",
                textAlign: "center",
              }}
            >
              <FormattedMessage id="modal.ModalRefer" />
            </Text>
            <Flex justifyContent="center" pt={3} pb={7}>
              <PrimaryButton
                onClick={() => {
                  navigate("/home/invite");
                  onClose();
                }}
              >
                <FormattedMessage id="modal.ModalReferBtn" />
              </PrimaryButton>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
