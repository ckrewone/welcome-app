<template>
    <div v-if="time" class="time">
        <h1>{{time}}</h1>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue';
    export default {
        setup() {

            const today = new Date();
            const time = ref(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());

            onMounted(() => {
                setInterval(() => {
                    const now = new Date();
                    time.value = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
                }, 1000);
            });
            return {
                time
            }
        }
    };
</script>

<style scoped>
    .time {
        position: absolute;
        left: 50%;
        bottom: 10%;
        transform: translate(-50%, -50%);
        z-index: 10000;
        font-size: 30px;
        color: white;
    }
</style>
