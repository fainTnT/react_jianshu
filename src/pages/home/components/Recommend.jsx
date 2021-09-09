import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component {
	render() {
		return (
			<RecommendWrapper>
				{
					this.props.list.map((item) => {
						return <RecommendItem imgUrl={item.imgUrl} key={item.id}/>
					})
				}
			</RecommendWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.home.recommendList
})

export default connect(mapState, null)(Recommend);