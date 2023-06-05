import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useIntl } from "react-intl";

const styles = {
  active: {
    color: "#0052ff",
    backgroundColor: "#f5f8ff",
    fontSize: { base: "0.6rem", sm: "0.6rem", md: "14px", lg: "14px" },
    padding: {
      base: "0.3rem 0.5rem",
      sm: "0.3rem 0.5rem",
      md: "0.6rem 1rem",
      lg: "0.6rem 1rem",
    },
    marginRight: "1rem",
    borderRadius: "100px",
    cursor: "pointer",
    _firstChild: {
      marginRight: "0",
    },
  },
  default: {
    color: "#666",
    fontSize: { base: "0.6rem", sm: "0.6rem", md: "14px", lg: "14px" },
    padding: {
      base: "0.3rem 0.5rem",
      sm: "0.3rem 0.5rem",
      md: "0.6rem 1rem",
      lg: "0.6rem 1rem",
    },
    marginRight: "1rem",
    cursor: "pointer",
    _firstChild: {
      marginRight: "0",
    },
    // "&:first-child": {
    //   marginRight: "0",
    // },
  },
};

export default ({ idx, onChange }: any) => {
  const [getIdxTab, setIdxTab] = useState(idx);
  const intl = useIntl();
  const TTabs = [
    intl.formatMessage({ id: "text.All" }),
    intl.formatMessage({ id: "text.Staking" }),
    intl.formatMessage({ id: "text.Withdrawable" }),
    intl.formatMessage({ id: "text.Pending" }),
    intl.formatMessage({ id: "text.Wallet" }),
  ];

  return (
    <Flex fontSize="0.9rem" fontWeight="410">
      {TTabs?.map((res: any, index: number) => {
        return (
          <Flex
            key={index}
            sx={index == getIdxTab ? styles.active : styles.default}
            onClick={() => {
              setIdxTab(index);
              onChange(index);
            }}
          >
            {res}
          </Flex>
        );
      })}
    </Flex>
  );
};
