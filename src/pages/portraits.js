import React, { Component, useState, useCallback } from "react";
import Header from "../components/header.js";
import { withRouter } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pagetitle from "../components/pagetitle.js";
import Gallery from 'react-photo-gallery';


class Portraits extends Component {
render(){
    const photos = [
      {
        src: process.env.PUBLIC_URL+'/images/priscilla/pri1.jpg',
        width: 3,
        height: 4
      },{
        src: process.env.PUBLIC_URL+'/images/home/home1.jpg',
        width: 4,
        height: 3
      },{
        src: process.env.PUBLIC_URL+'/images/priscilla/pri3.jpg',
        width: 4,
        height: 3
      },
      {
      src: process.env.PUBLIC_URL+'/images/home/home2.jpg',
      width: 4,
      height: 3
    },{
      src: process.env.PUBLIC_URL+'/images/home/home2.jpg',
      width: 4,
      height: 3
    }
    ];

    return(
      <div>
        <Header/>
        <Pagetitle title="portraits"/>
        <div class="body">
          <Gallery photos={photos}/>
        </div>
      </div>
    )
}
}

export default withRouter(Portraits);
