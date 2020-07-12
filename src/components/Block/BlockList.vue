<template>
    <div class="container">
        <div class="row">
            <PageItem v-for="(item, i) in items" :item="item" :key="i"/>
            <AddBlock/>
        </div>
    </div>
</template>

<script>
    import {ref, onMounted, watch} from 'vue';
    import {LOCAL_STORAGE_KEY} from '../../../constants/LocalStorageKeys';
    import PageItem from './PageItem';
    import AddBlock from './AddBlock';

    export default {
        components: {
            PageItem,
            AddBlock
        },
        setup() {
            let items = ref([
                {
                    title: 'Google',
                    url: 'https://www.google.pl',
                },
                {
                    title: '9gag',
                    url: 'https://9gag.com',
                },
                {
                    title: 'FB',
                    url: 'https://fb.com',
                },
            ]);

            onMounted(() => {
                const savedItems = window.localStorage.getItem(LOCAL_STORAGE_KEY.ITEMS);
                if (savedItems) {
                    items.value = savedItems.split('|').map(el => JSON.parse(el));
                }
            });

            watch(items, (val) => {
                window.localStorage.setItem(LOCAL_STORAGE_KEY.ITEMS, val.map(el => JSON.stringify(el)).join('|'));
            });

            let activeAdding = ref(false);
            let addTitle = ref('');
            let addUrl = ref('');
            let activeBlock = ref({});

            function addToList() {
                activeAdding.value = false;
                const newItems = [...items.value];
                newItems.push({
                    title: addTitle.value,
                    url: addUrl.value,
                });
                items.value = newItems;
                addTitle.value = '';
                addUrl.value = '';
            }

            return {
                items,
                activeAdding,
                addToList,
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
