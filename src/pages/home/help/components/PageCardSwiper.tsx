import { Flex, Image, Text } from "@chakra-ui/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import MyCardNavigation from "../../../../assets/images/help/cardNavigation.svg";
import MyLearningRewardsNavigation from "../../../../assets/images/help/learningRewardsNavigation.svg";
import MyProappIcon from "../../../../assets/images/help/ProAppIcon.svg";
import MyWallet from "../../../../assets/images/help/wallet.svg";
import USDCoinUSDC from "../../../../assets/images/usdc.svg";
import CoinbaseEarn from "../../../../assets/images/earnNavigation.svg";
import Dapps from "../../../../assets/images/dapps.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const styles = {
  ProductC: {
    position: "relative",
    display: "block",
  },
  SlideC: {
    border: "1px solid var(--cds-colors-chakra-border-color)",
    borderRadius: "8px",
    height: "236px",
    color: "#135",
    _dark: {
      color: "#fff",
    },
  },
};
export default () => {
  const [getResizeStatus, setResizeStatus] = useState<any>(4);
  const resizeUpdate = () => {
    console.log("229sii");
    if (document.body.clientWidth < 800) {
      setResizeStatus(1);
    } else if (
      document.body.clientWidth < 1000 &&
      document.body.clientWidth > 800
    ) {
      setResizeStatus(2);
    } else if (document.body.clientWidth > 1000) {
      setResizeStatus(4);
    }
  };
  useEffect(() => {
    resizeUpdate();
    window.addEventListener("resize", resizeUpdate);
    return () => {
      window.removeEventListener("resize", resizeUpdate);
    };
  }, []);
  return (
    <Flex sx={styles.ProductC} w="full" py={5}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={35}
        slidesPerView={getResizeStatus}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ height: "300px" }}
      >
        <SwiperSlide>
          <Link to="/home/help/Ai-trade">
            <Flex
              sx={styles.SlideC}
              alignItems="center"
              textAlign="center"
              flexDir="column"
            >
              <Flex pt={8}>
                <Image w="48px" src={MyProappIcon} />
              </Flex>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                w="full"
                fontSize="1.3rem"
                py={2}
              >
                Ai trade
              </Text>
              <Text w="80%" color="#5b616e" fontSize="0.9rem">
                One-click smart automated cryptocurrency trading
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/home/help/wallet">
            <Flex
              sx={styles.SlideC}
              alignItems="center"
              textAlign="center"
              flexDir="column"
            >
              <Flex pt={8}>
                <Image w="48px" src={MyWallet} />
              </Flex>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                w="full"
                fontSize="1.3rem"
                py={2}
              >
                Wallet
              </Text>
              <Text w="80%" color="#5b616e" fontSize="0.9rem">
                An app to send/receive crypto, and access dapps
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>

        {/*<SwiperSlide>*/}
        {/*  <Flex*/}
        {/*    sx={styles.SlideC}*/}
        {/*    alignItems="center"*/}
        {/*    textAlign="center"*/}
        {/*    flexDir="column"*/}
        {/*  >*/}
        {/*    <Flex pt={8}>*/}
        {/*      <Image w="48px" src={MyNftNavigation} />*/}
        {/*    </Flex>*/}
        {/*    <Text*/}
        {/*      fontWeight="var(--cds-fontWeights-medium)"*/}
        {/*      w="full"*/}
        {/*      fontSize="1.3rem"*/}
        {/*      py={2}*/}
        {/*    >*/}
        {/*      NFT*/}
        {/*    </Text>*/}
        {/*    <Text w="80%" color="#5b616e" fontSize="0.9rem">*/}
        {/*      Create and collect NFTs*/}
        {/*    </Text>*/}
        {/*  </Flex>*/}
        {/*</SwiperSlide>*/}

        <SwiperSlide>
          <Link to="/home/help/Learning-rewards">
            <Flex
              sx={styles.SlideC}
              alignItems="center"
              textAlign="center"
              flexDir="column"
            >
              <Flex pt={8}>
                <Image w="48px" src={MyLearningRewardsNavigation} />
              </Flex>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                w="full"
                fontSize="1.3rem"
                py={2}
              >
                Learning Rewards
              </Text>
              <Text w="80%" color="#5b616e" fontSize="0.9rem">
                Get rewarded and earn crypto while learning about crypto
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/home/help/coinbase-card-for-the-us">
            <Flex
              sx={styles.SlideC}
              alignItems="center"
              textAlign="center"
              flexDir="column"
            >
              <Flex pt={8}>
                <Image w="48px" src={MyCardNavigation} />
              </Flex>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                w="full"
                fontSize="1.3rem"
                py={2}
              >
                Coinbase Card
              </Text>
              <Text w="80%" color="#5b616e" fontSize="0.9rem">
                Spend crypto, earn rypto rewards
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/home/help/What-is-USD-Coin">
            <Flex
              sx={styles.SlideC}
              alignItems="center"
              textAlign="center"
              flexDir="column"
            >
              <Flex pt={8}>
                <Image w="48px" src={USDCoinUSDC} />
              </Flex>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                w="full"
                fontSize="1.3rem"
                py={2}
              >
                USD Coin (USDC)
              </Text>
              <Text w="80%" color="#5b616e" fontSize="0.9rem">
                Crypto with a stable price crypto rewards
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/home/help/trading-and-funding#Coinbaseearn">
            <Flex
              sx={styles.SlideC}
              alignItems="center"
              textAlign="center"
              flexDir="column"
            >
              <Flex pt={8}>
                <Image w="48px" src={CoinbaseEarn} />
              </Flex>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                w="full"
                fontSize="1.3rem"
                py={2}
              >
                Coinbase Earn
              </Text>
              <Text w="80%" color="#5b616e" fontSize="0.9rem">
                Coinbase Earn
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/home/help/Dapps">
            <Flex
              sx={styles.SlideC}
              alignItems="center"
              textAlign="center"
              flexDir="column"
            >
              <Flex pt={8}>
                <Image w="48px" src={Dapps} />
              </Flex>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                w="full"
                fontSize="1.3rem"
                py={2}
              >
                Dapps
              </Text>
              <Text w="80%" color="#5b616e" fontSize="0.9rem">
                Learn more about decentralized apps
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
        {/*<SwiperSlide>*/}
        {/*  <Flex*/}
        {/*      sx={styles.SlideC}*/}
        {/*      alignItems="center"*/}
        {/*      textAlign="center"*/}
        {/*      flexDir="column"*/}
        {/*  >*/}
        {/*    <Flex pt={8}>*/}
        {/*      <Image w="48px" src={Commerce} />*/}
        {/*    </Flex>*/}
        {/*    <Text*/}
        {/*        fontWeight="var(--cds-fontWeights-medium)"*/}
        {/*        w="full"*/}
        {/*        fontSize="1.3rem"*/}
        {/*        py={2}*/}
        {/*    >*/}
        {/*      Commerce*/}
        {/*    </Text>*/}
        {/*    <Text w="80%" color="#5b616e" fontSize="0.9rem">*/}
        {/*      Coinbase Commerce for merchants and customers*/}
        {/*    </Text>*/}
        {/*  </Flex>*/}

        {/*</SwiperSlide>*/}
        {/*<SwiperSlide>*/}
        {/*  <Flex*/}
        {/*      sx={styles.SlideC}*/}
        {/*      alignItems="center"*/}
        {/*      textAlign="center"*/}
        {/*      flexDir="column"*/}
        {/*  >*/}
        {/*    <Flex pt={8}>*/}
        {/*      <Image w="48px" src={Cloud} />*/}
        {/*    </Flex>*/}
        {/*    <Text*/}
        {/*        fontWeight="var(--cds-fontWeights-medium)"*/}
        {/*        w="full"*/}
        {/*        fontSize="1.3rem"*/}
        {/*        py={2}*/}
        {/*    >*/}
        {/*      Cloud*/}
        {/*    </Text>*/}
        {/*    <Text w="80%" color="#5b616e" fontSize="0.9rem">*/}
        {/*      Build the future of web3*/}
        {/*    </Text>*/}
        {/*  </Flex>*/}

        {/*</SwiperSlide>*/}
        {/*<SwiperSlide>*/}
        {/*  <Flex*/}
        {/*      sx={styles.SlideC}*/}
        {/*      alignItems="center"*/}
        {/*      textAlign="center"*/}
        {/*      flexDir="column"*/}
        {/*  >*/}
        {/*    <Flex pt={8}>*/}
        {/*      <Image w="48px" src={Node} />*/}
        {/*    </Flex>*/}
        {/*    <Text*/}
        {/*        fontWeight="var(--cds-fontWeights-medium)"*/}
        {/*        w="full"*/}
        {/*        fontSize="1.3rem"*/}
        {/*        py={2}*/}
        {/*    >*/}
        {/*      Node*/}
        {/*    </Text>*/}
        {/*    <Text w="80%" color="#5b616e" fontSize="0.9rem">*/}
        {/*      Get instant and reliable read/write access to blockchains*/}
        {/*    </Text>*/}
        {/*  </Flex>*/}

        {/*</SwiperSlide>*/}
      </Swiper>
    </Flex>
  );
};
