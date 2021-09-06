import * as actionType from './const.js'
// import {FromJS} from 'immutable'
// const defaultState = FromJS({
//   focused:false
// });
const defaultState = {
  focused: false,
  mouseIn: false,
  page: 1, // ��ǰҳ��
  totalPage: 1, // ��ҳ��
  size: 10,// һҳ��ʾ����
  list: []
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SEARCH_FOCUS:
      return {
        ...state,
        focused: true,
      }
    case actionType.SEARCH_BLUR:
      return {
        ...state,
        focused: false,
      }
    case actionType.MOUSE_ENTER:
      return {
        ...state,
        mouseIn: true,
      }
    case actionType.MOUSE_LEAVE:
      return {
        ...state,
        mouseIn: false,
      }
    case actionType.CHANGE_LIST:
      return {
        ...state,
        totalPage: Math.ceil(action.data.length / state.size),
        list: action.data
      }
    case actionType.PAGE_CHANGE:
      console.log(action)
      return {
        ...state,
        page: action.data
      }
    default:
      return state
  }
}