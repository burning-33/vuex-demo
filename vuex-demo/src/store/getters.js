const filterNote = (state) => {
  return state.notes || {}
}
const activeNote = state => state.activeNote

export default {
  filterNote,
  activeNote
}
