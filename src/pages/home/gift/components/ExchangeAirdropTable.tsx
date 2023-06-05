import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { ConfigProvider } from "antd";
import { FormattedMessage } from "react-intl";
import { formatMoney, getDayYmHm } from "../../../../common";
import { MyPagination } from "../../../../components/MyPagination";
import NoActivity from "../../../../components/NoActivity";

export default ({ tdata, pagination }: any) => {
  const defauleDark = useColorModeValue("ant", "antdark");
  return (
    <Flex flexDir="column">
      <TableContainer pt="3px" w="100%">
        <Table variant="simple" size="md" w="100%">
          <Thead h="50px" w="100%">
            <Tr>
              <Th>
                <FormattedMessage id="text.Date" />
              </Th>
              <Th>
                <FormattedMessage id="text.Status" />
              </Th>
              <Th>
                <FormattedMessage id="text.ReceivedAmount" />
              </Th>
            </Tr>
          </Thead>
          <Tbody w="100%">
            {tdata?.data?.map((res: any, index: number) => {
              return (
                <Tr key={index}>
                  <Td>
                    {formatMoney(res?.coin_amount, "")}{" "}
                    <FormattedMessage id="text.AirdropCoupon" />
                  </Td>
                  <Td>
                    <FormattedMessage id={`text.` + res.status} />
                  </Td>
                  <Td>{getDayYmHm(res.created_at)}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {!tdata?.data || tdata?.data?.length == 0 ? <NoActivity /> : ""}
      <ConfigProvider prefixCls={defauleDark}>
        <MyPagination {...pagination} />
      </ConfigProvider>
    </Flex>
  );
};
