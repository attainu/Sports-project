import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleLeague } from "../../redux/actions/singleLeagueAction";
import Logo from "../../components/Logo/Logo";
import Default from "../../assets/img/default.jpg";
import "./SingleLeague.css";
import TeamCard from "../../components/TeamCard/TeamCard";
import EventList from "../../components/EventList/EventList";
import { Link } from "react-router-dom";
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
          <div className="SocialIcon">
            {this.props.singleLeague[0].strFacebook !== "" ? (
              <a
                href={`http://${this.props.singleLeague[0].strFacebook}`}
                target="_blank"
              >
                <img
                  src="https://www.thesportsdb.com/images/icons/facebook_128.png"
                  alt=""
                  className="SocialIcon__btn"
                />
              </a>
            ) : null}
            {this.props.singleLeague[0].strTwitter !== "" ? (
              <a
                href={`https://${this.props.singleLeague[0].strTwitter}`}
                target="_blank"
              >
                <img
                  src="https://www.thesportsdb.com/images/icons/twitter_128.png"
                  alt=""
                  className="SocialIcon__btn"
                />
              </a>
            ) : null}
            {this.props.singleLeague[0].strWebsite !== "" ? (
              <a
                href={`http://${this.props.singleLeague[0].strWebsite}`}
                target="_blank"
              >
                <img
                  src="https://www.thesportsdb.com/images/icons/webpage_128.png"
                  alt=""
                  className="SocialIcon__btn"
                />
              </a>
            ) : null}
            {this.props.singleLeague[0].strYoutube !== "" ? (
              <a
                href={`https://${this.props.singleLeague[0].strYoutube}`}
                target="_blank"
              >
                <img
                  src="https://www.thesportsdb.com/images/icons/youtube_128.png"
                  alt=""
                  className="SocialIcon__btn"
                />
              </a>
            ) : null}
          </div>
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
            {!this.props.upcomingEvent ? (
              <p>No Events</p>
            ) : (
              <div>
                {this.props.upcomingEvent.map((item) => (
                  <EventList
                    key={item.idEvent}
                    homeTeamId={item.idHomeTeam}
                    awayTeamId={item.idAwayTeam}
                    eventData={item.dateEvent}
                    homeTeam={item.strHomeTeam}
                    awayTeam={item.strAwayTeam}
                    homeScore={item.intHomeScore}
                    awayScore={item.intAwayScore}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="SLeague__Desc--last">
            <p className="SLeague__Desc--lastH"> Last Events</p>
            {!this.props.lastEvent ? (
              <p>No Events</p>
            ) : (
              <div>
                {this.props.lastEvent.map((item) => (
                  <EventList
                    key={item.idEvent}
                    homeTeamId={item.idHomeTeam}
                    awayTeamId={item.idAwayTeam}
                    eventData={item.dateEvent}
                    homeTeam={item.strHomeTeam}
                    awayTeam={item.strAwayTeam}
                    homeScore={item.intHomeScore}
                    awayScore={item.intAwayScore}
                  />
                ))}
              </div>
            )}
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingLeague: state.singleLeagueState.fetchingSingleLeague,
    singleLeague: state.singleLeagueState.singleLeague,
    upcomingEvent: state.singleLeagueState.singleLeagueUpcomingEvent,
    lastEvent: state.singleLeagueState.singleLeagueLastEvent,
    teams: state.singleLeagueState.singleLeagueTeam,
  };
};

export default connect(mapStateToProps, { getSingleLeague })(SingleLeague);
