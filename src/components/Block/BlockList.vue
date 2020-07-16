<template>
    <div class="container">
        <div class="row">
            <PageItem v-for="(item, i) in showPages" :item="item" :key="i"/>
            <AddBlock v-if="showAdd"/>
        </div>
    </div>
</template>

<script>
    import {ref, computed} from 'vue';
    import PageItem from './PageItem';
    import AddBlock from './AddBlock';
    import {pages} from '../../store/useStore';

    export default {
        components: {
            PageItem,
            AddBlock
        },
        props: [ 'pageIndex'],
        setup(props) {
            let showPages = computed(() => ([...pages.value].splice((12 * props.pageIndex), 12)));
            let showAdd = ref(showPages.value.length < 11)
            let addTitle = ref('');
            let addUrl = ref('');
            let activeBlock = ref({});


            return {
                showPages,
                addUrl,
                addTitle,
                activeBlock,
                showAdd
            };
        },
    };
</script>
