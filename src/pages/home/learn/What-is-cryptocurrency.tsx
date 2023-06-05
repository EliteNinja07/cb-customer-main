import { MyContent } from "../../../common/components/MyContent";

import CryptoWallet from "@/assets/images/What_is_a_Crypto_Wallet.svg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Link,
  List,
  ListItem,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMyIntl } from "../../../common";
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
export default () => {
  const [getFixed, setFixed] = useState({});
  const onScroll = (e: any) => {
    if (e.target.documentElement.scrollTop > 300) {
      setFixed(styles.Fiexs);
    } else {
      setFixed(styles.Relative);
    }
    console.log(e.target.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  const { lang } = useMyIntl("Whatiscryptocurrency");
  return (
    <MyContent w="100%" px={3}>
      <Flex w="full" flexDir="column">
        <Flex>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home/learn">{lang[0]}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home/learn#Crypto-Basics">
                {lang[1]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        <Text
          fontWeight="var(--cds-fontWeights-medium)"
          fontSize="3rem"
          py={3}
          id="What-is-cryptocurrency"
        >
          {lang[2]}
        </Text>
        <Wrap py={6} spacing="24px" flexWrap="wrap">
          <WrapItem flexDir="column" flex="1">
            <Flex w="full">
              <Image src={CryptoWallet} w="full" />
            </Flex>
            <Flex pt={6}>
              <Text background="#f2f2f2" p={6} mt={6} fontSize="1rem">
                {lang[3]}
              </Text>
            </Flex>
            <Flex fontSize="1.2rem" pt={12}>
              {lang[4]}
              <Text as="b">{lang[5]}</Text>
              {lang[6]}
            </Flex>
            <Flex w="full">
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/0FbNtfSpCRcAbMcEgrzNg/c80025da573dc11dc083aaad519c8356/1a_bitcoin-stats.gif?w=1180"
                w="full"
              />
            </Flex>
            <Flex
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={4}
              flexDir="column"
            >
              <Flex as="li" display="list-item">
                {lang[7]}
                <Text as="b">{lang[8]}</Text>
                {lang[9]}
              </Flex>
              <Flex as="li" display="list-item">
                {lang[10]}
                <Text as="b">{lang[11]}</Text>
                {lang[12]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[13]}</Text>
                {lang[14]}
              </Flex>
              <Text as="li" display="list-item">
                {lang[15]}
              </Text>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[16]}</Text>
                {lang[17]}
              </Flex>
              <Flex as="li" display="list-item">
                {lang[18]}
                <Text as="b">{lang[19]}</Text>
              </Flex>
              <Text as="li" display="list-item">
                {lang[20]}
              </Text>
            </Flex>
            <Flex as="b" fontSize="1.2rem" lineHeight="2rem" pt={6}>
              <Text as="i" borderLeft="7px solid #0052ff" pl={5}>
                {lang[21]}
              </Text>
            </Flex>
            <Flex w="full" py={5}>
              <video
                controls
                width="100%"
                src="/img/mov/Coinbase CEO Brian Armstrong's Vision for the Future.mp4"
              ></video>
            </Flex>
            <Text fontSize="1rem" lineHeight="1.8rem" pt={4}>
              {lang[22]}
            </Text>
            <Flex background="#f2f2f2" mt={6} p={6} flexDir="column">
              <Flex fontSize="1.2rem">
                <Text as="b">{lang[23]}</Text>
              </Flex>
              <Flex pt={6} pb={4}>
                <Text fontSize="1rem" lineHeight="1.8rem" as="b">
                  {lang[24]}
                </Text>
                <Text fontSize="1rem">{lang[25]}</Text>
              </Flex>
              <Flex w="full">
                <Image
                  src="//images.ctfassets.net/q5ulk4bp65r7/7vxp5PznsPJ8ONdD4v5Nne/2002088b0927404055d0760ba29c41b5/2a_bitcoin-vs-fiat.gif?w=1180"
                  w="full"
                />
              </Flex>
              <Flex pt={4} pb={4} flexDir="column">
                <Text fontSize="1rem" lineHeight="1.8rem" as="b">
                  {lang[26]}
                </Text>
                <Text fontSize="1rem">{lang[27]}</Text>
                <Text fontSize="1rem" lineHeight="1.8rem" as="b">
                  {lang[28]}
                </Text>
                <Text fontSize="1rem">{lang[29]}</Text>
              </Flex>
              <Flex w="full">
                <Image
                  src="//images.ctfassets.net/q5ulk4bp65r7/3Q7B95nMe9uAPBDxS0XRfb/0c3c37b9ddd66d651813ebcf83c4e0aa/2b_bitcoin-attack.png?w=1180&fm=png"
                  w="full"
                />
              </Flex>
              <Flex pt={4} flexDir="column">
                <Text fontSize="1rem" lineHeight="1.8rem" as="b">
                  {lang[30]}
                </Text>
                <Text fontSize="1rem">{lang[31]}</Text>
                <Text fontSize="1rem" lineHeight="1.8rem" as="b">
                  {lang[32]}
                </Text>
                <Text fontSize="1rem">{lang[33]}</Text>
                <Text fontSize="1rem" lineHeight="1.8rem" as="b">
                  {lang[34]}
                </Text>
                <Text fontSize="1rem">{lang[35]}</Text>
                <Text fontSize="1rem" lineHeight="1.8rem" as="b">
                  {lang[36]}
                </Text>
                <Text fontSize="1rem">{lang[37]}</Text>
              </Flex>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="Why-cryptocurrency"
            >
              {lang[38]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[39]}
              <Text as="b">{lang[40]}</Text>
              {lang[41]}
            </Text>
            <Flex
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pb={6}
              flexDir="column"
              pl={4}
            >
              <Flex as="li" display="list-item">
                <Text as="b">{lang[42]}</Text>
                {lang[43]}
              </Flex>
            </Flex>
            <Flex w="full">
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/1k4zKgVAlKbOlKl4YOxTxt/ae918857eb2db59da47900ffa284985b/BTC-outperforming.gif?w=1180"
                w="full"
              />
            </Flex>
            <Flex
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pb={6}
              flexDir="column"
              pl={4}
            >
              <Flex as="li" display="list-item">
                {lang[44]}
                <Text as="b">{lang[45]}</Text>
                {lang[46]}
              </Flex>
              <Flex w="full" py={5}>
                <video
                  controls
                  width="100%"
                  src="/img/mov/Coinbase x Black History Month.mp4"
                ></video>
              </Flex>
            </Flex>
            <Flex
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pb={6}
              pl={4}
              flexDir="column"
            >
              <Flex as="li" display="list-item">
                {lang[47]}
                <Text as="b">{lang[48]}</Text>
                {lang[49]}
              </Flex>
              <Flex as="li" display="list-item">
                {lang[50]}
                <Text as="b">{lang[51]}</Text>
                {lang[52]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[53]}</Text>
                {lang[54]}
              </Flex>
            </Flex>
            <Flex flexDir="column" fontSize="1.2rem" as="b" pt={6}>
              <Text as="i" borderLeft="7px solid #0052ff" pl={5}>
                {lang[55]}
              </Text>
              <Flex w="full" py={5}>
                <video
                  controls
                  width="100%"
                  src="/img/mov/Coinbase Launches USDC Stablecoin.mp4"
                ></video>
              </Flex>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="1.4rem"
              id="wcb"
            >
              {lang[56]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[57]}
            </Text>
            <Flex
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pb={6}
              flexDir="column"
              pl={4}
            >
              <Text as="li" display="list-item">
                {lang[58]}
              </Text>
              <Text as="li" display="list-item">
                {lang[59]}
              </Text>
              <Text as="li" display="list-item">
                {lang[60]}
              </Text>
              <Text as="li" display="list-item">
                {lang[61]}
              </Text>
              <Text as="li" display="list-item">
                {lang[62]}
              </Text>
              <Text as="li" display="list-item">
                {lang[63]}
              </Text>
              <Text as="li" display="list-item">
                {lang[64]}
              </Text>
            </Flex>
            <Flex w="full">
              <Image
                src="//images.ctfassets.net/q5ulk4bp65r7/MOWua8EEDiuK0dqEKDQea/80b30a771b9abf057da8290e2e35dd6a/BTC-buyingDCA.gif?w=1180"
                w="full"
              />
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="1.4rem"
              id="wcb"
            >
              {lang[65]}
            </Text>
            <Flex fontSize="1.2rem" flexDir="column" lineHeight="2rem" pt={6}>
              {lang[66]}
              <Text as="b">{lang[67]}</Text> .
            </Flex>
            <Flex
              as="ul"
              flexDir="column"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pb={6}
              pl={4}
            >
              <Flex as="li" display="list-item">
                {lang[68]}
                <Text as="b">{lang[69]}</Text>
                {lang[70]}
              </Flex>
              <Flex as="li" display="list-item">
                {lang[71]}
                <Text as="b">{lang[72]}</Text>
                {lang[73]}
              </Flex>
              <Flex as="li" display="list-item">
                {lang[74]}
                <Text as="b">{lang[75]}</Text>
                {lang[76]}
              </Flex>
            </Flex>
            <Flex background="#f2f2f2" mt={6} p={6} flexDir="column">
              <Text fontSize="1.2rem" as="b">
                {lang[77]}
              </Text>
              <Flex fontSize="1rem" lineHeight="1.8rem" pt={6}>
                <Text as="b">{lang[78]}</Text>
                <Text>{lang[79]}</Text>
              </Flex>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="How-does-cryptocurrency-work"
            >
              {lang[80]}
            </Text>
            <Flex fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[81]}
              <Text as="b">{lang[82]}</Text>
            </Flex>
            <Flex
              as="ul"
              flexDir="column"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pb={6}
              pl={4}
            >
              <Flex as="li" display="list-item">
                {lang[83]}
                <Text as="b">{lang[84]}</Text>
                {lang[85]}
              </Flex>
              <Flex as="li" display="list-item">
                {lang[86]}
                <Text as="b">{lang[87]}</Text>
                {lang[88]}
              </Flex>
              <Flex as="li" display="list-item">
                {lang[89]}
                <Text as="b">{lang[90]}</Text>
                {lang[91]}
              </Flex>
              <Flex as="li" display="list-item">
                {lang[92]}
                <Text as="b">{lang[93]}</Text>.
              </Flex>
            </Flex>
            <Flex background="#f2f2f2" mt={6} p={6}>
              <Text fontSize="1.2rem" as="b">
                {lang[94]}
              </Text>
              <Flex fontSize="1rem" lineHeight="1.8rem" pt={6}>
                <Flex>
                  <Text as="b">{lang[95]}</Text>
                  {lang[96]}
                </Flex>
              </Flex>
            </Flex>
            <Flex w="full" py={5}>
              <video
                controls
                width="100%"
                src="/img/mov/Cryptocurrency The Future of Finance and Money.mp4"
              ></video>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="1.4rem"
              id="wcb"
            >
              {lang[97]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[98]}
            </Text>
            <Flex
              as="ul"
              flexDir="column"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pb={6}
              pl={4}
            >
              <Flex as="li" display="list-item">
                {lang[99]}
                <Text as="b">{lang[100]}</Text>
                {lang[101]}
              </Flex>
              <Text as="li" display="list-item">
                {lang[102]}
              </Text>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[103]}</Text>
                {lang[104]}
              </Flex>
            </Flex>
            <Flex background="#f2f2f2" mt={6} p={6} flexDir="column">
              <Text fontSize="1.2rem" as="b">
                {lang[105]}
              </Text>
              <Flex fontSize="1rem" lineHeight="1.8rem" flexDir="column" pt={6}>
                <Text as="b">{lang[106]}</Text>
                <Text>{lang[107]}</Text>
                <Text>{lang[108]}</Text>
                <Text>{lang[109]}</Text>
              </Flex>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              fontSize="2rem"
              id="How-to-buy-bitcoin-and-other-crypto"
            >
              {lang[110]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6}>
              {lang[111]}
            </Text>
            <Flex
              flexDir="column"
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pb={6}
              pl={4}
            >
              <Text as="li" display="list-item">
                {lang[112]}
              </Text>
              <Flex as="li" display="list-item">
                {lang[113]}
                <Text as="b">{lang[114]}</Text>
                {lang[115]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[116]}</Text>
                {lang[117]}
              </Flex>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="1.4rem"
            >
              {lang[118]}
            </Text>
            <Text fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[119]}
            </Text>

            <Flex
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              pt={6}
              pl={6}
              pb={6}
              flexDir="column"
            >
              <Text as="li" display="list-item">
                {lang[120]}
              </Text>
              <Text as="li" display="list-item">
                {lang[121]}
              </Text>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={3}
              pb={2}
              fontSize="1.4rem"
            >
              {lang[122]}
            </Text>
            <Flex fontSize="1.2rem" lineHeight="2rem" pt={6} pb={6}>
              {lang[123]}
              <Text as="b">{lang[124]}</Text>
            </Flex>
            <Flex
              as="ul"
              listStyleType="disc"
              fontSize="1.2rem"
              lineHeight="2rem"
              flexDir="column"
              pt={6}
              pl={6}
              pb={6}
            >
              <Flex as="li" display="list-item">
                <Text as="b">{lang[125]}</Text>
                {lang[126]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[127]}</Text>
                {lang[128]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[129]}</Text>
                {lang[130]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[131]}</Text>
                {lang[132]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[133]}</Text>
                {lang[134]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[135]}</Text>
                {lang[136]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[137]}</Text>
                {lang[138]}
              </Flex>
              <Flex as="li" display="list-item">
                <Text as="b">{lang[139]}</Text>
                {lang[140]}
              </Flex>
            </Flex>
          </WrapItem>
          <WrapItem
            w="400px"
            sx={{ display: { base: "none", sm: "none", lg: "block" } }}
          >
            <Flex sx={getFixed} py="0.8rem" px="1.2rem">
              <List>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#What-is-cryptocurrency">{lang[141]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#Why-cryptocurrency">{lang[142]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#How-does-cryptocurrency-work">{lang[143]}</Link>
                </ListItem>
                <ListItem
                  color="#5b616e"
                  fontSize="1rem"
                  lineHeight="1.8rem"
                  pb={2}
                >
                  <Link href="#How-to-buy-bitcoin-and-other-crypto">
                    {lang[144]}
                  </Link>
                </ListItem>
              </List>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </MyContent>
  );
};
