import { Flex, Text, Highlight } from "@chakra-ui/react";
import { MyCard } from "../../../../common";
import AitradeLine from "../../../../components/AitradeLine";

export default ({ lang, LineData }: any) => {
  return (
    <MyCard flexDir="column" pt={6}>
      <Text color="#5b616e" px={6} fontSize="1.2rem">
        {lang?.title}
      </Text>
      <Text
        fontWeight="var(--cds-fontWeights-medium)"
        py={2}
        px={6}
        fontSize="2.3rem"
        lineHeight="2.6rem"
      >
        $256.52
      </Text>
      <Text color="#098551" px={6}>
        <Highlight query="All time" styles={{ color: "#000" }}>
          {`↗ $0.21 ${lang?.alltime}`}
        </Highlight>
      </Text>
      <Flex w="full">
        <AitradeLine data={LineData} />
      </Flex>
    </MyCard>
  );
};
