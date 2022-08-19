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
      <Container
        fluid={true}
        className="ak-container--header ak--container-spacer bg-blue"
      >
        <Row className="h-100">
          <Col xs={12} className="h-100">
            <header className="d-flex flex-row h-100">
              <div className="ak--container d-flex align-items-center justify-content-center flex-column w-50">
                <div className="header-subpage-main-text">
                  <h1 className={"f-bold header-font mb-20"}>
                  Manage - FIX Platform
                  </h1>
                  <p className="f-secondary mb-20">
                  FIX is a SaaS platform which connects tenants, owners, property managers and suppliers together.
                  </p>
                  <div className="d-flex flex-row">
                    <div className="w-50">
                      <p className="mb-4 f-bold">Client</p>
                      <p className="f-secondary">Virtual Agent</p>
                    </div>
                    <div className="w-50">
                      <p className="mb-4 f-bold">Specfic Role</p>
                      <p className="mb-0 f-secondary">UX Design</p>
                      <p className="mb-0 f-secondary">UI Design</p>
                      <p className="f-secondary">Frontend Dev</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex position-relative align-items-center justify-content-center w-50 ak--profile-image">
                <img src="./static/manage-fix-header.jpg" className="w-100" />
                <svg className="position-absolute svg-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#CDEBF9" d="M31.9,-34.9C38.1,-17.8,37.4,-4.7,37.5,14C37.6,32.6,38.3,56.8,29.1,61.9C19.8,67,0.6,52.9,-20.4,42.6C-41.3,32.4,-64,26.1,-72,10.8C-80,-4.5,-73.3,-28.8,-58.9,-47.8C-44.4,-66.8,-22.2,-80.5,-4.7,-76.8C12.9,-73.1,25.8,-52,31.9,-34.9Z" transform="translate(100 100)" />
</svg> 
                <div className="position-absolute dot-outer-container">
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className=" dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                </div>
                <div className="position-absolute dot-outer-container doc-right">
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className=" dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                  <div className="dot-container">
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                    <div className="position-relative c--container "></div>
                  </div>
                </div>                
                <svg className="position-absolute svg-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#CDEBF9" d="M31.9,-34.9C38.1,-17.8,37.4,-4.7,37.5,14C37.6,32.6,38.3,56.8,29.1,61.9C19.8,67,0.6,52.9,-20.4,42.6C-41.3,32.4,-64,26.1,-72,10.8C-80,-4.5,-73.3,-28.8,-58.9,-47.8C-44.4,-66.8,-22.2,-80.5,-4.7,-76.8C12.9,-73.1,25.8,-52,31.9,-34.9Z" transform="translate(100 100)" />
</svg>     
              </div>
            </header>
          </Col>
        </Row>
      </Container>
      <Container className="ak--container-spacer">
        <Row>
          <Col>
            <h2 className="f-bold text-center mb-8">
              Problem statement & the process
            </h2>
            <p className="text-center mb-24 f-secondary">
              Defining the problem we're solving
            </p>
            <div className="ak--container bg-grey ctaContainer pleft-4 pright-4">
              <div className="processProblemContainerOuter">
                <div className="processProblemContainer">
                  <div className="circleIconContainer mb-12">
                    <i className="fas fa-exclamation"></i>
                  </div>
                  <div>
                    <h6 className="mb-12 f-bold leadUpper">Problem</h6>
                  </div>
                  <div>
                    <p className="f-secondary">
                    Property Management Agencies have an enormous amount of maintenance requests to deal with
                    on a daily basis, it was unmanageable for agencies to run at a profit and staff turnover was like
                    a merry-go-around.
                    </p>
                  </div>
                </div>
                <div className="processProblemContainer">
                  <div className="circleIconContainer mb-12">
                    <i className="far fa-microchip"></i>
                  </div>
                  <div>
                    <h6 className="mb-12 f-bold leadUpper">The Process</h6>
                  </div>
                  <div>
                    <p className="f-secondary">
                    Understanding the needs and desires of Property Managers and empathising with them is the
                    start of the creative life cycle. 
                    </p>
                    <p className="f-secondary">What you will see
                    next is a snippet of the creative process at work. Starting with user flows, wireframes which
                    later move into prototypes and in some cases straight to a MVP.</p>
                  </div>
                </div>
              </div>
              <svg className="position-absolute ctaSvg ctaSvgTwo svgGrey" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#f1f1f1" d="M37.9,-48.2C51.1,-34,65.3,-24,72.1,-9.2C79,5.7,78.5,25.4,68.2,35.8C58,46.3,37.9,47.6,21.9,48.2C5.9,48.9,-6,49,-19.1,46.7C-32.2,44.4,-46.6,39.8,-54.8,29.7C-63,19.5,-65,3.9,-64.6,-13.7C-64.2,-31.2,-61.5,-50.6,-50.3,-65.2C-39.2,-79.7,-19.6,-89.5,-3.6,-85.2C12.3,-80.8,24.6,-62.4,37.9,-48.2Z" transform="translate(100 100)" />
              </svg>
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

      <Container className="ak--container-spacer">
        <Row>
          <Col>
            <h2 className="f-bold text-center mb-8">
              Results
            </h2>
            <p className="text-center mb-24 f-secondary">
              Metrics & Measurements
            </p>
            <div className="ak--container bg-grey ctaContainer pleft-4 pright-4">
              <div className="processProblemContainerOuter">
                <div className="processProblemContainer mb-16">
                  <div className="circleIconContainer mb-12">
                    <i className="far fa-chart-line-down"></i>
                  </div>
                  <div>
                    <h6 className="mb-12 f-bold leadUpper">Productivity</h6>
                  </div>
                  <div>
                    <p className="f-secondary">
                    <strong>73.3%</strong> Reduction in email traffic
                    </p>
                  </div>
                </div>
                <div className="processProblemContainer mb-16">
                  <div className="circleIconContainer mb-12">
                    <i className="far fa-chart-line"></i>
                  </div>
                  <div>
                    <h6 className="mb-12 f-bold leadUpper">Productivity</h6>
                  </div>
                  <div>
                    <p className="f-secondary">
                      <strong>171.15 hours</strong> Saved per week
                    </p>
                  </div>
                </div>
                </div>
                <div className="processProblemContainerOuter">
                <div className="processProblemContainer">
                  <div className="circleIconContainer mb-12">
                    <i className="far fa-chart-line"></i>
                  </div>
                  <div>
                    <h6 className="mb-12 f-bold leadUpper">Time</h6>
                  </div>
                  <div>
                    <p className="f-secondary">
                    <strong>One minute per workorder</strong>, saved hours of back and forward emails
                    </p>
                  </div>
                </div>
                <div className="processProblemContainer">
                  <div className="circleIconContainer mb-12">
                    <i className="far fa-chart-line"></i>
                  </div>
                  <div>
                    <h6 className="mb-12 f-bold leadUpper">Productivity</h6>
                  </div>
                  <div>
                    <p className="f-secondary">
                    <strong>Zero</strong> back and forward communication emails
                    </p>
                  </div>
                </div>
                </div>
              <svg className="position-absolute ctaSvg ctaSvgTwo svgGrey" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#f1f1f1" d="M37.9,-48.2C51.1,-34,65.3,-24,72.1,-9.2C79,5.7,78.5,25.4,68.2,35.8C58,46.3,37.9,47.6,21.9,48.2C5.9,48.9,-6,49,-19.1,46.7C-32.2,44.4,-46.6,39.8,-54.8,29.7C-63,19.5,-65,3.9,-64.6,-13.7C-64.2,-31.2,-61.5,-50.6,-50.3,-65.2C-39.2,-79.7,-19.6,-89.5,-3.6,-85.2C12.3,-80.8,24.6,-62.4,37.9,-48.2Z" transform="translate(100 100)" />
              </svg>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="ak--container-spacer bg-grey">
        <Row>
          <Col>
            <div className="ak--container">
              <h2 className="f-bold text-center mb-8">Final Product</h2>
              <p className="text-center f-secondary mb-24 secondaryTextWidth">
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
      <CtaContainer
        formHeading={
          <h2 className="f-bold text-center mb-8">
            Like what you see?
          </h2>
        }
        formSubheading={
          <p className="text-center mb-24 f-secondary">
            Let's collaborate or have a chat about working together
          </p>
        }
      />
      <Footer />
    </Layout>
  );
}
