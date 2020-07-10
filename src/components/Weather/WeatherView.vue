<template>
    <div class="weather">
        <h1 v-if="weather.name">{{weather.name}}</h1>
        <h2 v-if="weather.main">{{(weather.main.temp - 273.15).toFixed(1)}}°C</h2>
        <h5 v-if="weather.weather">{{weather.weather[0].main}}</h5>
    </div>
</template>

<script>
    import useFetchWeather from './useFetchWeather';
    import {useStore } from 'vuex';
    import { ref, computed, watchEffect } from 'vue';
    export default {
        setup() {
            const { fetchWeather } = useFetchWeather();
            const weather = ref({});
            const store = useStore();
            const city = computed(() => store.state.city);

            watchEffect(() => {
                fetchWeather(city.value).then(res => {
                    weather.value = res;
                });
            });
            return {
                weather
            }
        }
    };
</script>

<style scoped>
 .weather {
     position: relative;
     color: white;
     margin: 20px;

 }
</style>
