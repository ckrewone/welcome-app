import {ref, computed, watch} from 'vue';

export default function useModal() {
    const state = ref({show: false});

    function show() {
        state.value.show = true;
    }

    const history = [];
    history.push(state); // push initial state

    watch(state, (newState) => {
        history.push(newState);
    });


    function hide() {
        state.value.hide = true;
    }

    const isShow = computed(() => state.value.show);

    return {
        show,
        hide,
        isShow,
    };
}
