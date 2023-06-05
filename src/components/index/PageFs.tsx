import { MyIcon, MyContent, PrimaryButton } from "../../common";

import {
  Button,
  Checkbox,
  CheckboxGroup,
  CloseButton,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./scss/fs.scss";

const styles = {
  FsC: {
    position: "fixed",
    bottom: "-300px",
    left: 0,
    right: 0,
    zIndex: 102,
    animation: "myFsBottom 1s 1 forwards",
    fontWeight: 300,
    backgroundColor: "#f6f8ff",
    _dark: {
      backgroundColor: "#000",
    },
  },
  CloseButton: {
    position: "absolute",
    right: { base: 0, sm: 0, md: "-2rem", lg: "-2rem" },
    top: "0.7rem",
    zIndex: 100,
  },
  bannerText: { mr: "24px", color: "#5d5e67", fontSize: "0.9rem", flex: 1 },
};

export default function PageFs() {
  let cookies_info = localStorage.getItem("cookies");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [getShow, setShow] = useState(!cookies_info);
  const [getCheckboxGroup, setCheckboxGroup]: any = useState(
    cookies_info || []
  );
  const itemCheckbox = (res: any, index: number) => {
    return (
      <Flex sx={{ position: "relative" }} key={index}>
        <Checkbox size="lg" fontSize="12px" value={res.val}>
          {res.label}
        </Checkbox>
        <Tooltip label={res.des} hasArrow shouldWrapChildren>
          <MyIcon icon="" fontSize="15px" color="#ccc" />
        </Tooltip>
      </Flex>
    );
  };
  const items = [
    {
      label: <FormattedMessage id="home.cookies.1" />,
      val: "strictly",
      des: <FormattedMessage id="home.cookies.2" />,
    },
    {
      label: <FormattedMessage id="home.cookies.3" />,
      val: "functional",
      des: <FormattedMessage id="home.cookies.4" />,
    },
    {
      label: <FormattedMessage id="home.cookies.5" />,
      val: "performance",
      des: <FormattedMessage id="home.cookies.6" />,
    },
    {
      label: <FormattedMessage id="home.cookies.7" />,
      val: "targeting",
      des: <FormattedMessage id="home.cookies.8" />,
    },
  ];
  return (
    <>
      {getShow ? (
        <Flex className="footer-fs-c" sx={styles.FsC}>
          <MyContent
            w={{ base: "100%", sm: "100%", md: "900px", lg: "1270px" }}
          >
            <Flex
              sx={styles.CloseButton}
              onClick={() => {
                setShow(false);
                console.log(1);
              }}
            >
              <CloseButton />
            </Flex>
            <Flex
              flexWrap={{ base: "wrap", sm: "wrap", md: "unset", lg: "unset" }}
              alignItems="center"
              position="relative"
              px={6}
            >
              <Flex pr={10} w={{ base: "100%", sm: "100%" }}>
                <Text sx={styles.bannerText}>
                  <FormattedMessage id="home.cookies.9" />
                  <a href="#">
                    <FormattedMessage id="home.cookies.10" />
                  </a>
                  <FormattedMessage id="home.cookies.17" />
                  <a href="#" onClick={onOpen}>
                    <FormattedMessage id="home.cookies.11" />
                  </a>
                </Text>
              </Flex>
              <Flex
                w={{ base: "100%", sm: "100%" }}
                pt={{ base: "1rem", sm: "1rem", md: "1rem" }}
                justifyContent="flex-end"
              >
                <Flex pr={4}>
                  <Button variant="link" onClick={onOpen}>
                    <FormattedMessage id="home.cookies.11" />
                  </Button>
                </Flex>
                <PrimaryButton
                  variant="primary"
                  onClick={() => {
                    localStorage.setItem(
                      "cookies",
                      JSON.stringify(["strictly", "functional", "targeting"])
                    );
                    setShow(false);
                  }}
                >
                  <FormattedMessage id="home.cookies.12" />
                </PrimaryButton>
              </Flex>
            </Flex>
          </MyContent>
        </Flex>
      ) : (
        ""
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent sx={{ width: "650px", maxWidth: "650px" }}>
          <ModalHeader>
            <FormattedMessage id="home.cookies.13" />
          </ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <Flex>
              <FormattedMessage id="home.cookies.14" />
            </Flex>
            <Flex pt={5} pb={3}>
              <FormattedMessage id="home.cookies.15" />
            </Flex>
            <Flex>
              <CheckboxGroup
                defaultValue={getCheckboxGroup}
                onChange={(e: any) => {
                  localStorage.setItem("cookies", JSON.stringify(e));
                  setCheckboxGroup(e);
                  console.log(e, "slllsllls");
                }}
              >
                <SimpleGrid columns={2} spacingX="5px" spacingY="10px">
                  {items.map((res: any, index: number) => {
                    return itemCheckbox(res, index);
                  })}
                </SimpleGrid>
              </CheckboxGroup>
            </Flex>
            <Flex w="full" pt={7} pb={5}>
              <PrimaryButton
                w="full"
                h="50px"
                borderRadius="4px"
                onClick={() => {
                  onClose();
                  setShow(false);
                }}
              >
                <FormattedMessage id="home.cookies.16" />
              </PrimaryButton>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
