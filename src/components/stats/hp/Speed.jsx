import * as React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Typography } from "@mui/material";

const Speed = (props) => {
  return (
    <>
      <Typography marginRight={"3%"}>Speed</Typography>
      <ProgressBar
        completed={props.stat.base_stat}
        maxCompleted={100}
        customLabel={props.stat.base_stat}
        bgColor="#42A5F5"
        animateOnRender="true"
      />
    </>
  );
};

export default Speed;
