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
