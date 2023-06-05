import {
  Flex,
  Image,
  Text,
  Icon,
  Divider,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { PrimaryButton } from "../../../../common";
import SelectAsset from "./SelectAsset";
import InputChange from "./InputChange";
import { useEffect, useState } from "react";
import {
  formatMoney,
  formatPercentNum,
} from "../../../../common/utils/formatHelper";
import AirdropImg from "../../../../assets/images/airdrop.svg";
import { FormattedMessage, useIntl } from "react-intl";

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
  SelectDef: {
    borderRadius: "6px",
    color: "#000",
    fontSize: "1rem",
    cursor: "pointer",
    _dark: {
      color: "#eee",
    },
  },
  SelectAct: {
    color: "#0052ff",
    borderRadius: "100px",
    fontSize: "1rem",
    bg: "#f5f8ff",
    cursor: "pointer",
  },
};
export default ({ api }: any) => {
  const { isOpen, onClose } = useDisclosure();
  const [resData, setData] = useState<any>({});
  const [resCount, setCountNumber] = useState("1");
  const [resAmount, setAmountNum] = useState<any>("");
  const [resActive, setActiveVal] = useState<string>("RandomAmount");
  const intl = useIntl();

  const listTab = [
    {
      label: intl.formatMessage({ id: "text.RandomAmount" }),
      value: "RandomAmount",
    },
    {
      label: intl.formatMessage({ id: "text.FixedAmount" }),
      value: "FixedAmount",
    },
  ];

  useEffect(() => {
    api.getPend(setData);
  }, []);

  const ViInputAmount = (data: any) => {
    if (!data?.count || !data?.amount) {
      return { status: true };
    }
    if (parseFloat(data?.amount) < parseFloat(resData?.data?.min)) {
      return { status: true };
    }
    return { status: false };
  };

  return (
    <Flex flexDir="column">
      <Flex
        justifyContent="center"
        alignItems="center"
        pt={8}
        pb={2}
        flexDir="column"
        color="#0052ff"
      >
        <Flex>
          <InputChange
            defaultval={resAmount}
            value={resAmount}
            placeholder="0"
            formLabel={<FormattedMessage id="text.AirdropCoupon" />}
            onChange={(val: any) => {
              setAmountNum(val);
            }}
          />
        </Flex>
        <Flex justifyContent="center">
          {listTab?.map((res: any, index: number) => {
            return (
              <Text
                key={`tabs_${index}`}
                sx={
                  res?.value == resActive ? styles.SelectAct : styles.SelectDef
                }
                py={1}
                px={4}
                onClick={() => {
                  setActiveVal(res?.value);
                }}
              >
                {res?.label}
              </Text>
            );
          })}
        </Flex>
      </Flex>
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
        >
          <Flex
            alignItems="center"
            w="140px"
            pl={{ base: 1, sm: 1, md: 3, lg: 3 }}
          >
            <Text
              pr={{ base: 2, sm: 2, md: 4, lg: 4 }}
              fontWeight="var(--cds-fontWeights-medium)"
              w={{ base: "90px", sm: "90px", md: "100px", lg: "100px" }}
            >
              <FormattedMessage id="text.From" />
            </Text>
            <Image w="30px" h="30px" src={AirdropImg} />
          </Flex>
          <Flex flex="1" pl={3}>
            <Text>
              <FormattedMessage id="text.AirdropCoupon" />
            </Text>
          </Flex>
          {/* <Icon fontSize="30px" as={ChevronRightIcon} /> */}
        </Flex>
        <Divider />
        <Flex
          alignItems="center"
          py="19px"
          px={{ base: 2, sm: 2, md: 4, lg: 4 }}
          color="#5b616e"
          w="full"
        >
          <Flex
            alignItems="center"
            w="110px"
            pl={{ base: 1, sm: 1, md: 3, lg: 3 }}
          >
            <Text
              pr={{ base: 2, sm: 2, md: 4, lg: 4 }}
              fontWeight="var(--cds-fontWeights-medium)"
              w={{ base: "82px", sm: "82px", md: "100px", lg: "100px" }}
            >
              <FormattedMessage id="text.Count" />
            </Text>
            {/* <MyIcon icon="" /> */}
          </Flex>
          <Flex flex="1">
            <Input
              variant="unstyled"
              type="number"
              h="30px"
              value={resCount}
              onChange={(e: any) => {
                setCountNumber(e?.target?.value);
              }}
              placeholder={intl.formatMessage({ id: "text.Count" })}
            />
          </Flex>
        </Flex>
        <Divider />
        <Flex
          alignItems="center"
          py="19px"
          px={{ base: 2, sm: 2, md: 4, lg: 4 }}
          color="#5b616e"
          w="full"
        >
          <Flex
            alignItems="center"
            w="110px"
            pl={{ base: 1, sm: 1, md: 3, lg: 3 }}
          >
            <Text
              pr={{ base: 2, sm: 2, md: 4, lg: 4 }}
              fontWeight="var(--cds-fontWeights-medium)"
              w={{ base: "82px", sm: "82px", md: "100px", lg: "100px" }}
            >
              <FormattedMessage id="text.Fee" />
            </Text>
            {/* <MyIcon icon="" /> */}
          </Flex>
          <Flex flex="1">
            {formatPercentNum(resData?.data?.fee * 100 || 0)}
            {/* <Input variant="unstyled" h="30px" placeholder={lang?.formTitle3} /> */}
          </Flex>
        </Flex>
      </Flex>
      <Flex mx={9} pt={5}>
        <PrimaryButton
          w="full"
          h="50px"
          isDisabled={
            ViInputAmount({ count: resCount, amount: resAmount }).status
          }
          onClick={() => {
            api.onSendGift({
              type: resActive,
              total_count: resCount,
              amount: resAmount,
            });
          }}
        >
          <FormattedMessage id="text.Continue" />
        </PrimaryButton>
      </Flex>
      <Flex alignItems="center" px={9} py={5} color="#5b616e">
        <Flex w="full">
          <Text>
            USDC <FormattedMessage id="text.Balance" />
          </Text>
        </Flex>
        <Flex w="full" textAlign="right">
          <Text w="full">
            {resData?.data?.usd_balance} <FormattedMessage id="text.Airdrop" />{" "}
            ≈ {formatMoney(resData?.data?.balance)}
          </Text>
        </Flex>
      </Flex>
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
          <SelectAsset />
        </ModalContent>
      </Modal>
    </Flex>
  );
};
