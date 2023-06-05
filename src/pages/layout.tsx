import React, { useRef } from "react";
import {
  MyAlert,
  MyChakraProvider,
  MyInitalState,
  MyIntlProvider,
  MyLoading,
  MyWeb3Provider,
} from "@/common";
import { MySEOProvider } from "@/common/libs/MySEOProvider";
export const MyAlertRootContext = React.createContext({});

export default function layout() {
  const myAlertRef = useRef();

  return (
    <MyIntlProvider>
      <MySEOProvider />
      <MyChakraProvider>
        <MyWeb3Provider>
          <MyAlertRootContext.Provider value={myAlertRef}>
            <MyAlert ref={myAlertRef} />
            <MyLoading />
            <MyInitalState />
          </MyAlertRootContext.Provider>
        </MyWeb3Provider>
      </MyChakraProvider>
    </MyIntlProvider>
  );
}
