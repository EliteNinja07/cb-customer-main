import { Flex, Image, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import ReferImg from "../../assets/images/confirmEmail-0.svg";
import { PrimaryButton } from "../../common";
export default () => {
  return (
    <Flex flexDir="column">
      <Flex w="full" justifyContent="center" py={5} mt={6}>
        <Image w="190px" src={ReferImg} />
      </Flex>
      <Text
        px={1}
        w="full"
        sx={{
          fontSize: "1.5rem",
          fontWeight: "400",
          lineHeight: "1.9rem",
          textAlign: "center",
        }}
      >
        <FormattedMessage id="earn.verify.modal.title" />
      </Text>
      <Text
        px={1}
        py={3}
        sx={{
          width: { base: "80%", sm: "80%", md: "90%", lg: "90%" },
          lineHeight: "1.22rem",
          margin: "0 auto",
          fontSize: "0.9rem",
          textAlign: "center",
        }}
      >
        <FormattedMessage id="earn.verify.modal.intro" />
      </Text>
      <Flex justifyContent="center" pt={3} pb={7}>
        <PrimaryButton link="/home/settings/identity">
          <FormattedMessage id="earn.verify.modal.btn" />
        </PrimaryButton>
      </Flex>
    </Flex>
  );
};
