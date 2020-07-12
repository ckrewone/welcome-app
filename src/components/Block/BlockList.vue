<template>
    <div class="container">
        <div class="row">
            <div
                    v-for="(item, i) in items"
                    :key="i"
                    class="col-2 mt-2 mb-2"
            >
                <PageItem :item="item"/>
            </div>
            <div class="col-3 mt-2 mb-2">
                <div
                        class="hover pointer"
                        @mouseover="active('add')"
                        @mouseout="deactive('add')"
                />
                <div
                        v-if="activeAdding"
                        class="rounded-sm list-item list-item--transition"
                        :class="activeBlock['add'] ? 'shadow-lg selected' : ''"
                >
                    <div class="input-group input-group-sm p-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Title:</span>
                        </div>
                        <input type="text" class="form-control" v-model="addTitle"/>
                    </div>
                    <div class="input-group input-group-sm p-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Url:</span>
                        </div>
                        <input type="text" v-model="addUrl" class="form-control"/>
                    </div>
                    <button class="btn btn-link center p-1" @click="addToList" type="button">Add</button>
                </div>
                <div v-else
                     class="shadow rounded-sm list-item list-item--transition"
                     :class="activeBlock['add'] ? 'shadow-lg selected' : ''"
                >
                    <div class="btn btn-bordered-primary add-item" @click="activeAdding = true">+</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref, onMounted, watch} from 'vue';
    import {LOCAL_STORAGE_KEY} from '../../../constants/LocalStorageKeys';
    import PageItem from './PageItem';

    export default {
        components: {
            PageItem,
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
        color: rgba(0,0,0,.8);
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
