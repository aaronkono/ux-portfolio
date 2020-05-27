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
          Toop&Toop Website &middot; Aaron Konopka, UX / UI Designer
        </title>
      </Head>
      <Nav />
      <header>
        <Container className="ak--container">
          <Row>
            <Col xs={12}>
              <PortfolioHeader
                projectTitle={<h2 className="f-bold">Toop&Toop Website</h2>}
                projectOverview={
                  <p className="f-light f-lead">
                    Modernise and create a memorable experience for all new and
                    returning clients to the website with cross team
                    collaboration.
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
                    <p className="f-light">
                      The legacy Toop&Toop website did not take into account
                      what users wanted / needed when they came to the site. It
                      was difficult to navigate, find properties and find sales
                      partners / the team alike to make an enquiry.
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
            <p className="f-light">
              Focusing on user needs and empathising, the journey throughout the
              product lifecycle began. The website went through multiple
              different iterations, let's dive into it!
            </p>
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
          </div>
        </RightColumn>
      </SectionContainer>

      <SectionContainer className="ak--container">
        <LeftColumn>
          <StickyContainer>
            <h2 className="f-bold mb-0 ">User flows</h2>
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
            <h2 className="f-bold mb-0 ">Wireframes</h2>
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
            <h2 className="f-bold mb-0 ">Prototypes</h2>
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
              <p className="text-center">Metrics & Measurements</p>
              <MetricGrid>
                <div>
                  <div>
                    <i className="fal fa-chart-line fa-3x"></i>
                  </div>
                  <div>
                    <h4>80%</h4>
                    <p className="mb-0">Increased property searchability</p>
                  </div>
                </div>
                <div>
                  <div>
                    <i className="fal fa-chart-line fa-3x"></i>
                  </div>
                  <div>
                    <h4>
                      80% <i className="fal fa-long-arrow-up"></i>
                    </h4>
                    <p className="mb-0">Website retention rate</p>
                  </div>
                </div>
                <div>
                  <div>
                    <i className="fal fa-chart-line fa-3x"></i>
                  </div>
                  <div>
                    <h4>
                      30.98% <i className="fal fa-long-arrow-up"></i>
                    </h4>
                    <p className="mb-0">New user traffic</p>
                  </div>
                </div>
                <div>
                  <div>
                    <i className="fal fa-chart-line fa-3x"></i>
                  </div>
                  <div>
                    <h4>
                      60% <i className="fal fa-long-arrow-up"></i>
                    </h4>
                    <p className="mb-0">
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
