import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const styles = {
  LinkA: {
    _hover: {
      color: "#0052ff",
    },
  },
};
export default () => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
      py={10}
      px={{ base: 6, sm: 6, md: 0, lg: 0 }}
    >
      <Flex py={3} sx={styles.LinkA}>
        <Link to="/home/help/2-step-verification-troubleshooting">
          2-step verification troubleshooting {">"}
        </Link>
      </Flex>
      <Flex py={3} sx={styles.LinkA}>
        <Link to="/home/help/reset-my-password">Reset my password {">"}</Link>
      </Flex>
      <Flex py={3} sx={styles.LinkA}>
        <Link to="/home/help/accessing-my-account">
          Accessing my account {">"}
        </Link>
      </Flex>
      <Flex py={3} sx={styles.LinkA}>
        <Link to="/home/help/what-type-of-photo-ID-can-I-provide">
          What type of photo ID can I provide? {">"}
        </Link>
      </Flex>
    </SimpleGrid>
  );
};
