import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.5 }}
        className="contact"
      >
        <Navigation />
        <div className="pic-container">
          <img src="./assets/img/photo.jpg" alt="Moi" />
          <a
            href="https://drive.google.com/file/d/16DlnmoPYeSBdZeZ65JvOe_8w6AOJMnma/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Obtenir mon C.V.
          </a>
        </div>
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>ME CONTACTER</h4>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone :</h4>
              <CopyToClipboard text="0761496272" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Numéro copié !")}
                >
                  07.61.49.62.72
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email :</h4>
              <CopyToClipboard
                text="david.jonquieres@gmail.com"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copié !")}
                >
                  david.jonquieres@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Davd JONQUIERES - 2022</p>
          </div>
        </div>
        <Buttons left={"/projet-2"} />
      </motion.div>
    </main>
  );
};

export default Contact;
