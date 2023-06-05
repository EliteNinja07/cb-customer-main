import { Flex, List, ListItem, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const styles = {
  Fiexs: {
    position: "fixed",
    top: "100px",
    background: "#f2f2f2",
    _dark: { background: "#333" },
  },
  Relative: {
    position: "relative",
    top: "0",
    background: "#f2f2f2",
    _dark: { background: "#333" },
  },
};
export default ({ list }: any) => {
  const [getFixed, setFixed] = useState({});
  const onScroll = (e: any) => {
    if (e.target.documentElement.scrollTop > 300) {
      setFixed(styles.Fiexs);
    } else {
      setFixed(styles.Relative);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return (
    <WrapItem
      w="400px"
      sx={{ display: { base: "none", sm: "none", lg: "block" } }}
    >
      <Flex bg="#eef0f3" sx={getFixed} py="0.8rem" px="1.2rem">
        <List>
          {list?.map((res: any, index: number) => {
            return (
              <ListItem
                color="#5b616e"
                fontSize="1.2rem"
                key={`lists_${index}`}
                pb={2}
              >
                <Link to={res.idhref}>{res.label}</Link>
              </ListItem>
            );
          })}
        </List>
      </Flex>
    </WrapItem>
  );
};
