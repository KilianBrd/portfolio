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
      <div className="content">
        <div className="textPresentation">
          <WavyText text="Bonjour, je suis Kilian Beraud !" replay={replay} />
          <p>Développeur Web & Mobile</p>
        </div>
        <div className="photo">
          <img src="/images/moi.jpg" alt="photo" className="photoimg" />
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
