import {
  Avatar,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { PrimaryButton, formatMoney } from "../../../../common";
import { YesNo } from "../modal/YesNo";

let styles = {
  Ftd: {
    paddingLeft: 0,
  },
  Ltd: {
    paddingRight: 0,
  },
};
export default ({ tdata, onRefresh }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [getModalCont, setModalCont] = useState<any>(null);
  const intl = useIntl();

  return (
    <>
      <TableContainer pt="3px" w="100%">
        <Table variant="simple" size="md" w="100%">
          <Thead h="50px" w="100%">
            <Tr>
              <Th>
                <FormattedMessage id="text.Name" />
              </Th>
              <Th>
                <FormattedMessage id="text.Balance" />
              </Th>
              <Th sx={{ textAlign: "right" }}>
                <FormattedMessage id="text.Opertate" />
              </Th>
              {/*<Th>{lang?.td4}</Th> */}
            </Tr>
          </Thead>
          <Tbody w="100%">
            {tdata?.map((item: any) => {
              return (
                <Tr key={"tr_" + item.id}>
                  <Td alignItems="center">
                    <Flex alignItems="center">
                      <Avatar src={item?.icon} w="32px" h="32px" mr="2" />
                      <Flex flexDir="column" fontWeight="410">
                        {/* <Text fontWeight="410" lineHeight="1rem">
                      </Text> */}
                        {item?.symbol}
                        {/* <Text fontSize="13px">{item?.name}</Text> */}
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    {formatMoney(item.balance, "")} {item?.symbol}
                  </Td>
                  <Td sx={{ textAlign: "right" }}>
                    <PrimaryButton
                      px={4}
                      w="120px"
                      onClick={() => {
                        onOpen();
                        setModalCont({
                          title: intl.formatMessage({
                            id: "transfer.withdrawalToStaking",
                          }),
                          ch: (
                            <YesNo
                              params={item}
                              onChange={() => {
                                onRefresh();
                                onClose();
                              }}
                            />
                          ),
                        });
                      }}
                      fontSize="14px"
                      py={0}
                    >
                      <FormattedMessage id="text.Staking" />
                    </PrimaryButton>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{getModalCont?.title}</ModalHeader>
          <ModalCloseButton />
          {getModalCont?.ch}
        </ModalContent>
      </Modal>
    </>
  );
};
