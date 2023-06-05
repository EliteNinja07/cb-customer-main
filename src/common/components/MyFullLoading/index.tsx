import { Flex, Portal, Spinner } from "@chakra-ui/react";

export function MyFullLoading() {
  return (
    <Portal>
      <Flex
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "99999",
        }}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="line"
          color="blue.60"
          size="xl"
        />
      </Flex>
    </Portal>
  );
}
