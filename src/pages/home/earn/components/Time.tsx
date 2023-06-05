import { Flex, Center, Tag, Text, Image } from "@chakra-ui/react";
import MoneyImg from "../../../../assets/images/Loyalty.svg";
import AirdropImg from "../../../../assets/images/airdrop.svg";
import { useState, useEffect } from "react";
import { formatMoney, getTimeDifference } from "../../../../common";
import { FormattedMessage } from "react-intl";

export default ({ tdata }: any) => {
  const [getDayTime, setDayTime] = useState<any>({});
  let time = tdata?.started_at?.replaceAll("-", "/");
  let timeData: any = null;
  const getTime = () => {
    //获取时间差
    setDayTime(getTimeDifference(time));
    timeData = setTimeout(() => {
      getTime();
    }, 60000);
  };
  useEffect(() => {
    getTime();
    return () => {
      clearTimeout(timeData);
    };
  }, [tdata]);
  return (
    <>
      <Flex
        px={6}
        pt={5}
        alignItems="center"
        fontWeight="var(--cds-fontWeights-medium)"
      >
        <Center>
          <Tag borderRadius="full" colorScheme="twitter" variant="solid">
            <FormattedMessage id="text.LIVE" />
          </Tag>
        </Center>
        <Flex flex="1" flexDir="column" textAlign="left" px={4}>
          <Text fontSize="13px">
            <FormattedMessage id="text.StartingTime" />
          </Text>
        </Flex>
        <Center>
          <Image w="30px" p={1} src={AirdropImg} />
          <Text fontSize="14px">
            <FormattedMessage id="text.Airdrop" />
          </Text>
        </Center>
      </Flex>
      <Flex px={6} py={5} w="full" alignItems="center">
        <Flex flex="1">
          <Flex h="43px" flexDir="column" textAlign="center">
            <Text
              h="24px"
              fontWeight="var(--cds-fontWeights-medium)"
              lineHeight="24px"
              fontSize="29px"
              align="center"
              w="100%"
            >
              {getDayTime?.d || "00"}
            </Text>
            <Text fontSize="12px" color="#80858e">
              <FormattedMessage id="text.Days" />
            </Text>
          </Flex>
          <Flex textAlign="center" flexDir="column" h="43px" px="5px">
            <Text h="24px" lineHeight="24px" fontSize="29px" align="center">
              :
            </Text>
          </Flex>
          <Flex textAlign="center" flexDir="column" h="43px">
            <Text
              h="24px"
              lineHeight="24px"
              fontSize="29px"
              align="center"
              fontWeight="var(--cds-fontWeights-medium)"
            >
              {getDayTime?.h || "00"}
            </Text>
            <Text fontSize="12px" color="#80858e">
              <FormattedMessage id="text.Hours" />
            </Text>
          </Flex>
          <Flex textAlign="center" flexDir="column" h="43px" px="5px">
            <Text
              h="24px"
              lineHeight="24px"
              fontSize="29px"
              align="center"
              fontWeight="var(--cds-fontWeights-medium)"
            >
              :
            </Text>
          </Flex>
          <Flex textAlign="center" flexDir="column" h="43px">
            <Text
              h="24px"
              lineHeight="24px"
              fontSize="29px"
              align="center"
              fontWeight="var(--cds-fontWeights-medium)"
            >
              {getDayTime?.m || "00"}
            </Text>
            <Text fontSize="12px" color="#80858e">
              <FormattedMessage id="text.Mins" />
            </Text>
          </Flex>
        </Flex>
        <Center>
          <Flex w="full">
            <Text
              display="flex"
              w="100%"
              fontSize="28px"
              fontWeight="var(--cds-fontWeights-medium)"
              _light={{
                color: "rgb(22, 82, 240)",
              }}
              _dark={{
                color: "#fff",
              }}
            >
              {formatMoney(tdata?.goal / 2)}
            </Text>
          </Flex>
        </Center>
      </Flex>
      <Flex w="full" px={6} flexDir="column">
        <Text fontSize="0.7rem">
          <FormattedMessage id="earn.top50.accumulated" />
        </Text>
        <Flex alignItems="center" w="full" pt={2}>
          <Image w="25px" p={1} src={MoneyImg} />
          <Text fontWeight="var(--cds-fontWeights-medium)">
            {formatMoney(tdata?.balance, "")}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
