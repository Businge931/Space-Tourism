import React, { useState } from "react";
import "../styles/globals.css";
import Head from "next/head";

import Header from "../components/Header/Header";
import MobileDrawer from "../components/Header/MobileDrawer";
import OverLay from "../components/Header/OverLay";

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(false);
  return (
    <div className="root">
      <Head>
        <title>Space Tourism</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {show && (
        <>
          <OverLay setShow={setShow} />
          <MobileDrawer setShow={setShow} show={show} />
        </>
      )}

      <div className="header">
        <Header setShow={setShow} />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
