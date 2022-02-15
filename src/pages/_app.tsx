import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import AppLayout from "components/common/AppLayout";
import { Provider } from "react-redux";
import store from "stores/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppLayout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
