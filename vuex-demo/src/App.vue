<template>
  <div id="app">
    <header>
      <div class="nav-left">
        <h1><img src="" alt=""></h1>
        <h2>Burning_33</h2>
      </div>
      <div class="nav-right">
      </div>
    </header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
header {
  width: 100%;
  height: 50px;
}
</style>
