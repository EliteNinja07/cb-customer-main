import MyInviteIconSvg from "../../assets/images/InviteSvg.svg";
import { PrimaryButton, MyContent } from "../../common";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { FormattedMessage } from "react-intl";

const styles = {
  PageTwoInfo: {
    background: "url(/img/space.svg) no-repeat top right #f6f8ff",
    height: { base: "auto", sm: "auto", md: "375px", lg: "375px" },
    backgroundSize: {
      base: "100% auto",
      sm: "100% auto",
      md: "auto 100%",
      lg: "auto 100%",
    },
    _dark: {
      background:
        "url(/img/space.svg) no-repeat top right var(--cds-colors-gray-800)",
      backgroundSize: {
        base: "100% auto",
        sm: "100% auto",
        md: "auto 100%",
        lg: "auto 100%",
      },
    },
  },
};

export default function PageTwo() {
  const { openConnectModal } = useConnectModal();
  return (
    <Flex sx={styles.PageTwoInfo} py="2rem">
      <MyContent w={{ base: "100%", sm: "100%", md: "1000px", lg: "1270px" }}>
        <Flex
          flexDir="column"
          pr={{ base: 0, sm: 0, md: "450px", lg: "450px" }}
          pl="0.5rem"
          pt={{ base: "3rem", sm: "16rem", md: "0", lg: "0" }}
        >
          <Image
            maxW="160px"
            h="160px"
            margin={{ base: "0 auto", sm: "0 auto", md: "0", lg: "0" }}
            mt={{ base: "5rem", sm: "5rem", md: "0", lg: "0" }}
            src={MyInviteIconSvg}
          />
          <Text
            fontWeight="var(--cds-fontWeights-medium)"
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            fontSize={{ base: "1.6rem", sm: "1.8rem", md: "2rem", lg: "2rem" }}
            textAlign={{ base: "center", sm: "center", md: "left", lg: "left" }}
          >
            <FormattedMessage id="home.two.1" />
          </Text>
          <Text
            py={3}
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            textAlign={{ base: "center", sm: "center", md: "left", lg: "left" }}
          >
            <FormattedMessage id="home.two.2" values={{ name: "Coinbase" }} />
          </Text>
          <Flex
            justifyContent={{
              base: "center",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
            }}
          >
            <PrimaryButton onClick={openConnectModal}>
              <FormattedMessage id="home.two.3" />
            </PrimaryButton>
          </Flex>
        </Flex>
      </MyContent>
    </Flex>
  );
}
