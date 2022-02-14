import type { AppProps } from "next/app";
import GlobalStyles from "src/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
