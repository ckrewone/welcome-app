<template>
    <div>
        <div
                class="hover pointer"
                @mouseover="activeBlock = true"
                @mouseout="activeBlock = false"
                @click="onClickBlock"
        />
        <div
                class="rounded-sm list-item list-item--transition"
                :class="activeBlock ? 'shadow-lg selected' : ''"
        >
            <div class="list-item__main">
                <slot/>
            </div>
            <div class="list-item__title">
                <slot name="footer"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';

    export default {
        props: {
            onClickBlock: {
                type: Function,
                require: true
            }
        },
        setup() {
            const activeBlock = ref(false);

            return {
                activeBlock,
            };
        },
    };
</script>

<style scoped>
    .list-item {
        height: 100%;
        background: rgba(255, 255, 255, .3);
    }

    .list-item--transition {
        transition: all .2s ease-in-out;
    }

    .list-item__title {
        font-size: 1rem;
        color: rgba(0, 0, 0, .8);
        padding-top: 10px;
    }

    .list-item__main {
    }

    .selected {
        background: rgba(255, 255, 255, .5);
    }

    .image {
        margin-top: 40px;
        height: 28px;
    }

    .hover {
        position: absolute;
        height: 100%;
        width: 100%;
    }
</style>
