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
          <div className="formation">
            <h2>Futur apprentissage durant la formation O'clock</h2>
            <ul>
              <li>UML</li>
              <li>Java</li>
              <li>Node.js</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>AMQP</li>
              <li>DevOps</li>
              <li>CloudComputing</li>
              <li>Serverless</li>
            </ul>
          </div>
          <div className="languages">
            <h2>Langages connus</h2>
            <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>Redux</li>
              <li>NextJS</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className="soft-skills">
            <h2>Atouts</h2>
            <ul>
              <li>Travail d'équipe</li>
              <li>Communication</li>
              <li>Flexibilité</li>
              <li>Curieux</li>
              <li>Persévérance</li>
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
