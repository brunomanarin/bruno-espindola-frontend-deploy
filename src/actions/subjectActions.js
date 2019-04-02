import axios from "axios";

export function fetchSubjects(){
    
    return function(dispatch) {
        setTimeout(function(){;
        axios.get('https://brunomanarin.github.io/api/subjects.json')
            .then((response) => {
                dispatch({type:"FETCH_SUBJECTS_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_SUBJECTS_REJECTED", payload: err})
            })}, 3000);
    }
}
// DISABLE ADBLOCK SO THE FETCHING SERVICE CAN WORK!