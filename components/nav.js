import React from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import "../components/nav.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/cv", label: "CV" },
  { href: "", label: "" },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Navigation = () => (
  <Navbar className="ak-nav navNothing">
    <div className="ak--container d-flex w-100">
      <Navbar.Brand href="/">
        <strong>Aaron Konopka</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          {links.map(({ key, href, label }) => (
            <Nav.Link key={key} href={href}>
              {label}
            </Nav.Link>
          ))}
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Navigation;
