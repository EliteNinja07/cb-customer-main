import MySixImg1 from "../../assets/images/easyToUse-1.svg";
import MySixImg3 from "../../assets/images/multipleAssets-1.svg";
import MySixImg2 from "../../assets/images/securityCoinShield-0.svg";
import { MyContent } from "../../common";
import { Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { FormattedMessage } from "react-intl";

const styles = {
  SixC: {
    backgroundColor: "#f6f8ff",
    p: { base: "4rem 1rem", sm: "4rem 1rem", md: "7rem 1rem", lg: "7rem 1rem" },
    _dark: { backgroundColor: "var(--cds-colors-gray-800)" },
  },
  cryptowork: {
    border: "1px solid var(--cds-colors-chakra-border-color)",
    boxShadow: "rgba(0, 0, 0, 0.02) 0px 8px 12px",
    h: { base: "", sm: "", md: "350px", lg: "350px" },
    mb: "1rem",
    p: "2.2rem",
    borderRadius: "6px",
  },
};

export default function PageSix() {
  const { openConnectModal } = useConnectModal();
  return (
    <Flex sx={styles.SixC} className="six-c">
      <MyContent w={{ base: "100%", sm: "100%", md: "900px", lg: "1270px" }}>
        <Text
          fontSize={{ base: "2rem", sm: "2rem", md: "2.8rem", lg: "2.8rem" }}
          fontWeight="var(--cds-fontWeights-medium)"
          lineHeight="2rem"
        >
          <FormattedMessage id="home.six.1" />
        </Text>
        <Text
          color="rgb(91, 97, 110)"
          fontSize={{ base: "1rem", sm: "1rem", md: "1.2rem", lg: "1.2rem" }}
          p="1.5rem 0 3rem 0"
          fontWeight="300"
        >
          <FormattedMessage id="home.six.2" />
        </Text>
        <SimpleGrid
          columns={3}
          spacing={15}
          display="flex"
          flexWrap={{ base: "wrap", sm: "wrap", md: "unset", lg: "unset" }}
        >
          <Flex flexDir="column" w="full">
            <Flex sx={styles.cryptowork} flexDir="column">
              <Flex>
                <Image w="80px" src={MySixImg1} alt="" />
              </Flex>
              <Text
                fontSize={{
                  base: "1.5rem",
                  sm: "1.5rem",
                  md: "1.5rem",
                  lg: "2rem",
                }}
                p={{
                  base: "1rem 0px 0.3rem 0",
                  sm: "1rem 0px 0.3rem 0",
                  md: "2rem 0px 0.3rem 0",
                  lg: "2rem 0px 0.3rem 0",
                }}
              >
                <FormattedMessage id="home.six.3" />
              </Text>
              <Text color="rgb(91, 97, 110)" sx={{ overflow: "hidden" }}>
                <FormattedMessage id="home.six.4" />
              </Text>
            </Flex>
          </Flex>

          <Flex flexDir="column" w="full">
            <Flex sx={styles.cryptowork} flexDir="column">
              <Flex>
                <Image w="80px" src={MySixImg2} alt="" />
              </Flex>
              <Text
                fontSize={{
                  base: "1.5rem",
                  sm: "1.5rem",
                  md: "1.5rem",
                  lg: "2rem",
                }}
                p={{
                  base: "1rem 0px 0.3rem 0",
                  sm: "1rem 0px 0.3rem 0",
                  md: "2rem 0px 0.3rem 0",
                  lg: "2rem 0px 0.3rem 0",
                }}
              >
                <FormattedMessage id="home.six.5" />
              </Text>
              <Text color="rgb(91, 97, 110)" sx={{ overflow: "hidden" }}>
                <FormattedMessage id="home.six.6" />
              </Text>
            </Flex>
          </Flex>

          <Flex flexDir="column" w="full">
            <Flex sx={styles.cryptowork} flexDir="column">
              <Flex>
                <Image w="80px" src={MySixImg3} alt="" />
              </Flex>
              <Text
                fontSize={{
                  base: "1.5rem",
                  sm: "1.5rem",
                  md: "1.5rem",
                  lg: "2rem",
                }}
                p={{
                  base: "1rem 0px 0.3rem 0",
                  sm: "1rem 0px 0.3rem 0",
                  md: "2rem 0px 0.3rem 0",
                  lg: "2rem 0px 0.3rem 0",
                }}
              >
                <FormattedMessage id="home.six.7" />
              </Text>
              <Text color="rgb(91, 97, 110)" sx={{ overflow: "hidden" }}>
                <FormattedMessage id="home.six.8" />
              </Text>
            </Flex>
          </Flex>
        </SimpleGrid>
        <Text color="rgb(91, 97, 110)" fontSize="0.8rem" pt="2rem">
          <FormattedMessage id="home.six.9" />
          <button
            onClick={openConnectModal}
            style={{ color: "#0d6efd", paddingLeft: "0.5rem" }}
          >
            <FormattedMessage id="home.six.10" />
          </button>
        </Text>
      </MyContent>
    </Flex>
  );
}
