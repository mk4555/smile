import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Main } from "./pages/Main";
import { Men } from "./pages/Men";
import { Women } from "./pages/Women";
import { Kids } from "./pages/Kids";
import { getItems } from "./actions/items";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  global: {
    backgroundColor: "pink",
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  return (
    <div className={classes.global}>
      <Router>
        <Navbar />
        <div className={classes.content}>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/men">
              <Men />
            </Route>
            <Route exact path="/women">
              <Women />
            </Route>
            <Route exact path="/kids">
              <Kids />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
