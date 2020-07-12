import {ref, computed} from 'vue';

export function useModal() {
    let showModal = ref(false);

    function show() {
        const newShow = ref(true);
        showModal.value = newShow.value;
    }

    function hide() {
        showModal.value = false;
    }

    const isShow = computed(() => showModal.value);

    return  {
        show,
        hide,
        isShow,
    };
}
