import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { setGiftCode } from "../../../../common";
import { FormattedMessage } from "react-intl";

export default ({ api, lang }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = React.useRef();
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            <FormattedMessage id="RedEnvelope" />
          </AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogBody>
            <FormattedMessage id="RedEnvelopeRed" />
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              colorScheme="messenger"
              onClick={() => {
                const GiftCode = setGiftCode();
                api.onReceiveGift(GiftCode?.gift_code, function (st: any) {
                  if (st) {
                    onClose();
                  }
                });
              }}
              ml={3}
            >
              <FormattedMessage id="ReceiveBtn" />
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
