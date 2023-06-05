import { Text, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

let items = ["1D", "1W", "1M", "1Y", "ALL"];

export default ({ onChange, defauleVal = 0 }: any) => {
  const [getIdx, setIdx] = useState(defauleVal);
  return (
    <SimpleGrid columns={5} spacing={8} fontSize="0.9rem" fontWeight="410">
      {items?.map((res: string, index: number) => {
        return (
          <Text
            key={`tabs_${index}`}
            sx={{ cursor: "pointer" }}
            color={index == getIdx ? "#0052ff" : "#333"}
            onClick={() => {
              setIdx(index);
              onChange(res);
            }}
          >
            {res}
          </Text>
        );
      })}
    </SimpleGrid>
  );
};
