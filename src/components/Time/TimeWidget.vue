<template>
    <div class="time">
        <h1 class="time__content">{{time}}</h1>
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
                    time.value = getTime(now.getHours()) + ":" + getTime(now.getMinutes()) + ":" + getTime(now.getSeconds())
                }, 1000);
            });

            function getTime(time) {
                return (time < 10 ? '0' : '') + time;
            }
            return {
                time
            }
        }
    };
</script>

<style>
    .time {
        position: relative;
        color: white;
        margin: 20px;
    }

    .time__content {
        font-size: 5rem;
        text-align: center;
    }
</style>
