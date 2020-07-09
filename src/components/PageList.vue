<template>
    <div class="container shadow-sm index">
        <div class="row">
            <div v-for="(item, i) in items" :key="i" class="col-3 mt-2 mb-2">
                <div class="shadow rounded-sm list-item pointer" @click="redirect(item.url)">
                    <div class="list-item__title" >{{ item.title }}</div>
                    <img class="image" :src="getIcon(item.url)"/>
                </div>
            </div>
            <div class="col-3 mt-2 mb-2">
                <div v-if="activeAdding" class="shadow rounded-sm list-item">
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
                <div v-else class="shadow rounded-sm list-item">
                    <div class="btn btn-bordered-primary add-item" @click="activeAdding = true">+</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';

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

            let activeAdding = ref(false);
            let addTitle = ref('');
            let addUrl = ref('');

            function addToList() {
                activeAdding.value = false;
                items.value.push({
                    title: addTitle.value,
                    url: addUrl.value,
                });
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
                return `background: url("${getIcon(url)}"); filter: blur(15px);`
            }

            return {
                items,
                activeAdding,
                addToList,
                addUrl,
                addTitle,
                getIcon,
                redirect,
                getBackground
            };
        },
    };
</script>

<style scoped>
    .list-item{
        height: 150px;
    }
    .list-item__title {
        font-size: 2rem;
        padding-top: 10px;
    }
    .add-item {
        font-size: 3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        margin: 0;
    }
    .image {
        height: 16px;
    }
    .pointer {
        cursor: pointer;
    }
    .back {
        width: 100%;
        height: 100%;
    }
    .index {
        z-index: 10;
    }
</style>
