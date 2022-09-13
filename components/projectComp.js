import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./projectComp.css";

const ProjectContainer = () => (
  <Container fluid={true} className="ak--container-spacer pb-0">
    <Row>
      <Col xs={12}>
        <div className="ak--container">
          <h2 className="f-bold text-center mb-8">
            Transforming ideas into products
          </h2>
          <p className="text-center mb-24 f-secondary">
            Process driven design & development from beginning to end
          </p>
          <div className="project-grid">
          <div className="project-thumbnail ">
              <a href="/collaborators">
                <div className="thumbnail-inner">
                  <img
                    className="img-fluid"
                    src="./static/colabs-thumbnail.png"
                  />
                </div>
                <div>
                  <div className="d-flex flex-row">
                    <div className="badge badge-blue">
                      New
                    </div>
                    <div className="dotDivider"></div>
                    <div className="badge badge-grey">
                      UX / UI Design
                    </div>
                  </div>
                  <h4>Collaborators case study</h4>
                  <p className="mb-0">
                    Learn how I reduced the time on task by 50%+ with this update for users
                  </p>
                </div>
              </a>
            </div>  
          <div className="project-thumbnail ">
              <a href="/scheduling">
                <div className="thumbnail-inner">
                  <img
                    className="img-fluid"
                    src="./static/scheduling-thumbnail.png"
                  />
                </div>
                <div>
                  <div className="d-flex flex-row">
                    <div className="badge badge-blue">
                      New
                    </div>
                    <div className="dotDivider"></div>
                    <div className="badge badge-grey">
                      UX / UI Design
                    </div>
                  </div>
                  <h4>Scheduling</h4>
                  <p className="mb-0">
                  A product offering to help companies manage their site capacity
                  </p>
                </div>
              </a>
            </div>

            <div className="project-thumbnail ">
              <a href="/fix-platform-manage">
                <div className="thumbnail-inner">
                  <img className="img-fluid" src="./static/fixManage-thumbnail.png" />
                </div>
                <div>
                  <div className="d-flex">
                    <div className="badge badge-grey">
                      UX / UI Design
                    </div>
                    <div className="dotDivider"></div>
                    <div className="badge badge-grey">
                      Frontend Dev
                    </div>
                  </div>
                  <h4>FIX Platform - Manage</h4>
                  <p className="mb-0">
                    A platform for property managers to manage the whole
                    maintenance life cycle from beginning to end
                  </p>
                </div>
              </a>
            </div>
            <div className="project-thumbnail">
              <a href="/fix-platform-tenant">
                <div className="thumbnail-inner">
                  <img className="img-fluid" src="./static/fixTenant-thumbnail.png" />
                </div>
                <div>
                <div className="d-flex">
                  <div className="badge badge-grey">
                      UX / UI Design
                    </div>
                    <div className="dotDivider"></div>
                    <div className="badge badge-grey">
                      Frontend Dev
                    </div>
                  </div>
                  <h4>FIX Platform - Tenant</h4>
                  <p className="mb-0">
                    A platform for tenants to add, track, manage and receive
                    updates on their maintenance requests
                  </p>
                </div>
              </a>
            </div>

            <div className="project-thumbnail">
              <a href="/fix-platform-landlord">
                <div className="thumbnail-inner">
                  <img
                    className="img-fluid"
                    src="./static/landlord-thumbnail.png"
                  />
                </div>
                <div>
                  <div className="d-flex">
                    <div className="badge badge-grey">
                      UX / UI Design
                    </div>
                    <div className="dotDivider"></div>
                    <div className="badge badge-grey">
                      Frontend Dev
                    </div>
                  </div>
                  <h4>FIX Platform - Landlord</h4>
                  <p className="mb-0">
                    A platform for landlords to oversee their investment
                    property performance
                  </p>
                </div>
              </a>
            </div>
            <div className="project-thumbnail">
              <a href="/renew-platform">
                <div className="thumbnail-inner">
                  <img
                    className="img-fluid"
                    src="./static/fixRenew-thumbnail.png"
                  />
                </div>
                <div>
                <div className="d-flex">
                  <div className="badge badge-grey">
                      UX / UI Design
                    </div>
                    <div className="dotDivider"></div>
                    <div className="badge badge-grey">
                      Frontend Dev
                    </div>
                  </div>
                  <h4>Renew Platform</h4>
                  <p className="mb-0">
                    A platform for a seamless lease renewal process for property
                    managers, tenants and landords
                  </p>
                </div>
              </a>
            </div>
            <div className="project-thumbnail">
              <a href="/toop-website">
                <div className="thumbnail-inner">
                  <img
                    className="img-fluid"
                    src="./static/toop-thumbnail.png"
                    alt="Toop&Toop"
                    title="Toop&Toop"
                  />
                </div>
                <div>
                <div className="d-flex">
                  <div className="badge badge-grey">
                      UX / UI Design
                    </div>
                    <div className="dotDivider"></div>
                    <div className="badge badge-grey">
                      Frontend Dev
                    </div>
                  </div>
                  <h4>Toop&Toop Website</h4>
                  <p className="mb-0">
                    A Real Estate Agency website designed to guide their
                    customers through the selling journey
                  </p>
                </div>
              </a>
            </div>
            {/*<div className="project-thumbnail">
              <a href="/lululiv-principal-dashboard">
                <div className="thumbnail-inner">
                  <img
                    className="img-fluid"
                    src="./static/lululiv-dashboard-th.jpg"
                  />
                </div>
                <div>
                  <div className="d-flex">
                    <div className="badge badge-grey">
                      UX / UI Design
                    </div>
                    <div className="dotDivider"></div>
                    <div className="badge badge-grey">
                      Frontend Dev
                    </div>
                  </div>
                  <h4>Lululiv Principal Dashboard</h4>
                  <p className="mb-0">
                    A dashboard where Real Estate Principals can view their
                    portfolio performance
                  </p>
                </div>
              </a>
            </div>*/}
            <div className="project-thumbnail ">
              <a href="/inspect-app">
                <div className="thumbnail-inner">
                  <img
                    className="img-fluid"
                    src="./static/inspect-thumbnail.png"
                  />
                </div>
                <div>
                  <div className="d-flex">
                    <div className="badge badge-grey">
                      UX / UI Design
                    </div>
                  </div>
                  <h4>Inspect App Case Study</h4>
                  <p className="mb-0">
                    An application for leasing agents to run inspections and
                    gather information
                  </p>
                </div>
              </a>
            </div>

            {/*<div className="project-thumbnail">
              <a href="/virtualagent-website">
                <div className="thumbnail-inner">
                  <img className="img-fluid" src="./static/va-website-th.jpg" />
                </div>
                <div>
                <div className="d-flex">
                  <div className="badge badge-grey">
                      UX / UI Design
                    </div>
                    <div className="dotDivider"></div>
                    <div className="badge badge-grey">
                      Frontend Dev
                    </div>
                  </div>
                  <h4>Virtual Agent Website</h4>
                  <p className="mb-0">
                    SaaS company requiring a website to market their B2B / B2C
                    platforms for real estate agencies
                  </p>
                </div>
              </a>
          </div>*/}
          {/*
            <div className="project-thumbnail">
              <a href="/lululiv-website">
                <div className="thumbnail-inner">
                  <img
                    className="img-fluid"
                    src="./static/lululiv-website-th.jpg"
                  />
                </div>
                <div>
                <div className="d-flex">
                <div className="badge badge-grey">
                      UX / UI Design
                    </div>
                    <div className="dotDivider"></div>
                    <div className="badge badge-grey">
                      Frontend Dev
                    </div>
                  </div>
                  <h4>Lululiv Website</h4>
                  <p className="mb-0">
                    A company requiring a website to market their holistic
                    solution to Principals
                  </p>
                </div>
              </a>
            </div>
            */}
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default ProjectContainer;
