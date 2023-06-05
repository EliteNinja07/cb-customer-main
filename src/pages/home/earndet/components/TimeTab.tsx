import { Text, SimpleGrid } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

export default () => {
  return (
    <SimpleGrid columns={5} spacing={8} fontSize="0.9rem" fontWeight="410">
      <Text color="#0052ff">1H</Text>
      <Text>1D</Text>
      <Text>1W</Text>
      <Text>1Y</Text>
      <Text>
        <FormattedMessage id="text.ALL" />
      </Text>
    </SimpleGrid>
  );
};
