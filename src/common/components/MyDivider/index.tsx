import { Box, Divider } from "@chakra-ui/react";

export function MyDivider({ px = 3, w = "1px", h = "32px", ...rest }: any) {
  return (
    <Box px={px}>
      <Divider orientation="vertical" sx={{ w: w, h: h }} {...rest} />
    </Box>
  );
}
