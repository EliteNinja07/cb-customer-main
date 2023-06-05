/* eslint-disable react/jsx-key */
import { Flex } from "@chakra-ui/react";
import { Pagination } from "antd";
import { useIntl } from "react-intl";
export type ResDataMetaProps = {
  /**
   * 当前页
   * @default 1
   */
  current_page: number;
  /**
   * 最后一页
   */
  last_page: number;
  /**
   * 每页记录数
   * @default 20
   */
  per_page: number;
  /**
   * 总记录数
   * @default 0
   */
  total: number;
};

export type MyPaginationProps = {
  /**
   * 后端直接返回的meta信息
   */
  meta?: ResDataMetaProps;
  /**
   * 当分页变更的时候触发事件
   */
  onChange: (page: number, pageSize: number) => void;
};

export const MyPagination = ({ meta, onChange }: MyPaginationProps) => {
  const intl = useIntl();
  const sonTotal = (total: any) => {
    let labels = intl.formatMessage({ id: "page.total" });
    return { total: total, label: labels };
  };
  return meta ? (
    <Flex py={5} justifyContent="center">
      <Pagination
        current={meta?.current_page || 1}
        total={meta?.total || 0}
        pageSize={meta?.per_page || 20}
        onChange={onChange}
        showTotal={(total) => {
          let obj = sonTotal(total);
          return obj?.total + obj?.label;
        }}
        showSizeChanger
        showQuickJumper
      />
    </Flex>
  ) : null;
};
