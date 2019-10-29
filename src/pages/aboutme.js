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
        <div class="body">
          <div className="text-box">
              <p> Hi, I'm Radhika Kshirsagar and this is the lens through which I see the world.</p>
              <p>Growing up, I've often found myself drawn to the aesthetic nature of moments, people, and things around us. I soon realized that without a camera, these things that jumped out at me would remain fleeting. I worked my first job in 2011 to buy myself my first Canon DSLR. Since then, my constantly updating collection of lenses and bodies have never left my side. In the past 8 years, I've been fortunate to share my passion with friends, families, and strangers who have become my clients. There is no greater feeling I've felt than capturing timeless photos while my clients live their most precious moments.</p>
              <p>If you're interested in booking me in the NY/NJ area, I've done a variety of shoots including:</p>
              <ul>

                <li>Proposal & Engagements</li>

                <li>Birthdays/Celebrations</li>

                <li>Anniversary Parties</li>

                <li>Prom/Graduation Shoots</li>

                <li>Dance Competitions (Fusion, Raas, Hip Hop)</li>

                <li>Solo and Group Shoots, Professional Headshots</li>

                <li>Headshots for Creatives</li>
              
              </ul>
              <p>However, if what you're looking for isn't on this list, I'm always open to stepping out of my comfort zone and put everything I have into capturing your special moments.</p>
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
