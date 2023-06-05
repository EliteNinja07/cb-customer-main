import { Text } from "@chakra-ui/react";

export function TextBody1({ children, ...rest }: any) {
  return (
    <Text
      sx={{
        fontSize: "14px",
        fontWeight: "400",
        textAlign: "start",
        transition: "color .15s ease-out,opacity .15s ease-out",
        m: 0,
        _light: {
          color: "gray.60",
        },
        _dark: {
          color: "gray.40",
        },
        ...rest,
      }}
    >
      {children}
    </Text>
  );
}
