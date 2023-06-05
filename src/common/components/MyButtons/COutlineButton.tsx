import { MyButton, MyButtonPropsType } from "../..";

export function COutlineButton({
  variant = "outline",
  px,
  py,
  children,
  ...rest
}: MyButtonPropsType) {
  return (
    <MyButton
      px={px}
      py={py}
      sx={{
        borderColor: "#0052ff",
        borderRadius: "100px",
        _light: {
          color: "#0052ff",
        },
        _dark: {
          color: "gray.0",
        },
        _hover: { bg: "#fff" },
        _active: {
          transform: "scale(0.96)",
        },
      }}
      variant={variant}
      {...rest}
    >
      {children}
    </MyButton>
  );
}
