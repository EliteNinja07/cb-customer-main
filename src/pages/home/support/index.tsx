import {
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MyCard,
  MyContent,
  PrimaryButton,
  TextCardHeader,
} from "../../../common";
import "./style.scss";

import MyNoActivity from "../../../components/NoActivity";
import Faq from "./components/Faq";
import SupportTable from "./components/SupportTable";
import { Create } from "./modal/Create";
import { Show } from "./modal/Show";

import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useListPage } from "../../../common/hooks/useListPage";
export default () => {
  const intl = useIntl();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [getModalCont, setModalCont] = useState<any>(null);
  const { getData, getList, params } = useListPage({
    baseUri: "cases/list",
  });

  return (
    <>
      <MyContent w="100%">
        <Flex w="full" flexWrap="wrap">
          <Flex className="support-l-c">
            <MyCard flexDir="column">
              <Flex justifyContent="space-between" pr={5} alignItems="center">
                <Flex flex="1">
                  <TextCardHeader>
                    <FormattedMessage id="text.SupportCases" />
                  </TextCardHeader>
                </Flex>
                <PrimaryButton
                  onClick={() => {
                    onOpen();
                    setModalCont({
                      title: intl.formatMessage({ id: "text.CreateCase" }),
                      ch: (
                        <Create
                          onChange={() => {
                            onClose();
                            getList(params);
                          }}
                        />
                      ),
                    });
                  }}
                  px={4}
                >
                  <FormattedMessage id="text.CreateCase" />
                </PrimaryButton>
              </Flex>
              <Divider />
              <SupportTable
                tdata={getData?.data}
                onQShow={(row: any) => {
                  setModalCont({
                    title: intl.formatMessage({ id: "text.ShowCase" }),
                    ch: (
                      <Show
                        params={row}
                        onChange={() => {
                          onClose();
                          getList(params);
                        }}
                      />
                    ),
                  });
                  onOpen();
                }}
              />
              {getData?.data?.length == 0 ? (
                <MyNoActivity
                  label={<FormattedMessage id="text.NoActivityYet" />}
                />
              ) : (
                ""
              )}
            </MyCard>
          </Flex>
          <Flex className="support-r-c">
            <MyCard flexDir="column">
              <TextCardHeader>
                <FormattedMessage id="text.FAQ" />
              </TextCardHeader>
              <Divider />
              <Faq />
            </MyCard>
          </Flex>
        </Flex>
      </MyContent>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          getList(params);
        }}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{getModalCont?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{getModalCont?.ch}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
