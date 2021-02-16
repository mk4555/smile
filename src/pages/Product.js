import React, { useState } from "react";
import {
  Grid,
  Button,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
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
    marginTop: 25,
  },
  buttonText: {
    marginLeft: 5,
  },
  description: {
    height: 300,
  },
});

export const Product = (props) => {
  const [size, setSize] = useState("");
  const classes = useStyles();
  console.log(props);

  const handleChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <Grid container className={classes.root}>
      <Grid item xs={8} className={classes.gridItem}>
        <img src={props.location.state.image} alt={props.location.state.name} />
      </Grid>
      <Grid item xs={4} className={classes.gridItem}>
        <h2>{props.location.state.name}</h2>
        <p className={classes.description}>
          {props.location.state.description}
        </p>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="Size"
            name="size"
            value={size}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="S"
              control={<Radio />}
              label="S"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="M"
              control={<Radio />}
              label="M"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="L"
              control={<Radio />}
              label="L"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="XL"
              control={<Radio />}
              label="XL"
              labelPlacement="bottom"
            />
          </RadioGroup>
          <Button className={classes.cartButton}>
            <AddShoppingCartIcon />
            <Typography className={classes.buttonText}>ADD TO CART</Typography>
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};

Product.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  }),
};
