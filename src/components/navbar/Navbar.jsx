import "./navbar.css";

import { HiOutlineSearchCircle } from "react-icons/hi";

import Logo from "../../imgs/pokedex_kanto.webp";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname != "/" && (
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
              <input type="text" placeholder="Busque por um Pokémon" />
              <button>{<HiOutlineSearchCircle size="30" />}</button>
            </form>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
