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

export default function SineScheduling() {
  return (
    <Layout>
      <Head>
        <title>
          Sine - Scheduling &middot; Aaron Konopka, UX / UI Designer
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
                    Scheduling
                  </h1>
                  <p className="f-secondary mb-20">
                    A product offering to help companies manage their site capacity.
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
              <div className="d-flex position-relative align-items-center justify-content-center w-50 ak--profile-image">
                <img src="./static/scheduling-schedule.png" className="w-100" />
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
                      Facility Managers & Building Portfolio Managers are not able to manage site capacity and view who has scheduled to be on site day to day.
                    </p>
                  </div>
                </div>
                <div className="processProblemContainer">
                  <div className="circleIconContainer mb-12">
                    <i className="far fa-microchip"></i>
                  </div>
                  <div>
                    <h6 className="mb-12 f-bold leadUpper">The solution</h6>
                  </div>
                  <div>
                    <p className="f-secondary">
                    Scheduling allows for occupants (employees) to schedule their work location ahead of time, as well as Managers being able to schedule their team's work location.  
                    </p>
                    <p className="f-secondary">Scheduling also allows Building Portfolio Managers to view how their assets are performing via capacity reporting.</p>
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
                src="./static/scheduling-default-schedule-userflow-manager.png"
              />
            </div>
            <div>
              <img className="img-fluid" src="./static/scheduling-default-schedule-userflow.png" />
            </div>
          </div>
        </RightColumn>
      </SectionContainer>

      <SectionContainer className="ak--container">
        <LeftColumn>
          <StickyContainer>
            <h3 className="f-bold mb-12">Product shots</h3>
            <p className="">
              The final result came after multiple rounds of sketching, wireframing and user feedback.
            </p>
          </StickyContainer>
        </LeftColumn>
        <RightColumn>
        <div className="iteration-grid">
            <div>
              <img
                className="img-fluid"
                src="./static/scheduling-schedule.png"
              />
            </div>
            <div>
              <img className="img-fluid" src="./static/scheduling-settings-default-schedule.png" />
            </div>
            <div>
              <img className="img-fluid" src="./static/scheduling-settings-templates.png" />
            </div>
            <div>
              <img className="img-fluid" src="./static/scheduling-settings.png" />
            </div>
          </div>
        </RightColumn>
      </SectionContainer>

      <SectionContainer className="ak--container">
        <LeftColumn>
          <StickyContainer>
            <h3 className="f-bold mb-12">Mobile product shots</h3>
            <p className="">
              The final result came after multiple rounds of sketching, wireframing and user feedback.
            </p>
          </StickyContainer>
        </LeftColumn>
        <RightColumn>
        <div className="iteration-grid">
            <div>
              <img
                className="img-fluid"
                src="./static/mob-scheduling-home.png"
              />
            </div>
            <div>
              <img className="img-fluid" src="./static/mob-scheduling-home-sat.png" />
            </div>
            <div>
              <img className="img-fluid" src="./static/mob-scheduling-week.png" />
            </div>
            <div>
              <img className="img-fluid" src="./static/mob-scheduling-select-week-wed.png" />
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
                    <i className="far fa-chart-line"></i>
                  </div>
                  <div>
                    <h6 className="mb-12 f-bold leadUpper">Customer / User feedback</h6>
                  </div>
                  <div>
                    <p className="f-secondary">
                      Easy to use, intuitive and works as expected.
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
                      Average time on task <strong>30</strong> seconds or below for each weekly team schedule set.  
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
                      src="./static/scheduling-final-product.png"
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
