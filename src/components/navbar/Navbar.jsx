import "./navbar.css";
import { HiOutlineSearchCircle } from "react-icons/hi";
import Logo from "../../imgs/pokedex_kanto.webp";
import { Link, useLocation } from "react-router-dom";
import { searchPokemon } from "../../api";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../AppContext";

const Navbar = () => {
  const location = useLocation();
  const { sharedData, setSharedData } = useContext(AppContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let searchTimer;

    const searchPokemonWithDebounce = async () => {
      if (search === "" || search === null) {
        setSharedData({});

        return;
      }

      let pokemon = await searchPokemon(search);

      if (pokemon) {
        setSharedData({ pokemon });
      } 

      if (!pokemon) {
        console.log("não encontrado");
      }
    };

    if (search !== "") {
        searchTimer = setTimeout(() => {
          searchPokemonWithDebounce();
      }, 300);
    }

    if (search === "" || search === null) {
      setSharedData({})
    }

    return () => clearTimeout(searchTimer);
  }, [search]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onKeyPressHandler = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  };

  return (
    <>
      {location.pathname !== "/" && (
        <nav id="navbar">
          <Link to="/pokedex">
            <div className="logo">
              <img src={Logo} alt="Pokedex vermelha original da cidade de Kanto" />
              <h1>Pokédex</h1>
            </div>
          </Link>

          <div id="search">
            <form action="">
              <input
                type="text"
                placeholder="Busque por um Pokémon"
                value={search}
                onChange={onChangeHandler}
                onKeyDown={onKeyPressHandler}
              />
              <button>{<HiOutlineSearchCircle size="30" />}</button>
            </form>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
