import {createStore,compose,applyMiddleware} from 'redux'
// �����첽����
import thunk from 'redux-thunk'
import reducer from './reducer'

// ʹ��react�����߹���
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
))

export default store