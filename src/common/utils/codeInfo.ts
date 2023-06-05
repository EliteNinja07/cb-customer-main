import { stateActions } from "../state";

const getQueryString = (name: string) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

export const setGiftCode = () => {
  let urlCode = getQueryString("gift_code");
  if (urlCode) {
    stateActions.setGiftCode(urlCode || "");
    return { gift_code: urlCode };
  }
};
