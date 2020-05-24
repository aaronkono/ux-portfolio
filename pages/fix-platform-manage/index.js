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
} from "./styles";

export default function FixPlatformManage() {
  return (
    <Layout>
      <Head>
        <title>Manage - FIX Platform</title>
      </Head>
      <Nav />
      <header>
        <Container>
          <Row>
            <Col xs={12}>
              <PortfolioHeader
                projectTitle={<h2 className="">Toop&Toop Website</h2>}
                projectOverview={
                  <p className="mb-0">
                    Top line project overview Top line project overview Top line
                    project overview Top line project overview
                  </p>
                }
              />
              <div className="project-header-container mb-4">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1902&q=80" />
              </div>
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
            </Col>
          </Row>
        </Container>

        <SectionContainer>
          <LeftColumn>
            <StickyContainer>
              <h2 className="mb-0 ">Iteration</h2>
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

        <Container fluid={true}>
          <Row>
            <Col>
              <div
                style={{
                  maxWidth: "1140px",
                  margin: "0 auto",
                  paddingLeft: "15px",
                  paddingRight: "15px"
                }}
                className="mt-5 container-spacer"
              >
                <h2 className="mb-0 ">Results</h2>
                <p className="">Metrics & Measurements</p>
                <div className="d-flex flex-row flex-wrap">
                  <div className="d-flex flex-row w-50">
                    <div>icon</div>
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
        <Container fluid={true}>
          <Row>
            <Col>
              <div
                style={{
                  maxWidth: "1140px",
                  margin: "0 auto",
                  paddingLeft: "15px",
                  paddingRight: "15px"
                }}
                className="mt-5 container-spacer"
              >
                <h2 className="mb-0 ">Testimonial</h2>
                <div className="d-flex flex-row flex-wrap">
                  <p className=" mt-4">
                    "Proin elementum, ipsum in ullamcorper tincidunt, libero leo
                    ullamcorper ante, non semper nunc odio eu diam. Nam porta,
                    odio vel suscipit egestas, urna enim mattis eros, a egestas
                    metus augue sed nisi. Nulla at lacus magna. Curabitur diam
                    lorem, consectetur eget mi at, volutpat pulvinar purus.
                    Integer at ipsum blandit, pellentesque lorem quis, aliquam
                    turpis."
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid={true}>
          <Row>
            <Col>
              <div
                style={{
                  maxWidth: "1140px",
                  margin: "0 auto",
                  paddingLeft: "15px",
                  paddingRight: "15px"
                }}
                className="mt-5 container-spacer"
              >
                <h2 className="mb-0 ">Like what you see?</h2>
                <div className="d-flex flex-row flex-wrap">
                  <p className=" mt-4">
                    Let's collaborate or have a chat about working together
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </Layout>
  );
}