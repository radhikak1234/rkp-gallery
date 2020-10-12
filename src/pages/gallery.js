import React, { Component } from "react";
import Header from "../components/header.js"
import Pagetitle from "../components/pagetitle.js";
import { withRouter } from "react-router-dom";

function GalleryItem(props){
  return (
    <div className="gallery-item">
      <a href={props.albumRoute}>
        <img className="image-thumbnail" src={process.env.PUBLIC_URL+props.albumThumbnail}></img>
      </a>
      <div className="centered">{props.albumName}</div>
    </div>
  );
}

class Gallery extends Component {
  state = {galleryItemData: [{route:"/couples",thumbnail:"/images/couples/couple3.jpg",name:"C O U P L E S"},{route:"/",thumbnail:"/images/home/home2.jpg",name:"F A M I L I E S"},{route:"/about-me",thumbnail:"/images/couples/couple2.jpg",name:"D A N C E R S"}]}

  render(){
    return(
      <div className="body">
      <Header/>
      <Pagetitle title="gallery"/>
      <div className="gallery-container">
      {this.state.galleryItemData.map((album,index)=>{
          return (
          <GalleryItem
            albumRoute={album.route}
            albumThumbnail={album.thumbnail}
            albumName={album.name}
            />
          );
        })}
      </div>
    </div>
  )}
}

export default withRouter(Gallery);
