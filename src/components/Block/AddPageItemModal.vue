<template>
    <Modal>
        <template v-slot:header >
            Add page
        </template>
        <template v-slot:body >
            <div class="input-group input-group-sm p-2">
                <div class="input-group-prepend">
                    <span class="input-group-text">Title:</span>
                </div>
                <input type="text" class="form-control" v-model="title"/>
            </div>
            <div class="input-group input-group-sm p-2">
                <div class="input-group-prepend">
                    <span class="input-group-text">Url:</span>
                </div>
                <input type="text" v-model="url" class="form-control"/>
            </div>
        </template>
    </Modal>
</template>

<script>
    import Modal from '../Modal/Modal';
    import { ref, watchEffect } from 'vue';
    export default {
        components: {
            Modal
        },
        setup() {
            const title = ref('');
            const url = ref('');

            watchEffect(() => {
                console.log('title')
                console.log(title)
                console.log('url')
                console.log(url)
            });

            return {
                title,
                url
            }
        }
    };
</script>

<style scoped>

</style>
