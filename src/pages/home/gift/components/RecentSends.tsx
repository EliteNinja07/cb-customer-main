import { Flex, Text, Heading } from "@chakra-ui/react";
import { MyIcon } from "../../../../common";

const styles = {
  IconsC: {
    width: "32px",
    height: "32px",
    borderRadius: "100px",
    border: "1px solid #b2b2b238",
  },
};

export default () => {
  return (
    <>
      <Flex px={6} alignItems="center" my={3} w="full">
        <Flex
          color="#5b616e"
          alignItems="center"
          justifyContent="center"
          sx={styles.IconsC}
        >
          <MyIcon icon="" fontSize="16px" />
        </Flex>
        <Flex flexDir="column" mx={4} w="calc(100% - 40px)">
          <Heading as="h6" size="xs" noOfLines={1}>
            0x6034Ad1244b398d583ac3C4C43ac3C4C40x6034Ad1244b398d583ac3C4C43ac3C4C4
          </Heading>
          <Text color="#89909e" fontSize="14px">
            Staking USDC on Sep 4
          </Text>
        </Flex>
      </Flex>

      <Flex px={6} alignItems="center" my={3} w="full">
        <Flex
          color="#5b616e"
          alignItems="center"
          justifyContent="center"
          sx={styles.IconsC}
        >
          <MyIcon icon="" fontSize="16px" />
        </Flex>
        <Flex flexDir="column" mx={4} w="calc(100% - 40px)">
          <Heading as="h6" w="full" size="xs" noOfLines={1}>
            0x6034Ad1244b398d583ac3C4C43ac3C4C40x6034Ad1244b398d583ac3C4C43ac3C4C4
          </Heading>
          <Text color="#89909e" fontSize="14px">
            Staking USDC on Sep 4
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
