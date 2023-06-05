import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
const styles = {
  inputZ: {
    textAlign: "center",
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "4.5rem",
    _focus: {
      outline: "none",
      backgroundColor: "transparent",
      border: "none",
    },
  },
};
export default ({ onChange, defaultval, symbol = "USDC", ...rest }: any) => {
  const [wInput, setWInput] = useState(40);
  const [getScale, setScale] = useState(1);
  const handleChange = (val: any) => {
    onChange(val);
    setWInput(val > 0 ? val.length * 42 : 1 * 42);
    if (val && val.length > 4) {
      setScale(
        document.body.clientWidth < 600
          ? 1 - val.length / 30
          : 1 - val.length / 50
      );
    } else {
      setScale(1);
    }
  };
  useEffect(() => {
    handleChange(defaultval);
  }, [defaultval]);
  return (
    <Flex
      sx={{ transform: `scale(${getScale})`, padding: "2rem 0" }}
      justifyContent="center"
      alignItems="center"
    >
      <input
        type="number"
        style={{ width: `${wInput}px`, ...styles.inputZ }}
        onChange={(e: any) => {
          handleChange(e.target.value);
        }}
        {...rest}
      />
      <Text fontSize="1.6rem" pl={1}>
        {symbol}
      </Text>
    </Flex>
  );
};
