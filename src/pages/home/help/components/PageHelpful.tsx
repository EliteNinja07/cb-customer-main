import { Flex, Text, Divider, Button } from "@chakra-ui/react";
export default () => {
  return (
    <Flex flexDir="column" my={8} justifyContent="center" py={5}>
      <Divider />
      <Text
        fontWeight="var(--cds-fontWeights-medium)"
        w="full"
        textAlign="center"
        pb={10}
        pt={12}
      >
        Was this article helpful?
      </Text>
      <Flex w="full" justifyContent="center" pb={10}>
        <Button colorScheme="gray" w="120px" variant="outline">
          Yes
        </Button>
        <Button colorScheme="gray" w="120px" variant="outline" ml={5}>
          No
        </Button>
      </Flex>
      <Divider />
    </Flex>
  );
};
