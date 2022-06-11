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
            <i class="fa-solid fa-phone"></i>
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div className="text-contact">
            <p>0761496272</p>
            <p>david.jonquieres@gmail.com</p>
          </div>
          <div className="footer">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
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
