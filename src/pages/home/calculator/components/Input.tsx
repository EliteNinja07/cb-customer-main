import { Flex, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

const styles = {
  InputC: {
    border: "1px solid #89909e",
    borderRadius: "8px",
  },
};
export default ({ ...field }: any) => {
  return (
    <Flex sx={styles.InputC}>
      <InputGroup>
        <InputLeftAddon
          children="$"
          sx={{ background: "none", border: "none" }}
        />
        <Input variant="unstyled" w="100%" py={2} {...field} />
      </InputGroup>
    </Flex>
  );
};
