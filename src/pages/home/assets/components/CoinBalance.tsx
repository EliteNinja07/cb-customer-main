import {
  formatBigIntegerToFloat,
  formatMyUnits,
  getErrorMessage,
  PrimaryButton,
  request,
  stateActions,
  useMyToast,
} from "../../../../common";
import { Avatar, Flex, Td, Text, Tr } from "@chakra-ui/react";
import { parseUnits } from "ethers/lib/utils";
import { useEffect, useState } from "react";
import {
  erc20ABI,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { FormattedMessage, useIntl } from "react-intl";

export default ({ coin, user }: any) => {
  const [amount, setAmount] = useState(0);
  const { showError, showSuccess } = useMyToast();
  const intl = useIntl();

  const { data } = useContractRead({
    address: coin.address,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [user.address],
  });

  useEffect(() => {
    setAmount(formatBigIntegerToFloat(data));
  }, [data]);

  const { config } = usePrepareContractWrite({
    address: coin.address,
    abi: erc20ABI,
    functionName: "transfer",
    args: [
      coin.symbol == "USDC" ? user.usdcReceive : user.usdtReceive,
      parseUnits("" + amount, 6),
    ], // constants.MaxUint256
    onError(error) {
      stateActions.subLoading();
      showError({ description: getErrorMessage(error.message, intl) });
    },
  });

  const { write } = useContractWrite({
    ...config,
    onError(error) {
      stateActions.subLoading();
      showError({ description: getErrorMessage(error.message, intl) });
    },
    onSuccess(data) {
      stateActions.subLoading();
      let params = {
        coins_id: coin.id,
        symbol: coin.symbol,
        input_amount: amount,
        hash: data.hash,
      };
      console.log("onSuccess", params);
      request("transfer/staking", { data: params })
        .then(() => {
          showSuccess({
            description: intl.formatMessage({ id: "success.StakingSuccess" }),
          });
        })
        .catch((err) => {
          showError({
            description: intl.formatMessage({ id: "error.common" }),
          });
        });
    },
  });

  const api = {
    onPreStaking: (params: any) => {
      return request("transfer/pre_staking", { data: params }).then(() => {
        write?.();
      });
    },
  };

  return (
    <Tr key={coin.id}>
      <Td alignItems="center">
        <Flex>
          <Avatar src={coin.icon} w="32px" h="32px" mr="2" />
          <Flex flexDir="column">
            <Text fontWeight="410" lineHeight="1rem">
              {coin.name}
            </Text>
            <Text fontSize="13px">{coin.symbol}</Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        {formatMyUnits(data, 6)} {coin?.symbol}
      </Td>
      <Td sx={{ textAlign: "right" }}>
        <PrimaryButton
          px={4}
          w="120px"
          fontSize="14px"
          py={0}
          onClick={() => {
            console.log("amount", amount);
            stateActions.addLoading();
            api.onPreStaking({
              symbol: coin.symbol,
              input_amount: amount,
            });
          }}
        >
          <FormattedMessage id="text.Staking" />
        </PrimaryButton>
      </Td>
    </Tr>
  );
};
