import { Flex, Text } from "@chakra-ui/react";
const styles = {
  TabTd: {
    borderBottom: "1px solid #b2b2b238",
    paddingTop: "1.5rem",
    cursor: "pointer",
    _hover: {
      backgroundColor: "#f5f5f5",
      _dark: {
        backgroundColor: "#000",
      },
    },
  },
  TabTdActive: {
    cursor: "pointer",
    borderBottom: "none",
    borderTop: "3px solid #0052ff",
    color: "#0052ff",
  },
};

export default function Tabs({ value = "Withdrawal", items, onChange }: any) {
  return (
    <Flex w="full">
      {items?.map((item: any, index: number) => {
        return (
          <Flex
            key={`mtab_${item.value}`}
            w="full"
            py="1.3rem"
            fontSize="1.1rem"
            textAlign="center"
            className="tranTabDefault"
            sx={item.value == value ? styles.TabTdActive : styles.TabTd}
            onClick={() => {
              onChange(item.value, index);
            }}
          >
            <Text w="full" fontWeight="var(--cds-fontWeights-medium)">
              {item.label}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
}
