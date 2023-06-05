import { state } from '.';
import { request } from '..';
import globalAction from './global'
export const stateActions = {
  ...globalAction,
  addLoading: () => {
    state.session.count++;
  },
  subLoading: () => {
    if (state.session.count > 0) {
      state.session.count--;
    }
  },
  setLocale(locale: string) {
    console.log('setLocale', locale);
    state.storage.locale = locale;
  },
  setUser(user: any) {
    state.session.user = user;
  },
  setIsLogin(value: boolean) {
    state.storage.isLogin = value;
  },
  setInviteCode(inviteCode: string) {
    state.storage.inviteCode = inviteCode;
  },
  setGiftCode(giftCode: string) {
    state.storage.giftCode = giftCode;
  },
  clearGiftCode() {
    state.storage.giftCode = '';
  },
  me() {
    return request('auth/login', {}).then((res) => {
      // console.log("auth/login", res);
      state.session.user = res.data;
      return res.data;
    });
  },
  walletLogin({ address, chain, connector }: any) {
    console.log('walletLogin: ' + address);

    state.session.ready = true;
    state.storage.address = address as string;
    state.storage.chain = chain?.name as string;
    state.storage.connector = connector?.name as string;
    state.storage.isConnected = true;
    // state.storage.locale = getLocale();

    this.me();

    // 已登录，且是首页，就跳转到内页去
    if (state.storage.isLogin) {
      if (location.pathname == '/') location.href = '/home/earn';
    }
  },
  walletLoginFailed({ address, chain, connector }: any) {
    console.log('walletLoginFailed', location.pathname);

    state.storage.address = address;
    state.storage.chain = chain?.name ?? '';
    state.storage.connector = connector?.name ?? '';
    state.storage.isConnected = true;
    // state.storage.locale = getLocale();

    // 已登录，非首页，就跳转到首页去
    // if (!state.storage.isLogin) {
    if (location.pathname !== '/') location.href = '/';
    // }

    state.session.ready = true;
  },
  walletLogout() {
    console.log('walletLogout');

    state.storage.address = '';
    state.storage.chain = '';
    state.storage.connector = '';
    state.storage.isConnected = false;
    state.storage.isLogin = false;
    // state.storage.locale = getLocale();

    location.href = '/';

    state.session.ready = true;
  },
};
