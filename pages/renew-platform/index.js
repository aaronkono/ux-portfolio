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
import { MetricGrid } from "../../components/metricMeasurements";
import CtaContainer from "../../components/ctaContainer";
import Footer from "../../components/footer";

export default function FixPlatformManage() {
  return (
    <Layout>
      <Head>
        <title>Renew Platform &middot; Aaron Konopka, UX / UI Designer</title>
      </Head>
      <Nav />
      <header>
        <Container className="ak--container">
          <Row>
            <Col xs={12}>
              <PortfolioHeader
                projectTitle={<h2 className="f-bold">Renew Platform</h2>}
                projectOverview={
                  <p className="f-light f-lead">
                    Renew is a SaaS platform which connects tenants, owners,
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
                  <img src="./static/manage-fix-header.jpg" />
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
                        Lease Renewals were a manual process for Property
                        Managers. Documents and information would get lost
                        regularly which would leave the Landlord in the dark.
                        Having lost documents and no guiding the Landlord
                        through the renewal jouryney lead to lost managements.
                      </p>
                    </div>
                    <div>
                      <p className="mb-0 f-bold">The Process</p>
                    </div>
                    <div>
                      <p className="f-light f-secondary mb-36">
                        The implementation of Renew through the creative process
                        has created a new experience for Property Managers and
                        Landlords. Landlords are no longer in the dark as
                        Property Managers can simply start the renewal process
                        to give the power to decide how the Landlord want to
                        proceed with their property.
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
            <h3 className="f-bold mb-0 ">User flows</h3>
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

      <SectionContainer className="ak--container">
        <LeftColumn>
          <StickyContainer>
            <h3 className="f-bold mb-0 ">Wireframes</h3>
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
                src="./static/toop-website-wireframe-2.jpg"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="./static/toop-website-wireframe-3.jpg"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="./static/toop-website-wireframe-4.jpg"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="./static/toop-website-wireframe-5.jpg"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="./static/toop-website-wireframe-6.jpg"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="./static/toop-website-wireframe-7.jpg"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="./static/toop-website-wireframe-8.jpg"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="./static/toop-website-wireframe-9.jpg"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="./static/toop-website-wireframe-assets.jpg"
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="./static/toop-website-wireframe-thumbnails.jpg"
              />
            </div>
          </div>
        </RightColumn>
      </SectionContainer>

      <SectionContainer className="ak--container">
        <LeftColumn>
          <StickyContainer>
            <h3 className="f-bold mb-0">Prototypes</h3>
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
                    <h4 className="f-bold">80%</h4>
                    <p className="mb-0 f-secondary f-light">
                      Increased property searchability
                    </p>
                  </div>
                </div>
                <div className="metricGrid--inner">
                  <div>
                    <i className="fad fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="f-bold">30.98%</h4>
                    <p className="mb-0 f-secondary f-light">New user traffic</p>
                  </div>
                </div>
                <div className="metricGrid--inner">
                  <div>
                    <i className="fad fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="f-bold">80%</h4>
                    <p className="mb-0 f-secondary f-light">
                      Website retention rate
                    </p>
                  </div>
                </div>
                <div className="metricGrid--inner">
                  <div>
                    <i className="fad fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="f-bold">60%</h4>
                    <p className="mb-0 f-secondary f-light">
                      More efficient at searching for properties
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
              <p className="text-center f-light f-secondary mb-36">
                I'm not too sure anything can top the feeling when all your hard
                work is display, check out some screenshots below
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
