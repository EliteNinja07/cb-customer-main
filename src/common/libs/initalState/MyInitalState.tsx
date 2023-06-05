import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { useAccount, useNetwork } from "wagmi";
import { MyFullLoading, stateActions, useMyState } from "../..";

export function MyInitalState() {
  const { address, connector } = useAccount();
  const { chain } = useNetwork();
  const { snap } = useMyState();
  const { colorMode, toggleColorMode } = useColorMode();

  // inviteCode
  const [searchParams] = useSearchParams();
  // useEffect(() => {
  //   var inviteCode = searchParams.get("invite_code");
  //   if (inviteCode) stateActions.setInviteCode(inviteCode);
  // }, []);

  // colorMode
  useEffect(() => {
    var color = searchParams.get("theme");
    var colorMode = localStorage.getItem("chakra-ui-color-mode");
    if (color) {
      // console.log(color, colorMode);
      if (color !== colorMode) toggleColorMode();
    }
  }, [colorMode]);

  useEffect(() => {
    var inviteCode = searchParams.get("invite_code");
    if (inviteCode) stateActions.setInviteCode(inviteCode);

    var giftCode = searchParams.get("gift_code");
    if (giftCode) stateActions.setGiftCode(giftCode);

    if (address && !connector) {
      return;
    }
    if (!address && !connector && !snap.storage.isLogin) {
      // 都为空，则登录失败
      stateActions.walletLoginFailed({ address, chain, connector });
    } else if (address && connector && snap.storage.isLogin) {
      // 都不为空，则登录成功
      stateActions.walletLogin({ address, chain, connector });
    } else if (address && connector && !snap.storage.isLogin) {
      // 钱包已登录，但是本地没有登录状态，则登录失败
      stateActions.walletLoginFailed({ address, chain, connector });
    } else if (!(address && connector) && snap.storage.isLogin) {
      // 钱包未登录，但是本地登录状态，则登录失败
      stateActions.walletLoginFailed({ address, chain, connector });
    } else {
      // state.session.ready = true;
    }
  }, [address, connector, snap.storage.isLogin]);

  if (snap.session.ready) return <Outlet />;
  else return <MyFullLoading />;
}
