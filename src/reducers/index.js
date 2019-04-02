import {combineReducers} from 'redux'

import article from './articleReducer'
import subject from './subjectReducer'

export default combineReducers({
    article,
    subject
})