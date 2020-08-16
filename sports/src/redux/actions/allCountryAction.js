import axios from "axios";
import { API_KEY } from "../../config";
import { COUNTRY_LIST, FETCHING_ALL_COUNTRY } from "../actionTypes";
const countryList = (data) => ({
  type: COUNTRY_LIST,
  data,
});
const fetchingAllCountry = () => ({
  type: FETCHING_ALL_COUNTRY,
});

export const getAllCountry = () => async (dispatch) => {
  try {
    dispatch(fetchingAllCountry());
    const { data } = await axios.get(`${API_KEY}/all_countries.php`);
    dispatch(countryList(data.countries));
  } catch (error) {
    alert(
      `There is some technical problem please inform at: lakshaysaini2013@gmail.com ${error}`
    );
  } finally {
    dispatch(fetchingAllCountry());
  }
};
