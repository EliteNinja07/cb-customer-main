import { Divider, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  MyCard,
  MyCardBody,
  MyContent,
  request,
  TextBody,
  TextCardHeader,
} from "../../../common";
import AiTrade from "./components/AiTrade";
import HeaderLeftData from "./components/HeaderLeftData";
import MemberExclusiveSettings from "./components/MemberExclusiveSettings";
import ReferralPrivilege from "./components/ReferralPrivilege";
import VipLeve from "./components/VipLe";
import WithdrawalOption from "./components/WithdrawalOption";

import { FormattedMessage } from "react-intl";
import { FreeMode, Mousewheel, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

export default () => {
  const [res, setRes] = useState<any>();

  useEffect(() => {
    request("vip/show", {}).then((res) => setRes(res.data));
  }, []);

  return (
    <MyContent w="full">
      <MyCard>
        <MyCardBody>
          <TextCardHeader pb="0">
            <FormattedMessage id="text.VIPLevels" />
          </TextCardHeader>
          <TextBody pl="6" pb="4">
            <FormattedMessage id="vip.title" />
          </TextBody>
          <Divider />

          <Swiper
            slidesPerView={"auto"}
            freeMode={true}
            scrollbar={false}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            style={{ width: "100%", height: "100%" }}
          >
            <SwiperSlide
              style={{
                minWidth: "100%",
                width: "auto",
                WebkitBoxSizing: "border-box",
              }}
            >
              <Flex px={5} py={8} w="full">
                <Flex w="244px" h="199px" bg="#aba6ff12" p={4} borderRadius={2}>
                  <HeaderLeftData user={res?.user} />
                </Flex>
                <Flex pl={3} flex={1}>
                  <VipLeve user={res?.user} levels={res?.levels} />
                </Flex>
              </Flex>
              <AiTrade vips={res?.vips[0].items} user={res?.user} />
              <ReferralPrivilege vips={res?.vips[1].items} user={res?.user} />
              <MemberExclusiveSettings
                vips={res?.vips[2].items}
                user={res?.user}
              />
              <WithdrawalOption vips={res?.vips[3].items} user={res?.user} />
            </SwiperSlide>
          </Swiper>
        </MyCardBody>
      </MyCard>
    </MyContent>
  );
};
