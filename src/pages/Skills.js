import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";

const Skills = () => {
  return (
    <main>
      <Mouse />
      <Navigation />
      <div className="skills-container">
        <div className="text">
          <p>
            Je suis actuellement à la recherche d'une alternance dans le cadre
            de ma formation O'clock s'effectuant sur un rythme de 1 semaine en
            formation et 2 semaines en entreprise durant 16 mois.
          </p>
        </div>
        <div className="skills">
          <div className="languages">
            <h2>Programation</h2>
            <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>Redux</li>
              <li>NextJS</li>
              <li>TypeScript</li>
              <li>Node JS (en cours d'apprentissage)</li>
            </ul>
          </div>
          <div className="soft-skills">
            <h2>Soft Skills</h2>
            <ul>
              <li>Travail d'équipe</li>
              <li>Communication</li>
              <li>Facilité d'adaptation</li>
              <li>Curieux</li>
              <li>Patient</li>
              <li>Conscience professionnelle</li>
            </ul>
          </div>
          <div className="tools">
            <h2>Outils</h2>
            <ul>
              <li>Visual studio code</li>
              <li>Git</li>
              <li>Firebase</li>
              <li>Linux</li>
              <li>Suite Office</li>
            </ul>
          </div>
        </div>
        <Buttons left={"/"} right={"/projet-1"}></Buttons>
      </div>
    </main>
  );
};

export default Skills;
