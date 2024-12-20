"use client";

import { Provider } from "react-redux";
import { Suspense } from "react";
import { store } from "@/Store/Store";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Suspense>{children}</Suspense>
    </Provider>
  );
};

export default Wrapper;
