import { Flex, Portal, Spinner } from "@chakra-ui/react";
import { useMyState } from "../..";

export function MyLoading() {
  const { snap } = useMyState();

  return snap.session.count == 0 ? (
    <></>
  ) : (
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
          zIndex: "99999",
          paddingTop: "23%",
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
