<template>
    <header class="header header-14">
        <div class="header-top">
            <div class="container-fluid">
                <div class="header-left">
                    <a href="tel:#">
                        <i class="icon-phone"></i>Call: +0123 456 789
                    </a>
                </div>

                <div class="header-right">
                    <ul class="top-menu">
                        <li>
                            <a href="#">Links</a>
                            <ul class="menus">
                                <li>
                                    <div class="header-dropdown">
                                        <a href="#">USD</a>
                                        <div class="header-menu">
                                            <ul>
                                                <li>
                                                    <a href="#">Eur</a>
                                                </li>
                                                <li>
                                                    <a href="#">Usd</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="header-dropdown">
                                        <a href="#">English</a>
                                        <div class="header-menu">
                                            <ul>
                                                <li>
                                                    <a href="#">English</a>
                                                </li>
                                                <li>
                                                    <a href="#">French</a>
                                                </li>
                                                <li>
                                                    <a href="#">Spanish</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="login">
                                    <a
                                        href="#signin-modal"
                                        @click.prevent="openSignInModal"
                                    >Sign in / Sign up</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="header-middle">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-auto col-lg-3 col-xl-3 col-xxl-2">
                        <button class="mobile-menu-toggler" @click="openMobileMenu">
                            <span class="sr-only">Toggle mobile menu</span>
                            <i class="icon-bars"></i>
                        </button>

                        <nuxt-link to="/" class="logo">
                            <img
                                v-lazy="'./images/logo.png'"
                                class="bg-transparent"
                                alt="Molla Logo"
                                width="105"
                                height="27"
                            />
                        </nuxt-link>
                    </div>

                    <div class="col col-lg-9 col-xl-9 col-xxl-10 header-middle-right">
                        <div class="row">
                            <div class="col-lg-8 col-xxl-4-5col d-none d-lg-block">
                                <header-search></header-search>
                            </div>
                            <div
                                class="col-lg-4 col-xxl-5col d-flex justify-content-end align-items-center"
                            >
                                <div class="header-dropdown-link">
                                    <compare-menu></compare-menu>

                                    <wishlist-menu></wishlist-menu>

                                    <cart-menu></cart-menu>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <sticky-header>
            <div class="header-bottom sticky-header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-auto col-lg-3 col-xl-3 col-xxl-2 header-left">
                            <div class="dropdown category-dropdown" :class="{show: isOpened}">
                                <a
                                    href="javascript:;"
                                    class="dropdown-toggle"
                                    title="Browse Categories"
                                    @click.prevent="toggleDropdown"
                                >Browse Categories</a>

                                <div class="dropdown-menu" :class="{show: isOpened}">
                                    <nav class="side-nav">
                                        <ul class="menu-vertical sf-arrows">
                                            <li class="megamenu-container">
                                                <nuxt-link
                                                    class="sf-with-ul text-dark"
                                                    to="/shop/sidebar/3cols?category=electronics"
                                                >
                                                    <i class="icon-laptop"></i>Electronics
                                                </nuxt-link>
                                                <div class="megamenu">
                                                    <div class="row">
                                                        <div class="col-md-8">
                                                            <div class="menu-col">
                                                                <div class="row">
                                                                    <div class="col-md-6">
                                                                        <div
                                                                            class="menu-title"
                                                                        >Laptops &amp; Computers</div>
                                                                        
                                                                        <ul>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=computers"
                                                                                >Desktop Computers</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=computers"
                                                                                >Monitors</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=laptops"
                                                                                >Laptops</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=tablets"
                                                                                >iPad &amp; Tablets</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=computers"
                                                                                >Hard Drives &amp; Storage</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=computers"
                                                                                >Printers &amp; Supplies</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=computers"
                                                                                >Computer Accessories</nuxt-link>
                                                                            </li>
                                                                        </ul>

                                                                        <div
                                                                            class="menu-title"
                                                                        >TV &amp; Video</div>
                                                                        
                                                                        <ul>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=TV"
                                                                                >TVs</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=electronics"
                                                                                >Home Audio Speakers</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=computers"
                                                                                >Projectors</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=computers"
                                                                                >Media Streaming Devices</nuxt-link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    

                                                                    <div class="col-md-6">
                                                                        <div
                                                                            class="menu-title"
                                                                        >Cell Phones</div>
                                                                        
                                                                        <ul>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=electronics"
                                                                                >Carrier Phones</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=electronics"
                                                                                >Unlocked Phones</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=electronics"
                                                                                >Phone &amp; Cellphone Cases</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=electronics"
                                                                                >Cellphone Chargers</nuxt-link>
                                                                            </li>
                                                                        </ul>

                                                                        <div
                                                                            class="menu-title"
                                                                        >Digital Cameras</div>
                                                                        
                                                                        <ul>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=cameras"
                                                                                >Digital SLR Cameras</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=cameras"
                                                                                >Sports &amp; Action Cameras</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=cameras"
                                                                                >Camcorders</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=cameras"
                                                                                >Camera Lenses</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=cameras"
                                                                                >Photo Printer</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=cameras"
                                                                                >Digital Memory Cards</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=cameras"
                                                                                >
                                                                                    Camera Bags, Backpacks &amp;
                                                                                    Cases
                                                                                </nuxt-link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                        

                                                        <div class="col-md-4">
                                                            <div
                                                                class="banner banner-overlay h-100"
                                                            >
                                                                <nuxt-link
                                                                    to="/shop/sidebar/2cols"
                                                                    class="banner banner-menu"
                                                                >
                                                                    <img
                                                                        v-lazy="'./images/home/menu/banner-1.jpg'"
                                                                        alt="Banner"
                                                                        width="280"
                                                                        height="440"
                                                                    />
                                                                </nuxt-link>
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                                
                                            </li>
                                            <li class="megamenu-container">
                                                <nuxt-link
                                                    class="sf-with-ul text-dark"
                                                    to="/shop/sidebar/3cols?category=furniture"
                                                >
                                                    <i class="icon-couch"></i>Furniture
                                                </nuxt-link>

                                                <div class="megamenu">
                                                    <div class="row">
                                                        <div class="col-md-8">
                                                            <div class="menu-col">
                                                                <div class="row">
                                                                    <div class="col-md-6">
                                                                        <div
                                                                            class="menu-title"
                                                                        >Bedroom</div>
                                                                        
                                                                        <ul>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=beds"
                                                                                >Beds, Frames &amp; Bases</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Dressers</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Nightstands</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=beds"
                                                                                >Kids' Beds &amp; Headboards</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Armoires</nuxt-link>
                                                                            </li>
                                                                        </ul>

                                                                        <div
                                                                            class="menu-title"
                                                                        >Living Room</div>
                                                                        
                                                                        <ul>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Coffee Tables</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Chairs</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Tables</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Futons &amp; Sofa Beds</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Cabinets &amp; Chests</nuxt-link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    

                                                                    <div class="col-md-6">
                                                                        <div
                                                                            class="menu-title"
                                                                        >Office</div>
                                                                        
                                                                        <ul>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Office Chairs</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Desks</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Bookcases</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >File Cabinets</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Breakroom Tables</nuxt-link>
                                                                            </li>
                                                                        </ul>

                                                                        <div
                                                                            class="menu-title"
                                                                        >Kitchen &amp; Dining</div>
                                                                        
                                                                        <ul>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Dining Sets</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Kitchen Storage Cabinets</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Bakers Racks</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Dining Chairs</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Dining Room Tables</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=furniture"
                                                                                >Bar Stools</nuxt-link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                        

                                                        <div class="col-md-4">
                                                            <div
                                                                class="banner banner-overlay h-100"
                                                            >
                                                                <nuxt-link
                                                                    to="/shop/sidebar/3cols"
                                                                    class="banner banner-menu"
                                                                >
                                                                    <img
                                                                        v-lazy="'./images/home/menu/banner-2.jpg'"
                                                                        alt="Banner"
                                                                        width="280"
                                                                        height="440"
                                                                    />
                                                                </nuxt-link>
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                                
                                            </li>
                                            <li class="megamenu-container">
                                                <nuxt-link
                                                    class="sf-with-ul text-dark"
                                                    to="/shop/sidebar/3cols?category=cooking"
                                                >
                                                    <i class="icon-concierge-bell"></i>Cooking
                                                </nuxt-link>

                                                <div class="megamenu">
                                                    <div class="menu-col">
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <div class="menu-title">Cookware</div>
                                                                
                                                                <ul>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=furniture"
                                                                        >Cookware Sets</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=furniture"
                                                                        >Pans, Griddles &amp;Woks</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=furniture"
                                                                        >Pots</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=furniture"
                                                                        >Skillets &amp;Grill Pans</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=furniture"
                                                                        >Kettles</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=furniture"
                                                                        >Soup &amp;Stockpots</nuxt-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            

                                                            <div class="col-md-4">
                                                                <div
                                                                    class="menu-title"
                                                                >Dinnerware &amp;Tabletop</div>
                                                                
                                                                <ul>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=decor"
                                                                        >Plates</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=decor"
                                                                        >Cups &amp;Mugs</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=decor"
                                                                        >Trays &amp;Platters</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=decor"
                                                                        >Coffee &amp;Tea Serving</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=decor"
                                                                        >Salt &amp;Pepper Shaker</nuxt-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            

                                                            <div class="col-md-4">
                                                                <div
                                                                    class="menu-title"
                                                                >Cooking Appliances</div>
                                                                
                                                                <ul>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=furniture"
                                                                        >Microwaves</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=furniture"
                                                                        >Coffee Makers</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=furniture"
                                                                        >Mixers &amp;Attachments</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=furniture"
                                                                        >Slow Cookers</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=furniture"
                                                                        >Air Fryers</nuxt-link>
                                                                    </li>
                                                                    <li>
                                                                        <nuxt-link
                                                                            to="/shop/sidebar/list?category=furniture"
                                                                        >Toasters &amp;Ovens</nuxt-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            
                                                        </div>
                                                        

                                                        <div class="row menu-banners">
                                                            <div class="col-md-4">
                                                                <div class="banner h-100">
                                                                    <nuxt-link to="/shop/market">
                                                                        <img
                                                                            v-lazy="'./images/home/menu/1.jpg'"
                                                                            alt="image"
                                                                            width="251"
                                                                            height="141"
                                                                        />
                                                                    </nuxt-link>
                                                                </div>
                                                                
                                                            </div>
                                                            

                                                            <div class="col-md-4">
                                                                <div class="banner h-100">
                                                                    <nuxt-link
                                                                        to="/shop/sidebar/list"
                                                                    >
                                                                        <img
                                                                            v-lazy="'./images/home/menu/2.jpg'"
                                                                            alt="image"
                                                                            width="251"
                                                                            height="141"
                                                                        />
                                                                    </nuxt-link>
                                                                </div>
                                                                
                                                            </div>
                                                            

                                                            <div class="col-md-4 h-100">
                                                                <div class="banner">
                                                                    <nuxt-link
                                                                        to="/shop/sidebar/list"
                                                                    >
                                                                        <img
                                                                            v-lazy="'./images/home/menu/3.jpg'"
                                                                            alt="image"
                                                                            width="251"
                                                                            height="141"
                                                                        />
                                                                    </nuxt-link>
                                                                </div>
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                                
                                            </li>
                                            <li class="megamenu-container">
                                                <nuxt-link
                                                    class="sf-with-ul text-dark"
                                                    to="/shop/sidebar/3cols?category=clothing"
                                                >
                                                    <i class="icon-tshirt"></i>Clothing
                                                </nuxt-link>

                                                <div class="megamenu">
                                                    <div class="row">
                                                        <div class="col-md-8">
                                                            <div class="menu-col">
                                                                <div class="row">
                                                                    <div class="col-md-6">
                                                                        <div
                                                                            class="menu-title"
                                                                        >Women</div>
                                                                        
                                                                        <ul>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list"
                                                                                >
                                                                                    <strong>New Arrivals</strong>
                                                                                </nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list"
                                                                                >
                                                                                    <strong>Best Sellers</strong>
                                                                                </nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list"
                                                                                >
                                                                                    <strong>Trending</strong>
                                                                                </nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=clothing"
                                                                                >Clothing</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=shoes"
                                                                                >Shoes</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=bags"
                                                                                >Bags</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=accessories"
                                                                                >Accessories</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=accessories"
                                                                                >Jewlery &amp;Watches</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/2cols"
                                                                                >
                                                                                    <strong>Sale</strong>
                                                                                </nuxt-link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    

                                                                    <div class="col-md-6">
                                                                        <div class="menu-title">Men</div>
                                                                        
                                                                        <ul>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list"
                                                                                >
                                                                                    <strong>New Arrivals</strong>
                                                                                </nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list"
                                                                                >
                                                                                    <strong>Best Sellers</strong>
                                                                                </nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list"
                                                                                >
                                                                                    <strong>Trending</strong>
                                                                                </nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=clothing"
                                                                                >Clothing</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=shoes"
                                                                                >Shoes</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=bags"
                                                                                >Bags</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=accessories"
                                                                                >Accessories</nuxt-link>
                                                                            </li>
                                                                            <li>
                                                                                <nuxt-link
                                                                                    to="/shop/sidebar/list?category=accessories"
                                                                                >Jewlery &amp;Watches</nuxt-link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                        

                                                        <div class="col-md-4">
                                                            <div class="banner banner-overlay">
                                                                <nuxt-link
                                                                    to="/shop/market"
                                                                    class="banner banner-menu"
                                                                >
                                                                    <img
                                                                        v-lazy="'./images/home/menu/banner-3.jpg'"
                                                                        alt="Banner"
                                                                        width="280"
                                                                        height="347"
                                                                    />
                                                                </nuxt-link>
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    

                                                    <div
                                                        class="menu-col menu-brands d-flex flex-column justify-content-center"
                                                    >
                                                        <div class="row">
                                                            <div class="col-lg-2">
                                                                <a href="#" class="brand h-100">
                                                                    <img
                                                                        v-lazy="'./images/brands/1.png'"
                                                                        class="bg-transparent"
                                                                        alt="Brand Name"
                                                                        width="100"
                                                                        height="23"
                                                                    />
                                                                </a>
                                                            </div>
                                                            

                                                            <div class="col-lg-2">
                                                                <a href="#" class="brand h-100">
                                                                    <img
                                                                        v-lazy="'./images/brands/2.png'"
                                                                        class="bg-transparent"
                                                                        alt="Brand Name"
                                                                        width="101"
                                                                        height="34"
                                                                    />
                                                                </a>
                                                            </div>
                                                            

                                                            <div class="col-lg-2">
                                                                <a href="#" class="brand h-100">
                                                                    <img
                                                                        v-lazy="'./images/brands/3.png'"
                                                                        class="bg-transparent"
                                                                        alt="Brand Name"
                                                                        width="100"
                                                                        height="30"
                                                                    />
                                                                </a>
                                                            </div>
                                                            

                                                            <div class="col-lg-2">
                                                                <a href="#" class="brand h-100">
                                                                    <img
                                                                        v-lazy="'./images/brands/4.png'"
                                                                        class="bg-transparent"
                                                                        alt="Brand Name"
                                                                        width="101"
                                                                        height="39"
                                                                    />
                                                                </a>
                                                            </div>
                                                            

                                                            <div class="col-lg-2">
                                                                <a href="#" class="brand h-100">
                                                                    <img
                                                                        v-lazy="'./images/brands/5.png'"
                                                                        class="bg-transparent"
                                                                        alt="Brand Name"
                                                                        width="100"
                                                                        height="48"
                                                                    />
                                                                </a>
                                                            </div>
                                                            

                                                            <div class="col-lg-2">
                                                                <a href="#" class="brand h-100">
                                                                    <img
                                                                        v-lazy="'./images/brands/6.png'"
                                                                        class="bg-transparent"
                                                                        alt="Brand Name"
                                                                        width="100"
                                                                        height="23"
                                                                    />
                                                                </a>
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                                
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    to="/shop/sidebar/list"
                                                    class="text-dark"
                                                >
                                                    <i class="icon-blender"></i>Home Appliances
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    to="/shop/sidebar/3cols?category=women"
                                                    class="text-dark"
                                                >
                                                    <i class="icon-heartbeat"></i>Healthy &amp; Beauty
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    to="/shop/sidebar/3cols?category=shoes"
                                                    class="text-dark"
                                                >
                                                    <i class="icon-shoe-prints"></i>Shoes &amp; Boots
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    to="/shop/sidebar/3cols?category=travel"
                                                    class="text-dark"
                                                >
                                                    <i class="icon-map-signs"></i>Travel &amp; Outdoor
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    to="/shop/sidebar/3cols?category=electronics"
                                                    class="text-dark"
                                                >
                                                    <i class="icon-mobile-alt"></i>Smart Phones
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    to="/shop/sidebar/3cols?category=TV"
                                                    class="text-dark"
                                                >
                                                    <i class="icon-tv"></i>TV &amp; Audio
                                                </nuxt-link>
                                            </li>

                                            <li>
                                                <nuxt-link
                                                    to="/shop/sidebar/3cols?category=bag"
                                                    class="text-dark"
                                                >
                                                    <i class="icon-shopping-bag"></i>Backpack & Bag
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    to="/shop/sidebar/3cols?category=music"
                                                    class="text-dark"
                                                >
                                                    <i class="icon-music"></i>Musical Instruments
                                                </nuxt-link>
                                            </li>

                                            <li>
                                                <nuxt-link
                                                    to="/shop/sidebar/3cols?category=gift"
                                                    class="text-dark"
                                                >
                                                    <i class="icon-gift"></i>Gift Ideas
                                                </nuxt-link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div class="col col-lg-6 col-xl-6 col-xxl-8 header-center">
                            <main-menu></main-menu>
                        </div>

                        <div class="col col-lg-3 col-xl-3 col-xxl-2 header-right">
                            <i class="la la-lightbulb-o"></i>
                            <p>Clearance Up to 30% Off</p>
                        </div>
                    </div>
                </div>
            </div>
        </sticky-header>
    </header>
</template>

<script>
import CartMenu from '~/components/partial/headers/shared/CartMenu';
import CompareMenu from '~/components/partial/headers/shared/CompareMenu';
import WishlistMenu from '~/components/partial/headers/shared/WishlistMenu';
import MainMenu from '~/components/partial/headers/shared/MainMenu';
import HeaderSearch from '~/components/partial/headers/shared/HeaderSearch';
import StickyHeader from '~/components/elements/StickyHeader';

export default {
    components: {
        CartMenu,
        CompareMenu,
        WishlistMenu,
        MainMenu,
        HeaderSearch,
        StickyHeader
    },
    data: function() {
        return {
            isOpened: true
        };
    },
    computed: {
        isFullwidth: function() {
            return this.$route.path.includes('fullwidth');
        }
    },
    watch: {
        $route: function() {
            if (this.$route.path !== '/') this.isOpened = false;
            else this.isOpened = true;
        }
    },
    created: function() {
        if (this.$route.path !== '/') this.isOpened = false;
    },
    methods: {
        openSignInModal: function() {
            this.$modal.show(
                () => import('~/components/elements/modals/SignInModal'),
                {},
                { width: '575', height: 'auto', adaptive: true }
            );
        },
        openMobileMenu: function() {
            document.querySelector('body').classList.add('mmenu-active');
        },
        toggleDropdown: function() {
            this.isOpened = !this.isOpened;
        }
    }
};
</script>