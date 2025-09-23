import "./Card.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function CardCapa() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "-50px 0px",
  });

  const codeString = `const skills = [
  'JavaScript',
  'php',
  'Symfony'
  'React',
  'dart',
  'flutter',
  'SQL',
  'tailwind',
  'Git'
  'C#',
];`;

  // Variants pour le conteneur principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Variants pour le titre avec effet de split text
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  // Variants pour le texte
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };

  // Variants pour le code
  const codeVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.8,
      },
    },
  };

  // Fonction pour splitter le texte en mots
  const splitIntoWords = (text) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        variants={wordVariants}
        style={{
          display: "inline-block",
          marginRight: "0.25rem",
          transformOrigin: "bottom",
        }}
      >
        {word}
      </motion.span>
    ));
  };

  // Fonction pour splitter le texte en lettres
  const splitIntoLetters = (text) => {
    return text.split(" ").map((word, i) => (
      <motion.span
        key={i}
        style={{ display: "inline-block", marginRight: "0.25rem" }}
      >
        {word.split("").map((char, j) => (
          <motion.span
            key={j}
            variants={letterVariants}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    ));
  };

  return (
    <motion.div
      className="cardProjet"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="card-content">
        <motion.h2 className="titleProjet" variants={titleVariants}>
          {splitIntoWords("À propos de moi")}
        </motion.h2>

        <div className="contentCapa">
          <motion.p
            className="card-body whitespace-pre-wrap break-words"
            variants={textVariants}
          >
            {splitIntoLetters(
              "Je suis un développeur passionné notamment par le monde du mobile mais aussi du web."
            )}
            <br />
            <br />
            {splitIntoLetters(
              "Mon truc, c'est de coder avec passion, apprendre constamment, et collaborer avec des gens qui ont envie de faire avancer les choses. Si tu veux parler tech, projets ou juste échanger, je suis toujours partant !"
            )}
          </motion.p>

          <motion.div className="code" variants={codeVariants}>
            <SyntaxHighlighter language="javascript" style={oneDark}>
              {codeString}
            </SyntaxHighlighter>
          </motion.div>
        </div>
        <div className="mt-6 flex justify-center">
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-purple-500 hover:scale-105 transition-all duration-300">
              Voir le CV
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default CardCapa;
