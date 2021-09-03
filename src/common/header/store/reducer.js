import * as actionType from './const.js'
// import {FromJS} from 'immutable'
// const defaultState = FromJS({
//   focused:false
// });
const defaultState = {
  focused:false,
  list:[]
}
export default (state = defaultState,action) => {
  if(action.type === actionType.SEARCH_FOCUS){
    //state.focused = true
    return {
      focused:true,
      list:state.list
    }
  }
  if(action.type === actionType.SEARCH_BLUR){
    //state.focused = false
    console.log(state)
    return {
      focused:false,
      list:state.list
    }
  }
  if(action.type === actionType.CHANGE_LIST){
    //state.list = action.data
    console.log(state)
    return {
      focused:true,
      list:action.data
    }
  }
  return state
}