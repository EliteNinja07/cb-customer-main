import Aitradelearn from "@/assets/images/aitradelearn.svg";
import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMyIntl } from "../../../../common";
const styles = {
  headBanner: {
    width: { base: "100%", sm: "100%", md: "60%", lg: "67%" },
  },
  headRC: {
    paddingBottom: "1.2rem",
    _hover: {
      opacity: "0.8",
    },
  },
};
export default () => {
  const { lang } = useMyIntl("TIPS");
  console.log("lang", lang);
  return (
    <Flex flexDir="column">
      <Text as="b" fontSize="2.4rem" w="full" textAlign="center">
        {lang[0]}
      </Text>
      <Text w="full" color="#5b616e" textAlign="center">
        {lang[1]}
      </Text>
      <Flex py={10} w="full" flexWrap="wrap">
        <Flex
          sx={styles.headBanner}
          pr={{ base: 0, sm: 0, md: 6, lg: 6 }}
          flexDir="column"
          flex="1"
        >
          <Text
            pb={3}
            fontWeight="var(--cds-fontWeights-medium)"
            fontSize="1.3rem"
            w="full"
          >
            {lang[2]}
          </Text>
          <Flex w="full">
            <Link style={{ width: "100%" }} to="#">
              <Image w="full" src={Aitradelearn} />
            </Link>
          </Flex>
          <Text color="#89909e" pt={3} pb={2}>
            {lang[3]}
          </Text>
          <Text
            fontWeight="var(--cds-fontWeights-medium)"
            fontSize="1.6rem"
            lineHeight="2rem"
          >
            {lang[4]}
          </Text>
          <Text color="#89909e" fontSize="1rem" pt={1}>
            {lang[5]}
          </Text>
        </Flex>
        <Flex
          w={{ base: "100%", sm: "100%", md: "40%", lg: "33%" }}
          flexDir="column"
          mt={{ base: "24px", sm: "24px", md: 0, lg: 0 }}
        >
          <Text
            pb={3}
            fontWeight="var(--cds-fontWeights-medium)"
            textAlign="left"
            fontSize="1.3rem"
            w="full"
          >
            {lang[6]}
          </Text>
          <Flex flexDir="column" sx={styles.headRC}>
            <Link to="/home/learn/ai-trade">
              <Text color="#89909e" pb={1}>
                {lang[7]}
              </Text>
              <Text fontSize="1.4rem" lineHeight="1.8rem">
                {lang[8]}
              </Text>
            </Link>
          </Flex>
          <Flex flexDir="column" sx={styles.headRC}>
            <Link to="#">
              <Text color="#89909e" pb={1}>
                {lang[9]}
              </Text>
              <Text fontSize="1.4rem" lineHeight="1.8rem">
                {lang[10]}
              </Text>
            </Link>
          </Flex>
          <Flex flexDir="column" sx={styles.headRC}>
            <Link to="#">
              <Text color="#89909e" pb={1}>
                {lang[11]}
              </Text>
              <Text fontSize="1.4rem" lineHeight="1.8rem">
                {lang[12]}
              </Text>
            </Link>
          </Flex>
          <Flex flexDir="column" sx={styles.headRC}>
            <Link to="#">
              <Text color="#89909e" pb={1}>
                {lang[13]}
              </Text>
              <Text fontSize="1.4rem" lineHeight="1.8rem">
                {lang[14]}
              </Text>
            </Link>
          </Flex>
          <Flex flexDir="column" sx={styles.headRC}>
            <Link to="#">
              <Text color="#89909e" pb={1}>
                {lang[15]}
              </Text>
              <Text fontSize="1.4rem" lineHeight="1.8rem">
                {lang[16]}
              </Text>
            </Link>
          </Flex>
          <Flex flexDir="column" sx={styles.headRC}>
            <Link to="#">
              <Text color="#89909e" pb={1}>
                {lang[17]}
              </Text>
              <Text fontSize="1.4rem" lineHeight="1.8rem">
                {lang[18]}
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
