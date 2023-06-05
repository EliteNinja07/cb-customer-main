import dayjs from "dayjs/esm/index.js";

export const formatDay = (time: string) => {
  if (dayjs().format("DD/MM/YYYY") == dayjs(time).format("DD/MM/YYYY")) {
    return dayjs(time).format("HH:mm A");
  } else {
    return dayjs(time).format("MMM DD");
  }
};
