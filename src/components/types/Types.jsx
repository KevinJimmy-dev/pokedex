import * as React from "react";
import Type from "./Type";
import { Container } from "@mui/material";

const Types = (props) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem",
        justifyContent: "center"
      }}
    >
      {props.types.length > 0 &&
        props.types.map((type, index) => {
          return <Type type={type} index={index} />;
        })}
    </Container>
  );
};

export default Types;
