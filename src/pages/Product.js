import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
const useStyles = makeStyles({
  root: {
    height: 700,
    backgroundColor: "white",
  },
  gridItem: {
    padding: 25,
  },
  cartButton: {
    color: "#8e9aaf",
    backgroundColor: "#fae1dd",
  },
});

export const Product = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={8} className={classes.gridItem}>
        picture
      </Grid>
      <Grid item xs={4} className={classes.gridItem}>
        <h2>{props.name}</h2>
        <ul>
          <li>hi</li>
          <li>Hey</li>
        </ul>
        <p>{props.description}</p>
        <Button className={classes.cartButton}>
          <AddShoppingCartIcon />
          <Typography>ADD TO CART</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

Product.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
