import * as actionType from './const.js'
import axios from 'axios'
export const searchFocus = () => ({
  type:actionType.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type:actionType.SEARCH_BLUR
})

export const changeList = (data) => ({
  type:actionType.CHANGE_LIST,
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