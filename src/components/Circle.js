import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useSpring, animated } from "react-spring";
const useStyles = makeStyles({
  root: {
    borderRadius: "50%",
    width: 300,
    height: 300,
    backgroundColor: "#e8e8e4",
    margin: "0 auto",
    position: "absolute",
  },
  box: {
    position: "absolute",
  },
});
export const Circle = () => {
  const classes = useStyles();
  const [flipped, setFlipped] = useState(true);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div
      onMouseEnter={() => setFlipped(false)}
      onMouseLeave={() => setFlipped(true)}
      className={classes.box}
    >
      <animated.div
        className={classes.root}
        style={{ opacity: opacity.interpolate((o) => 1 - o) }}
      />
      <animated.div
        className={classes.root}
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      />
    </div>
  );
};
