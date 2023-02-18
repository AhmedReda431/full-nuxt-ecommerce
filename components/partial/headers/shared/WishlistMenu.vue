<template>
    <nuxt-link to="/shop/wishlist" title="Wishlist" class="wishlist-link">
        <i class="icon-heart-o"></i>
        <span class="wishlist-count">{{ wishlistQty }}</span>

        <span class="wishlist-txt">Wishlist</span>
    </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('wishlist', ['wishlistQty'])
    }
};
</script>