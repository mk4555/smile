import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    borderStyle: "solid",
    height: "calc(100vh/3)",
  },
});
export const Item = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={3} className={classes.root}>
      <img src={props.product.img} alt={props.product.name} />
      {props.product.name}
      {props.product.price}
    </Grid>
  );
};
Item.defaultProps = {
  product: {
    id: "0",
    img: "none",
    name: "N/A",
    price: "N/A",
  },
};
Item.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};
