import React, { Component } from "react";
import Header from "../components/header.js"
import { withRouter } from "react-router-dom";

class Home extends Component {
  render(){
    return(
      <div>
        <Header/>
      </div>
    )
  }
}

export default withRouter(Home);
