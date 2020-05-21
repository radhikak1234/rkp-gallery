import React, { Component } from "react";
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
      <nav>
      <ul className="header-fixed">
          <img onClick={(e) => this.goHome(e)} className="vertical-stack logo-black" src={process.env.PUBLIC_URL+"/logo/rkp_BLACK.png"}></img>
          <li className="rkpBox vertical-stack">
            <a onClick={(e) => this.goHome(e)} className="vertical-stack border-box font-raleway">RADHIKA K PHOTOGRAPHY</a>
          </li>
          <li className="menuContainer">
            <div>
              <a className="menuItem vertical-stack" onClick={(e) => this.goAboutMe(e)}>ABOUT ME</a>
            </div>
            <div>
                <a className="menuItem vertical-stack" onClick={(e) => this.goPortraits(e)}>PORTRAITS</a>
            </div><div>
                <a className="menuItem vertical-stack" onClick={(e) => this.goGallery(e)}>GALLERY</a>
            </div>
          </li>

      </ul>
      </nav>
    )
  }
}

export default withRouter(Header);
