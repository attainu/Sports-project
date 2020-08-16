import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleLeague } from "../../redux/actions/singleLeagueAction";
import Logo from "../../components/Logo/Logo";
class SingleLeague extends Component {
  componentDidMount() {
    this.props.getSingleLeague(this.props.match.params.leagueID);
  }
  render() {
    return this.props.fetchingLeague ? (
      <>
        <Logo />
        <div>loading</div>
      </>
    ) : (
      <>
        <Logo />
        <div>This is SingleLeague page {this.props.match.params.leagueID}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingLeague: state.singleLeagueState.fetchingSingleLeague,
  };
};

export default connect(mapStateToProps, { getSingleLeague })(SingleLeague);
