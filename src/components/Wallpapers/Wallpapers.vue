<template>
    <div>
        <div class="wallpaper brightness"></div>
        <div class="wallpaper">
            <div class="wallpaper__button-group">
                <div class="btn btn-lg btn-outline-primary wallpaper__button"
                     @click="reload"
                >
                    <i class="fa fa-refresh rotate"></i>
                </div>
                <div class="btn btn-lg btn-outline-primary wallpaper__button"
                     @click="showWallpapersSettings"
                >
                    <i class="fa fa-cog rotate"></i>
                </div>
            </div>
            <img class="wallpaper" :src="wallpaper" :style="brightness" @load="setLoader(false)"/>
            <Loader :loader="loader"/>
            <WallpapersSettingsModal/>
        </div>
    </div>
</template>

<script>
    import {ref, onMounted, computed, watch} from 'vue';
    import useFetchWallpaper from './useFetchWallpapers';
    import Loader from '../Loader/Loader';
    import WallpapersSettingsModal from './WallpapersSettingsModal';
    import useLoader from '../Loader/useLoader';
    import {useStore} from 'vuex';
    import {LOCAL_STORAGE_KEY} from '../../../constants/LocalStorageKeys';

    export default {
        components: {
            Loader,
            WallpapersSettingsModal,
        },
        setup() {
            const {searchWallpapers} = useFetchWallpaper();
            const {setLoader, loader} = useLoader();
            const wallpaper = ref(null);
            const wallpaperArray = ref([]);
            const index = ref(0);
            const store = useStore();
            const fetchWallpapers = computed(() => store.state.fetchWallpapers);
            const brightness = computed(() => ({opacity: store.state.brightness}));
            onMounted(() => {
                setLoader(true);
                const savedWallpaper = window.localStorage.getItem(LOCAL_STORAGE_KEY.WALLPAPER);
                if (savedWallpaper) {
                    wallpaper.value = savedWallpaper;
                } else {
                    setWallpaper();
                }
            });

            function showWallpapersSettings() {
                store.commit('SET_SHOW_MODAL', true);
            }

            watch(wallpaper, (val) => {
                window.localStorage.setItem(LOCAL_STORAGE_KEY.WALLPAPER, val);
            });

            function setWallpaper() {
                searchWallpapers().then(json => {
                    if (json.data && json.data.length) {
                        wallpaperArray.value = json.data;
                        wallpaper.value = json.data[index.value].path;
                        store.commit('SET_FETCH_WALLPAPERS', false);
                    } else {
                        console.log('Empty response');
                    }
                });
            }

            function reload() {
                setLoader(true);
                if (index.value < wallpaperArray.value.length && !fetchWallpapers.value) {
                    index.value++;
                    setTimeout(() => wallpaper.value = wallpaperArray.value[index.value].path, 200);
                } else {
                    index.value = 0;
                    setWallpaper();
                }

            }

            return {
                wallpaper,
                reload,
                loader,
                showWallpapersSettings,
                brightness,
                setLoader,
            };
        },
    };
</script>

<style>
    .wallpaper {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        opacity: 1;
        transition: opacity ease-in-out 1s;
    }

    .brightness {
        background: #000;
    }

    .wallpaper__button-group {
        margin-left: 10px;
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 9999;
    }

    .wallpaper__button {
        margin-left: 5px;
    }

    /* Animation */
    @-webkit-keyframes rotate {
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes rotate {
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .rotate {
        transform: rotate(0deg);
        transition: transform .8s;
    }

    .rotate:hover {
        transform: rotate(360deg);
    }

</style>
