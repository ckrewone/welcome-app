export default function useLocalStorage() {
    function getKey(key) {
        return window.localStorage.getItem(key);
    }

    function setKey(key, value) {
        window.localStorage.setItem(key, value);
    }

    return {
        getKey,
        setKey
    }
}
