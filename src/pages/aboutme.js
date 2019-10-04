import React, { Component } from "react";
import Header from "../components/header.js";
import { withRouter } from "react-router-dom";

class AboutMe extends Component {
  render(){
    return(
      <div>
        <Header/>
        <p> Hi, I'm a photographer</p>
      </div>
    )
  }
}

export default withRouter(AboutMe);
