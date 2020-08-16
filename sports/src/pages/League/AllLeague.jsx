import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllLeague,
  setAllLeague,
} from "../../redux/actions/allLeagueAction";
import LeagueCard from "../../components/LeagueCard/LeagueCard";
import "./AllLeague.css";
import Logo from "../../components/Logo/Logo";
class AllLeague extends Component {
  componentDidMount() {
    if (this.props.sportName !== null && this.props.countryName !== null) {
      this.props.getAllLeague(this.props.sportName, this.props.countryName);
    }
  }
  componentWillUnmount() {
    this.props.setAllLeague("");
  }
  render() {
    return this.props.fetchingLeague ? (
      <>
        <Logo />
        <div>loading</div>
      </>
    ) : this.props.allLeague === "" ? (
      <>
        <Logo />
        <div>Hye I think you are on wrong page </div>
      </>
    ) : this.props.allLeague === null ? (
      <div>Sorry we dont have any data for this chosse other country</div>
    ) : (
      <>
        <Logo />
        <div className="LeagueHead">
          <p className="LeagueHead__sport">{this.props.sportName}</p>
          <p className="LeagueHead__country"> {this.props.countryName}</p>
        </div>

        <div className="LeagueCard__Wapper">
          {this.props.allLeague.map((item) => (
            <LeagueCard img={item.strBadge} title={item.strLeague} />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allLeague: state.allLeagueState.allLeague,
    fetchingLeague: state.allLeagueState.fetchingLeague,
    sportName: state.userSelectionState.selectedSport,
    countryName: state.userSelectionState.selectedCountry,
  };
};

export default connect(mapStateToProps, { getAllLeague, setAllLeague })(
  AllLeague
);
