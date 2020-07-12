<template>
    <div class="row">
        <div class="col-1"/>
        <div class="row">
            <div
                    v-for="(item, i) in items"
                    :key="i"
                    :class="getColClass"
            >
                <PageItem :item="item"/>
            </div>
        </div>
    </div>
</template>

<script>
    import PageItem from './PageItem';

    export default {
        props: {
            cols: {
                type: Number,
                default: 4,
            },
            items: {
                type: Array,
                required: true,
            },
        },
        components: {
            PageItem,
        },
        setup(props) {
            function getColClass() {
                return 'col-md-' + 12 / props.cols;
            }

            return {
                getColClass,
            };
        },
    };
</script>

<style>

</style>
