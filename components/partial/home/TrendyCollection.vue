<template>
    <div class="bg-lighter trending-products trendy">
        <div class="heading heading-flex mb-3">
            <div class="heading-left">
                <h2 class="title">Trending Today</h2>
            </div>

            <div class="heading-right">
                <tabs class="nav-pills justify-content-center" :data="tabsData" id="trendy"></tabs>
            </div>
        </div>
        <div class="tab-content tab-content-carousel">
            <div class="tab-pane p-0 fade show active" id="trendy-all">
                <div class="swiper-carousel carousel-with-shadow swiper-1">
                    <div class="mb-0" v-swiper:swiper1="carouselSetting1">
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="(product, index) in products.slice(0, 6)"
                                :key="index"
                            >
                                <product-twelve :product="product"></product-twelve>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-nav">
                        <div class="swiper-prev">
                            <i class="icon-angle-left"></i>
                        </div>
                        <div class="swiper-next">
                            <i class="icon-angle-right"></i>
                        </div>
                    </div>
                    <div class="swiper-dots"></div>
                </div>
            </div>
            <div class="tab-pane p-0 fade" id="trendy-clothing">
                <div class="swiper-carousel carousel-with-shadow swiper-4">
                    <div class="mb-0" v-swiper:swiper4="carouselSetting4">
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="(product, index) in clothing"
                                :key="index"
                            >
                                <product-twelve :product="product"></product-twelve>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-nav">
                        <div class="swiper-prev">
                            <i class="icon-angle-left"></i>
                        </div>
                        <div class="swiper-next">
                            <i class="icon-angle-right"></i>
                        </div>
                    </div>
                    <div class="swiper-dots"></div>
                </div>
            </div>
            <div class="tab-pane p-0 fade" id="trendy-cooking">
                <div class="swiper-carousel carousel-with-shadow swiper-5">
                    <div class="mb-0" v-swiper:swiper5="carouselSetting5">
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="(product, index) in cooking"
                                :key="index"
                            >
                                <product-twelve :product="product"></product-twelve>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-nav">
                        <div class="swiper-prev">
                            <i class="icon-angle-left"></i>
                        </div>
                        <div class="swiper-next">
                            <i class="icon-angle-right"></i>
                        </div>
                    </div>
                    <div class="swiper-dots d-sm-none"></div>
                </div>
            </div>
            <div class="tab-pane p-0 fade" id="trendy-electronics">
                <div class="swiper-carousel carousel-with-shadow swiper-2">
                    <div class="mb-0" v-swiper:swiper2="carouselSetting2">
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="(product, index) in electronics"
                                :key="index"
                            >
                                <product-twelve :product="product"></product-twelve>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-nav">
                        <div class="swiper-prev">
                            <i class="icon-angle-left"></i>
                        </div>
                        <div class="swiper-next">
                            <i class="icon-angle-right"></i>
                        </div>
                    </div>
                    <div class="swiper-dots"></div>
                </div>
            </div>
            <div class="tab-pane p-0 fade" id="trendy-furniture">
                <div class="swiper-carousel carousel-with-shadow swiper-3">
                    <div class="mb-0" v-swiper:swiper3="carouselSetting3">
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="(product, index) in furniture"
                                :key="index"
                            >
                                <product-twelve :product="product"></product-twelve>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-dots d-md-none"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Tabs from '~/components/elements/Tabs';
import ProductTwelve from '~/components/elements/products/ProductTwelve';
import { catFilter } from '~/utilities/common';
import { carouselSetting1 } from '~/utilities/carousel';

export default {
    components: {
        Tabs,
        ProductTwelve
    },
    props: {
        products: Array
    },
    data: function() {
        return {
            tabsData: [
                {
                    id: 'all',
                    title: 'All',
                    active: true
                },
                {
                    id: 'clothing',
                    title: 'Clothes'
                },
                {
                    id: 'cooking',
                    title: 'Cooking'
                },
                {
                    id: 'electronics',
                    title: 'Electronics'
                },
                {
                    id: 'furniture',
                    title: 'Furniture'
                }
            ],
            carouselSetting1: {
                ...carouselSetting1,
                slidesPerView: 5,
                navigation: {
                    nextEl: '.trendy .swiper-1 .swiper-next',
                    prevEl: '.trendy .swiper-1 .swiper-prev'
                },
                pagination: {
                    el: '.trendy .swiper-1 .swiper-dots',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2
                    },
                    1300: {
                        slidesPerView: 3
                    },
                    1500: {
                        slidesPerView: 4
                    }
                }
            },
            carouselSetting2: {
                ...carouselSetting1,
                slidesPerView: 5,
                navigation: {
                    nextEl: '.trendy .swiper-2 .swiper-next',
                    prevEl: '.trendy .swiper-2 .swiper-prev'
                },
                pagination: {
                    el: '.trendy .swiper-2 .swiper-dots',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2
                    },
                    1300: {
                        slidesPerView: 3
                    },
                    1500: {
                        slidesPerView: 4
                    }
                }
            },
            carouselSetting3: {
                ...carouselSetting1,
                slidesPerView: 5,
                navigation: {
                    nextEl: '.trendy .swiper-3 .swiper-next',
                    prevEl: '.trendy .swiper-3 .swiper-prev'
                },
                pagination: {
                    el: '.trendy .swiper-3 .swiper-dots',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2
                    },
                    1300: {
                        slidesPerView: 3
                    },
                    1500: {
                        slidesPerView: 4
                    }
                }
            },
            carouselSetting4: {
                ...carouselSetting1,
                slidesPerView: 5,
                navigation: {
                    nextEl: '.trendy .swiper-4 .swiper-next',
                    prevEl: '.trendy .swiper-4 .swiper-prev'
                },
                pagination: {
                    el: '.trendy .swiper-4 .swiper-dots',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2
                    },
                    1300: {
                        slidesPerView: 3
                    },
                    1500: {
                        slidesPerView: 4
                    }
                }
            },
            carouselSetting5: {
                ...carouselSetting1,
                slidesPerView: 5,
                navigation: {
                    nextEl: '.trendy .swiper-5 .swiper-next',
                    prevEl: '.trendy .swiper-5 .swiper-prev'
                },
                pagination: {
                    el: '.trendy .swiper-5 .swiper-dots',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2
                    },
                    1300: {
                        slidesPerView: 3
                    },
                    1500: {
                        slidesPerView: 4
                    }
                }
            }
        };
    },
    computed: {
        electronics: function() {
            return catFilter(this.products, ['electronics']).slice(0, 6);
        },
        cooking: function() {
            return catFilter(this.products, ['cooking']).slice(0, 6);
        },
        furniture: function() {
            return catFilter(this.products, ['furniture']).slice(0, 6);
        },
        clothing: function() {
            return catFilter(this.products, ['clothing']).slice(0, 6);
        }
    }
};
</script>