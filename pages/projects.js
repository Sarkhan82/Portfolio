import React from "react";
import Link from "next/link";

const projects = () => {
  return (
    <div className="project-container">
      <div className="project">
        <h1>Project</h1>
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

export default projects;
