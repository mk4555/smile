import React from "react";
import { Navbar } from "./components/Navbar";
import { Main } from "./pages/Main";
import { Men } from "./pages/Men";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  global: {
    backgroundColor: "pink",
    height: "100%",
    minHeight: "100vh",
  },
  content: {
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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
