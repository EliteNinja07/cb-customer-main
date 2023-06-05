import { Avatar, Flex, Tag, Text } from "@chakra-ui/react";
import { formatVip, getAvatar } from "../../common";
const styles = {
  vips: {
    width: "full",
    marginTop: "-6px",
    position: "relative",
    zIndex: 10,
    justifyContent: "center",
  },
  niceName: {
    width: "full",
    textAlign: "center",
  },
};
export default ({ tdata }: any) => {
  return (
    <Flex flexDir="column" w="full" justifyContent="center">
      <Avatar
        size="md"
        name={tdata?.nickname || "-"}
        sx={{ margin: "0 auto" }}
        src={getAvatar(tdata?.avatar)}
      />
      <Flex sx={styles.vips}>
        <Tag
          variant="solid"
          borderRadius="full"
          colorScheme="messenger"
          size="sm"
        >
          {formatVip(tdata?.vips_id || "")}
        </Tag>
      </Flex>
      <Flex sx={styles.niceName}>
        <Text w="full">{tdata?.nickname || "-"}</Text>
      </Flex>
    </Flex>
  );
};
