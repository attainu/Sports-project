import React, { Component } from "react";

class SingleTeam extends Component {
  render() {
    return <div>This is SingleTeam page {this.props.match.params.teamID}</div>;
  }
}

export default SingleTeam;
