<template>
    <div class="container">
        <div class="row">
            <div
                    v-for="(item, i) in items"
                    :key="i"
                    class="col-3 mt-2 mb-2"
            >
                <div
                        class="hover pointer"
                        @mouseover="active(item.url)"
                        @mouseout="deactive(item.url)"
                        @click="redirect(item.url)"
                />
                <div
                        class="rounded-sm list-item list-item--transition"
                        :class="activeBlock[item.url] ? 'shadow-lg selected' : ''"
                        @click="redirect(item.url)"
                >
                    <div class="list-item__title">{{ item.title }}</div>
                    <img class="image" :src="getIcon(item.url)"/>
                </div>
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
    import {LOCAL_STORAGE_KEY} from '../../constants/LocalStorageKeys';

    export default {
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

            function getIcon(url) {
                return url + '/favicon.ico';
            }

            function redirect(url) {
                window.location.href = url;
            }

            function getBackground(url) {
                return `background: url("${getIcon(url)}"); filter: blur(15px);`;
            }

            function active(url) {
                activeBlock.value[url] = true;
            }

            function deactive(url) {
                activeBlock.value[url] = false;
            }

            return {
                items,
                activeAdding,
                addToList,
                addUrl,
                addTitle,
                getIcon,
                redirect,
                getBackground,
                active,
                activeBlock,
                deactive
            };
        },
    };
</script>

<style scoped>
    .list-item {
        height: 150px;
        background: rgba(255, 255, 255, .3);
    }

    .list-item--transition {
        transition: all .2s ease-in-out;
    }

    .list-item__title {
        font-size: 3rem;
        color: rgba(0,0,0,.8);
        padding-top: 10px;
    }

    .selected {
        background: rgba(255,255,255,.5);
    }
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

    .image {
        margin-top: 10px;
        height: 24px;
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
