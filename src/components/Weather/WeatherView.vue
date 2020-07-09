<template>
    <div class="weather">{{weather}} test</div>
</template>

<script>
    import { computed } from 'vue';
    import useFetchWeather from './useFetchWeather';
    export default {
        setup() {
            const { fetchWeather } = useFetchWeather();

            const weather = computed(() => fetchWeather());

            return {
                weather
            }
        }
    };
</script>

<style scoped>
 .weather {
     z-index: 10000;
     font-size: 30px;
     color: black;
 }
</style>
