import React, { Component } from "react";
import Header from "../components/header.js"
import { withRouter } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import firebase from '../Firebase.js'

// var firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: 'rkp-gallery.firebaseapp.com',
//     storageBucket: 'rkp-gallery.firebaseapp.com'
//   };
//   firebase.initializeApp(firebaseConfig);
//
//   // Get a reference to the storage service, which is used to create references in your storage bucket
//   var storage = firebase.storage();
//   var storageRef = storage.ref();
//   var imagesRef = storageRef.child('images');

class Home extends Component {
  state = { photoUrls: [] };

  getHomePhotos = async() => {
      let storage = firebase.storage();
      let storageRef = storage.ref();
      let homeStorageRef = storageRef.child('images/home');

      try {
        const homeStorageRefList = await homeStorageRef.listAll();

        homeStorageRefList.items.forEach(imageRef => {
          this.downloadImage(imageRef.location.path_, storageRef);
        })

      } catch (err) {
        console.warn(err);
      }
  }

  downloadImage = async (imageRef,storageRef) => {
    console.log('downloading ' + imageRef);
    try {
      const downloadUrl = await storageRef.child(imageRef).getDownloadURL();
      this.setState({
        photoUrls: [ ...this.state.photoUrls, downloadUrl ].sort()
      });

    } catch (err) {
      console.warn(err)
    }
  };

  componentDidMount(){
    this.getHomePhotos();
  }

  render(){
    return(
      <div>
        <Header/>
        <div className="body">
        {this.state.photoUrls.length &&
        <Carousel
          infiniteLoop useKeyboardArrows autoPlay dynamicHeight centerMode centerSlidePercentage={77} interval={2000}>
          {this.state.photoUrls.map(url => {
            return (
              <div>
                <img src={url}/>
              </div>
            )
          })}
          </Carousel>
        }
        </div>
      </div>
    )
  }
}

export default withRouter(Home);
