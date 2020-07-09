<template>
  <div id="app">
<!--    <PageList/>-->
    <Wallpapers/>
    <WeatherView/>
  </div>
</template>

<script>
// import PageList from './components/PageList.vue'
import Wallpapers from './components/Wallpapers/Wallpapers';
import WeatherView from './components/Weather/WeatherView';

export default {
  name: 'App',
  components: {
    // PageList
    Wallpapers,
    WeatherView
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
