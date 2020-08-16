import { combineReducers } from "redux";
import allSportsReducer from "./reducers/allSportsReducer";
import userSelectionReducer from "./reducers/userSelectionReducer";
import allCountryReducer from "./reducers/allCountryReducer";

const rootReducer = combineReducers({
  allSportsState: allSportsReducer,
  userSelectionState: userSelectionReducer,
  allCountryState: allCountryReducer,
});

export default rootReducer;
