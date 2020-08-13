import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSports } from "../../redux/actions/allSportsAction";
class Home extends Component {
  componentDidMount() {
    this.props.getAllSports();
  }
  render() {
    return !this.props.allSports ? (
      <div>Loading</div>
    ) : (
      <div>Data loaded{JSON.stringify(this.props.allSports)}</div>
    );
  }
}
const mapStateToProps = (state) => ({
  allSports: state.allSportsState.allSports,
});

export default connect(mapStateToProps, { getAllSports })(Home);
