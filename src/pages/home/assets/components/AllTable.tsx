import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Flex,
  Th,
  Tbody,
  Td,
  useColorModeValue,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { MyPagination } from "../../../../components/MyPagination";
import NoActivity from "../../../../components/NoActivity";
import { ConfigProvider } from "antd";
import { formatCoins, getDayYmHm, useListPage } from "../../../../common";

export default () => {
  const defauleDark = useColorModeValue("ant", "antdark");
  const { getData, getList, pagination, params } = useListPage({
    baseUri: "assets/all",
  });
  return (
    <Flex flexDir="column" w="full">
      <ConfigProvider prefixCls={defauleDark}>
        {getData?.data?.length > 0 ? (
          <TableContainer pt="3px" w="100%">
            <Table variant="simple" size="md" w="100%">
              <Thead h="50px" w="100%">
                <Tr>
                  <Th>
                    <FormattedMessage id="text.Date" />
                  </Th>
                  <Th>
                    <FormattedMessage id="text.Type" />
                  </Th>
                  <Th>
                    <FormattedMessage id="text.Before" />
                  </Th>
                  <Th>
                    <FormattedMessage id="text.Amount" />
                  </Th>
                  <Th>
                    <FormattedMessage id="text.After" />
                  </Th>
                  <Th>
                    <FormattedMessage id="text.Remark" />
                  </Th>
                </Tr>
              </Thead>
              <Tbody w="100%">
                {getData?.data?.map((res: any, index: number) => {
                  return (
                    <Tr key={index}>
                      <Td>{getDayYmHm(res.created_at)}</Td>
                      <Td>
                        <FormattedMessage id={`text.${res?.type}`} />
                      </Td>
                      <Td>{formatCoins(res?.before, "USDC")}</Td>
                      <Td>{formatCoins(res?.amount, "USDC")}</Td>
                      <Td>{formatCoins(res?.after, "USDC")}</Td>
                      <Td>
                        <FormattedMessage id={`text.${res?.remark}`} />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <NoActivity />
        )}

        <MyPagination {...pagination} />
      </ConfigProvider>
    </Flex>
  );
};
