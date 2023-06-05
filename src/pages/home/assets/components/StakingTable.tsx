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
import { formatMoney } from "../../../../common";

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
            <Th sx={{ textAlign: "right" }}>
              <FormattedMessage id="text.StakingEndedAt" />
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
                      {/* <Text fontSize="13px">{item?.name}</Text> */}
                    </Flex>
                  </Flex>
                </Td>
                <Td>
                  {formatMoney(item.balance)} {item?.symbol}
                </Td>
                <Td sx={{ textAlign: "right" }}>{item?.staking_ended_at}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
