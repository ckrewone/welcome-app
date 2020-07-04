import useFetch from './useFetch';
import * as path from 'path';

export default function useFetchWallpaper() {
    const { fetch } = useFetch();
    const config = {
        wallpapers: {
            url : "http://localhost:8080",
            apiKey: "nOhRnwoazI2R4KhMGrImVaAsYke6nfIe"
        }
    };

    async function searchWallpapers() {
        const url = path.join('/search?apikey=' + config.wallpapers.apiKey);
        console.log(url);
        return await fetch(url).then(res => res.json());
    }

    return {
        searchWallpapers
    }
}
