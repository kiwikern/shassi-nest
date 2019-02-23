/* tslint:disable:max-line-length */
import { CosCrawler } from '../../src/crawler/crawlers/cos.crawler';

export const cosTestCase = {
  crawlerType: CosCrawler,

  url: 'https://www.cosstores.com/en_eur/men/menswear/coats-jackets/product.wool-blend-bomber-jacket-green.0722148001.html?utm_source=newsletter&utm_medium=email&utm_campaign=2019_SUN_W07_EU&utm_content=re_actives',

  sizes: [
    { id: '0722148001001', isAvailable: false, name: 'XS' },
    { id: '0722148001002', isAvailable: true, name: 'S' },
    { id: '0722148001003', isAvailable: true, name: 'M' },
    { id: '0722148001004', isAvailable: true, name: 'L' },
    { id: '0722148001005', isAvailable: true, name: 'XL' },
    { id: '0722148001006', isAvailable: false, name: 'XXL' },
  ],

  sizeChecks: [
    { size: '0722148001002', isAvailable: true },
    { size: '0722148001001', isAvailable: false },
    { size: 'sizedoesnotexist', isAvailable: false },
  ],

  name: 'RIBBED LONG-SLEEVED T-SHIRT',

  priceChecks: [
    { size: '0722148001005', price: 49 },
    { size: '0722148001006', price: 49 },
    { size: 'unknown-size', price: 49 },
  ],

  secondResponse: { availability: ['0722148001005', '0722148001003', '0722148001004', '0722148001002'], fewPieceLeft: [] },

  testResponse: `<!DOCTYPE HTML>
<html class="no-js">
    <head>
    <title>RIBBED LONG-SLEEVED T-SHIRT - White / black - Tops - COS</title><meta name="description" content="&lt;p>Designed with vertical ribs updated with an intricate printed pattern, this long-sleeved T-shirt is made from structured cotton. Cut for a regular fit, it has a wide neck trim and clean-cut edges for a minimal finish.&amp;nbsp;&lt;/p>&lt;p>&amp;nbsp;&lt;/p>&lt;p>Back length of size M is 69.5cm /&amp;nbsp;Model is 189cm tall and wearing a size M&lt;/p>"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
<meta name="format-detection" content="telephone=no">
<script type="text/javascript" src="/etc/designs/hm/clientlibs/shared/jquery.min.js"></script>
<script type="text/javascript" src="/etc/designs/appeaser/shared/clientlibs/metaTags.min.js"></script>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="keywords" content="RIBBED LONG-SLEEVED T-SHIRT">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
<meta name="format-detection" content="telephone=no">
<meta property="og:title" content="RIBBED LONG-SLEEVED T-SHIRT">
	<meta property="og:description" content="RIBBED LONG-SLEEVED T-SHIRT: Designed with vertical ribs updated with an intricate printed pattern, this long-sleeved T-shirt is made from structured cotton. Cut for a regular fit, it has a wide neck trim and clean-cut edges for a minimal finish. Back length of size M is 69.5cm / Model is 189cm tall and wearing a size M ">
	<meta property="og:site_name" content="COS">
	<meta property="og:type" content="product">

	<meta property="og:price:amount" content="49.00">
	<meta property="product:price:amount" content="49.00">


	<meta property="og:price:currency" content="EUR">
<meta property="product:price:currency" content="EUR">
<meta property="og:availability" content="instock">

	<meta property="og:url" content="https://www.cosstores.com/en_eur/men/menswear/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
	<!--[if lt IE 9]>
     <script src="/etc/designs/hm/clientlibs/shared/head/js/libs/angularjs.1.2.28.min.js"></script>
     <script src="/etc/designs/hm/clientlibs/shared/head/js/libs/angular-sanitize.1.2.28.min.js"></script>
<![endif]-->
<!--[if (gte IE 9) | (!IE)]><!-->
    <script src="/etc/designs/hm/clientlibs/shared/head/js/libs/angularjs.1.3.15.min.js"></script>
    <script src="/etc/designs/hm/clientlibs/shared/head/js/libs/angular-sanitize.1.3.15.min.js"></script>
<!--<![endif]-->
<script src="/etc/designs/appeaser/cos/clientlibs/pattern-lib/frontend/js/modernizr-custom.min.js"></script><style type="text/css"></style>
<link href="/etc/designs/appeaser/cos/clientlibs/pattern-lib/frontend.min.css" rel="stylesheet" type="text/css">

<script type="text/javascript" src="/etc/designs/appeaser/shared/head.min.js"></script>
<script type="text/javascript" src="/etc/designs/hm/clientlibs/shared.min.js"></script>
<script type="text/javascript" src="/etc/designs/appeaser/cos/clientlibs/application.min.js"></script>
<script>
            (function () {
            	var locale = hm.multiCountry.readCookieValue('HMCORP_locale');
            	var currencyFromCookie = hm.multiCountry.readCookieValue('HMCORP_currency');
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
                            allowedCountries = 'SE,DK,NL,GB,DE,BE,AT,FI,FR,ES,PL,CZ,PT,IT,SI,IE,HU,SK'.split(','),
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
                    	//window.location.href = '';
                    	var en_parameter = ".en_eur.";
                    	if (currencyFromCookie.includes("USD")){
                    		en_parameter = ".en_usd.";
                    	}
                    	var georguriURL = '?goeorguri=%2Fen_eur%2Fmen%2Fmenswear%2Ftops%2Fproduct.ribbed-long-sleeved-t-shirt-white.0722148001.html';
                    	var redirectPageURL = "/content/cos/page.countryselector."+ locale + en_parameter + currencyFromCookie+ ".jsp" + georguriURL;
                    	window.location.href = redirectPageURL;
                    }
                }
            })();
        </script>
    <script src="/etc/designs/appeaser/shared/rakuten/js/rakuten.js"></script><link rel="shortcut icon" type="image/png" href="/etc/designs/appeaser/cos/favicons/favicon-32.png">
    <link rel="apple-touch-icon" href="/etc/designs/appeaser/cos/favicons/favicon-57.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/etc/designs/appeaser/cos/favicons/favicon-180.png">
    <link rel="alternate" hreflang="en-AT" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-BE" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-CZ" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
	<link rel="alternate" hreflang="en-DK" href="https://www.cosstores.com/en_dkk/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-FI" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-FR" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-DE" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-HU" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-IE" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-IT" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-NL" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-PL" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-PT" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-SK" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-SI" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
        <link rel="alternate" hreflang="en-ES" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
      	<link rel="alternate" hreflang="en-SE" href="https://www.cosstores.com/en_sek/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
       	<link rel="alternate" hreflang="en-GB" href="https://www.cosstores.com/en_gbp/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
       	<link rel="alternate" hreflang="en-US" href="https://www.cosstores.com/en_usd/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">
		<link rel="alternate" hreflang="x-default" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html">

		<link rel="canonical" href="https://www.cosstores.com/en_eur/men/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html"/>
		<div class="generatorScriptTouchpoint touchpoint parbase"><script type="text/javascript" src="/en_eur/metrics/default/touchpoint.js"></script>

    </div>
<div class="dnsprefetch parbase"></div>
<input type="hidden" id="metaPrice" value="49.0"/>
		</head><!-- Code to manage the mobile preview after css changes by HTML team -->
<body data-component="OPage" class="layout-inside">
<div class="header parbase"><div class="u-no-select">
    <div class="a-overlay js-a-overlay q-opacity-0" data-component="AOverlay"></div>
    <div data-component="MNotification" class="m-notification" style="background-color: #FF571A;">
	<p class="a-paragraph is-richtext" id="warehouseMessageWrap">
		<a href="https://www.cosstores.com/en_gbp/sale.html" style="color: rgb(255,255,255);text-decoration: none;">UP TO 50% OFF
  SALE ONLINE AND IN STORES</a></p>
</div>
<script type="text/javascript">
	$('#warehouseMessageWrap').find('a').addClass('a-link');
</script><div class="cookieMessage cookiemessage parbase"><div data-component="MCookieMessage" class="m-cookie-message">
	<button type="button" class="a-button-nostyle a-icon-close"></button>
	<div class="is-static">
		<p class="a-paragraph">We&#39;ve set your shipping location to <span class="geo-city"></span> But you can select another country <a href="#" class="a-link open-lightbox" data-template="country-selector" data-classes="is-country-selector" style="text-decoration: none;"><span id="geo-city-utils" class="underline">here</span></a>.</p>
	</div>
	<div class="is-richtext" id="cookieMessageWrap">
		<p><p>We use cookies on our website to give you the best service possible.
  Read more <a class="open-in-lightbox" href="/en_eur/customer-service/privacy-notice/cookies.html">here</a>.</p>
</p>
	</div>
</div>

<script>
var _self = this;
   $(document).ready(function(){
       var cookieMessage;
       if($(".open-in-lightbox") && $(".open-in-lightbox").attr("href")){
        _self.privacyCookiePopup($(".open-in-lightbox").attr("href"));
       }
    $(".open-in-lightbox").click(function(e){


        e.preventDefault();

              if($(".o-lightbox ").find(".lightbox-content").length == 0)
        {
           $(" .o-lightbox ").append("<div class='lightbox-content js-content u-clearfix' data-template='empty1' style='display:block'>");

                $('.lightbox-content').html(window.cookieMessage);
             $(".o-lightbox").addClass("is-open is-privacy-policy");
            $(".a-overlay").addClass("is-visible q-opacity-95 q-bg-grey-light custom-overlay");
        }


    });
            $(".a-overlay,.js-close-button").click(function(e){
            if($(".a-overlay").hasClass("custom-overlay")){
                $(".a-overlay").removeClass("q-opacity-95 q-bg-grey-light custom-overlay");
                                                          $(".o-lightbox").removeClass("is-privacy-policy");
                                                          $( ".o-lightbox .lightbox-content " ).remove();
                appeaser.publish(appeaser.Enums.trigger.HIDE_LIGHTBOX);
            }

        });

  });

  function privacyCookiePopup(privacyUrl){
        var url = privacyUrl;
                             setTimeout(function(){
      $.ajax({
                "url" : url,
                "success" : function(data) {
                data = $(data).find('.parsys');
                window.cookieMessage=$(data).html();

                appeaser.scan();
                                           }
                             });
                             },1000);
}
              $('#cookieMessageWrap').find('a').addClass('a-link');
</script>
</div>






<div class="newsletterLightbox parbase"><script type="text/x-handlebars-template" data-template="newsletter-signup" data-once-showing="newsletter-signup" class="">
    </script>
</div>
<header data-component="OHeader" class="o-header u-clearfix ">
        <div id="popupCart" class="cart-addition-section">
          <div class="m-cart-addition">
                <div class="content-wrapper u-clearfix cart-wrapper">
                    <button type="button" class="a-button-nostyle a-icon-close"></button>
                    <label class="a-label js-a-label max"></label>
                    <div class="product-section">
                        <div class="heading">
                            <h2 class="a-heading-2">Added to bag</h2>
                        </div>
                        <button type="button" class="a-button-nostyle a-icon-close"></button>
                        <div class="cart-image-wrapper">
                            <img class="a-image product-image">
                        </div>
                        <div class="cart-item-info">
                            <span class="brand">COS</span>
                            <span class="product-name"></span>
                            <div class="price-section">
                                <span class="price"></span>
                            </div>
                            <div class="size-section">
                                <span class="size-label">Size</span>
                                <span class="size"></span>
                            </div>
                            <div class="color-section">
                                <span class="color-label">Colour</span>
                                <span class="color"></span>
                            </div>
                        </div>
                        <a class="a-button is-primary go-to-bag" href="/en_eur/cart">VIEW BAG</a>
                    </div>
                </div>
            </div>

        </div>

        <div class="minicart">
            <div class="o-minicart" data-component="OMinicart">
                <h2 class="a-heading-2" >
     My bag&nbsp;
     <span class="item-count"></span>
     <button type="button" class="a-icon-close a-button-nostyle"></button>
</h2>
<div class="products">
    <p class="a-paragraph empty-cart-text">Your bag is empty</p>
</div></div>
        </div>

        <div class="topnav topMenu parbase">
<div class="header-container">
	<div class="header-curtain">
		<div class="navigation-icons">
			<button type="button" class="a-button-nostyle a-icon-menu"></button><button type="button" class="a-button-nostyle a-icon-search search"></button>
		</div>
		<div class="header-wrapper">
			<nav data-component="ONavigation" class="o-navigation">
				<div class="navigation-wrapper">
					<div class="result">
						<ul class="result-list js-result-list">
						</ul>
                    </div>
					<div class="main-menu">
						<div class="departments">

								<a href="/en_eur/sale.html" target="_self" class="a-link" data-title="Sale" data-pre-select="true">Sale</a>





								<a href="/en_eur/women.html" target="_self" class="a-link" data-title="Women">Women</a>




								<a href="/en_eur/men.html" target="_self" class="a-link" data-title="Men">Men</a>




								<a href="/en_eur/kids-and-baby.html" target="_self" class="a-link" data-title="KidsBaby">Kids &amp; Baby</a>




								<a href="/en_eur/explore.html" target="_self" class="a-link" data-title="Explore">Explore</a>

						</div>
						<div class="notification-message">
							<p class="a-paragraph" id="localizedTTT">Free shipping on orders over €125</p>
						</div>
						<div class="sub-menu u-not-desktop">
							<a href="#" target="_self" class="a-link open-lightbox" data-template="newsletter-signup" data-classes="is-subscribe">Newsletter</a>
							<a href="/en_eur/store-locator.html.html" target="_self" class="a-link">Store Locator</a>
							<a href="/en_eur/customer-service.html.html" target="_self" class="a-link">Customer Service</a>
						</div>
						<div class="sub-menu">
							<form data-component="MSearch" class="m-search js-search-form" action="/en_eur/search.html" method="GET" autocomplete="on" data-min-characters="3">
								<button type="button" class="a-button-nostyle a-icon-search"></button>
								<input placeholder="Search Products" class="a-input js-search-input" name="q" autocomplete="off">
								<button type="button" class="clear-button a-button-nostyle">Clear</button>
							</form>
							<script>
//tealium script
var localeInfo = {};
	localeInfo.locale = hm.multiCountry.getLocale('HMCORP_locale','en');
	 if(hm.multiCountry.getCountryCode('HMCORP_locale') != ""){
	localeInfo.country = hm.multiCountry.getCountryCode('HMCORP_locale');
    }else{
    localeInfo.country = "DE";
    }
</script>

<a id="noTransactionalClick" href="#" target="_self" class="a-link open-lightbox shipping" data-template="country-selector" data-classes="is-country-selector">Shipping to: <span style="visibility:visible"></span></a>
<div data-classes="is-small" data-template="sign-in" class="sign-in-section">
	<a href="#" target="_self" class="a-link sign-in" onclick="TealiumUtils.trackFunnelLink('login_start');" style="display:none">Sign in</a>
	<a href="https://www.cosstores.com/en_eur/my-account" target="_self" class="a-link account" style="display:none">Account</a>
	<a href="https://www.cosstores.com/en_eur/logout" onclick="Cookies.remove('userCookie')" target="_self" class="a-link sign-out" style="display:none">Sign out</a>
</div>
<script>
$(document).ready(function(){
	cosApp.shared.utils.logInCheck();
});
</script>
<script type="text/x-handlebars-template" id="sign-in">
<ul data-component="MTablist" class="m-tablist tabs-1-2"
	data-tablist-for="sign-in-registration-tabs">
	<li data-toggle="#sign-in-form" class="u-no-select is-active">
		<a href="#sign-in-form" target="_self" class="a-link" onclick="TealiumUtils.trackFunnelLink('login_start');">
			Sign in</a>
	</li>
	<li data-toggle="#registration-form" class="u-no-select">
		<a href="#registration-form" target="_self" class="a-link" onclick="TealiumUtils.trackFunnelLink('registration_start');">
			New customer</a>
	</li>
</ul>

<div data-content-for="sign-in-registration-tabs"
	class="tablist-content">
	<div id="sign-in-form" class="content is-active">
		<div class="o-sign-in in-lightbox">
			<form data-component="OForm" class="o-form"
				action="https://www.cosstores.com/en_eur/j_spring_security_check"  method="POST" onsubmit="TealiumUtils.trackTryLoginRegister('login')">
				<div data-component="MInput" class="m-input" placeholder="Password">
					<label class="a-label js-a-label" for="j_username">Username</label>
					<input placeholder="" class="a-input js-a-input" type="email"
						name="j_username" id="j_username" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
						data-validation-required-text="Enter email address"
						data-validation-pattern-text="Please enter a valid email address">
					<label class="a-label js-a-label" data-placeholder="Email" for="j_username"></label>
				</div>
				<div data-component="MInput" class="m-input no-description" placeholder="">
					<label class="a-label js-a-label" for="j_password">Password</label>
					<input placeholder="" class="a-input js-a-input" type="password"
						name="j_password" id="j_password" required="" pattern="^[^ ]{5,25}$"
						data-validation-required-text="Enter password"
						data-validation-pattern-text="Password must be between 5 - 25 characters and may not contain any spaces">
					<label class="a-label js-a-label" data-placeholder="" for="j_password"></label>
				</div>
				<div class="link-holder" onclick="TealiumUtils.trackFunnelLink('forgot_password_start');">
					<a href="https://www.cosstores.com/en_eur/password/requestSignIn"
						target="_self" class="a-link forgot-password">Can\`t remember your password?</a>
				</div>
				<button type="submit" class="a-button is-primary">
					<span>
					    <label class="a-label js-a-label" data-placeholder="Password">SIGN IN </label>
				    </span>
				</button>

			</form>
		</div>
	</div>

	<div id="registration-form" class="content">
		<div class="o-registration empty-registration">
			<form data-component="OForm" class="o-form"
				action="https://www.cosstores.com/en_eur/register/newcustomer" method="POST" onsubmit="TealiumUtils.trackTryLoginRegister('registration')">
				<div class="o-registration-form">
					<div class="e-mail-input">
						<div data-component="MInput" class="m-input">
							<label class="a-label js-a-label" for="email">Email Address</label>
							<input class="a-input js-a-input" type="email" name="email" id="email" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
								data-validation-required-text="Enter email address"
								data-validation-pattern-text="Please enter a valid email address">
							<label class="a-label js-a-label" data-placeholder="Email" for="email"></label>
						</div>
					</div>
					<div data-component="MInput" class="m-input password" placeholder="Password" id="password">
						<label class="a-label js-a-label" for="pwd">Password</label>
						<input placeholder="Password" class="a-input js-a-input" type="password"
							name="pwd" id="pwd" required pattern="^[^ ]{6,25}$"
							data-validation-required-text="Enter password"
							data-validation-pattern-text="Password must be between 6 - 25 characters and may not contain any spaces">
						<label class="a-label js-a-label" data-placeholder="Enter password" for="pwd">
					</div>
					<div data-component="MInput" class="m-input password-repeat"
						placeholder="Repeat password"
						data-validation-match-field="password">
						<label class="a-label js-a-label" for="checkPwd">Repeat password</label>
						<input placeholder="Repeat password" class="a-input js-a-input"
							type="password" name="checkPwd" id="checkPwd" required
							data-validation-required-text="Please confirm your new password"
							data-validation-match-field-text="Passwords are not matching">
						<label class="a-label js-a-label" for="checkPwd" data-placeholder></label>
					</div>
					<div class="country-section-wrapper u-clearfix">
						<label class="a-label js-a-label country-section">United Kingdom </label>
						<a href="#" target="_self" class="a-link open-lightbox" data-template="country-selector" data-classes="is-country-selector">Change country</a>
					</div>
					<div class="checkbox-input">
						<div class="m-checkbox u-clearfix" id="newsletter">
							<input type="checkbox" class="a-checkbox" id="connected_newsletter" name="hmNewsSubscription">
							<label class="a-label js-a-label custom-box" for="connected_newsletter"></label>
							<label class="a-label js-a-label"for="connected_newsletter">
							    <span class="newsLetterText">I confirm that I am 16 years or older and I consent to COS processing my personal data in order to send personalized marketing material in accordance with the</span>
								<a href="/en_eur/customer-service/privacy-notice/direct-marketing.html" target="_blank" class="a-link policiesLink">privacy notice</a>
						    </label>
						</div>
						<div class="m-checkbox u-clearfix" id="policies">
							<input type="checkbox" class="a-checkbox" name="termsAndConditions" id="connected_policies" required="" data-validation-required-text="">
							    <label class="a-label js-a-label custom-box" for="connected_policies"></label>
							    <label class="a-label js-a-label"for="connected_policies">
							        <span class="policiesText is-richtext">I consent to COS using my personal data to manage my personal account in accordance with the&nbsp;<a href="/en_eur/customer-service/privacy-notice/account.html" target="_blank" class="a-link policiesLink">privacy notice</a></span>
							    </label>
						</div>
					</div>
					<button type="submit" class="a-button is-primary">
						<span>Register</span>
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
<button type="button" class="a-button-nostyle m-button-icon a-icon-close js-close-button"></button>
</script>
						</div>
					</div>
					<div class="category-wrapper">

						<div data-value="Sale" class="categories">

						<div class="category-list">


									<a href="https://www.cosstores.com/en_eur/sale/women_sale.html" target="_self" class="a-link is-sale">


               								 Women’s Sale
               						</a>




									<a href="https://www.cosstores.com/en_eur/sale/men-sale.html" target="_self" class="a-link is-sale">


               								 Men’s Sale
               						</a>




									<a href="https://www.cosstores.com/en_eur/sale/kids-sale.html" target="_self" class="a-link is-sale">


               								 Kids’ Sale
               						</a>




									<a href="https://www.cosstores.com/en_eur/sale/cos-x-hay-sale.html" target="_self" class="a-link is-sale">


               								 COS × HAY Sale
               						</a>



						</div>








		<div class="m-free-tile " style="background-color: #ffffff">





      				 <a href="/en_eur/sale.html" target="_self">
 				   		<picture data-component="APicture" class="a-picture">
				   			<img class="a-image" src="/content/dam/cos/2018/w51/sale-start/FM/600x600_UpTo50_EU_FM.jpg">
				   		</picture>
				   	</a>



		   	<div class="headline-preamble-wrapper">



					<div style="color:#444444" class="q-body-copy-1 is-richtext"><p>
  <br /> With even more added lines...</p>
</div>


	   		</div>




            <div class="promotion-data cos-freetile" hidden>
                <span class="promo_id">Cocooning_women</span>
                <span class="promo_name">W48_AW18_FM</span>
                <span class="promo_creative">Cocooning_women</span>
            </div>

   		</div>
		<div class="items">
		<a href="#" target="_self" class="a-link open-lightbox" data-template="newsletter-signup" data-classes="is-subscribe">
			</a>
	</div>







						</div>

						<div data-value="Women" class="categories">

						<div class="category-list">


									<a href="https://www.cosstores.com/en_eur/women/sale.html" target="_self" class="a-link is-sale">


               								 Sale
               						</a>




									<a href="https://www.cosstores.com/en_eur/women/new-arrivals.html" target="_self" class="a-link ">


               								 New Arrivals
               						</a>




									<a href="https://www.cosstores.com/en_eur/women/knitwear.html" target="_self" class="a-link ">


               								 Knitwear
               						</a>




									<a href="https://www.cosstores.com/en_eur/women/coats-and-jackets.html" target="_self" class="a-link ">


               								 Coats &amp; Jackets
               						</a>




									<a href="https://www.cosstores.com/en_eur/women/dresses.html" target="_self" class="a-link ">


               								 Dresses
               						</a>




									<a href="https://www.cosstores.com/en_eur/women/trousers.html" target="_self" class="a-link ">


               								 Trousers
               						</a>




									<a href="https://www.cosstores.com/en_eur/women/tops.html" target="_self" class="a-link ">


               								 Tops
               						</a>




									<a href="https://www.cosstores.com/en_eur/women/t-shirts.html" target="_self" class="a-link ">


               								 T-shirts
               						</a>




									<a href="https://www.cosstores.com/en_eur/women/shirts.html" target="_self" class="a-link ">


               								 Shirts
               						</a>




									<a href="https://www.cosstores.com/en_eur/women/jeans.html" target="_self" class="a-link ">


               								 Jeans
               						</a>




									<a href="https://www.cosstores.com/en_eur/women/skirts.html" target="_self" class="a-link ">


               								 Skirts
               						</a>




									<a href="https://www.cosstores.com/en_eur/women/jumpsuits.html" target="_self" class="a-link ">


               								 Jumpsuits
               						</a>




















































































						</div>


						<div class="category-list">






































											<a href="https://www.cosstores.com/en_eur/women/new-accessories.html" target="_self" class="a-link ">
											 New Accessories


               						</a>




											<a href="https://www.cosstores.com/en_eur/women/shoes.html" target="_self" class="a-link ">


               								 Shoes
               						</a>




											<a href="https://www.cosstores.com/en_eur/women/bags.html" target="_self" class="a-link ">


               								 Bags &amp; Purses
               						</a>




											<a href="https://www.cosstores.com/en_eur/women/hats-scarves-and-gloves.html" target="_self" class="a-link ">


               								 Hats, Scarves &amp; Gloves
               						</a>




											<a href="https://www.cosstores.com/en_eur/women/jewellery.html" target="_self" class="a-link ">


               								 Jewellery
               						</a>




											<a href="https://www.cosstores.com/en_eur/women/swimwear.html" target="_self" class="a-link ">


               								 Swimwear
               						</a>




											<a href="https://www.cosstores.com/en_eur/women/underwear.html" target="_self" class="a-link ">


               								 Underwear
               						</a>




											<a href="https://www.cosstores.com/en_eur/women/socks-and-tights.html" target="_self" class="a-link ">


               								 Socks &amp; Tights
               						</a>




											<a href="https://www.cosstores.com/en_eur/women/belts.html" target="_self" class="a-link ">


               								 Belts
               						</a>




											<a href="https://www.cosstores.com/en_eur/women/mock-shirts.html" target="_self" class="a-link ">


               								 Mock Shirts
               						</a>




											<a href="https://www.cosstores.com/en_eur/women/hair-accessories.html" target="_self" class="a-link ">


               								 Hair Accessories
               						</a>



















































						</div>


						<div class="category-list">
















































											<a href="https://www.cosstores.com/en_eur/women/the-edit.html" target="_self" class="a-link ">


               								 The Edit: Black &amp; White
											</a>



											<a href="https://www.cosstores.com/en_eur/women/essentials.html" target="_self" class="a-link ">


               								 COS Essentials
											</a>



											<a href="https://www.cosstores.com/en_eur/women/product-care-guide.html" target="_self" class="a-link ">


               								 Product Care Guide
											</a>



											<a href="https://www.cosstores.com/en_eur/women/leisurewear.html" target="_self" class="a-link ">


               								 Leisurewear
											</a>



											<a href="https://www.cosstores.com/en_eur/women/books.html" target="_self" class="a-link ">


               								 Books
											</a>
























						</div>






		<div class="m-free-tile " style="background-color: #ffffff">





      				 <a href="/en_eur/women/sale.html" target="_self">
 				   		<picture data-component="APicture" class="a-picture">
				   			<img class="a-image" src="/content/dam/cos/2018/w51/sale-start/FM/600x600_UpTo50_EU_FM.jpg">
				   		</picture>
				   	</a>



		   	<div class="headline-preamble-wrapper">



					<div style="color:#444444" class="q-body-copy-1 is-richtext"><p>
  <br /> With even more added lines...</p>
</div>


	   		</div>




            <div class="promotion-data cos-freetile" hidden>
                <span class="promo_id">Cocooning_men</span>
                <span class="promo_name">W48_AW18_Startpage</span>
                <span class="promo_creative">Cocooning_men</span>
            </div>

   		</div>
		<div class="items">
		<a href="#" target="_self" class="a-link open-lightbox" data-template="newsletter-signup" data-classes="is-subscribe">
			</a>
	</div>







						</div>

						<div data-value="Men" class="categories">

						<div class="category-list">


									<a href="https://www.cosstores.com/en_eur/men/sale.html" target="_self" class="a-link is-sale">


               								 Sale
               						</a>




									<a href="https://www.cosstores.com/en_eur/men/new-arrivals.html" target="_self" class="a-link ">


               								 New Arrivals
               						</a>




									<a href="https://www.cosstores.com/en_eur/men/knitwear.html" target="_self" class="a-link ">


               								 Knitwear
               						</a>




									<a href="https://www.cosstores.com/en_eur/men/coats-and-jackets.html" target="_self" class="a-link ">


               								 Coats &amp; Jackets
               						</a>




									<a href="https://www.cosstores.com/en_eur/men/trousers.html" target="_self" class="a-link ">


               								 Trousers
               						</a>




									<a href="https://www.cosstores.com/en_eur/men/sweatshirts.html" target="_self" class="a-link ">


               								 Sweatshirts
               						</a>




									<a href="https://www.cosstores.com/en_eur/men/t-shirts.html" target="_self" class="a-link ">


               								 T-shirts
               						</a>




									<a href="https://www.cosstores.com/en_eur/men/shirts.html" target="_self" class="a-link ">


               								 Shirts
               						</a>




									<a href="https://www.cosstores.com/en_eur/men/polo-shirts.html" target="_self" class="a-link ">


               								 Polo Shirts
               						</a>




									<a href="https://www.cosstores.com/en_eur/men/jeans.html" target="_self" class="a-link ">


               								 Jeans
               						</a>




									<a href="https://www.cosstores.com/en_eur/men/suits.html" target="_self" class="a-link ">


               								 Suits
               						</a>























































































						</div>


						<div class="category-list">



































											<a href="https://www.cosstores.com/en_eur/men/shoes.html" target="_self" class="a-link ">


               								 Shoes
               						</a>




											<a href="https://www.cosstores.com/en_eur/men/hats-scarves-and-gloves.html" target="_self" class="a-link ">


               								 Hats, Scarves &amp; Gloves
               						</a>




											<a href="https://www.cosstores.com/en_eur/men/bags-and-wallets.html" target="_self" class="a-link ">


               								 Bags &amp; Wallets
               						</a>




											<a href="https://www.cosstores.com/en_eur/men/swimwear.html" target="_self" class="a-link ">


               								 Swimwear
               						</a>




											<a href="https://www.cosstores.com/en_eur/men/socks.html" target="_self" class="a-link ">


               								 Socks
               						</a>




											<a href="https://www.cosstores.com/en_eur/men/underwear.html" target="_self" class="a-link ">


               								 Underwear
               						</a>




											<a href="https://www.cosstores.com/en_eur/men/belts.html" target="_self" class="a-link ">


               								 Belts
               						</a>




											<a href="https://www.cosstores.com/en_eur/men/small-accessories.html" target="_self" class="a-link ">


               								 Small Accessories
               						</a>































































						</div>


						<div class="category-list">








































											<a href="https://www.cosstores.com/en_eur/men/the-edit.html" target="_self" class="a-link ">


               								 The Edit: Black &amp; White
											</a>



											<a href="https://www.cosstores.com/en_eur/men/essentials.html" target="_self" class="a-link ">


               								 COS Essentials
											</a>



											<a href="https://www.cosstores.com/en_eur/men/product-care-guide.html" target="_self" class="a-link ">


               								 Product Care Guide
											</a>



											<a href="https://www.cosstores.com/en_eur/men/leisurewear.html" target="_self" class="a-link ">


               								 Leisurewear
											</a>



											<a href="https://www.cosstores.com/en_eur/men/books.html" target="_self" class="a-link ">


               								 Books
											</a>
































						</div>






		<div class="m-free-tile " style="background-color: #ffffff">





      				 <a href="/en_eur/men/sale.html" target="_self">
 				   		<picture data-component="APicture" class="a-picture">
				   			<img class="a-image" src="/content/dam/cos/2018/w51/sale-start/FM/600x600_UpTo50_EU_FM.jpg">
				   		</picture>
				   	</a>



		   	<div class="headline-preamble-wrapper">



					<div style="color:#444444" class="q-body-copy-1 is-richtext"><p>
  <br /> With even more added lines...</p>
</div>


	   		</div>




            <div class="promotion-data cos-freetile" hidden>
                <span class="promo_id">Sale_step2_Kids</span>
                <span class="promo_name">W40_AW18_FM</span>
                <span class="promo_creative">Sale_step2_Kids</span>
            </div>

   		</div>
		<div class="items">
		<a href="#" target="_self" class="a-link open-lightbox" data-template="newsletter-signup" data-classes="is-subscribe">
			</a>
	</div>







						</div>

						<div data-value="KidsBaby" class="categories">

						<div class="category-list">


									<a href="https://www.cosstores.com/en_eur/kids-and-baby/sale.html" target="_self" class="a-link is-sale">


               								 Sale
               						</a>




									<a href="https://www.cosstores.com/en_eur/kids-and-baby/all-kids.html" target="_self" class="a-link ">


               								 Shop All Kids
               						</a>




									<a href="https://www.cosstores.com/en_eur/kids-and-baby/new-arrivals.html" target="_self" class="a-link ">


               								 New Arrivals
               						</a>




									<a href="https://www.cosstores.com/en_eur/kids-and-baby/girls.html" target="_self" class="a-link ">


               								 Girls
               						</a>




									<a href="https://www.cosstores.com/en_eur/kids-and-baby/boys.html" target="_self" class="a-link ">


               								 Boys
               						</a>




									<a href="https://www.cosstores.com/en_eur/kids-and-baby/knitwear.html" target="_self" class="a-link ">


               								 Knitwear
               						</a>




									<a href="https://www.cosstores.com/en_eur/kids-and-baby/dresses.html" target="_self" class="a-link ">


               								 Dresses
               						</a>




									<a href="https://www.cosstores.com/en_eur/kids-and-baby/tops.html" target="_self" class="a-link ">


               								 Tops
               						</a>




									<a href="https://www.cosstores.com/en_eur/kids-and-baby/trousers.html" target="_self" class="a-link ">


               								 Trousers
               						</a>




									<a href="https://www.cosstores.com/en_eur/kids-and-baby/coats-and-jackets.html" target="_self" class="a-link ">


               								 Coats &amp; Jackets
               						</a>




									<a href="https://www.cosstores.com/en_eur/kids-and-baby/accessories.html" target="_self" class="a-link ">


               								 Accessories
               						</a>




									<a href="https://www.cosstores.com/en_eur/kids-and-baby/books-and-toys.html" target="_self" class="a-link ">


               								 Books &amp; Toys
               						</a>















						</div>


						<div class="category-list">






































											<a href="https://www.cosstores.com/en_eur/kids-and-baby/all-baby.html" target="_self" class="a-link ">


               								 Shop All Baby
               						</a>




											<a href="https://www.cosstores.com/en_eur/kids-and-baby/baby-clothing.html" target="_self" class="a-link ">


               								 Clothing
               						</a>




											<a href="https://www.cosstores.com/en_eur/kids-and-baby/baby-accessories.html" target="_self" class="a-link ">


               								 Accessories
               						</a>






						</div>







		<div class="m-free-tile " style="background-color: #ffffff">





      				 <a href="/en_eur/kids-and-baby/sale.html" target="_self">
 				   		<picture data-component="APicture" class="a-picture">
				   			<img class="a-image" src="/content/dam/cos/2018/w51/sale-start/FM/600x600_UpTo50_EU_FM.jpg">
				   		</picture>
				   	</a>



		   	<div class="headline-preamble-wrapper">



					<div style="color:#444444" class="q-body-copy-1 is-richtext"><p>
  <br /> With even more added lines...</p>
</div>


	   		</div>




            <div class="promotion-data cos-freetile" hidden>
                <span class="promo_id">Hay</span>
                <span class="promo_name">W32_SS18_FM</span>
                <span class="promo_creative">Hay</span>
            </div>

   		</div>
		<div class="items">
		<a href="#" target="_self" class="a-link open-lightbox" data-template="newsletter-signup" data-classes="is-subscribe">
			</a>
	</div>







						</div>

						<div data-value="Explore" class="categories">

						<div class="category-list">


									<a href="https://www.cosstores.com/en_eur/explore/things.html" target="_self" class="a-link ">
											 Things


               						</a>




									<a href="https://www.cosstores.com/en_eur/explore/projects.html" target="_self" class="a-link ">
											 Projects


               						</a>




									<a href="https://www.cosstores.com/en_eur/explore/magazine.html" target="_self" class="a-link ">
											 Magazine


               						</a>




									<a href="https://www.cosstores.com/en_eur/explore/lookbook.html" target="_self" class="a-link ">


               								 AW18 Lookbook
               						</a>




									<a href="https://www.cosstores.com/en_eur/explore/cos-buildings.html" target="_self" class="a-link ">
											 COS Buildings


               						</a>









						</div>








		<div class="m-free-tile " style="background-color: #ffffff">





      				 <a href="/en_eur/explore/cos-buildings/coal-drops-yard.html" target="_self">
 				   		<picture data-component="APicture" class="a-picture">
				   			<img class="a-image" src="/content/dam/cos/cos-buildings/kings-cross/600x600_kingsx_07.jpg">
				   		</picture>
				   	</a>



		   	<div class="headline-preamble-wrapper">



					<div style="color:#444444" class="q-body-copy-1 is-richtext"><p>   <br /> With even more added lines...</p>
</div>


	   		</div>




            <div class="promotion-data cos-freetile" hidden>
                <span class="promo_id">HAY_FM</span>
                <span class="promo_name">W37_AW18_FM</span>
                <span class="promo_creative">HAY_FM</span>
            </div>

   		</div>
		<div class="items">
		<a href="#" target="_self" class="a-link open-lightbox" data-template="newsletter-signup" data-classes="is-subscribe">
			</a>
	</div>







						</div>

					</div>
					<button type="button" class="a-button-nostyle a-icon-close"></button>
				</div>
			</nav>
		</div>
		<a href="#" target="_self" class="a-link back-to-top">Back to top</a>
		<div class="m-bag">

				<a href="/en_eur/cart" target="_self" class="a-link">
					<h3 class="a-heading-3">
						<span>My bag</span><span class="quantity"></span>
					</h3>
					<span class="a-icon-bag"></span>
				</a>

		</div>
		<!-- /content/cos/en_eur/index -->
<div class="back-to-shop"><a href="/en_eur/index.html" target="_self" class="a-link"><h3 class="a-heading-3">Back to shop</h3></a></div>
		<a href="/en_eur/index.html" target="_self" class="a-link a-cos-logo">
				<!--?xml version="1.0" encoding="utf-8"?-->
				<!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->


				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 1133.9 364.8"
					style="enable-background: new 0 0 1133.9 364.8;"
					xml:space="preserve">
<style type="text/css">
.st0 {
	fill: none;
}

.st1 {
	fill: #F8C05A;
}

.st2 {
	fill: #FFFFFF;
}

.st3 {
	fill: #444444;
}
</style>
<pattern x="268.8" y="602.4" width="69" height="69"
						patternUnits="userSpaceOnUse" id="Polka_Dot_Pattern"
						viewBox="2.1 -70.9 69 69" style="overflow:visible;">
	<g>
		<rect x="2.1" y="-70.9" class="st0" width="69" height="69"></rect>
		<rect x="2.1" y="-70.9" class="st1" width="69" height="69"></rect>
		<g>
			<path class="st2"
						d="M61.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-71.7,61.8-71.7,61.8-71.7
				C61.8-71.6,61.8-71.6,61.8-71.7"></path>
			<path class="st2"
						d="M54.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-71.7,54.1-71.7,54.1-71.7
				C54.1-71.6,54.1-71.6,54.1-71.7"></path>
			<path class="st2"
						d="M46.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.4-71.7,46.4-71.7,46.4-71.7
				C46.4-71.6,46.4-71.6,46.4-71.7"></path>
			<path class="st2"
						d="M38.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-71.7,38.8-71.7,38.8-71.7
				C38.8-71.6,38.8-71.6,38.8-71.7"></path>
			<path class="st2"
						d="M31.1-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-71.7,31.1-71.7,31.1-71.7
				C31.1-71.6,31.1-71.6,31.1-71.7"></path>
			<path class="st2"
						d="M23.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.4-71.7,23.4-71.7,23.4-71.7
				C23.4-71.6,23.4-71.6,23.4-71.7"></path>
			<path class="st2"
						d="M15.8-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-71.7,15.8-71.7,15.8-71.7
				C15.8-71.6,15.8-71.6,15.8-71.7"></path>
			<path class="st2"
						d="M8.1-71.7c0,0.1,0,0.1,0,0.2C8-71.4,8-71.4,7.9-71.3c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.1-71.7,8.1-71.7,8.1-71.7
				C8.1-71.6,8.1-71.6,8.1-71.7"></path>
			<path class="st2"
						d="M0.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.8-69.4,1-69,1.2-68.9c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.4-71.7,0.4-71.7,0.4-71.7
				C0.4-71.6,0.4-71.6,0.4-71.7"></path>
		</g>
		<g>
			<path class="st2"
						d="M69.4-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-71.7,69.4-71.7,69.4-71.7
				C69.4-71.6,69.4-71.6,69.4-71.7"></path>
		</g>
		<path class="st2"
						d="M0.5-71.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
			c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-69.4,1-69,1.3-68.9c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1
			c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3
			c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8c-0.2,0-0.3,0.1-0.4,0.2
			c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-71.7,0.5-71.7,0.5-71.7C0.5-71.6,0.5-71.6,0.5-71.7"></path>
		<g>
			<g>
				<path class="st2"
						d="M69.4-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-64,69.4-64.1,69.4-64C69.4-64,69.4-64,69.4-64"></path>
				<path class="st2"
						d="M61.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-64,61.8-64.1,61.8-64C61.8-64,61.8-64,61.8-64"></path>
				<path class="st2"
						d="M54.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-64,54.1-64.1,54.1-64C54.1-64,54.1-64,54.1-64"></path>
				<path class="st2"
						d="M46.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-64,46.5-64.1,46.5-64C46.5-64,46.5-64,46.5-64"></path>
				<path class="st2"
						d="M38.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-64,38.8-64.1,38.8-64C38.8-64,38.8-64,38.8-64"></path>
				<path class="st2"
						d="M31.1-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-64,31.1-64.1,31.1-64C31.1-64,31.1-64,31.1-64"></path>
				<path class="st2"
						d="M23.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-64,23.5-64.1,23.5-64C23.5-64,23.5-64,23.5-64"></path>
				<path class="st2"
						d="M15.8-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-64,15.8-64.1,15.8-64C15.8-64,15.8-64,15.8-64"></path>
				<path class="st2"
						d="M8.2-64c0,0.1,0,0.1,0,0.2C8.1-63.7,8-63.7,8-63.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-62.2,8.2-62,8.3-61.9c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-64,8.2-64.1,8.2-64C8.1-64,8.1-64,8.2-64"></path>
				<path class="st2"
						d="M0.5-64c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-62,3-61.9,3.1-62c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-64,0.5-64.1,0.5-64C0.5-64,0.5-64,0.5-64"></path>
			</g>
			<g>
				<path class="st2"
						d="M69.4-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-56.4,69.4-56.4,69.4-56.3
					C69.4-56.3,69.4-56.3,69.4-56.3"></path>
				<path class="st2"
						d="M61.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-56.4,61.8-56.4,61.8-56.3
					C61.8-56.3,61.8-56.3,61.8-56.3"></path>
				<path class="st2"
						d="M54.1-56.3c0,0.1,0,0.1,0,0.2C54-56.1,54-56.1,53.9-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-56.4,54.1-56.4,54.1-56.3
					C54.1-56.3,54.1-56.3,54.1-56.3"></path>
				<path class="st2"
						d="M46.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-56.4,46.5-56.4,46.5-56.3
					C46.5-56.3,46.5-56.3,46.5-56.3"></path>
				<path class="st2"
						d="M38.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-56.4,38.8-56.4,38.8-56.3
					C38.8-56.3,38.8-56.3,38.8-56.3"></path>
				<path class="st2"
						d="M31.1-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-56.4,31.1-56.4,31.1-56.3
					C31.1-56.3,31.1-56.3,31.1-56.3"></path>
				<path class="st2"
						d="M23.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-56.4,23.5-56.4,23.5-56.3
					C23.5-56.3,23.5-56.3,23.5-56.3"></path>
				<path class="st2"
						d="M15.8-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-56.4,15.8-56.4,15.8-56.3
					C15.8-56.3,15.8-56.3,15.8-56.3"></path>
				<path class="st2"
						d="M8.2-56.3c0,0.1,0,0.1,0,0.2C8.1-56.1,8-56.1,8-56c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-56.4,8.2-56.4,8.2-56.3
					C8.1-56.3,8.1-56.3,8.2-56.3"></path>
				<path class="st2"
						d="M0.5-56.3c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-56.4,0.5-56.4,0.5-56.3
					C0.5-56.3,0.5-56.3,0.5-56.3"></path>
			</g>
			<g>
				<path class="st2"
						d="M69.4-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-48.7,69.4-48.8,69.4-48.7
					C69.4-48.7,69.4-48.7,69.4-48.7"></path>
				<path class="st2"
						d="M61.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-48.7,61.8-48.8,61.8-48.7
					C61.8-48.7,61.8-48.7,61.8-48.7"></path>
				<path class="st2"
						d="M54.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-48.7,54.1-48.8,54.1-48.7
					C54.1-48.7,54.1-48.7,54.1-48.7"></path>
				<path class="st2"
						d="M46.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-48.7,46.5-48.8,46.5-48.7
					C46.5-48.7,46.5-48.7,46.5-48.7"></path>
				<path class="st2"
						d="M38.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-48.7,38.8-48.8,38.8-48.7
					C38.8-48.7,38.8-48.7,38.8-48.7"></path>
				<path class="st2"
						d="M31.1-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-48.7,31.1-48.8,31.1-48.7
					C31.1-48.7,31.1-48.7,31.1-48.7"></path>
				<path class="st2"
						d="M23.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-48.7,23.5-48.8,23.5-48.7
					C23.5-48.7,23.5-48.7,23.5-48.7"></path>
				<path class="st2"
						d="M15.8-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-48.7,15.8-48.8,15.8-48.7
					C15.8-48.7,15.8-48.7,15.8-48.7"></path>
				<path class="st2"
						d="M8.2-48.7c0,0.1,0,0.1,0,0.2C8.1-48.4,8-48.4,8-48.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C8.5-46.4,8.7-46,8.9-46c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-48.7,8.2-48.8,8.2-48.7
					C8.1-48.7,8.1-48.7,8.2-48.7"></path>
				<path class="st2"
						d="M0.5-48.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-46.4,1-46,1.3-46c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1
					c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3
					c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8c-0.2,0-0.3,0.1-0.4,0.2
					c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-48.7,0.5-48.8,0.5-48.7C0.5-48.7,0.5-48.7,0.5-48.7"></path>
			</g>
			<g>
				<path class="st2"
						d="M69.4-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-41.1,69.4-41.1,69.4-41C69.4-41,69.4-41,69.4-41
					"></path>
				<path class="st2"
						d="M61.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-41.1,61.8-41.1,61.8-41C61.8-41,61.8-41,61.8-41
					"></path>
				<path class="st2"
						d="M54.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-41.1,54.1-41.1,54.1-41C54.1-41,54.1-41,54.1-41
					"></path>
				<path class="st2"
						d="M46.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-41.1,46.5-41.1,46.5-41C46.5-41,46.5-41,46.5-41
					"></path>
				<path class="st2"
						d="M38.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-41.1,38.8-41.1,38.8-41C38.8-41,38.8-41,38.8-41
					"></path>
				<path class="st2"
						d="M31.1-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-41.1,31.1-41.1,31.1-41C31.1-41,31.1-41,31.1-41
					"></path>
				<path class="st2"
						d="M23.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-41.1,23.5-41.1,23.5-41C23.5-41,23.5-41,23.5-41
					"></path>
				<path class="st2"
						d="M15.8-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-41.1,15.8-41.1,15.8-41C15.8-41,15.8-41,15.8-41
					"></path>
				<path class="st2"
						d="M8.2-41c0,0.1,0,0.1,0,0.2C8.1-40.8,8-40.8,8-40.7c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-41.1,8.2-41.1,8.2-41C8.1-41,8.1-41,8.2-41"></path>
				<path class="st2"
						d="M0.5-41c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-39,3-39,3.1-39c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-41.1,0.5-41.1,0.5-41C0.5-41,0.5-41,0.5-41"></path>
			</g>
			<g>
				<path class="st2"
						d="M69.4-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-33.4,69.4-33.5,69.4-33.4
					C69.4-33.4,69.4-33.4,69.4-33.4"></path>
				<path class="st2"
						d="M61.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-33.4,61.8-33.5,61.8-33.4
					C61.8-33.4,61.8-33.4,61.8-33.4"></path>
				<path class="st2"
						d="M54.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-33.4,54.1-33.5,54.1-33.4
					C54.1-33.4,54.1-33.4,54.1-33.4"></path>
				<path class="st2"
						d="M46.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-33.4,46.5-33.5,46.5-33.4
					C46.5-33.4,46.5-33.4,46.5-33.4"></path>
				<path class="st2"
						d="M38.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-33.4,38.8-33.5,38.8-33.4
					C38.8-33.4,38.8-33.4,38.8-33.4"></path>
				<path class="st2"
						d="M31.1-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-33.4,31.1-33.5,31.1-33.4
					C31.1-33.4,31.1-33.4,31.1-33.4"></path>
				<path class="st2"
						d="M23.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-33.4,23.5-33.5,23.5-33.4
					C23.5-33.4,23.5-33.4,23.5-33.4"></path>
				<path class="st2"
						d="M15.8-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-33.4,15.8-33.5,15.8-33.4
					C15.8-33.4,15.8-33.4,15.8-33.4"></path>
				<path class="st2"
						d="M8.2-33.4c0,0.1,0,0.1,0,0.2C8.1-33.1,8-33.1,8-33.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-33.4,8.2-33.5,8.2-33.4
					C8.1-33.4,8.1-33.4,8.2-33.4"></path>
				<path class="st2"
						d="M0.5-33.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-33.4,0.5-33.5,0.5-33.4
					C0.5-33.4,0.5-33.4,0.5-33.4"></path>
			</g>
			<g>
				<path class="st2"
						d="M69.4-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-25.8,69.4-25.8,69.4-25.7
					C69.4-25.7,69.4-25.7,69.4-25.7"></path>
				<path class="st2"
						d="M61.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-25.8,61.8-25.8,61.8-25.7
					C61.8-25.7,61.8-25.7,61.8-25.7"></path>
				<path class="st2"
						d="M54.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-25.8,54.1-25.8,54.1-25.7
					C54.1-25.7,54.1-25.7,54.1-25.7"></path>
				<path class="st2"
						d="M46.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-25.8,46.5-25.8,46.5-25.7
					C46.5-25.7,46.5-25.7,46.5-25.7"></path>
				<path class="st2"
						d="M38.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-25.8,38.8-25.8,38.8-25.7
					C38.8-25.7,38.8-25.7,38.8-25.7"></path>
				<path class="st2"
						d="M31.1-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-25.8,31.1-25.8,31.1-25.7
					C31.1-25.7,31.1-25.7,31.1-25.7"></path>
				<path class="st2"
						d="M23.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-25.8,23.5-25.8,23.5-25.7
					C23.5-25.7,23.5-25.7,23.5-25.7"></path>
				<path class="st2"
						d="M15.8-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-25.8,15.8-25.8,15.8-25.7
					C15.8-25.7,15.8-25.7,15.8-25.7"></path>
				<path class="st2"
						d="M8.2-25.7c0,0.1,0,0.1,0,0.2C8.1-25.4,8-25.5,8-25.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-24,8.2-23.8,8.3-23.6c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-25.8,8.2-25.8,8.2-25.7
					C8.1-25.7,8.1-25.7,8.2-25.7"></path>
				<path class="st2"
						d="M0.5-25.7c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-23.5,1-23.1,1.3-23c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-25.8,0.5-25.8,0.5-25.7
					C0.5-25.7,0.5-25.7,0.5-25.7"></path>
			</g>
			<g>
				<path class="st2"
						d="M69.4-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-18.1,69.4-18.2,69.4-18.1
					C69.4-18,69.4-18.1,69.4-18.1"></path>
				<path class="st2"
						d="M61.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-18.1,61.8-18.2,61.8-18.1
					C61.8-18,61.8-18.1,61.8-18.1"></path>
				<path class="st2"
						d="M54.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-18.1,54.1-18.2,54.1-18.1
					C54.1-18,54.1-18.1,54.1-18.1"></path>
				<path class="st2"
						d="M46.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-18.1,46.5-18.2,46.5-18.1
					C46.5-18,46.5-18.1,46.5-18.1"></path>
				<path class="st2"
						d="M38.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-18.1,38.8-18.2,38.8-18.1
					C38.8-18,38.8-18.1,38.8-18.1"></path>
				<path class="st2"
						d="M31.1-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-18.1,31.1-18.2,31.1-18.1
					C31.1-18,31.1-18.1,31.1-18.1"></path>
				<path class="st2"
						d="M23.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-18.1,23.5-18.2,23.5-18.1
					C23.5-18,23.5-18.1,23.5-18.1"></path>
				<path class="st2"
						d="M15.8-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-18.1,15.8-18.2,15.8-18.1
					C15.8-18,15.8-18.1,15.8-18.1"></path>
				<path class="st2"
						d="M8.2-18.1c0,0.1,0,0.1,0,0.2C8.1-17.8,8-17.8,8-17.8c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-16.3,8.2-16.1,8.3-16c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-18.1,8.2-18.2,8.2-18.1C8.1-18,8.1-18.1,8.2-18.1
					"></path>
				<path class="st2"
						d="M0.5-18.1c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5C2.8-16.1,3-16,3.1-16c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-18.1,0.5-18.2,0.5-18.1C0.5-18,0.5-18.1,0.5-18.1
					"></path>
			</g>
			<g>
				<path class="st2"
						d="M69.4-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-10.5,69.4-10.5,69.4-10.4
					C69.4-10.4,69.4-10.4,69.4-10.4"></path>
				<path class="st2"
						d="M61.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1C63.9-8,63.8-8.2,64-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-10.5,61.8-10.5,61.8-10.4
					C61.8-10.4,61.8-10.4,61.8-10.4"></path>
				<path class="st2"
						d="M54.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-10.5,54.1-10.5,54.1-10.4
					C54.1-10.4,54.1-10.4,54.1-10.4"></path>
				<path class="st2"
						d="M46.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-10.5,46.5-10.5,46.5-10.4
					C46.5-10.4,46.5-10.4,46.5-10.4"></path>
				<path class="st2"
						d="M38.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1C40.9-8,40.8-8.2,41-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-10.5,38.8-10.5,38.8-10.4
					C38.8-10.4,38.8-10.4,38.8-10.4"></path>
				<path class="st2"
						d="M31.1-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-10.5,31.1-10.5,31.1-10.4
					C31.1-10.4,31.1-10.4,31.1-10.4"></path>
				<path class="st2"
						d="M23.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-10.5,23.5-10.5,23.5-10.4
					C23.5-10.4,23.5-10.4,23.5-10.4"></path>
				<path class="st2"
						d="M15.8-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1C17.9-8,17.8-8.2,18-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-10.5,15.8-10.5,15.8-10.4
					C15.8-10.4,15.8-10.4,15.8-10.4"></path>
				<path class="st2"
						d="M8.2-10.4c0,0.1,0,0.1,0,0.2C8.1-10.1,8-10.2,8-10.1C7.9-10,7.9-9.8,7.9-9.8c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-8.7,8.2-8.5,8.3-8.3c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C8.2-10.5,8.2-10.5,8.2-10.4
					C8.1-10.4,8.1-10.4,8.2-10.4"></path>
				<path class="st2"
						d="M0.5-10.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1C0.3-10,0.2-9.8,0.2-9.8c-0.2,0.1,0,0.2,0,0.3
					c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C0.9-8.2,1-7.8,1.3-7.7c0.2,0,0.4-0.1,0.5-0.1
					c0.2,0,0.4,0,0.6-0.1C2.6-8,2.5-8.2,2.7-8.3c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
					c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
					c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C0.5-10.5,0.5-10.5,0.5-10.4
					C0.5-10.4,0.5-10.4,0.5-10.4"></path>
			</g>
		</g>
		<g>
			<path class="st2"
						d="M69.4-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C69.8-0.5,70-0.1,70.2,0c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C69.4-2.8,69.4-2.9,69.4-2.8
				C69.4-2.7,69.4-2.8,69.4-2.8"></path>
			<path class="st2"
						d="M61.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C61.6-1,61.8-0.8,62-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C61.8-2.8,61.8-2.9,61.8-2.8
				C61.8-2.7,61.8-2.8,61.8-2.8"></path>
			<path class="st2"
						d="M54.1-2.8c0,0.1,0,0.1,0,0.2C54-2.5,54-2.5,53.9-2.5c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C54-1,54.1-0.8,54.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C56.9-0.8,57-1,57.1-1.2c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C54.1-2.8,54.1-2.9,54.1-2.8
				C54.1-2.7,54.1-2.8,54.1-2.8"></path>
			<path class="st2"
						d="M46.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C46.8-0.5,47-0.1,47.2,0c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C46.5-2.8,46.5-2.9,46.5-2.8
				C46.5-2.7,46.5-2.8,46.5-2.8"></path>
			<path class="st2"
						d="M38.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C38.6-1,38.8-0.8,39-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C38.8-2.8,38.8-2.9,38.8-2.8
				C38.8-2.7,38.8-2.8,38.8-2.8"></path>
			<path class="st2"
						d="M31.1-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C31-1,31.1-0.8,31.3-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C31.1-2.8,31.1-2.9,31.1-2.8
				C31.1-2.7,31.1-2.8,31.1-2.8"></path>
			<path class="st2"
						d="M23.5-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.4,0.5C23.8-0.5,24-0.1,24.3,0c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C23.5-2.8,23.5-2.9,23.5-2.8
				C23.5-2.7,23.5-2.8,23.5-2.8"></path>
			<path class="st2"
						d="M15.8-2.8c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C15.7-1,15.8-0.8,16-0.7c0.2,0.1,0.4,0.6,0.6,0.6c0.2,0,0.4-0.1,0.5-0.1
				c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2
				c0-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8
				c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2,0.1-0.2,0.2C15.8-2.8,15.8-2.9,15.8-2.8
				C15.8-2.7,15.8-2.8,15.8-2.8"></path>
			<path class="st2"
						d="M8.2-2.8c0,0.1,0,0.1,0,0.2C8.1-2.5,8-2.5,8-2.5C7.9-2.4,7.9-2.2,7.9-2.1c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C8-1,8.2-0.8,8.3-0.7C8.5-0.5,8.7-0.1,8.9,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1
				c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1c0.2-0.1,0.3-0.3,0.4-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3
				c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C9-3.5,8.8-3.4,8.7-3.4
				C8.5-3.3,8.6-3.2,8.4-3.1C8.3-3.1,8.2-3,8.2-2.9C8.2-2.8,8.2-2.9,8.2-2.8C8.1-2.7,8.1-2.8,8.2-2.8"></path>
			<path class="st2"
						d="M0.5-2.8c0,0.1,0,0.1,0,0.2C0.4-2.5,0.4-2.5,0.3-2.5C0.3-2.4,0.2-2.2,0.2-2.1c-0.2,0.1,0,0.2,0,0.3
				c0,0,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4C0.3-1,0.5-0.8,0.7-0.7C0.9-0.5,1-0.1,1.3,0c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4,0,0.6-0.1
				c0.2-0.1,0.1-0.3,0.3-0.5c0.1-0.1,0.3,0,0.4-0.1C3.3-0.8,3.4-1,3.5-1.2c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.2,0.1-0.3
				c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c-0.4-0.7-1.2-0.9-2-0.8C1.3-3.5,1.2-3.4,1-3.4
				C0.9-3.3,0.9-3.2,0.7-3.1C0.6-3.1,0.5-3,0.5-2.9C0.5-2.8,0.5-2.9,0.5-2.8C0.5-2.7,0.5-2.8,0.5-2.8"></path>
		</g>
	</g>
</pattern>
<g>
	<path class="st3"
						d="M193.2,331.4c41.6,0,80.2-9.3,124.8-30.1v33.4c-44.6,20.8-83.2,30.1-124.8,30.1C86.7,364.8,0,287.5,0,175.9
		c0-6.1,0.2-11.7,0.7-17.6C8.5,261.3,91.9,331.4,193.2,331.4z M53.5,142.4c0-82.8,63.3-138,139.7-138c41.6,0,83.2,11.5,124.8,38.3
		v33.4c-41.6-26.7-83.2-38.3-124.8-38.3c-70.2,0-130.9,46.8-138.7,121.8C53.9,154.2,53.5,148.4,53.5,142.4z M794.7,175.9
		c0,104.2-84.7,188.7-188.9,188.7c-104.2,0-188.7-84.5-188.7-188.7c0-5.9,0.2-11.3,0.7-17.1c8.2,96.6,89.2,172.4,188,172.4
		c98.6,0,179.8-75.8,188.2-172.2C794.5,164.6,794.7,170.3,794.7,175.9z M741.6,141.9c0-76.5-60.8-136.5-135.4-136.5
		c-74.7,0-135.4,60-135.4,136.5c0,6,0.2,11.5,0.9,17.3c8-68.5,65.2-120.3,134.5-120.3c69.5,0,126.7,51.8,134.5,120.5
		C741.4,153.6,741.6,147.8,741.6,141.9z M1133.9,257.4c0,63-57.2,107.3-127.2,107.3c-51.1,0-98.4-18-129.8-57l18.4-14.5
		c30.1,26.2,69.3,38.1,111.4,38.1c64.1,0,117.4-37.2,125.9-91.7C1133.5,245.2,1133.9,251.1,1133.9,257.4z M1081.8,224
		c0,6.9-0.9,12.8-2.6,18.4c-22.7-63.3-192.4-41.6-192.4-158c0-5.8,0.4-11.1,1.3-16.3C905.2,172.5,1081.8,146,1081.8,224z
		 M1107.8,16.9c6.5,5,12.6,10.6,18,17.1l-35.7,32.7c-18.9-18.9-47.9-33.2-84.5-33.2c-29.9,0-55.2,11.5-63.7,33.4
		c-2-4.8-3.2-9.8-3.2-16c0-33.2,29.7-50.9,66.9-50.9c36.6,0,65.6,14.3,84.5,33.2L1107.8,16.9z"></path>
</g>
</svg>
</a>
		<div class="mobile-background u-not-tablet u-not-desktop"></div>
	</div>
</div>
</div>
<div class="autosuggestsearch parbase"><div class="o-search u-clearfix" data-component="OSearch">
	<form action="/en_eur/search.html" method="GET" autocomplete="on" data-min-characters="3" class="search-form u-clearfix">
		<button type="button" class="a-button-nostyle a-icon-search"></button><input id="searchInput" placeholder="Search here" class="a-input js-a-input-search" type="text" value="" name="q" autocomplete="off" data-url="/content/cos/en_eur/jcr:content/header/autosuggestsearch.display.html" autocorrect="off" spellcheck="false"/><button type="button" class="a-button-nostyle a-icon-close js-icon-close"></button>
	</form>
	<ul class="result-list js-result-list"></ul>
</div>

<script type="text/x-handlebars-template" id="search-suggestion-content">{{#each content}}
   {{#if this.suggestion}}
	  {{#if this.ticket}}
	  	<li id="autoSuggestId"><a href="{{this.url}}" class="a-link" onclick="sendNotificationTicketAutoSuggest('{{this.url}}', '{{this.ticket}}', event);">{{this.suggestion}}</a></li>
            {{else}}
		<li><a href="{{this.url}}" class="a-link">{{this.suggestion}}</a></li>
		{{/if}}
	  {{else}}
	  <span>{{this.error}}</span>
	  {{/if}}
{{/each}}</script>
<script>

var SEARCH_LINK = '/en_eur/search.html';
var RESOURCE_PATH = '/content/cos/en_eur/jcr:content/header/autosuggestsearch.display.html';

$(document).ready(function(){
	appeaser.subscribe(appeaser.Enums.trigger.GET_SEARCH_SUGGESTIONS,function(data){
		var url = RESOURCE_PATH + "?term=" + data;
		$.ajax({
			'url': url,
			'dataType':'json',
			'success' : function(responseData){

//	 			var dataArray = JSON.parse(responseData);
				var dataArray = responseData;
				var result = [];
				for(var i = 0; i < dataArray.length; i++){
					if(i > 5){ break; }  // maximum of 5 autosuggestions
					var searchResult = dataArray[i].label;
					var ticketValue = dataArray[i].ticketValue;
					result.push({"suggestion":searchResult, "url":SEARCH_LINK+'?q='+encodeURI(searchResult), "ticket": ticketValue});
				}
				if(dataArray.length){
					appeaser.publish(appeaser.Enums.listen.ON_SHOW_SEARCH_SUGGESTIONS,result);
				}
			}
		});
		});

	});

function sendNotificationTicketAutoSuggest(url, ticket, e){
	e = e || window.event;
	e.preventDefault();
	var randomId = Math.random().toString(36).substr(2, 9);
	setNotificationTicket(ticket, randomId);
	sendNotifications("en_eur", url, randomId, "click", "");
}

function sendNotifications(locale, url, articleId, type, pageType){
	var tick = "";
	var src = "";
	var params = {};
	var local = locale.toLowerCase();
	if(type === "click"){
		if(sessionStorage){
			tick = sessionStorage.getItem("ticket_" + articleId);
			src = sessionStorage.getItem("notSrc_" + articleId);
			sessionStorage.removeItem("ticket_" + articleId);
			sessionStorage.removeItem("notSrc_" + articleId);
		} else if(localStorage){
			tick = localStorage.getItem("ticket_" + articleId);
			src = localStorage.getItem("notSrc_" + articleId);
			localStorage.removeItem("ticket_" + articleId);
			localStorage.removeItem("notSrc_" + articleId);
		}
		if(src !== "SDP" && src !== "SEARCH"){
			if(pageType.slice(-2)==="AS"){
				src = pageType;
			}else{
				src = "DEFAULT";
			}
		}
		if(tick !== "" && tick !== null){
			params = {ticket : tick};
		}else{
			params = {variant_key : articleId, notification_src : pageType};
		}
    	$.ajax({
            url: '/en_eur/pra/notification/'+type,
            type: 'POST',
            data: JSON.stringify(params),
            contentType:'application/json',
            success: function() {
            	location.href = url;
            	return true;
            },
            error: function(){
            	location.href = url;
            	return true;
            }
    	});
    }

}
</script></div>
</header>
	<div class="q-margin-notification"></div>
</div>

<div data-component="MProductZoom" class="m-product-zoom">
    <button type="button" class="a-button-nostyle a-icon-close js-close-icon"></button>
    <div class="img-wrapper"></div>
    <div class="swiper-arrow swiper-next"></div>
    <div class="swiper-arrow swiper-prev"></div>
</div>

<div data-component="OLightbox" class="o-lightbox">
	<div class="lightbox-wrapper">
	    <div class="lightbox-header"></div>
	    <div class="lightbox-content js-content u-clearfix"></div>
	    <button type="button" class="a-button-nostyle m-button-icon a-icon-close js-close-button"></button>
    </div>
</div>

<input type="hidden" id="georguri" value="?goeorguri=%2Fen_eur%2Fmen%2Fmenswear%2Ftops%2Fproduct.ribbed-long-sleeved-t-shirt-white.0722148001.html"/>
<script type="text/html" id="country-selector">
			<div class="selectCountryLightbox parbase"><div class="o-country-selector">
    <div class="selector-content">

			<h1 class="a-heading-1">Hello</h1>


			<p class="a-paragraph">Please choose your shipping country or location.</p>


		<div class="countries">




						<a href="https://www.cosstores.com/au/" target="_self" class="a-link m-country-select"><span class="no-shipping"></span><span>Australia</span></a>







						<a href="/content/cos/page.countryselector.de_AT.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Austria</span></a>







						<a href="/content/cos/page.countryselector.nl_BE.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Belgium</span></a>







						<a href="/content/cos/page.countryselector.cs_CZ.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Czech Republic</span></a>







						<a href="https://www.cosstores.com/ca/" target="_self" class="a-link m-country-select"><span class="no-shipping"></span><span>Canada</span></a>






						<a href="https://www.cosstores.cn/" target="_self" class="a-link m-country-select"><span class="a-icon-bag"></span><span>China</span></a>








						<a href="/content/cos/page.countryselector.da_DK.en_eur.DKK.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Denmark</span></a>







						<a href="/content/cos/page.countryselector.fi_FI.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Finland</span></a>







						<a href="/content/cos/page.countryselector.fr_FR.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>France</span></a>







						<a href="/content/cos/page.countryselector.de_DE.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Germany</span></a>







						<a href="/content/cos/page.countryselector.hu_HU.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Hungary</span></a>







						<a href="/content/cos/page.countryselector.en_IE.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Ireland</span></a>







						<a href="/content/cos/page.countryselector.it_IT.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Italy</span></a>







						<a href="https://www.cosstores.com/jp/" target="_self" class="a-link m-country-select"><span class="no-shipping"></span><span>Japan</span></a>







						<a href="/content/cos/page.countryselector.nl_NL.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Netherlands</span></a>







						<a href="https://social.cosstores.com/no_no/newslettersubscribe" target="_self" class="a-link m-country-select"><span class="no-shipping"></span><span>Norway</span></a>







						<a href="/content/cos/page.countryselector.pl_PL.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Poland</span></a>







						<a href="/content/cos/page.countryselector.pt_PT.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Portugal</span></a>







						<a href="/content/cos/page.countryselector.sk_SK.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Slovakia</span></a>







						<a href="/content/cos/page.countryselector.sl_SI.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Slovenia</span></a>






						<a href="https://www.cosstores.com/kr_krw/index.html" target="_self" class="a-link m-country-select"><span class="a-icon-bag"></span><span>South Korea</span></a>








						<a href="/content/cos/page.countryselector.es_ES.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>Spain</span></a>






						<a href="/content/cos/page.countryselector.sv_SE.en_eur.SEK.jsp" target="_self" class="a-link m-country-select"><span class="a-icon-bag"></span><span>Sweden</span></a>








						<a href="/content/cos/page.countryselector.en_GB.en_eur.GBP.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>United Kingdom</span></a>







						<a href="/content/cos/page.countryselector.en_US.en_usd.USD.jsp" target="_self" class="a-link internal-link m-country-select"><span class="a-icon-bag"></span><span>United States</span></a>




		</div>


			<p class="a-paragraph">If your country is not listed above, you can visit the <a
  href="https://www.cosstores.com/en_eur/store-locator.html"
  target="_self" class="a-link country-selector-link">store locator</a>
  to find your nearest COS store. Please be aware that pricing and
delivery costs may vary depending on your location.</p>

    </div>
</div>

<script>
	$('.selector-content p').find('a').addClass('a-link country-selector-link');

	var georguri = $('#georguri').val();
	$("a.internal-link").each(function() {
	   var $this = $(this);
	   var _href = $this.attr("href");
	   $this.attr("href", _href + georguri);
	});
</script></div>
</script>
    <script type="text/javascript">
       $(document).ready(function(){
           $.getJSON("/sling/servlet/default.localizedtextpropertiesreader.cos."+getLang()+"."+getCountryCode()+".json",{property: "localizedTTT", path:"topnav"},  function(data) {
        	if(data.properties[0] && data.properties.length > 0 && data.properties[0].localizedTTT){
    	var localizedTTTMessage= data.properties[0].localizedTTT;
            $("#localizedTTT").html(localizedTTTMessage);
        	}
        });
		displaySiteBanner();
  });
    </script>
<script type="text/javascript">

    /**
     * JQuery plugin for removing white spaces from hybris minicart call
     *
     */
    $(document).ready(function(){
        (function(){
            $.fn.htmlClean = function() {
                this.contents().filter(function() {
                    if (this.nodeType != 3) {
                        $(this).htmlClean();
                        return false;
                    }
                    else {
                        this.textContent = $.trim(this.textContent);
                        return !/\\S/.test(this.nodeValue);
                    }
                }).remove();
                return this;
            }
            })(jQuery)

    });


    $(window).on("load", function(e){
        console.log("Window Load Cos");
	 //Alternate URL
          var can_url = window.location.href;
	  //$("link[rel='canonical']").attr('href',can_url);
        /**
         * Check if the class is-in-search-results exists to determine if current page is search result page. If the class exist sort by best-match on page load if no sort is selected.
         */
        if($('.is-in-search-results') && $('.is-in-search-results').length) {

            // if sort parameter was defined in url - get it, otherwise - bestMatch
            var sortURLParam = new URL(window.location.href).searchParams.get("sort");
            var sort = (sortURLParam != "" && sortURLParam != null) ? sortURLParam : 'bestMatch';

            // if sort parameter is unknown for combobox - bestMatch
            if ($("#sortOptions li[data-value='" + sort + "']").length == 0) {
                sort = 'bestMatch';
            }

            $("#sortOptions li[data-value='" + sort + "']").addClass('is-active is-selected');
            document.getElementById('sortType').innerText = $("#sortOptions [data-value='" + sort + "']")[0].innerText.trim();

            if(sort !== "bestMatch"){ //if no sort specified - the default bestMatch sort should not be visible in URL on page load
            		buildQueryString();
            }

        }

        function updateCartCount(){
            var nrOfItems = '';
            var userCookie = cosApp.shared.utils.getUserCookie();
            if(userCookie && userCookie.cartCount != "undefined" && userCookie.cartCount !== 0){
                nrOfItems = userCookie.cartCount;
                if(isNaN(nrOfItems)){
                    nrOfItems = '';
                }
                $(".m-bag").find(".quantity").html("("+nrOfItems+")");
            }
            else {
                $(".m-bag").find(".quantity").html("<span></span>");
            }
        }
        appeaser.subscribe(appeaser.Enums.listen.ON_ITEM_ADDED_TO_CART,function(){
            updateCartCount();
        });

        updateCartCount();


        window.cosApp.cart.init(); // used for calling the minicart

    });

</script>

 <script>

    $(document).on('ready',function(){

      var clickDelay = 200; // Configurable delay in milliseconds
      var classInComponents = '.o-hero a,.o-product a,.o-layout a,.o-focus-panel a,.o-tag-cloud a,.o-teaser-container a,.o-takeover a,.o-category-listing a,.freehtmlimporter a,.o-product-cofs a'; // Add component class name


                           $(classInComponents).click(function(e){
                  				var targetBlank =  this.getAttribute('target');
                    			   if(targetBlank && targetBlank ==="_blank")
                                {
									return;
                                }
                                e.preventDefault();
                                var gotoURL = this.getAttribute('href');

                                if(gotoURL){
                                    anchorClickDelay(gotoURL);
                                }
                           });

                           function anchorClickDelay(gotoURL){
                                           setTimeout(function(){
                           window.location = gotoURL;
                       }, clickDelay);
                           }

                           $('.is-newsletterlink').click(function(e){
                     	   		e.preventDefault(); // prevent immidiate redirection
                     	   		/* handlers for alternate HTML structure of link
                     	   		* - depending on the order of config of hyperlink
                     	   		* or style in dialog.
                     	   		*/
                              var gotoURL = $('.is-newsletterlink').closest('a').attr('href');
                              if(!gotoURL){
                             	 	gotoURL = $('.is-newsletterlink').find('a').attr('href');
                              }
                            	setTimeout(function(){
                         	   		TealiumUtils.newsletterCookieBarClicked();
                                  if(gotoURL){
                                 	 	window.location = gotoURL; // redirection to URL
                                    }
                            }, clickDelay);
                       		});

                         //Alternate URL
                           var url = window.location.href;
                           url = url.split('?')[0];
                           var locale = url.substring(url.indexOf('en_'),(url.indexOf('en_')+6));

                           $("link[rel='alternate']").each(function(){
                                             if(this.getAttribute('hreflang') === 'en-AT'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             } else if(this.getAttribute('hreflang') === 'en-BE'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             } else if(this.getAttribute('hreflang') === 'en-CZ'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-DK'){
                                                                   newURL = url.replace(locale,'en_dkk');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-FI'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-FR'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-DE'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-HU'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-IE'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-IT'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-NL'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-PL'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-PT'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-SK'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-SI'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-ES'){
                                                                   newURL = url.replace(locale,'en_eur');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-SE'){
                                                                   newURL = url.replace(locale,'en_sek');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-GB'){
                                                                   newURL = url.replace(locale,'en_gbp');
                                                                   $(this).attr('href',newURL);
                                             }else if(this.getAttribute('hreflang') === 'en-US'){
                       					                        newURL = url.replace(locale,'en_usd');
                       					                        $(this).attr('href',newURL);
                       					  }else if(this.getAttribute('hreflang') === 'x-default'){
                       									        newURL = url.replace(locale,'en_eur');
                       									        $(this).attr('href',newURL);
                       					  }

                           })

    });
</script></div>
<!-- HeaderLife -->
<img src="/alive/user" width="1" height="1" style="position: absolute; left: -999px"/>
<div data-component="OPageContent" class="o-page-content" style="margin-top: 68px">
	<div class="content-section">
	<!--zAEMPUBAPPWW14.goep.hm.com-->
	<div class="product parbase"><script>
	var productArticleDetails = {

		'articleCode':'0722148001',
		'baseProductCode' : '0722148_group_001',
		'mainCategorySummary' : 'Tops - men_menswear_tops',
		'name': 'RIBBED LONG-SLEEVED T-SHIRT',

		'styleWithArticles' : [

		    	'0726796001',
		    	'0719540001'
		],

		'0722148001': {
			'title': 'RIBBED LONG-SLEEVED T-SHIRT',
			'name': 'White \\/ black',
			'colorCode': '10',
			'description': '<p>Designed with vertical ribs updated with an intricate printed pattern, this long-sleeved T-shirt is made from structured cotton. Cut for a regular fit, it has a wide neck trim and clean-cut edges for a minimal finish.&nbsp;<\\/p><p>&nbsp;<\\/p><p>Back length of size M is 69.5cm \\/&nbsp;Model is 189cm tall and wearing a size M<\\/p>',
			'atelierName': "",
			'brandName': "",
			'colorLoc': "White / black",
			'pdpLink' : 'https:\\/\\/www.cosstores.com\\/en_eur\\/men\\/menswear\\/tops\\/product.ribbed-long-sleeved-t-shirt-white.0722148001.html',
			'originCountry': "",

				'styleWithArticles' : [

						{
							'code':'0726796001',
							'name': 'COTTON JERSEY TURTLENECK TOP',
							'brandName': '',
							'url':'https://www.cosstores.com/en_eur/men/menswear/tops/product.cotton-jersey-turtleneck-top-black.0726796001.html',

							'imageUrl':'//lp.cosstores.com/app001prod?set=source[02_0726796_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
							'imageAlt':'Front image of Cos cotton jersey roll-neck top in black',

									'price': '€39',
									'priceOriginal': false,
									'priceValue': '39.0',
									'priceSaleValue': null,

							'colorName':'Black',
							'color':[

									{
										'colorAlt': 'Fabric Swatch image of Cos cotton jersey roll-neck top in black',
										'colorSrc': '//lp.cosstores.com/app001prod?set=source[04_0726796_001_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019091]&call=url[file:/product/style]'
									}
							],
							'marker': [

							]
						},
						{
							'code':'0719540001',
							'name': 'WIDE-LEG TROUSERS',
							'brandName': '',
							'url':'https://www.cosstores.com/en_eur/men/menswear/suits/trousers/product.wide-leg-trousers-black.0719540001.html',

							'imageUrl':'//lp.cosstores.com/app001prod?set=source[02_0719540_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
							'imageAlt':'Front image of Cos wide-leg trousers in black',

									'price': '€89',
									'priceOriginal': false,
									'priceValue': '89.0',
									'priceSaleValue': null,

							'colorName':'Black',
							'color':[

									{
										'colorAlt': 'Fabric Swatch image of Cos  in black',
										'colorSrc': '//lp.cosstores.com/app001prod?set=source[04_0719540_001_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2018091]&call=url[file:/product/style]'
									}
							],
							'marker': [

							]
						}
				],

			'variants' : [

								{
									'variantCode' : '0722148001001',
									'sizeCode' : '001',
									'sizeName' : 'XS',
								},
								{
									'variantCode' : '0722148001002',
									'sizeCode' : '002',
									'sizeName' : 'S',
								},
								{
									'variantCode' : '0722148001003',
									'sizeCode' : '003',
									'sizeName' : 'M',
								},
								{
									'variantCode' : '0722148001004',
									'sizeCode' : '004',
									'sizeName' : 'L',
								},
								{
									'variantCode' : '0722148001005',
									'sizeCode' : '005',
									'sizeName' : 'XL',
								},
								{
									'variantCode' : '0722148001006',
									'sizeCode' : '006',
									'sizeName' : 'XXL',
								}
			],


			'productFrontImages' : [

					{
						'thumbnail': '//lp.cosstores.com/app001prod?set=source[02_0722148_001_002],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
						'image': '//lp.cosstores.com/app001prod?set=source[02_0722148_001_002],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
						'fullscreen': '//lp.cosstores.com/app001prod?set=source[02_0722148_001_002],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
						'zoom': '//lp.cosstores.com/app001prod?set=source[02_0722148_001_002],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]'
					}
			],
			'logoImages' : [

			],
			'dataSheetImages' : [

			],
			'thumbnailImages' : [

					{
						'thumbnail': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
						'image': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
						'fullscreen': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
						'zoom': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]'
					},
					{
						'thumbnail': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
						'image': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
						'fullscreen': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
						'zoom': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]'
					}
			],
			'otherImages' : [

					{
						'thumbnail': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
						'image': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
						'fullscreen': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
						'zoom': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]'
					}
			],
			'normalImages' : [

					{
						'thumbnail': '//lp.cosstores.com/app001prod?set=source[02_0722148_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
						'image': '//lp.cosstores.com/app001prod?set=source[02_0722148_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
						'fullscreen': '//lp.cosstores.com/app001prod?set=source[02_0722148_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
						'zoom': '//lp.cosstores.com/app001prod?set=source[02_0722148_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]'
					}
			],
			'detailImages' : [

					{
						'thumbnail': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
						'image': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
						'fullscreen': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
						'zoom': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]'
					}
			],
			'images':[

			    {
					'thumbnail': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
					'image': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
					'fullscreen': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]',
					'zoom': '//lp.cosstores.com/app001prod?set=source[01_0722148_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]'
				}
			],

					'price': '€49',
					'priceOriginal': false,
					'priceValue': '49.0',
					'priceSaleValue': null,

			'compositions': [

					'Cotton 99%; Elastane 1%'
				],

            'careInstructions': [

                    'Machine washable '
            ],


			'url': 'https:\\/\\/www.cosstores.com\\/en_eur\\/men\\/menswear\\/tops\\/product.ribbed-long-sleeved-t-shirt-white.0722148001.html'

		}
	};
</script>
 <div class="catalogwarning parbase"></div>
<!-- cos PDP  -->
		<div class="u-cols-lg-24-24 u-cols-md-12-12 u-cols-sm-12-12 u-row u-full-width">
			<div class="contain">
				<div class="u-cols-lg-11-24 u-cols-md-6-12 u-cols-sm-12-12 u-no-padding">
					<div class="images"><div id="productGallery" data-component="OProductGallery" class="o-product-gallery">
	<div class="slider-wrapper">
			<div id="imageSlider" data-slides-desktop="8" data-slides-tablet="4" data-slides-mobile="1" class="o-slider">
		<div class="a-heading-2 slider-title u-align-center"></div>
		<div class="slider" id="imageContainer">
			<a href="#gallery-product-1" target="_self" class="a-link"><div class="swiper-zoom-container"><img class="a-image default-image" src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" data-zoom-src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]"  alt="Model front image of Cos ribbed long-sleeved t-shirt in white"/></div></a>
			<a href="#gallery-product-2" target="_self" class="a-link"><div class="swiper-zoom-container"><img class="a-image default-image" src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" data-zoom-src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]"  alt="Model side image of Cos ribbed long-sleeved t-shirt in white"/></div></a>
			<a href="#gallery-product-3" target="_self" class="a-link"><div class="swiper-zoom-container"><img class="a-image default-image" src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" data-zoom-src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]"  alt="Model side image of Cos ribbed long-sleeved t-shirt in white"/></div></a>
			<a href="#gallery-product-4" target="_self" class="a-link"><div class="swiper-zoom-container"><img class="a-image default-image" src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" data-zoom-src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]"  alt="Model side image of Cos ribbed long-sleeved t-shirt in white"/></div></a>
			<a href="#gallery-product-5" target="_self" class="a-link"><div class="swiper-zoom-container"><img class="a-image default-image" src="//lp.cosstores.com/app001prod?set=source[02_0722148_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" data-zoom-src="//lp.cosstores.com/app001prod?set=source[02_0722148_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]"  alt="Front image of Cos ribbed long-sleeved t-shirt in white"/></div></a>
			<a href="#gallery-product-6" target="_self" class="a-link"><div class="swiper-zoom-container"><img class="a-image default-image" src="//lp.cosstores.com/app001prod?set=source[02_0722148_001_002],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" data-zoom-src="//lp.cosstores.com/app001prod?set=source[02_0722148_001_002],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]"  alt="Side image of Cos ribbed long-sleeved t-shirt in white"/></div></a>
			</div>
	</div>
</div>
<div class="main-image-wrapper">
	<ul id="mainImageList">
		<li>
				<div class="m-product-image"><div class="cross"></div>
					<img class="default-image" src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Model front image of Cos ribbed long-sleeved t-shirt in white" data-zoom-src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]" id="gallery-product-1"/>
				</div>
			</li>
		<li>
				<div class="m-product-image"><div class="cross"></div>
					<img class="default-image" src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Model side image of Cos ribbed long-sleeved t-shirt in white" data-zoom-src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]" id="gallery-product-2"/>
				</div>
			</li>
		<li>
				<div class="m-product-image"><div class="cross"></div>
					<img class="default-image" src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Model side image of Cos ribbed long-sleeved t-shirt in white" data-zoom-src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]" id="gallery-product-3"/>
				</div>
			</li>
		<li>
				<div class="m-product-image"><div class="cross"></div>
					<img class="default-image" src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Model side image of Cos ribbed long-sleeved t-shirt in white" data-zoom-src="//lp.cosstores.com/app001prod?set=source[01_0722148_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]" id="gallery-product-4"/>
				</div>
			</li>
		<li>
				<div class="m-product-image"><div class="cross"></div>
					<img class="default-image" src="//lp.cosstores.com/app001prod?set=source[02_0722148_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Front image of Cos ribbed long-sleeved t-shirt in white" data-zoom-src="//lp.cosstores.com/app001prod?set=source[02_0722148_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]" id="gallery-product-5"/>
				</div>
			</li>
		<li>
				<div class="m-product-image"><div class="cross"></div>
					<img class="default-image" src="//lp.cosstores.com/app001prod?set=source[02_0722148_001_002],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/main]" alt="Side image of Cos ribbed long-sleeved t-shirt in white" data-zoom-src="//lp.cosstores.com/app001prod?set=source[02_0722148_001_002],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/zoom]" id="gallery-product-6"/>
				</div>
			</li>
		</ul>
</div>

	<input type="hidden" value="https://lp.cosstores.com/app001prod%3Fset%3Dsource%5B02_0722148_001_001%5D%2Ctype%5BPRODUCT%5D%2Cdevice%5Bhdpi%5D%2Cquality%5B80%5D%2CImageVersion%5B2019092%5D%26call%3Durl%5Bfile%3A%2Fproduct%2Fmain%5D" id="thisArticleStillLifeImage"/>
</div>


<script type="text/x-handlebars-template" id="product-zoom"><div class="swiper-wrapper">{{#each slides}}<div class="swiper-slide"><div class="swiper-zoom-container"><img class="a-image a-image pdp-image" alt="default image" src="{{this.defSrc}}"><img class="a-image a-image u-display-none zoomed-image" alt="zoomed image" src="{{this.zoomSrc}}"></div></div>{{/each}}</div></script></div>
</div>
				<div class="u-cols-spacer u-cols-lg-3-24 u-not-mobile u-not-tablet"></div>
				<div class="details parbase"><script>
	function loadSizesByCodeOnReady(code){
		var articlesIds={

				"0722148001" : "size_0722148001"
		};
		cosApp.productDetails.loadSizesByCode(code,false,articlesIds,'en_eur');
	}
	function loadSizes(caller){
		cosApp.productDetails.loadSizes(caller,'en_eur');
		giveMetaTitle();
		giveMetaPrice();
	};

</script>

    <div class="u-cols-lg-7-24 u-cols-md-6-12 u-cols-sm-12-12 u-no-padding-mobile">
	<div data-component="OProductInformation" class="o-product-information">
		<form data-component="OForm" class="o-form add-to-bag" action="/someURL" method="POST">
			<div class="marker-label temp-marker">
					<label class="a-label js-a-label">
						</label>
				</div>
			<div class="title">
				<p class="a-paragraph" id="productTitle" data-product-title="RIBBED LONG-SLEEVED T-SHIRT">RIBBED LONG-SLEEVED T-SHIRT</p>
			</div>
			<div class="m-product-price" id="product-price">
				<div class="price parbase"><!-- white price € 49 -->

<label class="a-label js-a-label price-value product-price" id="productPrice">
			€49</label>
	</div>
</div>

			<div class="markers" id="promoMarker">
				</div>
			<div class="markers" id="productMarkers">
				</div>
			<div class="color-section">
				<p class="a-paragraph">COLOUR</p>
				<div data-component="MDropdown" id="pdpDropdown" class="m-dropdown pdp-dropdown " data-selected="0722148001" data-value="White / black">
					<img id="imgSwatch_0722148001" class="a-image placeholder-image" src="https://lp.cosstores.com/app001prod%3Fset%3Dsource%5B04_0722148_001_001%5D%2Ctype%5BFABRICSWATCH%5D%2Cdevice%5B%5D%2Cquality%5B80%5D%2CImageVersion%5B2019091%5D%26call%3Durl%5Bfile%3A%2Fproduct%2Fmain%5D" alt="Fabric Swatch image of Cos ribbed long-sleeved t-shirt in white" />
					<button type="button" id="pdp-dropdown-label" class="a-button-nostyle placeholder">White / black</button>
						<button type="button" class="a-button-nostyle a-icon-close"></button>
						<input name="selectColor" type="hidden" class="js-input"/>
						<span class="a-icon-arrow-down-small"></span>
					<ul class="list-wrapper">
						<li>
							<ul id="swatchDropdown" class="options">
								<li id="swatch_0722148001" class="a-option color-list" data-articlecode="0722148001" data-value="white / black" onclick="loadSizes(this);trackProductVariant(this);">
										<img class="a-image option-swatch" src="https://lp.cosstores.com/app001prod%3Fset%3Dsource%5B04_0722148_001_001%5D%2Ctype%5BFABRICSWATCH%5D%2Cdevice%5B%5D%2Cquality%5B80%5D%2CImageVersion%5B2019091%5D%26call%3Durl%5Bfile%3A%2Fproduct%2Fmain%5D" alt="Fabric Swatch image of Cos ribbed long-sleeved t-shirt in white" />
										<span class="color-name">White / black<span class="color-disabled"> </span> </span>
									</li>
								</ul>
							<ul class="bottom-option">
								<li>Cancel</li>
							</ul>
						</li>
					</ul>
					<span class="error-msg"></span>
				</div>
			</div>
			<div class="size-select">
				<p class="a-paragraph">SIZE</p>
				<div id="sizes" data-component="ASizeSwatch" data-sizelist="0722148001" class="a-size-swatch">
					<input hidden name="selectSize" class="a-input js-input"/>
						<button type="button" id="size_0722148001001"  class="size-options a-button-nostyle">
							<span>XS</span>
						</button>
					<input hidden name="selectSize" class="a-input js-input"/>
						<button type="button" id="size_0722148001002"  class="size-options a-button-nostyle">
							<span>S</span>
						</button>
					<input hidden name="selectSize" class="a-input js-input"/>
						<button type="button" id="size_0722148001003"  class="size-options a-button-nostyle">
							<span>M</span>
						</button>
					<input hidden name="selectSize" class="a-input js-input"/>
						<button type="button" id="size_0722148001004"  class="size-options a-button-nostyle">
							<span>L</span>
						</button>
					<input hidden name="selectSize" class="a-input js-input"/>
						<button type="button" id="size_0722148001005"  class="size-options a-button-nostyle">
							<span>XL</span>
						</button>
					<input hidden name="selectSize" class="a-input js-input"/>
						<button type="button" id="size_0722148001006"  class="size-options a-button-nostyle">
							<span>XXL</span>
						</button>
					</div>
				<!-- PL merge -->
				<a href="#" target="_self" class="a-link open-lightbox" data-template="size-guide-template" data-classes="is-large">SIZE GUIDE</a>
			</div>

			<button id="addToBagButton" type="submit" class="a-button is-primary is-disabled" data-out-of-stock='Out Of Stock' data-coming-soon='Coming Soon' data-discontinued='Out Of Stock'>
							<span>ADD TO BAG</span>
						</button>
						<div class="description-header">
				<a href="#description" target="_self" class="a-link description is-selected">DESCRIPTION</a><span class="dash">-</span><a href="#delivery-and-returns" target="_self" class="a-link delivery-and-returns">DELIVERY & PAYMENT</a><span class="dash">-</span><a href="#details" target="_self" class="a-link details">DETAILS</a>
			</div>
			<div class="product-description">
				<div id="description" class="description-text is-open">
					<p class="a-paragraph">
						<p>Designed with vertical ribs updated with an intricate printed pattern, this long-sleeved T-shirt is made from structured cotton. Cut for a regular fit, it has a wide neck trim and clean-cut edges for a minimal finish.&nbsp;</p><p>&nbsp;</p><p>Back length of size M is 69.5cm /&nbsp;Model is 189cm tall and wearing a size M</p></p>
				</div>

				<div id="delivery-and-returns" class="delivery-and-returns-text">
					<p class="a-paragraph" data-content="localized"></p>
					<p>
						<br>
						<a href="#" target="_self" class="a-link has-underline open-lightbox" style="text-decoration: none;" data-template="privacy-policy-template"><span class="underline"></span></a>
					</p>
				</div>

				<div id="details" class="details-text">
				<!-- articleCompositions [99% Cotton; 1% Elastane] -->
				 <p class="a-paragraph">
						99% Cotton /  1% Elastane / <span id="careInstructions">
	                     			Machine washable </span>
	                     	<br>
						<br>
						<div id="details" class="details-text is-open">Make sure that your favourite items remain long-loved pieces for years to come; read our <a href="https://www.cosstores.com/en_eur/product-care.html" style="color: #444 ;"><u>product care guide</u></a> and explore our selection of carefully chosen <a href="https://www.cosstores.com/en_eur/care-products.html" style="color: #444;"><u>care products</u></a>.<br><a href="#" target="_self" class="a-link has-underline open-lightbox" data-template="garment-care-template" style="text-decoration: none;"><span class="underline"></span></a>

						<br> Product No: <span id="article-number">0722148001</span><br>
						<span id="imported">
							</span>
					</p>

					<div class="flammable-text">
							<img class="a-image hazmat-image" src=""/><p class="a-paragraph"></p>
						</div>
				</div>
				<button type="button" class="a-button-nostyle a-icon-down-arrow"></button>
			</div>
		</form>
	</div>
</div>

<script type="text/x-handlebars-template" id="empty"></script>
<!-- lightboxes -->
<!-- in lightboxes -->
<div>
	<!--  script privacy -->
	<script type="text/x-handlebars-template" id="privacy-policy-template">

	</script>

	<!-- script garment care -->
		<script type="text/x-handlebars-template" id="garment-care-template">

	</script>
</div><!-- sizeguide product com.accenture.hm.aem.integration.product.ProductControl@96fe229  product supercategorys: [men_menswear_tshirts_all, men_menswear_tshirts_longsleevetshirts, men_all, men_menswear, W52_EU_Men_Ink, Men_US_New_W50]-->
<script type="text/x-handlebars-template" id="size-guide-template">
	<div class="o-sizeguide">
		 <div class="sizelisting_24c0 sizelisting parbase"><div class="intro parbase"><div class="o-sizeguide">
    <div>
        <span id="sizeguideIntroID" class="is-richtext">
			<link rel="stylesheet" href="/content/dam/cos/CSS-Sizeguide/size-guide-lightbox.min.css"></span>
    </div>
    </div>
</div>
<div class="toggle-list size-guides">
    <div class="listing parsys"><div class="faq parbase section"><div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
	<div class="contain">
		<div class="u-cols-sm-12-12 u-cols-md-8-12 u-cols-lg-10-24 u-transform-center">
			<div class="o-contain">
				<div data-component="OAccordion" class="o-accordion has-uppercase" data-exclusive="data-exclusive" data-exclusive-group="group">
					<div class="accordion-header">
						<a href="#" target="_self" class="a-link a-link accordion-title js-accordion-toggle no-styling">
							<span class="a-icon-plus"></span><span class="a-icon-minus"></span>
							<h3 class="a-heading-3">SIZE GUIDE: READY-TO-WEAR</h3>
						</a>
					</div>
					<div class="accordion-content u-clearfix">
						<div class="accordion-inner-content">
							<p>The size chart is a guide to help you find the right size for you. As
  many pieces are designed in a unique way, we suggest you also refer to
  the specific product lengths and measurements provided in the
  description.<br /> <br /> </p>
 <h3>SIZE CONVERSION</h3>
 <p> </p>
 <table width="100%"> <tbody>
    <tr>
      <th>Size</th> <th>XS</th> <th>S</th> <th>M</th> <th>L</th>
      <th>XL</th> </tr>
    <tr>
      <td class="left-align">EU</td> <td>44</td> <td>46-48</td>
      <td>50</td> <td>52-54</td> <td>56</td> </tr>
    <tr>
      <td class="left-align">FR/IT/ES</td> <td>44</td> <td>46</td>
      <td>48</td> <td>50</td> <td>52</td> </tr></tbody></table>
 <p> </p>
 <h3>BODY MEASUREMENTS IN CM</h3>
 <table width="100%"> <tbody>
    <tr>
      <th>Size</th> <th>XS</th> <th>S</th> <th>M</th> <th>L</th>
      <th>XL</th> </tr>
    <tr>
      <td class="left-align">Chest</td> <td>88</td> <td>94</td>
      <td>100</td> <td>106</td> <td>112</td> </tr>
    <tr>
      <td class="left-align">Shoulder to shoulder</td> <td>42</td>
      <td>43.5</td> <td>45</td> <td>46.5</td> <td>48</td> </tr>
    <tr>
      <td class="left-align">Waist</td> <td>74</td> <td>80</td>
      <td>86</td> <td>92</td> <td>98</td> </tr>
    <tr>
      <td class="left-align">Hip</td> <td>90</td> <td>96</td>
      <td>102</td> <td>108</td> <td>114</td> </tr></tbody></table>

						</div>
					</div>
				</div>

				<div data-component="OAccordion" class="o-accordion has-uppercase" data-exclusive="data-exclusive" data-exclusive-group="group">
					<div class="accordion-header">
						<a href="#" target="_self" class="a-link a-link accordion-title js-accordion-toggle no-styling">
							<span class="a-icon-plus"></span><span class="a-icon-minus"></span>
							<h3 class="a-heading-3">HOW TO MEASURE</h3>
						</a>
					</div>
					<div class="accordion-content u-clearfix">
						<div class="accordion-inner-content">
							<p>Chest:</p>
 <p>Measure around the fullest part of your chest.</p>
 <p> </p>
 <p>Shoulder to shoulder:</p>
 <p>Measure from edge of shoulder to shoulder.</p>
 <p> </p>
 <p>Waist:</p>
 <p>Measure at the narrowest part of your waistline.</p>
 <p> </p>
 <p>Hip:</p>
 <p>Measure at the fullest part of your hips.</p>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<div style="clear: both;"></div>
<script>
	$('.accordion-inner-content').find('a').addClass('a-link');
	$('.accordion-inner-content').find('p').addClass('a-paragraph');
</script>
</div>
</div>
</div>

<style>
	#sizePlaceholder{
		border-color: rgba(0, 0, 0, 0.3);
	    background-color: rgba(255, 255, 255, 0.25);
	    border-style: solid;
	    border-width: 0.125rem;
	    margin: -0.125rem;
	    line-height: 2.875rem;
	    color: #DDDDDD;
	    font-size: 0.875rem;
	    text-align: center;
	}
</style></div>
</div>
</script>


</div>
</div>
		</div>
	<script>
function loadSwatchSize() {
	if ('0722148001' !== '') {
		var variantList = [];
		var variantCodes = cosApp.productDetails.getAllProductVariantCodes();
		$(variantCodes).each(function(index,value){
			variantList.push(value);
		});
		cosApp.productDetails.getAvailability( variantList, 'en_eur', action);
	}
}

function action(data){
	var variantCodes = cosApp.productDetails.getAllProductVariantCodes();
	cosApp.productDetails.initVariantMap();
	$.each(data, function(index, variantCode) {
		cosApp.productDetails.variantAvailabilityMap[variantCode] = true;
	});
	if($('#swatchDropdown li.is-coming-soon').length){
		var $remCs=$('#swatchDropdown li.is-coming-soon').detach();
		$('#swatchDropdown').append($remCs);
	}
	if ($('#swatchDropdown li.is-sold-out:not(.is-coming-soon):not(.is-discontinued)').length) {
		var $remSo=$('#swatchDropdown li.is-sold-out:not(.is-coming-soon):not(.is-discontinued)').detach();
		$('#swatchDropdown').append($remSo);
	}
	if($('#swatchDropdown li.is-discontinued').length) {
		var $remUn=$('#swatchDropdown li.is-discontinued').detach();
		$('#swatchDropdown').append($remUn);
	}
	cosApp.productDetails.updateSizesAvailability();
	$('#sizes').removeAttr('data-component-id');
	appeaser.scan();

}

function deliveryPoliciesClick(caller, url){
	var container = $(caller).data('container');
	cosApp.shared.utils.ajaxInjectLightbox(url, container);
}

</script>
</div>
<div class="u-cols-lg-24-24 u-cols-md-12-12 u-cols-sm-12-12 u-row u-full-width">
	    	<div class="contain">
		        <div class="u-cols-lg-24-24 u-cols-md-12-12 u-cols-sm-12-12 u-row u-full-width">
		        	<div data-component="OSliderCofs"
	    data-slides-desktop="4"
	    data-slides-tablet="4"
	    data-slides-mobile="2"
	    class="o-slider-cofs o-pra-component o-product-slider o-style-with carousel">
        <span class="propTitle" hidden>Style with these...</span>

	    <div class="a-heading-2 slider-title u-align-center">Style with these...</div>


	    <div class="slider">

	    	<a href="https://www.cosstores.com/en_eur/men/menswear/tops/product.cotton-jersey-turtleneck-top-black.0726796001.html" target="_self" class="a-link no-styling" onclick="trackProductClick(this,'.o-product')">


			            <div class="o-product">

				            <div class="image-holder">
			                    <img class="a-image product-image" src="//lp.cosstores.com/app001prod?set=source[02_0726796_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]" alt="Front image of Cos cotton jersey roll-neck top in black" />
		                	</div>

		                	<div class="description">

		                		<div class="product-variants">
                    				<label class="a-label js-a-label">Colors (3)</label>
                    			</div>
                    			<label class="a-label js-a-label product-title">COTTON JERSEY TURTLENECK TOP</label>
                    			<div class="m-product-price">
								    <!-- white price € 39 -->

<label class="a-label js-a-label price-value product-price" id="productPrice">
			€39</label>
	</div>
                    			<div class="m-product-marker m-product-markers">
                    				</div>
		                    	<div class="marker-label temp-marker">
		                    		<label class="a-label js-a-label">
										</label>
		                    	</div>
		                    	<label class="a-label js-a-label product-brand"></label>
	                    		</div>
	                 <!-- product styleWith details -->
					<div class="producttile-details" hidden>
						<span class="articleCode">0726796001</span>
						<span class="baseProductCode"></span>
						<span class="productName">COTTON JERSEY TURTLENECK TOP</span>
						<span class="productCategory">Tops - men_menswear_tops</span>
						<span class="currencyCode"></span>
						<span class="price">39.0</span>
						<span class="originalPrice">39.0</span>
						<span class="colorName">Black</span>
						<span class="brandName">[]</span>
						<span class="colorLoc"></span>
						<span class="atelierName"></span>
						<span class="originCountry"></span>
					</div>
						</div>
		            </a>

				<a href="https://www.cosstores.com/en_eur/men/menswear/suits/trousers/product.wide-leg-trousers-black.0719540001.html" target="_self" class="a-link no-styling" onclick="trackProductClick(this,'.o-product')">


			            <div class="o-product">

				            <div class="image-holder">
			                    <img class="a-image product-image" src="//lp.cosstores.com/app001prod?set=source[02_0719540_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]" alt="Front image of Cos wide-leg trousers in black" />
		                	</div>

		                	<div class="description">

		                		<div class="product-variants">
                    				<label class="a-label js-a-label">Colors (3)</label>
                    			</div>
                    			<label class="a-label js-a-label product-title">WIDE-LEG TROUSERS</label>
                    			<div class="m-product-price">
								    <!-- white price € 89 -->

<label class="a-label js-a-label price-value product-price" id="productPrice">
			€89</label>
	</div>
                    			<div class="m-product-marker m-product-markers">
                    				</div>
		                    	<div class="marker-label temp-marker">
		                    		<label class="a-label js-a-label">
										</label>
		                    	</div>
		                    	<label class="a-label js-a-label product-brand"></label>
	                    		</div>
	                 <!-- product styleWith details -->
					<div class="producttile-details" hidden>
						<span class="articleCode">0719540001</span>
						<span class="baseProductCode"></span>
						<span class="productName">WIDE-LEG TROUSERS</span>
						<span class="productCategory">Trousers - men_menswear_suits_trousers</span>
						<span class="currencyCode"></span>
						<span class="price">89.0</span>
						<span class="originalPrice">89.0</span>
						<span class="colorName">Black</span>
						<span class="brandName">[]</span>
						<span class="colorLoc"></span>
						<span class="atelierName"></span>
						<span class="originCountry"></span>
					</div>
						</div>
		            </a>

				</div>


	 </div>


<div data-component="OSliderCofs" data-slides-desktop="4" data-slides-tablet="4" data-slides-mobile="2" class="o-slider-cofs o-pra-component o-product-slider o-pra-component carousel" ng-app="praAppModule" ng-controller="PRAController as cartPRACtrl" ng-init="cartPRACtrl.initCartContext('en_eur','product-detail-page')" ng-cloak>
                        <div class="a-heading-2 slider-title u-align-center">{{cartPRACtrl.pra1Panel.name}}</div>
	                        <span class="nodeName" hidden>jcr:content</span>
	                        <span class="propTitle" hidden>{{cartPRACtrl.pra1Panel.name}}</span>
                        <div class="slider" id="praSlider">
                            <div class="o-product" reload-slider-on-update ng-repeat="product in cartPRACtrl.pra1Panel.products">
                                <a ng-href="{{cartPRACtrl.transformLinkToCurrentContextPath(product.variantData[0].vlinkPdp)}}" target="_self" class="a-link no-styling full-area-link" onclick="trackProductClick(this,'.o-product')" ng-click="cartPRACtrl.notifyClick($event, product.variantData[0].ticket,product.variantData[0].varticleCode,'PRA1')">
                                </a>
                                    <div class="image-holder">
                                        <img class="a-image product-image" ng-src="{{product.variantData[0].vstillLifeImage}}" alt="{{product.variantData[0].varticleName}}">
                                    </div>
                                    <div class="description">
                                        <div class="product-variants">
                                            <label class="a-label js-a-label">
                                                Colours ({{product.variantData.length}})
                                            </label>
                                        </div>
                                        <label class="a-label js-a-label product-title">{{product.productName}}</label>
                                        <div class="m-product-price">
                                            <label ng-if="!(product.variantData[0].vformattedOldPrice)" class="a-label js-a-label">{{product.variantData[0].vformattedPrice}}</label>
                                            <label ng-if="(product.variantData[0].vformattedOldPrice)" class="a-label js-a-label is-deprecated">{{product.variantData[0].vformattedOldPrice}}</label>
                                            <label ng-if="(product.variantData[0].vformattedOldPrice)" class="a-label js-a-label is-reduced">{{product.variantData[0].vformattedPrice}}</label>
                                        </div>
                                        <div class="m-product-marker m-product-markers">
                                            <div class="marker-text product-marker" ng-init="prodMarkerColor = product.productMarkerColors.split(',')" ng-repeat="productMarkerItem in product.productMarkerText.split(',') track by $index" ng-if="$index < 2">
                                				<span style="color: {{prodMarkerColor[$index]}}">{{productMarkerItem}}</span>
                                            </div>
                                            <div class="marker-text promo-marker" ng-if="(product.promotionMarkerText)">
                                                <span>{{product.promotionMarkerText}}</span>
                                            </div>
                                        </div>
                                        <div class="marker-label temp-marker">
                                            <label class="a-label js-a-label" ng-switch="product.isNew">
                                                <span ng-switch-when="true">
													NEW
												</span>
                                                <span ng-switch-default></span>
                                            </label>
                                        </div>
                                        <div class="m-swatches sm">
                                            <div class="picked-color"></div>
                                            <div ng-repeat="variant in product.variantData track by $index">
                                                <div class="a-swatch js-swatch">
                                                    <div>
                                                        <input type="radio" name="colors" value="Black">
                                                        <button type="button" class="a-button-nostyle">
						                                	<span class="a-swatch-foreground"></span>
						                                	<img class="a-image" ng-src="{{variant.vswatch}}">
						                                	<span class="sold-out">Sold out</span>
	                                					</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <label class="a-label js-a-label product-brand">{{product.variantData[0].vbrandName}}</label>
                                    </div>

                                    <!-- COS PRA 1 DETAILS -->
                                    <div class="producttile-details" hidden>
                                        <span class="articleCode">{{product.variantData[0].varticleCode}}</span>
                                        <span class="baseProductCode">{{product.productKey}}</span>
                                        <span class="productName">{{product.productName}}</span>
                                        <span class="productCategory">{{product.mainCategory}}</span>
                                        <span class="currencyCode"></span>
                                        <span class="price">{{product.variantData[0].vformattedPrice}}</span>
                                        	<span ng-if="product.variantData[0].vformattedOldPrice" class="originalPrice">{{product.variantData[0].vformattedOldPrice}}</span>
		                        			<span ng-if="!product.variantData[0].vformattedOldPrice" class="originalPrice">{{product.variantData[0].vformattedPrice}}</span>
                                        <span class="brandName">{{product.variantData[0].vbrandName}}</span>
                                        <span class="colorLoc">{{product.variantData[0].vcolorLoc}}</span>
                                        <span class="atelierName">{{product.variantData[0].vatelierName}}</span>
                                        <span class="originCountry">{{product.variantData[0].voriginCountry}}</span>
                                    </div>
                            </div>
                        </div>
                    </div></div>
		    </div>

        </div>

       	<div class="productpar parsys"></div>
</div>
</div>
<div class="u-clearfix"></div>

<footer class="footer-global"><!-- Footer -->
    <div class="wrapper">
        <div class="footer parbase"><footer data-component="OFooter" class="o-footer"><a href="#" target="_self" class="a-link back-to-top u-display-none">Back to top<span class="a-icon-up-arrow"></span></a><hr class="a-keyline"><div class="items"><div class="nav1 navgroup parbase">
     <a href="/en_eur/customer-service.html" target="_self" class="a-link">Customer Service</a>

     <a href="/en_eur/customer-service/delivery-methods.html" target="_self" class="a-link">Delivery Information</a>

     <a href="/en_eur/customer-service/return-and-refund-policy.html" target="_self" class="a-link">Returns &amp; Refunds</a>

     <a href="/en_eur/customer-service/product-care.html" target="_self" class="a-link">Product Care</a>

     <a href="/en_eur/customer-service/size-guide.html" target="_self" class="a-link">Size Guide</a>

</div>
</div><div class="items"><div class="nav2 navgroup parbase">
     <a href="/en_eur/store-locator.html" target="_self" class="a-link">Store Locator</a>

     <a href="http://career.cosstores.com" target="_self" class="a-link">Careers</a>

     <a href="http://press.cosstores.com/" target="_self" class="a-link">Press</a>

     <a href="/en_eur/customer-service/contact-info.html" target="_self" class="a-link">Contact Us</a>

     <a href="/en_eur/customer-service/about-cos.html" target="_self" class="a-link">About COS</a>

</div>
</div><div class="items"><div class="socialmediaFooter socialmediafooter parbase"><a href="https://www.facebook.com/cos/" target="_blank" class="a-link">Facebook</a>
<a href="https://www.pinterest.com/cosstores/" target="_blank" class="a-link">Pinterest</a>
<a href="https://www.instagram.com/cosstores/" target="_blank" class="a-link">Instagram</a>



<a href="https://open.spotify.com/user/cosstores/playlist/03xISbDqJQ1DYgqtR9cjmN" target="_blank" class="a-link">Spotify</a></div>
</div><div class="items"><a href="#" target="_self" class="a-link open-lightbox" data-template="newsletter-signup" data-classes="is-subscribe">Subscribe</a></div></footer>
<script type="text/javascript" src="/etc/designs/appeaser/shared/clientlibs/components.min.js"></script>
<script type="text/html" id="newsletter-signup">
    <div class="o-newsletter-signup" data-component="ONewsletterSignUp" data-expires="30">
		<div class="newsletter_e171 newsletter parbase"><div class="o-newsletter-signup u-align-to-logo">
    <form data-component="OForm" class="o-form" id="newsletterSubscribeForm" action="javascript:subscribeNewsLetterWithPopup('/en_eur/fashionNews/subscribe', '/en_eur/subscribeconfirmation.html')" onsubmit='TealiumUtils.trackErrorMessage(this,"newsletter")'>
    <input type="hidden" id="enablePersonal" value="true" name="enablePersonal">
    <h2 class="a-heading-2">Subscribe to the COS newsletter…</h2>
	<p class="a-paragraph detail-text">Discover what’s happening in our world and enjoy 10% off your first order</p>
    <div class="m-error js-m-error is-hidden">
        <label class="a-label js-a-label has-error"></label>
    </div>
    <div data-component="MInput" class="m-input email">
    	<label class="a-label js-a-label" data-placeholder="Your email" for="txt-email">Email address</label>
        <label class="a-label js-a-label" for="txt-email"></label>
        <input id="txt-email" class="a-input js-a-input" type="email" required="required" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" data-validation-required-text="Enter email address" data-validation-pattern-text="Please enter a valid email address" />
    	<label class="a-label js-a-label" for="txt-email"></label>
    </div>
    <div data-component="MInput" class="m-input post-code">
        	<label class="a-label js-a-label" data-placeholder="Your post code (optional)" for="txt-postal-code">Your postcode (optional)</label>
            <label class="a-label js-a-label" for="txt-postal-code"></label>
            <input id="txt-postal-code" class="a-input js-a-input" pattern="^(?:\\s*)[^:ââ&quot;;!@$%^&amp;*()_+={}\\[<>,.?\`~|\\]\\/]+(s+[^\\s\\d:ââ&quot;;!@$%^&amp;*()_+={}\\[<>,.?\`~|\\]\\/]+)*(?:\\s*)$" data-validation-pattern-text="">
        </div>
    <div class="o-newsletter-personalized">
    		<div class="m-radio-button u-clearfix">
	            	<input type="radio" class="a-radio-button" id="women" name="gender" value="1">
                    <label class="a-label js-a-label u-no-select custom-radio" for="women"></label>
                    <label class="a-label js-a-label label-text" for="women">Women</label>
	         	</div>
	         <div class="m-radio-button u-clearfix">
	            	<input type="radio" class="a-radio-button" id="men" name="gender" value="2">
                    <label class="a-label js-a-label u-no-select custom-radio" for="men"></label>
                    <label class="a-label js-a-label label-text" for="men">Men</label>
	         	</div>
	         <div class="m-radio-button u-clearfix">
	            	<input type="radio" class="a-radio-button" id="both" name="gender" checked="checked" value="0">
                    <label class="a-label js-a-label u-no-select custom-radio" for="both"></label>
                    <label class="a-label js-a-label label-text" for="both">All</label>
	         	</div>
	         </div>
    <div class="m-checkbox u-clearfix m-checkbox-age" id="age">
	        <input type="checkbox" class="a-checkbox" id="connected_age" required="required" data-validation-required-text="" />
	        <label class="a-label js-a-label custom-box" for="connected_age"></label>
	        <label class="a-label js-a-label" for="connected_age">
			<label id="newsLetter-SignUpMessage"></label>
	        	<a href="/en_eur/customer-service/privacy-notice/direct-marketing.html" target="_blank" id="privacylightbox" class="a-link open-in-lightbox has-underline" data-template="privacyPolicy" data-classes="is-privacy-policy">privacy notice</a>.
	        </label>
	    </div>
	<button type="submit" class="a-button is-primary">
        <span>SUBSCRIBE</span>
    </button>
</form>
<script>
 $(document).ready(function(){
        if($(".o-lightbox ").find(".o-newsletter-signup").length > 0){
 		$('#privacylightbox').removeClass('open-lightbox');
		}
       });
	var localizedMessage;
	$.getJSON("/sling/servlet/default.newsletterpropertiesreader.cos."+getLang()+"."+cosApp.shared.utils.getCountryCode()+".json",  function(data) {
		localizedMessage= data.properties[0].localized;
		$( "#newsLetter-SignUpMessage" ).text( localizedMessage );
	});

	/*
	The timeout is for tracking the newsletter lightbox on pageload.
	Giving some time for needed Tealium resources to load.
	*/
	setTimeout(function(){
		if($('#newsletterSubscribeForm').parents('.o-lightbox').length){
			TealiumUtils.trackFunnelLink('newsletter_signup_start');
		}
	}, 1000);
</script></div></div>
</div>
</script>
<script type="text/x-handlebars-template" id="privacyPolicy">
	<div class="customerservice parbase"><div data-component="OPageContent" class="o-page-content customer-service-page">
	<div class="content-section">
		<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
			<div class="contain">
				<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
					<div class="customerservicepar parsys"><div class="fakebreadcrumb parbase section"><div class="m-breadcrumb">
	<a href="/en_eur/index.html" target="_self" class="a-link"><h1 class="a-heading-1">HOME</h1></a>

	<a href="/en_eur/customer-service.html" target="_self" class="a-link"><h1 class="a-heading-1">CUSTOMER SERVICE</h1></a>

	<a href="/en_eur/customer-service/privacy-notice.html" target="_self" class="a-link"><h1 class="a-heading-1">PRIVACY NOTICE</h1></a>

	<a href="/en_eur/customer-service/privacy-notice/direct-marketing.html" target="_self" class="a-link"><h1 class="a-heading-1">DIRECT MARKETING</h1></a>
</div>






</div>
<div class="keyline parbase section"><div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
	<hr class="a-keyline">
</div>
</div>
<div class="paragraph parbase section"><span class="richTextSpan">
	<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
		<div class="contain">
			<div class="u-row u-full-width">
				<div class="richtextWrapper is-richtext">
				    <p>
  <b>Privacy Notice Direct Marketing<br />  </b>
  <br /> <b>1. Why do we use your personal data?<br />  </b>
  <br /> We will use your personal data to send you marketing offers,
  information surveys and invitations through e-mails, text messages,
  phone calls and postal mail.<br /> <br /> In order to optimize your
  experience of COS we will provide you with relevant information,
  recommend products, send you reminders of products left in your
  shopping bag and send you personalized offers. All these great
  services are based on your previous purchases, what you have clicked
  on and information you have submitted to us.<br /> <br /> <b>2. What
    types of personal data do we process?</b>
  <br /> <br /> We will process following categories of personal
  data<br /> - contact information such as e-mail address, telephone
  number and postal code<br /> -  if you want updates for kids (if you
  choose to provide that to us)<br /> -  gender (if you choose to
  provide that to us)<br /> -  what products and offers you have clicked
  on<br /> <br /> If you have a COS account we will also process your
  personal data submitted in relation to the account and membership such
  as<br /> -  name<br /> -  address<br /> -  age<br /> -  shopping
  history<br /> -  how you navigated and clicked on the site<br />
  <br /> What types of personal data do we process?<br /> We will
  process following categories of personal data<br /> - contact
  information such as e-mail address, telephone number and postal
  code<br /> - if you want updates for kids (if you choose to provide
  that to us)<br /> - gender (if you choose to provide that to us)<br />
  - what products and offers you have clicked on<br /> <br /> If you
  have a COS account we will also process your personal data submitted
  in relation to the account and membership such as<br /> - name<br /> -
  address<br /> - age<br /> - shopping history<br /> - how you navigated
  and clicked on the site<br /> <br /> <b>3. Who has access to your
    personal data?<br />  </b>
  <br /> Data that is forwarded to third parties is only used to provide
  you with the service mentioned above, to media agencies and technical
  suppliers for distribution of physical and digital direct
  marketing.<br /> We never pass on, sell or swap your data for
  marketing purposes to third parties outside the H&amp;M group.<br />
  <br /> <b>4. What is the legal ground to process your personal
    data?<br />  </b>
  <br /> The processing of your personal data is based on your consent
  when you agree to direct marketing. Except for postal marketing,
  including catalogues, that will be sent to you based on our legitimate
  interest.<br /> <br /> <b>5. Your right to withdraw your
    consent:<br />  <br />  </b>You have the right to withdraw your
  consent for the processing of your personal data at any time and
  object to direct marketing.<br /> When you do so COS won't be able to
  send you any further direct marketing offers or information based on
  your consent.<br /> <br /> You can opt out from direct marketing by
  the following means:<br /> - following the instruction in each
  marketing post<br /> - by editing the settings of your COS
  account<br /> <br /> <b>6. How long do we save your data?<br />  </b>
  <br /> We will keep your data for direct marketing until you withdraw
  your consent.<br /> For e-mail marketing we will consider you an
  inactive customer if you haven't opened an e-mail for within the last
  year.<br /> After this time period your personal data will be
  deleted.<br /> <br /> View our full Privacy Notice <a href="/content/cos/en_eur/customer-service/privacy-notice.html">here</a>.</p>
 <p> </p>

				</div>
			</div>
		</div>
	</div>
</span></div>
</div>
</div>
			</div>
		</div>
	</div>
</div></div>
</script></div>
</div>
</footer><!-- /Footer --><!--[if lt IE 9]>
<link rel="stylesheet" href="/etc/designs/hm/clientlibs/desktop/ie8.min.css" type="text/css">
<script type="text/javascript" src="/etc/designs/hm/clientlibs/desktop/ie8.min.js"></script>
<![endif]-->
<!--[if gte IE 9]><!-->
<!--<![endif]-->
<script type="text/javascript" src="/etc/designs/hm/clientlibs/desktop.min.js"></script>
<script>

loadSizesByCodeOnReady('0722148001');
if ('com.hm.appeaser.aem.integration.product.AppProduct@15570d8f' !== '') {
    loadSwatchSize(cosApp.productDetails.selectedArticle);
}else if(false){
	loadSwatchSize(storiesApp.productDetails.selectedArticle);
}

$(document).ready(function() {
    //Call PatternLib-event to change button to OUT OF STOCK if product is out of stock
    if($('.size-options').not('.in-stock').length == $('.size-options').length) {
        appeaser.publish(appeaser.Enums.trigger.ALL_OUT_OF_STOCK);
    }
});

</script>

<script src="/etc/designs/appeaser/cos/clientlibs/pattern-lib/frontend.min.js"></script>
		<script src="/etc/designs/appeaser/cos/clientlibs/pattern-lib/controllers.min.js"></script>
	<script>
cosApp.shared.variables.addToCartServiceUrl = '/en_eur/cart/add';
cosApp.init();


function trackAddToCart(articleCode, sizeCode, productArticleDetails) {
  if(typeof(utag) != "undefined"){
        utag.data.page_id = TealiumUtils.getPDPPageId(articleCode);
        utag.data.category_id = TealiumUtils.getProductCategory();
        utag.data.category_path = 'productpage';
        var obj = {
            id : articleCode,
            name : TealiumUtils.getProductName(),
            price : TealiumUtils.getProductPrice(articleCode),
            original_price : TealiumUtils.getProductOriginalPrice(articleCode),
            brand : TealiumUtils.getBrandName(),
            category : TealiumUtils.getProductCategory(),
            color: TealiumUtils.getProductColorLoc(articleCode),
            material: "",
            view_type : "pdp",
            origin: TealiumUtils.getProductOrigin(articleCode),
            atelier: TealiumUtils.getProductAtelier(articleCode),
            variant: TealiumUtils.getProductColorLoc(articleCode)
       };
       addToCartUtagEventLink(obj,sizeCode,'1');
    }
    sendNotification('en_eur',articleCode, 'add-to-cart', 'PDP');
}

// begin of AppTealiumScript functions

function getOsaArea(){
    var areaAttr = "osa_area_0722148001";
    var osaArea = "";
    if(sessionStorage){
        osaArea = sessionStorage.getItem(areaAttr);
        sessionStorage.removeItem(areaAttr);
    }else if(localStorage){
        osaArea = localStorage.getItem(areaAttr);
        localStorage.removeItem(areaAttr);
    }
    if(osaArea == null){
        osaArea = "";
    }
    return osaArea;
}
function getOsaType(){
    var typeAttr = "osa_type_0722148001";
    var osaType = "";
    if(sessionStorage){
        osaType = sessionStorage.getItem(typeAttr);
        sessionStorage.removeItem(typeAttr);
    }else if(localStorage){
        osaType = localStorage.getItem(typeAttr);
        localStorage.removeItem(typeAttr);
    }
    if(osaType == null){
        osaType = "";
    }
    return osaType;
}
function getVirtualCategory(){
    var vcAttr = "vc_0722148001";
    var virtualCategory = "";
    if(sessionStorage){
        virtualCategory = sessionStorage.getItem(vcAttr);
        sessionStorage.removeItem(vcAttr);
    }else if(localStorage){
        virtualCategory = localStorage.getItem(vcAttr);
        localStorage.removeItem(vcAttr);
    }
    if(virtualCategory == null){
        virtualCategory = "";
    }
    return virtualCategory;
}
</script>

<script>
var trackAddProduct = function(productColor, productSizeCode) {
      /*Fix for defect 10148: Added productColor and productSizeCode as parameters to the trackAddToCart*/
      /*var color = this.getSelectedColor();*/

      var color = productColor;
      if(typeof(trackShopAction5) == 'function') {
        trackShopAction5(color, this.getSelectedSize(), productArticleDetails[color].priceValue, productArticleDetails[color].priceSaleValue, this.isCartStarter ? 'YES' : 'NO');
      }
      if(typeof(trackGoogleAnalyticsAddItem) == 'function') {
        trackGoogleAnalyticsAddItem(productArticleDetails[color].priceValue, productArticleDetails[color].priceSaleValue);
      }
      if(typeof(trackAddToCart) == 'function') {
        trackAddToCart(color, productSizeCode, productArticleDetails);
      }
      if(!hm.cookies.readCookie('cartStarted')) {
        hm.cookies.createCookie('cartStarted', true);
      }
    };

//  var _sliderStatus = {};

    $(window).on("load", function (e) {
//
//          $('.slick-slider .a-image').each(function(){
//              $(this).load(function(e){
//                  var src = e.currentTarget.src;
//                  if(!src || !_sliderStatus[src]){
//
//                      appeaser.publish(appeaser.Enums.trigger.RE_INITIALIZE_SLIDER,$('.slick-slider'));
//                      _sliderStatus[src]='loaded';
//                  }
//              });
//          });
// //           _sliderStatus = 'loaded';
//      }
        appeaser.publish(appeaser.Enums.trigger.RE_INITIALIZE_SLIDER,$('.slick-slider'));
    });

    function setCartPopupProductDetails(){
		$("#popupCart .cart-item-info .product-name").text($("[data-product-title]").text());
		$("#popupCart .cart-item-info .price").text($(".o-product-information #productPrice").text());
		var chosenColour = $("#swatchDropdown li.is-selected").attr("data-value");
		var capitalizedChosenColour = chosenColour.substr(0,1).toUpperCase()+chosenColour.substr(1);
		$("#popupCart .cart-item-info .color").text(capitalizedChosenColour);
		$("#popupCart .cart-item-info .size").text($("button.size-options.is-selected[data-value]").text());
		var stillLifeImageValue = $("#thisArticleStillLifeImage").val();
		$("#popupCart .cart-image-wrapper img").attr("src",stillLifeImageValue);
    }


//      $('.slick-slider .a-image').load(function(e){
//
//              appeaser.publish(appeaser.Enums.trigger.RE_INITIALIZE_SLIDER,$('.slick-slider'));
//          });



appeaser.subscribe(appeaser.Enums.trigger.ADD_ITEM_TO_CART,function(formData){

	setCartPopupProductDetails();

    cosApp.productDetails.defaultAddToCart(formData,function(data, qty, articleCode, productSize,textStatus, xhr){
        // On Success
        trackAddProduct(articleCode, cosApp.shared.utils.getSizeName(articleCode));
        //var src = $($('[data-component=MProductImage]')[0]).attr('src') || '';
        var src = $($('[data-component=MProductImage]')[0]).attr('src') || $($('#productGallery .main-image-wrapper .a-image.default-image')).attr('src') || '';
        var badResponse = data.result === false || typeof data.errorCode !== 'undefined';
        var hasMaxItem = data.errorCode === 'maxVariantNumberReached' ;
        var hasMaxOrderLines = data.errorCode === 'maxOrderLinesReached' ;

        var mCartAddition = $('.m-cart-addition');
        var mCartAdditionMaxNumber = $('.m-cart-addition .max');
        var showPopup = (badResponse && (hasMaxItem || hasMaxOrderLines)) || !badResponse;
        if(showPopup){
            if(badResponse){
                if((hasMaxItem || hasMaxOrderLines) && !mCartAddition.hasClass('has-max-items')){
                    if(hasMaxOrderLines){
                    	mCartAdditionMaxNumber.text("You have reached maximum number of items for your bag");
                    }else{
                    	mCartAdditionMaxNumber.text("You have reached maximum number of the same item for your bag");
                    }
                    mCartAddition.addClass('has-max-items');
                }
            } else if(!badResponse){
                if(mCartAddition.hasClass('has-max-items')){
                    mCartAddition.removeClass('has-max-items');
                }
            }
            appeaser.publish(appeaser.Enums.listen.ON_ITEM_ADDED_TO_CART, src);
            appeaser.publish(appeaser.Enums.trigger.UPDATE_SHOPPING_BAG_QTY, cosApp.shared.utils.getCartCount());
        }
        //appeaser.publish(appeaser.Enums.listen.ON_ITEM_ADDED_TO_CART, src);
        //appeaser.publish(appeaser.Enums.trigger.UPDATE_SHOPPING_BAG_QTY, cosApp.shared.utils.getCartCount());
    },function(xhr){
        console.log("Error calling services.");
    });
});
// appeaser.subscribe(appeaser.Enums.listen.ON_ITEM_ADDED_TO_CART,function(){
//  cosApp.shared.utils.updateCartCount();
// });


</script>
<div class="tealiumProductviewtag productview parbase"><script id="tealiumScript" type="text/javascript">initHMCookies(); initImpression(); initP11SearchPDP(); utag_data = {product_id : ["0722148001"], product_name : ["RIBBED LONG-SLEEVED T-SHIRT"], product_view_type : "pdp", product_category : [TealiumUtils.getProductCategory()], product_color: [TealiumUtils.getArticleColor()], product_size : [""], product_origin: [TealiumUtils.getProductOrigin()], product_variant: [TealiumUtils.getProductColorLoc()], product_atelier: [TealiumUtils.getProductAtelier()], product_brand: [TealiumUtils.getBrandNameorExternalBrandName()], product_action : "detail", product_price : [TealiumUtils.getProductPrice()], product_original_price : [TealiumUtils.getProductOriginalPrice()], product_material : [TealiumUtils.getArticleMaterial()], region_currency : TealiumUtils.getRegionCurrency(), customer_id : TealiumUtils.getCustomerData()[0], customer_email : TealiumUtils.getCustomerData()[1], customer_zip : TealiumUtils.getCustomerData()[2], customer_city : TealiumUtils.getCustomerData()[3], customer_state : TealiumUtils.getCustomerData()[4], customer_country : TealiumUtils.getCustomerData()[8], event_type: "", session_touchpoint : getTouchpoint() , session_login_status : TealiumUtils.getSessionLoginStatus(), page_id : "PRODUCT DETAIL : 0722148001 : RIBBED LONG-SLEEVED T-SHIRT", page_type : "productpage", category_id : "Tops", category_path : TealiumUtils.getCategoryPath('true','RIBBED LONG-SLEEVED T-SHIRT'), region_market : hm.multiCountry.getCountryCode('HMCORP_locale'), region_locale : hm.multiCountry.getLocale('HMCORP_locale','en'), navigation_behavior : TealiumUtils.getNavigationBehaviour(), content_category: TealiumUtils.getContentCategory(), content_action: TealiumUtils.getContentAction(), content_id: TealiumUtils.getContentId(), content_count: TealiumUtils.getContentCount(), list_action: '', customer_id : TealiumUtils.getCustomerData()[0], customer_email : TealiumUtils.getCustomerData()[1], customer_zip : TealiumUtils.getCustomerData()[2], customer_city : TealiumUtils.getCustomerData()[3], customer_state : TealiumUtils.getCustomerData()[4], customer_country : TealiumUtils.getCustomerData()[8], event_type: ""}; utagTealiumTrack(function(a,b,c,d){a=getTealiumURL('brands-cos');b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);});</script> </div>
<script>

		$(document).ready(function() {

			 var appnt = '';
		      if(appnt){
		    	  var querystring = window.location.href;
		    	  if(querystring.includes("?appnt")){
		    		  querystring = querystring.replace("?appnt=true", "");
		    		  window.history.replaceState(null, querystring , querystring);
		    	  }
		    	  else{
		    		  if(querystring.includes("&appnt")){
		    			  querystring = querystring.replace("&appnt=true", "");
		    			  window.history.replaceState(null, querystring , querystring);
		    		  }
		    	  }
		    	  $("#noTransactionalClick").trigger('click');
		      }
		});
</script></body></html>`,
};
