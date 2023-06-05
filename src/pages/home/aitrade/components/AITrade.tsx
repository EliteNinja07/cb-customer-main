import { Flex } from "@chakra-ui/react";
import MyNoActivity from "../../../../components/NoActivity";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/free-mode";
import { FormattedMessage } from "react-intl";
import CardSwiper from "./CardSwiper";
import {
  MyCard,
  MyCardBody,
  MyCardDivider,
  TextCardHeader,
} from "../../../../common";

const styles = {
  FcardC: {
    width: "100%",
    height: "170px",
    overflow: "hidden",
    position: "relative",
    display: "block",
  },
  MyCards: {
    width: "270px",
    borderRadius: "8px",
    overflow: "hidden",
    display: "inline-block",
    border: "1px solid #b2b2b238",
    marginRight: "24px",
    "&:last-child": {
      marginRight: 0,
    },
  },
};

export default ({ funds }: any) => {
  return (
    <MyCard mt="4">
      <MyCardBody>
        <TextCardHeader>
          <FormattedMessage id="text.AiTrade" values={{ name: "Ai Trade" }} />
        </TextCardHeader>
        <MyCardDivider></MyCardDivider>
        <Flex flexDir="column" w="full">
          <TextCardHeader>
            <FormattedMessage id="text.JoinedFunds" />
          </TextCardHeader>
          <Flex sx={styles.FcardC} px={6}>
            {funds?.length ? (
              <CardSwiper funds={funds} />
            ) : (
              <MyNoActivity
                svgshow={false}
                label={<FormattedMessage id="text.NoActivityYet" />}
              />
            )}
          </Flex>
        </Flex>
      </MyCardBody>
    </MyCard>
  );
};
