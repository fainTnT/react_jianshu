import {createStore,compose,applyMiddleware} from 'redux'
// 处理异步请求
import thunk from 'redux-thunk'
import reducer from './reducer'

// 使用react开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
))

export default store