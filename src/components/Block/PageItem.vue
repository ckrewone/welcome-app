<template>
    <BlockItem :on-click-block="redirect">
        <template v-slot:default>
            <img class="image" :src="getIcon()" alt=""/>
        </template>
        <template v-slot:footer>{{item.title}}</template>
    </BlockItem>
</template>

<script>
    import BlockItem from './BlockItem';

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

            function redirect() {
                window.location.href = props.item.url;
            }

            return {
                getIcon,
                redirect,
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
</style>
