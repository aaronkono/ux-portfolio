import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'


class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:200,300,400,600,700&display=swap" rel="stylesheet" />
        </Head>
        {this.props.children}
      </div>
    ) 
  }
}

export default Layout