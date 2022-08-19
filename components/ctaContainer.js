import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ctaContainer.css";

class CtaContainer extends React.Component {
  render() {
    return (
      <Container
        fluid={true}
        className="ak--container-spacer"
        id="get-in-touch"
      >
        <Row>
          <Col xs={12}>
            <div className="ak--container bg-blue ctaContainer">
            
              <div className="ctaZi">{this.props.formHeading}</div>
              <div className="ctaZi">{this.props.formSubheading}</div>
              <div className="ak--form-container">
                <form
                  action="https://app.99inbound.com/api/e/TjWKVWYx"
                  method="POST"
                  target="_blank"
                >
                  <div className="form-group mb-20">
                    {/* <label for='nameLabel' className='text-white'>Name</label> */}
                    <input
                      id="nameLabel"
                      className="form-control ak-input"
                      type="text"
                      name="name"
                      placeholder="Name (required)"
                      required
                    />
                  </div>
                  <div className="form-group mb-24">
                    {/* <label for='emailLabel' className='text-white'>Email</label> */}
                    <input
                      id="emailLabel"
                      className="form-control ak-input"
                      type="email"
                      name="email"
                      placeholder="Email address (required)"
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-blue btn-md">
                      Let's grab a coffee!
                    </button>
                  </div>
                </form>
              </div>
              <svg className="position-absolute ctaSvg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#CDEBF9" d="M37.9,-48.2C51.1,-34,65.3,-24,72.1,-9.2C79,5.7,78.5,25.4,68.2,35.8C58,46.3,37.9,47.6,21.9,48.2C5.9,48.9,-6,49,-19.1,46.7C-32.2,44.4,-46.6,39.8,-54.8,29.7C-63,19.5,-65,3.9,-64.6,-13.7C-64.2,-31.2,-61.5,-50.6,-50.3,-65.2C-39.2,-79.7,-19.6,-89.5,-3.6,-85.2C12.3,-80.8,24.6,-62.4,37.9,-48.2Z" transform="translate(100 100)" />
</svg>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CtaContainer;
