import { Flex, useColorModeValue } from "@chakra-ui/react";
import FundsListTable from "./FundsListTable";
import { FormattedMessage } from "react-intl";
import { ConfigProvider } from "antd";
import {
  MyCard,
  MyCardBody,
  MyCardDivider,
  TextCardHeader,
} from "../../../../common";

export default ({ api, profits, pagination, tdata }: any) => {
  const defauleDark = useColorModeValue("ant", "antdark");
  return (
    <MyCard mt="4">
      <MyCardBody>
        <TextCardHeader>
          <FormattedMessage id="text.EarningDetails" />
        </TextCardHeader>
        <Flex flexDir="column" w="full" px={6}>
          <MyCardDivider></MyCardDivider>
          <ConfigProvider prefixCls={defauleDark}>
            <FundsListTable
              profits={profits}
              api={api}
              pagination={pagination}
              getData={tdata}
            />
          </ConfigProvider>
        </Flex>
      </MyCardBody>
    </MyCard>
  );
};
