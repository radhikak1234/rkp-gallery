import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home.js"
import AboutMe from "./pages/aboutme.js"
import Portraits from "./pages/portraits.js"

class App extends Component{

  constructor(props){
    super(props);

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/"
            render={(props) =>
              <Home
                {...props}
              />}
          />
          <Route exact={true} path="/about-me"
          render={(props) =>
            <AboutMe
              {...props}
            />}
          />
          <Route exact={true} path="/portraits"
            render={(props) =>
              <Portraits
                {...props}
              />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
