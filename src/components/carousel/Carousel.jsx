import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import { labelVersionPokemon } from "../../utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = (props) => {
  const keysHasValue = ["front_default"];

  const sprites = [
    {
      path: props.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
      label: "black-white animated",
    },
  ];

  const processSprites = (spritesObj) => {
    Object.keys(spritesObj).forEach((key) => {
      if (keysHasValue.includes(key)) {
        sprites.push({
          path: spritesObj[key],
          label: key,
        });
      }

      if (key === "versions") {
        Object.keys(spritesObj[key]).forEach((key2) => {
          Object.keys(spritesObj[key][key2]).forEach((key3) => {
            Object.keys(spritesObj[key][key2][key3]).forEach((key4) => {
              if (keysHasValue.includes(key4) && key3 !== "icons") {
                sprites.push({
                  path: spritesObj[key][key2][key3][key4],
                  label: key3,
                });
              }
            });
          });
        });
      }
    });
  };

  processSprites(props.sprites);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = sprites.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>
          <b>Versão:</b> {labelVersionPokemon(sprites[activeStep].label)}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        autoplay={false}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {sprites.map((sprite, index) => (
          <div key={sprite.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "40%",
                  maxHeight: "30%",
                  display: "block",
                  overflow: "hidden",
                  width: "40%",
                  marginLeft: "26%",
                  margin: "auto",
                }}
                src={sprite.path}
                alt={sprite.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "center",
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default Carousel;
