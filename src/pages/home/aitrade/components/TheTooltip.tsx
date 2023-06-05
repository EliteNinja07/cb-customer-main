import { Tooltip, useDisclosure, Flex } from "@chakra-ui/react";

export default ({ children, ...rest }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Tooltip isOpen={isOpen} placement="top" hasArrow {...rest}>
      <Flex
        onMouseOver={onOpen}
        onMouseOut={onClose}
        onClick={() => (isOpen ? onClose() : onOpen())}
      >
        {children}
      </Flex>
    </Tooltip>
  );
};
