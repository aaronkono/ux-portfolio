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
import CtaContainer from "../../components/ctaContainer";
import Footer from "../../components/footer";

export default function FixPlatformManage() {
  return (
    <Layout>
      <Head>
        <title>
          Inspect App Case Study &middot; Aaron Konopka, UX / UI Designer
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
                    Case study: Real estate open home app reimagined
                  </h1>
                  <p className="f-secondary mb-20">
                    An app to help Property managers run open inspections
                  </p>
                  <div className="d-flex flex-row">
                    <div className="w-50">
                      <p className="mb-4 f-bold">Client</p>
                      <p className="f-secondary">Lululiv</p>
                    </div>
                    <div className="w-50">
                      <p className="mb-4 f-bold">Specific Role</p>
                      <p className="mb-0 f-secondary">UX Design</p>
                      <p className="mb-0 f-secondary">UI Design</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex position-relative align-items-center justify-content-center w-50 ak--profile-image">
                <img src="./static/inspect-app-header.jpg" className="w-100" />
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
      <Container className="ak--container-spacer pb-0">
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
                    The Open Home App was highly functional but complex. The agents while out in the field found it difficult to
                    understand the User Interface and add visitors with ease, not to mention the tired looking design.
                    </p>
                    <p className="f-secondary">
                    This led to frustration and in some circumstances the agent would revert
                    back to pen and paper to enter details.
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
                      The process started by leveraging the design thinking process and has created a potential new experience for Real Estate agents by gathering feedback at every step of the way.
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
      </header>
      <div className="ak--container-spacer pb-0">
        <h3 className="f-bold mb-8 caseStudyContainer">The process</h3>
        <p className="caseStudyContainer f-secondary">
          Taking a step back from the process and chatting to agents who are
          using the app was the starting point, asking them what their
          frustration points were and understanding how this would affect their
          ability and credibility when opening a home. After empathising with
          the user base, I defined the outcome which was desired and required
          for agents to succeed.
        </p>
        <p className="caseStudyContainer f-secondary mb-32">
          Before whipping out a pen and paper to start sketching, I wanted to go
          back to basics and create a userflow for how the app would be used.
          What I found was interesting:
        </p>
        <div style={{ margin: "0 auto 32px", maxWidth: "675px" }}>
          <img className="img-fluid" src="./static/inspect-app-userflow.jpg" />
        </div>
        <p className="caseStudyContainer f-secondary">
          Stripping back the whole process to the requirement of ‘I need to add
          visitor details easily and quickly’. The above photo outlines the
          process, from logging in, to finding the correct property, to adding
          their very first visitor which would end up a continuous loop.
        </p>
        <p className="caseStudyContainer breakOutType text-center">
          "This was solving the agent’s biggest issue.. Complexity and high
          interaction costs"
        </p>
        <p className="caseStudyContainer f-secondary">
          Once the userflow was completed, I quickly moved onto rapid
          prototyping the new look app with everything I had learned throughout
          the interview / user feedback group process.
        </p>
      </div>

      <div style={{ margin: "0 auto 16px", maxWidth: "1200px" }}>
        <div className="d-flex flex-column flex-lg-row flex-wrap userflowContainer">
          <div className="w-100 w-lg-33">
            <img
              className="img-fluid"
              src="./static/inspect-app-th-userflow.jpg"
            />
          </div>
          <div className="w-100 w-lg-33">
            <img
              className="img-fluid"
              src="./static/inspect-app-th-userflow-2.jpg"
            />
          </div>
          <div className="w-100 w-lg-33">
            <img
              className="img-fluid"
              src="./static/inspect-app-th-userflow-3.jpg"
            />
          </div>
        </div>
      </div>
      <p className="caseStudyContainer mt-16 f-secondary">
        Personally, I find pen and paper more efficient to iterate on different
        ideas. Some might agree, some might not 😄
      </p>
      <p className="caseStudyContainer f-secondary">
        As you might imagine, the next stage of the process was to load up Figma
        and start creating a medium - high fidelity prototype to present to the
        stakeholders. While my preference would have been to show my sketches
        for initial Q&A, the stakeholders are visual people which I catered for.
      </p>
      <p className="caseStudyContainer f-secondary">
        Here are some before and after shots of the reimagined UI with
        alleviating the friction and frustration points agents in the field were
        encountering.
      </p>
      <div style={{ margin: "0 auto 0", maxWidth: "1200px" }}>
        <div className="d-flex flex-column flex-lg-row flex-wrap userflowContainer">
          <div className="w-100 w-lg-50">
            <img
              className="img-fluid"
              src="./static/inspect-app-th-login-old.jpg"
            />
          </div>
          <div className="w-100 w-lg-50">
            <img
              className="img-fluid"
              src="./static/inspect-app-th-login-new.jpg"
            />
          </div>
        </div>
      </div>
      <div style={{ margin: "0 auto 0", maxWidth: "1200px" }}>
        <div className="d-flex flex-column flex-lg-row flex-wrap userflowContainer">
          <div className="w-100 w-lg-50">
            <img
              className="img-fluid"
              src="./static/inspect-app-th-props-old.jpg"
            />
          </div>
          <div className="w-100 w-lg-50">
            <img
              className="img-fluid"
              src="./static/inspect-app-th-props-new.jpg"
            />
          </div>
        </div>
      </div>
      <div style={{ margin: "0 auto 16px", maxWidth: "1200px" }}>
        <div className="d-flex flex-column flex-lg-row flex-wrap userflowContainer">
          <div className="w-100 w-lg-50">
            <img
              className="img-fluid"
              src="./static/inspect-app-th-addVisitor-old.jpg"
            />
          </div>
          <div className="w-100 w-lg-50">
            <img
              className="img-fluid"
              src="./static/inspect-app-th-addVisitor-new.jpg"
            />
          </div>
        </div>
      </div>
      
      <Container fluid={true} className="ak--container-spacer bg-grey mt-5rem">
        <Row>
          <Col>
            <div className="ak--container">
              <h2 className="f-bold text-center mb-8">Final Product</h2>
              <p className="text-center f-secondary mb-24 secondaryTextWidth">
              If you would like to get your hands on the prototype, feel free to give
              it a{" "}
              <a href="https://www.figma.com/proto/N91fz3oH4TrvrGefC92gWh/Inspect-App?node-id=1%3A2&scaling=min-zoom">
                spin here
              </a>
              .
              </p>
              <div style={{ margin: "0 auto 16px", maxWidth: "800px" }}>
        <iframe
          width="800"
          height="800"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FN91fz3oH4TrvrGefC92gWh%2FInspect-App%3Fnode-id%3D1%253A2%26scaling%3Dscale-down&chrome=DOCUMENTATION"
          allowfullscreen
        ></iframe>
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
