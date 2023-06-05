import { Text, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

const times = ["1D", "1M", "1W", "1Y", "ALL"];

export default ({ defaule = "1D", onChange }: any) => {
  const [getdefaule, setdefaule] = useState(defaule);

  return (
    <SimpleGrid columns={5} spacing={8} fontSize="0.9rem" fontWeight="410">
      {times?.map((res: any, index: number) => {
        return (
          <Text
            sx={{ cursor: "pointer" }}
            color={res == getdefaule ? "#0052ff" : ""}
            key={`tabs_${index}`}
            onClick={() => {
              setdefaule(res);
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
