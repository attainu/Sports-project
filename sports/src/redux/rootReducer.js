import { combineReducers } from "redux";
import allSportsReducer from "./reducers/allSportsReducer";
import userSelectionReducer from "./reducers/userSelectionReducer";
import allLeagReducer from "./reducers/allLeagueReducer";
import singleLeagueReducer from "./reducers/singleLeagueReducer";

const rootReducer = combineReducers({
  allSportsState: allSportsReducer,
  userSelectionState: userSelectionReducer,
  allLeagueState: allLeagReducer,
  singleLeagueState: singleLeagueReducer,
});

export default rootReducer;
