import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class Header extends Component {
  constructor(props){
    super(props);

  }

  goHome(e){
    console.log("before");
    this.props.history.push('/');
    console.log("after");
  }

  goAboutMe(e){
    this.props.history.push('/about-me')
  }
  goPortraits(e){
    this.props.history.push('/portraits')
  }


  render(){
    return(
      <div className="header-fixed">
        <div>
          <img onClick={(e) => this.goHome(e)} className="logo-black" src={process.env.PUBLIC_URL+"/logo/rkp_BLACK.png"}></img>
        </div>
          <div className="centered-nav">
            <a onClick={(e) => this.goHome(e)} className="border-box font-raleway">RADHIKA K PHOTOGRAPHY</a>
          </div>
          <div className="col-sm-11 right-nav">
            <a className="float-right" onClick={(e) => this.goAboutMe(e)}>ABOUT ME</a>
            <a class="float-right" onClick={(e) => this.goPortraits(e)}>PORTRAITS</a>
          </div>

      </div>
    )
  }
}

export default withRouter(Header);
