import { Image, Flex, Text } from "@chakra-ui/react";
const styles = {
  CardC: {
    color: "#135",
    border: "1px solid var(--cds-colors-chakra-border-color)",
    borderRadius: "8px",
    _dark: {
      color: "#fff",
    },
  },
};
export default ({ icon, title, des }: any) => {
  return (
    <Flex flexDir="column" sx={styles.CardC} alignItems="center" py={6}>
      <Flex pt={5}>
        <Image boxSize="48px" src={icon} />
      </Flex>
      <Text pt={3} fontWeight="var(--cds-fontWeights-medium)" fontSize="1.4rem">
        {title}
      </Text>
      <Text fontSize="1.1rem" pb={6} pt={2} color="#5b616e">
        {des}
      </Text>
    </Flex>
  );
};
