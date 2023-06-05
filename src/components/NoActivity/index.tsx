import { Flex, Image, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

export default ({
  label = <FormattedMessage id="text.NoActivityYet" />,
  svgshow = true,
  type = 1,
}: any) => {
  return (
    <>
      {type == 1 ? (
        <Flex textAlign="center" flexDir="column" w="full" py={5}>
          {svgshow ? (
            <Image
              src="/img/noactivity.svg"
              w="100px"
              sx={{ margin: "0 auto" }}
            />
          ) : (
            ""
          )}
          <Text fontSize="1.1rem" w="full" color="#555" pt={4}>
            {label}
          </Text>
        </Flex>
      ) : (
        <Flex textAlign="center" w="full" flexDir="column" py={5}>
          <Image
            src="/img/noactivity.svg"
            w="100px"
            sx={{ margin: "0 auto" }}
          />
          <Text fontSize="1.1rem" w="full" color="#555" pt={4}>
            {label}
          </Text>
        </Flex>
      )}
    </>
  );
};
