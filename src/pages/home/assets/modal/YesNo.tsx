import { ModalFooter, Button } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { request, useMyToast } from "../../../../common";

export const YesNo = ({ params, onChange }: any) => {
  const { showRes } = useMyToast();
  const onSubmit = () => {
    request("assets/withdraw_to_staking", { data: params })
      .then((res: any) => {
        if (res.code == 0) {
          onChange();
        }
      })
      .catch(showRes);
  };
  return (
    <>
      {/* <ModalBody>
        <Text>Custom backdrop filters!</Text>
      </ModalBody> */}
      <ModalFooter>
        {/* <Button colorScheme="red" mr={2}>
          No
        </Button> */}
        <Button colorScheme="messenger" onClick={onSubmit}>
          <FormattedMessage id="text.Yes" />
        </Button>
      </ModalFooter>
    </>
  );
};
