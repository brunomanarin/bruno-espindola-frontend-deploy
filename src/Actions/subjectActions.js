import axios from "axios";

export function fetchSubjects() {
  return function(dispatch) {
    setTimeout(() => {
      axios
        .get("http://localhost:3001/subjects.json")
        .then(response => {
          dispatch({
            type: "FETCH_SUBJECTS_FULFILLED",
            payload: response.data
          });
        })
        .catch(err => {
          dispatch({ type: "FETCH_SUBJECTS_REJECTED", payload: err });
        });
    }, 3000);
  };
}
// DISABLE ADBLOCK SO THE FETCHING SERVICE CAN WORK!
