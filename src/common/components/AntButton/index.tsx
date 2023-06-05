import { Button } from "antd";
import { useNavigate } from "react-router";
import { useColorModeValue } from "@chakra-ui/react";

const styles = {
  defaultbtn: {
    backgroundColor: "#0052ff",
    border: "1px solid #0052ff",
    _active: {
      transform: "scale(0.96)",
    },
  },
  btnDark: {
    backgroundColor: "#3773f5",
    border: "1px solid #3773f5",
    color: "#000",
    _active: {
      transform: "scale(0.96)",
    },
  },
};

export function AntButton({ children, link, to, onClick, ...rest }: any) {
  const getThemeStatus = useColorModeValue(styles.defaultbtn, styles.btnDark);
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
    <Button style={getThemeStatus} onClick={onButtonClick} {...rest}>
      {children}
    </Button>
  );
}
