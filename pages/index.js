import React from 'react'
import Head from 'next/head'
{/* import Nav from '../components/nav' */}
import Layout from '../components/layout'
import './index.css'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    {/* <Nav /> */}
    <Container className='h-100'>
      <Row className='h-100'>
        <Col className='h-100'>
          <header className='h-100'>
            <div className='d-flex h-100 justify-content-center flex-column'>
              <div><h1 className='header-main-text f-bold'>A UX Porfolio</h1></div>
              <div><h1 className='header-main-text f-bold'>by Aaron Konopka</h1></div>
            </div>
          </header>
        </Col>
      </Row>
    </Container>
  </Layout>
  
)

{/*
function animateText() {
    var element = document.getElementsByClassName('header-main-text');
    element.classList.add('active');
  }
*/}  


  



export default Home
