import React from "react";
import Grid from "@material-ui/core/Grid";
import { Item } from "./Item";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
const useStyles = makeStyles({
  root: {
    margin: "0 auto",
  },
});

export const Market = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} direction="row" className={classes.root}>
      {props.items.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} lg={4}>
          <Item product={item} />
        </Grid>
      ))}
    </Grid>
  );
};

Market.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
