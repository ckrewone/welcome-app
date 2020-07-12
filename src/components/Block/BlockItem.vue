<template>
    <div
            class="pointer col-md-3 list-item"
            :class="activeBlock ? 'list-item--hover' : ''"
    >
        <div
                class="hover"
                @mouseover="activeBlock = true"
                @mouseout="activeBlock = false"
                @click="onClickBlock"
        />
        <div
                class="rounded-sm list-item__base list-item--transition"
                :class="activeBlock ? 'shadow-lg selected' : ''"
        >
            <div class="list-item__main">
                <slot/>
            </div>
            <div class="list-item__title"
                 :class="activeBlock ? 'list-item__title--hover' : ''"
            >
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
            const getColClass = ref('col-md-3');

            return {
                activeBlock,
                getColClass
            };
        },
    };
</script>

<style>
    .list-item{
        transition: padding .2s ease-in-out;
        padding: 0px 15px 0px 15px;
    }

    .list-item--hover {
        padding: 0px 10px 0px 10px;
    }

    .list-item__base {
        height: 15vh;
        background: rgba(255, 255, 255, .3);
    }

    .list-item--transition {
        transition: all .2s ease-in-out;
    }

    .list-item__title {
        transition: font-size .2s ease-in-out;
        font-size: 1.5rem;
        padding-top: 10px;
        color: rgba(0, 0, 0, .8);
    }

    .list-item__title--hover{
        font-size: 1.8rem;
    }

    .list-item__main {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .selected {
        background: rgba(255, 255, 255, .5);
    }

    .hover {
        height: 100%;
        width: 100%;
        z-index: 100;
        position: absolute;
    }
</style>
