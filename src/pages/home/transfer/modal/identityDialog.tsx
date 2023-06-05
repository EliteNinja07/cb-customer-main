import {
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router";

export default ({ message, onClose }: any) => {
  const navigate = useNavigate();
  return (
    <AlertDialogContent>
      <AlertDialogHeader fontSize="lg" fontWeight="bold">
        <FormattedMessage id="text.Authentication" />
      </AlertDialogHeader>
      <AlertDialogBody>{message?.message}</AlertDialogBody>
      <AlertDialogFooter>
        <Button
          ml={3}
          colorScheme="blue"
          onClick={() => {
            navigate("/home/settings/identity");
          }}
        >
          <FormattedMessage id="text.Certification" />
        </Button>
        <Button onClick={onClose} ml={2}>
          <FormattedMessage id="text.Cancel" />
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};
