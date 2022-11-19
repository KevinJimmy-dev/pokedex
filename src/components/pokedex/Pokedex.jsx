import { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "../../api";
import Container from "../container/Container";
import PokeCard from "../pokeCard/PokeCard";

import "./pokedex.css";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);

      setPokemons(results);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }

    setPokemons(data.results);
  };

  useEffect(() => {
    console.log("carregou...");

    fetchPokemons();
  }, []);

  return (
    <main>
      <Container style={{  }}>
        <Container style={{ textAlign: 'center' }}>
          {pokemons.length > 0 &&
            pokemons.map((pokemon) => <PokeCard pokemon={pokemon} />)}
        </Container>
      </Container>
    </main>
  );
};

export default Pokedex;
