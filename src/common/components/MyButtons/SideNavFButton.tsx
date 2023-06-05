import { Flex, Text } from "@chakra-ui/react";
import { MyButton, MyIcon } from "../..";

const styles = {
  ButtonOn: {
    w: "100%",
    h: "auto",
    borderRadius: "full",
    cursor: "pointer",
    fontSize: "16px",
    textDecoration: "none",
    transition: "color 0.25s ease 0s",
    pos: "relative",
    p: 0,
    transform: "scale(1)",
    border: "1px solid transparent",
    _light: {
      color: "blue.60",
      _hover: { color: "#0052ff" },
      _active: {
        color: "#0052ff",
        transform: "scale(0.98)",
      },
    },
    _dark: {
      color: "blue.40",
      _hover: { color: "#0052ff" },
      _active: {
        color: "#fff",
        opacity: 0.92,
        transform: "scale(0.98)",
      },
    },
  },
  ButtonOff: {
    w: "100%",
    h: "auto",
    borderRadius: "full",
    cursor: "pointer",
    fontSize: "16px",
    textDecoration: "none",
    transition: "color 0.25s ease 0s",
    pos: "relative",
    p: 0,
    transform: "scale(1)",
    border: "1px solid transparent",
    _light: {
      color: "gray.99",
      _hover: { color: "#0052ff" },
      _active: {
        opacity: 0.92,
        transform: "scale(0.98)",
      },
    },
    _dark: {
      color: "gray.0",
      bg: "transparent",
      _hover: { color: "#0052ff" },
      _active: {
        opacity: 0.92,
        transform: "scale(0.98)",
      },
    },
  },
  Container: {
    w: "100%",
    // justifyContent: {
    //   base: "center",
    //   sm: "center",
    //   md: "center",
    //   lg: "flex-start",
    // },
    flexDir: "row",
    alignItems: "center",
    py: "0.4rem",
    px: 2,
  },
  Title: {
    fontSize: "1rem",
    lineHeight: "24px",
    fontWeight: "600",
    fontFamily: "var(--cds-font-sans)",
    justifyContent: "start",
    // display: { base: "none", sm: "none", md: "none", lg: "block" },
  },
};

export function SideNavFButton({ link, icon, title, selected = false }: any) {
  return (
    <MyButton
      variant="sidebarOn"
      link={link}
      sx={selected ? styles.ButtonOn : styles.ButtonOff}
      pl={0}
    >
      <Flex sx={styles.Container}>
        <MyIcon icon={icon} />
        <Flex
          grow={0}
          w={1}
          sx={{
            display: { base: "none", sm: "none", md: "none", lg: "block" },
          }}
        ></Flex>
        <Text as="span" sx={styles.Title}>
          {title}
        </Text>
      </Flex>
    </MyButton>
  );
}
