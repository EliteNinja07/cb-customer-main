import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  Image,
  Select,
  Switch,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router";
import { useSetState } from "react-use";
import {
  MyCard,
  MyNewAlertProps,
  request,
  stateActions,
  useMyToast,
} from "../../../../../common";
import MyTooltip from "../TheTooltip";

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
    padding: "0 34px",
    alignItems: "center",
    zIndex: 1,
  },
  CardCont: {
    position: "relative",
    zIndex: 10,
    width: "full",
    marginLeft: "100px",
    borderLeft: "1px dashed #60646975",
  },
  _dark: {
    borderLeft: "1px dashed #60646975",
  },
};
export default ({ toolt, icon, title, field, user, api }: any) => {
  const { showRes } = useMyToast();
  const [getMessageInfo, setMessageInfo] = useState<any>();
  let automatic_withdrawal_amount = 30;
  const navigate = useNavigate();
  const getTheme = useColorModeValue(styles.MyCardC1, styles.MyCardC2);
  const intl = useIntl();

  const [alertState, setAlertState] = useSetState<MyNewAlertProps>({
    message: "message",
    description: intl.formatMessage({ id: "text.Description" }),
    cancelText: intl.formatMessage({ id: "text.Cancel" }),
    confirmText: intl.formatMessage({ id: "text.Confirm" }),
    link: undefined,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();

  const [value, setValue] = useState(() =>
    field === "can_automatic_trade" ? "1" : user?.[field]?.toString()
  );

  useEffect(() => {
    setValue(field === "can_automatic_trade" ? "1" : user?.[field]?.toString());
  }, [user]);

  const doRequest = (data: any) => {
    request("ai_trade/setting", { data: data })
      .then((res) => {
        showRes(res);
        setValue(data?.value);
        stateActions.me();
        api.onShow();
        api.onGetTableList();
        onClose();
      })
      .catch((res) => {
        setValue(data?.value === "0" ? "1" : "0");

        switch (res.code) {
          case 10004:
            setAlertState({
              message: res.message,
              description: "description",
              cancelText: intl.formatMessage({ id: "text.Cancel" }),
              confirmText: intl.formatMessage({
                id: "trade.alert.LookVIPRules",
              }),
              link: "/home/vip",
            });
            onOpen();
            break;
          case 10005:
            setAlertState({
              message: res.message,
              description: "description",
              cancelText: intl.formatMessage({ id: "text.Cancel" }),
              confirmText: intl.formatMessage({
                id: "trade.alert.GoToVerityIdentity",
              }),
              link: "/home/settings/identity",
            });
            onOpen();
            break;
          case 10008:
            setAlertState({
              message: res.message,
              description: "description",
              cancelText: intl.formatMessage({ id: "text.Cancel" }),
              confirmText: intl.formatMessage({
                id: "trade.alert.GoToVerityEmail",
              }),
              link: "/home/settings/email",
            });
            onOpen();
            break;
          case 10006:
          case 10007:
          default:
            break;
        }
        showRes(res);
      });
  };

  const MyMessageInfo = () => {
    return (
      <AlertDialogContent sx={{ zIndex: "2000 !important" }}>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          {alertState.message}
        </AlertDialogHeader>

        <AlertDialogBody>{alertState.description}</AlertDialogBody>

        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            {alertState.cancelText}
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              if (alertState.link && alertState.link !== "") {
                navigate(alertState.link);
                onClose();
              }
            }}
            ml={3}
          >
            {alertState.confirmText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    );
  };

  const MyLiquidation = () => {
    return (
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          {intl.formatMessage({ id: "trade.config.item10.title" })}
        </AlertDialogHeader>
        <Flex fontSize="1.2rem" textAlign="center" pl={6} alignItems="center">
          {intl.formatMessage({ id: "text.Amount" })}:
          <AlertDialogBody>
            <Select
              fontSize="1.2rem"
              textAlign="center"
              // defaultValue={automatic_withdrawal_amount}
              defaultValue={automatic_withdrawal_amount}
              size="sm"
              onChange={(e: any) => {
                console.log(e.target.value, "e.target.value");
                automatic_withdrawal_amount = parseInt(e.target.value);
              }}
            >
              <option value="30">30USDC</option>
              <option value="50">50USDC</option>
              <option value="100">100USDC</option>
              <option value="500">500USDC</option>
              <option value="1000">1000USDC</option>
            </Select>
          </AlertDialogBody>
        </Flex>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            {alertState.cancelText}
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              doRequest({
                key: field,
                value: value === "1" ? "0" : "1",
                automatic_withdrawal_amount: automatic_withdrawal_amount,
              });
            }}
            ml={3}
          >
            {alertState.confirmText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    );
  };

  if (user) {
    return (
      <MyCard className="card_items_c" sx={getTheme} mb={4}>
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
          <Text
            fontWeight="var(--cds-fontWeights-medium)"
            fontSize="18px"
            px={4}
            py={3}
            h="60px"
            lineHeight="20px"
          >
            {title}
          </Text>
          <Flex py={2} px={4} justifyContent="space-between">
            <MyTooltip label={toolt} hasArrow placement="bottom">
              <Text color="#989898" fontSize="14px" flex="1">
                <FormattedMessage id="text.Detail" />
                {">"}
              </Text>
            </MyTooltip>
            <Flex>
              <Switch
                colorScheme="messenger"
                isChecked={value === "1"}
                onChange={() => {
                  //   setMessageInfo({ ch: MyMessageInfo() });
                  if (value === "1") {
                    doRequest({ key: field, value: value === "1" ? "0" : "1" });
                  } else {
                    setMessageInfo({ ch: MyLiquidation() }); // 弹出保护选择
                    onOpen();
                  }
                  //   doRequest(value === "1" ? "0" : "1");
                }}
              />
            </Flex>
          </Flex>
        </Flex>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          colorScheme="blue"
          isCentered
          size="sm"
        >
          <AlertDialogOverlay>{getMessageInfo?.ch}</AlertDialogOverlay>
        </AlertDialog>
      </MyCard>
    );
  } else {
    return <></>;
  }
};
