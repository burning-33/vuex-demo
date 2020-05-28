<template>
  <div class="editor">
        <div class="input-box">
            <input type="text" class="form-control" v-model="activeNote.title" placeholder="请输入标题">
            <textarea class="main-content form-control" v-model="activeNote.content" placeholder="请输入正文"></textarea>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'editor',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  computed: {
    ...mapGetters([
      'activeNote'
    ])
  }
}
</script>
<style scoped>
    .editor{
        -webkit-box-flex:2;
        flex: 2;
    }
    .input-box{
        -webkit-display: flex;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .form-control{
        border: none;
    }
    .main-content{
        -webkit-box-flex: 1;
        flex: 1;
        padding: 15px;
    }
</style>
