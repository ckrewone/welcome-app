import {createStore} from 'vuex';

const state = {
    showModal: false,
    wallpaperTag: null,
    wallpaperColor: null,
    fetchWallpapers: false,
    brightness: false,
    city: 'Lodz',
};

const mutations = {
    SET_SHOW_MODAL(state, value) {
        state.showModal = value;
    },
    SET_CITY(state, value) {
        state.city = value;
    },
    SET_WALLPAPER_TAG(state, value) {
        state.wallpaperTag = value;
        state.fetchWallpapers = true;
    },
    SET_WALLPAPER_COLOR(state, value) {
        state.wallpaperColor = value;
        state.fetchWallpapers = true;
    },
    SET_FETCH_WALLPAPERS(state, value) {
        state.fetchWallpapers = value;
    },
    SET_BRIGHTNESS(state, value) {
        state.brightness = value;
    },
};

export default createStore({state, mutations});
