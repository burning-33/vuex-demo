import {
  ADD_NOTE,
  TOGGLE_FAVORITE
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
    state.activeNote.favorite = true
  }
}
