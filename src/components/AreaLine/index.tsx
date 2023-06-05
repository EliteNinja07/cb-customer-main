import { Area } from "@ant-design/plots";
import chartsicon from "@/assets/images/chartsicon.svg";

export default ({ data, xkey = "datetime", ykey = "earning" }: any) => {
  const DemoLine = () => {
    const config: any = {
      data: data || [],
      padding: "auto",
      xField: xkey,
      yField: ykey,
      tooltip: false,
      point: false,
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
        line: false,
        grid: {
          line: false,
          label: false,
        },
        label: false,
      },
      areaStyle: () => {
        return {
          fill: "p(a)" + chartsicon,
        };
      },
    };
    return (
      <Area
        {...config}
        style={{ width: "100%", padding: "0 0 1rem 0", height: "100%" }}
      />
    );
  };
  return <DemoLine />;
};
