import {ref} from 'vue';

export default function useLoader() {
    let loader = ref(false);

    function setLoader(value) {
        if(!value) {
            setTimeout(() => {
                loader.value = value;
            }, getLoaderTimeout());
        } else {
            loader.value = value;
        }
    }

    function getLoaderTimeout() {
        if(window.innerWidth > 1080) {
            return 1500;
        } else {
            return 2500;
        }
    }

    return {
        loader,
        setLoader
    }
}
