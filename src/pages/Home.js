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
      {/* Image et texte, entête */}
      <div className="content flex flex-col md:flex-row items-center justify-center gap-8 text-center">
        <div>
          <WavyText text="Bonjour, je suis Kilian Beraud !" replay={replay} />
          <p className="text-lg text-gray-600">Développeur Web & Mobile</p>
        </div>
        <div class="spacer"></div>
        <div class="spacer"></div>

        <img
          src="/images/moi.jpg"
          alt="photo"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-2 border-black -translate-y-4"
        />
      </div>

      {/* Les projets */}
      <div className="cardcustom">
        <CardProjets title="Projets" content="" />
      </div>
      <div className="spacer"></div>
      {/* Les skills */}
      <div className="cardCapa">
        <CardCapa />
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default Home;
