import * as actionType from './const'
import axios from 'axios'

const getListAction = (data) => ({
  type:actionType.GET_LIST,
  data
})

const getMoreAction = (data) => ({
  type:actionType.GET_MORE,
  data
})

export const getList = () => {
  return async (dispatch) => {
    try{
      const {data:res} = await axios.get('/api/home.json')
      dispatch(getListAction(res.data))
    }catch(err){
      console.log(err)
    }
  }
}

export const getMore = () => {
  return async (dispatch) => {
    try{
      const {data:res} = await axios.get('/api/homeList.json')
      dispatch(getMoreAction(res.data))
    }catch(err){
      console.log(err)
    }
  }
}