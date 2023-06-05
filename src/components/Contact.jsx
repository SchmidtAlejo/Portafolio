import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact dark-section">
      <Container>
        <Container className="contact-container">
          <Row>
            <Col md={4} className="title-section">
              ¡Hablemos!
            </Col>
            <Col md={4} className="contact-description">
              Si te interesa lo que hago puedes contactarme por correo electrónico
            </Col>
            <Col md={4} className="contact-button-container">
              <Button
                href="mailto:schmidtalejo@gmail.com"
                target="_blank"
              >
                Contacto <i className="bi bi-envelope-check-fill"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
