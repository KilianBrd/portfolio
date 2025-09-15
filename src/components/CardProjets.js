import { FaApple, FaAppStore, FaGoogle, FaGooglePlay } from "react-icons/fa";
import "./Card.css";
import { motion } from "framer-motion";

const projets = [
  {
    title: "Portfolio",
    image: "/images/portfolio.png",
    link: "http://kilianberaud.com",
  },
  {
    title: "Application CD and LP",
    image: "/images/cdandlp.jpg",
  },
  {
    title: "Site vitrine",
    image: "/images/buro1.png",
    link: "https://buro1.fr",
  },
];

// Fonction pour boucler tous les projects cités au dessus
// Exception pour le projet mobile
function CardProjets({ title }) {
  return (
    <div className="cardProjet">
      <h3 className="titleProjet">{title}</h3>
      <div className="projetsCards">
        {projets.map((project, i) => {
          if (project.title == "Application CD and LP") {
            return (
              <div className="projetCard w-80">
                <h4>{project.title}</h4>
                <div className="image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div class="link mt-4 flex flex-row items-center justify-center p-2">
                  <a href="http://itunes.apple.com/app/id6746437380">
                    <FaAppStore />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.appCdandlp.app"
                    class="ml-6"
                  >
                    <FaGooglePlay />
                  </a>
                </div>
              </div>
            );
          } else {
            return (
              <motion.button
                key={i}
                className="projectButton"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={project.link}>
                  <div className="projetCard">
                    <h4>{project.title}</h4>
                    <div className="image">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </div>
                </a>
              </motion.button>
            );
          }
        })}
      </div>
    </div>
  );
}

export default CardProjets;
