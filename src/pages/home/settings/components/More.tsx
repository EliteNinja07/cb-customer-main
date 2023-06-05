import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import MyFaq from "../../../../assets/images/faq.svg";
import { MyCard, MyIcon, TextCardHeader } from "../../../../common";
export default ({ label, ...field }: any) => {
  return (
    <MyCard flexDir="column">
      <TextCardHeader w="full">
        <FormattedMessage id="home.sidebar.More" />
      </TextCardHeader>
      <Divider />
      <Link to="/home/vip">
        <Flex alignItems="center" py={4} px={3}>
          <Image src={MyFaq} />
          <Text flex="1" px={3} fontWeight="var(--cds-fontWeights-medium)">
            <FormattedMessage id="home.sidebar.Vip" />
          </Text>
          <MyIcon icon="" fontSize="16px" />
        </Flex>
      </Link>
    </MyCard>
  );
};
