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
	getListArea(show){
		if (show) {
			return (
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>
							<i className="iconfont spin">&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							this.props.list.map((item)=>{
								return (
									<SearchInfoItem key={item}>{item}</SearchInfoItem>
								)
							})
						}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null
		}
	}

	render(){
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
							in={this.props.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.props.focused ? 'focused' : ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}
							>
							</NavSearch>
						</CSSTransition>
						<i className={this.props.focused ? 'focused zoom' : 'zoom'}>&#xe614;</i>
						{this.getListArea(this.props.focused)}
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
		list:state.header.list
	}
}
const mapDispathToProps = (dispath) => {
	return {
		handleInputFocus() {
			dispath(actionCreators.getList())
			dispath(actionCreators.searchFocus())
		},
		handleInputBlur() {
			dispath(actionCreators.searchBlur())
		}
	}
}
export default connect(mapStateToProps, mapDispathToProps)(Header)