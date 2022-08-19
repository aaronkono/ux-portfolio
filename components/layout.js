import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/layout.css";

const injectGA = () => {
  if (typeof window == "undefined") {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "UA-169023996-1");
};

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css"
            integrity="sha384-IIED/eyOkM6ihtOiQsX2zizxFBphgnv1zbe1bKA+njdFzkr6cDNy16jfIKWu4FNH"
            crossorigin="anonymous"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-169023996-1"
          />
          <script>{injectGA()}</script>
        </Head>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
