import MyEth3DSvg from "../../assets/images/eth3D1.svg";
import MyPagethreesvg1 from "../../assets/images/pagethreesvg1.svg";
import MyPagethreesvg2 from "../../assets/images/pagethreesvg2.svg";
import MyPagethreesvg3 from "../../assets/images/pagethreesvg3.svg";
import MyPagethreesvg4 from "../../assets/images/pagethreesvg4.svg";
import MyPagethreesvg5 from "../../assets/images/pagethreesvg5.svg";
import MyPagethreesvg6 from "../../assets/images/pagethreesvg6.svg";
import { MyContent } from "../../common";
import { FormattedMessage } from "react-intl";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "./scss/three.scss";
const styles = {
  ThreeTextLogo: {
    padding: "0 0.35em",
    backgroundColor: "#57b4fc",
    color: "#fff",
    borderRadius: "0.5em 0",
    margin: "0 0.6rem",
    fontWeight: 400,
    // letterSpacing: "0.1em",
  },
  whatIntro: {
    position: "relative",
    zIndex: 6,
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "16px",
    textAlign: "center",
  },
  what: {
    position: "relative",
    display: "flex",
    h: "440px",
    mt: "170px",
    mb: "170px",
    pb: "0px",
    alignItems: "flex-end",
  },
  openIcons: {
    position: "absolute",
    left: "auto",
    top: "-15px",
    right: "-15px",
    bottom: "auto",
    zIndex: 10,
    display: "flex",
    w: "30px",
    h: "30px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "#57b4fc",
    transition:
      "background-color 200ms ease, transform 500ms cubic-bezier(0.23, 1, 0.32, 1)",
    cursor: "pointer",
  },
  blurBg: {
    position: "absolute",
    left: "0%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    zIndex: 3,
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    backgroundColor: "#a3a3a31f",
    backdropFilter: "blur(5px)",
  },
};
const getList = [
  {
    y: [0, -60, "easeOutQuad"],
    x: [-48, -140, "easeOutQuad"],
    class: "what-item _1",
    title: <FormattedMessage id="home.three.1" />,
    des: <FormattedMessage id="home.three.2" />,
    img: <Image src={MyPagethreesvg1} alt="" />,
    show: false,
  },
  {
    y: "",
    x: [-48, -140, "easeOutQuad"],
    class: "what-item _2",
    title: <FormattedMessage id="home.three.3" />,
    des: <FormattedMessage id="home.three.4" />,
    img: <Image src={MyPagethreesvg2} alt="" />,
    show: false,
  },
  {
    y: [0, 60, "easeOutQuad"],
    x: [-48, -140, "easeOutQuad"],
    class: "what-item _3",
    title: <FormattedMessage id="home.three.5" />,
    des: <FormattedMessage id="home.three.6" />,
    img: <Image src={MyPagethreesvg3} alt="" />,
    show: false,
  },
  {
    y: [0, -60, "easeOutQuad"],
    x: [28, 140, "easeOutQuad"],
    class: "what-item _4",
    title: <FormattedMessage id="home.three.7" />,
    des: <FormattedMessage id="home.three.8" />,
    img: <Image src={MyPagethreesvg4} alt="" />,
    show: false,
  },
  {
    y: "",
    x: [28, 140, "easeOutQuad"],
    class: "what-item _5",
    title: <FormattedMessage id="home.three.9" />,
    des: <FormattedMessage id="home.three.10" />,
    img: <Image src={MyPagethreesvg5} alt="" />,
    show: false,
  },
  {
    y: [0, 60, "easeOutQuad"],
    x: [28, 140, "easeOutQuad"],
    class: "what-item _6",
    title: <FormattedMessage id="home.three.11" />,
    des: <FormattedMessage id="home.three.12" />,
    img: <Image src={MyPagethreesvg6} alt="" />,
    show: false,
  },
];

export default function PageThree() {
  const [getDisabled, setDisabled] = useState(document.body.clientWidth < 1000);
  const resizeUpdate = (e: any) => {
    if (e.target.innerWidth < 1000) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", resizeUpdate);
    return () => {
      window.removeEventListener("resize", resizeUpdate);
    };
  }, []);
  const thre_item = (items: any, index: number) => {
    const [getStates, setStates] = useState(false);
    return (
      <Parallax
        key={`items_three_${index}`}
        translateX={items.x}
        translateY={items.y}
        className={getStates ? `${items.class} items_open` : `${items.class}`}
        disabled={getDisabled}
        onClick={() => {
          setStates(!getStates);
          console.log(items, "2");
        }}
      >
        <Flex sx={styles.whatIntro}>
          {items.img}
          <Text pt={3}>{items.title}</Text>
        </Flex>
        <Flex className="what-description">
          <Text fontSize="14px" lineHeight="1.3em" h="55px" m="0 auto">
            {items.des}
          </Text>
        </Flex>

        <Flex sx={styles.blurBg}></Flex>
        <Flex
          sx={styles.openIcons}
          style={getStates ? { backgroundColor: "rgb(0, 82, 255,1)" } : {}}
        >
          <Flex
            w="16px"
            h="3px"
            borderRadius="5px"
            backgroundColor="#fff"
          ></Flex>
          {!getStates ? (
            <Flex
              w="16px"
              h="3px"
              borderRadius="5px"
              backgroundColor="#fff"
              position="absolute"
              transform="rotate(90deg)"
            ></Flex>
          ) : (
            ""
          )}
        </Flex>
      </Parallax>
    );
  };
  return (
    <Flex pt={{ base: "3rem", sm: "3rem", md: "7rem", lg: "7rem" }} pb="2rem">
      <MyContent w={{ base: "100%", sm: "100%", md: "900px", lg: "1270px" }}>
        <Flex
          w="full"
          textAlign="center"
          color="#0052ff"
          fontSize={{ base: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.2rem" }}
          justifyContent="center"
        >
          <Flex>
            <FormattedMessage id="home.three.13" />
            <Text color="#57b4fc" pl="0.5rem">
              (Ai trade)
            </Text>
          </Flex>
        </Flex>
        <Flex
          w="full"
          justifyContent="center"
          fontWeight="var(--cds-fontWeights-medium)"
          fontSize={{ base: "1.7rem", sm: "1.9rem", md: "3rem", lg: "3rem" }}
          py={{ base: 5, sm: 7, md: 10, lg: 10 }}
        >
          <FormattedMessage id="home.three.14" />
          <Text sx={styles.ThreeTextLogo}>Ai</Text>
          <Text fontWeight="200">trade</Text>?
        </Flex>
        <Text w="full" textAlign="center">
          <FormattedMessage
            id="home.three.15"
            values={{ name1: "Ai Trade", name2: "Coinbase" }}
          />
        </Text>
        <Flex justifyContent="center" px={{ base: 5, sm: 5, md: 0, lg: 0 }}>
          <Flex className="nft-what">
            <ParallaxProvider>
              <Parallax
                rotate={[0, 60]}
                scale={[1.3, 0.8, "easeOutQuad"]}
                disabled={getDisabled}
                className="what-item-bg-img"
              >
                <Image
                  src={MyEth3DSvg}
                  h="440px"
                  display="inline-block"
                  alt=""
                />
              </Parallax>
              {getList.map((res, index: number) => {
                return thre_item(res, index);
              })}
            </ParallaxProvider>
          </Flex>
        </Flex>
      </MyContent>
    </Flex>
  );
}
