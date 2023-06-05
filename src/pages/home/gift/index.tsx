import MyGiftsIconSvg from "../../../assets/images/gifting-1.svg";
import {
  MyCard,
  MyContent,
  OutlineButton,
  request,
  TextCardHeader,
  useListPage,
  useMyState,
  useMyToast,
} from "../../../common";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import EnclosedTab from "./components/EnclosedTab";
import ExchangeAirdropTable from "./components/ExchangeAirdropTable";
import PageTab from "./components/PageTab";
import ReceivedGiftTable from "./components/ReceivedGiftTable";
import Sentgift from "./components/Sentgift";
import SentGiftTable from "./components/SentGiftTable";
import Staking from "./components/Staking";
import "./style.scss";
import { FormattedMessage } from "react-intl";
import { useSearchParams } from "react-router-dom";

let pageUrl = "";
export default () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { showRes, showSuccess } = useMyToast();
  const [listTabIdx, setListTabIdx] = useState<any>(0);
  const { snap } = useMyState();
  const [getTabIdx, setTabIdx] = useState(searchParams.get("idx") || 0);
  const { getData, getList, pagination, params } = useListPage({
    baseUri: "gift/sent_gift",
  });
  const api = {
    getPend: (setData: any) => {
      request("gift/pre_send", {})
        .then((res) => {
          setData(res);
        })
        .catch(showRes);
    },
    onSendGift: (data: any) => {
      request("gift/send_gift", { data: data })
        .then((res: any) => {
          if (res.code == 0) {
            showSuccess({
              title: "ok!",
            });
            getList({ page: 1, perPage: 20 }, pageUrl);
          }
        })
        .catch(showRes);
    },
    onPreExchange: (data: any, functions: any) => {
      request("gift/pre_exchange", { data: data })
        .then((res: any) => {
          if (res.code == 0) {
            return functions(true);
          }
        })
        .catch(showRes);
    },
    onReceiveGift: (code: string, functions: any) => {
      request("gift/receive_gift", { data: { gift_code: code } })
        .then((res: any) => {
          if (res.code == 0) {
            showSuccess({
              title: "ok!",
            });
            localStorage.removeItem("gift_code");
            getList({ page: 1, perPage: 20 }, pageUrl);
            return functions(true);
          }
        })
        .catch((err: any) => {
          showRes(err);
          localStorage.removeItem("gift_code");
          return functions(true);
        });
    },
    onExchange: () => {
      getList({ page: 1, perPage: 20 }, pageUrl);
    },
  };

  const getListTabCont = () => {
    if (listTabIdx == "0") {
      return <SentGiftTable tdata={getData} pagination={pagination} />;
    }
    if (listTabIdx == "1") {
      return <ReceivedGiftTable tdata={getData} pagination={pagination} />;
    }
    if (listTabIdx == "2") {
      return (
        <ExchangeAirdropTable
          tdata={getData}
          pagination={pagination}
          api={api}
        />
      );
    }
  };

  return (
    <MyContent w="100%">
      <Flex flexWrap="wrap" w="full">
        <Flex flexDir="column" className="gift-l-c">
          <MyCard flexDir="column" mb={5}>
            <PageTab
              idx={getTabIdx}
              onChange={(val: number) => {
                setTabIdx(val);
              }}
            />
            {getTabIdx == "0" ? <Sentgift api={api} /> : ""}
            {getTabIdx == "1" ? (
              <Staking user={snap.session.user} api={api} />
            ) : (
              ""
            )}
          </MyCard>
          <MyCard flexDir="column">
            <TextCardHeader>
              <FormattedMessage id="text.Transactions" />
            </TextCardHeader>
            <Divider />
            <Flex px={6} py={5} flexDir="column">
              <EnclosedTab
                idx={0}
                onChange={(e: number, url: string) => {
                  setListTabIdx(e);
                  pageUrl = url;
                  getList({ page: 1, perPage: 20 }, url);
                }}
              />
              {getListTabCont()}
            </Flex>
          </MyCard>
        </Flex>
        <Flex className="gift-r-c" flexDir="column">
          <MyCard py={3} px={5} mb={5}>
            <Flex
              flex="1"
              flexDir="column"
              pr={3}
              pt={3}
              sx={{ position: "relative" }}
            >
              <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="20px">
                <FormattedMessage id="text.CryptoGifts" />
              </Text>
              <Text color="#5b616e">
                <FormattedMessage id="gift.crypto.desc" />
              </Text>
              <OutlineButton
                px={0}
                py={0}
                mt={7}
                justifyContent="flex-start"
                rightIcon={<ArrowForwardIcon />}
              >
                <FormattedMessage id="text.GetStart" />
              </OutlineButton>
            </Flex>
            <Flex maxW="180px" pl={6}>
              <Image w="full" src={MyGiftsIconSvg} />
            </Flex>
          </MyCard>
          {/* <MyCard w="full" flexDir="column">
            <TextCardHeader pb="0">{lang?.RecentSends?.title}</TextCardHeader>
            <TextBody pl="6" pb="4" w="full">
              {lang?.RecentSends?.desc}
            </TextBody>
            <Divider />
            <RecentSends />
          </MyCard> */}
        </Flex>
      </Flex>
    </MyContent>
  );
};
