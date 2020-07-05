<template>
    <Modal>
        <template v-slot:header>
            Settings
        </template>
        <template v-slot:body>
            Something here
        </template>
        <template v-slot:footer>
            <transition name="fade" mode="out-in">
                <div v-if="show" class="btn btn-primary">Hello</div>
            </transition>
        </template>
    </Modal>
</template>

<script>
    import Modal from './Modal';
    export default {
        name: "WallpapersSettingsModal",
        components: {
            Modal,
        },
        data() {
            return {
                show: false
            }
        },
        beforeMount() {
            setTimeout(() => {
                this.show = true;
            }, 2000);
        }
    };
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s ease-out;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
