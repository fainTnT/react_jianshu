import {combineReducers} from 'redux'
import {reducer as headerReducer} from '../common/header/store'

// ??Reducer
const reducer = combineReducers({
  header:headerReducer
})
export default reducer;