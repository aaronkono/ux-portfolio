import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./caseStudyContainer.css";

class CaseStudyContainer extends React.Component {
  render() {
    return (
      <Container
        fluid={true}
        className="ak--container-spacer ak-project--container"
      >
        <Row>
          <Col xs={12}>
            <div className="ak--container text-center">
              <div>
                <h2 className="f-bold">Case Study</h2>
                <p>Coming soon</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CaseStudyContainer;
