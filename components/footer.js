import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './footer.css'

const Footer = () => {
    return (
    <footer>
        <Container fluid={true}>
            <Row>
                <Col xs={12}>
                    <div className='lulu-container footer-outer'>
                        <div className='d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-3'>
                            <div className='align-self-start mb-4'>
                                <a href='/'>AK
                                    {/* <img className='mb-2' src='../lululiv-b-logo.png' alt='Lululiv' title='Lululiv' width='125' /> */}
                                </a>
                                <p className='mb-0 fs-14'>Impeccable taste is shoes</p>
                            </div>
                            <div className='ml-auto footer-grid footer-grid-list'>
                                <div>
                                    <p className='mb-0'>Home</p>
                                    <ul>
                                        <li>
                                            <a href='/'>a</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='mb-0'>Portfolio</p>
                                    <ul>
                                        <li>
                                            <a href='/inspect-app'>Inspect App</a>
                                        </li>
                                        <li>
                                            <a href='/toop-website'>Toop&Toop Website</a>
                                        </li>
                                        <li>
                                            <a href='/fix-platform-manage'>FIX Platform - Manage</a>
                                        </li>
                                        <li>
                                            <a href='/fix-platform-tenant'>FIX Platform - Tenant</a>
                                        </li>
                                        <li>
                                            <a href='/fix-platform-owner'>FIX Platform - Owner</a>
                                        </li>
                                        <li>
                                            <a href='/renew-platform'>Renew Platform</a>
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
    )
}

export default Footer
