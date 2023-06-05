import { Box, Flex } from "@chakra-ui/react";

export function EmptyButton({
  children,
  br = "0",
  border = "1px solid transparent",
  w = "auto",
  h = "auto",
  px = 0,
  py = 0,
  full = true,
  ...rest
}: any) {
  return (
    <Box
      as="button"
      sx={{
        m: 0,
        p: 0,
        overflow: "hidden",
        borderRadius: br,
        border: border,
        fontWeight: "var(--cds-fontWeights-medium)",
        w: full ? "full" : "auto",
      }}
      _light={{
        bg: "gray.0",
        _hover: { bg: "rgb(250, 250, 250)" },
        _active: { bg: "rgb(235, 235, 236)" },
      }}
      _dark={{
        bg: "gray.800",
        _hover: { bg: "rgb(15, 16, 18)" },
        _active: { bg: "rgb(30, 31, 32)" },
      }}
      {...rest}
    >
      <Flex w={w} h={h} px={px} py={py} justify="center" align="center">
        {children}
      </Flex>
    </Box>
  );
}
