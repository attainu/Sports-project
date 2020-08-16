import { COUNTRY_LIST, FETCHING_ALL_COUNTRY } from "../actionTypes";

const initialState = {
  allCountry: null,
  fetchingCountry: false,
};

const allCountryReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case COUNTRY_LIST:
      return { ...state, allCountry: data };
    case FETCHING_ALL_COUNTRY:
      return { ...state, fetchingCountry: !state.fetchingCountry };
    default:
      return state;
  }
};

export default allCountryReducer;
