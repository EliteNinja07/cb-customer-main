const styles = {
  GettingRightFixed: {
    borderLeft: "1px solid #98989829",
    fontSize: "14px",
    position: "fixed",
    top: "100px",
  },
  GettingRightRel: {
    borderLeft: "1px solid #98989829",
    fontSize: "14px",
    position: "relative",
    top: "0",
  },
  CellLink: {
    color: "#050f19",
    borderLeft: "4px solid #fff",
    padding: "0.35rem 0 0.35rem 1rem",
    _dark: {
      color: "#fff",
      borderLeft: "4px solid #000",
    },
  },
  RAcives: {
    borderLeft: "4px solid #1652f0",
    color: "#1652f0",
    padding: "0.35rem 0 0.35rem 1rem",
    fontWeight: "410",
  },
};
import { useState, useEffect } from "react";
import { Flex, Link } from "@chakra-ui/react";
export default ({ list }: any) => {
  const [getFixed, setFixed] = useState<any>(styles.GettingRightRel);
  const [getIdx, setIdx] = useState(0);
  const onScroll = (e: any) => {
    if (document.body.clientWidth > 768) {
      if (e.target.documentElement.scrollTop > 100) {
        setFixed(styles.GettingRightFixed);
      } else {
        setFixed(styles.GettingRightRel);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return (
    <div style={getFixed}>
      {list?.map((res: any, index: number) => {
        return (
          <Flex
            w="90%"
            fontSize="1.1rem"
            sx={index == getIdx ? styles.RAcives : styles.CellLink}
            onClick={() => {
              setIdx(index);
            }}
          >
            <Link href={res.href}>{res.label}</Link>
          </Flex>
        );
      })}
    </div>
  );
};
