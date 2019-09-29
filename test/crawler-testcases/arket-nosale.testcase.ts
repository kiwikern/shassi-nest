/* tslint:disable:max-line-length */

import { ArketCrawler } from '../../src/crawler/crawlers/arket.crawler';

export const arketNoSaleTestCase = {
  crawlerType: ArketCrawler,

  url: 'https://www.arket.com/en_eur/men/underwear-loungewear/product.pima-cotton-trunks-black.0494992001.html',

  sizes: [
    { id: '0494992001002', isAvailable: true, name: 'S' },
    { id: '0494992001003', isAvailable: true, name: 'M' },
    { id: '0494992001004', isAvailable: false, name: 'L' },
    { id: '0494992001005', isAvailable: true, name: 'XL' },
  ],

  sizeChecks: [
    { size: '0494992001004', isAvailable: false, isLowInStock: false },
    { size: '0494992001002', isAvailable: true, isLowInStock: false },
    { size: 'sizedoesnotexist', isAvailable: false, isLowInStock: false },
  ],

  name: 'Pima Cotton Trunks',

  priceChecks: [
    { size: '0494992005004', price: 10 },
    { size: 'unknown-size', price: 10 },
  ],

  secondResponse: {availability: ['0494992005004', '0494992005005', '0494992005002', '0494992005003', '0494992001002', '0494992003005', '0494992001003', '0494992001005', '0494992006005', '0494992002002', '0494992004002', '0494992002004', '0494992002003', '0494992002005', '0494992011003', '0494992011004', '0494992013005', '0494992013004', '0494992011002', '0494992013003', '0494992006002', '0494992013002', '0494992011005'], fewPieceLeft: []},

  testResponse: `<!DOCTYPE HTML>
<html class="no-js">
    <head>

\t<meta http-equiv="Pragma" content="no-cache">
\t<meta http-equiv="Expires" content="-1">

    <title>Pima Cotton Trunks - Black - Underwear &amp; Loungewear - ARKET DE</title><meta name="description" content=" Classic trunks made from high-quality Pima cotton. The extra-long staple fibres of Pima cotton are spun into strong and colourfast yarns that yield smooth, slightly lustrous jersey fabrics. Added elastane gives a comfortable stretch to this close-fitted style. Elastic waist Lined front Short legs Underwear &amp; Loungewear > Trunks This product is part of the Multibuy offer. Buy 3 for £20/€25/250 SEK/200 DKK. "><meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="keywords" content="Pima Cotton Trunks">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
<meta name="format-detection" content="telephone=no">
<meta property="og:title" content="Pima Cotton Trunks - Black - Underwear &amp; Loungewear - ARKET DE">
\t<meta property="og:description" content=" Classic trunks made from high-quality Pima cotton. The extra-long staple fibres of Pima cotton are spun into strong and colourfast yarns that yield smooth, slightly lustrous jersey fabrics. Added elastane gives a comfortable stretch to this close-fitted style. Elastic waist Lined front Short legs Underwear &amp; Loungewear > Trunks This product is part of the Multibuy offer. Buy 3 for £20/€25/250 SEK/200 DKK. ">
\t<meta property="og:url" content="https://www.arket.com/en_eur/men/underwear-loungewear/product.pima-cotton-trunks-black.0494992001.html">
\t<meta property="og:site_name" content="ARKET">
\t<meta property="og:type" content="product">
\t<meta property="og:image" content="https://lp.arket.com/app006prod%3Fset%3Dsource%5B02_0494992_001_001%5D%2Ctype%5BPRODUCT%5D%2Cdevice%5Bhdpi%5D%2Cquality%5B80%5D%2CImageVersion%5B2019092%5D%26call%3Durl%5Bfile%3A%2Fproduct%2Fmain%5D">

\t

\t<meta property="og:price:amount" content="10.00">
\t<meta property="product:price:amount" content="10.00">
\t
\t
\t<meta property="og:price:currency" content="EUR">
<meta property="product:price:currency" content="EUR">
<meta property="og:availability" content="instock">\t
\t
\t<meta property="fb:app_id" content="138733209821465" >

 \t<script type="text/javascript" src="/dtagent_ICA23STVjpqrx_7000100211014.js" data-dtconfig="agentUri=/dtagent_ICA23STVjpqrx_7000100211014.js|rid=RID_141814543|rpid=-810616273|domain=arket.com|lastModification=1552954611127|lab=1|tp=500,50,0,1,10|reportUrl=dynaTraceMonitor|app=Appeaser Production Desktop Web"></script><script src="/etc/designs/appeaser/p11/clientlibs/pattern-lib/frontend/js/modernizr-custom.min.js"></script><style type="text/css"></style>
<link href="/etc/designs/appeaser/p11/clientlibs/pattern-lib/frontend.min.css" rel="stylesheet" type="text/css">
<script src="https://cdn-pci.optimizely.com/js/12359070012.js"></script><script type="text/javascript" src="/etc/designs/hm/clientlibs/shared/jquery.min.js"></script>
<script type="text/javascript" src="/etc/designs/appeaser/shared/clientlibs/metaTags.min.js"></script>
<link rel="shortcut icon" type="image/png" href="/etc/designs/appeaser/p11/favicons/favicon-32.png">
    <link rel="apple-touch-icon" href="/etc/designs/appeaser/p11/favicons/favicon-57.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/etc/designs/appeaser/p11/favicons/favicon-180.png">
    <link rel="canonical" href="https://www.arket.com/en_eur/men/product.pima-cotton-trunks-black.0494992001.html"/>\t\t
\t<link rel="alternate" hreflang="en-GB" href="https://www.arket.com/en_gbp/men/product.pima-cotton-trunks-black.0494992001.html">
\t<link rel="alternate" hreflang="en-SE" href="https://www.arket.com/en_sek/men/product.pima-cotton-trunks-black.0494992001.html">
\t<link rel="alternate" hreflang="en-NO" href="https://www.arket.com/en_nok/men/product.pima-cotton-trunks-black.0494992001.html">
\t<link rel="alternate" hreflang="en-DK" href="https://www.arket.com/en_dkk/men/product.pima-cotton-trunks-black.0494992001.html">
\t<link rel="alternate" hreflang="x-default" href="https://www.arket.com/en_eur/men/product.pima-cotton-trunks-black.0494992001.html">
\t<script type="text/javascript" src="/en_eur/metrics/default/touchpoint.js"></script>

    <div class="coremetricsPageType" data-cpt="product page 4" hidden></div>

    <input id="ogimage" type="hidden" value=""/>

    <input type="hidden" id="metaPrice" value="10.0"/>\t\t\t\t
\t\t</head><!-- Code to manage the mobile preview after css changes by HTML team -->
<body data-component="OPage" class="layout-inside" id="oPage" data-wcmmode-edit="false" data-locale-page-node-name="en_eur">
\t<style type="text/css">
\t\t@import url('/content/dam/P11/css/arket.css?v=3.0');


/******** Inline Styles ********/

.o-navigation .navigation-curtain .department-link i {
color:red;
font-style: normal;
}

.list-wrapper .options .a-option.out-of-stock:after {
    width: 22px;
    background: black;
}

.o-local-navigation .nav-title {
    display: none;
}

.o-newsletter-popup {
    z-index: 15 !important;
}


/* Change to display: block when you want it to show */
.fshbar {
    display: block !important;
}

   .o-department-filter .subdepartments-section .palette .scroll a[href$="/homeware/holidays.html"].subdepartment {
   display:none;}

   .o-department-filter .subdepartments-section .palette .scroll a[href$="/homeware/most-popular.html"].subdepartment {
   display:none;}

@media (max-width:630px) {
    .o-my-page-navigation .o-list {padding: 91px 20px 25px 0;}
}


    /** Fix 11, hero headline placement **/
    @media (max-width: 631px) {
    .o-hero[style*="maintainRatio"].is-takeover .takeover-wrapper { position: relative; bottom: auto; top: 0; }
    .o-hero.is-takeover[style*="maintainRatio"] .o-text-block { margin-bottom: 0; padding-bottom: 0; color: black !important;}
    }
    /** Fix 12, hero headline disappears in low-res mobile **/
    @media (max-width: 414px) {
    .o-hero[style*="maintainRatio"]{height: auto;max-height: 100%;overflow: visible;}
    .o-hero[style*="maintainRatio"] .takeover-wrapper {position: relative; bottom: auto; top:auto;}
    .o-hero.is-takeover[style*="maintainRatio"] .o-text-block { margin-bottom: 0; padding-bottom: 0; color: black !important;}
    }


.o-width.wc-50[style*="noLines"] > .o-layout .layout-2 {border: none;}
.o-width.wc-50[style*="noLines"] > .o-layout .layout-2 .layout-row-2 {border: none;}
.o-width.wc-50[style*="noLines"] .layout-row-2:before {display: none; }
.o-width.wc-50[style*="noLines"] .layout-row-3:before {display: none; }
.o-width.wc-50[style*="noLines"] .o-layout { padding: 0; }
.o-width.wc-50[style*="noLines"] .o-layout .layout-row-2 {border-bottom: none;}

/* COMPONENT hero */
.o-hero.single-image[style*="heroLandscapeTop"] {
    height: auto; }
    .o-hero.single-image[style*="heroLandscapeTop"] .image-wrapper .takeover-background {
      width: 100%;
      height: 70vh;
      display: block;
      bottom: 0px;
      position: relative;
      background-position: top;
      }

    .o-hero.single-image[style*="heroLandscapeTop"] .takeover-wrapper {
      pointer-events: none;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      width: 70%;
      z-index: 1;
      }
      .o-hero.single-image[style*="heroLandscapeTop"] .takeover-wrapper .textblock-container .o-text-block .caption-wrapper .caption-container {
        width: auto;
        display: inline-block; }
        .o-hero.single-image[style*="heroLandscapeTop"] .takeover-wrapper .textblock-container .o-text-block .caption-wrapper .caption-container [class^=caption-] {
          width: auto;
          font-size: 20px; }
          @media (max-width: 768px) {
            .o-hero.single-image[style*="heroLandscapeTop"] .takeover-wrapper .textblock-container .o-text-block .caption-wrapper .caption-container [class^=caption-] {
              font-size: 16px; } }
          .o-hero.single-image[style*="heroLandscapeTop"] .takeover-wrapper .textblock-container .o-text-block .caption-wrapper .caption-container [class^=caption-][class*=title] {
            font-family: "Arket Sans Ding"; }
      @media (max-width: 768px) {
        .o-hero.single-image[style*="heroLandscapeTop"] .takeover-wrapper .textblock-container .o-text-block .heading-wrapper .m-headline .a-heading-1 [class^="heading-"] {
          font-size: 25px; } }
      @media (max-width: 768px) {
        .o-hero.single-image[style*="heroLandscapeTop"] .takeover-wrapper {
          z-index: 2; } }

.o-hero.single-image .takeover-wrapper .o-text-block.disable-bg {text-shadow: 0px 0px 13px rgba(0, 0, 0, 0.50);}


[style*="image_1-4-col-vnav"] .layout-2 .o-image-listing .image-container .slider-text-block .o-text-field i {font-family: 'Arket Sans Ding', monospace; font-style: normal;}
[style*="image_4-1-col-vnav"] .layout-2 .o-image-listing .image-container .slider-text-block .o-text-field i {font-family: 'Arket Sans Ding', monospace; font-style: normal;}



.o-product-listing[class*="fixed-columns-"].has-thumbnails .description .price > label, .o-product-listing[class*="fixed-columns-"].has-thumbnails .description .product > label {
  display: block;
  position: absolute;
  width: 60px;
  left: 0;
  text-align: right; }

.o-product-listing[class*="fixed-columns-"].has-thumbnails .description .price > label + label, .o-product-listing[class*="fixed-columns-"].has-thumbnails .description .product > label + label {
  display: inline-block;
  text-align: left;
  width: 100%;
  padding-left: 70px; }

.o-product-listing[class*="fixed-columns-"].has-thumbnails:not(.no-image):not(.has-upper-body-images):not(.has-lower-body-images):not(.has-model-images) .o-product:not(.large) .image {
  width: 52px;
  float: left; }

.o-product-listing[class*="fixed-columns-"].has-thumbnails:not(.no-image):not(.has-upper-body-images):not(.has-lower-body-images):not(.has-model-images) .o-product:not(.large) .description {
  width: 75%;
  float: left;
  margin-top: 16px; }


/* DENIMKAMPANJ Component */
.page-every-day-denim [style*="denimIntro"] {
  background: #1C284F;
  width: 100%;
  padding: 88px !important;
  margin: 0 !important; }
  .page-every-day-denim [style*="denimIntro"] i {
    font-family: Arket Sans Ding;
    font-style: normal; }

  .page-every-day-denim [style*="denimIntro"] .text-container .a-link {
    border-bottom: 4px solid rgba(255, 255, 255, 1) !important; }

.page-every-day-denim [style*="denimIntro"] .o-text-field .text-container .a-paragraph .a-link:hover {
    color: rgba(255, 255, 255, 0.8) !important; }


  .page-every-day-denim [style*="denimIntro"] p {
    margin: 0 !important;
    font-family: Arket Sans;
    font-size: 50px !important;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.3 !important;
    letter-spacing: 0px;
    color: #ffffff; }

 @media (max-width: 768px) {
 .page-every-day-denim [style*="denimIntro"] .text-container .a-link {
    border-bottom: 2px solid rgba(255, 255, 255, 1) !important; }
 .page-every-day-denim [style*="denimIntro"] {
    padding: 35px !important; }
 .page-every-day-denim [style*="denimIntro"] p {
    font-size: 20px !important; }}

.page-every-day-denim [style*="denimSatisfaction"] {
  background: #1C284F;
  width: 100%;
  padding: 88px;
  margin: 0 !important; }
  .page-every-day-denim [style*="denimSatisfaction"] p {
    margin: 0 !important;
    font-family: Arket Sans;
    font-size: 20px !important;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.3 !important;
    letter-spacing: 0px;
    color: #ffffff; }
  @media (max-width: 768px) {
    .page-every-day-denim [style*="denimSatisfaction"] {
      padding: 30px; }
      .page-every-day-denim [style*="denimSatisfaction"] p {
        font-size: 20px !important; } }

.page-every-day-denim #vid {
  position: relative;
  top: 0;
  max-height: 100vh;
  width: 100%;
  margin: 0;
  overflow: hidden; }
.page-every-day-denim #vid.mobileVideo #dvid {
height:194%;
}
  .page-every-day-denim #vid span {
    position: absolute;
    padding: 0;
    margin: 0;
    width: 400px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 35px;
    z-index: 11;
    color: #FFFFFF;
    font-size: 25px;
    font-family: Arket Sans sc;
    text-align:center;}
    .page-every-day-denim #vid span i {
      font-size: 30px;
      width: 100%;
      font-family: Arket Sans Ding;
      text-decoration: none;
      font-style: normal;
      display: inline-block;
      text-align: center;
      animation: bounce 0.6s infinite alternate;
      -webkit-animation: bounce 0.6s infinite alternate;
}

.page-every-day-denim #fixedmenu {
  transition: all 0.4s ease-in-out;
  opacity: 0;
  position: fixed;
  z-index: 3;
  margin: 0 20px;
  top: 12%;
  right: 0;
  text-align: right; }
  .page-every-day-denim #fixedmenu ol {
    list-style: none;
    padding: none;
    line-height: 1.8em;
    color: #1C284F;
    font-size: 14px;
    font-family: Arket Sans SC; }
    .page-every-day-denim #fixedmenu ol li:nth-child(1) {
      font-size: 25px; }
  .page-every-day-denim #fixedmenu.show {
    opacity: 1; }

.page-every-day-denim [id*="image"] {
  position: relative; }

.page-every-day-denim [id*="image"] .richtextWrapper {
  width: 100%;
  max-width: 450px;
  transition: background 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  left: 20px;
  z-index: 4;
  top: 13px; }
  .page-every-day-denim [id*="image"] .richtextWrapper p {
    padding: 0 20px 0 0;
    color: #2c3f5d;
    font-size: 14px; }
    .page-every-day-denim [id*="image"] .richtextWrapper p:nth-child(1) {
      cursor: pointer; }
    .page-every-day-denim [id*="image"] .richtextWrapper p:nth-child(2) {
      display: none;
      margin-left: 15px;
      margin-top: 5px; }
    .page-every-day-denim [id*="image"] .richtextWrapper p span {
      font-family: Arket Sans Ding; }
  .page-every-day-denim [id*="image"] .richtextWrapper ol {
    list-style: none;
    padding: 0;
    color: #2c3f5d;
    font-size: 14px;
    font-family: Arket Sans SC; }
  .page-every-day-denim [id*="image"] .richtextWrapper.open {
    background: white; }
  .page-every-day-denim [id*="image"] .richtextWrapper:nth-child(2) {
    top: 372px; }
  @media (max-width: 768px) {
    .page-every-day-denim [id*="image"] .richtextWrapper {
      display: none !important; } }

.o-department-filter .subdepartments-section .palette .subdepartment:nth-child(1n+16) {display:none !important;}

@media (min-width: 631px) {
  .o-hero.single-image .takeover-wrapper .o-text-block {max-width: 70%;}
}

.o-local-navigation {opacity:0;}
.o-navigation .my-account-icon:hover {
  background: #FFF!important;
  color:#000!important;
  opacity: 0.5;
}

.o-filter:not(#container_sizes) .checkbox-wrapper .a-label.js-a-label {
  text-transform:capitalize;
}
.o-filter#container_sizes .checkbox-wrapper .a-label.js-a-label {
    text-transform: uppercase;
 }
.a-button-nostyle.clear-btn {
    font-size: 0px!important;
    letter-spacing: 0px!important;
    color: #FFF!important;
}
.a-button-nostyle.clear-btn:before {
  content: 'Clear all';
  font-size: 14px!important;
  color: #000!important;
  border-bottom: 1px dotted rgba(0, 0,0,0.6);
  display: inline-block;
  height: 15px;
}

.bottom-section a.a-link.open-lightbox.bottom.shipping {
  padding-bottom: 2px!important;
  padding-right: 0px!important;
  line-height: 13px!important;
}

#back-to-top {
  opacity: 0;
  transition: all 0.3s ease-in-out;
  height: 40px;
  width: 40px;
  font-size: 25px;
  display: block;
  font-family: 'Arket Sans Ding';
  position: fixed;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  bottom: 40px;
  right: 20px;
  line-height: 1.4;
  text-align: center;
  background: #FFF;
  border-radius: 50%;
  z-index: 99999;
}

.o-page-content .sdp-component.left-component .a-heading-1 .search-text, .o-page-content .sdp-component.left-component .a-paragraph .search-text {
    padding-left: 50px;
    max-width: 165px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    float: left;
    font-family: Arket Sans;
    text-transform: capitalize;
}

.o-page-content .sdp-component.left-component .a-paragraph:before {
    content: "search";
}

.o-page-content .sdp-component.left-component .a-paragraph::before {
    font-family: 'Arket Sans sc';
    font-weight: normal;
    position: absolute;
    left: 0;
    font-size: 13px;
}

@media (min-width: 769px) {
.o-width.wc-100[style*="animatedSale"] {
    margin: -3px 0px 0px!important;
}
}

@media (max-width: 768px) {

.o-footer {
    padding: 30px 15px 75px;
}

}

/* STAFFAN 190206 */

@media (max-width: 631px){
  .o-newsletter-popup {
    top: auto!important;
    max-height: 550px !important;
    background-color: white;
  }
}


@media (max-width: 768px) {
    .o-hero.is-takeover + .parbase.sdp-component.left-component {
      margin-top: 15px !Important;
    }
}

/* Local nav fix that makes the selected one black */
.o-local-navigation ul li.is-selected .a-link {
    color: black;
}

/* Cookie bar fixes */

@media (min-width: 631px){
.m-cookie-bar.is-visible .cookie-wrapper {
    text-align: left;
}

.m-cookie-bar {
    font-family: Arket Sans;
    max-height: 150px !important;
}

.m-cookie-bar:not(.is-disaster) {

    width: 400px;
    text-align: left;
left:32px;
bottom:32px;
}

.o-cookie-message .close-click-area {
    height: 150px;
    width: 50px;
}}

/* Hides back to top tag in curated search footer on mobile */

@media (max-width: 631px){
.o-curated-search-footer .o-tag-cloud {
    display: none !important;
}}

/* Customerservice header fix */

@media (min-width: 1025px){
.o-my-page-navigation .o-list {
    padding: 91px 0 44px 0 !important;
}}

/* Padding på newslettersidan*/

.o-newsletter-signup {
    margin-top: 110px;
}



.o-hero .takeover-wrapper .textblock-container .o-text-block .caption-wrapper .caption-container {
    width: auto;
    display: inline-block;
    background-color: white;
    color: black;
    font-family: Arket Sans;
    padding: 5px 14px 6px;
    margin-top: 10px;
    text-shadow: none;
    border-radius: 2px;
}

.o-hero .takeover-wrapper .textblock-container .o-text-block .caption-wrapper .caption-container [class^=caption-][class*=title] {display: none}

/*@media (min-width: 1280px) {
  .o-page-content .sdp-component.local-navigation { background-color: white;}
}
.o-page-content .sdp-component.left-component.is-search {width: 100%;}*/

@media (max-width: 630px){
.o-header.has-border:not(.has-open-search) {
    transition: height 0.5s ease,
 box-shadow 1s ease;
    box-shadow: 0 17px 32px rgba(0, 0, 0, 0.1) !important;
}}


/* Fix on SDP och local nav skugga */
@media (min-width: 769px){
.local-navigation {
    border-top: none;
    z-index: 1;
    /* box-shadow: 0 6px 6px rgba(0, 0, 0, 0.1); */
}
.local-navigation {
box-shadow: none;
}
/*
.o-page-content .o-width:not(.full-width) > .sdp-component {
    margin: 0;
    margin-top: 20px;
}*/

}


.o-local-navigation ul li.is-selected {
    padding: 1px 7px 1.5px 7px;
}

@media (max-width: 768px){
.o-header.show-notification .m-notification-ticker {
    left: -17px;
}}



.o-page-content .sdp-component.left-component.is-search {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0);
}

/*
@media (min-width: 769px) {
  .o-page-content .sdp-component.local-navigation + .product-listing .o-product-filters,
  .o-page-content .sdp-component.local-navigation + .o-width .product-listing .o-product-filters {
    top: -70px;
  }
}*/
.o-page-content .sdp-component.product-listing .o-product-filters {position: inherit;}



@media (max-width: 630px) {
        .o-width[style*="imageMobile"] .o-image-listing.cols-1 {width: 30%;margin: 0;position: absolute;top: -122px;left: 35%;}
}

.a-heading-1.has-margin, .a-heading-2.has-margin {margin: 25px 0px 10px 0;}
.o-focus-panel .focus-panel-container .free-tile.focus-panel .a-link .m-free-tile .text-content .a-paragraph {padding: 15px 10px 0;}

.o-focus-panel .focus-panel-container .free-tile.focus-panel .a-link .m-free-tile {padding-bottom: 130%;}

/* Adds a white background to campaign push text */

.o-navigation .campaign-content .campaign-text {
    width: unset;
    text-shadow: 0 0 9px rgba(0, 0, 0, 0.0) !important;
    background-color: white;
    color: black;
    max-width: 90%;
    padding: 4px 9px 6px 9px;
    border-radius: 1px;
    top: 90%;
  }


/* Fix on SALE tag */

.o-navigation .departments .department-item[data-title=SALE] {
    color: red;
}

.o-navigation .departments .department-item[data-title=SALE].is-active {
    color: white;
    background-color:red;
}


.o-navigation .campaign-content .a-heading-3 {font-size: 18px !important;}



@media (min-width: 789px) {

.o-product-listing.fixed-columns-4.has-upper-body-images .o-product:nth-child(4n-7) {
  margin-left: 0px!important;
}


.o-product-listing.fixed-columns-4.has-upper-body-images .o-product {
    width: 24.7%!important;
}
}

/*@media (max-width: 768px) {
  .o-width:not(.wc-25):not(.wc-50) .o-layout .layout-5 .layout-row-2 {padding: 0px 7px 20px 0;}
}
*/


.o-product-listing {padding-top: 30px; font-size: 0px;}

@media (max-width: 768px) {
    .o-product-listing {padding-top: 10px;}
}

.o-focus-panel .focus-panel-container .free-tile.focus-panel {padding: 20px 0 0px;}
@media (max-width: 768px) {
    .o-focus-panel .focus-panel-container .free-tile.focus-panel {padding: 10px 0 0px;}
}

body.page-carefully-made .o-focus-panel .focus-panel-container.three-tiles .free-tile.focus-panel {padding-bottom: 90px;}


  @media (max-width: 768px) {
    .page-every-day-denim #fixedmenu {
      display: none !important; } }

  @media (max-width: 768px) {
    .page-every-day-denim #image1 .richtextWrapper {
      display: none !important; } }

[style*="image_1-4-col-vnav"] .layout-2 .o-image-listing .image-container .slider-text-block .o-text-field sup, [style*="image_4-1-col-vnav"] .layout-2 .o-image-listing .image-container .slider-text-block .o-text-field sup {top: 0; font-size: 1.6em; font-size: 1.6em; line-height: 1.3em;}


@keyframes bounce {
  from {
    transform: translateY(0px); }
  to {
    transform: translateY(-8px); } }

@-webkit-keyframes bounce {
  from {
    transform: translateY(0px); }
  to {
    transform: translateY(-8px); } }

    .page-every-day-denim #fixedmenu ol li:hover {
      cursor: pointer !important; }


/* Left align Header shipping text in mobile */
@media (max-width: 768px){
.o-header.show-notification .m-notification-ticker {
    right: auto!important;
    left: 0!important;
}

.m-notification-ticker li {
    left: 15px!important;
    right: auto!important;
}
}



/* Fix button width in hero */
.o-hero .o-text-block .caption-wrapper .caption-container > span {
    width: 100%!important;
    font-size: 18px;
padding: 0;
}


@media (max-width: 768px) {
  .page-every-day-denim-c .o-width:not(.wc-25):not(.wc-50) .o-layout .layout-5 .layout-row-2 {
    padding: 0 !important; }
  .page-every-day-denim-c .o-image-listing.cols-1 {
    margin: 0 !important; }
.page-every-day-denim-c .every-day-denim > .o-width {
    width: 100% !important; }
 }

@media (max-width: 400px) {
  .page-every-day-denim-c .every-day-denim .o-image-listing.cols-2 {
    position: relative; }
    .page-every-day-denim-c .every-day-denim .o-image-listing.cols-2 .image-container {
      width: 100%;
      position: relative; }
      .page-every-day-denim-c .every-day-denim .o-image-listing.cols-2 .image-container:nth-child(1) {
        z-index: 1; }
      .page-every-day-denim-c .every-day-denim .o-image-listing.cols-2 .image-container:nth-child(2) {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 3;
        animation-name: fganimation;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-duration: 3s;
        animation-direction: alternate; } }

.outlet {
    line-height: 2.2em;
}

/* Pulsating animation */


.pulsate {
    animation: pulsate 3s ease-out;
    animation-iteration-count: infinite;
    opacity: 0.3;
}
@keyframes pulsate {
    0% {
        opacity: 0.2;
    }
    50% {
        opacity: 1.0;
    }
    100% {
        opacity: 0.2;
    }
}

@media (max-width: 630px) {
  .page-every-day-denim #care-repair .o-hero .o-text-block {
    color: #1C284F; } }

.page-every-day-denim .o-product .description {
  font-size: 15px;
  color: #1C284F; }
  .page-every-day-denim .o-product .description .product {
    color: #1C284F; }
  .page-every-day-denim .o-product .description .price {
    color: #1C284F; }

.page-every-day-denim [style*="preloader"] {
  height: 100vh;
  background: url(/content/dam/P11/PDP%20icons/technique.gif) no-repeat;
  background-position: center center;
  background-color: #1C284F;
  margin: -56px 0 0 !important;
  width: 100% !important;
  left: 0; }

  @media (max-width: 768px) {
    .page-every-day-denim [style*="preloader"] {
      margin: -53px 0 0 !important; } }



    @media (min-width: 1582px){
.o-page-content .sdp-component + .product-listing .o-product-filters {
    top: 0px;
}}

@media (min-width: 631px) {
    [style*="DT"].o-width {padding-top: 50px;}
}

@media (max-width: 768px) {
    .jeansfilter .jeansfilter--left{
        width: 100%!important;
    }
    .jeansfilter .jeansfilter--left .jeansfilter--left__inner {
        padding-top: 150%!important;
    }
    .jeansfilter .jeansfilter--right {
        width: 100%!important;
    }
    .jeansfilter--visual {
        width: 68%!important;
        left: 52%!important;
    }
    .jeansfilter--select span, .jeansfilter--select ul li {
        font-size: 30px!important;
    }
    .jeansfilter--text {
        top: 60px!important;
        width: 80%!important;
    }
    .jeansfilter--select:after {
        right: 10px!important;
        font-size: 36px!important;
        top: -12px!important;
    }
     .jeansfilter--select .close {
        right: 10px!important;
        font-size: 20px!important;
        top: 2px!important;
     }
}


/* DENIMKAMPANJ Component */
.page-every-day-denim-c [style*="denimIntro"] {
  background: #1C284F;
  width: 100%;
  padding: 88px;
  margin: 0 !important; }
  .page-every-day-denim-c [style*="denimIntro"] p {
    margin: 0 !important;
    font-family: Arket Sans;
    font-size: 50px !important;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.3 !important;
    letter-spacing: 0px;
    color: #ffffff; }
  @media (max-width: 768px) {
    .page-every-day-denim-c [style*="denimIntro"] {
      padding: 30px; }
      .page-every-day-denim-c [style*="denimIntro"] p {
        font-size: 20px !important; } }

.page-every-day-denim-c [style*="denimSatisfaction"] {
  background: #1C284F;
  width: 100%;
  padding: 20px;
  margin: 0 !important; }
  .page-every-day-denim-c [style*="denimSatisfaction"] p {
    margin: 0 !important;
    font-family: Arket Sans;
    font-size: 20px !important;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.3 !important;
    letter-spacing: 0px;
    color: #ffffff; }
  @media (max-width: 768px) {
    .page-every-day-denim-c [style*="denimSatisfaction"] {
      padding: 30px; }
      .page-every-day-denim-c [style*="denimSatisfaction"] p {
        font-size: 20px !important; } }

.page-every-day-denim-c #vid {
  position: relative;
  top: 0;
  max-height: 100vh;
  width: 100%;
  margin: 0;
  overflow: hidden; }
.page-every-day-denim-c #vid.mobileVideo #dvid {
height:194%;
}
  .page-every-day-denim-c #vid span {
    position: absolute;
    padding: 0;
    margin: 0;
    width: 400px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 35px;
    z-index: 11;
    color: #FFFFFF;
    font-size: 25px;
    font-family: Arket Sans;
    text-align:center;}
    .page-every-day-denim-c #vid span i {
      font-size: 30px;
      width: 100%;
      font-family: Arket Sans Ding;
      text-decoration: none;
      font-style: normal;
      display: inline-block;
      text-align: center;
      animation: bounce 0.6s infinite alternate;
      -webkit-animation: bounce 0.6s infinite alternate;
}

.page-every-day-denim-c #fixedmenu {
  transition: all 0.4s ease-in-out;
  opacity: 0;
  position: fixed;
  z-index: 3;
  margin: 0 20px;
  top: 12%;
  right: 0;
  text-align: right; }
  .page-every-day-denim-c #fixedmenu ol {
    list-style: none;
    padding: none;
    line-height: 1.8em;
    color: #1C284F;
    font-size: 14px;
    font-family: Arket Sans SC; }
    .page-every-day-denim-c #fixedmenu ol li:nth-child(1) {
      font-size: 25px; }
  .page-every-day-denim-c #fixedmenu.show {
    opacity: 1; }

.page-every-day-denim-c [id*="image"] {
  position: relative; }

.page-every-day-denim-c [id*="image"] .richtextWrapper {
  width: 100%;
  max-width: 450px;
  transition: background 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  left: 20px;
  z-index: 4;
  top: 13px; }
  .page-every-day-denim-c [id*="image"] .richtextWrapper p {
    padding: 0 20px 0 0;
    color: #2c3f5d;
    font-size: 14px; }
    .page-every-day-denim-c [id*="image"] .richtextWrapper p:nth-child(1) {
      cursor: pointer; }
    .page-every-day-denim-c [id*="image"] .richtextWrapper p:nth-child(2) {
      display: none;
      margin-left: 15px;
      margin-top: 5px; }
    .page-every-day-denim-c [id*="image"] .richtextWrapper p span {
      font-family: Arket Sans Ding; }
  .page-every-day-denim-c [id*="image"] .richtextWrapper ol {
    list-style: none;
    padding: 0;
    color: #2c3f5d;
    font-size: 14px;
    font-family: Arket Sans SC; }
  .page-every-day-denim-c [id*="image"] .richtextWrapper.open {
    background: white; }
  .page-every-day-denim-c [id*="image"] .richtextWrapper:nth-child(2) {
    top: 372px; }
  @media (max-width: 768px) {
      .page-every-day-denim-c #fixedmenu.show {
    opacity: 0; display: none; }
    .page-every-day-denim-c [id*="image"] .richtextWrapper {
      display: none !important; } }


@media (max-width: 768px) {
    .page-fit-guide .jeansfilter--text, .page-fitguide .jeansfilter--text {padding: 10px 0px 0px 20px;}
    .jeansfilter .jeansfilter--left .jeansfilter--left__inner {padding-top: 80%!important;}
}

.page-every-day-denim-c .a-heading-2 {font-size: 50px !important;}
@media (max-width: 768px) {
    .page-every-day-denim-c .a-heading-2 {font-size: 25px !important;}
}

.page-every-day-denim-c .o-focus-panel .focus-panel-container .free-tile.focus-panel .a-link .m-free-tile .text-content .a-heading-2 {font-size: 20px !important;}

.page-fit-guide .jeansfilter--visual {font-family: Arket Sans Sc; line-height: 1.8em; font-size: 20px;}
.page-fit-guide #k1 p, .page-fitguide #k1 p {font-family: Arket Sans Sc; line-height: 1.1; font-size: 20px;}
.page-fit-guide #f1 p, .page-fitguide #f1 p {font-family: Arket Sans Sc; line-height: 1.8em; font-size: 20px;}

@media (max-width: 768px) {
    .page-fit-guide #k1 p, .page-fitguide #k1 p { line-height: 1.1; font-size: 16px;}
    .page-fit-guide #f1 p, .page-fitguide #f1 p { line-height: 1.1; font-size: 16px;}
    .page-fit-guide .jeansfilter--visual {font-family: Arket Sans Sc; line-height: 1.8em; font-size: 16px;}
}

@media(max-width: 768px){
/*    .o-navigation.is-open .navigation-curtain {
        opacity: 1;
        padding-top: 34px!important;
        height: calc(100vh - 40px)!important;
    }
    .o-navigation .navigation-curtain {
        height:1px!important;
        top: 50px!important;
        opacity: 0;
        background: #FFFFFF!important;
        transition: opacity .2s ease-in-out,background .2s ease-in-out!important;
    }*/
    .o-navigation .navigation-curtain .category-wrapper,.o-navigation .category-menu {
        background: transparent!important;
    }
    .o-navigation .trending-content li .a-link {
        padding: 2px 10px 2px 0px;
    }
}


.o-navigation .departments .department-item[data-title=SALE]:hover {
    color: #FFFFFF;
}
.o-navigation .departments .department-item[data-title=SALE].is-active {
    background: transparent;
}
.o-navigation .departments .department-item[data-title=SALE]:hover:before,.o-navigation .departments .department-item[data-title=SALE].is-active:before {
    background: red;
}

.o-width.wc-100:not([style*="denimIntro"]):not([style*="jeans19"]):not([style*="line-divider"]):not([style*="takeOver"]):not([style*="fwText"]):not([style*="multipleCTA"]):not([style*="VNAV"]) {
    padding:0!important;
    margin: 0!important;
}
.o-width.wc-100[style*="noLinesfullWidth"]{
    padding-left: 18px!important;
        padding-right: 18px!important;
}


/* .o-page-content .sdp-component {
    width: 100%!important;
    margin: 0!important;
}*/

body:not(.page-bath-and-body):not(.page-giftwrapping) .o-product-listing#reloadProducts.has-upper-body-images,
body:not(.page-cleaning-and-caring):not(.page-bath-and-body):not(.page-giftwrapping) .o-product-listing#reloadProducts.fixed-columns-6 {
     padding-top: 0!important;
 }
.o-page-content .sdp-component.local-navigation {
    width: calc(100% - 20px);
}

/*.o-page-content .sdp-component.left-component .a-heading-1 {
    padding-left: 20px!important;
}*/
.o-page-content .o-width:not(.full-width) > .sdp-component .filter-buttons {
    right: 20px!important;
}

@media (max-width: 630px){
    .o-product-listing.has-upper-body-images {
        margin: 0!important;
        width: 100%!important;

    }
}

@media (min-width: 1582px) {
    .o-page-content .sdp-component.local-navigation + .product-listing .o-product-filters, .o-page-content .sdp-component.local-navigation + .o-width .product-listing .o-product-filters {
        top: -50px!important;
    }
}

@media (max-width: 630px){
.o-page-content .o-width:not(.full-width) > .sdp-component .show-all-filters .filter-wrapper {
    left: 0px;
}
}

.o-width + .o-width .parbase.sdp-component.product-listing.align-right .o-product-filters {
    position: relative!important;
    display: inline-block!important;
    height: 32px!important;
}


@media (max-width: 374px){
    .o-page-content .sdp-component.left-component .a-heading-1 .a-link.subcategory {
        width: 104px!important;
    }
}
@media (min-width: 375px) and (max-width: 413px){
    .o-page-content .sdp-component.left-component .a-heading-1 .a-link.subcategory {
        width: 146px!important;
    }
}


@media (max-width: 768px){
        .o-width + .o-width .parbase.sdp-component.product-listing.align-right .o-product-filters {
        position: relative!important;
        display: inline-block!important;
        height: 32px!important;
    }

    .o-page-content .sdp-component.left-component .a-heading-1 .category {
        float: left;
    }
    .o-page-content .sdp-component.left-component .a-heading-1 .a-link.subcategory {
        padding-left: 0px;
        overflow: hidden;
        display: block;
        text-overflow: ellipsis;
        float: left;
        margin-left: 0px;
        line-height: 16px;
    }
    .o-product-filters.has-applied-filters .clear-btn {
        padding-right: 0px;
    }
    .o-product-filters.has-applied-filters .clear-btn + .mobile-filter-btn {
        padding-left: 3px;
    }
    body .o-page-content .sdp-component.left-component .a-heading-1 {
        padding-left: 15px!important;
    }
    body .o-page-content .o-width:not(.full-width) > .sdp-component .filter-buttons {
        right: 15px!important;
    }
}

body.page-stores .o-layout {margin-top: 0;}
[style*="stores"] .text-container i{font-family: Arket Sans Ding; font-style: normal;}
[style*="stores"] .a-heading-2.has-margin {text-align: left;}
[style*="stores"] .o-layout .layout-5 .layout-row-2 .o-text-field .headings .m-headline, [style*="stores"] .o-layout .layout-5 .layout-row-3 .o-text-field .headings .m-headline {padding-bottom: 0;}

.o-width[style*="stores"] {padding-top: 80px !important;}
@media (max-width: 768px){
    .o-width[style*="stores"] {padding-top: 0 !important;}
}



@media (max-width: 768px){
    .o-page-content .sdp-component.local-navigation {
        width: auto!important;
        min-width: calc(100vw - 30px);
        max-width: calc(100vw - 15px);
        overflow: hidden;
        margin-left: 15px!important;
    }
.o-page-content .sdp-component.local-navigation .o-local-navigation {
width: auto!important;
left:0!important;
}
.o-width.wc-75[style*="stores"] .o-layout {margin-top: 0px !important;}

    [style*="stores"] .o-text-field .text-container .a-paragraph a{
        line-height: 40px!important;
    }
    [style*="stores"] .m-headline [class^="a-heading-"] {
        margin-bottom: 0px!important;
    }

[style*="stores"] .o-width:not(.wc-25):not(.wc-50) .o-layout .layout-2 .layout-row-2,
[style*="stores"] .o-width:not(.wc-25):not(.wc-50) .o-layout .layout-2 .layout-row-3{
    width: 100%!important;
}
.o-page-content .sdp-component:not(.local-navigation)+.o-width .product-listing .o-product-filters .filter-buttons {
    top: -4px;
 }

}
@media (max-width: 768px){
.o-navigation .my-account-icon:hover {
    background: #000!important;
    color: #fff!important;
    opacity: 1!important;
}
[style*="stores"] .o-layout .o-text-field .headings, [style*="stores"] .o-layout .o-text-field .m-headline {
    display: block;
}
}
/*
 @media (max-width: 768px){
    .o-page-content .sdp-component.left-component {
        height: 50px;
    }
    body .o-page-content .sdp-component.left-component .a-heading-1 {
        line-height: 50px;
    }
} */
.o-local-navigation .nav-title {
    margin-left: 0px;
}

.o-page-content .sdp-component.left-component.is-search {
 left: 0!important;
}

.o-filter-color .color-name {
    text-transform: capitalize;
}

.o-product-filters .filter-link .selected-value {
     text-transform: capitalize;
}

[style*="promoBG"].o-width.wc-100:not([style*="denimIntro"]){
    padding-top: 56px!important;
    margin-top: -56px!important;
}

@media (max-width: 768px){
    .o-navigation .information-section .a-link.bottom.account.logout {
        display: block;
        position: absolute;
        padding: 0 14px;
        bottom: 82px;
        left: 50%;
        transform: translateX(-50%);
        width: auto;
        height: 50px;
        line-height: 50px;
    }
    .o-navigation .information-section .a-button-nostyle.follow, .o-navigation .information-section .a-link.follow {
        margin-bottom: 130px;
        border-bottom: 1px solid black;
    }

}

@media (max-width: 630px){
    [style*="fwm-focuspanel"] .o-width.wc-75 {
        width: 100%!important;
        padding: 0!important;
        margin: 0!important;
        overflow: hidden!important;
    }
    [style*="fwm-focuspanel"] .o-focus-panel .focus-panel-container.-tiles, [style*="fwm-focuspanel"] .o-focus-panel .focus-panel-container.three-tiles,[style*="fwm-focuspanel"] .o-width .o-focus-panel {
        width: 100%!important;
        margin: 0!important;
    }
    [style*="fwm-focuspanel"] .o-focus-panel .focus-panel-container.three-tiles .free-tile.focus-panel {
        width: 32.2333%!important;
    }

    [style*="fwm-focuspanel"] .o-focus-panel .focus-panel-container .free-tile.focus-panel .a-link .m-free-tile .text-content .a-heading-2 {
    padding: 7px 7px 9px!important;
        font-size: 14px!important;
    }
    [style*="fwm-focuspanel"] .o-focus-panel .focus-panel-container .free-tile.focus-panel:first-child {
        margin-left: 0px!important;
    }
}

.o-page-content .o-width:not(.full-width).wc-100[style*="newSale"]{
    /*padding: 96px 0 20px!important;*/
    position: relative;
    text-align: center;
    background-color: white;
}
/*@media (max-width: 768px){
    .o-page-content .o-width:not(.full-width).wc-100[style*="newSale"] {padding: 96px 0 0px!important;}
}*/

[style*="newSale"] h1 {
    font-size: 2.5rem;
}

[style*="newSale"] h1 span {
    font-family: Arket Sans SC;
    padding-right: 10px;
}

[style*="newSale"] .o-tag-cloud .tags-container .tag {
    background: #f6f6f5;
    color: #000;
    box-shadow: 1px 1px 2px #d4d4d4;
}
[style*="newSale"] .o-tag-cloud .tags-container .tag:hover {
    background: #000;
    color: #fff;
}
[style*="newSale"] .o-tag-cloud .tags-container .tag:hover a {
    color: #FFF!important;
}
@media(max-width: 768px){
    [style*="newSale"] h1 {
    font-size: 2rem;
}
}

#lazyLoadSpan{
display: block;
width: 100%;
overflow: hidden;
}

body.page-fitguide .o-image-listing .image-container .caption {background-color: rgb(244, 244, 244); padding: 2px 7px 3px;}


/*.o-image-listing .image-container .caption {font-size: 16px; line-height: 1.4em; padding: 10px 10px;width: 96%; text-align: left;}
@media (max-width: 768px) {
    .o-image-listing .image-container .caption {font-size: 14px; white-space: normal;}
}*/
[style*="workwear"] .o-product-listing .o-product .image .a-image {mix-blend-mode: multiply;}
@media (min-width: 401px) {
  .o-width[style*="workwear"]:not(.wc-25):not(.wc-50) .o-layout .layout-2 .layout-row-3:before,
.o-width[style*="workwear"]:not(.wc-25):not(.wc-50)
  .o-layout .layout-2 .layout-row-2:before,
.o-width[style*="workwear"]:not(.wc-25):not(.wc-50)
  .o-layout .layout-3 .layout-row-3:before,
.o-width[style*="workwear"]:not(.wc-25):not(.wc-50)
  .o-layout .layout-3 .layout-row-2:before,
.o-width[style*="workwear"]:not(.wc-25):not(.wc-50)
  .o-layout .layout-4 .layout-row-3:before,
.o-width[style*="workwear"]:not(.wc-25):not(.wc-50)
  .o-layout .layout-4 .layout-row-2:before {
    width: 0px;
  }
}

.o-width[style*="workwear"] .o-layout {margin: 0;}


 @media (max-width: 768px) {
        div[style*="workwear"] .o-layout .layout-2 [class*="layout-row-"], [style*="workwear"].o-width:not(.wc-25):not(.wc-50) .o-layout .layout-2 [class*="layout-row-"] {
            width: 100%!important;
            padding: 0!important;
        }
        .o-width:not(.wc-25):not(.wc-50) .o-layout .layout-2 [class*="layout-row-"]:before {
            display: none;
        }
        .o-width:not(.wc-25):not(.wc-50) .o-layout .layout-2 [class*="layout-row-"]:after {
            display: none;
        }
        div[style*="workwear"] .o-layout .layout-2, .o-width:not(.wc-25):not(.wc-50) .o-layout .layout-2{
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            flex-direction: column;
            -webkit-flex-direction: column;
        }
           div[style*="workwear"][style*="-flexbox"] .layout-2 .layout-row-2{
            -webkit-box-ordinal-group: 2;
            -moz-box-ordinal-group: 2;
            -ms-flex-order: 2;
            -webkit-order: 2;
            order: 2;
        }
 }



.page-apartamento .o-width.wc-75,
.parentpage-apartamento .o-width.wc-75{
    width: 51%;
    margin: 0;
    float: left;
}
.page-apartamento .o-width.wc-75 .o-text-field .text-container .a-paragraph,
.parentpage-apartamento .o-width.wc-75 .o-text-field .text-container .a-paragraph {
    font-family: Arket Sans;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: 0px;
    color: #000000;
}

.page-apartamento .o-width.wc-25,
.parentpage-apartamento .o-width.wc-25 {
        width: 49%;
        margin: 0;
        float: left;
}
.page-apartamento .o-width.wc-100:not(:nth-child(5)),
.parentpage-apartamento .o-width.wc-100:not(:nth-child(5)) {
    max-width: 100%;
    margin: -1px 0 0;
    width: 100%;
    max-width: 100%;
    display: block;
    overflow: hidden;
    z-index: 1;
}

#svgWrap {
    max-width: 90%
}
#svgWrap2 {
    max-width: 70%;
    margin-top:11px;
    margin-left: 30%;
}
[style*=“apartamentotop”] #svgWrap2 {
    margin-top: 11px;
}
.page-apartamento [style*="apartamentotop"] .o-width.wc-75,
.parentpage-apartamento [style*="apartamentotop"] .o-width.wc-75{
    width: 51%;
    margin: 0;
    float: left;
}
.page-apartamento [style*="apartamentotop"] .o-width.wc-75 .o-text-field .text-container .a-paragraph,
.parentpage-apartamento [style*="apartamentotop"] .o-width.wc-75 .o-text-field .text-container .a-paragraph{
    font-family: Arket Sans;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: 0px;
    color: #000000;
}

.page-apartamento [style*="apartamentotop"] .o-width.wc-25,
.parentpage-apartamento [style*="apartamentotop"] .o-width.wc-25 {
        width: 49%;
        margin: 0;
        float: left;
}
.page-apartamento [style*="apartamentotop"] .o-width.wc-100:not(:nth-child(5)),
.parentpage-apartamento [style*="apartamentotop"] .o-width.wc-100:not(:nth-child(5)) {
    max-width: 100%;
    margin: -1px 0 0;
    width: 100%;
    max-width: 100%;
    display: block;
    overflow: hidden;
}

[style*="apartamentotop"] #svgWrap{
    max-width: 90%
}
[style*="apartamentotop"] #svgWrap2{
    max-width: 70%;
    margin-top: 10px;
    margin-left: 30%;
}
.o-width.wc-100[style*="apartamentotop"]{
    padding: 76px 20px 0px!Important;
    background: #ffd433 ;
}
.o-width.wc-100[style*="apartamentotop-fixed"] {
    position: fixed;
    top: 0;
    padding-bottom: 7px!important;
    width: 100%;
    margin-bottom: 0!important;
    z-index: 4;
}


@media (min-width: 1582px){
   .page-apartamento .o-page-content .o-width:not(.full-width).wc-75,
   .page-apartamento .o-page-content .o-width:not(.full-width).wc-25,
   .parentpage-apartamento .o-page-content .o-width:not(.full-width).wc-25,
   .parentpage-apartamento .o-page-content .o-width:not(.full-width).wc-75{
        max-width: 100%;
    }
}

.page-apartamento .o-footer, .parentpage-apartamento .o-footer, .parentpage-apartamento .o-page-content {
    background: #ffd433;
}
.parentpage-apartamento .o-footer, .page-apartamento .o-footer {
        padding: 75px 40px 110px;
}

.o-width[style*="leftHeadline"] .m-headline {text-align: left;}

[style*="image_1-4-col-vnav"] .layout-2 .o-image-listing .image-container .slider-text-block .o-text-field u {font-size: 25px; text-decoration: none;}
[style*="image_4-1-col-vnav"] .layout-2 .o-image-listing .image-container .slider-text-block .o-text-field u {font-size: 25px; text-decoration: none;}

.o-layout .layout-5 .layout-row-2 .o-text-field .headings .m-headline, .o-layout .layout-5 .layout-row-3 .o-text-field .headings .m-headline {margin-bottom: 0;}

.o-newsletter-popup .m-radio-button .a-label.label-text {
    height: 49px;
    width: 106px;
    line-height: 99px;
    text-align: center;
    padding-left: 0;
    margin-top: 0;
}

.o-newsletter-popup .option-wrapper {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    width: 222px;
    position: relative;
    height: 58px;
    margin-top: 10px;
    display: inline-block;
}

/* Newsletter popup tweaks*/
.o-newsletter-popup .m-radio-button .a-label.label-text {
    height: 49px;
    width: 106px;
    line-height: 99px;
    text-align: center;
    padding-left: 0;
    margin-top: 0;
}

.o-newsletter-popup .m-radio-button .a-label.label-text {
    height: 49px;
    width: 106px;
    line-height: 50px;
    text-align: center;
    padding-left: 0;
    margin-top: 0;
}

.o-newsletter-popup .m-radio-button {
    width: 50%;
    height: auto;
    position: relative;
    padding: 2px 3px 2px 2px;
    float: left;}

  .o-newsletter-popup .option-wrapper {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    width: 100%;
    position: relative;
    height: 58px;
    margin-top: 10px;
    display: inline-block;
}

.o-newsletter-popup .m-radio-button .a-label.label-text {
    height: 49px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    padding-left: 0;
    margin-top: 0;
}




.o-width.wc-100[style*="changeableImg"]:not([style*="denimIntro"]) {
    overflow: hidden;
    margin-top: -96px!important;
}
.o-width.wc-100[style*="changeableImg"]:not([style*="denimIntro"]) img  {
    width: 600px;
    margin: 0 auto;
    position: relative;
}

.o-width.wc-100[style*="changeableImg"]:not([style*="denimIntro"])+.o-tag-cloud .a-heading-6.cloud-title{
    position: absolute;
    top: 154px;
    font-family: arket sans;
    left: 50%;
    text-align: left;
    font-size: 60px;
    transform: translateX(-50%);
    width: 505px;
    text-transform: uppercase;
}
.o-width.wc-100[style*="changeableImg"]:not([style*="denimIntro"])+.o-tag-cloud .a-heading-6.cloud-title:before {
    content: 'SALE';
    position: absolute;
    color: red;
    top:-78px;
}

.o-width.wc-100[style*="changeableImg"]:not([style*="denimIntro"])+.o-tag-cloud {
    padding: 0 5px 20px;
}
.o-width.wc-100[style*="changeableImg"]:not([style*="denimIntro"])+.o-tag-cloud .tags-container .tag .a-link {padding: 5px 14px 8px;}


@media (max-width: 768px){

    .o-width.wc-100[style*="changeableImg"]:not([style*="denimIntro"]) img {
        width: 312px;
    }
    .o-width.wc-100[style*="changeableImg"]:not([style*="denimIntro"])+.o-tag-cloud .tags-container .tag .a-link {padding: 6px 14px 7px;}
    .o-width.wc-100[style*="changeableImg"]:not([style*="denimIntro"])+.o-tag-cloud .a-heading-6.cloud-title{
        position: absolute;
        top: 82px;
        left: 50%;
        text-align: left;
        font-size: 28px;
        transform: translateX(-50%);
        width: 260px;
        padding-bottom: 0;
    }
    .o-width.wc-100[style*="changeableImg"]:not([style*="denimIntro"])+.o-tag-cloud .a-heading-6.cloud-title:before {
        top: -40px;
    }
}

@media (max-width: 768px){

    body.page-sale .o-header:after
        {opacity: 1 !important;}
}


.a-link-read-more.q-color-black-100 .link-wrapper {display: none;}
.o-teaser-container {box-shadow: none;}





[style*="apartfixedmenu"] {
    position: fixed;
    bottom: 0;
    background: #ffd433;
    width: 100%;
}

[style*="apartfixedmenu"] .o-tag-cloud .tags-container .tag, [style*="apartfixedmenu"] .o-tag-cloud .tags-container .tag:hover {
    background: transparent;
}
/*
.page-apartamento .o-page-content, .parentpage-apartamento .o-page-content,
.page-170gsm .o-page-content, .page-220gsm .o-page-content,
.page-340gsm .o-page-content, .page-martin-fengel .o-page-content{
    padding-bottom: 81px;
}
*/

@media (min-width: 769px){
    [style*="apartamentotop"] .o-width.wc-50 {
        width: 50%!important;
    }
}
[style*="apartamentotop"]+.o-width.wc-50 {
    float:left;
    background: #FFF;
    padding-top: 0px;
    width: 47.6%;
}

[style*="apartamentotop"]+.o-width.wc-50+.o-width.wc-50 {
    background: #FFF;
    width: 52.3%;
    padding: 20px 60px !important;
    float:left;
}
[style*="apartamentotop"]+.o-width.wc-50+.o-width.wc-50 .o-image-listing img {
    max-width: 150px;
    display: block;
    margin: 0 auto;
    float: none;
}

body.parentpage-apartamento .o-width.wc-100[style*="apartamentotop"],
body.page-170gsm .o-width.wc-100[style*="apartamentotop"],
body.page-220gsm .o-width.wc-100[style*="apartamentotop"],
body.page-340gsm .o-width.wc-100[style*="apartamentotop"],
body.page-martin-fengel .o-width.wc-100[style*="apartamentotop"]
{
        padding: 76px 20px 8px!Important;
}
body.page-150gsm .tags-container .tag a[href*="150gsm.html"],
body.page-170gsm .tags-container .tag a[href*="170gsm.html"],
body.page-220gsm .tags-container .tag a[href*="220gsm.html"],
body.page-340gsm .tags-container .tag a[href*="340gsm.html"],
body.page-apartamento .tags-container .tag a[href*="apartamento.html"]
{
    position: relative;
}
body.page-150gsm .tags-container .tag a[href*="150gsm.html"]:before,
body.page-170gsm .tags-container .tag a[href*="170gsm.html"]:before,
body.page-220gsm .tags-container .tag a[href*="220gsm.html"]:before,
body.page-340gsm .tags-container .tag a[href*="340gsm.html"]:before,
body.page-apartamento .tags-container .tag a[href*="apartamento.html"]:before
{
    bottom: -11px;
    position: absolute!important;
    width: 0px!important;
    content: ""!important;
    height: 0px!important;
    border-left: 15px solid transparent!important;
    border-right: 15px solid transparent!important;
    border-bottom: 15px solid black!important;
    left: 50%;
    transform: translateX(-50%);
}

body.parentpage-apartamento .tags-container .tag,
body.page-170gsm .tags-container .tag,
body.page-220gsm .tags-container .tag,
body.page-340gsm .tags-container .tag,
body.page-martin-fengel .tags-container .tag
 {
    margin-right: 42px;
}

body.parentpage-apartamento,
body.page-170gsm,
body.page-220gsm,
body.page-340gsm,
body.page-martin-fengel
{
        margin-top: -56px;
    height: 100vh!important;
    overflow: hidden;
}


.parentpage-apartamento .o-page-content,
.page-170gsm .o-page-content,
.page-220gsm .o-page-content,
.page-340gsm .o-page-content,
.page-martin-fengel .o-page-content
{
    background: #FFF;
}
body.parentpage-apartamento .o-tag-cloud,
body.page-apartamento .o-tag-cloud,
body.page-220gsm .o-tag-cloud,
body.page-340gsm .o-tag-cloud,
body.page-martin-fengel .o-tag-cloud
{
    padding: 15px 25px 6px;
}
.parentpage-apartamento .o-footer,
.page-170gsm .o-footer,
.page-220gsm .o-footer,
.page-340gsm .o-footer,
.page-martin-fengel .o-footer
{
    background: #FFF;
}

@media( min-width: 769px){
    .o-my-page-navigation .o-list {
        text-align: center;
    }

    .o-my-page-navigation .o-list ul {
        display: inline-block;
        width: auto;
    }

    .o-my-page-navigation .o-list li {
        display: inline-block;
        margin: 0 30px;
    }
}

body.page-search .o-page-content > :not(.parsys), .o-page-content > .parsys > :not(.full-width),
body.page-search .o-page-content .o-width {
    margin: 0!important;
}

@media (max-width: 768px){
.o-page-content .sdp-component.left-component .a-paragraph::before {
    top: 0;
}

.o-page-content .sdp-component.left-component.is-search {
    padding-left: 15px;
}
}

.curated-content ul.trending-pages li a b,
.category-group .subcategories .subcategory a b,
.category-menu .curated-categories a b{
    font-family: "Arket Sans SC"!important;
    font-weight: normal;
}

.o-product-cofs .marker-text span {
    height: auto;
}


.o-width[style*="stores"] .o-tag-cloud .tags-container .tag .a-link {border: 1px solid; background-color: white; padding: 4px 12px 6px;}

body.page-apartamento .o-tag-cloud .tags-container .tag .a-link,
body.page-150gsm .o-tag-cloud .tags-container .tag .a-link,
body.page-170gsm .o-tag-cloud .tags-container .tag .a-link,
body.page-220gsm .o-tag-cloud .tags-container .tag .a-link,
body.page-340gsm .o-tag-cloud .tags-container .tag .a-link,
body.page-martin-fengel .o-tag-cloud .tags-container .tag .a-link {
    padding: 0px 20px 9px;
    display: block;
    font-family: arket sans sc mono;
    font-size: 20px;
    line-height: 1.0em;
}


[style*="apartamentotop"] + .o-width.wc-100>video {
    margin-bottom: -4px!important;
}

body.page-apartamento .o-footer {
    display: none;
}
body.page-apartamento {
    padding-bottom: 58px;
}

.parentpage-apartamento [style*="page-nav"]{
    width: 100%!important;
    left: 0!important;
    top: 50%!important;
    position: absolute!important;
    transform: translateY(-50%)!important;
    z-index: 12;
pointer-events: none;
}
.page-apartamento [style*="page-nav"] {
pointer-events: none;
    width: 100%!important;
    left: 0!important;
    top: 50%!important;
    position: fixed!important;
    transform: translateY(-50%)!important;
    z-index: 3 !important;
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container ,
.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container {
    height: 96px!important;
    width: 100%!important;
    position: relative!important;
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag,
.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag {
    background: transparent!important;
        pointer-events: all;
    padding: 0!important;
    margin: 0!important;
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child,
.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child{
    transition: left 0.5s ease-in-out!important;
    top: 0!important;
    padding: 0!important;
    width: 52px!important;
    height: 96px!important;
    position: absolute!important;
    left: 40px!important;
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child:hover,
.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child:hover{
    left: 20px!important;
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a,
.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a{
  font-family: Arket Sans ding!important;
  color: #ffd433!important;
  font-size: 80px!important;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  padding: 0!important;
  position: absolute!important;
  left: 50%!important;
  top: 50%!important;
  transform: translateY(-50%) translateX(-50%) rotate(90deg)!important;
}


.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child,
.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child{
    transition: right 0.5s ease-in-out;
    width: 52px!important;
    top: 0!important;
    height: 96px!important;
    position: absolute!important;
    right: 40px!important;
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a,
.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a{
  font-family: Arket Sans ding!important;
  color: #ffd433!important;
  font-size: 80px!important;
    font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal!important;
  letter-spacing: normal!important;
  padding: 0!important;
  position: absolute!important;
  left: 50%!important;
  top: 50%!important;
  transform: translateY(-50%) translateX(-50%) rotate(270deg)!important;
}


.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child:hover,
.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child:hover {
    right: 20px!important;
}

.page-apartamento video.a-video {
    margin-bottom: -4px!important;
}


[style*="apartamentotop"] div, #svgWrap,#svgWrap2,#svgWrap svg, #svgWrap2 svg {
    transition: none!important;
}

@media (min-width: 1582px) {
    .page-apartamento .o-page-content .o-width.wc-100:not(.full-width), .parentpage-apartamento .o-page-content .o-width.wc-100:not(.full-width) { padding-left: 0!important; padding-right: 0!important;}

     .page-apartamento .o-text-field.is-large, .parentpage-apartamento .o-text-field.is-large {
    padding: 20px 40px;
}

}



@media (max-width: 768px){
    .o-width.wc-100[style$="apartamentotop"] {
        display: none!important;
    }
    body.parentpage-apartamento {
        height: auto!important;
        overflow: visible!important;
    }
    body.parentpage-apartamento [style*="apartamentotop"]+.o-width.wc-50 {
        margin: 0!important;
        width: 100%!important;
    }
    body.parentpage-apartamento [style*="apartamentotop"]+.o-width.wc-50 + .o-width.wc-50 {
        margin: 0!important;
        width: 100%!important;
        padding: 0 20px!important;
    }
    .parentpage-apartamento [style*="page-nav"] .o-tag-cloud {
        padding: 0!important;
    }
    .parentpage-apartamento [style*="page-nav"] {
        position: fixed!important;
    }

body.page-150gsm [style*="apartfixedmenu"] .o-tag-cloud .tags-container .tag a:not([href*="150gsm.html"]),
body.page-170gsm [style*="apartfixedmenu"] .o-tag-cloud .tags-container .tag a:not([href*="170gsm.html"]),
body.page-220gsm [style*="apartfixedmenu"] .o-tag-cloud .tags-container .tag a:not([href*="220gsm.html"]),
body.page-340gsm [style*="apartfixedmenu"] .o-tag-cloud .tags-container .tag a:not([href*="340gsm.html"]),
body.page-apartamento [style*="apartfixedmenu"] .o-tag-cloud .tags-container .tag a:not([href*="apartamento.html"]){
    display: none;
}

[style*="apartfixedmenu"] .o-tag-cloud .tags-container .tag {
    margin: 0!important;
}
}

@media (max-width: 768px){
.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a,
.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a {
        font-size: 50px!important;
    }
.page-apartamento [style*="page-nav"] .o-tag-cloud {
    padding: 0!important;
}
.page-apartamento [style*="page-nav"] {
    top: 37%!important;
}


.o-width.wc-100[style*="apartamentotop-fixed"] {
    position: relative!important;
    padding-bottom: 32px!important;
    top: -56px!important;
}

.o-width.wc-100[style*="apartamentotop-fixed"] .o-width.wc-75,
.o-width.wc-100[style*="apartamentotop-fixed"] .o-width.wc-25 {
    width: 100%!important;
}

[style*="apartamentotop-fixed"] #svgWrap {
    max-width: 100%!important;
    margin: 0 auto!important;
}
[style*="apartamentotop-fixed"] #svgWrap2 {
    max-width: 80%!important;
    margin: 0 auto!important;
}

[style*="l1"] {
    position: relative!important;
    top: -56px!important;
}
}

@media (min-width: 769px){
    [style*="apartamentoM"] {
        display: none!important;
    }
}
.o-width[style*="apartamentoM"] .o-text-field .text-container {margin-top: -50px!important;}


body.page-suits .o-width + .o-width .parbase.sdp-component.product-listing.align-right .o-product-filters.is-collapsed {display: none !important;}

.freeHTML-accordian-item {text-align: left;}


.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a[href*="340gsm.html"]:after {
    content: '340GSM';
    font-family: Arket Sans SC mono;
    position: absolute;
    bottom: 26px;
    right: -47px;
    font-size: 20px;
    transform: rotate(-90deg);
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a[href*="340gsm.html"]:after {
    content: '340GSM';
    font-family: Arket Sans SC mono;
    position: absolute;
    bottom: 26px;
    left: -47px;
    font-size: 20px;
    transform: rotate(90deg);
}

.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag a[href*="340gsm.html"]:after {
    content: '340GSM';
    font-family: Arket Sans SC mono;
    position: absolute;
    bottom: 26px;
    right: -47px;
    font-size: 20px;
    transform: rotate(-90deg);
}
.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a[href*="150gsm.html"]:after {
    content: '150GSM';
    font-family: Arket Sans SC mono;
    position: absolute;
    bottom: 26px;
    right: -47px;
    font-size: 20px;
    transform: rotate(-90deg);
}
.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a[href*="150gsm.html"]:after {
    content: '150GSM';
    font-family: Arket Sans SC mono;
    position: absolute;
    bottom: 26px;
    left: -47px;
    font-size: 20px;
    transform: rotate(90deg);
}

.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag a[href*="150gsm.html"]:after{
    content: '150GSM';
    font-family: Arket Sans SC mono;
    position: absolute;
    bottom: 26px;
    left: -47px;
    font-size: 20px;
    transform: rotate(90deg);
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a[href*="170gsm.html"]:after{
    content: '170GSM';
    font-family: Arket Sans SC mono;
    position: absolute;
    bottom: 26px;
    right: -47px;
    font-size: 20px;
    transform: rotate(-90deg);
}
.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a[href*="170gsm.html"]:after {
    content: '170GSM';
    font-family: Arket Sans SC mono;
    position: absolute;
    bottom: 26px;
    left: -47px;
    font-size: 20px;
    transform: rotate(90deg);
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a[href*="220gsm.html"]:after {
    content: '220GSM';
    font-family: Arket Sans SC mono;
    position: absolute;
    bottom: 26px;
    right: -47px;
    font-size: 20px;
    transform: rotate(-90deg);
}
.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a[href*="220gsm.html"]:after {
    content: '220GSM';
    font-family: Arket Sans SC mono;
    position: absolute;
    bottom: 26px;
    left: -47px;
    font-size: 20px;
    transform: rotate(90deg);
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a[href*="apartamento.html"]:after {
    content: 'ARKET AND APARTAMENTO';
    font-family: Arket Sans SC mono;
    position: absolute;
    bottom: 26px;
    right: -96px;
    line-height: 0.9;
    font-size: 20px;
    transform: rotate(-90deg);
}
.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a[href*="apartamento.html"]:after {
    content: 'ARKET AND APARTAMENTO';
    font-family: Arket Sans SC mono;
    position: absolute;
    bottom: 26px;
    left: -96px;
    line-height: 0.9;
    font-size: 20px;
    transform: rotate(90deg);
}

body.parentpage-apartamento [style*="page-nav"] .o-tag-cloud {
    padding: 16px 25px 21px;
}


@media (max-width: 768px){
    body.parentpage-apartamento [style*="page-nav"] .o-tag-cloud {
        padding: 16px 25px 21px!important;
    }
}

body.page-apartamento [style*="apartfixedmenu"] .o-tag-cloud .tags-container .tag .a-link[href*="apartamento.html"],
body.parentpage-apartamento [style*="apartfixedmenu"] .o-tag-cloud .tags-container .tag .a-link[href*="apartamento.html"] {
    font-family: Arket Sans!important;
}
.parentpage-apartamento .a-heading-1.has-margin, .parentpage-apartamento .a-heading-2.has-margin {margin: 15px 0px 0px 0;}

/*.notificationTicker b, .notificationTicker strong, .notificationTicker p:nth-child(2), .notificationTicker li:nth-child(2) {
    display: none!important;
}

.notificationTicker li p:nth-child(2){
    display: block!important;
    position: absolute;
    z-index:3;
    top:0;
    right:0;
    animation-name: fganimation4;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-direction: alternate;
}

.notificationTicker li p:first-child {
    animation-name: fganimation2;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-direction: alternate;
}


@media (max-width: 768px) {
.o-navigation .mobile-notification:first-of-type {
    display: none!important;
}*/

/*.o-navigation .m-static-notification-ticker .center-content .a-svg-package {
    float: none;
    width: auto;
    display: inline-block;
    text-align: center;
    padding: 0;
margin-right: 5px;
}

.o-navigation .m-static-notification-ticker .center-content .a-svg-package #package {
    display: inline-block;
    text-align: center;
    float: none;
}

.o-navigation .m-static-notification-ticker .center-content p:nth-last-child(2) {
    animation-name: fganimation2;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-direction: alternate;
    display: inline-block;
    position: relative;
    bottom: 5px;
  }

.o-navigation .m-static-notification-ticker .center-content p:last-child {
    display: block!important;
    position: absolute;
    z-index: 3;
    left: 70px;
    animation-name: fganimation4;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-direction: alternate;
    bottom: 6px;
  }

  .o-navigation .m-static-notification-ticker .center-content {
    display: inline-block;
    min-width: 254px;
    position: relative;
}

.o-navigation.is-open .m-static-notification-ticker {
    padding-top: 24px;
    padding-bottom: 18px;
}
}

.m-static-notification-ticker .center-content p {
    font-size: 13px!important;
    float: none;
    white-space: nowrap;
    margin: 0;
    line-height: 1.1em;
    font-family: 'Arket Sans SC';
    font-weight: normal;
    text-transform: uppercase;
}
*/


/*THOMAS nytta på notifacation ticker */
.o-navigation .m-static-notification-ticker {padding: 22px 0 22px;}
.o-navigation .m-static-notification-ticker .center-content .a-svg-package {display: none;}
.o-navigation .m-static-notification-ticker .center-content p.mobile-notification {font-size: 13px;}



[style*="apartamentotop"]+.o-width.wc-50 {
padding-left: 0!important;
}


[style*="localnavTagcloud"] .o-tag-cloud {
    text-align: center;
    padding: 0 0 5px;
    height: 50px;
    line-height: 50px;
}
[style*="localnavTagcloud"] .o-tag-cloud .cloud-title {
    display: inline-block;
    width: auto;
    color: black;
    font-size: 13px;
    padding: 0;
    position: relative;
    margin-right: 17px;
}

[style*="localnavTagcloud"] .o-tag-cloud .tags-container {
    display: inline-block;
    width: auto;
}

[style*="localnavTagcloud"] .o-tag-cloud .tags-container .tag {
        font-size: 13px;
    line-height: 1.1em;
    color: black;
    display: inline-block;
    margin-right: 0px;
    margin-bottom: 0px;
    background: transparent;
}

[style*="localnavTagcloud"] .o-tag-cloud .tags-container .tag a{
    background: transparent;
        margin-right: 17px;
    font-size: 13px;
    line-height: 1.1em;
    color: black;
    padding: 0;
}

[style*="localnavTagcloud"] .o-tag-cloud .tags-container .tag a[href*="#"]{
    padding: 1px 7px 1.5px 7px;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.6);
    text-align: center;
    line-height: 23px;
    margin-right: 10px;
}




@media (min-width: 769px) {
    [style*="localnavTagcloud"] .o-tag-cloud {
        box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1);
    }
}
.sdp-component.left-component .product-listing-heading a:empty {
    display: none!important;
}




@media (min-width: 768px) and (max-width: 1023px){
    .o-product-details .image-gallery .o-zoom-slider.pdp-slider .a-picture.slick-slide {
        padding-left: 20px;
        padding-right: 20px;
    }
    .o-product-details .image-gallery .o-zoom-slider.pdp-slider .slick-arrow.slick-next {
        right: 0;
    }
    .o-product-details .image-gallery .o-zoom-slider.pdp-slider .slick-arrow.slick-prev {
        left: 0;
    }

/*  Unable to Activate TouchEvents so this code is moot
.m-product-zoom.is-visible {
    overflow: scroll!important;
}

.m-product-zoom .img-wrapper {
    height: 100%!important;
    transform: none!important;
    overflow: auto!important;
}
.m-product-zoom .img-wrapper .a-image,
.m-product-zoom .img-wrapper .a-image.zoomed-image {
    max-height: 200vh!important;
    width: auto!important;
    height: auto!important;
    max-width: 100vw!important;
    position: absolute!important;
    left: auto!important;
    transform: none!important;
}*/

}



@media (max-width: 768px){
    .o-width.wc-100[style*="localnavTagcloud"] {
        width: calc(100vw - 15px)!important;
        margin-left: 15px!important;
        overflow: hidden;
        border-top: 1px solid;
    }
    [style*="localnavTagcloud"] .o-tag-cloud {
        left: 0!important;
        width: 100%!important;
    }
    [style*="localnavTagcloud"] .o-tag-cloud .tags-container {
        width: calc(100% - 50px);
        max-height: 50px;
        overflow-y: hidden;
        text-align: left;
        overflow-x: auto!important;
        white-space: nowrap;
        scroll-behavior: smooth;
    }
    [style*="localnavTagcloud"] .o-tag-cloud .cloud-title,
    [style*="localnavTagcloud"] .o-tag-cloud .tags-container {
        display: block;
        line-height:50px;
        float: left;
        font-size: 14px;
    }
    .o-width[style*="localnavTagcloud"] + .o-width .parbase.sdp-component.product-listing.align-right .o-product-filters {
        top: -85px;
    }
  /*  .o-width[style*="localnavTagcloud"] + .o-width #lazyLoadSpan {
        margin-top: -45px;
    }*/
}



@media (max-width: 768px){

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a[href*="340gsm.html"]:after {
    bottom: 18px;
    right: -48px;
    font-size: 18px;

}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a[href*="340gsm.html"]:after {
    bottom: 13px;
    left: -48px;
    font-size: 18px;
}

.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag a[href*="340gsm.html"]:after {
    bottom: 18px;
    right: -48px;
    font-size: 18px;

}
.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a[href*="150gsm.html"]:after {
    bottom: 18px;
    right: -48px;
    font-size: 18px;

}
.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a[href*="150gsm.html"]:after {
    bottom: 13px;
    left: -48px;
    font-size: 18px;
}

.page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag a[href*="150gsm.html"]:after{
    bottom: 13px;
    left: -48px;
    font-size: 18px;
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a[href*="170gsm.html"]:after{
    bottom: 18px;
    right: -48px;
    font-size: 18px;

}
.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a[href*="170gsm.html"]:after {
    bottom: 13px;
    left: -48px;
    font-size: 18px;
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a[href*="220gsm.html"]:after {
    bottom: 18px;
    right: -48px;
    font-size: 18px;
}
.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a[href*="220gsm.html"]:after {
    bottom: 13px;
    left: -48px;
    font-size: 18px;
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a[href*="apartamento.html"]:after {
    bottom: 14px;
    right: -78px;
    line-height: 0.9;
    font-size: 18px;

}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a[href*="apartamento.html"]:after {
    bottom: 4px;
    left: -78px;
    line-height: 0.9;
    font-size: 18px;
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child, .page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child {
  right: 30px!important;
}

.parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child, .page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child {
  left: 30px!important;
}
[style*="apartamentoM"] .o-text-field .text-container .a-paragraph {
    font-size: 16px!important;
  }

  .parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a, .page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:first-child a,
  .parentpage-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a, .page-apartamento [style*="page-nav"] .o-tag-cloud .tags-container .tag:last-child a {
    font-size: 50px!important;
  }

}

.m-cookie-bar.is-disaster .a-icon-close{
           top:55px !important;
          }

@media (min-width: 631px){
.o-cookie-message .close-click-area {
    height: 100%;
}}

@media (min-width: 1025px){
.m-cookie-bar.is-disaster {
    text-align: left;
}}

.m-cookie-bar.is-disaster {
    background-color: white;
}

.m-cookie-bar:not(.is-disaster) .a-icon-close {
    color: #000;
    top: 25px;
}



        /* Change cookiebanner (not disaster) text */
        .m-cookie-bar.is-visible:not(.is-disaster) .cookie-wrapper .is-static p {
            display: block;
text-align:left;
        }

@media (max-width: 630px){
.m-cookie-bar {
   max-height: 260px !important;
}
}


.o-product-listing.has-details .o-product .image .a-image {height: auto !important;}

@media (min-width: 768px) {

    .wc-75 .o-layout .layout-1 .o-image-listing.cols-3 {
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: -3px!important;
        width: calc(100% + 6px) !important;
        margin-right: -3px!important;
        padding: 0!important;
    }

  .wc-75 .o-layout .layout-1 .o-image-listing.cols-3:after,.wc-75 .o-layout .layout-1 .o-image-listing.cols-3:before {
    content: " ";
    display: table;
  }
  .wc-75 .o-image-listing.cols-3 .image-container {
        padding: 6px 3px 0px!important;
        height: auto;
        margin: 0px!important;
        width: 33.333333331%!important;
    }
}

  .o-width.wc-100[style*="VNAV"] {margin: 0 0 -3px !important;}

  .o-width.wc-100[style*="VNAV"] .o-image-listing.cols-3 .image-container:hover {
    opacity: 0.9;
  }

  .o-width.wc-100[style*="VNAV"] .o-image-listing.cols-3 .image-container {
    margin: 0 !important;
    padding: 0 !important;
    width: 25% !important;
    position: relative;
    float: left;
  }
  .o-width.wc-100[style*="VNAV"] .o-image-listing.cols-3 .image-container .slider-text-block {
    position: absolute;
    bottom: 8%;
    left: 50%;
    color: black;
    width: auto;
    transform: translateX(-50%);
    background: #fff;
    padding: 5px 14px 6px;
    max-width: calc(100% - 20px);
    margin: 0;
    pointer-events: none;
  }
  .o-width.wc-100[style*="VNAV"] .o-image-listing.cols-3 .image-container .slider-text-block .o-text-field {
    margin: 0;
    white-space: nowrap;
    font-size: 18px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
  .o-width.wc-100[style*="VNAV"] .o-image-listing.cols-3 .image-container .slider-text-block .o-text-field i {
    font-family: Arket Sans Ding;
    font-style: normal;
  }


@media (max-width: 768px) {

  .o-width.wc-100[style*="VNAV"] .o-image-listing.cols-3 {
    overflow: hidden;
    margin: 0;
    white-space: normal;
    width: 100%;
    padding: 0;
  }

  .o-width.wc-100[style*="VNAV"] .o-image-listing.cols-3 .image-container {
    width: 50% !important;
    margin: 0;
    padding: 0;
  }
 .o-width.wc-100[style*="VNAV"] .o-image-listing.cols-3 .image-container .slider-text-block .o-text-field {
    font-size: 14px;
  }

}

.o-width[style*="VNAV"]+[style*="VNAV"]{
    margin-top: -3px!important;
}


.wc-75 .o-product-listing.has-model-images.fixed-columns-3 .image .a-image, .wc-75 .o-product-listing.has-model-images.fixed-columns-3 .image.compat-object-fit {height: auto !important;}

body.page-swimwear .o-image-listing.cols-2 .image-container:nth-child(even), body.page-swimwear .o-image-listing.cols-2 .image-container:nth-child(odd) {padding: 0;}

.page-jana-glatt .o-width:not(.wc-25) .o-text-field.large .a-paragraph {font-size: 16px;}

body.page-recycle-with-arket .o-image-listing.cols-2 .image-container:nth-child(even), body.page-recycle-with-arket .o-image-listing.cols-2 .image-container:nth-child(odd) {padding: 0 0 5px 0;}
body.page-recycle-with-arket .o-image-listing .image-container .col-item, .o-image-listing .image-container .a-link {width: 100%;}


@media (max-width: 768px){
    .o-width.wc-100[style*="rgb(255,247,227)"] {background-color: #fff !important;}
}

.o-product .placeholder-wrapper {padding-bottom: 133%;}
.newproductlistingManual .has-thumbnails .o-product .placeholder-wrapper {padding-bottom: 0px;}

body.page-swimwear iframe {
    width: 100%;
    height: 350px;
    display: block;
    margin: 0px auto -90px;
    border: none;
}


@media (max-width: 768px){
    body.page-swimwear iframe {
        width: 350px !important;
        height: 170px;
        margin: 0px auto -30px;
}
}



/*FOR SWIMWEAR CAMPAIGN PAGE*/
body.page-swimwear .o-image-listing.cols-2 .image-container:nth-child(even), body.page-swimwear .o-image-listing.cols-2 .image-container:nth-child(odd) {padding: 0;}
body.page-swimwear .o-product-listing.has-thumbnails .o-product .description .id, .o-product-listing.has-thumbnails .o-product .description .product {height: 22px;}
body.page-swimwear .o-product-listing.has-thumbnails .o-product .description .product span:first-child {width: 70px;}
body.page-swimwear .o-product-listing.has-thumbnails .o-product .description .product span:nth-child(2) {padding-left: 82px;}
body.page-swimwear [style*="rgb("] .o-product-listing:not(.has-upper-body-images):not(.model-images) .o-product {height: 60px;}
/*--------------------------*/
div[style*="dualHero"] .o-image-listing.cols-2 .image-container:nth-child(even), div[style*="dualHero"] .o-image-listing.cols-2 .image-container:nth-child(odd) {padding: 0;}
div[style*="dualHero"] .o-text-field .text-container {font-size: 20px;line-height: 2.2em; text-shadow: 0 0 6px #0000003b; margin: 0; }
div[style*="dualHero"] .o-image-listing .image-container .caption {width: auto; padding: 7px 12px; bottom: 100px; left: 40%;}
div[style*="dualHero"] .a-heading-2 {font-size: 40px; text-shadow: 0 0 12px #0000004f;}
div[style*="dualHero"].o-width::after {margin-top: -3px;}
div[style*="dualHero"] .o-text-field.is-wide {margin: 0!important;
    position: absolute;
    pointer-events: none !important;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    text-align: center;
    color: #fff;
    width: 40%;
}
@media (max-width: 768px){
    div[style*="dualHero"] .o-text-field.is-wide {width: 90%; top: 50.5% !important;}
    div[style*="dualHero"] .o-text-field .text-container {display: none;}
    div[style*="dualHero"] .o-image-listing .image-container .caption {font-size: 13px; padding: 7px 12px 8px; bottom: 15px;left: 25% !important; text-align: left;}
}



.o-width.wc-100[style*="takeOver"] {margin: -56px 0 50px 0!important;}
body.page-swimwear .o-product-listing .o-product .image .a-image {mix-blend-mode: multiply;}

div[style*="dualHero"] {
    margin-top: -56px!important;
    position: relative;
}


.page-swimwear [style*="takeOverDesktop"] {
    background: url("/content/dam/P11/PDP%20icons/technique.gif") center center / 10% no-repeat #faf8f3!important;

}
.page-swimwear [style*="takeOverMobile"]{
    background: url("/content/dam/P11/PDP%20icons/technique.gif") center center / 25% no-repeat #faf8f3 !important;
}
[style*="takeOverDesktop"]{
    display: none;
}
[style*="takeOverMobile"] video {
    opacity: 0;
}
[style*="takeOverMobile"]{
    margin-top: -56px!important;
    display: block;
}
@media(min-width: 769px){
    [style*="takeOverDesktop"] video{
        opacity: 0;
    }
    [style*="takeOverDesktop"]{
        display: block;
    }
    [style*="takeOverMobile"]{
        display: none;
    }
}
@media (max-width: 630px) {
   body.page-swimwear .o-focus-panel .focus-panel-container.two-tiles .free-tile.focus-panel { width: calc(50vw - 18px) !important; }
   body.page-swimwear .o-focus-panel .focus-panel-container { width: calc(100vw);}
}

@media (max-width: 630px) {
    /*.o-product-listing.has-thumbnails .o-product:nth-child(n+2):nth-child(-n+8) {margin-top: -1px !important;}*/
    .o-width .o-product-listing.has-thumbnails .o-product:first-child {margin: 10px 0 0 0 !important;}
}
.o-product-listing.has-thumbnails .o-product:nth-child(n+2):nth-child(-n+8) {margin-bottom: 0 !important;}

body.page-swimwear .o-width + .o-width .parbase.sdp-component.product-listing.align-right .o-product-filters {display: none !important;}

.o-width.wc-100[style*="takeOverMobile"] iframe {transform: none; width: 100% !important;}


@media (max-width: 767px) {
    .o-width[style*="desktopOnly"] {display: none; }
}
@media (min-width: 768px) {
    div[style*="mobileOnly"].o-width {display: none;}
}


body.page-swimwear .m-product-marker {display: none;}

div[style*="swimwear"].o-width {background-color: #faf8f3;}
@media (max-width: 630px) {
    div[style*="swimwear"] [class*="fixed-columns-"].o-product-listing .o-product {width: 32.3333331%; }
}


.o-dynamic-content-area .read-more-content {
    background-color: white;
}

@media (min-width: 1023px){
.m-swatches.swatch-panel-container {
    white-space: inherit;
    margin-bottom: 10px;
    }
}

@media (max-width: 630px){
.notificationTicker li p:nth-child(2) {
    display: block!important;
    position: absolute;
    z-index: 3;
    top: 0;
    right: auto !important;
    animation-name: fganimation4;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-direction: alternate;
}}

/* Hide cartstarter on small breakpoints to prevent overlapping */
@media (max-width: 1240px){
.o-navigation .curated-content .o-product {
    display: none !important;
}}

@media (min-width:1024px){
.o-header.has-open-search .m-notification-ticker {
    display: block;
}}

.o-product-details .right-panel .material-swatch-container {
    display: none !important;
}


/*
@media(max-width: 768px) {
.sdp-component.left-component {
    height: 50px!important
}
body .o-page-content .sdp-component.left-component .a-heading-1 {
line-height: 50px}
}
*/
@media(max-width: 768px) {
body.page-festive .sdp-component.left-component {
    height: 50px!important
}

body.page-festive .o-page-content .sdp-component.left-component .a-heading-1 {
line-height: 50px
}

}


.o-width + .o-width .parbase.sdp-component.product-listing.align-right .o-product-filters.u-visibility-hidden {
display: none!important;
}

.o-width.wc-75[style*="suitAnatomy"] {padding: 10px 80px !important; background-color: #fff8ee; margin-top: 40px;}

@media (max-width: 768px) {
    .o-width.wc-75[style*="suitAnatomy"] {padding: 10px 5px !important;}
}

/* Fix push down stores & other pages */
.parbase.sdp-component.local-navigation + .o-width {
    padding-top: 50px;
}

.o-text-field .text-container .a-paragraph .a-link {background-color: #fff0 !important;}


@media (max-width: 630px) {
    body.page-suits .o-product-listing.fixed-columns-3 .o-product:nth-child(2n-1) {margin-left: 0.84034%;}
    body.page-suits .o-image-listing .image-container .slider-text-block {hyphens: auto;}
}
.o-product-listing.has-details .o-product .description .price {overflow: auto;}

@media (max-width: 630px) {
    .o-image-listing.cols-3 .image-container {margin: 0px 5px 5px 0;}
       .o-width:not([style*="image_"]) .o-image-listing.cols-3 .image-container {width: 47.2%;}
    .o-image-listing.cols-3 {white-space: unset; font-size: 0px;}
}


[style*="localnavTagcloud"] .o-tag-cloud {
    margin-bottom: 20px !important;
}

.o-focus-panel .focus-panel-container.three-tiles .free-tile.focus-panel {padding-bottom: 60px;}

body.page-dresses .o-layout {margin-top: 20px;}
body.page-theperfecttshirt .o-layout {margin-top: 10px;}

body.page-suits .o-product-listing.has-upper-body-images .image .a-image {mix-blend-mode: multiply;}





.caption-wrapper  .caption-container {
    padding-left: 100px;
    position: relative;
}
.caption-wrapper .caption-container .caption-title {
    font-size: 0;
    color: transparent;
    padding: 0;
    width: auto;
}
.caption-wrapper .caption-container .caption-title:before {
    display: block;
    font-family: 'Arket Sans SC';
    font-size: 13px;
    position: absolute;
    color: #000;
    width: 90px;
    padding-right: 10px;
    top: 0;
    text-align: right;
    left: 0;
}
.caption-wrapper .caption-container:nth-child(1) .caption-title:before {
    content: 'construction';
}
.caption-wrapper .caption-container:nth-child(2) .caption-title:before {
    content: 'material';
}
.caption-wrapper .caption-container:nth-child(3) .caption-title:before {
    content: 'material';
}

body.page-suits .o-focus-panel .focus-panel-container .free-tile.focus-panel .a-link .m-free-tile .text-content .a-paragraph {font-family: arket sans sc; line-height: 1.3;}

/*body.page-travel .o-hero .o-text-block .heading-wrapper .m-headline .a-heading-1.large-font {text-shadow: none;}
body.page-travel .caption-wrapper .caption-container:nth-child(1) .caption-title:before {
    content: 'type';
}

body.page-travel .o-hero .image-wrapper .takeover-background {height: 70vh;}
body.page-travel .o-hero {height: 70vh;}

@media (max-width: 768px) {
  body.page-travel .o-hero .image-wrapper .takeover-background {height: 60vh;}
  body.page-travel .o-hero .image-wrapper {height: auto;}
  body.page-travel .o-hero {height: 60vh;}
  body.page-travel .local-navigation {border-bottom: 1px solid rgb(0, 0, 0);}
}
@media (max-width: 630px) {
    body.page-travel .o-hero {height: 85vh;}
}*/

.o-product .description .product-markers .marker-text span:not(:empty){
    display: inline-block;
}


/* Fixed bar w tag cloud at bottom of page */

[style*="fixedBar"] {
    position: fixed;
    bottom: 0;
    z-index: 11;
    background: #000000;
    width: 100%;
}

[style*="fixedBar"] .o-tag-cloud {
    text-align: center;
    padding: 15px 25px 6px;
}

[style*="fixedBar"] .o-tag-cloud .tags-container {
    display: inline-block;
    width: auto;
    padding-bottom: 0px;
}

[style*="fixedBar"] .o-tag-cloud .tags-container .tag, [style*="fixedBar"] .o-tag-cloud .tags-container .tag:hover {
    background: transparent;
    color: #FFFFFF;
    margin-bottom: 5px;
    padding-top: 0;
    padding-bottom: 0;
}
[style*="fixedBar"] .o-tag-cloud .tags-container .tag:not(:first-child) a {
    font-family: 'Arket Sans SC';
}

[style*="fixedBar"] .o-tag-cloud .tags-container .tag:first-child a {
    padding-left: 0.3em;
}
[style*="fixedBar"] .o-tag-cloud .tags-container .tag a {
    margin-bottom: 0;
    position: relative;
    padding: 0px 20px 9px;
}


[style*="fixedBar"] .o-tag-cloud .tags-container .tag a[href^="#"]:before {
    bottom: -11px;
    position: absolute!important;
    width: 0px!important;
    content: ""!important;
    height: 0px!important;
    border-left: 15px solid transparent!important;
    border-right: 15px solid transparent!important;
    border-bottom: 15px solid #FFFFFF!important;
    left: 50%;
    transform: translateX(-50%);
}
[style*="fixedBar"] .o-tag-cloud .tags-container .tag:hover a{
    color: #FFFFFF;
    opacity: 0.8;
}

[style*="fixedBar"] .o-tag-cloud .cloud-title {
    color: #FFFFFF;
    font-family: 'Arket Sans SC';
    display: inline-block;
    width: auto;
    padding-bottom: 0;
    font-size: 20px;
}

@media (max-width: 768px){
    [style*="fixedBar"] .o-tag-cloud .cloud-title,
    [style*="fixedBar"] .o-tag-cloud .tags-container .tag a  {
        font-size: 13px;
    }
    [style*="fixedBar"] .o-tag-cloud .tags-container .tag:first-child a  {
        padding-right: 0px;
    }
    [style*="fixedBar"] .o-tag-cloud .tags-container .tag:first-child a:before {
        left: calc( 50% - 13px);
    }
    [style*="fixedBar"] .o-tag-cloud .tags-container .tag:not(:first-child) a {
        display: none;
    }
    [style*="fixedBar"] .o-tag-cloud{
        padding: 15px 15px 6px;
    }
    [style*="fixedBar"] .o-tag-cloud .tags-container .tag a:not([href^="#"]):after {
        content: 'c';
        font-family: 'Arket Sans Ding';
        display: inline-block;
        position: relative;
        right: -6px;
        font-size: 13px;
    }
}



@media (max-width: 768px){
[style*="noLines-flexbox"] .layout-2 .layout-row-2 {
    order: 2;
}

[style*="noLines-flexbox"] .layout-3 .layout-row-3 {
    order: 1;
}
}

[style*="headline-disclaimer"] .m-headline.u-align-center.is-main-headline.full-width .a-paragraph.q-gamma-tall {
    font-family: Arket Sans SC;
    font-size: 13px;
    text-align: center;
}
[style*="text-readmore"] ,
#text-readmore{
        padding-top: 13px;
    opacity: 0;
    padding-bottom: 20px;
}

@media (max-width: 768px){
[style*="text-readmore"] ,
#text-readmore{
    padding-bottom: 13px;
}
}

body.parentpage-summer-market .o-tag-cloud .tags-container .tag {font-size:15px; color: #000; background-color: rgba(255,255,255,0.15)!important;  border: 1px solid;}
body.parentpage-summer-market .o-tag-cloud .tags-container .tag .a-link {padding: 5px 14px 6px;}

/* Show headlines on Mobile */
.o-layout .o-text-field .headings, .o-layout .o-text-field .m-headline  {display: block !important;}
.o-text-field .caption-wrapper {padding-bottom: 20px;}

/* Fix for new PDP on desktop */
@media (min-width: 1025px){
.o-product-details .image-gallery .a-picture:nth-child(even) {
    text-align: left;
}}

@media (min-width: 769px){
.o-zoom-slider .image-counter {
    margin: 0 auto;
    text-align: center;
    width: 100%;
    left: 0;
    top: auto;
    bottom:0!important;
}
}

.o-product-details .o-shown-with-wrapper {
display: none!important }

.o-zoom-slider .slider.slick-initialized > .slick-list {
    margin: 0 auto;
}

.o-product-details ~ .o-quick-buy {
    display: none;
}




/*
.o-product-details ~ .o-quick-buy.scrollFixed {
    position: fixed;
    top: 68px;
    background: #ffffff;
    z-index: 10;
    right: 0;
    width: 320px;
    padding: 0;
}

.o-product-details ~ .o-quick-buy.scrollFixed .m-headline.is-main-headline {
    display: none;
}
.o-product-details ~ .o-quick-buy.scrollFixed .content {
    width: 100%;
    padding: 20px;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1);
}
*/


@media (max-width: 768px) and (min-width: 631px){
.o-page-content .sdp-component.local-navigation .o-local-navigation {
    padding-left: 0!important;
}
}

 .fshbar {
        z-index: 10;
    height: 38px;
    box-shadow: 0 17px 32px rgba(0, 0, 0, 0.4) !important;
    color: #000;
    background: #fff;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    line-height: 29px;
    font-family: Arket Sans SC;
    font-size: 13px;
    letter-spacing: 0.3px;
 }

  .fshbar p {
    margin: 0 !important;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-family: Arket Sans SC;
    font-size: 13px;
       padding-bottom: 4px;
       letter-spacing: 0.3px
  }

  .fshbar p:first-child {
    animation-name: fganimation2;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-direction: alternate;
  }

  .fshbar p:last-child {
    display: block!important;
    position: absolute;
    z-index: 3;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    animation-name: fganimation4;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-direction: alternate;
  }

body[class*="page-product."] .fshbar {
    display: none!Important;
}

@media (min-width: 769px) {
  [style*="breadcrumb-center"] .parbase.sdp-component.left-component {
    max-width: 100%!important;
    text-align: center;
    padding: 20px 0;
    height: 120px;
  }

  [style*="breadcrumb-center"] .sdp-component.left-component .a-heading-1 {
    display: inline-block;
    position: relative;
    font-size: 20px;
    padding: 35px 0 5px!important;
  }
}

@media (max-width: 768px){
  .page-beach .o-layout [class*="layout-row-"] .o-layout .layout-2 {
      display: block;
  }
  .page-beach .o-layout [class*="layout-row-"] .o-layout .layout-2 [class*="layout-row-"] {
    width: 50%;
    display: block;
    float: left;
}
}
body.parentpage-summer-market .caption-wrapper .caption-container:nth-child(1) .caption-title:before {content: 'theme';}
body.parentpage-summer-market .caption-wrapper .caption-container:nth-child(2) .caption-title:before {content: 'departments';}
body.parentpage-summer-market .caption-wrapper .caption-container:nth-child(3) .caption-title:before {content: 'types';}
body.parentpage-summer-market .o-layout {margin: 0 !important;}
.parentpage-summer-market .o-width[style*="noLines"]:nth-child(7) .o-product-listing.has-upper-body-images .description,
.parentpage-summer-market .o-width[style*="noLines"]:nth-child(8) .o-product-listing.has-upper-body-images .description  {text-align: center; padding: 0; min-height: 50px;}
body.parentpage-summer-market .o-layout .layout-2 .layout-row-3 .a-heading-2.has-margin {margin-bottom: 0;}
.parentpage-summer-market .o-width[style*="noLines"]:nth-child(7) .o-product-listing.has-upper-body-images .image .a-image,
.parentpage-summer-market .o-width[style*="noLines"]:nth-child(8) .o-product-listing.has-upper-body-images .image .a-image {width: 85%; left: 7.5%;right: 7.5%;}
body.parentpage-summer-market .o-product-listing.has-upper-body-images .o-product .description .product-markers {display: none;}

.m-cookie-bar:not(.is-disaster) {
    max-height: none!important;
    padding-top: 30px!important;
  }

.o-navigation .secondary-navigation .search-icon.is-open:before {
    content: 'Z'!important;
    color: #000!important;
}

/* Hidden caption on focus panel, need to disicuss this
.o-focus-panel .focus-panel-container.three-tiles .free-tile.focus-panel {
    padding-bottom: 0px;
}*/

div:not([style*="fwm-focuspanel"]) .o-focus-panel .focus-panel-container.three-tiles .free-tile.focus-panel {
    padding-bottom: 0!important;
}

div:not([style*="fwm-focuspanel"]) .o-focus-panel .focus-panel-container .free-tile.focus-panel .a-link .m-free-tile {
    padding-bottom: 0%!important;
    display: inline-block!important;
    height: auto!important;
    background: transparent!important;
    position: relative!important;
}

div:not([style*="fwm-focuspanel"]) .o-focus-panel .focus-panel-container .free-tile.focus-panel .a-link .m-free-tile .a-picture {
    position: relative!important;
    display: inline-block!important;
    width: 100%!important;
    left: 0!important;
    top: 0!important;
}
div:not([style*="fwm-focuspanel"]) .o-focus-panel .focus-panel-container .free-tile.focus-panel .a-link .m-free-tile .text-content {
    position: relative!important;
    padding: 0 12%!important;
    text-align: center!important;
    top: auto!important;
    width: 100%!important;
    margin-top: -70px!important;
}
div:not([style*="fwm-focuspanel"]) .o-focus-panel .focus-panel-container .free-tile.focus-panel .a-link .m-free-tile .text-content .a-paragraph {
    position: relative!important;
    display: inline-block!important;
    margin-top: 15px!important;
    width: 100%;
}
div:not([style*="fwm-focuspanel"]) .o-focus-panel .focus-panel-container .free-tile.focus-panel .a-link .m-free-tile .text-content .a-paragraph:empty {
    display: none!important;
}
div:not([style*="fwm-focuspanel"]) .o-focus-panel .focus-panel-container.two-tiles  .free-tile.focus-panel {
    width: calc(33.33% - 6px) !important;
}

@media (max-width: 630px){
    div:not([style*="fwm-focuspanel"]) .o-focus-panel .focus-panel-container.two-tiles .free-tile.focus-panel {
        width: calc(50vw - 18px) !important;
    }
}

div:not([style*="fwm-focuspanel"]) .o-focus-panel {
    overflow: hidden;
}

@media (max-width: 630px) {
div:not([style*="fwm-focuspanel"]) .o-focus-panel {
overflow-x: auto;
}
}

.page-inde212x .m-splash,
body.undefined .m-splash {
    display: none!important;
}
@media (min-width: 631px) {
  .o-width .o-focus-panel {
    width: initial;
    display: block;
    margin: 10px auto 20px;
  }
}

/* Position Add to bag to the right & fix position in mobile */

    .m-cart-addition .a-tooltip {
        right: 0px!important;
    }
    .m-cart-addition .a-tooltip:before, .m-cart-addition .a-tooltip:after {
        right: 14px!important;
    }

    @media (max-width: 768px){
        .m-cart-addition .a-tooltip {
            right: 10px!important;
            top: -2px!important;
        }
        .m-cart-addition .a-tooltip:before, .m-cart-addition .a-tooltip:after {
            right: 39px!important;
        }
        .o-product-details-selection .product-size-wrapper .m-dropdown.is-open .list-wrapper {
            top: -140px!important;
        }
    }

div.o-width.wc-100:not([style*="denimIntro"])[style*="withmargins"] {
    margin-left: 20px!important;
    margin-right: 20px!important;
}
@media (max-width: 1024px) {
div.o-width.wc-100:not([style*="denimIntro"])[style*="withmargins"] {
    margin-left: 15px!important;
    margin-right: 15px!important;
}
}


body.page-index .o-layout .layout-2 .layout-row-3 .a-heading-2.has-margin, body.page-index .o-layout .layout-2 .layout-row-2 .a-heading-2.has-margin {margin-bottom: 10px;}
body.page-index .o-layout .layout-2 .o-text-field .text-container {margin: 0;}


.o-product-details ~ .o-quick-buy {
    display: none;
}


/* Suggestion */

@media (min-width: 769px){

.o-product-details ~ .o-quick-buy.scrollFixed {
    position: fixed;
    top: 68px;
    background: #ffffff;
    z-index: 10;
    right: 0;
    width: 300px;
    padding: 0;
}

.o-product-details ~ .o-quick-buy.scrollFixed .m-headline.is-main-headline {
    display: none;
}
.o-product-details ~ .o-quick-buy.scrollFixed .content {
    width: 100%;
    padding: 10px;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1);
}

}

@media (max-width: 768px){
    .o-product-details ~ .o-quick-buy.scrollFixed {
        position: fixed;
        bottom: 0;
        background: #ffffff;
        z-index: 10;
        right: 0;
        width: 100%;
        padding: 0;
    }

    .o-product-details ~ .o-quick-buy.scrollFixed .m-headline.is-main-headline {
        display: none;
    }
    .o-product-details ~ .o-quick-buy.scrollFixed .content {
        width: 100%;
        padding: 10px;
        box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1);
    }
}



/* Change order of layout on mobile. For T-shirt deal */
@media (max-width: 768px) {
    [style*="rgb(244, 244, 244)"] .layout-2 .layout-row-2 {order: 2;}
    [style*="rgb(244, 244, 244)"] .layout-3 .layout-row-3 {order: 1;}
}
/* Fix margins on mobile when using RGB for the new campaign component */
[style*="rgb("] .o-layout .layout-2 .layout-row-3 .o-image-listing {margin-top: 0px;}

.o-layout .layout-1 .layout-row-2 .a-heading-2.has-margin,
.o-layout .layout-1 .layout-row-3 .a-heading-2.has-margin,
.o-layout .layout-2 .layout-row-2 .a-heading-2.has-margin,
.o-layout .layout-2 .layout-row-3 .a-heading-2.has-margin,
.o-layout .layout-3 .layout-row-2 .a-heading-2.has-margin,
.o-layout .layout-3 .layout-row-3 .a-heading-2.has-margin,
.o-layout .layout-4 .layout-row-2 .a-heading-2.has-margin,
.o-layout .layout-4 .layout-row-3 .a-heading-2.has-margin {margin-bottom: 10px;}

.o-header .m-notification-ticker  {height: 64px; width: 330px; right: 225px;font-family: Arket Sans Mono, Arket Sans, Arial, Helvetica Neue, SANS-SERIF;}
.o-header.is-inverted .m-notification-ticker a {color: white;}
.m-notification-ticker li {overflow: inherit; max-width: none;}

@media (max-width: 330px) {
body.page-dresses.parentpage-girls .o-focus-panel .focus-panel-container .free-tile.focus-panel .a-link .m-free-tile .text-content .a-heading-2 {
 white-space: nowrap;
}
}

/* Add red line-through on out of stock sizes */
    .list-wrapper .options .a-option.out-of-stock {
        position: relative;
    }
.list-wrapper .options .a-option.out-of-stock:after {
    content: '';
    width: 22px;
    position: absolute;
    height: 1px;
    background: black;
    top: 50%;
    left: 13px;
    transform: translateY(-50%);
}


/* Fix markers mobile */
@media (max-width: 768px){
    .m-product-marker .marker-text {
        font-size: 12px;
        line-height: 0.8em;
    }
}

/* Fix markers */
    .m-product-marker .marker-text:nth-child(n+2){
        margin-left: 6px;
    }


/* prevent site reloading when clicking on same page # */
[style*="fixedBar"] .o-tag-cloud .tags-container .tag a[href="#"] {
    pointer-events: none!important;
}


/* Hide ticker on 404-pages */

body.undefined .m-notification-ticker.is-active {
display: none;
}

/* Fix Still Life image widths in desktop */
@media (min-width: 769px) {
.o-product-listing.has-still-life-images .image {
    width: 85%;
    display: block;
    margin: 0 auto;
}
}


@media ( max-width: 768px) {
.o-product-listing.has-still-life-images .image {
    width: 90%;
    display: block;
    margin: 0 auto;
}

.o-product-listing.has-still-life-images .o-product:nth-child(odd) {
    width: calc(49.15966% - 15px);
    margin-left: 15px;
}
.o-product-listing.has-still-life-images .o-product:nth-child(even) {
    width: calc(49.15966% - 15px);
    margin-right: 15px;
}
}

@media ( max-width: 768px) {
    .o-product .description {min-height: 100px;}
}


/* here */

.o-page-content .sdp-component.left-component  { z-index:2; }

/*Hide malfunctioning pdp feature article read more link*/

.o-text-field .text-container .a-paragraph .a-link.continue {
    display: none;
}

/*body.parentpage-travel .o-width:not(.wc-25):not(.wc-50) .o-layout .o-text-field.is-large .text-container .a-paragraph {font-size: 15px;}*/
body.parentpage-travel [style*="rgb("] .o-width [class*="layout"] {padding: 4px 0px 4px 4px !important;}
body.parentpage-travel .a-vimeo-video {padding-bottom: 95%;}
@media (max-width: 768px) {
    body.parentpage-travel [style*="rgb("] .o-layout.is-small .layout-4 .layout-row-2 {width: 100%;}
}


.m-swatches.color-panel-container .a-swatch:hover .swatch-title,
.m-swatches.swatch-panel-container .a-swatch:hover .swatch-title {
   visibility: initial;
    color: darkgrey;
    border: 0px solid darkgrey;
    padding: 2px 2px 3px;
    border-radius:2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: -4px 1px 0;
}

.m-swatches.swatch-panel-container .a-swatch.is-selected .swatch-title,
.m-swatches.color-panel-container .a-swatch.is-selected .swatch-title {
   visibility: initial;
    color: black;
    border: 1px solid;
    padding: 2px 2px 3px;
    border-radius:2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: -5px 1px 0;
}
.m-swatches.color-panel-container .a-swatch .swatch-title, .m-swatches.swatch-panel-container .a-swatch .swatch-title {
    visibility: initial;
    color: black;
    border: 1px solid white;
    padding: 2px 2px 3px;
    border-radius:2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: -5px 1px 0;
}


/*New markeres with shadow instead of border*/

.o-product-listing .o-product .description .product-markers:nth-child(2) {margin-top: 2px;}

.o-product .description .product-markers .marker-text:not(.promo-marker) span {
    box-shadow: 1px 1px 2px #0000003d;
    border: 0px solid;
    padding: 1px 7px 4px;
}

@media (max-width: 768px) {
    .o-product .description .product-markers .marker-text:not(.promo-marker) span {padding: 4px 8px 7px;}
}

.m-product-marker .marker-text:not(.promo-marker) span {
    padding: 2px 8px 4px;
    box-shadow: 1px 1px 2px #0000003d;
    border: 0px solid;
    display: inline-block;
    white-space: nowrap;
}



/*Move marker below price in PRA (Style With)*/

.o-product .description .markers {order:4;}
.m-product-marker {margin-top: 5px; margin-bottom: 5px;}



.o-navigation .campaign-content .a-heading-3 {
    font-size: 13px !important;
}

/* Black linx rax */

a {
    text-decoration: none;
    color: black;
}

/* Tweak on breadcrumb/filter positioning after release 25 june */
@media (max-width: 768px){
  .o-page-content .sdp-component.left-component .a-heading-1, .o-page-content .sdp-component.left-component .a-paragraph {
    line-height: 15px !important;
    position: relative;
  }
  .o-page-content .sdp-component.local-navigation+.o-width .product-listing:not(.in-content) .filter-buttons, .o-page-content .sdp-component.local-navigation+.product-listing:not(.in-content) .filter-buttons {
    line-height: 5px !important;
  }
  .o-page-content .sdp-component.local-navigation {
    border-bottom: 1px solid rgb(0, 0, 0);
    margin-bottom: 10px !important;
  }
  .o-page-content .sdp-component.left-component {
    height: 28px;
  }
  .o-page-content .sdp-component {
    line-height: 46px;
  }
  .o-product-filters .clear-btn, .o-product-filters .filter-link {
    line-height: 14px;
    margin-top: -4px;
  }

}



/* LOCAL NAV TAG CLOUD FILTER SORTING */

[style*="localnavTagcloud-sale"] .o-tag-cloud {
    margin-top: 60px;
}

[style*="localnavTagcloud-sale"] .o-tag-cloud {
    text-align: center;
    padding: 0 0 5px;
    height: 40px;
    line-height: 50px;
    box-shadow:0px !important;
}


[style*="localnavTagcloud-sale"] .o-tag-cloud {
    text-align: center;
    padding: 0 0 5px;
    height: 40px;
    line-height: 50px;
}
[style*="localnavTagcloud-sale"] .o-tag-cloud .cloud-title {
    display: inline-block;
    width: auto;
    color: black;
    font-size: 13px;
    padding: 0;
    position: relative;
    margin-right: 17px;
}

[style*="localnavTagcloud-sale"] .o-tag-cloud .tags-container {
    display: inline-block;
    width: auto;
}

[style*="localnavTagcloud-sale"] .o-tag-cloud .tags-container .tag {
        font-size: 13px;
    line-height: 1.1em;
    color: black;
    display: inline-block;
    margin-right: 0px;
    margin-bottom: 0px;
    background: transparent;
}

[style*="localnavTagcloud-sale"] .o-tag-cloud .tags-container .tag a{
    background: transparent;
        margin-right: 17px;
    font-size: 13px;
    line-height: 1.1em;
    color: black;
    padding: 0;
}

[style*="localnavTagcloud-sale"] .o-tag-cloud .tags-container .tag a[href*="#"]{
    padding: 1px 7px 1.5px 7px;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.6);
    text-align: center;
    line-height: 23px;
    margin-right: 10px;
}


@media (min-width: 769px) {
    [style*="localnavTagcloud-sale"] .o-tag-cloud {
        box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    }
}

@media (max-width: 769px) {
    [style*="localnavTagcloud-sale"] .o-tag-cloud {
      box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
      margin-bottom:42px !important;
      margin-top:0px !important;
      width: 150% !important;
      height: 50px;
    }
}

.o-text-field .text-container .a-paragraph .a-link.continue {
      display: none !important;
}


@media (max-width: 769px) {
div:not([style*="fwm-focuspanel"]) .o-focus-panel .focus-panel-container .free-tile.focus-panel .a-link .m-free-tile .text-content .a-paragraph {
    display: none !important;

}}

/* Hide PDP gubbe on desktop
@media (min-width: 1025px) {
.o-product-details .right-panel .m-product-shipping-info.absolute-position {
    display: none;
}*/

/*Stack layout comp on mobile when 'Is small' is selected */
@media (max-width: 768px) {
    .o-width:not(.wc-25) .o-layout.is-small .layout-2, .o-width:not(.wc-25) .o-layout.is-small .layout-3, .o-width:not(.wc-25) .o-layout.is-small .layout-4  {display: block;}
}

div[style*="dualCTA"] .o-tag-cloud {
    position: absolute;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    top: 80%;
    color: white;
    width: 90%;
    padding: 0;
}

/*div[style*="dualCTA"] .o-tag-cloud .tags-container .tag .a-link {background-color: rgba(255,255,255,0.8);}*/
div[style*="dualCTA"] .o-tag-cloud .tags-container .tag {background-color: white;}
div[style*="dualCTA"] .o-tag-cloud .cloud-title {font-size: 30px;font-family: Arket Sans, Arial, Helvetica Neue, SANS-SERIF;}

@media (max-width: 769px) {
    div[style*="dualCTA"] .o-tag-cloud .cloud-title {font-size: 20px;}
    div[style*="dualCTA"] .o-tag-cloud {top: 40%;}
    div[style*="dualCTA"] .o-tag-cloud .tags-container .tag {font-size: 20px;}
    div[style*="dualCTA"] .o-tag-cloud .tags-container .tag .a-link {padding: 4px 12px 8px;}
}
@media (max-width: 631px) {
    div[style*="dualCTA"] .o-tag-cloud {top: 75%;}
}


/*  hide ARCHIVED ITEMS on PDP  */
.m-swatches.swatch-panel-container .a-swatch.is-discontinued {display: none;}

.a-vimeo-video {padding-bottom: 54%; padding-top: 21px;}

@media (max-width: 767px) {
    .a-vimeo-video {padding-bottom: 118%;}
    body.page-jeans .a-vimeo-video {padding-bottom: 100%;}
}

.o-tag-cloud .tags-container .tag .a-link {padding: 6px 12px 8px;}


/* Removed all old shipping styling and replaced with below*/
.o-product-details .left-panel .m-product-shipping-info {padding: 0 0 20px !important;}
.o-product-details .left-panel .m-product-shipping-info .info-short a {border-bottom: none; line-height: 24px;}
.o-product-details .left-panel .m-product-shipping-info .info-short {width: 90%; text-align: center; line-height: 1.4em; margin-left: 15px; font-family: Arket Sans Mono;}
@media (max-width: 550px) {
    .m-product-shipping-info {background-image: none;}
}

@media (min-width: 551px) {
    .o-product-details .left-panel .m-product-shipping-info {width: 100%; margin-bottom: 20px; margin-top: 20px;}
    .o-product-details .left-panel .m-product-shipping-info .info-short p { font-size: 16px; line-height: 20px;color: black; font-family: Arket Sans Mono;}
}

@media (min-width: 1025px) {
    .m-product-shipping-info .info-short p {font-size: 14px; line-height: 18px; font-family: Arket Sans Mono;}
    .m-product-shipping-info .info-short a {border-bottom: none;}
    .m-product-shipping-info .info-short {font-family: Arket Sans Mono;}
}
/* .---------------------------*/

@media (min-width: 631px) {
    .o-width.wc-100 .o-product-listing.has-upper-body-images.fixed-columns-4 .o-product .image{min-height: 37.05vw;}
    .o-width.wc-75 .o-product-listing.has-upper-body-images.fixed-columns-4 .o-product .image {min-height: 24.5vw;}
}

div[style*="dualCTA-bts"]  .o-tag-cloud .cloud-title {font-family: Arket Sans sc; color: pink; font-size: 25px;}
div[style*="dualCTA-bts"]  .o-tag-cloud .tags-container .tag {background-color: pink}
div[style*="dualCTA-bts"]  .o-tag-cloud .tags-container .tag .a-link {color: #003b7c;}

@media (min-width: 631px) {
    body.page-bts .m-headline.is-takeover-headline {margin-top: -279px;}
}

/* Change password text was too close to the footer*/
@media (max-width: 768px){
    .o-my-details.summary .change-password-button {margin-bottom: 60px;}
}

/* Adjust layout of my account details */
.o-my-details.summary .data-sections .data-section .email-label, .o-my-details.summary .data-sections .data-section .name-label, .o-my-details.summary .data-sections .data-section .phone-label, .o-my-details.summary .data-sections .data-section .staff-card-label {padding: 25px 0 10px;}

/* Change margins above and below layout comp in all devices */
.o-layout {margin-top: 25px; margin-bottom: 25px;}


/*Use to make scroll down arrow bounce. Text component in a width (bg color 'scrollDown')*/
 div[style*="scrollDown"] .o-text-field.is-large .text-container i {
      font-size: 25px;
      width: 100%;
      font-family: Arket Sans Ding;
      text-decoration: none;
      font-style: normal;
      display: inline-block;
      text-align: center;
      animation: bounce 0.6s infinite alternate;
      -webkit-animation: bounce 0.6s infinite alternate;
}

@media (max-width: 768px) {
    div[style*="scrollDown"] .o-text-field.is-large .text-container i { font-size: 20px;}
}


        .o-width[style*="jeans19"] {background: linear-gradient(to top, rgb(241, 184, 31) 50%, rgb(231, 231, 229) 50%); margin: 150px 40px 150px; padding: 60px 0;}
        .o-width[style*="jeans19"] .o-text-field .text-container {font-size: 50px;line-height: 1.3em; padding: 50px 20px 70px;}

    @media (max-width: 768px) {
        .o-width[style*="jeans19"] .o-text-field .text-container {font-size: 25px; line-height: 1.4em; padding: 25px 10px; hyphens: auto;}
        .o-width[style*="jeans19"] {margin: 150px 10px 150px; padding: 20px 0;}
    }

body.page-fit-guide .caption-wrapper .caption-container:nth-child(1) .caption-title:before {content: 'rise';}
body.page-fit-guide .caption-wrapper .caption-container:nth-child(2) .caption-title:before {content: 'fit';}
body.page-fit-guide .caption-wrapper .caption-container:nth-child(3) .caption-title:before {content: 'leg';}


@media (max-width: 768px) {
    body.page-fit-guide .o-hero .o-text-block .heading-wrapper, body.page-fit-guide .o-hero .o-text-block .text-wrapper {color: white;}
}
.o-width[style*="fitGuide"] .o-layout .layout-1 .layout-row-3 {
    padding: 0 9px 0 12px;
    left: 50%;
    position: absolute;
    width: 50%;
    padding-top: 35%;
}
.o-width[style*="fitGuide"] .o-layout .layout-1, .o-width[style*="fitGuide"] .o-layout .layout-1 .layout-row-2 {border-top: none; border-bottom: none;}
.o-width[style*="fitGuide"] .o-image-listing.cols-2 .image-container:nth-child(odd), .o-width[style*="fitGuide"] .o-image-listing.cols-2 .image-container:nth-child(even) {padding: 0;}
.o-width[style*="fitGuide"] .o-layout .o-text-field .text-container {color: white; text-shadow: 0 0 10px #00000073;}
.o-width[style*="fitGuide"] {background-color: rgb(238, 231, 225);}
.o-width[style*="fitGuide"] .o-layout .layout-1 .layout-row-2 .m-headline .a-heading-2 {color: white; text-align: left; text-shadow: 0 0 10px #00000073;}


@media (max-width: 767px) {
    .o-width[style*="fitGuide"] .o-layout .layout-1 .layout-row-3 { left: 0; position: inherit; width: 100%; padding-top: 0;}
    .o-width[style*="fitGuide"] .o-layout .o-text-field.is-large .text-container .a-paragraph {text-align: center; color: rgb(25, 25, 112); text-shadow: none; font-size: 15px; margin: 10px 0 10px !important;}
}
    body.page-fit-guide .o-text-field.is-large .text-container {color: midnightblue; margin: 0 0 30px 0px;}
    body.page-fit-guide .a-heading-2.has-margin {color: midnightblue; font-size: 22px; display: block !important;}
    body.page-fit-guide .o-layout {margin-top: 0;}
    body.page-fit-guide .o-layout .layout-1 .o-image-listing.cols-2 {padding: 0;}
    body.page-fit-guide .m-splash {width: 200px; margin: 45px auto 64px!important;}

@media (min-width: 768px) {
  body.page-fit-guide .o-layout .layout-1 .layout-row-3 .m-headline .a-heading-2 {display: block!important; color: white; text-align: left; text-shadow: 0 0 10px #00000073;}
}



@media (min-width: 631px) {
    div[style*="desktopSpace"].o-width {padding-top: 40px !important;}
}

/* Adds some spacing above visual navigation in mobile */
@media (max-width: 630px) {
    div[style*="mobileSpace"].o-width {padding-top: 40px !important;}
}

div[style*="jeansHero"] .o-hero .image-wrapper .takeover-background {height:70vh;}
div[style*="jeansHero"] .o-hero .takeover-wrapper { background-color: rgb(232, 232, 232);}
div[style*="jeansHero"] .o-text-block .text-wrapper .text-content.large-font {font-size: 30px; line-height: 1.4em; text-align: center; color: midnightblue;}

@media (max-width: 768px) {
    div[style*="jeansHero"] .o-text-block .text-wrapper .text-content.large-font {font-size: 25px;}
}

@media (min-width: 769px) {
    div[style*="jeansHero"] .o-hero {height: 70vh;}
}

/* Fixed bar w tag cloud at bottom of page */

[style*="jeansBar"] {
    position: fixed;
    bottom: 0;
    z-index: 11;
    background: white;
    width: 100%;
    box-shadow: 1px -1px 6px #0000004d;
}

[style*="jeansBar"] .o-tag-cloud {
    text-align: center;
    padding: 10px 25px 4px;
}

[style*="jeansBar"] .o-tag-cloud .tags-container {
    display: inline-block;
    width: auto;
    padding-bottom: 0px;
}

[style*="jeansBar"] .o-tag-cloud .tags-container .tag, [style*="jeansBar"] .o-tag-cloud .tags-container .tag:hover {
    background: transparent;
    margin-bottom: 5px;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 15px;
}


[style*="jeansBar"] .o-tag-cloud .tags-container .tag:first-child a {
    padding-left: 2.0em;
}
[style*="jeansBar"] .o-tag-cloud .tags-container .tag a {
    margin-bottom: 0;
    position: relative;
}


[style*="jeansBar"] .o-tag-cloud .tags-container .tag a[href^="#"]:before {
    bottom: -11px;
    position: absolute!important;
    width: 0px!important;
    content: ""!important;
    height: 0px!important;
    border-left: 15px solid transparent!important;
    border-right: 15px solid transparent!important;
    border-bottom: 15px solid #FFFFFF!important;
    left: 50%;
    transform: translateX(-50%);
}
[style*="jeansBar"] .o-tag-cloud .tags-container .tag:hover a{
    text-decoration: underline;
}

[style*="jeansBar"] .o-tag-cloud .cloud-title {
    font-family: 'Arket Sans SC';
    display: inline-block;
    width: auto;
    padding-bottom: 0;
    font-size: 15px;
}

@media (max-width: 768px){
    [style*="jeansBar"] .o-tag-cloud .cloud-title,
    [style*="jeansBar"] .o-tag-cloud .tags-container .tag a  {
        font-size: 13px;
        margin: 0 15px 0 15px;
    }
    [style*="jeansBar"] .o-tag-cloud .tags-container .tag:first-child a  {
        padding-right: 0px;
    }
    [style*="jeansBar"] .o-tag-cloud .tags-container .tag:first-child a:before {
        left: calc( 50% - 13px);
    }
    [style*="jeansBar"] .o-tag-cloud{
        padding: 6px 0 0;
    }
}
    [style*="jeansBar"] .o-tag-cloud .tags-container .tag a:not([href^="#"]):after {
        content: 'c';
        font-family: 'Arket Sans Ding';
        display: inline-block;
        position: relative;
        right: -6px;
        font-size: 13px;
        bottom: 1px;
    }


.o-width[style*="-top"] {margin: 0 0 -3px 0;}
.o-width[style*="-top"] .o-tag-cloud {position: absolute; z-index: 2;left: 10%; right: 10%; bottom: 27%;}
.o-width[style*="-top"] .o-tag-cloud .cloud-title {color: #faf8f3; font-size: 15px;}
.o-width[style*="-top"] .o-tag-cloud .tags-container .tag {background-color: rgb(250, 248, 243);}

.o-width[style*="-relative"] {position: relative;}


.o-width[style*="fwText"] .o-tag-cloud {padding: 0;}
.o-width[style*="fwText"] .o-tag-cloud .tags-container .tag .a-link {background-color: rgb(250, 248, 243); border-radius: 2px;}
.o-width[style*="fwText"] .a-heading-2.has-margin { margin: 0; font-size: 25.5vw; line-height: 0.5em;color: rgb(250, 248, 243);}
.o-width[style*="fwText"] {position: absolute; top: 50%; margin: -100px 0 0 0; width: 90%; left: 5%;}
.o-width[style*="fwText"] .m-headline [class^=a-heading-] .heading-tag {color: rgb(250, 248, 243);}
.o-width[style*="fwText"] .o-text-field b {color:rgb(250, 248, 243); font-size: 25px;}
.o-width[style*="fwText"] .o-text-field i {font-style: normal; color: rgb(250, 248, 243);}
.o-width[style*="fwText"] .m-headline [class^=a-heading-].has-hover:hover .heading-tag:hover {background-color: rgba(255, 255, 255, 0);}
.o-width[style*="fwText"] .a-link:hover {color: rgb(250, 235, 215);}

@media (max-width: 767px) {
.o-width[style*="-top"] .o-tag-cloud {bottom: 20%;}
}

@media (min-width: 767px) and (max-width: 1023px) {
.o-width[style*="fwText"] .o-text-field b {font-size: 20px;}
.o-width[style*="fwText"] .a-heading-2.has-margin {font-size: 22.5vw;}
.o-width[style*="fwText"] {margin: -50px 0 0 0;}
.o-width[style*="fwText"] .o-tag-cloud .tags-container .tag {font-size: 15px;}
.o-width[style*="fwText"] .o-text-field .text-container {margin: 0; }
}

body.parentpage-styling-notes .o-text-field .caption-wrapper {padding-top: 15px;}
body.parentpage-styling-notes .caption-wrapper .caption-container:nth-child(1) .caption-title:before {
    content: 'date';
}
body.parentpage-styling-notes .caption-wrapper .caption-container:nth-child(2) .caption-title:before {
    content: 'by';
}
@media (min-width: 768px) {
    body.parentpage-styling-notes .caption-wrapper .caption-container {margin-left: 35%;}
}

[style*="image_1-4-col-vnav"]>.o-layout .o-image-listing.cols-1 .image-container .caption, [style*="image_4-1-col-vnav"]>.o-layout .o-image-listing.cols-1 .image-container .caption {
    font-size: 18px;
    bottom: 37%;
    left: 50%;
    padding: 8px 20px 11px;
    border-radius: 0px;
    background-color: rgb(255, 255, 255);
    transform: translateX(-50%);
}

@media (max-width: 767px) {
  [style*="image_1-4-col-vnav"]>.o-layout .o-image-listing.cols-1 .image-container .caption, [style*="image_4-1-col-vnav"]>.o-layout .o-image-listing.cols-1 .image-container .caption {
    font-size:15px;
    padding: 7px 18px 9px;
  }
}

@media (max-width: 630px) {
.o-width[style*="minusSpace-mobile"] {margin-top: -46px !important;}
}

.o-width[style*="minusSpace"] {margin-top: -6px !important;}


.o-slider .redils-controls .arrow-area .arrow { top: 50% !important;}
.o-image-listing.cols-1, .o-image-listing.cols-3  { width: 100%;margin-left: 0;padding-left: 0;padding-right: 0;}

#geo-city-utils, .cookie-wrapper>.is-richtext>div a {
display: inline-block;
font-family: Arket Sans SC;
font-size: 13px;
}

#geo-city-utils span, .cookie-wrapper>.is-richtext>div a span {
font-family: Arket Sans Ding;
}

.cookie-wrapper>.is-richtext>div br+br {
display: none;
}

.o-cookie-message, .m-notification-ticker {
opacity: 0;
}


.m-notification-ticker a span:first-of-type{
animation-name: fade;
animation-fill-mode: both;
animation-iteration-count: infinite;
animation-duration: 4s;
animation-direction: alternate-reverse;
opacity: 1;
}
.m-notification-ticker a span:last-of-type {
animation-name: fade;
animation-fill-mode: both;
animation-iteration-count: infinite;
animation-duration: 4s;
animation-direction: alternate;
opacity: 0;
position: absolute;
right:0;
}

@keyframes fade{
0%,50% {
  opacity: 0;
}
100%{
  opacity: 1;
}
}

.o-newsletter-popup .a-icon-lg-close-circle {
    bottom: 20px;
    position: absolute;
    color: #000;
    font-family: arket sans;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid;
    background-color: #fff;
    color: #000;
    font-size: 20px;
    text-align: center;
    display: block;
    line-height: 45px;
    padding: 0 20px;
    width: calc(100% - 50px);
    height: 50px;
}

@media (min-width: 631px) {
    .o-newsletter-popup .a-icon-lg-close-circle {
        max-width: 338px;
    }
}
.a-icon-lg-close-circle:before {
    display: none;
}
.a-icon-lg-close-circle:after {
content: "Close"!important;
}


.o-newsletter-popup {
    height: 100%!important;
    max-height: 490px!important;
}


/* Fix menu transition in mobile */
@media (max-width: 768px) {
.o-navigation .navigation-curtain {
background: transparent;
transition: all .5s ease-in-out!important;
    display: none;
    top: 56px;
}
.o-navigation.is-opening .navigation-curtain{
background: #FFF!important;
}
.o-navigation.is-closing .navigation-curtain, .o-navigation.is-open .navigation-curtain, .o-navigation.is-opening .navigation-curtain {
    display: block;
    top: 84px;
}
}

@media (max-width: 768px){
    .o-search.is-open+*+*+.firstLevelNavConfiguration.parbase .navigation-curtain .category-wrapper, .o-search.is-open+*+*+.firstLevelNavConfiguration.parbase .navigation-curtain .m-static-notification-ticker {
        opacity:0;
    }
    .o-search.is-open+*+*+.firstLevelNavConfiguration.parbase .navigation-curtain .o-search-suggestion.search-palette {
        background: #FFF;
    }
}

/*/


/* Widens category menu so that menu options do not get truncated unessecarily */

.m-headline.with-icon { margin: 20px 0;}

.o-layout .o-text-field .text-container {margin: 10px 0 20px !important;}
.o-layout .o-text-field .text-container .a-paragraph {margin: 10px 0 20px !important;}


.o-width[style*="naCloud"] .cloud-title.a-heading-6 {
    font-size: 11vw;
    font-family: Arket Sans;
}

/* Fade in Caption Wrapper */
.o-text-field .caption-wrapper {
    animation-name: fade;
animation-fill-mode: both;
animation-iteration-count: 1;
animation-delay: 1s;
animation-duration: .2s;
animation-direction: ease-in;
opacity: 0;
}

/* Fix trending truncation */
@media (max-width: 768px) {
.o-navigation .trending-content li .a-link {
    max-width: 100%;
    display: inherit;
}

.m-static-notification-ticker .mobile-notification a {
    position: relative;
}
.m-static-notification-ticker .mobile-notification a span:first-of-type{
animation-name: fade;
animation-fill-mode: both;
animation-iteration-count: infinite;
animation-duration: 4s;
animation-direction: alternate-reverse;
opacity: 1;
}
.m-static-notification-ticker .mobile-notification a span:last-of-type {
    animation-name: fade;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-direction: alternate;
    opacity: 0;
    position: absolute;
    right: 50%;
    width: 100%;
    top: 0;
    transform: translateX(50%);
    }
}

.o-width.wc-100[style*="localnavTagcloud"] {
    width: 100%!important;
}

@media (max-width: 768px){
.o-width.wc-100[style*="localnavTagcloud"] .o-tag-cloud {
    margin-left: 7.5px;
}
}

@media (max-width: 768px) {
    body.page-transitional-dresses .m-headline.is-main-headline {
        margin-top: -42px;
    }
}

/* NEW ARRIVALS */

@media (max-width: 768px){
    .o-width[style*="naCloud"] .cloud-title.a-heading-6 {
        font-size: 11vw !important;
        line-height: 50px;
        margin: 0 20px;
    }
    .o-width[style*="naCloud"] .o-tag-cloud {
        margin-top: -8px;
        padding: 0px 0px 14px;
    }
    .o-width[style*="naCloud"] .o-tag-cloud .cloud-title {
        padding-top: 35px;
    }
    .o-width[style*="naCloud"] .o-tag-cloud .tags-container {
        margin: 5px 70px 20px;
    }
}

.o-width[style*="naCloud"] .o-tag-cloud .tags-container .tag {
    font-size: 16px;
    background-color: #000;
    color: #FFF;
}
.o-width[style*="naCloud"] .o-tag-cloud .tags-container .tag:hover .a-link {
     color: rgb(250, 235, 215);
}

@media (min-width: 769px) {
    .o-width[style*="naCloud"] .o-tag-cloud .tags-container {
        margin-top: -20px!important;
        padding-bottom: 25px!important;
    }
    .o-width[style*="naCloud"] .o-tag-cloud .tags-container .tag {
       font-size: 20px;
    }
}
body.page-yoga .a-vimeo-video {padding-bottom: 114%;padding-top: 10px;}

.o-layout.is-small .layout-2 .layout-row-2, .o-layout.is-small .layout-2 .layout-row-3, .o-layout.is-small .layout-3 .layout-row-2, .o-layout.is-small .layout-3 .layout-row-3, .o-layout.is-small .layout-4 .layout-row-2, .o-layout.is-small .layout-4 .layout-row-3 {width: 100%;}

.o-newsletter-popup .a-button {
    margin: 20px 0 10px;
    bottom: 63px;
    position: absolute;
    width: calc(100% - 50px);
}

@media (min-width: 631px) {
    .o-newsletter-popup .a-button {width: calc(100% - 110px)!important;}
}

/* Uppdatera din class här staffan */

@media (min-width: 769px){
[style*="breadcrumb-center"] .sdp-component.left-component .a-heading-1 {
    padding: 14px 0 5px !important;
}}

/*Hide PRODUCT text on PDP*
.product-el {
    display: none !important;
}*/

@media (min-width: 631px) {
  body.parentpage-sdp .o-product-listing.has-upper-body-images.fixed-columns-2 .o-product:nth-child(odd) {margin-right: 40px;}
  body.parentpage-sdp .o-product-listing.has-upper-body-images.fixed-columns-2 .o-product {width: calc(40% - 2.25px);}
}

@media (min-width: 769px){
.o-navigation .navigation-curtain .department-link, .o-navigation .navigation-curtain span.title {
    max-width: 230px !important;
}}

@media (min-width: 769px){
.o-navigation .category-group {
    left: 240px !important;
}}

.o-newsletter-popup .m-radio-button.u-clearfix:after,.o-newsletter-popup.m-radio-button.u-clearfix:before {
  display: none!important;
}
.o-newsletter-popup .m-radio-button.u-clearfix {
  height: auto!important;
  width: 50%!important;
}
.o-newsletter-popup .option-wrapper:before,.o-newsletter-popup .option-wrapper:after {
  display: none!important;
}
.o-newsletter-popup .option-wrapper {
  border: none!important;
    height: auto!important;
    width: 100%!important;
    margin-top: 0!important;
}

.o-newsletter-popup .a-label.js-a-label.label-text {
  text-align: left!important;
  padding-left: 37px!important;
}

.o-newsletter-popup .a-label.js-a-label.label-text:before {
  display: none!important;
}
.o-newsletter-popup .a-label.js-a-label.label-text:after {
  left: 0!important;
  content: ''!important;
  width: 25px!important;
  height: 25px!important;
  display: block!important;
  border-radius: 50%!important;
  border: 2px solid #000!important;
  position: absolute!important;
    top: 50%!important;
    transform: translateY(-50%)!important;
}
.o-newsletter-popup .a-label.js-a-label.label-text:hover {
  background: transparent!important;
  color: #000!important;
}

.o-newsletter-popup .a-label.js-a-label.label-text:hover:before {
  display: block!important;
  content: ''!important;
  height: 19px!important;
  width: 19px!important;
  top: 50%!important;
  transform:translateY(-50%)!important;
  position: absolute!important;
  background: #000!important;
  left: 5px!important;
    border-radius: 50%!important;
}
.o-newsletter-popup .m-radio-button .a-radio-button:checked+.custom-radio+.label-text {
  background: transparent!important;
  color: #000!important;
}

.o-newsletter-popup .m-radio-button .a-radio-button:checked+.custom-radio+.label-text:before {
  display: block!important;
  content: ''!important;
  height: 19px!important;
  width: 19px!important;
  top: 50%!important;
  transform:translateY(-50%)!important;
  position: absolute!important;
  background: #000!important;
  left: 5px!important;
    border-radius: 50%!important;
}
@media (max-width: 768px){
  .o-newsletter-popup input[type="email"]#txt-email-id {
  border: none!important;
}
}

.o-newsletter-popup input[type="email"]#txt-email-id::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #c7c7c7!important;
  display: inline!important;
  opacity: 1!important;
}
.o-newsletter-popup input[type="email"]#txt-email-id::-moz-placeholder { /* Firefox 19+ */
  color: #c7c7c7!important;
  display: inline!important;
  opacity: 1!important;
}
.o-newsletter-popup input[type="email"]#txt-email-id:-ms-input-placeholder { /* IE 10+ */
  color: #c7c7c7!important;
  display: inline!important;
  opacity: 1!important;
}
.o-newsletter-popup input[type="email"]#txt-email-id:-moz-placeholder { /* Firefox 18- */
  color: #c7c7c7!important;
  display: inline!important;
  opacity: 1!important;
}

.o-newsletter-popup .m-checkbox.u-clearfix.m-checkbox-age {
  position: absolute!important;
  bottom: 160px!important;
  padding-right: 20px!important;
    left: 25px;
    width: calc(100% - 25px);
}
@media (min-width: 769px){
  .o-newsletter-popup .m-checkbox.u-clearfix.m-checkbox-age {
    padding-right: 55px!important;
    left: 55px;
    width: calc(100% - 55px);
  }
}

.o-newsletter-popup .m-checkbox.u-clearfix.m-checkbox-age + .a-paragraph.is-richtext {
  position: absolute!important;
  bottom: 3px!important;
}

.o-newsletter-popup .m-checkbox.u-clearfix.child {
  margin-top: 8px!important;
  font-size: 16px!important;
}

.o-newsletter-popup .m-checkbox.u-clearfix.child .a-label.js-a-label.custom-box:before {
  width: 23px!important;
    height: 23px!important;
    top: -4px!important;
}

.o-newsletter-popup .a-heading-6.select-department {
  display: inline-block!important;
  margin-top: 10px!important;
}

@media (max-width: 768px) {

.o-newsletter-popup {
    max-height: 470px!important;
    box-shadow: 0 -3px 13px rgba(0, 0, 0, .3);
}

.m-cookie-bar:not(.is-disaster) {
padding-top: 10px!important;
padding-bottom: 10px!important;
}
.o-cookie-message .m-cookie-bar:not(.is-disaster) div {
padding-bottom: 0px!important}

}

@media (min-width: 769px) {
.o-newsletter-popup .a-button {
    bottom: 76px;
}
.o-newsletter-popup .a-icon-lg-close-circle {
    bottom: 33px!important;
}
.o-newsletter-popup .m-checkbox.u-clearfix.m-checkbox-age + .a-paragraph.is-richtext {
    bottom: 10px!important;
}
}


[style*="scentFamily"] {
  color: #FFF;
  text-align: center;
}

[style*="scentFamily"] .m-headline.with-icon .a-heading-2 {
  font-size: 30px;
}

[style*="scentFamily"] .a-paragraph.q-gamma-tall {
  text-align: center;
  font-size: 16px;
  font-style: italic;
  margin-top: -20px;
}
[style*="scentFamily"] .caption-wrapper {
    max-width: 100%;
    margin: 0 auto;
    min-width: 1px;
    text-align: left;
}
[style*="scentFamily"] .caption-wrapper .caption-container {
    padding-left: 50%;
}

[style*="scentFamily"] .caption-wrapper .caption-content {
    width: 100%;
    padding-left: 10px;
}

[style*="scentFamily"] .caption-wrapper .caption-container .caption-title:before {
  color: #FFF;
width: 50%;
padding-right: 0;
}

[style*="readMore"] .a-heading-2 {
  color: #FFF;
  cursor: pointer!important;
}
[style*="readMore"] .a-heading-2 .heading-cap {
  font-family: arket sans ding;
}
[style*="readMore"] .o-text-field {
  display: none;
}


[style*="scentFamily"] .m-headline.with-icon .a-image {
  height: 60px;
  margin-bottom: 0px;
}


[style*="scentFamily"] .caption-wrapper .caption-container:nth-child(1) .caption-title:before {
    content: 'family';
}
[style*="scentFamily"] .caption-wrapper .caption-container:nth-child(2) .caption-title:before {
    content: 'feel';
}
[style*="scentFamily"] .caption-wrapper .caption-container:nth-child(3) .caption-title:before {
    content: 'notes';
}

[style*="readMore"] .o-text-field {
    display: none;
    position: absolute;
    top: 50%;
    z-index: 1;
    width: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 100%;
    padding: 30px!important;
}

body.page-scent-family [style*="background-color: rgb(50,60,50)"]  .layout-2{
  position: relative;
  overflow: hidden;
}

body.page-scent-family [style*="background-color: rgb(50,60,50)"]  .layout-2 .layout-row-2 {
  position: unset;
}

[style*="readMore"] .o-text-field .text-container {
    background: rgb(50,60,50);
    color: #FFF;
    padding: 40px;
    height: 100%;
    margin: 0!important;
}

[style*="readMore"] .o-text-field .text-container p {
    font-size: 16px!important;
}

@media (max-width: 1024px) {
[style*="readMore"] .o-text-field .text-container p {
    font-size: 14px!important;
}
}

@media (max-width: 991px){
  body.page-scent-family [style*="background-color: rgb(50,60,50)"] .layout-2 {
    display: flex!important;
    flex-direction: column!important;
  }
  body.page-scent-family [style*="background-color: rgb(50,60,50)"] .layout-2 .layout-row-2 {
    order: 2!important;
    width: 100%!important;
  }
  body.page-scent-family [style*="background-color: rgb(50,60,50)"] .layout-2 .layout-row-3 {
    order: 1!important;
    width: 100%!important;
  }
  [style*="readMore"] .o-text-field {
    position: relative!important;
    top: auto!important;
    z-index: 1!important;
    width: 80%!important;
    transform: none!important;
    right: auto!important;
    height: auto!important;
    padding: 0px!important;
}
[style*="readMore"] .o-text-field .text-container .a-paragraph:nth-child(2){
  display: none!important;
}
[style*="readMore"] .o-text-field .text-container {
  padding: 0px!important;
}
[style*="readMore"] {
  padding-bottom: 20px!important;
}
[style*="readMore"] .a-heading-2 .heading-cap {
  padding: 0!important;
}

[style*="scentFamily"] .m-headline {
  display: block!important;
}

body.page-scent-family .o-image-listing.cols-1 {
  overflow-x: hidden!important;
}

body.page-scent-family [style*="background-color: rgb(50,60,50)"] .o-layout.is-small .layout-2 .layout-row-2 .headings, body.page-scent-family [style*="background-color: rgb(50,60,50)"] .o-layout.is-small .layout-2 .layout-row-2 .m-headline {
  display: block!important;
}
}

body.page-care [class^=m-] .q-gamma-tall {text-align: center;}

/*Ta bort skugga på text när HERO är left eller right aligned */
.o-hero.is-left-aligned .takeover-wrapper .textblock-container, .o-hero.is-right-aligned .takeover-wrapper .textblock-container {text-shadow: none !important;}


@media (max-width: 630px) {
  .o-hero .image-wrapper .takeover-background {height: 65vh;}
}
@media (min-width: 631px) {
.o-hero .image-wrapper .takeover-background, .o-hero, .o-hero.single-image .image-wrapper .takeover-background {height: 75vh; background-position: top center;}
}

@media (max-width: 630px) {
  .o-hero[style*="mobileText"] .takeover-wrapper, .o-hero.single-image .takeover-wrapper {
    position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,.15), rgba(255,0,0,0));
    padding: 30px 15px;
  }
  .o-hero[style*="mobileText"] .o-text-block .text-wrapper .text-content.large-font {
    font-size: 15px;
  }
  .o-hero[style*="mobileText"] .o-text-block .caption-wrapper .caption-container>span {
    font-size: 15px;
  }
}

.abCta span b {margin-right: 3px;}

@media (max-width: 630px) {
    body.page-knitwear .o-hero .image-wrapper { position: relative; }
    body.page-knitwear .o-hero .image-wrapper .takeover-background:nth-child(2) { display: block; position: absolute; top: 0; left: 0; opacity: 0; animation: alternate_second_hero_image 5s infinite ease-in-out;}
}


    @keyframes alternate_second_hero_image {
    45% { opacity: 0; }
    50% { opacity: 1; }
    95% { opacity: 1; }
    100% { opacity: 0; }
    }


@media (max-width: 630px) {
    .o-hero[style*="alternateImage"] .image-wrapper { position: relative; }
    .o-hero[style*="alternateImage"] .image-wrapper .takeover-background:nth-child(2) { display: block; position: absolute; top: 0; left: 0; opacity: 0; animation: alternate_second_hero_image 5s infinite ease-in-out;}
}
   .o-hero[style*="alternateImageDesktop"] .image-wrapper { position: relative; }
.o-hero[style*="alternateImageDesktop"] .image-wrapper .takeover-background {width: 100% !important;}
    .o-hero[style*="alternateImageDesktop"] .image-wrapper .takeover-background:nth-child(2) { display: block; position: absolute; top: 0; left: 0; opacity: 0; animation: alternate_second_hero_image 5s infinite ease-in-out;}

@media (min-width: 631px) {
  .o-hero .o-text-block .text-wrapper {margin: 25px 10% 10px 10%;}
}

.o-text-block .heading-wrapper .m-headline .a-heading-1.large-font { line-height: 1.5em; }

@media (max-width: 768px){
  .o-newsletter-signup .a-heading-2.is-main-heading {
    padding-top: 0!important;
    margin-top: 0!important;
  }
}

.m-headline.is-main-headline {padding-top:30px;}

div[style^="background-color: image_"][style*="-col-vnav"].o-width.wc-100 .o-image-listing.cols-3 .image-container .o-text-field h1 {
    font-size: 20px !important;
}

@media (max-width: 768px) {
div[style^="background-color: image_"][style*="-col-vnav"].o-width.wc-100 .o-image-listing.cols-3 .image-container .o-text-field h1 {
    font-size: 15px !important;
}
}

/* Font sizes in mobile menu  */
@media (max-width: 768px){
.o-navigation .category-menu .department-link, .o-navigation .category-menu .folder-link {
  font-size: 22px;
}

  .o-navigation .trending-content .a-heading-3,.o-navigation .trending-content li .a-link, .o-navigation .information-section .my-account-icon .text, .o-navigation .information-section .a-button-nostyle.bottom, .o-navigation .information-section .a-link.bottom, .o-navigation .information-section .a-button-nostyle.nav .text, .o-navigation .information-section .a-link.nav .text,.o-navigation .information-section .a-button-nostyle, .o-navigation .information-section .a-link, .o-navigation .category-group .a-button-nostyle, .o-navigation .category-group .a-link, .o-navigation .m-static-notification-ticker .center-content p.mobile-notification, .o-navigation .departments .department-item, .o-navigation .m-static-notification-ticker .center-content p.mobile-notification {
    font-size: 14px;
  }
  .o-navigation .category-group .subcategories .subcategory {
  max-width: 100%;
}
.o-navigation .category-group .subcategories {
  column-gap: 20px;
}
.o-navigation .category-group .a-link {
padding: 0 12px;
display: inline-block;
max-width: 100%;
}

}



/* Use to have multiple Buttons on a Hero image*/

.o-width[style*="multipleCTA"] .a-link:hover {
  color: rgb(0, 0, 0, 0.2);
}

.o-width[style*="multipleCTA"] {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 90%;
  margin: 0 !important;
  left: 5%;
  z-index: 10;
}


.o-width[style*="multipleCTA"] .o-tag-cloud .cloud-title:before {
  content:'theme';
  font-family: arket sans sc mono;
  font-size: 42px!important;
  margin-right: 15px;
}

.o-width[style*="multipleCTA"] .o-tag-cloud .cloud-title {
  text-align: center;
  font-size: 42px;
  font-family: arket sans;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 25px #00000059;
}


.o-width[style*="multipleCTA"] .o-tag-cloud .tags-container .tag {
  background-color: white;
}

.o-width[style*="multipleCTA"] .o-hero .takeover-wrapper {
  display: none;
}


@media (max-width: 767px) {
  .o-width[style*="multipleCTA"] .o-tag-cloud .cloud-title {
      font-size: 24px;
    }
    .o-width[style*="multipleCTA"] .o-tag-cloud .cloud-title:before {
      font-size: 24px!important;
    }

    .o-width[style*="multipleCTA"] .o-tag-cloud .cloud-title:before {
      content:'theme \\A';
      white-space: pre;
    }
 }


/* fix that links are breaking row in feature articles */
 @media (min-width: 401px) {
  .o-width:not(.wc-25) .o-layout .layout-1 .layout-row-2 .a-link, .o-width:not(.wc-25) .o-layout .layout-1 .layout-row-2 .col-item {
    display: unset;
}
}
@media (min-width: 631px) {
  body.page-scent-family .o-hero .image-wrapper .takeover-background {    background-position: center;}
}

[style*="relative"]{
    position: relative;
}

.o-hero[style*="noShadow"] .takeover-wrapper .o-text-block.disable-bg {text-shadow: none;}
.o-hero[style*="Left"] .image-wrapper .takeover-background {background-position: top left;}


.o-width[style*="Black"] .o-tag-cloud .tags-container .tag {
  color: #FFF;
  background: #000;
}
.o-width[style*="Black"] .o-tag-cloud .tags-container .tag:hover a{
  color: #FFF;
}

.o-width[style*="Black"] .o-tag-cloud .cloud-title {
  color: #000;
  text-shadow: 0 0 25px #ffffff59;
}

.o-width[style*="NoShadow"] .o-tag-cloud .cloud-title{
  text-shadow: none!important;
}

 .o-width.wc-100[style*="VNAV"] {padding:0!important}



@media (max-width: 768px){
  .o-footer ul li {
    text-align: left;
    width: 100%;
    padding: 0px 10px 0 0px;
                margin-bottom: 14px;
  }
  .o-footer ul li a {
                padding: 2px 0px;
    font-size: 14px !important;
               display: inline !important;
  }

  .o-footer ul li:not(.right)+.right{
    padding-top: 20px !important;
    margin-top: 11px;
    border-top: 1px solid #000;
  }
  .o-footer ul {
    margin-bottom: 40px;
    border-top: 1px solid #000;
    padding: 17px 0 9px 0;
    text-align: left;
    border-bottom: 1px solid #000;
  }
.o-footer ul:before{
  content:'Information';
    font-family: 'Arket Sans SC',HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,Sans-Serif;
    font-weight: 400;
    font-size: 13px;
    display: inline-block;
    margin-bottom: 18px;
}
  .o-footer .a-logo {
    display: none;
  }
.o-footer {
    padding: 40px 40px 20px;
}

.o-curated-search-footer {
    margin-bottom: 0px !important;
}

.o-product-listing.has-upper-body-images .description { font-size: 14px !important; }

.o-filter .filter-section .color-palette .m-color-checkbox .color-box span, .o-product-filters.is-closing .filter-wrapper .o-filter .filter-link, .o-product-filters.show-all-filters .filter-wrapper .o-filter .filter-link, .o-filter#container_sizes .checkbox-wrapper .a-label.js-a-label, .o-filter:not(#container_sizes) .checkbox-wrapper .a-label.js-a-label, .o-product-listing .o-product .description {
  font-size: 14px !important;
}



}

body.page-articles [style*="localnav-list"]  .o-local-navigation.is-long ul {
  white-space: unset;
    display: inline-block;
    width: 100%;
    height: auto;
    line-height: 1.6;
    column-count: 3;
    padding: 20px 0px;
}
@media (max-width: 991px){
body.page-articles [style*="localnav-list"]  .o-local-navigation.is-long ul {
  column-count: 2;
}
}
body.page-articles [style*="localnav-list"]  .o-local-navigation.is-long ul li {
  display: inline-block;
  width: 100%;
  text-align: left;
}
body.page-articles [style*="localnav-list"]  .o-local-navigation.is-long ul li:first-child {
  display: none;
}

body.page-articles [style*="localnav-list"]  .o-local-navigation.is-long .show-more-left-btn, .o-local-navigation.is-long .show-more-right-btn {
  display: none;
}
body.page-articles [style*="localnav-list"]  .o-local-navigation.is-long {
  display: block;
  height: auto;
  text-align: center;
}

body.page-articles [style*="localnav-list"] .local-navigation.sdp-component {
  height: auto;
}

[style*="VNAVShadow"]:after{
  content: "";
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 40px;
    z-index: 2;
    visibility: visible;
    box-shadow: 1px 10px 14px rgba(192, 192, 192, 0.6);
}
[style*="VNAVShadow"] {
  position: relative !important;
        display: inline-block;
}


body.page-stores .o-layout .o-text-field .text-container .a-paragraph {margin: 0;}
body.page-stores .o-text-field .text-container .a-paragraph .a-link {border-bottom: none; line-height: 2em;}
@media (max-width: 630px) {
  body.page-stores .o-layout .o-text-field .text-container .a-paragraph {margin: 0 0 8px 0!important;}
}

.fshbar a span:first-of-type {
    animation-name: fade;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-direction: alternate-reverse;
    opacity: 1;
}
.fshbar a span:last-of-type {
    animation-name: fade;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-direction: alternate;
    opacity: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

@media (min-width: 631px) {
  .o-page-content.is-checkout>.is-klarna:before, .o-page-content>.full-width:before, .o-page-content>.parsys>.full-width:before {
    display: none;
  }

  .o-footer {
    position: relative;
    overflow:hidden;
    padding: 50px;
  }

  .o-footer:before {
      content: "";
    position: absolute;
    top: -40px;
    left: -25%;
    width: 200%;
    height: 40px;
    box-shadow: 0 0 30px rgba(0, 0, 0, .2)
}
.o-footer>.a-link:first-child {
  display: none;
}
  .o-footer ul {
    display: inline-block;
    float: none;
    text-align: center;
  }
  .o-footer ul li {
    padding: 5px 8px;
  }
  .o-footer .a-link {
    font-size: 14px;
  }
  .o-footer ul li.right {
    float: none;
  }
  .o-curated-search-footer .o-tag-cloud .tags-container .tag .a-link{
    padding: 0px 12px 8px;
  }
  .o-curated-search-footer .info-section+.o-tag-cloud {
  padding-top: 29px;
  }
  .o-curated-search-footer {
    margin-bottom: 18px;
  }


.o-curated-search-footer .info-section {
  display: none;
}
.o-curated-search-footer .info-section+.o-tag-cloud {
  text-align: center;
  display: block;
  float: none;
  margin: 0 auto;
  padding-top: 0!important;
}
.o-curated-search-footer {
  margin-top: 0!important;
    padding: 30px 15px 0px;
}
.o-curated-search-footer .info-section+.o-tag-cloud .tags-container {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.o-curated-search-footer .info-section+.o-tag-cloud .tags-container .tag {
  padding: 0 !important;
  display: inline-block;
  float: none;
}
.o-curated-search-footer .info-section+.o-tag-cloud .tags-container .tag a {
  padding: 0;
}
}

@media (min-width: 769px){
.o-navigation .category-menu {
width: 230px
}
.o-navigation .departments .department-item, .o-navigation .m-static-notification-ticker .center-content p.mobile-notification, .o-navigation .category-group .a-button-nostyle, .o-navigation .category-group .a-link, .o-navigation .category-group .a-heading-3, .o-navigation .trending-content .a-heading-3,.o-navigation .trending-content li .a-link,.m-notification-ticker li{
  font-size: 14px;
}
.o-navigation .navigation-curtain .department-link, .o-navigation .navigation-curtain span.title {
  font-size: 22px;
}
}

.o-width[style*="naCloudLong"] .cloud-title.a-heading-6 {
    font-size: 4.5vw;
    text-align: center;
    line-height: 1.2;
    font-family: "Arket Sans";
    display: inline-block;
    width: 100%;
    padding-bottom: 5px;
}
.o-width[style*="naCloudLong"] .o-tag-cloud .tags-container {
  margin-top: 0!important;
}
@media (max-width: 1162px) {
  .o-width[style*="naCloudLong"] .cloud-title.a-heading-6 {
    font-size: 5.5vw!important;
    margin: 0;
  }
}
@media (max-width: 768px) {
  .o-width[style*="naCloudLong"] .cloud-title.a-heading-6 {
    display: none;
  }
}


.o-width[style*="fshCloud"] .cloud-title.a-heading-6 {
    font-size: 4.5vw;
    text-align: center;
    line-height: 1.2;
    font-family: "Arket Sans";
    display: inline-block;
    width: 100%;
    padding-bottom: 5px;
}
.o-width[style*="fshCloud"] .o-tag-cloud .tags-container {
  margin-top: 0!important;
}
@media (max-width: 1162px) {
  .o-width[style*="fshCloud"] .cloud-title.a-heading-6 {
    font-size: 5.5vw!important;
    margin: 0;
  }
}
@media (max-width: 768px) {
  .o-width[style*="fshCloud"] .cloud-title.a-heading-6 {
    display: none;
  }
  .o-width[style*="fshCloud"] .o-tag-cloud {
    display: none;
  }
}

/* 1 Large 4 Small */
    [style*="VNAV"] .layout-2 .layout-row-2:before, [style*="VNAV"] .layout-2 .layout-row-3:before{display:none!important;}
    [style*="VNAV"] .layout-2 .image-container .slider-text-block {position: absolute;left:0;top:0;}
    [style*="VNAV"] .layout-2 .layout-row-2,[style*="VNAV"] {border:none!important;padding: 0!important;}
    [style*="VNAV"] .layout-2 .layout-row-3 {border:none!important;padding: 0!important; margin-bottom: -3px;}
    [style*="VNAV"] {overflow:hidden;}
    [style*="VNAV"] .layout-2 {font-size:0;padding-top:0px!important;padding-bottom:0px!important;margin-bottom: 0px;border: none !important;}
    [style*="VNAV"] .layout-2 .layout-row-3 .o-image-listing.cols-2 .image-container {padding:0!important;margin:0!important;position:relative;}
    [style*="VNAV"] .layout-2 .o-image-listing .image-container .slider-text-block .o-text-field {
        text-align: center;
        white-space: nowrap;
        font-size: 18px;
        background-color: rgb(255, 255, 255);
        width: auto;
        pointer-events: none;
        margin: 0 !important;
        padding: 5px 14px 6px;
        transform: translateX(-50%);
        position: absolute;
        left: 50%;
        bottom: 8%;
        max-width: calc(100% - 20px);
        text-overflow: ellipsis;
        overflow: hidden;
        color: rgb(0, 0, 0) !important;
        text-shadow: none !important;
    }

    [style*="VNAV"] .layout-2 .o-image-listing .image-container .slider-text-block .o-text-field.large-font i {
        font-family: "Arket Sans Ding";
        font-style: normal;
    }

    [style*="VNAV"] .layout-2 .o-image-listing .image-container .slider-text-block .o-text-field.large-font {
        font-size: 42px !important;
        background-color: rgba(255, 255, 255, 0);
        color: rgb(255, 255, 255) !important;
        text-shadow: 0 0 13px #00000073 !important;
    }
    [style*="VNAV"] .layout-2 .o-image-listing.cols-1 .image-container .slider-text-block .o-text-field {
       bottom: calc(50% - 20px);
        font-size: 24px;
    }

    .coremetricsCategoryPath+.o-hero+.o-width.wc-100+[style*="VNAV"] {
        margin-top: -92px;
    }

    [style*="VNAV"] .layout-2 .layout-row-3 {padding-top: 0px!important;}
    [style*="VNAV"] .layout-row-4{display: none!important;}
    [style*="VNAV"] [style*="videoLink"].o-width:not(.full-width) video {vertical-align: bottom!important;}

    [style*="VNAV"]>.o-layout {
        margin-top: 0px!important;
        margin-bottom: 0px!important;
    }


@media (max-width:630px) {
    .coremetricsCategoryPath+.o-hero+.o-width.wc-100+[style*="VNAV"] {
        margin-top: -48px;
    }
    [style*="VNAV"] .layout-2 .o-image-listing {
        margin-top: 0!important;
        overflow: hidden;
    }

    [style*="VNAV"] .layout-2 .o-image-listing .image-container .slider-text-block .o-text-field.large-font {
        font-size: 24px !important;
    }
}

@media(max-width:768px) {
    [style*="VNAV"] .layout-2 .o-image-listing .image-container .slider-text-block .o-text-field {
        font-size: 14px;
    }
}


@media (min-width: 401px ) and (max-width: 700px) {
    [style*="VNAV"] .layout-2 .o-image-listing .image-container .slider-text-block .o-text-field {
        font-size: 2.6vw;
    }
}

/*Temporary until markers are working properly*/
  .o-product .description .product-markers {display:none;}




</style>

\t<div data-component="SkeletonLoading" id="lpResolveConfigs" data-lp-is-enabled="true" data-lp-aspect-ratio-width="2" data-lp-aspect-ratio-height="3" data-lp-density-mobile="2" data-lp-density-tablet="2" data-lp-density-desk="2" data-lp-max-density="3" data-lp-format="webp,jpeg" data-lp-cache-threshold="50" data-lp-url="lp.arket.com" data-lp-uri="app006prod" data-lp-image-fit="containerWidth" data-lp-jpeg-quality-desktop="70" data-lp-webp-quality-mobile="70" data-lp-webp-quality-tablet="70" data-lp-jpeg-quality-tablet="70" data-lp-webp-quality-desktop="70" data-lp-jpeg-quality-mobile="70"></div>
<div id="accountDataStorage"
\tdata-locale-info-locale="hm.multiCountry.getLocale('HMCORP_locale','en')"
\tdata-locale-info-new="DE"
\tdata-locale-info-country="hm.multiCountry.getCountryCode('HMCORP_locale')"
\thidden></div>
<div id="headerDataStorage" data-context-path="en_eur" data-is-order-confirmation-page="false" hidden></div>
<div class="newsletterLightbox parbase"><div class="newsletterPopup newsletter parbase"><div data-component="ONewsletterPopup" data-expires="30" class="o-newsletter-popup " >
    <div class="newsletter-signup">

\t\t\t\t <form data-component="OForm" class="o-form" id="p11newsletterSubscribeForm" action="javascript:arketNewsLetterPopup('/en_eur/fashionNews/subscribe','/sling/servlet/default.appnewslettersubscribe.ARKET.json')" onsubmit='TealiumUtils.trackErrorMessage(this,"newsletter")' tabindex="2">
\t\t\t\t <span class="a-icon-lg-close-circle"></span>
\t\t\t\t<input type="hidden" id="enablePersonal" value="true" name="enablePersonal">
\t\t\t\t<input type="hidden" id="chbNewsLetterTerms" value="true" name="frequency" data-checked="checked">

\t\t\t\t <h6 class="a-heading-6">Sign up to receive 10% off your first purchase*</h6>\t\t
\t\t\t <div class="personalized-option">
                <div class="m-error js-m-error is-hidden">
                    <span class="has-error"></span>
                </div>
                <div data-component="MInput" class="m-input email-value i18n" placeholder="Enter your e-mail" >
                    <label class="a-label js-a-label" for="email"></label>
                    <input id="txt-email-id" placeholder="Enter your e-mail" class="a-input js-a-input i18n" type="email" value="" name="email" required="required" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" data-validation-required-text="" data-validation-pattern-text="" data-alreadyexist-pattern-text="THIS E-MAIL IS ALREADY IN USE. PLEASE TRY AGAIN" tabindex="200">
                    <label class="a-label js-a-label" for="email"></label>
                </div>
\t\t\t\t<h6 class="a-heading-6 select-department">Department settings</h6>
                 <div class="option-wrapper">

                    <div class="m-radio-button u-clearfix">
                        <input type="radio" class="a-radio-button women i18n" id="women-id" required="required" data-validation-required-text="required" name="gender" value="1" tabindex="202">
                        <label class="a-label js-a-label u-no-select custom-radio" for="women-id"></label>
                        <label class="a-label js-a-label label-text" for="women-id">Women</label>
                    </div>
                     <div class="m-radio-button u-clearfix">
                        <input type="radio" class="a-radio-button men i18n" id="men-id" required="required" data-validation-required-text="required" name="gender" value="2" tabindex="201">
                        <label class="a-label js-a-label u-no-select custom-radio" for="men-id"></label>
                        <label class="a-label js-a-label label-text" for="men-id">Men</label>
                    </div>
                </div>
                <div class="checkbox-wrapper">
                    <div class="m-checkbox u-clearfix child" id="child-id">
                        <input type="checkbox" class="a-checkbox" id="connected_child" name="department" tabindex="203">
                        <label class="a-label js-a-label custom-box" for="connected_child" tabindex="204"></label>
                        <label class="a-label js-a-label" for="connected_child">Children</label>
                    </div>
                </div>
                <div class="m-checkbox u-clearfix m-checkbox-age" id="age-id">
                    <input type="checkbox" class="a-checkbox" id="connected_age_id" required="required" data-validation-required-text="" tabindex="205">
                    <label class="a-label js-a-label custom-box" for="connected_age_id" tabindex="206"></label>
                    <label class="a-label js-a-label" for="connected_age_id">
\t\t\t\t\t<label id="newsLetterP11-SignUpMessage"></label>
\t\t\t\t\t<a href="/en_eur/customer-service/privacy-notice.html" target="_blank" class="a-link has-underline">privacy notice.</a></label>
                </div>
                 <div class="a-paragraph is-richtext"> * R.M. Williams is excluded from the discount</div>
               </div>\t
\t\t\t\t<button type="submit" class="a-button is-primary" tabindex="108"><span>Subscribe</span></button>\t\t\t

\t\t\t\t</form>

</div>

<div class="subscription-confirmation "><span class='a-icon-lg-close-circle'></span></div>
\t   \t
<div class="subscription-doubleoptin" style="display: none"><span class='a-icon-lg-close-circle'></span></div>
\t</div>
<div hidden>
    <div class="divtextprivacypolicy">
\t<h3>
  <b>About Cookies – Privacy notice<br />   </b></h3>
 <p>
  <i style="font-size: 12.0px;">A cookie is a small text file that is
    saved to, and, during subsequent visits, retrieved from your
    computer or mobile device. If you use our services, we will assume
    that you agree to the use of such cookie.</i></p>
 <p> </p>
 <p>
  <b>How do we use cookies?</b></p>
 <p>We use permanent cookies to store your start page and to store your
  details if you select another start page or &quot;Remember me&quot;
  when you log in. </p>
 <p> </p>
 <p>We will use cookies to save your favourite products.</p>
 <p> </p>
 <p>We use session cookies for example when you use the product
  filtration function, to check whether you are logged in or if you put
  an item in your shopping bag. </p>
 <p> </p>
 <p>We use both first- and third-party cookies to collect statistics and
  user data in aggregate and individual form in analysis tools to
  optimize our site and to present you with relevant marketing material.  </p>
 <p> </p>
 <p>Some third-party cookies are set by services that appear on our
  pages and are not in our control. They are set by social media
  providers such as Twitter, Facebook and Vimeo and relate to the
  ability of users to share content on this site, as indicated by their
  respective icon.</p>
 <p> </p>
 <p>We also use third-party cookies which performs cross-site tracking
  in order for us to give you marketing in other sites/channels.</p>
 <p> </p>
 <p>
  <b>What types of personal data do we process?</b></p>
 <p>We will only connect your cookie ID to your personal data submitted
  and gathered in relation to your account if you are logged in to your account.</p>
 <p>
  <b>Who has access to your personal data?</b></p>
 <p>Data that is forwarded to third parties, is only used to provide you
  with the services mentioned above, analysis tool in order to collect
  statistics to optimize our site and present you with relevant material.</p>
 <p> </p>
 <p>
  <b>What is the legal ground to process your personal data?</b></p>
 <p>We will only connect your cookies to your personal data if you are
  logged in to a ARKET account.</p>
 <p>If you are logged in to your account the legal ground based on our
  legitimate interest. </p>
 <p> </p>
 <p>
  <b>How long do we save your data?</b></p>
 <p>ARKET does not save your personal data. You can easily erase cookies
  from your computer or mobile device using your browser. For
  instructions on how to handle and delete cookies please look under
  &quot;Help&quot; in your browser. You can choose to disable cookies,
  or to receive a notification each time a new cookie is sent to your
  computer or mobile device. Please note that if you choose to disable
  cookies, you will not be able to take advantage of all our features. </p>
 <p> </p>
 <p>We also use Google Analytics Advertising Features. Read more about
  it and how you can opt out here: <a href="https://tools.google.com/dlpage/gaoptout/" class="underline overlay-trigger" target="_blank">https://tools.google.com/dlpage/gaoptout/</a>.</p>
 <p> </p>
 <p>
  <a href="/en_eur/customer-service/privacy-notice.html" class="underline overlay-trigger" target="_blank">Privacy Notice</a></p>
 <p> </p>
 <p> </p>

</div>
</div></div>
</div>
<div class="u-no-select">
    <div class="a-overlay js-a-overlay q-opacity-0" data-component="AOverlay"></div>
    <header data-component="OHeader" class="o-header  hide-departments  ">
    \t<input type="hidden" id="signinFormPath" value="/en_eur/j_spring_security_check"/>
        <input type="hidden" id="forgotPasswordPath" value="/en_eur/password/requestSignIn"/>
        <input type="hidden" id="joinFormPath" value="/en_eur/register/newcustomer"/>
        <input type="hidden" id="isIndex" value="false"/>
        <input type="hidden" id="searchDefaultOpen" value="false"/>
        <input type="hidden" id="contextPath2" value="en_eur"/>
        <div class="header-bar">
\t\t\t            <div data-component="OSearch" class="o-search" area-hidden="true">
    <ul class="curated-search-suggestions"></ul>
    <div class="form-container">
        <form data-component="OForm" class="o-form search-form" action="/en_eur/search.html" method="GET" autocomplete="off" data-min-characters="3">
            <div class="input-field-container">
                <div class="input-field-wrapper">
                    <input class="a-input text-hint" type="text" autocomplete="off" autocorrect="none" autocapitalize="off" tabindex="100">
                    <input class="a-input search-field" type="text" name="q" autocomplete="off" autocorrect="none" autocapitalize="off" placeholder="" tabindex="101">
                </div>
                <button type="submit" class="a-button-nostyle search"></button>
                <button type="button" class="a-button-nostyle close"></button>
            </div>
        </form>
    </div>
</div>
<div id="autosuggestSearchDataStorage" data-base-url-search="/en_eur/search.html" data-endpoint-term-suggestions="/content/p11/en_eur/jcr:content/header/autosuggestsearch.display.html" hidden></div>
<div class="notificationTicker parbase">


<ul class="m-notification-ticker is-active">
\t<li class="is-visible">Free shipping on all orders. Always free returns.</li>
</ul></div>
<div class="firstLevelNavConfiguration parbase">
\t<div data-component="ONavigation" class="o-navigation has-selected-department">
\t\t<nav class="main-navigation">
\t\t\t<div class="arket-logo">
\t\t\t\t<a href="/en_eur/index.html" target="_self" class="a-link" aria-label="arket-logo">
\t\t\t\t\t<div class="a-logo i18n">
\t\t\t\t\t\t<svg id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.51 70">
\t\t\t\t\t\t\t<title>ARKET</title><g id="Page-1">
\t\t\t\t\t\t\t<path id="ARKET" d="M117.14,55.2c-.1-6.7-.3-14.6-9.4-17.3,7.9-1.5,13.4-6.9,13.4-17.3,0-13.4-9.8-20.6-24.4-20.6H71.14V70H80V41.6h24.2c4.8,4.1,3.8,8.5,3.8,14.2,0,4.1.5,10.1,3.9,14.2h9.9c-3.5-4-4.6-9.7-4.7-14.8ZM80.21,33.6V8.1h16.7c10.3,0,15.3,4.4,15.3,12.4s-5,13.1-15.3,13.1ZM54.5,70h9.1L38.4,0H25.2L0,70H9.1l6.5-18.1H48Zm-36-26.1L31.8,6.8,45.1,43.9ZM166.81,24.2,190.31,0h-12l-35.6,36.6V0h-8.9V70h8.9V49l17.5-18,7.7,19.4c2.5,6.2,5.6,15,9.1,19.6h9.9c-4-5.5-7.4-13.1-10.2-20.3ZM249.71,8V0H201V70h48.7V62h-39.8V38h36V30h-36V8Zm67.8-8h-58.7V8h24.9V70h8.9V8h24.9Z"></path></g></svg>
\t\t\t\t\t</div>
\t\t\t\t</a>
\t\t\t</div>
\t\t\t<ul class="departments">
        \t\t\t
        \t\t\t\t<li>
        \t\t\t\t\t<a href="/en_eur/women.html" target="_self" class="a-link department-item " data-title="Women">
        \t\t\t\t\t\tWomen
        \t\t\t\t\t</a>
        \t\t\t\t</li>
        \t\t\t
        \t\t\t\t<li>
        \t\t\t\t\t<a href="/en_eur/men.html" target="_self" class="a-link department-item is-active" data-title="Men">
        \t\t\t\t\t\tMen
        \t\t\t\t\t</a>
        \t\t\t\t</li>
        \t\t\t
        \t\t\t\t<li>
        \t\t\t\t\t<a href="/en_eur/children.html" target="_self" class="a-link department-item " data-title="Children">
        \t\t\t\t\t\tChildren
        \t\t\t\t\t</a>
        \t\t\t\t</li>
        \t\t\t
        \t\t\t\t<li>
        \t\t\t\t\t<a href="/en_eur/homeware.html" target="_self" class="a-link department-item " data-title="Homeware">
        \t\t\t\t\t\tHomeware
        \t\t\t\t\t</a>
        \t\t\t\t</li>
        \t\t\t
        \t\t\t\t<li>
        \t\t\t\t\t<a href="/en_eur/travel.html" target="_self" class="a-link department-item " data-title="Travel">
        \t\t\t\t\t\tTravel
        \t\t\t\t\t</a>
        \t\t\t\t</li>
        \t\t\t
\t\t\t</ul>
\t\t\t<div aria-hidden="false" class="navigation-curtain" aria-expanded="true">
\t\t\t\t<div role="tree" class="animation-wrapper">
\t\t\t\t\t<div data-component="OSearchSuggestion" class="o-search-suggestion search-palette" role="treeitem">
\t                    <ul class="pages sites"></ul>
\t                    <h4 class="a-heading-4 product-heading u-display-none i18n">Products</h4>
\t                    <ul class="products"></ul>
\t                    <span class="see-all-products u-display-none i18n">See all products</span>
\t\t\t\t\t</div>
\t\t\t\t\t
\t\t\t\t\t\t<div data-title="Women" role="treeitem" aria-hidden="true" class="category-wrapper">
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t


\t<div class="category-menu">
\t
\t\t\t<div class="curated-categories">
\t\t\t\t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/women/new-arrivals.html" target="_self" class="a-link department-link">New arrivals</a>
\t\t\t    \t\t
\t\t\t    \t\t    \t\t
\t\t\t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/women/most-popular.html" target="_self" class="a-link department-link">Most popular</a>
\t\t\t    \t\t
\t\t\t    \t\t    \t\t
\t\t\t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/women/c/online-exclusive.html" target="_self" class="a-link department-link">Online exclusive</a>
\t\t\t    \t\t
\t\t\t    \t\t    \t\t
\t\t\t
\t\t\t</div>\t
\t\t\t<div class="main-categories">
\t\t\t\t
\t\t    \t\t
\t\t\t    \t\t<div class="folder-category">
\t\t\t    \t\t\t<button class="a-button a-button-nostyle folder-link is-open ">
\t\t\t    \t\t\t\t<span>
\t\t\t    \t\t\t\t\t<span class="title">Clothing</span>
\t\t\t    \t\t\t\t\t<span class="a-icon-plus-circle"></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-lg-arrow-right"></span>
\t\t\t    \t\t\t\t</span>
\t\t\t    \t\t\t</button>\t
\t\t\t    \t\t\t<div role="treeitem" class="category-group is-visible">
\t\t    \t\t\t\t\t<h3 class="a-heading-3">Clothing</h3>
<ul class="subcategories">
\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/all.html" target="_self" class="a-link ">All clothing</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/coats-and-jackets.html" target="_self" class="a-link ">Coats &amp; jackets</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/coats-and-jackets/down-jackets.html" target="_self" class="a-link ">Down jackets</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/knitwear.html" target="_self" class="a-link ">Knitwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/knitwear/cashmere-collection.html" target="_self" class="a-link ">Cashmere</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/dresses.html" target="_self" class="a-link ">Dresses</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/trousers.html" target="_self" class="a-link ">Trousers</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/shirts-blouses.html" target="_self" class="a-link ">Shirts &amp; blouses</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/jeans.html" target="_self" class="a-link ">Jeans</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/tops.html" target="_self" class="a-link ">Tops</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/tops/short-sleeve.html" target="_self" class="a-link ">T-shirts</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/tailoring.html" target="_self" class="a-link ">Tailoring </a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/skirts.html" target="_self" class="a-link ">Skirts</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/sportswear.html" target="_self" class="a-link ">Sportswear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/underwear-and-loungewear.html" target="_self" class="a-link ">Loungewear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/swimwear.html" target="_self" class="a-link ">Swimwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/underwear-and-loungewear/underwear.html" target="_self" class="a-link ">Underwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/underwear-and-loungewear/socks-tights.html" target="_self" class="a-link ">Socks &amp; tights</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t
</ul>
\t\t    \t\t\t\t</div>
\t\t\t    \t\t</div>
\t\t    \t\t
\t\t\t\t\t
\t\t    \t
\t\t    \t\t
\t\t\t    \t\t<div class="folder-category">
\t\t\t    \t\t\t<button class="a-button a-button-nostyle folder-link  ">
\t\t\t    \t\t\t\t<span>
\t\t\t    \t\t\t\t\t<span class="title">Shoes</span>
\t\t\t    \t\t\t\t\t<span class="a-icon-plus-circle"></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-lg-arrow-right"></span>
\t\t\t    \t\t\t\t</span>
\t\t\t    \t\t\t</button>\t
\t\t\t    \t\t\t<div role="treeitem" class="category-group is-underneath">
\t\t    \t\t\t\t\t<h3 class="a-heading-3">Shoes</h3>
<ul class="subcategories">
\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/shoes.html" target="_self" class="a-link ">All shoes</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/shoes/sandals.html" target="_self" class="a-link ">Sandals</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/shoes/trainers.html" target="_self" class="a-link ">Trainers</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/shoes/heels.html" target="_self" class="a-link ">Heels</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/shoes/flats.html" target="_self" class="a-link ">Flats</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/shoes/loafers.html" target="_self" class="a-link ">Loafers</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/shoes/boots.html" target="_self" class="a-link ">Boots</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t
</ul>
\t\t    \t\t\t\t</div>
\t\t\t    \t\t</div>
\t\t    \t\t
\t\t\t\t\t
\t\t    \t
\t\t    \t\t
\t\t\t    \t\t<div class="folder-category">
\t\t\t    \t\t\t<button class="a-button a-button-nostyle folder-link  ">
\t\t\t    \t\t\t\t<span>
\t\t\t    \t\t\t\t\t<span class="title">Bags</span>
\t\t\t    \t\t\t\t\t<span class="a-icon-plus-circle"></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-lg-arrow-right"></span>
\t\t\t    \t\t\t\t</span>
\t\t\t    \t\t\t</button>\t
\t\t\t    \t\t\t<div role="treeitem" class="category-group is-underneath">
\t\t    \t\t\t\t\t<h3 class="a-heading-3">Bags</h3>
<ul class="subcategories">
\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/bags-and-accessories/bags.html" target="_self" class="a-link ">All bags</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/bags-and-accessories/crossbody-bags.html" target="_self" class="a-link ">Crossbody bags</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/bags-and-accessories/tote-bags.html" target="_self" class="a-link ">Tote bags</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/travel.html" target="_self" class="a-link ">Travel bags</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/bags-and-accessories/wallets-and-purses.html" target="_self" class="a-link ">Wallets &amp; purses</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/bags-and-accessories/toiletry-bags.html" target="_self" class="a-link ">Toiletry bags</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t
</ul>
\t\t    \t\t\t\t</div>
\t\t\t    \t\t</div>
\t\t    \t\t
\t\t\t\t\t
\t\t    \t
\t\t    \t\t
\t\t\t    \t\t<div class="folder-category">
\t\t\t    \t\t\t<button class="a-button a-button-nostyle folder-link  ">
\t\t\t    \t\t\t\t<span>
\t\t\t    \t\t\t\t\t<span class="title">Accessories</span>
\t\t\t    \t\t\t\t\t<span class="a-icon-plus-circle"></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-lg-arrow-right"></span>
\t\t\t    \t\t\t\t</span>
\t\t\t    \t\t\t</button>\t
\t\t\t    \t\t\t<div role="treeitem" class="category-group is-underneath">
\t\t    \t\t\t\t\t<h3 class="a-heading-3">Accessories</h3>
<ul class="subcategories">
\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/bags-and-accessories.html" target="_self" class="a-link ">All accessories</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/bags-and-accessories/hats-and-gloves.html" target="_self" class="a-link ">Hats &amp; gloves</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/bags-and-accessories/scarves.html" target="_self" class="a-link ">Scarves &amp; bibs</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/bags-and-accessories/hair-accessories.html" target="_self" class="a-link ">Hair accessories</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/bags-and-accessories/belts.html" target="_self" class="a-link ">Belts</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/bags-and-accessories/small-leather-goods.html" target="_self" class="a-link ">Leather goods</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/women/bags-and-accessories/sunglasses.html" target="_self" class="a-link ">Sunglasses</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t
</ul>
\t\t    \t\t\t\t</div>
\t\t\t    \t\t</div>
\t\t    \t\t
\t\t\t\t\t
\t\t    \t
\t\t\t</div>
\t\t
\t</div>

\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t<div class="curated-content">
\t\t<div class="trending-content">
\t\t\t<h3 class="a-heading-3">RECOMMENDED</h3>
\t\t\t<ul class="trending-pages">
\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/women/c/tweed.html" target="_self" class="a-link"><b>material </b>
 Tweed</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/women/c/how-to-style-denim.html" target="_self" class="a-link"><b>guide </b>
                 How to wear denim</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/guide/care.html" target="_self" class="a-link"><b>guide</b>
                Care</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t
\t\t\t</ul>
\t\t</div>
\t\t
\t\t
\t</div>

\t\t\t\t\t\t\t
\t\t\t\t\t\t</div>
\t\t\t\t\t
\t\t\t\t\t\t<div data-title="Men" role="treeitem" aria-hidden="true" class="category-wrapper">
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t


\t<div class="category-menu">
\t
\t\t\t<div class="curated-categories">
\t\t\t\t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/men/new-arrivals.html" target="_self" class="a-link department-link">New arrivals</a>
\t\t\t    \t\t
\t\t\t    \t\t    \t\t
\t\t\t
\t\t\t</div>\t
\t\t\t<div class="main-categories">
\t\t\t\t
\t\t    \t\t
\t\t\t    \t\t<div class="folder-category">
\t\t\t    \t\t\t<button class="a-button a-button-nostyle folder-link is-open ">
\t\t\t    \t\t\t\t<span>
\t\t\t    \t\t\t\t\t<span class="title">Clothing</span>
\t\t\t    \t\t\t\t\t<span class="a-icon-plus-circle"></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-lg-arrow-right"></span>
\t\t\t    \t\t\t\t</span>
\t\t\t    \t\t\t</button>\t
\t\t\t    \t\t\t<div role="treeitem" class="category-group is-visible">
\t\t    \t\t\t\t\t<h3 class="a-heading-3">Clothing</h3>
<ul class="subcategories">
\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/all.html" target="_self" class="a-link ">All clothing</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/coats-jackets.html" target="_self" class="a-link ">Coats &amp; jackets</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/knitwear.html" target="_self" class="a-link ">Knitwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/shirts.html" target="_self" class="a-link ">Shirts</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/T-shirts.html" target="_self" class="a-link ">T-shirts</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/shirts/overshirts.html" target="_self" class="a-link ">Overshirts</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/knitwear/cashmere.html" target="_self" class="a-link ">Cashmere</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/trousers.html" target="_self" class="a-link ">Trousers</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/sweatshirts-and-hoodies.html" target="_self" class="a-link ">Sweatshirts</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/jeans.html" target="_self" class="a-link ">Jeans</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/suits.html" target="_self" class="a-link ">Suits</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/blazers.html" target="_self" class="a-link ">Blazers</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/T-shirts/polos.html" target="_self" class="a-link ">Polos</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/underwear.html" target="_self" class="a-link ">Underwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/socks.html" target="_self" class="a-link ">Socks</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/shoes.html" target="_self" class="a-link ">Shoes</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/Shorts.html" target="_self" class="a-link ">Shorts</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/swim-shorts.html" target="_self" class="a-link ">Swim shorts</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/accessories.html" target="_self" class="a-link ">Accessories</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/bags.html" target="_self" class="a-link ">Bags</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/bags-and-accessories/sunglasses.html" target="_self" class="a-link ">Sunglasses</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t
</ul>
\t\t    \t\t\t\t</div>
\t\t\t    \t\t</div>
\t\t    \t\t
\t\t\t\t\t
\t\t    \t
\t\t    \t\t
\t\t\t    \t\t<div class="folder-category">
\t\t\t    \t\t\t<button class="a-button a-button-nostyle folder-link  ">
\t\t\t    \t\t\t\t<span>
\t\t\t    \t\t\t\t\t<span class="title">Shoes</span>
\t\t\t    \t\t\t\t\t<span class="a-icon-plus-circle"></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-lg-arrow-right"></span>
\t\t\t    \t\t\t\t</span>
\t\t\t    \t\t\t</button>\t
\t\t\t    \t\t\t<div role="treeitem" class="category-group is-underneath">
\t\t    \t\t\t\t\t<h3 class="a-heading-3">Shoes</h3>
<ul class="subcategories">
\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/shoes.html" target="_self" class="a-link ">All shoes</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/shoes/trainers.html" target="_self" class="a-link ">Trainers</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/shoes/leather-shoes.html" target="_self" class="a-link ">Leather shoes</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/shoes/boots.html" target="_self" class="a-link ">Boots</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/shoes/joggers.html" target="_self" class="a-link ">Joggers</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/men/shoes/slides.html" target="_self" class="a-link ">Slides</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t
</ul>
\t\t    \t\t\t\t</div>
\t\t\t    \t\t</div>
\t\t    \t\t
\t\t\t\t\t
\t\t    \t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/men/bags.html" target="_self" class="a-link department-link">Bags</a>
\t\t\t    \t\t
\t\t\t    \t
\t\t    \t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/men/accessories.html" target="_self" class="a-link department-link">Accessories</a>
\t\t\t    \t\t
\t\t\t    \t
\t\t    \t
\t\t\t</div>
\t\t
\t</div>

\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t<div class="curated-content">
\t\t<div class="trending-content">
\t\t\t<h3 class="a-heading-3">RECOMMENDED</h3>
\t\t\t<ul class="trending-pages">
\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/men/c/sdp/corduroy.html" target="_self" class="a-link"><b>material </b>
  Corduroy</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/men/basics.html" target="_self" class="a-link"><b>category </b>
  Basics</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/guide/care.html" target="_self" class="a-link"><b>guide</b>
        Product care</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/guide/recycle-with-arket.html" target="_self" class="a-link">Recycle with ARKET</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t
\t\t\t</ul>
\t\t</div>
\t\t
\t\t
\t</div>

\t\t\t\t\t\t\t
\t\t\t\t\t\t</div>
\t\t\t\t\t
\t\t\t\t\t\t<div data-title="Children" role="treeitem" aria-hidden="true" class="category-wrapper">
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t


\t<div class="category-menu">
\t
\t\t\t<div class="curated-categories">
\t\t\t\t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/children/new-arrivals.html" target="_self" class="a-link department-link">New arrivals</a>
\t\t\t    \t\t
\t\t\t    \t\t    \t\t
\t\t\t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/homeware/children-room.html" target="_self" class="a-link department-link">Children´s room</a>
\t\t\t    \t\t
\t\t\t    \t\t    \t\t
\t\t\t
\t\t\t</div>\t
\t\t\t<div class="main-categories">
\t\t\t\t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/children/baby/newborn.html" target="_self" class="a-link department-link">Newborn <span style="font-family: Arket Sans SC;"> (0–6m)</span></a>
\t\t\t    \t\t
\t\t\t    \t
\t\t    \t
\t\t    \t\t
\t\t\t    \t\t<div class="folder-category">
\t\t\t    \t\t\t<button class="a-button a-button-nostyle folder-link  ">
\t\t\t    \t\t\t\t<span>
\t\t\t    \t\t\t\t\t<span class="title">Baby <span style="font-family: Arket Sans SC;"> (6m–2y)</span></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-plus-circle"></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-lg-arrow-right"></span>
\t\t\t    \t\t\t\t</span>
\t\t\t    \t\t\t</button>\t
\t\t\t    \t\t\t<div role="treeitem" class="category-group is-underneath">
\t\t    \t\t\t\t\t<h3 class="a-heading-3">Baby, 6 months – 2 years</h3>
<ul class="subcategories">
\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/baby.html" target="_self" class="a-link ">All Baby</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/baby/body.html" target="_self" class="a-link ">Bodysuits</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/baby/tops.html" target="_self" class="a-link ">Tops</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/baby/bottoms.html" target="_self" class="a-link ">Bottoms</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/baby/accessories.html" target="_self" class="a-link ">Accessories</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t
</ul>
\t\t    \t\t\t\t</div>
\t\t\t    \t\t</div>
\t\t    \t\t
\t\t\t\t\t
\t\t    \t
\t\t    \t\t
\t\t\t    \t\t<div class="folder-category">
\t\t\t    \t\t\t<button class="a-button a-button-nostyle folder-link  ">
\t\t\t    \t\t\t\t<span>
\t\t\t    \t\t\t\t\t<span class="title">Girls <span style="font-family: Arket Sans SC;"> (2–10y)</span></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-plus-circle"></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-lg-arrow-right"></span>
\t\t\t    \t\t\t\t</span>
\t\t\t    \t\t\t</button>\t
\t\t\t    \t\t\t<div role="treeitem" class="category-group is-underneath">
\t\t    \t\t\t\t\t<h3 class="a-heading-3">Girls, 2–10 years</h3>
<ul class="subcategories">
\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls.html" target="_self" class="a-link ">All Girls</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls/basics.html" target="_self" class="a-link ">Basics</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls/tops.html" target="_self" class="a-link ">Tops</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls/trousers.html" target="_self" class="a-link ">Trousers</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls/skirts.html" target="_self" class="a-link ">Skirts</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls/dresses.html" target="_self" class="a-link ">Dresses</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls/knitwear.html" target="_self" class="a-link ">Knitwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls/outerwear.html" target="_self" class="a-link ">Outerwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls/accessories.html" target="_self" class="a-link ">Accessories</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls/shoes.html" target="_self" class="a-link ">Shoes</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls/socks_tights.html" target="_self" class="a-link ">Socks &amp; tights</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls/underwear.html" target="_self" class="a-link ">Underwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls/nightwear.html" target="_self" class="a-link ">Nightwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/girls/swimwear.html" target="_self" class="a-link ">Swimwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t
</ul>
\t\t    \t\t\t\t</div>
\t\t\t    \t\t</div>
\t\t    \t\t
\t\t\t\t\t
\t\t    \t
\t\t    \t\t
\t\t\t    \t\t<div class="folder-category">
\t\t\t    \t\t\t<button class="a-button a-button-nostyle folder-link  ">
\t\t\t    \t\t\t\t<span>
\t\t\t    \t\t\t\t\t<span class="title">Boys <span style="font-family: Arket Sans SC;"> (2–10y)</span></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-plus-circle"></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-lg-arrow-right"></span>
\t\t\t    \t\t\t\t</span>
\t\t\t    \t\t\t</button>\t
\t\t\t    \t\t\t<div role="treeitem" class="category-group is-underneath">
\t\t    \t\t\t\t\t<h3 class="a-heading-3">Boys, 2–10 years</h3>
<ul class="subcategories">
\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/boys.html" target="_self" class="a-link ">All Boys</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/boys/basics.html" target="_self" class="a-link ">Basics</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/boys/tops.html" target="_self" class="a-link ">Tops</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/boys/trousers.html" target="_self" class="a-link ">Trousers</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/boys/knitwear.html" target="_self" class="a-link ">Knitwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/boys/outerwear.html" target="_self" class="a-link ">Outerwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/boys/accessories.html" target="_self" class="a-link ">Accessories</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/boys/shoes.html" target="_self" class="a-link ">Shoes</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/boys/socks.html" target="_self" class="a-link ">Socks</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/boys/underwear.html" target="_self" class="a-link ">Underwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/boys/nightwear.html" target="_self" class="a-link ">Nightwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/children/boys/swimwear.html" target="_self" class="a-link ">Swimwear</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t
</ul>
\t\t    \t\t\t\t</div>
\t\t\t    \t\t</div>
\t\t    \t\t
\t\t\t\t\t
\t\t    \t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/children/all.html" target="_self" class="a-link department-link"><span style="font-family: Arket Sans SC;">View all</span></a>
\t\t\t    \t\t
\t\t\t    \t
\t\t    \t
\t\t\t</div>
\t\t
\t</div>

\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t<div class="curated-content">
\t\t<div class="trending-content">
\t\t\t<h3 class="a-heading-3">Recommended</h3>
\t\t\t<ul class="trending-pages">
\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/children/artist-edition/lea-maupetit.html" target="_self" class="a-link"><b>ARTIST </b>
 Lea Maupetit</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/children/c/back-to-school.html" target="_self" class="a-link"><b>Theme </b>
         School start</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/homeware/play.html" target="_self" class="a-link"><b>category </b>
       Toys</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t
\t\t\t</ul>
\t\t</div>
\t\t
\t\t
\t</div>

\t\t\t\t\t\t\t
\t\t\t\t\t\t</div>
\t\t\t\t\t
\t\t\t\t\t\t<div data-title="Homeware" role="treeitem" aria-hidden="true" class="category-wrapper">
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t


\t<div class="category-menu">
\t
\t\t\t<div class="curated-categories">
\t\t\t\t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/homeware/new-arrivals.html" target="_self" class="a-link department-link">New arrivals</a>
\t\t\t    \t\t
\t\t\t    \t\t    \t\t
\t\t\t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/homeware/gifts.html" target="_self" class="a-link department-link">Gifts</a>
\t\t\t    \t\t
\t\t\t    \t\t    \t\t
\t\t\t
\t\t\t</div>\t
\t\t\t<div class="main-categories">
\t\t\t\t
\t\t    \t\t
\t\t\t    \t\t<div class="folder-category">
\t\t\t    \t\t\t<button class="a-button a-button-nostyle folder-link is-open ">
\t\t\t    \t\t\t\t<span>
\t\t\t    \t\t\t\t\t<span class="title">Rooms</span>
\t\t\t    \t\t\t\t\t<span class="a-icon-plus-circle"></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-lg-arrow-right"></span>
\t\t\t    \t\t\t\t</span>
\t\t\t    \t\t\t</button>\t
\t\t\t    \t\t\t<div role="treeitem" class="category-group is-visible">
\t\t    \t\t\t\t\t<h3 class="a-heading-3">Rooms</h3>
<ul class="subcategories">
\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/kitchen_.html" target="_self" class="a-link ">Kitchen</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/living-room.html" target="_self" class="a-link ">Living room</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/bathroom.html" target="_self" class="a-link ">Bathroom</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/children-room.html" target="_self" class="a-link ">Childrens room</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/home-office.html" target="_self" class="a-link ">Home office</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t
</ul>
\t\t    \t\t\t\t</div>
\t\t\t    \t\t</div>
\t\t    \t\t
\t\t\t\t\t
\t\t    \t
\t\t    \t\t
\t\t\t    \t\t<div class="folder-category">
\t\t\t    \t\t\t<button class="a-button a-button-nostyle folder-link  ">
\t\t\t    \t\t\t\t<span>
\t\t\t    \t\t\t\t\t<span class="title">Categories</span>
\t\t\t    \t\t\t\t\t<span class="a-icon-plus-circle"></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-lg-arrow-right"></span>
\t\t\t    \t\t\t\t</span>
\t\t\t    \t\t\t</button>\t
\t\t\t    \t\t\t<div role="treeitem" class="category-group is-underneath">
\t\t    \t\t\t\t\t<h3 class="a-heading-3">CATEGORIES</h3>
<ul class="subcategories">
\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/all.html" target="_self" class="a-link ">All</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/bath-and-body.html" target="_self" class="a-link ">Bath &amp; body</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/cleaning-and-caring.html" target="_self" class="a-link ">Cleaning &amp; caring</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/cooking.html" target="_self" class="a-link ">Cooking</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/serving.html" target="_self" class="a-link ">Serving</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/decorating.html" target="_self" class="a-link ">Decorating</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/organising.html" target="_self" class="a-link ">Organising</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/textiles.html" target="_self" class="a-link ">Home textiles</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/books.html" target="_self" class="a-link ">Books</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/stationery.html" target="_self" class="a-link ">Stationery</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/play.html" target="_self" class="a-link ">Toys</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/giftwrapping.html" target="_self" class="a-link ">Gift wrapping</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t
</ul>
\t\t    \t\t\t\t</div>
\t\t\t    \t\t</div>
\t\t    \t\t
\t\t\t\t\t
\t\t    \t
\t\t    \t\t
\t\t\t    \t\t<div class="folder-category">
\t\t\t    \t\t\t<button class="a-button a-button-nostyle folder-link  ">
\t\t\t    \t\t\t\t<span>
\t\t\t    \t\t\t\t\t<span class="title">Themes</span>
\t\t\t    \t\t\t\t\t<span class="a-icon-plus-circle"></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-lg-arrow-right"></span>
\t\t\t    \t\t\t\t</span>
\t\t\t    \t\t\t</button>\t
\t\t\t    \t\t\t<div role="treeitem" class="category-group is-underneath">
\t\t    \t\t\t\t\t<h3 class="a-heading-3">Themes</h3>
<ul class="subcategories">
\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/c/cosy-at-home.html" target="_self" class="a-link ">Back at home</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/c/autumn-harvest.html" target="_self" class="a-link ">Autumn Harvest</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/c/scent-family.html" target="_self" class="a-link ">Scent family</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/homeware/recipes/nordic-gnocchi.html" target="_self" class="a-link ">Nordic gnocchi</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t
</ul>
\t\t    \t\t\t\t</div>
\t\t\t    \t\t</div>
\t\t    \t\t
\t\t\t\t\t
\t\t    \t
\t\t\t</div>
\t\t
\t</div>

\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t<div class="curated-content">
\t\t<div class="trending-content">
\t\t\t<h3 class="a-heading-3">RECOMMENDED</h3>
\t\t\t<ul class="trending-pages">
\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/homeware/c/scent-family.html" target="_self" class="a-link"><b>Theme  </b>
                          Scent family</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/guide/care.html" target="_self" class="a-link"><b>Guide </b>
     Product care</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/homeware/recipes.html" target="_self" class="a-link"><b>index  </b>
     Recipes</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/guide/recycle-with-arket.html" target="_self" class="a-link">Recycle with ARKET</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t
\t\t\t</ul>
\t\t</div>
\t\t
\t\t
\t</div>

\t\t\t\t\t\t\t
\t\t\t\t\t\t</div>
\t\t\t\t\t
\t\t\t\t\t\t<div data-title="Travel" role="treeitem" aria-hidden="true" class="category-wrapper">
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t


\t<div class="category-menu">
\t
\t\t\t<div class="curated-categories">
\t\t\t\t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/travel.html" target="_self" class="a-link department-link">All travel</a>
\t\t\t    \t\t
\t\t\t    \t\t    \t\t
\t\t\t
\t\t\t</div>\t
\t\t\t<div class="main-categories">
\t\t\t\t
\t\t    \t\t
\t\t\t    \t\t<div class="folder-category">
\t\t\t    \t\t\t<button class="a-button a-button-nostyle folder-link is-open ">
\t\t\t    \t\t\t\t<span>
\t\t\t    \t\t\t\t\t<span class="title">Bags</span>
\t\t\t    \t\t\t\t\t<span class="a-icon-plus-circle"></span>
\t\t\t    \t\t\t\t\t<span class="a-icon-lg-arrow-right"></span>
\t\t\t    \t\t\t\t</span>
\t\t\t    \t\t\t</button>\t
\t\t\t    \t\t\t<div role="treeitem" class="category-group is-visible">
\t\t    \t\t\t\t\t<h3 class="a-heading-3">Travel</h3>
<ul class="subcategories">
\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/travel/luggage.html" target="_self" class="a-link ">Luggage</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/travel/packable-bags.html" target="_self" class="a-link ">Packable bags</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/travel/backpacks.html" target="_self" class="a-link ">Backpacks</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/travel/shoppers.html" target="_self" class="a-link ">Shoppers</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t\t\t
\t\t\t\t<li class="subcategory">
\t\t\t\t\t  \t\t\t\t
\t\t\t\t\t<a href="/en_eur/travel/totebags.html" target="_self" class="a-link ">Tote bags</a>
\t\t\t\t</li>
\t\t\t
\t\t
\t
</ul>
\t\t    \t\t\t\t</div>
\t\t\t    \t\t</div>
\t\t    \t\t
\t\t\t\t\t
\t\t    \t
\t\t    \t\t
\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t    \t\t<a href="/en_eur/travel/travel-accessories.html" target="_self" class="a-link department-link">Accessories</a>
\t\t\t    \t\t
\t\t\t    \t
\t\t    \t
\t\t\t</div>
\t\t
\t</div>

\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t<div class="curated-content">
\t\t<div class="trending-content">
\t\t\t<h3 class="a-heading-3">RECOMMENDED</h3>
\t\t\t<ul class="trending-pages">
\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.arket.com/en_eur/search.html?q=sunglasses" target="_self" class="a-link">Sunglasses</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.arket.com/en_eur/search.html?q=swimwear" target="_self" class="a-link">Swimwear</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="/en_eur/homeware/books/penguin-classics.html" target="_self" class="a-link">Penguin classics</a>
\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t
\t\t\t</ul>
\t\t</div>
\t\t
\t\t
\t</div>

\t\t\t\t\t\t\t
\t\t\t\t\t\t</div>
\t\t\t\t\t
\t\t\t\t\t<div class="m-static-notification-ticker">
\t\t\t\t\t\t<div class="center-content">
\t\t\t\t\t\t\t<span class="a-svg-package">
\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 30 35" id="package">
    \t\t\t\t\t\t\t\t<path d="M15 1L1 9.113V25.33l14 8.112 14-8.11V9.11L15 1zm.037 15.07l-4.516-2.623L21.487 7.07l4.528 2.625-10.977 6.375zm4.457-10.154L8.53 12.292l-4.508-2.62L15 3.313l4.494 2.604zM3 11.393l11 6.388v12.772L3 24.178V11.393zM16 30.55V17.824l11-6.388v12.743L16 30.55z" fill="#231f20"></path>
\t\t\t\t\t\t\t\t</svg>
\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t<p class="mobile-notification"></p></div>
\t\t\t\t\t</div>
\t\t\t\t\t<div role="treeitem" class="information-section tooltip-content" aria-hidden="true" aria-expanded="false">
\t
\t<a href="/en_eur/about.html" target="_self" class="a-link nav"><img class="a-image img" src="/content/dam/P11/images/customer-service-icons/about.png" alt=""><span class="text">About</span></a><a href="/en_eur/customer-service.html" target="_self" class="a-link nav"><img class="a-image img" src="/content/dam/P11/images/illustrations/mailman.gif" alt=""><span class="text">Customer service</span></a><a href="/en_eur/stores.html" target="_self" class="a-link nav"><img class="a-image img" src="/content/dam/P11/images/illustrations/storesandcafes.gif" alt=""><span class="text">Stores &amp; cafés</span></a><a href="/en_eur/customer-service/size-guide.html" target="_self" class="a-link nav"><img class="a-image img" src="/content/dam/P11/images/customer-service-icons/customerservice1.png" alt=""><span class="text">Size guide</span></a><a href="https://career.hmgroup.com/arket" target="_self" class="a-link nav"><img class="a-image img" src="/content/dam/P11/images/customer-service-icons/careers.png" alt=""><span class="text">Careers</span></a><a href="/en_eur/newslettersubscribe.html" target="_self" class="a-link nav"><img class="a-image img" src="/content/dam/P11/images/customer-service-icons/newsletter.png" alt=""><span class="text">Newsletter</span></a>


<a href="" target="_self" class="a-link my-account-icon" id="signInMobile" area-hidden="false"><span class="a-icon-profile"></span><span class="text">Sign in</span></a>
<a href="" target="_self" class="a-link my-account-icon" id="accountMobile" style="display:none" area-hidden="true"><span class="a-icon-profile"></span><span class="text">My account</span></a>
<div class="bottom-section">
\t<button type="button" id="navMenuShippingLink" data-classes="is-country-selector" class="a-button-nostyle open-lightbox bottom shipping" data-template="country-selector">
\t\t<span class="a-svg-location-inverted">
\t\t<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="108px" height="108px" viewBox="0 0 108 108" style="enable-background:new 0 0 108 108;" xml:space="preserve">
\t\t<path d="M33.465,61.87c-4.273-5.837-6.047-10.944-6.047-16.887c0-14.281,11.885-26.269,26.582-26.269
\t\t\tc14.699,0,26.582,11.987,26.582,26.372c0,6.88-1.773,10.946-6.047,16.783L54.104,89.285L33.465,61.87z M70.574,58.951
\t\t\tc3.961-5.524,5.004-8.547,5.004-13.968c0-11.675-9.695-21.369-21.578-21.369c-11.779,0-21.578,9.59-21.578,21.265
\t\t\tc0,5.004,1.355,8.965,5.004,13.969l16.678,22.099L70.574,58.951z M41.283,44.045c0-6.984,5.629-12.822,12.717-12.822
\t\t\tc7.09,0,12.719,5.734,12.719,12.822c0,6.984-5.734,12.718-12.719,12.718S41.283,51.029,41.283,44.045z M61.713,44.045
\t\t\tc0-4.378-3.439-7.817-7.713-7.817s-7.816,3.439-7.816,7.817c0,4.274,3.543,7.714,7.816,7.714S61.713,48.319,61.713,44.045z"></path>
\t\t</svg>
\t\t</span>
\t\t<span class="prefix">SHIPPING TO:</span>
\t\t<span class="country"></span>

\t</button>
\t<a href="" target="_self" class="a-link bottom account logout" style="display:none;" area-hidden="true">Logout</a>
</div>

<a href="https://www.instagram.com/arketofficial" target="_self" class="a-link follow">Follow ARKET</a>

\t              \t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</nav>
\t\t<nav class="secondary-navigation">
\t\t\t<button type="button" class="a-button-nostyle search-icon a-icon" aria-label="search">
\t\t\t\t<div class="a-icon-container">
\t\t\t\t\t<span class="s1"></span>
\t\t\t\t\t<span class="s2"></span>
\t\t\t\t</div>
\t\t\t</button>
\t\t\t<div class="my-account-block">
\t\t\t\t<a href="" target="_self" id="myAccountLink" style="display:none;" class="a-link my-account-icon" area-hidden="true" aria-label="<%= i18n2.get(" my account p11.navigation.firstlevelnavconfiguration.firstlevelnavconfiguration.html.myaccount>
\t\t\t\t\t<span class="a-icon-profile"></span>
\t\t\t\t</a>
\t\t\t\t<button type="button" class="a-button-nostyle my-account-icon tooltip-trigger" area-hidden="false" aria-label="<%= i18n2.get(" My account p11.navigation.firstLevelNavConfiguration.firstLevelNavConfiguration.html.MyAccount onclick="TealiumUtils.trackSignInNav(this);">
\t\t\t\t\t<span class="a-icon-profile"></span>
\t\t\t\t</button>
\t\t\t\t<div class="my-account-section tooltip-content" aria-hidden="true" aria-expanded="false">
\t\t\t\t\t<div class="o-sign-in-registration-tabs is-my-account-tooltip">
\t\t\t\t\t\t<ul data-component="MTablist" class="m-tablist tabs-1-2 sign-in-registration" data-tablist-for="sign-in-registration-tabs">
\t\t\t\t\t\t\t<li data-toggle="#sign-in-form" class="u-no-select is-active">
\t\t\t\t\t\t\t\t<h2 class="a-heading-2"></h2>
\t\t\t\t\t\t\t\t<a href="#sign-in-form" target="_self" class="a-link" onclick="TealiumUtils.trackFunnelLink('login_start');">Sign in</a>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t<li data-toggle="#registration-form" class="u-no-select">
\t\t\t\t\t\t\t\t<h2 class="a-heading-2"></h2>
\t\t\t\t\t\t\t\t<a href="#registration-form" target="_self" class="a-link" onclick="TealiumUtils.trackFunnelLink('registration_start');">Create account</a>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t</ul>
\t\t\t\t\t\t<div data-content-for="sign-in-registration-tabs" class="tablist-content">
\t\t\t\t\t\t\t<div id="sign-in-form" class="content is-active">
\t\t\t\t\t\t\t\t<div class="o-sign-in in-lightbox">
\t\t\t\t\t\t\t\t\t<form data-component="OForm" class="o-form" id="signInForm" action="" method="POST" onsubmit="TealiumUtils.trackTryLogin('login')" tabindex="2">
\t\t\t\t\t\t\t\t\t\t<div class="m-error js-m-error is-hidden">
\t\t\t\t\t\t\t\t\t\t\t<span class="has-error"></span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div data-component="MInput" class="m-input">
\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label" for="sign-in-email"></label>
\t\t\t\t\t\t\t\t\t\t\t<input placeholder="Email" class="a-input js-a-input i18n" type="email" value="" name="j_username" id="sign-in-email" required="required" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" data-validation-required-text="Enter email address" data-validation-pattern-text="Please enter a valid email address" tabindex="200">
\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label" for="sign-in-email" data-placeholder=""></label>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div data-component="MInput" class="m-input no-description password">
\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label" for="sign-in-password"></label>
\t\t\t\t\t\t\t\t\t\t\t<input placeholder="Password" class="a-input js-a-input i18n" type="password" value="" name="j_password" id="sign-in-password" required="required" pattern="^[^ ]{6,25}$" data-validation-required-text="Enter password" data-validation-pattern-text="Password must be between 5 - 25 characters and may not contain any spaces" tabindex="201">
\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label" for="sign-in-password" data-placeholder=""></label>
\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="a-button-nostyle toggle-password-state password-visible" data-show-text="Show" data-hide-text="Hide">Show</button>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class="link-holder">
\t\t\t\t\t\t\t\t\t\t\t<a href="" target="_self" class="a-link forgot-password" id="forgotLink">Retrieve your password</a>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<button type="submit" class="a-button is-primary" tabindex="202">
\t\t\t\t\t\t\t\t\t\t\t<span>Continue</span>
\t\t\t\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t\t\t</form>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div id="registration-form" class="content">
\t\t\t\t\t\t\t\t<div class="o-registration empty-registration">
\t\t\t\t\t\t\t\t\t<form data-component="OForm" class="o-form" id="createForm" action="" method="POST" onsubmit="TealiumUtils.trackTryLoginRegister('registration')" tabindex="3">
\t\t\t\t\t\t\t\t\t\t<div class="o-registration-form">
\t\t\t\t\t\t\t\t\t\t\t<div class="m-error js-m-error is-hidden">
\t\t\t\t\t\t\t\t\t\t\t\t<span class="has-error"></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t<div class="e-mail-input register-email">
\t\t\t\t\t\t\t\t\t\t\t\t<div data-component="MInput" class="m-input">
\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label" for="registration-email1"></label>
\t\t\t\t\t\t\t\t\t\t\t\t\t<input placeholder="Email" class="a-input js-a-input i18n" type="email" value="" name="email" id="registration-email1" required="required" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" data-validation-required-text="Enter email address" data-validation-pattern-text="Please enter a valid email address" tabindex="300">
\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label" for="registration-email1" data-placeholder=""></label>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t<div data-component="MInput" class="m-input password" id="passwordUnique">
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label" for="registration-password-11"></label>
\t\t\t\t\t\t\t\t\t\t\t\t<input placeholder="Password" class="a-input js-a-input i18n" type="password" value="" name="pwd" id="registration-password-11" required="required" data-validation-required-text="Enter password" maxlength="25" tabindex="301" data-password-error-text="Your password must contain a minimum of">
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label i18n" for="registration-password-11" data-placeholder="">Minimum of 6 Characters</label>
\t\t\t\t\t\t\t\t\t\t\t\t<div class="help-text">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span data-validation-rule="validate_min_chars" class="help-tip min-chars-check">8 characters</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span data-validation-rule="validate_min_one_num" class="help-tip number-check">1 number</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span data-validation-rule="validate_min_one_uppercase" class="help-tip uppercase-check">1 uppercase letter</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span data-validation-rule="validate_min_one_lowercase" class="help-tip lowercase-check">1 lowercase letter</span>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="a-button-nostyle toggle-password-state password-visible" data-show-text="Show" data-hide-text="Hide">Show</button>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t<div data-component="MInput" class="m-input password-repeat password" data-validation-match-field="passwordUnique">
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label" for="registration-password-21"></label>
\t\t\t\t\t\t\t\t\t\t\t\t<input placeholder="Repeat password" class="a-input js-a-input i18n" type="password" value="" name="checkPwd" id="registration-password-21" required="required" data-validation-required-text="Please confirm your new password" data-validation-match-field-text="Passwords are not matching" tabindex="302">
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label" for="registration-password-21" data-placeholder=""></label>
\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="a-button-nostyle toggle-password-state password-visible" data-show-text="Show" data-hide-text="Hide">Show</button>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t

\t<input type="hidden" name="country" value="">

\t\t\t\t\t\t\t\t\t\t<div class="wrapper-postalcode-optional">
\t\t\t\t\t\t\t\t\t\t\t<p class="a-paragraph i18n">Subscribe to the newsletter</p>
\t\t\t\t\t\t\t\t\t\t\t<div data-component="MInput" class="m-input post-code">
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label i18n" for="signup-postalcode">Your post code (optional)</label>
\t\t\t\t\t\t\t\t\t\t\t\t<input class="a-input js-a-input i18n" type="text" value="" name="signup-postalcode" id="signup-postalcode" pattern="^(?:\\s*)[^:â€œâ€�&quot;;!@$%^&amp;*()_+={}\\[<>,.?\`~|\\]\\/]+(s+[^\\s\\d:â€œâ€�&quot;;!@$%^&amp;*()_+={}\\[<>,.?\`~|\\]\\/]+)*(?:\\s*)$" data-validation-pattern-text="Please enter a valid postal code" tabindex="303"><label class="a-label js-a-label" for="signup-postalcode" data-placeholder=""></label>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class="option-wrapper-department">
\t\t\t\t\t\t\t\t\t\t\t<p class="a-paragraph">Newsletter subscription settings</p>
\t\t\t\t\t\t\t\t\t\t\t<div class="m-radio-button u-clearfix">
\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" class="a-radio-button men" id="men-lightbox" required="required" data-validation-required-text="required" name="department" tabindex="304">
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label u-no-select custom-radio" for="men-lightbox"></label>
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label label-text" for="men-lightbox">Men&#39;s department</label>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t<div class="m-radio-button u-clearfix">
\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" class="a-radio-button women" id="women-lightbox" required="required" data-validation-required-text="required" name="department" tabindex="305">
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label u-no-select custom-radio" for="women-lightbox"></label>
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label label-text" for="women-lightbox">Women&#39;s department</label>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t<div class="m-radio-button u-clearfix">
\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" class="a-radio-button both" id="both-lightbox" required="required" data-validation-required-text="required" name="department" checked="checked" tabindex="306">
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label u-no-select custom-radio" for="both-lightbox"></label>
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label label-text" for="both-lightbox">Both</label>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t<span class="m-checkbox u-clearfix child" id="child" name="department">
\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" class="a-checkbox child" id="checkbox_child" name="department" tabindex="307">
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label custom-box" for="checkbox_child" tabindex="308"></label>
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label" for="checkbox_child">Children&#39;s department</label>
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class="checkbox-input">
\t\t\t\t\t\t\t\t\t\t\t<span class="m-checkbox u-clearfix" id="newsletter">
\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" class="a-checkbox" id="checkbox_newsletter" name="hmNewsSubscription" tabindex="309">
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label custom-box" for="checkbox_newsletter" tabindex="310"></label>
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label" for="checkbox_newsletter">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="newsLetterText">I confirm that I am 16 years or older and I consent to ARKET processing
my personal data in order to send personalized marketing material in
accordance with <a href="/en_eur/customer-service/privacy-notice/direct-marketing.html" class="a-link" target="_blank">Privacy Notice</a></span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t</label>
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t<span class="m-checkbox u-clearfix" id="policies">
\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" class="a-checkbox" required="required" data-validation-required-text="" id="checkbox_policies" name="termsAndConditions" tabindex="311">
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label custom-box" for="checkbox_policies" tabindex="312"></label>
\t\t\t\t\t\t\t\t\t\t\t\t<label class="a-label js-a-label" for="checkbox_policies">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="policiesText">
\t\t\t\t\t\t\t\t\t\t\t\t\t\tI consent to ARKET using my personal data to manage my personal account in accordance with the
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="/en_eur/customer-service/privacy-notice/account.html" target="_blank" class="a-link policiesLink" data-template="empty" data-classes="is-privacy-policy"> privacy notice.</a>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t</label>
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t<button type="submit" class="a-button is-primary" tabindex="313">
\t\t\t\t\t\t\t\t\t\t\t\t<span>Continue</span>
\t\t\t\t\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</form>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t<div class="information-block">
\t\t\t\t<button type="button" class="a-button-nostyle info-icon tooltip-trigger" aria-label="<%= i18n2.get(" information p11.navigation.firstLevelNavConfiguration.firstLevelNavConfiguration.html.Information>
\t\t\t\t\t<span class="a-custom-icon-question">?</span>
\t\t\t\t</button>
\t\t\t</div>
\t\t\t
\t\t\t\t<a href="/en_eur/cart" target="_self" class="a-link a-bag-icon-container" aria-label="<%= i18n2.get(" cart p11.navigation.firstlevelnavconfiguration.firstlevelnavconfiguration.html.cart>
\t\t\t\t\t<span class="a-bag-icon js-a-bag-icon animate">
\t\t\t\t\t\t<span class="wrapper">
\t\t\t\t\t\t\t<span class="handle"></span>
\t\t\t\t\t\t\t<span class="quantity"></span>
\t\t\t\t\t\t</span>
\t\t\t\t\t</span>
\t\t\t\t</a>
\t\t\t
\t\t\t<button type="button" class="a-button-nostyle a-burger js-a-burger animate" aria-label="<%= i18n2.get(" menu p11.navigation.firstLevelNavConfiguration.firstLevelNavConfiguration.html.Menu>
\t\t\t\t<span class="line-wrapper">
\t\t\t\t\t<span class="line"></span>
\t\t\t\t\t<span class="line"></span>
\t\t\t\t\t<span class="line"></span>
\t\t\t\t</span>
\t\t\t</button>
\t\t</nav>
\t</div>

</div>
</div>
\t          <div data-component="MCartAddition" class="m-cart-addition">
\t\t\t<div class="a-tooltip has-animation">
\t\t\t\t<div class="basket-wrapper">
\t\t\t\t\t<div class="added-item">
\t\t\t\t\t\t<div class="basket-added-image">
\t\t\t\t\t\t\t<img class="a-image" src="//:0" alt="">
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="basket-added-info">
\t\t\t\t\t\t\t<div class="basket-added-info-title i18n">Added To Bag</div>
\t\t\t\t\t\t\t<p class="a-paragraph">
\t\t\t\t\t\t\t\t<span class="basket-added-info-price">
\t\t\t\t\t\t\t\t\t<span class="u-price"></span>
\t\t\t\t\t\t\t\t\t<span class="u-currency"></span>
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t<span class="item-title"></span>
\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t<a class="a-button checkout i18n" href="/en_eur/cart">Checkout</a>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="no-added-item">
\t\t\t\t\t\t<div class="basket-added-info-title i18n">ITEM NOT ADDED</div>
\t\t\t\t\t\t<p class="a-paragraph i18n">This product is sold only in limited numbers per customer. You cannot add more items to your shopping bag.</p>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</header>
\t<div data-component="OLightbox" class="o-lightbox">
\t\t<div class="lightbox-wrapper">
\t\t\t<div class="lightbox-header"></div>
\t\t\t<div class="lightbox-content js-content u-clearfix"></div>
\t\t\t<button type="button" class="a-button-nostyle m-button-icon a-icon-close js-close-button"></button>
\t\t</div>
\t</div>
    <div data-component="MProductZoom" class="m-product-zoom">
        <button type="button" class="a-button-nostyle a-icon-close-circle"></button>
        <div class="img-wrapper"></div>
    </div>
</div>

<script type="text/x-handlebars-template" id="empty"></script>
<script type="text/x-handlebars-template" id="search-suggestions-site">{{#each suggestions}}<li><div id="site-search-suggestion-{{this.suggestion}}" class="u-display-none">{{this.suggestion}}</div><a href="{{this.url}}" target="_self" class="a-link suggestion-tag" aria-labelledby="site-search-suggestion-{{this.suggestion}}"><span class="text">{{this.searchString}}</span><span class="suggestion">{{this.completeText}}</span></a></li>{{/each}}</script>
<script type="text/x-handlebars-template" id="search-suggestions-product">{{#each suggestions}}<li><div id="product-search-suggestion-{{this.suggestion}}" class="u-display-none">{{this.suggestion}}</div><a href="{{this.url}}" target="_self" class="a-link suggestion-tag" aria-labelledby="product-search-suggestion-{{this.suggestion}}"><span class="icon"><img alt="{{this.alt}}" class="a-image" src="{{this.imageURL}}"></span><span class="text">{{this.suggestion}}</span></a></li>{{/each}}</script>
<script type="text/x-handlebars-template" id="initial-suggestions-hbs">{{#each suggestionURLs}}<li data-url="{{this.link}}" class="filter-option initial-suggestion"><a href="{{this.link}}" target="_self" class="a-link initial-text">{{#if this.title }} {{this.title}} {{/if}}</a></li>{{/each}}</script>
<script type="text/x-handlebars-template" id="search-suggestions-site">{{#each suggestions}}<li data-type="{{this.type}}" data-title="{{this.title}}" data-code="{{this.code}}" data-url="{{this.link}}" data-icon="{{this.icon}}" class="filter-option"><a href="{{this.link}}" target="_self" class="a-link suggestion-tag"><span class="text">{{this.searchString}}</span><span class="suggestion">{{this.completeText}}</span></a></li>{{/each}}</script>
<script type="text/x-handlebars-template" id="search-suggestions-product">{{#each suggestions}}<li data-type="product" data-title="{{this.title}}" data-code="{{this.code}}" data-url="{{this.url}}" data-icon="{{this.imageURL}}" class="filter-option" onclick="sendNotificationTicketAutoSuggest('{{this.url}}', '{{this.ticket}}', event);"><a href="{{this.url}}" target="_self" class="a-link suggestion-tag"><span class="icon"><img class="a-image" src="{{this.imageURL}}" alt="{{this.title}}"></span><span class="text">{{this.searchString}}</span><span class="suggestion">{{this.completeText}}</span></a></li>{{/each}}</script>
<script type="text/x-handlebars-template" id="hbs-search-tag">{{#if_eq type 'department'}}<span class="a-tag is-department" data-type="{{type}}" data-title="{{title}}" data-code="{{code}}"><!-- DEPARTMENT TAG-->{{title}}<span class="close"></span></span>{{else if_eq type 'category'}}<span class="a-tag is-category" data-type="{{type}}" data-title="{{title}}" data-code="{{code}}"><!-- CATEGORY TAG-->{{title}}<span class="close"></span></span>{{else if_eq type 'subdepartment'}}<span class="a-tag is-category" data-type="{{type}}" data-title="{{title}}" data-code="{{code}}"><!-- SUBDEPARTMENT TAG-->{{title}}<span class="close"></span></span>{{else if_eq type 'product'}}<span class="a-tag is-product" data-type="{{type}}" data-title="{{title}}" data-code="{{code}}"><!-- PRODUCT TAG-->{{#if icon}}<span class="icon"><img class="a-image" src="{{icon}}" alt="{{title}}"></span>{{/if}}<span class="name">{{title}}</span><span class="number">{{code}}</span><span class="close"></span></span>{{else if_eq type 'curated'}}<span class="a-tag is-curated" data-type="{{type}}" data-title="{{title}}" data-code="{{code}}"><!-- CURATED TAG-->{{title}}<span class="close"></span></span>{{else if_eq type 'sale'}}<span class="a-tag is-sale" data-type="{{type}}" data-title="{{title}}" data-code="{{code}}"><!-- SALE TAG-->{{title}}<span class="close"></span></span>{{else if_eq type 'gender'}}<span class="a-tag is-inverted" data-type="{{type}}" data-title="{{title}}" data-code="{{code}}"><!-- GENDER (INVERTED) TAG-->{{title}}<span class="close"></span></span>{{else if_eq type 'colorWithNames'}}<span class="a-tag is-color" data-type="{{type}}" data-title="{{title}}" data-code="{{code}}" data-value="{{value}}"><!-- COLOR TAG--><span class="color-swatch icon"></span>{{title}}<span class="close"></span></span>{{else if_eq type 'printPattern'}}<span class="a-tag is-print" data-type="{{type}}" data-title="{{title}}" data-code="{{code}}" data-value="{{value}}"><!-- PRINT TAG-->{{#if icon}}<span class="icon"><img class="a-image" src="{{icon}}" alt="{{title}}"></span>{{/if}}{{title}}<span class="close"></span></span>{{else if_eq type 'sizes'}}<span class="a-tag is-size" data-type="{{type}}" data-title="{{title}}" data-code="{{code}}"><!-- SIZE TAG--><div class="sizes">{{#each sizeValues}}<span class="size">{{this}}</span>{{/each}}</div><span class="close"></span></span>{{else if_eq type 'material'}}<span class="a-tag is-material" data-type="{{type}}" data-title="{{title}}" data-code="{{code}}" data-value="{{value}}"><!-- MATERIAL TAG-->{{#if icon}}<span class="icon"><img class="a-image" src="{{icon}}" alt="{{title}}"></span>{{/if}}{{title}}<span class="close"></span></span>{{else if_eq type 'store'}}<span class="a-tag is-store" data-type="{{type}}" data-title="{{title}}" data-code="{{code}}"><!-- STORE TAG-->{{#if icon}}<span class="icon"><img class="a-image" src="{{icon}}" alt="{{title}}"></span>{{/if}}<div class="store-info"><span class="code">{{code}}</span><span class="address">{{title}}</span></div><span class="close"></span></span>{{else}}<span class="a-tag is-default" data-type="{{type}}" data-title="{{title}}" data-code="{{code}}"><!-- DEFAULT INVERTED TAG-->{{#if icon}}<span class="icon"><img class="a-image" src="{{icon}}" alt="{{title}}"></span>{{/if}}{{title}}<span class="close"></span></span>{{/if_eq}}</script>
<script type="text/x-handlebars-template" id="o-department-filter"><div class="department-palette"><h6 class="a-heading-6 department">Department</h6><div class="department-top-menu-section u-display-none">{{#each departments}}<a href="{{this.link}}" target="_self" class="a-link" ><h6 class="a-heading-6 filter-option headline" data-title="{{this.title}}" data-code="{{this.code}}" data-type="{{this.type}}" data-url="{{this.link}}">{{this.title}}</h6></a>{{/each}}</div><div class="departments-section">{{#each departments}}<a href="{{this.link}}" target="_self" data-title="{{this.title}}" data-code="{{this.code}}" data-type="{{this.type}}" data-url="{{this.link}}" class="a-link department-square filter-option"><h2 class="a-heading-2 headline">{{this.title}}</h2></a>{{/each}}</div><div class="subdepartments-section u-display-none">{{#each departments}} {{#if this.subdepartments }}<div data-title="{{toLowerCase this.title}}" class="palette"><div class="scroll">{{#each this.subdepartments}}<a href="{{this.link}}" target="_self" data-title="{{this.title}}" data-code="{{this.code}}" data-type="{{this.type}}" data-url="{{this.link}}" class="a-link subdepartment filter-option"><h6 class="a-heading-6">{{this.title}}</h6></a>{{/each}}</div></div>{{/if}} {{/each}}</div></div></script>
<script type="text/x-handlebars-template" id="o-filter-color-hbs">{{#if facets.colors}}<div id="colors" class="content is-active"><canvas data-component="OFilterColor" data-facets="{{stringify facets.colors}}" data-type="colorWithNames"></canvas><canvas class="hinted"></canvas></div>{{/if}}</script>
<script type="text/x-handlebars-template" id="o-filter-singleselect-hbs"><div data-value="{{this.value}}" data-title="{{this.title}}" data-code="{{this.code}}" data-type="{{this.type}}" class="filter-option">{{#if this.value }}<h5 class="a-heading-5"><span class="item-code">{{this.value}}</span><span>{{this.title}}</span></h5>{{else}}<h5 class="a-heading-5"><span>{{this.title}}</span></h5>{{/if}}</div></script>
<script type="text/x-handlebars-template" id="o-filter-multiselect-hbs"><div class="m-checkbox u-clearfix filter-option is-small" id="{{this.code}}" data-title="{{this.title}}" data-value="{{this.value}}" data-code="{{this.code}}" data-type="{{this.type}}"><input type="checkbox" class="a-checkbox" id="connected_{{this.code}}"><label class="a-label js-a-label custom-box" for="connected_{{this.code}}"></label><label class="a-label js-a-label" for="connected_{{this.code}}"><span>{{this.title}}</span></label></div></script>
<script type="text/x-handlebars-template" id="chooser-item">{{#each this.content}}<div class="m-chooser-item {{this.type}}"><a href="{{this.id}}" target="_self" class="a-link"><img class="a-image" src="{{this.imageLink}}" alt="{{this.imageAlt}}"><span class="anchor-title">{{this.anchorTitle}}</span></a></div>{{/each}}</script>

<input type="hidden" id="georguri" value="?goeorguri=%2Fen_eur%2Fmen%2Funderwear-loungewear%2Fproduct.pima-cotton-trunks-black.0494992001.html"/>
<script type="text/javascript" src="/etc/designs/appeaser/shared/clientlibs/components.min.js"></script>
<script type="text/html" id="country-selector">
\t\t\t<div data-component="ONewsletterPopup" data-expires="30" class="o-newsletter-popup " >
    <div class="newsletter-signup">

\t\t\t\t <form data-component="OForm" class="o-form" id="p11newsletterSubscribeForm" action="javascript:arketNewsLetterPopup('/en_eur/fashionNews/subscribe','/sling/servlet/default.appnewslettersubscribe.ARKET.json')" onsubmit='TealiumUtils.trackErrorMessage(this,"newsletter")' tabindex="2">
\t\t\t\t <span class="a-icon-lg-close-circle"></span>
\t\t\t\t<input type="hidden"  id="enablePersonal" value="true" name="enablePersonal">
\t\t\t\t<input type="hidden"  id="chbNewsLetterTerms" value="true" name="frequency" data-checked="checked">

\t\t\t\t <h6 class="a-heading-6"></h6>\t\t
\t\t\t <div class="personalized-option">
                <div class="m-error js-m-error is-hidden">
                    <span class="has-error"></span>
                </div>
                <div data-component="MInput" class="m-input email-value i18n" placeholder="Enter your e-mail" >
                    <label class="a-label js-a-label" for="email"></label>
                    <input id="txt-email-id" placeholder="Enter your e-mail" class="a-input js-a-input i18n" type="email" value="" name="email" required="required" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" data-validation-required-text="" data-validation-pattern-text="" data-alreadyexist-pattern-text="THIS E-MAIL IS ALREADY IN USE. PLEASE TRY AGAIN" tabindex="200">
                    <label class="a-label js-a-label" for="email"></label>
                </div>
\t\t\t\t<div class="m-checkbox u-clearfix m-checkbox-age" id="age-id">
                    <input type="checkbox" class="a-checkbox" id="connected_age_id" required="required" data-validation-required-text="" tabindex="205">
                    <label class="a-label js-a-label custom-box" for="connected_age_id" tabindex="206"></label>
                    <label class="a-label js-a-label" for="connected_age_id">
\t\t\t\t\t<label id="newsLetterP11-SignUpMessage"></label>
\t\t\t\t\t<a href="#" target="_blank" class="a-link has-underline"></a></label>
                </div>
                 </div>\t
\t\t\t\t<button type="submit" class="a-button is-primary" tabindex="108"><span></span></button>\t\t\t

\t\t\t\t</form>

</div>

<div class="subscription-confirmation "><span class='a-icon-lg-close-circle'></span></div>
\t   \t
<div class="subscription-doubleoptin" style="display: none"><span class='a-icon-lg-close-circle'></span></div>
\t</div>
<div hidden>
    <div class="divtextprivacypolicy">
\t
</div>
</div><div data-component="MCountrySelection" class="m-country-selection" data-component-id="d5a9ad84-82dc-4e63-87f9-783b1752977d">
    <div class="matrix-logotype"><img alt="image description" class="a-image" src="/etc/designs/appeaser/p11/clientlibs/pattern-lib/images/logo.svg"></div>
    <div class="matrix-content">
        <div class="matrix-title">
\t\t\t
\t\t\t\t<h6 class="a-heading-6">SHIPPING LOCATION</h6>
\t\t\t
\t\t</div>
\t\t<div class="matrix-container">
            <div class="matrix-row">
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.de_AT.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="AT">
\t\t\t\t\t\t\t<span>Austria</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.nl_BE.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="BE">
\t\t\t\t\t\t\t<span>Belgium</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.cs_CZ.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="CZ">
\t\t\t\t\t\t\t<span>Czech Republic</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.da_DK.en_eur.DKK.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="DK">
\t\t\t\t\t\t\t<span>Denmark</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.fi_FI.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="FI">
\t\t\t\t\t\t\t<span>Finland</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.fr_FR.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="FR">
\t\t\t\t\t\t\t<span>France</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.de_DE.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="DE">
\t\t\t\t\t\t\t<span>Germany</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.hu_HU.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="HU">
\t\t\t\t\t\t\t<span>Hungary</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.en_IE.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="IE">
\t\t\t\t\t\t\t<span>Ireland</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.it_IT.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="IT">
\t\t\t\t\t\t\t<span>Italy</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.nl_NL.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="NL">
\t\t\t\t\t\t\t<span>Nether- lands</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.no_NO.en_eur.NOK.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="NO">
\t\t\t\t\t\t\t<span>Norway</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.pl_PL.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="PL">
\t\t\t\t\t\t\t<span>Poland</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.pt_PT.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="PT">
\t\t\t\t\t\t\t<span>Portugal</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.sk_SK.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="SK">
\t\t\t\t\t\t\t<span>Slovakia</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.sl_SI.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="SI">
\t\t\t\t\t\t\t<span>Slovenia</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.es_ES.en_eur.EUR.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="ES">
\t\t\t\t\t\t\t<span>Spain</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.sv_SE.en_eur.SEK.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="SE">
\t\t\t\t\t\t\t<span>Sweden</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t<a href="/content/p11/page.countryselector.en_GB.en_eur.GBP.jsp" target="_self" class="a-link internal-link matrix-row-el country" data-country="GB">
\t\t\t\t\t\t\t<span>United Kingdom</span>
\t\t\t\t\t\t</a>
\t\t\t\t\t
\t\t\t\t
\t\t\t</div>
\t\t</div>
\t\t
\t\t\t<div class="matrix-description">Choose shipping location in order to see the correct pricing, delivery
times and shipping costs. Prices of items may vary based on your
shipping destination to reflect local market pricing and taxes.</div>
\t\t
\t\t
\t</div>
</div>
<div/>


<script type="text/javascript" src="/etc/designs/appeaser/p11/clientlibs/aem-clientlibs/selectCountryLightbox_Clientlib.min.js"></script>


</script>
    <script type="text/html" id="select-country-checkout"><div class="m-change-country-lightbox is-checkout"><h2 class="a-heading-2">Change location</h2><p class="a-paragraph">Your shopping bag will be moved to the selected location.</p><a class="a-button is-primary" href="/entrance.html?goeorguri=%2Fen_eur%2Fmen%2Funderwear-loungewear%2Fproduct.pima-cotton-trunks-black.0494992001.html">Continue</a><button class="a-button is-secondary js-close-button"><span>false</span></button></div></script>
<script type="text/x-handlebars-template" id="notification-no-sale"><div class="content i18n">There is no sale right now. Therefore the sale filter was removed.</div></script>
<script type="text/x-handlebars-template" id="other-countries"><div class="o-country"><div class="title"><h2 class="a-heading-2 i18n">Availability in stores worldwide</h2></div></div></script>
<script type="text/x-handlebars-template" id="notification-no-result"><div class="content i18n">0 results were found</div></script>
<script type="text/x-handlebars-template" id="notification-undo"><div class="content i18n">{{#listTags tags}}{{name}}{{/listTags}} does not exist in this category and was therefore removed.&nbsp;{{#if undo}}<span class="undo i18n">Undo</span>{{/if}}</div></script>
<script type="text/x-handlebars-template" id="notification-no-sale-in-category"><div class="content i18n">There are no sale items in this category.&nbsp;<span class="undo i18n">Undo</span></div></script>
<script type="text/x-handlebars-template" id="page-not-found"><div class="content i18n">The page requested could not be found.</div></script>
<!-- HeaderLife -->
<img src="/alive/user" alt="" width="1" height="1" style="position: absolute; left: -999px"/>
<div data-component="OPageContent" class="o-page-content">
    <div class="coremetricsPageId" hidden>product page 3</div>
    <div class="coremetricsPageType" hidden>product page 4</div>
    <div class="coremetricsCategoryId" hidden>product page 2</div>
    <div class="coremetricsCategoryPath" hidden>product page 1</div>
    <div data-component="OProductDetails" class="o-product-details">
\t\t\t<sly data-sly-test="">
\t<div class="cq-placeholder section"></div>
</sly>
<form data-component="OForm" class="o-form add-to-cart" action="/someURL" method="POST" onsubmit="p11App.productDet.trackAddToCart('en_eur', '0494992001', this)">
<div id="pdpDisplayDataStorage" data-locale="en_eur" data-article-ids="0494992001,0494992002,0494992003,0494992004,0494992005,0494992006,0494992011,0494992013" hidden></div>
<div id="fb-root"></div>
    <script>
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en/all.js#xfbml=1&appId=1433700643510498";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
<div id="pdpDetailsDataStorage" data-locale="en_eur" data-article-ids="0494992001,0494992002,0494992003,0494992004,0494992005,0494992006,0494992011,0494992013" hidden></div>
<script>
\tvar productArticleDetails = {
\t\t
\t\t'articleCode':'0494992001',
\t\t'baseProductCode' : '0494992_group_001',
\t\t'mainCategorySummary' : 'Underwear & Loungewear - men_underwearloungewear_all',
\t\t'name': 'Pima Cotton Trunks',
\t\t'scentProduct': 'false',
\t\t
\t\t'articleIds' : [
\t\t\t
\t\t\t\t"0494992001",
\t\t\t\t"0494992002",
\t\t\t\t"0494992003",
\t\t\t\t"0494992004",
\t\t\t\t"0494992005",
\t\t\t\t"0494992006",
\t\t\t\t"0494992011",
\t\t\t\t"0494992013"
\t\t],
\t\t
\t\t\t'0494992001': {
\t\t\t\t'title': 'Pima Cotton Trunks',
\t\t\t\t'name': 'Black',
\t\t\t\t'colorCode': '09',
\t\t\t\t'description': '<div style=\\"text-align: justify;\\">Classic trunks made from high-quality Pima cotton. The extra-long staple fibres of Pima cotton are spun into strong and colourfast yarns that yield smooth, slightly lustrous jersey fabrics. Added elastane gives a comfortable stretch to this close-fitted style.<\\/div><ul><li>Elastic waist<\\/li><li>Lined front<\\/li><li>Short legs<\\/li><li>Underwear & Loungewear > Trunks<\\/li><\\/ul><p>This product is part of the Multibuy offer. Buy 3 for \u00A320\\/\u20AC25\\/250 SEK\\/200 DKK.<\\/p>',
\t\t\t\t'atelierName': "",
\t\t\t\t'brandName': "",
\t\t\t\t'colorLoc': "Black",
\t\t\t\t'pdpLink' : 'https:\\/\\/www.arket.com\\/en_eur\\/men\\/underwear-loungewear\\/product.pima-cotton-trunks-black.0494992001.html',
\t\t\t\t'originCountry': "Bangladesh",
\t\t\t\t
\t\t\t\t'variants' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992001002',
\t\t\t\t\t\t'sizeCode' : '002',
\t\t\t\t\t\t'sizeName' : 'S',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992001003',
\t\t\t\t\t\t'sizeCode' : '003',
\t\t\t\t\t\t'sizeName' : 'M',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992001004',
\t\t\t\t\t\t'sizeCode' : '004',
\t\t\t\t\t\t'sizeName' : 'L',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992001005',
\t\t\t\t\t\t'sizeCode' : '005',
\t\t\t\t\t\t'sizeName' : 'XL',
\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t'perfumer' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'scent' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'careInstructionsImage' : [
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    }
\t\t\t\t                           ],
\t\t\t\t
\t\t\t\t
\t\t\t\t'productFrontImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'logoImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'dataSheetImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'thumbnailImages' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[01_0494992_001_031],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[01_0494992_001_031],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[01_0494992_001_031],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[01_0494992_001_031],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t'otherImages' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[01_0494992_001_014],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[01_0494992_001_014],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[01_0494992_001_014],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[01_0494992_001_014],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t'normalImages' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_001_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_001_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_001_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t'detailImages' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[03_0494992_001_059],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[03_0494992_001_059],type[DETAIL],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[03_0494992_001_059],type[DETAIL],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[03_0494992_001_059],type[DETAIL],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t'images':[
\t\t\t\t
\t\t\t\t    {
\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[03_0494992_001_059],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
\t\t\t\t\t\t'image': 'set=source[03_0494992_001_059],type[DETAIL],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t'fullscreen': 'set=source[03_0494992_001_059],type[DETAIL],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t'zoom': 'set=source[03_0494992_001_059],type[DETAIL],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t'vAssets' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[01_0494992_001_014],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[01_0494992_001_014],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[01_0494992_001_014],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[01_0494992_001_014],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t},
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[01_0494992_001_031],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[01_0494992_001_031],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[01_0494992_001_031],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[01_0494992_001_031],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t},
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_001_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_001_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_001_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t},
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[03_0494992_001_059],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[03_0494992_001_059],type[DETAIL],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[03_0494992_001_059],type[DETAIL],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[03_0494992_001_059],type[DETAIL],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t\t\t'price': '€10',
\t\t\t\t\t\t'priceOriginal': false,
\t\t\t\t\t\t'priceValue': '10.0',
\t\t\t\t\t\t'priceSaleValue': null,
\t\t\t\t\t
\t                'promoMarkerUrl': '//www.monki.com/',
\t\t\t\t\t'promoMarkerAlt': '',
\t\t\t\t\t'promoMarkerText': 'MULTIBUY',
\t                'promoMarkerLegalText': '',
\t                'promoMarkerLabelText': '',
\t                'promoMarkerStyle': 'color: #000000; background-color: #FFFFFF; border-radius: 0px;',
\t\t\t\t
                'compositions': [
\t\t\t\t\t
                    {
                    'compositionType' : '',
                    'materials' : [
\t\t\t\t\t\t\t
                    \t\t\t'Pima cotton 95.00',
                    \t\t\t'Elastane 5.00'
                \t\t],
                    } ,
                ],

\t\t\t\t'careInstructions': [
\t\t\t\t
\t\t\t\t        'Iron at low temperature'/
\t\t\t\t        'Tumble dry at medium temperature'/
\t\t\t\t        'Wash at or below 60\u00B0C'/
\t\t\t\t        'Dry clean any solvent except tetrachloroethylene'
\t            ],
\t\t\t\t
\t\t\t\t'countryOfOrigin': {
\t\t\t\t\t'code': 'BD',
\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t'link': '',
\t\t\t\t\t'text': '',
\t\t\t\t\t'supplier': 'Apex Textile Printing Mills',
\t\t\t\t\t'image': {
\t\t\t\t\t\t'src': '/medias/Bangladesh.png?context=cDExfGltYWdlc3wxMTg3OTl8aW1hZ2UvcG5nfGltYWdlcy9oZGIvaDYxLzg4MDM5MjU1MjQ1MTAucG5nfGZhNWE3Y2UzZjA2ZmZkNTczYmQ0ZTQ0ZjE3ODlhYmM5MDMzYTc2OTJlYmJlZjgzZWYwNTJiNTljMDlmNWU5MDE&storeId=p11-europe',
\t\t\t\t\t\t'alt': 'Bangladesh.png',
\t\t\t\t\t},
\t\t\t\t\t'region': {
\t\t\t\t\t\t'code': '',
\t\t\t\t\t\t'name': '',
\t\t\t\t\t},
\t\t\t\t\t'factory': {
\t\t\t\t\t\t'name': 'Apex Textile Printing Mills',
\t\t\t\t\t\t'address': {
\t\t\t\t\t\t\t'line1': '',
\t\t\t\t\t\t\t'line2': '',
\t\t\t\t\t\t\t'postalCode': '',
\t\t\t\t\t\t\t'town': '',
\t\t\t\t\t\t\t'formattedAddress': '',
\t\t\t\t\t\t\t'country' : {
\t\t\t\t\t\t\t\t'code': 'BD',
\t\t\t\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t\t\t}
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t},
\t\t\t\t
\t\t\t\t
\t\t\t\t'url': '\\/en_eur\\/productpage.0494992001.html'
    \t\t} ,
\t\t\t'0494992002': {
\t\t\t\t'title': 'Pima Cotton Trunks',
\t\t\t\t'name': 'White',
\t\t\t\t'colorCode': '10',
\t\t\t\t'description': '<div style=\\"text-align: justify;\\">Classic trunks made from high-quality Pima cotton. The extra-long staple fibres of Pima cotton are spun into strong and colourfast yarns that yield smooth, slightly lustrous jersey fabrics. Added elastane gives a comfortable stretch to this close-fitted style.<\\/div><ul><li>Elastic waist<\\/li><li>Lined front<\\/li><li>Short legs<\\/li><li>Underwear & Loungewear > Trunks<\\/li><\\/ul><p>This product is part of the Multibuy offer. Buy 3 for \u00A320\\/\u20AC25\\/250 SEK\\/200 DKK.<\\/p>',
\t\t\t\t'atelierName': "",
\t\t\t\t'brandName': "",
\t\t\t\t'colorLoc': "White",
\t\t\t\t'pdpLink' : 'https:\\/\\/www.arket.com\\/en_eur\\/men\\/underwear-loungewear\\/product.pima-cotton-trunks-white.0494992002.html',
\t\t\t\t'originCountry': "Bangladesh",
\t\t\t\t
\t\t\t\t'variants' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992002002',
\t\t\t\t\t\t'sizeCode' : '002',
\t\t\t\t\t\t'sizeName' : 'S',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992002003',
\t\t\t\t\t\t'sizeCode' : '003',
\t\t\t\t\t\t'sizeName' : 'M',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992002004',
\t\t\t\t\t\t'sizeCode' : '004',
\t\t\t\t\t\t'sizeName' : 'L',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992002005',
\t\t\t\t\t\t'sizeCode' : '005',
\t\t\t\t\t\t'sizeName' : 'XL',
\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t'perfumer' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'scent' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'careInstructionsImage' : [
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    }
\t\t\t\t                           ],
\t\t\t\t
\t\t\t\t
\t\t\t\t'productFrontImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'logoImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'dataSheetImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'thumbnailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'otherImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'normalImages' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_002_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_002_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_002_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_002_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t'detailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'images':[
\t\t\t\t
\t\t\t\t],
\t\t\t\t'vAssets' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_002_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_002_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_002_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_002_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t\t\t'price': '€10',
\t\t\t\t\t\t'priceOriginal': false,
\t\t\t\t\t\t'priceValue': '10.0',
\t\t\t\t\t\t'priceSaleValue': null,
\t\t\t\t\t
\t                'promoMarkerUrl': '//www.monki.com/',
\t\t\t\t\t'promoMarkerAlt': '',
\t\t\t\t\t'promoMarkerText': 'MULTIBUY',
\t                'promoMarkerLegalText': '',
\t                'promoMarkerLabelText': '',
\t                'promoMarkerStyle': 'color: #000000; background-color: #FFFFFF; border-radius: 0px;',
\t\t\t\t
                'compositions': [
\t\t\t\t\t
                    {
                    'compositionType' : '',
                    'materials' : [
\t\t\t\t\t\t\t
                    \t\t\t'Pima cotton 95.00',
                    \t\t\t'Elastane 5.00'
                \t\t],
                    } ,
                ],

\t\t\t\t'careInstructions': [
\t\t\t\t
\t\t\t\t        'Iron at low temperature'/
\t\t\t\t        'Tumble dry at medium temperature'/
\t\t\t\t        'Wash at or below 60\u00B0C'/
\t\t\t\t        'Dry clean any solvent except tetrachloroethylene'
\t            ],
\t\t\t\t
\t\t\t\t'countryOfOrigin': {
\t\t\t\t\t'code': 'BD',
\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t'link': '',
\t\t\t\t\t'text': '',
\t\t\t\t\t'supplier': 'Apex Textile Printing Mills',
\t\t\t\t\t'image': {
\t\t\t\t\t\t'src': '/medias/Bangladesh.png?context=cDExfGltYWdlc3wxMTg3OTl8aW1hZ2UvcG5nfGltYWdlcy9oZGIvaDYxLzg4MDM5MjU1MjQ1MTAucG5nfGZhNWE3Y2UzZjA2ZmZkNTczYmQ0ZTQ0ZjE3ODlhYmM5MDMzYTc2OTJlYmJlZjgzZWYwNTJiNTljMDlmNWU5MDE&storeId=p11-europe',
\t\t\t\t\t\t'alt': 'Bangladesh.png',
\t\t\t\t\t},
\t\t\t\t\t'region': {
\t\t\t\t\t\t'code': '',
\t\t\t\t\t\t'name': '',
\t\t\t\t\t},
\t\t\t\t\t'factory': {
\t\t\t\t\t\t'name': 'Apex Textile Printing Mills',
\t\t\t\t\t\t'address': {
\t\t\t\t\t\t\t'line1': '',
\t\t\t\t\t\t\t'line2': '',
\t\t\t\t\t\t\t'postalCode': '',
\t\t\t\t\t\t\t'town': '',
\t\t\t\t\t\t\t'formattedAddress': '',
\t\t\t\t\t\t\t'country' : {
\t\t\t\t\t\t\t\t'code': 'BD',
\t\t\t\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t\t\t}
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t},
\t\t\t\t
\t\t\t\t
\t\t\t\t'url': '\\/en_eur\\/productpage.0494992002.html'
    \t\t} ,
\t\t\t'0494992003': {
\t\t\t\t'title': 'Pima Cotton Trunks',
\t\t\t\t'name': 'Grey Melange',
\t\t\t\t'colorCode': '07',
\t\t\t\t'description': '<div style=\\"text-align: justify;\\">Classic trunks made from high-quality Pima cotton. The extra-long staple fibres of Pima cotton are spun into strong and colourfast yarns that yield smooth, slightly lustrous jersey fabrics. Added elastane gives a comfortable stretch to this close-fitted style.<\\/div><ul><li>Elastic waist<\\/li><li>Lined front<\\/li><li>Short legs<\\/li><li>Underwear & Loungewear > Trunks<\\/li><\\/ul><p>This product is part of the Multibuy offer. Buy 3 for \u00A320\\/\u20AC25\\/250 SEK\\/200 DKK.<\\/p>',
\t\t\t\t'atelierName': "",
\t\t\t\t'brandName': "",
\t\t\t\t'colorLoc': "Grey Melange",
\t\t\t\t'pdpLink' : 'https:\\/\\/www.arket.com\\/en_eur\\/men\\/underwear-loungewear\\/product.pima-cotton-trunks-grey.0494992003.html',
\t\t\t\t'originCountry': "Bangladesh",
\t\t\t\t
\t\t\t\t'variants' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992003002',
\t\t\t\t\t\t'sizeCode' : '002',
\t\t\t\t\t\t'sizeName' : 'S',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992003003',
\t\t\t\t\t\t'sizeCode' : '003',
\t\t\t\t\t\t'sizeName' : 'M',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992003004',
\t\t\t\t\t\t'sizeCode' : '004',
\t\t\t\t\t\t'sizeName' : 'L',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992003005',
\t\t\t\t\t\t'sizeCode' : '005',
\t\t\t\t\t\t'sizeName' : 'XL',
\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t'perfumer' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'scent' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'careInstructionsImage' : [
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    }
\t\t\t\t                           ],
\t\t\t\t
\t\t\t\t
\t\t\t\t'productFrontImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'logoImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'dataSheetImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'thumbnailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'otherImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'normalImages' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_003_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_003_001],type[PRODUCT],ImageVersion[2018083]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_003_001],type[PRODUCT],ImageVersion[2018083]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_003_001],type[PRODUCT],ImageVersion[2018083]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t'detailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'images':[
\t\t\t\t
\t\t\t\t],
\t\t\t\t'vAssets' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_003_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_003_001],type[PRODUCT],ImageVersion[2018083]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_003_001],type[PRODUCT],ImageVersion[2018083]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_003_001],type[PRODUCT],ImageVersion[2018083]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t\t\t'price': '€10',
\t\t\t\t\t\t'priceOriginal': false,
\t\t\t\t\t\t'priceValue': '10.0',
\t\t\t\t\t\t'priceSaleValue': null,
\t\t\t\t\t
\t                'promoMarkerUrl': '//www.monki.com/',
\t\t\t\t\t'promoMarkerAlt': '',
\t\t\t\t\t'promoMarkerText': 'MULTIBUY',
\t                'promoMarkerLegalText': '',
\t                'promoMarkerLabelText': '',
\t                'promoMarkerStyle': 'color: #000000; background-color: #FFFFFF; border-radius: 0px;',
\t\t\t\t
                'compositions': [
\t\t\t\t\t
                    {
                    'compositionType' : '',
                    'materials' : [
\t\t\t\t\t\t\t
                    \t\t\t'Pima cotton 95.00',
                    \t\t\t'Elastane 5.00'
                \t\t],
                    } ,
                ],

\t\t\t\t'careInstructions': [
\t\t\t\t
\t\t\t\t        'Iron at low temperature'/
\t\t\t\t        'Tumble dry at medium temperature'/
\t\t\t\t        'Wash at or below 60\u00B0C'/
\t\t\t\t        'Dry clean any solvent except tetrachloroethylene'
\t            ],
\t\t\t\t
\t\t\t\t'countryOfOrigin': {
\t\t\t\t\t'code': 'BD',
\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t'link': '',
\t\t\t\t\t'text': '',
\t\t\t\t\t'supplier': 'Apex Textile Printing Mills',
\t\t\t\t\t'image': {
\t\t\t\t\t\t'src': '/medias/Bangladesh.png?context=cDExfGltYWdlc3wxMTg3OTl8aW1hZ2UvcG5nfGltYWdlcy9oZGIvaDYxLzg4MDM5MjU1MjQ1MTAucG5nfGZhNWE3Y2UzZjA2ZmZkNTczYmQ0ZTQ0ZjE3ODlhYmM5MDMzYTc2OTJlYmJlZjgzZWYwNTJiNTljMDlmNWU5MDE&storeId=p11-europe',
\t\t\t\t\t\t'alt': 'Bangladesh.png',
\t\t\t\t\t},
\t\t\t\t\t'region': {
\t\t\t\t\t\t'code': '',
\t\t\t\t\t\t'name': '',
\t\t\t\t\t},
\t\t\t\t\t'factory': {
\t\t\t\t\t\t'name': 'Apex Textile Printing Mills',
\t\t\t\t\t\t'address': {
\t\t\t\t\t\t\t'line1': '',
\t\t\t\t\t\t\t'line2': '',
\t\t\t\t\t\t\t'postalCode': '',
\t\t\t\t\t\t\t'town': '',
\t\t\t\t\t\t\t'formattedAddress': '',
\t\t\t\t\t\t\t'country' : {
\t\t\t\t\t\t\t\t'code': 'BD',
\t\t\t\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t\t\t}
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t},
\t\t\t\t
\t\t\t\t
\t\t\t\t'url': '\\/en_eur\\/productpage.0494992003.html'
    \t\t} ,
\t\t\t'0494992004': {
\t\t\t\t'title': 'Pima Cotton Trunks',
\t\t\t\t'name': 'Dark Blue',
\t\t\t\t'colorCode': '76',
\t\t\t\t'description': '<div style=\\"text-align: justify;\\">Classic trunks made from high-quality Pima cotton. The extra-long staple fibres of Pima cotton are spun into strong and colourfast yarns that yield smooth, slightly lustrous jersey fabrics. Added elastane gives a comfortable stretch to this close-fitted style.<\\/div><ul><li>Elastic waist<\\/li><li>Lined front<\\/li><li>Short legs<\\/li><li>Underwear & Loungewear > Trunks<\\/li><\\/ul><p>This product is part of the Multibuy offer. Buy 3 for \u00A320\\/\u20AC25\\/250 SEK\\/200 DKK.<\\/p>',
\t\t\t\t'atelierName': "",
\t\t\t\t'brandName': "",
\t\t\t\t'colorLoc': "Dark Blue",
\t\t\t\t'pdpLink' : 'https:\\/\\/www.arket.com\\/en_eur\\/men\\/underwear-loungewear\\/product.pima-cotton-trunks-blue.0494992004.html',
\t\t\t\t'originCountry': "Bangladesh",
\t\t\t\t
\t\t\t\t'variants' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992004002',
\t\t\t\t\t\t'sizeCode' : '002',
\t\t\t\t\t\t'sizeName' : 'S',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992004003',
\t\t\t\t\t\t'sizeCode' : '003',
\t\t\t\t\t\t'sizeName' : 'M',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992004004',
\t\t\t\t\t\t'sizeCode' : '004',
\t\t\t\t\t\t'sizeName' : 'L',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992004005',
\t\t\t\t\t\t'sizeCode' : '005',
\t\t\t\t\t\t'sizeName' : 'XL',
\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t'perfumer' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'scent' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'careInstructionsImage' : [
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    }
\t\t\t\t                           ],
\t\t\t\t
\t\t\t\t
\t\t\t\t'productFrontImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'logoImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'dataSheetImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'thumbnailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'otherImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'normalImages' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_004_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_004_001],type[PRODUCT],ImageVersion[2018083]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_004_001],type[PRODUCT],ImageVersion[2018083]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_004_001],type[PRODUCT],ImageVersion[2018083]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t'detailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'images':[
\t\t\t\t
\t\t\t\t],
\t\t\t\t'vAssets' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_004_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_004_001],type[PRODUCT],ImageVersion[2018083]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_004_001],type[PRODUCT],ImageVersion[2018083]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_004_001],type[PRODUCT],ImageVersion[2018083]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t\t\t'price': '€10',
\t\t\t\t\t\t'priceOriginal': false,
\t\t\t\t\t\t'priceValue': '10.0',
\t\t\t\t\t\t'priceSaleValue': null,
\t\t\t\t\t
\t                'promoMarkerUrl': '//www.monki.com/',
\t\t\t\t\t'promoMarkerAlt': '',
\t\t\t\t\t'promoMarkerText': 'MULTIBUY',
\t                'promoMarkerLegalText': '',
\t                'promoMarkerLabelText': '',
\t                'promoMarkerStyle': 'color: #000000; background-color: #FFFFFF; border-radius: 0px;',
\t\t\t\t
                'compositions': [
\t\t\t\t\t
                    {
                    'compositionType' : '',
                    'materials' : [
\t\t\t\t\t\t\t
                    \t\t\t'Pima cotton 95.00',
                    \t\t\t'Elastane 5.00'
                \t\t],
                    } ,
                ],

\t\t\t\t'careInstructions': [
\t\t\t\t
\t\t\t\t        'Iron at low temperature'/
\t\t\t\t        'Tumble dry at medium temperature'/
\t\t\t\t        'Wash at or below 60\u00B0C'/
\t\t\t\t        'Dry clean any solvent except tetrachloroethylene'
\t            ],
\t\t\t\t
\t\t\t\t'countryOfOrigin': {
\t\t\t\t\t'code': 'BD',
\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t'link': '',
\t\t\t\t\t'text': '',
\t\t\t\t\t'supplier': 'Apex Textile Printing Mills',
\t\t\t\t\t'image': {
\t\t\t\t\t\t'src': '/medias/Bangladesh.png?context=cDExfGltYWdlc3wxMTg3OTl8aW1hZ2UvcG5nfGltYWdlcy9oZGIvaDYxLzg4MDM5MjU1MjQ1MTAucG5nfGZhNWE3Y2UzZjA2ZmZkNTczYmQ0ZTQ0ZjE3ODlhYmM5MDMzYTc2OTJlYmJlZjgzZWYwNTJiNTljMDlmNWU5MDE&storeId=p11-europe',
\t\t\t\t\t\t'alt': 'Bangladesh.png',
\t\t\t\t\t},
\t\t\t\t\t'region': {
\t\t\t\t\t\t'code': '',
\t\t\t\t\t\t'name': '',
\t\t\t\t\t},
\t\t\t\t\t'factory': {
\t\t\t\t\t\t'name': 'Apex Textile Printing Mills',
\t\t\t\t\t\t'address': {
\t\t\t\t\t\t\t'line1': '',
\t\t\t\t\t\t\t'line2': '',
\t\t\t\t\t\t\t'postalCode': '',
\t\t\t\t\t\t\t'town': '',
\t\t\t\t\t\t\t'formattedAddress': '',
\t\t\t\t\t\t\t'country' : {
\t\t\t\t\t\t\t\t'code': 'BD',
\t\t\t\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t\t\t}
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t},
\t\t\t\t
\t\t\t\t
\t\t\t\t'url': '\\/en_eur\\/productpage.0494992004.html'
    \t\t} ,
\t\t\t'0494992005': {
\t\t\t\t'title': 'Pima Cotton Trunks',
\t\t\t\t'name': 'Khaki Green',
\t\t\t\t'colorCode': '99',
\t\t\t\t'description': '<div style=\\"text-align: justify;\\">Classic trunks made from high-quality Pima cotton. The extra-long staple fibres of Pima cotton are spun into strong and colourfast yarns that yield smooth, slightly lustrous jersey fabrics. Added elastane gives a comfortable stretch to this close-fitted style.<\\/div><ul><li>Elastic waist<\\/li><li>Lined front<\\/li><li>Short legs<\\/li><li>Underwear & Loungewear > Trunks<\\/li><\\/ul><p>This product is part of the Multibuy offer. Buy 3 for \u00A320\\/\u20AC25\\/250 SEK\\/200 DKK.<\\/p>',
\t\t\t\t'atelierName': "",
\t\t\t\t'brandName': "",
\t\t\t\t'colorLoc': "Khaki Green",
\t\t\t\t'pdpLink' : 'https:\\/\\/www.arket.com\\/en_eur\\/men\\/underwear-loungewear\\/product.pima-cotton-trunks-green.0494992005.html',
\t\t\t\t'originCountry': "Bangladesh",
\t\t\t\t
\t\t\t\t'variants' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992005002',
\t\t\t\t\t\t'sizeCode' : '002',
\t\t\t\t\t\t'sizeName' : 'S',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992005003',
\t\t\t\t\t\t'sizeCode' : '003',
\t\t\t\t\t\t'sizeName' : 'M',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992005004',
\t\t\t\t\t\t'sizeCode' : '004',
\t\t\t\t\t\t'sizeName' : 'L',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992005005',
\t\t\t\t\t\t'sizeCode' : '005',
\t\t\t\t\t\t'sizeName' : 'XL',
\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t'perfumer' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'scent' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'careInstructionsImage' : [
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    }
\t\t\t\t                           ],
\t\t\t\t
\t\t\t\t
\t\t\t\t'productFrontImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'logoImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'dataSheetImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'thumbnailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'otherImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'normalImages' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_005_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_005_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_005_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_005_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t'detailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'images':[
\t\t\t\t
\t\t\t\t],
\t\t\t\t'vAssets' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_005_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_005_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_005_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_005_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t\t\t'price': '€10',
\t\t\t\t\t\t'priceOriginal': false,
\t\t\t\t\t\t'priceValue': '10.0',
\t\t\t\t\t\t'priceSaleValue': null,
\t\t\t\t\t
\t                'promoMarkerUrl': '//www.monki.com/',
\t\t\t\t\t'promoMarkerAlt': '',
\t\t\t\t\t'promoMarkerText': 'MULTIBUY',
\t                'promoMarkerLegalText': '',
\t                'promoMarkerLabelText': '',
\t                'promoMarkerStyle': 'color: #000000; background-color: #FFFFFF; border-radius: 0px;',
\t\t\t\t
                'compositions': [
\t\t\t\t\t
                    {
                    'compositionType' : '',
                    'materials' : [
\t\t\t\t\t\t\t
                    \t\t\t'Pima cotton 95.00',
                    \t\t\t'Elastane 5.00'
                \t\t],
                    } ,
                ],

\t\t\t\t'careInstructions': [
\t\t\t\t
\t\t\t\t        'Iron at low temperature'/
\t\t\t\t        'Tumble dry at medium temperature'/
\t\t\t\t        'Wash at or below 60\u00B0C'/
\t\t\t\t        'Dry clean any solvent except tetrachloroethylene'
\t            ],
\t\t\t\t
\t\t\t\t'countryOfOrigin': {
\t\t\t\t\t'code': 'BD',
\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t'link': '',
\t\t\t\t\t'text': '',
\t\t\t\t\t'supplier': 'Apex Textile Printing Mills',
\t\t\t\t\t'image': {
\t\t\t\t\t\t'src': '/medias/Bangladesh.png?context=cDExfGltYWdlc3wxMTg3OTl8aW1hZ2UvcG5nfGltYWdlcy9oZGIvaDYxLzg4MDM5MjU1MjQ1MTAucG5nfGZhNWE3Y2UzZjA2ZmZkNTczYmQ0ZTQ0ZjE3ODlhYmM5MDMzYTc2OTJlYmJlZjgzZWYwNTJiNTljMDlmNWU5MDE&storeId=p11-europe',
\t\t\t\t\t\t'alt': 'Bangladesh.png',
\t\t\t\t\t},
\t\t\t\t\t'region': {
\t\t\t\t\t\t'code': '',
\t\t\t\t\t\t'name': '',
\t\t\t\t\t},
\t\t\t\t\t'factory': {
\t\t\t\t\t\t'name': 'Apex Textile Printing Mills',
\t\t\t\t\t\t'address': {
\t\t\t\t\t\t\t'line1': '',
\t\t\t\t\t\t\t'line2': '',
\t\t\t\t\t\t\t'postalCode': '',
\t\t\t\t\t\t\t'town': '',
\t\t\t\t\t\t\t'formattedAddress': '',
\t\t\t\t\t\t\t'country' : {
\t\t\t\t\t\t\t\t'code': 'BD',
\t\t\t\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t\t\t}
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t},
\t\t\t\t
\t\t\t\t
\t\t\t\t'url': '\\/en_eur\\/productpage.0494992005.html'
    \t\t} ,
\t\t\t'0494992006': {
\t\t\t\t'title': 'Pima Cotton Trunks',
\t\t\t\t'name': 'Dark Blue',
\t\t\t\t'colorCode': '76',
\t\t\t\t'description': '<div style=\\"text-align: justify;\\">Classic trunks made from high-quality Pima cotton. The extra-long staple fibres of Pima cotton are spun into strong and colourfast yarns that yield smooth, slightly lustrous jersey fabrics. Added elastane gives a comfortable stretch to this close-fitted style.<\\/div><ul><li>Elastic waist<\\/li><li>Lined front<\\/li><li>Short legs<\\/li><li>Underwear & Loungewear > Trunks<\\/li><\\/ul><p>This product is part of the Multibuy offer. Buy 3 for \u00A320\\/\u20AC25\\/250 SEK\\/200 DKK.<\\/p>',
\t\t\t\t'atelierName': "",
\t\t\t\t'brandName': "",
\t\t\t\t'colorLoc': "Dark Blue",
\t\t\t\t'pdpLink' : 'https:\\/\\/www.arket.com\\/en_eur\\/men\\/underwear-loungewear\\/product.pima-cotton-trunks-blue.0494992006.html',
\t\t\t\t'originCountry': "Bangladesh",
\t\t\t\t
\t\t\t\t'variants' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992006002',
\t\t\t\t\t\t'sizeCode' : '002',
\t\t\t\t\t\t'sizeName' : 'S',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992006003',
\t\t\t\t\t\t'sizeCode' : '003',
\t\t\t\t\t\t'sizeName' : 'M',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992006004',
\t\t\t\t\t\t'sizeCode' : '004',
\t\t\t\t\t\t'sizeName' : 'L',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992006005',
\t\t\t\t\t\t'sizeCode' : '005',
\t\t\t\t\t\t'sizeName' : 'XL',
\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t'perfumer' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'scent' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'careInstructionsImage' : [
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    }
\t\t\t\t                           ],
\t\t\t\t
\t\t\t\t
\t\t\t\t'productFrontImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'logoImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'dataSheetImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'thumbnailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'otherImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'normalImages' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_006_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_006_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_006_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_006_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t'detailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'images':[
\t\t\t\t
\t\t\t\t],
\t\t\t\t'vAssets' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_006_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_006_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_006_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_006_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t\t\t'price': '€10',
\t\t\t\t\t\t'priceOriginal': false,
\t\t\t\t\t\t'priceValue': '10.0',
\t\t\t\t\t\t'priceSaleValue': null,
\t\t\t\t\t
\t                'promoMarkerUrl': '//www.monki.com/',
\t\t\t\t\t'promoMarkerAlt': '',
\t\t\t\t\t'promoMarkerText': 'MULTIBUY',
\t                'promoMarkerLegalText': '',
\t                'promoMarkerLabelText': '',
\t                'promoMarkerStyle': 'color: #000000; background-color: #FFFFFF; border-radius: 0px;',
\t\t\t\t
                'compositions': [
\t\t\t\t\t
                    {
                    'compositionType' : '',
                    'materials' : [
\t\t\t\t\t\t\t
                    \t\t\t'Pima cotton 95.00',
                    \t\t\t'Elastane 5.00'
                \t\t],
                    } ,
                ],

\t\t\t\t'careInstructions': [
\t\t\t\t
\t\t\t\t        'Iron at low temperature'/
\t\t\t\t        'Tumble dry at medium temperature'/
\t\t\t\t        'Wash at or below 60\u00B0C'/
\t\t\t\t        'Dry clean any solvent except tetrachloroethylene'
\t            ],
\t\t\t\t
\t\t\t\t'countryOfOrigin': {
\t\t\t\t\t'code': 'BD',
\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t'link': '',
\t\t\t\t\t'text': '',
\t\t\t\t\t'supplier': 'Apex Textile Printing Mills',
\t\t\t\t\t'image': {
\t\t\t\t\t\t'src': '/medias/Bangladesh.png?context=cDExfGltYWdlc3wxMTg3OTl8aW1hZ2UvcG5nfGltYWdlcy9oZGIvaDYxLzg4MDM5MjU1MjQ1MTAucG5nfGZhNWE3Y2UzZjA2ZmZkNTczYmQ0ZTQ0ZjE3ODlhYmM5MDMzYTc2OTJlYmJlZjgzZWYwNTJiNTljMDlmNWU5MDE&storeId=p11-europe',
\t\t\t\t\t\t'alt': 'Bangladesh.png',
\t\t\t\t\t},
\t\t\t\t\t'region': {
\t\t\t\t\t\t'code': '',
\t\t\t\t\t\t'name': '',
\t\t\t\t\t},
\t\t\t\t\t'factory': {
\t\t\t\t\t\t'name': 'Apex Textile Printing Mills',
\t\t\t\t\t\t'address': {
\t\t\t\t\t\t\t'line1': '',
\t\t\t\t\t\t\t'line2': '',
\t\t\t\t\t\t\t'postalCode': '',
\t\t\t\t\t\t\t'town': '',
\t\t\t\t\t\t\t'formattedAddress': '',
\t\t\t\t\t\t\t'country' : {
\t\t\t\t\t\t\t\t'code': 'BD',
\t\t\t\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t\t\t}
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t},
\t\t\t\t
\t\t\t\t
\t\t\t\t'url': '\\/en_eur\\/productpage.0494992006.html'
    \t\t} ,
\t\t\t'0494992011': {
\t\t\t\t'title': 'Pima Cotton Trunks',
\t\t\t\t'name': 'Dark Grey',
\t\t\t\t'colorCode': '08',
\t\t\t\t'description': '<div style=\\"text-align: justify;\\">Classic trunks made from high-quality Pima cotton. The extra-long staple fibres of Pima cotton are spun into strong and colourfast yarns that yield smooth, slightly lustrous jersey fabrics. Added elastane gives a comfortable stretch to this close-fitted style.<\\/div><ul><li>Elastic waist<\\/li><li>Lined front<\\/li><li>Short legs<\\/li><li>Underwear & Loungewear > Trunks<\\/li><\\/ul><p>This product is part of the Multibuy offer. Buy 3 for \u00A320\\/\u20AC25\\/250 SEK\\/200 DKK.<\\/p>',
\t\t\t\t'atelierName': "",
\t\t\t\t'brandName': "",
\t\t\t\t'colorLoc': "Dark Grey",
\t\t\t\t'pdpLink' : 'https:\\/\\/www.arket.com\\/en_eur\\/men\\/underwear-loungewear\\/product.pima-cotton-trunks-grey.0494992011.html',
\t\t\t\t'originCountry': "Bangladesh",
\t\t\t\t
\t\t\t\t'variants' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992011002',
\t\t\t\t\t\t'sizeCode' : '002',
\t\t\t\t\t\t'sizeName' : 'S',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992011003',
\t\t\t\t\t\t'sizeCode' : '003',
\t\t\t\t\t\t'sizeName' : 'M',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992011004',
\t\t\t\t\t\t'sizeCode' : '004',
\t\t\t\t\t\t'sizeName' : 'L',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992011005',
\t\t\t\t\t\t'sizeCode' : '005',
\t\t\t\t\t\t'sizeName' : 'XL',
\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t'perfumer' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'scent' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'careInstructionsImage' : [
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    }
\t\t\t\t                           ],
\t\t\t\t
\t\t\t\t
\t\t\t\t'productFrontImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'logoImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'dataSheetImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'thumbnailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'otherImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'normalImages' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_011_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_011_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_011_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_011_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t'detailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'images':[
\t\t\t\t
\t\t\t\t],
\t\t\t\t'vAssets' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_011_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_011_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_011_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_011_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t\t\t'price': '€10',
\t\t\t\t\t\t'priceOriginal': false,
\t\t\t\t\t\t'priceValue': '10.0',
\t\t\t\t\t\t'priceSaleValue': null,
\t\t\t\t\t
\t                'promoMarkerUrl': '//www.monki.com/',
\t\t\t\t\t'promoMarkerAlt': '',
\t\t\t\t\t'promoMarkerText': 'MULTIBUY',
\t                'promoMarkerLegalText': '',
\t                'promoMarkerLabelText': '',
\t                'promoMarkerStyle': 'color: #000000; background-color: #FFFFFF; border-radius: 0px;',
\t\t\t\t
                'compositions': [
\t\t\t\t\t
                    {
                    'compositionType' : '',
                    'materials' : [
\t\t\t\t\t\t\t
                    \t\t\t'Pima cotton 95.00',
                    \t\t\t'Elastane 5.00'
                \t\t],
                    } ,
                ],

\t\t\t\t'careInstructions': [
\t\t\t\t
\t\t\t\t        'Iron at low temperature'/
\t\t\t\t        'Tumble dry at medium temperature'/
\t\t\t\t        'Wash at or below 60\u00B0C'/
\t\t\t\t        'Dry clean any solvent except tetrachloroethylene'
\t            ],
\t\t\t\t
\t\t\t\t'countryOfOrigin': {
\t\t\t\t\t'code': 'BD',
\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t'link': '',
\t\t\t\t\t'text': '',
\t\t\t\t\t'supplier': 'Apex Textile Printing Mills',
\t\t\t\t\t'image': {
\t\t\t\t\t\t'src': '/medias/Bangladesh.png?context=cDExfGltYWdlc3wxMTg3OTl8aW1hZ2UvcG5nfGltYWdlcy9oZGIvaDYxLzg4MDM5MjU1MjQ1MTAucG5nfGZhNWE3Y2UzZjA2ZmZkNTczYmQ0ZTQ0ZjE3ODlhYmM5MDMzYTc2OTJlYmJlZjgzZWYwNTJiNTljMDlmNWU5MDE&storeId=p11-europe',
\t\t\t\t\t\t'alt': 'Bangladesh.png',
\t\t\t\t\t},
\t\t\t\t\t'region': {
\t\t\t\t\t\t'code': '',
\t\t\t\t\t\t'name': '',
\t\t\t\t\t},
\t\t\t\t\t'factory': {
\t\t\t\t\t\t'name': 'Apex Textile Printing Mills',
\t\t\t\t\t\t'address': {
\t\t\t\t\t\t\t'line1': '',
\t\t\t\t\t\t\t'line2': '',
\t\t\t\t\t\t\t'postalCode': '',
\t\t\t\t\t\t\t'town': '',
\t\t\t\t\t\t\t'formattedAddress': '',
\t\t\t\t\t\t\t'country' : {
\t\t\t\t\t\t\t\t'code': 'BD',
\t\t\t\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t\t\t}
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t},
\t\t\t\t
\t\t\t\t
\t\t\t\t'url': '\\/en_eur\\/productpage.0494992011.html'
    \t\t} ,
\t\t\t'0494992013': {
\t\t\t\t'title': 'Pima Cotton Trunks',
\t\t\t\t'name': 'Dark Blue\\/Grey',
\t\t\t\t'colorCode': '73',
\t\t\t\t'description': '<div style=\\"text-align: justify;\\">Classic trunks made from high-quality Pima cotton. The extra-long staple fibres of Pima cotton are spun into strong and colourfast yarns that yield smooth, slightly lustrous jersey fabrics. Added elastane gives a comfortable stretch to this close-fitted style.<\\/div><ul><li>Elastic waist<\\/li><li>Lined front<\\/li><li>Short legs<\\/li><li>Underwear & Loungewear > Trunks<\\/li><\\/ul><p>This product is part of the Multibuy offer. Buy 3 for \u00A320\\/\u20AC25\\/250 SEK\\/200 DKK.<\\/p>',
\t\t\t\t'atelierName': "",
\t\t\t\t'brandName': "",
\t\t\t\t'colorLoc': "Dark Blue/Grey",
\t\t\t\t'pdpLink' : 'https:\\/\\/www.arket.com\\/en_eur\\/men\\/underwear-loungewear\\/product.pima-cotton-trunks-blue.0494992013.html',
\t\t\t\t'originCountry': "Bangladesh",
\t\t\t\t
\t\t\t\t'variants' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992013002',
\t\t\t\t\t\t'sizeCode' : '002',
\t\t\t\t\t\t'sizeName' : 'S',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992013003',
\t\t\t\t\t\t'sizeCode' : '003',
\t\t\t\t\t\t'sizeName' : 'M',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992013004',
\t\t\t\t\t\t'sizeCode' : '004',
\t\t\t\t\t\t'sizeName' : 'L',
\t\t\t\t\t} ,
\t\t\t\t\t{
\t\t\t\t\t\t'variantCode' : '0494992013005',
\t\t\t\t\t\t'sizeCode' : '005',
\t\t\t\t\t\t'sizeName' : 'XL',
\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t'perfumer' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'scent' : {
\t\t\t\t\t'name' : '',
\t\t\t\t},
\t\t\t\t
\t\t\t\t'careInstructionsImage' : [
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    },
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t    \t'thumbnail': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/style]',
\t\t\t\t\t\t\t\t\t'image': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'fullscreen': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]',
\t\t\t\t\t\t\t\t\t'zoom': '/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t\t\t    }
\t\t\t\t                           ],
\t\t\t\t
\t\t\t\t
\t\t\t\t'productFrontImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'logoImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'dataSheetImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'thumbnailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'otherImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'normalImages' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_013_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[201907021414]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_013_001],type[PRODUCT],ImageVersion[201907021414]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_013_001],type[PRODUCT],ImageVersion[201907021414]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_013_001],type[PRODUCT],ImageVersion[201907021414]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t'detailImages' : [
\t\t\t\t\t\t
\t\t\t\t],
\t\t\t\t'images':[
\t\t\t\t
\t\t\t\t],
\t\t\t\t'vAssets' : [
\t\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'thumbnail': '//lp.arket.com/app006prod?set=source[02_0494992_013_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[201907021414]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'image': 'set=source[02_0494992_013_001],type[PRODUCT],ImageVersion[201907021414]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'fullscreen': 'set=source[02_0494992_013_001],type[PRODUCT],ImageVersion[201907021414]&call=url[file:/product/dynamic.chain]',
\t\t\t\t\t\t\t'zoom': 'set=source[02_0494992_013_001],type[PRODUCT],ImageVersion[201907021414]&call=url[file:/product/dynamic.chain]&zoom=zoom'
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t\t
\t\t\t\t\t\t'price': '€10',
\t\t\t\t\t\t'priceOriginal': false,
\t\t\t\t\t\t'priceValue': '10.0',
\t\t\t\t\t\t'priceSaleValue': null,
\t\t\t\t\t
\t                'promoMarkerUrl': '//www.monki.com/',
\t\t\t\t\t'promoMarkerAlt': '',
\t\t\t\t\t'promoMarkerText': 'MULTIBUY',
\t                'promoMarkerLegalText': '',
\t                'promoMarkerLabelText': '',
\t                'promoMarkerStyle': 'color: #000000; background-color: #FFFFFF; border-radius: 0px;',
\t\t\t\t
                'compositions': [
\t\t\t\t\t
                    {
                    'compositionType' : '',
                    'materials' : [
\t\t\t\t\t\t\t
                    \t\t\t'Pima cotton 95.00',
                    \t\t\t'Elastane 5.00'
                \t\t],
                    } ,
                ],

\t\t\t\t'careInstructions': [
\t\t\t\t
\t\t\t\t        'Iron at low temperature'/
\t\t\t\t        'Tumble dry at medium temperature'/
\t\t\t\t        'Wash at or below 60\u00B0C'/
\t\t\t\t        'Dry clean any solvent except tetrachloroethylene'
\t            ],
\t\t\t\t
\t\t\t\t'countryOfOrigin': {
\t\t\t\t\t'code': 'BD',
\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t'link': '',
\t\t\t\t\t'text': '',
\t\t\t\t\t'supplier': 'Apex Textile Printing Mills',
\t\t\t\t\t'image': {
\t\t\t\t\t\t'src': '/medias/Bangladesh.png?context=cDExfGltYWdlc3wxMTg3OTl8aW1hZ2UvcG5nfGltYWdlcy9oZGIvaDYxLzg4MDM5MjU1MjQ1MTAucG5nfGZhNWE3Y2UzZjA2ZmZkNTczYmQ0ZTQ0ZjE3ODlhYmM5MDMzYTc2OTJlYmJlZjgzZWYwNTJiNTljMDlmNWU5MDE&storeId=p11-europe',
\t\t\t\t\t\t'alt': 'Bangladesh.png',
\t\t\t\t\t},
\t\t\t\t\t'region': {
\t\t\t\t\t\t'code': '',
\t\t\t\t\t\t'name': '',
\t\t\t\t\t},
\t\t\t\t\t'factory': {
\t\t\t\t\t\t'name': 'Apex Textile Printing Mills',
\t\t\t\t\t\t'address': {
\t\t\t\t\t\t\t'line1': '',
\t\t\t\t\t\t\t'line2': '',
\t\t\t\t\t\t\t'postalCode': '',
\t\t\t\t\t\t\t'town': '',
\t\t\t\t\t\t\t'formattedAddress': '',
\t\t\t\t\t\t\t'country' : {
\t\t\t\t\t\t\t\t'code': 'BD',
\t\t\t\t\t\t\t\t'name': 'Bangladesh',
\t\t\t\t\t\t\t}
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t},
\t\t\t\t
\t\t\t\t
\t\t\t\t'url': '\\/en_eur\\/productpage.0494992013.html'
    \t\t}
    };
</script><div class="center-panel">
\t<input type="hidden" id="toggling-enabled" value="true"/>
\t<div class="o-product-gallery-main">
\t\t    <div class="main-image-wrapper">
\t\t    \t<div id="images" class="image-gallery">
\t\t\t\t    <div id="product-gallery" data-component="OProductGallery" class="o-product-gallery">    \t
\t\t\t\t   \t\t<div data-component="OLazyLoad" class="o-lazy-load">
\t\t\t\t\t    \t\t<div class="spinner"></div>
\t\t\t\t\t    \t</div>
\t\t\t\t\t    <div data-component="OZoomSlider" data-slides-desktop="1" data-slides-tablet="1" data-slides-mobile="1" class="o-zoom-slider pdp-slider">
\t\t\t\t            <div class="a-heading-2 slider-title u-align-center"></div>
\t\t\t\t            <div class="slider" id="imageContainer">
\t\t\t\t            \t<div data-component="APicture" class="a-picture placeholder-wrapper">
\t\t\t\t\t\t\t            \t\t<img
\t\t\t\t\t\t\t            \t\t\talt="Model front image of Arket pima cotton trunks in black"
\t\t\t\t\t\t\t            \t\t\tclass="a-image is-hidden Resolve"
\t\t\t\t\t\t\t            \t\t\tsrc="//lp2.hm.com/hmgoepprod?blank=width[2],height[3],color[none]&sink=format[gif]"
\t\t\t\t\t\t\t            \t\t\tdata-resolvewidth="2"
\t\t\t\t\t\t\t            \t\t\tdata-resolveheight="3"
\t\t\t\t\t\t\t            \t\t\tdata-resolvechain="set=source[01_0494992_001_014],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]"
\t\t\t\t\t\t\t            \t\t\tdata-large-src="set=source[01_0494992_001_014],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]"
\t\t\t\t\t\t\t            \t\t\tdata-thumbnail-src="set=source[01_0494992_001_014],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]"
\t\t\t\t\t\t\t            \t\t\tdata-zoom-src="set=source[01_0494992_001_014],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]" />
\t\t\t\t\t\t\t            \t</div>
\t\t\t\t\t\t            \t<div data-component="APicture" class="a-picture placeholder-wrapper">
\t\t\t\t\t\t\t            \t\t<img
\t\t\t\t\t\t\t            \t\t\talt="Model side image of Arket pima cotton trunks in black"
\t\t\t\t\t\t\t            \t\t\tclass="a-image is-hidden Resolve"
\t\t\t\t\t\t\t            \t\t\tsrc="//lp2.hm.com/hmgoepprod?blank=width[2],height[3],color[none]&sink=format[gif]"
\t\t\t\t\t\t\t            \t\t\tdata-resolvewidth="2"
\t\t\t\t\t\t\t            \t\t\tdata-resolveheight="3"
\t\t\t\t\t\t\t            \t\t\tdata-resolvechain="set=source[01_0494992_001_031],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]"
\t\t\t\t\t\t\t            \t\t\tdata-large-src="set=source[01_0494992_001_031],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]"
\t\t\t\t\t\t\t            \t\t\tdata-thumbnail-src="set=source[01_0494992_001_031],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]"
\t\t\t\t\t\t\t            \t\t\tdata-zoom-src="set=source[01_0494992_001_031],type[ECOMLOOK],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]" />
\t\t\t\t\t\t\t            \t</div>
\t\t\t\t\t\t            \t<div data-component="APicture" class="a-picture placeholder-wrapper">
\t\t\t\t\t\t\t            \t\t<img
\t\t\t\t\t\t\t            \t\t\talt="Front image of Arket pima cotton trunks in black"
\t\t\t\t\t\t\t            \t\t\tclass="a-image is-hidden Resolve"
\t\t\t\t\t\t\t            \t\t\tsrc="//lp2.hm.com/hmgoepprod?blank=width[2],height[3],color[none]&sink=format[gif]"
\t\t\t\t\t\t\t            \t\t\tdata-resolvewidth="2"
\t\t\t\t\t\t\t            \t\t\tdata-resolveheight="3"
\t\t\t\t\t\t\t            \t\t\tdata-resolvechain="set=source[02_0494992_001_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]"
\t\t\t\t\t\t\t            \t\t\tdata-large-src="set=source[02_0494992_001_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]"
\t\t\t\t\t\t\t            \t\t\tdata-thumbnail-src="set=source[02_0494992_001_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]"
\t\t\t\t\t\t\t            \t\t\tdata-zoom-src="set=source[02_0494992_001_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]" />
\t\t\t\t\t\t\t            \t</div>
\t\t\t\t\t\t            \t<div data-component="APicture" class="a-picture placeholder-wrapper">
\t\t\t\t\t\t\t            \t\t<img
\t\t\t\t\t\t\t            \t\t\talt="Detailed image of Arket pima cotton trunks in black"
\t\t\t\t\t\t\t            \t\t\tclass="a-image is-hidden Resolve"
\t\t\t\t\t\t\t            \t\t\tsrc="//lp2.hm.com/hmgoepprod?blank=width[2],height[3],color[none]&sink=format[gif]"
\t\t\t\t\t\t\t            \t\t\tdata-resolvewidth="2"
\t\t\t\t\t\t\t            \t\t\tdata-resolveheight="3"
\t\t\t\t\t\t\t            \t\t\tdata-resolvechain="set=source[03_0494992_001_059],type[DETAIL],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]"
\t\t\t\t\t\t\t            \t\t\tdata-large-src="set=source[03_0494992_001_059],type[DETAIL],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]"
\t\t\t\t\t\t\t            \t\t\tdata-thumbnail-src="set=source[03_0494992_001_059],type[DETAIL],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]"
\t\t\t\t\t\t\t            \t\t\tdata-zoom-src="set=source[03_0494992_001_059],type[DETAIL],ImageVersion[2018081]&call=url[file:/product/dynamic.chain]" />
\t\t\t\t\t\t\t            \t</div>
\t\t\t\t\t\t            \t</div>
\t\t\t\t            <span class="image-counter"></span>
\t\t\t\t        </div>
\t\t\t\t    </div>
\t\t\t\t    <style>
    .o-shown-with .a-tooltip .o-product{
        float:left;
    }
</style></div>
\t\t    </div>
\t\t</div>
\t  <!-- pdp details -->
\t<div class="producttile-details" hidden>
\t\t\t<span class="baseProductCode"></span>
\t\t\t\t<span class="productCategory">com.accenture.hm.aem.integration.product.ProductCategory@2f8f88fc</span>
\t\t\t\t<span class="price">10.0</span>
\t\t\t\t<span class="originalPrice">10.0</span>
\t\t\t\t<span class="articleCode">0494992001</span>
\t\t\t\t<span class="brandName">[]</span>
\t\t\t\t<span class="productName">Pima Cotton Trunks</span>
\t\t\t\t<span class="colorName">Black</span>
\t\t\t\t<span class="colorLoc">Black</span>
\t\t\t\t<span class="atelierName">[]</span>
\t\t\t\t<span class="originCountry">Bangladesh</span>
\t\t\t</div>
\t
</div>

<!-- OAD Set -->
<div class="left-panel">
    <div data-component="OProductDetailsSelection" class="o-product-details-selection">
    \t<div class="markers-container">
    \t\t<div data-component="MProductMarkers" class="m-product-marker promo-marker-wrapper" id="productMarkers" >
\t\t\t\t\t<div class="marker-text promo-marker" style="color: #000000; background-color: #FFFFFF; border-radius: 0px;">
\t    \t\t\t \t\t<span>MULTIBUY</span>
\t    \t\t\t \t\t</div>
                    </div>
    \t\t</div>
        <div class="product-name-price-wrapper">
            <h1 class="a-heading-3">
                <span id="productTitle">Pima Cotton Trunks</span>
            </h1>
            <div class="m-product-price" id="product-price">
                <span id="productPrice" class="is-regular">€10</span>
\t</div>
        </div>
        <div class="product-size-wrapper" id="sizesDropdown">
            \t\t<div data-component="MDropdown" class="m-dropdown">
                \t\t<button type="button" class="a-button-nostyle placeholder i18n" id="labelSize">Choose size</button><button type="button" class="a-button-nostyle a-icon-close"></button><input name="selectSize" class="js-input"/><span class="a-icon-arrow-down-small"></span>
                    \t<ul class="list-wrapper">
                    \t\t<li>
                        \t\t<ul class="options" id="size">
                            \t<li id="size_0494992001" class="a-option" data-value="S" data-code="0494992001002" >S</li>
                            \t<li id="size_0494992001" class="a-option" data-value="M" data-code="0494992001003" >M</li>
                            \t<li id="size_0494992001" class="a-option" data-value="L" data-code="0494992001004" >L</li>
                            \t<li id="size_0494992001" class="a-option" data-value="XL" data-code="0494992001005" >XL</li>
                            \t</ul>
\t\t\t\t\t\t\t\t<ul class="bottom-option">
                \t\t\t\t\t<li class="i18n">Cancel</li>
            \t\t\t\t\t</ul>
            \t\t\t\t</li>
                    \t</ul>
               \t\t</div>
                \t<a href="#" target="_self" class="a-link size-guide-link open-lightbox i18n" data-template="size-guide-template" data-classes="is-large">Size Guide</a>
            \t</div>
            <button class="a-button add-to-cart" data-text-default="ADD TO BAG" data-text-disabled="CHOOSE SIZE FIRST" id="addtocart" data-out-of-stock='OUT OF STOCK' data-coming-soon='COMING SOON' data-discontinued='ARCHIVED ITEM'>
\t\t<span class="i18n">ADD TO BAG</span>
        </button>
        </div>

    <div class="trail instore parbase"><div data-component="OAvailability" class="o-availability ">
\t<h6 class="a-heading-6 i18n">Availability</h6>
\t<div class="o-availability-content">
\t\t<button type="button" class="a-button-nostyle online-label availability-label">
\t    \t<span class="a-svg-package">
\t        \t<svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 30 35" id="package" y="103">
\t            \t<path d="M15 1L1 9.113V25.33l14 8.112 14-8.11V9.11L15 1zm.037 15.07l-4.516-2.623L21.487 7.07l4.528 2.625-10.977 6.375zm4.457-10.154L8.53 12.292l-4.508-2.62L15 3.313l4.494 2.604zM3 11.393l11 6.388v12.772L3 24.178V11.393zM16 30.55V17.824l11-6.388v12.743L16 30.55z" fill="#231f20"></path>
\t        \t</svg>
\t    \t</span>
\t    \t<span class="i18n">Online</span>
\t    </button>
\t   \t<div class="a-tooltip has-animation">
\t   \t\t<h6 class="a-heading-6 i18n">Online availability</h6>
\t       \t<p class="a-paragraph" id="online-stock-par"></p>
\t    </div>
\t</div>
\t<div class="o-availability-content">
\t    <button type="button" class="a-button-nostyle instore-label availability-label" onclick="stockStatus()">
\t    \t<span class="a-bag-icon js-a-bag-icon sm-scale">
\t        \t<span class="wrapper">
\t            \t<span class="handle"></span>
\t            \t<span class="quantity"></span>
\t        \t</span>
\t    \t</span>
\t    \t<span class="i18n">In Store</span>
\t    </button>
\t\t<div id="dataStoreCountry" class="a-tooltip has-animation">
\t    \t<a href="#" target="_self" class="a-link open-lightbox other-countries i18n" data-template="other-countries" data-classes="is-large">Other countries</a>
\t    </div>
\t</div>
</div></div>
<div data-component="OProductAttributes" class="o-product-attributes">
\t<div class="attributes-top">
            <div class="id-el">
                <span class="pdp-label i18n">ID </span>
                <span class="pdp-value for-highlight">
                    <!-- Check p11 article code -->
                    <span class="dep">1</span><span class="typ">10</span><span class="prod">006</span><span class="spacer">-</span><span class="mat">262</span></span>
            </div>
            <div data-highlight="dep" class="department-el hover-attr">
                <span class="pdp-label i18n">Department</span>
                <span class="pdp-value">Men</span>
            </div>
            <div data-highlight="typ" class="type-el hover-attr">
                <span class="pdp-label i18n">Type</span>
                <span class="pdp-value">Underwear</span>
            </div>
            <div data-highlight="dep typ prod" class="product-el hover-attr">
                <span class="pdp-label i18n">Product</span>
                <span class="pdp-value">Pima Cotton Trunks</span>
            </div>
            <div data-highlight="mat" class="material-el hover-attr">
                    <div data-component="OAccordion" class="o-accordion pdp" data-exclusive="true" data-exclusive-group="pdpPage">
                        <div class="accordion-header">
                            <a href="#" target="_self" class="a-link accordion-title js-accordion-toggle">
                                <span class="pdp-label i18n">Material </span>
                                <span class="pdp-value">
                                        Pima stretch</span>
                            </a>
                        </div>
                        <div class="accordion-content">
                        \t<div class="accordion-inner-content">
                            <div data-component="MSwatches" class="m-swatches swatch-panel-container with-animation">
                                <div class="a-link-swatch selected">
                                    <a href="https://www.arket.com/en_eur/men/underwear-loungewear/product.pima-cotton-trunks-black.0494992001.html" target="_self" class="a-link">
                                        <img class="a-image" src="/medias/262-Pima-stretch.png?context=cDExfHJvb3R8NzgyOTd8aW1hZ2UvcG5nfGgwZS9oZDYvODgwNzIzNDMzODg0Ni5wbmd8N2QyNWVkNTcwNzhkYmY3ZDk4ZTFhYThiMzYzYzY3MWRiYmI1OTBhYzFjMTFlZTAyMTM3YzI5MzQxNjk1MTkyMw&storeId=p11-europe" alt="Pima stretch">
                                        <span class="a-swatch-title">Pima stretch</span>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="color-el hover-attr">
                <div data-component="OAccordion" class="o-accordion pdp" data-exclusive="true" data-exclusive-group="pdpPage">
                    <div class="accordion-header">
                        <a href="#" target="_self" class="a-link accordion-title js-accordion-toggle">
                            <span class="pdp-label i18n">Color</span>
                                    <span id="colorArticleValue" class="pdp-value">Black</span>
                                </a>
                    </div>
                    <div class="accordion-content">
                        <div id="MSwatches" data-component="MSwatches" class="m-swatches color-panel-container with-animation">
                            <div data-id="swatchP_0494992001" id="swatchP_0494992001" class="a-swatch js-swatch is-selected">
\t                                <input type="radio">
\t                                <button id="swatchButton" type="button" class="a-button-nostyle">
\t                                \t<span class="a-swatch-foreground"></span>
                                        <img data-id="swatchImg_0494992001" class="a-image" data-articlecode="0494992001" src="//lp.arket.com/app006prod?set=source[04_0494992_001_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in black">
                                        <span class="sold-out i18n">Sold out</span>
                                    </button>
                                    <p class="a-paragraph swatch-title">Black</p>
                                        <p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div>
                            <div data-id="swatchP_0494992002" id="swatchP_0494992002" class="a-swatch js-swatch ">
\t                                <input type="radio">
\t                                <button id="swatchButton" type="button" class="a-button-nostyle">
\t                                \t<span class="a-swatch-foreground"></span>
                                        <img data-id="swatchImg_0494992002" class="a-image" data-articlecode="0494992002" src="//lp.arket.com/app006prod?set=source[04_0494992_002_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in white">
                                        <span class="sold-out i18n">Sold out</span>
                                    </button>
                                    <p class="a-paragraph swatch-title">White</p>
                                        <p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div>
                            <div data-id="swatchP_0494992003" id="swatchP_0494992003" class="a-swatch js-swatch ">
\t                                <input type="radio">
\t                                <button id="swatchButton" type="button" class="a-button-nostyle">
\t                                \t<span class="a-swatch-foreground"></span>
                                        <img data-id="swatchImg_0494992003" class="a-image" data-articlecode="0494992003" src="//lp.arket.com/app006prod?set=source[04_0494992_003_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2018083]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in grey">
                                        <span class="sold-out i18n">Sold out</span>
                                    </button>
                                    <p class="a-paragraph swatch-title">Grey Melange</p>
                                        <p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div>
                            <div data-id="swatchP_0494992004" id="swatchP_0494992004" class="a-swatch js-swatch ">
\t                                <input type="radio">
\t                                <button id="swatchButton" type="button" class="a-button-nostyle">
\t                                \t<span class="a-swatch-foreground"></span>
                                        <img data-id="swatchImg_0494992004" class="a-image" data-articlecode="0494992004" src="//lp.arket.com/app006prod?set=source[04_0494992_004_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2018083]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in blue">
                                        <span class="sold-out i18n">Sold out</span>
                                    </button>
                                    <p class="a-paragraph swatch-title">Dark Blue</p>
                                        <p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div>
                            <div data-id="swatchP_0494992005" id="swatchP_0494992005" class="a-swatch js-swatch ">
\t                                <input type="radio">
\t                                <button id="swatchButton" type="button" class="a-button-nostyle">
\t                                \t<span class="a-swatch-foreground"></span>
                                        <img data-id="swatchImg_0494992005" class="a-image" data-articlecode="0494992005" src="//lp.arket.com/app006prod?set=source[04_0494992_005_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in green">
                                        <span class="sold-out i18n">Sold out</span>
                                    </button>
                                    <p class="a-paragraph swatch-title">Khaki Green</p>
                                        <p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div>
                            <div data-id="swatchP_0494992006" id="swatchP_0494992006" class="a-swatch js-swatch ">
\t                                <input type="radio">
\t                                <button id="swatchButton" type="button" class="a-button-nostyle">
\t                                \t<span class="a-swatch-foreground"></span>
                                        <img data-id="swatchImg_0494992006" class="a-image" data-articlecode="0494992006" src="//lp.arket.com/app006prod?set=source[04_0494992_006_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in blue">
                                        <span class="sold-out i18n">Sold out</span>
                                    </button>
                                    <p class="a-paragraph swatch-title">Dark Blue</p>
                                        <p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div>
                            <div data-id="swatchP_0494992011" id="swatchP_0494992011" class="a-swatch js-swatch ">
\t                                <input type="radio">
\t                                <button id="swatchButton" type="button" class="a-button-nostyle">
\t                                \t<span class="a-swatch-foreground"></span>
                                        <img data-id="swatchImg_0494992011" class="a-image" data-articlecode="0494992011" src="//lp.arket.com/app006prod?set=source[04_0494992_011_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in grey">
                                        <span class="sold-out i18n">Sold out</span>
                                    </button>
                                    <p class="a-paragraph swatch-title">Dark Grey</p>
                                        <p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div>
                            <div data-id="swatchP_0494992013" id="swatchP_0494992013" class="a-swatch js-swatch ">
\t                                <input type="radio">
\t                                <button id="swatchButton" type="button" class="a-button-nostyle">
\t                                \t<span class="a-swatch-foreground"></span>
                                        <img data-id="swatchImg_0494992013" class="a-image" data-articlecode="0494992013" src="//lp.arket.com/app006prod?set=source[04_0494992_013_1],type[FABRICSWATCH],device[],quality[80],ImageVersion[201909140737]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in blue">
                                        <span class="sold-out i18n">Sold out</span>
                                    </button>
                                    <p class="a-paragraph swatch-title">Dark Blue/Grey</p>
                                        <p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="made-in-el" id="made-in">
                <div data-component="OAccordion" class="o-accordion pdp align-left full-width" data-exclusive="true" data-exclusive-group="pdpPage">
                    <div class="accordion-header">
                        <a href="#" target="_self" class="a-link accordion-title js-accordion-toggle">
                            <span class="pdp-value" id="made-in-title i18n">Made in Bangladesh</span>
                        </a>
                    </div>
                    <div class="accordion-content">
                    <div class="accordion-inner-content">
                        <div class="m-made-in">
                        \t<img class="a-image" src="/medias/Bangladesh.png?context=cDExfGltYWdlc3wxMTg3OTl8aW1hZ2UvcG5nfGltYWdlcy9oZGIvaDYxLzg4MDM5MjU1MjQ1MTAucG5nfGZhNWE3Y2UzZjA2ZmZkNTczYmQ0ZTQ0ZjE3ODlhYmM5MDMzYTc2OTJlYmJlZjgzZWYwNTJiNTljMDlmNWU5MDE&storeId=p11-europe" id="made-in-image">
    \t\t\t\t\t\t<div class="made-in-content made-in" id="made-in-content">
        \t\t\t\t\t\t<span class="pdp-label i18n">Made in</span>
        \t\t\t\t\t\t<div class="made-in-value">
           \t\t \t\t\t\t\t<span id="made-in-region-name">Bangladesh</span>
           \t\t \t\t\t\t\t</div>
    \t\t\t\t\t\t</div>
    \t\t\t\t\t\t<div class="made-in-content supplier" id="made-in-supplier">
        \t\t\t\t\t\t\t<span class="pdp-label i18n">Supplier</span>
        \t\t\t\t\t\t\t<div class="made-in-value">
            \t\t\t\t\t\t\t<span>Apex Textile Printing Mills</span>
        \t\t\t\t\t\t\t</div>
    \t\t\t\t\t\t\t</div>
    \t\t\t\t\t\t<div class="made-in-content factory" id="made-in-factory">
        \t\t\t\t\t\t\t<span class="pdp-label i18n">Factory</span>
        \t\t\t\t\t\t\t<div class="made-in-value">
            \t\t\t\t\t\t\t<span>Apex Textile Printing Mills</span>
            \t\t\t\t\t\t\t<div class="address">
                \t\t\t\t\t\t\t<p class="a-paragraph"></p>
                                            <p class="a-paragraph">, Bangladesh</p>
            \t\t\t\t\t\t\t</div>
        \t\t\t\t\t\t\t</div>
    \t\t\t\t\t\t\t</div>
    \t\t\t\t\t\t<p class="is-richtext a-paragraph made-in-information"></p>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
                    </div>
                </div>
            </div>
        <div class="care-el">
                <div data-component="OAccordion" class="o-accordion pdp full-width" data-exclusive="true" data-exclusive-group="pdpPage">
                    <div class="accordion-header">
                        <a href="#" target="_self" class="a-link accordion-title js-accordion-toggle">
                            <span class="pdp-value i18n">Care Instructions</span>
                        </a>
                    </div>
                    <div class="accordion-content">
                        <div class="m-care-instructions">
                            <img class="a-image" src="/medias/care-iron-low.png?context=cDExfGltYWdlc3wxODI1fGltYWdlL3BuZ3xpbWFnZXMvaGI5L2hhNC84ODAzMDQ3Mzc0ODc4LnBuZ3w3YjhiYzdkMjA4MTVjZjA3NzQ0ZjFkOTc1ZjMyMTM0MmYzZDU4YzIyNDE0MDYxOWVkOGE4YjY5NzQyNjU4YzBh&storeId=p11-europe" alt="care-iron-steam-dry-low-heat.png">
                            <img class="a-image" src="/medias/care-tumble-drying-normal.png?context=cDExfGltYWdlc3wyMDA5fGltYWdlL3BuZ3xpbWFnZXMvaDEyL2g3ZS84ODAzMDQ4MDk1Nzc0LnBuZ3w1N2MwZTk4ZTQ0MTQzNzVkNGM4ZmZmYzcwNTIzOTVkYjZjM2QxMmQ3NDI3NDkzMzQyODIwN2U0MzdhYjUzNWVl&storeId=p11-europe" alt="care-tumble-drying-normal.png">
                            <img class="a-image" src="/medias/care-wash-60.png?context=cDExfGltYWdlc3wzNTU3fGltYWdlL3BuZ3xpbWFnZXMvaDdlL2hmZi84ODAzMDQ4Njg1NTk4LnBuZ3xjZmZiZjM1YTZlNWNjNjljYzFjNjQ5ZDZhOWRlNThiNmMxYWQ3NmYyNDBmZjc3MzBmZGQyYTQwZTY0MTg1Y2Nk&storeId=p11-europe" alt="care-wash-60.png">
                            <p class="a-paragraph" id="careDetail">
                                Iron at low temperature,
                                        Tumble dry at medium temperature,
                                        Wash at or below 60°C,
                                        Dry clean any solvent except tetrachloroethylene.
                                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
\t<div class="attributes-bottom">
        <div class="description-container">
            <p class="a-paragraph" id="product-description"></p>
        </div>

        <div class="list-container">
            <ul id="details-list" class="list-elements">
                <li class="list-desc">
                        <span class="text">
                                </span>
                        </li>
                    </ul>
        </div>
          <div class="m-hazmat bg-transparent">
            \t<img class="a-image hazmat-image" src=""><span class="hazmat-label"></span>
  \t\t\t</div>
\t\t\t<div class="share-container">
            <span class="i18n">Share</span>
            \t<div class="a-tooltip has-animation">
    <h4 class="a-heading-4 i18n">SHARE VIA</h4>
    <div class="o-share-custom">
        <div class="o-share-custom">
            <a href="https://www.facebook.com/sharer/sharer.php?s=100" target="_blank" class="a-link i18n" data-build-url="facebook">Facebook</a>
            </div>
    </div>
</div>
\t    </div>
\t</div>
</div>
</div>
<div class="right-panel"><div class="swatch-container color-swatch-container">
   <div data-component="MSwatches" class="m-swatches swatch-panel-container colors"><h4 class="a-heading-4 i18n">Colors</h4><div data-id="swatch_0494992001" id="swatch_0494992001" class="a-swatch js-swatch is-selected"><label id="swatchLabel" class="a-label js-a-label"><input type="radio"><span><div class="a-swatch-foreground"></div><img class="a-image" data-articlecode="0494992001" src="//lp.arket.com/app006prod?set=source[04_0494992_001_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in black" onclick="trackProductVariant(this);"><p class="sold-out i18n">Sold out</p><p class="a-paragraph swatch-title" data-articlecode="0494992001">Black</p></span></label><p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div><div data-id="swatch_0494992002" id="swatch_0494992002" class="a-swatch js-swatch "><label id="swatchLabel" class="a-label js-a-label"><input type="radio"><span><div class="a-swatch-foreground"></div><img class="a-image" data-articlecode="0494992002" src="//lp.arket.com/app006prod?set=source[04_0494992_002_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in white" onclick="trackProductVariant(this);"><p class="sold-out i18n">Sold out</p><p class="a-paragraph swatch-title" data-articlecode="0494992002">White</p></span></label><p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div><div data-id="swatch_0494992003" id="swatch_0494992003" class="a-swatch js-swatch "><label id="swatchLabel" class="a-label js-a-label"><input type="radio"><span><div class="a-swatch-foreground"></div><img class="a-image" data-articlecode="0494992003" src="//lp.arket.com/app006prod?set=source[04_0494992_003_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2018083]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in grey" onclick="trackProductVariant(this);"><p class="sold-out i18n">Sold out</p><p class="a-paragraph swatch-title" data-articlecode="0494992003">Grey Melange</p></span></label><p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div><div data-id="swatch_0494992004" id="swatch_0494992004" class="a-swatch js-swatch "><label id="swatchLabel" class="a-label js-a-label"><input type="radio"><span><div class="a-swatch-foreground"></div><img class="a-image" data-articlecode="0494992004" src="//lp.arket.com/app006prod?set=source[04_0494992_004_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2018083]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in blue" onclick="trackProductVariant(this);"><p class="sold-out i18n">Sold out</p><p class="a-paragraph swatch-title" data-articlecode="0494992004">Dark Blue</p></span></label><p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div><div data-id="swatch_0494992005" id="swatch_0494992005" class="a-swatch js-swatch "><label id="swatchLabel" class="a-label js-a-label"><input type="radio"><span><div class="a-swatch-foreground"></div><img class="a-image" data-articlecode="0494992005" src="//lp.arket.com/app006prod?set=source[04_0494992_005_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in green" onclick="trackProductVariant(this);"><p class="sold-out i18n">Sold out</p><p class="a-paragraph swatch-title" data-articlecode="0494992005">Khaki Green</p></span></label><p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div><div data-id="swatch_0494992006" id="swatch_0494992006" class="a-swatch js-swatch "><label id="swatchLabel" class="a-label js-a-label"><input type="radio"><span><div class="a-swatch-foreground"></div><img class="a-image" data-articlecode="0494992006" src="//lp.arket.com/app006prod?set=source[04_0494992_006_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in blue" onclick="trackProductVariant(this);"><p class="sold-out i18n">Sold out</p><p class="a-paragraph swatch-title" data-articlecode="0494992006">Dark Blue</p></span></label><p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div><div data-id="swatch_0494992011" id="swatch_0494992011" class="a-swatch js-swatch "><label id="swatchLabel" class="a-label js-a-label"><input type="radio"><span><div class="a-swatch-foreground"></div><img class="a-image" data-articlecode="0494992011" src="//lp.arket.com/app006prod?set=source[04_0494992_011_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in grey" onclick="trackProductVariant(this);"><p class="sold-out i18n">Sold out</p><p class="a-paragraph swatch-title" data-articlecode="0494992011">Dark Grey</p></span></label><p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div><div data-id="swatch_0494992013" id="swatch_0494992013" class="a-swatch js-swatch "><label id="swatchLabel" class="a-label js-a-label"><input type="radio"><span><div class="a-swatch-foreground"></div><img class="a-image" data-articlecode="0494992013" src="//lp.arket.com/app006prod?set=source[04_0494992_013_1],type[FABRICSWATCH],device[],quality[80],ImageVersion[201909140737]&call=url[file:/product/main]" alt="Fabric Swatch image of Arket pima cotton trunks in blue" onclick="trackProductVariant(this);"><p class="sold-out i18n">Sold out</p><p class="a-paragraph swatch-title" data-articlecode="0494992013">Dark Blue/Grey</p></span></label><p class="a-paragraph sold-out-swatch">OUT OF STOCK</p></div></div>
   </div>

    <div class="swatch-container material-swatch-container">
           <div data-component="MSwatches" class="m-swatches swatch-panel-container">
                <h4 class="a-heading-4 i18n">Materials</h4>
                    <div class="a-link-swatch selected">
                        <a target="_self" class="a-link">
                            <img class="a-image" src="/medias/262-Pima-stretch.png?context=cDExfHJvb3R8NzgyOTd8aW1hZ2UvcG5nfGgwZS9oZDYvODgwNzIzNDMzODg0Ni5wbmd8N2QyNWVkNTcwNzhkYmY3ZDk4ZTFhYThiMzYzYzY3MWRiYmI1OTBhYzFjMTFlZTAyMTM3YzI5MzQxNjk1MTkyMw&storeId=p11-europe">
                            <span class="a-swatch-title">Pima stretch</span>
                        </a>
                    </div>
                </div>
        </div>
    <div data-component="MShippingInfo" class="m-product-shipping-info">
        <div class="info-short is-richtext" data-content="localizedTTT"><p>Free shipping until Sunday, September 29.&nbsp;</p>
<p>Always free returns</p>
</div>
        <div class="a-tooltip">
\t        <div class="is-richtext" data-content="localized"></div>
            <p><a href="#" target="_self"></a></p>
        </div>
   </div>
</div>
<div class="data-container">
\t<div data-apptusvalue="men_all"></div>
\t\t\t<div data-apptusvalue="men_underwearloungewear_all"></div>
\t<div data-type="product" data-code="110006-262" data-icon="//lp.arket.com/app006prod?set=source[02_0494992_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" data-title="Pima Cotton Trunks"></div>
</div>
<script type="text/x-handlebars-template" id="size-guide-template">
\t<div class="o-sizeguide">
\t\t </div>
</script>


</form>
</div>
\t<span class="a-smart-load">Retrieving content</span>
\t<div data-variant-number-reached="maxVariantNumberReached" data-order-lines-reached="maxOrderLinesReached" data-product-code-quick-buy="" data-component="OQuickBuy" class="o-quick-buy ">
    <form data-component="OForm" class="o-form add-to-cart" action="/someURL" method="POST" onsubmit="p11App.quickBuy.trackQBAddToCart('en_eur', '0494992001', this)">
    <div class="m-headline is-main-headline u-align-center">
        <h2 class="a-heading-2"><span class="heading-cap i18n">product</span><a href="javascript:void(0);" target="_self" class="a-link"><span class="heading-tag i18n">Order Now</span></a></h2></div>
    <div class="content">
    <div class="m-product-image">
        \t\t\t<div class="cross"></div>
        \t\t\t<div class="placeholder-wrapper">
        \t\t\t\t\t\t<img
        \t\t\t\t\t\t\tsrc="//lp2.hm.com/hmgoepprod?blank=width[2],height[3],color[none]&sink=format[gif]"
                                    data-resolvewidth="2"
         \t\t\t\t\t\t\tdata-resolveheight="3"
        \t\t\t\t\t\t\tdata-resolvechain="set=source[02_0494992_001_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]"
        \t\t\t\t\t\t\talt="Front image of Arket pima cotton trunks in black"
        \t\t\t\t\t\t\tclass="Resolve is-hidden quickshopImage">
        \t\t\t\t\t</div>
        \t\t\t\t</div>
        \t<div class="m-product-price" id="product-quickbuy">
            <span class="product-name u-ellipsis" id="productTitle"> Pima Cotton Trunks</span>
            <span class="price" id="product-price-quickbuy">€10</span>
        </div>
        <div class="size" id="sizesDropdownQuick">
        \t\t\t<div data-component="MDropdown" class="m-dropdown">
                \t\t<button type="button" class="a-button-nostyle placeholder" id="labelSizeQuick">Choose size</button><button type="button" class="a-button-nostyle a-icon-close"></button><input name="selectSize" class="js-input"/><span class="a-icon-arrow-down-small"></span>
            \t\t\t<ul class="list-wrapper">
                    \t\t<li>
                    \t\t\t<ul class="options" id="sizeQuick">
                    \t\t\t<li id="size_0494992001" class="a-option" data-value="S" data-code="0494992001002" >S</li>
                    \t\t\t<li id="size_0494992001" class="a-option" data-value="M" data-code="0494992001003" >M</li>
                    \t\t\t<li id="size_0494992001" class="a-option" data-value="L" data-code="0494992001004" >L</li>
                    \t\t\t<li id="size_0494992001" class="a-option" data-value="XL" data-code="0494992001005" >XL</li>
                    \t\t\t</ul>
  \t                 \t\t\t<ul class="bottom-option">
                \t\t\t\t\t<li class="i18n">Cancel</li>
            \t\t\t\t\t</ul>
            \t\t\t\t</li>
                \t\t</ul>
        \t\t\t</div>
                    <a href="#" target="_self" class="a-link open-lightbox i18n" data-template="size-guide-template">Size guide</a>
                        </div>
        \t<button class="a-button add-to-cart i18n" id="addtocartquick" data-text-default="ADD TO BAG" data-text-disabled="CHOOSE SIZE FIRST"><span>ADD TO BAG</span></button>
        </div>
    </form>
</div>
<script>
$('#sizeQuick').click(function(e) {
\tvar size = e.target.textContent;
\tif(window.location.href.endsWith('cart') || window.location.href.endsWith('orderConfirmationPage')){
\t\tp11App.productDetails.getOnlineStockStatus(size, true);
\t}else{
\t\tp11App.productDet.getOnlineStockStatus(size, true);
\t}
});
</script>
<script>
if(window.location.href.endsWith('cart') || window.location.href.endsWith('orderConfirmationPage')){
\t$('#sizesDropdownQuick').click(function(){
\t\tp11App.productDetails.setLabels();
\t});
}
</script>

<!-- P11 PRA 1 -->
<div class="o-width wc-75 carousel">
    <span class="nodeName" hidden>jcr:content</span>
    <span class="propTitle" hidden></span>
    <div class="o-pra-component is-suggestions" data-component="OPra" data-pra-panel="product-detail-page" data-pra-locale="en_eur" data-pra-id="PRA1">
        <h2 class="a-heading-2 u-align-center is-main-heading slider-title"></h2>
        <div data-component="OSlider" id="praOSlider" class="o-slider" data-pagination="false" data-multislide="true" data-num-slides="adaptive" data-slide-width="200">
            <div class="redils">
                <div class="slide-cont">
                    <div class="slides">
                        <div class="o-product" data-filterListId="" data-filterListId1="" onclick="trackProductClick(this,'.o-product');setNotificationTicket('en_eur',this.getAttribute('data-filterListId'),this.getAttribute('data-filterListId1'))">
                            <a href="#" target="_self" class="a-link">
                                <div class="image"><div class="placeholder-wrapper"><img alt="image description" class="a-image is-hidden" src="//lp2.hm.com/hmgoepprod?blank=width[2],height[3],color[none]&amp;sink=format[gif]" data-resolvewidth="2" data-resolveheight="3"></div></div>
                                <div class="description">
                                    <div class="product-markers has-hover desktop"></div>
                                    <div class="id"><span class="i18n">Id</span><span></span></div>
                                    <div class="product"><span class="i18n">Product</span><span></span></div>
                                    <div class="product-markers">
                                        <div data-component="MProductMarkers" class="m-product-marker"></div>
                                    </div>
                                    <div class="color"><span class="i18n">Color</span><span></span></div>
                                    <div class="price"><span class="i18n">Price</span>
                                        <div class="m-product-price"><span class="is-deprecated"></span><span class="is-reduced"></span></div>
                                    </div>
                                </div>
                            </a>
\t\t\t\t\t\t\t<!-- P11 PRA 1 DETAILS -->
\t\t\t\t\t\t\t<div class="producttile-details" hidden>
\t\t\t\t\t\t\t\t<span class="articleCode"></span>
\t\t\t\t\t\t\t\t<span class="baseProductCode"></span>
\t\t\t\t\t\t\t\t<span class="productName"></span>
\t\t\t\t\t\t\t\t<span class="productCategory"></span>
\t\t\t\t\t\t\t\t<span class="currencyCode"></span>
\t\t\t\t\t\t\t\t<span class="price"></span>
\t\t\t\t\t\t\t\t<span class="originalPrice"></span>
\t\t\t\t\t\t\t\t<span class="brandName"></span>
\t\t\t\t\t\t\t\t<span class="colorLoc"></span>
\t\t\t\t\t\t\t\t<span class="atelierName"></span>
\t\t\t\t\t\t\t\t<span class="originCountry"></span>
\t\t\t\t\t\t\t</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="redils-controls">
                <div class="arrow-area arrow-area-left">
                    <button type="button" class="a-button-nostyle arrow"></button>
                </div>
                <div class="arrow-area arrow-area-right">
                    <button type="button" class="a-button-nostyle arrow"></button>
                </div>
            </div>
            <div class="pagination"></div>
        </div>
    </div>
 </div><script type="text/javascript" src="/etc/designs/appeaser/shared/head.min.js"></script>
<script type="text/javascript" src="/etc/designs/hm/clientlibs/shared.min.js"></script>
<script type="text/javascript" src="/etc/designs/appeaser/p11/clientlibs/application.min.js"></script>
<script type="text/x-handlebars-template" id="chooser-item">
        {{#each this.content}}
\t\t\t<div class="m-chooser-item {{this.type}}">
\t\t\t\t<a href="{{this.id}}" target="_self" class="a-link">
\t\t\t\t\t<img class="a-image" src="{{this.imageLink}}" alt="{{this.imageAlt}}">
\t\t\t\t\t<span class="anchor-title">{{this.anchorTitle}}</span>
\t\t\t\t</a>
\t\t\t</div>
        {{/each}}
</script>
<script>
            (function () {
            \tvar locale = hm.multiCountry.readCookieValue('HMCORP_locale');
            \tvar currencyFromCookie = hm.multiCountry.readCookieValue('HMCORP_currency');
                var userAgents = 'Googlebot'.split(','), requestFromWebCrawler = false;
                var currentUserAgent = navigator.userAgent;

                userAgents.some(function (userAgent) {
                    if (currentUserAgent.toLowerCase().indexOf(userAgent.toLowerCase()) !== -1) {
                        requestFromWebCrawler = true;
                        return true;
                    }
                });

                if (hm.multiCountry && !requestFromWebCrawler) {
                    var countryCode = hm.multiCountry.getCountryCode('HMCORP_locale'),
                            allowedCountries = 'SE,DK,NL,GB,DE,BE,AT,FI,FR,ES,PL,CZ,PT,IT,SI,IE,HU,SK,NO'.split(','),
                            redirectToEntrance = true;

                    allowedCountries.some(function (country) {
                        if (country === countryCode) {
                            redirectToEntrance = false;
                            return true;
                        }
                    });

                    if (redirectToEntrance === false) {
                        var currencyFromUrl = hm.multiCountry.getCurrencyFromContextPath('en_eur');
                        currencyFromCookie = hm.multiCountry.readCookieValue('HMCORP_currency');
                        if (typeof currencyFromCookie !== 'string' || typeof currencyFromUrl !== 'string' || currencyFromUrl.toLowerCase() !== currencyFromCookie.toLowerCase()) {
                            redirectToEntrance = true;
                        }
                    }

                    if (redirectToEntrance) {
                    \tvar georguriURL = '?goeorguri=%2Fen_eur%2Fmen%2Funderwear-loungewear%2Fproduct.pima-cotton-trunks-black.0494992001.html';
                    \tvar redirectPageURL = "";
                    \tvar en_parameter = ".en_eur.";

                    \tif (!currencyFromCookie.includes("USD")){
                        \tredirectPageURL = "/content/p11/page.countryselector."+ locale + en_parameter + currencyFromCookie+ ".jsp" + georguriURL;\t\t\t\t\t\t
                    \t} else if (currencyFromCookie.includes("USD") && locale === "en_WW"){
                    \t\ten_parameter = ".en."
                            redirectPageURL = "/content/p11/page.countryselectorGlobal."+ locale + en_parameter + currencyFromCookie+ ".jsp" + georguriURL;
                    \t}
                    \twindow.location.href = redirectPageURL;
                    }
                }
            })();
        </script>
    <script src="/etc/designs/appeaser/shared/rakuten/js/rakuten.js" defer></script>
<div id="productBodyLibs" data-add-to-cart-service-url="/en_eur/cart/add" data-article-code="0494992001" data-product="com.hm.appeaser.aem.integration.product.AppProduct@1e8c3407" hidden></div></div>
<div class="u-clearfix"></div>
<!-- Footer -->
\t\t<footer class="o-footer u-clearfix">

\t<a href="/en_eur/index.html" target="_self" class="a-link">
\t\t<div class="a-logo clear-all"><svg id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.51 70"><title>p11-logo</title><g id="Page-1"><path id="ARKET" d="M117.14,55.2c-.1-6.7-.3-14.6-9.4-17.3,7.9-1.5,13.4-6.9,13.4-17.3,0-13.4-9.8-20.6-24.4-20.6H71.14V70H80V41.6h24.2c4.8,4.1,3.8,8.5,3.8,14.2,0,4.1.5,10.1,3.9,14.2h9.9c-3.5-4-4.6-9.7-4.7-14.8ZM80.21,33.6V8.1h16.7c10.3,0,15.3,4.4,15.3,12.4s-5,13.1-15.3,13.1ZM54.5,70h9.1L38.4,0H25.2L0,70H9.1l6.5-18.1H48Zm-36-26.1L31.8,6.8,45.1,43.9ZM166.81,24.2,190.31,0h-12l-35.6,36.6V0h-8.9V70h8.9V49l17.5-18,7.7,19.4c2.5,6.2,5.6,15,9.1,19.6h9.9c-4-5.5-7.4-13.1-10.2-20.3ZM249.71,8V0H201V70h48.7V62h-39.8V38h36V30h-36V8Zm67.8-8h-58.7V8h24.9V70h8.9V8h24.9Z"></path></g></svg></div>
\t</a>

\t<ul>
\t\t<li>
\t\t\t

                        \t
                            \t<a href="/en_eur/newslettersubscribe.html" target="_self" class="a-link ">Newsletter - sign up for 10% off </a>
                        \t
                        \t

\t\t</li>
<li>
\t\t\t

                        \t
                            \t<a href="/en_eur/customer-service.html" target="_self" class="a-link ">Customer service </a>
                        \t
                        \t

\t\t</li>
<li>
\t\t\t

                        \t
                            \t<a href="/en_eur/stores.html" target="_self" class="a-link ">Stores &amp; cafés </a>
                        \t
                        \t

\t\t</li>
<li>
\t\t\t

                        \t
                            \t<a href="/en_eur/customer-service/size-guide.html" target="_self" class="a-link ">Size guide </a>
                        \t
                        \t

\t\t</li>
<li>
\t\t\t

                        \t
                            \t<a href="http://press.arket.com/" target="_blank" class="a-link ">Press </a>
                        \t
                        \t

\t\t</li>
<li>
\t\t\t

                        \t
                            \t<a href="https://career.hmgroup.com/arket" target="_self" class="a-link ">Careers </a>
                        \t
                        \t

\t\t</li>
<li>
\t\t\t

                        \t
                            \t<a href="/en_eur/affiliate.html" target="_self" class="a-link ">Affiliate </a>
                        \t
                        \t

\t\t</li>

\t
\t\t<li class="right">
\t\t\t

                        \t
                            \t<a href="/en_eur/my-account.html" target="_self" class="a-link ">My account </a>
                        \t
                        \t

\t\t</li>
<li class="right">
\t\t\t

                        \t
                            \t<a href="/en_eur/customer-service/privacy-notice.html" target="_self" class="a-link ">Privacy policy </a>
                        \t
                        \t

\t\t</li>
<li class="right">
\t\t\t

                        \t
                            \t<a id="noTransactionalClick" href="#" target="_self" data-classes="is-country-selector" data-template="country-selector" class="a-link open-lightbox">Shipping to: <span>Germany
</span></a>
                        \t
                        \t

\t\t</li>

\t</ul>
</footer>
\t
\t\t<div class="o-cookie-message">
\t\t\t
\t\t\t<div data-component="MCookieBar SiteEntryLocator" class="m-cookie-bar">
\t\t\t\t<div class="country-data" data-countries-with-local-sites="[AT,BE,CZ,DK,FI,FR,DE,HU,IE,IT,NL,NO,PL,PT,SK,SI,ES,SE,GB]" data-countries-with-delivery="[SE,DK,NL,GB,DE,BE,AT,FI,FR,ES,PL,CZ,PT,IT,SI,IE,HU,SK,NO]"></div>
\t\t\t\t<div class="cookie-wrapper">
\t\t\t\t\t<div class="is-static">
\t\t\t\t\t\t
\t\t\t\t\t</div>
\t\t\t\t\t<div class="is-richtext "><p><div style="text-align: left;">ARKET uses cookies. <a href="/en_eur/customer-service/privacy-notice/cookie.html">Read more</a></div>
&nbsp;</p></div>
\t\t\t\t</div>
\t\t\t\t\t<button type="button" class="a-button-nostyle close-click-area">
\t\t\t\t\t<span class="a-icon-close"></span>
\t\t\t\t</button>
\t\t\t\t<button class="a-button">
\t\t\t\t\t<span class="i18n">Close</span>
\t\t\t\t</button>
\t\t\t</div>
\t\t</div>
\t
\t
\t
\t\t
\t\t<div id="messageBarGlobalSellingDataStorage" data-here-text="here" data-delivery-link="#" data-shipping-location="Change location" data-shipping-message="Your shipping location is set to" data-global-selling-enabled hidden></div>
\t
<div class="jseditor"><script type="text/javascript">
function p11CustomLauncher(){

    function defer(method) {
        if (window.jQuery) {
            method();
            } else {
                setTimeout(function() { defer(method) }, 50);
            }
        }

    "use strict";var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}(function(root,factory){var pluginName="BackgroundVideo";if(typeof define==="function"&&define.amd){define([],factory(pluginName))}else if((typeof exports==="undefined"?"undefined":_typeof(exports))==="object"){module.exports=factory(pluginName)}else{root[pluginName]=factory(pluginName)}})(window||module||{},function(pluginName){var defaults={parallax:{effect:1.5},pauseVideoOnViewLoss:false,preventContextMenu:false,minimumVideoWidth:400,autoplayFallback:"",onBeforeReady:function onBeforeReady(){},onReady:function onReady(){}};var addClass=function addClass(el,className){if(el.classList){el.classList.add(className)}else{el.className+=" "+className}};var BackgroundVideo=function(){function BackgroundVideo(element,options){_classCallCheck(this,BackgroundVideo);this.element=document.querySelectorAll(element);this.options=_extends({},defaults,options);this.options.browserPrexix=this.detectBrowser();this.shimRequestAnimationFrame();this.options.has3d=this.detect3d();this.setWindowDimensions();for(var i=0;i<this.element.length;i++){this.init(this.element[i],i)}}_createClass(BackgroundVideo,[{key:"init",value:function init(element,iteration){this.el=element;this.playEvent=this.videoReadyCallback.bind(this);this.setVideoWrap(iteration);this.setVideoProperties();this.insertVideos();if(this.options&&this.options.onBeforeReady())this.options.onBeforeReady();if(this.el.readyState>3){this.videoReadyCallback()}else{this.el.addEventListener("canplaythrough",this.playEvent,false);this.el.addEventListener("canplay",this.playEvent,false)}if(this.options.preventContextMenu){this.el.addEventListener("contextmenu",function(){return false})}}},{key:"videoReadyCallback",value:function videoReadyCallback(){this.el.removeEventListener("canplaythrough",this.playEvent,false);this.el.removeEventListener("canplay",this.playEvent,false);this.options.originalVideoW=this.el.videoWidth;this.options.originalVideoH=this.el.videoHeight;this.bindEvents();this.requestTick();if(this.options&&this.options.onReady())this.options.onReady()}},{key:"bindEvents",value:function bindEvents(){this.ticking=false;if(this.options.parallax){window.addEventListener("scroll",this.requestTick.bind(this))}window.addEventListener("resize",this.requestTick.bind(this));window.addEventListener("resize",this.setWindowDimensions.bind(this))}},{key:"setWindowDimensions",value:function setWindowDimensions(){this.windowWidth=window.innerWidth;this.windowHeight=window.innerHeight}},{key:"requestTick",value:function requestTick(){if(!this.ticking){this.ticking=true;window.requestAnimationFrame(this.positionObject.bind(this))}}},{key:"positionObject",value:function positionObject(){var scrollPos=window.pageYOffset;var _scaleObject=this.scaleObject(),xPos=_scaleObject.xPos,yPos=_scaleObject.yPos;if(this.options.parallax){if(scrollPos>=0){yPos=this.calculateYPos(yPos,scrollPos)}else{yPos=this.calculateYPos(yPos,0)}}else{yPos=-yPos}var transformStyle=this.options.has3d?"translate3d("+xPos+"px, "+yPos+"px, 0)":"translate("+xPos+"px, "+yPos+"px)";this.el.style[""+this.options.browserPrexix]=transformStyle;this.el.style.transform=transformStyle;this.ticking=false}},{key:"scaleObject",value:function scaleObject(){var heightScale=this.windowWidth/this.options.originalVideoW;var widthScale=this.windowHeight/this.options.originalVideoH;var scaleFactor=void 0;this.options.bvVideoWrap.style.width=this.windowWidth+"px";this.options.bvVideoWrap.style.height=this.windowHeight+"px";scaleFactor=heightScale>widthScale?heightScale:widthScale;if(scaleFactor*this.options.originalVideoW<this.options.minimumVideoWidth){scaleFactor=this.options.minimumVideoWidth/this.options.originalVideoW}var videoWidth=scaleFactor*this.options.originalVideoW;var videoHeight=scaleFactor*this.options.originalVideoH;this.el.style.width=videoWidth+"px";this.el.style.height=videoHeight+"px";return{xPos:-parseInt((videoWidth-this.windowWidth)/2),yPos:parseInt(videoHeight-this.windowHeight)/2}}},{key:"calculateYPos",value:function calculateYPos(yPos,scrollPos){var videoPosition=parseInt(this.options.bvVideoWrap.offsetTop);var videoOffset=videoPosition-scrollPos;yPos=-(videoOffset/this.options.parallax.effect+yPos);return yPos}},{key:"setVideoWrap",value:function setVideoWrap(iteration){var wrapper=document.createElement("div");this.options.bvVideoWrapClass=this.el.className+"-wrap-"+iteration;addClass(wrapper,"bv-video-wrap");addClass(wrapper,this.options.bvVideoWrapClass);wrapper.style.position="relative";wrapper.style.overflow="hidden";wrapper.style.zIndex="10";this.el.parentNode.insertBefore(wrapper,this.el);wrapper.appendChild(this.el);this.options.bvVideoWrap=document.querySelector("."+this.options.bvVideoWrapClass)}},{key:"setVideoProperties",value:function setVideoProperties(){this.el.setAttribute("preload","metadata");this.el.setAttribute("loop","true");this.el.setAttribute("autoplay","true");this.el.style.position="absolute";this.el.style.zIndex="1";var poster=this.options.autoplayFallback;if(poster){this.el.setAttribute("poster",poster)}}},{key:"insertVideos",value:function insertVideos(){for(var i=0;i<this.options.src.length;i++){var videoTypeArr=this.options.src[i].split(".");var videoType=videoTypeArr[videoTypeArr.length-1];this.addSourceToVideo(this.options.src[i],"video/"+videoType)}}},{key:"addSourceToVideo",value:function addSourceToVideo(src,type){var source=document.createElement("source");source.src=src;source.type=type;this.el.appendChild(source)}},{key:"detectBrowser",value:function detectBrowser(){var val=navigator.userAgent.toLowerCase();var browserPrexix=void 0;if(val.indexOf("chrome")>-1||val.indexOf("safari")>-1){browserPrexix="webkitTransform"}else if(val.indexOf("firefox")>-1){browserPrexix="MozTransform"}else if(val.indexOf("MSIE")!==-1||val.indexOf("Trident/")>0){browserPrexix="msTransform"}else if(val.indexOf("Opera")>-1){browserPrexix="OTransform"}return browserPrexix}},{key:"shimRequestAnimationFrame",value:function shimRequestAnimationFrame(){var lastTime=0;var vendors=["ms","moz","webkit","o"];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[vendors[x]+"CancelAnimationFrame"]||window[vendors[x]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(callback,element){var currTime=(new Date).getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);lastTime=currTime+timeToCall;return id};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(id){clearTimeout(id)}}},{key:"detect3d",value:function detect3d(){var el=document.createElement("p"),t,has3d,transforms={WebkitTransform:"-webkit-transform",OTransform:"-o-transform",MSTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(el,document.body.lastChild);for(t in transforms){if(el.style[t]!==undefined){el.style[t]="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";has3d=window.getComputedStyle(el).getPropertyValue(transforms[t])}}el.parentNode.removeChild(el);if(has3d!==undefined){return has3d!=="none"}else{return false}}}]);return BackgroundVideo}();return BackgroundVideo});

    defer(function () {
        jQuery(function(u){
var p;
    u(document).ready(function(){
        var e=window.location.pathname,
        i=e.substring(e.lastIndexOf("/")+1).replace(".html","");
        u("body").addClass("page-"+i)
        setTimeout(function(){
            p= "page-"+i;
        },400)

        u(".departments>li>a").click(function(){
        setTimeout(function() {
            u("body").removeClass(p);
            var e=window.location.pathname,
            i=e.substring(e.lastIndexOf("/")+1).replace(".html","");
            u("body").addClass("page-"+i)
            setTimeout(function(){
                p= "page-"+i;
            },400)
        }, 1000);
        });
}),
u(document).ready(function(){if(u('.o-width[style="background-color: preloader"]').attr("id","preloader"),u("body").hasClass("page-every-day-denim")){var e="/content/dam/P11/images/campaigns/2019/denim/video/ARKET_Every-day-denim-dt-nosound.mp4",i="/content/dam/P11/images/campaigns/2019/denim/video/ARKET_Every-day-denim_m_nosound-16-9.mp4",t=u(window).width();if(768<t)var a='<div id="vid" style="opacity:0;"><video id="dvid" class="desktopVidSRC" style="width:100%;position:absolute;top:0;left:0;" src="'+e+'" autoplay loop preload muted playsinline="playsinline"></video><span id="scrollDown"><i>e</i>Scroll down</span></div>';else a='<div id="vid" class="mobileVideo" style="opacity:0;"><video class="mvid" id="dvid" style="width:100%;position:absolute;top:0;left:0;" src="'+i+'" autoplay loop preload muted playsinline="playsinline"></video><span id="scrollDown"><i>e</i>Scroll down</span></div>';if(u("#preloader").prepend(a),setTimeout(function(){u("#vid").animate({opacity:"1"})},1e3),768<t)new BackgroundVideo(".desktopVidSRC",{src:["/content/dam/P11/images/campaigns/2019/denim/video/ARKET_Every-day-denim-dt-nosound.mp4"]});else new BackgroundVideo(".mvid",{src:["/content/dam/P11/images/campaigns/2019/denim/video/ARKET_Every-day-denim_m_nosound-16-9.mp4"]});u(window).resize(function(){768<u(window).width()?(u("#vid").removeClass("mobileVideo"),u("#dvid").hasClass("desktopVidSRC")||(u("#dvid").attr("src",e),u("#dvid").addClass("desktopVidSRC"))):u("#dvid").hasClass("desktopVidSRC")&&(u("#dvid").removeClass("desktopVidSRC"),u("#vid").addClass("mobileVideo"),u("#dvid").attr("src",i))});var s,o,d,l,n,r,c,m,p,f,h,b=1;u(".o-width").each(function(){switch(u(this).attr("style")){case"background-color: img1":u(this).attr("id","image1"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),s=u("#image1").offset().top-130;break;case"background-color: img2":u(this).attr("id","image2"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),o=u("#image2").offset().top-130;break;case"background-color: img3":u(this).attr("id","image3"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),d=u("#image3").offset().top-130;break;case"background-color: img4":u(this).attr("id","image4"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),l=u("#image4").offset().top-130;break;case"background-color: img5":u(this).attr("id","image5"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),n=u("#image5").offset().top-130;break;case"background-color: img6":u(this).attr("id","image6"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),r=u("#image6").offset().top-130;break;case"background-color: img7":u(this).attr("id","image7"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),c=u("#image7").offset().top-130;break;case"background-color: img8":u(this).attr("id","image8"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),m=u("#image8").offset().top-130;break;case"background-color: img9":u(this).attr("id","image9"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),p=u("#image9").offset().top-130;break;case"background-color: denimIntro":u(this).attr("id","dintro"+b),2==b&&(f=u("#dintro"+b).offset().top-130),b++;break;case"background-color: dc":u(this).attr("id","care-repair"),u(this).removeAttr("style"),h=u("#care-repair").offset().top-130}"background-color: fixedMenu"==u(this).attr("style")&&(u(this).attr("id","fixedmenu"),u(this).removeAttr("style"))}),u(window).resize(function(){u("#fixedmenu li").unbind("click"),s=u("#image1").offset().top-130,o=u("#image2").offset().top-130,d=u("#image3").offset().top-130,l=u("#image4").offset().top-130,n=u("#image5").offset().top-130,r=u("#image6").offset().top-130,c=u("#image7").offset().top-130,m=u("#image8").offset().top-130,p=u("#image9").offset().top-130,f=u("#dintro2").offset().top-130,h=u("#care-repair").offset().top-130,u("#fixedmenu li").click(function(e){switch(e.stopPropagation(),e.preventDefault(),u(this).attr("data-liid")){case"1":u("html, body").animate({scrollTop:s+10});break;case"2":u("html, body").animate({scrollTop:o+10});break;case"3":u("html, body").animate({scrollTop:d+10});break;case"4":u("html, body").animate({scrollTop:f+10});break;case"5":u("html, body").animate({scrollTop:l+10});break;case"6":u("html, body").animate({scrollTop:n+10});break;case"7":u("html, body").animate({scrollTop:r+10});break;case"8":u("html, body").animate({scrollTop:c+10});break;case"9":u("html, body").animate({scrollTop:h+10});break;case"10":u("html, body").animate({scrollTop:m+10});break;case"11":u("html, body").animate({scrollTop:p+10})}})}),u(".every-day-denim .richtextWrapper p:first-child").click(function(){u(this).next("p").slideToggle(),u(this).parent("div").toggleClass("open")});var y=1;u("#fixedmenu li").each(function(){u(this).attr("data-liid",y),y++}),u("#fixedmenu li").click(function(e){switch(e.stopPropagation(),e.preventDefault(),u(this).attr("data-liid")){case"1":u("html, body").animate({scrollTop:s+10});break;case"2":u("html, body").animate({scrollTop:o+10});break;case"3":u("html, body").animate({scrollTop:d+10});break;case"4":u("html, body").animate({scrollTop:f+10});break;case"5":u("html, body").animate({scrollTop:l+10});break;case"6":u("html, body").animate({scrollTop:n+10});break;case"7":u("html, body").animate({scrollTop:r+10});break;case"8":u("html, body").animate({scrollTop:c+10});break;case"9":u("html, body").animate({scrollTop:h+10});break;case"10":u("html, body").animate({scrollTop:m+10});break;case"11":u("html, body").animate({scrollTop:p+10})}}),u(window).scroll(function(){var e=u(window).scrollTop();switch(!0){case s<e&&e<o:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(1)").css({"font-size":"20px"});break;case o<e&&e<d:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(2)").css({"font-size":"20px"});break;case d<e&&e<f:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(3)").css({"font-size":"20px"});break;case l<e&&e<n:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(5)").css({"font-size":"20px"});break;case n<e&&e<r:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(6)").css({"font-size":"20px"});break;case r<e&&e<c:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(7)").css({"font-size":"20px"});break;case c<e&&e<h:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(8)").css({"font-size":"20px"});break;case m<e&&e<p:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(10)").css({"font-size":"20px"});break;case p<e:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(11)").css({"font-size":"20px"});break;case f<e&&e<l:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(4)").css({"font-size":"20px"});break;case h<e&&e<m:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(9)").css({"font-size":"20px"})}s-100<e?u("#fixedmenu").addClass("show"):u("#fixedmenu").removeClass("show")})}})});
        jQuery(function(u){u(document).ready(function(){var e=window.location.pathname,i=e.substring(e.lastIndexOf("/")+1).replace(".html","");u("body").addClass("page-"+i)}),u(document).ready(function(){if(u('.o-width[style="background-color: preloader"]').attr("id","preloader"),u("body").hasClass("page-every-day-denim-c")){var e="/content/dam/P11/images/campaigns/2019/denim/video/ARKET_Every-day-denim-c-dt-nosound.mp4",i="/content/dam/P11/images/campaigns/2019/denim/video/ARKET_Every-day-denim-c_m_nosound-16-9.mp4",t=u(window).width();if(768<t)var a='<div id="vid" style="opacity:0;"><video id="dvid" class="desktopVidSRC" style="width:100%;position:absolute;top:0;left:0;" src="'+e+'" autoplay loop preload muted playsinline="playsinline"></video><span id="scrollDown"><i>e</i>Scroll down</span></div>';else a='<div id="vid" class="mobileVideo" style="opacity:0;"><video class="mvid" id="dvid" style="width:100%;position:absolute;top:0;left:0;" src="'+i+'" autoplay loop preload muted playsinline="playsinline"></video><span id="scrollDown"><i>e</i>Scroll down</span></div>';if(u("#preloader").prepend(a),setTimeout(function(){u("#vid").animate({opacity:"1"})},1e3),768<t)new BackgroundVideo(".desktopVidSRC",{src:["/content/dam/P11/images/campaigns/2019/denim/video/ARKET_Every-day-denim-c-dt-nosound.mp4"]});else new BackgroundVideo(".mvid",{src:["/content/dam/P11/images/campaigns/2019/denim/video/ARKET_Every-day-denim-c_m_nosound-16-9.mp4"]});u(window).resize(function(){768<u(window).width()?(u("#vid").removeClass("mobileVideo"),u("#dvid").hasClass("desktopVidSRC")||(u("#dvid").attr("src",e),u("#dvid").addClass("desktopVidSRC"))):u("#dvid").hasClass("desktopVidSRC")&&(u("#dvid").removeClass("desktopVidSRC"),u("#vid").addClass("mobileVideo"),u("#dvid").attr("src",i))});var s,o,d,l,n,r,c,m,p,f,h,b=1;u(".o-width").each(function(){switch(u(this).attr("style")){case"background-color: img1":u(this).attr("id","image1"),u(this).addClass("every-day-denim-c"),u(this).removeAttr("style"),s=u("#image1").offset().top-130;break;case"background-color: img2":u(this).attr("id","image2"),u(this).addClass("every-day-denim-c"),u(this).removeAttr("style"),o=u("#image2").offset().top-130;break;case"background-color: img3":u(this).attr("id","image3"),u(this).addClass("every-day-denim-c"),u(this).removeAttr("style"),d=u("#image3").offset().top-130;break;case"background-color: img4":u(this).attr("id","image4"),u(this).addClass("every-day-denim-c"),u(this).removeAttr("style"),l=u("#image4").offset().top-130;break;case"background-color: img5":u(this).attr("id","image5"),u(this).addClass("every-day-denim-c"),u(this).removeAttr("style"),n=u("#image5").offset().top-130;break;case"background-color: img6":u(this).attr("id","image6"),u(this).addClass("every-day-denim-c"),u(this).removeAttr("style"),r=u("#image6").offset().top-130;break;case"background-color: img7":u(this).attr("id","image7"),u(this).addClass("every-day-denim-c"),u(this).removeAttr("style"),c=u("#image7").offset().top-130;break;case"background-color: img8":u(this).attr("id","image8"),u(this).addClass("every-day-denim-c"),u(this).removeAttr("style"),m=u("#image8").offset().top-130;break;case"background-color: img9":u(this).attr("id","image9"),u(this).addClass("every-day-denim-c"),u(this).removeAttr("style"),p=u("#image9").offset().top-130;break;case"background-color: denimIntro":u(this).attr("id","dintro"+b),2==b&&(f=u("#dintro"+b).offset().top-130),b++;break;case"background-color: dc":u(this).attr("id","care-repair"),u(this).removeAttr("style"),h=u("#care-repair").offset().top-130}"background-color: fixedMenu"==u(this).attr("style")&&(u(this).attr("id","fixedmenu"),u(this).removeAttr("style"))}),u(window).resize(function(){u("#fixedmenu li").unbind("click"),s=u("#image1").offset().top-130,o=u("#image2").offset().top-130,d=u("#image3").offset().top-130,l=u("#image4").offset().top-130,n=u("#image5").offset().top-130,r=u("#image6").offset().top-130,c=u("#image7").offset().top-130,m=u("#image8").offset().top-130,p=u("#image9").offset().top-130,f=u("#dintro2").offset().top-130,h=u("#care-repair").offset().top-130,u("#fixedmenu li").click(function(e){switch(e.stopPropagation(),e.preventDefault(),u(this).attr("data-liid")){case"1":u("html, body").animate({scrollTop:s+10});break;case"2":u("html, body").animate({scrollTop:o+10});break;case"3":u("html, body").animate({scrollTop:d+10});break;case"4":u("html, body").animate({scrollTop:f+10});break;case"5":u("html, body").animate({scrollTop:l+10});break;case"6":u("html, body").animate({scrollTop:n+10});break;case"7":u("html, body").animate({scrollTop:r+10});break;case"8":u("html, body").animate({scrollTop:c+10});break;case"9":u("html, body").animate({scrollTop:h+10});break;case"10":u("html, body").animate({scrollTop:m+10});break;case"11":u("html, body").animate({scrollTop:p+10})}})}),u(".every-day-denim-c .richtextWrapper p:first-child").click(function(){u(this).next("p").slideToggle(),u(this).parent("div").toggleClass("open")});var y=1;u("#fixedmenu li").each(function(){u(this).attr("data-liid",y),y++}),u("#fixedmenu li").click(function(e){switch(e.stopPropagation(),e.preventDefault(),u(this).attr("data-liid")){case"1":u("html, body").animate({scrollTop:s+10});break;case"2":u("html, body").animate({scrollTop:o+10});break;case"3":u("html, body").animate({scrollTop:d+10});break;case"4":u("html, body").animate({scrollTop:f+10});break;case"5":u("html, body").animate({scrollTop:l+10});break;case"6":u("html, body").animate({scrollTop:n+10});break;case"7":u("html, body").animate({scrollTop:r+10});break;case"8":u("html, body").animate({scrollTop:c+10});break;case"9":u("html, body").animate({scrollTop:h+10});break;case"10":u("html, body").animate({scrollTop:m+10});break;case"11":u("html, body").animate({scrollTop:p+10})}}),u(window).scroll(function(){var e=u(window).scrollTop();switch(!0){case s<e&&e<o:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(1)").css({"font-size":"20px"});break;case o<e&&e<d:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(2)").css({"font-size":"20px"});break;case d<e&&e<f:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(3)").css({"font-size":"20px"});break;case l<e&&e<n:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(5)").css({"font-size":"20px"});break;case n<e&&e<r:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(6)").css({"font-size":"20px"});break;case r<e&&e<c:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(7)").css({"font-size":"20px"});break;case c<e&&e<h:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(8)").css({"font-size":"20px"});break;case m<e&&e<p:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(10)").css({"font-size":"20px"});break;case p<e:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(11)").css({"font-size":"20px"});break;case f<e&&e<l:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(4)").css({"font-size":"20px"});break;case h<e&&e<m:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(9)").css({"font-size":"20px"})}s-100<e?u("#fixedmenu").addClass("show"):u("#fixedmenu").removeClass("show")})}})});
        jQuery(function(u){u(document).ready(function(){var e=window.location.pathname,i=e.substring(e.lastIndexOf("/")+1).replace(".html","");u("body").addClass("page-"+i)}),u(document).ready(function(){if(u('.o-width[style="background-color: preloader"]').attr("id","preloader"),u("body").hasClass("page-upcycled-down")){var e="/content/dam/P11/images/campaigns/2019/denim/video/ARKET_Every-day-denim-dt-nosound.mp4",i="/content/dam/P11/images/campaigns/2019/denim/video/ARKET_Every-day-denim_m_nosound-16-9.mp4",t=u(window).width();if(768<t)var a='<div id="vid" style="opacity:0;"><video id="dvid" class="desktopVidSRC" style="width:100%;position:absolute;top:0;left:0;" src="'+e+'" autoplay loop preload muted playsinline="playsinline"></video><span id="scrollDown"><i>e</i>Scroll down</span></div>';else a='<div id="vid" class="mobileVideo" style="opacity:0;"><video class="mvid" id="dvid" style="width:100%;position:absolute;top:0;left:0;" src="'+i+'" autoplay loop preload muted playsinline="playsinline"></video><span id="scrollDown"><i>e</i>Scroll down</span></div>';if(u("#preloader").prepend(a),setTimeout(function(){u("#vid").animate({opacity:"1"})},1e3),768<t)new BackgroundVideo(".desktopVidSRC",{src:["/content/dam/P11/images/campaigns/2019/denim/video/ARKET_Every-day-denim-dt-nosound.mp4"]});else new BackgroundVideo(".mvid",{src:["/content/dam/P11/images/campaigns/2019/denim/video/ARKET_Every-day-denim_m_nosound-16-9.mp4"]});u(window).resize(function(){768<u(window).width()?(u("#vid").removeClass("mobileVideo"),u("#dvid").hasClass("desktopVidSRC")||(u("#dvid").attr("src",e),u("#dvid").addClass("desktopVidSRC"))):u("#dvid").hasClass("desktopVidSRC")&&(u("#dvid").removeClass("desktopVidSRC"),u("#vid").addClass("mobileVideo"),u("#dvid").attr("src",i))});var s,o,d,l,n,r,c,m,p,f,h,b=1;u(".o-width").each(function(){switch(u(this).attr("style")){case"background-color: img1":u(this).attr("id","image1"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),s=u("#image1").offset().top-130;break;case"background-color: img2":u(this).attr("id","image2"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),o=u("#image2").offset().top-130;break;case"background-color: img3":u(this).attr("id","image3"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),d=u("#image3").offset().top-130;break;case"background-color: img4":u(this).attr("id","image4"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),l=u("#image4").offset().top-130;break;case"background-color: img5":u(this).attr("id","image5"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),n=u("#image5").offset().top-130;break;case"background-color: img6":u(this).attr("id","image6"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),r=u("#image6").offset().top-130;break;case"background-color: img7":u(this).attr("id","image7"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),c=u("#image7").offset().top-130;break;case"background-color: img8":u(this).attr("id","image8"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),m=u("#image8").offset().top-130;break;case"background-color: img9":u(this).attr("id","image9"),u(this).addClass("every-day-denim"),u(this).removeAttr("style"),p=u("#image9").offset().top-130;break;case"background-color: denimIntro":u(this).attr("id","dintro"+b),2==b&&(f=u("#dintro"+b).offset().top-130),b++;break;case"background-color: dc":u(this).attr("id","care-repair"),u(this).removeAttr("style"),h=u("#care-repair").offset().top-130}"background-color: fixedMenu"==u(this).attr("style")&&(u(this).attr("id","fixedmenu"),u(this).removeAttr("style"))}),u(window).resize(function(){u("#fixedmenu li").unbind("click"),s=u("#image1").offset().top-130,o=u("#image2").offset().top-130,d=u("#image3").offset().top-130,l=u("#image4").offset().top-130,n=u("#image5").offset().top-130,r=u("#image6").offset().top-130,c=u("#image7").offset().top-130,m=u("#image8").offset().top-130,p=u("#image9").offset().top-130,f=u("#dintro2").offset().top-130,h=u("#care-repair").offset().top-130,u("#fixedmenu li").click(function(e){switch(e.stopPropagation(),e.preventDefault(),u(this).attr("data-liid")){case"1":u("html, body").animate({scrollTop:s+10});break;case"2":u("html, body").animate({scrollTop:o+10});break;case"3":u("html, body").animate({scrollTop:d+10});break;case"4":u("html, body").animate({scrollTop:f+10});break;case"5":u("html, body").animate({scrollTop:l+10});break;case"6":u("html, body").animate({scrollTop:n+10});break;case"7":u("html, body").animate({scrollTop:r+10});break;case"8":u("html, body").animate({scrollTop:c+10});break;case"9":u("html, body").animate({scrollTop:h+10});break;case"10":u("html, body").animate({scrollTop:m+10});break;case"11":u("html, body").animate({scrollTop:p+10})}})}),u(".every-day-denim .richtextWrapper p:first-child").click(function(){u(this).next("p").slideToggle(),u(this).parent("div").toggleClass("open")});var y=1;u("#fixedmenu li").each(function(){u(this).attr("data-liid",y),y++}),u("#fixedmenu li").click(function(e){switch(e.stopPropagation(),e.preventDefault(),u(this).attr("data-liid")){case"1":u("html, body").animate({scrollTop:s+10});break;case"2":u("html, body").animate({scrollTop:o+10});break;case"3":u("html, body").animate({scrollTop:d+10});break;case"4":u("html, body").animate({scrollTop:f+10});break;case"5":u("html, body").animate({scrollTop:l+10});break;case"6":u("html, body").animate({scrollTop:n+10});break;case"7":u("html, body").animate({scrollTop:r+10});break;case"8":u("html, body").animate({scrollTop:c+10});break;case"9":u("html, body").animate({scrollTop:h+10});break;case"10":u("html, body").animate({scrollTop:m+10});break;case"11":u("html, body").animate({scrollTop:p+10})}}),u(window).scroll(function(){var e=u(window).scrollTop();switch(!0){case s<e&&e<o:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(1)").css({"font-size":"20px"});break;case o<e&&e<d:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(2)").css({"font-size":"20px"});break;case d<e&&e<f:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(3)").css({"font-size":"20px"});break;case l<e&&e<n:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(5)").css({"font-size":"20px"});break;case n<e&&e<r:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(6)").css({"font-size":"20px"});break;case r<e&&e<c:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(7)").css({"font-size":"20px"});break;case c<e&&e<h:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(8)").css({"font-size":"20px"});break;case m<e&&e<p:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(10)").css({"font-size":"20px"});break;case p<e:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(11)").css({"font-size":"20px"});break;case f<e&&e<l:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(4)").css({"font-size":"20px"});break;case h<e&&e<m:u("#fixedmenu li").css({"font-size":"14px"}),u("#fixedmenu li:nth-child(9)").css({"font-size":"20px"})}s-100<e?u("#fixedmenu").addClass("show"):u("#fixedmenu").removeClass("show")})}})});

        jQuery(function(t){t(document).ready(function(){function o(){350<t(window).scrollTop()?t("#back-to-top").css({opacity:"1"}):t("#back-to-top").css({opacity:"0"})}setTimeout(function(){if(t(window).width()<769){t("body").append('<div id="back-to-top">d</div>'),t("#back-to-top").click(function(){return t("html, body").scrollTop(0),!1}),o(),t(window).scroll(function(){o()})}t(window).resize(function(){if(768<t(window).width())t("#back-to-top").remove();else{t("#back-to-top").length||(t("body").append('<div id="back-to-top">d</div>'),o(),t("#back-to-top").click(function(){return t("html, body").scrollTop(0),!1}))}})},2e3)})});


        jQuery(function($){
            $(document).ready(function(){

                setTimeout(function(){
                    $('.o-local-navigation').animate({
                        'opacity':'1'
                    }, 200);

                }, 900);
            });

        });

        jQuery(function($){

            $(document).ready(function(){

                var url = window.location.pathname,
                filename = url.substring(url.lastIndexOf('/')+1),
                urlVars = url.split('/'),
                pg_url = urlVars[urlVars.length - 2]

                $('body').addClass('parentpage-'+pg_url);

            });

        });

        jQuery(function($){

                $(document).ready(function(){

                $('#details-list .text').each(function(){
                    var chk = $(this).text().slice(0,1);
                    if (chk == ':') {
                        var nTxt = $(this).text().slice(1)
                        $(this).text(nTxt);
                    }
                });

                $('.open-newsletter-lightbox').click(function(e){
                    $('.o-newsletter-popup').addClass('is-visible');
                });

                });

                setTimeout(function(){
                if ($('body').hasClass('page-suits') && $('body').hassClass('parentpage-men')) {
                    $('.o-local-navigation ul li a[data-title="Suits"]').text('Suits');
                }
                }, 800);

                $(".o-width").each(function(){"background-color: text-readmore"==$(this).attr("style")&&($(this).attr("id","text-readmore"),$(this).removeAttr("style"))});var strUntrimmed=$("#text-readmore .o-text-field .a-paragraph.is-richtext").text(),str=$.trim(strUntrimmed),n=str.length;if(220<n){var nstr=str.slice(0,220),nstr2=str.slice(220);$("#text-readmore .o-text-field .a-paragraph.is-richtext").text(nstr),$("#text-readmore .o-text-field .a-paragraph.is-richtext").append('<a class="rmr" style="border: none!important;">... Read more<span style="display: none;">'+nstr2+"</span>"),$(".rmr").click(function(t){t.preventDefault(),$(this).next("span").fadeIn(),$(this).remove()})
                    $('#text-readmore').animate({ opacity: 1});
                }
                $(".o-width").each(function(){"background-color: text-readmore240"==$(this).attr("style")&&($(this).attr("id","text-readmore"),$(this).removeAttr("style"))});var strUntrimmed=$("#text-readmore240 .o-text-field .a-paragraph.is-richtext").text(),str=$.trim(strUntrimmed),n=str.length;if(220<n){var nstr=str.slice(0,220),nstr2=str.slice(220);$("#text-readmore240 .o-text-field .a-paragraph.is-richtext").text(nstr),$("#text-readmore240 .o-text-field .a-paragraph.is-richtext").append('<a class="rmr" style="border: none!important;">.. Read more<span style="display: none;">'+nstr2+"</span>"),$(".rmr").click(function(t){t.preventDefault(),$(this).next("span").fadeIn(),$(this).remove()})
                    $('#text-readmore240').animate({ opacity: 1});
                }

                    $(document).ready(function(){
                        if ( $(window).width() < 769 ){
                                    var sText = $('.m-notification-ticker li').html();
                        $('body').append('<div class="fshbar">'+sText+'</div>');
                        }
                    });


                setTimeout(function(){
                        if ($(window).width() < 631){
                            var fsheight = '56px';
                        }
                        else {
                            var fsheight = '61px'
                        }

                    $('div.o-width').each(function(){
                            if ( $(this).attr('style') == 'background-color: fixedBar' ){
                                $('.fshbar').animate({
                                    'bottom': fsheight
                                    });
                            }
                    });
                }, 450);


                if ( $(window).width() > 768  ) {
                    $(window).scroll(function(){
                        var scroll = $(window).scrollTop();
                        var wH = $(window).height();
                        if ( scroll > wH ){
                            $('.o-product-details ~ .o-quick-buy').addClass('scrollFixed').fadeIn();
                        }
                        else {
                            $('.o-product-details ~ .o-quick-buy').fadeOut();
                        }
                    })
                }

        });
        setTimeout(function(){
if ($('.o-cookie-message')) {
if ($('.cookie-wrapper > .is-static > p')) {
            var c = 0;
        if (c != 1) {
            var str = $('.cookie-wrapper > .is-static > p').html();
            var newStr = str.replace('. Change location ', '.<br>');
            $('.cookie-wrapper > .is-static > p').html(newStr);

            $('#geo-city-utils').html('<span>c</span> Change Location');
            $('.cookie-wrapper>.is-richtext>div a').html('<span>c</span> Read more.');
            $('.cookie-wrapper>.is-richtext>div a').before('<br>');
            c = 1;
    $('.o-cookie-message').animate({
    \topacity: 1
    });
        }
}
else {
    $('.o-cookie-message').animate({
    \topacity: 1
    });
}
        }
        }, 100);

        var freeReturnsAnim = function(){
            var t2 = $('.m-notification-ticker .alwaysfreereturns').text().replace('.','');
            $('.m-notification-ticker .alwaysfreereturns').remove();
            var t1 = $('.m-notification-ticker a').text().replace('.','');
            $('.m-notification-ticker a').html('<span>'+t1+'</span><span>'+t2+'</span>');
            $('.m-notification-ticker').animate({opacity: 1});
    }

    freeReturnsAnim();



\t$('.js-a-burger').click(function(){
\tvar mMenuText = $('.m-notification-ticker > li').html();
\t$('.m-static-notification-ticker .mobile-notification').html(mMenuText);
\t});

jQuery(function($){$('.o-form.search-form .a-input.search-field').attr('placeholder', '§ Search products');});


$('[style="background-color: readMore"] .headings').click(function(){
    $(this).toggleClass('open');

        $(this).siblings('.o-text-field').fadeToggle();

    var text = $(this).children('.m-headline').children('.a-heading-2').children('.heading-cap').text();
    $(this).children('.m-headline').children('.a-heading-2').children('.heading-cap').text( text == "k" ? "l" : "k");

});




/* SOLUTION TO FIX ROLLOUT PROBLEM */
setTimeout(function(){
    $('.fshbar').html('<div class="alwaysfreereturns"><p style="width:100%;font-family:arket sans;padding-top: 5px;display: inline-block!important;"><span>FREE SHIPPING ON ALL ORDERS</span></p></div>');
    $('.m-notification-ticker.is-active li.is-visible').html('<div class="alwaysfreereturns"><p style="font-family: arket sans sc;"><span>FREE SHIPPING ON ALL ORDERS</span></p></div>');
}, 1200);


        /* DEFER STOP */
    });};
</script></div>
<!-- /Footer -->
<script id="tealiumScript">initHMCookies(); initImpression(); utag_data = {product_id : ["0494992001"], product_name : ["Pima Cotton Trunks"], product_view_type : "pdp", product_category : [TealiumUtils.getProductCategory()], product_color: [TealiumUtils.getArticleColor()], product_size : [""], product_origin: [TealiumUtils.getProductOrigin()], product_variant: [TealiumUtils.getProductColorLoc()], product_atelier: [TealiumUtils.getProductAtelier()], product_brand: [TealiumUtils.getBrandNameorExternalBrandName()], product_action : "detail", product_price : [TealiumUtils.getProductPrice()], product_original_price : [TealiumUtils.getProductOriginalPrice()], product_material : [TealiumUtils.getArticleMaterial()], region_currency : TealiumUtils.getRegionCurrency(), customer_id : TealiumUtils.getCustomerData()[0], customer_email : TealiumUtils.getCustomerData()[1], customer_zip : TealiumUtils.getCustomerData()[2], customer_city : TealiumUtils.getCustomerData()[3], customer_state : TealiumUtils.getCustomerData()[4], customer_country : TealiumUtils.getCustomerData()[8], event_type: "", session_touchpoint : getTouchpoint() , session_login_status : TealiumUtils.getSessionLoginStatus(), page_id : "PRODUCT DETAIL : 0494992001 : Pima Cotton Trunks", page_type : "product page 4", category_id : "Underwear & Loungewear", category_path : TealiumUtils.getCategoryPath('true','Pima Cotton Trunks'), region_market : hm.multiCountry.getCountryCode('HMCORP_locale'), region_locale : hm.multiCountry.getLocale('HMCORP_locale','en'), content_category: TealiumUtils.getContentCategory(), content_action: TealiumUtils.getContentAction(), content_id: TealiumUtils.getContentId(), content_count: TealiumUtils.getContentCount(), list_action: '', customer_id : TealiumUtils.getCustomerData()[0], customer_email : TealiumUtils.getCustomerData()[1], customer_zip : TealiumUtils.getCustomerData()[2], customer_city : TealiumUtils.getCustomerData()[3], customer_state : TealiumUtils.getCustomerData()[4], customer_country : TealiumUtils.getCustomerData()[8], event_type: ""}; utagTealiumTrack(function(a,b,c,d){a=getTealiumURL('brands-p11');b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);});</script> <script src="/etc/designs/appeaser/p11/clientlibs/pattern-lib/frontend.min.js"></script>
\t\t<script src="/etc/designs/appeaser/p11/clientlibs/pattern-lib/controllers.min.js"></script>\t\t
\t<script type="text/javascript" src="/etc/designs/appeaser/p11/clientlibs/aem-clientlibs/global_Clientlib_PDP.min.js"></script>
<script type="text/javascript" src="/etc/designs/appeaser/p11/clientlibs/aem-clientlibs/product_Clientlib.min.js"></script>
<script>
\t$(document).ready(function() {
\t\t var appnt = '';
\t      if(appnt){
\t    \t  var querystring = window.location.href;
\t    \t  if(querystring.indexOf("?appnt") !== -1){
\t    \t\t  querystring = querystring.replace("?appnt=true", "");
\t    \t\t  window.history.replaceState(null, querystring , querystring);
\t    \t  }
\t    \t  else{
\t    \t\t  if(querystring.indexOf("&appnt") !== -1){
\t    \t\t\t  querystring = querystring.replace("&appnt=true", "");
\t    \t\t\t  window.history.replaceState(null, querystring , querystring);
\t    \t\t  }
\t    \t  }
\t    \t  $("#noTransactionalClick").trigger('click');
\t      }
\t});
</script><script type="text/javascript" >var _cf = _cf || []; _cf.push(['_setFsp', true]); _cf.push(['_setBm', true]); _cf.push(['_setAu', '/static/36b2a7ff3b9210a4046670b2c49f3d8']);</script><script type="text/javascript"  src="/static/36b2a7ff3b9210a4046670b2c49f3d8"></script></body>
</html>`,
};
