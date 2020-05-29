import {
  ADD_NOTE,
  TOGGLE_FAVORITE,
  TOGGLE_LIST_SHOW,
  SET_CURRENT_NOTE,
  DELETE_NOTE
} from './mutation-types'

export default {
  [ADD_NOTE] (state, data = {
    newNote: {
      id: +new Date(),
      title: '',
      content: '',
      favorite: false
    }
  }) {
    state.notes.push(data.newNote)
    state.activeNote = data.newNote
  },

  [TOGGLE_FAVORITE] (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  [TOGGLE_LIST_SHOW] (state, data) {
    state.show = data.show
  },

  [SET_CURRENT_NOTE] (state, data) {
    state.activeNote = data.note
  },

  [DELETE_NOTE] (state) {
    let arrNotes = state.notes
    for (let i = 0; i < arrNotes.length; i++) {
      if (arrNotes[i].id === state.activeNote.id) {
        arrNotes.splice(i, 1)
        state.activeNote = arrNotes[0] || {}
        return
      }
    }
  }
}
