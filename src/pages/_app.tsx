import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "src/components/common/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>니콘내콘</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
