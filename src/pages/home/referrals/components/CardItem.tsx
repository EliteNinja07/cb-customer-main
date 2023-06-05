import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Image,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { MyCard } from "../../../../common";
const styles = {
  MyCardC1: {
    "&:before": {
      border: "1px dashed #dedfe2",
      background: "#f8fafe",
    },
    "&:after": {
      border: "1px dashed #dedfe2",
      background: "#f8fafe",
    },
  },
  MyCardC2: {
    "&:before": {
      background: "#000",
      border: "1px dashed #60646975",
    },
    "&:after": {
      background: "#000",
      border: "1px dashed #60646975",
    },
  },
  CardIcon: {
    position: "absolute",
    height: "100px",
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    padding: { base: "0 10px", sm: "0 10px", md: "0 34px", lg: "0 34px" },
    textAlign: "center",
    justifyContent: { base: "right", sm: "right", md: "left", lg: "left" },
    filter: {
      base: "grayscale(50%)",
      sm: "grayscale(50%)",
      md: "grayscale(0%)",
      lg: "grayscale(0%)",
    },
    opacity: { base: 0.3, sm: 0.3, md: 1, lg: 1 },
    zIndex: 1,
  },
  CardCont: {
    position: "relative",
    zIndex: 10,
    // width: {
    //   base: "calc(100% - 100px)",
    //   sm: "calc(100% - 100px)",
    //   md: "auto",
    //   lg: "auto",
    // },
    marginLeft: { base: 0, sm: 0, md: "100px", lg: "100px" },

    borderLeft: {
      base: "none",
      sm: "none",
      md: "1px dashed #dedfe2",
      lg: "1px dashed #dedfe2",
    },
    _dark: {
      borderLeft: {
        base: "none",
        sm: "none",
        md: "1px dashed #242629",
        lg: "1px dashed #60646975",
      },
    },
    // borderRight: {
    //   base: "1px dashed #60646975",
    //   sm: "1px dashed #60646975",
    //   md: "none",
    //   lg: "none",
    // },
  },
};
export default ({ toolt, des, icon, title, titleicon = "" }: any) => {
  const getTheme = useColorModeValue(styles.MyCardC1, styles.MyCardC2);
  return (
    <MyCard className="card_items_c" sx={getTheme} mb={4} alignItems="center">
      <Flex sx={styles.CardIcon} className="card-icon-c" alignItems="center">
        <Image src={icon} w="43px" h="43px" />
      </Flex>
      <Flex
        flexDir="column"
        h="88px"
        my="6px"
        className="card-cont-r-c"
        sx={styles.CardCont}
      >
        <Flex px={4} alignItems="center" pb={1} pt={2}>
          {titleicon}
          <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="1.5rem">
            {title}
          </Text>
        </Flex>
        <Flex px={4} alignItems="center">
          <Text color="#989898" fontSize="15px" h="27px">
            {des}
          </Text>
          {toolt ? (
            <Tooltip label={toolt} hasArrow placement="left">
              <Icon as={InfoOutlineIcon} w="20px" pl={2} color="#989898" />
            </Tooltip>
          ) : (
            ""
          )}
        </Flex>
      </Flex>
    </MyCard>
  );
};
