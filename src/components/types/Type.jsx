import { Box } from "@mui/material";
import * as React from "react";
import { firstUpperCase } from "../../utils";

const Type = (props) => {
  const selectTheme = (typeName) => {
    switch (typeName) {
      case "grass":
        return "#78c850";
        break;
      case "poison":
        return "#a040a0";
        break;
      case "fire":
        return "#f08030";
        break;
      case "flying":
        return "#a890f0";
        break;
      case "water":
        return "#6890f0";
        break;
      case "bug":
        return "#a8b820";
        break;
      case "normal":
        return "#a8a878";
        break;
      case "ground":
        return "#e0c068";
        break;
      case "fairy":
        return "#ee99ac";
        break;
      case "fighting":
        return "#c03028";
        break;
      case "psychic":
        return "#f85888";
        break;
      case "rock":
        return "#b8a038";
        break;
      case "ice":
        return "#98d8d8";
        break;
      case "dragon":
        return "#7038f8";
        break;
      case "ghost":
        return "#705898";
        break;
      case "dark":
        return "#705848";
        break;
      case "steal":
        return "#b8b8d0";
        break;
      case "electric":
        return "#f8d030";
        break;
    }
  };

  return (
    <Box
      key={props.index}
      sx={{
        width: "5rem",
        height: "1.5rem",
        paddingTop: "0.1rem",
        border: "1px solid #000",
        borderRadius: "1rem",
        fontWeight: "bold",
        color: "white",
        backgroundColor: selectTheme(props.type.type.name),
        textAlign: "center"
      }}
    >
      {firstUpperCase(props.type.type.name)}
    </Box>
  );
};

export default Type;
