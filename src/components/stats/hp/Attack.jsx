import * as React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Typography } from "@mui/material";

const Attack = (props) => {
  return (
    <>
      <Typography marginRight={"3%"}>Attack</Typography>
      <ProgressBar
        completed={props.stat.base_stat}
        maxCompleted={100}
        customLabel={props.stat.base_stat}
        bgColor="red"
        animateOnRender="true"
      />
    </>
  );
};

export default Attack;
