import { Flex } from "@chakra-ui/react";

export function MyContent({
  w = "100%",
  py = "24px",
  px = { base: 0, sm: 0, md: "24px", lg: "24px" },
  children,
}: any) {
  return (
    <Flex
      w={w}
      px={px}
      sx={{ margin: "0 auto", position: "relative" }}
      py={py}
      justifyContent="center"
      flexDir="column"
    >
      {children}
    </Flex>
  );
}
