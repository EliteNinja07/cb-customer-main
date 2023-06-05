import { Flex, Text, Image } from "@chakra-ui/react";
import { MyIcon, PrimaryButton } from "../../../../common";
import MySupportAndMoreImg from "../../../../assets/images/help/supportAndMore.svg";

const styles = {
  ContactC: {
    border: "1px solid var(--cds-colors-chakra-border-color)",
    borderRadius: "8px",
  },
};
export default ({ lang }: any) => {
  return (
    <Flex
      sx={styles.ContactC}
      alignItems="center"
      justifyContent="center"
      py="4.5rem"
      flexWrap="wrap"
    >
      <Flex
        w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
        justifyContent="center"
      >
        <Image src={MySupportAndMoreImg} w="244px" />
      </Flex>
      <Flex
        flexDir="column"
        w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
        pt={{ base: "2rem", sm: "2rem", md: 0, lg: 0 }}
        px={{ base: 6, sm: 6, md: 0, lg: 0 }}
        justifyContent="center"
      >
        <Text
          fontWeight="var(--cds-fontWeights-medium)"
          pb={3}
          fontSize="1.6rem"
        >
          {lang?.lookinglabel}
        </Text>
        <PrimaryButton w="220px" borderRadius="4px" h="45px">
          <MyIcon icon="" />
          {lang?.lookingbtn}
        </PrimaryButton>
      </Flex>
    </Flex>
  );
};
