import {ref, computed, watch} from 'vue';

let showModal = ref(false);

function show() {
    const newShow = ref(true);
    showModal.value = newShow.value;
}

const history = [];
history.push(showModal); // push initial state

watch(showModal, (newState) => {
    history.push(newState);
});


function hide() {
    showModal.value = false;
}

const isShow = computed(() => showModal.value);

watch(isShow, () => {
    console.log(isShow.value);
});

export {
    show,
    hide,
    isShow,
};
