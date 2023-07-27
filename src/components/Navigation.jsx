import React from "react";
import { Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icono from '../assets/icono.png';
import './Navigation.css'

export default function Navigation() {
  return (
    <Navbar id="navigation" bg="navbar-light" expand="md">
      <Container className="navbar-container">
        <Navbar.Brand href="#home"><Image src={icono}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link active={false} href="#about">Sobre mí</Nav.Link>
            <Nav.Link active={false} href="#projects">Proyectos</Nav.Link>
            <Nav.Link active={false} href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
