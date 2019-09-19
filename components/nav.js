import React from 'react'
import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'

const links = [
  { href: '', label: '' },
  { href: '', label: '' },
  { href: '', label: '' },
  { href: '', label: '' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">AK</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="mr-auto">
      {links.map(({ key, href, label }) => (
        <Nav.Link key={key} href={href}>{label}</Nav.Link>
      ))}
      </Nav>
    </Navbar.Collapse>

  </Navbar>
)

export default Navigation
