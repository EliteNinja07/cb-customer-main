import { Box } from "@chakra-ui/react";

const styles = {
  TransitionerContainer: {
    position: "relative",
    flex: "1 1 0%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    transition: "none 0s ease 0s",
  },
  ModuleFadeFrame: {
    flex: "1 1 0%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    opacity: "1",
  },
};

export function MyTransitionerContainer({ children }: any) {
  return (
    <Box sx={styles.TransitionerContainer}>
      <Box sx={styles.ModuleFadeFrame}>{children}</Box>
    </Box>
  );
}
