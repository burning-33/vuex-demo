<template>
  <div id="app">
    <toolbar></toolbar>
    <note-list></note-list>
    <editor></editor>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Toolbar: () => import('./components/Toolbar'),
    Editor: () => import('./components/Editor'),
    NoteList: () => import('./components/NoteList')
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app{
  display: flex;
}
</style>
