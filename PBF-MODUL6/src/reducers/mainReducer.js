import { combineReducers } from 'redux'
import todos from './TodoReducer'
import visibilityFilter from './filterReducer'
export default combineReducers({
 todos,
 visibilityFilter
})
