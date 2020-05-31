import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
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
import CaseStudyContainer from "../../components/caseStudyContainer";
import CtaContainer from "../../components/ctaContainer";
import Footer from "../../components/footer";

export default function FixPlatformManage() {
  return (
    <Layout>
      <Head>
        <title>
          Manage - FIX Platform &middot; Aaron Konopka, UX / UI Designer
        </title>
      </Head>
      <Nav />
      <header>
        <Container className="ak--container">
          <Row>
            <Col xs={12}>
              <PortfolioHeader
                projectTitle={<h2 className="f-bold">Manage - FIX Platform</h2>}
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
                        Property Management Agencies have an enormous amount of
                        maintenance requests to deal with on a daily basis, it
                        was unmanageable for agencies to run at a profit and
                        staff turnover was like a merry-go-around.
                      </p>
                    </div>
                    <div>
                      <p className="mb-0 f-bold">The Process</p>
                    </div>
                    <div>
                      <p className="f-light f-secondary mb-36">
                        Understanding the needs and desires of Property Managers
                        and empathising with them is the start of the creative
                        life cycle. We can call it human centered design. What
                        you will see next is a snippet of the creative process
                        at work. Starting with user flows, wireframes which
                        later move into prototypes and in some cases straight to
                        a MVP.
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
                src="./static/FIX-manage-wireframe.jpg"
              />
            </div>
            <div>
              <img className="img-fluid" src="./static/FIX-manage-aa.jpg" />
            </div>
            <div>
              <img className="img-fluid" src="./static/FIX-manage-gq.jpg" />
            </div>
          </div>
        </RightColumn>
      </SectionContainer>

      <SectionContainer className="ak--container">
        <LeftColumn>
          <StickyContainer>
            <h3 className="f-bold mb-0 ">Prototypes</h3>
            {/* <p className="f-light">
              Focusing on user needs and empathising, the journey throughout the
              product lifecycle began. The website went through multiple
              different iterations, let's dive into it!
            </p> */}
          </StickyContainer>
        </LeftColumn>
        <RightColumn>
          <div className="iteration-grid ig-prototype">
            <div>
              <a
                target="_blank"
                href="https://www.figma.com/proto/6Elrj4Z3Kot45s1ew3vwzr/FIX-communication-low-fidelity-prototype?scaling=scale-down&node-id=1%3A3"
              >
                <img
                  className="img-fluid mb-1"
                  src="./static/FIX-manage-prototype-1.jpg"
                />
              </a>
              <p className="f-light f-secondary">
                <a
                  className="btn btn-ak--text position-relative f-light"
                  target="_blank"
                  href="https://www.figma.com/proto/6Elrj4Z3Kot45s1ew3vwzr/FIX-communication-low-fidelity-prototype?scaling=scale-down&node-id=1%3A3"
                >
                  Go to the prototype <i className="fal fa-external-link"></i>
                  <div className="btn-ak--textUnderline"></div>
                </a>
              </p>
            </div>
          </div>
        </RightColumn>
      </SectionContainer>

      <Container fluid={true} className="ak--container-spacer">
        <Row>
          <Col>
            <div className="ak--container">
              <h2 className="mb-0 f-bold text-center">Results</h2>
              <p className="text-center f-secondary f-light mb-36">
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
                    <h4 className="f-bold">171.15 hours</h4>
                    <p className="mb-0 f-secondary f-light">Saved per week</p>
                  </div>
                </div>
                <div className="metricGrid--inner">
                  <div>
                    <i className="fad fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="f-bold">One minute per workorder</h4>
                    <p className="mb-0 f-secondary f-light">
                      Saved hours of back and forward emails
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
              <div className="ak--boxShadow">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./static/fix-manage-product-1.jpg"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./static/fix-manage-product-2.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./static/fix-manage-product-3.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./static/fix-manage-product-4.jpg"
                      alt="Fourth slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <CaseStudyContainer />
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
