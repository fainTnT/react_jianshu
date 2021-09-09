import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators'

import {
	ListItem,
	ListInfo,
  LoadMore
} from '../style'

class List extends Component {
  render() {
    const { articleList,handleGetMore } = this.props;
    return (
      <div>
        {
						articleList.map((item) => {
							return (
								<ListItem key={item.id}>
									<img alt='' className='pic' src={item.imgUrl} />
									<ListInfo>
										<h3 className='title'>{item.title}</h3>
										<p className='desc'>{item.desc}</p>
									</ListInfo>
								</ListItem>
							)
						})
					}
          <LoadMore onClick={handleGetMore}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		articleList: state.home.articleList,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleGetMore() {
			dispatch(actionCreators.getMore())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List)