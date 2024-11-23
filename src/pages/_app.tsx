import { queryClient } from "@/config";
import { AppProvider } from "@/context/useContext";
import { persistor, Store } from "@/states/store";
import "react-phone-input-2/lib/style.css";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import Loader from "@/shared/components/Loader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={Store}>
        <AppProvider>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <Toaster position="top-right" reverseOrder={false} />
          </QueryClientProvider>
        </AppProvider>
      </Provider>
    </PersistGate>
  );
}
