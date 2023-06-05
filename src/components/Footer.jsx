import React from "react";
import "./Footer.css";
import icono from "./../assets/icono-blanco.svg";

export default function Footer() {
  return (
    <footer className="dark-section footer-container">
      <img className="footer-logo" src={icono} alt="Logo de portafolio" />
      <p className="footer-text">
        Aprendo y creo constantemente
        <br />
        Creemos un proyecto juntos
      </p>
      <div className="icons-container">
        <a
          href="https://www.linkedin.com/in/alejo-schmidt/"
          target="_blank"
          rel={"noopener noreferrer"}
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/SchmidtAlejo"
          target="_blank"
          rel={"noopener noreferrer"}
        >
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.instagram.com/aleschmdt/" target="_blank" rel={"noopener noreferrer"}>
          <i className="bi bi-instagram"></i>
        </a>
        <a href="mailto:schmidtalejo@gmail.com" target="_blank" rel={"noopener noreferrer"}>
          <i className="bi bi-envelope"></i>
        </a>
      </div>
      <div className="footer-copyright">Creado por Alejo Schmidt (2023) &#169;</div>
    </footer>
  );
}
