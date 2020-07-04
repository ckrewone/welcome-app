import useFetch from './useFetch';

export default function useFetchWallpaper() {
    const { fetch } = useFetch();
    const config = {
        wallpapers: {
            url : "http://localhost:8080",
            apiKey: "nOhRnwoazI2R4KhMGrImVaAsYke6nfIe"
        }
    };

    async function searchWallpapers() {
        const url = '/search?apikey=' + config.wallpapers.apiKey + '&resolutions=' + screen.width + 'x' + screen.height;
        console.log(url);
        return await fetch(url).then(res => res.json());
    }

    return {
        searchWallpapers
    }
}
