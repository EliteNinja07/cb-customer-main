import { CheckCircleIcon } from "@chakra-ui/icons";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FormattedMessage, useIntl } from "react-intl";
import { formatMoney, MyIcon, PrimaryButton } from "../../../../common";

export default ({ user, levels }: any) => {
  const intl = useIntl();
  return (
    <Flex w="full">
      {levels?.map((item: any, index: number) => {
        var needStake = formatMoney(item.need_stake);
        var needStakeString =
          needStake === "0"
            ? intl.formatMessage({ id: "text.Stake" }) + " < $1,000"
            : intl.formatMessage({ id: "text.Stake" }) + " ≥ " + needStake;
        return (
          <Flex
            key={"vipLevel" + index}
            w="full"
            flexDir="column"
            justifyContent="center"
            textAlign="center"
            pt={2}
          >
            <Flex justifyContent="center">
              <Image
                src={"/img/vips/" + item.name + ".svg"}
                w="65px"
                h="65px"
              />
            </Flex>
            <Text w="full">{item.name}</Text>
            <Text w="full" color="#89909e" py={4} fontSize="14px">
              {needStakeString}
            </Text>
            <Flex w="full" alignItems="center" justifyContent="center">
              {user.vips_id === item.id ? (
                <>
                  <Icon as={CheckCircleIcon} color="#0064f9" />
                  <Text pl={2} fontSize="13px">
                    <FormattedMessage id="text.Current" />
                  </Text>
                </>
              ) : (
                <PrimaryButton
                  py="0px"
                  pl={4}
                  pr={3}
                  h="33px"
                  fontSize="13px"
                  disabled={item.id <= user.vips_id}
                >
                  <FormattedMessage id="text.Upgrade" />
                  <MyIcon icon="" fontSize="0.8rem" w="20px" h="20px"></MyIcon>
                </PrimaryButton>
              )}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
