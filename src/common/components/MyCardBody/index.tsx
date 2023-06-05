import { VStack } from "@chakra-ui/react";

export function MyCardBody({ children }: any) {
  return (
    <VStack
      sx={{
        w: "full",
        display: "flex",
        flexDir: "column",
        alignItems: "start",
      }}
      gap="0"
      spacing="0"
    >
      {children}
    </VStack>
  );
}
