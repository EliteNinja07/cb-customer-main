import { Flex, Divider } from "@chakra-ui/react";
import EnclosedTab from "./EnclosedTab";
import StakingTable from "./StakingTable";
import WithdrawableTable from "./WithdrawableTable";
import PendingTable from "./PendingTable";
import { useState } from "react";
import WalletTable from "./WalletTable";
import MyNoActivity from "../../../../components/NoActivity";
import { FormattedMessage } from "react-intl";
import AllTable from "./AllTable";
import { MyCard, TextCardHeader } from "../../../../common";

export default ({ res, onRefresh }: any) => {
  const [getIdx, setIdx] = useState(0);
  const ShowTable = (idx: number) => {
    if (idx == 0) {
      return <AllTable />;
    }
    if (idx == 1 && res?.staking && res?.staking.length > 0) {
      return <StakingTable tdata={res?.staking} />;
    }
    if (idx == 2 && res?.withdrawable && res?.withdrawable.length > 0) {
      return (
        <WithdrawableTable tdata={res?.withdrawable} onRefresh={onRefresh} />
      );
    }
    if (idx == 3 && res?.pending && res?.pending.length > 0) {
      return <PendingTable tdata={res?.pending} />;
    }
    if (idx == 4) {
      return <WalletTable />;
    }
    return (
      <MyNoActivity label={<FormattedMessage id="text.NoActivityYet" />} />
    );
  };
  return (
    <>
      <MyCard flexDir="column">
        <Flex
          w="full"
          flexWrap="wrap"
          alignItems="center"
          justifyContent={{
            base: "center",
            sm: "center",
            md: "flex-end",
            lg: "flex-end",
          }}
          py={1}
        >
          <TextCardHeader flex="1">
            <FormattedMessage id="text.YourAssets" />
          </TextCardHeader>
          <Flex pb={{ base: 1, sm: 1, md: 0, lg: 0 }}>
            <EnclosedTab
              idx={0}
              onChange={(idx: number) => {
                setIdx(idx);
              }}
            />
          </Flex>
        </Flex>
        <Divider />
        <Flex>{ShowTable(getIdx)}</Flex>
      </MyCard>
    </>
  );
};
