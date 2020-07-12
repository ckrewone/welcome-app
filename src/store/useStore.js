import {ref, watch} from 'vue';
import {MODAL_TYPES} from '../../constants/StoreKeys';
import {useModal} from './useModal';
import useLocalStorage from './useLocalStorage';
import {LOCAL_STORAGE_KEY} from '../../constants/LocalStorageKeys';

const modal = ref({
    [MODAL_TYPES.SETTINGS] : useModal(),
    [MODAL_TYPES.ADD_PAGE] : useModal(),
});
const wallpaperTag = ref('abstract');
const wallpaperColor = ref('');
const city = ref('Lodz');
const brightness = ref(50);
const pages = ref([
    {
        title: 'Google',
        url: 'https://www.google.pl',
    },
    {
        title: '9gag',
        url: 'https://9gag.com',
    }
]);

const {setKey, getKey} = useLocalStorage();

function onCreate() {
    wallpaperTag.value = getKey(LOCAL_STORAGE_KEY.WALLPAPER) ? getKey(LOCAL_STORAGE_KEY.WALLPAPER) : 'abstract';
    city.value = getKey(LOCAL_STORAGE_KEY.CITY) ? getKey(LOCAL_STORAGE_KEY.CITY) : 'Lodz';
    brightness.value = getKey(LOCAL_STORAGE_KEY.BRIGHTNESS) ? getKey(LOCAL_STORAGE_KEY.BRIGHTNESS) : 50;

    const savedItems = getKey(LOCAL_STORAGE_KEY.PAGES);
    if (savedItems) {
        pages.value = savedItems.split('|').map(el => JSON.parse(el));
    }
}

onCreate();

watch(pages, (newVal) => {
    setKey(LOCAL_STORAGE_KEY.PAGES, newVal.map(el => JSON.stringify(el)).join('|'))
});


watch(wallpaperTag, (newVal) => {
    setKey(LOCAL_STORAGE_KEY.WALLPAPER, newVal);
});

watch(city, (newVal) => {
    setKey(LOCAL_STORAGE_KEY.CITY, newVal);
});

watch(brightness, (newVal) => {
    setKey(LOCAL_STORAGE_KEY.BRIGHTNESS, newVal);
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
    pages
}
