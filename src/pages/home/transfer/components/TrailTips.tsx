import {Flex, Heading, Highlight} from "@chakra-ui/react";



export const TrailTips = (props: { enjoyed: boolean, onClick: () => void }) => {

  return (
    <Flex direction="column" alignItems="center" mt={4}
          onClick={props.onClick}
          cursor="pointer"
    >
      <Heading
        width={{base: "80%", lg: "auto"}}
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
        whiteSpace={{base: "normal", lg: "nowrap"}}
        textAlign="center"
        size="xs"
        color="black"
      >

        <Highlight
          query={["$100"]}
          styles={{px: "1", py: "1", color: "yellow.500"}}
        >
          You are enjoying 14d membership and first time
          withdraw
          free of charge fee
        </Highlight>

      </Heading>
    </Flex>
  );
};
