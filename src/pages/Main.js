import React from "react";
import { Section } from "../components/Section";
import rack from "../images/clothing-rack.jpg";
import { Circle } from "../components/Circle";
import Grid from "@material-ui/core/Grid";

export const Main = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        <Circle />
      </Grid>
      <Grid item xs={6}>
        <Circle />
      </Grid>
      <Grid item xs={12}>
        <Section image={rack} />
      </Grid>
      <Section />
    </Grid>
  );
};
