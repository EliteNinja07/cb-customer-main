import { Text } from "@chakra-ui/react";

export function TextHeadLine({ children, ...rest }: any) {
  return (
    <Text
      sx={{
        fontSize: "16px",
        fontWeight: "500",
        textAlign: "start",
        transition: "color .15s ease-out,opacity .15s ease-out",
        m: 0,
        _light: {
          color: "gray.99",
        },
        _dark: {
          color: "gray.0",
        },
        ...rest,
      }}
    >
      {children}
    </Text>
  );
}
