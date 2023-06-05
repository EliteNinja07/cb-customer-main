import { Avatar, AvatarGroup, Flex, Text } from "@chakra-ui/react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FreeMode, Mousewheel, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { EmptyButton, TextBody, TextHeadLine } from "../../../../common";

const styles = {
  MyCards: {
    width: "270px",
    borderRadius: "8px",
    overflow: "hidden",
    display: "inline-block",
    border: "1px solid #b2b2b238",
    marginRight: "24px",
    cursor: "pointer",
    "&:last-child": {
      marginRight: 0,
    },
  },
  MyCardsContent: {
    position: "relative",
    padding: "0.7rem",
  },
  SwiperCanvas: {
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // right: 0,
    width: "130px",
    padding: "0 0 0 0.4rem",
  },
};
const data = [
  { genre: "Sports", sold: 2 },
  { genre: "Strategy", sold: 5 },
  { genre: "Action3", sold: 13 },
  { genre: "Action", sold: 10 },
  { genre: "Shooter1", sold: 4 },
  { genre: "Shooter", sold: 8 },
  { genre: "Other", sold: 4 },
  { genre: "Other2", sold: 6 },
  { genre: "Shooter1", sold: 8 },
  { genre: "Other2", sold: 4 },
  { genre: "Other22", sold: 6 },
];
export default ({ funds }: any) => {
  const navigate = useNavigate();
  const intl = useIntl();

  return funds?.length ? (
    <Swiper
      slidesPerView={"auto"}
      freeMode={true}
      scrollbar={false}
      mousewheel={true}
      modules={[FreeMode, Scrollbar, Mousewheel]}
      style={{ width: "100%", height: "100%" }}
    >
      <SwiperSlide style={{ width: "auto", WebkitBoxSizing: "border-box" }}>
        <div style={{ whiteSpace: "nowrap", width: "100%", height: "100%" }}>
          {funds?.map((item: any) => (
            <Flex
              key={item.id}
              sx={styles.MyCards}
              onClick={() => {
                navigate(`/home/earndet?symbol=${item?.main_coin?.symbol}`);
              }}
            >
              <EmptyButton full>
                <Flex flexDir="column" w="full">
                  <Flex align="center" sx={styles.MyCardsContent}>
                    {item.sub_coin === null ? (
                      <Avatar
                        src={item.main_coin.icon}
                        size="sm"
                        mr="3"
                        bg="gray.0"
                      />
                    ) : (
                      <AvatarGroup size="sm" max={2} mr="3" spacing="-1rem">
                        <Avatar src={item.main_coin.icon} bg="gray.0" />
                        <Avatar src={item.sub_coin.icon} bg="gray.0" />
                      </AvatarGroup>
                    )}

                    <Flex flexDir="column" flex="1" sx={{ overflow: "hidden" }}>
                      <TextHeadLine>
                        {item.sub_coin === null
                          ? item.main_coin.symbol
                          : item.main_coin.symbol + "/" + item.sub_coin.symbol}
                      </TextHeadLine>
                      <TextBody>{item.main_coin.name}</TextBody>
                    </Flex>
                    <Flex sx={styles.SwiperCanvas} alignItems="center">
                      <Sparklines
                        data={
                          item?.main_coin?.sparkline
                            ? JSON.parse(item?.main_coin?.sparkline)
                            : [0, 0, 0, 0]
                        }
                      >
                        <SparklinesLine color="rgb(0,82,255)" />
                      </Sparklines>
                    </Flex>
                  </Flex>
                  <Flex justify="space-between" px="0.7rem" pb="0.5rem">
                    <Flex flexDir="column">
                      <Text color="#098551">
                        {(item.apr_start * 100).toFixed(0)}% ~
                        {(item.apr_end * 100).toFixed(0)}%
                      </Text>
                      <TextBody>
                        <FormattedMessage id="text.APY" />
                      </TextBody>
                    </Flex>
                    <Flex flexDir="column" align="end">
                      <TextHeadLine>
                        {item.duration == 0
                          ? "Flexible"
                          : item.duration +
                            " " +
                            intl.formatMessage({ id: "text.Days" })}
                      </TextHeadLine>
                      <TextBody>
                        <FormattedMessage id="text.Duration" />
                      </TextBody>
                    </Flex>
                  </Flex>
                </Flex>
              </EmptyButton>
            </Flex>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  ) : (
    <></>
  );
};
