import { combineReducers } from "redux";
import allSportsReducer from "./reducers/allSportsReducer";
import userSelectionReducer from "./reducers/userSelectionReducer";
import allLeagReducer from "./reducers/allLeagueReducer";

const rootReducer = combineReducers({
  allSportsState: allSportsReducer,
  userSelectionState: userSelectionReducer,
  allLeagueState: allLeagReducer,
});

export default rootReducer;
