import useFetch from '../Utils/useFetch';
import { computed } from 'vue';

export default function useFetchWallpaper() {
    const { fetch } = useFetch();
    const config = {
        wallpapers: {
            url : "https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/",
            apiKey: "nOhRnwoazI2R4KhMGrImVaAsYke6nfIe"
        }
    };
    const wallpaperTag = computed(() => '')
    const wallpaperColor = computed(() => '')
    const w = screen.width;
    const h = screen.height;

    function gcd (a, b) {
        return (b === 0) ? a : gcd (b, a%b);
    }
    const r = gcd (w, h);

    async function searchWallpapers() {
        let url = config.wallpapers.url + `/search?apikey=${config.wallpapers.apiKey}&ratios=${w/r}x${h/r}`;
        url += `&q=${wallpaperTag.value || 'abstract'}`
        if(wallpaperColor.value) {
            url += `&colors=${wallpaperColor.value}`
        }
        return await fetch(url);
    }

    return {
        searchWallpapers
    }
}
