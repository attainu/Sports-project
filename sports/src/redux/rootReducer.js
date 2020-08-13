import { combineReducers } from "redux";
import allSportsReducer from "./reducers/allSportsReducer";

const rootReducer = combineReducers({ allSportsState: allSportsReducer });

export default rootReducer;
