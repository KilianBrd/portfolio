import "./Home.css";
import CardProjets from "../components/CardProjets";
import CardCapa from "../components/CardCapa";
import WavyText from "../components/WavyText.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [replay, setReplay] = useState(true);

  return (
    <div className="all">
      <div className="content flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Texte de présentation */}
        <div className="textPresentation text-center md:text-left max-w-md">
          <WavyText text="Bonjour, je suis Kilian Beraud !" replay={replay} />
          <p className="text-lg text-gray-600">Développeur Web & Mobile</p>
        </div>

        {/* Image */}
        <div className="md:mr-10 mr-0 flex justify-center">
          <img
            src="/images/moi.jpg"
            alt="photo"
            className="photoimg w-40 h-40 md:w-60 md:h-60 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
      <div className="cardcustom">
        <CardProjets title="Projets" content="" />
      </div>
      <div className="spacer"></div>
      <div className="cardCapa">
        <CardCapa />
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default Home;
