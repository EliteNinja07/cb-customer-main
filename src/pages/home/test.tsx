import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import { useContext } from "react";
import {
  MyAlertMethodsProps,
  MyButton,
  MyCard,
  MyCardBody,
  MyCardDivider,
  request,
  TextCardHeader,
  useMyState,
  useMyToast,
} from "../../common";
import { MyAlertRootContext } from "../layout";

export default function test() {
  const { snap } = useMyState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showRes } = useMyToast();

  const ref = useContext(
    MyAlertRootContext
  ) as React.MutableRefObject<MyAlertMethodsProps>;

  return (
    <Flex direction="column" align="start">
      <MyCard>
        <MyCardBody>
          <TextCardHeader>Tips and tutorials</TextCardHeader>
          <MyCardDivider></MyCardDivider>
          <Wrap p="10" spacing="40px">
            <MyButton
              onClick={() =>
                console.log("snap.session.user", snap.session.user)
              }
            >
              snap.session.user
            </MyButton>
            <MyButton onClick={() => ref.current?.show({ link: "/home/earn" })}>
              Test Global Alert
            </MyButton>
            <MyButton onClick={onOpen}>Show Modal</MyButton>
            <MyButton
              onClick={() => {
                request("tests/set_email", {}).then(showRes);
              }}
            >
              审核邮件
            </MyButton>
            <MyButton
              onClick={() => {
                request("tests/set_info", {}).then(showRes);
              }}
            >
              审核个人信息
            </MyButton>
            <MyButton
              onClick={() => {
                request("tests/set_identity", {}).then(showRes);
              }}
            >
              审核实名信息
            </MyButton>
            <MyButton
              onClick={() => {
                request("tests/reset_trail", {}).then(showRes);
              }}
            >
              重置试用
            </MyButton>
          </Wrap>
        </MyCardBody>
      </MyCard>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody sx={{ minH: "500px" }}>123</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                ref.current?.show({ link: "/home/settings/email" })
              }
            >
              Secondary Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
