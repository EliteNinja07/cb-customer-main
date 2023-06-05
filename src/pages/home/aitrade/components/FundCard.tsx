import { Flex, Avatar, Text } from "@chakra-ui/react";
import {
  EmptyButton,
  MyCard,
  TextBody,
  TextHeadLine,
} from "../../../../common";

export default () => {
  return (
    <MyCard w="270px">
      <EmptyButton>
        <Flex flexDir="column" w="full" p="4">
          <Flex align="center">
            <Avatar src="/img/logos/metamask.svg" w="40px" h="40px" mr="3" />
            <Flex flexDir="column">
              <TextHeadLine>META</TextHeadLine>
              <TextBody>META Lock-up ...</TextBody>
            </Flex>
          </Flex>
          <Flex justify="space-between" mt="5">
            <Flex flexDir="column">
              <Text color="#098551">150%</Text>
              <TextBody>ARY</TextBody>
            </Flex>
            <Flex flexDir="column" align="end">
              <TextHeadLine>14 days</TextHeadLine>
              <TextBody>Investment Term</TextBody>
            </Flex>
          </Flex>
        </Flex>
      </EmptyButton>
    </MyCard>
  );
};
