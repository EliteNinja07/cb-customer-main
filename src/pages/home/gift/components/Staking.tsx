import { ArrowBackIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Icon,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { parseUnits } from "ethers/lib/utils";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { erc20ABI, useContractWrite, usePrepareContractWrite } from "wagmi";
import DefLogo from "../../../../assets/images/logo-small.svg";
import MoneyImg from "../../../../assets/images/usdc.svg";
import {
  Coins,
  getErrorMessage,
  PrimaryButton,
  request,
  stateActions,
  useMyToast,
} from "../../../../common";
import InputChange from "./InputChange";
import SelectAsset from "./SelectAsset";

const styles = {
  FormC: {
    border: "1px solid #b2b2b238",
    borderRadius: "8px",
  },
  MPointer: {
    cursor: "pointer",
  },
  ArrowBackIcon: {
    position: "absolute",
  },
};

export default ({ user, api }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [coin, setCoin] = useState(Coins[0]);
  const [inputAmount, setInputAmount] = useState("");
  const intl = useIntl();
  const { showError, showSuccess } = useMyToast();

  const { config } = usePrepareContractWrite({
    address: coin.address as any,
    abi: erc20ABI,
    functionName: "transfer",
    args: inputAmount
      ? [
          coin.symbol == "USDC" ? user.usdcReceive : user.usdtReceive,
          parseUnits(inputAmount, 6),
        ]
      : undefined, // constants.MaxUint256,
    enabled: Boolean(inputAmount),
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
      request("gift/exchange", {
        data: {
          amount: inputAmount,
          hash: data.hash,
        },
      })
        .then(() => {
          showSuccess({
            description: intl.formatMessage({ id: "success.StakingSuccess" }),
          });
          api.onExchange();
        })
        .catch((err) => {
          showError({
            description: intl.formatMessage({ id: "error.common" }),
          });
        });
    },
  });

  const ViInputAmount = () => {
    //判断条件，是否可提交
    let numVal = parseFloat(inputAmount);
    if (!numVal || numVal <= 0) {
      return {
        status: true,
        label: <FormattedMessage id="transfer.requiredAmount2" />,
      };
    }
    if (!coin.id) {
      return {
        status: true,
        label: <FormattedMessage id="transfer.requiredAmount5" />,
      };
    }
    return { status: false, label: "" };
  };

  const onSubmit = () => {
    api.onPreExchange({ amount: inputAmount }, () => {
      stateActions.addLoading();
      write?.();
    });
  };

  return (
    <Flex flexDir="column">
      <Flex
        justifyContent="center"
        alignItems="center"
        pt={8}
        pb={2}
        color="#0052ff"
      >
        <InputChange
          defaultval={inputAmount}
          value={inputAmount}
          formLabel={<FormattedMessage id="text.AirdropCoupon" />}
          placeholder="0"
          onChange={(val: any) => {
            setInputAmount(val);
          }}
        />
      </Flex>
      <Flex
        color="#5b616e"
        w="full"
        justifyContent="center"
        mb={4}
        h="18px"
        sx={{ textAlign: "center" }}
      >
        {ViInputAmount().label}
      </Flex>
      {/* <Flex justifyContent="center">
        <Text
          color="#89909e"
          borderRadius="6px"
          border="1px solid #dedfe2"
          py={0.5}
          px={4}
          fontSize="1rem"
          bg="#f5f8ff"
          onClick={() => {
            setInputAmount(coin?.balance);
          }}
        >
          Staking all
        </Text>
      </Flex> */}
      <Flex
        mx={{ base: 1, sm: 1, md: 9, lg: 9 }}
        sx={styles.FormC}
        mt={6}
        flexDir="column"
      >
        <Flex
          alignItems="center"
          py="24px"
          px={{ base: 2, sm: 2, md: 4, lg: 4 }}
          color="#5b616e"
          w="full"
          sx={styles.MPointer}
          onClick={onOpen}
        >
          <Flex
            alignItems="center"
            w="140px"
            pl={{ base: 1, sm: 1, md: 3, lg: 3 }}
          >
            <Text
              pr={{ base: 2, sm: 2, md: 4, lg: 4 }}
              fontWeight="410"
              w={{ base: "85px", sm: "85px", md: "100px", lg: "100px" }}
            >
              <FormattedMessage id="text.Coin" />
            </Text>
            <Image
              borderRadius="full"
              w="30px"
              h="30px"
              src={coin?.icon || MoneyImg}
            />
          </Flex>
          <Flex flex="1" pl={3}>
            <Text>{coin?.symbol || "USD Coin"}</Text>
          </Flex>
          <Icon fontSize="30px" as={ChevronRightIcon} />
        </Flex>
        <Divider />
        <Flex
          alignItems="center"
          py="24px"
          px={{ base: 2, sm: 2, md: 4, lg: 4 }}
          color="#5b616e"
          w="full"
        >
          <Flex
            alignItems="center"
            w="140px"
            pl={{ base: 1, sm: 1, md: 3, lg: 3 }}
          >
            <Text
              pr={{ base: 2, sm: 2, md: 4, lg: 4 }}
              fontWeight="410"
              w={{ base: "85px", sm: "85px", md: "100px", lg: "100px" }}
            >
              <FormattedMessage id="text.To" />
            </Text>
            <Image borderRadius="full" w="30px" h="30px" src={DefLogo} />
          </Flex>
          <Flex flex="1" pl={3}>
            <Text>Coinbase</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex mx={9} py={5}>
        <PrimaryButton
          w="full"
          h="50px"
          isDisabled={ViInputAmount().status}
          onClick={onSubmit}
        >
          <FormattedMessage id="text.Continue" />
        </PrimaryButton>
      </Flex>
      {/* <Flex alignItems="center" px={9} py={5} color="#5b616e">
        <Flex w="full">
          <Text>{lang?.USDCBalance}</Text>
        </Flex>
        <Flex w="full" textAlign="right">
          <Text w="full">
            {coin?.balance} {coin.symbol} ≈
            {formatMoney(coin.balance * usdcPrice)}
          </Text>
        </Flex>
      </Flex> */}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex alignItems="center" pt={3} pb={2}>
              <Flex sx={styles.ArrowBackIcon} onClick={onClose}>
                <Icon as={ArrowBackIcon} />
              </Flex>
              <Flex w="full" textAlign="center">
                <Text fontWeight="var(--cds-fontWeights-medium)" w="full">
                  <FormattedMessage id="text.SelectAsset" />
                </Text>
              </Flex>
            </Flex>
          </ModalHeader>
          <SelectAsset
            defaultVal={coin}
            onChange={(res: any) => {
              setCoin(res);
              onClose();
            }}
          />
        </ModalContent>
      </Modal>
    </Flex>
  );
};
