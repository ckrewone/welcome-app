<template>
    <Modal v-if="isShow">
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
                <label>Wallpaper brightness:</label>
                <input type="range" class="form-control-range" v-model="brightness">
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
            <div class="btn btn-primary" @click="hide">Ok</div>
        </template>
    </Modal>
</template>

<script>
    import {computed} from 'vue';
    import Modal from '../Modal/Modal';
    import {getModal, wallpaperTag, wallpaperColor, city, brightness} from '../../store/useStore';
    import {MODAL_TYPES} from '../../../constants/StoreKeys';

    export default {
        components: {
            Modal,
        },
        setup() {

            return {
                wallpaperColor,
                wallpaperTag,
                brightness,
                city,
                isShow: computed(() => getModal(MODAL_TYPES.SETTINGS).isShow),
                hide: getModal(MODAL_TYPES.SETTINGS).hide
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
