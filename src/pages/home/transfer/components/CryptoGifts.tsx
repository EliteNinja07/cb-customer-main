import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Image, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import MyGiftsIconSvg from "../../../../assets/images/gifting-1.svg";
import { MyCard, OutlineButton } from "../../../../common";

export default function CryptoGifts() {
  return (
    <MyCard py={3} px={5} mb={5}>
      <Flex
        flex="1"
        flexDir="column"
        pr={3}
        pt={3}
        sx={{ position: "relative" }}
      >
        <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="20px">
          <FormattedMessage id="text.CryptoGifts" />
        </Text>
        <Text color="#5b616e">
          <FormattedMessage id="transfer.gift.desc" />
        </Text>
        <OutlineButton
          px={0}
          py={0}
          mt={7}
          link="/home/gift"
          justifyContent="flex-start"
          rightIcon={<ArrowForwardIcon />}
        >
          <FormattedMessage id="text.GetStart" />
        </OutlineButton>
      </Flex>
      <Flex maxW="180px" pl={6}>
        <Image w="full" src={MyGiftsIconSvg} />
      </Flex>
    </MyCard>
  );
}
