import "./navbar.css";
import { HiOutlineSearchCircle } from "react-icons/hi";
import Logo from "../../imgs/pokedex_kanto.webp";
import { Link, useLocation } from "react-router-dom";
import { searchPokemon } from "../../api";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../AppContext";
import { Alert, Snackbar } from "@mui/material";

const Navbar = () => {
  const location = useLocation();
  const { sharedData, setSharedData } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [isActionTriggered, setIsActionTriggered] = useState(false);

  useEffect(() => {
    let searchTimer;

    const searchPokemonWithDebounce = async () => {
      if (search === "" || search === null) {
        setSharedData({});
        setIsActionTriggered(false);
        return;
      }

      let pokemon = await searchPokemon(search.toLowerCase());

      if (pokemon) {
        setSharedData({ pokemon });
        setIsActionTriggered(true);
      } else {
        setIsActionTriggered(false);
      }
    };

    if (search !== "") {
      searchTimer = setTimeout(() => {
        searchPokemonWithDebounce();
      }, 300);
    }

    if (search === "" || search === null) {
      setSharedData({});
      setIsActionTriggered(true);
    }

    return () => clearTimeout(searchTimer);
  }, [search]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onKeyPressHandler = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <>
      {location.pathname !== "/" && (
        <nav id="navbar">
          <Link to="/pokedex">
            <div className="logo">
              <img
                src={Logo}
                alt="Pokedex vermelha original da cidade de Kanto"
              />
              <h1>Pokédex</h1>
            </div>
          </Link>

          <div id="search">
            <form action="">
              <input
                type="text"
                placeholder="Busque por um Pokémon"
                id="search"
                value={search}
                onChange={onChangeHandler}
                onKeyDown={onKeyPressHandler}
                style={{
                  border: isActionTriggered
                    ? "2px solid black"
                    : "2px solid yellow",
                }}
              />
              <button>{<HiOutlineSearchCircle size="30" />}</button>
            </form>
          </div>

          {!isActionTriggered && (
            <>
              <Snackbar
                open={open}
                autoHideDuration={1}
                message="Pokémon não encontrado..."
              >
                <Alert variant="filled" severity="error">
                  Pokemon não encontrado...
                </Alert>
              </Snackbar>
            </>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
