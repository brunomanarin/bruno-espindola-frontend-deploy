const initialState = {
  articles: {},
  fetching: false,
  fetched: false,
  errorOcurred: false,
  error: null,
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ARTICLE': {
      return { ...state, fetching: true }
    }
    case 'FETCH_ARTICLE_REJECTED': {
      return { ...state, fething: false, errorOcurred: true, error: action.payload }
    }
    case 'FETCH_ARTICLE_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        articles: action.payload,
      }
    }
    default:
      return state
  }
}
