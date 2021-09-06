import React,{Component} from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style'


class Header extends Component {
	constructor(props){
		super(props)
		console.log(this.props)
	}
	getListArea(focus,mouse){
		const {list,page,totalPage,size,handleMouseEnter,handleMouseLeave,handlePageChange} = this.props
		let searchItem = [];
		if(list.length){
			for(let i = (page-1)*size;i < page*size;i++){
				searchItem.push(<SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem>)
			}
		}
		if (focus||mouse) {
			return (
				<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={()=>handlePageChange(page,totalPage)}>
							<i className="iconfont spin">&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{searchItem}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null
		}
	}

	render(){
		const {focused,mouseIn,handleInputFocus,handleInputBlur} = this.props
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>登陆</NavItem>
					<NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused||mouseIn}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused||mouseIn ? 'focused' : ''}
								onFocus={handleInputFocus}
								onBlur={()=>handleInputBlur(mouseIn)}
							>
							</NavSearch>
						</CSSTransition>
						<i className={focused||mouseIn ? 'focused zoom' : 'zoom'}>&#xe614;</i>
						{this.getListArea(focused,mouseIn)}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'><i className="iconfont">&#xe615;</i>写文章</Button>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.header.focused,
		mouseIn:state.header.mouseIn,
		page:state.header.page,
		totalPage:state.header.totalPage,
		size:state.header.size,
		list:state.header.list
	}
}
const mapDispathToProps = (dispath) => {
	return {
		handleInputFocus() {
			dispath(actionCreators.getList())
			dispath(actionCreators.searchFocus())
		},
		handleInputBlur(mouseIn) {
			
			dispath(actionCreators.searchBlur())
		},
		handleMouseEnter(){
			dispath(actionCreators.mouseEnter())
		},
		handleMouseLeave(){
			dispath(actionCreators.mouseLeave())
		},
		handlePageChange(page,totalPage){
			page<totalPage?dispath(actionCreators.pageChange(++page)):dispath(actionCreators.pageChange(1))
		},
	}
}
export default connect(mapStateToProps, mapDispathToProps)(Header)