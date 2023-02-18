<template>
    <div class="widget widget-posts">
        <h4 class="widget-title">
            <span>Latest Blog Posts</span>
        </h4>
        <div class="swiper-carousel carousel-with-shadow">
            <div class="mb-0" v-swiper:swiper1="carouselSetting">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(blog, index) in blogs" :key="index">
                        <blog-four :blog="blog" class="mb-2"></blog-four>
                    </div>
                </div>
            </div>
            <div class="swiper-dots"></div>
        </div>
    </div>
</template>
<script>
import BlogFour from '~/components/elements/blogs/BlogFour';
import { carouselSettingSingle } from '~/utilities/carousel';

export default {
    components: {
        BlogFour
    },
    props: {
        blogs: Array
    },
    data: function() {
        return {
            carouselSetting: {
                ...carouselSettingSingle,
                slidesPerView: 1,
                pagination: {
                    el: '.widget-posts .swiper-dots',
                    clickable: true
                }
            }
        };
    }
};
</script>