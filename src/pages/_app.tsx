import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import theme from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
