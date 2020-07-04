import * as fetchData from 'node-fetch';

export default function useFetch() {
    async function fetch(url) {
        return await fetchData(url)
    }

    return {
        fetch,
    }
}
