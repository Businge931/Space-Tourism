import Header from "../components/Header/Header";
import "../styles/globals.css";

import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div className="root">
      <div className="header">
        <Header />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
