import { TableContainer, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import CoinBalance from "./CoinBalance";
import { FormattedMessage } from "react-intl";
import { Coins, useMyState } from "../../../../common";

export default () => {
  const { snap } = useMyState();
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
              <FormattedMessage id="text.Operate" />
            </Th>
          </Tr>
        </Thead>
        <Tbody w="100%">
          {Coins.map((coin) => (
            <CoinBalance coin={coin} key={coin.id} user={snap.session.user} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
