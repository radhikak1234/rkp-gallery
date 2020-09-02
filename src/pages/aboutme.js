import React, { Component } from "react";
import Header from "../components/header.js";
import { withRouter } from "react-router-dom";
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-grid-gallery';

const images = [{ src: process.env.PUBLIC_URL+"/images/home/home1.jpg", src: process.env.PUBLIC_URL+"/images/home/home2.jpg" }];

const IMAGES1 =
[{
        src: process.env.PUBLIC_URL+"/images/home/home1.jpg",
        thumbnail: process.env.PUBLIC_URL+"/images/home/home1.jpg",
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: process.env.PUBLIC_URL+"/images/home/home2.jpg",
        thumbnail: process.env.PUBLIC_URL+"/images/home/home2.jpg",
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

class AboutMe extends Component {
  state = { modalIsOpen: false }
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  }

  render(){
    const { modalIsOpen } = this.state;

    return(
      <div>
        <Header/>
        <div className="body">
          <div className="text-box">
              <p> Hi, I'm Radhika and I love <i>love</i>.</p>
              <p> This is what made me fall in love with photography - by allowing me to be a fly on the wall in my clients' most intimate moments,
              in which I get to witness love (through my lenses) on the widest spectrum. Whether it's love for a person, love for a passion, love for a family,
              or an organization - I'm here to capture it for you. I pride myself in ensuring you feel natural in front of the camera - like I'm not even there!
              I make sure to get to know my clients first, and hear their love story. I want to feel like your old friend during the shoot, so that I can capture
              you in your truest form.</p>

              <p> A little bit about me: I started photographing in 2011 purely as passion. It turned into a side business towards the end of my college years where I would photograph dancers and graduates! I moved to New York City and started photographing anything and everything. My absolute favorite things to photograph is any manifestation of love. I pour my heart into taking and editing your photos. It is the one thing in life I become a perfectionist about and I will do everything in my power to make my client happy with their keepsakes.</p>
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
          <Gallery
            images={IMAGES1}
            enableImageSelection={false}
            />
          </div>
      </div>
    )
  }
}

export default withRouter(AboutMe);
