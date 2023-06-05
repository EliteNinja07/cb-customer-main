import MyFive_Img1 from "@/assets/images/five-img1.svg";
import MyFive_Img2 from "@/assets/images/five-img2.svg";
import MyFive_Img3 from "@/assets/images/five-img3.svg";
import { MyContent } from "../../common";
import { Flex, Image, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

export default function PageFour() {
  return (
    <Flex justifyContent="center">
      <Flex
        backgroundColor="#f6f8ff"
        _dark={{ background: "var(--cds-colors-gray-800)" }}
        w="full"
        p={{ base: "7rem 0", sm: "7rem 0", md: "3rem 0", lg: "7rem 0" }}
        flexDir="column"
      >
        <Flex flexDir="column" textAlign="center">
          <Text
            fontSize={{ base: "1.5rem", sm: "1.5rem", md: "2rem", lg: "3rem" }}
            fontWeight="var(--cds-fontWeights-medium)"
            w="full"
          >
            <FormattedMessage id="home.four.1" />
          </Text>
          <Text
            fontSize={{ base: "0.8rem", sm: "0.8rem", md: "1rem", lg: "1rem" }}
            p="1.6rem 0 3rem 0"
            w="full"
          >
            <FormattedMessage id="home.four.2" values={{ name: "Coinbase" }} />
          </Text>
        </Flex>
        <MyContent
          pt="3rem"
          w={{ base: "100%", sm: "100%", md: "1270px", lg: "1270px" }}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            gap={10}
            display="flex"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "unset",
              lg: "unset",
            }}
          >
            <Flex
              flexDir="column"
              justifyContent="center"
              w="full"
              textAlign="center"
            >
              <Image margin="0 auto" src={MyFive_Img1} w="70px" alt="" />
              <Text fontSize="1.2rem" pt={3} w="full">
                <FormattedMessage id="home.four.3" />
              </Text>
            </Flex>
            <Flex
              h="1px"
              backgroundColor="var(--cds-colors-chakra-border-color)"
              m="1rem 0"
              w="full"
            ></Flex>
            <Flex
              flexDir="column"
              justifyContent="center"
              w="full"
              textAlign="center"
            >
              <Image margin="0 auto" src={MyFive_Img2} w="70px" alt="" />
              <Text fontSize="1.2rem" pt={3} w="full">
                <FormattedMessage id="home.four.4" />
              </Text>
            </Flex>
            <Flex
              h="1px"
              backgroundColor="var(--cds-colors-chakra-border-color)"
              m="1rem 0"
              w="full"
            ></Flex>
            <Flex
              flexDir="column"
              justifyContent="center"
              textAlign="center"
              w="full"
            >
              <Image margin="0 auto" src={MyFive_Img3} w="70px" alt="" />
              <Text fontSize="1.2rem" pt={3} w="full">
                <FormattedMessage id="home.four.5" />
              </Text>
            </Flex>
          </Flex>
        </MyContent>
      </Flex>
    </Flex>
  );
}
