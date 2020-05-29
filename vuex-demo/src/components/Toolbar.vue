<template>
  <div class="toolbar">
    <i class="glyphicon logo"><img src="../assets/logo.png" width="30" height="30" alt=""></i>
    <i class="glyphicon glyphicon-plus" @click="addNote"></i>
    <i class="glyphicon glyphicon-star" :class="{active: activeNote.favorite}" @click="toggleFavorite"></i>
    <i class="glyphicon glyphicon-remove"  @click="deleteNote"></i>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Toolbar',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'activeNote'
    ])
  },
  methods: {
    ...mapActions([
      'addNote',
      'toggleFavorite',
      'deleteNote'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar{
  width: 80px;
  background: #30414d;
  text-align: center;
  min-height: 100vh;
  padding: 35px 25px;
}
.glyphicon{
  margin-bottom: 35px;
  display: block;
  color: #737474;
  font-size: 3rem;
  cursor: pointer;
}
.glyphicon-star.active{
  color: #dabc15;
}
</style>
