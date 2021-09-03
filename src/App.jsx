
import React, { Component } from 'react'
import Header from './common/header/index'
import {Provider} from 'react-redux'
import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header></Header>
      </Provider>
    )
  }
}
