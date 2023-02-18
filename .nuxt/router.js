import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d03ab36c = () => interopDefault(import('..\\pages\\elements\\index.vue' /* webpackChunkName: "pages/elements/index" */))
const _0b3070bf = () => interopDefault(import('..\\pages\\blog\\classic.vue' /* webpackChunkName: "pages/blog/classic" */))
const _71334a78 = () => interopDefault(import('..\\pages\\blog\\grid-sidebar.vue' /* webpackChunkName: "pages/blog/grid-sidebar" */))
const _36d1a9b1 = () => interopDefault(import('..\\pages\\blog\\listing.vue' /* webpackChunkName: "pages/blog/listing" */))
const _212d8bfe = () => interopDefault(import('..\\pages\\blog\\masonry-sidebar.vue' /* webpackChunkName: "pages/blog/masonry-sidebar" */))
const _61727163 = () => interopDefault(import('..\\pages\\elements\\accordions.vue' /* webpackChunkName: "pages/elements/accordions" */))
const _afd32c82 = () => interopDefault(import('..\\pages\\elements\\banners.vue' /* webpackChunkName: "pages/elements/banners" */))
const _78bf36c0 = () => interopDefault(import('..\\pages\\elements\\blog-posts.vue' /* webpackChunkName: "pages/elements/blog-posts" */))
const _9e40550e = () => interopDefault(import('..\\pages\\elements\\buttons.vue' /* webpackChunkName: "pages/elements/buttons" */))
const _33f772d4 = () => interopDefault(import('..\\pages\\elements\\categories.vue' /* webpackChunkName: "pages/elements/categories" */))
const _6464aef0 = () => interopDefault(import('..\\pages\\elements\\cta.vue' /* webpackChunkName: "pages/elements/cta" */))
const _737ef59d = () => interopDefault(import('..\\pages\\elements\\icon-boxes.vue' /* webpackChunkName: "pages/elements/icon-boxes" */))
const _625f3080 = () => interopDefault(import('..\\pages\\elements\\portfolio.vue' /* webpackChunkName: "pages/elements/portfolio" */))
const _3d30a21c = () => interopDefault(import('..\\pages\\elements\\products.vue' /* webpackChunkName: "pages/elements/products" */))
const _2bb51194 = () => interopDefault(import('..\\pages\\elements\\tabs.vue' /* webpackChunkName: "pages/elements/tabs" */))
const _6684ef28 = () => interopDefault(import('..\\pages\\elements\\testimonials.vue' /* webpackChunkName: "pages/elements/testimonials" */))
const _5c3c635a = () => interopDefault(import('..\\pages\\elements\\titles.vue' /* webpackChunkName: "pages/elements/titles" */))
const _de8a3f32 = () => interopDefault(import('..\\pages\\elements\\typography.vue' /* webpackChunkName: "pages/elements/typography" */))
const _3d137126 = () => interopDefault(import('..\\pages\\elements\\video-banners.vue' /* webpackChunkName: "pages/elements/video-banners" */))
const _35bdec16 = () => interopDefault(import('..\\pages\\pages\\404.vue' /* webpackChunkName: "pages/pages/404" */))
const _25043c8a = () => interopDefault(import('..\\pages\\pages\\about.vue' /* webpackChunkName: "pages/pages/about" */))
const _215799a2 = () => interopDefault(import('..\\pages\\pages\\about-2.vue' /* webpackChunkName: "pages/pages/about-2" */))
const _62e87904 = () => interopDefault(import('..\\pages\\pages\\coming-soon.vue' /* webpackChunkName: "pages/pages/coming-soon" */))
const _1137d346 = () => interopDefault(import('..\\pages\\pages\\contact.vue' /* webpackChunkName: "pages/pages/contact" */))
const _adb6377c = () => interopDefault(import('..\\pages\\pages\\contact-2.vue' /* webpackChunkName: "pages/pages/contact-2" */))
const _dddca65a = () => interopDefault(import('..\\pages\\pages\\faq.vue' /* webpackChunkName: "pages/pages/faq" */))
const _0e63ba66 = () => interopDefault(import('..\\pages\\pages\\login.vue' /* webpackChunkName: "pages/pages/login" */))
const _58dda197 = () => interopDefault(import('..\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _ae942d86 = () => interopDefault(import('..\\pages\\shop\\checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _90ac7aa6 = () => interopDefault(import('..\\pages\\shop\\dashboard.vue' /* webpackChunkName: "pages/shop/dashboard" */))
const _b73f5e1a = () => interopDefault(import('..\\pages\\shop\\market.vue' /* webpackChunkName: "pages/shop/market" */))
const _3fe7fa3c = () => interopDefault(import('..\\pages\\shop\\wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _a85638d6 = () => interopDefault(import('..\\pages\\blog\\mask\\grid.vue' /* webpackChunkName: "pages/blog/mask/grid" */))
const _185d0374 = () => interopDefault(import('..\\pages\\blog\\mask\\masonry.vue' /* webpackChunkName: "pages/blog/mask/masonry" */))
const _51fcf8c5 = () => interopDefault(import('..\\pages\\shop\\category\\boxed.vue' /* webpackChunkName: "pages/shop/category/boxed" */))
const _796e49b2 = () => interopDefault(import('..\\pages\\shop\\category\\fullwidth.vue' /* webpackChunkName: "pages/shop/category/fullwidth" */))
const _6f43cd54 = () => interopDefault(import('..\\pages\\blog\\single\\default\\_slug.vue' /* webpackChunkName: "pages/blog/single/default/_slug" */))
const _32a94c7e = () => interopDefault(import('..\\pages\\blog\\single\\fullwidth\\_slug.vue' /* webpackChunkName: "pages/blog/single/fullwidth/_slug" */))
const _6f722d4e = () => interopDefault(import('..\\pages\\blog\\single\\sidebar\\_slug.vue' /* webpackChunkName: "pages/blog/single/sidebar/_slug" */))
const _80727880 = () => interopDefault(import('..\\pages\\blog\\grid\\_type.vue' /* webpackChunkName: "pages/blog/grid/_type" */))
const _60c03f17 = () => interopDefault(import('..\\pages\\blog\\masonry\\_type.vue' /* webpackChunkName: "pages/blog/masonry/_type" */))
const _aa0d14f0 = () => interopDefault(import('..\\pages\\product\\centered\\_slug.vue' /* webpackChunkName: "pages/product/centered/_slug" */))
const _58bfbd32 = () => interopDefault(import('..\\pages\\product\\default\\_slug.vue' /* webpackChunkName: "pages/product/default/_slug" */))
const _5826eae3 = () => interopDefault(import('..\\pages\\product\\extended\\_slug.vue' /* webpackChunkName: "pages/product/extended/_slug" */))
const _1d7e305e = () => interopDefault(import('..\\pages\\product\\fullwidth\\_slug.vue' /* webpackChunkName: "pages/product/fullwidth/_slug" */))
const _b7964894 = () => interopDefault(import('..\\pages\\product\\gallery\\_slug.vue' /* webpackChunkName: "pages/product/gallery/_slug" */))
const _68fb8ee3 = () => interopDefault(import('..\\pages\\product\\masonry\\_slug.vue' /* webpackChunkName: "pages/product/masonry/_slug" */))
const _2ca33d6c = () => interopDefault(import('..\\pages\\product\\sidebar\\_slug.vue' /* webpackChunkName: "pages/product/sidebar/_slug" */))
const _2bdcd29a = () => interopDefault(import('..\\pages\\product\\sticky\\_slug.vue' /* webpackChunkName: "pages/product/sticky/_slug" */))
const _42ad5ab5 = () => interopDefault(import('..\\pages\\shop\\nosidebar\\_type.vue' /* webpackChunkName: "pages/shop/nosidebar/_type" */))
const _291ca6f4 = () => interopDefault(import('..\\pages\\shop\\sidebar\\_type.vue' /* webpackChunkName: "pages/shop/sidebar/_type" */))
const _51b41be1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/vue/molla/demo-14/'),
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/elements",
    component: _d03ab36c,
    name: "elements"
  }, {
    path: "/blog/classic",
    component: _0b3070bf,
    name: "blog-classic"
  }, {
    path: "/blog/grid-sidebar",
    component: _71334a78,
    name: "blog-grid-sidebar"
  }, {
    path: "/blog/listing",
    component: _36d1a9b1,
    name: "blog-listing"
  }, {
    path: "/blog/masonry-sidebar",
    component: _212d8bfe,
    name: "blog-masonry-sidebar"
  }, {
    path: "/elements/accordions",
    component: _61727163,
    name: "elements-accordions"
  }, {
    path: "/elements/banners",
    component: _afd32c82,
    name: "elements-banners"
  }, {
    path: "/elements/blog-posts",
    component: _78bf36c0,
    name: "elements-blog-posts"
  }, {
    path: "/elements/buttons",
    component: _9e40550e,
    name: "elements-buttons"
  }, {
    path: "/elements/categories",
    component: _33f772d4,
    name: "elements-categories"
  }, {
    path: "/elements/cta",
    component: _6464aef0,
    name: "elements-cta"
  }, {
    path: "/elements/icon-boxes",
    component: _737ef59d,
    name: "elements-icon-boxes"
  }, {
    path: "/elements/portfolio",
    component: _625f3080,
    name: "elements-portfolio"
  }, {
    path: "/elements/products",
    component: _3d30a21c,
    name: "elements-products"
  }, {
    path: "/elements/tabs",
    component: _2bb51194,
    name: "elements-tabs"
  }, {
    path: "/elements/testimonials",
    component: _6684ef28,
    name: "elements-testimonials"
  }, {
    path: "/elements/titles",
    component: _5c3c635a,
    name: "elements-titles"
  }, {
    path: "/elements/typography",
    component: _de8a3f32,
    name: "elements-typography"
  }, {
    path: "/elements/video-banners",
    component: _3d137126,
    name: "elements-video-banners"
  }, {
    path: "/pages/404",
    component: _35bdec16,
    name: "pages-404"
  }, {
    path: "/pages/about",
    component: _25043c8a,
    name: "pages-about"
  }, {
    path: "/pages/about-2",
    component: _215799a2,
    name: "pages-about-2"
  }, {
    path: "/pages/coming-soon",
    component: _62e87904,
    name: "pages-coming-soon"
  }, {
    path: "/pages/contact",
    component: _1137d346,
    name: "pages-contact"
  }, {
    path: "/pages/contact-2",
    component: _adb6377c,
    name: "pages-contact-2"
  }, {
    path: "/pages/faq",
    component: _dddca65a,
    name: "pages-faq"
  }, {
    path: "/pages/login",
    component: _0e63ba66,
    name: "pages-login"
  }, {
    path: "/shop/cart",
    component: _58dda197,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _ae942d86,
    name: "shop-checkout"
  }, {
    path: "/shop/dashboard",
    component: _90ac7aa6,
    name: "shop-dashboard"
  }, {
    path: "/shop/market",
    component: _b73f5e1a,
    name: "shop-market"
  }, {
    path: "/shop/wishlist",
    component: _3fe7fa3c,
    name: "shop-wishlist"
  }, {
    path: "/blog/mask/grid",
    component: _a85638d6,
    name: "blog-mask-grid"
  }, {
    path: "/blog/mask/masonry",
    component: _185d0374,
    name: "blog-mask-masonry"
  }, {
    path: "/shop/category/boxed",
    component: _51fcf8c5,
    name: "shop-category-boxed"
  }, {
    path: "/shop/category/fullwidth",
    component: _796e49b2,
    name: "shop-category-fullwidth"
  }, {
    path: "/blog/single/default/:slug?",
    component: _6f43cd54,
    name: "blog-single-default-slug"
  }, {
    path: "/blog/single/fullwidth/:slug?",
    component: _32a94c7e,
    name: "blog-single-fullwidth-slug"
  }, {
    path: "/blog/single/sidebar/:slug?",
    component: _6f722d4e,
    name: "blog-single-sidebar-slug"
  }, {
    path: "/blog/grid/:type?",
    component: _80727880,
    name: "blog-grid-type"
  }, {
    path: "/blog/masonry/:type?",
    component: _60c03f17,
    name: "blog-masonry-type"
  }, {
    path: "/product/centered/:slug?",
    component: _aa0d14f0,
    name: "product-centered-slug"
  }, {
    path: "/product/default/:slug?",
    component: _58bfbd32,
    name: "product-default-slug"
  }, {
    path: "/product/extended/:slug?",
    component: _5826eae3,
    name: "product-extended-slug"
  }, {
    path: "/product/fullwidth/:slug?",
    component: _1d7e305e,
    name: "product-fullwidth-slug"
  }, {
    path: "/product/gallery/:slug?",
    component: _b7964894,
    name: "product-gallery-slug"
  }, {
    path: "/product/masonry/:slug?",
    component: _68fb8ee3,
    name: "product-masonry-slug"
  }, {
    path: "/product/sidebar/:slug?",
    component: _2ca33d6c,
    name: "product-sidebar-slug"
  }, {
    path: "/product/sticky/:slug?",
    component: _2bdcd29a,
    name: "product-sticky-slug"
  }, {
    path: "/shop/nosidebar/:type?",
    component: _42ad5ab5,
    name: "shop-nosidebar-type"
  }, {
    path: "/shop/sidebar/:type?",
    component: _291ca6f4,
    name: "shop-sidebar-type"
  }, {
    path: "/",
    component: _51b41be1,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
