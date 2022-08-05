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
        <div className="skills">
          <div className="formation">
            <h2>Notions enseignées durant mon futur apprentissage</h2>
            <ul>
              <li>✔ PHP & Laravel</li>
              <li>✔ Javascript & Vue.js</li>
              <li>✔ Node.js & Express</li>
              <li>✔ Flutter</li>
              <li>✔ NoSQL</li>
              <li>✔ Docker</li>
              <li>✔ UML</li>
              <li>✔ CloudComputing</li>
              <li>✔ API (REST, GraphQL, Websockets)</li>
              <li>✔ Gestion de projet (cycle en V, méthodes agiles, Scrum)</li>
            </ul>
          </div>
          <div className="languages">
            <h2>Technologies web maitrisées</h2>
            <ul>
              <li>✔ React</li>
              <li>✔ Javascript</li>
              <li>✔ Redux</li>
              <li>✔ NextJS</li>
              <li>✔ TypeScript</li>
              <li>✔ CSS/SASS</li>
              <li>✔ HTML</li>
              <li>✔ Git</li>
              <li>✔ Firebase</li>
              <li>✔ Linux</li>
            </ul>
          </div>
          <div className="soft-skills">
            <h2>Savoir-être</h2>
            <ul>
              <li>✔ Travail d'équipe</li>
              <li>✔ Communication</li>
              <li>✔ Rigueur</li>
              <li>✔ Curiosité</li>
              <li>✔ Persévérance</li>
              <li>✔ Autonomie</li>
            </ul>
          </div>
          <div className="tools">
            <h2>Savoir-faire</h2>
            <ul>
              <li>✔ Développer de nouvelles fonctionnalités</li>
              <li>✔ Réaliser des tests</li>
              <li>✔ Analyse et correction de bugs</li>
              <li>
                ✔ Assurer le deploiement et le maintien en condition
                opérationnelle
              </li>
              <li>✔ Capacité à proposer et à mettre en oeuvre</li>
              <li>
                ✔ Ecouter, analyser et qualifier les problématiques des clients.
              </li>
            </ul>
          </div>
        </div>
        <Buttons left={"/"} right={"/projet-1"}></Buttons>
      </div>
    </main>
  );
};

export default Skills;
