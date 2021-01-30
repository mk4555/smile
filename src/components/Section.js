import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "70vh",
    backgroundColor: "white",
    marginBottom: 50,
    boxSizing: "border-box",
    backgroundImage: (props) => `url(${props.image})`,
    backgroundSize: "cover",
  },
});

export const Section = (props) => {
  const classes = useStyles(props);
  return <div className={classes.root} />;
};
