import React, { Component } from "react";
import Header from "../components/header.js";
import Pagetitle from "../components/pagetitle.js";
import { withRouter } from "react-router-dom";
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-grid-gallery';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';


const page = 'aboutme';
const photoCount = 5;
var images = [];

for (let i = 1; i <= photoCount; i++){
  var imgPath = process.env.PUBLIC_URL+"/images/"+page+"/"+page+i+".jpg";
  images.push({
    src: imgPath,
    thumbnail: imgPath
  }
  );
}

class AboutMe extends Component {

  render(){
    return(
      <div>
        <Header/>
        <div className="body">
          <Pagetitle title="about the photographer"/>
          <div className ="about-me-container">
            <Gallery
              images={images}
              enableImageSelection={false}
            />
            <div className="text-box">
                <p> Hi, I'm Radhika and I love <i>love</i>.</p>
                <p> This is what made me fall in love with photography - by allowing me to be a fly on the wall in my clients' most intimate moments,
                in which I get to witness love (through my lenses) on the widest spectrum. Whether it's love for a person, love for a passion, love for a family,
                or an organization - I'm here to capture it for you. I pride myself in ensuring you feel natural in front of the camera - like I'm not even there!
                I make sure to get to know my clients first, and hear their love story. I want to feel like your old friend during the shoot, so that I can capture
                you in your truest form.</p>

                <p> A little bit about me: I started photographing in 2011 purely as passion. It turned into a side business towards the end of my college years where I would photograph dancers and graduates!
                I moved to New York City and started photographing anything and everything. My absolute favorite subject to photograph are people (and hopefully you!). I pour my heart into taking and editing your photos. It is the one thing in life I become a perfectionist about and I will do everything in my power to make my client happy with their keepsakes.</p>
                <p>If you're interested in booking me in the NY/NJ area, I've done a variety of shoots including:</p>
                <ul>

                  <li>Proposal & Engagements</li>
                  <li>Birthdays & Celebrations</li>
                  <li>Individual/Family Portraits</li>
                  <li>Prom & Graduation Shoots</li>
                  <li>Dance Competitions (Fusion, Raas, Hip Hop)</li>
                  <li>Professional Headshots</li>

                </ul>
                <p>However, if what you're looking for isn't on this list, I'm always open to stepping out of my comfort zone and putting everything I have into capturing your special moments.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(AboutMe);
