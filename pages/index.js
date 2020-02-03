import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Layout from '../components/layout';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
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
                  <h1 className={'f-semi header-font'}>A UX Porfolio</h1>
                  <h2 className={'f-light header-font'}>Thought I'd start off with something generic like 'I create memborable experiences for users' but I thought better of it.</h2>
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