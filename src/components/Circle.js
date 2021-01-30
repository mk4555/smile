import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: "50%",
    width: 300,
    height: 300,
    backgroundColor: "black",
    margin: "0 auto",
  },
});
export const Circle = () => {
  const classes = useStyles();
  return <div className={classes.root} />;
};
