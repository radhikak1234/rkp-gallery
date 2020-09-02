'use strict';
import React, { Component } from "react";
import Header from "../components/header.js"
import { withRouter } from "react-router-dom";
import Gallery from 'react-grid-gallery';
const photoConfigs = require("../settings/couples.js")

class Couples extends Component {

  goHome(e){
    this.props.history.push('/');
  }

  render(){
    var photos = photoConfigs.couples;

    return(
      <div className="body">
        <Header/>
        <div className="page-title">couples</div>
        <Gallery
          images={photos}
          enableImageSelection={false}
          />
      </div>
  )}
}

export default withRouter(Couples);
