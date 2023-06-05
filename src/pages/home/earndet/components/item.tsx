import { Flex, Text, Tooltip } from "@chakra-ui/react";
import { MyIcon } from "../../../../common";

const styles = {
  itemsTitle: {
    fontSize: "1.2rem",
    fontWeight: "400",
  },
  itemsVal: {
    fontSize: "1rem",
    fontWeight: 400,
    padding: "0.2rem 0",
  },
};

export default ({ label, desc, val, other }: any) => {
  return (
    <Flex flexDir="column" sx={{ position: "relative" }}>
      <Flex alignItems="center">
        <Text sx={styles.itemsTitle} pr={2}>
          {label}
        </Text>
        <Tooltip label={desc} hasArrow placement="right" shouldWrapChildren>
          <MyIcon icon="" w="17px" color="#999" h="17px" fontSize="1rem" />
        </Tooltip>
      </Flex>
      <Text sx={styles.itemsVal}>{val}</Text>
      <Text color="#098551" fontSize="0.8rem">
        {other ? other : ""}
      </Text>
    </Flex>
  );
};
