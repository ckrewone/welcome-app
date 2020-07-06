import {ref} from 'vue';

export default function useModal() {
    let show = ref(true);

    function setShow(value) {
        show.value = value;
    }

    return {
        show,
        setShow
    }
}
