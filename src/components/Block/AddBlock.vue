<template>
    <BlockItem :on-click-block="add">
        <template v-slot:default>
            <div class="plus">+</div>
        </template>
    </BlockItem>
</template>

<script>
    import BlockItem from './BlockItem';

    export default {
        components: {
            BlockItem,
        },
        setup() {
            function add() {
                console.log('test');
            }

            return {
                add
            }
        }
    };
</script>

<style scoped>
    .plus {
        font-size: 3rem;
    }
</style>
