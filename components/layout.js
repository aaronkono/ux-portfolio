import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'


class Layout extends React.Component {
  render() {
    return (
      <div className='h-100'>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,800,900" rel="stylesheet" />
        </Head>
        {this.props.children}
      </div>
    ) 
  }
}

export default Layout