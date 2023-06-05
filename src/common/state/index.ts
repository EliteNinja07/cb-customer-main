import { proxy, subscribe, snapshot, useSnapshot } from "valtio";

export * from "./actions";

function proxyWithPersistant<V>(
  val: V,
  opts: {
    key: string;
  }
) {
  const local = localStorage.getItem(opts.key);
  const state = proxy(local ? JSON.parse(local) : val);
  subscribe(state, () => {
    localStorage.setItem(opts.key, JSON.stringify(snapshot(state)));
  });
  return state;
}

type StorageType = {
  address: string;
  connector: string;
  chain: string;
  inviteCode: string;
  isConnected: boolean;
  isLogin: boolean;
  locale: string;
  giftCode: string;
};
const storage: StorageType = proxyWithPersistant(
  {
    address: "",
    connector: "",
    chain: "",
    isConnected: false,
    inviteCode: "",
    isLogin: false,
    locale: "en",
    giftCode: "",
  },
  {
    key: "account",
  }
);

type SessionType = {
  ready: boolean; // is ready?
  count: number; // loading count
  user: any; // wechat
  vip: any; // vip
  global: any; // global
};
const session: SessionType = proxy({
  ready: false,
  count: 0,
  user: undefined,
  vip: undefined,
  global: {}
});

export type StateType = {
  storage: StorageType;
  session: SessionType;
};
export const state: StateType = proxy({
  storage,
  session,
});

export function useMyState() {
  const snap = useSnapshot<StateType>(state);
  return { snap };
}
