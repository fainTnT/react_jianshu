
import React, { Component } from 'react'
import Header from './common/header/index'
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

// 全局样式
import GlobalStyle  from './style'
import FontStyle from './statics/iconfont/iconfont.js'

import Home from './pages/home';
import Detail from './pages/detail';





export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <FontStyle></FontStyle>
        <div>
          <Header></Header>
          <BrowserRouter>
            {/* exact严格匹配 */}
            <Route path='/' exact component={Home}></Route>
      			<Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}
