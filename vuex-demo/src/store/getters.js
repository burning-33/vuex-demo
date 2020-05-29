const filterNote = (state) => {
  if (state.show === 'all') {
    return state.notes || {}
  } else {
    return state.notes.filter(note => note.favorite) || {}
  }
}
const activeNote = state => state.activeNote

const show = state => state.show

export default {
  filterNote,
  activeNote,
  show
}
