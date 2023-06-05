import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

export default ({ tdata }: any) => {
  const onToFixed = (val: any) => {
    return val?.toFixed(2);
  };
  return (
    <TableContainer pt="3px" w="100%">
      <Table variant="simple" size="md" w="100%">
        <Thead h="50px" w="100%">
          <Tr>
            <Th>
              <FormattedMessage id="text.Day" />
            </Th>
            <Th>
              <FormattedMessage id="text.Principal" />
            </Th>
            <Th>
              <FormattedMessage id="text.Interest" />
            </Th>
            <Th>
              <FormattedMessage id="text.TotalInterest" />
            </Th>
            <Th>
              <FormattedMessage id="text.PrincipalAndInterest" />
            </Th>
          </Tr>
        </Thead>
        <Tbody w="100%">
          {tdata?.map((res: any, index: number) => {
            return (
              <Tr key={`tds_${index}`}>
                <Td>{index + 1}</Td>
                <Td>${onToFixed(res?.staking)}</Td>
                <Td>${onToFixed(res?.interest)}</Td>
                <Td>${onToFixed(res?.totalinterest)}</Td>
                <Td>${onToFixed(res?.totalprice)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
