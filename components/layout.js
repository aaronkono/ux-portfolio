import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/layout.css";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css"
            integrity="sha384-IIED/eyOkM6ihtOiQsX2zizxFBphgnv1zbe1bKA+njdFzkr6cDNy16jfIKWu4FNH"
            crossorigin="anonymous"
          />
        </Head>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
