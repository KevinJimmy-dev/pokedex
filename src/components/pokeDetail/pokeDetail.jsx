import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { AppContext } from "../../AppContext";
import { firstUpperCase } from "../../utils";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Container } from "@mui/system";
import Carousel from "../carousel/Carousel";

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
                Detalhe do Pokémon{" "}
                <Typography
                  variant="caption"
                  display=""
                  gutterBottom
                  fontSize={"1.5rem"}
                >
                  {firstUpperCase(pokemon.name)}
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
        <Container sx={{ marginTop: "5rem" }}>
          <Grid container spacing={2}>
            <Grid xs={6} md={8}>
              <Carousel sprites={pokemon.sprites} />
            </Grid>
            <Grid xs={6} md={4}></Grid>
              
            <Grid xs={6} md={4}></Grid>
            <Grid xs={6} md={8}></Grid>
          </Grid>
        </Container>
      </Dialog>
    </div>
  );
};

export default PokeDetail;
