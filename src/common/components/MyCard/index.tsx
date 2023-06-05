import { Flex, FlexProps } from "@chakra-ui/react";

const styles = {
  Card: {
    width: "100%",
    border: "1px solid",
    _light: {
      bg: "gray.0",
      borderColor: "line",
    },
    _dark: {
      bg: "gray.99",
      borderColor: "lineDark",
    },
  },
};

export function MyCard({ children, ...rest }: FlexProps) {
  return (
    <div style={{ width: "100%" }}>
      <Flex borderRadius="8px" {...styles.Card} {...rest}>
        {children}
      </Flex>
    </div>
  );
}
