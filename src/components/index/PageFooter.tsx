import MyLineSvg from "../../assets/images/line.svg";
import MyLogoSvg from "../../assets/images/logo.svg";
import { useMyToast, request, MyContent, PrimaryButton } from "../../common";
import { Flex, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;

const styles = {
  FooterInput: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    p: "0 1rem",
    w: "300px",
    color: "#000",
    _dark: { backgroundColor: "var(--cds-colors-gray-900)", color: "#fff" },
  },
  AiTradeC: {
    fontWeight: 200,
    fontSize: { base: "1.2rem", sm: "1.6rem", md: "1.8rem", lg: "1.8rem" },
  },
  AiTag: {
    padding: "0 0.4em",
    backgroundColor: "#57b4fc",
    borderRadius: "0.6em 0",
    fontWeight: "400",
    // letterSpacing: "0.1em",
    color: "#fff",
  },
};

export default function PageFooter() {
  const [getEmail, setEmail] = useState("");
  const { showRes } = useMyToast();
  const onSubmit = () => {
    if (regEmail.test(getEmail)) {
      request("home/subscribe", { data: { email: getEmail } })
        .then((res: any) => {
          showRes(res);
          if (res.code == 0) {
            setEmail("");
          }
        })
        .catch(showRes);
    } else {
      showRes({ colode: 9, message: <FormattedMessage id="mail" /> });
    }
  };
  return (
    <Flex
      color="rgb(255, 255, 255)"
      backgroundColor="var(--cds-colors-gray-800)"
      p="3rem 1rem"
    >
      <MyContent w={{ base: "100%", sm: "100%", md: "900px", lg: "1270px" }}>
        <Flex
          w={{ base: "100%", sm: "100%", md: "900px", lg: "1270px" }}
          flexWrap={{ base: "wrap", sm: "wrap", md: "unset", lg: "unset" }}
          flexDirection={{
            base: "column-reverse",
            sm: "column-reverse",
            md: "unset",
            lg: "unset",
          }}
        >
          <Flex
            w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
            flexDir="column"
          >
            <Flex
              alignItems="center"
              p={{
                base: "1rem 0 0",
                sm: "1rem 0 0",
                md: "3rem 0",
                lg: "3rem 0",
              }}
            >
              <Flex>
                <a href="/">
                  <Image
                    src={MyLogoSvg}
                    alt="Coinbase Logo"
                    h={{
                      base: "1.2rem",
                      sm: "1.2rem",
                      md: "1.6rem",
                      lg: "1.6rem",
                    }}
                  />
                </a>
              </Flex>
              <Flex px={3}>
                <Image src={MyLineSvg} alt="seperator" />
              </Flex>
              <Flex sx={styles.AiTradeC} alignItems="center">
                <Text
                  sx={styles.AiTag}
                  mr={{ base: 1, sm: 2, md: 2, lg: 3 }}
                  textAlign="center"
                >
                  Ai
                </Text>
                trade
              </Flex>
            </Flex>
            <Text pt={4}>© 2023 Ai Trade</Text>
          </Flex>

          <Flex
            flexDir="column"
            w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
            pb={{ base: "3rem", sm: "3rem", md: 0, lg: 0 }}
          >
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize={{
                base: "1.5rem",
                sm: "1.5rem",
                md: "1.5rem",
                lg: "2rem",
              }}
            >
              <FormattedMessage id="home.footer.1" />
            </Text>
            <Text
              py={4}
              fontSize={{
                base: "0.9rem",
                sm: "0.9rem",
                md: "1.1rem",
                lg: "1.1rem",
              }}
            >
              <FormattedMessage id="home.footer.2" />
              Ai Trade
            </Text>
            <Flex>
              <Flex sx={styles.FooterInput}>
                <Input
                  type="text"
                  variant="unstyled"
                  value={getEmail}
                  placeholder="Email address"
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                    // console.log(e.target.value, "elekkke");
                  }}
                />
              </Flex>
              <Flex pl={5}>
                <PrimaryButton onClick={onSubmit}>
                  <FormattedMessage id="home.footer.3" />
                </PrimaryButton>
              </Flex>
            </Flex>
            <Flex
              pt={4}
              fontSize={{
                base: "0.6rem",
                sm: "0.6rem",
                md: "1rem",
                lg: "1rem",
              }}
              sx={{ flexWrap: "wrap" }}
            >
              <FormattedMessage id="home.footer.4" />
              <Text pl={2} color="#1652f0">
                <FormattedMessage id="home.footer.5" />
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </MyContent>
    </Flex>
  );
}
