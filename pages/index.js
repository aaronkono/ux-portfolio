import React, { useState, useEffect } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Layout from "../components/layout";
import "./index.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectContainer from "../components/projectComp";
import CtaContainer from "../components/ctaContainer";
import Footer from "../components/footer";

const Home = () => {
  const [customClassName, setCustomClassName] = useState("");
  useEffect(() => {
    setCustomClassName(" active");
  });
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <Container
        fluid={true}
        className="ak-container--header ak--container-spacer ak--blue-container"
      >
        <Row className="h-100">
          <Col xs={12} className="h-100">
            <header className="h-100">
              <div className="ak--container d-flex h-100 align-items-center justify-content-center flex-column ">
                <div className={"header-main-text" + customClassName}>
                  <h1 className={"f-bold header-font mb-36"}>
                    {/* Hi, Aaron Konopka is the name! I live and breath product
                    design. My specialty lies in creating a cohesive balance
                    between UX and UI design, throughout the whole product
                    lifecycle. I also come neatly packaged with a technical
                    background and an impeccable taste is shoes. Pleasure to
                    meet you... */}
                    Hi, Aaron Konopka is the name! I live and breath product
                    design, creating a cohesive balance between UX and UI
                    design, throughout the whole product lifecycle. I also come
                    neatly packaged with a technical background and an
                    impeccable taste is shoes. Pleasure to meet you...
                  </h1>
                  <a href="/portfolio" className="btn btn-ak--outline btn-md">
                    Check out what i've worked on{" "}
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </header>
          </Col>
        </Row>
      </Container>
      <ProjectContainer />
      <CtaContainer
        formHeading={
          <h2 className="f-bold text-center ak--body-title ak--wh">
            Mind a coffee catch up?
          </h2>
        }
        formSubheading={
          <p className="ak--body-subtitle ak--wh text-center mb-36">
            Let's collaborate and have a chat about working together
          </p>
        }
      />
      <Footer />
    </Layout>
  );
};

export default Home;
