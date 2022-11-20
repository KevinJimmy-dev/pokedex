import { firstUpperCase } from "../../utils";

import Container from "../container/Container";

import "./pokecard.css";

const PokeCard = (props) => {
  const { pokemon } = props;

  console.log(pokemon);

  return (
    <div className="card">
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
    </div>
  );
};

export default PokeCard;
