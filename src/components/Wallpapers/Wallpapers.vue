<template>
    <div>
        <div class="wallpaper">
            <div class="wallpaper__button-group">
                <div class="btn btn-lg btn-outline-primary wallpaper__button"
                     @click="reload"
                >
                    <i class="fa fa-refresh rotate"></i>
                </div>
                <div class="btn btn-lg btn-outline-primary wallpaper__button"
                     @click="setShow(true)"
                >
                    <i class="fa fa-cog rotate"></i>
                </div>
            </div>
            <img class="wallpaper" :src="wallpaper"/>
            <Loader :loader="loader"/>
            <WallpapersSettingsModal/>
        </div>
    </div>
</template>

<script>
    import {ref, onMounted, watchEffect} from 'vue';
    import useFetchWallpaper from './useFetchWallpapers';
    import Loader from '../Loader/Loader';
    import WallpapersSettingsModal from '../Modal/WallpapersSettingsModal';
    import useLoader from '../Loader/useLoader';
    import useModal from '../Modal/useModal';
    import {useStore} from 'vuex';

    export default {
        components: {
            Loader,
            WallpapersSettingsModal
        },
        setup() {
            const {searchWallpapers} = useFetchWallpaper();
            let {setLoader, loader} = useLoader();
            let wallpaper = ref(null);
            let wallpaperArray = ref([]);
            let index = ref(0);
            let { setShow } = useModal();
            let store = useStore();

            watchEffect(() => {
                setLoader(true);
                if (wallpaper.value) {
                    setLoader(false);
                }
            });

            onMounted(() => {
                setWallpaper();
                console.log(store);
            });

            function setWallpaper() {
                searchWallpapers().then(json => {
                    wallpaperArray.value = json.data;
                    wallpaper.value = json.data[index.value].path;
                });
            }

            function reload() {
                wallpaper.value = wallpaperArray.value[index.value];
                if (index.value < wallpaperArray.value.length) {
                    index.value++;
                    setTimeout(() => wallpaper.value = wallpaperArray.value[index.value].path, 100);
                } else {
                    index.value = 0;
                    setWallpaper();
                }

            }

            return {
                wallpaper,
                reload,
                loader,
                setShow
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
        z-index: -1;
    }

    .wallpaper__button-group {
        margin-left: 10px;
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 2;
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
