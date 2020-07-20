import * as fetchData from 'node-fetch';

export default function useFetch() {
    async function fetch(url, options = { mode: 'cors' ,headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }}) {
        return await (fetchData(url, options).then(res => res.json()));
    }

    async function canFetch(url) {
        return await fetchData(url);
    }

    return {
        fetch,
        canFetch
    }
}
