import React, { Component } from "react";
import "./TeamCard.css";
import { withRouter } from "react-router-dom";
class TeamCard extends Component {
  // handelClick = () => {
  //   this.props.history.push(`/singleTeam/${this.props.TeamID}`);
  // };
  render() {
    return (
      <div className="TeamCard">
        <div className="TeamImage">
          <img src={this.props.img} alt="" />
        </div>
        <div className="TeamTitle">{this.props.title}</div>
      </div>
    );
  }
}

export default withRouter(TeamCard);
