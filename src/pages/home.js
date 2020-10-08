import React, { Component } from "react";
import Header from "../components/header.js"
import { withRouter } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class Home extends Component {


  render(){
    var photoList = [];
    for (var i = 1; i <= 13; i++){
      photoList.push(<div>
          <img src={process.env.PUBLIC_URL+"/images/home/home"+i+".jpg"} />
      </div>);
    }

    return(
      <div>
        <Header/>
        <div class="body">
        <Carousel
          infiniteLoop useKeyboardArrows autoPlay dynamicHeight centerMode centerSlidePercentage={77} interval={2000}>
          {photoList}
          </Carousel>
        </div>
      </div>
    )
  }
}

export default withRouter(Home);
