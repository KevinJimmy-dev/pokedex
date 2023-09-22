import "./navbar.css";
import { HiOutlineSearchCircle } from "react-icons/hi";
import Logo from "../../imgs/pokedex_kanto.webp";
import { Link, useLocation } from "react-router-dom";
import { searchPokemon } from "../../api";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../AppContext";
import {
  Alert,
  AppBar,
  Box,
  Snackbar,
  Toolbar,
  Typography,
} from "@mui/material";

const Navbar = () => {
  const location = useLocation();
  const { sharedData, setSharedData } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [isActionTriggered, setIsActionTriggered] = useState(false);

  useEffect(() => {
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

    setTimeout(() => {
      if (search !== "") {
        searchPokemonWithDebounce();
      }

      if (search === "" || search === null) {
        setSharedData({});
        setIsActionTriggered(true);
      }
    }, 500);
  }, [search]);

  const onChangeHandler = (e) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
  };

  return (
    <>
      {location.pathname !== "/" && (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: "#e72129" }}>
            <Toolbar>
              <Link to="/pokedex">
                <Box sx={{ marginLeft: "0.5rem", display: "flex" }}>
                  <img
                    src={Logo}
                    width="75px"
                    style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
                  />
                </Box>
              </Link>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  marginLeft: "0.5rem",
                }}
              >
                Pokedex
              </Typography>

              <div id="search">
                <div>
                  <input
                    type="text"
                    placeholder="Search..."
                    onChange={onChangeHandler}
                  />
                  <button>{<HiOutlineSearchCircle size="30" />}</button>
                </div>
              </div>
            </Toolbar>
          </AppBar>
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
        </Box>
      )}
    </>
  );
};

export default Navbar;
