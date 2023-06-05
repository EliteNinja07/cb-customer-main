import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Coins, formatMyUnits, useMyState } from "../../../../common";
import { useState } from "react";
import { erc20ABI, useContractRead } from "wagmi";

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

const Asset = ({ coin, user, index, getAct, onChange, setAct }: any) => {
  const { data } = useContractRead({
    address: coin.address,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [user.address],
  });

  const setBalance = (res: any) => {
    res.balance = formatMyUnits(data, 6).replace(",", "");
    return res.balance;
  };

  return (
    <Flex
      key={index}
      mx={10}
      alignItems="center"
      px={5}
      py={4}
      mb={6}
      sx={styles.cell_select}
      className={coin.id == getAct.id ? "active" : ""}
      onClick={() => {
        onChange(coin);
        setAct(coin);
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
          {setBalance(coin)} {coin?.symbol}
        </Text>
        <Text w="full" fontSize="14px" color="#89909e">
          {/* {formatMoney(coin.price, "$")} */}
        </Text>
      </Flex>
      {coin.id == getAct.id ? (
        <Flex pl={5}>
          <Icon as={CheckIcon} color="#0052ff" />
        </Flex>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default ({ defaultVal, onChange }: any) => {
  const [getAct, setAct] = useState<any>(defaultVal);
  const { snap } = useMyState();

  return (
    <>
      {Coins?.map((coin: any, index: number) => {
        return (
          <Asset
            key={index}
            coin={coin}
            index={index}
            getAct={getAct}
            onChange={onChange}
            setAct={setAct}
            user={snap.session.user}
          />
        );
      })}
    </>
  );
};
