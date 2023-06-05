import "./style.scss";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import PageHeader from "./components/PageHead";
import PageHeadData from "./components/PageHeadData";
import AITrade from "./components/AITrade";
import EarningDetails from "./components/EarningDetails";
import pagethreesvg1 from "../../../assets/images/pagethreesvg1.svg";
import pagethreesvg11 from "../../../assets/images/pagethreesvg11.svg";
import pagethreesvg7 from "../../../assets/images/pagethreesvg7.svg";
import pagethreesvg8 from "../../../assets/images/pagethreesvg8.svg";
import pagethreesvg4 from "../../../assets/images/pagethreesvg4.svg";
import pagethreesvg6 from "../../../assets/images/pagethreesvg6.svg";
import pagethreesvg12 from "../../../assets/images/pagethreesvg12.svg";
import pagethreesvg5 from "../../../assets/images/pagethreesvg5.svg";
import pagethreesvg2 from "../../../assets/images/pagethreesvg2.svg";
import pagethreesvg18 from "../../../assets/images/pagethreesvg18.svg";
import pagethreesvg10 from "../../../assets/images/pagethreesvg10.svg";
import { useEffect, useState } from "react";
import MyLineCard from "../../../components/MyLineCard";
import {
  request,
  useMyToast,
  MyContent,
  useListPage,
  useMyState,
} from "../../../common";
import { useIntl } from "react-intl";
import AutomaticTrade from "./components/carditem/AutomaticTrade";
import AutomatedTrading from "./components/carditem/AutomatedTrading";
import AutomaticExchange from "./components/carditem/AutomaticExchange";
import ProfitGuarantee from "./components/carditem/ProfitGuarantee";
import LeveragedInvestment from "./components/carditem/LeveragedInvestment";
import AutomaticLoanRepayment from "./components/carditem/AutomaticLoanRepayment";
import PreventLiquidation from "./components/carditem/PreventLiquidation";
import E_mailNotification from "./components/carditem/E-mailNotification";
import AutomaticAirdropBonus from "./components/carditem/AutomaticAirdropBonus";
import AutomaticStaking from "./components/carditem/AutomaticStaking";
import AutomaticWithdrawal from "./components/carditem/AutomaticWithdrawal";

export default () => {
  const [res, setRes] = useState<any>();
  const { showRes } = useMyToast();
  const { snap } = useMyState();
  const intl = useIntl();
  const { getData, getList, params, pagination } = useListPage({
    baseUri: "ai_trade/profits",
  });

  const api = {
    onGetTableList: () => {
      getList(params);
    },
    onShow: () => {
      request("ai_trade/show", {})
        .then((res) => {
          setRes(res.data);
        })
        .catch(showRes);
    },
  };

  useEffect(() => {
    api.onShow();
  }, []);

  return (
    <MyContent w="100%">
      <Flex flexDir="column">
        <PageHeader pledge={res?.pledge} />
        <PageHeadData
          vip={res?.vip}
          pledge={res?.pledge}
          funds={res?.funds}
          jackpothasuser={res?.jackpot_has_user}
          user={res?.user}
          staking={res?.staking}
          api={api}
        />
        <Flex flexWrap="wrap">
          <Flex pt={5} className="aitrade-l-c" flexDir="column">
            <MyLineCard
              apiurl="ai_trade/chart"
              xkey="datetime"
              ykey="earning"
            />
            <AITrade funds={res?.funds} />
            <EarningDetails
              profits={res?.pledge?.pledge_profits}
              api={api}
              pagination={pagination}
              tdata={JSON.parse(JSON.stringify(getData))}
            />
          </Flex>
          <Flex pt={5} className="aitrade-r-c" flexDir="column">
            <AutomaticTrade
              icon={pagethreesvg1}
              title={intl.formatMessage({ id: "trade.config.item0.title" })}
              toolt={intl.formatMessage({ id: "trade.config.item0.toolt" })}
              field="can_automatic_trade"
              user={snap.session?.user}
            />
            <SimpleGrid columns={1} spacingX="5px" w="full">
              {snap.session?.user?.trailed_at ? (
                <></>
              ) : (
                <AutomatedTrading
                  icon={pagethreesvg8}
                  title={intl.formatMessage({ id: "trade.config.item1.title" })}
                  toolt={intl.formatMessage({ id: "trade.config.item1.toolt" })}
                  field="can_trail_bonus"
                  user={snap.session?.user}
                  api={api}
                />
              )}

              <AutomaticExchange
                icon={pagethreesvg11}
                title={intl.formatMessage({ id: "trade.config.item2.title" })}
                toolt={intl.formatMessage({ id: "trade.config.item2.toolt" })}
                field="can_automatic_exchange"
                user={snap.session?.user}
                api={api}
              />
              <ProfitGuarantee
                icon={pagethreesvg5}
                title={intl.formatMessage({ id: "trade.config.item7.title" })}
                toolt={intl.formatMessage({ id: "trade.config.item7.toolt" })}
                field="can_profit_guarantee"
                user={snap.session?.user}
                api={api}
              />
              <LeveragedInvestment
                icon={pagethreesvg4}
                title={intl.formatMessage({ id: "trade.config.item4.title" })}
                toolt={intl.formatMessage({ id: "trade.config.item4.toolt" })}
                field="can_leveraged_investment"
                user={snap.session?.user}
                api={api}
              />
              <AutomaticLoanRepayment
                icon={pagethreesvg6}
                title={intl.formatMessage({ id: "trade.config.item5.title" })}
                toolt={intl.formatMessage({ id: "trade.config.item5.toolt" })}
                field="can_automatic_loan_repayment"
                user={snap.session?.user}
                api={api}
              />
              <PreventLiquidation
                icon={pagethreesvg12}
                title={intl.formatMessage({ id: "trade.config.item6.title" })}
                toolt={intl.formatMessage({ id: "trade.config.item6.toolt" })}
                field="can_prevent_liquidation"
                user={snap.session?.user}
                api={api}
              />
              <E_mailNotification
                icon={pagethreesvg7}
                title={intl.formatMessage({ id: "trade.config.item3.title" })}
                toolt={intl.formatMessage({ id: "trade.config.item3.toolt" })}
                field="can_email_notification"
                user={snap.session?.user}
                api={api}
              />
              <AutomaticAirdropBonus
                icon={pagethreesvg2}
                title={intl.formatMessage({ id: "trade.config.item8.title" })}
                toolt={intl.formatMessage({ id: "trade.config.item8.toolt" })}
                field="can_automatic_airdrop_bonus"
                user={snap.session?.user}
                api={api}
              />
              <AutomaticStaking
                icon={pagethreesvg18}
                title={intl.formatMessage({ id: "trade.config.item9.title" })}
                toolt={intl.formatMessage({ id: "trade.config.item9.toolt" })}
                field="can_automatic_staking"
                user={snap.session?.user}
                api={api}
              />
              <AutomaticWithdrawal
                icon={pagethreesvg10}
                title={intl.formatMessage({ id: "trade.config.item10.title" })}
                toolt={intl.formatMessage({ id: "trade.config.item10.toolt" })}
                field="can_automatic_withdrawal"
                user={snap.session?.user}
                api={api}
              />
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </MyContent>
  );
};
