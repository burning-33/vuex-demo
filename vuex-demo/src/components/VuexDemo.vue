<template>
  <div class="vuex-demo">
    <toolbar></toolbar>
    <note-list></note-list>
    <editor></editor>
  </div>
</template>

<script>
export default {
  name: 'vuex-demo',
  components: {
    Toolbar: () => import('./Toolbar'),
    Editor: () => import('./Editor'),
    NoteList: () => import('./NoteList')
  }
}
</script>

<style>
.vuex-demo{
  display: flex;
}
</style>
