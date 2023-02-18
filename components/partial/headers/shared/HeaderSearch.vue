<template>
    <div
        class="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block"
    >
        <a href="#" class="search-toggle" role="button">
            <i class="icon-search"></i>
        </a>
        <form
            action="#"
            method="get"
            @click.stop="showSearchForm"
            @submit.prevent="submitSearchForm"
        >
            <div class="header-search-wrapper search-wrapper-wide">
                <div class="select-custom">
                    <select
                        id="cat"
                        name="cat"
                        class="bg-transparent"
                        v-model="category"
                        @change="searchProducts"
                    >
                        <option :value="null">All Categories</option>
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                        <option value="lighting">Lighting</option>
                        <option value="decoration">Decoration</option>
                        <option value="electronics">Electronics</option>
                        <option value="armchairs-and-chaises">Armchairs & Chaises</option>
                        <option value="beds">Beds</option>
                        <option value="furniture">Furniture</option>
                        <option value="coffee-and-tables">Coffee & Tables</option>
                    </select>
                </div>
                <label for="q" class="sr-only">Search</label>

                <input
                    type="text"
                    class="form-control"
                    placeholder="Search product ..."
                    required
                    v-model="searchTerm"
                    @input="searchProducts"
                />
                <button class="btn btn-primary" type="submit">
                    <span class="sr-only">Search</span>
                    <i class="icon-search"></i>
                </button>
            </div>

            <div class="live-search-list">
                <div
                    class="autocomplete-suggestions"
                    v-if="suggestions.length > 0"
                    @click="goProductPage"
                >
                    <nuxt-link
                        :to="'/product/default/' + product.slug"
                        class="autocomplete-suggestion"
                        data-index="0"
                        v-for="product in suggestions"
                        :key="product.id"
                    >
                        <img
                            :src="`${baseUrl}${product.sm_pictures[0].url}`"
                            alt="
								Product
							"
                            width="40"
                            height="40"
                            class="product-image"
                        />

                        <div class="search-name" v-html="matchEmphasize(product.name)"></div>
                        <span class="search-price">
                            <div
                                class="product-price mb-0"
                                v-if="product.minPrice == product.maxPrice"
                            >${{ product.minPrice.toFixed(2) }}</div>
                            <template v-else>
                                <div class="product-price mb-0" v-if="product.variants.length == 0">
                                    <span class="new-price">${{ product.minPrice.toFixed(2) }}</span>
                                    <span class="old-price">${{ product.maxPrice.toFixed(2) }}</span>
                                </div>
                                <div
                                    class="product-price mb-0"
                                    v-else
                                >${{product.minPrice.toFixed(2)}} - ${{product.maxPrice.toFixed(2)}}</div>
                            </template>
                        </span>
                    </nuxt-link>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Repository, { baseUrl } from '~/repositories/repository.js';

export default {
    data: function() {
        return {
            searchTerm: '',
            suggestions: [],
            timeouts: [],
            baseUrl: baseUrl,
            category: null
        };
    },
    computed: {
        ...mapGetters('demo', ['currentDemo'])
    },
    mounted: function() {
        document
            .querySelector('body')
            .addEventListener('click', this.closeSearchForm);
    },
    methods: {
        searchProducts: function() {
            if (this.searchTerm.length > 2) {
                var searchTerm = this.searchTerm;
                this.timeouts.map(timeout => {
                    window.clearTimeout(timeout);
                });
                this.timeouts.push(
                    setTimeout(() => {
                        Repository.get(`${baseUrl}/search`, {
                            params: {
                                searchTerm: searchTerm,
                                demo: this.currentDemo,
                                category: this.category
                            }
                        })
                            .then(response => {
                                this.suggestions = response.data.reduce(
                                    (acc, cur) => {
                                        let max = 0;
                                        let min = 99999;
                                        cur.variants.map(item => {
                                            if (min > item.price)
                                                min = item.price;
                                            if (max < item.price)
                                                max = item.price;
                                        }, []);

                                        if (cur.variants.length == 0) {
                                            min = cur.sale_price
                                                ? cur.sale_price
                                                : cur.price;
                                            max = cur.price;
                                        }
                                        return [
                                            ...acc,
                                            {
                                                ...cur,
                                                minPrice: min,
                                                maxPrice: max
                                            }
                                        ];
                                    },
                                    []
                                );
                            })
                            .catch(error => {});
                    }, 500)
                );
            } else {
                this.timeouts.map(timeout => {
                    window.clearTimeout(timeout);
                });
                this.suggestions = [];
            }
        },
        matchEmphasize: function(name) {
            var regExp = new RegExp(this.searchTerm, 'i');
            return name.replace(
                regExp,
                match => '<strong>' + match + '</strong>'
            );
        },
        goProductPage: function() {
            this.searchTerm = '';
            this.suggestions = [];
        },
        searchToggle: function(e) {
            document.querySelector('.header-search').classList.toggle('show');
            e.stopPropagation();
        },

        showSearchForm: function() {
            document
                .querySelector('.header .header-search')
                .classList.add('show');
        },
        closeSearchForm: function(e) {
            document
                .querySelector('.header .header-search')
                .classList.remove('show');
        },
        submitSearchForm: function(e) {
            this.closeSearchForm();
            this.$router.push({
                path: '/shop/sidebar/3cols',
                query: {
                    searchTerm: this.searchTerm,
                    category: this.category
                }
            });
        }
    }
};
</script>