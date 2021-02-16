import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    borderRadius: "0",
    boxShadow: "none",
    backgroundColor: "#F8EDEB",
    height: "100%",
  },
  media: {
    minHeight: 400,
    height: "100%",
  },
});

export const Item = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (name, id) => {
    history.push({
      pathname: `/product/${name}/${id}`,
      state: props.product,
    });
  };
  return (
    <Card
      className={classes.root}
      onClick={() => handleClick(props.product.name, props.product._id)}
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={props.product.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${props.product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

Item.defaultProps = {
  product: {
    _id: "0",
    img: "none",
    name: "N/A",
    price: "N/A",
  },
};
Item.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};
