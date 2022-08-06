import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px )`;
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://github.com/Sarkhan82"
          target="=_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li className="fa-brands fa-github"></li>
        </a>
        <a
          href="https://www.linkedin.com/in/david-jonquieres-alternant-d%C3%A9veloppeur-toulouse/"
          target="=_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li className="fa-brands fa-linkedin"></li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
