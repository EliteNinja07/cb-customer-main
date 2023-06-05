import MyIphone_img_2 from "../../assets/images/iphone-img-2.svg";
import MyIphone_img_21 from "../../assets/images/iphone-img-21.svg";
import MyIphone_img_3 from "../../assets/images/iphone-img-3.svg";
import MyIphone_img_31 from "../../assets/images/iphone-img-31.svg";
import MyIphone_img_4 from "../../assets/images/iphone-img-4.svg";
import MyIphone_img_41 from "../../assets/images/iphone-img-41.svg";
import MyIphone from "../../assets/images/iphone.svg";
import MyIphone1 from "../../assets/images/iphone1.svg";
import MyPolygon from "../../assets/images/polygon.svg";
import { MyContent, COutlineButton, PrimaryButton } from "../../common";
import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { FormattedMessage } from "react-intl";

const styles = {
  fourPageC: {
    _dark: { backgroundColor: "var(--cds-colors-black)" },
    height: { base: "auto", sm: "auto", md: "auto", lg: "100vh" },
    p: { base: "1.3rem 0", sm: "1.3rem 1rem", md: "1.3rem 1rem", lg: "0 1rem" },
  },
  TextLogo: {
    p: "0.3rem 0.7rem",
    backgroundColor: "#57b4fc",
    color: "#fff",
    borderRadius: "0.5em 0",
    fontWeight: 400,
    // letterSpacing: "0.1em",
    margin: "0 1rem",
  },
  phoneOverlay: {
    position: "absolute",
    left: "0%",
    right: "0%",
    zIndex: 3,
    bottom: "0",
    w: "250px",
    h: { base: "300px", sm: "300px", md: "300px", lg: "502px" },
    objectFit: "contain",
    overflow: "hidden",
    borderRadius: "20px",
  },
  getStartedGradient: {
    position: "absolute",
    zIndex: 1,
    w: { base: "129px", sm: "129px", md: "129px", lg: "165px" },
    maxWidth: "none",
    transform: "rotate(103deg)",
    left: "auto",
    top: "auto",
    right: { base: "-34px", sm: "-34px", md: "-34px", lg: "-100px" },
    bottom: { base: "46px", sm: "46px", md: "46px", lg: "33px" },
  },
  phoneScreens: {
    zIndex: 2,
    w: "250px",
    height: { base: "290px", sm: "290px", md: "290px", lg: "490px" },
    objectFit: "contain",
    overflow: "hidden",
    flex: "0 0 auto",
  },
  phoneScreensWrap: {
    position: "absolute",
    left: "0%",
    right: "2px",
    bottom: { base: "4px", sm: "4px", md: "4px", lg: "7px" },
    zIndex: 2,
    display: "flex",
    height: { base: "290px", sm: "290px", md: "290px", lg: "480px" },
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: "25px",
  },
  fourIphoneC: {
    position: "relative",
    w: "250px",
    h: { base: "300px", sm: "300px", md: "300px", lg: "500px" },
    borderRadius: "25px",
    transform: "rotate(5deg)",
  },
  hoLinkC: {
    display: "flex",
    width: "100%",
    height: "1px",
    marginBottom: "30px",
    justifyContent: "flex-start",
    backgroundColor: "rgb(225, 221, 234)",
    overflow: "hidden",
  },
  fourMaxTitle: {
    fontSize: { base: "26px", sm: "26px", md: "40px", lg: "50px" },
    justifyContent: { base: "center", sm: "center", md: "left", lg: "left" },
    lineHeight: "1.1em",
    fontWeight: "var(--cds-fontWeights-medium)",
    color: "#0052ff",
    pb: "3rem",
  },
};

export default function PageFive() {
  let group_btn_list = [
    <FormattedMessage id="home.five.Profitable" />,
    <FormattedMessage id="home.five.Controllable" />,
    <FormattedMessage id="home.five.Exchangeable" />,
  ];

  const { openConnectModal } = useConnectModal();
  //模式切换,不同手机图片
  const get_iphone = useColorModeValue(MyIphone, MyIphone1);
  const get_iphone_img_2 = useColorModeValue(MyIphone_img_2, MyIphone_img_21);
  const get_iphone_img_3 = useColorModeValue(MyIphone_img_3, MyIphone_img_31);
  const get_iphone_img_4 = useColorModeValue(MyIphone_img_4, MyIphone_img_41);
  //模式切换,不同手机图片
  let topnum = document.body.clientWidth < 1000 ? 290 : 490;
  const [getResizeStatus, setResizeStatus] = useState<any>(
    document.body.clientWidth > 1000
  );
  const [swiperInstance, setSwiperInstance] = useState<any>();
  const [getStep, setStep] = useState(0);
  const onScroll = (e: any) => {
    if (document.body.clientWidth > 1000) {
      if (e.target.documentElement.scrollTop < 3800) {
        setStep(0);
      }
      if (
        e.target.documentElement.scrollTop > 3800 &&
        e.target.documentElement.scrollTop < 4500
      ) {
        setStep(1);
      }
      if (e.target.documentElement.scrollTop > 4500) {
        setStep(2);
      }
    }
  };
  const resizeUpdate = (e: any) => {
    if (e.target.innerWidth < 1000) {
      topnum = 290;
      setResizeStatus(false);
    } else {
      topnum = 490;
      setResizeStatus(true);
    }
    // console.log(e.target.innerWidth, getResizeStatus, "innerWidth");
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", resizeUpdate);
    return () => {
      window.removeEventListener("resize", resizeUpdate);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <Controller>
        <Scene
          duration={getResizeStatus ? 2000 : 0}
          offset={document.body.clientHeight / 2}
          pin
          enabled={getResizeStatus}
        >
          <Flex sx={styles.fourPageC} alignItems="center">
            <MyContent
              w={{ base: "100%", sm: "100%", md: "900px", lg: "1270px" }}
            >
              <Flex sx={styles.fourMaxTitle} alignItems="center">
                <Text>
                  <FormattedMessage id="home.five.1" />
                </Text>
                <Text sx={styles.TextLogo}>Ai</Text>
                <Text color="#57b4fc" fontWeight="400">
                  trade
                </Text>
              </Flex>

              <Flex flexWrap="wrap" alignItems="center">
                <Flex
                  width={{ base: "100%", sm: "100%", md: "100%", lg: "55%" }}
                  order={{ base: "2", sm: "2", md: "2", lg: "1" }}
                  flexDir="column"
                >
                  <Flex
                    display={{
                      base: "flex !important",
                      sm: "flex !important",
                      md: "flex !important",
                      lg: "none !important",
                    }}
                    p={{ base: "3rem 0 1rem 0", sm: "3rem 0 1rem 0" }}
                    alignItems="center"
                  >
                    {group_btn_list.map((res: any, index: number) => {
                      return (
                        <COutlineButton
                          key={"group_b_" + index}
                          onClick={() => {
                            setStep(index);
                          }}
                          px={2}
                          h="32px"
                          fontSize="0.9rem"
                          ml={3}
                          _active={{ color: "#fff", bg: "#0d6efd" }}
                          _hover={{ bg: "#0d6efd", color: "white" }}
                          sx={
                            getStep === index
                              ? { color: "#fff", bg: "#0d6efd" }
                              : {}
                          }
                        >
                          {res}
                        </COutlineButton>
                      );
                    })}
                  </Flex>
                  {getStep === 0 ? (
                    <Timeline
                      target={
                        <Flex
                          flexDir="column"
                          px={{ base: 5, sm: 5, md: 0, lg: 0 }}
                        >
                          <Text
                            display={{
                              base: "none",
                              sm: "none",
                              md: "none",
                              lg: "block",
                            }}
                            color="#0d6efd"
                          >
                            <FormattedMessage id="home.five.Profitable" />
                          </Text>
                          <Text
                            fontSize={{
                              base: "1.6rem",
                              sm: "1.6rem",
                              md: "2rem",
                              lg: "2.6rem",
                            }}
                            pt={4}
                            pb={6}
                          >
                            <FormattedMessage id="home.five.2" />
                          </Text>

                          <Flex sx={styles.hoLinkC}>
                            <Flex
                              height="1px"
                              backgroundColor="#0d6efd"
                              w="33%"
                            ></Flex>
                          </Flex>
                          <Text
                            fontSize="16px"
                            lineHeight="1.4em"
                            fontWeight="400"
                            letterSpacing="0.3px"
                          >
                            <FormattedMessage
                              id="home.five.3"
                              values={{ name: "Ai Trade" }}
                            />
                          </Text>
                          <Flex
                            pt={{
                              base: "1rem",
                              sm: "1rem",
                              md: "1rem",
                              lg: "3rem",
                            }}
                          >
                            <PrimaryButton onClick={openConnectModal}>
                              <FormattedMessage id="text.LearnMore" />
                            </PrimaryButton>
                          </Flex>
                        </Flex>
                      }
                    >
                      <Tween
                        ease="Power3.easeOut"
                        from={{ x: "300px", y: "0", opacity: 0 }}
                      />
                      <Tween to={{ x: "0px", y: "0", opacity: 1 }} />
                    </Timeline>
                  ) : (
                    ""
                  )}
                  {getStep === 1 ? (
                    <Timeline
                      target={
                        <Flex
                          flexDir="column"
                          px={{ base: 5, sm: 5, md: 0, lg: 0 }}
                        >
                          <Text
                            display={{
                              base: "none",
                              sm: "none",
                              md: "none",
                              lg: "block",
                            }}
                            color="#0d6efd"
                          >
                            <FormattedMessage id="home.five.Controllable" />
                          </Text>
                          <Text
                            fontSize={{
                              base: "1.6rem",
                              sm: "1.6rem",
                              md: "2rem",
                              lg: "2.6rem",
                            }}
                            pt={4}
                            pb={6}
                          >
                            <FormattedMessage id="home.five.4" />
                          </Text>

                          <Flex sx={styles.hoLinkC}>
                            <Flex
                              height="1px"
                              backgroundColor="#0d6efd"
                              w="66%"
                            ></Flex>
                          </Flex>
                          <Text>
                            <FormattedMessage id="home.five.5" />
                          </Text>
                          <Flex
                            pt={{
                              base: "1rem",
                              sm: "1rem",
                              md: "1rem",
                              lg: "3rem",
                            }}
                          >
                            <PrimaryButton onClick={openConnectModal}>
                              <FormattedMessage id="text.LearnMore" />
                            </PrimaryButton>
                          </Flex>
                        </Flex>
                      }
                    >
                      <Tween
                        ease="Power3.easeOut"
                        from={{ x: "300px", y: "0", opacity: 0 }}
                      />
                      <Tween to={{ x: "0px", y: "0", opacity: 1 }} />
                    </Timeline>
                  ) : (
                    ""
                  )}
                  {getStep == 2 ? (
                    <Timeline
                      target={
                        <Flex
                          flexDir="column"
                          px={{ base: 5, sm: 5, md: 0, lg: 0 }}
                        >
                          <Text
                            display={{
                              base: "none",
                              sm: "none",
                              md: "none",
                              lg: "block",
                            }}
                            color="#0d6efd"
                          >
                            <FormattedMessage id="home.five.Exchangeable" />
                          </Text>
                          <Text
                            fontSize={{
                              base: "1.6rem",
                              sm: "1.6rem",
                              md: "2rem",
                              lg: "2.6rem",
                            }}
                            pt={4}
                            pb={6}
                          >
                            <FormattedMessage id="home.five.6" />
                          </Text>

                          <Flex sx={styles.hoLinkC}>
                            <Flex
                              height="1px"
                              backgroundColor="#0d6efd"
                              w="100%"
                            ></Flex>
                          </Flex>
                          <Text>
                            <FormattedMessage
                              id="home.five.7"
                              values={{ name: "Ai Trade" }}
                            />
                          </Text>
                          <Flex
                            pt={{
                              base: "1rem",
                              sm: "1rem",
                              md: "1rem",
                              lg: "3rem",
                            }}
                          >
                            <PrimaryButton onClick={openConnectModal}>
                              <FormattedMessage id="text.LearnMore" />
                            </PrimaryButton>
                          </Flex>
                        </Flex>
                      }
                    >
                      <Tween
                        ease="Power3.easeOut"
                        from={{ x: "300px", y: "0", opacity: 0 }}
                      />
                      <Tween to={{ x: "0px", y: "0", opacity: 1 }} />
                    </Timeline>
                  ) : (
                    ""
                  )}
                </Flex>

                <Flex
                  w={{ base: "100%", sm: "100%", md: "100%", lg: "45%" }}
                  position="relative"
                  order="1"
                  justifyContent="center"
                >
                  <Flex sx={styles.fourIphoneC}>
                    <Image
                      src={MyPolygon}
                      alt=""
                      sx={styles.getStartedGradient}
                    />
                    <Flex sx={styles.phoneScreensWrap}>
                      <Flex
                        w="100%"
                        position="relative"
                        display="block"
                        style={{
                          transition: "transform 0.8s",
                          willChange: "transform",
                          transform: `translateY(-${getStep * topnum}px)`,
                        }}
                      >
                        <Image
                          sx={styles.phoneScreens}
                          src={get_iphone_img_2}
                        />
                        <Image
                          sx={styles.phoneScreens}
                          src={get_iphone_img_3}
                        />
                        <Image
                          sx={styles.phoneScreens}
                          src={get_iphone_img_4}
                        />
                      </Flex>
                    </Flex>
                    <Image src={get_iphone} alt="" sx={styles.phoneOverlay} />
                  </Flex>
                </Flex>
              </Flex>
            </MyContent>
          </Flex>
        </Scene>
      </Controller>
    </>
  );
}
