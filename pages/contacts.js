import React from "react";
import Link from "next/link";

const contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contacts">
        <div className="contact-card">
          <div className="header">
            <h2>Me contactez</h2>
          </div>
          <div className="logo">
            <h3>Téléphone : </h3>
            <h3>E-mail : </h3>
          </div>
          <div className="text">
            <p>0606060606</p>
            <p>dede@gmail.com</p>
          </div>
          <div className="footer">
            <button> MON CV </button>
          </div>
        </div>
      </div>
      <Link href="/projects">
        <div className="left-button">
          <span>&#10092;</span>
        </div>
      </Link>
    </div>
  );
};

export default contacts;
