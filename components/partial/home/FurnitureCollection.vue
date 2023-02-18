<template>
    <div class="row cat-banner-row furniture">
        <div class="col-xl-3 col-xxl-4">
            <div class="cat-banner row no-gutters">
                <div
                    class="cat-banner-list col-sm-6 d-xl-none d-xxl-flex"
                    v-lazy:background-image="'./images/home/banners/banner-bg-2.jpg'"
                >
                    <div class="banner-list-content">
                        <h2>
                            <nuxt-link to="/shop/sidebar/list">Furniture</nuxt-link>
                        </h2>

                        <ul>
                            <li>
                                <nuxt-link to="/shop/sidebar/list">bedroom</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/shop/sidebar/list">Office</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/shop/sidebar/list">Living Room</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/shop/sidebar/list">Kitchen & Dining</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/shop/sidebar/list">Decoration</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/shop/sidebar/list">Outdoor</nuxt-link>
                            </li>
                            <li class="list-all-link">
                                <nuxt-link to="/shop/sidebar/list">See All Departments</nuxt-link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                

                <div class="col-sm-6 col-xl-12 col-xxl-6">
                    <div class="banner banner-overlay">
                        <nuxt-link to="/shop/sidebar/3cols">
                            <img
                                v-lazy="'./images/home/banners/banner-6.jpg'"
                                width="240"
                                height="400"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content">
                            <h4 class="banner-subtitle text-white">
                                <a href="javascript:;">Best Deals</a>
                            </h4>
                            
                            <h3 class="banner-title text-white">
                                <a href="javascript:;">
                                    Furniture Sets
                                    <br />
                                    <span>Up To 30% Off</span>
                                </a>
                            </h3>
                            
                            <nuxt-link to="/shop/sidebar/3cols" class="banner-link">
                                Shop Now
                                <i class="icon-long-arrow-right"></i>
                            </nuxt-link>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        

        <div class="col-xl-9 col-xxl-8">
            <div class="swiper-carousel carousel-with-shadow swiper-1">
                <div v-swiper:swiper1="carouselSetting1">
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="(product, index) in products.slice(0, 4)"
                            :key="index"
                        >
                            <product-twelve :product="product"></product-twelve>
                        </div>
                    </div>
                </div>

                <div class="swiper-nav nav-side">
                    <div class="swiper-prev">
                        <i class="icon-angle-left"></i>
                    </div>
                    <div class="swiper-next">
                        <i class="icon-angle-right"></i>
                    </div>
                </div>
                <div class="swiper-dots d-md-none"></div>
            </div>
            
        </div>
        
    </div>
</template>
<script>
import ProductTwelve from '~/components/elements/products/ProductTwelve';
import { carouselSetting1 } from '~/utilities/carousel';

export default {
    components: {
        ProductTwelve
    },
    props: {
        products: Array
    },
    data: function() {
        return {
            carouselSetting1: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.furniture .swiper-next',
                    prevEl: '.furniture .swiper-prev'
                },
                pagination: {
                    el: '.furniture .swiper-dots',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2
                    },
                    1500: {
                        slidesPerView: 3
                    }
                }
            }
        };
    }
};
</script>