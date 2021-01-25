import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [tab, setTab] = useState(0);
  const handleTab = (e, value) => {
    setTab(value);
  };

  return (
    <Tabs centered value={tab} onChange={handleTab}>
      <Tab disableRipple label="Men" value={1} to="/men" component={Link} />
      <Tab disableRipple label="Women" value={2} to="/women" component={Link} />
      <Tab disableRipple label="Kids" value={3} to="/kids" component={Link} />
    </Tabs>
  );
};
