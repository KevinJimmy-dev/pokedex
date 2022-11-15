import Pikachu from "../../imgs/pikachu.webp";

import "./welcome.css";

const Welcome = () => {
  return (
    <div id="welcome">
      <img src={Pikachu} alt="Gif de um pikachu saindo de sua pokebola" />

      <button>Vamos lá!</button>
    </div>
  );
};

export default Welcome;
