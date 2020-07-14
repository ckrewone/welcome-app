<template>
    <div class="custom-modal">
        <transition name="zoom">
            <div class="container" v-if="isShow">
                <div class="row">
                    <div class="col-md-3"/>
                    <div class="col-md-6 custom-modal__base">
                        <div class="custom-modal__header">
                            <slot name="header">
                                Header
                            </slot>
                        </div>
                        <div class="divider"></div>
                        <div class="custom-modal__body">
                            <slot name="body">
                                This is default body.
                            </slot>
                        </div>
                        <div class="custom-modal__footer">
                            <slot name="footer">
                                This is default footer
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <div class="custom-modal custom-modal__background"
             v-if="isShow"
             @click="hide"
        >
        </div>
    </div>
</template>
<script>
    import {getModal} from '../../store/useStore';
    import {computed} from 'vue';

    export default {
        props: {
            modalType: {
                type: String,
                required: true,
            },
        },
        setup(props) {
            return {
                isShow: computed(() => getModal(props.modalType).isShow),
                hide: getModal(props.modalType).hide,
            };
        },
    };
</script>
<style>
    .custom-modal {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        text-align: center;
    }

    .custom-modal__background {
        opacity: 0;
        z-index: 200;
    }

    .custom-modal__base {
        position: relative;
        z-index: 201;
        margin-top: 10%;
        padding: 30px;
        border-radius: 10px;
        background: #fff;
    }

    .divider {
        border-top: 1px solid #bbb;
    }

    .custom-modal__body {
        padding-top: 2rem;
        padding-bottom: 1rem;
        font-size: 1.5rem;
    }

    .custom-modal__footer {
        padding-top: 2rem;
    }

    .custom-modal__header {
        font-size: 3rem;
    }

</style>
