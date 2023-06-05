import { Button, ButtonProps } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export type MyButtonPropsType = {
  link?: string;
  to?: string;
  onClick?: () => void;
} & ButtonProps;

export function MyButton({
  children,
  link,
  to,
  onClick,
  ...rest
}: MyButtonPropsType) {
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (link) {
      navigate(link);
    } else if (to) {
      // 新窗口
    } else if (onClick) {
      onClick();
    }
  };
  return (
    <Button onClick={onButtonClick} {...rest}>
      {children}
    </Button>
  );
}
