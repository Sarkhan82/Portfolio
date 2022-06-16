import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Project projectNumber={1} />
        <Buttons left={"/projet-1"} right={"/contact"}></Buttons>
      </div>
    </main>
  );
};
export default Project2;
