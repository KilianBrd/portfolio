import "./Card.css";
import { motion } from "framer-motion";

const projets = [
  {
    title: "Portfolio",
    image: "/images/portfolio.png",
  },
  {
    title: "Application CD and LP",
    image: "/images/cdandlp.jpg",
  },
  {
    title: "Site vitrine",
    image: "/images/buro1.png",
  },
];

function CardProjets({ title }) {
  return (
    <div className="cardProjet">
      <h3 className="titleProjet">{title}</h3>
      <div className="projetsCards">
        {projets.map((project, i) => (
          <motion.button
            key={i}
            className="projectButton"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="projetCard">
              <h4>{project.title}</h4>
              <div className="image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default CardProjets;
