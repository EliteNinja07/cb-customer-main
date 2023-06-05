import { MyButton, MyButtonPropsType } from "../MyButton";

export function PrimaryButton({
  px = 6,
  py = 2,
  children,
  ...rest
}: MyButtonPropsType) {
  return (
    <MyButton

      borderRadius="full"
      px={px}
      py={py}
      fontWeight="var(--cds-fontWeights-medium)"
      sx={{
        _light: {
          bg: "blue.60",
          color: "gray.0",
          _hover: { bg: "rgb(1, 76, 236)" },
          _active: { bg: "rgb(1, 72, 221)" },
        },
        _dark: {
          bg: "rgb(55,115,245)",
          color: "gray.99",
          _hover: { bg: "rgb(71, 126, 246)" },
          _active: { bg: "rgb(83, 135, 246)" },
        },
        _active: {
          transform: "scale(0.96)",
        },
      }}
      {...rest}
    >
      {children}
    </MyButton>
  );
}
