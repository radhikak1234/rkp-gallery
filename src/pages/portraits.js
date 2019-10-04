import React, { Component } from "react";
import Header from "../components/header.js";
import { withRouter } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class Portraits extends Component {
  render(){
    const photos = [

      {
        original: process.env.PUBLIC_URL+'/images/priscilla/pri1.jpg',
        thumbnail: process.env.PUBLIC_URL+'/images/priscilla/pri1.jpg',
      }
    ];

    return(
      <div>
        <Header/>
        <div class="body">
        <Carousel>
                <div>
                    <img src={process.env.PUBLIC_URL+"/images/priscilla/pri3.jpg"} />
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL+"/images/priscilla/pri3.jpg"} />
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL+"/images/priscilla/pri3.jpg"}/>
                </div>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default withRouter(Portraits);
