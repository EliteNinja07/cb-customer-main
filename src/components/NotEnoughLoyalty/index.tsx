import LoyaltyImg from "@/assets/images/Loyalty.svg";
import MoneyImg from "@/assets/images/usdc.svg";
import {
  Coins,
  formatMoney,
  getErrorMessage,
  request,
  stateActions,
  useMyState,
  useMyToast,
} from "../../common";
import {
  Button,
  Flex,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text,
  Alert,
  AlertIcon,
  Image,
  Icon,
} from "@chakra-ui/react";
import { parseUnits } from "ethers/lib/utils";
import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { erc20ABI, useContractWrite, usePrepareContractWrite } from "wagmi";
import dayjs from "dayjs/esm/index.js";
import { RepeatIcon } from "@chakra-ui/icons";

export default ({ id, methods, onChange }: any) => {
  const { showRes, showSuccess, showError } = useMyToast();
  const [preData, setPreDate] = useState<any>({});
  const { snap } = useMyState();
  // const [user, setUserInfo] = useState();
  const [amount, setAmount] = useState(0);
  const intl = useIntl();
  const [enable, setEnable] = useState(false);

  const { config } = usePrepareContractWrite({
    address: Coins[0].address as any,
    abi: erc20ABI,
    functionName: "transfer",
    args: [snap.session.user.usdcReceive, parseUnits("" + amount, 6)], // constants.MaxUint256,
    enabled: enable,
    onError(error) {
      stateActions.subLoading();
      setEnable(false);
      showError({ description: getErrorMessage(error.message, intl) });
    },
  });

  const { write } = useContractWrite({
    ...config,
    onError(error) {
      stateActions.subLoading();
      setEnable(false);
      showError({ description: getErrorMessage(error.message, intl) });
    },
    onSuccess(data) {
      stateActions.subLoading();
      console.log(data.hash, "data.hase");
      api.onSubmitDeposit(data.hash);
    },
  });

  const api = {
    onPreDeposit: () => {
      request("ai_trade/pre_deposit", { data: { pledge_profits_id: id } })
        .then((res: any) => {
          if (res?.code == 0) {
            console.log("preData", res.data);
            setPreDate(res?.data);
            setAmount(res.data?.need_staking_amount ?? 0);
          }
        })
        .catch((err: any) => {
          showRes(err);
        });
    },
    onSubmitDeposit: (hash: string) => {
      request("ai_trade/submit_deposit", {
        data: { pledge_profits_id: id, hash: hash },
      })
        .then((res: any) => {
          if (res?.code == 0) {
            onChange(true);
          }
        })
        .catch((err: any) => {
          showRes(err);
        });
    },
    on_pre_start_web3_deposit: () => {
      request("ai_trade/pre_start_web3_deposit", {
        data: { pledge_profits_id: id },
      })
        .then((res: any) => {
          // stateActions.addLoading();
          setEnable(true);
          write?.();
        })
        .catch((err: any) => {
          showRes(err);
        });
    },
  };

  useEffect(() => {
    if (id) {
      api.onPreDeposit();
    }
  }, [id]);

  return (
    <>
      {/* <Flex>
        <Text pb={6} pt={3} sx={{ fontSize: "1.2rem", fontWeight: "500" }}>
          <FormattedMessage id="text.RestoredOrder" />
        </Text>
      </Flex> */}
      <Flex w="full" pt={"2rem"}>
        <StatGroup w="full">
          <Stat w="full">
            <StatLabel>
              <FormattedMessage id="text.TotalLoyalty" />
            </StatLabel>
            <Flex>
              <Image w="25px" pr="5px" src={LoyaltyImg} />
              <StatNumber mb={0}>
                {formatMoney(preData?.user_loyalty_amount, "")}
              </StatNumber>
            </Flex>
          </Stat>
          <Stat w="full">
            <StatLabel>
              <FormattedMessage id="text.UserLoyaltyAmount" />
            </StatLabel>
            <Flex>
              <Image w="25px" pr="5px" src={LoyaltyImg} />
              <StatNumber mb={0}>
                {formatMoney(preData?.need_loyalty_amount, "")}
              </StatNumber>
            </Flex>
          </Stat>

          <Stat w="full">
            <StatLabel>
              <FormattedMessage id="text.NeedStakingAmount" />
            </StatLabel>
            <Flex>
              <Image w="25px" pr="5px" src={MoneyImg} />
              <StatNumber mb={0}>
                {formatMoney(preData?.need_staking_amount, "")}
              </StatNumber>
            </Flex>
          </Stat>
        </StatGroup>
      </Flex>
      <Flex pt={4}>
        <Alert status="warning" borderRadius="10px">
          <AlertIcon />
          <Text flexDir="column">
            <FormattedMessage id="text.Before" />
            <Text as="b" sx={{ color: "#0078ff" }}>
              {dayjs().add(7, "day").format("DD/MM/YYYY")}
            </Text>
            <FormattedMessage id="text.BeforeText" />
            <Button
              variant="link"
              colorScheme="messenger"
              ml={2}
              onClick={() => methods?.onRecharge(id)}
            >
              <FormattedMessage id="text.Recharge.btn" />
            </Button>
          </Text>
        </Alert>
      </Flex>
      <Flex sx={{ justifyContent: "center" }} pt={10} pb={5}>
        <Button
          colorScheme="messenger"
          onClick={() => {
            if (preData?.need_staking_amount == 0) {
              api.onSubmitDeposit("");
            } else {
              api.on_pre_start_web3_deposit();
            }
          }}
        >
          <FormattedMessage
            id={
              preData?.need_staking_amount > 0
                ? "text.Recharge"
                : "text.Restored"
            }
          />
        </Button>
        <Button
          ml={2}
          onClick={() => {
            if (id) {
              api.onPreDeposit();
            }
          }}
        >
          <Icon as={RepeatIcon} />
        </Button>
      </Flex>
    </>
  );
};
