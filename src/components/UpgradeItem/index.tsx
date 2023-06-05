import MoneyImg from "@/assets/images/usdc.svg";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { parseUnits } from "ethers/lib/utils.js";
import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useSetState } from "react-use";
import { erc20ABI, useContractWrite, usePrepareContractWrite } from "wagmi";
import {
  Coins,
  formatMoney,
  getErrorMessage,
  request,
  stateActions,
  useMyState,
  useMyToast,
} from "../../common";

export default function UpgradeItem({ onChange }: any) {
  const { snap } = useMyState();
  const { showRes, showSuccess, showError } = useMyToast();
  const [items, setItems] = useState<any>([]);
  const intl = useIntl();

  const [dataRes, setDataRes] = useSetState<any>({
    is_buy: false,
    loyalty: 1000,
    staking: "",
  });

  const api = {
    onPreDeposit: () => {
      request("ai_trade/pre_staking_reward_loyalty", {})
        .then((res: any) => {
          if (res?.code == 0) {
            setItems(res?.data);
          }
        })
        .catch((err: any) => {
          showRes(err);
        });
    },
    onStakingRewardLoyalty: (data: any) => {
      request("ai_trade/staking_reward_loyalty", { data: data })
        .then((res: any) => {
          if (res?.code == 0) {
            showRes(res);
            onChange();
          }
        })
        .catch((err: any) => {
          showRes(err);
        });
    },
  };

  const { config } = usePrepareContractWrite({
    address: Coins[0].address as any,
    abi: erc20ABI,
    functionName: "transfer",
    args: dataRes?.staking
      ? [snap?.session?.user?.usdcReceive, parseUnits("" + dataRes?.staking, 6)]
      : undefined,
    enabled: Boolean(dataRes?.staking),
    onError(error) {
      stateActions.subLoading();
      showError({ description: getErrorMessage(error.message, intl) });
    },
  });

  const { write } = useContractWrite({
    ...config,
    onError(error) {
      setDataRes({
        is_buy: false,
        loyalty: 1000,
        staking: "",
      });
      stateActions.subLoading();
      showError({ description: getErrorMessage(error.message, intl) });
    },
    onSuccess(res) {
      stateActions.subLoading();
      let params = {
        amount: parseFloat(dataRes?.staking),
        hash: res.hash,
      };
      api.onStakingRewardLoyalty(params);
    },
  });

  useEffect(() => {
    if (items?.length == 0) {
      api?.onPreDeposit();
    }
  }, []);

  useEffect(() => {
    if (dataRes?.staking > 0) {
      if (write) {
        write?.();
      }
    }
  }, [dataRes]);

  return (
    <Flex pb={10} pt={2} w="full">
      <SimpleGrid
        w="full"
        spacing={6}
        columns={2}
        templateColumns="repeat(auto-fill, minmax(300px, 2fr))"
      >
        {items?.map((res: any, index: number) => {
          return (
            <Card key={`Recharging_${index}`}>
              <CardBody>
                <Flex
                  sx={{ alignItems: "center", justifyContent: "space-between" }}
                >
                  <Text fontSize="1.1rem">
                    <FormattedMessage id="text.Staking" />
                  </Text>
                  <Flex alignItems="center">
                    <Image w="23px" src={MoneyImg} mr={1} />
                    <Text>{formatMoney(res?.staking, "USDC")}</Text>
                  </Flex>
                </Flex>
                <Flex
                  sx={{
                    py: 3,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text fontSize="1.1rem">
                    <FormattedMessage id="text.reward.loyalty" />
                  </Text>
                  <Flex>{res?.loyalty} LOYALTY</Flex>
                </Flex>
                <Flex pt={2}>
                  <Button
                    w="full"
                    onClick={() => {
                      setDataRes(res);
                    }}
                    isDisabled={res?.is_buy}
                    colorScheme="messenger"
                  >
                    <FormattedMessage id="text.Staking" />
                  </Button>
                </Flex>
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
}
