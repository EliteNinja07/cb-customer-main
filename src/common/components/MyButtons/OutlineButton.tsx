import { MyButton, MyButtonPropsType } from "../MyButton";

export function OutlineButton({
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
        border: "none",
        _light: {
          color: "#0052ff",
        },
        _dark: {
          color: "gray.0",
        },
        _hover: { bg: "none" },
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
