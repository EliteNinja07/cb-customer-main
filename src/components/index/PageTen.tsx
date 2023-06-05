import learnlendSvg from "../../assets/images/coinbase-lend.svg";
import learnstakingSvg from "../../assets/images/Learn_Illustration_What_is_Staking.svg";
import { MyContent } from "../../common";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { FormattedMessage } from "react-intl";

const styles = {
  TenC: {
    backgroundColor: "#f6f8ff",
    p: "6rem 1rem",
    _dark: {
      backgroundColor: "var(--cds-colors-gray-800)",
    },
  },
};

export default function PageTen() {
  const { openConnectModal } = useConnectModal();
  return (
    <Flex sx={styles.TenC}>
      <MyContent w={{ base: "100%", sm: "100%", md: "900px", lg: "1270px" }}>
        <Text
          fontSize={{ base: "2rem", sm: "2rem", md: "2.6rem", lg: "2.6rem" }}
          fontWeight="var(--cds-fontWeights-medium)"
        >
          <FormattedMessage id="home.ten.1" />
        </Text>
        <Text
          fontSize={{ base: "1rem", sm: "1rem", md: "1.1rem", lg: "1.1rem" }}
          fontWeight="360"
          p="1rem 0px 2rem"
        >
          <FormattedMessage id="home.ten.2" />
        </Text>
        <Flex
          flexWrap={{ base: "wrap", sm: "wrap", md: "unset", lg: "unset" }}
          gap={10}
        >
          <Flex
            onClick={openConnectModal}
            w="100%"
            flexDirection="column"
            _hover={{ cursor: "pointer" }}
          >
            <Flex w="100%" overflow="hidden">
              <Image
                _hover={{
                  transform: "scale(1.05)",
                  opacity: 0.9,
                  transition: "transform 5s ease 0s",
                }}
                objectFit="cover"
                src={learnstakingSvg}
              />
            </Flex>
            <Text
              fontSize="1.6rem"
              py={3}
              fontWeight="400"
              _hover={{ color: "#0d6efd" }}
            >
              <FormattedMessage id="home.ten.3" />
            </Text>
            <Text color="#5b616e">
              <FormattedMessage id="home.ten.4" />
            </Text>
          </Flex>
          <Flex
            onClick={openConnectModal}
            w="100%"
            flexDirection="column"
            _hover={{ cursor: "pointer" }}
          >
            <Flex w="100%" overflow="hidden">
              <Image
                _hover={{
                  transform: "scale(1.05)",
                  opacity: 0.9,
                  transition: "transform 5s ease 0s",
                }}
                objectFit="cover"
                src={learnlendSvg}
              />
            </Flex>
            <Text
              fontSize="1.6rem"
              py={3}
              fontWeight="400"
              _hover={{ color: "#0d6efd" }}
            >
              <FormattedMessage id="home.ten.5" />
            </Text>
            <Text color="#5b616e">
              <FormattedMessage id="home.ten.6" />
            </Text>
          </Flex>
        </Flex>
      </MyContent>
    </Flex>
  );
}
