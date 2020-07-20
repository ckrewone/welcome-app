<template>
    <div class="carousel">
        <div v-for="(slide, i) in slides" :key="i">
            <transition-group
                    name="fade"
                    :enter-active-class="!isNext ? 'fadeInLeft' : 'fadeInRight'"
                    :leave-active-class="!isNext ? 'fadeOutRight' : 'fadeOutLeft'"
            >
                <div class="carousel__slide" v-if="isActiveSlide(slide)">
                    <BlockList :page-index="i"/>
                </div>
            </transition-group>
        </div>
        <button class="btn btn-link carousel-control-prev" v-if="slides.length > 1" role="button" @click="prevSlide">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="btn btn-link carousel-control-next" v-if="slides.length > 1" role="button" @click="nextSlide">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
    </div>
</template>

<script>
    import {wallpaper, pages} from '../store/useStore';
    import {ref, onMounted} from 'vue';
    import BlockList from './Block/BlockList';

    export default {
        components: {BlockList},
        setup() {
            const slides = ref([]);
            const activeSlide = ref({});
            const activeIndex = ref({});
            const isNext = ref(false);
            onMounted(() => {
                pages.value.forEach((page, i) => {
                    if( !(i % 12) ) slides.value.push(page.title);
                })
                activeSlide.value = slides.value[0];
                activeIndex.value = 0;
            });

            function isActiveSlide(title) {
                return activeSlide.value === title;
            }

            function nextSlide() {
                isNext.value = true;
                activeIndex.value++;
                if (activeIndex.value > slides.value.length - 1) {
                    activeIndex.value = 0;
                    activeSlide.value = slides.value[activeIndex.value];
                } else {
                    activeSlide.value = slides.value[activeIndex.value];
                }
            }

            function prevSlide() {
                isNext.value = false
                activeIndex.value--;
                if (activeIndex.value < 0) {
                    activeIndex.value = slides.value.length - 1;
                    activeSlide.value = slides.value[activeIndex.value];
                } else {
                    activeSlide.value = slides.value[activeIndex.value];
                }
            }


            return {
                wallpaper,
                slides,
                activeSlide,
                isActiveSlide,
                nextSlide,
                prevSlide,
                isNext
            };
        },
    };
</script>

<style scoped>
    .carousel__slide {
        position: absolute;
        width: 100%;
    }
    .carousel-control-next {
        z-index: 200;
        height: 60px;
        width: 60px;
        position: fixed;
        top: 50%;
        right: 5%;
        transform: translate(0, -50%);
    }

    .carousel-control-prev {
        z-index: 200;
        height: 60px;
        width: 60px;
        position: fixed;
        top: 50%;
        left: 5%;
        transform: translate(0, -50%);
    }
</style>
