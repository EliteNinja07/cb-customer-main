import { Flex } from "@chakra-ui/react";
import { DatePicker, Form, Input } from "antd";
const { RangePicker } = DatePicker;

import { FormattedMessage, useIntl } from "react-intl";
import { AntButton } from "../../../../common";

export default ({ onChange }: any) => {
  let createdAtInfo: any = null;
  const onFinish = (values: any) => {
    onChange({ ...values, ...{ created_at: createdAtInfo } });
  };
  const intl = useIntl();
  return (
    <Form
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinish}
    >
      <Flex
        px={6}
        py={5}
        gap={6}
        flexWrap="wrap"
        w={{ base: "full", sm: "full", md: "80%", lg: "90%" }}
      >
        <Flex w={{ base: "100%", sm: "100%", md: "150px", lg: "180px" }}>
          <Form.Item name="nickname" style={{ width: "100%" }}>
            <Input
              placeholder={intl.formatMessage({ id: "text.Nickname" })}
              style={{ width: "100%" }}
              size="large"
              allowClear
            />
          </Form.Item>
        </Flex>
        <Flex w={{ base: "100%", sm: "100%", md: "360px", lg: "400px" }}>
          <Form.Item name="address" style={{ width: "100%" }}>
            <Input
              placeholder={intl.formatMessage({ id: "text.Address" })}
              style={{ width: "100%" }}
              size="large"
              allowClear
            />
          </Form.Item>
        </Flex>
        <Flex w={{ base: "100%", sm: "100%", md: "80px", lg: "100px" }}>
          <Form.Item name="Level" style={{ width: "100%" }}>
            <Input
                placeholder={intl.formatMessage({ id: "text.Level" })}
                style={{ width: "100%" }}
                size="large"
                allowClear
            />
          </Form.Item>
        </Flex>
        <Flex flex="1">
          <Form.Item name="created_at" style={{ width: "100%" }}>
            <RangePicker
              size="large"
              placeholder={[
                intl.formatMessage({ id: "text.From" }),
                intl.formatMessage({ id: "text.To" }),
              ]}
              style={{ width: "100%" }}
              onChange={(date: any, dateString: any) => {
                if (dateString) {
                  createdAtInfo = dateString;
                } else {
                  createdAtInfo = null;
                }
              }}
            />
          </Form.Item>
        </Flex>
        {/* <Flex>
          <Form.Item name="to" style={{ width: "100%" }}>
            <DatePicker
              placeholder="To"
              size="large"
              format="YYYY/MM/DD"
              style={{ width: "100%" }}
              onChange={(date: any, dateString: string) => {
                created_at[1] = dateString;
              }}
            />
          </Form.Item>
        </Flex> */}
        <Flex
          sx={{ paddingLeft: { base: "0.5rem", sm: "0.5rem", md: 0, lg: 0 } }}
        >
          <AntButton
            type="primary"
            shape="round"
            size="large"
            htmlType="submit"
          >
            <FormattedMessage id="text.Search" />
          </AntButton>
        </Flex>
      </Flex>
    </Form>
  );
};
