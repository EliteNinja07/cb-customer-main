import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import global from "./global";

export function MyChakraProvider({ children }: any) {
  const theme = extendTheme({
    colors,
    styles: {
      global,
    },
    semanticTokens: {
      colors: {
        border: {
          default: "line",
          _dark: "lineDark",
        },
      },
    },
    config: {
      initialColorMode: "system",
      useSystemColorMode: true,
      cssVarPrefix: "cds",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
