import { Flex, Text, Image } from "@chakra-ui/react";
import { PrimaryButton } from "../../../../common";
import MyFootIcon from "../../../../assets/images/footer-cta-icon.svg";

const styles = {
  footers: {
    backgroundColor: "#90909024",
    padding: "6rem 0",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "2rem",
    _dark: {
      backgroundColor: "#050f19",
    },
  },
};

export default () => {
  return (
    <Flex sx={styles.footers}>
      <Flex flexDir="column">
        <Flex justifyContent="center">
          <Image boxSize="55px" src={MyFootIcon} />
        </Flex>
        <Text
          fontWeight="var(--cds-fontWeights-medium)"
          py={12}
          fontSize="1.8rem"
        >
          Can't find what you're looking for?
        </Text>
        <PrimaryButton
          borderRadius="4px"
          w="327px"
          margin="0 auto"
          fontSize="14px"
          h="43px"
        >
          Contact us
        </PrimaryButton>
      </Flex>
    </Flex>
  );
};
