import { useContext, useEffect, useState } from "react";
import { firstUpperCase } from "../../utils";

import Container from "../container/Container";

import "./pokecard.css";
import PokeDetail from "../pokeDetail/pokeDetail";
import { AppContext } from "../../AppContext";

const PokeCard = (props) => {
  const { pokemon } = props;
  const { sharedData } = useContext(AppContext);
  const [openDetailModal, setOpenDetailModal] = useState(false)

  const handleClick = () => {
    setOpenDetailModal(true)
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-body">
        <img
          src={
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default
          }
          alt=""
          className="img-pokemon"
        />
      </div>
      <div className="card-footer">
        <Container>
          <h2>{firstUpperCase(pokemon.name)}</h2>

          <div className="types">
            {pokemon.types.length > 0 &&
              pokemon.types.map((type, index) => {
                return (
                  <div key={index} className={`pokemon-type ${type.type.name}`}>
                    {firstUpperCase(type.type.name)}
                  </div>
                );
              })}
          </div>
        </Container>
      </div>
      {openDetailModal && <PokeDetail open={openDetailModal} pokemon={pokemon} />}
    </div>
  );
};

export default PokeCard;
