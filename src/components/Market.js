import React from "react";
import Grid from "@material-ui/core/Grid";
import { Item } from "./Item";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
  },
});

const mockData = [
  {
    id: 1,
    name: "BAG",
    img: "link",
    price: 19.99,
  },
  {
    id: 2,
    name: "PANTS",
    img: "link",
    price: 19.99,
  },
  {
    id: 3,
    name: "SHIRT",
    img: "link",
    price: 19.99,
  },
  {
    id: 3,
    name: "SHIRT",
    img: "link",
    price: 19.99,
  },
  {
    id: 3,
    name: "SHIRT",
    img: "link",
    price: 19.99,
  },
  {
    id: 3,
    name: "SHIRT",
    img: "link",
    price: 19.99,
  },
  {
    id: 3,
    name: "SHIRT",
    img: "link",
    price: 19.99,
  },
  {
    id: 3,
    name: "SHIRT",
    img: "link",
    price: 19.99,
  },
  {
    id: 3,
    name: "SHIRT",
    img: "link",
    price: 19.99,
  },
  {
    id: 3,
    name: "SHIRT",
    img: "link",
    price: 19.99,
  },
];
export const Market = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} direction="row" className={classes.root}>
      {mockData.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} lg={4}>
          <Item product={item} />
        </Grid>
      ))}
    </Grid>
  );
};
