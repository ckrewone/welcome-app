import {ref, watch} from 'vue';
import {MODAL_TYPES} from '../../constants/StoreKeys';
import {useModal} from './useModal';
import useLocalStorage from '../components/Utils/useLocalStorage';
import {LOCAL_STORAGE_KEY} from '../../constants/LocalStorageKeys';

const modal = ref({
    [MODAL_TYPES.SETTINGS] : useModal(),
    [MODAL_TYPES.ADD_PAGE] : useModal(),
});
const wallpaperTag = ref('abstract');
const wallpaper = ref('');
const isWallpaperChanged = ref(false);
const wallpaperColor = ref('');
const city = ref('Lodz');
const brightness = ref(50);
const blurValue = ref(0);
const pages = ref([
    {
        id: 1,
        title: 'Google',
        url: 'https://www.google.pl',
    },
    {
        id: 2,
        title: '9gag',
        url: 'https://9gag.com',
    }
]);

const {setKey, getKey} = useLocalStorage();

function onCreate() {
    wallpaperTag.value = getKey(LOCAL_STORAGE_KEY.WALLPAPER_TAG) ? getKey(LOCAL_STORAGE_KEY.WALLPAPER_TAG) : 'abstract';
    wallpaper.value = getKey(LOCAL_STORAGE_KEY.WALLPAPER) ? getKey(LOCAL_STORAGE_KEY.WALLPAPER) : 'abstract';
    city.value = getKey(LOCAL_STORAGE_KEY.CITY) ? getKey(LOCAL_STORAGE_KEY.CITY) : 'Lodz';
    brightness.value = getKey(LOCAL_STORAGE_KEY.BRIGHTNESS) ? getKey(LOCAL_STORAGE_KEY.BRIGHTNESS) : 50;
    blurValue.value = getKey(LOCAL_STORAGE_KEY.BLUR) ? getKey(LOCAL_STORAGE_KEY.BLUR) : 0;

    const savedItems = getKey(LOCAL_STORAGE_KEY.PAGES);
    if (savedItems) {
        pages.value = savedItems.split('|').map(el => JSON.parse(el));
    }
}

onCreate();

watch(pages, (newVal) => {
    setKey(LOCAL_STORAGE_KEY.PAGES, newVal.map(el => JSON.stringify(el)).join('|'))
});


watch(wallpaper, (newVal) => {
    setKey(LOCAL_STORAGE_KEY.WALLPAPER, newVal);
});

watch(wallpaperTag, (newVal) => {
    setKey(LOCAL_STORAGE_KEY.WALLPAPER_TAG, newVal);
    isWallpaperChanged.value = true;
});

watch(city, (newVal) => {
    setKey(LOCAL_STORAGE_KEY.CITY, newVal);
});

watch(brightness, (newVal) => {
    setKey(LOCAL_STORAGE_KEY.BRIGHTNESS, newVal);
});

watch(blurValue, (newVal) => {
    setKey(LOCAL_STORAGE_KEY.BLUR, newVal);
});

function getModal(modalType) {
    return modal.value[modalType];
}



export {
    modal,
    getModal,
    wallpaperColor,
    wallpaperTag,
    city,
    brightness,
    pages,
    wallpaper,
    blurValue,
    isWallpaperChanged
}
