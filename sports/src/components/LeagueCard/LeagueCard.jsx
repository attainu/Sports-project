import React, { Component } from "react";
import "./LeagueCard.css";
class LeagueCard extends Component {
  render() {
    return (
      <div className="LeagueCard">
        <div className="LeagueImage">
          <img src={this.props.img} alt="" />
        </div>
        <div className="LeagueTitle">{this.props.title}</div>
      </div>
    );
  }
}

export default LeagueCard;
