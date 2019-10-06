import React, { Component } from "react";
import Header from "../components/header.js"
import { withRouter } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Home extends Component {


  render(){
    return(
      <div>
        <Header/>
        <div class="body">
        <Carousel>
                <div>
                    <img src={process.env.PUBLIC_URL+"/images/home/home1.jpg"} />
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL+"/images/home/home2.jpg"} />
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL+"/images/home/home1.jpg"}/>
                </div>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default withRouter(Home);
