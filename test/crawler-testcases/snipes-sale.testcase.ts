/* tslint:disable:max-line-length */

import { SnipesCrawler } from '../../src/crawler/crawlers/snipes.crawler';

export const snipesSaleTestCase = {
  crawlerType: SnipesCrawler,

  url: 'https://m.snipes.com/marken/adidas.cat/yung-96-core-black-core-black-clear-mint/prod-00013801680692?device-type=mobile&st=PRODUCT',

  sizes: [{
    id: '0001380168069200000011',
    isAvailable: true,
    name: '40 2/3',
  },
    {
      id: '0001380168069200000010',
      isAvailable: true,
      name: '40',
    },
    {
      id: '0001380168069200000001',
      isAvailable: false,
      name: '41 1/3',
    },
    {
      id: '0001380168069200000004',
      isAvailable: false,
      name: '42 2/3',
    },
    {
      id: '0001380168069200000002',
      isAvailable: false,
      name: '42',
    },
    {
      id: '0001380168069200000005',
      isAvailable: true,
      name: '43 1/3',
    },
    {
      id: '0001380168069200000007',
      isAvailable: false,
      name: '44 2/3',
    },
    {
      id: '0001380168069200000006',
      isAvailable: true,
      name: '44',
    },
    {
      id: '0001380168069200000008',
      isAvailable: true,
      name: '45 1/3',
    },
    {
      id: '0001380168069200000009',
      isAvailable: true,
      name: '46',
    },
    {
      id: '0001380168069200000012',
      isAvailable: true,
      name: '47 1/3',
    },
    {
      id: '0001380168069200000013',
      isAvailable: true,
      name: '48',
    }],

  sizeChecks: [
    { size: '0001380168069200000011', isAvailable: true, isLowInStock: true },
    { size: '0001380168069200000005', isAvailable: true, isLowInStock: false },
    { size: '0001380168069200000007', isAvailable: false, isLowInStock: false },
    { size: 'sizedoesnotexist', isAvailable: false, isLowInStock: false },
  ],

  name: 'adidas YUNG-96 core black/core black/clear mint',

  priceChecks: [
    { size: '0001380168069200000011', price: 50 },
    { size: '0001380168069200000007', price: 50 },
    { size: 'unknown-size', price: 50 },
  ],

  secondResponse: {
    anyAvailableInAnyStore: true, anyAvailableOnline: true,
    variants:
      [
        { availableOnline: true, inAnyStore: true, stock2Show: 1, variantCode: '0001380168069200000011', size: '40 2\/3' },
        { availableOnline: true, inAnyStore: true, stock2Show: 1, variantCode: '0001380168069200000010', size: '40' },
        { availableOnline: false, inAnyStore: true, stock2Show: 0, variantCode: '0001380168069200000001', size: '41 1\/3' },
        { availableOnline: false, inAnyStore: true, stock2Show: 0, variantCode: '0001380168069200000004', size: '42 2\/3' },
        { availableOnline: false, inAnyStore: true, stock2Show: 0, variantCode: '0001380168069200000002', size: '42' },
        { availableOnline: true, inAnyStore: true, stock2Show: 4, variantCode: '0001380168069200000005', size: '43 1\/3' },
        { availableOnline: false, inAnyStore: true, stock2Show: 0, variantCode: '0001380168069200000007', size: '44 2\/3' },
        { availableOnline: true, inAnyStore: true, stock2Show: 0, variantCode: '0001380168069200000006', size: '44' },
        { availableOnline: true, inAnyStore: true, stock2Show: 2, variantCode: '0001380168069200000008', size: '45 1\/3' },
        { availableOnline: true, inAnyStore: true, stock2Show: 4, variantCode: '0001380168069200000009', size: '46' },
        { availableOnline: true, inAnyStore: true, stock2Show: 1, variantCode: '0001380168069200000012', size: '47 1\/3' },
        { availableOnline: true, inAnyStore: true, stock2Show: 4, variantCode: '0001380168069200000013', size: '48' }],
  },

  testResponse: `
<!DOCTYPE html>
<html>
<head>
<title>
adidas Originals YUNG-96 black Schuh bei SNIPES
</title>
<meta name="title" content="adidas Originals YUNG-96 black Schuh bei SNIPES"/>
<meta property="og:title" content="adidas Originals YUNG-96 black Schuh bei SNIPES"/>
<meta name="description" content="adidas Originals YUNG-96 core black Schuh für Herren jetzt online bei SNIPES bestellen! ✓ Versandkostenfrei schon ab 60 Euro ✓ Lieferung in 1 bis 3 Werktagen"/>
<meta property="og:description" content="adidas Originals YUNG-96 core black Schuh für Herren jetzt online bei SNIPES bestellen! ✓ Versandkostenfrei schon ab 60 Euro ✓ Lieferung in 1 bis 3 Werktagen"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta http-equiv="imagetoolbar" content="false"/>
<link rel="apple-touch-icon" href="/design/snipes/img/favicon/apple_icon.png"/>
<link rel="icon" type="image/png" href="/design/snipes/img/favicon/favicon-32x32.png" sizes="32x32"/>
<link rel="icon" type="image/png" href="/design/snipes/img/favicon/android-chrome-192x192.png" sizes="192x192"/>
<link rel="icon" type="image/png" href="/design/snipes/img/favicon/favicon-96x96.png" sizes="96x96"/>
<link rel="icon" type="image/png" href="/design/snipes/img/favicon/favicon-16x16.png" sizes="16x16"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,500,500i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i" rel="stylesheet"/>
<link rel="stylesheet" type="text/css" media="screen" href="/snipes/cms/A.extContent.styles.css.pagespeed.cf.vgGL3NCzoi.css"/>
<link rel="stylesheet" type="text/css" href="/_ui/snipes/css/reset.styles.css"/>
<link rel="stylesheet" type="text/css" href="/_ui/mobile/site-snipesSite_DE/css/de/shop.gen.css"/>
<link rel="stylesheet" type="text/css" href="/_ui/snipes/css/common.styles.css"/>
<link rel="stylesheet" type="text/css" href="/_ui/snipes/css/productdetail.styles.css"/>
<meta property="og:url" content="https://m.snipes.com/marken/adidas.cat/yung-96-core-black-core-black-clear-mint/prod-00013801680692"/>
<link rel="image_src" href="https://snipes.scene7.com/asset/snipes/external/snipes_p_detail_mobile/adidas+Originals+YUNG-+black+Schuh+bei+SNIPES--1680692_P.jpg?defaultImage=default"/>
<meta property="og:image" content="http://snipes.scene7.com/asset/snipes/external/snipes_p_detail/--1680692_P.jpg"/>
<link rel="canonical" href="https://www.snipes.com/schuhe/fashion/adidas/yung-96-core-black-core-black-clear-mint/prod-00013801680692"/>
<!-- 3005 -->
<script type="text/javascript" src="/_ui/common/base/js/external/vwo.js"></script>
<script src="/_ui/common/base/js/external/md5.js"></script>
<script type="text/javascript">window.emosTrackVersion=2;</script>
<script type="text/javascript" src="/design/snipes/shopjs/emos2.v52.7.js"></script>
<script type="text/javascript" src="/design/snipes/shopjs/econda-recommendations.v3.0.6.js"></script>
<script type="text/javascript">if(typeof(window.emosPropertiesEvent)==='undefined'){var emosPropertiesEvent=function(){if(document.location.hostname==="localhost"){console.log('%c'+'DEBUG: Tracking blocked.','color:#00c913');}}}</script>
<script src="/static/dtm/SDE/f0b6b270f0d37004a7d6995f1705ec0f43467aa4/satelliteLib-a9553f03104e93022c318584da9845a18b0b3a0f.js.pagespeed.jm.o6u_OqqMFe.js" class="mobile-js"></script>
<script type="text/javascript">var currentCart={};currentCart["total"]="0.0";currentCart["customer"]={email:"",emailMD5:""};(function(currentCart){var entries=new Array();currentCart["entries"]=entries;})(currentCart);</script>
<META NAME="ROBOTS" CONTENT="NOINDEX,FOLLOW">
<link rel="dns-prefetch" href="//snipes.scene7.com"></head>
<body class="PRODUCT_DETAIL SREB_PRODUCT_DETAIL SpringTarget_mobile_snipes_sreb17_productDetail MOBILE theme_aachen">
<!-- Start Visual Website Optimizer Asynchronous Code -->
<!-- End Visual Website Optimizer Asynchronous Code -->
<header class="header header__app_container header--static header--preloadclass" id="rebrush-header" style="position: absolute;width: 100%; padding-top:9px" data-values='{
            "shopURL": "",
            "servletContextPath": "",
            "webroot": "",
            "hasActionBanner": true,
            "actionBannerSiteID": "actionBanner",
            "preventDesktopStickyHeader": true,
            "activateRebrushCookieLaw": true,
            "logo": {
                "linkURL": "/",
                "imgURL": "/_ui/snipes/img/static/svg/snipes-logo-transparent.svg"
            },
            "search": {
                "autocompleteURL": "/autocomplete.json",
                "formAction": "/search.html",
                "searchChannel": "snipes_DE_de",
                "inputPlaceholderKey": "header_component_search_placeholder",
                "minQueryLength": 3,
                "defaultQuery": "",
                "suggestSquareImageActivated" : true,
                "imgBaseURL": "http://snipes.scene7.com/asset/snipes/external/o_p_suggest_thumb/--",
                "imgFormat": "jpg",
                "brandURLPattern": "/marken/<brand>.cat",
                "headlines": {
                    "searchTerms": "Suchvorschläge",
                    "categories": "Kategorien",
                    "brands": "Marken",
                    "products": "Produktvorschläge"
                },
                "buttonText": "Alle {0} Ergebnisse anzeigen"
            },
            "navigation": {
\t            "showAllText": "Alle anzeigen",
                "globalFilters": [

                        {
                            "id": "_pn-gents",
                            "name": "Herren",
                            "selected": false,
                            "url": "/f/herren/",
                            "filterValue": "fv_targetgroup_gents",
                            "teaser": "navTeaser_gents",
                            "actionName": "gents"
                        },

                        {
                            "id": "_pn-ladies",
                            "name": "Damen",
                            "selected": false,
                            "url": "/f/damen/",
                            "filterValue": "fv_targetgroup_ladies",
                            "teaser": "navTeaser_ladies",
                            "actionName": "ladies"
                        },

                        {
                            "id": "_pn-children",
                            "name": "Kinder",
                            "selected": false,
                            "url": "/f/kinder/",
                            "filterValue": "fv_targetgroup_children",
                            "teaser": "navTeaser_children",
                            "actionName": "children"
                        }

                ],
                "initialCategories": {

                    "0001381574schuhe": {
                        "categoryUrl": "/schuhe.cat",
                        "code": "0001381574schuhe",
                        "name": "Schuhe",
                        "type": "default"
                    },

                    "0001381574bekleidung": {
                        "categoryUrl": "/bekleidung.cat",
                        "code": "0001381574bekleidung",
                        "name": "Bekleidung",
                        "type": "default"
                    },

                    "0001381574accessoires": {
                        "categoryUrl": "/accessoires.cat",
                        "code": "0001381574accessoires",
                        "name": "Accessoires",
                        "type": "default"
                    },

                    "0001381576marken": {
                        "categoryUrl": "/marken.cat",
                        "code": "0001381576marken",
                        "name": "Marken",
                        "type": "brands"
                    }

                },
                "selectedCategoryCode": "0001381576marken",
                "selectedSubcategoryCode": "",
                "activeCategoryCode": "0001381576marken",
                "marketingActions": [

                        {
                            "id": "_pn_cat-brandnew",
                            "code": "brandnew",
                            "selected": false,
                            "name": "Brandneu",
                            "categoryUrl": "/f/brandneu/marketingActionList.html",
                            "marketingAction": true
                        },
\t\t\t\t\t
                        {
                            "id": "_pn_cat-sale",
                            "code": "sale",
                            "selected": false,
                            "name": "Sale",
                            "categoryUrl": "/f/sale/marketingActionList.html",
                            "marketingAction": true
                        }
\t\t\t\t\t
                ],
                "brands": [




                            {
                                "code": "47_brand",
                                "selected": false,
                                "name": "47 Brand",
                                "link": "/marken/47_brand.cat",
                                "charIndex": "0-9"

                            },





                            {
                                "code": "adidas",
                                "selected": false,
                                "name": "adidas",
                                "link": "/marken/adidas.cat",
                                "charIndex": "A"

                            },



                            {
                                "code": "adidas_performance",
                                "selected": false,
                                "name": "adidas Performance",
                                "link": "/marken/adidas_performance.cat"
                            },



                            {
                                "code": "adidas_running",
                                "selected": false,
                                "name": "adidas Running",
                                "link": "/marken/adidas_running.cat"
                            },



                            {
                                "code": "adidas_skateboarding",
                                "selected": false,
                                "name": "adidas Skateboarding",
                                "link": "/marken/adidas_skateboarding.cat"
                            },



                            {
                                "code": "aevor",
                                "selected": false,
                                "name": "Aevor",
                                "link": "/marken/aevor.cat"
                            },



                            {
                                "code": "alpha_industries",
                                "selected": false,
                                "name": "Alpha Industries",
                                "link": "/marken/alpha_industries.cat"
                            },



                            {
                                "code": "amk",
                                "selected": false,
                                "name": "AMK",
                                "link": "/marken/amk.cat"
                            },



                            {
                                "code": "arcade",
                                "selected": false,
                                "name": "Arcade",
                                "link": "/marken/arcade.cat"
                            },



                            {
                                "code": "artist_by_mister_tee",
                                "selected": false,
                                "name": "Artist by Mister Tee",
                                "link": "/marken/artist_by_mister_tee.cat"
                            },



                            {
                                "code": "asics",
                                "selected": false,
                                "name": "ASICS",
                                "link": "/marken/asics.cat"
                            },



                            {
                                "code": "asicstiger",
                                "selected": false,
                                "name": "ASICSTIGER",
                                "link": "/marken/asicstiger.cat"
                            },





                            {
                                "code": "baby_g",
                                "selected": false,
                                "name": "Baby-G",
                                "link": "/marken/baby_g.cat",
                                "charIndex": "B"

                            },



                            {
                                "code": "birkenstock",
                                "selected": false,
                                "name": "Birkenstock",
                                "link": "/marken/birkenstock.cat"
                            },



                            {
                                "code": "black_pyramid",
                                "selected": false,
                                "name": "Black Pyramid",
                                "link": "/marken/black_pyramid.cat"
                            },



                            {
                                "code": "brixton",
                                "selected": false,
                                "name": "Brixton",
                                "link": "/marken/brixton.cat"
                            },



                            {
                                "code": "buffalo",
                                "selected": false,
                                "name": "Buffalo",
                                "link": "/marken/buffalo.cat"
                            },



                            {
                                "code": "bumbumbag",
                                "selected": false,
                                "name": "BumBumBag",
                                "link": "/marken/bumbumbag.cat"
                            },





                            {
                                "code": "calvin_klein_performance",
                                "selected": false,
                                "name": "Calvin Klein Performance",
                                "link": "/marken/calvin_klein_performance.cat",
                                "charIndex": "C"

                            },



                            {
                                "code": "carhartt_wip",
                                "selected": false,
                                "name": "Carhartt WIP",
                                "link": "/marken/carhartt_wip.cat"
                            },



                            {
                                "code": "casio",
                                "selected": false,
                                "name": "Casio",
                                "link": "/marken/casio.cat"
                            },



                            {
                                "code": "cayler___sons",
                                "selected": false,
                                "name": "Cayler &amp; Sons",
                                "link": "/marken/cayler___sons.cat"
                            },



                            {
                                "code": "champion",
                                "selected": false,
                                "name": "Champion",
                                "link": "/marken/champion.cat"
                            },



                            {
                                "code": "cheap_monday",
                                "selected": false,
                                "name": "Cheap Monday",
                                "link": "/marken/cheap_monday.cat"
                            },



                            {
                                "code": "cleptomanicx",
                                "selected": false,
                                "name": "Cleptomanicx",
                                "link": "/marken/cleptomanicx.cat"
                            },



                            {
                                "code": "columbia_sportswear",
                                "selected": false,
                                "name": "Columbia Sportswear",
                                "link": "/marken/columbia_sportswear.cat"
                            },



                            {
                                "code": "converse",
                                "selected": false,
                                "name": "Converse",
                                "link": "/marken/converse.cat"
                            },



                            {
                                "code": "crep_protect",
                                "selected": false,
                                "name": "Crep Protect",
                                "link": "/marken/crep_protect.cat"
                            },



                            {
                                "code": "criminal_damage",
                                "selected": false,
                                "name": "Criminal Damage",
                                "link": "/marken/criminal_damage.cat"
                            },





                            {
                                "code": "dc",
                                "selected": false,
                                "name": "DC",
                                "link": "/marken/dc.cat",
                                "charIndex": "D"

                            },



                            {
                                "code": "der_stamm",
                                "selected": false,
                                "name": "Der Stamm",
                                "link": "/marken/der_stamm.cat"
                            },



                            {
                                "code": "dgk",
                                "selected": false,
                                "name": "DGK",
                                "link": "/marken/dgk.cat"
                            },



                            {
                                "code": "diamond_supply_co_",
                                "selected": false,
                                "name": "Diamond Supply Co.",
                                "link": "/marken/diamond_supply_co_.cat"
                            },



                            {
                                "code": "dickies",
                                "selected": false,
                                "name": "Dickies",
                                "link": "/marken/dickies.cat"
                            },



                            {
                                "code": "djinn_s",
                                "selected": false,
                                "name": "Djinn&#039;s",
                                "link": "/marken/djinn_s.cat"
                            },



                            {
                                "code": "djinns",
                                "selected": false,
                                "name": "Djinns",
                                "link": "/marken/djinns.cat"
                            },





                            {
                                "code": "eastpak",
                                "selected": false,
                                "name": "Eastpak",
                                "link": "/marken/eastpak.cat",
                                "charIndex": "E"

                            },



                            {
                                "code": "element",
                                "selected": false,
                                "name": "Element",
                                "link": "/marken/element.cat"
                            },



                            {
                                "code": "ellesse",
                                "selected": false,
                                "name": "Ellesse",
                                "link": "/marken/ellesse.cat"
                            },



                            {
                                "code": "emerica",
                                "selected": false,
                                "name": "Emerica",
                                "link": "/marken/emerica.cat"
                            },



                            {
                                "code": "enter",
                                "selected": false,
                                "name": "Enter",
                                "link": "/marken/enter.cat"
                            },



                            {
                                "code": "es",
                                "selected": false,
                                "name": "eS",
                                "link": "/marken/es.cat"
                            },



                            {
                                "code": "ethika",
                                "selected": false,
                                "name": "Ethika",
                                "link": "/marken/ethika.cat"
                            },



                            {
                                "code": "etnies",
                                "selected": false,
                                "name": "Etnies",
                                "link": "/marken/etnies.cat"
                            },





                            {
                                "code": "fairplay",
                                "selected": false,
                                "name": "FairPlay",
                                "link": "/marken/fairplay.cat",
                                "charIndex": "F"

                            },



                            {
                                "code": "fila",
                                "selected": false,
                                "name": "Fila",
                                "link": "/marken/fila.cat"
                            },



                            {
                                "code": "flatbush",
                                "selected": false,
                                "name": "Flatbush",
                                "link": "/marken/flatbush.cat"
                            },



                            {
                                "code": "flexfit",
                                "selected": false,
                                "name": "Flexfit",
                                "link": "/marken/flexfit.cat"
                            },



                            {
                                "code": "forvert",
                                "selected": false,
                                "name": "Forvert",
                                "link": "/marken/forvert.cat"
                            },



                            {
                                "code": "future_past",
                                "selected": false,
                                "name": "Future Past",
                                "link": "/marken/future_past.cat"
                            },





                            {
                                "code": "g_shock",
                                "selected": false,
                                "name": "G-Shock",
                                "link": "/marken/g_shock.cat",
                                "charIndex": "G"

                            },



                            {
                                "code": "grimey",
                                "selected": false,
                                "name": "Grimey",
                                "link": "/marken/grimey.cat"
                            },





                            {
                                "code": "helly_hansen",
                                "selected": false,
                                "name": "Helly Hansen",
                                "link": "/marken/helly_hansen.cat",
                                "charIndex": "H"

                            },



                            {
                                "code": "hex_",
                                "selected": false,
                                "name": "HEX ",
                                "link": "/marken/hex_.cat"
                            },



                            {
                                "code": "hikids",
                                "selected": false,
                                "name": "Hikids",
                                "link": "/marken/hikids.cat"
                            },



                            {
                                "code": "homeboy",
                                "selected": false,
                                "name": "Homeboy",
                                "link": "/marken/homeboy.cat"
                            },



                            {
                                "code": "hummel_hive",
                                "selected": false,
                                "name": "hummel HIVE",
                                "link": "/marken/hummel_hive.cat"
                            },



                            {
                                "code": "hype",
                                "selected": false,
                                "name": "Hype",
                                "link": "/marken/hype.cat"
                            },





                            {
                                "code": "illmatic",
                                "selected": false,
                                "name": "Illmatic",
                                "link": "/marken/illmatic.cat",
                                "charIndex": "I"

                            },



                            {
                                "code": "iriedaily",
                                "selected": false,
                                "name": "Iriedaily",
                                "link": "/marken/iriedaily.cat"
                            },



                            {
                                "code": "ivy_park",
                                "selected": false,
                                "name": "IVY PARK",
                                "link": "/marken/ivy_park.cat"
                            },





                            {
                                "code": "jordan",
                                "selected": false,
                                "name": "JORDAN",
                                "link": "/marken/jordan.cat",
                                "charIndex": "J"

                            },





                            {
                                "code": "k_swiss",
                                "selected": false,
                                "name": "K-Swiss",
                                "link": "/marken/k_swiss.cat",
                                "charIndex": "K"

                            },



                            {
                                "code": "k1x",
                                "selected": false,
                                "name": "K1X",
                                "link": "/marken/k1x.cat"
                            },



                            {
                                "code": "kappa",
                                "selected": false,
                                "name": "Kappa",
                                "link": "/marken/kappa.cat"
                            },



                            {
                                "code": "karl_kani",
                                "selected": false,
                                "name": "Karl Kani",
                                "link": "/marken/karl_kani.cat"
                            },



                            {
                                "code": "king_ice",
                                "selected": false,
                                "name": "King Ice",
                                "link": "/marken/king_ice.cat"
                            },



                            {
                                "code": "kingin",
                                "selected": false,
                                "name": "KINGIN",
                                "link": "/marken/kingin.cat"
                            },



                            {
                                "code": "komono",
                                "selected": false,
                                "name": "Komono",
                                "link": "/marken/komono.cat"
                            },





                            {
                                "code": "lacoste",
                                "selected": false,
                                "name": "Lacoste",
                                "link": "/marken/lacoste.cat",
                                "charIndex": "L"

                            },



                            {
                                "code": "lee",
                                "selected": false,
                                "name": "Lee",
                                "link": "/marken/lee.cat"
                            },



                            {
                                "code": "levis",
                                "selected": false,
                                "name": "Levis",
                                "link": "/marken/levis.cat"
                            },



                            {
                                "code": "lrg",
                                "selected": false,
                                "name": "LRG",
                                "link": "/marken/lrg.cat"
                            },





                            {
                                "code": "merchcode",
                                "selected": false,
                                "name": "MERCHCODE",
                                "link": "/marken/merchcode.cat",
                                "charIndex": "M"

                            },



                            {
                                "code": "mister_tee",
                                "selected": false,
                                "name": "Mister Tee",
                                "link": "/marken/mister_tee.cat"
                            },



                            {
                                "code": "mitchell___ness",
                                "selected": false,
                                "name": "Mitchell &amp; Ness",
                                "link": "/marken/mitchell___ness.cat"
                            },





                            {
                                "code": "napapijri",
                                "selected": false,
                                "name": "Napapijri",
                                "link": "/marken/napapijri.cat",
                                "charIndex": "N"

                            },



                            {
                                "code": "new_balance",
                                "selected": false,
                                "name": "New Balance",
                                "link": "/marken/new_balance.cat"
                            },



                            {
                                "code": "new_era",
                                "selected": false,
                                "name": "New Era",
                                "link": "/marken/new_era.cat"
                            },



                            {
                                "code": "nike",
                                "selected": false,
                                "name": "NIKE",
                                "link": "/marken/nike.cat"
                            },



                            {
                                "code": "nike_basketball",
                                "selected": false,
                                "name": "NIKE Basketball",
                                "link": "/marken/nike_basketball.cat"
                            },



                            {
                                "code": "nike_running",
                                "selected": false,
                                "name": "NIKE Running",
                                "link": "/marken/nike_running.cat"
                            },



                            {
                                "code": "nike_sb",
                                "selected": false,
                                "name": "NIKE SB",
                                "link": "/marken/nike_sb.cat"
                            },



                            {
                                "code": "nike_sportswear",
                                "selected": false,
                                "name": "NIKE Sportswear",
                                "link": "/marken/nike_sportswear.cat"
                            },



                            {
                                "code": "nixon",
                                "selected": false,
                                "name": "Nixon",
                                "link": "/marken/nixon.cat"
                            },





                            {
                                "code": "park_authority_by_k1x",
                                "selected": false,
                                "name": "Park Authority by K1X",
                                "link": "/marken/park_authority_by_k1x.cat",
                                "charIndex": "P"

                            },



                            {
                                "code": "pelle_pelle",
                                "selected": false,
                                "name": "Pelle Pelle",
                                "link": "/marken/pelle_pelle.cat"
                            },



                            {
                                "code": "pink_dolphin",
                                "selected": false,
                                "name": "Pink Dolphin",
                                "link": "/marken/pink_dolphin.cat"
                            },



                            {
                                "code": "profound_aesthetic",
                                "selected": false,
                                "name": "Profound Aesthetic",
                                "link": "/marken/profound_aesthetic.cat"
                            },



                            {
                                "code": "project_delray",
                                "selected": false,
                                "name": "Project Delray",
                                "link": "/marken/project_delray.cat"
                            },



                            {
                                "code": "puma",
                                "selected": false,
                                "name": "Puma",
                                "link": "/marken/puma.cat"
                            },





                            {
                                "code": "rains",
                                "selected": false,
                                "name": "Rains",
                                "link": "/marken/rains.cat",
                                "charIndex": "R"

                            },



                            {
                                "code": "reebok",
                                "selected": false,
                                "name": "Reebok",
                                "link": "/marken/reebok.cat"
                            },



                            {
                                "code": "reell",
                                "selected": false,
                                "name": "Reell",
                                "link": "/marken/reell.cat"
                            },



                            {
                                "code": "rocawear",
                                "selected": false,
                                "name": "Rocawear",
                                "link": "/marken/rocawear.cat"
                            },



                            {
                                "code": "russel_athletic",
                                "selected": false,
                                "name": "Russel Athletic",
                                "link": "/marken/russel_athletic.cat"
                            },



                            {
                                "code": "rvca",
                                "selected": false,
                                "name": "RVCA",
                                "link": "/marken/rvca.cat"
                            },





                            {
                                "code": "sergio_tacchini",
                                "selected": false,
                                "name": "Sergio Tacchini",
                                "link": "/marken/sergio_tacchini.cat",
                                "charIndex": "S"

                            },



                            {
                                "code": "sixth_june",
                                "selected": false,
                                "name": "Sixth June",
                                "link": "/marken/sixth_june.cat"
                            },



                            {
                                "code": "sneaker_freaker",
                                "selected": false,
                                "name": "Sneaker Freaker",
                                "link": "/marken/sneaker_freaker.cat"
                            },



                            {
                                "code": "snipes",
                                "selected": false,
                                "name": "SNIPES",
                                "link": "/marken/snipes.cat"
                            },



                            {
                                "code": "soleyama",
                                "selected": false,
                                "name": "Soleyama",
                                "link": "/marken/soleyama.cat"
                            },



                            {
                                "code": "southpole",
                                "selected": false,
                                "name": "Southpole",
                                "link": "/marken/southpole.cat"
                            },



                            {
                                "code": "stance",
                                "selected": false,
                                "name": "Stance",
                                "link": "/marken/stance.cat"
                            },



                            {
                                "code": "supra",
                                "selected": false,
                                "name": "Supra",
                                "link": "/marken/supra.cat"
                            },



                            {
                                "code": "sweet_sktbs",
                                "selected": false,
                                "name": "Sweet SKTBS",
                                "link": "/marken/sweet_sktbs.cat"
                            },





                            {
                                "code": "the_hundreds",
                                "selected": false,
                                "name": "The Hundreds",
                                "link": "/marken/the_hundreds.cat",
                                "charIndex": "T"

                            },



                            {
                                "code": "timberland",
                                "selected": false,
                                "name": "Timberland",
                                "link": "/marken/timberland.cat"
                            },



                            {
                                "code": "tommy_sport",
                                "selected": false,
                                "name": "Tommy Sport",
                                "link": "/marken/tommy_sport.cat"
                            },



                            {
                                "code": "turn_up",
                                "selected": false,
                                "name": "Turn Up",
                                "link": "/marken/turn_up.cat"
                            },





                            {
                                "code": "ucon_acrobatics",
                                "selected": false,
                                "name": "Ucon Acrobatics",
                                "link": "/marken/ucon_acrobatics.cat",
                                "charIndex": "U"

                            },



                            {
                                "code": "umbro",
                                "selected": false,
                                "name": "Umbro",
                                "link": "/marken/umbro.cat"
                            },



                            {
                                "code": "unfair_athletics",
                                "selected": false,
                                "name": "Unfair Athletics",
                                "link": "/marken/unfair_athletics.cat"
                            },



                            {
                                "code": "urban_classics",
                                "selected": false,
                                "name": "Urban Classics",
                                "link": "/marken/urban_classics.cat"
                            },





                            {
                                "code": "vans",
                                "selected": false,
                                "name": "VANS",
                                "link": "/marken/vans.cat",
                                "charIndex": "V"

                            },



                            {
                                "code": "volcom",
                                "selected": false,
                                "name": "Volcom",
                                "link": "/marken/volcom.cat"
                            },





                            {
                                "code": "wrangler",
                                "selected": false,
                                "name": "Wrangler",
                                "link": "/marken/wrangler.cat",
                                "charIndex": "W"

                            }


                ],
                "hotReleases": {
                    "url": "/hotreleases.html",
                    "name": "Hot Releases",
                    "selected": false
                }
            },
            "account": {
                "accountPageURL": "/ma/loginPage.html?lastURL=myAccount.html",
                "loggedInURL": "/ma/overviewPage.html",
                "loggedIn": false,
                "componentLabelKey": "header_component_account_label"
            },
            "cart": {
                "cartPageURL": "/op/cartPage.html",
                "itemCount": 0,
                "componentLabelKey": "header_component_cart_label",
                "freeShippingInfoURL":"/content/faq.html#versandkosten",
                "paypal":{
                \t"enabled": false,
                \t"payPalExpressUrl":"/op/startPayPalExpressCheckout.html"
                }
            },
            "storesearch": {
                "storeSearchURL": "/searchStoreGoogleIFrame.html",
                "useColorbox": false,
                "componentLabelKey" : "header_component_storesearch_label",
                "indicator": "header"
            },
            "wishlist": {
                "wishlistURL": "/viewWishlist.html",
                "useColorbox": false,
                "itemCount": "0",
                "componentLabelKey": "header_component_wishlist_label"
            },
            "editMode" : {
                "active" : false,
                "username" : "",
                "logoutUrl" : "/em/editLogout.html",
                "editMessagesTransferSystem" : true
            },
            "newsletter": {
            \t"links": {
\t\t\t\t\t"gents": "/emailService2.html?genderReqParam=m",
\t\t\t\t\t"ladies": "/emailService2.html?genderReqParam=f",
\t\t\t\t\t"general": "/emailService2.html"
\t\t\t\t},
\t\t\t\t"active": false,
\t\t\t\t"subscriptionURL": "/quickNewsletterSubscription.html"
            }
        }'>
<style>body:not(.MOBILE) #main {padding-top:180px}.preload-header>div{box-sizing:border-box}body:not(.MOBILE) .preload-header .header__logo {position:relative;z-index:1010;padding:15px 0 8px 0}.preload-header .header__icon_group{text-align:right;box-sizing:border-box}.preload-header .header__menu_item{width:52px;box-sizing:content-box;z-index:1014;height:46px;margin-left:4px;display:inline-block;position:relative;left:auto;right:auto;top:auto}.preload-header .header__menu_item__link{background-size:auto 24px!important;background-position:top center!important}.preload-header .header__menu_item__label{font-size:10px;width:100%;text-align:center;display:block;position:absolute;bottom:0;left:0;color:#55575d!important}</style>
<div class="row header__row preload-header">
<div class="column small-12 xlarge-3 large-3 header__row__logo_column">
<div class="header__logo" itemscope itemtype="http://schema.org/Organization">
<a class="header__logo__anchor" title="Zur Startseite">
<script data-pagespeed-no-defer>//<![CDATA[
(function(){var g=this;function h(b,d){var a=b.split("."),c=g;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)a.length||void 0===d?c[e]?c=c[e]:c=c[e]={}:c[e]=d};function l(b){var d=b.length;if(0<d){for(var a=Array(d),c=0;c<d;c++)a[c]=b[c];return a}return[]};function m(b){var d=window;if(d.addEventListener)d.addEventListener("load",b,!1);else if(d.attachEvent)d.attachEvent("onload",b);else{var a=d.onload;d.onload=function(){b.call(this);a&&a.call(this)}}};var n;function p(b,d,a,c,e){this.h=b;this.j=d;this.l=a;this.f=e;this.g={height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth};this.i=c;this.b={};this.a=[];this.c={}}function q(b,d){var a,c,e=d.getAttribute("data-pagespeed-url-hash");if(a=e&&!(e in b.c))if(0>=d.offsetWidth&&0>=d.offsetHeight)a=!1;else{c=d.getBoundingClientRect();var f=document.body;a=c.top+("pageYOffset"in window?window.pageYOffset:(document.documentElement||f.parentNode||f).scrollTop);c=c.left+("pageXOffset"in window?window.pageXOffset:(document.documentElement||f.parentNode||f).scrollLeft);f=a.toString()+","+c;b.b.hasOwnProperty(f)?a=!1:(b.b[f]=!0,a=a<=b.g.height&&c<=b.g.width)}a&&(b.a.push(e),b.c[e]=!0)}p.prototype.checkImageForCriticality=function(b){b.getBoundingClientRect&&q(this,b)};h("pagespeed.CriticalImages.checkImageForCriticality",function(b){n.checkImageForCriticality(b)});h("pagespeed.CriticalImages.checkCriticalImages",function(){r(n)});function r(b){b.b={};for(var d=["IMG","INPUT"],a=[],c=0;c<d.length;++c)a=a.concat(l(document.getElementsByTagName(d[c])));if(0!=a.length&&a[0].getBoundingClientRect){for(c=0;d=a[c];++c)q(b,d);a="oh="+b.l;b.f&&(a+="&n="+b.f);if(d=0!=b.a.length)for(a+="&ci="+encodeURIComponent(b.a[0]),c=1;c<b.a.length;++c){var e=","+encodeURIComponent(b.a[c]);131072>=a.length+e.length&&(a+=e)}b.i&&(e="&rd="+encodeURIComponent(JSON.stringify(t())),131072>=a.length+e.length&&(a+=e),d=!0);u=a;if(d){c=b.h;b=b.j;var f;if(window.XMLHttpRequest)f=new XMLHttpRequest;else if(window.ActiveXObject)try{f=new ActiveXObject("Msxml2.XMLHTTP")}catch(k){try{f=new ActiveXObject("Microsoft.XMLHTTP")}catch(v){}}f&&(f.open("POST",c+(-1==c.indexOf("?")?"?":"&")+"url="+encodeURIComponent(b)),f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.send(a))}}}function t(){var b={},d=document.getElementsByTagName("IMG");if(0==d.length)return{};var a=d[0];if(!("naturalWidth"in a&&"naturalHeight"in a))return{};for(var c=0;a=d[c];++c){var e=a.getAttribute("data-pagespeed-url-hash");e&&(!(e in b)&&0<a.width&&0<a.height&&0<a.naturalWidth&&0<a.naturalHeight||e in b&&a.width>=b[e].o&&a.height>=b[e].m)&&(b[e]={rw:a.width,rh:a.height,ow:a.naturalWidth,oh:a.naturalHeight})}return b}var u="";h("pagespeed.CriticalImages.getBeaconData",function(){return u});h("pagespeed.CriticalImages.Run",function(b,d,a,c,e,f){var k=new p(b,d,a,e,f);n=k;c&&m(function(){window.setTimeout(function(){r(k)},0)})});})();pagespeed.CriticalImages.Run('/mod_pagespeed_beacon','https://m.snipes.com/marken/adidas.cat/yung-96-core-black-core-black-clear-mint/prod-00013801680692?device-type=mobile&st=PRODUCT','ZYjrBicl24',true,false,'8ynxUH-3BL0');
//]]></script><img width="140px" src="//snipes.scene7.com/is/image/snipes/snipes-logo?$s_snipes_logo$" data-pagespeed-url-hash="1771572047" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
</a>
</div>
</div>
<div class="column small-12 xlarge-6 large-5">
<div class="header__search" style="margin: 15px 0 0; text-align: center;">
<div class="search_component" id="vue-search-component">
<div class="form-wrapper">
<div data-js="search-field" class="search_component__field" style="box-sizing: border-box;">
<form name="_sa-search-form" method="GET">
<div class="search_component__field__input">
<input type="search" placeholder="Wonach suchst du?"/>
</div>
<input type="submit" class="search_component__field__submit" value=""/>
</form>
</div>
</div>
</div>
</div>
</div>
<div class="header__icon_group column small-12 xlarge-3 large-4" style="padding-top: 15px;">
<div class="show-for-large-up">
<div class="header__storesearch header__menu_item">
<div id="vue-store-search-component" class="store_search_component">
<a class="header__menu_item__link store_search_component__link" href="/searchStoreGoogleIFrame.html">
<span class="header__menu_item__label">Storefinder</span>
</a>
</div>
</div>
<div class="header__account header__menu_item">
<div id="vue-account-status-component" class="account_status_component">
<a class="header__menu_item__link">
<span class="header__menu_item__label">Konto</span>
</a>
</div>
</div>
<div class="header__wishlist header__menu_item">
<div id="vue-wishlist-component" class="wishlist_component">
<a class="header__menu_item__link">
<span class="wishlist_component__item_count"></span>
<span class="header__menu_item__label">Merkzettel</span>
</a>
</div>
</div>
<div class="header__cart header__menu_item">
<div id="vue-cart-component" class="cart_component">
<a class="header__menu_item__link">
<span class="cart_component__item_count"></span>
<span class="header__menu_item__label">Warenkorb</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div class="row header__navigation_container preload-header-navi">
<div class="column small-12 xlarge-12 large-12">
<div class="header__navigation">
<div class="sitenav_d show-for-large-up">
<ul class="sitenav_d__global_filters" style="position: relative;z-index: 1010;">
<li class="sitenav_d__global_filters__item" v-for="(globalFilter, globalFilterIndex) in NavLibrary.globalFilters">
<a class="sitenav_d__global_filters__item__link sitenav_d__link ">
Herren
</a>
</li>
<li class="sitenav_d__global_filters__item" v-for="(globalFilter, globalFilterIndex) in NavLibrary.globalFilters">
<a class="sitenav_d__global_filters__item__link sitenav_d__link ">
Damen
</a>
</li>
<li class="sitenav_d__global_filters__item" v-for="(globalFilter, globalFilterIndex) in NavLibrary.globalFilters">
<a class="sitenav_d__global_filters__item__link sitenav_d__link ">
Kinder
</a>
</li>
</ul>
<section class="sitenav_d__catnav">
<ul class="sitenav_d__categories">
<li class="sitenav_d__categories__item">
<a class="sitenav_d__categories__item__link sitenav_d__link ">
Schuhe
</a>
</li>
<li class="sitenav_d__categories__item">
<a class="sitenav_d__categories__item__link sitenav_d__link ">
Bekleidung
</a>
</li>
<li class="sitenav_d__categories__item">
<a class="sitenav_d__categories__item__link sitenav_d__link ">
Accessoires
</a>
</li>
<li class="sitenav_d__categories__item">
<a class="sitenav_d__categories__item__link sitenav_d__link sitenav_d__link--selected">
Marken
</a>
</li>
<li class="sitenav_d__categories__item">
<a class="sitenav_d__categories__item__link sitenav_d__link">
Brandneu
</a>
</li>
<li class="sitenav_d__categories__item">
<a class="sitenav_d__categories__item__link sitenav_d__link">
Sale
</a>
</li>
<li class="sitenav_d__categories__item">
<a class="sitenav_d__categories__item__link sitenav_d__link">
Hot Releases
</a>
</li>
</ul>
</section>
</div>
</div>
</div>
</div>
</header>
<section class="preReb-cart">
<header>
<a href="#cart" id="cart-button" class="slidingBtn slide-left MINICARTICON empty" data-target="cart">
<span class="cart-count">0</span>
</a>
<div id="cart">
<input type="hidden" id="hiddenMoneyPattern" value="#,##0.00" data-pattern="#,##0.00"/>
<div class="closePanel"><a href="#close" class="closeIcon"></a></div>
<div class="contents">
<p class="topic">Warenkorb</p>
<div class="cart-info">Dein Warenkorb ist leer.</div>
<div class="benefitsBlock">
<div class="grayDivider">Deine Vorteile</div>
<ul class="menugrid">
<li>
<a href="/content/deliverytime.html" class="samedayDelivery transport">
<div class="imgContainer">
<img srcset="https://snipes.scene7.com/asset/snipes/external/snipes_p_original_mobile/mobile-benefits-sameday_snipes_DE_de.png?wid=63&amp;fit=constrain,0&amp;defaultImage=default 1x" alt="Sameday delivery" width="50px"/>
</div>
<span>Versand am<br/>selben Tag</span>
</a>
</li>
<li>
<a class="freeShipping " href="/content/shippingcosts.html">
<div class="imgContainer">
<img srcset="https://snipes.scene7.com/asset/snipes/external/snipes_p_original_mobile/mobile-benefits-freeshipping_snipes_DE_de.png?wid=38&amp;fit=constrain,0&amp;defaultImage=default 1x" alt="Free shipping" width="30px"/>
</div>
<span><span>Versandkosten- <br/>frei ab 60 Euro</span></span>
</a>
</li>
<li>
<a href="/searchStoreGoogleIFrame.html" class="storeFinder" onclick="econdaTargetTracking('Filialfinder','Filialfinder+Header ', 1, 'a');">
<div class="imgContainer">
<img srcset="https://snipes.scene7.com/asset/snipes/external/snipes_p_original_mobile/mobile-benefits-storefinder_snipes_DE_de.png?wid=38&amp;fit=constrain,0&amp;defaultImage=default 1x" alt="Storefinder" width="30px"/>
</div>
<span>Storefinder</span>
</a>
</li>
</ul>
<ul class="menugrid shaded noEkomi">
<li>
<a href="https://www.trustedshops.de/shop/certificate.php?shop_id=X391CEBD80B43D4B2177F4662F3078C92" class="buyerProtection" target="_blank">
<img srcset="https://snipes.scene7.com/asset/snipes/external/snipes_p_original_mobile/mobile-trusted-logo_snipes_DE_de.png?wid=63&amp;fit=constrain,0&amp;defaultImage=default 1x" alt="trusted shop logo" width="50px"/>
<span>K&auml;uferschutz</span>
</a>
</li>
<li>
<a href="/content/dataprotection.html" target="_blank" class="ssl">
<img srcset="https://snipes.scene7.com/asset/snipes/external/snipes_p_original_mobile/mobile-ssl-logo_snipes_DE_de.png?wid=63&amp;fit=constrain,0&amp;defaultImage=default 1x" alt="ssl logo" width="50px"/>
<span>SSL-Verschl&uuml;sselung</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</header>
</section>
<div id="loading-spinner">
<div class="loader-wrapper">
<div class="loader"></div>
<div class="loader-text">Seite wird geladen...</div>
</div>
</div>
<input type="hidden" id="BasketURL" value="/restoreCart.html?cookieValue="/>
<main>
<div id="productDetail-tracking">
<!-- new econda tracking -->
<script type="text/javascript">var emospro={};var emosproOnClick={};var emosproTarget={};</script>
<script type="text/javascript">emospro.pagetype='Detail Page';emosproOnClick.pagetype='Detail Page';emosproTarget.pagetype='Detail Page';</script>
<script type="text/javascript">emospro.content=encodeURI("Shop/marken/00013801680692");emosproOnClick.content=encodeURI("Shop/marken/00013801680692");emosproTarget.content=encodeURI("Shop/marken/00013801680692");</script>
<script type="text/javascript">emospro.pageId=encodeURI("Shop/marken/00013801680692");emosproOnClick.pageId=encodeURI("Shop/marken/00013801680692");emosproTarget.pageId=encodeURI("Shop/marken/00013801680692");</script>
<script type="text/javascript">emospro.langid='de';emosproOnClick.langid='de';emosproTarget.langid='de';</script>
<script type="text/javascript">emospro.countryid='de';emosproOnClick.countryid='de';emosproTarget.countryid='de';</script>
<script type="text/javascript">emospro.siteid='MobileShop';emosproOnClick.siteid='MobileShop';emosproTarget.siteid='MobileShop';</script>
<script type="text/javascript">var ec_Event={};ec_Event["type"]="view";ec_Event["pid"]="00013801680692";ec_Event["name"]="YUNG-96 core black/core black/clear mint";ec_Event["price"]="50.0";ec_Event["group"]="schuhe/fashion/adidas/00013801680692/YUNG*96*core*black*core*black*clear*mint.prod";ec_Event["count"]="1";ec_Event["var1"]="";ec_Event["var2"]="schwarz";ec_Event["var3"]="1060144";ec_Event["var4"]="adidas";ec_Event["var5"]="discount";ec_Event["var6"]="Brand";ec_Event["var7"]="NULL";ec_Event["var8"]="NULL";ec_Event["sku"]="";emospro["ec_Event"]=[ec_Event];var ec_EventOnClick={};ec_EventOnClick["type"]="c_add";ec_EventOnClick["pid"]="00013801680692";ec_EventOnClick["name"]="YUNG-96 core black/core black/clear mint";ec_EventOnClick["price"]="50.0";ec_EventOnClick["group"]="schuhe/fashion/adidas/00013801680692/YUNG*96*core*black*core*black*clear*mint.prod";ec_EventOnClick["count"]="1";ec_EventOnClick["var1"]="";ec_EventOnClick["var2"]="schwarz";ec_EventOnClick["var3"]="1060144";ec_EventOnClick["var4"]="adidas";ec_EventOnClick["var5"]="discount";ec_EventOnClick["var6"]="Brand";ec_EventOnClick["var7"]="NULL";ec_EventOnClick["var8"]="NULL";ec_EventOnClick["sku"]="";emosproOnClick["ec_Event"]=[ec_EventOnClick];</script>
<script type="text/javascript">try{window.emosPropertiesEvent(emospro);}catch(e){console.log(e);}</script>
</div>
<script type="application/ld+json">
{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "YUNG-96 core black/core black/clear mint",
    "image": [

        "https://snipes.scene7.com/asset/snipes/external/snipes_p_detail_zoom_mobile/adidas+Originals+YUNG-+black+Schuh+bei+SNIPES--1680692_P.jpg?defaultImage=default",

        "https://snipes.scene7.com/asset/snipes/external/snipes_p_detail_zoom_mobile/adidas+Originals+YUNG-+black+Schuh+bei+SNIPES--1680692_P1.jpg?defaultImage=default",

        "https://snipes.scene7.com/asset/snipes/external/snipes_p_detail_zoom_mobile/adidas+Originals+YUNG-+black+Schuh+bei+SNIPES--1680692_P2.jpg?defaultImage=default",

        "https://snipes.scene7.com/asset/snipes/external/snipes_p_detail_zoom_mobile/adidas+Originals+YUNG-+black+Schuh+bei+SNIPES--1680692_P3.jpg?defaultImage=default",

        "https://snipes.scene7.com/asset/snipes/external/snipes_p_detail_zoom_mobile/adidas+Originals+YUNG-+black+Schuh+bei+SNIPES--1680692_P4.jpg?defaultImage=default",

        "https://snipes.scene7.com/asset/snipes/external/snipes_p_detail_zoom_mobile/adidas+Originals+YUNG-+black+Schuh+bei+SNIPES--1680692_P5.jpg?defaultImage=default"

    ],
    "description": "Das Beste aus den Running-Styles der 90er ist beim adidas Originals YUNG-96 Schuh für Herren in einem frischen Retro-Look neu interpretiert. Das schwarze Obermaterial aus <strong>Mesh</strong> macht den Schuh atmungsaktiv und die Overlays aus Synthetik-Wildleder geben dem Design Struktur. Durch die <strong>EVA-Zwischensohle</strong> ist das Modell besonders leicht und gibt zudem lang anhaltenden Tragekomfort. Die <strong>OrthoLite-Einlegesohle</strong> sorgt zudem für ein angenehme Dämpfung bei jedem Schritt. Am seitlichen Schaft und auf der Schuhlasche befindet sich das adidas-Logo.

<br><br><strong>Features:</strong>

<ul><li>hoher Tragekomfort</li>
<li>leichte EVA-Zwischensohle</li>
<li>Mesh-Obermaterial</li>
<li>OrthoLite-Einlegesohle</li>
<li>adidas-Logo auf Schuhlasche und in Fersenhöhe</li>
<li>STYLE: BD8042</li>
<li>Laufsohle: Gummi</li>
<li>Obermaterial: Textil, Leder</li>
<li>Innenmaterial: Textil</li></ul>",
    "mpn": "1060144",
    "brand": {
        "@type": "Thing",
        "name": "adidas"
    },

    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "1"
    },

    "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": "50.0",
        "itemCondition": "http://schema.org/NewCondition",
        "availability": "http://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": "SNIPES"
        }
    }
}
</script>
<script type="text/javascript">var breadcrumb=[{"name":"home","url":"/"},{"name":"Marken","url":"/marken.cat"},{"name":"YUNG-96 core black/core black/clear mint","url":""}];var productdetail_initialstate={"payPal":{"payPalExpressUrl":"startPayPalExpressCheckout.html","enabled":false,},"settings":{"verticalSlides":5,"gutter":14},"fitAnalytics":{"enabled":true,"src":"//integrations.fitanalytics.com/shop/snipes/rebrush/pdp.js"},"storeFinderSettings":{"storeSearchURL":"/searchStoreGoogleIFrame.html?articleCode=1060144","useColorbox":false,"componentLabelKey":"productdetail.searchInStore","indicator":"productDetail"},"breadcrumbs":breadcrumb,"images":[{href:"//snipes.scene7.com/is/image/snipes/1680692_P"},{href:"//snipes.scene7.com/is/image/snipes/1680692_P1"},{href:"//snipes.scene7.com/is/image/snipes/1680692_P2"},{href:"//snipes.scene7.com/is/image/snipes/1680692_P3"},{href:"//snipes.scene7.com/is/image/snipes/1680692_P4"},{href:"//snipes.scene7.com/is/image/snipes/1680692_P5"}],"moreColors":[],"name":"YUNG-96 core black/core black/clear mint","productCode":"00013801680692","articleNumber":"1060144","articleNumberFormatted":'Artikelnr.: 1060144',"brand":{"name":"adidas","media":"lg_s_adidas","logo":"https://snipes.scene7.com/asset/snipes/external/snipes_t_b_list_s_mobile/lg_s_adidas.png?defaultImage=default","url":"/marken/adidas.cat"},"price":{"value":50.0,"formattedValue":"50,00 €","currency":"€","ISOCode":"EUR"},"oldPrice":{"value":99.99,"formattedValue":"99,99 €","currency":"€","savingPercent":"50"},"freeShipping":false,"shippingDefaultContentUrl":"/content/shippingcosts.html","description":"Das Beste aus den Running-Styles der 90er ist beim adidas Originals YUNG-96 Schuh für Herren in einem frischen Retro-Look neu interpretiert. Das schwarze Obermaterial aus &lt;strong&gt;Mesh&lt;\\/strong&gt; macht den Schuh atmungsaktiv und die Overlays aus Synthetik-Wildleder geben dem Design Struktur. Durch die &lt;strong&gt;EVA-Zwischensohle&lt;\\/strong&gt; ist das Modell besonders leicht und gibt zudem lang anhaltenden Tragekomfort. Die &lt;strong&gt;OrthoLite-Einlegesohle&lt;\\/strong&gt; sorgt zudem für ein angenehme Dämpfung bei jedem Schritt. Am seitlichen Schaft und auf der Schuhlasche befindet sich das adidas-Logo.\\n\\n&lt;br&gt;&lt;br&gt;&lt;strong&gt;Features:&lt;\\/strong&gt;\\n\\n&lt;ul&gt;&lt;li&gt;hoher Tragekomfort&lt;\\/li&gt;\\n&lt;li&gt;leichte EVA-Zwischensohle&lt;\\/li&gt;\\n&lt;li&gt;Mesh-Obermaterial&lt;\\/li&gt;\\n&lt;li&gt;OrthoLite-Einlegesohle&lt;\\/li&gt;\\n&lt;li&gt;adidas-Logo auf Schuhlasche und in Fersenhöhe&lt;\\/li&gt;\\n&lt;li&gt;STYLE: BD8042&lt;\\/li&gt;\\n&lt;li&gt;Laufsohle: Gummi&lt;\\/li&gt;\\n&lt;li&gt;Obermaterial: Textil, Leder&lt;\\/li&gt;\\n&lt;li&gt;Innenmaterial: Textil&lt;\\/li&gt;&lt;\\/ul&gt;","isReleased":true,"releaseDateInSeconds":0,"releaseDateFormatted":", ","stock":3,"isAvailable":true,"onlineOnly":false,"inWishlist":false,"buyAlso":{products:[{brand:{name:"adidas"},name:"YUNG-96 grey\\/grey\\/shock pink",sale:false,price:{value:"50.0",formattedValue:'50,00',currency:{symbol:"€"}},oldPrice:{value:"99.99",formattedValue:'99,99',currency:{symbol:"€"}},imageName:"1662767_P",href:"/marken/adidas/yung-96-grey-grey-shock-pink/prod-00013801662767?emcs0=1&emcs1=Produktdetailseite%252C%2520Kunden%2520kauften%2520auch&emcs2=00013801680692&emcs3=00013801662767"},{brand:{name:"Reebok"},name:"Aztrek black\\/white\\/solar yellow",sale:false,price:{value:"50.0",formattedValue:'50,00',currency:{symbol:"€"}},oldPrice:{value:"99.99",formattedValue:'99,99',currency:{symbol:"€"}},imageName:"1647133_P",href:"/marken/reebok/aztrek-black-white-solar-yellow/prod-00013801647133?emcs0=1&emcs1=Produktdetailseite%252C%2520Kunden%2520kauften%2520auch&emcs2=00013801680692&emcs3=00013801647133"},{brand:{name:"ASICSTIGER"},name:"Gel-Bondi white\\/green",sale:false,price:{value:"84.99",formattedValue:'84,99',currency:{symbol:"€"}},imageName:"1704165_P",href:"/marken/asicstiger/gel-bondi-white-green/prod-00013801704165?emcs0=1&emcs1=Produktdetailseite%252C%2520Kunden%2520kauften%2520auch&emcs2=00013801680692&emcs3=00013801704165"},{brand:{name:"Kappa"},name:"Deniz Crew Socks 3P white",sale:false,price:{value:"5.0",formattedValue:'5,00',currency:{symbol:"€"}},oldPrice:{value:"9.99",formattedValue:'9,99',currency:{symbol:"€"}},imageName:"1635413_P",href:"/marken/kappa/deniz-crew-socks-3p-white/prod-00013801635413?emcs0=1&emcs1=Produktdetailseite%252C%2520Kunden%2520kauften%2520auch&emcs2=00013801680692&emcs3=00013801635413"},{brand:{name:"adidas"},name:"YUNG-96 core black\\/core black\\/crystal white",sale:false,price:{value:"70.0",formattedValue:'70,00',currency:{symbol:"€"}},oldPrice:{value:"99.99",formattedValue:'99,99',currency:{symbol:"€"}},imageName:"1662817_P",href:"/marken/adidas/yung-96-core-black-core-black-crystal-white/prod-00013801662817?emcs0=1&emcs1=Produktdetailseite%252C%2520Kunden%2520kauften%2520auch&emcs2=00013801680692&emcs3=00013801662817"},{brand:{name:"Fila"},name:"V94M low grey violet\\/shaded spruce\\/inca g",sale:false,price:{value:"109.99",formattedValue:'109,99',currency:{symbol:"€"}},imageName:"1667693_P",href:"/marken/fila/v94m-low-grey-violet-shaded-spruce-inca-g/prod-00013801667693?emcs0=1&emcs1=Produktdetailseite%252C%2520Kunden%2520kauften%2520auch&emcs2=00013801680692&emcs3=00013801667693"},{brand:{name:"Cayler & Sons"},name:"WL Me Rollin olive\\/mc",sale:false,price:{value:"59.99",formattedValue:'59,99',currency:{symbol:"€"}},imageName:"1708784_P",href:"/marken/cayler___sons/wl-me-rollin-olive-mc/prod-00013801708784?emcs0=1&emcs1=Produktdetailseite%252C%2520Kunden%2520kauften%2520auch&emcs2=00013801680692&emcs3=00013801708784"},{brand:{name:"adidas"},name:"YUNG-96 ftwr white\\/crystal white\\/active purple",sale:false,price:{value:"50.0",formattedValue:'50,00',currency:{symbol:"€"}},oldPrice:{value:"99.99",formattedValue:'99,99',currency:{symbol:"€"}},imageName:"1680686_P",href:"/marken/adidas/yung-96-ftwr-white-crystal-white-active-purple/prod-00013801680686?emcs0=1&emcs1=Produktdetailseite%252C%2520Kunden%2520kauften%2520auch&emcs2=00013801680692&emcs3=00013801680686"},{brand:{name:"Champion"},name:"Tracksuit rir\\/nny",sale:false,price:{value:"69.99",formattedValue:'69,99',currency:{symbol:"€"}},imageName:"1686685_P",href:"/marken/champion/tracksuit-rir-nny/prod-00013801686685?emcs0=1&emcs1=Produktdetailseite%252C%2520Kunden%2520kauften%2520auch&emcs2=00013801680692&emcs3=00013801686685"},{brand:{name:"Criminal Damage"},name:"Shorts Cuccio black",sale:false,price:{value:"20.0",formattedValue:'20,00',currency:{symbol:"€"}},oldPrice:{value:"39.99",formattedValue:'39,99',currency:{symbol:"€"}},imageName:"1661744_P",href:"/marken/criminal_damage/shorts-cuccio-black/prod-00013801661744?emcs0=1&emcs1=Produktdetailseite%252C%2520Kunden%2520kauften%2520auch&emcs2=00013801680692&emcs3=00013801661744"}]},"lastSeen":{products:[{brand:{name:"adidas"},name:"YUNG-96 ftwr white\\/crystal white\\/active purple",sale:false,price:{value:"50.0",formattedValue:'50,00',currency:{symbol:"€"}},oldPrice:{value:"99.99",formattedValue:'99,99',currency:{symbol:"€"}},imageName:"1680686_P",href:'/marken/adidas/yung-96-ftwr-white-crystal-white-active-purple/prod-00013801680686'}]},"productRatings":{"averageRating":5,"numberOfReviews":1,"reviews":[{"date":"Sun May 12 19:00:18 CEST 2019","comment":"Gute Verarbeitung, die Schuhe fallen etwas kleiner aus. Normal trage ich 44,5-45, die bestellte Größe 47 1\\/3 ist einen Tick zu groß, eine 46 wäre aber mit Sicherheit zu klein gewesen.","first_name":"R.","last_name":"B.","city":"Bad Klosterlausnitz","rating":"5"}]},"gallerySiteID":"pdsGallery_1060144","teaserSiteID":""}</script>
<div id="productdetailapp"></div>
<script type="text/javascript">var currentCart={};currentCart["total"]="0.0";currentCart["customer"]={email:"",emailMD5:""};(function(currentCart){var entries=new Array();currentCart["entries"]=entries;})(currentCart);</script>
<script type="text/javascript" class="mobile-js">if(typeof DTMInfo!=="object"){var DTMInfo={};}if(typeof shop!=="object"){var shop={};}shop["devicetype"]=true?"m":"d";shop["pagetype"]="OTHER";DTMInfo["shop"]=shop;</script>
<script type="text/javascript" class="mobile-js">if(typeof DTMInfo!=="object"){var DTMInfo={};}if(typeof shop!=="object"){var shop={};}shop["devicetype"]=true?"m":"d";shop["pagetype"]="PRODUCT";shop["pagename"]="productdetail";DTMInfo["shop"]=shop;</script>
<script type="text/javascript" class="mobile-js">if(typeof DTMInfo!=="object"){var DTMInfo={};}if(typeof shop!=="object"){var shop={};}shop["devicetype"]=true?"m":"d";shop["pagetype"]="PRODUCT";DTMInfo["shop"]=shop;</script>
<script type="text/javascript" class="mobile-js">if(typeof DTMInfo!=="object"){var DTMInfo={};}if(typeof product!=="object"){var product={};}product["code"]="00013801680692";product["articlecode"]="1060144";product["variantcode"]="";product["price"]="50.0";DTMInfo["product"]=product;</script>
<script type="text/javascript" class="mobile-js">if(typeof DTMInfo!=="object"){var DTMInfo={};}if(typeof category!=="object"){var category={};}category["code"]="0001381576marken";category["name"]="Marken";category["pathcodes"]="marken";category["rootpathcodes"]="home/schuhe/fashion";DTMInfo["category"]=category;</script>
<script type="text/javascript" class="mobile-js">if(typeof DTMInfo!=="object"){var DTMInfo={};}if(typeof brand!=="object"){var brand={};}brand["code"]="adidas";brand["name"]="adidas";DTMInfo["brand"]=brand;</script>
<script type="text/javascript" class="mobile-js">if(typeof DTMInfo!=="object"){var DTMInfo={};}var maxIndex=3;var products=new Array();if(false){var prod=new Object();prod.code="00013801662767";prod.articlecode="1060070";products.push(prod);}if(false){var prod=new Object();prod.code="00013801647133";prod.articlecode="1061084";products.push(prod);}if(false){var prod=new Object();prod.code="00013801704165";prod.articlecode="1061167";products.push(prod);}if(false){var prod=new Object();prod.code="00013801635413";prod.articlecode="3013265";products.push(prod);}if(false){var prod=new Object();prod.code="00013801662817";prod.articlecode="1060071";products.push(prod);}if(false){var prod=new Object();prod.code="00013801667693";prod.articlecode="1060084";products.push(prod);}if(false){var prod=new Object();prod.code="00013801708784";prod.articlecode="6091529";products.push(prod);}if(false){var prod=new Object();prod.code="00013801680686";prod.articlecode="1060143";products.push(prod);}if(false){var prod=new Object();prod.code="00013801686685";prod.articlecode="6088052";products.push(prod);}if(false){var prod=new Object();prod.code="00013801661744";prod.articlecode="6013275";products.push(prod);}DTMInfo["buyalsoproducts"]=products;</script>
</main>
<footer class="footer rebrush-footer">
<div class="row collapse">
<div class="column small-12 footer__newsletter  ">
<div class="cms-footer-newsletter">
<img src="//snipes.scene7.com/is/image/snipes//snipes-email-anmeldung_2_5?$s_fullwidth$" alt="" class="cms-footer-newsletter__bgimage" data-pagespeed-url-hash="2561958817" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
<div class="cms-footer-newsletter__shop-import">
<div class="footer_newsletter_form">
<h3 class="footer_newsletter_form__heading">Zum SNIPES Newsletter anmelden</h3>
<p class="footer_newsletter_form__text">Ich möchte zukünftig über aktuelle Trends, Angebote und Gutscheine von SNIPES per E-Mail informiert werden. Eine Abmeldung ist jederzeit möglich.</p>
<div class="footer_newsletter_form__button-container">
<div class="footer_newsletter_form__input">
<input type="text" placeholder="E-Mail-Adresse eingeben" value="">
</div>
<div class="footer_newsletter_form__buttons">
<button class="footer_newsletter_form__men-button solid-button solid-button--orange" data-url="/emailService2.html?genderReqParam=f">Für Frauen
</button>
<button class="footer_newsletter_form__women-button solid-button solid-button--orange" data-url="/emailService2.html?genderReqParam=m">Für Männer
</button>
</div>
</div>
<script type="text/javascript">function emailService(theLink){console.log(this,theLink);}</script>
</div>
</div>
</div>
</div>
<div class="column small-12">
<!-- CMS-Page 69 - Top Brands -->
<div class="cms-footer-linklist cms-footer-linklist--brands column row expandable-container collapse">
<h3 class="cms-footer-linklist__heading">Top Brands</h3>
<ul class="cms-footer-linklist__list">
<li class="cms-footer-linklist__listitem"><a href="/marken/adidas.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_Brand1');">ADIDAS</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/alpha_industries.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_Brand2');">ALPHA INDUSTRIES</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/asicstiger.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_Brand3');">ASICSTIGER</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/brixton.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_brixton');">BRIXTON</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/carhartt_wip.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_Brand4');">CARHARTT WIP</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/champion.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_Brand5');">CHAMPION</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/columbia_sportswear.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_Brand6');">COLUMBIA</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/converse.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_Brand_7');">CONVERSE</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/dc.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_dc');">DC </a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/dickies.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_dickies');">DICKIES</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/ellesse.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_Brand_8');">ELLESSE</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/fila.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_Brand9');">FILA</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/jordan.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_Brand10');">JORDAN</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/new_era.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_new_era');">NEW ERA</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/nike.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_Brand11');">NIKE</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/nike_sb.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_Brand12');">NIKE SB</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/mitchell___ness.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_mitchell__ness');">MITCHELL &amp; NESS</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/puma.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_Brand13');">PUMA</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/reebok.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_reebok');">REEBOK</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/snipes.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_snipes');">SNIPES</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/stance.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_stance');">STANCE</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/urban_classics.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_urban_classics');">URBAN CLASSICS</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/vans.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_vans');">VANS</a></li>
<li class="cms-footer-linklist__listitem"><a href="/marken/volcom.cat" onclick="econdaMarkerTracking('Top_Brands/footer_part_linklist_item_volcom');">VOLCOM</a></li>
</ul>
</div>
</div>
<div class="column small-12">
<!-- CMS-Page 55 - Top Categories -->
<div class="cms-footer-linklist cms-footer-linklist--last column row expandable-container collapse">
<h3 class="cms-footer-linklist__heading">TOP KATEGORIEN</h3>
<ul class="cms-footer-linklist__list">
<li class="cms-footer-linklist__listitem"><a href="/schuhe/sneaker.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_running');">SNEAKER</a></li>
<li class="cms-footer-linklist__listitem"><a href="/bekleidung/oberbekleidung-lang/hoodies.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_hoodies');">HOODIES</a></li>
<li class="cms-footer-linklist__listitem"><a href="/bekleidung/jackenundwesten/trainingsjacken.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_winter_jackets');">TRAININGSJACKEN</a></li>
<li class="cms-footer-linklist__listitem"><a href="/schuhe/topsneakerstyles/nike-m2k-tekno.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_nike_m2k_tekno');">NIKE M2K TEKNO</a></li>
<li class="cms-footer-linklist__listitem"><a href="/schuhe/topsneakerstyles/nike-zoom-2k.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_air_max_1');">NIKE ZOOM 2K</a></li>
<li class="cms-footer-linklist__listitem"><a href="/schuhe/boots.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_boots');">BOOTS</a></li>
<li class="cms-footer-linklist__listitem"><a href="/schuhe/topsneakerstyles/puma-thunder.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_adidas_nmd');">PUMA THUNDER</a></li>
<li class="cms-footer-linklist__listitem"><a href="/bekleidung/oberbekleidung-lang/zip-hoodies.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_converse_chucks');">ZIP HOODIES</a></li>
<li class="cms-footer-linklist__listitem"><a href="/schuhe/topsneakerstyles/nike-air-force.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_nike_air_force');">NIKE AIR FORCE </a></li>
<li class="cms-footer-linklist__listitem"><a href="/schuhe/topsneakerstyles/nike-air-max.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_nike_air_max');">NIKE AIR MAX</a></li>
<li class="cms-footer-linklist__listitem"><a href="/schuhe/topsneakerstyles/adidas-falcon.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_adidas_falcon');">ADIDAS FALCON</a></li>
<li class="cms-footer-linklist__listitem"><a href="/schuhe/topsneakerstyles/vans-old-skool.cat" onclick="econdaMarkerTracking('Top_Categories/Vans_Old_Skool');">VANS OLD SKOOL</a></li>
<li class="cms-footer-linklist__listitem"><a href="/bekleidung/jacken-und-westen/uebergangsjacken.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_uerbergangsjacken');">&Uuml;BERGANGSJACKEN</a></li>
<li class="cms-footer-linklist__listitem"><a href="/bekleidung/oberbekleidung-lang/sweatshirts.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_Sweats');">SWEATSHIRTS</a></li>
<li class="cms-footer-linklist__listitem"><a href="/bekleidung/oberbekleidung-kurz/t-shirts.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_tshirts');">T-SHIRTS</a></li>
<li class="cms-footer-linklist__listitem"><a href="/bekleidung/hosen.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_hosen');">HOSEN</a></li>
<li class="cms-footer-linklist__listitem"><a href="/accessoires/muetzen-und-huete/beanies.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_beanies');">BEANIES</a></li>
<li class="cms-footer-linklist__listitem"><a href="/accessoires/taschen/umhaengetaschen-messengerbags.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_hipbags');">HIPBAGS</a></li>
<li class="cms-footer-linklist__listitem"><a href="/accessoires/rucksaecke.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_Rucksaecke');">RUCKS&Auml;CKE</a></li>
<li class="cms-footer-linklist__listitem"><a href="/bekleidung/oberbekleidung-lang/longsleeves.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_longsleeves');">LONGSLEEVES</a></li>
<li class="cms-footer-linklist__listitem"><a href="/puffer-jackets.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_puffer_jackets');">PUFFER JACKETS</a></li>
<li class="cms-footer-linklist__listitem"><a href="/schuhe/topsneakerstyles/nike-air-max-270.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_nike_air_max_270');">NIKE AIR MAX 270</a></li>
<li class="cms-footer-linklist__listitem"><a href="/schuhe/topsneakerstyles/fila-disruptor.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_fila_disruptor');">FILA DISRUPTOR</a></li>
<li class="cms-footer-linklist__listitem"><a href="/accessoires/taschen/turnbeutel-shopper.cat" onclick="econdaMarkerTracking('Top_Categories/footer_part_linklist_item_gymbag');">GYMBAGS</a></li>
</ul>
</div>
</div>
<div class="column small-12">
<div class="cms-footer-info row">
<div class="cms-footer-info__wrapper column row small-12">
<div class="cms-footer-info__content-container row column">
<div class="column small-12 cms-footer-info-shipping">
<div class="cms-footer-info--border-bottom-mobile">
<ul class="cms-footer-info-shipping__list">
<li class="cms-footer-info-shipping__item">
<a href="/content/faq.html#versanddauer" target="_blank" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_shipping__item_VERSAND');">
<img class="cms-footer-info-shipping__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-shipping?$s_original$&wid=100" width="50" alt="Versandicon" data-pagespeed-url-hash="1183617125" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
<span class="cms-footer-info-shipping__text">SCHNELLER VERSAND MIT DHL</span>
</a>
</li>
<li class="cms-footer-info-shipping__item">
<a href="/content/faq.html#versandkosten" target="_blank" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_shipping__item_16_LIERFERUNG');">
<img class="cms-footer-info-shipping__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-delivery?$s_original$&wid=100" width="50" alt="icon lkw" data-pagespeed-url-hash="2848026031" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
<span class="cms-footer-info-shipping__text">KOSTENLOSE LIEFERUNG AB 60&euro;</span>
</a>
</li>
<li class="cms-footer-info-shipping__item">
<a href="/content/faq.html#retoure" target="_blank" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_shipping__item_15_R&amp;Uuml;CKVERSAND');">
<img class="cms-footer-info-shipping__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-returns?$s_original$&wid=100" width="50" alt="r&uuml;ckw&auml;rtspfeil" data-pagespeed-url-hash="3221413342" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
<span class="cms-footer-info-shipping__text">GRATIS RETOURE</span>
</a>
</li>
</ul>
</div>
</div>
<div class="column small-12 cms-footer-info-middle-container">
<div class="column small-12 large-4 cms-footer-info-iconlist">
<div class="cms-footer-info--border-bottom-mobile">
<h3 class="cms-footer-info-iconlist__headline">about snipes</h3>
<ul class="cms-footer-info-iconlist__textlist">
<li class="cms-footer-info-iconlist__textitem">
<a href="/content/impressum.html" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__textitem_impressum');">Impressum</a></li>
<li class="cms-footer-info-iconlist__textitem">
<a href="/content/agb.html" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__textitem_agb');">AGB</a></li>
<li class="cms-footer-info-iconlist__textitem">
<a href="/content/membercard.html" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__textitem_membercard');">Membercard</a></li>
<li class="cms-footer-info-iconlist__textitem">
<a href="/emailService2.html" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__textitem_newsletter');">Newsletter</a></li>
<li class="cms-footer-info-iconlist__textitem">
<a href="/searchStoreGoogleIFrame.html" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__textitem_storefinder');">Storefinder</a></li>
</ul>
</div>
</div>
<div class="column small-12 large-4 cms-footer-info-iconlist">
<div class="cms-footer-info--border-bottom-mobile">
<h3 class="cms-footer-info-iconlist__headline">service &amp; help</h3>
<ul class="cms-footer-info-iconlist__textlist">
<li class="cms-footer-info-iconlist__textitem">
<a href="/contact.html" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__textitem_kontakt');">Kontakt</a></li>
<li class="cms-footer-info-iconlist__textitem">
<a href="/content/faq.html" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__textitem_faq');">HILFE/FAQ</a></li>
<li class="cms-footer-info-iconlist__textitem">
<a href="/content/dataprotection.html" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__textitem_dataprotection');">Datenschutz</a></li>
<li class="cms-footer-info-iconlist__textitem">
<a href="/content/agb.html#rueckgabebelehrung" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__textitem_widerrufsbelehrung');">Widerrufsbelehrung</a></li>
<li class="cms-footer-info-iconlist__textitem">
<a href="jobs" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__textitem_jobs');">Jobs bei SNIPES</a></li>
</ul>
</div>
</div>
<div class="column small-12 xlarge-4 cms-footer-info-service">
<div class="cms-footer-info--border-bottom-mobile">
<h3 class="cms-footer-info-service__headline">Service-Hotline</h3>
<ul class="cms-footer-info-service__list">
</ul>
<div class="cms-footer-info-service__contact">
<img src="//snipes.scene7.com/is/image/snipes//cms-footer-phone?$s_original$&wid=30" width="30" class="cms-footer-info-service__contact-img" data-pagespeed-url-hash="2409519195" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
<div>
<div class="cms-footer-info-service__contact-number">0800 - 44 02 222</div>
<div class="cms-footer-info-service__contact-opening">Mo-Fr: 8:00 - 20:00</div>
</div>
</div>
</div>
</div>
</div>
<div class="column small-12 cms-footer-info-middle-container">
<div class="column small-12 large-4 cms-footer-info-iconlist">
<div class="cms-footer-info--border-bottom-mobile">
<h3 class="cms-footer-info-iconlist__headline">Kundenbewertungen</h3>
<ul class="cms-footer-info-iconlist__list">
<div id="MyCustomTrustbadge"></div>
<div class="mobile_only">
<a href="//www.trustedshops.de" target="_blank">
<img class="cms-footer-info-iconlist__image" src="https://snipes.scene7.com/is/image/snipes//cms-footer-trustedshops?$s_original$&wid=50" data-pagespeed-url-hash="3187474775" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
</a>
</div>
</ul>
</div>
</div>
<div class="column small-12 large-4 cms-footer-info-iconlist">
<div class="cms-footer-info--border-bottom-mobile">
<h3 class="cms-footer-info-iconlist__headline">Zahlungsarten</h3>
<ul class="cms-footer-info-iconlist__list">
<li class="cms-footer-info-iconlist__item">
<a href="/content/faq.html#zahlungsarten" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__item_mastercard');"><img class="cms-footer-info-iconlist__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-mastercard-hr?$s_original$&wid=190" width="95" alt="mastercard-Logo" data-pagespeed-url-hash="891769295" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></a>
</li>
<li class="cms-footer-info-iconlist__item">
<a href="/content/faq.html#zahlungsarten" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__item_Visa');"><img class="cms-footer-info-iconlist__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-visa-hr?$s_original$&wid=190" width="95" alt="Visa-logo" data-pagespeed-url-hash="2368840914" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></a>
</li>
<li class="cms-footer-info-iconlist__item">
<a href="/content/faq.html#zahlungsarten" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__item_geschenkkarte');"><img class="cms-footer-info-iconlist__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-giftcard-hr_sde?$s_original$&wid=190" width="95" alt="" data-pagespeed-url-hash="2256738848" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></a>
</li>
<li class="cms-footer-info-iconlist__item">
<a href="/content/faq.html#zahlungsarten" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__item_Vorkasse');"><img class="cms-footer-info-iconlist__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-vorkasse-hr?$s_original$&wid=190" width="95" alt="Vorkasse-Logo" data-pagespeed-url-hash="1623835523" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></a>
</li>
<li class="cms-footer-info-iconlist__item">
<a href="/content/faq.html#zahlungsarten" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__item_Nachnahme');"><img class="cms-footer-info-iconlist__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-nachnahme-hr?$s_original$&wid=190" width="95" alt="Nachnahme" data-pagespeed-url-hash="3242185412" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></a>
</li>
<li class="cms-footer-info-iconlist__item">
<a href="/content/faq.html#zahlungsarten" target="_self" onclick="econdaMarkerTracking('Footer_Info/footer_part_info_iconlist__item_Paypal');"><img class="cms-footer-info-iconlist__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-paypal-hr?$s_original$&wid=190" width="95" alt="Paypal-Logo" data-pagespeed-url-hash="3682263952" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></a>
</li>
</ul>
</div>
</div>
<div class="column small-12 large-4 cms-footer-info-iconlist">
<div class="cms-footer-info--border-bottom-mobile">
<h3 class="cms-footer-info-iconlist__headline">Sicher shoppen</h3>
<ul class="cms-footer-info-iconlist__list">
<li class="cms-footer-info-iconlist__item">
<a href="/content/faq.html#zahlungsarten" target="_self" onclick="econdaMarkerTracking('Footer_Info/verifiedvisa_footer_part_info_iconlist__item');"><img class="cms-footer-info-iconlist__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-verifiedbyvisa?$s_original$&wid=190" width="95" alt="verified by visa" data-pagespeed-url-hash="2571040854" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></a>
</li>
<li class="cms-footer-info-iconlist__item">
<a href="/content/dataprotection.html" target="_self" onclick="econdaMarkerTracking('Footer_Info/SSL_footer_part_info_iconlist__item');"><img class="cms-footer-info-iconlist__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-ssl?$s_original$&wid=190" width="95" alt="ssl-logo" data-pagespeed-url-hash="302252424" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></a>
</li>
<li class="cms-footer-info-iconlist__item">
<a href="/content/faq.html#zahlungsarten" target="_self" onclick="econdaMarkerTracking('Footer_Info/mcsecure_footer_part_info_iconlist__item');"><img class="cms-footer-info-iconlist__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-mastercardsecure?$s_original$&wid=190" width="95" alt="masterCard SecureCode" data-pagespeed-url-hash="430260505" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></a>
</li>
</ul>
</div>
</div>
</div>
<div class="column small-12 xlarge-4 xlarge-offset-4 end cms-footer-info-iconlist">
<div class="cms-footer-info--border-bottom-mobile">
<h3 class="cms-footer-info-iconlist__headline">Social</h3>
<ul class="cms-footer-info-iconlist__list">
<li class="cms-footer-info-iconlist__item">
<a href="https://www.facebook.com/snipes.com" target="_blank" onclick="econdaMarkerTracking('Footer_Info/facebook_footer_part_info_iconlist__item');"><img class="cms-footer-info-iconlist__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-facebook?$s_original$&wid=100" width="50" alt="SocialMedia logo facebook" data-pagespeed-url-hash="3527993517" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></a>
</li>
<li class="cms-footer-info-iconlist__item">
<a href="https://instagram.com/snipes" target="_blank" onclick="econdaMarkerTracking('Footer_Info/instagram_footer_part_info_iconlist__item');"><img class="cms-footer-info-iconlist__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-instagram?$s_original$&wid=100" width="50" alt="SocialMedia logo instagram" data-pagespeed-url-hash="1550138835" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></a>
</li>
<li class="cms-footer-info-iconlist__item">
<a href="https://www.youtube.com/user/snipes/featured" target="_blank" onclick="econdaMarkerTracking('Footer_Info/youtube_footer_part_info_iconlist__item');"><img class="cms-footer-info-iconlist__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-youtube?$s_original$&wid=100" width="50" alt="SocialMedia logo youtube" data-pagespeed-url-hash="1152216898" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></a>
</li>
<li class="cms-footer-info-iconlist__item">
<a href="https://open.spotify.com/user/snipesshop" target="_blank" onclick="econdaMarkerTracking('Footer_Info/spotify_footer_part_info_iconlist__item');"><img class="cms-footer-info-iconlist__image" src="//snipes.scene7.com/is/image/snipes//cms-footer-spotify?$s_original$&wid=100" width="50" alt="SocialMedia Icon spotify" data-pagespeed-url-hash="2158691027" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</footer>
<script type="text/javascript" src="/js/external/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="/js/external/jquery-migrate-3.0.1.min.js"></script>
<script type="text/javascript" src="/js/external/jquery.colorbox-1.4.33.min.js"></script>
<script type="text/javascript" src="/dm.config.min.pjs"></script>
<script type="text/javascript" src="/_ui/mobile/site-snipesSite_DE/js/de/../scripts.min.js"></script>
<script type="text/javascript" src="/snipesconfig.pjs"></script>
<script type="text/javascript" src="/_ui/snipes/js/common.bundle.js"></script>
<script type="text/javascript" src="/_ui/snipes/js/productdetail.bundle.js"></script>
<script type="text/javascript">$(document.body).on('click','a.open-layer, input.open-layer',function(e){if(latestClicked==null||latestClicked[0]!=$(this)[0]){latestClicked=$(this);window.setTimeout(function(){clearLatestClicked(latestClicked);},3000);$(this).dmShopLayer();}return false;}).on('click','#wishlist .removeEntries, .remove-item',function(){setTimeout(function(){updateWishlistHeader();},100);}).on('change','.snipes_wishlist select',function(){var _url=dmConfig.path.servletContextPath+"/changeWishlist.html",oldSizeText=$(this).find("option:selected").text(),oldSize=$(this).parent().find("input[name='selectedSizeVariant']").val(),choosedSize=$(this).find("option:selected").val(),sizeSpan=$(this).parent().parent().find('.selectedSize');sizeSpan.html(oldSizeText);if(choosedSize){}if(_url!=''){$(this).parent().find("input[name='selectedSizeVariant']").val(choosedSize);$.ajax({context:this,url:_url,method:'POST',data:{wishlistEntryCode:oldSize,newVariantCode:choosedSize},success:function(response){var selectedSizeVariant=$(this).parents("form").find("input[type=hidden][name='selectedSizeVariant']").val();$(this).parents("form").find("input[type=hidden][name='add2Cart']").val(selectedSizeVariant);},error:function(response){var parsed=JSON.parse(response.responseText);var wrapper='<div class="message error">'+parsed.errors[0].message+'</div>';$('.snipes_cart.snipes_wishlist').find('.header').after(wrapper);}});}});function clearLatestClicked(oldLatestClicked){if(oldLatestClicked!=null&&latestClicked!=null&&oldLatestClicked[0]==latestClicked[0]){latestClicked=null;}}var latestClicked=null;function updateWishlistHeader(){var url=dmConfig.url.updateServiceMenu;$.ajax({url:url,type:'GET',success:function(data){$('#headerTop').remove();$('#hTop').after(data);if(document.editMode){toggleLocalizationBorders();toggleLocalizationBorders();}if($("#rebrush-header").length>0){var itemCount=$(data).find("#snipes-wishlist").text().replace(/\\D/g,'');if(itemCount<1){itemCount="";}$("#rebrush-header .wishlist_component__item_count").text(itemCount);}},error:function(){console.log('Fehler');}});}</script>
<script type="text/javascript" src="/js/internal/snipes/dm.min.js"></script>
<script type="text/javascript" src="/dm.config.min.pjs"></script>
<script type="text/javascript">_satellite.pageBottom()</script>
</body>
</html>`,
};
