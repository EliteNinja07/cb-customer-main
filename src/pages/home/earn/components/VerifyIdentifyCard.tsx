import {
  Flex,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import VerifyIndentify from "../../../../assets/images/VerifyIndentify.svg";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FormattedMessage } from "react-intl";
import GiftModal from "../../../../components/GiftModal";
import {
  MyCard,
  MyIcon,
  OutlineButton,
  PrimaryButton,
} from "../../../../common";

export default () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MyCard py="4" px="5" mb="1.5rem">
        <Flex justify="space-between" flexWrap="wrap" align="center" w="full">
          <Image src={VerifyIndentify} w="42px" h="42px" mr="5" />
          <Flex flexDir="column" flex="1">
            <Flex>
              <Text
                fontWeight="var(--cds-fontWeights-medium)"
                fontSize="1.2rem"
                pr={2}
              >
                <FormattedMessage id="text.VerifyIdentify" />
              </Text>
              <PrimaryButton px={2} py={0} h="30px" onClick={onOpen}>
                <MyIcon icon="" w="20px" fontSize="15px" />
                <FormattedMessage id="earn.verify.get20" />
              </PrimaryButton>
            </Flex>
            <Text
              fontSize="14px"
              maxWidth={{
                base: "344px",
                sm: "344px",
                md: "500px",
                lg: "500px",
              }}
            >
              <FormattedMessage id="earn.verify.desc" />
            </Text>
          </Flex>
          <Flex
            px={2}
            h="42px"
            alignItems="center"
            position={{
              base: "absolute",
              sm: "absolute",
              md: "unset",
              lg: "unset",
            }}
            top="82px"
            right="calc(50vw - 185px)"
          >
            <OutlineButton
              px="14px"
              h="35px"
              fontSize="13px"
              sx={{
                border: "none",
                backgroundColor: {
                  base: "none",
                  sm: "none",
                  md: "#0052ff",
                  lg: "#0052ff",
                },
                "&:hover": {
                  backgroundColor: {
                    base: "none",
                    sm: "none",
                    md: "#014cec",
                    lg: "#014cec",
                  },
                },
              }}
              color={{
                base: "#0052ff!important",
                sm: "#0052ff!important",
                md: "white!important",
                lg: "white!important",
              }}
              ml="42px"
              borderRadius="100px"
              rightIcon={<ArrowForwardIcon />}
              link="/home/settings/identity"
            >
              <FormattedMessage id="text.IdentityVerification" />
            </OutlineButton>
          </Flex>
        </Flex>
      </MyCard>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xs", sm: "xs", md: "md", lg: "lg" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <GiftModal />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
