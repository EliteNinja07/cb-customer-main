import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
export default ({ tdata, current, onChange }: any) => {
  return (
    <Flex justifyContent="center" pt={4} pb={7}>
      <Stack direction="row" spacing={4}>
        <Button
          size="sm"
          leftIcon={<ArrowBackIcon />}
          colorScheme="messenger"
          variant="outline"
          onClick={() =>
            onChange({
              page: current - 1,
            })
          }
          isDisabled={current == 0}
        >
          <FormattedMessage id="previous.page" />
        </Button>
        <Button
          size="sm"
          rightIcon={<ArrowForwardIcon />}
          colorScheme="messenger"
          variant="outline"
          onClick={() =>
            onChange({
              page: current + 1,
            })
          }
          isDisabled={current == tdata?.length - 1}
        >
          <FormattedMessage id="next.page" />
        </Button>
      </Stack>
    </Flex>
  );
};
