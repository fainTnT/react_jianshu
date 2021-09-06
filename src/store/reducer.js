import {combineReducers} from 'redux'
import {reducer as headerReducer} from '../common/header/store'

// ºÏ²¢Reducer
const reducer = combineReducers({
  header:headerReducer
})
export default reducer;