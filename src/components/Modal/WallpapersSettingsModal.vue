<template>
    <Modal v-if="show">
        <template v-slot:header>
            Settings
        </template>
        <template v-slot:body>
            <input
                    type="text"
                    class="form-control"
                    placeholder="Wallpaper tag"
                    v-model="wallpaperTag"
            >
            <input
                    type="text"
                    class="form-control mt-2"
                    placeholder="Wallpaper color theme"
                    v-model="wallpaperColor"
            >
        </template>
        <template v-slot:footer>
            <div class="btn btn-primary" @click="closeModal">Ok</div>
        </template>
    </Modal>
</template>

<script>
    import { ref } from 'vue';
    import Modal from './Modal';
    import useModal from './useModal';
    export default {
        components: {
            Modal
        },
        setup() {
            let wallpaperTag = ref(null);
            let wallpaperColor = ref(null);
            let { show, setShow } = useModal();
            function closeModal() {
                setShow(false);
            }

            return {
                wallpaperColor,
                wallpaperTag,
                closeModal,
                show
            }
        }
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
