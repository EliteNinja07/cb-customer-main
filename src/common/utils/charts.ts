const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//月份简写
const simpleArr = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const getHoursAmPm = (num: number) => {
  if (num >= 0 && num <= 12) {
    return "AM";
  } else {
    return "PM";
  }
};

const sepNum: any = (diff: number, key: string) => {
  if (key == "ALL" || key == "1Y" || key == "1M") {
    if (diff > 1000) {
      return 0;
    } else {
      return diff * 1;
    }
  } else {
    return diff * 5;
  }
};

export const objectArr = (arr: any, key: string) => {
  let newArr: any = [];
  let val1 = 0;
  arr.forEach((res: any) => {
    if (val1 == 0) {
      newArr.push({
        label: res[0],
        value: res[1],
        showval: res[1],
      });
      val1 = res[1];
    } else {
      if (val1 < res[1]) {
        let sval = res[1] - val1;
        newArr.push({
          label: res[0],
          value: res[1] + sepNum(sval, key),
          showval: res[1],
        });
      }
      if (val1 > res[1]) {
        let sval = val1 - res[1];
        newArr.push({
          label: res[0],
          value: res[1] - sepNum(sval, key),
          showval: res[1],
        });
      }
    }
  });
  return newArr;
};

// export const getDayYm = (str: number) => {
//   //曲线获取反时间
//   if (str) {
//     let nowdate = new Date(str);
//     let year = nowdate.getFullYear(); //年
//     let month = nowdate.getMonth() + 1; //月
//     let date = nowdate.getDate(); //天
//     let day = nowdate.getDay();
//     let h = nowdate.getHours();
//     let m = nowdate.getMinutes();
//     let s = nowdate.getSeconds();
//     return `${monthArr[month - 1]} ${date},${year} ${h}:${m}${getHoursAmPm(h)}`;
//   } else {
//     return "00/00/0000";
//   }
// };

// export const getDateAll = (str: string, type: string) => {
//   //获取简写全部
//   if (str) {
//     let nowdate = new Date(parseInt(str));
//     let year = nowdate.getFullYear(); //年
//     let month = nowdate.getMonth() + 1; //月
//     let date = nowdate.getDate(); //天
//     let h = nowdate.getHours();
//     let m = nowdate.getMinutes();
//     let s = nowdate.getSeconds();
//     if (type == "month") {
//       return simpleArr[nowdate.getMonth()];
//     }
//     if (type == "day") {
//       return date < 10 ? "0" + date : date;
//     }
//     if (type == "1H" || type == "1D") {
//       return `${h}:${m}${getHoursAmPm(h)}`;
//     } else if (type == "1W" || type == "1M") {
//       return `${simpleArr[nowdate.getMonth()]} ${date}`;
//     } else {
//       return `${simpleArr[nowdate.getMonth()]} ${year}`;
//     }
//   } else {
//     return "";
//   }
// };
