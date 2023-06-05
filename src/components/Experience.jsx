import React from "react";
import "./Experience.css";
import { Badge, Row, Col, Container } from "react-bootstrap";

const DESARROLLO_WEB_DESCRIPTION =
  "Tengo experiencia desarrollando páginas web con HTML, CSS, JavaScript, React.js y desarrollar APIs con Node.js y Express.js, que aprendí durante mis estudios y de forma autodidacta.";
const DESARROLLO_MOBILE_DESCRIPTION =
  "También tengo experiencia en el desarrollo de aplicaciones Mobile para Android con Kotlin y ademas tengo expierencia con aplicaciones híbridas con React Native.";
const ESTUDIOS_DESCRIPTION =
  "Realicé mis estudios en el instituto ORT donde aprendí a desarrollar aplicaciones Front-end y Back-end. También aprendí diferentes metodos de metodologias agiles.";
const LAPTOP_ICON = "bi bi-laptop";
const PHONE_ICON = "bi bi-phone";
const ESTUDIOS_ICON = "bi bi-book";
const DESARROLLO_WEB_BADGES = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
];
const DESARROLLO_MOBILE_BADGES = ["React Native", "Android", "Kotlin"];
const ESTUDIOS_BADGES = ["Front-end", "Back-end", "Metodologías Agiles"];

export default function Expierence() {
  const renderItem = (title, description, icon, badges) => {
    return (
      <Col md={4} className="column-custom">
        <i className={icon}></i>
        <p className="experience-title">{title}</p>
        <p className="experience-description">{description}</p>
        <div className="badges-container">
          {badges.map((badge) => (
            <Badge bg="primary" key={badge}>
              {badge}
            </Badge>
          ))}
        </div>
      </Col>
    );
  };

  return (
    <section className="experience light-section">
      <Container className="text-center">
        <Row>
          {renderItem(
            "Desarrollo Web",
            DESARROLLO_WEB_DESCRIPTION,
            LAPTOP_ICON,
            DESARROLLO_WEB_BADGES
          )}
          {renderItem(
            "Desarrollo Mobile",
            DESARROLLO_MOBILE_DESCRIPTION,
            PHONE_ICON,
            DESARROLLO_MOBILE_BADGES
          )}
          {renderItem(
            "Estudios",
            ESTUDIOS_DESCRIPTION,
            ESTUDIOS_ICON,
            ESTUDIOS_BADGES
          )}
        </Row>
      </Container>
    </section>
  );
}
