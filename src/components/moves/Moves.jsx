import { List, ListSubheader, Typography } from "@mui/material";
import * as React from "react";
import Move from "./Move";

const Moves = (props) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 487,
        "& ul": { padding: 0 },
        marginTop: "1.5rem"
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography fontSize={"1.5rem"} color={"#000"}>Movies</Typography>
        </ListSubheader>
      }
    >
      {props.moves.map((move, index) => {
        return <Move move={move} index={index} />;
      })}
    </List>
  );
};

export default Moves;
