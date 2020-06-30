<template>
  <div id="app">
    <PageList/>
  </div>
</template>

<script>
import PageList from './components/PageList.vue'

export default {
  name: 'App',
  components: {
    PageList
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
