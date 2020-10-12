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
  state = {photos: []};

  getHomePhotos = () => {
      let storage = firebase.storage();
      let storageRef = storage.ref();
      let homeStorageRef = storageRef.child('images/home');
      homeStorageRef.listAll().then(result => {
        result.items.forEach(imageRef => {
        console.log(imageRef.location.path_);
        this.downloadImage(imageRef.location.path_,storageRef);
      });
    }).catch(error => {
      // Handle any errors
      console.log(error);
    });
  }

  downloadImage = (imageRef,storageRef) => {
    console.log('downloading'+imageRef);
    storageRef.child(imageRef).getDownloadURL().then(url=> {
      let photos = this.state.photos;
      photos.push(<div>
          <img src={url}/>
          </div>
      );
      this.setState({photos:photos});
      console.log(photos);
      return url;
    }).catch(error => {
      console.log(error);
    });
  };

  componentDidMount(){
    this.getHomePhotos();
  }

  render(){

    return(
      <div>
        <Header/>
        <div className="body">
        {this.state.photos.length > 12 &&
        <Carousel
          infiniteLoop useKeyboardArrows autoPlay dynamicHeight centerMode centerSlidePercentage={77} interval={2000}>
          {this.state.photos}
          </Carousel>
        }
        </div>
      </div>
    )
  }
}

export default withRouter(Home);
