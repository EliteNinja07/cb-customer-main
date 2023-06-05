import { TextCardHeader, MyCard } from "../../../../common";
import { Flex } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

export default ({ des = {} }: any) => {
  return (
    <MyCard flexDir="column">
      <TextCardHeader>
        <FormattedMessage id="text.Overview" />
      </TextCardHeader>
      <Flex flexDir="column" px={6} pb={3}>
        {/* <Text color="#666">
          {lang?.des1}
        </Text> */}
        {/* <pre> {des[useIntlType() ? useIntlType() : "en"]}</pre> */}
        {/* <Text py={4} color="#666">
          {lang?.des2}
        </Text> */}
        <div
          dangerouslySetInnerHTML={{
            __html: des["en"],
          }}
        ></div>
      </Flex>
      {/* <Flex flexDir="column" px={6} py={2}>
        <Flex fontSize="1.1rem">{lang?.RESOURCES}</Flex>
        <Flex py={3} alignItems="center">
          <MyIcon icon="" w="20px" h="20px" fontSize="1rem" />
          <Text color="#0052ff" pl={2}>
            {lang?.Whitepaper}
          </Text>
        </Flex>
        <Flex alignItems="center" pb={5}>
          <MyIcon icon="" w="20px" h="20px" fontSize="1rem" />
          <Text color="#0052ff" pl={2}>
            {lang?.Offcial}
          </Text>
        </Flex>
      </Flex> */}
      {/* <Divider />
      <Flex py={4}>
        <Text w="full" textAlign="center">
          {lang?.more}
        </Text>
      </Flex> */}
    </MyCard>
  );
};
