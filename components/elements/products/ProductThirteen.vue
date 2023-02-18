<template>
    <div class="product product-sm">
        <figure class="product-media">
            <nuxt-link :to="'/product/default/'+ product.slug">
                <img
                    v-lazy="`${baseUrl}${product.sm_pictures[0].url}`"
                    alt="Product"
                    :width="product.sm_pictures[0].width"
                    :height="product.sm_pictures[0].height"
                    class="product-image"
                />
                <img
                    v-lazy="`${baseUrl}${product.sm_pictures[1].url}`"
                    alt="Product"
                    :width="product.sm_pictures[1].width"
                    :height="product.sm_pictures[1].height"
                    class="product-image-hover"
                    v-if="product.sm_pictures[1]"
                />
            </nuxt-link>
        </figure>

        <div class="product-body">
            <h3 class="product-title">
                <nuxt-link :to="'/product/default/'+ product.slug">{{ product.name }}</nuxt-link>
            </h3>

            <div class="product-price" v-if="product.stock==0" key="outPrice">
                <span class="out-price">${{ product.price.toFixed(2) }}</span>
            </div>

            <template v-else>
                <div class="product-price" v-if="minPrice == maxPrice">${{ minPrice.toFixed(2) }}</div>
                <template v-else>
                    <div class="product-price" v-if="product.variants.length == 0">
                        <span class="new-price">${{ minPrice.toFixed(2) }}</span>
                        <span class="old-price">${{ maxPrice.toFixed(2) }}</span>
                    </div>
                    <div
                        class="product-price"
                        v-else
                    >${{minPrice.toFixed(2)}}&ndash;${{maxPrice.toFixed(2)}}</div>
                </template>
            </template>
        </div>
        
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/repositories/repository';
export default {
    props: {
        product: Object
    },
    data: function() {
        return {
            baseUrl: baseUrl,
            maxPrice: 0,
            minPrice: 99999
        };
    },
    computed: {
        ...mapGetters('cart', ['canAddToCart']),
        ...mapGetters('wishlist', ['isInWishlist'])
    },

    created: function() {
        let min = this.minPrice;
        let max = this.maxPrice;
        this.product.variants.map(item => {
            if (min > item.price) min = item.price;
            if (max < item.price) max = item.price;
        }, []);

        if (this.product.variants.length == 0) {
            min = this.product.sale_price
                ? this.product.sale_price
                : this.product.price;
            max = this.product.price;
        }

        this.minPrice = min;
        this.maxPrice = max;
    },
    methods: {
        ...mapActions('cart', ['addToCart']),
        ...mapActions('wishlist', ['addToWishlist']),
        quickView: function() {
            this.$modal.show(
                () => import('~/components/elements/modals/QuickViewModal'),
                {
                    product: this.product
                },
                { width: '1030', height: 'auto', adaptive: true }
            );
        }
    }
};
</script>