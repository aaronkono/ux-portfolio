import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import PortfolioHeader from "../../components/portfolioHeader";
import {
  SectionContainer,
  LeftColumn,
  RightColumn,
  StickyContainer,
} from "../../components/stickyScroll";
import CtaContainer from "../../components/ctaContainer";
import Footer from "../../components/footer";

export default function FixPlatformManage() {
  return (
    <Layout>
      <Head>
        <title>Manage - FIX Platform</title>
      </Head>
      <Nav />
      <header>
        <Container className="ak--container">
          <Row>
            <Col xs={12}>
              <PortfolioHeader
                projectTitle={<h2 className="f-bold">Toop&Toop Website</h2>}
                projectOverview={
                  <p className="">
                    Top line project overview Top line project overview Top line
                    project overview Top line project overview
                  </p>
                }
              />
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="ak-project--container">
          <Row>
            <Col>
              <div className="project-header-container d-flex">
                <div className="project-header-container--innerImg ml-auto">
                  <img src="./static/toop-website-header.jpg" />
                </div>
              </div>
              <div className="ak--container">
                <div className="d-flex flex-row flex-wrap">
                  <div>
                    <p className="mb-0">
                      <strong>Client</strong>
                    </p>
                    <p className="">Toop&Toop</p>

                    <p className="mb-0">
                      <strong>Timeframe</strong>
                    </p>
                    <p className="">6 months</p>

                    <p className="mb-0 ">
                      <strong>Specfic Role</strong>
                    </p>
                    <p className="mb-0 ">UX Design</p>
                    <p className="">UI Design</p>
                  </div>
                  <div className="ml-auto" style={{ maxWidth: "475px" }}>
                    <p className="mb-0 ">
                      <strong>Problem</strong>
                    </p>
                    <p className="">
                      Aliquam a vestibulum lectus. Cras in velit pellentesque,
                      consequat purus id, tincidunt leo. Nullam mollis tincidunt
                      lacus, tempus vulputate nisi blandit sit amet.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <SectionContainer className="ak--container">
        <LeftColumn>
          <StickyContainer>
            <h2 className="f-bold mb-0 ">The Process</h2>
            <p className="mb-0">Let the fun begin</p>
            <p>Design thinking paragraphs</p>
          </StickyContainer>
        </LeftColumn>
        <RightColumn>
          <div className="iteration-grid">
            <div>
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1561123760-0b8467594a63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1561123760-0b8467594a63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1561123760-0b8467594a63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1561123760-0b8467594a63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"
              />
            </div>
          </div>
        </RightColumn>
      </SectionContainer>

      <Container fluid={true} className="ak--container-spacer">
        <Row>
          <Col>
            <div className="ak--container">
              <h2 className="mb-0 f-bold">Results</h2>
              <p className="">Metrics & Measurements</p>
              <div className="d-flex flex-row flex-wrap">
                <div className="d-flex flex-row w-50">
                  <div>
                    <i className="fal fa-check"></i>
                  </div>
                  <div>
                    <p className="mb-0">Result stats</p>
                  </div>
                </div>
                <div className="d-flex flex-row w-50">
                  <div>icon</div>
                  <div>
                    <p className="mb-0">Result stats</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="ak--container-spacer">
        <Row>
          <Col>
            <div className="ak--container">
              <h2 className="f-bold text-center">Final Product</h2>
              <p className="text-center mb-36">
                "Proin elementum, ipsum in ullamcorper tincidunt, libero leo
                ullamcorper ante"
              </p>
              <div>
                <img
                  className="img-fluid"
                  src="./static/toop-website-header.jpg"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <CtaContainer
        formHeading={
          <h2 className="f-bold text-center ak--body-title ak--wh">
            Like what you see?
          </h2>
        }
        formSubheading={
          <p className="ak--body-subtitle ak--wh text-center mb-36">
            Let's collaborate or have a chat about working together
          </p>
        }
      />
      <Footer />
    </Layout>
  );
}
