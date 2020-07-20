<template>
    <Modal :modal-type="type">
        <template v-slot:header>
            Add page
        </template>
        <template v-slot:body>
            <div class="form-group">
              <label>Title</label>
                    <input type="text"
                            class="form-control col-form-label-sm"
                            v-model="title"
                            :class="titleError ? 'is-invalid' : ''"
                    />
                    <div class="invalid-feedback">{{titleError}}</div>
            </div>
            <div class="form-group">
              <label>Absolute url: (i.e. https://www.google.pl)</label>
                    <input type="text"
                           v-model="url"
                           class="form-control col-form-label-sm"
                           :class="urlError ? 'is-invalid' : ''"
                    />
                    <div class="invalid-feedback">{{urlError}}</div>
            </div>
        </template>
        <template v-slot:footer>
            <button class="btn btn-primary" @click="addPage">Add</button>
        </template>
    </Modal>
</template>

<script>
    import Modal from '../Modal/Modal';
    import {ref, computed} from 'vue';
    import {getModal, pages} from '../../store/useStore';
    import {MODAL_TYPES} from '../../../constants/StoreKeys';
    import {v4} from 'uuid';

    export default {
        components: {
            Modal,
        },
        setup() {
            const title = ref('');
            const titleError = ref(null);
            const url = ref('');
            const urlError = ref(null);

            async function addPage() {
                if(await isValid()){
                    addToList();
                    getModal(MODAL_TYPES.ADD_PAGE).hide();
                }
            }

            function addToList() {
                const newItems = [...pages.value];
                newItems.push({
                    id: v4(),
                    title: title.value,
                    url: url.value,
                });
                pages.value = newItems;
                title.value = '';
                url.value = '';
            }

            async function isValid() {
                urlError.value = null;
                titleError.value = null;
                if (!title.value) {
                    titleError.value = 'Title must be defined';
                }
                if (title.value.length > 15) {
                    titleError.value = 'Title is too long (max. 15 chars)';
                }
                if (!url.value) {
                    urlError.value = 'Url must be defined';
                }
                if (!url.value.startsWith('http')) {
                    urlError.value = 'Url must be absolute path';
                }

                return !(urlError.value || titleError.value);


            }

            return {
                title,
                url,
                isShow: computed(() => getModal(MODAL_TYPES.ADD_PAGE).isShow),
                addPage,
                titleError,
                urlError,
                type: MODAL_TYPES.ADD_PAGE
            };
        },
    };
</script>
