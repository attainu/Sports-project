import React from "react";
import { Link } from "react-router-dom";
import "./EventList.css";

const EventList = ({
  homeTeamId,
  awayTeamId,
  eventData,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
}) => {
  return (
    <div className="Event">
      <div className="Event__date">
        {eventData.split("-").reverse().join("-")}
      </div>
      <div className="Event__team">
        <div className="Event__team--home">
          <Link to={`/singleTeam/${homeTeamId}`}> {homeTeam}</Link>
        </div>
        <div className="Event__team--score">
          <p>{homeScore}</p>
          <p style={{ padding: "0px 10px" }}>-</p>
          <p>{awayScore}</p>
        </div>
        <div className="Event__team--away">
          <Link to={`/singleTeam/${awayTeamId}`}> {awayTeam}</Link>
        </div>
      </div>
    </div>
  );
};

export default EventList;
