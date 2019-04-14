import axios from "axios";

export function fetchArticles() {
  return function(dispatch) {
    axios
      .get("https://brunomanarin.github.io/api/articles.json")
      .then(response => {
        dispatch({ type: "FETCH_ARTICLE_FULFILLED", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_ARTICLE_REJECTED", payload: err });
      });
  };
}
// DISABLE ADBLOCK SO THE FETCHING SERVICE CAN WORK!
