import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Flex,
  Th,
  Tbody,
  Td,
  Text,
  Image,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { formatMoney, formatCoins, getDayYmHm } from "../../../../common";

export default ({ tdata }: any) => {
  return (
    <TableContainer pt="3px" w="100%">
      <Table variant="simple" size="md" w="100%">
        <Thead h="50px" w="100%">
          <Tr>
            <Th>
              <FormattedMessage id="text.Name" />
            </Th>
            <Th>
              <FormattedMessage id="text.Balance" />
            </Th>
            <Th>
              <FormattedMessage id="text.Type" />
            </Th>
            <Th>
              <FormattedMessage id="text.Status" />
            </Th>
            <Th sx={{ textAlign: "right" }}>
              <FormattedMessage id="text.CreatedTime" />
            </Th>
          </Tr>
        </Thead>
        <Tbody w="100%">
          {tdata?.map((item: any) => {
            return (
              <Tr key={"tr_" + item.id}>
                <Td alignItems="center">
                  <Flex>
                    <Image
                      borderRadius="full"
                      src={item?.icon}
                      w="32px"
                      h="32px"
                      mr="2"
                    />
                    <Flex alignItems="center">
                      <Text fontWeight="410" lineHeight="1rem">
                        {item?.symbol}
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>
                  <Flex flexDir="column">
                    <Text w="full" sx={{ fontSize: "1rem" }}>
                      {formatMoney(item.balance, "")} {item?.symbol}
                    </Text>
                    <Text
                      w="full"
                      sx={{ color: "#89909e", fontSize: "0.9rem" }}
                    >
                      (FEE:{formatCoins(item?.pending_fee, "USDC")})
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <FormattedMessage id={`text.` + item.pending_type} />
                </Td>
                <Td>
                  <FormattedMessage id={`text.` + item.pending_status} />
                </Td>
                <Td sx={{ textAlign: "right" }}>
                  {getDayYmHm(item?.created_at)}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
