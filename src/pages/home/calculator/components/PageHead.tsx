import { TextCardHeader } from "../../../../common";
import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import calculatoricon from "../../../../assets/images/calculatoricon.svg";
import { FormattedMessage } from "react-intl";

const styles = {
  CalR: {
    width: {
      base: "100%",
      sm: "100%",
      md: "calc(100% - 182px)",
      lg: "calc(100% - 182px)",
    },
    padding: {
      base: "2rem 0 0 0",
      sm: "2rem 0 0 0",
      md: "0 2rem",
      lg: "0 2rem",
    },
  },
};

export default () => {
  return (
    <>
      <TextCardHeader>
        <FormattedMessage id="calc.title" />
      </TextCardHeader>
      <Divider />
      <Flex
        py={7}
        px="24px"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Image src={calculatoricon} w="110px" />
        <Flex sx={styles.CalR} flexDir="column">
          <Text fontWeight="410" fontSize="1.4rem">
            <FormattedMessage id="calc.label" />
          </Text>
          <Text fontSize="15px" lineHeight="1.2rem" color="#89909e">
            <FormattedMessage id="calc.desc" />
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
