import { Line } from "@ant-design/plots";
import { getDayYm, getDateAll, formatMoney } from "../../common";

export default ({
  data = [],
  type = "1D",
  xkey = "datetime",
  ykey = "balance",
}: any) => {
  let ticknum: any = data.length > 6 ? data.length / 6 : 1;
  const DemoLine = () => {
    const config: any = {
      data: data || [],
      padding: "auto",
      xField: xkey,
      yField: ykey,
      tooltip: {
        crosshairs: {
          type: "none",
        },
        domStyles: {
          "g2-tooltip": {
            padding: "15px 10px",
            width: "140px",
            background: "rgba(21, 35, 44,1)",
            textAlign: "center",
            borderRadius: "5px",
            boxShadow: "rgb(125 149 182 / 20%) 0px 1px 4px",
          },
        },
        customContent: (title: string, data: any) => {
          if (data.length) {
            let row = data[0];
            return `<div>
            <div style="color:#fff;font-size:1rem;"><b>${formatMoney(
              row.value,
              "$"
            )}</b></div>
            <div style="font-size:12px;color:#ffffff66;padding:7px 0 0 0;line-height:16px;">
            ${getDayYm(row.title)}
            </div>
          </div>`;
          }
        },
      },
      renderer: "svg",
      yAxis: {
        line: false,
        grid: {
          line: false,
          label: false,
        },
        label: false,
      },
      xAxis: {
        line: {
          style: {
            stroke: "#82828217",
          },
        },
        grid: {
          line: false,
          label: false,
        },
        tickLine: null,
        tickInterval: data.length > 6 ? parseInt(ticknum + 1) : 1,
        // tickCount: 6,
        label: {
          offsetX: data.length > 6 ? 50 : 10,
          offsetY: 5,
          style: {
            fill: "#333",
            fontSize: 13,
          },
          formatter: (e: any, item: any, index: number) => {
            return getDateAll(e, type);
          },
        },
      },
      autoFit: true,
      stepType: "vh",
      areaStyle: () => {
        return {
          fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
        };
      },
    };
    return (
      <Line
        {...config}
        style={{ width: "100%", padding: "0 0 1rem 0", height: "100%" }}
      />
    );
  };
  return <DemoLine />;
};
