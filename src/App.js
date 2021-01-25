import React from "react";
import { Navbar } from "./components/Navbar";
import { Main } from "./pages/Main";
import { Men } from "./pages/Men";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "pink",
    margin: "0 auto",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <Navbar />
        <div className={classes.root}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/men" component={Men} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
