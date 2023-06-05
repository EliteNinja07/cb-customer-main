export const getErrorMessage = (msg: string, intl: any) => {
  if (msg.indexOf("(") != -1) msg = msg.substring(0, msg.indexOf("(")).trim();
  if (msg.indexOf("[") != -1) msg = msg.substring(0, msg.indexOf("[")).trim();
  if (msg == "invalid opcode: INVALID" || msg.indexOf("estimate gas;") != -1)
    msg = intl.formatMessage({ id: "error.NotEnoughBalance" });
  return msg;
};
