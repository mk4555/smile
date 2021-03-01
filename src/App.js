import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Main } from "./pages/Main";
import { Men } from "./pages/Men";
import { Women } from "./pages/Women";
import { Kids } from "./pages/Kids";
import { Product } from "./pages/Product";
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
  signIn: {
    position: "absolute",
    right: 0,
    top: 0,
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
            <Route exact path="/" component={Main} />
            <Route exact path="/men" component={Men} />
            <Route exact path="/women" component={Women} />
            <Route exact path="/kids" component={Kids} />
            <Route path="/product/:name/:id" component={Product} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
