<template>
    <div>
        <div class="wallpaper brightness"></div>
        <div class="wallpaper">
            <div class="wallpaper__button-group">
                <div class="btn btn-md btn-outline-light wallpaper__button"
                     @click="reload"
                >
                    <i class="fa fa-refresh rotate"></i>
                </div>
                <div class="btn btn-md btn-outline-light wallpaper__button"
                     @click="show"
                >
                    <i class="fa fa-cog rotate"></i>
                </div>
            </div>
            <img class="wallpaper" :src="wallpaper" :style="wallpaperBrightness" @load="setLoader(false)"/>
            <Loader :loader="loader"/>
        </div>
    </div>
</template>

<script>
    import {ref, onMounted, computed} from 'vue';
    import useFetchWallpaper from './useFetchWallpapers';
    import Loader from '../Loader/Loader';
    import useLoader from '../Loader/useLoader';
    import {blurValue, brightness, getModal, wallpaper, isWallpaperChanged} from '../../store/useStore';
    import {MODAL_TYPES} from '../../../constants/StoreKeys';

    export default {
        components: {
            Loader,
        },
        setup() {
            const {searchWallpapers} = useFetchWallpaper();
            const {setLoader, loader} = useLoader();
            const wallpaperArray = ref([]);
            const index = ref(0);
            const wallpaperBrightness = computed(()=> ({
                opacity: brightness.value/100,
                filter: 'blur(' + blurValue.value/5 +'px)',
            }));
            onMounted(() => {
                setLoader(true);
                if (!wallpaper.value) {
                    setWallpaper();
                }
            });

            function setWallpaper() {
                wallpaper.value = null;
                searchWallpapers().then(json => {
                    if (json.data && json.data.length) {
                        wallpaperArray.value = json.data;
                        wallpaper.value = json.data[index.value].path;
                        isWallpaperChanged.value = false;
                    } else {
                        console.log('Empty response');
                    }
                });
            }

            function reload() {
                setLoader(true);
                if (index.value < wallpaperArray.value.length && !isWallpaperChanged.value) {
                    index.value++;
                    setTimeout(() => wallpaper.value = wallpaperArray.value[index.value].path, 200);
                } else {
                    index.value = 0;
                    setWallpaper();
                }

            }

            return {
                reload,
                loader,
                show: getModal(MODAL_TYPES.SETTINGS).show,
                wallpaperBrightness,
                setLoader,
                wallpaper
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
        opacity: 0.2;
    }

    .wallpaper__button-group:hover {
        opacity: 0.7;
    }

    .wallpaper__button {
        margin-left: 5px;
    }

    /* Animation */
    @-webkit-keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes rotate {
        to {
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
