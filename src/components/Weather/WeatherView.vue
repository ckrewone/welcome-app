<template>
    <div class="weather">
        <div class="weather__icon-reload" @click="updateWeatcher"><i class="fa fa-refresh pointer rotate weather__refresh"></i></div>
        <h2 v-if="weather.name">{{weather.name}}</h2>
        <h3 v-if="weather.main">{{(weather.main.temp - 273.15).toFixed(1)}}°C</h3>
        <h5 v-if="weather.weather">{{weather.weather[0].main}}</h5>
    </div>
</template>

<script>
    import useFetchWeather from './useFetchWeather';
    import {ref, onMounted} from 'vue';
    import {city} from '../../store/useStore';

    export default {
        setup() {
            const {fetchWeather} = useFetchWeather();
            const weather = ref({
                coord: {lon: 19.47, lat: 51.75},
                weather: [{id: 500, main: 'Rain', description: 'light rain', icon: '10d'}],
                base: 'stations',
                main: {temp: 292.44, feels_like: 289.81, temp_min: 292.04, temp_max: 293.15, pressure: 1024, humidity: 48},
                visibility: 10000,
                wind: {speed: 3.1, deg: 290},
                rain: '{1h:0.2}',
                clouds: {all: 8},
                dt: 1594571296,
                sys: {type: 1, id: 1706, country: 'PL', sunrise: 1594521484, sunset: 1594580224},
                timezone: 7200,
                id: 3093133,
                name: 'Łódź',
                cod: 200,
            });  // example

            onMounted(() => {
                // updateWeatcher();
                setInterval(() => updateWeatcher(), 1000 * 60 * 60 * 1); // every 2 hpurs
            });

            function updateWeatcher() {
                fetchWeather(city.value).then(res => {
                    weather.value = res;
                });
            }

            return {
                weather,
                updateWeatcher
            };
        },
    };
</script>

<style>
    .weather {
        position: relative;
        color: white;
        z-index: 300;
        margin-top: 20px;
        text-align: center;
    }
    .weather__icon-reload {
        position: relative;
        top: 0;
        right: 0;
    }
    .weather__refresh {
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0.2;
    }
    .weather__refresh:hover {
        opacity: 0.5;
    }
</style>
