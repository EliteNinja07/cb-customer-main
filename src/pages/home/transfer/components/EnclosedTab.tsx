import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useIntl } from "react-intl";

const styles = {
  active: {
    color: "#0052ff",
    backgroundColor: "#f5f8ff",
    fontSize: "14px",
    padding: "0.6rem 1rem",
    marginRight: "1rem",
    borderRadius: "100px",
    cursor: "pointer",
  },
  default: {
    color: "#666",
    fontSize: "14px",
    padding: "0.6rem 1rem",
    marginRight: "1rem",
    cursor: "pointer",
  },
};

export default ({ onChange }: any) => {
  const intl = useIntl();
  const [key, setKey] = useState("Withdrawal");
  const items = [
    { key: "Withdrawal", value: intl.formatMessage({ id: "text.Withdrawal" }) },
    { key: "Staking", value: intl.formatMessage({ id: "text.Staking" }) },
  ];

  return (
    <Flex fontSize="0.9rem" fontWeight="var(--cds-fontWeights-medium)">
      {items?.map((item: any) => {
        return (
          <Flex
            key={`tabs_${item.key}`}
            sx={item.key == key ? styles.active : styles.default}
            onClick={() => {
              setKey(item.key);
              onChange(item.key);
            }}
          >
            {item.value}
          </Flex>
        );
      })}
    </Flex>
  );
};
