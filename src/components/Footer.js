import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: 200,
    backgroundColor: "#f8edeb",
    marginTop: 100,
  },
});

export const Footer = () => {
  const classes = useStyles();
  return <div className={classes.container}>Add bunch of links here</div>;
};
