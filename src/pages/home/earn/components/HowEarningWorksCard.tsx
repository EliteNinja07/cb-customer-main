import learnstakingSvg from "../../../../assets/images/Learn_Illustration_What_is_Staking.svg";
import learnlendSvg from "../../../../assets/images/coinbase-lend.svg";
import {
  MyCard,
  MyCardBody,
  MyCardDivider,
  TextBody,
  TextCardHeader,
} from "../../../../common";
import { Flex, SimpleGrid, Image } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const styles = {
  itemsCover: {
    width: "100%",
    overflow: "hidden",
    _hover: {
      img: {
        transform: "scale(1.05)",
        WebkitTransform: "scale(1.05)",
        opacity: 0.9,
        WebkitTransition: " -webkit-transform 5s ease 0s",
        transition: "transform 5s ease 0s",
      },
    },
  },
};

export default () => {
  return (
    <MyCard mt="4">
      <MyCardBody>
        <TextCardHeader pb="0">
          <FormattedMessage id="earn.learn.title" />
        </TextCardHeader>
        <TextBody pl="6" pb="4">
          <FormattedMessage id="earn.learn.desc" />
        </TextBody>
        <MyCardDivider></MyCardDivider>
        <SimpleGrid
          p="6"
          columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
          spacing="1.5rem"
        >
          <Flex flexDir="column">
            <Link to="/home/learn/what-is-staking">
              <Flex sx={styles.itemsCover}>
                <Image src={learnstakingSvg} />
              </Flex>
              <TextCardHeader pl="0" pb="0">
                <FormattedMessage id="earn.learn.news1.title" />
              </TextCardHeader>
              <TextBody pl="0" pb="2">
                <FormattedMessage id="earn.learn.news1.desc" />
              </TextBody>
            </Link>
          </Flex>
          <Flex flexDir="column">
            <Link to="/home/learn/What-is-defi">
              <Flex sx={styles.itemsCover}>
                <Image src={learnlendSvg} />
              </Flex>
              <TextCardHeader pl="0" pb="0">
                <FormattedMessage id="earn.learn.news2.title" />
              </TextCardHeader>
              <TextBody pl="0" pb="2">
                <FormattedMessage id="earn.learn.news2.desc" />
              </TextBody>
            </Link>
          </Flex>
        </SimpleGrid>
      </MyCardBody>
    </MyCard>
  );
};
