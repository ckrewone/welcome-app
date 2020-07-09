<template>
    <Modal>
        <template v-slot:header>
            Settings
        </template>
        <template v-slot:body>
            <div class="form-group">
                <label>Wallpaper tag:</label>
                <input
                        type="text"
                        class="form-control"
                        v-model="wallpaperTag"
                >
            </div>
            <div class="form-group">
                <label>Your city:</label>
                <input
                        type="text"
                        class="form-control"
                        v-model="city"
                >
            </div>
            <div class="form-group">
                <label>Brightness:</label>
                <input type="range" class="form-control-range" @change="setBrightness">
            </div>
            <input
                    type="text"
                    class="form-control mt-2"
                    placeholder="WIP:Wallpaper color theme"
                    v-model="wallpaperColor"
                    readonly
            >
        </template>
        <template v-slot:footer>
            <div class="btn btn-primary" @click="closeModal">Ok</div>
        </template>
    </Modal>
</template>

<script>
    import {customRef} from 'vue';
    import {useStore} from 'vuex';
    import Modal from '../Modal/Modal';

    export default {
        components: {
            Modal,
        },
        setup() {
            let wallpaperTag = customRef(() => ({
                set(value) {
                    store.commit('SET_WALLPAPER_TAG', value);
                },
                get() {
                    return store.state.wallpaperTag;
                },
            }));
            let wallpaperColor = customRef(() => ({
                set(value) {
                    store.commit('SET_WALLPAPER_COLOR', value);
                },
                get() {
                    return store.state.wallpaperColor;
                },
            }));
            let city = customRef(() => ({
                set(value) {
                    store.commit('SET_CITY', value);
                },
                get() {
                    return store.state.city;
                },
            }));
            const store = useStore();


            function closeModal() {
                store.commit('SET_SHOW_MODAL', false);
            }

            function setBrightness(e) {
                store.commit('SET_BRIGHTNESS', e.target.value/100);
            }

            return {
                wallpaperColor,
                wallpaperTag,
                closeModal,
                setBrightness,
                city
            };
        },
    };
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
