import { NEWS, FETCHING_NEWS } from "../actionTypes";
import axios from "axios";
import { NEWS_BASE_URL, NEWS_API_KEY } from "../../config";
export const setNews = (data) => ({
  type: NEWS,
  data,
});

const fetchingNews = () => ({
  type: FETCHING_NEWS,
});

export const getNews = (query = "sport") => async (dispatch) => {
  try {
    dispatch(fetchingNews());
    const { data } = await axios.get(
      `${NEWS_BASE_URL}?q=${query}&apiKey=${NEWS_API_KEY}`
    );
    dispatch(setNews(data.articles));
  } catch (error) {
    alert(
      `There is some technical problem please inform at: lakshaysaini2013@gmail.com ${error}`
    );
  } finally {
    dispatch(fetchingNews());
  }
};
