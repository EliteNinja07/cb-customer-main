import { MyButton, MyButtonPropsType } from "../MyButton";

export function SecondaryButton({ children, ...rest }: MyButtonPropsType) {
  return (
    <>
      <MyButton
        sx={{
          borderRadius: "full",
          px: "6",
          py: "2",
          _light: {
            bg: "gray.5",
            color: "gray.99",
            _hover: { bg: "rgb(233, 235, 238)" },
            _active: { bg: "rgb(220, 222, 225)" },
          },
          _dark: {
            bg: "gray.80",
            color: "gray.0",
            _hover: { bg: "rgb(58, 61, 69)" },
            _active: { bg: "rgb(71, 73, 80)" },
          },
          _active: {
            transform: "scale(0.98)",
          },
        }}
        {...rest}
      >
        {children}
      </MyButton>
    </>
  );
}
