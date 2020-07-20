<template>
    <BlockItem :on-click-block="redirect">
        <template v-slot:delete>
            <div class="delete-page" @click="deletePage"><i class="fa fa-times"></i></div>
        </template>
        <template v-slot:default>
            <img class="image" :src="getIcon()" alt=""/>
        </template>
        <template v-slot:footer>{{item.title}}</template>
    </BlockItem>
</template>

<script>
    import BlockItem from './BlockItem';
    import {pages} from '../../store/useStore';

    export default {
        props: {
            item: {
                type: Object,
                require: true,
            },
        },
        components: {
            BlockItem,
        },
        setup(props) {

            function getIcon() {
                return props.item.url + '/favicon.ico';
            }

            function deletePage() {
                const newPages = [...pages.value];
                newPages.splice(newPages.findIndex(el => el.id === props.item.id), 1);
                pages.value = newPages;
            }

            function redirect() {
                window.open(props.item.url);
            }

            return {
                getIcon,
                redirect,
                deletePage
            };
        },
    };
</script>

<style>
    .image {
        height: 32px;
    }
    .pointer {
        cursor: pointer;
    }
    .delete-page {
        z-index: 101;
        color: rgba(0,0,0,.4);
        top: 3%;
        right: 10%;
        transition: color .5s ease-in-out;
    }
    .delete-page:hover {
        color: rgba(0,0,0,0.8);
    }
</style>
