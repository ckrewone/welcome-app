<template>
    <div
            class="pointer col-md-3 col-sm-6 list-item"
            :class="activeBlock ? 'list-item--hover' : ''"
            @mouseover="activeBlock = true"
            @mouseout="activeBlock = false"
            @click="onClickBlock"
   >
        <div
                class="rounded-sm list-item__base list-item--transition row"
                :class="activeBlock ? 'shadow-lg selected' : ''"
        >
          <div class="list-item__delete col-md-12 list-item--transition"
               :class="activeBlock ? 'list-item__delete--hover' : ''"
          >
            <slot name="delete"/>
          </div>
            <div class="list-item__main col-12 mt-3">
                <slot/>
            </div>
          <div class="list-item__plus col-12 mt-3 list-item--transition "
               :class="activeBlock ? 'list-item__plus--hover' : ''"
          >
            <slot name="plus"/>
          </div>
            <div class="list-item__title col-md-12"
                 :class="activeBlock ? 'list-item__title--hover' : ''"
            >
                <slot name="footer"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';

    export default {
        props: {
            onClickBlock: {
                type: Function,
                require: true
            }
        },
        setup() {
            const activeBlock = ref(false);
            const getColClass = ref('col-md-3');

            return {
                activeBlock,
                getColClass
            };
        },
    };
</script>

<style>
    .list-item{
        transition: padding .2s ease-in-out;
        padding: 25px;
        text-align: center;
        z-index: 100;
    }

    .list-item--hover {
        padding: 15px;
    }

    .list-item__base {
        height: 15vh;
        background: rgba(200, 200, 200, .3);
    }

    .list-item--transition {
        transition: all .2s ease-in-out;
    }

    .list-item__title {
        transition: font-size .2s ease-in-out;
        font-size: 1.5rem;
        text-align: center;
        padding-bottom: 10px;
        color: rgba(0, 0, 0, .8);
    }

    .list-item__title--hover{
        font-size: 1.8rem;
    }

    .list-item__plus {
      position: absolute;
      font-size: 2rem;
      top: 50%;
      left: 50%;
      margin-top: 0 !important;
      transform: translate(-50%, -50%);
    }
    .list-item__plus--hover {
      font-size: 2.5rem;
      padding-bottom: 10px;
    }

    .list-item__delete {
      padding: 25px;
      position: absolute;
      width: 20px;
      z-index: 101;
      top: 5%;
      right: 0;
      transform: translate(-50%, 0);
      opacity: 0;

    }
    .list-item__delete--hover {
      opacity: 1;
      padding: 15px;
    }

</style>
