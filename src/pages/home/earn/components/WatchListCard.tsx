import { Flex, Image, Text } from "@chakra-ui/react";
import CardSwiper from "./CardSwiper";
import WatchList from "../../../../assets/images/htmlSvg11.svg";
import FundsListTable from "./FundsListTable";
import { FormattedMessage } from "react-intl";
import {
  MyCard,
  MyCardBody,
  MyCardDivider,
  TextBody,
  TextCardHeader,
  TextHeadLine,
} from "../../../../common";

const styles = {
  FcardC: {
    width: "100%",
    height: "170px",
    overflow: "hidden",
    position: "relative",
    display: "block",
    zIndex: 1,
  },
};

export default ({ lang, wdata }: any) => {
  return (
    <MyCard mt="4">
      <MyCardBody>
        <TextCardHeader>
          <FormattedMessage id="text.Watchlist" />
        </TextCardHeader>
        <MyCardDivider></MyCardDivider>
        <Flex px="6" py="4">
          <Flex justify="space-between" align="center">
            <Image src={WatchList} w="50px" h="60px" mr="5" />
            <Flex flexDir="column" flex="1">
              <TextHeadLine>
                <FormattedMessage
                  id="earn.watch.mintitle"
                  values={{ name: "Ai Trade" }}
                />
              </TextHeadLine>
              <TextBody>
                <Text as="b" color="#1890ff!important">
                  CO
                </Text>
                <FormattedMessage id="earn.watch.desc" />
              </TextBody>
            </Flex>
          </Flex>
        </Flex>
        <MyCardDivider></MyCardDivider>
        <Flex flexDir="column" w="full">
          <TextCardHeader>
            <FormattedMessage id="earn.watch.stakingsTitle" />
          </TextCardHeader>
          <Flex sx={styles.FcardC} px={6}>
            <CardSwiper funds={wdata?.card} />
          </Flex>
        </Flex>
        <MyCardDivider></MyCardDivider>
        <TextCardHeader>
          <FormattedMessage id="earn.watch.defiTitle" />
        </TextCardHeader>
        <Flex flexDir="column" w="full" px={6}>
          <MyCardDivider></MyCardDivider>
          <FundsListTable funds={wdata?.list} />
        </Flex>
      </MyCardBody>
    </MyCard>
  );
};
