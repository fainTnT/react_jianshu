import * as actionType from './const'

const defaultState = {
  articleList:[],
  recommendList:[]
}

export default (state=defaultState,action) => {
  switch(action.type){
    case actionType.GET_LIST:
      return {
        ...state,
        articleList:action.data.articleList,
        recommendList:action.data.recommendList,
      }
    case actionType.GET_MORE:
      return {
        ...state,
        articleList:state.articleList.concat(action.data)
      }
    default:
      return state
  }
}