import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './project-comp.css'

const ProjectContainer = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <div className='project-grid'>
          <div><h4>Vivamus ac ex vel nisi semper volutpat</h4></div>
          <div><img className='img-fluid' src="https://media.toop.com.au/photos2019/2019/2022091/2022091-482035-1620x1080.jpg" /></div>
          <div><p>grid 3 hi mittali</p></div>
        </div>
      </Col>
    </Row>
  </Container>
)

export default ProjectContainer