import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
} from './style'

import List from './components/List'
import Recommend from './components/Recommend'


class Home extends Component {
	componentDidMount() {
		this.props.handleGetList()
	}
	render() {

		return (
			<HomeWrapper>
				<HomeLeft>
					<List></List>
				</HomeLeft>
				<HomeRight>
					<Recommend></Recommend>
				</HomeRight>
			</HomeWrapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		articleList: state.home.articleList,
		recommendList: state.home.recommendList,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleGetList() {
			dispatch(actionCreators.getList())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

