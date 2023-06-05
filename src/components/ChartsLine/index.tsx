import { Area } from "@ant-design/plots";
import { getDayYm, getDateAll, formatHelper } from "../../common";

export default ({
  data = [],
  type = "1D",
  xkey = "label",
  ykey = "value",
}: any) => {
  let ticknum: any = data.length > 6 ? data.length / 6 : 1;
  const DemoLine = () => {
    const config: any = {
      data: data || [],
      padding: "auto",
      xField: xkey,
      yField: ykey,
      line: {
        color: "#0052ff",
      },
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
                  <div style="color:#fff;font-size:1rem;"><b>${formatHelper.currency(
                    row?.data?.showval,
                    ""
                  )}</b></div>
                  <div style="font-size:12px;color:#ffffff66;padding:7px 0 0 0;line-height:16px;">${getDayYm(
                    row?.data?.label
                  )}</div>
                </div>`;
          }
        },
      },
      renderer: "svg",
      yAxis: {
        label: false,
        grid: {
          line: false,
          label: false,
        },
      },
      xAxis: {
        line: {
          style: {
            stroke: data.length > 0 ? "#82828217" : "#fff",
          },
        },
        grid: {
          line: false,
          label: false,
        },
        tickLine: null,
        tickInterval: data.length > 6 ? parseInt(ticknum + 1) : 1,
        label: {
          offsetX: data.length > 6 ? 47 : 10,
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
      width: "100%",
      height: 365,
      autoFit: true,
      areaStyle: () => {
        return {
          fill: "l(270) 0:#ffffff00 0.1:#cde1d675 1:#0052ff",
        };
      },
    };
    return (
      <Area {...config} style={{ width: "100%", padding: "0 0 10px 0" }} />
    );
  };
  return <DemoLine />;
};
