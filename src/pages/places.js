import React, { Component } from "react";
import Header from "../components/header.js";
import Pagetitle from "../components/pagetitle.js";
import { withRouter } from "react-router-dom";
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';



function Infobox(props) {
  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
  }

  if (!props.displayInfoBox) {
    return null;
  }
  return (
    <InfoWindow
      position={props.position}
      onCloseClick={props.onCloseClick}
    >
      <div style={divStyle}>
        <h6>{props.locationLabel}</h6>
        {props.albumData.map((album,index)=>{
          return (<p key={index+1}><a href={album.url}>{album.label}</a></p>)
        })}
      </div>
    </InfoWindow>
  );
}

class Places extends Component {
  state = {
    modalIsOpen: false,
    markerData: [
        {
          displayInfoBox:false,
          position: {
            lat: 41.6,
            lng: -74.4
          },
          locationLabel:'Minnewaska State Park',
          albumData: [
            {label:'Sanjana and Pious | Engagement Shoot',url:'/couples'},
            {label:'Alex and James | Engagement Shoot',url:'/couples'}]
        },
        {
          displayInfoBox:true,
          position: {
            lat: 41.7,
            lng: -75.4
          },
          locationLabel:'Awosta Falls',
          albumData: [
            {label:'Meena and Madhu| Family Shoot',url:'/home'}
          ]
        }
    ]
   };
  toggleModal = () => {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }
  openInfoWindow = index => {
    var markers = this.state.markerData;
    markers[index].displayInfoBox = !markers[index].displayInfoBox
    this.setState({markers:markers});
  }

  render(){
    var containerStyle = {
      width: '800px',
      height: '400px'
    };

    var center = {
      lat: 41.669963,
      lng: -74.361649
    };
    const API_KEY = process.env.REACT_APP_API_KEY;

      return(
        <div className="body">
          <Header/>
          <Pagetitle title="places"/>
            <div className="text-box"> This map displays some of the locations of where I've photographed events/shoots. It can give you a great idea of where to do that surpise proposal on a dreamy mountain top, the best places in the city for a couples session, or a relaxed lush park for your family session. Each marker opens an informational window that will link you to the album(s) to see the photos! </div>
            <div className="mapContainer">
              <LoadScript
                googleMapsApiKey={API_KEY}
                >
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                >
                {this.state.markerData.map((marker,index) => {
                      return (
                        <div key={index+1}>
                          <Marker
                            onClick={() => this.openInfoWindow(index)}
                            position={marker.position}
                            id="marker"
                          />
                          <Infobox
                            onCloseClick = {() => this.openInfoWindow(index)}
                            displayInfoBox={marker.displayInfoBox}
                            locationLabel={marker.locationLabel}
                            albumData={marker.albumData}
                            position={marker.position}
                           />
                        </div>
                )})}
                </GoogleMap>
              </LoadScript>
            </div>
        </div>
      )
  }
}

export default withRouter(Places);
