import React from 'react'
import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'
import '../components/nav.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/cv', label: 'CV' },
  { href: '', label: '' },
  { href: '', label: '' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Navigation = () => (
  <Navbar className='navNothing' bg="" variant="dark">
    <Navbar.Brand href="/">AK</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="ml-auto">
      {links.map(({ key, href, label }) => (
        <Nav.Link key={key} href={href}>{label}</Nav.Link>
      ))}
      </Nav>
    </Navbar.Collapse>

  </Navbar>
)

export default Navigation
