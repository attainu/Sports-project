import React, { Component } from "react";
import Loader from "../../components/Loader/Loader";

class SingleTeam extends Component {
  render() {
    return (
      <>
        <div>
          This is SingleTeam page {this.props.match.params.teamID}
        </div>
        <Loader />
      </>
    )
  }
}

export default SingleTeam;
