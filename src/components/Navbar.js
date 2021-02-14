import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  logo: {
    textAlign: "center",
    cursor: "pointer",
    fontSize: 50,
    fontWeight: "bold",
    width: "10%",
    margin: "0 auto",
  },
});

export const Navbar = () => {
  const [tab, setTab] = useState(false);
  const [logo, setLogo] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const handleTab = (e, value) => {
    setTab(value);
  };

  const handleLogo = (e) => {
    history.push("/");
  };

  return (
    <div>
      <div
        className={classes.logo}
        onClick={handleLogo}
        onMouseEnter={() => setLogo(true)}
        onMouseLeave={() => setLogo(false)}
      >
        {logo ? ":)" : "SMILE"}
      </div>
      <Tabs centered value={tab} onChange={handleTab}>
        <Tab disableRipple label="Men" value={1} to="/men" component={Link} />
        <Tab
          disableRipple
          label="Women"
          value={2}
          to="/women"
          component={Link}
        />
        <Tab disableRipple label="Kids" value={3} to="/kids" component={Link} />
      </Tabs>
    </div>
  );
};
