import MyAppStoreSvg from "../../assets/images/AppStore.svg";
import Myeth3fImg from "../../assets/images/eth3d.svg";
import MyGoogleBadgeSvg from "../../assets/images/GoogleBadge.svg";
import MyBigbaby from "../../assets/images/htmlSvg1.svg";
import MyLinkImg from "../../assets/images/link.svg";
import MyRingImg from "../../assets/images/ring.svg";
import { MyContent } from "../../common";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { QRCodeSVG } from "qrcode.react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Typed from "react-typed";
import { FormattedMessage, useIntl } from "react-intl";

const styles = {
  qr_mobile_link_wrapper: {
    fontSize: "0.9rem",
    display: { base: "flex", sm: "none", md: "none", lg: "none" },
  },
  oneC: {
    margin: "0 auto",
    flexWrap: { base: "wrap", sm: "wrap", md: "unset", lg: "unset" },
  },
  iconA: {
    position: "absolute",
    left: { base: "-50px", sm: "-90px", md: "-90px", lg: "-120px" },
    top: { base: "-20px", sm: "-60px", md: "-60px", lg: "-60px" },
    right: "auto",
    bottom: "auto",
    zIndex: 5,
  },
  iconB: {
    position: "absolute",
    left: "auto",
    top: "120px",
    right: { base: "-3rem", sm: "-3rem", md: "-89px", lg: "-89px" },
    bottom: "auto",
    zIndex: 1,
  },
  iconC: {
    position: "absolute",
    left: { base: "-51px", sm: "-71px", md: "-71px", lg: "-71px" },
    top: "auto",
    right: "auto",
    bottom: { base: "-80px", sm: "-100px", md: "-100px", lg: "-100px" },
    zIndex: 12,
  },
  bluebg: {
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
  qrcode: {
    w: "100%",
    height: "410px",
    position: "relative",
    zIndex: 3,
    textAlign: "center",
  },
  qrtext: {
    pt: "30px",
    fontSize: "1.2rem",
    lineHeight: "1.9rem",
    fontWeight: "var(--cds-fontWeights-medium)",
  },
  qr: {
    position: "relative",
    zIndex: 2,
    w: { base: "80%", sm: "80%", md: "380px", lg: "380px" },
    m: { base: "2em auto", sm: "2em auto", md: "0", lg: "0" },
  },
  qrimg: {
    position: "relative",
    zIndex: 5,
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 1px 20px 0 rgb(0 0 0 / 10%)",
    w: { base: "150px", sm: "200px", md: "200px", lg: "200px" },
    h: { base: "150px", sm: "200px", md: "200px", lg: "200px" },
  },
  logoText: {
    color: "#fff",
    lineHeight: "1.3em",
    p: "0 0.3em",
    background: "#57b4fc",
    borderRadius: "0.5em 0",
    fontWeight: 300,
    // letterSpacing: "0.1em",
    fontSize: { base: "1.8rem", sm: "1.8rem", md: "2.4rem", lg: "3.1rem" },
  },
  typerWrapper: {
    minHeight: { base: "10.5rem", sm: "10.5rem", md: "13.5rem", lg: "15rem" },
    alignItems: "center",
    display: "block",
    backgroundImage: "linear-gradient(180deg, #57b4fc, #0052ff)",
    textAlign: { base: "center", sm: "center", md: "left", lg: "left" },
    fontSize: { base: "3rem", sm: "3.4rem", md: "4rem", lg: "4.5rem" },
    lineHeight: { base: "3.5rem", sm: "3.9rem", md: "4.5rem", lg: "5rem" },
    fontWeight: "var(--cds-fontWeights-semibold)",
    backgroundClip: "text",
    margin: "1rem 0",
  },
  qrCodeSvg: {
    width: { base: 150, sm: 150, md: 200, lg: 200 },
  },
};

export default function PageOne() {
  const { openConnectModal } = useConnectModal();
  const intl = useIntl();
  return (
    <MyContent w="100vw">
      <Flex
        pl={3}
        pr={3}
        pt={{ base: "6rem", sm: "6rem", md: "10rem", lg: "10rem" }}
        pb="6rem"
        alignItems="center"
        maxWidth="1270px"
        sx={styles.oneC}
      >
        <Flex
          flexDir="column"
          w={{
            base: "100%",
            sm: "100%",
            md: "calc(100% - 404px)",
            lg: "calc(1270px - 404px)",
          }}
          pr={{ base: 0, sm: 0, md: "24px", lg: "24px" }}
        >
          <Text
            fontWeight="var(--cds-fontWeights-medium)"
            fontSize={{
              base: "0.9rem",
              sm: "0.9rem",
              md: "1.2rem",
              lg: "1.2rem",
            }}
            w="full"
            textAlign={{ base: "center", sm: "center", md: "left", lg: "left" }}
            pb={{ base: 6, sm: 6, md: 9, lg: 9 }}
          >
            <FormattedMessage id="home.one.1" />
          </Text>
          <Flex
            alignItems="center"
            w="full"
            justifyContent={{
              base: "center",
              sm: "center",
              md: "left",
              lg: "left",
            }}
          >
            <Image
              src={MyBigbaby}
              w={{ base: "4rem", sm: "4rem", md: "5rem", lg: "7rem" }}
            />
            <Flex pl={3} alignItems="center">
              <Text sx={styles.logoText}>Ai</Text>
              <Text
                px={3}
                fontSize={{
                  base: "1.8rem",
                  sm: "1.8rem",
                  md: "2.4rem",
                  lg: "3.1rem",
                }}
              >
                trade
              </Text>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize={{
                  base: "1.8rem",
                  sm: "1.8rem",
                  md: "2.4rem",
                  lg: "3.1rem",
                }}
              >
                <FormattedMessage id="home.one.2" />
              </Text>
            </Flex>
          </Flex>

          <Flex sx={styles.typerWrapper}>
            <Typed
              strings={[
                intl.formatMessage({ id: "home.one.typed1" }),
                intl.formatMessage({ id: "home.one.typed2" }),
                intl.formatMessage({ id: "home.one.typed3" }),
              ]}
              typeSpeed={75}
              loop
              backSpeed={50}
              backDelay={800}
              startDelay={500}
              cursorChar=""
              showCursor
            />
          </Flex>
          <Flex pt={8}>
            <Text
              textAlign={{
                base: "center",
                sm: "center",
                md: "left",
                lg: "left",
              }}
              fontWeight="var(--cds-fontWeights-medium)"
              w="full"
              fontSize="1.5rem"
            >
              <FormattedMessage id="home.one.3" /> Coinbase Wallet:
            </Text>
          </Flex>
          <Flex
            gap={5}
            pt={3}
            w="full"
            justifyContent={{
              base: "center",
              sm: "center",
              md: "left",
              lg: "left",
            }}
            _hover={{ opacity: 0.9, transform: "translate(0px, -2px)" }}
          >
            <a href="https://play.google.com/store/apps/details?id=org.toshi">
              <Image src={MyGoogleBadgeSvg} />
            </a>
            <a href="https://apps.apple.com/us/app/coinbase-wallet-nfts-crypto/id1278383455">
              <Image src={MyAppStoreSvg} />
            </a>
          </Flex>
        </Flex>
        <Flex sx={styles.qr}>
          <Flex sx={styles.bluebg}></Flex>
          <Flex sx={styles.qrcode} flexDir="column">
            <Text sx={styles.qrtext}>
              <FormattedMessage id="home.one.4" />
              &nbsp;Ai Trade
              <br />
              <FormattedMessage id="home.one.5" />
              <Text as="a" color="#0052ff">
                &nbsp;Coinbase Wallet
              </Text>
            </Text>
            <Flex
              className="qr-img-c"
              w="full"
              justifyContent="center"
              pt={6}
              pb={4}
            >
              <Box sx={styles.qrimg}>
                <QRCodeSVG
                  width={"100%"}
                  height={"100%"}
                  value={
                    "https://go.cb-w.com/dapp?cb_url=" +
                    encodeURI(location.href)
                  }
                />
              </Box>
              {/* <Image
                  alt=""
                  loading="eager"
                  src="https://assets-global.website-files.com/60f93c8e038fc32afa829f7d/623081505bbafc005fc637d7_enjineerQR.png"
                  sx={styles.qrimg}
                /> */}
            </Flex>
            <Flex
              sx={styles.qr_mobile_link_wrapper}
              flexDir="column"
              textAlign="center"
            >
              <Flex pb={2}>
                <Text w="full">
                  <em>
                    <FormattedMessage
                      id="home.one.6"
                      values={{ name: "Coinbase Wallet" }}
                    />
                  </em>
                </Text>
              </Flex>
              <Text onClick={openConnectModal} color="#0052ff">
                <FormattedMessage
                  id="home.one.7"
                  values={{ name: "Ai Trade." }}
                />
              </Text>
            </Flex>
          </Flex>
          <ParallaxProvider>
            <Flex sx={styles.iconA}>
              <Parallax speed={6}>
                <Image
                  src={MyLinkImg}
                  alt=""
                  w={{ base: "60px", sm: "100px", md: "80px", lg: "100px" }}
                />
              </Parallax>
            </Flex>
            <Flex sx={styles.iconB}>
              <Parallax speed={7}>
                <Image
                  src={MyRingImg}
                  alt=""
                  w={{ base: "110px", sm: "130px", md: "110px", lg: "130px" }}
                />
              </Parallax>
            </Flex>
            <Flex sx={styles.iconC}>
              <Parallax speed={7}>
                <Image
                  src={Myeth3fImg}
                  alt=""
                  w={{ base: "90px", sm: "110px", md: "90px", lg: "110px" }}
                />
              </Parallax>
            </Flex>
          </ParallaxProvider>
        </Flex>
      </Flex>
    </MyContent>
  );
}
