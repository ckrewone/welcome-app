<template>
  <div id="app">
<!--    <PageList/>-->
    <Wallpapers/>
  </div>
</template>

<script>
// import PageList from './components/PageList.vue'
import Wallpapers from './components/Wallpapers';

export default {
  name: 'App',
  components: {
    // PageList
    Wallpapers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
