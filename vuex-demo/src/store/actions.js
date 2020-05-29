import {
  ADD_NOTE,
  TOGGLE_FAVORITE,
  TOGGLE_LIST_SHOW,
  SET_CURRENT_NOTE,
  DELETE_NOTE
} from './mutation-types'

export default {
  // 新增一篇文章
  addNote ({commit}) {
    commit(ADD_NOTE)
  },

  // 切换收藏
  toggleFavorite ({commit}) {
    commit(TOGGLE_FAVORITE)
  },

  // 切换显示条件
  toggleListShow ({commit}, data = { show: 'all' }) {
    commit(TOGGLE_LIST_SHOW, data)
  },

  // 点击文章标题，实时更新编辑文章内容
  setCurrentNote ({commit}, data = { note: {} }) {
    commit(SET_CURRENT_NOTE, data)
  },

  // 删除当前文章
  deleteNote ({commit}, data = { note: {} }) {
    commit(DELETE_NOTE, data)
  }
}
