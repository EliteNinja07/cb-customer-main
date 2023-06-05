import { ChevronRightIcon } from "@chakra-ui/icons";
import { Avatar, Divider, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import MoneyImg from "../../../../assets/images/usdc.svg";
import { PrimaryButton } from "../../../../common";
import InputChange from "./InputChange";
const styles = {
  FormC: {
    border: "1px solid #b2b2b238",
    borderRadius: "8px",
  },
};
export default ({ lang, tag }: any) => {
  return (
    <Flex flexDir="column">
      <Flex
        justifyContent="center"
        alignItems="center"
        pt={8}
        pb={2}
        color="#0052ff"
      >
        <InputChange
          onChange={(val: number) => {
            console.log(val);
          }}
        />
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
          {tag}
        </Text>
      </Flex>
      <Flex
        mx={{ base: 1, sm: 1, md: 9, lg: 9 }}
        sx={styles.FormC}
        mt={6}
        flexDir="column"
      >
        <Flex
          alignItems="center"
          py="24px"
          px={{ base: 2, sm: 2, md: 4, lg: 4 }}
          color="#5b616e"
          w="full"
        >
          <Flex
            alignItems="center"
            w="140px"
            pl={{ base: 1, sm: 1, md: 3, lg: 3 }}
          >
            <Text
              pr={{ base: 2, sm: 2, md: 4, lg: 4 }}
              fontWeight="var(--cds-fontWeights-medium)"
              w={{ base: "85px", sm: "85px", md: "100px", lg: "100px" }}
            >
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
        <Flex
          alignItems="center"
          py="24px"
          px={{ base: 2, sm: 2, md: 4, lg: 4 }}
          color="#5b616e"
          w="full"
        >
          <Flex
            alignItems="center"
            w="140px"
            pl={{ base: 1, sm: 1, md: 3, lg: 3 }}
          >
            <Text
              pr={{ base: 2, sm: 2, md: 4, lg: 4 }}
              fontWeight="var(--cds-fontWeights-medium)"
              w={{ base: "85px", sm: "85px", md: "100px", lg: "100px" }}
            >
              {lang?.To}
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
          {lang?.continusBtn}
        </PrimaryButton>
      </Flex>
      <Flex alignItems="center" px={9} py={5} color="#5b616e">
        <Flex w="full">
          <Text>{lang?.USDCBalance}</Text>
        </Flex>
        <Flex w="full" textAlign="right">
          <Text w="full"> 0 USDC ≈ $0.00</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
