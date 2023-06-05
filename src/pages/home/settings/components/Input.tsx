import { Flex, Input } from "@chakra-ui/react";
const styles = {
  InputC: {
    border: "1px solid #89909e",
    borderRadius: "8px",
    padding: "0 1rem",
  },
};
export default ({ ...field }: any) => {
  return (
    <Flex sx={styles.InputC} w="100%">
      <Input variant="unstyled" py={3} {...field} />
    </Flex>
  );
};
