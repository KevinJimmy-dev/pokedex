import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { AppContext } from "../../AppContext";
import { firstUpperCase } from "../../utils";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Container } from "@mui/system";
import Carousel from "../carousel/Carousel";
import Stat from "../stats/Stat";
import Types from "../types/Types";
import Moves from "../moves/Moves";
import Curiosities from "../curiosities/Curiosities";

const PokeDetail = (props) => {
  const { sharedData, setSharedData } = React.useContext(AppContext);
  const [open, setOpen] = React.useState(props.open);
  const pokemon = props.pokemon;

  const handleClose = () => {
    setOpen(false);
    setSharedData({ open });
  };

  console.log("pokemon", pokemon);

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ paddingRight: "0px !important" }}>
          <Toolbar sx={{ backgroundColor: "#e72129" }}>
            <Box sx={{ width: "100%", maxWidth: 500 }}>
              <Typography
                variant="h1"
                gutterBottom
                fontSize={"1.5rem"}
                marginTop={"0.5rem"}
              >
                <Typography
                  variant="caption"
                  display=""
                  gutterBottom
                  fontSize={"1.5rem"}
                >
                  {firstUpperCase(pokemon.name)} Pokémon Detail
                </Typography>
              </Typography>
            </Box>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ position: "absolute", right: "1rem" }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container sx={{ marginTop: "5rem", alignContent: "flex-start" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "40%", minWidth: "300px" }}>
              <Carousel sprites={pokemon.sprites} />
              <Types types={pokemon.types} />
            </Box>
            <Box sx={{ width: "40%", minWidth: "300px", marginTop: "1.5rem" }}>
              <Stat stats={pokemon.stats} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "40%", minWidth: "300px" }}>
              <Moves moves={pokemon.moves} />
            </Box>
            <Box sx={{ width: "40%", minWidth: "300px" }}>
              <Curiosities curiosities={pokemon.species} />
            </Box>
          </Box>
        </Container>
      </Dialog>
    </div>
  );
};

export default PokeDetail;
