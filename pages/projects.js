import React from "react";
import { projects } from "../projectsData";
import Link from "next/link";

const portfolio = ({ project }) => {
  return (
    <div className="project-container">
      <div className="project">
        <h1>Mes Projets</h1>

        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <Link href="projects/[id}" as={"projects/" + project.id}>
                <a>
                  {project.title} <span>➡</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/aboutMe">
        <div className="left-button">
          <span>&#10092;</span>
        </div>
      </Link>
      <Link href="/contacts">
        <div className="right-button">
          <span>&#10093;</span>
        </div>
      </Link>
    </div>
  );
};

export default portfolio;
