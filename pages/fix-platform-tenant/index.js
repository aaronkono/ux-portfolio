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
  StickyContainer
} from "../../components/stickyScroll";
import { MetricGrid } from "../../components/metricMeasurements";
import CtaContainer from "../../components/ctaContainer";
import Footer from "../../components/footer";

export default function FixPlatformManage() {
  return (
    <Layout>
      <Head>
        <title>
          Tenant - FIX Platform &middot; Aaron Konopka, UX / UI Designer
        </title>
      </Head>
      <Nav />
      <header>
        <Container className="ak--container">
          <Row>
            <Col xs={12}>
              <PortfolioHeader
                projectTitle={<h2 className="f-bold">Tenant - FIX Platform</h2>}
                projectOverview={
                  <p className="f-light f-lead">
                    FIX is a SaaS platform which connects tenants, owners,
                    property managers and suppliers together.
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
                  <img src="./static/tenant-fix-header.jpg" />
                </div>
              </div>
              <div className="ak--container">
                <div className="d-flex flex-row flex-wrap ak--container--innerHeader">
                  <div>
                    <div>
                      <p className="mb-0 f-bold">Client</p>
                      <p className=" f-light f-secondary">Virtual Agent</p>
                    </div>
                    <div>
                      <p className="mb-0 f-bold">Specfic Role</p>
                      <p className="mb-0 f-light f-secondary">UX Design</p>
                      <p className="mb-0 f-light f-secondary">UI Design</p>
                      <p className=" f-light f-secondary">Frontend Dev</p>
                    </div>
                  </div>
                  <div className="ml-auto" style={{ maxWidth: "475px" }}>
                    <div>
                      <p className="mb-0 f-bold">Problem</p>
                    </div>
                    <div>
                      <p className="f-light f-secondary">
                        Tenants have a difficult time letting their property
                        managers know if there is maintenance needed at their
                        home, they need to contact through traditional means
                        (email and call). This may lead to misinterpretation of
                        the issue which leads to back and forward communication
                      </p>
                    </div>
                    <div>
                      <p className="mb-0 f-bold">The Process</p>
                    </div>
                    <div>
                      <p className="f-light f-secondary mb-36">
                        Understanding the tenants frustration, the ideas started
                        to flow. After user research and empathising with
                        tenants, the solution became clearer. Creating a
                        platform where they can add, track, manage and receive
                        updates on their maintenance requests.
                      </p>
                    </div>
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
            <h3 className="f-bold mb-0 ">User flows / Wireframes</h3>
            {/* <p className="f-light">
              Focusing on user needs and empathising, the journey throughout the
              product lifecycle began. The website went through multiple
              different iterations, let's dive into it!
            </p> */}
          </StickyContainer>
        </LeftColumn>
        <RightColumn>
          <div className="iteration-grid">
            <div>
              <img
                className="img-fluid"
                src="./static/FIX-tenant-wireframe.jpg"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="./static/FIX-tenant-wireframe-2.jpg"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="./static/FIX-tenant-wireframe-3.jpg"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="./static/FIX-tenant-wireframe-4.jpg"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="./static/FIX-tenant-wireframe-5.jpg"
              />
            </div>
          </div>
        </RightColumn>
      </SectionContainer>

      <SectionContainer className="ak--container">
        <LeftColumn>
          <StickyContainer>
            <h3 className="f-bold mb-0 ">Prototypes</h3>
            <p className="f-light f-secondary">
              No prototypes available. I am seeking clearance from Virtual Agent
              to display these on my portfolio.
            </p>
          </StickyContainer>
        </LeftColumn>
        <RightColumn>
          <div className="iteration-grid ig-prototype">
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
              <h2 className="mb-0 f-bold text-center">Results</h2>
              <p className="text-center f-light f-secondary mb-36">
                Metrics & Measurements
              </p>
              <MetricGrid>
                <div className="metricGrid--inner">
                  <div>
                    <i className="fad fa-chart-line-down"></i>
                  </div>
                  <div>
                    <h4 className="f-bold">73.3%</h4>
                    <p className="mb-0 f-secondary f-light">
                      Reduction in email traffic
                    </p>
                  </div>
                </div>
                <div className="metricGrid--inner">
                  <div>
                    <i className="fad fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="f-bold">Zero</h4>
                    <p className="mb-0 f-secondary f-light">
                      Back and forward communication emails
                    </p>
                  </div>
                </div>
                <div className="metricGrid--inner">
                  <div>
                    <i className="fad fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="f-bold">Avg. two minutes per request</h4>
                    <p className="mb-0 f-secondary f-light">
                      Saved hours of back and forward emails
                    </p>
                  </div>
                </div>
              </MetricGrid>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="ak--container-spacer">
        <Row>
          <Col>
            <div className="ak--container">
              <h2 className="f-bold text-center">Final Product</h2>
              <p className="text-center mb-36 f-light f-secondary">
                I'm not too sure anything can top the feeling when all your hard
                work is display, check out some screenshots below
              </p>
              <div>
                <img
                  className="img-fluid"
                  src="./static/tenant-fix-header.jpg"
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
