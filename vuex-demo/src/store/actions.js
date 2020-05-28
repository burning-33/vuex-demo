import {
  ADD_NOTE,
  TOGGLE_FAVORITE
} from './mutation-types'

export default {
  // 新增一篇文章
  addNote ({commit}) {
    commit(ADD_NOTE)
  },
  // 切换收藏
  toogleFavorite ({commit}) {
    commit(TOGGLE_FAVORITE)
  }
}
