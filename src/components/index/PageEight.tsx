import { MyContent } from "../../common";
import { Flex, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

const styles = {
  EightC: {
    backgroundColor: "#1652f0",
    color: "#fff",
  },
  EightContentsC: {
    flexWrap: { base: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap" },
  },
};

export default function PageEight({ data }: any) {
  return (
    <Flex sx={styles.EightC} py={10}>
      <MyContent w={{ base: "100%", sm: "100%", md: "900px", lg: "1270px" }}>
        <Flex gap={10} textAlign="center" sx={styles.EightContentsC}>
          <Flex flexDir="column" w="full">
            <Text fontSize="4rem">{data?.[0]}</Text>
            <Text fontSize="1.3rem">
              <FormattedMessage id="home.eight.1" />
            </Text>
          </Flex>
          <Flex flexDir="column" w="full">
            <Text fontSize="4rem">{data?.[1]}</Text>
            <Text fontSize="1.3rem">
              <FormattedMessage id="home.eight.2" />
            </Text>
          </Flex>
          <Flex flexDir="column" w="full">
            <Text fontSize="4rem">{data?.[2]}</Text>
            <Text fontSize="1.3rem">
              <FormattedMessage id="home.eight.3" />
            </Text>
          </Flex>
        </Flex>
      </MyContent>
    </Flex>
  );
}
