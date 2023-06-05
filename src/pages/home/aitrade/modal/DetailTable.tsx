import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
  Text,
  Highlight,
  AvatarGroup,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { formatMoney, formatPercent } from "../../../../common";
import MoneyImg from "../../../../assets/images/usdc.svg";
import { CopyIcon } from "@chakra-ui/icons";
import { FormattedMessage } from "react-intl";

export default ({ tdata, lang }: any) => {
  return (
    <TableContainer
      w={{ base: "100vw", sm: "100vw", md: "100%", lg: "100%" }}
      sx={{ border: "1px solid #a2a2a226", margin: "3rem 0 1rem 0" }}
    >
      <Table variant="simple" size="md" w="100%">
        <Thead h="50px" w="100%">
          <Tr>
            <Th minW="120px">
              {lang?.td8}
              <FormattedMessage id="text.FundName" />
            </Th>
            <Th minW="150px">
              {lang?.td18}
              <FormattedMessage id="text.Capital(USDC)" />
            </Th>
            <Th minW="150px">
              {lang?.td19}
              <FormattedMessage id="text.ExchangeBefore" />
            </Th>
            <Th minW="200px">
              {lang?.td20}
              <FormattedMessage id="text.USDC->TOKEN" />
            </Th>
            <Th minW="120px">
              <FormattedMessage id="text.APY" />
            </Th>
            <Th minW="200px">
              {lang?.td21}
              <FormattedMessage id="text.PrincipalAndInterest" />
            </Th>
            <Th minW="150px">
              {lang?.td22}
              <FormattedMessage id="text.ExchangeAfter" />
            </Th>
            <Th minW="150px">
              {lang?.td23}
              <FormattedMessage id="text.TOKEN->USDC" />
            </Th>
          </Tr>
        </Thead>
        <Tbody w="100%">
          {tdata.map((fund: any, index: number) => (
            <Tr key={`tr_${index}`}>
              <Td>{fund.name}</Td>
              {/* <Td display="flex">
                <Image w="25px" pr="5px" src={MoneyImg} />
                {formatMoney(fund.capital_before)}
              </Td>
              <Td>1:{formatMoney(fund.exchange_price_before, "", 6)}</Td>
              <Td>
                <Flex alignItems="center">
                  <AvatarGroup max={2}>
                    {fund?.icons?.map((res: any, index: number) => {
                      return (
                        <Avatar
                          size="sm"
                          icon={<CopyIcon />}
                          src={res}
                          key={`avatar_items_${index}`}
                        />
                      );
                    })}
                  </AvatarGroup>
                  <Text pl={2}>{formatMoney(fund.tokens_before)}</Text>
                </Flex>
              </Td> */}
              {/* <Td display="flex">
                <Image w="25px" pr="5px" src={MoneyImg} />
                {formatMoney(fund.capital_before, "")}
              </Td> */}
              {/* <Td>1:{fund.exchange_price_before}</Td>
              <Td>{formatMoney(fund.tokens_before, "")}</Td> */}
              <Td>
                <Flex>
                  <Image w="25px" pr="5px" src={MoneyImg} />
                  {formatMoney(fund.capital_before, "")}
                </Flex>
              </Td>
              <Td>1:{formatMoney(fund.exchange_price_before, "", 6)}</Td>
              <Td>
                <Flex alignItems="center">
                  <AvatarGroup max={2}>
                    {fund?.icons?.map((res: any, index: number) => {
                      return res ? (
                        <Avatar
                          size="sm"
                          icon={<CopyIcon />}
                          src={res?.icon}
                          key={`avatar_items_one_${index}`}
                        />
                      ) : (
                        ""
                      );
                    })}
                  </AvatarGroup>
                  <Text pl={2}>{formatMoney(fund.tokens_before, "")}</Text>
                </Flex>
              </Td>
              <Td>{formatPercent(fund.apy)}</Td>
              <Td>
                <Flex alignItems="center">
                  <AvatarGroup max={2}>
                    {fund?.icons?.map((res: any, index: number) => {
                      return res ? (
                        <Avatar
                          size="sm"
                          icon={<CopyIcon />}
                          src={res?.icon}
                          key={`avatar_items_two_${index}`}
                        />
                      ) : (
                        ""
                      );
                    })}
                  </AvatarGroup>
                  <Text pl={2}>{formatMoney(fund.tokens_after, "")}</Text>
                </Flex>
              </Td>
              <Td>
                {formatMoney(fund.capital_before) <
                formatMoney(fund.capital_after) ? (
                  <Text>
                    <Highlight query="↗" styles={{ color: "#098551" }}>
                      {`↗ 1: ${formatMoney(fund.exchange_price_after, "", 6)}`}
                    </Highlight>
                  </Text>
                ) : (
                  <Text>
                    <Highlight query="↙" styles={{ color: "#cf202f" }}>
                      {`↙ 1: ${formatMoney(fund.exchange_price_after, "", 6)}`}
                    </Highlight>
                  </Text>
                )}
              </Td>
              <Td>
                <Flex>
                  <Image w="25px" pr="5px" src={MoneyImg} />
                  {formatMoney(fund.capital_after, "")}
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
