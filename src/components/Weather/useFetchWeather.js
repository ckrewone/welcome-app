import useFetch from '../Utils/useFetch';

export default function useFetchWeather() {
    const { fetch } = useFetch();
    const url = 'http://localhost:8080/weather';
    const options = {
        method: 'GET',
        headers: {
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key":"f37968ed45msh1e4ca240c5a200fp11228djsnc3c36aea46c7",
            "useQueryString":true
        },
        params: {
            "id":"2172797",
            "units":"%22metric%22 or %22imperial%22",
            "mode":"xml%2C html",
            "q":"London%2Cuk"
        }
    }

    function fetchWeather() {
        return fetch(url, options);
    }

    return {
        fetchWeather
    }
}
