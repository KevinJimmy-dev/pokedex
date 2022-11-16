import { Link } from "react-router-dom";
import Pikachu from "../../imgs/pikachu.webp";

import "./welcome.css";

const Welcome = () => {
  return (
    <div id="welcome">
      <img src={Pikachu} alt="Gif de um pikachu saindo de sua pokebola" />

      <button>
        <Link to="/pokedex">Vamos lá!</Link>
      </button>
    </div>
  );
};

export default Welcome;
