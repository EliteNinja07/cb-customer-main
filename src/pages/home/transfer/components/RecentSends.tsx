import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs/esm/index.js";
import { FormattedMessage } from "react-intl";
import {
  formatAddress,
  MyCard,
  MyIcon,
  MyRender,
  TextBody,
  TextCardHeader,
} from "../../../../common";
import MyNoActivity from "../../../../components/NoActivity";

const styles = {
  IconsC: {
    width: "32px",
    height: "32px",
    borderRadius: "100px",
    border: "1px solid #b2b2b238",
  },
};

export default ({ data }: any) => {
  const onTimes = (time: any) => {
    return dayjs(time).format("dddd, MMMM MM, YYYY HH:mm:ss A");
  };

  return (
    <MyCard w="full" flexDir="column">
      <TextCardHeader pb="0">
        <FormattedMessage id="text.RecentSends" />
      </TextCardHeader>
      <TextBody pl="6" pb="4" w="full">
        <FormattedMessage id="transfer.recent.desc" />
      </TextBody>
      <Divider />
      <MyRender
        render={() => {
          if (!data.length)
            return (
              <MyNoActivity
                label={<FormattedMessage id="text.NoActivityYet" />}
              />
            );
          return data?.map((res: any, index: number) => {
            return (
              <Flex
                px={6}
                alignItems="center"
                my={3}
                w="full"
                key={`recent_${index}`}
              >
                <Flex
                  color="#5b616e"
                  alignItems="center"
                  justifyContent="center"
                  sx={styles.IconsC}
                >
                  <MyIcon icon="" fontSize="16px" />
                </Flex>
                <Flex flexDir="column" mx={4} w="calc(100% - 40px)">
                  <Heading as="h6" size="xs" noOfLines={1}>
                    {formatAddress(res?.hash)}
                  </Heading>
                  <Text color="#89909e" fontSize="14px">
                    Staking {res?.coin_symbol} on {onTimes(res?.created_at)}
                    {/* todo */}
                  </Text>
                </Flex>
              </Flex>
            );
          });
        }}
      />
    </MyCard>
  );
};
