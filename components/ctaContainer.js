import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ctaContainer.css';

const CtaContainer = () => (
  <Container fluid={true} className='ak--container-spacer ak--blue-container'>
    <Row>
      <Col xs={12}>
        <div className='ak--container'>
          <h2 className='f-bold text-center ak--body-title ak--wh'>Mind a coffee catch up?</h2>
          <p className='ak--body-subtitle ak--wh text-center mb-36'>Let's collaborate and have a chat about working together</p>
          <div className='ak--form-container'>
            <form action="https://app.99inbound.com/api/e/TjWKVWYx" method="POST" target="_blank">
              <div className='form-group'>
                {/* <label for='nameLabel' className='text-white'>Name</label> */}
                <input id='nameLabel' className='form-control fc-ak--input' type="text" name="name" placeholder="Name (required)" required />
              </div>
              <div className='form-group mb-36'>
                {/* <label for='emailLabel' className='text-white'>Email</label> */}
                <input id='emailLabel' className='form-control fc-ak--input' type="email" name="email" placeholder="Email address (required)" required />
              </div>
              <div className='text-center'>
                <button className='btn btn-ak--outline btn-ak--outline-wh btn-md'>Coffee time!</button>
              </div>
            </form>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
)

export default CtaContainer