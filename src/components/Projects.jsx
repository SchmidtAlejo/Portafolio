import React from "react";
import "./Projects.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import projects from "../helpers/projects";

export default function Projects() {
  const renderProject = (project) => {
    return (
      <Col md={6} lg={4} key={project}>
        <div className="project">
          <img src={project.src} alt="Imagen del proyecto" />
          <div className="overlay">
            <p>{project.projectName}</p>
            <div className="icons-contanier">
              <a
                href={project.hrefGitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={project.hrefProject}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
      </Col>
    );
  };

  return (
    <section id="projects" className="proyectos-recientes light-section">
      <h2 className="title-section dark-text text-center">
        Mis proyectos recientes
      </h2>
      <h3 className="project-description-section">
        Estos son algunos proyectos que he creado recientemente
      </h3>
      <Container className="project-container">
        <Row>{projects.map((project) => renderProject(project))}</Row>
      </Container>
      <Button
        className="btn-custom"
        variant="dark"
        href="https://github.com/SchmidtAlejo?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver más proyectos <i className="bi bi-arrow-right-circle-fill"></i>
      </Button>
    </section>
  );
}
