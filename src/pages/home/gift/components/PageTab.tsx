import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useIntl } from "react-intl";

const styles = {
  TabTd: {
    borderBottom: "1px solid #b2b2b238",
    paddingTop: "1.5rem",
    cursor: "pointer",
    "&:nth-child(2)": {
      borderRight: "1px solid #b2b2b238",
      borderLeft: "1px solid #b2b2b238",
    },
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
    "&:nth-child(2)": {
      borderRight: "1px solid #b2b2b238",
      borderLeft: "1px solid #b2b2b238",
    },
  },
};
export default ({ idx = 0, onChange }: any) => {
  const [getTabIdx, setTabIdx] = useState(idx);
  const intl = useIntl();
  const items = [
    intl.formatMessage({ id: "text.SendGift" }),
    intl.formatMessage({ id: "text.ExchangeAirdrop" }),
  ];
  return (
    <Flex w="full">
      {items.map((res: any, index: number) => {
        return (
          <Flex
            key={`tab_${index}`}
            w="full"
            py="1.3rem"
            fontSize="1.1rem"
            textAlign="center"
            sx={index == getTabIdx ? styles.TabTdActive : styles.TabTd}
            onClick={() => {
              onChange(index);
              setTabIdx(index);
            }}
          >
            <Text
              w="full"
              fontWeight="var(--cds-fontWeights-medium)"
              sx={{ "white-space": "nowrap" }}
            >
              {res}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};
