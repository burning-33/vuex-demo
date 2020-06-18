<template>
  <div class="noteList">
    <div class="nav-note">
        <h2>notes | heavenru.com</h2>
        <btn v-for="(btn, index) in testData"
              :key="index"
              :type='btn.type'
              :text='btn.text'
              >{{btn.text}}</btn>
        <div class="btn-group btn-group-justified" role="group">
            <!-- all -->
            <div class="btn-group" role="group">
                <button @click="toggleShow('all')"
                :class="{active: show === 'all'}"  type="button" class="btn btn-default">All Notes</button>
            </div>

            <!-- favorites -->
            <div class="btn-group" role="group">
                <button @click="toggleShow('favorite')"
                :class="{active: show === 'favorite'}" type="button" class="btn btn-default" >Favorites</button>
            </div>
        </div>
        <div class="btn-group btn-group-justified" role="group">
            <div class="input-group search">
            <input type="text" class="form-control" v-model="search" placeholder="Search for...">
            <span class="input-group-addon">
                <i class="glyphicon glyphicon-search"></i>
            </span>
            </div>
        </div>
    </div>
    <div class="note-items" v-for="item in searchList" :key="item.id">
        <p @click="setActiveNote(item)" class="note-item"
         :class="{active: item === activeNote}">{{item.title.trim().substring(0,30)}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
  name: 'noteList',
  data () {
    return {
      search: '',
      testData: [
        { type: 'default', text: 'default', handle: 'handleDefault' },
        { type: 'error', text: 'error', handle: 'handleError' },
        { type: 'warn', text: 'warn', handle: 'handleWarn' },
        { type: 'success', text: 'success', handle: 'handleSuccess' }
      ]
    }
  },
  components: {
    btn: () => import('./AppButton')
  },
  computed: {
    ...mapGetters([
      'filterNote'
    ]),
    ...mapState([
      'activeNote',
      'show'
    ]),
    searchList () {
      if (this.search.length > 0) {
        return this.filterNote.filter(note => note.title.toLowerCase().indexOf(this.search) > -1)
      } else {
        return this.filterNote
      }
    }
  },
  methods: {
    ...mapActions([
      'toggleListShow',
      'setCurrentNote'
    ]),

    toggleShow (type) {
      this.toggleListShow({ show: type })
    },

    setActiveNote (note) {
      this.setCurrentNote({ note })
    }
  }
}
</script>
<style scoped>
    .noteList{
        -webkit-box-flex:1;
        flex: 1;
        background: #f5f5f5;
    }
    .nav-note{
        padding: 20px;
    }
    h2{
        font-weight: 300;
        text-transform: uppercase;
        font-size: 22px;
        padding-bottom: 8px;
        text-align: center;
    }
    .search{
        margin-top: 20px;
    }
    .btn-default{
        cursor: pointer;
    }
    .note-items .note-item{
        background: #fff;
        padding: 10px;
        cursor: pointer;
        margin-bottom: 0;
    }
    .note-items .note-item.active{
        background: rgba(24, 53, 133, 0.459);
        color: #fff;
    }
</style>
