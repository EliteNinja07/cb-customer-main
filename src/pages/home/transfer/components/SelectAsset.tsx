import { CheckIcon } from "@chakra-ui/icons";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSetState } from "react-use";
import { formatCoins, formatMoney, useMyState } from "../../../../common";
import Tabs from "./Tabs";

const styles = {
  SearchC: {
    border: "1px solid #b2b2b238",
    borderRadius: "8px",
  },
  cell_select: {
    borderRadius: "5px",
    cursor: "pointer",
    _hover: {
      backgroundColor: "#f6f6f6",
      _dark: {
        backgroundColor: "#000",
      },
    },
    "&.active": {
      backgroundColor: "#f6f6f6",
      _dark: {
        backgroundColor: "#000",
      },
    },
  },
};

const Asset = ({ coin, index, coinIndex, onChange }: any) => {
  // const { data } = useContractRead({
  //   address: coin.address,
  //   abi: erc20ABI,
  //   functionName: "balanceOf",
  //   args: [user.address],
  // });

  // const setBalance = (res: any) => {
  //   res.balance = formatMyUnits(data, 6).replace(",", "");
  //   return res.balance;
  // };

  return (
    <Flex
      key={index}
      mx={10}
      alignItems="center"
      px={5}
      py={4}
      mb={6}
      sx={styles.cell_select}
      className={index == coinIndex ? "active" : ""}
      onClick={() => {
        onChange(coin, index);
      }}
    >
      <Image w="40px" h="40px" borderRadius="full" src={coin.icon} />
      <Flex flex="1" flexDir="column" px={4}>
        <Text
          fontSize="17px"
          fontWeight="var(--cds-fontWeights-medium)"
          lineHeight="20px"
        >
          {coin.name}
        </Text>
        <Text fontSize="14px" color="#89909e">
          {coin.symbol}
        </Text>
      </Flex>
      <Flex flexDir="column" textAlign="right">
        <Text
          w="full"
          fontSize="17px"
          fontWeight="var(--cds-fontWeights-medium)"
          lineHeight="20px"
        >
          {formatCoins(coin.balance, coin.symbol)}
        </Text>
        <Text w="full" fontSize="14px" color="#89909e">
          {formatMoney(coin.usd, " ≈ $")}
        </Text>
      </Flex>
      {index == coinIndex ? (
        <Flex pl={5}>
          <Icon as={CheckIcon} color="#0052ff" />
        </Flex>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default ({
  coinIndex,
  coins,
  modalType,
  modalName,
  onChange,
  modalTypeItems,
}: any) => {
  const [getAct, setAct] = useState<any>(coins[modalType]);
  const { snap } = useMyState();
  const [selects, setSelects] = useSetState({
    modalType: modalType,
    coinIndex: coinIndex,
    modalName: modalName,
    conin: {},
  });

  useEffect(() => {
    console.log(modalType, coins[modalType], "coins[modalType]");
    setAct(coins[modalType]);
  }, []);

  return (
    <Flex flexDir="column" w="full" minHeight={300} px={3}>
      <Tabs
        value={selects?.modalType}
        items={modalTypeItems}
        onChange={(val: string, index: number) => {
          setAct(coins[val]);
          setSelects({
            modalType: val,
            modalName: modalTypeItems[index].label,
          });
        }}
      />
      <Flex pt={5} w="full" flexDir="column">
        {getAct?.map((coin: any, index: number) => {
          return (
            <Asset
              key={index}
              coin={coin}
              index={index}
              coinIndex={coinIndex}
              // getAct={getAct}
              onChange={(val: any, idx: number) => {
                setSelects({
                  conin: val,
                  coinIndex: idx,
                });
                onChange({
                  ...selects,
                  ...{
                    conin: val,
                    coinIndex: idx,
                  },
                });
              }}
              // setAct={setAct}
              // user={snap.session.user}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
