import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu'
import { withRouter } from "react-router-dom";


class Header extends Component {
  constructor(props){
    super(props);

  }

  goHome(e){
    this.props.history.push('/');
  }

  goAboutMe(e){
    this.props.history.push('/about-me')
  }
  goPortraits(e){
    this.props.history.push('/portraits')
  }
  goGallery(e){
    this.props.history.push('/gallery')
  }


  render(){
    return(
      <nav className="header-fixed">
      <div className="rkpBox right">
        <img onClick={(e) => this.goHome(e)} className="vertical-stack logo-black" src={process.env.PUBLIC_URL+"/logo/rkp_BLACK.png"}></img>
      </div>
      <div className="rkpBox center">
        <a onClick={(e) => this.goHome(e)} className="col-xs-12 vertical-stack border-box font-raleway">RADHIKA K PHOTOGRAPHY</a>
      </div>
      <div id="outer-container">
        <Menu >
          <a id="home" className="menu-item" href="/">HOME</a>
          <a id="about-me" className="menu-item" href="/about-me">ABOUT ME</a>
          <a id="gallery" className="menu-item" href="/gallery">GALLERY</a>
          <a id="portraits" className="menu-item" href="/portraits">PORTRAITS</a>
        </Menu>
      </div>


      </nav>

    )
  }
}

export default withRouter(Header);
