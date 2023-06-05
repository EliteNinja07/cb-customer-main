import { Flex, Image, Text, Icon, Divider, Avatar } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { PrimaryButton } from "../../../../common";
import MoneyImg from "../../../../assets/images/usdc.svg";
import { FormattedMessage } from "react-intl";
const styles = {
  FormC: {
    border: "1px solid #b2b2b238",
    borderRadius: "8px",
  },
};
export default () => {
  return (
    <Flex flexDir="column">
      <Flex
        justifyContent="center"
        alignItems="center"
        pt={8}
        pb={2}
        color="#0052ff"
      >
        <Text fontWeight="400" fontSize="5rem">
          0
        </Text>
        <Text fontSize="1.6rem" pt={6} pl={1}>
          USDC
        </Text>
      </Flex>
      <Flex justifyContent="center">
        <Text
          color="#89909e"
          borderRadius="6px"
          border="1px solid #dedfe2"
          py={0.5}
          px={4}
          fontSize="1rem"
          bg="#f5f8ff"
        >
          <FormattedMessage id="text.Airdrop" />
        </Text>
      </Flex>
      <Flex mx={9} sx={styles.FormC} mt={6} flexDir="column">
        <Flex alignItems="center" py="24px" px={4} color="#5b616e" w="full">
          <Flex alignItems="center" w="140px" pl={3}>
            <Text pr={4} fontWeight="410" w="100px">
              <FormattedMessage id="text.PayWith" />
            </Text>
            <Image borderRadius="full" w="30px" h="30px" src={MoneyImg} />
          </Flex>
          <Flex flex="1" pl={3}>
            <Text>USD Coin</Text>
          </Flex>
          <Icon fontSize="30px" as={ChevronRightIcon} />
        </Flex>
        <Divider />
        <Flex alignItems="center" py="24px" px={4} color="#5b616e" w="full">
          <Flex alignItems="center" w="140px" pl={3}>
            <Text pr={4} fontWeight="var(--cds-fontWeights-medium)" w="100px">
              To
            </Text>
            <Avatar w="30px" h="30px" src="https://bit.ly/sage-adebayo" />
          </Flex>
          <Flex flex="1" pl={3}>
            <Text>Your name</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex mx={9} pt={5}>
        <PrimaryButton w="full" h="50px">
          Continue
        </PrimaryButton>
      </Flex>
      <Flex alignItems="center" px={9} py={5} color="#5b616e">
        <Flex w="full">
          <Text>USDC balance</Text>
        </Flex>
        <Flex w="full" textAlign="right">
          <Text w="full"> 0 USDC ≈ $0.00</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
