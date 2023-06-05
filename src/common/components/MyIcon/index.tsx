import { Box, Flex } from "@chakra-ui/react";

export function MyIcon({
  icon,
  h = "40px",
  w = "40px",
  fontSize = "24px",
  ...rest
}: any) {
  return (
    <Flex sx={{ w: w, h: h }} justify="center" align="center">
      <Box
        as="span"
        sx={{
          fontSize: fontSize,
          fontVariant: "normal",
          textRendering: "auto",
          flexShrink: "0",
          fontFamily: "CoinbaseIcons",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "1",
          TextDecoration: "none",
          WebkitTextDecoration: "none",
          textDecoration: "none",
          display: "block",
          p: 0,
          m: 0,
        }}
        {...rest}
      >
        {icon}
      </Box>
    </Flex>
  );
}
