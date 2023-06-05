import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { PrimaryButton } from "../../../../common";
const styles: any = {
  ActTr: {
    fontWeight: "500",
    fontSize: "0.9rem",
  },
};

export default ({ tdata = [], onQShow }: any) => {
  return (
    <TableContainer pt="3px" w="100%">
      <Table variant="simple" size="md" w="100%">
        <Thead h="50px" w="100%">
          <Tr>
            <Th>
              <FormattedMessage id="text.Subject" />
            </Th>
            <Th>
              <FormattedMessage id="text.CaseID" />
            </Th>
            <Th>
              <FormattedMessage id="text.Created" />
            </Th>
            <Th>
              <FormattedMessage id="text.Status" />
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody w="100%">
          {tdata?.map((res: any, index: number) => {
            return (
              <Tr
                key={`items_td_${index}`}
                sx={res?.frontend_is_new ? styles?.ActTr : ""}
              >
                <Td>
                  {res?.frontend_is_new == 1 ? (
                    <Flex
                      sx={{ alignItems: "center" }}
                      onClick={() => {
                        onQShow(res);
                      }}
                    >
                      <Flex
                        animation="heartbeat 1.5s ease-in-out infinite both"
                        sx={{
                          backgroundColor: "#1890ff",
                          width: "10px",
                          height: "10px",
                          borderRadius: "100%",
                          marginRight: "10px",
                        }}
                      ></Flex>
                      <Text sx={{ cursor: "pointer" }}>
                        <FormattedMessage id={`text.` + res.subject} />
                      </Text>
                    </Flex>
                  ) : (
                    <Text sx={{ cursor: "pointer" }}>
                      <FormattedMessage id={`text.` + res.subject} />
                    </Text>
                  )}
                </Td>
                <Td>{res.case_id}</Td>
                <Td>{res.created_at}</Td>
                <Td>
                  <FormattedMessage id={`text.` + res.status} />
                </Td>
                <Td>
                  <PrimaryButton
                    onClick={() => {
                      onQShow(res);
                    }}
                    px={4}
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
  );
};
