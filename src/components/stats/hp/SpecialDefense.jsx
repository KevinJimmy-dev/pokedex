import * as React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Typography } from "@mui/material";

const SpecialDefense = (props) => {
  return (
    <>
      <Typography marginRight={"3%"}>Special-defense</Typography>
      <ProgressBar
        completed={props.stat.base_stat}
        maxCompleted={100}
        customLabel={props.stat.base_stat}
        bgColor="#f5c045"
        animateOnRender="true"
      />
    </>
  );
};

export default SpecialDefense;
