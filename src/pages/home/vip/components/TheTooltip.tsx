import { QuestionIcon } from "@chakra-ui/icons";
import { Icon, Tooltip, useDisclosure } from "@chakra-ui/react";

export default ({ desc }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Tooltip isOpen={isOpen} placement="top" hasArrow label={desc}>
      <Icon
        color="#aaaaaa3b"
        as={QuestionIcon}
        onMouseOver={onOpen}
        onMouseOut={onClose}
        onClick={() => (isOpen ? onClose() : onOpen())}
      />
    </Tooltip>
  );
};
