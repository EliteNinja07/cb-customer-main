import { Flex, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

const styles = {
  CompleteProcess: {
    borderRadius: "50px",
    backgroundColor: "#0052fc",
  },
};

export default ({ user }: any) => {
  return (
    <Flex w="full" flexDir="column">
      <Flex flexDir="column" pb={5} pt={2}>
        <Text
          fontWeight="var(--cds-fontWeights-medium)"
          color="#0064f9"
          fontSize="1.1rem"
          lineHeight="1.2rem"
        >
          {Math.round(user?.total_staking_usdc_amount)} USDC
        </Text>
        <Text color="#89909e" fontSize="0.78rem">
          <FormattedMessage id="vip.YourHadStaked" />
        </Text>
      </Flex>

      <Flex flexDir="column">
        <Text
          fontWeight="var(--cds-fontWeights-medium)"
          color="#0064f9"
          fontSize="1.1rem"
          lineHeight="1.2rem"
        >
          {Math.round(user?.next_level_need_stake)} USDC
        </Text>
        <Text color="#89909e" fontSize="0.78rem">
          <FormattedMessage id="vip.NextLevelNeedStake" />
        </Text>
      </Flex>

      <Flex pt={5}>
        <Flex flexDir="column">
          <Text
            fontWeight="var(--cds-fontWeights-medium)"
            color="#0064f9"
            fontSize="1.1rem"
            lineHeight="1.2rem"
          >
            {user?.level_up}%
          </Text>
          <Text color="#89909e" fontSize="0.78rem">
            <FormattedMessage id="vip.LevelUp" />
          </Text>
        </Flex>
        <Flex w="120px" h="30px" bg="#aaaaaa3b" borderRadius="50px" ml={5}>
          <Flex
            sx={styles.CompleteProcess}
            w={user?.level_up + "%"}
            h="100%"
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
