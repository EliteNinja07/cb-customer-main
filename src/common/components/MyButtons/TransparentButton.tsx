import { Box } from "@chakra-ui/react";

export function TransparentButton({
  children,
  br = "full",
  w = "auto",
  h = "40px",
  px = 8,
  border = "1px solid transparent",
  ...rest
}: any) {
  return (
    <Box
      as="button"
      sx={{
        w: w,
        h: h,
        lineHeight: h,
        px: px,
        borderRadius: br,
        textAlign: "center",
        verticalAlign: "middle",
        whiteSpace: "nowrap",
        WebkitAppearance: "none",
        appearance: "none",
        textTransform: "none",
        outline: "0",
        justifyContent: "center",
        alignItems: "center",
        margin: "0",
        fontWeight: "var(--cds-fontWeights-medium)",
        display: "inline-flex",
        position: "relative",
        overflow: "visible",
        cursor: "pointer",
        userSelect: "none",
        border: border,
      }}
      _light={{
        bg: "gray.5",
        color: "gray.99",
        _hover: { bg: "rgb(233, 235, 238)" },
        _active: { bg: "rgb(220, 222, 225)" },
      }}
      _dark={{
        bg: "gray.60",
        color: "gray.5",
        _hover: { bg: "rgb(233, 235, 238)" },
        _active: { bg: "rgb(220, 222, 225)" },
      }}
      _active={{
        transform: "scale(0.98)",
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
