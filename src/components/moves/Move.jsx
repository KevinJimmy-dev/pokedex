import { StarBorder } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GrassIcon from "@mui/icons-material/Grass";
import * as React from "react";
import { getData } from "../../api";
import Type from "../types/Type";
import { Container } from "@mui/system";
import Spinner from "../spinner/Spinner";
import { GiBroadsword, GiLaserPrecision } from "react-icons/gi";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineLowPriority } from "react-icons/md";

const Move = (props) => {
  const [open, setOpen] = React.useState(false);
  const [moveDetail, setMoveDetail] = React.useState(null);

  const returnIcon = (type) => {
    if (type == "grass") {
      return <GrassIcon />;
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const detail = await getData(props.move.move.url);

      setMoveDetail(detail);
    };

    fetchData();
  }, [props.move.move.url]);

  return (
    <>
      {moveDetail == null || !moveDetail.hasOwnProperty("type") ? (
        <>
          <Container
            style={{
              height: "100%",
              marginTop: "20rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner />
          </Container>
        </>
      ) : (
        <>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon sx={{ marginRight: "1rem" }}>
              <Type type={moveDetail.type.name} index={props.index} />
            </ListItemIcon>
            <ListItemText primary={props.move.move.name} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <MdOutlineLowPriority style={{ width: "2rem", height: "2rem" }}/>
                </ListItemIcon>
                <ListItemText
                  primary="Prioridade"
                  secondary={moveDetail.priority ?? "-"}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GiLaserPrecision style={{ width: "2rem", height: "2rem" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Precisão"
                  secondary={moveDetail.accuracy ?? "-"}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <IoTimerOutline style={{ width: "2rem", height: "2rem" }} />
                </ListItemIcon>
                <ListItemText primary="PP" secondary={moveDetail.pp ?? "-"} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GiBroadsword style={{ width: "2rem", height: "2rem" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Poder"
                  secondary={moveDetail.power ?? "-"}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </>
      )}
    </>
  );
};

export default Move;
