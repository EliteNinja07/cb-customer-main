import { Flex, Text, Divider, Image } from "@chakra-ui/react";
import {
  formatMoney,
  MyCard,
  request,
  TextCardHeader,
  useMyToast,
} from "../../../../common";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";

const styles = {
  avatarImg: {
    position: "relative",
  },
};

export default () => {
  const [tdata, setRes] = useState<any>([]);
  const { showRes } = useMyToast();
  const api = {
    onGetBalances: () => {
      request("assets/statistics", {})
        .then((res) => {
          setRes(res.data);
        })
        .catch(showRes);
    },
  };
  useEffect(() => {
    api.onGetBalances();
  }, []);
  return (
    <MyCard w="full" flexDir="column">
      <TextCardHeader>
        <FormattedMessage id="text.YourBalance" />
      </TextCardHeader>
      <Divider />
      {tdata?.map((res: any, index: number) => {
        return (
          <Flex alignItems="center" py={3} px={5} key={"balances_" + index}>
            <Flex
              sx={styles.avatarImg}
              w="60px"
              h="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Image w="32px" h="32px" borderRadius="full" src={res.icon} />
            </Flex>
            <Flex flex="1" flexDir="column" px={2}>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                lineHeight="1.1rem"
              >
                {res.title}
              </Text>
              <Text fontSize="14px">{res.symbol}</Text>
            </Flex>
            <Flex flexDir="column" textAlign="right">
              <Text lineHeight="1.1rem" w="full">
                {formatMoney(res.value, "$")}
              </Text>
              {/* <Text color="#098551" w="full" fontSize="0.9rem">
                ↗ $0.21
              </Text> */}
            </Flex>
          </Flex>
        );
      })}
    </MyCard>
  );
};
