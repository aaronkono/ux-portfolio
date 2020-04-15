import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Layout from '../components/layout';
import './index.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProjectContainer from '../components/projectComp';
import CtaContainer from '../components/ctaContainer';
import Footer from '../components/footer';

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
      <Container fluid={true} className='ak--container-spacer'> 
        <Row>
          <Col xs={12}>
            <header className='header-vh-100'>
              <div className='ak--container d-flex h-100 justify-content-center flex-column '>
                <div className={'header-main-text' + customClassName}>
                  <h1 className={'f-semi header-font'}>Hi, Aaron Konopka is the name! I live and breath product design and management. My specialty lies in creating a cohesive balance between UX and UI design, throughout the whole product lifecycle. I also come neatly packaged with a technical background and an impeccable taste is shoes. Pleasure to meet you...</h1>
                  <a href='/portfolio' className='btn btn-ak--outline btn-md'>Check out what i've worked on <i className='fal fa-long-arrow-right'></i></a>
                </div>
              </div>
            </header>
          </Col>
        </Row>
      </Container>
      <ProjectContainer />
      <CtaContainer />
      <Footer />
    </Layout>
  )
} 

export default Home