import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export const useModal = ({ title = "", cont }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{cont}</ModalBody>
    </ModalContent>
  </Modal>;
  return {
    onOpen,
  };
};
