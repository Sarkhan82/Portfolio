import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };
  return (
    <div>
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                top: -250,
                bottom: 250,
              }}
            >
              David JONQUIERES
            </motion.h1>
            <motion.h2
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                top: -250,
                bottom: 250,
              }}
            >
              Développeur front-end
            </motion.h2>
            <p>
              📢 Recherche contrat d'apprentissage | Eligible à la prime de
              8000€
            </p>
            <p>
              👨‍💻 Rythme 2semaine en entreprise / 1 semaine en formation durant
              16 mois
            </p>
            <p>📄 Titre RNCP niveau 6 (bac+3)</p>
            <p>💼 Disponnible immédiatement</p>
            <p>🚗 15 minutes autour de Toulouse</p>
          </div>
        </div>
        <Buttons right={"/skills"} />
      </motion.div>
    </div>
  );
};

export default Home;
