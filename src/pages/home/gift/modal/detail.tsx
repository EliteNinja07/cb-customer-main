import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Flex,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import {
  formatCoins,
  getDayYmHm,
  request,
  useMyToast,
} from "../../../../common";
import NoActivity from "../../../../components/NoActivity";
import { useEffect, useState } from "react";
import MyUserInfo from "../../../../components/MyUser";

export default ({ tdata, lang }: any) => {
  const { showRes, showSuccess } = useMyToast();
  const [resData, setData] = useState<any>({});
  const getDet = () => {
    request("gift/detail", { data: tdata })
      .then((res) => {
        setData(res?.data);
      })
      .catch(showRes);
  };
  useEffect(() => {
    getDet();
  }, []);
  return (
    <Flex flexDir="column">
      <TableContainer pt="3px" w="100%">
        <Table variant="simple" size="md" w="100%">
          <Thead h="50px" w="100%">
            <Tr>
              <Th>{lang?.td1}</Th>
              <Th>{lang?.td2}</Th>
              <Th>{lang?.td3}</Th>
            </Tr>
          </Thead>
          <Tbody w="100%">
            {resData?.gift_details?.map((res: any, index: number) => {
              return (
                <Tr key={index}>
                  <Td>
                    <MyUserInfo tdata={res?.from} />
                  </Td>
                  <Td>{getDayYmHm(res.created_at)}</Td>
                  <Td>{formatCoins(res.amount, "USDC")}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {!resData?.gift_details || resData?.gift_details?.length == 0 ? (
        <NoActivity />
      ) : (
        ""
      )}
    </Flex>
  );
};
