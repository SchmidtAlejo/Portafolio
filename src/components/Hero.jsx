import React from "react";
import perfil from "../assets/perfil.webp";
import monitor from "../assets/hero-inferior.svg";
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero align-items-stretch">
      <div className="hero-principal">
        <img src={perfil} alt="Foto de Alejo Schmidt" className="hero-imagen" />
        <h1>Hola, soy Alejo Schmidt</h1>
        <h2>Desarrollo sitios web y Aplicaciones Mobile</h2>
      </div>
      <div className="hero-inferior img-fluid">
        <img className="hero-inferior-imagen img-fluid" src={monitor} alt="Monitor, laptop y logos de HTML, CSS, JavaScript y React" />
      </div>
    </section>
  );
}
