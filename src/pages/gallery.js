import React, { Component } from "react";
import Header from "../components/header.js"
import { withRouter } from "react-router-dom";


class Gallery extends Component {

  goHome(e){
    this.props.history.push('/');
  }
  goCouples(e){
    this.props.history.push('/couples');
  }
  render(){
    return(
      <div className="body">
      <Header/>
      <div className="gallery-container">
        <div className="gallery-item">
          <img onClick={(e) => this.goCouples(e)} className="image-thumbnail" src={process.env.PUBLIC_URL+"/images/couples/couple3.jpg"}></img>
          <div class="centered">C O U P L E S</div>
        </div>
        <div className="gallery-item">
          <img onClick={(e) => this.goHome(e)} className="image-thumbnail" src={process.env.PUBLIC_URL+"/images/home/home2.jpg"}></img>
          <div class="centered">F A M I L I E S</div>
        </div>
        <div className="gallery-item">
          <img onClick={(e) => this.goHome(e)} className="image-thumbnail" src={process.env.PUBLIC_URL+"/images/couples/couple3.jpg"}></img>
          <div class="centered">D A N C E R S</div>
        </div>
        <div className="gallery-item">
          <img onClick={(e) => this.goHome(e)} className="image-thumbnail" src={process.env.PUBLIC_URL+"/images/couples/couple3.jpg"}></img>
        </div>
      </div>
    </div>
  )}
}

export default withRouter(Gallery);
