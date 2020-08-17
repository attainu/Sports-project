import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleLeague } from "../../redux/actions/singleLeagueAction";
import Logo from "../../components/Logo/Logo";
import Default from "../../assets/img/default.jpg";
import "./SingleLeague.css";
import TeamCard from "../../components/TeamCard/TeamCard";
class SingleLeague extends Component {
  componentDidMount() {
    this.props.getSingleLeague(this.props.match.params.leagueID);
  }
  render() {
    return this.props.singleLeague === null ? (
      <>
        <Logo />
        <div>
          Guys Please dont play with id either enter correct id or go to home
        </div>
      </>
    ) : this.props.fetchingSingleLeague === true ||
      this.props.singleLeague === "" ? (
      <>
        <Logo />
        <div>Loading</div>
      </>
    ) : (
      <>
        <div
          className="SLeague__head"
          style={{
            backgroundImage: `url(${
              this.props.singleLeague[0].strBanner || Default
            })`,
          }}
        >
          <Logo />
        </div>
        <div className="SLeague__Desc">
          <div className="SLeague__Desc--fd">
            <div className="SL__D--name">
              {this.props.singleLeague[0].strLeague}
            </div>
            <div className="SL__D--iH">
              <p className="SL__D--iH--CS">
                <span>Current Season:</span>
                {this.props.singleLeague[0].strCurrentSeason}
              </p>
              <p className="SL__D--iH--AN">
                <span>Alertnate Name:</span>
                {this.props.singleLeague[0].strLeagueAlternate}
              </p>
              <p className="SL__D--iH--SP">
                <span>Sport:</span>
                {this.props.singleLeague[0].strSport}
              </p>
            </div>
          </div>
          <div className="SLeague__Desc--poster">
            <div className="poster">
              <p>Poster:</p>
              <img
                src={this.props.singleLeague[0].strPoster || Default}
                alt=""
              />
            </div>
            <div className="badge">
              <p>Badge:</p>
              <img
                src={this.props.singleLeague[0].strBadge || Default}
                alt=""
              />
            </div>
            <div className="trophy">
              <p>Trophy:</p>
              <img
                src={this.props.singleLeague[0].strTrophy || Default}
                alt=""
              />
            </div>
          </div>
          <div className="SLeague__Desc--full">
            <p className="SLeague__Desc--fullH"> Description</p>
            <p className="SLeague__Desc--fullD">
              {this.props.singleLeague[0].strDescriptionEN}
            </p>
          </div>

          <div className="SLeague__Desc--up">
            <p className="SLeague__Desc--upH"> Upcoming Events</p>
            {!this.props.upcomingEvent ? <p>No Events</p> : <p>Loading</p>}
          </div>
          <div className="SLeague__Desc--last">
            <p className="SLeague__Desc--lastH"> Last Events</p>
            {!this.props.upcomingEvent ? <p>No Events</p> : <p>Loading</p>}
          </div>
          <div className="SLeague__Desc--teams">
            <p className="SLeague__Desc--teamsH"> Teams</p>
            <div
              className="SLeague__Desc--teamsC"
              style={{ display: "flex", flexFlow: "row wrap" }}
            >
              {!this.props.teams ? (
                <p>Team are not available</p>
              ) : (
                this.props.teams.map((item) => (
                  <TeamCard
                    key={item.idTeam}
                    teamID={item.idTeam}
                    img={item.strTeamBadge}
                    title={item.strCountry}
                  />
                ))
              )}
            </div>
          </div>
        </div>

        <div>This is SingleLeague page {this.props.match.params.leagueID}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingLeague: state.singleLeagueState.fetchingSingleLeague,
    singleLeague: state.singleLeagueState.singleLeague,
    upcomingEvent: state.singleLeagueState.singleLeagueUpcomingEvent,
    teams: state.singleLeagueState.singleLeagueTeam,
  };
};

export default connect(mapStateToProps, { getSingleLeague })(SingleLeague);
