<template>
    <div class="mobile-menu-container">
        <div class="mobile-menu-wrapper">
            <span class="mobile-menu-close" @click="hideMobileMenu">
                <i class="icon-close"></i>
            </span>
            <form action="#" method="get" class="mobile-search" @submit.prevent="submitSearchForm">
                <label for="mobile-search" class="sr-only">Search</label>
                <input
                    type="text"
                    class="form-control"
                    name="mobile-search"
                    id="mobile-search"
                    v-model="searchTerm"
                    placeholder="Search product ..."
                    required
                />
                <button class="btn btn-primary" type="submit">
                    <i class="icon-search"></i>
                </button>
            </form>
            <tabs class="nav-pills-mobile text-center" :data="tabsData"></tabs>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="mobile-nav">
                    <nav class="mobile-nav">
                        <ul class="mobile-menu">
                            <li class="active">
                                <nuxt-link to="/" class="sf-with-ul">Home</nuxt-link>

                                <ul>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-1"
                                        >01 - furniture store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-2"
                                        >02 - furniture store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-3"
                                        >03 - electronic store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-4"
                                        >04 - electronic store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-5"
                                        >05 - fashion store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-6"
                                        >06 - fashion store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-7"
                                        >07 - fashion store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-8"
                                        >08 - fashion store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-9"
                                        >09 - fashion store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-10"
                                        >10 - shoes store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-11"
                                        >11 - furniture simple store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-12"
                                        >12 - fashion simple store</a>
                                    </li>
                                    <li>
                                        <a href="https://d-themes.com/vue/molla/demo-13">13 - market</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-14"
                                        >14 - market fullwidth</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-15"
                                        >15 - lookbook 1</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-16"
                                        >16 - lookbook 2</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-17"
                                        >17 - fashion store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-18"
                                        >18 - fashion store (with sidebar)</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-19"
                                        >19 - games store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-20"
                                        >20 - book store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-21"
                                        >21 - sport store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-22"
                                        >22 - tools store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-23"
                                        >23 - fashion left navigation store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-24"
                                        >24 - extreme sport store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-25"
                                        >25 - jewelry store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-26"
                                        >26 - market store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-28"
                                        >27 - fashion store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-29"
                                        >28 - food market store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-30"
                                        >29 - t-shirts store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-31"
                                        >30 - headphones store</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://d-themes.com/vue/molla/demo-32"
                                        >31 - yoga store</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <nuxt-link to="/shop/sidebar/list">Shop</nuxt-link>
                                <ul>
                                    <li>
                                        <nuxt-link to="/shop/sidebar/list">Shop List</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/shop/sidebar/2cols">Shop Grid 2 Columns</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/shop/sidebar/3cols">Shop Grid 3 Columns</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/shop/sidebar/4cols">Shop Grid 4 Columns</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/shop/nosidebar/boxed">
                                            <span>
                                                Shop Boxed No Sidebar
                                                <span class="tip tip-hot">Hot</span>
                                            </span>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/shop/nosidebar/fullwidth"
                                        >Shop Fullwidth No Sidebar</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/shop/category/boxed">Product Category Boxed</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/shop/category/fullwidth">
                                            <span>
                                                Product Category Fullwidth
                                                <span
                                                    class="tip tip-new"
                                                >New</span>
                                            </span>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/shop/cart">Cart</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/shop/checkout">Checkout</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/shop/wishlist">Wishlist</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/shop/dashboard">My Account</nuxt-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <nuxt-link
                                    to="/product/default/dark-yellow-lace-cut-out-swing-dress"
                                    class="sf-with-ul"
                                >Product</nuxt-link>
                                <ul>
                                    <li>
                                        <nuxt-link
                                            to="/product/default/dark-yellow-lace-cut-out-swing-dress"
                                        >Default</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/product/centered/beige-ring-handle-circle-cross-body-bag"
                                        >Centered</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/product/extended/yellow-tie-strap-block-heel-sandals"
                                        >
                                            <span>
                                                Extended Info
                                                <span class="tip tip-new">New</span>
                                            </span>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/product/gallery/beige-metal-hoop-tote-bag"
                                        >Gallery</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/product/sticky/brown-faux-fur-longline-coat"
                                        >Sticky Info</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/product/sidebar/beige-v-neck-button-cardigan"
                                        >Boxed With Sidebar</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/product/fullwidth/black-faux-leather-chain-trim-sandals"
                                        >Full Width</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/product/masonry/black-denim-dungaree-dress"
                                        >Masonry Sticky Info</nuxt-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <nuxt-link to="/pages/about">Pages</nuxt-link>
                                <ul>
                                    <li>
                                        <nuxt-link to="/pages/about" class="sf-with-ul">About</nuxt-link>

                                        <ul>
                                            <li>
                                                <nuxt-link to="/pages/about">About 01</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/pages/about-2">About 02</nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <nuxt-link to="/pages/contact" class="sf-with-ul">Contact</nuxt-link>

                                        <ul>
                                            <li>
                                                <nuxt-link to="/pages/contact">Contact 01</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/pages/contact-2">Contact 02</nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <nuxt-link to="/pages/login">Login</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/pages/faq">FAQs</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/pages/404">Error 404</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/pages/coming-soon">Coming Soon</nuxt-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <nuxt-link to="/blog/classic" class="sf-with-ul">Blog</nuxt-link>
                                <ul>
                                    <li>
                                        <nuxt-link to="/blog/classic">Classic</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/blog/listing">Listing</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/blog/grid/grid-2">Grid</nuxt-link>
                                        <ul>
                                            <li>
                                                <nuxt-link to="/blog/grid/grid-2">Grid 2 columns</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/blog/grid/grid-3">Grid 3 columns</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/blog/grid/grid-4">Grid 4 columns</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/blog/grid-sidebar">Grid sidebar</nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <nuxt-link to="/blog/masonry/masonry-2">Masonry</nuxt-link>
                                        <ul>
                                            <li>
                                                <nuxt-link
                                                    to="/blog/masonry/masonry-2"
                                                >Masonry 2 columns</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    to="/blog/masonry/masonry-3"
                                                >Masonry 3 columns</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    to="/blog/masonry/masonry-4"
                                                >Masonry 4 columns</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    to="/blog/masonry-sidebar"
                                                >Masonry sidebar</nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <nuxt-link to="/blog/mask/grid">Mask</nuxt-link>
                                        <ul>
                                            <li>
                                                <nuxt-link to="/blog/mask/grid">Blog mask grid</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/blog/mask/masonry">Blog mask masonry</nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/blog/single/default/cras-ornare-tristique-elit."
                                        >Single Post</nuxt-link>
                                        <ul>
                                            <li>
                                                <nuxt-link
                                                    to="/blog/single/default/cras-ornare-tristique-elit."
                                                >Default with sidebar</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    to="/blog/single/fullwidth/fusce-pellentesque-suscipit."
                                                >Fullwidth no sidebar</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    to="/blog/single/sidebar/utaliquam-sollicitzdvudin-leo."
                                                >Fullwidth with sidebar</nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <nuxt-link to="/elements" class="sf-with-ul">Elements</nuxt-link>

                                <ul>
                                    <li>
                                        <nuxt-link to="/elements/products">Products</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/elements/typography">Typography</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/elements/titles">Titles</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/elements/banners">Banners</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/elements/categories">Product Category</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/elements/video-banners">Video Banners</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/elements/buttons">Buttons</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/elements/accordions">Accordions</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/elements/tabs">Tabs</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/elements/testimonials">Testimonials</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/elements/blog-posts">Blog Posts</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/elements/portfolio">Portfolio</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/elements/cta">Call to Action</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/elements/icon-boxes">Icon Boxes</nuxt-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="tab-pane fade" id="mobile-categories">
                    <nav class="mobile-cats-nav">
                        <ul class="mobile-cats-menu">
                            <li class="item-cats-lead">
                                <nuxt-link
                                    :to="'/shop/sidebar/3cols?category=electronics'"
                                >Electronics</nuxt-link>
                            </li>
                            <li class="item-cats-lead">
                                <nuxt-link :to="'/shop/sidebar/3cols?category=gift-idea'">Gift Ideas</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link :to="'/shop/sidebar/3cols?category=beds'">Beds</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link :to="'/shop/sidebar/3cols?category=lighting'">Lighting</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link
                                    :to="'/shop/sidebar/3cols?category=sofas-and-sleeper-sofas'"
                                >Sofas & Sleeper sofas</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link :to="'/shop/sidebar/3cols?category=storage'">Storage</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link
                                    :to="'/shop/sidebar/3cols?category=armchairs-and-chaises'"
                                >Armchairs & Chaises</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link
                                    :to="'/shop/sidebar/3cols?category=decoration'"
                                >Decoration</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link
                                    :to="'/shop/sidebar/3cols?category=kitchen-cabinets'"
                                >Kitchen Cabinets</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link
                                    :to="'/shop/sidebar/3cols?category=coffee-and-tables'"
                                >Coffee & Tables</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link
                                    :to="'/shop/sidebar/3cols?category=furniture'"
                                >Outdoor Furniture</nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Tabs from '~/components/elements/Tabs';
import { mobileMenu } from '~/utilities/common.js';
export default {
    components: {
        Tabs
    },
    data: function() {
        return {
            tabsData: [
                {
                    id: 'mobile-nav',
                    title: 'MENU',
                    active: true
                },
                {
                    id: 'mobile-categories',
                    title: 'CATEGORIES'
                }
            ],
            searchTerm: ''
        };
    },
    mounted: function() {
        mobileMenu();
    },
    methods: {
        hideMobileMenu: function() {
            document.querySelector('body').classList.remove('mmenu-active');
        },
        submitSearchForm: function() {
            this.hideMobileMenu();
            this.$router.push({
                path: '/shop/sidebar/3cols',
                query: {
                    searchTerm: this.searchTerm
                }
            });
        }
    }
};
</script>