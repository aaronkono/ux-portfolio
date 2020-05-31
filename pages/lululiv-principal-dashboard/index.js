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
          Lululiv Dashboard &middot; Aaron Konopka, UX / UI Designer
        </title>
      </Head>
      <Nav />
      <header>
        <Container className="ak--container">
          <Row>
            <Col xs={12}>
              <PortfolioHeader
                projectTitle={<h2 className="f-bold">Lululiv Dashboard</h2>}
                projectOverview={
                  <p className="f-light f-lead">
                    Lululiv is an offering where they take over the Real Estate
                    Principals rent roll and makes it profitable again. The
                    dashboard is a way they can view their portfolio performance
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
                  <img src="./static/lululiv-dashboard-header.jpg" />
                </div>
              </div>
              <div className="ak--container">
                <div className="d-flex flex-row flex-wrap ak--container--innerHeader">
                  <div>
                    <div>
                      <p className="mb-0 f-bold">Client</p>
                      <p className=" f-light f-secondary">Lululiv</p>
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
                        Selling principals want to focus on what matters to
                        them, selling property. Principals have no way of seeing
                        how their rent roll is performing With Lululiv, they
                        don't need to worry about the day to day hassle of
                        Property Management.
                      </p>
                    </div>
                    <div>
                      <p className="mb-0 f-bold">The Process</p>
                    </div>
                    <div>
                      <p className="f-light f-secondary mb-36">
                        The creative process started by doing user research and
                        getting to understand what Principals needs and wants
                        are. After collating the research, the iterative design
                        process began which lead me to the working prototype you
                        will see below
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
                src="./static/lululiv-wireframe-1.jpg"
              />
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
                href="https://www.figma.com/proto/TfupzjYKwPfW51jpXOrgsS/Lululiv-Landlord-onboarding-prototype?scaling=scale-down&node-id=5%3A2"
              >
                <img
                  className="img-fluid mb-1"
                  src="./static/lululiv-dashboard-prototype-1.jpg"
                />
              </a>
              <p className="f-light f-secondary">
                <a
                  className="btn btn-ak--text position-relative f-light"
                  target="_blank"
                  href="https://www.figma.com/proto/TfupzjYKwPfW51jpXOrgsS/Lululiv-Landlord-onboarding-prototype?scaling=scale-down&node-id=5%3A2"
                >
                  Go to the prototype <i className="fal fa-external-link"></i>
                  <div className="btn-ak--textUnderline"></div>
                </a>
              </p>
            </div>
            <div>
              <a
                target="_blank"
                href="https://www.figma.com/proto/2bTSl1g2cUk4lA3BEIeRbR/Principal-Dashboard?node-id=1%3A39&scaling=scale-down"
              >
                <img
                  className="img-fluid mb-1"
                  src="./static/lululiv-dashboard-prototype-2.jpg"
                />
              </a>
              <p className="f-light f-secondary">
                <a
                  className="btn btn-ak--text position-relative f-light"
                  target="_blank"
                  href="https://www.figma.com/proto/2bTSl1g2cUk4lA3BEIeRbR/Principal-Dashboard?node-id=1%3A39&scaling=scale-down"
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
              <p className="text-center f-light f-secondary mb-36">
                This project is still in the development cycle. The expected
                metrics will be stated without known metrics or measurements.
              </p>
              <MetricGrid>
                <div className="metricGrid--inner">
                  <div>
                    <i className="fad fa-chart-line-down"></i>
                  </div>
                  <div>
                    <h4 className="f-bold">Unknown</h4>
                    <p className="mb-0 f-secondary f-light">
                      Increased landlord onboarding without friction
                    </p>
                  </div>
                </div>
                <div className="metricGrid--inner">
                  <div>
                    <i className="fad fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="f-bold">Unknown</h4>
                    <p className="mb-0 f-secondary f-light">
                      No back and forward emails with clients
                    </p>
                  </div>
                </div>
                <div className="metricGrid--inner">
                  <div>
                    <i className="fad fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="f-bold">Unknown</h4>
                    <p className="mb-0 f-secondary f-light">
                      Reduce the time required to onboard
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
                  src="./static/lululiv-dashboard-header.jpg"
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
