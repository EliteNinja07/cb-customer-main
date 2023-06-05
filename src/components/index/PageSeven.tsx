import avatar9 from "../../assets/imgs/f451buE.png";
import avatar5 from "../../assets/imgs/HmMe8uB.jpg";
import avatar4 from "../../assets/imgs/KOlRlbth.jpg";
import avatar6 from "../../assets/imgs/Mz7e.jpg";
import avatar3 from "../../assets/imgs/nntcOZn.jpg";
import avatar2 from "../../assets/imgs/oKgMrGh.jpg";
import avatar8 from "../../assets/imgs/R3wcu.jpg";
import avatar from "../../assets/imgs/RLLrWZWm.jpg";
import avatar7 from "../../assets/imgs/uzrzys.jpg";
import avatar1 from "../../assets/imgs/vADYpIt.jpg";
import { MyContent } from "../../common";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { FormattedMessage } from "react-intl";
import "./scss/seven.scss";

const styles = {
  SecondOneTop: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 10,
    h: "100px",
    top: "0px",
    backgroundImage: "linear-gradient(180deg, #fff, hsla(0, 0%, 100%, 0))",
    _dark: {
      backgroundImage: "linear-gradient(180deg, #000, hsla(0, 0%, 100%, 0))",
    },
  },
  SecondOneBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 10,
    h: "100px",
    bottom: "0px",
    backgroundImage: "linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff)",
    _dark: {
      backgroundImage: "linear-gradient(180deg, hsla(0, 0%, 100%, 0), #000)",
    },
  },
  useDes: {
    pt: "1.1rem",
    color: "#495057",
    fontSize: "16px",
    lineHeight: "1.4em",
    fontWeight: "400",
    letterSpacing: "0.3px",
  },
  item: {
    w: "100%",
    mb: "1rem",
    borderRadius: "0 20px 20px",
    p: "20px",
    border: "1px solid rgb(0, 82, 255)",
  },
};

export default function PageSeven() {
  const [getOpen, setOpen] = useState(false);
  const [getResizeStatus, setResizeStatus] = useState<any>(
    document.body.clientWidth > 600 ? true : false
  );
  const resizeUpdate = (e: any) => {
    if (document.body.clientWidth > 600) {
      setResizeStatus(true);
    } else {
      setResizeStatus(false);
    }
  };
  useEffect(() => {
    setOpen(true);
    window.addEventListener("resize", resizeUpdate);
    return () => {
      window.removeEventListener("resize", resizeUpdate);
    };
  }, []);
  return (
    <Flex overflow="hidden" position="relative" padding="0" h="auto">
      <MyContent w={{ base: "100%", sm: "100%", md: "900px", lg: "1270px" }}>
        <Flex
          w="full"
          position="relative"
          flexWrap={{ base: "wrap", sm: "wrap", md: "unset", lg: "unset" }}
          display={{ base: "block", sm: "block", md: "block", lg: "flex" }}
          h={{ base: "730px", sm: "730px", md: "730px", lg: "630" }}
        >
          <Flex
            pl="1rem"
            w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
            flexDir="column"
          >
            <Text
              pt={{ base: "2rem", sm: "2rem", md: "2rem", lg: "8rem" }}
              color="#0052ff"
            >
              <FormattedMessage
                id="home.seven.1"
                values={{ name: "Ai Trade" }}
              />
            </Text>
            <Text
              fontSize={{
                base: "1.5rem",
                sm: "1.5rem",
                md: "2.5rem",
                lg: "3rem",
              }}
              fontWeight="var(--cds-fontWeights-medium)"
              pb="2rem"
            >
              <FormattedMessage
                id="home.seven.2"
                values={{ name: "Ai Trade" }}
              />
            </Text>
          </Flex>
          <Flex
            position="relative"
            overflow="hidden"
            flexWrap={{ base: "wrap", sm: "wrap", md: "unset", lg: "unset" }}
            w={{ base: "100%", sm: "100%", md: "", lg: "" }}
            flex="1"
            h={{ base: "520px", sm: "520px", md: "520px", lg: "100%" }}
          >
            <Flex sx={styles.SecondOneTop}></Flex>
            <Flex sx={styles.SecondOneBottom}></Flex>

            {getOpen ? (
              <ParallaxProvider>
                <Parallax
                  speed={40}
                  className="seven-items-c seven-items-two-c"
                >
                  <Flex flexDir="column">
                    <Flex sx={styles.item} flexDir="column">
                      <Flex alignItems="center">
                        <Flex>
                          <Image
                            w="60px"
                            h="60px"
                            borderRadius="100%"
                            src={avatar1}
                          />
                        </Flex>
                        <Flex pl="1rem" flexDir="column">
                          <Text
                            fontSize="1.2rem"
                            fontWeight="var(--cds-fontWeights-medium)"
                            lineHeight="1.4rem"
                          >
                            Norma Linda
                          </Text>
                          <Text
                            fontSize={{
                              base: "0.7rem",
                              sm: "0.7rem",
                              md: "0.8rem",
                              lg: "0.9rem",
                            }}
                          >
                            VIP1
                          </Text>
                        </Flex>
                      </Flex>
                      <Text sx={styles.useDes}>
                        “Ai trade is so simple to operate, it allows me to
                        easily earn high profits, it is too smart.”
                      </Text>
                    </Flex>
                    <Flex sx={styles.item} flexDir="column">
                      <Flex alignItems="center">
                        <Flex>
                          <Image
                            w="60px"
                            h="60px"
                            borderRadius="100%"
                            src={avatar3}
                          />
                        </Flex>
                        <Flex pl="1rem" flexDir="column">
                          <Text
                            fontSize="1.2rem"
                            fontWeight="var(--cds-fontWeights-medium)"
                            lineHeight="1.4rem"
                          >
                            北川景子
                          </Text>
                          <Text
                            fontSize={{
                              base: "0.7rem",
                              sm: "0.7rem",
                              md: "0.8rem",
                              lg: "0.9rem",
                            }}
                          >
                            VIP3
                          </Text>
                        </Flex>
                      </Flex>
                      <Text sx={styles.useDes}>
                        “普段は仕事に行く私にとって、Ai Trade
                        は、仕事中や休憩中に黙ってお金を稼ぐのに役立ちます。これは素晴らしいことです。”
                      </Text>
                    </Flex>
                    <Flex sx={styles.item} flexDir="column">
                      <Flex alignItems="center">
                        <Flex>
                          <Image
                            w="60px"
                            h="60px"
                            borderRadius="100%"
                            src={avatar4}
                          />
                        </Flex>
                        <Flex pl="1rem" flexDir="column">
                          <Text
                            fontSize="1.2rem"
                            fontWeight="500"
                            lineHeight="1.4rem"
                          >
                            Matthäus Wilson
                          </Text>
                          <Text
                            fontSize={{
                              base: "0.7rem",
                              sm: "0.7rem",
                              md: "0.8rem",
                              lg: "0.9rem",
                            }}
                          >
                            VIP5
                          </Text>
                        </Flex>
                      </Flex>
                      <Text sx={styles.useDes}>
                        "Wenn Sie denken, dass Sie sehr professionell sind, wird
                        Ihr Gewinn nicht so gut sein wie mit einem AI
                        trade-Roboter."
                      </Text>
                    </Flex>
                    <Flex sx={styles.item} flexDir="column">
                      <Flex alignItems="center">
                        <Flex>
                          <Image
                            w="60px"
                            h="60px"
                            borderRadius="100%"
                            src={avatar}
                          />
                        </Flex>
                        <Flex pl="1rem" flexDir="column">
                          <Text
                            fontSize="1.2rem"
                            fontWeight="500"
                            lineHeight="1.4rem"
                          >
                            劉財秀
                          </Text>
                          <Text
                            fontSize={{
                              base: "0.7rem",
                              sm: "0.7rem",
                              md: "0.8rem",
                              lg: "0.9rem",
                            }}
                          >
                            VIP2
                          </Text>
                        </Flex>
                      </Flex>
                      <Text sx={styles.useDes}>
                        “自從有了AI
                        交易，告別了一杯茶一個走勢圖坐一下午的悲慘經歷。”
                      </Text>
                    </Flex>
                    <Flex sx={styles.item} flexDir="column">
                      <Flex alignItems="center">
                        <Flex>
                          <Image
                            w="60px"
                            h="60px"
                            borderRadius="100%"
                            src={avatar6}
                          />
                        </Flex>
                        <Flex pl="1rem" flexDir="column">
                          <Text
                            fontSize="1.2rem"
                            fontWeight="500"
                            lineHeight="1.4rem"
                          >
                            한
                          </Text>
                          <Text
                            fontSize={{
                              base: "0.7rem",
                              sm: "0.7rem",
                              md: "0.8rem",
                              lg: "0.9rem",
                            }}
                          >
                            VIP3
                          </Text>
                        </Flex>
                      </Flex>
                      <Text sx={styles.useDes}>
                        “내 주변 친구들은 암호화폐에 투자하고 있지만 그들 중
                        누구도 돈을 벌기 위해 Ai Trade만큼 안정적이고 신뢰할 수
                        없습니다.”
                      </Text>
                    </Flex>
                    <Flex sx={styles.item} flexDir="column">
                      <Flex alignItems="center">
                        <Flex>
                          <Image
                            w="60px"
                            h="60px"
                            borderRadius="100%"
                            src={avatar7}
                          />
                        </Flex>
                        <Flex pl="1rem" flexDir="column">
                          <Text
                            fontSize="1.2rem"
                            fontWeight="500"
                            lineHeight="1.4rem"
                          >
                            मुंहफट
                          </Text>
                          <Text
                            fontSize={{
                              base: "0.7rem",
                              sm: "0.7rem",
                              md: "0.8rem",
                              lg: "0.9rem",
                            }}
                          >
                            VIP1
                          </Text>
                        </Flex>
                      </Flex>
                      <Text sx={styles.useDes}>
                        “यह आय मेरे बैंक जमा पर ब्याज से बहुत अधिक है, एआई ट्रेड
                        ने मुझे बहुत सारे आश्चर्य दिए हैं”
                      </Text>
                    </Flex>
                  </Flex>
                </Parallax>

                <Parallax
                  speed={-40}
                  className="seven-items-c seven-items-two-label-c"
                  style={
                    getResizeStatus ? { display: "block" } : { display: "none" }
                  }
                >
                  <Flex flexDir="column">
                    <Flex sx={styles.item} flexDir="column">
                      <Flex alignItems="center">
                        <Flex>
                          <Image
                            w="60px"
                            h="60px"
                            borderRadius="100%"
                            src={avatar9}
                          />
                        </Flex>
                        <Flex pl="1rem" flexDir="column">
                          <Text
                            fontSize="1.2rem"
                            fontWeight="500"
                            lineHeight="1.4rem"
                          >
                            Олёна Асеева
                          </Text>
                          <Text
                            fontSize={{
                              base: "0.7rem",
                              sm: "0.7rem",
                              md: "0.8rem",
                              lg: "0.9rem",
                            }}
                          >
                            VIP3
                          </Text>
                        </Flex>
                      </Flex>
                      <Text sx={styles.useDes}>
                        “Я использую только кошелек coinbase и доверяю только Ai
                        Trade для инвестирования. Пока вы внимательно изучите,
                        вы обнаружите, что это самый стабильный, безопасный и
                        прибыльный инвестиционный проект.”
                      </Text>
                    </Flex>
                    <Flex sx={styles.item} flexDir="column">
                      <Flex alignItems="center">
                        <Flex>
                          <Image
                            w="60px"
                            h="60px"
                            borderRadius="100%"
                            src={avatar5}
                          />
                        </Flex>
                        <Flex pl="1rem" flexDir="column">
                          <Text
                            fontSize="1.2rem"
                            fontWeight="500"
                            lineHeight="1.4rem"
                          >
                            Gloire makati
                          </Text>
                          <Text
                            fontSize={{
                              base: "0.7rem",
                              sm: "0.7rem",
                              md: "0.8rem",
                              lg: "0.9rem",
                            }}
                          >
                            VIP4
                          </Text>
                        </Flex>
                      </Flex>
                      <Text sx={styles.useDes}>
                        "C'est incroyable, juste besoin d'une opération simple,
                        laissez-moi dormir facilement et gagner de l'argent
                        facilement, AITrade est le top de tous les
                        investissements."
                      </Text>
                    </Flex>
                    <Flex sx={styles.item} flexDir="column">
                      <Flex alignItems="center">
                        <Flex>
                          <Image
                            w="60px"
                            h="60px"
                            borderRadius="100%"
                            src={avatar2}
                          />
                        </Flex>
                        <Flex pl="1rem" flexDir="column">
                          <Text
                            fontSize="1.2rem"
                            fontWeight="500"
                            lineHeight="1.4rem"
                          >
                            Nguyen Trang
                          </Text>
                          <Text
                            fontSize={{
                              base: "0.7rem",
                              sm: "0.7rem",
                              md: "0.8rem",
                              lg: "0.9rem",
                            }}
                          >
                            VIP3
                          </Text>
                        </Flex>
                      </Flex>
                      <Text sx={styles.useDes}>
                        “Không còn nghi ngờ gì nữa, AI Trade thực sự là giải
                        pháp tài chính an toàn và tiện lợi nhất mà tôi gặp
                        phải.”
                      </Text>
                    </Flex>
                    <Flex sx={styles.item} flexDir="column">
                      <Flex alignItems="center">
                        <Flex>
                          <Image
                            w="60px"
                            h="60px"
                            borderRadius="100%"
                            src={avatar8}
                          />
                        </Flex>
                        <Flex pl="1rem" flexDir="column">
                          <Text
                            fontSize="1.2rem"
                            fontWeight="500"
                            lineHeight="1.4rem"
                          >
                            Sukabumi
                          </Text>
                          <Text
                            fontSize={{
                              base: "0.7rem",
                              sm: "0.7rem",
                              md: "0.8rem",
                              lg: "0.9rem",
                            }}
                          >
                            VIP2
                          </Text>
                        </Flex>
                      </Flex>
                      <Text sx={styles.useDes}>
                        “Ai Trade tidak memerlukan pengetahuan khusus, Anda
                        dapat dengan mudah berinvestasi, sangat cerdas.”
                      </Text>
                    </Flex>
                  </Flex>
                </Parallax>
              </ParallaxProvider>
            ) : (
              ""
            )}
          </Flex>
        </Flex>
      </MyContent>
    </Flex>
  );
}
