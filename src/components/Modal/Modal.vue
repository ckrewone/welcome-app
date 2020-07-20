<template>
    <div class="custom-modal" :class="isShow ? 'custom-modal--visible' : ''">
            <div class="container">
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
        <div class="custom-modal custom-modal__background"
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
        transition: opacity .1s ease-in, padding-top .1s ease-in-out;
        opacity: 0;
        padding-top: 20px;
    }


    .custom-modal--visible {
      opacity: 1;
      padding-top: 0;
      z-index: 150;
    }

    .custom-modal__background {
        top: 0;
        left: 0;
        position: absolute;
        height: 100vh;
        width: 100vw;
        background: black;
        opacity: 0.4;
        z-index: 200;
    }

    .custom-modal__base {
        position: relative;
        z-index: 201;
        margin-top: 20px;
        padding: 30px;
        border-radius: 5px;
        background: #fff;
    }

    .divider {
        border-top: 1px solid #bbb;
    }

    .custom-modal__body {
        padding-top: 1rem;
        padding-bottom: .7rem;
    }

    .custom-modal__footer {
        padding-top: 1rem;
    }

    .custom-modal__header {
        font-size: 1rem;
    }

</style>
