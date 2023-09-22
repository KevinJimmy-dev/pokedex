import * as React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Typography } from "@mui/material";

const Defense = (props) => {
  return (
    <>
      <Typography marginRight={"3%"}>Defense</Typography>
      <ProgressBar
        completed={props.stat.base_stat}
        maxCompleted={100}
        customLabel={props.stat.base_stat}
        bgColor="#ebb434"
        animateOnRender="true"
      />
    </>
  );
};

export default Defense;
