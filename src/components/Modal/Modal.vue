<template>
    <div class="custom-modal">
            <div class="custom-modal__base">
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
</template>

<style scoped>
    .custom-modal {
        z-index: 100;
        position: absolute;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, .5);
    }

    .custom-modal__base {
        padding: 2rem;
        border-radius: 5px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100px;
        min-height: 100px;
        z-index: 101;
    }

    .divider {
        border-top: 1px solid #bbb;
    }

    .custom-modal__body {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .custom-modal__footer {
        padding-top: 1rem;
    }

    .custom-modal__header {
        font-size: 2rem;
    }

</style>
