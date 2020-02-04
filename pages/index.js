import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Layout from '../components/layout';
import './index.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProjectContainer from '../components/projectComp';

const Home = () => {
  const [customClassName, setCustomClassName] = useState('');
  useEffect(() => {
    setCustomClassName(' active'); 
  })
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <Container fluid={true} className='bgDark'>
        <Row>
          <Col xs={12} xl={{ span: 6, offset: 3 }}>
            <header className='header-vh-100'>
              <div className='d-flex h-100 justify-content-center flex-column '>
                <div className={'header-main-text' + customClassName}>
                  <h1 className={'f-semi header-font'}>I create some pretty nice things on the web, check them out</h1>
                  <h2 className={'f-light header-font'}>Oh yeah and nearly forgot, users are people too 😉</h2>
                  <Button variant="outline-light">Check out my projects <i className='fal fa-long-arrow-right'></i></Button>
                </div>
              </div>
            </header>
          </Col>
        </Row>
      </Container>

      <ProjectContainer />

    </Layout>
  )
} 

export default Home