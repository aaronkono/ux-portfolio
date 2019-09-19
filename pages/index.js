import React, { useState, useEffect } from 'react'
import Head from 'next/head'
{/* import Nav from '../components/nav' */}
import Layout from '../components/layout'
import './index.css'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
  const [customClassName, setCustomClassName] = useState(' abc');
  useEffect(() => {
    setCustomClassName(' active'); 
  })
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      {/* <Nav /> */}
      <Container className='h-100'>
        <Row className='h-100'>
          <Col className='h-100'>
            <header className='h-100'>
              <div className='d-flex h-100 justify-content-center flex-column '>
                <div className={'header-main-text' + customClassName}>
                  <h1 className={'f-bold'}>A UX Porfolio</h1>
                  <h1 className={'f-bold'}>by Aaron Konopka</h1>
                </div>
              </div>
            </header>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
} 


  



export default Home
