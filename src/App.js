import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home.js";
import NavigationBar from "./components/NavigationBar.js";
import Browse from "./components/Browse.js";
import "./App.css";
import KeyView from "./components/KeyView.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/browse/:stockNumber" component={KeyView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
