import { Pie } from "@ant-design/plots";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";

export default ({ tdata = [] }: any) => {
  const [config, setConfig] = useState<any>({});
  const intl = useIntl();
  const onToFixed = (val: any) => {
    return parseFloat(val?.toFixed(2));
  };

  useEffect(() => {
    if (tdata && tdata?.length > 0) {
      let data = [
        {
          type: intl.formatMessage({ id: "text.Principal" }),
          value: onToFixed(tdata[0]?.staking),
        },
        {
          type: intl.formatMessage({ id: "text.TotalInterest" }),
          value: onToFixed(tdata[tdata?.length - 1]?.totalinterest),
        },
      ];
      setConfig({
        show: true,
        appendPadding: 10,
        data,
        angleField: "value",
        colorField: "type",
        radius: 0.9,
        label: {
          type: "inner",
          offset: "-50%",
          style: {
            fontSize: 18,
            textAlign: "center",
          },
        },
        interactions: [
          {
            type: "element-active",
          },
        ],
      });
    }
  }, [tdata]);
  return (
    <Flex w="full" justifyContent="center">
      {config?.show ? <Pie {...config} /> : ""}
    </Flex>
  );
};
