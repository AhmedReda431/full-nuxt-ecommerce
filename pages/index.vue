<template>
	<div class="main home-page">
		<div class="mb-lg-2"></div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-9 col-xxl-8 offset-lg-3 offset-xxl-2">
					<div class="intro-slider-container slider-container-ratio mb-2">
						<div class="intro-slider swiper-carousel swiper-1">
							<div v-swiper:swiper1="carouselSetting1">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="intro-slide">
											<figure class="slide-image mb-0">
												<picture>
													<source
														media="(max-width: 480px)"
														:srcset="'./images/home/sliders/slide-1-480w.jpg'"
													/>
													<img
														v-lazy="'./images/home/sliders/slide-1.jpg'"
														alt="banner"
														width="1180"
														height="500"
													/>
												</picture>
											</figure>

											<div class="intro-content">
												<h3 class="intro-subtitle">New Arrivals</h3>

												<h1 class="intro-title text-white">
													The New Way
													<br />To Buy Furniture
												</h1>

												<div class="intro-text text-white">Spring Collections 2021</div>

												<nuxt-link
													to="/shop/sidebar/list"
													class="btn btn-primary"
												>
													<span>Discover Now</span>
													<i class="icon-long-arrow-right"></i>
												</nuxt-link>
											</div>

										</div>
									</div>
									<div class="swiper-slide">
										<div class="intro-slide">
											<figure class="slide-image mb-0">
												<picture>
													<source
														media="(max-width: 480px)"
														:srcset="'./images/home/sliders/slide-2-480w.jpg'"
													/>
													<img
														v-lazy="'./images/home/sliders/slide-2.jpg'"
														alt="banner"
														width="1180"
														height="500"
													/>
												</picture>
											</figure>

											<div class="intro-content">
												<h3 class="intro-subtitle">Hottest Deals</h3>

												<h1 class="intro-title">
													<span>Wherever You Go</span>
													<br />DJI Mavic 2 Pro
												</h1>

												<div class="intro-price">
													<sup>from</sup>
													<span>
														$1,948
														<sup>.99</sup>
													</span>
												</div>

												<nuxt-link
													to="/shop/sidebar/list"
													class="btn btn-primary"
												>
													<span>Discover Here</span>
													<i class="icon-long-arrow-right"></i>
												</nuxt-link>
											</div>

										</div>
									</div>
									<div class="swiper-slide">
										<div class="intro-slide">
											<figure class="slide-image mb-0">
												<picture>
													<source
														media="(max-width: 480px)"
														:srcset="'./images/home/sliders/slide-3-480w.jpg'"
													/>
													<img
														v-lazy="'./images/home/sliders/slide-3.jpg'"
														alt="banner"
														width="1180"
														height="500"
													/>
												</picture>
											</figure>

											<div class="intro-content">
												<h3 class="intro-subtitle">Limited Quantities</h3>

												<h1 class="intro-title">
													Refresh Your
													<br />Wardrobe
												</h1>

												<div class="intro-text">Summer Collection 2021</div>

												<nuxt-link
													to="/shop/sidebar/list"
													class="btn btn-primary"
												>
													<span>Discover Now</span>
													<i class="icon-long-arrow-right"></i>
												</nuxt-link>
											</div>

										</div>
									</div>
								</div>
							</div>
							<div class="swiper-dots swiper-dots-inner"></div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-xxl-2 d-none d-xxl-block">
					<div class="banner intro-banner banner-overlay banner-content-stretch">
						<nuxt-link to="/shop/sidebar/3cols">
							<img
								v-lazy="'./images/home/banners/banner-1.png'"
								alt="Banner"
								width="280"
								height="500"
							/>
						</nuxt-link>
						<div class="banner-content text-right">
							<div class="price text-center">
								<sup class="text-white">from</sup>
								<span class="text-white">
									<strong>$199</strong>
									<sup class="text-white">,99</sup>
								</span>
							</div>
							<nuxt-link
								to="/shop/sidebar/list"
								class="banner-link"
							>
								Discover Now
								<i class="icon-long-arrow-right"></i>
							</nuxt-link>
						</div>

					</div>

				</div>
			</div>
		</div>

		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-9 col-xxl-10">
					<div class="row">
						<div class="col-lg-12 col-xxl-4-5col">
							<div class="row">
								<div class="col-md-6">
									<div class="banner banner-overlay">
										<nuxt-link to="/shop/sidebar/list">
											<img
												v-lazy="'./images/home/banners/banner-2.jpg'"
												width="580"
												height="250"
												alt="Banner"
											/>
										</nuxt-link>

										<div class="banner-content">
											<h4 class="banner-subtitle text-white d-none d-sm-block">
												<a href="javascript:;">Hottest Deals</a>
											</h4>

											<h3 class="banner-title text-white">
												<a href="javascript:;">
													Detox And Beautify
													<br />For Spring
													<br />
													<span>Up To 20% Off</span>
												</a>
											</h3>

											<nuxt-link
												to="/shop/sidebar/3cols"
												class="banner-link"
											>
												Shop Now
												<i class="icon-long-arrow-right"></i>
											</nuxt-link>
										</div>

									</div>

								</div>

								<div class="col-md-6">
									<div class="banner banner-overlay">
										<nuxt-link to="/shop/sidebar/list">
											<img
												v-lazy="'./images/home/banners/banner-3.png'"
												width="580"
												height="250"
												alt="Banner"
											/>
										</nuxt-link>

										<div class="banner-content">
											<h4 class="banner-subtitle text-white d-none d-sm-block">
												<a href="javascript:;">Deal of the Day</a>
											</h4>

											<h3 class="banner-title text-white">
												<a href="javascript:;">
													Headphones
													<br />
													<span>Up To 30% Off</span>
												</a>
											</h3>

											<nuxt-link
												to="/shop/sidebar/3cols"
												class="banner-link"
											>
												Shop Now
												<i class="icon-long-arrow-right"></i>
											</nuxt-link>
										</div>

									</div>

								</div>

							</div>

						</div>

						<div class="col-12 col-xxl-5col d-none d-xxl-block">
							<div class="banner banner-overlay">
								<nuxt-link to="/shop/sidebar/list">
									<img
										v-lazy="'./images/home/banners/banner-4.jpg'"
										width="280"
										height="250"
										alt="Banner"
									/>
								</nuxt-link>

								<div class="banner-content">
									<h4 class="banner-subtitle text-white">
										<a href="javascript:;">Clearance</a>
									</h4>

									<h3 class="banner-title text-white">
										<a href="javascript:;">Seating and Tables Clearance</a>
									</h3>

									<nuxt-link
										to="/shop/sidebar/3cols"
										class="banner-link"
									>
										Shop Now
										<i class="icon-long-arrow-right"></i>
									</nuxt-link>
								</div>

							</div>

						</div>

					</div>

					<div class="mb-1"></div>

					<div class="swiper-carousel brands-slider brands-carousel brands-border">
						<div v-swiper:swiper2="carouselSetting2">
							<div class="swiper-wrapper align-items-center">
								<div
									class="swiper-slide"
									v-for="(brand, index) in homeData.brands"
									:key="index"
								>
									<a
										href="#"
										class="brand"
									>
										<img
											v-lazy="brand.image"
											class="bg-white"
											alt="Brand"
											:width="brand.width"
											:height="brand.height"
										/>
									</a>
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
					</div>

					<div class="mb-3"></div>

					<trendy-collection
						:products="products"
						v-if="loaded"
					></trendy-collection>

					<div class="mb-5"></div>

					<electronics-collection
						:products="products"
						v-if="loaded"
					></electronics-collection>

					<div class="mb-3"></div>

					<furniture-collection
						:products="products"
						v-if="loaded"
					></furniture-collection>

					<div class="mb-3"></div>

					<div class="row">
						<div class="col-md-6">
							<div class="banner home-banner banner-overlay">
								<a href="#">
									<img
										v-lazy="'./images/home/banners/banner-7.jpg'"
										alt="Banner"
									/>
								</a>

								<div class="banner-content">
									<h4 class="banner-subtitle text-white d-none d-sm-block">
										<a href="#">Spring Sale is Coming</a>
									</h4>

									<h3 class="banner-title text-white">
										<a href="#">
											Floral T-shirts and Vests
											<br />
											<span>Spring Sale</span>
										</a>
									</h3>

									<a
										href="#"
										class="banner-link"
									>
										Shop Now
										<i class="icon-long-arrow-right"></i>
									</a>
								</div>

							</div>

						</div>

						<div class="col-md-6">
							<div class="banner home-banner banner-overlay">
								<a href="#">
									<img
										v-lazy="'./images/home/banners/banner-8.jpg'"
										alt="Banner"
									/>
								</a>

								<div class="banner-content">
									<h4 class="banner-subtitle text-white d-none d-sm-block">
										<a href="#">Amazing Value</a>
									</h4>

									<h3 class="banner-title text-white">
										<a href="#">
											Upgrade and Save
											<br />
											<span>On The Latest Apple Devices</span>
										</a>
									</h3>

									<a
										href="#"
										class="banner-link"
									>
										Shop Now
										<i class="icon-long-arrow-right"></i>
									</a>
								</div>

							</div>

						</div>

					</div>

					<div class="mb-3"></div>

					<clothing-collection
						:products="products"
						v-if="loaded"
					></clothing-collection>

					<div class="mb-3"></div>

					<cooking-collection
						:products="products"
						v-if="loaded"
					></cooking-collection>

					<div class="mb-3"></div>

					<div class="icon-boxes-container">
						<div class="container-fluid">
							<div class="row">
								<div class="col-sm-6 col-lg-3">
									<div class="icon-box icon-box-side">
										<span class="icon-box-icon text-dark">
											<i class="icon-rocket"></i>
										</span>
										<div class="icon-box-content">
											<h3 class="icon-box-title">Free Shipping</h3>

											<p>Orders $50 or more</p>
										</div>

									</div>

								</div>

								<div class="col-sm-6 col-lg-3">
									<div class="icon-box icon-box-side">
										<span class="icon-box-icon text-dark">
											<i class="icon-rotate-left"></i>
										</span>

										<div class="icon-box-content">
											<h3 class="icon-box-title">Free Returns</h3>

											<p>Within 30 days</p>
										</div>

									</div>

								</div>

								<div class="col-sm-6 col-lg-3">
									<div class="icon-box icon-box-side">
										<span class="icon-box-icon text-dark">
											<i class="icon-info-circle"></i>
										</span>

										<div class="icon-box-content">
											<h3 class="icon-box-title">Get 20% Off 1 Item</h3>

											<p>When you sign up</p>
										</div>

									</div>

								</div>

								<div class="col-sm-6 col-lg-3">
									<div class="icon-box icon-box-side">
										<span class="icon-box-icon text-dark">
											<i class="icon-life-ring"></i>
										</span>

										<div class="icon-box-content">
											<h3 class="icon-box-title">We Support</h3>

											<p>24/7 amazing services</p>
										</div>

									</div>

								</div>

							</div>

						</div>

					</div>

					<div class="mb-5"></div>

				</div>

				<aside class=" col-xl-3 col-xxl-2 order-xl-first">
					<button
						class="sidebar-fixed-toggler"
						@click="toggleSidebar"
						v-if="isSidebar"
					>
						<i class="icon-cog"></i>
					</button>
					<div
						class="sidebar-filter-overlay"
						@click="hideSidebar"
					></div>

					<div
						v-sticky="shouldSticky"
						sticky-offset="{ top: 69 }"
					>
						<div class="sidebar sidebar-home">
							<div class="row">
								<div class="col-xl-12">
									<div class="widget widget-banner">
										<div class="banner banner-overlay">
											<nuxt-link to="/shop/sidebar/list">
												<img
													v-lazy="'./images/home/banners/banner-11.jpg'"
													width="280"
													height="400"
													alt="Banner"
												/>
											</nuxt-link>

											<div class="banner-content banner-content-top banner-content-right text-right">
												<h3 class="banner-title text-white">
													<a href="javascript:;">
														Maximum Comfort
														<span>Sofas -20% Off</span>
													</a>
												</h3>

												<nuxt-link
													to="/shop/sidebar/3cols"
													class="banner-link"
												>
													Shop Now
													<i class="icon-long-arrow-right"></i>
												</nuxt-link>
											</div>

										</div>

									</div>

								</div>

								<div
									class="col-xl-12 mb-2"
									v-if="loaded"
								>
									<div class="widget widget-products">
										<h4 class="widget-title">
											<span>Bestsellers</span>
										</h4>

										<div class="products">
											<product-thirteen
												:product="product"
												v-for="(product, index) in bestProducts"
												:key="index"
											></product-thirteen>
										</div>

									</div>

								</div>

								<div class="col-12">
									<div class="widget widget-deals">
										<h4 class="widget-title">
											<span>Special Offer</span>
										</h4>

										<div
											class="row"
											v-if="loaded"
										>
											<div class="col-xl-12">
												<product-twelve :product="featuredProducts[0]" class="pb-3"></product-twelve>

											</div>

											<div class="col-xl-12">
												<product-fourteen :product="dealProducts[0]"></product-fourteen>

											</div>

										</div>

									</div>

								</div>

								<div class="col-xl-12">
									<div class="widget widget-banner">
										<div class="banner banner-overlay">
											<a href="#">
												<img
													v-lazy="'./images/home/banners/banner-12.jpg'"
													alt="Banner"
												/>
											</a>

											<div class="banner-content banner-content-top">
												<h3 class="banner-title text-white">
													<a href="#">
														Take Better Photos
														<br />
														<span>With</span> Canon EOS
														<br />
														<span>Up To 20% Off</span>
													</a>
												</h3>

												<nuxt-link
													to="/shop/sidebar/3cols"
													class="banner-link"
												>
													Shop Now
													<i class="icon-long-arrow-right"></i>
												</nuxt-link>
											</div>

										</div>

									</div>

								</div>

								<div class="col-xl-12">
									<blog-section
										:blogs="blogs"
										v-if="loaded"
									></blog-section>

								</div>

							</div>

						</div>
					</div>
				</aside>

			</div>

		</div>
		<div
			class="cta cta-horizontal cta-horizontal-box bg-dark bg-image"
			v-lazy:background-image="'./images/home/bg-1.jpg'"
		>
			<div class="container-fluid">
				<div class="row align-items-center">
					<div class="col-xl-8 offset-xl-2">
						<div class="row align-items-center">
							<div class="col-lg-5 cta-txt">
								<h3 class="cta-title text-primary">Join Our Newsletter</h3>

								<p class="cta-desc text-light">Subcribe to get information about products and coupons</p>

							</div>

							<div class="col-lg-7">
								<form action="#">
									<div class="input-group">
										<input
											type="email"
											class="form-control"
											placeholder="Enter your Email Address"
											aria-label="Email Adress"
											required
										/>
										<div class="input-group-append">
											<button
												class="btn"
												type="submit"
											>Subscribe</button>
										</div>

									</div>

								</form>
							</div>

						</div>

					</div>

				</div>

			</div>

		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import Sticky from 'vue-sticky-directive';

import TrendyCollection from '~/components/partial/home/TrendyCollection';
import CookingCollection from '~/components/partial/home/CookingCollection';
import ClothingCollection from '~/components/partial/home/ClothingCollection';
import ElectronicsCollection from '~/components/partial/home/ElectronicsCollection';
import FurnitureCollection from '~/components/partial/home/FurnitureCollection';
import BlogSection from '~/components/partial/home/BlogSection';
import ProductTwelve from '~/components/elements/products/ProductTwelve';
import ProductThirteen from '~/components/elements/products/ProductThirteen';
import ProductFourteen from '~/components/elements/products/ProductFourteen';
import NewsletterModal from '~/components/elements/modals/NewsletterModal';

import Repository, { baseUrl } from '~/repositories/repository.js';
import { attrFilter } from '~/utilities/common';
import {
	carouselSettingSingle,
	carouselSettingDefault
} from '~/utilities/carousel';
import { homeData } from '~/utilities/data';

export default {
	components: {
		ProductTwelve,
		ProductFourteen,
		ProductThirteen,
		BlogSection,
		TrendyCollection,
		CookingCollection,
		ClothingCollection,
		FurnitureCollection,
		ElectronicsCollection
	},
	directives: {
		Sticky
	},
	data: function() {
		return {
			loaded: false,
			products: [],
			bestProducts: [],
			featuredProducts: [],
			dealProducts: [],
			blogs: [],
			isSidebar: true,
			carouselSetting1: {
				...carouselSettingSingle,
				pagination: {
					el: '.intro-slider-container .swiper-dots',
					clickable: true
				},
				navigation: {
					nextEl: '.intro-slider-container .swiper-next',
					prevEl: '.intro-slider-container .swiper-prev'
				}
			},
			carouselSetting2: {
				...carouselSettingDefault,
				slidesPerView: 6,
				spaceBetween: 30,
				navigation: {
					nextEl: '.brands-slider .swiper-next',
					prevEl: '.brands-slider .swiper-prev'
				},
				breakpoints: {
					992: {
						slidesPerView: 5
					},
					768: {
						slidesPerView: 4
					},
					576: {
						slidesPerView: 3
					},
					480: {
						slidesPerView: 2
					}
				}
			},
			homeData: homeData,
			shouldSticky: false
		};
	},
	computed: {
		...mapGetters('demo', ['newsletterShow'])
	},
	created: function() {
		this.getProducts();
	},
	mounted: function() {
		if (this.newsletterShow) {
			setTimeout(() => {
				if (this.$route.path == '/' && this.newsletterShow) {
					this.$modal.show(
						NewsletterModal,
						{},
						{ width: '970', height: 'auto', adaptive: true }
					);
				}
			}, 8000);
		}

		this.resizeHandler();
		window.addEventListener('resize', this.resizeHandler, {
			passive: true
		});

		this.stickyHandle();
		window.addEventListener('resize', this.stickyHandle, { passive: true });
	},
	destroyed: function() {
		window.removeEventListener('resize', this.resizeHandler);

		window.removeEventListener('resize', this.stickyHandle);
	},
	methods: {
		getProducts: async function() {
			this.loaded = false;
			await Repository.get(`${baseUrl}/demo14`)
				.then(response => {
					this.products = response.data.products;
					this.bestProducts = attrFilter(
						this.products,
						'rated'
					).slice(0, 5);
					this.featuredProducts = attrFilter(
						this.products,
						'featured'
					);
					this.dealProducts = attrFilter(this.products, 'until');
					this.blogs = response.data.blogs;
					this.loaded = true;
				})
				.catch(error => ({ error: JSON.stringify(error) }));
		},
		toggleSidebar: function() {
			if (
				document
					.querySelector('body')
					.classList.contains('sidebar-home-active')
			) {
				document
					.querySelector('body')
					.classList.remove('sidebar-home-active');
			} else {
				document
					.querySelector('body')
					.classList.add('sidebar-home-active');
			}
		},
		hideSidebar: function() {
			document
				.querySelector('body')
				.classList.remove('sidebar-home-active');
		},
		resizeHandler: function() {
			if (window.innerWidth > 1199) this.isSidebar = false;
			else this.isSidebar = true;
		},
		stickyHandle: function() {
			if (window.innerWidth > 1199) this.shouldSticky = true;
			else this.shouldSticky = false;
		}
	}
};
</script>