import { Flex, Text } from "@chakra-ui/react";

export default ({ lang }: any) => {
  return (
    <Flex
      w="full"
      h={{ base: "260px", sm: "260px", md: "300px", lg: "300px" }}
      sx={{
        background: "#0052ff",
        _dark: {
          background: "#0052ff",
        },
      }}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <Text
          fontWeight="var(--cds-fontWeights-medium)"
          fontSize="2rem"
          color="#fff"
        >
          {lang?.searchTitle}
        </Text>
      </Flex>
      {/*<Flex*/}
      {/*  bg="#fff"*/}
      {/*  sx={{*/}
      {/*    background: "#fff",*/}
      {/*    _dark: {*/}
      {/*      background: "#0052ff",*/}
      {/*    },*/}
      {/*  }}*/}
      {/*  h="55px"*/}
      {/*  w={{ base: "300px", sm: "300px", md: "500px", lg: "500px" }}*/}
      {/*  alignItems="center"*/}
      {/*  mt={4}*/}
      {/*  px={5}*/}
      {/*  borderRadius="100px"*/}
      {/*>*/}
      {/*  <Icon as={Search2Icon}></Icon>*/}
      {/*  <Flex pl={5} flex="1">*/}
      {/*    <Input variant="unstyled" placeholder={lang?.searchInput} />*/}
      {/*  </Flex>*/}
      {/*</Flex>*/}
    </Flex>
  );
};
