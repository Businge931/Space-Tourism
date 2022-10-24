import Header from "../components/Header/Header";
import "../styles/globals.css";
import Head from "next/head";

import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div className="root">
      <Head>
        <title>Space Tourism</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="header">
        <Header />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
