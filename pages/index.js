import Link from "next/link";
import React from "react";

const home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>David JONQUIERES</h1>
        <h2>Développeur Front-end</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          dolores ipsum, blanditiis, exercitationem iure quaerat recusandae
          placeat animi sed iusto corrupti distinctio praesentium cupiditate
          consequatur culpa aliquid, assumenda hic? Saepe?
        </p>
      </div>
      <Link href="/aboutMe">
        <div className="right-button">
          <span>&#10093;</span>
        </div>
      </Link>
    </div>
  );
};

export default home;
