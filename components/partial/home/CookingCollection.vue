<template>
    <div class="row cat-banner-row cooking">
        <div class="col-xl-3 col-xxl-4">
            <div class="cat-banner row no-gutters">
                <div
                    class="cat-banner-list col-sm-6 d-xl-none d-xxl-flex"
                    v-lazy:background-image="'./images/home/banners/banner-bg-4.jpg'"
                >
                    <div class="banner-list-content">
                        <h2>
                            <nuxt-link to="/shop/sidebar/list">Cooking</nuxt-link>
                        </h2>

                        <ul>
                            <li>
                                <nuxt-link to="/shop/sidebar/list">Cookware</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/shop/sidebar/list">Dinnerware</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/shop/sidebar/list">Cups</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/shop/sidebar/list">Microwaves</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/shop/sidebar/list">Toasters</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/shop/sidebar/list">Coffee Makers</nuxt-link>
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
                                v-lazy="'./images/home/banners/banner-10.jpg'"
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
                        <div class="swiper-slide" v-for="(product, index) in cooking" :key="index">
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
import { catFilter } from '~/utilities/common';

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
                    nextEl: '.cooking .swiper-next',
                    prevEl: '.cooking .swiper-prev'
                },
                pagination: {
                    el: '.cooking .swiper-dots',
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
    },
    computed: {
        cooking: function() {
            return catFilter(this.products, ['cooking']).slice(0, 5);
        }
    }
};
</script>