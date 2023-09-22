import * as React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Typography } from "@mui/material";

const SpecialAttack = (props) => {
  return (
    <>
      <Typography marginRight={"3%"}>Special-attack</Typography>
      <ProgressBar
        completed={props.stat.base_stat}
        maxCompleted={100}
        customLabel={props.stat.base_stat}
        bgColor="#ff6969"
        animateOnRender="true"
      />
    </>
  );
};

export default SpecialAttack;
