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
import CtaContainer from "../../components/ctaContainer";
import Footer from "../../components/footer";

export default function SineCollaborators() {
  return (
    <Layout>
      <Head>
        <title>
          Sine - Collaborators &middot; Aaron Konopka, UX / UI Designer
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
                    Collaborators case study
                  </h1>
                  <p className="f-secondary mb-20">
                    I reduced friction and time on task for users add, editing and removing collaborators from their account. 
                  </p>
                  <div className="d-flex flex-row">
                    <div className="w-50">
                      <p className="mb-4 f-bold">Client</p>
                      <p className="f-secondary">Sine</p>
                    </div>
                    <div className="w-50">
                      <p className="mb-4 f-bold">Specific Role</p>
                      <p className="mb-0 f-secondary">UX Design</p>
                      <p className="mb-0 f-secondary">UI Design</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex position-relative align-items-center justify-content-center w-50">
                <img src="./static/colabs-future.png" className="w-100 z-index-2" />
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
                      Users are spending an unnecessary amount of time adding, editing and deleting collaborators due to the page's composition. 
                    </p>
                    <p className="f-secondary">The main concern was that each collaborator would be added and appear multiple times rather than consolidating into a table row per role. Some customers would have more than 1500 rows in this table.</p>
                  </div>
                </div>
                <div className="processProblemContainer">
                  <div className="circleIconContainer mb-12">
                    <i className="far fa-lightbulb-on"></i>
                  </div>
                  <div>
                    <h6 className="mb-12 f-bold leadUpper">The solution</h6>
                  </div>
                  <div>
                    <p className="f-secondary">
                      The solution reduces the friction when adding, editing and deleting collaborators as well as consolidating each role into it's own table row.                    
                    </p>
                    <p className="f-secondary">
                      Find out how I saved our users time on task and more below.
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

      <SectionContainer className="ak--container">
        <LeftColumn>
          <StickyContainer>
            <h3 className="f-bold mb-12 ">Before & After</h3>
            <p className="f-secondary">
              A snapshot of what the Collaborators page used to look like.  
            </p>
          </StickyContainer>
        </LeftColumn>
        <RightColumn>
          <div className="iteration-grid">
            <div className="no-shadow">
              <img
                className="img-fluid"
                src="./static/colabs-current.png"
              />
              <p className="mb-0 f-secondary"><i>Collaborators before</i></p>
            </div>
            <div className="no-shadow">
              <img
                className="img-fluid"
                src="./static/colabs-future.png"
              />
              <p className="mb-0 f-secondary"><i>Collaborators after</i></p>
            </div>
          </div>
        </RightColumn>
      </SectionContainer>

      <SectionContainer className="ak--container">
        <LeftColumn>
          <StickyContainer>
            <h3 className="f-bold mb-12">A quick brainstorm</h3>
            <p className="">
              After a couple conversations with a customer and their admin, I collated my notes and started the following:
            </p>
            <ul>
              <li>Empathy mapping</li>
              <li>Current vs future concept (text based for IA purposes)</li>
              <li>Wireframing ideas</li>
            </ul>
          </StickyContainer>
        </LeftColumn>
        <RightColumn>
          <div className="iteration-grid">
            <div className="no-shadow">
              <img
                className="img-fluid"
                src="./static/colabs-empathyMap.png"
              />
            </div>
            <div className="no-shadow">
              <img
                className="img-fluid"
                src="./static/colabs-currentFuture.png"
              />
            </div>
            <div className="no-shadow">
              <img
                className="img-fluid"
                src="./static/colabs-wireframing.png"
              />
            </div>
          </div>
        </RightColumn>
      </SectionContainer>

      <SectionContainer className="ak--container">
        <LeftColumn>
          <StickyContainer>
            <h3 className="f-bold mb-12">Prototype</h3>
            <p className="">
              I created components to use in the proposed solution then created a prototype to test.
            </p>
          </StickyContainer>
        </LeftColumn>
        <RightColumn>
        <div className="iteration-grid">
            <div className="no-shadow">
              <img
                className="img-fluid"
                src="./static/colabs-addNewColab.png"
              />
            </div>
            <div className="no-shadow">
              <img className="img-fluid" src="./static/colabs-addSitePer.png" />
            </div>
            <div className="no-shadow">
              <img className="img-fluid" src="./static/colabs-deleteBulk.png" />
            </div>
            <div className="no-shadow">
              <img className="img-fluid" src="./static/colabs-deleteColab.png" />
            </div>
          </div>
        </RightColumn>
      </SectionContainer>

      <Container className="ak--container-spacer">
        <Row>
          <Col>
            <h2 className="f-bold text-center mb-8">
              Testing & Feedback
            </h2>
            <p className="text-center mb-24 f-secondary">
              I interviewed 4 customers and 1 internal stakeholder to validate my solution.
            </p>
            <div className="ak--container bg-grey ctaContainer pleft-4 pright-4">
              <div className="processProblemContainerOuter">
                  <div className="processProblemContainer mb-16">
                    <div className="circleIconContainer mb-12">
                      <i className="fas fa-question"></i>
                    </div>
                    <div>
                      <h6 className="mb-12 f-bold leadUpper">Customer / User feedback</h6>
                    </div>
                    <div>
                      <p className="f-secondary">
                        Overall they liked the consolidation of site permissions under one role.
                      </p>
                    </div>
                  </div>
                  <div className="processProblemContainer mb-16">
                    <div className="circleIconContainer mb-12">
                      <i className="far fa-chart-line-down"></i>
                    </div>
                    <div>
                      <h6 className="mb-12 f-bold leadUpper">Time on task</h6>
                    </div>
                    <div>
                      <p className="f-secondary">
                        Their time on task will be significantly lower when making changes.
                      </p>
                    </div>
                  </div>
              </div>
              <div className="processProblemContainerOuter">
              <div className="processProblemContainer mb-16">
                  <div className="circleIconContainer mb-12">
                    <i className="fas fa-question"></i>
                  </div>
                  <div>
                    <h6 className="mb-12 f-bold leadUpper">Customer / user feedback</h6>
                  </div>
                  <div>
                    <p className="f-secondary">
                      Mentioned that they would like to see the address of where a site is located.
                    </p>
                  </div>
                </div>
                <div className="processProblemContainer mb-16">
                  <div className="circleIconContainer mb-12">
                    <i className="fas fa-question"></i>
                  </div>
                  <div>
                    <h6 className="mb-12 f-bold leadUpper">Customer / user feedback</h6>
                  </div>
                  <div>
                    <p className="f-secondary">
                      Mentioned that they would like to filter by site / state.
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

      <SectionContainer className="ak--container">
        <LeftColumn>
          <StickyContainer>
            <h3 className="f-bold mb-12">Updates based on feedback</h3>
            <p className="">
              The updates that came out of testing were implemented as a slight improvement of the overall solution.
            </p>
          </StickyContainer>
        </LeftColumn>
        <RightColumn>
        <div className="iteration-grid">
            <div className="no-shadow">
              <img
                className="img-fluid"
                src="./static/colabs-feedbackUpdate1.png"
              />
            </div>
            <div className="no-shadow">
              <img className="img-fluid" src="./static/colabs-feedbackUpdate2.png" />
            </div>
          </div>
        </RightColumn>
      </SectionContainer>

      <Container fluid={true} className="ak--container-spacer bg-grey">
        <Row>
          <Col>
            <div className="ak--container">
              <h2 className="f-bold text-center mb-8">Final Product</h2>
              <p className="text-center f-secondary mb-24 secondaryTextWidth">
                I'm not too sure anything can top the feeling when all your hard
                work is display, check out some screenshots below
              </p>
              <div className="">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./static/colabs-future.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="ak--container-spacer">
        <Row>
          <Col>
            <div className="ak--container">
              <h2 className="f-bold text-center mb-8">Future considerations</h2>
              <p className="text-center f-secondary mb-24 secondaryTextWidth">
                The solution outlined is only the start of the journey. I have proposed this concept as a future enhancement to further consolidate collaborators.
              </p>
              <div className="">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./static/colabs-futureConsideration.png"
                      alt="First slide"
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
