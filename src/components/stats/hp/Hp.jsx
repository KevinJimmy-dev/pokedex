import * as React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Typography } from "@mui/material";

const Hp = (props) => {
  return (
    <>
      <Typography marginRight={"3%"}>Hp</Typography>
      <ProgressBar
        completed={props.stat.base_stat}
        maxCompleted={100}
        customLabel={props.stat.base_stat}
        bgColor="green"
        animateOnRender="true"
      />
    </>
  );
};

export default Hp;
