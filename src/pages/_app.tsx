import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import AppLayout from "components/common/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
