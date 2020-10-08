import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class Pagetitle extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="page-title">{this.props.title}</div>
    )
  }
}

export default withRouter(Pagetitle);
