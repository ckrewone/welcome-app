<template>
    <div id="app">
        <Wallpapers/>
        <div class="container">
            <div class="row">
                <div class="col-md-2 offset-md-4">
                    <WeatherView/>
                </div>
                    <TimeWidget/>
            </div>
        </div>
        <PageList/>
    </div>
</template>

<script>
    import PageList from './components/Block/BlockList.vue'
    import Wallpapers from './components/Wallpapers/Wallpapers';
    import WeatherView from './components/Weather/WeatherView';
    import TimeWidget from './components/Time/TimeWidget';

    export default {
        name: 'App',
        components: {
            PageList,
            Wallpapers,
            WeatherView,
            TimeWidget,
        },
    };
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
