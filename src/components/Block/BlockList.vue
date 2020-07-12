<template>
    <div class="container">
        <div class="row">
            <PageItem v-for="(item, i) in pages" :item="item" :key="i"/>
            <AddBlock/>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import PageItem from './PageItem';
    import AddBlock from './AddBlock';
    import {pages} from '../../store/useStore';

    export default {
        components: {
            PageItem,
            AddBlock
        },
        setup() {

            let addTitle = ref('');
            let addUrl = ref('');
            let activeBlock = ref({});


            return {
                pages,
                addUrl,
                addTitle,
                activeBlock,
            };
        },
    };
</script>

<style scoped>
    .add-item {
        font-size: 5rem;
        color: rgba(0, 0, 0, .8);
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        margin: 0;
    }

    .pointer {
        cursor: pointer;
    }

    .hover {
        position: absolute;
        height: 100%;
        width: 100%;
    }
</style>
