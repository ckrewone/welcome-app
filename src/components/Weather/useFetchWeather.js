import useFetch from '../Utils/useFetch';

export default function useFetchWeather() {
    const { fetch } = useFetch();
    const url = 'https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&units=%22metric%22';
    const options = {
        method: 'GET',
        headers: {
            "content-type":"application/json",
            "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key":"f37968ed45msh1e4ca240c5a200fp11228djsnc3c36aea46c7",
            "useQueryString":true
        }
    }

    function fetchWeather(city) {
        if(city) {
            return fetch(url + '&q=' + city, options);
        } else {
            return null;
        }
    }

    return {
        fetchWeather
    }
}
