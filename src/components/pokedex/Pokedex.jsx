import { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "../../api";

import Container from "../container/Container";
import Pagination from "../pagination/Pagination";
import PokeCard from "../pokeCard/PokeCard";
import Spinner from "../spinner/Spinner";

import "./pokedex.css";

const Pokedex = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 25;

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);

      const data = await getPokemons(itemsPerPage, itemsPerPage * page);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);

      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }

    setPokemons(data.results);
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <main>
      <Container>
        {loading ? (
          <Container
            style={{
              height: "100%",
              marginTop: "20rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner />
          </Container>
        ) : (
          <>
            <Pagination
              page={page + 1}
              totalPages={totalPages}
              onLeftClick={onLeftClickHandler}
              onRightClick={onRightClickHandler}
            />
            <Container style={{ textAlign: "center" }}>
              {pokemons.length > 0 &&
                pokemons.map((pokemon) => <PokeCard pokemon={pokemon} />)}
            </Container>
          </>
        )}
      </Container>
    </main>
  );
};

export default Pokedex;
