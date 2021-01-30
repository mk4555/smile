import React from "react";
import { Navbar } from "./components/Navbar";
import { Main } from "./pages/Main";
import { Men } from "./pages/Men";
import { Women } from "./pages/Women";
import { Kids } from "./pages/Kids";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  global: {
    backgroundColor: "pink",
    height: "100%",
    minHeight: "100vh",
  },
  content: {
    paddingTop: 25,
    backgroundColor: "pink",
    margin: "0 auto",
    width: "70%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.global}>
      <Router>
        <Navbar />
        <div className={classes.content}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/men" component={Men} />
            <Route exact path="/women" component={Women} />
            <Route exact path="/kids" component={Kids} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
