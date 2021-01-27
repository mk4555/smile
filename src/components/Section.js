import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "50vh",
    backgroundColor: "white",
  },
});

export const Section = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>SECTION</div>;
};
