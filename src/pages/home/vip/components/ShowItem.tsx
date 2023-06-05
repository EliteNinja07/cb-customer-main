import MoneyImg from "@/assets/images/usdc.svg";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Flex, Icon, Image } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { formatMoney, MyIcon } from "../../../../common";

export default ({ name, value, key1, active }: any) => {
  const intl = useIntl();
  const renderSwitch = (name: string, value: any) => {
    switch (key1) {
      case "daily_referral_rewards":
        return value;
      case "level_1_refer":
      case "level_2_refer":
      case "level_3_refer":
        return value * 100 + "%";
      case "leveraged_investment":
        return value === 1 ? (
          <MyIcon color="#a70000" icon="" fontSize="17px" />
        ) : (
          value + "X"
        );
      case "loan_charges":
        return value === 1 ? (
          <MyIcon color="#a70000" icon="" fontSize="17px" />
        ) : (
          Math.round(value * 100) + "%"
        );
      case "minimum_apy_guarantee":
        return value === 0 ? (
          <MyIcon color="#a70000" icon="" fontSize="17px" />
        ) : (
          Math.round(value * 100) + "%"
        );
      case "minimum_withdrawal_limit":
      case "maximum_withdrawal_limit":
        return (
          <Flex>
            <Image w="20px" pr="5px" src={MoneyImg} /> {formatMoney(value, "")}
          </Flex>
        );
      case "number_of_withdrawals":
        return value === 1 ? 1 : intl.formatMessage({ id: "text.Unlimited" });
      case "withdrawal_time":
        return "T + " + value;
      case "network_fee":
        return (
          intl.formatMessage({ id: "text.Fee" }) +
          " * " +
          Math.round(value * 100) +
          "%"
        );
      case "max_staking_term":
        return value === 7
          ? value + " " + intl.formatMessage({ id: "text.Days" })
          : 7 + " ~ " + value + " " + intl.formatMessage({ id: "text.Days" });
      default:
        return value === 1 ? (
          <Icon color="#00A76A" fontSize="17px" as={CheckCircleIcon} />
        ) : (
          <MyIcon color="#a70000" icon="" fontSize="17px" />
        );
    }
  };

  return (
    <Flex
      w="full"
      minW="140px"
      borderLeft="1px solid #acacac4d"
      alignItems="center"
      justifyContent="center"
      bg={active ? "#aba6ff12" : ""}
      fontSize="14px"
    >
      {renderSwitch(name, value)}
    </Flex>
  );
};
