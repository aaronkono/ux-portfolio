import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './projectComp.css';

const ProjectContainer = () => (
  <Container fluid={true}>
    <Row>
      <Col xs={12}>
        <h1 className='mb-36 f-bold'>Works</h1>
        <div className='project-grid'>
          <div className='project-thumbnail'>
            <a href="/inspect-app">
            <div className='thumbnail-inner'>
              <img className='img-fluid' src="https://images.unsplash.com/photo-1553531580-652231dae097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1026&q=80" />
            </div>
            <div>
              <h4>Inspect App</h4>
              <p className='mb-0'>Sed bibendum, mi sit amet sollicitudin pulvinar, risus augue luctus lectus</p>
            </div>
            </a>
          </div>
          <div className='project-thumbnail '>
          <a href="/fix-platform-manage">
            <div className='thumbnail-inner'>
              <img className='img-fluid' src="https://images.unsplash.com/photo-1553531580-652231dae097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1026&q=80" />
            </div>
            <div>
              <h4>FIX Platform - Manage</h4>
              <p className='mb-0'>Sed bibendum, mi sit amet sollicitudin pulvinar, risus augue luctus lectus</p>
            </div>
            </a>
          </div>
          
          <div className='project-thumbnail'>
            <a href="/toop-website">
            <div className='thumbnail-inner'>
              <img className='img-fluid' src="https://images.unsplash.com/photo-1553531580-652231dae097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1026&q=80" />
            </div>
            <div>
              <h4>Toop&Toop Website</h4>
              <p className='mb-0'>Sed bibendum, mi sit amet sollicitudin pulvinar, risus augue luctus lectus</p>
            </div>
            </a>
          </div>

          <div className='project-thumbnail'>
            <a href="/fix-platform-tenant">
            <div className='thumbnail-inner'>
              <img className='img-fluid' src="https://images.unsplash.com/photo-1553531580-652231dae097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1026&q=80" />
            </div>
            <div>
              <h4>FIX Platform - Tenant</h4>
              <p className='mb-0'>Sed bibendum, mi sit amet sollicitudin pulvinar, risus augue luctus lectus</p>
            </div>
            </a>
          </div>

          <div className='project-thumbnail'>
            <a href="/fix-platform-owner">
            <div className='thumbnail-inner'>
              <img className='img-fluid' src="https://images.unsplash.com/photo-1553531580-652231dae097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1026&q=80" />
            </div>
            <div>
              <h4>FIX Platform - Owner</h4>
              <p className='mb-0'>Sed bibendum, mi sit amet sollicitudin pulvinar, risus augue luctus lectus</p>
            </div>
            </a>
          </div>

          <div className='project-thumbnail'>
            <a href="/renew-platform">
            <div className='thumbnail-inner'>
              <img className='img-fluid' src="https://images.unsplash.com/photo-1553531580-652231dae097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1026&q=80" />
            </div>
            <div>
              <h4>Renew Platform</h4>
              <p className='mb-0'>Sed bibendum, mi sit amet sollicitudin pulvinar, risus augue luctus lectus</p>
            </div>
            </a>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
)

export default ProjectContainer