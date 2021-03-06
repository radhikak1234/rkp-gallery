import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home.js"
import AboutMe from "./pages/aboutme.js"
import Places from "./pages/places.js"
import Gallery from "./pages/gallery.js"
import Couples from "./pages/couples.js"

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
          <Route exact={true} path="/places"
            render={(props) =>
              <Places
                {...props}
              />}
          />
          <Route exact={true} path="/gallery"
            render={(props) =>
              <Gallery
                {...props}
              />}
          />
          <Route exact={true} path="/couples"
            render={(props) =>
              <Couples
                {...props}
              />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
