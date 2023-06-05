import { useColorMode } from "@chakra-ui/react";
import { lightTheme, darkTheme } from "@rainbow-me/rainbowkit";
import { useState, useEffect } from "react";

export function useChakraTheme() {
  const [theme, setTheme] = useState(() => lightTheme());
  const { colorMode } = useColorMode();

  useEffect(() => {
    // console.log("colorMode", colorMode);
    setTheme(colorMode === "light" ? lightTheme() : darkTheme());
  }, [colorMode]);

  return { theme };
}
