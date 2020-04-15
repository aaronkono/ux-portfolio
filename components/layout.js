import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/layout.css';


class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather:300,900" rel="stylesheet" />
        </Head>
        {this.props.children}
      </div>
    ) 
  }
}

export default Layout