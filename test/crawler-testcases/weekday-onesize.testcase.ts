/* tslint:disable:max-line-length */
import { WeekdayCrawler } from '../../src/crawler/crawlers/weekday.crawler';

export const weekdayOneSizeTestCase = {
  crawlerType: WeekdayCrawler,

  url: 'weekday-0622708001.html',

  sizes: [
    { id: '0622708001001', isAvailable: true, name: 'NOSIZE' },
  ],

  sizeChecks: [
    { size: '0622708001001', isAvailable: true, isLowInStock: false },
    { size: 'sizedoesnotexist', isAvailable: false, isLowInStock: false },
  ],

  name: 'Eye Webbing Key Ring',

  priceChecks: [
    { size: '0622708001001', price: 10 },
    { size: 'unknown-size', price: 10 },
  ],

  secondResponse: { availability: ['0622708001001'], fewPieceLeft: [] },

  testResponse: `<!DOCTYPE HTML>
<html class="no-js">
    <head>

	<meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Expires" content="-1">

    <title>Eye Webbing Key Ring - Black - Accessories - Weekday DE</title><meta name="description" content=" The Eye Webbing Key Ring consists of two silver tone rings - the smaller one with a hook clasp that can be easily attached to a belt loop or a bag as a standout accessory or simply hold your keys visible and in place. A utility style webbing loop connects the piece. - Eye Webbing Key Ring is 13,5 cm long. "><meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="keywords" content="Eye Webbing Key Ring">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
<meta name="format-detection" content="telephone=no">
<meta property="og:title" content="Eye Webbing Key Ring - Black - Accessories - Weekday DE">
	<meta property="og:description" content=" The Eye Webbing Key Ring consists of two silver tone rings - the smaller one with a hook clasp that can be easily attached to a belt loop or a bag as a standout accessory or simply hold your keys visible and in place. A utility style webbing loop connects the piece. - Eye Webbing Key Ring is 13,5 cm long. ">
	<meta property="og:url" content="https://www.weekday.com/en_eur/women/accessories/product.eye-webbing-key-ring-black.0622708001.html">
	<meta property="og:site_name" content="Weekday">
	<meta property="og:type" content="product">

	<meta property="og:price:amount" content="10.00">
	<meta property="product:price:amount" content="10.00">


	<meta property="og:price:currency" content="EUR">
<meta property="product:price:currency" content="EUR">
<meta property="og:availability" content="instock">

	<meta property="og:image" content="//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]">
	<meta property="fb:app_id" content="261922123864060" >

 	<!--[if lt IE 9]>
     <script src="/etc/designs/hm/clientlibs/shared/head/js/libs/angularjs.1.2.28.min.js"></script>
     <script src="/etc/designs/hm/clientlibs/shared/head/js/libs/angular-sanitize.1.2.28.min.js"></script>
<![endif]-->
<!--[if (gte IE 9) | (!IE)]><!-->
    <script type="text/javascript" src="/dtagent_ICA23STVjpqrx_7000000321009.js" data-dtconfig="agentUri=/dtagent_ICA23STVjpqrx_7000000321009.js|rid=RID_1917540389|rpid=-1613630372|domain=weekday.com|lastModification=1546601406922|lab=1|tp=500,50,0,1,10|reportUrl=dynaTraceMonitor|app=Appeaser Production Desktop Web"></script><script src="/etc/designs/hm/clientlibs/shared/head/js/libs/angularjs.1.3.15.min.js"></script>
    <script src="/etc/designs/hm/clientlibs/shared/head/js/libs/angular-sanitize.1.3.15.min.js"></script>
<!--<![endif]-->
<script src="/etc/designs/appeaser/weekday/clientlibs/pattern-lib/frontend/js/modernizr-custom.min.js"></script><style type="text/css"></style>
<link href="/etc/designs/appeaser/weekday/clientlibs/pattern-lib/frontend.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/etc/designs/appeaser/shared/head.min.js"></script>
<script type="text/javascript" src="/etc/designs/hm/clientlibs/shared/jquery.min.js"></script>
<script type="text/javascript" src="/etc/designs/hm/clientlibs/shared.min.js"></script>
<script type="text/javascript" src="/etc/designs/appeaser/weekday/clientlibs/application.min.js"></script>
<script>
            (function () {
            	var locale = hm.multiCountry.readCookieValue('HMCORP_locale');
            	var currencyFromCookie = "";
            	var userAgents = 'Googlebot'.split(','),
                requestFromWebCrawler = false;
            	var currentUserAgent = navigator.userAgent;

            	userAgents.some(function (userAgent) {
                if (currentUserAgent.toLowerCase().indexOf(userAgent.toLowerCase())!==-1) {
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
                    	var georguriURL = '?goeorguri=%2Fen_eur%2Fwomen%2Faccessories%2Fproduct.eye-webbing-key-ring-black.0622708001.html';
                    	var redirectPageURL = "/content/weekday/page.countryselector."+ locale + ".en_eur."+currencyFromCookie+".jsp" + georguriURL;
                    	window.location.href = redirectPageURL;
                    }
                }
            })();
        </script>
    <script src="/etc/designs/appeaser/shared/rakuten/js/rakuten.js"></script><script type="text/javascript" src="/etc/designs/appeaser/shared/clientlibs/metaTags.min.js"></script>
<link rel="shortcut icon" type="image/png" href="/etc/designs/appeaser/weekday/favicons/favicon-32.png">
    <link rel="apple-touch-icon" href="/etc/designs/appeaser/weekday/favicons/favicon-57.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/etc/designs/appeaser/weekday/favicons/favicon-180.png">
    <link rel="alternate" hreflang="en-AT" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-BE" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-CZ" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
	<link rel="alternate" hreflang="en-DK" href="https://www.weekday.com/en_dkk/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-FI" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-FR" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-DE" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-HU" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-IE" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-IT" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-NL" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-PL" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-PT" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-SK" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-SI" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
        <link rel="alternate" hreflang="en-ES" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
      	<link rel="alternate" hreflang="en-SE" href="https://www.weekday.com/en_sek/women/product.eye-webbing-key-ring-black.0622708001.html">
       	<link rel="alternate" hreflang="en-GB" href="https://www.weekday.com/en_gbp/women/product.eye-webbing-key-ring-black.0622708001.html">
		<link rel="alternate" hreflang="x-default" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html">
		<link rel="canonical" href="https://www.weekday.com/en_eur/women/product.eye-webbing-key-ring-black.0622708001.html"/>
	<div class="generatorScriptTouchpoint touchpoint parbase"><script type="text/javascript" src="/en_eur/metrics/default/touchpoint.js"></script>

    </div>
<div class="dnsprefetch parbase"></div>
<input id="ogimage" type="hidden" value=""/>

     <input type="hidden" id="metaPrice" value="10.0"/>
		</head><!-- Code to manage the mobile preview after css changes by HTML team -->
<body data-component="OPage" class="layout-inside">
<div class="header parbase"><!--zAEMPUBAPPWW16.goep.hm.com-->

<script>
    var hm = window.hm || {};
    var rs = "http://acc-lp2.hm.com/hmacc?set=width[{width}],quality[{quality}],options[limit]&source=url[{path}]&scale=width[global.width],height[15000],options[global.options]&sink=format[{ext}],quality[global.quality]";
	hm.rimdService = rs;
</script>
<script type="text/x-handlebars-template" data-template="newsletter-popup" data-classes="is-newsletter-popup" id="weekdaynewsletter-popup-id" class=""></script>
<div class="topnav parbase"><!-- style="color:"-->
<script type="text/javascript">
		function loadCategories(id,value,name){
			var componentPath='/content/weekday/en_eur/jcr:content/header/topnav';
			loadCategoriesCmpPath(componentPath,id,value,name);
		}
	</script>
</div>
<div class="rightnav parbase"><!-- style="color:"-->
<script type="text/javascript">
		function loadRightCategories(id,value,name){
			var componentPath='/content/weekday/en_eur/jcr:content/header/rightnav';
			loadRightCategoriesCmpPath(componentPath,id,value,name);
		}
	</script>
</div>
<div class="u-no-select">
	<div class="a-overlay js-a-overlay q-opacity-0"
		data-component="AOverlay"></div>
	<div data-component="MProductZoom" class="m-product-zoom">
		<button type="button" class="a-button-nostyle a-icon-close js-close-icon"></button>
		<div class="img-wrapper"></div>
	</div>
	<div class="newsletter parbase"><script type="text/javascript" src="/etc/designs/appeaser/shared/clientlibs/components.min.js"></script>
<script type="text/html" id="newsletter-popup">
		<div class="is-newsletter-popup">
            <div data-component="ONewsletterPopup" data-expires="30" class="o-newsletter-popup" >
<div class="newsletter-popup-container">
<form data-component="OForm" class="o-form" id="newsletterSubscribeForm" action="javascript:weekDayNewsLetterPopup('/en_eur/fashionNews/subscribe')" tabindex="1" onsubmit='TealiumUtils.trackErrorMessage(this,"newsletter")'>
    <input type="hidden"  id="enablePersonal" value="true" name="enablePersonal"/>

	<input type="hidden"  id="enableNewsletter" value="true" name="enableNewsletter"></input>
	 <input type="hidden"  id="delaytime" value="1500" name="delaytime"></input>
<h2 class="a-heading-2">Don't miss out...</h2>
<p class="a-paragraph">Sign up for our newsletter and get 10% off one order.</p>
   <div class="m-error js-m-error is-hidden">
       <label class="a-label js-a-label has-error"></label>
    </div>
<div data-component="MInput" class="m-input no-description"><label class="a-label js-a-label" for="email-id-txt"></label>
<input id="email-id-txt" class="a-input js-a-input" type="email" value="" required="required" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" data-validation-required-text="Enter e-mail address" data-validation-pattern-text="Please enter a valid e-mail address" data-alreadyexist-pattern-text="This email already exists. Please try again"/>
<label class="a-label js-a-label" data-placeholder="Your email" for="email-id-txt">Your e-mail</label></div>
<div class="o-newsletter-personalized">
 <div data-component="MInput" class="m-input">
<label class="a-label js-a-label" for="postal-code-txt"></label>
<input id="postal-code-txt" class="a-input js-a-input" pattern="^(?:\\s*)[^:Ã¢â¬ÅÃ¢â¬ï¿½&quot;;!@$%^&amp;*()_+={}\\[<>,.?\`~|\\]\\/]+(s+[^\\s\\d:Ã¢â¬ÅÃ¢â¬ï¿½&quot;;!@$%^&amp;*()_+={}\\[<>,.?\`~|\\]\\/]+)*(?:\\s*)$"
 data-validation-pattern-text="Please enter a valid postal code" tabindex="101">
 <label class="a-label js-a-label" data-placeholder="Your post code (optional)" for="postal-code-txt">Your postal code (optional)</label>
 </div>
 <div class="m-radio-button u-clearfix">
 <input type="radio" class="a-radio-button" id="women-id" name="gender" value="1">
 <label class="a-label js-a-label u-no-select custom-radio" for="women-id"></label>
 <label class="a-label js-a-label label-text" for="women-id">Women</label>
 </div>
 <div class="m-radio-button u-clearfix">
 <input type="radio" class="a-radio-button" id="men-id" name="gender" value="2">
 <label class="a-label js-a-label u-no-select custom-radio" for="men-id"></label>
 <label class="a-label js-a-label label-text" for="men-id">Men</label>
 </div>
 <div class="m-radio-button u-clearfix">
 <input type="radio" class="a-radio-button" id="both-id" name="gender" checked="checked" value="0">
 <label class="a-label js-a-label u-no-select custom-radio" for="both-id"></label>
 <label class="a-label js-a-label label-text" for="both-id">Both</label></div>
 </div>
 <div class="m-checkbox u-clearfix m-checkbox-age" id="age-id">
 <input type="checkbox" class="a-checkbox" id="connected_age-id" required="" data-validation-required-text="">
 <label class="a-label js-a-label custom-box" for="connected_age-id" ></label>
  <label class="a-label js-a-label" for="connected_age-id">
     <span id="newsLetter-SignUpMessage"></span>
     <a href="/en_eur/help/help/privacy-notice/direct-marketing.html" target="_blank" class="a-link has-underline">privacy notice.</a>
                </label>
 </div>
 <button type="submit" class="a-button is-primary"> <span>SUBMIT</span>
            </button>
</form>
</div>

 <div class="subscription-confirmation"><h2 class="a-heading-2">Thanks for signing up.</h2><p class="a-paragraph"> As soon as we have new arrivals, special offers or store events, you’ll be the first to know.</p>
                        <a class="a-button is-primary" href="/en_eur/women/get-the-latest/new-arrivals.html"> <span class="text">Women’s new arrivals</span></a>
                        <a class="a-button is-primary" href="/en_eur/men/get-the-latest/new-arrivals.html"> <span class="text">Men’s new arrivals</span></a>

</div></div>
</div>
</script>
 <script>
  var _self = this;
  $(document).ready(function(){
      var cookieMessage;
      //_self.privacyCookiePopup($(".open-in-lightbox").attr("href"));
   $(".open-in-lightbox").click(function(e){
	   _self.privacyCookiePopup(this.href);
       e.preventDefault();
   });

   $(".a-overlay,.js-close-button").click(function(e){
   if($(".a-overlay").hasClass("custom-overlay")){
   	$(".a-overlay").removeClass("q-opacity-95 q-bg-grey-light custom-overlay");
	$( ".o-lightbox .lightbox-content " ).remove();
    appeaser.publish(appeaser.Enums.trigger.HIDE_LIGHTBOX);

     }
	});

 });


   function privacyCookiePopup(privacyUrl){
       var url = privacyUrl;
       setTimeout(function(){
       $.ajax({
	        "url": url,
	        "dataType": "html",
	    	"success": function(data){


	            			data = $(data).find('.parsys');
					  window.cookieMessage=$(data).html();

		   if($(".o-lightbox ").find(".lightbox-content").length == 0)
       		{
           $(".lightbox-wrapper").append("<div class='lightbox-content js-content u-clearfix' data-template='empty1' style='display:block'>");
           $('.lightbox-content').html(window.cookieMessage);
           $(".o-lightbox").addClass("is-open");
           $(".a-overlay").addClass("is-visible q-opacity-95 q-bg-grey-light custom-overlay");
           appeaser.scan();
			}

	  }
	    	});
            },300);
}


    function privacyWeekdayPopup(privacyUrl){
        var url = privacyUrl;
        setTimeout(function(){
        $.ajax({
	        "url": url,
	        "dataType": "html",
	    	"success": function(data){
               				data = $(data).find('.parsys');
 							data.addClass('newsletter-privacy-popup');
	            			$(".lightbox-content[data-template='empty1']").html(data);
	            			appeaser.scan();

	    				}
	    	});
             },300);
}

</script>
<script type="text/x-handlebars-template" id="empty1">
</script></div>
<header
		class="o-header u-clearfix not-sign-in "
		data-component="OHeader" style="color:;">
		<div
			class="u-cols-lg-24-24 u-cols-md-12-12 u-cols-sm-12-12 u-row u-full-width">
			<div class="contain">
				<div
					class="u-cols-lg-24-24 u-cols-md-12-12 u-cols-sm-12-12 u-no-padding">
					<div class="cart-addition-section">
						<div class="m-cart-addition">
							<div class="content">
								<button type="button" class="a-button-nostyle a-icon-close"></button><label
									class="a-label js-a-label max">You have reached maximum
									number of items for this shopping bag</label>
								<div class="product-section">
									<img class="a-image" src="/images/product-thumbnail.png"><!--
									 --><div class="info-section">
										<label class="a-label js-a-label">Added to my bag</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="minicart-section">
						<div class="o-minicart">
							<div class="minicart parbase"><h2 class="a-heading-2" >
     My bag&nbsp;
     <span class="item-count"></span>
     <button type="button" class="a-icon-close a-button-nostyle"></button>
</h2>
<div class="products">
    <p class="a-paragraph empty-cart-text">Your bag is empty</p>
</div></div>
</div>
					</div>
					<div class="country-section">
						<a id="noTransactionalClick" href="#" target="_self" class="a-link open-lightbox" data-template="country-selector" data-classes="is-country-selector">Shipping to: <span style="visibility:hidden"></span></a>
                        <a href="/en_eur/storelocator.html" target="_self" class="a-link store-finder">Store locator</a>
					</div>
					<nav class="navigation-section">
						<a class="a-button back-button is-transparent" href="/en_eur/index.html">Back to shop</a>
						<button type="button" class="a-button-nostyle a-icon-menu open-main-menu"></button>
						<button type="button" class="a-button-nostyle a-icon-search"></button>
						<div data-component="OMainMenu"
							class="o-main-menu is-closed-mobile u-no-animation">
							<div class="header">
								<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
									</button> <button type="button" class="a-button-nostyle a-icon-close"></button>
								</div>
							</div>

							<div class="primary">
								<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
									<div class="primary-links">

											<div class="items">
												<ul class="left-items">
													<li>
															<button type="button" class="a-button-nostyle">
																<label class="a-label js-a-label menu-link">Women</label>
																<span class="a-icon-arrow-forward"></span>
															</button>
														</li>
													<li>
															<button type="button" class="a-button-nostyle">
																<label class="a-label js-a-label menu-link">Men</label>
																<span class="a-icon-arrow-forward"></span>
															</button>
														</li>
													<li>
															<button type="button" class="a-button-nostyle">
																<label class="a-label js-a-label menu-link">Denim</label>
																<span class="a-icon-arrow-forward"></span>
															</button>
														</li>
													<li>
															<button type="button" class="a-button-nostyle">
																<label class="a-label js-a-label menu-link">Sale</label>
																<span class="a-icon-arrow-forward"></span>
															</button>
														</li>
													</ul>
												<ul class="right-items">
													<li class="is-direct-menulink">
																	<a href="/en_eur/our-id.html" target="_self" class="a-link menu-link">Our ID</a>
																</li>
															<li>
																	<button type="button" class="a-button-nostyle">
																		<label class="a-label js-a-label menu-link">Help</label>
																		<span class="a-icon-arrow-forward"></span>
																	</button>
																</li>
															<li class="sign-in-section">
														<div class="account parbase"><script type="text/javascript">
//tealium script
var localeInfo = {};
	localeInfo.locale = hm.multiCountry.getLocale('HMCORP_locale','en');
	localeInfo.country = hm.multiCountry.getCountryCode('HMCORP_locale');
</script>

<button type="button" data-template="sign-in" class="a-button-nostyle not-logged-in open-lightbox" onclick="TealiumUtils.trackFunnelLink('login_start');">
	<span class="menu-link">Sign in</span>
	<span class="a-icon-arrow-forward"></span>
</button>

<button type="button" id="account-button" class="a-button-nostyle" style="display:none">
	<span class="menu-link">My account</span>
	<span class="a-icon-arrow-forward"></span>
</button>

<script type="text/x-handlebars-template" id="sign-in">
	<div class="u-cols-lg-24-24 u-cols-md-12-12 u-cols-sm-12-12">
		<ul data-component="MTablist" class="m-tablist tabs-1-2" data-tablist-for="sign-in-registration-tabs">
			<li data-toggle="#sign-in-form" class="u-no-select is-active">
				<a href="#sign-in-form" target="_self" class="a-link" onclick="TealiumUtils.trackFunnelLink('login_start');">Sign in</a>
			</li>
			<li data-toggle="#registration-form" class="u-no-select">
				<a href="#registration-form" target="_self" class="a-link" onclick="TealiumUtils.trackFunnelLink('registration_start');">New customer</a>
			</li>
		</ul>
		<div data-content-for="sign-in-registration-tabs" class="tablist-content">
			<div id="sign-in-form" class="content is-active">
				<div class="o-sign-in in-lightbox">
					<form data-component="OForm" class="o-form" action="https://www.weekday.com/en_eur/j_spring_security_check" onsubmit='TealiumUtils.trackTryLoginRegister("login")' method="POST">
						<div class="m-error js-m-error is-hidden">
							<label class="a-label js-a-label has-error"/>
						</div>
						<div data-component="MInput" class="m-input" placeholder="">
							<label class="a-label js-a-label" for="sign-in-email"></label>
							<input placeholder="" class="a-input js-a-input" type="email" name="j_username" id="sign-in-email" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" data-validation-required-text="Enter email address" data-validation-pattern-text="Please enter a valid email address">
								<label class="a-label js-a-label" data-placeholder="Email" for="sign-in-email">Email</label>
						</div>
						<div data-component="MInput" class="m-input no-description" placeholder="">
							<label class="a-label js-a-label" for="sign-in-password">Password</label>
							<input placeholder="" class="a-input js-a-input" type="password" name="j_password" id="sign-in-password" required pattern="^[^ ]{5,35}$" data-validation-required-text="Enter password" data-validation-pattern-text="Password must be between 5 - 25 characters and may not contain any spaces">
								<label class="a-label js-a-label" data-placeholder="Password" for="sign-in-password">Password</label>
						</div>
						<div class="link-holder" onclick="TealiumUtils.trackFunnelLink('forgot_password_start');">
							<a href="https://www.weekday.com/en_eur/password/requestSignIn" target="_self" class="a-link forgot-password">Forgot password?</a>
						</div>
						<button type="submit" class="a-button is-primary">
							<span>Sign in</span>
						</button>
					</form>
				</div>
			</div>
			<div id="registration-form" class="content">
				<div class="o-registration empty-registration">
					<form data-component="OForm" class="o-form" action="https://www.weekday.com/en_eur/register/newcustomer" onsubmit='TealiumUtils.trackTryLoginRegister("registration")' method="POST">
						<div class="o-registration-form">
							<div class="m-error js-m-error is-hidden">
								<label class="a-label js-a-label has-error">
								</label>
							</div>
							<div class="e-mail-input">
								<div data-component="MInput" class="m-input">
									<label class="a-label js-a-label" for="registration-email"/>
									<input class="a-input js-a-input" type="email" name="email" id="registration-email" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" data-validation-required-text="Enter email address" data-validation-pattern-text="Please enter a valid email address">
										<label class="a-label js-a-label" data-placeholder="Email" for="registration-email">Email</label>
									</div>
								</div>
								<div data-component="MInput" class="m-input password" placeholder="" id="password">
									<label class="a-label js-a-label" for="pwd"/>
									<input placeholder="" class="a-input js-a-input" type="password" name="pwd" id="pwd" required pattern="^[^ ]{6,25}$" data-validation-required-text="Enter password" data-validation-pattern-text="Password must be between 6 - 25 characters and may not contain any spaces">
										<label class="a-label js-a-label" data-placeholder="Password" for="pwd">Password</label>
								</div>
								<div data-component="MInput" class="m-input password-repeat" placeholder="" data-validation-match-field="password">
									<label class="a-label js-a-label" for="checkPwd"/>
									<input placeholder="" class="a-input js-a-input" type="password" name="checkPwd" id="checkPwd" required data-validation-required-text="Please confirm your new password" data-validation-match-field-text="Passwords are not matching">
										<label class="a-label js-a-label" data-placeholder="Confirm password" for="checkPwd">Confirm password</label>
								</div>
								<div class="country-section-wrapper u-clearfix">
									<label class="a-label js-a-label country-section">Sweden </label><a href="#" target="_self" class="a-link open-lightbox" data-template="country-selector" data-classes="is-country-selector">Change country</a>
								</div>
								<div class="checkbox-input">
									<div class="m-checkbox u-clearfix" id="newsletter">
										<input type="checkbox" class="a-checkbox" id="connected_newsletter" name="hmNewsSubscription">
										<label class="a-label js-a-label custom-box" for="connected_newsletter"/>
										<label class="a-label js-a-label" for="connected_newsletter">
											<span class="newsLetterText">Sign me up for the newsletter, and yes I am over 16 years old. I accept the </span>
											<a href="/en_eur/help/help/privacy-notice/account.html" target="_blank" class="a-link policiesLink">Privacy notice</a>
										</label>
									</div>
									<div class="m-checkbox u-clearfix" id="policies">
										<input type="checkbox" class="a-checkbox" name="termsAndConditions" id="connected_policies" required data-validation-required-text="You must agree to our policies">
										<label class="a-label js-a-label custom-box" for="connected_policies"/>
										<label class="a-label js-a-label" for="connected_policies">
											<span class="policiesText is-richtext">I consent to Weekday using my personal data to manage my personal account in accordance with&nbsp;<a href="/en_eur/help/help/privacy-notice/account.html" target="_blank" class="a-link policiesLink">Privacy notice</a></span>
										</label>
									</div>
								</div>
								<button type="submit" class="a-button is-primary">
									<span>Submit</span>
								</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</script>
</div>
</li>
												</ul>
											</div>



									</div>
									<ul class="direct-links">
										<li>
											<a href="/en_eur/storelocator.html" target="_self" class="a-link">Store locator</a>
										</li>
                                        <li>
											<a href="#" target="_self" class="a-link open-lightbox" data-template="country-selector" data-classes="is-country-selector">Shipping to: <span style="visibility:hidden"></span></a>
										</li>
									</ul>
								</div>
							</div>
							<div class="secondary">
								<div class="sub-menu">
										<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
											<span class="a-icon-arrow-back"></span>
											<h2 class="a-heading-2 category-heading">Women</h2>
										</div>
										<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-4-24">
												<div class="o-menu-list js-o-menu-list js-code">
													<h3 class="a-heading-3 js-a-heading-3">Categories</h3>
													<div class="o-list js-o-list">
														<ul>
															<li><a href="/en_eur/women/categories/new-arrivals.html" target="_self" class="a-link NaN">New arrivals</a>
																	</li>
															<li><a href="/en_eur/women/categories/all.html" target="_self" class="a-link NaN">All</a>
																	</li>
															<li><a href="/en_eur/women/categories/accessories.html" target="_self" class="a-link NaN">Accessories</a>
																	</li>
															<li><a href="/en_eur/women/categories/basics.html" target="_self" class="a-link NaN">Basics</a>
																	</li>
															<li><a href="/en_eur/women/categories/dresses-and-jumpsuits.html" target="_self" class="a-link NaN">Dresses &amp; jumpsuits</a>
																	</li>
															<li><a href="/en_eur/women/categories/hoodies-and-sweatshirts.html" target="_self" class="a-link NaN">Hoodies &amp; sweatshirts</a>
																	</li>
															<li><a href="/en_eur/women/categories/jackets-and-coats.html" target="_self" class="a-link NaN">Jackets &amp; coats</a>
																	</li>
															<li><a href="/en_eur/women/categories/jeans.html" target="_self" class="a-link NaN">Jeans</a>
																	</li>
															<li><a href="/en_eur/women/categories/knitwear.html" target="_self" class="a-link NaN">Knitwear</a>
																	</li>
															<li><a href="/en_eur/women/categories/shirts-and-blouses.html" target="_self" class="a-link NaN">Shirts &amp; blouses</a>
																	</li>
															<li><a href="/en_eur/women/categories/shoes.html" target="_self" class="a-link NaN">Shoes</a>
																	</li>
															<li><a href="/en_eur/women/categories/shorts.html" target="_self" class="a-link NaN">Shorts</a>
																	</li>
															<li><a href="/en_eur/women/categories/skirts.html" target="_self" class="a-link NaN">Skirts</a>
																	</li>
															<li><a href="/en_eur/women/categories/swimwear.html" target="_self" class="a-link NaN">Swimwear</a>
																	</li>
															<li><a href="/en_eur/women/categories/tops.html" target="_self" class="a-link NaN">Tops</a>
																	</li>
															<li><a href="/en_eur/women/categories/trousers.html" target="_self" class="a-link NaN">Trousers</a>
																	</li>
															<li><a href="/en_eur/women/categories/underwear.html" target="_self" class="a-link NaN">Underwear</a>
																	</li>
															</ul>
													</div>
												</div>
											</div>
											<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-4-24">
												<div class="o-menu-list js-o-menu-list js-code">
													<h3 class="a-heading-3 js-a-heading-3">Get the latest</h3>
													<div class="o-list js-o-list">
														<ul>
															<li><a href="/en_eur/women/get-the-latest/women-resort-online-exclusive-collection.html" target="_self" class="a-link NaN">Winter Vacay Collection</a>
																	</li>
															<li><a href="/en_eur/women/get-the-latest/inweekday.html" target="_self" class="a-link NaN">#inweekday</a>
																	</li>
															<li><a href="/en_eur/women/get-the-latest/weekly-edit.html" target="_self" class="a-link NaN">Weekly edit</a>
																	</li>
															<li><a href="/en_eur/women/get-the-latest/zeitgeist.html" target="_self" class="a-link NaN">Zeitgeist</a>
																	</li>
															<li><a href="/en_eur/women/get-the-latest/selected-brands.html" target="_self" class="a-link NaN">Selected brands </a>
																	</li>
															<li><a href="/en_eur/women/get-the-latest/sale.html" target="_self" class="a-link NaN">Sale</a>
																	</li>
															</ul>
													</div>
												</div>
											</div>
											</div>
								<div class="sub-menu">
										<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
											<span class="a-icon-arrow-back"></span>
											<h2 class="a-heading-2 category-heading">Men</h2>
										</div>
										<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-4-24">
												<div class="o-menu-list js-o-menu-list js-code">
													<h3 class="a-heading-3 js-a-heading-3">Categories</h3>
													<div class="o-list js-o-list">
														<ul>
															<li><a href="/en_eur/men/categories/new-arrivals.html" target="_self" class="a-link NaN">New arrivals</a>
																	</li>
															<li><a href="/en_eur/men/categories/most-wanted.html" target="_self" class="a-link NaN">Most wanted</a>
																	</li>
															<li><a href="/en_eur/men/categories/all.html" target="_self" class="a-link NaN">All</a>
																	</li>
															<li><a href="/en_eur/men/categories/accessories.html" target="_self" class="a-link NaN">Accessories</a>
																	</li>
															<li><a href="/en_eur/men/categories/basics.html" target="_self" class="a-link NaN">Basics</a>
																	</li>
															<li><a href="/en_eur/men/categories/hoodies-and-sweatshirts.html" target="_self" class="a-link NaN">Hoodies &amp; sweatshirts</a>
																	</li>
															<li><a href="/en_eur/men/categories/jackets-and-coats.html" target="_self" class="a-link NaN">Jackets &amp; coats</a>
																	</li>
															<li><a href="/en_eur/men/categories/jeans.html" target="_self" class="a-link NaN">Jeans</a>
																	</li>
															<li><a href="/en_eur/men/categories/shirts.html" target="_self" class="a-link NaN">Shirts</a>
																	</li>
															<li><a href="/en_eur/men/categories/shoes.html" target="_self" class="a-link NaN">Shoes</a>
																	</li>
															<li><a href="/en_eur/men/categories/shorts.html" target="_self" class="a-link NaN">Shorts</a>
																	</li>
															<li><a href="/en_eur/men/categories/sunglasses.html" target="_self" class="a-link NaN">Sunglasses</a>
																	</li>
															<li><a href="/en_eur/men/categories/sweaters.html" target="_self" class="a-link NaN">Sweaters</a>
																	</li>
															<li><a href="/en_eur/men/categories/swimwear.html" target="_self" class="a-link NaN">Swimwear</a>
																	</li>
															<li><a href="/en_eur/men/categories/t-shirts-and-tops.html" target="_self" class="a-link NaN">T-shirts &amp; tops</a>
																	</li>
															<li><a href="/en_eur/men/categories/trousers.html" target="_self" class="a-link NaN">Trousers</a>
																	</li>
															<li><a href="/en_eur/men/categories/underwear.html" target="_self" class="a-link NaN">Underwear</a>
																	</li>
															</ul>
													</div>
												</div>
											</div>
											<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-4-24">
												<div class="o-menu-list js-o-menu-list js-code">
													<h3 class="a-heading-3 js-a-heading-3">Get the latest</h3>
													<div class="o-list js-o-list">
														<ul>
															<li><a href="/en_eur/men/get-the-latest/disconnect-collection.html" target="_self" class="a-link NaN">Disconnect Collection</a>
																	</li>
															<li><a href="/en_eur/men/get-the-latest/inweekday.html" target="_self" class="a-link NaN">#inweekday</a>
																	</li>
															<li><a href="/en_eur/men/get-the-latest/weekly-edit.html" target="_self" class="a-link NaN">Weekly edit</a>
																	</li>
															<li><a href="/en_eur/men/get-the-latest/zeitgeist.html" target="_self" class="a-link NaN">Zeitgeist</a>
																	</li>
															<li><a href="/en_eur/men/get-the-latest/selected-brands.html" target="_self" class="a-link NaN">Selected brands</a>
																	</li>
															<li><a href="/en_eur/men/get-the-latest/sale.html" target="_self" class="a-link NaN">Sale</a>
																	</li>
															</ul>
													</div>
												</div>
											</div>
											</div>
								<div class="sub-menu">
										<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
											<span class="a-icon-arrow-back"></span>
											<h2 class="a-heading-2 category-heading">Denim</h2>
										</div>
										<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-4-24">
												<div class="o-menu-list js-o-menu-list js-code">
													<h3 class="a-heading-3 js-a-heading-3">Women&#039;s denim</h3>
													<div class="o-list js-o-list">
														<ul>
															<li><a href="/en_eur/denim/women-denim/new-arrivals.html" target="_self" class="a-link NaN">New arrivals</a>
																	</li>
															<li><a href="/en_eur/denim/women-denim/jeans-guide.html" target="_self" class="a-link NaN">Jeans guide</a>
																	</li>
															<li><a href="/en_eur/denim/women-denim/jeans.html" target="_self" class="a-link NaN">Jeans</a>
																	</li>
															<li><a href="/en_eur/denim/women-denim/jackets.html" target="_self" class="a-link NaN">Jackets</a>
																	</li>
															<li><a href="/en_eur/denim/women-denim/skirts.html" target="_self" class="a-link NaN">Skirts</a>
																	</li>
															<li><a href="/en_eur/denim/women-denim/shorts.html" target="_self" class="a-link NaN">Shorts</a>
																	</li>
															<li><a href="/en_eur/denim/women-denim/shirts.html" target="_self" class="a-link NaN">Shirts</a>
																	</li>
															</ul>
													</div>
												</div>
											</div>
											<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-4-24">
												<div class="o-menu-list js-o-menu-list js-code">
													<h3 class="a-heading-3 js-a-heading-3">Men&#039;s denim</h3>
													<div class="o-list js-o-list">
														<ul>
															<li><a href="/en_eur/denim/men-denim/new-arrivals.html" target="_self" class="a-link NaN">New arrivals</a>
																	</li>
															<li><a href="/en_eur/denim/men-denim/jeans-guide.html" target="_self" class="a-link NaN">Jeans guide</a>
																	</li>
															<li><a href="/en_eur/denim/men-denim/jeans.html" target="_self" class="a-link NaN">Jeans</a>
																	</li>
															<li><a href="/en_eur/denim/men-denim/jackets.html" target="_self" class="a-link NaN">Jackets</a>
																	</li>
															<li><a href="/en_eur/denim/men-denim/shirts.html" target="_self" class="a-link NaN">Shirts</a>
																	</li>
															<li><a href="/en_eur/denim/men-denim/shorts.html" target="_self" class="a-link NaN">Shorts</a>
																	</li>
															</ul>
													</div>
												</div>
											</div>
											</div>
								<div class="sub-menu">
										<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
											<span class="a-icon-arrow-back"></span>
											<h2 class="a-heading-2 category-heading">Sale</h2>
										</div>
										<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-4-24">
												<div class="o-menu-list js-o-menu-list js-code">
													<h3 class="a-heading-3 js-a-heading-3">Women</h3>
													<div class="o-list js-o-list">
														<ul>
															<li><a href="/en_eur/sale/women/all.html" target="_self" class="a-link NaN">All</a>
																	</li>
															<li><a href="/en_eur/sale/women/further-reductions.html" target="_self" class="a-link NaN">Further reductions</a>
																	</li>
															<li><a href="/en_eur/sale/women/knitwear.html" target="_self" class="a-link NaN">Knitwear</a>
																	</li>
															<li><a href="/en_eur/sale/women/jackets-and-coats.html" target="_self" class="a-link NaN">Jackets &amp; coats</a>
																	</li>
															<li><a href="/en_eur/sale/women/hoodies-and-sweatshirts.html" target="_self" class="a-link NaN">Hoodies &amp; sweatshirts</a>
																	</li>
															<li><a href="/en_eur/sale/women/trousers-and-shorts.html" target="_self" class="a-link NaN">Trousers &amp; shorts</a>
																	</li>
															<li><a href="/en_eur/sale/women/dresses-and-jumpsuits.html" target="_self" class="a-link NaN">Dresses &amp; jumpsuits</a>
																	</li>
															<li><a href="/en_eur/sale/women/tops.html" target="_self" class="a-link NaN">Tops</a>
																	</li>
															<li><a href="/en_eur/sale/women/jeans.html" target="_self" class="a-link NaN">Jeans</a>
																	</li>
															<li><a href="/en_eur/sale/women/shirts-and-blouses.html" target="_self" class="a-link NaN">Shirts &amp; blouses</a>
																	</li>
															<li><a href="/en_eur/sale/women/accessories.html" target="_self" class="a-link NaN">Accessories</a>
																	</li>
															</ul>
													</div>
												</div>
											</div>
											<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-4-24">
												<div class="o-menu-list js-o-menu-list js-code">
													<h3 class="a-heading-3 js-a-heading-3">Men</h3>
													<div class="o-list js-o-list">
														<ul>
															<li><a href="/en_eur/sale/men/all.html" target="_self" class="a-link NaN">All</a>
																	</li>
															<li><a href="/en_eur/sale/men/further-reductions.html" target="_self" class="a-link NaN">Further reductions</a>
																	</li>
															<li><a href="/en_eur/sale/men/more-added-items.html" target="_self" class="a-link NaN">More added items</a>
																	</li>
															<li><a href="/en_eur/sale/men/hoodies-and-sweatshirts.html" target="_self" class="a-link NaN">Hoodies &amp; sweatshirts</a>
																	</li>
															<li><a href="/en_eur/sale/men/jackets-and-coats.html" target="_self" class="a-link NaN">Jackets &amp; coats</a>
																	</li>
															<li><a href="/en_eur/sale/men/sweaters.html" target="_self" class="a-link NaN">Sweaters</a>
																	</li>
															<li><a href="/en_eur/sale/men/shirts.html" target="_self" class="a-link NaN">Shirts</a>
																	</li>
															<li><a href="/en_eur/sale/men/t-shirts-and-tops.html" target="_self" class="a-link NaN">T-shirts &amp; tops</a>
																	</li>
															<li><a href="/en_eur/sale/men/trousers-and-shorts.html" target="_self" class="a-link NaN">Trousers &amp; shorts</a>
																	</li>
															<li><a href="/en_eur/sale/men/jeans.html" target="_self" class="a-link NaN">Jeans</a>
																	</li>
															<li><a href="/en_eur/sale/men/accessories.html" target="_self" class="a-link NaN">Accessories</a>
																	</li>
															</ul>
													</div>
												</div>
											</div>
											</div>
								<div class="sub-menu">
											<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
												<span class="a-icon-arrow-back"></span>
												<h2 class="a-heading-2 category-heading">Help</h2>
											</div>
											<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-4-24">
														<div class="o-menu-list js-o-menu-list js-code">
															<div class="o-list js-o-list">
																<ul>
																	<li><a href="/en_eur/help/help/available-jobs.html" target="_self" class="a-link NaN">Available jobs</a>
																			</li>
																	<li><a href="/en_eur/help/help/press.html" target="_self" class="a-link NaN">Press</a>
																			</li>
																	<li><a href="/en_eur/help/help/privacy-notice.html" target="_self" class="a-link NaN">Privacy notice</a>
																			</li>
																	<li><a href="/en_eur/help/help/delivery-methods.html" target="_self" class="a-link NaN">Delivery methods</a>
																			</li>
																	<li><a href="/en_eur/help/help/garment-care.html" target="_self" class="a-link NaN">Garment care</a>
																			</li>
																	<li><a href="/en_eur/help/help/contact.html" target="_self" class="a-link NaN">Contact us</a>
																			</li>
																	<li><a href="/en_eur/help/help/return-and-refund-policy.html" target="_self" class="a-link NaN">Return &amp; refund policy</a>
																			</li>
																	<li><a href="/en_eur/help/help/payment-options.html" target="_self" class="a-link NaN">Payment</a>
																			</li>
																	<li><a href="/en_eur/help/help/faq.html" target="_self" class="a-link NaN">FAQ</a>
																			</li>
																	<li><a href="/en_eur/help/help/holiday-shipping.html" target="_self" class="a-link NaN">Holiday shipping</a>
																			</li>
																	<li><a href="/en_eur/help/help/size-guide-landing.html" target="_self" class="a-link NaN">Size guide</a>
																			</li>
																	</ul>
															</div>
														</div>
													</div>
													</div>
									<div class="sub-menu">
										<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
											<span class="a-icon-arrow-back"></span>
											<h2 class="a-heading-2 category-heading">My account</h2>
										</div>
										<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-4-24">
											<div class="o-menu-list js-o-menu-list js-code">
												<div class="o-list js-o-list">
													<ul>
														<li><a href="https://www.weekday.com/en_eur/my-account/orders" target="_self" class="a-link">Orders</a>
														</li>
														<li><a href="https://www.weekday.com/en_eur/my-account/profile" target="_self" class="a-link">Details</a>
														</li>
														<li><a href="https://www.weekday.com/en_eur/my-account/update-password" target="_self" class="a-link">Change password</a>
														</li>
														<li></li>
														<li><a href="https://www.weekday.com/en_eur/logout" target="_self" class="a-link">Sign out</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div
											class="free-tile-container u-not-mobile u-not-tablet u-align-right">
											<div class="free-tile_ freetile parbase">

</div>
</div>
									</div>
							</div>
							<label class="a-label js-a-label info" id="localizedTTT">Free shipping over €50. Always free returns.</label>
							</div><a href="/en_eur/index.html" target="_self" class="a-link">
						<div class="a-weekday-logo u-transform-center">
							<?xml version="1.0" encoding="UTF-8" standalone="no"?>
							<svg width="162px" height="32px" viewBox="0 0 162 32" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
								<!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch -->
								<title>Logo</title>
								<g id="Symbols" stroke="none" stroke-width="1" fill="none"
										fill-rule="evenodd">
									<g id="Header-Default---Not-signed-in"
										transform="translate(-560.000000, -62.000000)" fill="#000106">
										<g id="Header-Default">
											<g id="Logo" transform="translate(560.000000, 62.000000)"
										style="fill:">
												<polyline id="Fill-1"
										points="18.2554096 32 15.8920341 11.8286897 15.6352116 11.8286897 12.9564061 32 5.44635154 32 0 0.257655172 6.87366553 0.257655172 9.74377474 23.4488276 10.0003208 23.4488276 12.5931502 0.257655172 19.0551809 0.257655172 21.4923686 23.4488276 21.7837474 23.4488276 24.6187474 0.257655172 31.3317952 0.257655172 25.7654642 32 18.2554096 32" />
												<polyline id="Fill-4"
										points="35.2090137 32 35.2090137 0.257655172 50.8652355 0.257655172 50.8652355 5.75062069 41.907686 5.75062069 41.907686 13.006069 49.750587 13.006069 49.750587 18.4973793 41.907686 18.4973793 41.907686 26.5081379 51.2237918 26.5081379 51.2237918 32 35.2090137 32" />
												<polyline id="Fill-6"
										points="89.1185222 32 85.6056655 19.8929655 83.4687031 23.3233103 83.4687031 32 77.0080546 32 77.0080546 0.257655172 83.4687031 0.257655172 83.4687031 13.561931 83.8048669 13.561931 89.105529 0.257655172 96.161099 0.257655172 90.0938396 13.3886897 96.2528805 32 89.1185222 32" />
												<polyline id="Fill-5"
										points="56.1086724 32 56.1086724 0.257655172 71.7651706 0.257655172 71.7651706 5.75062069 62.8070683 5.75062069 62.8070683 13.006069 70.6505222 13.006069 70.6505222 18.4973793 62.8070683 18.4973793 62.8070683 26.5081379 72.1234505 26.5081379 72.1234505 32 56.1086724 32" />
												<path
										d="M106.836235,27.2226207 L108.460659,27.2226207 C111.253362,27.2226207 111.83999,25.5837241 111.83999,24.2085517 L111.83999,8.04965517 C111.83999,6.6742069 111.253362,5.03503448 108.460659,5.03503448 L106.836235,5.03503448 L106.836235,27.2226207 L106.836235,27.2226207 Z M100.137287,32 L100.137287,0.257655172 L110.889,0.257655172 C116.178881,0.257655172 118.537833,2.78344828 118.537833,8.44717241 L118.537833,24.1693793 C118.537833,29.9495172 114.417614,32 110.889,32 L100.137287,32 L100.137287,32 Z"
										id="Fill-7" />
												<path
										d="M129.771399,21.0303448 L134.763266,21.0303448 L132.638468,5.49793103 L132.062898,5.49793103 L129.771399,21.0303448 L129.771399,21.0303448 Z M136.291208,32 L135.408225,26.0457931 L129.094372,26.0457931 L128.187614,32 L121.592058,32 L127.331447,0.257655172 L137.425485,0.257655172 L143.162386,32 L136.291208,32 L136.291208,32 Z"
										id="Fill-8" />
												<polyline id="Fill-9"
										points="149.179884 32 149.179884 19.3988966 143.209106 0.257655172 150.144973 0.257655172 152.307922 11.2973793 152.747478 11.2973793 155.041188 0.257655172 161.829983 0.257655172 155.878003 18.8811034 155.878003 32 149.179884 32" />
											</g>
										</g>
									</g>
								</g>
							</svg>
							</div>
						</a>
						<div class="right-section">
							<div class="m-bag">
								<a href="/en_eur/cart" target="_self" class="a-link no-styling"> <span class="a-icon-bag"></span>
									<span class="text"></span>
								</a>
							</div>
						</div>
					</nav>
					<div class="autosearch autosuggestsearch parbase"><!-- H&M SEARCH  -->
<!-- WEEKDAY SEARCH -->
<!--  -->
<!-- PC org.apache.sling.scripting.jsp.jasper.runtime.PageContextImpl@1835e422 -->
<div class="o-search u-clearfix" data-component="OSearch">

	<form action="/en_eur/search.html" method="GET" autocomplete="on" data-min-characters="3" class="search-form u-clearfix">
		<div class="u-cols-lg-24-24 u-cols-sm-12-12">
			<div class="u-cols-lg-22-24 u-cols-md-23-24 u-cols-sm-10-12 u-first-col u-no-padding">
				<div class="gradient is-disabled"></div>
				<input placeholder="Search here" class="a-input js-a-input-search" type="text" value="" name="q" autocomplete="off" data-url="/content/weekday/en_eur/jcr:content/header/autosearch.display.html" autocorrect="off" spellcheck="false"/>
			</div>
			<div class="u-cols-lg-2-24 u-cols-md-1-24 u-cols-sm-2-12 u-last-col u-no-padding">
				<div class="u-align-right">
					<button type="button" class="a-button-nostyle a-icon-close js-icon-close"></button>
				</div>
			</div>
		</div>
	</form>
	<div class="u-cols-lg-24-24 u-cols-sm-12-12">
		<ul class="result-list js-result-list"/>
	</div>
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
<script type="text/javascript">

var SEARCH_LINK = '/en_eur/search.html';
var RESOURCE_PATH = '/content/weekday/en_eur/jcr:content/header/autosearch.display.html';

$(document).ready(function(){
	appeaser.subscribe(appeaser.Enums.trigger.GET_SEARCH_SUGGESTIONS,function(data){
		var url = RESOURCE_PATH + "?term=" + data;
		$.ajax({
			'url': url,
			'dataType':'json',
			'success' : function(responseData){
// 			var dataArray = JSON.parse(responseData);
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
</div>
			</div>
		</div>
	</header>
	<div data-component="OLightbox" class="o-lightbox">
		<div class="lightbox-wrapper">
			<div class="lightbox-header"></div>
			<div class="lightbox-content js-content u-clearfix"></div>
			<button type="button" class="a-close-button m-button-icon a-icon-close js-close-button a-button-nostyle"></button>
		</div>
	</div>


</div>
<input type="hidden" id="editMod" value="DISABLED"/>
	 <script>
	        $.getJSON("/sling/servlet/default.localizedtextpropertiesreader.weekday."+getLang()+"."+getCountryCode()+".json",{property: "localizedTTT"},  function(data) {
	    	if(data.properties[0] && data.properties.length > 0 && data.properties[0].localizedTTT){
	        	var localizedTTTMessage= data.properties[0].localizedTTT;
	            $("#localizedTTT").html(localizedTTTMessage);
	    	}
	        });
	    </script>
<script type="text/x-handlebars-template" id="menu-bucket">
	<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-4-24"><div class="o-menu-list js-o-menu-list js-code">{{#if heading}}<h3 class="a-heading-3 js-a-heading-3">{{heading}}</h3>{{/if}}<div class="o-list js-o-list"><ul>{{#each firstColItems}}<li><a href="{{this.href}}" class="a-link">{{this.name}}</a></li>{{/each}}</ul></div></div></div><div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-4-24">{{#if heading}}<div class="o-menu-list js-o-menu-list js-code no-heading"><div class="o-list js-o-list"><ul>{{#each secondColItems}}<li><a href="{{this.href}}" class="a-link">{{this.name}}</a></li>{{/each}}</ul></div></div>{{else}}<div class="o-menu-list js-o-menu-list js-code"><div class="o-list js-o-list"><ul>{{#each secondColItems}}<li><a href="{{this.href}}" class="a-link">{{this.name}}</a></li>{{/each}}</ul></div></div>{{/if}}</div>
</script>

<input type="hidden" id="georguri" value="?goeorguri=%2Fen_eur%2Fwomen%2Faccessories%2Fproduct.eye-webbing-key-ring-black.0622708001.html"/>
<input type="hidden" id="utmParameters" value=""/>
<script type="text/html" id="country-selector">
			<div class="selectCountryLightbox parbase"><div class="o-country-selector">
    <div class="selector-content u-clearfix">

			<h2 class="a-heading-2">Choose region</h2>


			<p class="a-paragraph is-richtext">Please choose your country to see correct pricing, delivery times and
shipping costs. Note that the price of an item may vary depending on
your shipping destination, due to local market pricing and taxes.</p>

		<a href="/content/weekday/page.countryselector.de_AT.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Austria</span></a><a href="/content/weekday/page.countryselector.nl_BE.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Belgium</span></a><a href="/content/weekday/page.countryselector.cs_CZ.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Czech Republic</span></a><a href="/content/weekday/page.countryselector.da_DK.en_eur.DKK.jsp" target="_self" class="a-link internal-link m-country-select"><span>Denmark</span></a><a href="/content/weekday/page.countryselector.fi_FI.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Finland</span></a><a href="/content/weekday/page.countryselector.fr_FR.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>France</span></a><a href="/content/weekday/page.countryselector.de_DE.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Germany</span></a><a href="/content/weekday/page.countryselector.hu_HU.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Hungary</span></a><a href="/content/weekday/page.countryselector.en_IE.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Ireland</span></a><a href="/content/weekday/page.countryselector.it_IT.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Italy</span></a><a href="/content/weekday/page.countryselector.nl_NL.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Netherlands</span></a><a href="/content/weekday/page.countryselector.pl_PL.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Poland</span></a><a href="/content/weekday/page.countryselector.pt_PT.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Portugal</span></a><a href="/content/weekday/page.countryselector.sk_SK.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Slovakia</span></a><a href="/content/weekday/page.countryselector.sl_SI.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Slovenia</span></a><a href="/content/weekday/page.countryselector.es_ES.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Spain</span></a><a href="/content/weekday/page.countryselector.sv_SE.en_eur.SEK.jsp" target="_self" class="a-link internal-link m-country-select"><span>Sweden</span></a><a href="/content/weekday/page.countryselector.en_GB.en_eur.GBP.jsp" target="_self" class="a-link internal-link m-country-select"><span>United Kingdom</span></a></div>
</div>

<script>
	var georguri = $('#georguri').val();
	var utmParameters = $('#utmParameters').val();
	$("a.internal-link").each(function() {
	   var $this = $(this);
	   var _href = $this.attr("href");
	   $this.attr("href", _href + georguri + utmParameters);
	});
</script></div>
</script>
    <script type="text/javascript">
$(document).ready(function(){
    displaySiteBanner();
	weekdayApp.shared.utils.logInCheck();
});
</script>
<script type="text/javascript">


        $('#label-guest').click(function(){
                window.location =$("#contextPath").val()  + "/login";
        });


        $(window).on("load", function (e) {
	    console.log("Window Load Weekday");

        if($('.is-in-search-results') && $('.is-in-search-results').length) {
            if ($('#sortOptions').find('.is-selected').data('value') == null || $('#sortOptions').find('.is-selected').data('value') == "") {
                $("#sortOptions [data-value='bestMatch']").addClass('is-dropdown-value');
                buildQueryString();
            }
        }

		function updateCartCount(){
			var lang = hm.multiCountry.getLang();
	    	$.ajax("/"+ lang +"/cart/context").then(function (response) {
	    				var nrOfItems = '';
	    				var productCartCount = 0;
	                    	if(response.entries) {
	                            for(var product in response.entries) {
	                                productCartCount += Number(response.entries[product].quantity);
	                            }
	                        }
	                    if(productCartCount > 0){
							nrOfItems = productCartCount;
	                    }
	                    $('.o-header .m-bag').find('span:last').html(nrOfItems);
	                });
		}
		appeaser.subscribe(appeaser.Enums.listen.ON_ITEM_ADDED_TO_CART,function(){
			updateCartCount();
		});

		updateCartCount();

		window.weekdayApp.cart.init();

	});
</script>

<script>

    $(document ).ready(function fixAllRichTextLinks() {
            var lang = "en_eur";
		$('.richtextWrapper a').each(function() {
			var link = $(this).attr('href');
			var newlink = getPathForRichText(lang, link);
			$(this).attr('href', newlink);
		});

		function getPathForRichText(contextPath, link) {
			var link = link;
			var first = link.slice(0, 1);
			if (first === '/') {
				var context = contextPath;
				var match = new RegExp('\\/[a-z]{2}_[a-z]{2,3}').exec(link);
				var newLink = link.replace(match, '/' + context);
				return newLink;
			}
			return link;
		}
		;
	});
</script>

 <script>

	$(document).on('ready',function(){

      var clickDelay = 200; // Configurable delay in milliseconds
      var classInComponents = '.o-hero a,.o-product a,.o-layout a,.o-focus-panel a,.o-tag-cloud a,.o-teaser-container a,.o-takeover a,.o-category-listing a'; // Add component class name


                           $(classInComponents).click(function(e){
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

     					  $('.freehtmlimporter').find('a').each(function() {
                        $( this ).removeAttr("shape");

                              });



     				 $('.freehtmlimporter').find('video').each(function() {

                   var src=$("video").attr('src').split('freehtmlimporter');
                   var poster=$("video").attr('poster');
                   if(src[1].startsWith('_')){

                   $("video").attr('poster',src[0]+'freehtmlimporter'+src[1].split('/')[0]+'/'+poster);
                           }
                  else{
                    $("video").attr('poster',src[0]+'freehtmlimporter'+'/'+poster);


                 }
              });

    });

</script>
       <script>

  $(".a-button.is-quickbuy").ready(function() {
    	    var isMobile = window.matchMedia("only screen and (max-width: 760px)");
    	    if($('#editMod').val() === 'DISABLED' && !(isMobile.matches) ){
    	                                weekdayApp.shared.utils.ajaxInjectLightboxQuickBuy('/en_eur/help/help/customer-service.html','.parsys');
    	    }
    	});


$(document).ready(function(){


 var obj=$("#newsletter-popup").text();
 var delayTime= $(obj).find('#delaytime').val();
    if ($(obj).find('#enableNewsletter').val() === 'true' && (Cookies.get('newsletter-popup') !== "viewed") && $('.lightbox-content .newsletter-privacy-popup').length ==0){
        $('#weekdaynewsletter-popup-id').addClass('open-on-pageload');
		$('#weekdaynewsletter-popup-id').attr('data-delay',delayTime);
		var localizedMessage;
		$.getJSON("/sling/servlet/default.newsletterpopuppropertiesreader.weekday."+getLang()+"."+getCountryCode()+".json",  function(data) {
        localizedMessage= data.properties[0].localized;
		setTimeout(function(){
		$(".is-newsletter-popup #newsLetter-SignUpMessage").html(localizedMessage);
		}, delayTime);
    });
    }

    if($("#ogimage").length > 0 && $("#ogimage").val().length == 0)
       {
			var imgSrc ="";
        	if($('.takeover-background').length > 0 && !($('.takeover-background').css('background-image') ==="none")) {
                 imgSrc = $('.takeover-background').css('background-image').replace('url("h','h').replace('g")','g');  // image stored as variable
             }else if($('picture.a-picture').length > 0 && $('picture.a-picture').attr('src') !== "undefined"){
                 imgSrc =$('picture.a-picture').attr('src');  // image stored as variable
             }else if($('.m-free-tile').length > 0 && !$('.m-free-tile').css('background-image') ==="none"){
                 imgSrc = $('.m-free-tile').css('background-image').replace('url("h','h').replace('g")','g');  // image stored as variable
             }else if($('.o-takeover picture.a-picture').length > 0){
                 imgSrc = $('.o-takeover picture.a-picture').attr('src');  // image stored as variable
             }else if($(".image").length > 0){
                 imgSrc = $(".image img").attr('src'); // image stored as variable
             }else if($(".m-product-image img:first").length > 0){
                 imgSrc = $(".m-product-image img").attr('src'); // image stored as variable
			 }else if($(".o-product-gallery-main img").length > 0){
			      imgSrc = $(".o-product-gallery-main img").attr('src'); // image stored as variable
  			 }else if($(".main-image-wrapper img").length > 0){
                  imgSrc = $(".main-image-wrapper img").attr('src'); // image stored as variable
             }else if($(".freehtmlimporter img").length > 0){
	              imgSrc = $(".freehtmlimporter img").attr('src'); // image stored as variable
             }else if($(".takeover img").length > 0){
	             imgSrc = $(".takeover img").attr('src'); // image stored as variable
             }else if($(".o-product-gallery-main img").length > 0){
	             imgSrc = $(".o-product-gallery-main img").attr('src'); // image stored as variable
             }


        	 if(imgSrc!=undefined){
        	  if(imgSrc.lastIndexOf("//lp",0)==0) {
                  imgSrc="https:"+imgSrc;
                   $('meta[property="og:image"]').attr('content', imgSrc);
              }else if(imgSrc.lastIndexOf("/content",0)==0){
    				imgSrc = "https://"+window.location.host+imgSrc;
                     $('meta[property="og:image"]').attr('content', imgSrc);
    		} else if(imgSrc.indexOf("https")<0){
                  imgSrc= "https:"+imgSrc;
				   $('meta[property="og:image"]').attr('content', imgSrc);
              }else{
					$('meta[property="og:image"]').attr('content', imgSrc);
              }
        	 }

       }
    //Alternate URL
    var url = window.location.href;


    if(url!=undefined) {
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
                      }else if(this.getAttribute('hreflang') === 'x-default'){
									        newURL = url.replace(locale,'en_eur');
									        $(this).attr('href',newURL);
                      }

    });
    };

    var isMobile = window.matchMedia("only screen and (max-width: 767px)");
	if(isMobile.matches){
		$('#noMobileCookie').css("display","none");
		$('#mobileCookie').css("display","block");
	}else{
		$('#noMobileCookie').css("display","block");
		$('#mobileCookie').css("display","none");
	}

    });

</script>

<script type="text/x-handlebars-template" id="empty-delivery" class="read_more_quickbuy"></script>

<div data-component="MErrorBanner" class="m-error-banner">
    <span class="a-icon-close-global"></span>
	<span id="noMobileCookie">
	    <div data-once-showing="cookie2-notification" class="is-cookie is-enabled cookie-wrapper">
				<div class="is-static">
					<p class="a-paragraph">To simplify your experience with us, we have set your shipping location to <span class="geo-city"></span>. </p><p class="a-paragraph">If you want to change your location, you can do that <a href="#" class="a-link open-lightbox" data-template="country-selector" data-classes="is-country-selector">here</a>.</p>
				</div>
				<div class="is-richtext"><div style="text-align: center;">We use cookies, find out more <a class="open-in-lightbox" href="/en_eur/help/help/privacy-notice/cookie.html">here</a>.</div>
</div>
			</div>
	    </span>
	<span id="mobileCookie">
		<div data-once-showing="cookie2-notification" class="is-cookie is-enabled cookie-wrapper">
				<div class="is-static">
					<p class="a-paragraph">To simplify your experience with us, we have set your shipping location to <span class="geo-city"></span>. </p><p class="a-paragraph">If you want to change your location, you can do that <a href="#" class="a-link open-lightbox" data-template="country-selector" data-classes="is-country-selector">here</a>.</p>
				</div>
				<div class="is-richtext">We use cookies, find out more <a href="/en_eur/help/help/privacy-notice/cookie.html">here</a>
        .</div>
			</div>
	    </span>
    <p class="a-paragraph is-error" data-once-showing="error-notification">Right now, order shipping may take up to 4 days longer. We are working really hard to deliver your parcel as soon as possible. Thanks for your patience.</p></div>
 <div class="sitebanner parbase">




<div id="site-banner-id" data-component="MSiteBanner" class="m-site-banner" data-component-id="99b5970e-f57c-49a0-81af-c7dcdc255c0b" style="color:#fff;background-color:#000;">
<div class="a-paragraph site-banner-desktop is-enabled is-richtext" style="margin-top:8px;margin-bottom:8px"><div style="text-align: center;">Now, that's good! Winter Sale up to 70%
  off<br /> <a href="/en_eur/sale/women/all.html">Shop
    women's</a> | <a href="/en_eur/sale/men/all.html">Shop men's</a></div>
</div>
<div class="a-paragraph site-banner-mobile is-enabled is-richtext" style="margin-top:6px;margin-bottom:6px"><div style="text-align: center;">Now, that's good! Winter Sale up to 70%
  off<br /> <a href="/en_eur/sale/women/all.html">Shop
    women's</a> | <a href="/en_eur/sale/men/all.html">Shop men's</a></div>
</div>



<div class="promotion-data weekday-sitebanner" hidden>
  <span class="promo_id">site banner</span>
  <span class="promo_name">site banner</span>
  <span class="promo_creative">site banner</span>
</div>
</div>
 </div>
</div>
<!-- HeaderLife -->
<img src="/alive/user" width="1" height="1" style="position: absolute; left: -999px"/>
<div data-component="OPageContent" class="o-page-content pdp-page">
	<div class="u-cols-lg-24-24 u-cols-md-12-12 u-cols-sm-12-12 u-row u-full-width">
<!--zAEMPUBAPPWW16.goep.hm.com-->
<div class="product parbase"><script>
	var productArticleDetails = {

		'articleCode':'0622708001',
		'baseProductCode' : '0622708_group_001',
		'mainCategorySummary' : 'Accessories - women_accessories_all',
		'name': 'Eye Webbing Key Ring',

		'0622708001': {
			'title': 'Eye Webbing Key Ring',
			'name': 'Black',
			'colorCode': '09',
			'description': '<p>The Eye Webbing Key Ring consists of two silver tone rings - the smaller one with a hook clasp that can be easily attached to a belt loop or a bag as a standout accessory or simply hold your keys visible and in place. A utility style webbing loop connects the piece.<\\/p><p>- Eye Webbing Key Ring is 13,5 cm long.&nbsp;<\\/p><p>&nbsp;<\\/p>',
			'atelierName': "",
			'brandName': "",
			'colorLoc': "Black",
			'pdpLink' : 'https:\\/\\/www.weekday.com\\/en_eur\\/women\\/accessories\\/product.eye-webbing-key-ring-black.0622708001.html',
			'originCountry': "",

			'variants' : [

								{
									'variantCode' : '0622708001001',
									'sizeCode' : '001',
									'sizeName' : 'NOSIZE',
								}
			],


			'productFrontImages' : [

			],
			'logoImages' : [

			],
			'dataSheetImages' : [

			],
			'thumbnailImages' : [

			],
			'otherImages' : [

			],
			'normalImages' : [

					{
						'thumbnail': '//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/style]',
						'image': '//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]',
						'fullscreen': '//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]',
						'zoom': '//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]&zoom=zoom'
					}
			],
			'detailImages' : [

			],
			'images':[

			],

					'price': '€10',
					'priceOriginal': false,
					'priceValue': '10.0',
					'priceSaleValue': null,

                'promoMarkerUrl': '//www.monki.com/',
				'promoMarkerAlt': '',
                'promoMarkerLegalText': '',
                'promoMarkerLabelText': '€10',
				'promoMarkerIconText': '',

			'compositions': [

					'Steel 60%; Zinc 35%; Polyester 5%'
				],


			'url': '\\/en_eur\\/productpage.0622708001.html'


		}
	};
</script> <div class="contain u-clearfix q-margin-bottom-50">
			<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-16-24 u-no-padding u-float-right">
				<div class="images"><div id="productGallery" data-component="OProductGallery" class="o-product-gallery">
	<div class="u-cols-spacer u-not-desktop u-cols-lg-1-16 u-cols-md-3-12"></div>
	<div class="u-cols-lg-10-16 u-cols-md-6-12">
		<div class="main-image-wrapper">
			<img class="a-image default-image" src="//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]" alt="Front image of Weekday  in black" data-zoom-src="//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]" />
			<img class="a-image zoom-image" src="//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]"/>
			<div class="tap-button">Tap first to zoom</div>
		</div>
	</div>
	<div class="slider-wrapper">
		<div id="imageSlider" data-slides-desktop="7" data-slides-tablet="5" data-slides-mobile="1" class="o-slider">
			<div class="a-heading-2 slider-title u-align-center"/></div>
			<div class="slider" id="imageContainer">
				<picture data-component="APicture" class="a-picture" src="//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]" data-large-src="//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]" data-thumbnail-src="//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]" data-zoom-src="//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]">
						<source media="(min-width:768px)" srcset="//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]"/>
						<source media="(min-width:1px)" srcset="//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]"/>
						<img class="a-image" src="//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]" alt="Front image of Weekday  in black"/>
					</picture>
				</div>
			<div class="tap-button">Tap first to zoom</div>
	</div>
</div>
</div>
	<script type="text/html" id="a-image"><img class="a-image">
    </script>


</div>
</div>
			<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-7-24 u-float-left">
				<div class="details parbase"><script type="text/javascript">
	function loadSizesByCodeOnReady(code){
		var articlesIds={

				"0622708001" : "size_0622708001"
		};
		weekdayApp.productDetails.loadSizesByCode(code,false,articlesIds,'en_eur');
	}
	function loadSizes(caller){
		weekdayApp.productDetails.loadSizes(caller,'en_eur');
		giveMetaTitle();
		giveMetaPrice();
	};

</script>
<div data-component="OProductDetails" class="o-product-details u-clearfix">
    <form data-component="OForm" class="o-form add-to-cart" onsubmit="return false;" action="#" method="POST">
        <div class="details-section">
        	<label class="a-label js-a-label brand-name">Weekday</label>
            <div class="m-product-price">
                <label id="productTitle" class="a-label js-a-label product-name u-ellipsis">Eye Webbing Key Ring</label>
                <div class="markers">
                    <div id="productMarkers" data-component="MProductMarkers" class="m-product-marker">
                    </div></div>
                <div id="product-price">
                	<div class="price parbase"><label class="a-label js-a-label price-value" >€10</label>
	</div>
</div>
            </div>
            <div data-component="MSwatches" class="m-swatches">
                <div class="picked-color"> </div>
                <div id="swatch_0622708001" class="a-swatch js-swatch  is-selected" data-title="Black">
                        <div>
                            <input type="radio" name="colors" value="Black"/>
                            <button data-articlecode="0622708001" onclick="loadSizes(this);trackProductVariant(this);swatchClicked();" type="button" class="a-button-nostyle">
                                <span class="a-swatch-foreground"></span>
                                <img class="a-image" data-articlecode="0622708001" src="//lp.weekday.com/app003prod?set=source[04_0622708_001_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2018081]&call=url[file:/product/style]" alt="Fabric Swatch image of Weekday  in black" onclick="loadSizes(this);trackProductVariant(this);swatchClicked();"/>
                                <span class="sold-out">Sold out</span>
                            </button>
                        </div>
                    </div>
                </div>
            <div id="sizesDropdown" data-component="MDropdown" class="m-dropdown is-pdp keep-text is-pdp has-one-item has-one-item">
                <button type="button" class="a-button-nostyle a-icon-close"></button>
                <button type="button" id="selectSizeLabel" class="a-button-nostyle placeholder">NOSIZE</button>
			      	<input type="hidden" id="selectSize" name="selectSize" value="29" class="js-input"></span>
                <ul class="list-wrapper">
                    <li id="sizes">
                        <ul id="size_0622708001" data-sizelist="0622708001" class="options"></ul>

					</li>
                </ul>
            </div>
			<button type="button" class="a-button is-primary  availability-status-btn u-display-none"><span>Sold Out</span></button>
             <button id="addToBagButton" type="submit" class="a-button is-secondary add-to-bag" data-out-of-stock='Sold Out' data-coming-soon='Coming Soon' data-discontinued='Sold Out'>
			               		<span>Add to bag</span>
			            	</button>
				      	</div>
        <div class="info-section">
            <p class="a-paragraph free-text" id="product-description"></p>
          	<p class="a-paragraph size-guide"><a href="#" target="_self" class="a-link has-underline open-lightbox" data-template="quickbuy-sizeguide" data-classes="is-size-guide">Size guide</a></p>
             <div data-component="OAccordion" class="o-accordion u-clearfix" data-exclusive="true" data-exclusive-group="product-details">
                <div class="accordion-header">
                    <a href="#" target="_self" class="a-link a-link accordion-title js-accordion-toggle no-styling">
                        <span class="a-icon-arrow-down-small"></span>
                        <h3 class="a-heading-3">DETAILS</h3>
                    </a>
                </div>
                <div class="accordion-content u-clearfix">
<p class="a-paragraph">
	                     Steel 60% /  Zinc 35% /  Polyester 5%</p>
                    <br>
                    <p class="a-paragraph">
                        Product No: <span id="article-number">0622708001</span>
                    </p>
                    	<div class="m-hazmat"><img class="a-image hazmat-image" src="" alt=""/><span class="hazmat-label"></span></div>
                </div>
            </div>
            <div data-component="OAccordion" class="o-accordion u-clearfix is-visible" data-exclusive="true" data-exclusive-group="product-details">
                <div class="accordion-header">
                    <a href="#" target="_self" class="a-link a-link accordion-title js-accordion-toggle no-styling">
                        <span class="a-icon-arrow-down-small"></span>
                        <h3 class="a-heading-3">DELIVERY</h3>
                    </a>
                </div>
                <div class="accordion-content u-clearfix">
                    <p class="a-paragraph">
                    	<span data-content="localized"></span>
                        <br>
						<a href="#" target="_self" class="a-link has-underline open-lightbox" data-template="empty" data-container=".parsys" onclick="deliveryPoliciesClick(this, '/en_eur/help/help/customer-service.html')">Customer service</a>
                    </p>
                </div>
            </div>
            <div data-component="OAccordion" class="o-accordion u-clearfix" data-exclusive="true" data-exclusive-group="product-details">
                <div class="accordion-header">
                    <a href="#" target="_self" class="a-link a-link accordion-title js-accordion-toggle no-styling">
                        <span class="a-icon-arrow-down-small"></span>
                        <h3 class="a-heading-3">SHARE</h3>
                    </a>
                </div>
                <div class="accordion-content u-clearfix">
                     <div class="share parbase"><div id="share" class="o-share u-clearfix">
    <div id="fb-root"></div>
    	<script>!function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk');</script>

        <div data-href="https://www.weekday.com/content/weekday/en_eur/productpage.0622708001.html" data-layout="button" class="fb-share-button share-button" data-build-url="facebook"></div>


    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>


    <script type="text/javascript" src="//assets.pinterest.com/js/pinit.js" async=""></script>
    <div class="share-button">
        <a data-pin-do="buttonPin" href="https://www.pinterest.com/pin/create/button/" data-build-url="pinterest">
            <img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png">
        </a>
    </div>
    <div class="share-button" id="googleplus">
		<script src="https://apis.google.com/js/platform.js" async="async" defer="defer"></script>

    </div>
	<div class="share-button" id="tumblr">

	    <script async="async" src="https://assets.tumblr.com/share-button.js" id="tumblr-js"></script>

	</div>
	<script>
		$("[data-build-url]").each(function(index, item){
			let url = '';
      	if($(item).data('build-url') == 'facebook'){
				$(item).attr('data-href', window.location.href);
			}
      	else if($(item).data('build-url') == 'twitter'){
				url = '?status=' + window.location.href + '&url=' + window.location.href;
				$(item).attr('href',$(item).attr('href')+url);
		    }
      	else if($(item).data('build-url') == 'pinterest'){
		    	url = '?url=' + window.location.href;
		    	$(item).attr('href',$(item).attr('href')+url);
		    }
      	else if($(item).data('build-url') == 'tumblr'){
		    	url = '?canonicalUrl=' + window.location.href;
		    	$(item).attr('href',$(item).attr('href')+url);		    }

		});

		function updateShareButton(){
			$("[data-build-url]").each(function(index, item){
				let url = '';
				if($(item).data('build-url') == 'facebook'){
					$(item).attr('data-href', window.location.href);
				}
                        else if($(item).data('build-url') == 'twitter'){
					url = '?status=' + window.location.href + '&url=' + window.location.href;
                                    $(item).attr('href','https://twitter.com/home='+url);
                }
                        else if($(item).data('build-url') == 'pinterest'){
                     url = '?url=' + window.location.href;
                                    $(item).attr('href','https://www.pinterest.com/pin/create/button/'+url);
			    }
                         else if($(item).data('build-url') == 'tumbler'){
			    	url = '?url=' + window.location.href;
                                    $(item).attr('href','http://tumblr.com/widgets/share/tool'+url);
			    }
			});
		}
	</script>

</div>

</div>
</div>
            </div>
             <label class="a-label js-a-lab+el info" data-content="localizedTTT">Free shipping over €50. </br>Always free returns / 30 days return policy</label>
        </div>
    </form>
</div>

<script type="text/x-handlebars-template" id="empty">
</script>

<script type="text/x-handlebars-template" id="quickbuy-sizeguide">
	<div class="o-sizeguide">
		 <div class="sizelisting parbase"><div class="intro parbase"><div class="o-sizeguide">
    <div>
        <span id="sizeguideIntroID" class="is-richtext">

<link rel="stylesheet" href="https://www.weekday.com/content/dam/Weekday/sizeguide/css/sizeguide-popup8.css" type="text/css">

	<div class="size-guide-omni-wrapper">
		<h1 class="a-heading-1 customer-service-heading">Accessories</h1>
			<div class="size-guide-table-wrapper">
	            <table class="sizeguide-table">
	                <thead>
	                    <tr>
	                        <th class="size-guide-first-td">Gloves</th>
	                        <th>Palm girth</th>
	                    </tr>
	                </thead>
	                <tbody>
	                    <tr>
	                        <th class="size-guide-first-td">S/M</th>
	                        <td>21.7</td>

	                    </tr>
	                    <tr>
	                        <th class="size-guide-first-td">L/XL</th>
	                        <td>23.3</td>
	                    </tr>
	                </tbody>
	            </table>
	        </div>

	        <div class="size-guide-table-wrapper">
	            <table class="sizeguide-table">
	                <thead>
	                    <tr>
	                        <th class="size-guide-first-td">Hats, head</th>
	                        <th>Circ. (cm)</th>
	                    </tr>
	                </thead>
	                <tbody>
	                    <tr>
	                        <th class="size-guide-first-td">S</th>
	                        <td>56</td>
	                    </tr>
	                    <tr>
	                        <th class="size-guide-first-td">M</th>
	                        <td>58</td>
	                    </tr>
	                    <tr>
	                        <th class="size-guide-first-td">L</th>
	                        <td>60</td>
	                    </tr>
	                </tbody>
	            </table>
	        </div>

			<div class="size-guide-text-wrapper">

				<p>Please note that the size guide below relates to Weekday collections, external brands may vary from these measurements. Also keep in mind fits may vary by style or personal preference.</p>

				<p><span class="size-guide-bold">Chest:</span> With arms relaxed at sides, measure around fullest part of chest/bust.</p>

				<p><span class="size-guide-bold">Waist:</span> Measure around natural waistline at smallest part of waist.</p>

				<p><span class="size-guide-bold">Seat:</span> Standing with legs together, measure around fullest part of seat.</p>

				<p><span class="size-guide-bold">Inseam:</span> Measure inside length of your leg from crotch and down to the floor.</p>
			</div>

	</div>







</span>
    </div>
    </div>
</div>
<div class="toggle-list size-guides">
    <div class="listing parsys"><div class="ghost section"></div>
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
			<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-17-24 u-no-padding u-float-right">
				<div class="stylewith parbase"></div>
</div>
			<!-- WEEKDAY PRA 1 -->
<div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-16-24 u-no-padding u-float-right carousel pra-wrapper" ng-app="praAppModule" ng-controller="PRAController as cartPRACtrl" ng-init="cartPRACtrl.initCartContext('en_eur','product-detail-page')" ng-cloak>
    <span class="nodeName" hidden>product</span>
    <span class="propTitle" hidden>{{cartPRACtrl.pra1Panel.name}}</span>
    <div data-component="OSlider" data-slides-desktop="3" data-slides-tablet="3" data-slides-mobile="2" class="o-slider o-product-slider has-spacers o-pra-component" >
        <div class="a-heading-2 slider-title u-align-center">{{cartPRACtrl.pra1Panel.name}}</div>
        <div class="slider" id="praSlider">
            <a ng-href="{{cartPRACtrl.transformLinkToCurrentContextPath(product.variantData[0].vlinkPdp)}}" target="_self" class="a-link no-styling" onclick="trackProductClick(this,'.o-product')" ng-click="cartPRACtrl.notifyClick($event, product.variantData[0].ticket,product.variantData[0].varticleCode,'PRA1')" reload-slider-on-update ng-repeat="product in cartPRACtrl.pra1Panel.products">
                <div class="o-product no-quick-buy" >
                    <div class="image">
                        <div class="m-product-marker m-product-markers">
                            <div class="marker-text product-marker" ng-init="prodMarkerColor = product.productMarkerColors.split(',')" ng-repeat="productMarkerText in product.productMarkerText.split(',') track by $index" ng-if="$index < 2">
                                <span style="color: {{prodMarkerColor[$index]}}">{{productMarkerText}}</span>
                            </div>
                        </div>
                        <img class="a-image" ng-src="{{product.variantData[0].vstillLifeImage}}" alt="{{product.productName}}"/>
                        <button class="a-button open-lightbox no-states" data-template="o-quick-buy" data-classes="flexible" data-nopadding="true">
                            <span>Quick shop</span>
                        </button>
                    </div>
                    <div class="m-product-price">
                        <label ng-show="product.variantData[0].vformattedOldPrice" class="a-label js-a-label is-deprecated">{{product.variantData[0].vformattedOldPrice}}</label>
                        <label ng-show="product.variantData[0].vformattedOldPrice" class="a-label js-a-label is-reduced">{{product.variantData[0].vformattedPrice}}</label>
                        <label ng-hide="product.variantData[0].vformattedOldPrice" class="a-label js-a-label">{{product.variantData[0].vformattedPrice}}</label>
                    </div>
                    <div class="product-brand-and-title">
                        <label class="a-label js-a-label product-brand">{{product.variantData[0].vbrandName}}
                        </label>
                        <label class="a-label js-a-label product-title">{{product.productName}}
						</label>
                    </div>
                    <div class="m-swatches sm">
                        <div class="picked-color">
                        </div>
                        <span ng-repeat="variant in product.variantData track by $index">
                            <div class="a-swatch js-swatch">
                                <div>
                                    <input type="radio" name="colors" value="Blue"/>
                                    <button type="button" class="a-button-nostyle">
                                        <span class="a-swatch-foreground"></span>
                                        <img class="a-image" ng-src="{{variant.vswatch}}"/>
                                        <span class="sold-out">Sold out</span>
                                    </button>
                                </div>
                            </div>
                        </span>
                    </div>
                    <!-- WEEKDAY PRA 1 DETAILS -->
					<div class="producttile-details" hidden>
						<span class="articleCode">{{product.variantData[0].varticleCode}}</span>
						<span class="baseProductCode">{{product.productKey}}</span>
						<span class="productName">{{product.variantData[0].varticleName}}</span>
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
            </a>
        </div>
    </div>
</div><div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-17-24 u-no-padding u-float-right">
			    <div class="cmpolapicgallery olapicproductgallery parbase"><div class="u-cols-lg-22-24 u-cols-md-12-12 u-cols-sm-12-12 u-full-width">
            <div data-component="OOlapicgallery" class="o-olapic-gallery has-4" data-count="4" data-api-key="" data-product-id="0622708001" data-media-type="recent" data-template="olapic-image">
              <div class="content">
                <div class="olapic-text-container">
                  <p class="a-paragraph"></p>
				  </div>
                <div class="js-placeholder u-clearfix">
                  <div class="olapic-item-container">
                  </div>
                </div>
                <div class="button-container">
                <a class="a-button is-transparent" href="/en_eur/olapic-test.html">View Gallery</a>
                    </div>
              </div>
            </div>
          </div>
		  <script type="text/x-handlebars-template" id="olapic-image">
<div class="o-olapic-image" data-template="olapic-gallery"><div class="overlay" onclick="trackOlapicOverlay(this,'.content')"></div><div class="m-instagram-user u-clearfix"><span class="a-icon-social-instagram"></span><label class="a-label js-a-label"></label></div></div></script>
    <script type="text/x-handlebars-template" id="olapic-gallery">
<div data-component="OOlapicStyleSlider" class="o-olapic-slider" data-template="olapic-slide"></div></script>
   <script type="text/x-handlebars-template" id="olapic-style-slide">{{#each media}}<div class="o-olapic-slide" data-component="OOlapicStyleSlide"><div class="olapic-big-image"><img class="a-image" src="{{images.normal}}"></div><div class="olapic-info"><div class="m-instagram-user big u-clearfix"><a href="{{original_source}}" target="_blank" class="a-link no-styling"><span class="a-icon-social-instagram"></span></a><div class="user-info"><a href="{{original_source}}" target="_blank" class="a-link">{{uploader.username}}</a><label class="a-label js-a-label">{{uploader.name}}</label></div></div><div class="olapic-slider-container"><div class="olapic-slider">{{#each stream }}<div class="slide"><div class="olapic-product"><div class="m-product-image"><div class="cross"></div><img src="{{baseimage.base_image.images.normal}}" alt=""></div><div class="product-info"><div class="m-product-price"><label class="a-label js-a-label">{{product_info.price}}</label></div><label class="a-label js-a-label product-brand">Weekday</label><label class="a-label js-a-label product-title">{{name}}</label><a class="a-button is-outlined" href="{{product_url}}">Shop this!</a></div></div></div>{{/each}}</div></div><div class="olapic-share"><div class="o-share-custom"><a href="https://www.facebook.com/weekday" target="_blank" class="a-link"><span class="a-icon-social-facebook"></span></a><a href="https://www.pinterest.com/weekdaystores" target="_blank" class="a-link"><span class="a-icon-social-pinterest"></span></a><a href="https://www.instagram.com/weekday_stores" target="_blank" class="a-link"><span class="a-icon-social-instagram"></span></a></div></div></div></div>{{/each}}</script>
   <script>
    window.widgetKey='';
    window.olapicInstanceToken='';
</script>

<style>
.o-monki-style-slide .info .share .a-link{
transition: border-color 0.2s ease-in-out;
color:#000000;
border-bottom: none;
}
</style>
    </div>
</div>
		</div>
	<script type="text/javascript">
function loadSwatchSize() {
	if ('0622708001' !== '') {
		var variantList = [];
		var variantCodes = weekdayApp.productDetails.getAllProductVariantCodes();
		$(variantCodes).each(function(index,value){
			variantList.push(value);
		});
		weekdayApp.productDetails.getAvailability( variantList, 'en_eur', action);
	}
}

function action(data){
	var variantCodes = weekdayApp.productDetails.getAllProductVariantCodes();
	weekdayApp.productDetails.initVariantMap();
	$.each(data, function(index, variantCode) {
		weekdayApp.productDetails.variantAvailabilityMap[variantCode] = true;
	});
	weekdayApp.productDetails.updateSizesAvailability();

	if($('.o-product-details .m-swatches .a-swatch').find('button.is-coming-soon').length){
		var $remCs=$('.o-product-details .m-swatches').find('.a-swatch.is-coming-soon').detach();
		$('.o-product-details .m-swatches').append($remCs);
	}
	if ($('.o-product-details .m-swatches .a-swatch').find('button.out-of-stock:not(.is-coming-soon):not(.is-discontinued)').length) {
		var $remSo=$('.o-product-details .m-swatches').find('.a-swatch.out-of-stock:not(.is-coming-soon):not(.is-discontinued)').detach();
		$('.o-product-details .m-swatches').append($remSo);
	}
	if($('.o-product-details .m-swatches .a-swatch').find('button.is-discontinued').length) {
		var $remUn=$('.o-product-details .m-swatches').find('.a-swatch.is-discontinued').detach();
		$('.o-product-details .m-swatches').append($remUn);
	}
}

function deliveryPoliciesClick(caller, url){
	var container = $(caller).data('container');
	weekdayApp.shared.utils.ajaxInjectLightbox(url, container);
}

</script>
</div>
</div>
</div>
<div class="u-clearfix"></div><footer class="footer-global"><!-- Footer -->
    <div class="wrapper">
        <div class="footer parbase"><div class="u-no-select">
	<footer data-component="OFooter" class="o-footer u-align-center u-clearfix">
	    <div class="u-cols-lg-24-24 u-cols-md-12-12 u-cols-sm-12-12 u-row u-full-width">
	        <div class="contain">
	            <div class="u-cols-spacer u-cols-lg-8-24 u-cols-md-3-12 u-not-mobile"></div>
	            <div class="u-cols-lg-8-24 u-cols-md-6-12 u-cols-sm-12-12">
		                <div class="m-text-button is-center-aligned is-richtext">
		                	<div style="text-align: center;">Don't miss out...<br /> Sign up for our
  newsletter and get<br /> 10% off one order.</div>
<a class="a-button is-outlined" href="/en_eur/newslettersubscribe.html">Sign up</a>
		                    </div>
		            </div>
	            <div class="u-cols-spacer u-cols-lg-8-24 u-cols-md-3-12 u-not-mobile"></div>
	            <div class="u-cols-lg-24-24 u-cols-md-12-12 u-cols-sm-12-12">
	                <div class="o-footer-menu u-clearfix">
	                    <div class="u-cols-lg-4-24 u-cols-md-3-12 u-cols-sm-12-12">
	                            <div class="o-menu-list js-o-menu-list js-code">
	                                <div class="nav1 navgroup parbase"><h2 class="a-heading-2 js-a-heading-2">Weekday</h2>
<div class="o-list js-o-list">
    <ul>
        <li>

                <a href="/en_eur/storelocator.html" target="_self" class="a-link">Store locator</a>

        </li>

        <li>

                <a href="https://career.hmgroup.com/weekday/" target="_self" class="a-link">Available jobs</a>

        </li>

        <li>

                <a href="/en_eur/help/help/csr-and-values.html" target="_self" class="a-link">Sustainability &amp; values</a>

        </li>

        <li>

                <a href="/en_eur/help/help/press.html" target="_self" class="a-link">Press</a>

        </li>

        <li>

                <a href="/en_eur/help/help/affiliate.html" target="_self" class="a-link">Affiliate</a>

        </li>

        <li>

                <a href="/en_eur/help/help/student-discount.html" target="_self" class="a-link">Student discount</a>

        </li>
    </ul>
</div>
</div>
</div>
	                        </div>
	                        <div class="u-cols-spacer u-cols-lg-1-24 u-not-tablet u-not-mobile"></div>
	                    <div class="u-cols-lg-4-24 u-cols-md-3-12 u-cols-sm-12-12">
	                            <div class="o-menu-list js-o-menu-list js-code">
	                                <div class="nav2 navgroup parbase"><h2 class="a-heading-2 js-a-heading-2">Help</h2>
<div class="o-list js-o-list">
    <ul>
        <li>

                <a href="/en_eur/help/help/contact.html" target="_self" class="a-link">Contact us</a>

        </li>

        <li>

                <a href="/en_eur/help/help/delivery-methods.html" target="_self" class="a-link">Delivery methods</a>

        </li>

        <li>

                <a href="/en_eur/help/help/return-and-refund-policy.html" target="_self" class="a-link">Return &amp; refund policy</a>

        </li>

        <li>

                <a href="/en_eur/help/help/size-guide-landing.html" target="_self" class="a-link">Size guides</a>

        </li>
    </ul>
</div>
</div>
</div>
	                        </div>
	                        <div class="u-cols-spacer u-cols-lg-1-24 u-not-tablet u-not-mobile"></div>
	                    <div class="u-cols-lg-4-24 u-cols-md-3-12 u-cols-sm-12-12">
	                            <div class="o-menu-list js-o-menu-list js-code">
	                                <div class="nav3 navgroup parbase"><h2 class="a-heading-2 js-a-heading-2">Legal</h2>
<div class="o-list js-o-list">
    <ul>
        <li>

                <a href="/en_eur/help/help/company-information.html" target="_self" class="a-link">Company information</a>

        </li>

        <li>

                <a href="/en_eur/help/help/privacy-notice.html" target="_self" class="a-link">Privacy notice</a>

        </li>

        <li>

                <a href="/en_eur/help/help/terms-and-conditions.html" target="_self" class="a-link">Terms &amp; conditions</a>

        </li>

        <li>

                <a href="/en_eur/help/help/alternative-dispute-resolution.html" target="_self" class="a-link">ADR</a>

        </li>
    </ul>
</div>
</div>
</div>
	                        </div>
	                        <div class="u-cols-spacer u-cols-lg-1-24 u-not-tablet u-not-mobile"></div>
	                    <div class="u-cols-lg-4-24 u-cols-md-3-12 u-cols-sm-12-12">
	                            <div class="o-menu-list js-o-menu-list js-code">
	                                <div class="nav4 navgroup parbase"><h2 class="a-heading-2 js-a-heading-2"></h2>
<div class="o-list js-o-list">

</div>
</div>
</div>
	                        </div>
	                        <div class="u-cols-spacer u-cols-lg-1-24 u-not-tablet u-not-mobile"></div>
	                    <div class="u-cols-lg-4-24 u-cols-md-12-12 u-cols-sm-12-12">
	                    <div class="socialmediaFooter socialmediafooter parbase"><div class="o-social-media ">

    <a href="https://www.facebook.com/weekday/" target="_blank" class="a-link">
        <span class="a-icon-social-facebook"></span>
    </a>
    <a href="https://www.pinterest.com/weekdaystores/" target="_blank" class="a-link">
        <span class="a-icon-social-pinterest"></span>
    </a>
    <a href="https://www.instagram.com/weekday_stores/" target="_blank" class="a-link">
        <span class="a-icon-social-instagram"></span>
    </a>




</div></div>
</div>
	                </div>
	            </div>
	            <div class="u-cols-lg-24-24 u-cols-md-12-12 u-cols-sm-12-12">
		                <div class="u-cols-lg-24-24 u-cols-md-12-12 u-cols-sm-12-12">
		                    <p class="a-paragraph brand-info"><div style="text-align: center;"><p class="a-paragraph brand-info">Weekday is a Swedish denim and fashion brand influenced by youth culture and street style. Founded in 2002, Weekday currently ships to 18 markets and has stores in 10 countries, offering a unique retail experience and a curated mix of women’s and men’s assortments as well as a small selection of selected brands.<br>
<br>
© Weekday</p>
</div>
</p>
		                </div>
		            </div>
		      	</div>
	    </div>

	</footer>
</div></div>
</div>
</footer><!-- /Footer --><!--[if lt IE 9]>
<link rel="stylesheet" href="/etc/designs/hm/clientlibs/desktop/ie8.min.css" type="text/css">
<script type="text/javascript" src="/etc/designs/hm/clientlibs/desktop/ie8.min.js"></script>
<![endif]-->
<!--[if gte IE 9]><!-->
<!--<![endif]-->
<script type="text/javascript" src="/etc/designs/hm/clientlibs/desktop.min.js"></script>
<script type="text/javascript">
weekdayApp.shared.variables.addToCartServiceUrl = '/en_eur/cart/add';
loadSizesByCodeOnReady('0622708001');
if ('com.hm.appeaser.aem.integration.product.AppProduct@51c5e5c1' !== '') {
	loadSwatchSize(weekdayApp.productDetails.selectedArticle);
}else if(false){
	loadSwatchSize(weekdayApp.productDetails.selectedArticle);
}

weekdayApp.init();


function trackAddToCart(articleCode, sizeCode, productArticleDetails) {
  if(typeof(utag) != "undefined"){
        utag.data.page_id = TealiumUtils.getPDPPageId(articleCode);
        utag.data.category_id = TealiumUtils.getProductCategory();
        utag.data.category_path = 'pdp';
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
	var areaAttr = "osa_area_0622708001";
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
	var typeAttr = "osa_type_0622708001";
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
	var vcAttr = "vc_0622708001";
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
<script src="/etc/designs/appeaser/weekday/clientlibs/pattern-lib/frontend.min.js"></script>
		<script src="/etc/designs/appeaser/weekday/clientlibs/pattern-lib/controllers.min.js"></script>
	<script type="text/javascript">
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

// 	var _sliderStatus = {};

	$(window).on("load", function (e) {
//
// 			$('.slick-slider .a-image').each(function(){
// 				$(this).load(function(e){
// 					var src = e.currentTarget.src;
// 					if(!src || !_sliderStatus[src]){
//
// 						appeaser.publish(appeaser.Enums.trigger.RE_INITIALIZE_SLIDER,$('.slick-slider'));
// 						_sliderStatus[src]='loaded';
// 					}
// 				});
// 			});
// // 			_sliderStatus = 'loaded';
// 		}
		appeaser.publish(appeaser.Enums.trigger.RE_INITIALIZE_SLIDER,$('.slick-slider'));
	});
// 		$('.slick-slider .a-image').load(function(e){
//
// 				appeaser.publish(appeaser.Enums.trigger.RE_INITIALIZE_SLIDER,$('.slick-slider'));
// 			});



appeaser.subscribe(appeaser.Enums.trigger.ADD_ITEM_TO_CART,function(formData){
	weekdayApp.productDetails.defaultAddToCart(formData,function(data, qty, articleCode, productSize,textStatus, xhr){
		// On Success
		trackAddProduct(articleCode, formData.selectSize);
		//var src = $($('[data-component=MProductImage]')[0]).attr('src') || '';
    	var src = $($('[data-component=MProductImage]')[0]).attr('src') || $($('#productGallery .main-image-wrapper .a-image.default-image')).attr('src') || '';
    	var badResponse = data.result === false || typeof data.errorCode !== 'undefined';
        var hasMaxItem = data.errorCode === 'maxVariantNumberReached' ;
    	var hasMaxOrderLines = data.errorCode === 'maxOrderLinesReached' ;
    	var mCartAddition = $('.m-cart-addition');
    	var showPopup = (badResponse && (hasMaxItem || hasMaxOrderLines)) || !badResponse;
    	if(showPopup){
    		if(badResponse){
    			if((hasMaxItem || hasMaxOrderLines) && !mCartAddition.hasClass('has-max-items')){
     	    		mCartAddition.addClass('has-max-items');
    			}
    		} else if(!badResponse){
    			if(mCartAddition.hasClass('has-max-items')){
 	    			mCartAddition.removeClass('has-max-items');
 	    		}
    		}
    		appeaser.publish(appeaser.Enums.listen.ON_ITEM_ADDED_TO_CART, src);
	    	appeaser.publish(appeaser.Enums.trigger.UPDATE_SHOPPING_BAG_QTY, weekdayApp.shared.utils.getCartCount());
    	}
		//appeaser.publish(appeaser.Enums.listen.ON_ITEM_ADDED_TO_CART, src);
    	//appeaser.publish(appeaser.Enums.trigger.UPDATE_SHOPPING_BAG_QTY, weekdayApp.shared.utils.getCartCount());
    },function(xhr){
    	console.log("Error calling services.");
    });
});
// appeaser.subscribe(appeaser.Enums.listen.ON_ITEM_ADDED_TO_CART,function(){
// 	weekdayApp.shared.utils.updateCartCount();
// });
</script>
<div class="tealiumProductviewtag productview parbase"><script id="tealiumScript" type="text/javascript">initHMCookies(); initImpression(); initP11SearchPDP(); utag_data = {product_id : ["0622708001"], product_name : ["Eye Webbing Key Ring"], product_view_type : "pdp", product_category : [TealiumUtils.getProductCategory()], product_color: [TealiumUtils.getArticleColor()], product_size : [""], product_origin: [TealiumUtils.getProductOrigin()], product_variant: [TealiumUtils.getProductColorLoc()], product_atelier: [TealiumUtils.getProductAtelier()], product_brand: [TealiumUtils.getBrandNameorExternalBrandName()], product_action : "detail", product_price : [TealiumUtils.getProductPrice()], product_original_price : [TealiumUtils.getProductOriginalPrice()], product_material : [TealiumUtils.getArticleMaterial()], region_currency : TealiumUtils.getRegionCurrency(), customer_id : TealiumUtils.getCustomerData()[0], customer_email : TealiumUtils.getCustomerData()[1], customer_zip : TealiumUtils.getCustomerData()[2], customer_city : TealiumUtils.getCustomerData()[3], customer_state : TealiumUtils.getCustomerData()[4], customer_country : TealiumUtils.getCustomerData()[8], event_type: "", session_touchpoint : getTouchpoint() , session_login_status : TealiumUtils.getSessionLoginStatus(), page_id : "PRODUCT DETAIL : 0622708001 : Eye Webbing Key Ring", page_type : "pdp", category_id : "Accessories", category_path : TealiumUtils.getCategoryPath('true','Eye Webbing Key Ring'), region_market : hm.multiCountry.getCountryCode('HMCORP_locale'), region_locale : hm.multiCountry.getLocale('HMCORP_locale','en'), navigation_behavior : TealiumUtils.getNavigationBehaviour(), content_category: TealiumUtils.getContentCategory(), content_action: TealiumUtils.getContentAction(), content_id: TealiumUtils.getContentId(), content_count: TealiumUtils.getContentCount(), list_action: '', customer_id : TealiumUtils.getCustomerData()[0], customer_email : TealiumUtils.getCustomerData()[1], customer_zip : TealiumUtils.getCustomerData()[2], customer_city : TealiumUtils.getCustomerData()[3], customer_state : TealiumUtils.getCustomerData()[4], customer_country : TealiumUtils.getCustomerData()[8], event_type: ""}; utagTealiumTrack(function(a,b,c,d){a=getTealiumURL('brands-weekday');b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);});</script> </div>
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
	    	  var options = $('#noTransactionalClick').data();
			  appeaser.publish(appeaser.Enums.trigger.SHOW_LIGHTBOX, options);
	      }
	});
</script></body></html>`,
};
