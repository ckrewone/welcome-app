<template>
    <BlockItem :on-click-block="show">
        <template v-slot:default>
            <div class="test"><i class="fa fa-plus plus"/></div>
        </template>
    </BlockItem>
</template>

<script>
    import BlockItem from './BlockItem';
    import { getModal } from '../../store/useStore';
    import {MODAL_TYPES} from '../../../constants/StoreKeys';

    export default {
        components: {
            BlockItem,
        },
        setup() {
            return {
                show: getModal(MODAL_TYPES.ADD_PAGE).show
            }
        }
    };
</script>

<style>
    .plus {
        position: fixed;
        font-size: 30px;
        transform: translate(-50%, 50%);
    }
</style>
