import {
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { redirect } from "react-router";

export type MyNewAlertProps = {
  message?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  link?: string;
  onConfirm?: () => void;
};

export function MyNewAlert(props: MyNewAlertProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      colorScheme="blue"
      isCentered
      size="sm"
    >
      <AlertDialogOverlay>
        <AlertDialogContent sx={{ zIndex: "2000 !important" }}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {props.message}
          </AlertDialogHeader>

          <AlertDialogBody>{props.description}</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              {props.cancelText}
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                props.onConfirm?.();
                onClose();
                if (props.link && props.link !== "")
                  return redirect(props.link);
              }}
              ml={3}
            >
              {props.confirmText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
