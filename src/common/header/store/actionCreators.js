import * as actionType from './const.js'
import axios from 'axios'

const changeList = (data) => ({
  type:actionType.CHANGE_LIST,
  data
})

export const searchFocus = () => ({
  type:actionType.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type:actionType.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type:actionType.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type:actionType.MOUSE_LEAVE
})

export const pageChange = (data) => ({
  type:actionType.PAGE_CHANGE,
  data
})


// ͨ��thunk���Է���һ�����������첽����
export const getList = () => {
  return (dispath) => {
    axios.get('/api/headerList.json').then((res)=>{
      dispath(changeList(res.data.data))
    }).catch(()=>{
      console.log('error')
    })
  }
}