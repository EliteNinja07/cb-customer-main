import { Flex, Textarea } from "@chakra-ui/react";

const styles = {
  InputC: {
    border: "1px solid #89909e",
    borderRadius: "8px",
    padding: "0 0.3rem 0.3rem 0",
  },
};
export default ({ ...field }: any) => {
  return (
    <Flex sx={styles.InputC} w="100%">
      <Textarea variant="unstyled" p={3} {...field} />
    </Flex>
  );
};
