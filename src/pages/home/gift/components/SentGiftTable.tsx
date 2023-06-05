import {
  Flex,
  Modal,
  ModalBody,
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
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ConfigProvider } from "antd";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
  PrimaryButton,
  formatCoins,
  getDayYmHm,
  useMyToast,
} from "../../../../common";
import { MyPagination } from "../../../../components/MyPagination";
import NoActivity from "../../../../components/NoActivity";
import MyDetail from "../modal/detail";

export default ({ tdata, langModal, pagination }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const defauleDark = useColorModeValue("ant", "antdark");
  const { showSuccess } = useMyToast();
  const [getModal, setModal] = useState<any>();
  const intl = useIntl();
  return (
    <>
      <Flex flexDir="column">
        <TableContainer pt="3px" w="100%">
          <Table variant="simple" size="md" w="100%">
            <Thead h="50px" w="100%">
              <Tr>
                <Th>
                  <FormattedMessage id="text.Amount" />
                </Th>
                <Th>
                  <FormattedMessage id="text.Count" />
                </Th>
                <Th>
                  <FormattedMessage id="text.Date" />
                </Th>
                <Th>
                  <FormattedMessage id="text.CopyUrl" />
                </Th>
                <Th>
                  <FormattedMessage id="text.Detail" />
                </Th>
              </Tr>
            </Thead>
            <Tbody w="100%">
              {tdata?.data?.map((res: any, index: number) => {
                return (
                  <Tr key={index}>
                    <Td>
                      {formatCoins(
                        res.amount,
                        intl.formatMessage({ id: "text.AirdropCoupon" })
                      )}
                    </Td>
                    <Td>
                      {res?.received_count}/{res?.total_count}
                    </Td>
                    <Td>{getDayYmHm(res.created_at)}</Td>
                    <Td>
                      <PrimaryButton
                        size="sm"
                        onClick={() => {
                          copy(
                            `${window.location.host}?gift_code=${res?.code}`
                          );
                          showSuccess({
                            title: <FormattedMessage id="coptBtn" />,
                          });
                        }}
                      >
                        <FormattedMessage id="text.Copy" />
                      </PrimaryButton>
                    </Td>
                    <Td>
                      <PrimaryButton
                        size="sm"
                        onClick={() => {
                          onOpen();
                          setModal({ gift_code: res.code });
                        }}
                      >
                        <FormattedMessage id="text.Detail" />
                      </PrimaryButton>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        {!tdata?.data || tdata?.data?.length == 0 ? <NoActivity /> : ""}
        <ConfigProvider prefixCls={defauleDark}>
          <MyPagination {...pagination} />
        </ConfigProvider>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <FormattedMessage id="text.Detail" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MyDetail tdata={getModal} lang={langModal} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
