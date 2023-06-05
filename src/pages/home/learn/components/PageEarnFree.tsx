import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Image, Text } from "@chakra-ui/react";
import MyEarnFull from "../../../../assets/images/earn-full.svg";
import { PrimaryButton } from "../../../../common";
export default ({ lang }: any) => {
  return (
    <Flex alignItems="center" py={5} flexWrap="wrap">
      <Flex
        flexDir="column"
        w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
      >
        <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="2rem">
          {lang?.footTitle}
        </Text>
        <Text pb={5}>{lang?.footDesc}</Text>
        <PrimaryButton w="170px" px={5} rightIcon={<ChevronRightIcon />}>
          {lang?.footBtn}
        </PrimaryButton>
      </Flex>
      <Flex
        w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
        mt={{ base: "24px", sm: "24px", md: 0, lg: 0 }}
      >
        <Image w="full" h="300px" objectFit="contain" src={MyEarnFull} />
      </Flex>
    </Flex>
  );
};
