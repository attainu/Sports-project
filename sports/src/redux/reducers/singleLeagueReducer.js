import {
  FETCH_SINGLE_LEAGUE,
  SINGLE_LEAGUE,
  SINGLE_LEAGUE_TEAM,
  SINGLE_LEAGUE_LAST_EVENT,
  SINGLE_LEAGUE_UPCOMING_EVENT,
} from "../actionTypes";

const initialState = {
  singleLegaue: "",
  singleLegaueTeam: "",
  singleLegaueLastEvent: "",
  singleLegaueUpcomingEvent: "",
  fetchingSingleLeague: false,
};

const singleLegaueReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case SINGLE_LEAGUE:
      return { ...state, singleLegaue: data };
    case SINGLE_LEAGUE_TEAM:
      return { ...state, singleLegaueTeam: data };
    case SINGLE_LEAGUE_LAST_EVENT:
      return { ...state, singleLegaueLastEvent: data };
    case SINGLE_LEAGUE_UPCOMING_EVENT:
      return { ...state, singleLegaueUpcomingEvent: data };
    case FETCH_SINGLE_LEAGUE:
      return { ...state, fetchingSingleLeague: !state.fetchingSingleLeague };
    default:
      return state;
  }
};

export default singleLegaueReducer;
