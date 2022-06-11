import React from "react";
import Link from "next/link";

const aboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme">
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            obcaecati assumenda maxime possimus earum officia repellat
            asperiores tempore non ratione, unde molestias aspernatur, cumque
            distinctio quidem sit sint perspiciatis minima.
          </p>
        </div>
        <div className="languages">
          <div className="title-l">
            <h2>Languages</h2>
          </div>
          <div className="list-l">
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Next JS</li>
              <li>Typescript</li>
              <li>PHP</li>
              <li>NodeJS</li>
            </ul>
          </div>
        </div>
        <div className="soft-skill">
          <div className="title-s">
            <h2>Soft-skill</h2>
          </div>
          <div className="list-s">
            <ul>
              <li>Travaille d'équipe</li>
              <li>Communication</li>
              <li>Patience</li>
              <li>Autonomie</li>
            </ul>
          </div>
        </div>
      </div>
      <Link href="/">
        <div className="left-button">
          <span>&#10092;</span>
        </div>
      </Link>
      <Link href="/projects">
        <div className="right-button">
          <span>&#10093;</span>
        </div>
      </Link>
    </div>
  );
};

export default aboutMe;
