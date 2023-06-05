import {
  Flex,
  Image,
  Text,
  Icon,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Divider,
  ModalCloseButton,
} from "@chakra-ui/react";
import LearnAiTrade from "@/assets/images/LearnAiTrade.svg";
import pagethreesvg28 from "@/assets/images/pagethreesvg28.svg";
import pagethreesvg27 from "@/assets/images/pagethreesvg27.svg";
import pagethreesvg281 from "@/assets/images/pagethreesvg281.svg";
import pagethreesvg271 from "@/assets/images/pagethreesvg271.svg";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  EmptyButton,
  formatMoney,
  formatPercent,
  MyCard,
  MyCardBody,
  MyCardDivider,
  TextCardHeader,
  YourYieldButton,
} from "../../../../common";
import MoneyImg from "@/assets/images/usdc.svg";
import AreaLine from "../../../../components/AreaLine";
import YieldEarned from "../modal/YieldEarned";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router";

const styles = {
  itemsContents: {
    backgroundColor: "#fff",
    display: { base: "flex", sm: "flex", md: "none", lg: "none" },
    textAlign: "center",
    _dark: {
      backgroundColor: "#000",
    },
  },
};

export default ({ ydata }: any) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const get_mythreesvg28 = useColorModeValue(pagethreesvg28, pagethreesvg281);
  const get_mythreesvg27 = useColorModeValue(pagethreesvg27, pagethreesvg271);
  return (
    <>
      <MyCard>
        <MyCardBody>
          <TextCardHeader>
            <FormattedMessage id="text.YourYield" />
          </TextCardHeader>
          <MyCardDivider></MyCardDivider>
          <Flex
            p="7"
            justifyContent="space-between"
            flexWrap="wrap"
            alignItems="center"
            w="full"
          >
            <Flex
              alignItems="start"
              flexDir="column"
              onClick={onOpen}
              w={{
                base: "100%",
                sm: "100%",
                md: "60%",
                lg: "60%",
              }}
              sx={{ cursor: "pointer" }}
            >
              <Text
                color="#5b616e"
                fontSize="14px"
                fontWeight="var(--cds-fontWeights-medium)"
              >
                <FormattedMessage id="text.LifetimeEarnings" />
              </Text>
              <Flex alignItems="center">
                <Image boxSize="36px" mr={1} src={MoneyImg} />
                <Text
                  fontSize="50px"
                  fontWeight="var(--cds-fontWeights-medium)"
                  style={{ marginTop: 0 }}
                >
                  {formatMoney(ydata?.amount, "")}
                </Text>
              </Flex>
              <Text
                fontSize="0.9rem"
                style={{
                  marginTop: 0,
                  fontWeight: "var(--cds-fontWeights-medium)",
                }}
              >
                {ydata?.direction == "up" ? (
                  <span style={{ color: "#098551" }}>
                    ↗ {formatPercent(ydata?.rate)}
                  </span>
                ) : (
                  <span style={{ color: "#cf202f" }}>
                    ↘ {formatPercent(ydata?.rate)}
                  </span>
                )}
                <span style={{ paddingLeft: "10px" }}>
                  <FormattedMessage id="text.EarnRate" />
                </span>
              </Text>
              <Text fontSize="0.7rem" color="#5b616e" style={{ marginTop: 0 }}>
                <FormattedMessage id="earn.your_yield.desc" />
              </Text>
            </Flex>
            <Flex
              w={{ base: "100%", sm: "100%", md: "40%", lg: "40%" }}
              alignItems="center"
            >
              <Flex w="full" h="100px" py={2} justifyContent="flex-end">
                <AreaLine data={ydata?.balance_snapshot} />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            w="full"
            sx={styles.itemsContents}
            py={4}
            px={6}
          >
            <Flex justifyContent="left" w="50%">
              <YourYieldButton
                h="45px"
                p={4}
                borderRadius="100px"
                link="/home/transfer?tab=Staking"
              >
                <Image h="45px" p={2} src={get_mythreesvg28} />
                <Text fontSize="15px">
                  <FormattedMessage id="text.Staking" />
                </Text>
              </YourYieldButton>
            </Flex>
            <Flex justifyContent="right">
              <YourYieldButton
                h="45px"
                p={4}
                borderRadius="100px"
                link="/home/transfer?tab=Withdrawal"
              >
                <Image h="45px" p={2} src={get_mythreesvg27} />
                <Text fontSize="15px">
                  <FormattedMessage id="text.Withdrawal" />
                </Text>
              </YourYieldButton>
            </Flex>
          </Flex>
          <MyCardDivider></MyCardDivider>
          <EmptyButton px="7" py="8" br="8px">
            <Flex
              w="full"
              alignItems="center"
              onClick={() => {
                navigate("/home/learn");
              }}
            >
              <Image src={LearnAiTrade} w="42px" h="42px" mr="5" />
              <Flex flexDir="column" flex="1" textAlign="left">
                <Text color="#1890ff" fontSize="16px">
                  <FormattedMessage
                    id="earn.your_yield.learnTitle"
                    values={{ name: "Ai Trade" }}
                  />
                </Text>
                <Text color="#5b616e" fontSize="15px">
                  <FormattedMessage
                    id="earn.your_yield.learnDesc"
                    values={{ name: "Ai Trade" }}
                  />
                </Text>
              </Flex>
              <Icon as={ChevronRightIcon} w={6} h={6} color="#1890ff" />
            </Flex>
          </EmptyButton>
        </MyCardBody>
      </MyCard>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        size="xl"
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <FormattedMessage id="text.YieldEarned" />
          </ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <YieldEarned ydata={ydata} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
