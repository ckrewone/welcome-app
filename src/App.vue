<template>
    <div id="app">
        <Wallpapers/>
        <div class="container">
            <div class="row">
                <div class="col-md-2 offset-md-4 col-sm-3 offset-sm-3">
                    <WeatherView/>
                </div>
                <div class="col-sm-6 col-xs-12">
                    <TimeWidget/>
                </div>
            </div>
        </div>
        <PageList/>
        <SettingsModal/>
        <AddPageItemModal/>
    </div>
</template>

<script>
    import PageList from './components/Block/BlockList.vue';
    import Wallpapers from './components/Wallpapers/Wallpapers';
    import WeatherView from './components/Weather/WeatherView';
    import TimeWidget from './components/Time/TimeWidget';
    import SettingsModal from './components/Settings/SettingsModal';
    import AddPageItemModal from './components/Block/AddPageItemModal';

    export default {
        name: 'App',
        components: {
            PageList,
            Wallpapers,
            WeatherView,
            TimeWidget,
            SettingsModal,
            AddPageItemModal,
        },
    };
</script>

<style>
    html {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        overflow: hidden;
        background: black;
    }


    @media (min-width: 768px) {
        html {
            font-size: 12px;
        }
    }

    @media (min-width: 992px) {
        html {
            font-size: 14px;
        }
    }

    @media (min-width: 1200px) {
        html {
            font-size: 16px;
        }
    }
</style>
