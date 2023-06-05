import {
  Flex,
  Text,
  Image,
  useColorModeValue,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import MoneyImg from "../../../../assets/images/usdc.svg";
import { FormattedMessage } from "react-intl";
import React from "react";
import { MyCard, PrimaryButton, request, useMyToast } from "../../../../common";

const styles = {
  MyCardC1: {
    "&:before": {
      border: "1px dashed #60646975",
      background: "#f8fafe",
    },
    "&:after": {
      border: "1px dashed #60646975",
      background: "#f8fafe",
    },
  },
  MyCardC2: {
    "&:before": {
      background: "#000",
      border: "1px dashed #60646975",
    },
    "&:after": {
      background: "#000",
      border: "1px dashed #60646975",
    },
  },
  CardIcon: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    filter: {
      base: "grayscale(50%)",
      sm: "grayscale(50%)",
      md: "grayscale(0%)",
      lg: "grayscale(0%)",
    },
    padding: { base: "0 10px", sm: "0 10px", md: "0 34px", lg: "0 34px" },
    opacity: { base: 0.3, sm: 0.3, md: 1, lg: 1 },
    alignItems: "center",
    justifyContent: { base: "right", sm: "right", md: "left", lg: "left" },
    zIndex: 1,
  },
  CardCont: {
    position: "relative",
    zIndex: 10,
    marginLeft: { base: 0, sm: 0, md: "100px", lg: "100px" },
    borderLeft: {
      base: "none",
      sm: "none",
      md: "1px dashed #60646975",
      lg: "1px dashed #60646975",
    },
    _dark: {
      borderLeft: {
        base: "none",
        sm: "none",
        md: "1px dashed #60646975",
        lg: "1px dashed #60646975",
      },
    },
  },
};
export default ({
  apis,
  keyIdx,
  des,
  icon,
  title,
  isDisabled = false,
  btnname = "",
  val,
}: any) => {
  const getTheme = useColorModeValue(styles.MyCardC1, styles.MyCardC2);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = React.useRef();
  const { showRes } = useMyToast();
  const api = {
    onUnLock: () => {
      request("bonus/un_lock_all", {})
        .then((res: any) => {
          if (res.code == 0) {
            // apis.list();
            apis.getRightItems();
            apis.getTableList();
            onClose();
          }
        })
        .catch(showRes);
    },
  };
  const onFunction = () => {
    if (keyIdx == "5") {
      onOpen();
    }
  };
  return (
    <MyCard className="card_items_c" mb={4} sx={getTheme} alignItems="center">
      <>
        <Flex sx={styles.CardIcon} className="card-icon-c">
          <Image src={icon} w="40px" h="40px" />
        </Flex>
        <Flex
          flexDir="column"
          my="6px"
          py={1}
          className="card-cont-r-c"
          sx={styles.CardCont}
        >
          <Text color="#989898" fontSize="15px" px={4}>
            {title}
          </Text>
          <Flex alignItems="center" px={4} py={0}>
            <Image
              boxSize={{ base: "18px", sm: "18px", md: "22px", lg: "22px" }}
              mr={1}
              src={MoneyImg}
            />
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize={{
                base: "1.2rem",
                sm: "1.2rem",
                md: "1.7rem",
                lg: "1.7rem",
              }}
            >
              {val}
            </Text>
          </Flex>
          {des ? (
            <Text color="#989898" fontSize="0.75rem" px={4}>
              {des}
            </Text>
          ) : (
            <Flex px={4} pb={1}>
              <PrimaryButton
                isDisabled={isDisabled}
                w="80px"
                h="30px"
                fontSize="15px"
                py={0}
                px={0}
                onClick={onFunction}
              >
                {btnname}
              </PrimaryButton>
            </Flex>
          )}
        </Flex>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                <FormattedMessage id="text.UnlockAll" />
              </AlertDialogHeader>
              <AlertDialogBody>
                <FormattedMessage id="text.UnlockAll" />
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button colorScheme="messenger" onClick={api?.onUnLock} ml={3}>
                  <FormattedMessage id="text.Yes" />
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    </MyCard>
  );
};
