export default function reducer(
  state = {
    subjects: [],
    fetching: false,
    fetched: false,
    errorOcurred: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case 'FETCH_SUBJECTS': {
      return { ...state, fetching: true }
    }
    case 'FETCH_SUBJECTS_REJECTED': {
      return { ...state, fething: false, errorOcurred: true, error: action.payload }
    }
    case 'FETCH_SUBJECTS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        subjects: action.payload.subjects,
        color: action.payload.color,
      }
    }
    default:
      return state
  }
}
