import { Flex, Text } from "@chakra-ui/react";
import { MyIcon } from "../../../../common";
export default ({ icon, title }: any) => {
  return (
    <Flex
      alignItems="center"
      sx={{
        color: "#135",
        _dark: {
          color: "#fff",
        },
      }}
      pt={5}
    >
      <MyIcon w="auto" icon={icon} />
      <Text pl={3} fontWeight="var(--cds-fontWeights-medium)" fontSize="1.8rem">
        {title}
      </Text>
    </Flex>
  );
};
