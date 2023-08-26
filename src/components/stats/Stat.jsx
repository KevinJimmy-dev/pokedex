import { Box, Container } from "@mui/material";
import * as React from "react";
import Hp from "./hp/Hp";
import Attack from "./hp/Attack";
import Speed from "./hp/Speed";
import Defense from "./hp/Defense";
import SpecialAttack from "./hp/SpecialAttack";
import SpecialDefense from "./hp/SpecialDefense";

const Stat = (props) => {
  const selectStatComponent = (stat) => {
    switch (stat.stat.name) {
        case 'hp':
            return <Hp stat={stat}/>
            break;

        case 'attack':
            return <Attack stat={stat}/>
            break;

        case 'defense':
            return <Defense stat={stat}/>
            break;

        case 'speed':
            return <Speed stat={stat}/>
            break;

        case 'special-attack':
            return <SpecialAttack stat={stat}/>
            break;

        case 'special-defense':
            return <SpecialDefense stat={stat}/>
            break;
    }
  }

  return <>
    {props.stats.map((stat) => (
        <Container>{selectStatComponent(stat)}</Container>
    ))}
  </>;
};

export default Stat;
