import React from "react";
import { getData } from "../../api";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Spinner from "../spinner/Spinner";
import { CatchingPokemon } from "@mui/icons-material";
import { FaPhoenixFramework } from "react-icons/fa";
import { GiPegasus } from "react-icons/gi";
import PetsIcon from "@mui/icons-material/Pets";

const Curiosities = (props) => {
  const [open, setOpen] = React.useState(false);
  const [curiosities, setCuriosities] = React.useState(null);

  const handleClick = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getData(props.curiosities.url);

      setCuriosities(data);
    };

    fetchData();
  }, [props.curiosities.url]);

  console.log("curiosities", curiosities);

  return (
    <>
      {curiosities == null || !curiosities.hasOwnProperty("base_happiness") ? (
        <>
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
        </>
      ) : (
        <Container sx={{ marginTop: "1.5rem" }}>
          <Typography fontSize={"1.5rem"} color={"#000"}>
            Curiosities
          </Typography>

          <Box>
            <List>
              <ListItem>
                <ListItemIcon>
                  <EmojiEmotionsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Base happiness"
                  secondary={curiosities.base_happiness}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CatchingPokemon />
                </ListItemIcon>
                <ListItemText
                  primary="Capture rate"
                  secondary={curiosities.capture_rate + "%"}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FaPhoenixFramework />
                </ListItemIcon>
                <ListItemText
                  primary="Is legendary?"
                  secondary={curiosities.is_legendary ? "Yes" : "No"}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GiPegasus />
                </ListItemIcon>
                <ListItemText
                  primary="Is mythic?"
                  secondary={curiosities.is_mythic ? "Yes" : "No"}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PetsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Shape"
                  secondary={curiosities.shape.name}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PetsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Habitat"
                  secondary={curiosities.habitat.name}
                />
              </ListItem>
            </List>
          </Box>
        </Container>
      )}
    </>
  );
};

export default Curiosities;
