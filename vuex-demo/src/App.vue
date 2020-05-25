<template>
  <div id="app">
    <Toolbar></Toolbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Toolbar: () => import('./components/Toolbar')
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
