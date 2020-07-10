import useFetch from '../Utils/useFetch';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default function useFetchWallpaper() {
    const { fetch } = useFetch();
    const config = {
        wallpapers: {
            url : "https://wallhaven.cc/api/v1/",
            apiKey: "nOhRnwoazI2R4KhMGrImVaAsYke6nfIe"
        }
    };
    const store = useStore();
    const wallpaperTag = computed(() => store.state.wallpaperTag)
    const wallpaperColor = computed(() => store.state.wallpaperColor)
    const w = screen.width;
    const h = screen.height;

    function gcd (a, b) {
        return (b == 0) ? a : gcd (b, a%b);
    }
    const r = gcd (w, h);

    async function searchWallpapers() {
        let url = config.wallpapers.url + `/search?apikey=${config.wallpapers.apiKey}&ratios=${w/r}x${h/r}`;
        if(wallpaperTag.value) {
            url += `&q=${wallpaperTag.value}`
        }
        if(wallpaperColor.value) {
            url += `&colors=${wallpaperColor.value}`
        }
        return await fetch(url);
    }

    return {
        searchWallpapers
    }
}
