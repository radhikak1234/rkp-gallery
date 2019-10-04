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
      <div className="row header-fixed">
        <div className="col-md-4">
          <img onClick={(e) => this.goHome(e)} className="logo-black" src={process.env.PUBLIC_URL+"/logo/rkp_BLACK.png"}></img>
        </div>
        <div className="menu-container row col-md-8">
          <div className="col-md-8 header-name">
            <p onClick={(e) => this.goHome(e)}>Radhika K Photography</p>
          </div>
          <div className="col-md-2">
            <p onClick={(e) => this.goAboutMe(e)}> About me</p>
          </div>
          <div className="col-md-2">
            <p onClick={(e) => this.goPortraits(e)}>Portraits</p>
          </div>

        </div>

      </div>
    )
  }
}

export default withRouter(Header);
