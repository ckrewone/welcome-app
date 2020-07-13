<template>
    <Modal :modal-type="type">
        <template v-slot:header>
            Settings
        </template>
        <template v-slot:body>
            <div class="form-group">
                <label>Wallpaper tag:</label>
                <input
                        type="text"
                        class="form-control col-form-label-lg"
                        v-model="wallpaperTag"
                >
            </div>
            <div class="form-group">
                <label>Your city:</label>
                <input
                        type="text"
                        class="form-control col-form-label-lg"
                        v-model="city"
                >
            </div>
            <div class="form-group">
                <label>Wallpaper brightness:</label>
                <input type="range" class="form-control-range col-form-label-lg" v-model="brightness">
            </div>
            <div class="form-group">
                <label>Wallpaper blur:</label>
                <input type="range" class="form-control-range col-form-label-lg" v-model="blurValue">
            </div>
            <input
                    type="text"
                    class="form-control mt-2 "
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
    import {getModal, wallpaperTag, wallpaperColor, city, brightness, blurValue} from '../../store/useStore';
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
                blurValue,
                isShow: computed(() => getModal(MODAL_TYPES.SETTINGS).isShow),
                hide: getModal(MODAL_TYPES.SETTINGS).hide,
                type: MODAL_TYPES.SETTINGS
            };
        },
    };
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
