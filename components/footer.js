import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Container fluid={false} className="">
          <Row>
            <Col xs={12}>
              <div className="lulu-container footer-outer">
                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start">
                  <div className="align-self-start mb-4">
                    <a className="f-bold fs-16 f-primary" href="/">
                      AK
                    </a>
                    <p className="mb-0 fs-14 f-secondary">
                      UX / UI Designer with a<br />
                      technical background
                    </p>
                  </div>
                  <div className="ml-md-auto footer-grid footer-grid-list">
                    <div>
                      <p className="mb-0 f-bold">Portfolio</p>
                      <ul>
                        <li>
                          <a href="/fix-platform-manage">
                            FIX Platform - Manage
                          </a>
                        </li>
                        <li>
                          <a href="/fix-platform-tenant">
                            FIX Platform - Tenant
                          </a>
                        </li>
                        <li>
                          <a href="/fix-platform-landlord">
                            FIX Platform - Landlord
                          </a>
                        </li>
                        <li>
                          <a href="/toop-website">Toop&Toop Website</a>
                        </li>
                        <li>
                          <a href="/lululiv-principal-dashboard">
                            Toop&Toop Website
                          </a>
                        </li>
                        <li>
                          <a href="/renew-platform">Renew Platform</a>
                        </li>
                        <li>
                          <a href="/virtualagent-website">
                            Virtual Agent Website
                          </a>
                        </li>
                        <li>
                          <a href="/lululiv-website">Lululiv Website</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
export default Footer;
