import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home.js';
import NavigationBar from './components/NavigationBar.js';
import Browse from './components/Browse.js';
import './App.css';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/browse">
            <Browse />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
