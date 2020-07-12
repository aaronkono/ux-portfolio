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
        <Container className="ak--container">
          <Row>
            <Col xs={12}>
              <PortfolioHeader
                projectTitle={
                  <h2 className="f-bold" style={{ maxWidth: "410px" }}>
                    Case study: Real estate open home app reimagined
                  </h2>
                }
                projectOverview={<p className="f-light f-lead"></p>}
              />
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="ak-project--container">
          <Row>
            <Col>
              <div className="project-header-container d-flex">
                <div className="project-header-container--innerImg ml-auto">
                  <img src="./static/inspect-app-header.jpg" />
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
                    </div>
                  </div>
                  <div className="ml-auto" style={{ maxWidth: "475px" }}>
                    <div>
                      <p className="mb-0 f-bold">Problem</p>
                    </div>
                    <div>
                      <p className="f-light f-secondary mb-36">
                        The Open Home App was highly functional but complex. The
                        agents while out in the field found it difficult to
                        understand the User Interface and add visitors with
                        ease, not to mention the tired looking design. This led
                        to frustration and in some circumstances the agent would
                        revert back to pen and paper to enter details.
                      </p>
                    </div>
                    {/* <div>
                      <p className="mb-0 f-bold">The Process</p>
                    </div>
                    <div>
                      <p className="f-light f-secondary mb-36">
                        This project was an iterative approach. Empathising and
                        understanding the needs of users lead the design and
                        development team to the end result you see here.What you
                        will see next is a snippet of the creative process at
                        work. Starting with user flows, wireframes which later
                        move into prototypes and in some cases straight to the
                        Toop&Toop website.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="ak--container-spacer">
        <h3 className="f-bold mb-0 caseStudyContainer">The process</h3>
        <p className="caseStudyContainer">
          Taking a step back from the process and chatting to agents who are
          using the app was the starting point, asking them what their
          frustration points were and understanding how this would affect their
          ability and credibility when opening a home. After empathising with
          the user base, I defined the outcome which was desired and required
          for agents to succeed.
        </p>
        <p className="caseStudyContainer">
          Before whipping out a pen and paper to start sketching, I wanted to go
          back to basics and create a userflow for how the app would be used.
          What I found was interesting:
        </p>
        <div style={{ margin: "0 auto 16px", maxWidth: "675px" }}>
          <img className="img-fluid" src="./static/inspect-app-userflow.jpg" />
        </div>
        <p className="caseStudyContainer">
          Stripping back the whole process to the requirement of ‘I need to add
          visitor details easily and quickly’. The above photo outlines the
          process, from logging in, to finding the correct property, to adding
          their very first visitor which would end up a continuous loop.
        </p>
        <p className="caseStudyContainer breakOutType text-center">
          "This was solving the agent’s biggest issue.. Complexity and high
          interaction costs"
        </p>
        <p className="caseStudyContainer">
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
      <p className="caseStudyContainer mt-16">
        Personally, I find pen and paper more efficient to iterate on different
        ideas. Some might agree, some might not 😄
      </p>
      <p className="caseStudyContainer">
        As you might imagine, the next stage of the process was to load up Figma
        and start creating a medium - high fidelity prototype to present to the
        stakeholders. While my preference would have been to show my sketches
        for initial Q&A, the stakeholders are visual people which I catered for.
      </p>
      <p className="caseStudyContainer">
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
      <p className="caseStudyContainer">
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
