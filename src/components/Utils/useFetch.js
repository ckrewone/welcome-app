import * as fetchData from 'node-fetch';

export default function useFetch() {
    async function fetch(url, options = {}) {
        return await (fetchData(url, options).then(res => res.json()));
    }

    return {
        fetch,
    }
}
