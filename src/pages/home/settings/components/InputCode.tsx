import { Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useIntl } from "react-intl";
import { PrimaryButton, request, useMyToast } from "../../../../common";
const styles = {
  InputC: {
    border: "1px solid #89909e",
    borderRadius: "8px",
    padding: "0 1rem",
  },
};
export default ({ email, ...field }: any) => {
  const intl = useIntl();
  const [getBtnName, setBtnName] = useState(
    intl.formatMessage({
      id: "settings.SendValidateEmail",
    })
  );
  const [getStatus, setStatus] = useState(false);
  const [getLoading, setLoading] = useState(false);
  const { showRes, showSuccess } = useMyToast();
  let countDownNum = 60;
  const getIphoneCode = () => {
    // console.log("email", email);
    setLoading(true); //打开加载动画
    //发起获取验证码请求
    request("auth/send_email_code", { data: { email: email } })
      .then(() => {
        showSuccess({ title: "Send verify email success: " });
        countDownNum = 5;
        countDown(); //开始倒计时
        setLoading(false); //发送接口发送成功或失败取消加载动画
        setStatus(true); //置灰不能点
      })
      .catch((err) => {
        setLoading(false);
        setStatus(false);
        showRes(err);
      });
  };

  const countDown = () => {
    if (countDownNum > 0) {
      setBtnName(`${countDownNum--}S`);
      setTimeout(countDown, 1000);
    } else {
      setBtnName(
        intl.formatMessage({
          id: "settings.SendValidateEmail",
        })
      );
      setStatus(false);
    }
  };

  return (
    <Flex sx={styles.InputC} w="100%">
      <Input variant="unstyled" py={3} {...field} />
      <Flex pt={1.5}>
        <PrimaryButton
          py={0}
          isDisabled={getStatus}
          h="35px"
          w="180px"
          isLoading={getLoading}
          fontSize="14px"
          px={3}
          onClick={getIphoneCode}
        >
          {getBtnName}
        </PrimaryButton>
      </Flex>
    </Flex>
  );
};
