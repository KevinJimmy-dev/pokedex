import { useEffect, useState } from "react";
import "./pokedex.css";

const Pokedex = () => {
  const apiUrl = import.meta.env.VITE_API;

  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setPokemons(data.results);
  };

  useEffect(() => {
    const pokemonUrl = `${apiUrl}?limit=50`;

    getPokemons(pokemonUrl);
  }, []);

  return (
    <div>{pokemons && pokemons.map((pokemon) => <p>{pokemon.name}</p>)}</div>
  );
};

export default Pokedex;
