import { Divider } from "@chakra-ui/react";
import { useState } from "react";
import { MyCard, MyContent } from "../../../common";
import MyNoActivity from "../../../components/NoActivity";
import PageForm from "./components/PageForm";
import PageHead from "./components/PageHead";
import PageTable from "./components/PageTable";
import PieChart from "./components/PieChart";
import "./style.scss";

export default () => {
  let tableArr: any = [];
  const [tableData, setTableDate] = useState([]);
  const methods = {
    onCalculation: (formData: any) => {
      if (
        formData?.staking &&
        formData?.apy &&
        formData?.vip &&
        formData?.level &&
        formData?.days &&
        formData?.interestType
      ) {
        let interest = 0; //上次利息
        let days = parseInt(formData?.days);
        let staking = parseFloat(formData?.staking);
        for (let i = 0; days > i; i++) {
          let apy = parseInt(formData?.apy);
          let level = parseInt(formData?.level);
          let vip = parseFloat(formData?.vip);
          let income1 = (staking * level * (apy / 100)) / 365;
          let income2 = ((staking * (level - 1) * (apy / 100)) / 365) * vip;
          let interestone = income1 - income2; //收益
          let totalincome = interestone + interest; //总收益
          methods.CalculationList(
            i + 1,
            staking,
            interestone,
            totalincome,
            formData?.interestType == 1
              ? staking + interestone
              : staking + totalincome
          );
          interest = totalincome;
          staking =
            formData?.interestType == 1 ? staking + interestone : staking;
        }
      }
    },
    CalculationList: (
      idx: number,
      staking: any,
      interest: any,
      totalinterest: any,
      totalprice: any
    ) => {
      tableArr.push({
        days: idx,
        staking: staking,
        interest: interest,
        totalinterest: totalinterest,
        totalprice: totalprice,
      });
      setTableDate(JSON.parse(JSON.stringify(tableArr)));
    },
  };

  return (
    <MyContent w="100%">
      <MyCard flexDir="column">
        <PageHead />
        <Divider />
        <PageForm onChange={methods.onCalculation} />
        <Divider />
        {tableData?.length > 0 ? (
          <>
            <PieChart tdata={tableData} />
            <Divider />
          </>
        ) : (
          ""
        )}
        <PageTable tdata={tableData} />
        {tableData?.length == 0 ? <MyNoActivity /> : ""}
      </MyCard>
    </MyContent>
  );
};
