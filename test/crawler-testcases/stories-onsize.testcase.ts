/* tslint:disable:max-line-length */
import { StoriesCrawler } from '../../src/crawler/crawlers/stories.crawler';

export const storiesOneSizeTestCase = {
  crawlerType: StoriesCrawler,

  url: 'https://www.stories.com/en_eur/bags/bum-bags/product.leather-beltbag-black.0675990002.html',

  sizes: [
    { id: '0675990002001', name: 'NOSIZE', isAvailable: true },

  ],

  sizeChecks: [
    { size: '0675990002001', isAvailable: true, isLowInStock: true },
    { size: 'sizedoesnotexist', isAvailable: false, isLowInStock: false },
  ],

  name: 'Leather Beltbag',

  priceChecks: [
    { size: '0675990002001', price: 69 },
    { size: 'unknown-size', price: 69 },
  ],

  secondResponse: { availability: ['0675990003001', '0675990002001'], fewPieceLeft: ['0675990002001'] },

  testResponse: `<!DOCTYPE HTML>
<html lang="en" class="no-js">

    <head>\t
    <title>Leather Beltbag - Black - Shoulderbags - &amp; Other Stories</title><meta name="description" content="&lt;p>Soft leather beltbag with a zipper closure and an adjustable strap.&amp;nbsp;&lt;/p>&lt;p>Leather zipper tab&lt;/p>&lt;p>Dimensions: 17cm x 14cm&lt;/p>&lt;p>6.7&amp;quot; x 5.5&amp;quot;&lt;/p>&lt;p>Top depth: 7.5cm / 3&amp;quot;&amp;nbsp;&lt;/p>&lt;p>&amp;nbsp;&lt;/p>"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="keywords" content="Leather Beltbag">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="msvalidate.01" content="A3340B19B3D0C1898AD9E234EA73D953" />
    <meta property="og:title" content="Leather Beltbag">
\t<meta property="og:description" content=" Soft leather beltbag with a zipper closure and an adjustable strap. Leather zipper tab Dimensions: 17cm x 14cm 6.7 x 5.5 Top depth: 7.5cm / 3 ">
\t<meta property="og:site_name" content="&amp; Other Stories">
\t<meta property="og:type" content="product">
\t
\t<meta property="og:price:amount" content="69.00">
\t<meta property="product:price:amount" content="69.00">
\t
\t
\t<meta property="og:price:currency" content="EUR">
<meta property="product:price:currency" content="EUR">
<meta property="og:availability" content="instock">
\t
\t<meta property="og:url" content="https://www.stories.com/en_eur/bags/shoulderbags/product.leather-beltbag-black.0675990002.html">
\t<!--[if lt IE 9]>
     <script src="/etc/designs/hm/clientlibs/shared/head/js/libs/angularjs.1.2.28.min.js"></script>
     <script src="/etc/designs/hm/clientlibs/shared/head/js/libs/angular-sanitize.1.2.28.min.js"></script>
<![endif]-->
<!--[if (gte IE 9) | (!IE)]><!-->
    <script type="text/javascript" src="/dtagent_ICA23STVjpqrx_7000100211014.js" data-dtconfig="agentUri=/dtagent_ICA23STVjpqrx_7000100211014.js|rid=RID_188051441|rpid=196417584|domain=stories.com|lastModification=1552954611127|lab=1|tp=500,50,0,1,10|reportUrl=dynaTraceMonitor|app=Appeaser Production Desktop Web"></script><script src="/etc/designs/hm/clientlibs/shared/head/js/libs/angularjs.1.3.15.min.js"></script>
    <script src="/etc/designs/hm/clientlibs/shared/head/js/libs/angular-sanitize.1.3.15.min.js"></script>
<!--<![endif]-->
<script src="/etc/designs/appeaser/stories/clientlibs/pattern-lib/frontend/js/modernizr-custom.min.js"></script>
<link href="/etc/designs/appeaser/stories/clientlibs/pattern-lib/frontend.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/etc/designs/appeaser/shared/head.min.js"></script>
<script type="text/javascript" src="/etc/designs/hm/clientlibs/shared/jquery.min.js"></script>
<script type="text/javascript" src="/etc/designs/hm/clientlibs/shared.min.js"></script>
<script src="https://cdn-pci.optimizely.com/js/12341090576.js"></script>
<script type="text/javascript" src="/etc/designs/appeaser/stories/clientlibs/application.min.js"></script>
<script type="text/x-handlebars-template" id="chooser-item">
        {{#each this.content}}
\t\t\t<div class="m-chooser-item {{this.type}}">
\t\t\t\t<a href="{{this.id}}" target="_self" class="a-link">
\t\t\t\t\t<img class="a-image" src="{{this.imageLink}}" alt="{{this.imageAlt}}">
\t\t\t\t\t<span>{{this.label}}</span>
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
                            allowedCountries = 'SE,DK,NL,GB,DE,BE,AT,FI,FR,ES,PL,IT,IE,NO'.split(','),
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
                    \t//window.location.href = '';
                    \tvar en_parameter = ".en_eur.";
                    \tif (currencyFromCookie.includes("USD")){
                    \t\ten_parameter = ".en_usd.";
                    \t}
                    \tvar georguriURL = '?goeorguri=%2Fen_eur%2Fbags%2Fshoulderbags%2Fproduct.leather-beltbag-black.0675990002.html';
                    \tvar redirectPageURL = "/content/stories/page.countryselector."+ locale + en_parameter + currencyFromCookie+ ".jsp" + georguriURL;
                    \twindow.location.href = redirectPageURL;
                    }
                }
            })();
        </script>
    <script src="/etc/designs/appeaser/shared/rakuten/js/rakuten.js"></script>
<script type="text/javascript" src="/etc/designs/appeaser/shared/clientlibs/metaTags.min.js"></script>
<link rel="shortcut icon" type="image/png" href="/etc/designs/appeaser/stories/favicons/favicon-32.png">
    <link rel="apple-touch-icon" href="/etc/designs/appeaser/stories/favicons/favicon-57.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/etc/designs/appeaser/stories/favicons/favicon-180.png">
    <link rel="alternate" hreflang="en-AT" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-BE" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-CZ" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
\t\t<link rel="alternate" hreflang="en-DK" href="https://www.stories.com/en_dkk/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-FI" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-FR" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-DE" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-HU" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-IE" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-IT" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-NL" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-PL" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-PT" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-SK" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-SI" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
        <link rel="alternate" hreflang="en-ES" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
      \t<link rel="alternate" hreflang="en-SE" href="https://www.stories.com/en_sek/bags/product.leather-beltbag-black.0675990002.html">
       \t<link rel="alternate" hreflang="en-GB" href="https://www.stories.com/en_gbp/bags/product.leather-beltbag-black.0675990002.html">
       \t<link rel="alternate" hreflang="en-US" href="https://www.stories.com/en_usd/bags/product.leather-beltbag-black.0675990002.html">
\t\t<link rel="alternate" hreflang="x-default" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html">
\t
\t\t<link rel="canonical" href="https://www.stories.com/en_eur/bags/product.leather-beltbag-black.0675990002.html"/>
\t\t<script type="text/javascript" src="/en_eur/metrics/default/touchpoint.js"></script>

    <input type="hidden" id="metaPrice" value="69.0"/>\t\t\t\t
\t\t</head>

<!-- Code to manage the mobile preview after css changes by HTML team -->
<body data-component="OPage" class="layout-inside null">
<div class="u-no-select">
    <div class="a-overlay js-a-overlay q-opacity-0" data-component="AOverlay"></div>

<div class="warehousemessage parbase">

<script>
\t$('#warehouseMessageWrap').find('a').addClass('a-link');
</script>
</div>
<div class="cookieMessage cookiemessage parbase"><div data-component="MCookieBar" class="m-cookie-bar">
\t<div class="cookie-wrapper">
\t\t<div class="is-static">
\t\t\t<p class="a-paragraph">To give you the best shopping experience, we have set your shipping location to <span class="geo-country"></span>, based on your current location. You can change your shipping location <a href="#" data-template="country-selector" data-classes="is-country-selector" class="a-link open-lightbox">here</a>.
\t\t\t</p>
\t\t</div>
\t\t<div class="is-richtext" id="cookieMessageWrap">\t
\t\t\t<p>We use <a href="/en_eur/customer-service/privacy-notice/cookie.html">cookies</a>
 to enhance your shopping experience.</p>
\t\t</div>
\t</div>
\t<div class="close-click-area">
\t\t<button type="button" class="a-icon-close a-button-nostyle"></button>
\t</div>
</div>

<script>
var _self = this;
   $(document).ready(function(){
\t   var cookieMessage;
\t $(".m-informative-section [target=_top]").addClass('open-in-lightbox');
    //_self.privacyCookiePopup($(".open-in-lightbox").attr("href"));
    $(".open-in-lightbox").click(function(e){
\t\tif($(this).parents().hasClass('m-informative-section') === true) {
          \t$(".o-lightbox").addClass("is-large");
\t\t} else {
          \t$(".o-lightbox").removeClass("is-large");
\t   }
       _self.privacyCookiePopup(this.href);
        e.preventDefault();
    });
        $(".a-overlay,.js-close-button").click(function(e){
           if($(".a-overlay").hasClass("custom-overlay")){
               $(".a-overlay").removeClass("q-opacity-95 q-bg-grey-light custom-overlay");
               $( ".o-lightbox .lightbox-content " ).remove();
               $(".o-lightbox").removeClass("is-large");
              appeaser.publish(appeaser.Enums.trigger.HIDE_LIGHTBOX);
           }

    });

  });

  function privacyCookiePopup(privacyUrl){
        var url =privacyUrl;
\t\tsetTimeout(function(){
      $.ajax({
\t\t\t"url" : url,
\t\t\t"success" : function(data) {
\t\t\t\tdata = $(data).find('.content-section');
\t\t\t\t window.cookieMessage=$(data).html();
    \tif($(".o-lightbox ").find(".lightbox-content").length == 0)
        {
\t\t$(".lightbox-wrapper").append("<div class='lightbox-content js-content u-clearfix' data-template='empty1' style='display:block'>");
\t\t$('.lightbox-content').html(window.cookieMessage);\t  \t
        $(".o-lightbox").addClass("is-open");
    \t$(".a-overlay").addClass("is-visible q-opacity-95 q-bg-grey-light custom-overlay");
                appeaser.scan();
\t\t\t}
\t\t\t}
\t\t});
\t\t},300);
}
\t$('#cookieMessageWrap').find('a').addClass('a-link');
</script><script type="text/x-handlebars-template" id="empty1">
</script></div>
<div class="sitebanner parbase">




<div id="site-banner-id" data-component="MSiteBanner" class="m-site-banner" data-component-id="99b5970e-f57c-49a0-81af-c7dcdc255c0b">
<div class="a-paragraph site-banner-desktop is-enabled" style="padding-top:15px;padding-bottom:15px;color:#FF00CC;background-color:#FFFFFF;"><a href="/en_eur/sale/all-sale.html">Take up to 70% off
  selected treasures now, online and in stores.</a>
\t<div class="close-click-area" style="padding-top:15px;padding-bottom:15px;"><span class="a-icon-close"></span></div>
</div>
<div class="a-paragraph site-banner-mobile is-enabled" style="padding-top:15px;padding-bottom:15px;color:#FF00CC;background-color:#FFFFFF;"><a href="/en_eur/sale/all-sale.html">Take up to 70% off
  selected treasures now, online and in stores.</a>
\t<div class="close-click-area" style="padding-top:15px;padding-bottom:15px;"><span class="a-icon-close"></span></div>
</div>



<div class="promotion-data stories-sitebanner" hidden>
  <span class="promo_id">w11-site-banner</span>
  <span class="promo_name">w11-site-banner-mss</span>
  <span class="promo_creative">w11-site-banner-mss</span>
</div>
</div>
</div>
<div class="newsletterLightbox parbase">




<script type="text/x-handlebars-template" data-template="newsletter-signup" id="newsletter-trigger" data-classes="is-medium" class="open-on-pageload"></script>

</div>
<!-- isAccountPage -->

<div data-component="MProductZoom" class="m-product-zoom">
    <button type="button" class="a-icon-close js-close-icon a-button-nostyle"></button>
    <div class="img-wrapper"></div>
</div>

<header data-component="OHeader" class="o-header u-clearfix ">

    <div class="header-container">
        <a href="/en_eur/cart" target="_self" class="a-link back-to-shop">Back</a>
        <div class="header-link-container">

        <div class="left-side"><a href="/en_eur/storelocator.html" target="_self" class="a-link">Store locator</a><a href="/en_eur/customer-service.html" target="_self" class="a-link">Customer service</a><a href="#" target="_self" class="a-link open-lightbox" data-template="newsletter-signup" data-classes="is-medium no-centering">Newsletter</a></div><div class="middle">
                <p class="a-paragraph header-usp" id="localizedTTT">Free shipping over €140 | Free returns</p></div><div class="right-side">

                <div class="my-account">
                    <div class="account parbase"><div style="height:0px">
<script>
    //tealium script
    var localeInfo = {};
    localeInfo.locale = hm.multiCountry.getLocale('HMCORP_locale','en');
     if(hm.multiCountry.getCountryCode('HMCORP_locale') != ""){
\tlocaleInfo.country = hm.multiCountry.getCountryCode('HMCORP_locale');
    }else{
    localeInfo.country = "DE";
    }
</script>

<a href="#" target="_self" class="a-link sign-in-link open-lightbox" data-template="sign-in" data-classes="is-medium no-centering" onclick="TealiumUtils.trackFunnelLink('login_start');">Sign In</a>
<a href="https://www.stories.com/en_eur/my-account" target="_self" class="a-link my-account-link">My Account</a>
<span class="delimiter">|</span>
<a href="https://www.stories.com/en_eur/logout" onclick="Cookies.remove('userCookie')" target="_self" class="a-link sign-out-link">Sign Out</a>


<script type="text/x-handlebars-template" id="sign-in">
<ul data-component="MTablist" class="m-tablist tabs-1-2" data-tablist-for="sign-in-registration-tabs">
\t<li data-toggle="#sign-in-form" class="u-no-select is-active">
\t\t<a href="#sign-in-form" target="_self" class="a-link" onclick="TealiumUtils.trackFunnelLink('login_start');">
\t\t\tSign in</a>
\t</li>
\t<li data-toggle="#registration-form" class="u-no-select">
\t\t<a href="#registration-form" target="_self" class="a-link" onclick="TealiumUtils.trackFunnelLink('registration_start');">
\t\t\tNew customer</a>
\t</li>
</ul>
<div data-content-for="sign-in-registration-tabs"
\tclass="tablist-content">
\t<div id="sign-in-form" class="content is-active">
\t\t<div class="o-sign-in in-lightbox">
\t\t\t<form data-component="OForm" class="o-form"
\t\t\t        action="https://www.stories.com/en_eur/j_spring_security_check" method="POST" onsubmit="TealiumUtils.trackTryLoginRegister('login')">
\t\t\t        <div class="m-error js-m-error is-hidden">
\t\t\t        \t<span class="has-error"></span>
\t\t             </div>
\t\t\t\t<div data-component="MInput" class="m-input" placeholder="">
\t\t\t\t\t<label class="a-label js-a-label" for="signin-email">Email</label>
\t\t\t\t\t<input
\t\t\t\t\t\tplaceholder="" class="a-input js-a-input" type="email"
\t\t\t\t\t\tname="j_username" id="signin-email" required pattern="^.{6,150}$"
\t\t\t\t\t\tdata-validation-required-text="Enter email address"
\t\t\t\t\t\tdata-validation-pattern-text="Please enter a valid email address"><label
\t\t\t\t\t\tclass="a-label js-a-label" data-placeholder="Email" for="signin-email">Email</label>
\t\t\t\t</div>
\t\t\t\t<div data-component="MInput" class="m-input no-description"
\t\t\t\t\tplaceholder="">
\t\t\t\t\t<label class="a-label js-a-label" for="default-pwd">Password</label>
\t\t\t\t\t<input
\t\t\t\t\t\tplaceholder="" class="a-input js-a-input" type="password" name="j_password" id="default-pwd" required
\t\t\t\t\t\tpattern="^[^ ]{5,25}$"
\t\t\t\t\t\tdata-validation-required-text="Enter password"
\t\t\t\t\t\tdata-validation-pattern-text="Password must be between 5 - 25 characters and may not contain any spaces"><label
\t\t\t\t\t\tclass="a-label js-a-label" data-placeholder="Password" for="default-pwd">Password</label>
\t\t\t\t</div>
\t\t\t\t<div class="link-holder" onclick="TealiumUtils.trackFunnelLink('forgot_password_start');">
\t\t\t\t\t<a
\t\t\t\t\t\thref="https://www.stories.com/en_eur/password/requestSignIn"
\t\t\t\t\t\ttarget="_self" class="a-link forgot-password">Forgot your
\t\t\t\t\t\tpassword?</a>
\t\t\t\t</div>
\t\t\t\t<button type="submit" class="a-button is-primary">
\t\t\t\t\t<span>Sign In</span>
\t\t\t\t</button>
\t\t\t</form>
\t\t</div>
\t</div>
\t<div id="registration-form" class="content">
\t\t<div class="o-registration empty-registration">
\t\t\t<form data-component="OForm" class="o-form" action="https://www.stories.com/en_eur/register/newcustomer" method="POST" onsubmit="TealiumUtils.trackTryLoginRegister('registration')">
\t\t\t    <div class="o-registration-form">
\t\t\t    \t<div class="m-error js-m-error is-hidden">
\t\t\t\t\t\t<span class="has-error"></span>
\t\t\t    \t</div>
\t\t\t\t\t<div class="e-mail-input">
\t\t\t\t\t\t<div data-component="MInput" class="m-input">
\t\t\t\t\t\t\t<label class="a-label js-a-label" for="registration-email"></label><input
\t\t\t\t\t\t\t\tclass="a-input js-a-input" type="email" name="email" id="registration-email" required
\t\t\t\t\t\t\t\tpattern="^.{6,150}$"
\t\t\t\t\t\t\t\tdata-validation-required-text="Enter email address"
\t\t\t\t\t\t\t\tdata-validation-pattern-text="Please enter a valid email address"><label
\t\t\t\t\t\t\t\tclass="a-label js-a-label" data-placeholder="Email" for="registration-email">Email</label>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div data-component="MInput" class="m-input password"
\t\t\t\t\t\tplaceholder="" id="password">
\t\t\t\t\t\t<label class="a-label js-a-label" for="pwd"></label><input placeholder=""
\t\t\t\t\t\t\tclass="a-input js-a-input" type="password" name="pwd" id="pwd" required
\t\t\t\t\t\t\tpattern="^[^ ]{6,25}$"
\t\t\t\t\t\t\tdata-validation-required-text="Enter password"
\t\t\t\t\t\t\tdata-validation-pattern-text="Password must be between 6 - 25 characters and may not contain any spaces"><label
\t\t\t\t\t\t\tclass="a-label js-a-label" for="pwd"
\t\t\t\t\t\t\tdata-placeholder="Password (Minimum 6 characters)">Password
\t\t\t\t\t\t\t(Minimum 6 characters)</label>
\t\t\t\t\t</div>
\t\t\t\t\t<div data-component="MInput" class="m-input password-repeat"
\t\t\t\t\t\tplaceholder="" data-validation-match-field="password">
\t\t\t\t\t\t<label class="a-label js-a-label" for="checkPwd"></label><input placeholder=""
\t\t\t\t\t\t\tclass="a-input js-a-input" type="password" name="checkPwd" id="checkPwd" required
\t\t\t\t\t\t\tdata-validation-required-text="Please confirm your new password"
\t\t\t\t\t\t\tdata-validation-match-field-text="Passwords are not matching"><label
\t\t\t\t\t\t\tclass="a-label js-a-label" data-placeholder="Repeat password" for="checkPwd">Repeat
\t\t\t\t\t\t\tpassword</label>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="country-section-wrapper u-clearfix">
\t\t\t\t\t\t<label class="a-label js-a-label country-section">Sweden </label><a
\t\t\t\t\t\t\thref="#" target="_self" class="a-link open-lightbox"
\t\t\t\t\t\t\tdata-template="country-selector" data-classes="is-country-selector">Change
\t\t\t\t\t\t\tcountry</a>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="checkbox-input">
\t\t\t\t\t\t<div class="m-checkbox u-clearfix" id="newsletter">
\t\t\t\t\t\t\t<input type="checkbox" class="a-checkbox" id="connected_newsletter" name="hmNewsSubscription">
\t\t\t\t\t\t\t<label class="a-label js-a-label custom-box" for="connected_newsletter"></label>
\t\t\t\t\t\t\t<label class="a-label js-a-label" for="connected_newsletter">
\t\t\t\t\t\t\t    <span class="newsLetterText">Check this box to subscribe to our newsletter. This is optional. By subscribing, you confirm that you are 16 years or older and agree to our </span>
\t\t\t\t\t\t\t\t<a href="/en_eur/customer-service/privacy-notice/direct-marketing.html" target="_blank" class="a-link policiesLink">privacy notice.</a>
\t\t\t\t\t\t\t</label>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="m-checkbox u-clearfix" id="policies">
\t\t\t\t\t\t\t<input type="checkbox" class="a-checkbox" name="termsAndConditions" id="connected_policies" required data-validation-required-text="">
\t\t\t\t\t\t\t<label class="a-label js-a-label custom-box" for="connected_policies"></label>
\t\t\t\t\t\t\t<label class="a-label js-a-label" for="connected_policies">
\t\t\t\t\t\t\t    <span class="policiesText is-richtext">I consent to &amp; Other Stories using my personal data to manage my
personal account in accordance with our  <a href="/en_eur/customer-service/privacy-notice/account.html" target="_blank" class="a-link policiesLink">privacy notice.</a></span>
\t\t\t\t\t\t\t</label>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<button type="submit" class="a-button is-primary">
\t\t\t\t\t\t<span>Create account</span>
\t\t\t\t\t</button>
\t\t\t\t</div>
\t\t\t</form>
\t\t</div>
\t</div>
</div>
</script>

</div></div>
</div>

                <div class="shipping-info">
                    <a id="noTransactionalClick" href="#" target="_self" class="a-link open-lightbox" data-classes="is-country-selector" data-template="country-selector">Shipping to: <span id="countryName">Germany</span></a>
                </div>
            </div>
        </div>
        <div class="header-search-logo-cart-container">
            <button type="button" class="a-button-nostyle a-icon-menu"></button>
            <button type="button" class="a-button-nostyle a-icon-search"></button>
            <a href="/en_eur/cart" target="_self" class="a-link">
                <div class="cart-icon">
                    <span class="a-icon-bag"></span>
                    <div class="items-in-bag"></div>
                </div>
            </a>
            <div class="header-logo">
                <a href="/en_eur/index.html" target="_self" class="a-link"><div class="a-stories-logo"><svg width="184px" height="31px" viewBox="0 0 184 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
    <title>Stories Logo dark</title>

    <defs>
        <polygon id="path-1" points="32.8035888 24.562947 32.8035888 0.629230704 0.857285311 0.629230704 0.857285311 24.562947"></polygon>
        <polygon id="path-3" points="0.000555795231 29.3333333 23.3198167 29.3333333 23.3198167 0.672640924 0.000555795231 0.672640924"></polygon>
    </defs>
    <g id="stories-logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Logo" transform="translate(-548.000000, -222.000000)">
            <g transform="translate(70.000000, 80.000000)" id="Group-2">
                <g transform="translate(467.000000, 134.000000)">
                    <g id="WKD-Logo-dark" transform="translate(11.000000, 8.000000)">
                        <g id="Page-1">
                            <path d="M51.3007477,1.65129412 C54.1501682,3.58298039 49.335215,7.24015686 49.5286729,9.94313725 C49.5011589,10.7472157 49.9860935,10.8084706 50.9808972,10.3520784 C54.2946168,9.40219608 59.1173084,6.74839216 61.5050093,5.97882353 C62.0673271,5.76227451 62.4095327,5.72862745 62.785271,5.9494902 C63.6184299,6.48611765 63.4223925,7.27552941 63.4051963,7.81819608 C63.3243738,8.92682353 60.8481121,13.7996078 60.3648972,14.6243922 C59.5248598,16.2083922 58.7209346,17.6647059 58.0743551,19.3625882 C57.7459065,20.3340392 58.1259439,20.5436863 58.8585047,19.9423529 C60.0158131,19.2512941 61.5153271,16.9607059 63.4309907,15.1774118 C64.2357757,14.4345882 65.0336822,13.4890196 66.1368224,12.6935686 C67.4798505,11.7203922 69.5029907,10.0190588 70.7239252,11.6988235 C71.1469533,12.276 70.7239252,14.1481569 70.1014206,15.393098 C69.0266542,18.0934902 67.6836262,20.1200784 67.3018692,23.4028235 C67.3018692,23.9118431 67.5065047,24.3294118 67.6165607,24.3923922 C68.655215,24.9945882 70.8520374,23.6383529 71.9973084,22.7393725 C72.6705421,22.2044706 75.1356262,19.9173333 75.5251215,19.4324706 C74.6369346,18.5360784 74.2044486,17.2747451 74.1167477,16.5129412 C73.8983551,14.5700392 75.2843738,12.5581176 76.5586168,11.5426667 C77.5955514,10.7178824 80.0374206,10.0785882 81.001271,11.7247059 C82.179215,13.7849412 79.4338318,17.3377255 78.2928598,18.8647843 C78.9686729,19.2176471 79.9686355,18.6680784 81.6564486,16.5500392 C84.9314766,11.9378039 86.6863551,12.4390588 86.548785,15.7606275 C86.3639252,18.649098 86.677757,18.9355294 88.5985794,15.4638431 C90.5933458,11.8523922 94.5192523,6.01419608 97.0522617,5.87356863 C98.2276262,5.80282353 98.545757,6.72941176 99.0367103,7.81301961 C99.6850093,9.22447059 98.1278879,10.3089412 97.3944673,8.81380392 C95.8192897,5.9494902 90.4402991,16.804549 88.5555888,20.9025882 C86.4456075,25.482902 84.2419065,25.3603922 84.3425047,21.2312941 C84.4001121,17.9865098 85.4671402,15.450902 82.2909907,19.4626667 C80.4552897,21.688549 78.2558879,22.0483137 76.8681495,21.0898039 C76.5319626,21.5323922 75.7400748,22.2881569 75.545757,22.4926275 C73.9903551,24.240549 72.335215,25.7563922 69.8305794,26.9832157 C68.8280374,27.459451 67.6165607,28.3342745 66.5890841,27.6992941 C65.830729,27.2420392 65.1196636,25.8780392 64.9777944,25.036 C64.4911402,21.9499608 66.7988785,18.4989804 67.3018692,15.7847843 C67.3758131,15.3801569 67.0705794,15.1627451 66.5426542,15.525098 C65.1506168,16.3628235 63.0561121,18.6767059 61.681271,20.3340392 C60.9633271,21.2036863 59.8980187,22.7747451 59.6718879,23.0792941 C58.8008972,24.2276078 57.6616449,25.086902 56.4811215,24.4096471 C55.6625794,23.9299608 55.016,21.7713725 55.2980187,20.5195294 C56.1234393,16.902902 59.2308037,12.7945098 60.1078131,9.81113725 C60.168,9.50141176 59.919514,9.4065098 59.7269159,9.46345098 C58.341757,9.81113725 56.9531589,10.5021961 55.5834766,11.1130196 C53.4373832,12.0585882 48.9603364,13.8513725 48.6413458,14.124 C48.3197757,14.4673725 46.7196636,21.9275294 46.1186542,26.2541961 C46.0163364,27.0539608 46.2588037,27.2377255 46.4918131,27.229098 C47.5063925,27.198902 48.350729,26.3094118 48.8975701,25.689098 C50.1090467,24.3130196 51.1236262,22.402902 52.1261682,20.7981961 C52.4993271,20.1683922 52.7951028,20.4177255 53.0186542,20.5997647 C54.0160374,21.4297255 53.5818318,22.6988235 52.7796262,23.9963922 C52.3522991,24.6934902 49.1598131,29.6214902 47.3980561,30.3945098 C46.5958505,30.7542745 45.696486,31.0553725 45.0963364,30.7223529 C44.1170093,30.1857255 43.5555514,28.0012549 43.8091963,26.217098 C44.3362617,22.609098 46.4350654,14.9289412 46.3060935,14.658902 C46.2269907,14.482902 43.6501308,15.8132549 42.9751776,13.7625098 C42.913271,13.5632157 42.7043364,13.4614118 42.4472523,13.6115294 C41.423215,14.2042353 40.8351028,15.0178039 40.466243,15.7796078 C38.6571963,19.6783529 37.6391776,26.1584314 33.5043364,27.6190588 C29.4597757,29.0382745 26.9637383,25.2844706 28.3600748,20.896549 C29.6248598,16.9736471 32.1191776,13.2526275 32.5748785,12.6047059 C33.9093084,10.6773333 36.1198879,7.79231373 37.3605981,9.70847059 C37.6125234,10.1398431 37.8274766,10.5168627 38.3141308,10.3978039 C39.1008598,10.2381961 39.9202617,10.1924706 40.2925607,10.4780392 C40.5943551,10.698902 40.871215,10.9163137 41.3905421,10.7748235 C42.0603364,10.5927843 42.6020187,10.2381961 43.124785,9.83011765 C45.1874766,8.23576471 48.6774579,3.98243137 49.8811963,2.2345098 C50.7384299,0.987843137 50.9576822,1.39333333 51.3007477,1.65129412 M46.2269907,9.34094118 C45.7988037,9.86290196 45.1057944,10.5927843 44.5288598,11.3071373 C43.9175327,12.0551373 44.4067664,12.5831373 45.0103551,12.7142745 C45.9518505,12.8833725 47.1745047,11.609098 47.3825794,10.2381961 C47.6620187,8.24007843 46.8950654,8.54980392 46.2269907,9.34094118 M77.7090467,13.602902 C75.7873645,14.6942745 75.7976822,16.3032941 76.9549907,17.6129412 C77.9669907,16.3628235 78.5456449,15.6812549 79.1879252,14.6425098 C79.8130093,13.6822745 79.4002991,12.6625098 77.7090467,13.602902 M37.1671402,13.1974118 C36.9814206,12.0637647 36.2540187,11.8584314 35.6297944,12.5676078 C33.971215,14.425098 31.3556636,18.4334118 31.0659065,21.692 C30.8948037,24.8349804 33.616972,24.338902 35.0004112,22.4296471 C36.0545421,20.9672941 37.8541308,17.3377255 38.6228037,15.6329412 C39.136972,14.5795294 37.4783925,14.5182745 37.1671402,13.1974118" id="Fill-1" fill="#221F20"></path>
                            <g id="Group-5" transform="translate(150.467290, 5.900400)">
                                <mask id="mask-2" fill="white">
                                    <use xlink:href="#path-1"></use>
                                </mask>
                                <g id="Clip-4"></g>
                                <path d="M24.6255626,19.6011373 C25.1775626,17.9032549 27.006385,20.8098431 28.0888897,21.5716471 C29.2573757,22.3800392 32.2340486,21.3732157 28.9125907,15.9189412 C27.291843,13.2427059 25.9101234,11.0176863 25.2463477,11.0004314 C24.6436187,11.0004314 22.1733757,15.6368235 17.8760299,19.1870196 C16.4246654,20.3767451 14.2665346,21.3421569 12.9639178,20.3922745 C12.4076187,19.9876471 12.1599925,19.3897647 11.9063477,19.0981569 C11.4239925,19.3034902 6.44653458,21.7925098 4.87135701,22.3947059 C1.20855327,23.8009804 -0.557502804,19.4078824 2.21539439,16.2338431 C2.63928224,15.7558824 3.22223551,15.1278039 3.69255327,14.5480392 C5.35887103,12.4886667 7.03550654,10.4249804 7.90563738,7.4234902 C8.20141308,6.29588235 8.62444112,6.36662745 9.14376822,6.9472549 C9.32002991,7.1594902 9.80152523,7.63141176 9.86085234,7.70215686 C10.4936748,8.46568627 10.2563664,8.82976471 9.67513271,10.1092157 C8.96664673,11.6526667 7.75431028,13.3005098 7.23240374,14.0079608 C6.23588037,15.4047451 5.05879626,16.5383922 4.42597383,17.8325098 C3.80690841,19.1680392 4.12933832,19.7995686 4.97711402,19.818549 C5.82488972,19.8125098 10.8891888,17.2924314 11.182385,17.1604314 C11.1600299,16.3373725 11.3285533,15.1191765 11.4901981,14.6058431 C12.1634318,12.4791765 14.0472822,10.0445098 15.2140486,8.1352549 C16.1512449,6.578 17.6559178,3.73266667 19.7220486,4.29690196 C20.5302729,4.54623529 20.7821981,5.0285098 20.9103103,5.37447059 C21.0822729,5.88176471 21.2387589,6.41235294 21.0822729,7.25007843 C20.3161794,11.5491373 16.7995439,15.4323529 14.0318056,17.4330588 C14.6955813,18.6590196 16.8468336,16.9093725 17.516628,16.3692941 C18.5234692,15.5643529 19.4813009,14.4928235 20.286086,13.5903922 C25.6581981,7.55117647 24.347843,5.698 26.1792449,3.01745098 C29.1172262,-1.28678431 30.3974879,1.35321569 29.4121421,2.30223529 C27.1319178,4.48843137 26.1362542,8.11109804 28.1396187,10.8580784 C29.7870206,13.1331373 31.6373383,15.7817647 32.526385,18.4476471 C33.722385,22.0884314 30.856628,25.579098 27.7913944,24.2892941 C25.5257869,23.3342353 24.0426093,21.2653725 24.6255626,19.6011373 M17.7719925,8.27588235 C16.1882168,9.4647451 14.8735626,12.1936078 14.1960299,13.2573725 C14.0318056,13.5196471 13.4333757,14.6282745 13.5073196,15.9189412 C15.4178243,14.1399608 17.1159551,12.0150196 17.7840299,11.069451 C18.9181234,9.4474902 18.6576,7.52356863 17.7719925,8.27588235" id="Fill-3" fill="#221F20" mask="url(#mask-2)"></path>
                            </g>
                            <path d="M127.865297,13.4853961 C129.679503,13.2774745 132.344923,12.9763765 133.664736,12.7977882 C134.129895,12.7279059 135.083428,12.8832 135.714531,12.3983373 C136.201185,12.0549647 136.873559,11.8841412 137.580325,11.7814745 C138.962905,11.5977098 138.850269,13.0747294 141.51569,12.1628078 C142.913746,11.6779451 143.567204,11.7150431 145.10369,10.9592784 C146.432961,10.3001412 147.732138,9.09574902 148.87655,9.22429804 C149.455204,9.28555294 149.75012,9.64272941 150.027839,10.0326902 C150.468064,10.8945725 151.051877,11.0050039 151.440512,11.0671216 C153.238381,11.3104157 155.981185,10.0801412 157.191802,10.5451608 C158.235615,10.9592784 158.391241,13.6027294 156.902905,13.9124549 C156.093821,13.9219451 156.14025,12.9056314 154.862568,12.9151216 C152.367391,13.0152 150.868736,12.9634353 149.141372,14.1488471 C148.303054,14.8580235 147.826718,16.5403765 147.591129,17.2340235 C146.736475,19.6264157 145.951465,23.3802196 145.396026,26.0383373 C145.10369,27.4592784 143.926606,28.3185725 142.952437,27.6991216 C141.980849,27.0762196 141.92754,25.7562196 142.308437,24.2981804 C142.886232,22.1853176 145.980699,14.9839843 145.877521,13.8995137 C145.842269,13.5897882 145.251578,13.3723765 144.797596,13.4241412 C143.678979,13.5647686 142.587877,13.9495529 141.527727,14.3973176 C140.531204,14.8243765 140.001559,14.9468863 139.324026,16.3013961 C138.084176,18.8982588 137.662007,20.0034353 137.082493,21.2259451 C136.023204,23.4544157 135.478082,24.4612392 134.01812,26.0512784 C133.09726,27.0632784 131.451578,28.6852392 130.055241,27.274651 C126.447465,23.6312784 129.642531,20.9955922 132.078381,16.7284549 C132.782568,15.3523765 133.208176,15.2755922 131.628699,15.1556706 C129.524736,15.0176314 128.020923,15.0366118 126.136213,15.3463373 C123.840512,15.7846118 124.212811,15.4688471 123.374493,17.4790431 C122.682344,19.1148078 121.77868,21.1086118 121.660026,22.6650039 C121.378867,26.1660235 123.334942,25.4257882 124.866269,22.3457882 C125.787989,20.488298 125.867951,20.7505725 126.447465,21.250102 C127.447428,22.1335529 127.271166,22.8099451 125.64354,25.3196706 C124.941073,26.4041412 124.12769,27.4860235 122.907615,27.8863373 C121.895615,28.1908863 120.558606,28.4177882 119.673858,26.1401412 C118.872512,24.0393569 119.746082,20.3286902 120.648886,18.1088471 C120.934344,17.4307294 121.500961,16.0805333 121.445073,15.431749 C121.323839,13.9029647 116.332624,18.5212392 110.856475,24.6355137 C109.786867,25.8269647 108.43868,27.3885333 106.752587,28.3185725 C105.055316,29.2494745 103.867054,28.8137882 103.026157,27.7638275 C101.63412,25.8882196 104.57726,24.6450039 105.206643,24.1696314 C109.375877,21.3053176 109.755914,20.3692392 109.705185,19.1337882 C109.577073,15.530102 102.522307,13.624298 103.940998,7.5246902 C105.196325,2.18257255 113.558867,0.20774902 114.840849,0.0481411765 C118.058269,-0.347858824 122.539615,1.72186667 119.470082,6.05888627 C118.768475,7.05449412 114.533036,13.319749 113.609596,15.6051608 C112.919166,17.242651 114.025746,17.7318275 115.01883,16.9044549 C115.360176,16.6594353 120.884475,11.8211608 124.307391,8.18382745 C126.688213,5.64476863 129.380288,6.12014118 128.038979,8.53151373 C127.173148,10.0542588 126.70283,10.8755922 126.047652,11.9755922 C124.859391,13.9642196 124.573933,13.9443765 127.865297,13.4853961 M111.504774,15.2531608 C112.206381,15.7699451 112.185746,15.4878275 112.741185,14.650102 C114.273372,12.3508863 117.491652,5.78021961 117.913821,4.17206275 C118.88369,0.583043137 111.116138,3.15057255 109.86769,3.96327843 C105.906531,6.55151373 105.584101,10.4407686 111.504774,15.2531608 M131.408587,21.4114353 C130.746531,23.1645333 131.593447,23.6493961 132.169521,23.6623373 C133.266643,23.6994353 134.274344,22.6598275 135.041297,21.1232784 C135.759241,19.7394353 136.247615,18.6342588 136.883877,17.0554353 C137.287989,16.1935529 135.873596,16.2789647 135.327615,16.5274353 C133.813484,17.3418667 132.817821,18.0898667 131.408587,21.4114353" id="Fill-6" fill="#221F20"></path>
                            <path d="M161.13095,6.89100392 C161.853193,6.13696471 163.915024,4.85923922 164.122239,7.13084706 C164.21166,8.26018039 163.956295,8.70967059 163.449006,9.43006275 C162.117155,11.1892 159.569529,8.67429804 161.13095,6.89100392" id="Fill-8" fill="#221F20"></path>
                            <g id="Group-12" transform="translate(0.000000, 1.586675)">
                                <mask id="mask-4" fill="white">
                                    <use xlink:href="#path-3"></use>
                                </mask>
                                <g id="Clip-11"></g>
                                <path d="M5.91456822,17.4341804 C6.9644,16.5628078 7.70899813,15.834651 7.70899813,15.706102 C7.69782056,15.4300235 7.19912897,13.8952 6.77610093,12.5752 C4.04103551,5.95276863 9.41486729,-2.26142745 14.4387551,1.71582745 C16.7869047,3.57159216 17.9992411,7.53331765 14.9082131,11.688298 C13.9761757,12.9272 10.9470542,15.9053961 10.9582318,16.0555137 C10.9995028,16.2806902 11.2342318,16.7413961 11.4930355,17.2167686 C11.7862318,17.6645333 12.1679888,18.3219451 12.4551664,18.2900235 C12.8051103,18.2382588 13.3295963,17.8060235 14.1575963,17.3263373 C15.4868673,16.5628078 15.7714654,16.3246902 16.031129,15.3032 C16.2091103,14.6199059 16.7585308,14.2446118 17.1781196,14.4232 C17.6974467,14.6958275 17.9545308,14.8373176 18.5366243,15.1806902 C19.4849981,15.7828863 18.9123626,17.0959843 18.4893346,17.4893961 C17.6974467,18.2512 16.5753907,18.7300235 15.1816336,19.3805333 C14.6889607,19.6315922 13.7638019,20.1017882 13.7638019,20.2217098 C13.7431664,20.3778667 15.0002131,21.9868863 16.2735963,23.6140235 C18.3251103,26.2324549 19.3414093,27.9122196 22.0584187,26.8217098 C22.434157,26.6767686 22.5958019,26.8363765 22.852886,27.135749 C22.9913159,27.2962196 23.1323252,27.4903373 23.2122879,27.6723765 C23.4521757,28.0623373 23.2501196,28.5963765 23.0024935,28.7551216 C18.965671,30.5375529 16.3802131,27.9173961 13.9177084,24.7476706 C12.2152785,22.5606118 11.7191664,21.7047686 11.536886,21.7047686 C11.3184935,21.7099451 7.53015701,24.4698667 5.68499813,25.6647686 C3.78911028,26.9019451 1.41774579,27.4333961 0.322343925,25.8424941 C-1.16255327,23.6623373 2.79946542,20.2406902 5.91456822,17.4341804 M6.66518505,22.0239843 C7.40720374,21.5572392 10.0571477,19.7817098 10.0571477,19.6410824 C10.0519888,19.5159843 8.89554019,17.8370824 8.82761495,17.8370824 C8.71325981,17.8465725 5.7752785,20.7272784 5.29980187,21.3182588 C3.91464299,22.7055529 3.88540935,23.7512 6.66518505,22.0239843 M9.72096075,4.31614118 C8.03916636,6.37033725 8.03916636,8.37104314 8.92477383,11.7003765 C9.38305421,13.3792784 9.57651215,13.9435137 9.80780187,13.9159059 C10.0846617,13.9435137 11.2634654,12.6511216 11.9530355,11.8228863 C13.7147925,9.60304314 14.8230916,7.93621961 14.2074654,5.07190588 C13.3889234,2.2619451 11.2402505,2.67951373 9.72096075,4.31614118" id="Fill-10" fill="#221F20" mask="url(#mask-4)"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg></div></a>
            </div>
           <a href="#" target="_self" class="a-link scroll-to-top">
\t\t\t\t<span class="a-icon-totop"></span>
\t\t\t\t<span class="back-to-top-link">Back to top</span>
\t  \t </a>
        </div>

    </div>


    <div class="autosuggestsearch parbase"><form action="/en_eur/search.html" method="GET" autocomplete="off" data-min-characters="" data-component="OSearch" class="o-search"><button type="button" class="a-button-nostyle a-icon-search"></button><textarea placeholder="Search products" rows="1" wrap="soft" id="searchInput" name="q" class="a-textarea" data-url="/content/stories/en_eur/jcr:content/header/autosuggestsearch.display.html"></textarea><button type="button" class="a-icon-close a-button-nostyle"></button><span class="clear-button">Clear</span><div id="results" class="results-found"></div><ul class="suggestions"></ul></form>

<script type="text/x-handlebars-template" id="search-suggestion-content">{{#each content}}
   {{#if this.suggestion}}
\t  {{#if this.ticket}}
\t  \t<li id="autoSuggestId"><a href="{{this.url}}" class="a-link" onclick="sendNotificationTicketAutoSuggest('{{this.url}}', '{{this.ticket}}', event);">{{this.suggestion}}</a></li>
            {{else}}
\t\t<li><a href="{{this.url}}" class="a-link">{{this.suggestion}}</a></li>
\t\t{{/if}}
\t  {{else}}
\t  <span>{{this.error}}</span>
\t  {{/if}}
{{/each}}</script>
<script>

var SEARCH_LINK = '/en_eur/search.html';
var RESOURCE_PATH = '/content/stories/en_eur/jcr:content/header/autosuggestsearch.display.html';

$(document).ready(function(){
\tappeaser.subscribe(appeaser.Enums.trigger.GET_SEARCH_SUGGESTIONS,function(data){
\t\tvar url = RESOURCE_PATH + "?term=" + data;
\t\t$.ajax({
\t\t\t'url': url,
\t\t\t'dataType':'json',
\t\t\t'success': function(responseData){\t\t\t
// \t\t\tvar dataArray = JSON.parse(responseData);
\t\t\tvar dataArray = responseData;
\t\t\tvar result = [];
\t\t\tfor(var i = 0; i < dataArray.length; i++){
\t\t\t\tif(i > 5){ break; }  // maximum of 5 autosuggestions
\t\t\t\tvar searchResult = dataArray[i].label;
\t\t\t\tvar ticketValue = dataArray[i].ticketValue;
\t\t\t\tresult.push({"suggestion":searchResult, "url":SEARCH_LINK+'?q='+encodeURI(searchResult), "ticket": ticketValue});
\t\t\t}
\t\t\tif(dataArray.length){
\t\t\t\tappeaser.publish(appeaser.Enums.listen.ON_SHOW_SEARCH_SUGGESTIONS,result);\t
\t\t\t}
\t\t\t}
\t\t});
\t\t});

\t});

function sendNotificationTicketAutoSuggest(url, ticket, e){
\te = e || window.event;
\te.preventDefault();
\tvar randomId = Math.random().toString(36).substr(2, 9);
\tsetNotificationTicket(ticket, randomId);
\tsendNotifications("en_eur", url, randomId, "click", "");
}

function sendNotifications(locale, url, articleId, type, pageType){
\tvar tick = "";
\tvar src = "";
\tvar params = {};
\tvar local = locale.toLowerCase();
\tif(type === "click"){
\t\tif(sessionStorage){
\t\t\ttick = sessionStorage.getItem("ticket_" + articleId);
\t\t\tsrc = sessionStorage.getItem("notSrc_" + articleId);
\t\t\tsessionStorage.removeItem("ticket_" + articleId);
\t\t\tsessionStorage.removeItem("notSrc_" + articleId);
\t\t} else if(localStorage){
\t\t\ttick = localStorage.getItem("ticket_" + articleId);
\t\t\tsrc = localStorage.getItem("notSrc_" + articleId);
\t\t\tlocalStorage.removeItem("ticket_" + articleId);
\t\t\tlocalStorage.removeItem("notSrc_" + articleId);
\t\t}
\t\tif(src !== "SDP" && src !== "SEARCH"){\t
\t\t\tif(pageType.slice(-2)==="AS"){
\t\t\t\tsrc = pageType;
\t\t\t}else{
\t\t\t\tsrc = "DEFAULT";
\t\t\t}
\t\t}
\t\tif(tick !== "" && tick !== null){
\t\t\tparams = {ticket : tick};
\t\t}else{
\t\t\tparams = {variant_key : articleId, notification_src : pageType};
\t\t}
    \t$.ajax({
            url: '/en_eur/pra/notification/'+type,
            type: 'POST',
            data: JSON.stringify(params),
            contentType:'application/json',
            success: function() {
            \tlocation.href = url;
            \treturn true;
            },
            error: function(){
            \tlocation.href = url;
            \treturn true;
            }
        });
    }
\t
}
</script></div>
<div data-component="MCartAdittion" class="m-cart-addition">
        <div class="content">
            <p class="a-paragraph max-limit-text">You have reached maximum
                number of items for this shopping bag</p>
            <div class="product-section">
                <h3 class="a-heading-3">Added to my bag</h3>
                <img class="a-image product-image"
                    src="/images/product-image-6.png"
                    alt="Image of product added to bag">
                <a href="https://www.stories.com/en_eur/cart" class="a-button is-primary is-checkout">
                    <span>CHECKOUT</span>
                </a>
            </div>
        </div>
    </div>
    <div class="o-minicart" data-component="OMinicart">
        <h2 class="a-heading-2" >
     My bag&nbsp;
     <span class="item-count"></span>
     <button type="button" class="a-icon-close a-button-nostyle"></button>
</h2>
<div class="products">
    <p class="a-paragraph empty-cart-text">Your bag is empty</p>
</div></div>





<nav data-component="OMainMenu" class="o-main-menu ">
\t<button type="button" class="a-icon-close a-button-nostyle"></button>
\t<div class="menu-content">
\t
\t\t<div class="ttl">
\t\t\tFree shipping over €140 | Free returns
\t\t</div>
\t
\t\t<div class="primary">\t\t\t
\t\t\t<div class="ateliers">
\t\t\t\t<div class="heading"></div>

\t\t\t</div>
\t\t\t

\t\t\t<ul class="categories">
\t
\t
\t            <li data-category-id="cat_0" class="is-sale ">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/sale.html" id="sale" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Sale
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_1">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/whats-new.html" id="whats-new" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t What&#39;s new
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_2">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/most-wanted.html" id="most-wanted" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Most wanted
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_3">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/current_crush.html" id="current_crush" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Current crush
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_4">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/clothing.html" id="clothing" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Clothing
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_5">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/shoes.html" id="shoes" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Shoes
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_6">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/bags.html" id="bags" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Bags
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_7">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/jewellery.html" id="jewellery" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Jewellery
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_8">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/accessories.html" id="accessories" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Accessories
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_9">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/lingerie.html" id="lingerie" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Lingerie
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_10">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/swimwear.html" id="swimwear" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Swimwear
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_11">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/beauty.html" id="beauty" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Beauty
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_12">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/hair-care.html" id="hair-care" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Hair care
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_13">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/latest-stories.html" id="latest-stories" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Latest stories
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_14">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/as-seen-on-instagram.html" id="as-seen-on-instagram" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t As seen on Instagram
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t
\t
\t
\t            <li data-category-id="cat_15">
\t\t\t \t
\t                <a href="https://www.stories.com/en_eur/online-exclusive.html" id="online-exclusive" target="_self" class="a-link ">
\t                \t
               \t\t\t
               \t\t\t Online exclusive
               \t\t</a>
               \t\t<span class="a-icon-arrowforward"></span>
               \t</li>
               \t
\t\t\t\t
\t\t    </ul>
\t\t\t
\t\t\t<div class="direct-links">
\t\t\t\t<a href="/en_eur/storelocator.html.html" target="_self" class="a-link">Store locator</a><a href="/en_eur/customer-service.html" target="_self" class="a-link">Customer service</a><a href="#" target="_self" class="a-link open-lightbox" data-template="newsletter-signup" data-classes="is-medium">Newsletter</a>
\t\t\t</div>
\t\t\t
\t\t\t<div class="sign-in-section">
\t<a href="#" target="_self" class="a-link my-account">My account</a>
\t<a href="https://www.stories.com/en_eur/logout" onclick="Cookies.remove('userCookie')" target="_self" class="a-link sign-out">Sign out</a>
    <a href="#" target="_self" class="a-link sign-in menu-link open-lightbox" data-template="sign-in" data-classes="is-medium no-centering">Sign in</a>
</div>
\t\t\t
\t\t</div><div class="secondary">
\t\t\t<div>
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_0" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category is-sale"> Sale</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/all-sale.html" id="all-sale" target="_self" class="a-link "> All sale</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="clothing">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Clothing</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/clothing.html" target="_self" class="a-link "> All clothing</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/clothing/knitwear.html" target="_self" class="a-link "> Knitwear</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/clothing/jackets---coats.html" target="_self" class="a-link "> Jackets &amp; Coats</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/clothing/dresses.html" target="_self" class="a-link "> Dresses</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/clothing/blouses---shirts.html" target="_self" class="a-link "> Blouses &amp; Shirts</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/clothing/tops.html" target="_self" class="a-link "> Tops</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/clothing/blazers.html" target="_self" class="a-link "> Blazers</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/clothing/trousers.html" target="_self" class="a-link "> Trousers</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/clothing/skirts.html" target="_self" class="a-link "> Skirts</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/clothing/jeans.html" target="_self" class="a-link "> Jeans</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/clothing/jumpsuits---playsuits.html" target="_self" class="a-link "> Jumpsuits &amp; Playsuits</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/clothing/shorts.html" target="_self" class="a-link "> Shorts</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="shoes">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Shoes</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/shoes.html" target="_self" class="a-link "> All shoes</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/shoes/boots.html" target="_self" class="a-link "> Boots</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/shoes/pumps.html" target="_self" class="a-link "> Pumps</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/shoes/flats.html" target="_self" class="a-link "> Flats</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/shoes/heeled-sandals.html" target="_self" class="a-link "> Heeled sandals</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/shoes/flat-sandals.html" target="_self" class="a-link "> Flat sandals</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/shoes/sneakers.html" target="_self" class="a-link "> Sneakers</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="bags">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Bags</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/bags.html" target="_self" class="a-link "> All bags</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/bags/shoulder-bags.html" target="_self" class="a-link "> Shoulder bags</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/bags/totes.html" target="_self" class="a-link "> Totes</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/bags/backpacks.html" target="_self" class="a-link "> Backpacks</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/bags/clutches.html" target="_self" class="a-link "> Clutches</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/bags/wallets.html" target="_self" class="a-link "> Wallets</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="jewellery">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Jewellery</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/jewellery.html" target="_self" class="a-link "> All jewellery</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/jewellery/earrings.html" target="_self" class="a-link "> Earrings</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/jewellery/rings.html" target="_self" class="a-link "> Rings</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/jewellery/bracelets.html" target="_self" class="a-link "> Bracelets</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/jewellery/hair-accessories.html" target="_self" class="a-link "> Hair Accessories</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/jewellery/brooches.html" target="_self" class="a-link "> Brooches</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="accessories">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Accessories</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/accessories.html" target="_self" class="a-link "> All accessories</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/accessories/scarves.html" target="_self" class="a-link "> Scarves</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/accessories/sunglasses.html" target="_self" class="a-link "> Sunglasses</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/accessories/belts.html" target="_self" class="a-link "> Belts</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/accessories/headwear.html" target="_self" class="a-link "> Headwear</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/accessories/other-accessories.html" target="_self" class="a-link "> Other Accessories</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="lingerie">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Lingerie</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/lingerie.html" target="_self" class="a-link "> All lingerie</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/lingerie/bras.html" target="_self" class="a-link "> Bras</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/lingerie/bottoms.html" target="_self" class="a-link "> Bottoms</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/lingerie/socks.html" target="_self" class="a-link "> Socks</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/lingerie/loungewear.html" target="_self" class="a-link "> Loungewear</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="swimwear">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Swimwear</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/swimwear.html" target="_self" class="a-link "> All swimwear</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/swimwear/swimsuits.html" target="_self" class="a-link "> Swimsuits</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/swimwear/bikinis.html" target="_self" class="a-link "> Bikinis</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/beauty.html" id="beauty" target="_self" class="a-link "> Beauty</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="stationery">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Stationery</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/stationery.html" target="_self" class="a-link "> All stationery</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/stationery/desk-accessories.html" target="_self" class="a-link "> Desk Accessories</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/sale/stationery/notebooks---writing.html" target="_self" class="a-link "> Notebooks &amp; Writing</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_1" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> What&#39;s new</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/whats-new/all.html" id="all" target="_self" class="a-link "> All</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/whats-new/clothing.html" id="clothing" target="_self" class="a-link "> Clothing</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/whats-new/shoes.html" id="shoes" target="_self" class="a-link "> Shoes</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/whats-new/bags.html" id="bags" target="_self" class="a-link "> Bags</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/whats-new/accessories.html" id="accessories" target="_self" class="a-link "> Accessories</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/whats-new/jewellery.html" id="jewellery" target="_self" class="a-link "> Jewellery</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/whats-new/lingerie.html" id="lingerie" target="_self" class="a-link "> Lingerie</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/whats-new/swimwear.html" id="swimwear" target="_self" class="a-link "> Swimwear</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/whats-new/beauty.html" id="beauty" target="_self" class="a-link "> Beauty</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/whats-new/back-in-stock0.html" id="back-in-stock0" target="_self" class="a-link "> Back in stock</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_2" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> Most wanted</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/most-wanted/most-wanted.html" id="most-wanted" target="_self" class="a-link "> Most wanted</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_3" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> Current crush</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/current_crush/puff-sleeves.html" id="puff-sleeves" target="_self" class="a-link "> Puff sleeves</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/current_crush/new-season-sneakers.html" id="new-season-sneakers" target="_self" class="a-link "> New-season sneakers</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/current_crush/statement-sunnies.html" id="statement-sunnies" target="_self" class="a-link "> Statement sunnies</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_4" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> Clothing</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/all.html" id="all" target="_self" class="a-link "> All clothing</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/whats-new.html" id="whats-new" target="_self" class="a-link "> What&#39;s new</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="dresses">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Dresses</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/dresses.html" target="_self" class="a-link "> All dresses</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/dresses/mini-dresses.html" target="_self" class="a-link "> Mini dresses</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/dresses/midi-dresses.html" target="_self" class="a-link "> Midi dresses</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/dresses/maxi-dresses.html" target="_self" class="a-link "> Maxi dresses</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/dresses/wrap-dresses.html" target="_self" class="a-link "> Wrap Dresses</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/dresses/printed-dresses.html" target="_self" class="a-link "> Printed dresses</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/blazers.html" id="blazers" target="_self" class="a-link "> Blazers</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="blouses-and-shirts">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Blouses &amp; shirts</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/blouses-and-shirts.html" target="_self" class="a-link "> All blouses &amp; shirts</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/blouses-and-shirts/blouses.html" target="_self" class="a-link "> Blouses</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/blouses-and-shirts/shirts.html" target="_self" class="a-link "> Shirts</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/blouses-and-shirts/silk.html" target="_self" class="a-link "> Silk</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="tops">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Tops &amp; t-shirts</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/tops.html" target="_self" class="a-link "> All tops &amp; t-shirts</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/tops/turtlenecks.html" target="_self" class="a-link "> Turtlenecks</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/tops/sweatshirts-and-hoodies.html" target="_self" class="a-link "> Sweatshirts &amp; Hoodies</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/tops/tops-and-t-shirts.html" target="_self" class="a-link "> Tops &amp; T-shirts </a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/tops/tanktops-and-camisoles.html" target="_self" class="a-link "> Tanktops &amp; camisoles</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/tops/basics.html" target="_self" class="a-link "> Basics</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/tops/striped-tshirts.html" target="_self" class="a-link "> Striped t-shirts</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/tops/long-sleeve-tops.html" target="_self" class="a-link "> Long Sleeve Tops</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="trousers">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Trousers</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/trousers.html" target="_self" class="a-link "> All trousers</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/trousers/tailored.html" target="_self" class="a-link "> Tailored</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/trousers/leather.html" target="_self" class="a-link "> Leather</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/trousers/wide.html" target="_self" class="a-link "> Wide</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/trousers/slim-fit.html" target="_self" class="a-link "> Slim Fit</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="skirts">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Skirts</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/skirts.html" target="_self" class="a-link "> All skirts</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/skirts/mini.html" target="_self" class="a-link "> Mini</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/skirts/midi.html" target="_self" class="a-link "> Midi</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="jeans">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Jeans</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/jeans.html" target="_self" class="a-link "> All jeans</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/jeans/straight.html" target="_self" class="a-link "> Straight</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/jeans/flared.html" target="_self" class="a-link "> Flared</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/jeans/slim-fit.html" target="_self" class="a-link "> Slim</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/jumpsuits.html" id="jumpsuits" target="_self" class="a-link "> Jumpsuits &amp; playsuits</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="knitwear">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Knitwear</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/knitwear.html" target="_self" class="a-link "> All knitwear</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/knitwear/sweaters.html" target="_self" class="a-link "> Sweaters</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/knitwear/cardigans.html" target="_self" class="a-link "> Cardigans</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/knitwear/turtlenecks.html" target="_self" class="a-link "> Turtlenecks</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/knitwear/patterned-sweaters.html" target="_self" class="a-link "> Patterned sweaters</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/knitwear/cashmere-sweaters.html" target="_self" class="a-link "> Cashmere sweaters</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="jackets-and-coats">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Jackets &amp; coats </h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/jackets-and-coats.html" target="_self" class="a-link "> All jackets &amp; coats </a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/jackets-and-coats/trench-coats.html" target="_self" class="a-link "> Trench coats</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/jackets-and-coats/denim-jackets.html" target="_self" class="a-link "> Denim jackets</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/jackets-and-coats/jackets.html" target="_self" class="a-link "> Jackets</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/jackets-and-coats/leather-jackets.html" target="_self" class="a-link "> Leather jackets</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/jackets-and-coats/wool-coats.html" target="_self" class="a-link "> Wool coats</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/shorts.html" id="shorts" target="_self" class="a-link "> Shorts</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/clothing/sets-suits.html" id="sets-suits" target="_self" class="a-link "> Sets &amp; suits</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_5" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> Shoes</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/all.html" id="all" target="_self" class="a-link "> All shoes</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/whats-new.html" id="whats-new" target="_self" class="a-link "> What&#39;s new</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="boots">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Boots</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/boots.html" target="_self" class="a-link "> All boots</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/boots/ankle-boots.html" target="_self" class="a-link "> Ankle boots</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/boots/winter-boots.html" target="_self" class="a-link "> Winter boots</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/boots/cowboy-boots.html" target="_self" class="a-link "> Cowboy boots</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/boots/knee-high-boots.html" target="_self" class="a-link "> Knee high boots</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/boots/chelsea-boots.html" target="_self" class="a-link "> Chelsea boots</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/boots/sock-boots.html" target="_self" class="a-link "> Sock boots</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/cowboy-boots.html" id="cowboy-boots" target="_self" class="a-link "> Cowboy boots</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="sneakers">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Sneakers</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/sneakers.html" target="_self" class="a-link "> All sneakers</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/sneakers/veja.html" target="_self" class="a-link "> Veja</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/sneakers/nike.html" target="_self" class="a-link "> Nike</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/sneakers/adidas.html" target="_self" class="a-link "> Adidas</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/sneakers/eytys.html" target="_self" class="a-link "> Eytys</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/sneakers/reebok.html" target="_self" class="a-link "> Reebok</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/sneakers/converse.html" target="_self" class="a-link "> Converse</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/sneakers/other-stories.html" target="_self" class="a-link "> &amp; Other Stories</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/loafers.html" id="loafers" target="_self" class="a-link "> Loafers</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/heeled-sandals.html" id="heeled-sandals" target="_self" class="a-link "> Heeled sandals</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/flat-sandals.html" id="flat-sandals" target="_self" class="a-link "> Flat sandals</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/pumps.html" id="pumps" target="_self" class="a-link "> Pumps</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/knee-high-boots.html" id="knee-high-boots" target="_self" class="a-link "> Knee high boots</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/shoes/Socks.html" id="Socks" target="_self" class="a-link "> Socks</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_6" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> Bags</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/bags/all.html" id="all" target="_self" class="a-link "> All bags</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/bags/whats-new.html" id="whats-new" target="_self" class="a-link "> What&#39;s new</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/bags/shoulder-bags.html" id="shoulder-bags" target="_self" class="a-link "> Shoulder bags</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/bags/bum-bags.html" id="bum-bags" target="_self" class="a-link "> Belt bags</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/bags/straw-bags.html" id="straw-bags" target="_self" class="a-link "> Straw bags</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/bags/totes.html" id="totes" target="_self" class="a-link "> Totes</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/bags/clutches.html" id="clutches" target="_self" class="a-link "> Clutches</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/bags/wallets.html" id="wallets" target="_self" class="a-link "> Wallets</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_7" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> Jewellery</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/jewellery/all.html" id="all" target="_self" class="a-link "> All jewellery</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/jewellery/whats-new-jewellery.html" id="whats-new-jewellery" target="_self" class="a-link "> What&#39;s new</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="earrings">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Earrings</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/jewellery/earrings.html" target="_self" class="a-link "> All earrings</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/jewellery/earrings/studs.html" target="_self" class="a-link "> Studs</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/jewellery/earrings/hoops.html" target="_self" class="a-link "> Hoops</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/jewellery/earrings/drop-back-earrings.html" target="_self" class="a-link "> Drop back earrings</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/jewellery/earrings/drop-earrings.html" target="_self" class="a-link "> Drop earrings</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/jewellery/necklaces.html" id="necklaces" target="_self" class="a-link "> Necklaces</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/jewellery/rings.html" id="rings" target="_self" class="a-link "> Rings</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/jewellery/bracelets.html" id="bracelets" target="_self" class="a-link "> Bracelets</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/jewellery/brooches.html" id="brooches" target="_self" class="a-link "> Brooches</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/jewellery/fine-jewellery.html" id="fine-jewellery" target="_self" class="a-link "> Fine jewellery</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_8" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> Accessories</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/all.html" id="all" target="_self" class="a-link "> All accessories</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/whats-new.html" id="whats-new" target="_self" class="a-link "> What&#39;s new</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/sunglasses.html" id="sunglasses" target="_self" class="a-link "> Sunglasses</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="scarves">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Scarves</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/scarves.html" target="_self" class="a-link "> All scarves</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/scarves/lightweight-scarves.html" target="_self" class="a-link "> Lightweight scarves</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/scarves/fall-and-winter-scarves.html" target="_self" class="a-link "> Fall &amp; Winter scarves</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/belts.html" id="belts" target="_self" class="a-link "> Belts</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="headwear">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Headwear</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/headwear.html" target="_self" class="a-link "> All headwear</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/headwear/hats.html" target="_self" class="a-link "> Hats</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/headwear/caps.html" target="_self" class="a-link "> Caps</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/headwear/beanies.html" target="_self" class="a-link "> Beanies</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/headwear/headbands.html" target="_self" class="a-link "> Headbands</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/gloves.html" id="gloves" target="_self" class="a-link "> Gloves</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/hair-accessories.html" id="hair-accessories" target="_self" class="a-link "> Hair accessories</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="other-accessories">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Other accessories</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/other-accessories.html" target="_self" class="a-link "> All other accessories</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/other-accessories/travel-and-passports.html" target="_self" class="a-link "> Travel &amp; passports</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/other-accessories/keyrings.html" target="_self" class="a-link "> Keyrings</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/accessories/other-accessories/cases.html" target="_self" class="a-link "> Cases</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_9" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> Lingerie</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/lingerie/all-lingerie.html" id="all-lingerie" target="_self" class="a-link "> All lingerie</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/lingerie/whats-new-lingerie.html" id="whats-new-lingerie" target="_self" class="a-link "> What&#39;s new</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="bras">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Bras</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/lingerie/bras.html" target="_self" class="a-link "> All bras</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/lingerie/bras/soft-bras.html" target="_self" class="a-link "> Soft bras</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/lingerie/bras/underwire-bras.html" target="_self" class="a-link "> Underwire bras</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/lingerie/bras/padded-bras.html" target="_self" class="a-link "> Padded bras</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/lingerie/bottoms.html" id="bottoms" target="_self" class="a-link "> Bottoms</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/lingerie/loungewear.html" id="loungewear" target="_self" class="a-link "> Loungewear</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/lingerie/socks.html" id="socks" target="_self" class="a-link "> Socks</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/lingerie/tights.html" id="tights" target="_self" class="a-link "> Tights</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/lingerie/bodies.html" id="bodies" target="_self" class="a-link "> Bodies</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_10" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> Swimwear</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/swimwear/all-swimwear.html" id="all-swimwear" target="_self" class="a-link "> All swimwear</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/swimwear/what-s-new.html" id="what-s-new" target="_self" class="a-link "> What&#39;s New</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/swimwear/swimsuits.html" id="swimsuits" target="_self" class="a-link "> Swimsuits</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="bikinis">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Bikinis</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/swimwear/bikinis.html" target="_self" class="a-link "> All bikinis</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/swimwear/bikinis/tops.html" target="_self" class="a-link "> Bikini tops</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/swimwear/bikinis/bottoms.html" target="_self" class="a-link "> Bikini bottoms</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_11" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> Beauty</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/all-beauty.html" id="all-beauty" target="_self" class="a-link "> All beauty</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/whats-new-beauty.html" id="whats-new-beauty" target="_self" class="a-link "> What&#39;s new</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="bath-and-body">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Bath &amp; body</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/bath-and-body.html" target="_self" class="a-link "> All bath &amp; body</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/bath-and-body/hand-wash.html" target="_self" class="a-link "> Hand wash</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/bath-and-body/hand-lotion.html" target="_self" class="a-link "> Hand lotion</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/bath-and-body/body-wash.html" target="_self" class="a-link "> Body wash</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/bath-and-body/body-lotion.html" target="_self" class="a-link "> Body lotion</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/bath-and-body/body-scrubs.html" target="_self" class="a-link "> Body scrubs</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/bath-and-body/fragrances.html" target="_self" class="a-link "> Fragrances</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/brushes-and-tools.html" id="brushes-and-tools" target="_self" class="a-link "> Brushes &amp; tools</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/fragrances.html" id="fragrances" target="_self" class="a-link "> Fragrances</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/gift-sets.html" id="gift-sets" target="_self" class="a-link "> Gift sets</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="makeup">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Makeup</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/makeup.html" target="_self" class="a-link "> All makeup</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/makeup/lips.html" target="_self" class="a-link "> Lips</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/makeup/eyes-and-brows.html" target="_self" class="a-link "> Eyes &amp; brows</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/makeup/cheeks.html" target="_self" class="a-link "> Cheeks</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/makeup/base.html" target="_self" class="a-link "> Base</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/nails.html" id="nails" target="_self" class="a-link "> Nails</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/natural-beauty.html" id="natural-beauty" target="_self" class="a-link "> Natural beauty</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/scented-candles.html" id="scented-candles" target="_self" class="a-link "> Scented candles</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t
                                    <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="main-menu" data-component-id="skin-care">
\t\t\t\t\t\t\t\t\t\t<div class="accordion-header"><a href="#" target="_self" class="a-link accordion-title js-accordion-toggle no-styling"><h3 class="a-heading-3"> Skin care</h3>
\t\t\t\t\t\t\t\t\t\t</a></div>

                                        <div class="accordion-content">
\t\t\t\t\t\t\t\t\t\t\t<div class="accordion-inner-content">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/skin-care.html" target="_self" class="a-link "> All skin care</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="third-level-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/skin-care/moisturisers.html" target="_self" class="a-link "> Moisturisers</a>\t
\t\t\t\t                       \t\t\t \t</div>
\t\t\t                \t\t\t\t\t</div>
\t\t                \t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/all-lights-on-you.html" id="all-lights-on-you" target="_self" class="a-link "> All lights on you</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/beauty/introducing-scandi-signature.html" id="introducing-scandi-signature" target="_self" class="a-link "> Our new scent</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_12" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> Hair care</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/hair-care/all-haircare.html" id="all-haircare" target="_self" class="a-link "> All hair care</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/hair-care/shampoo.html" id="shampoo" target="_self" class="a-link "> Shampoo</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/hair-care/conditioner.html" id="conditioner" target="_self" class="a-link "> Conditioner</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/hair-care/styling.html" id="styling" target="_self" class="a-link "> Styling</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/hair-care/treatments.html" id="treatments" target="_self" class="a-link "> Treatments</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_13" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> Latest stories</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/latest-stories/hey-pretty-woman.html" id="hey-pretty-woman" target="_self" class="a-link "> Hey pretty woman</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/latest-stories/chase-of-the-canyon.html" id="chase-of-the-canyon" target="_self" class="a-link "> Chase of the Canyon</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/latest-stories/sunlit-lifts.html" id="sunlit-lifts" target="_self" class="a-link "> Sunlit lifts</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/latest-stories/dancingstories.html" id="dancingstories" target="_self" class="a-link "> #Dancingstories</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_14" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> As seen on Instagram</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/as-seen-on-instagram/as-seen-on-instagram.html" id="as-seen-on-instagram" target="_self" class="a-link "> As seen on Instagram</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t
\t\t\t\t
\t\t\t\t\t<div data-category-id="cat_15" class="subcategory-section">
\t\t\t\t\t\t<div class="heading">
\t\t\t\t\t\t\t<span class="a-icon-arrowback"></span>
\t\t\t\t\t\t\t<span class="selected-category "> Online exclusive</span>
\t\t\t\t\t\t</div>\t\t\t\t\t
\t\t\t\t\t\t<ul class="subcategories">
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t<a href="https://www.stories.com/en_eur/online-exclusive/online-exclusive.html" id="online-exclusive" target="_self" class="a-link "> Online Exclusive</a>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t</li>
               \t\t</ul>\t
               \t\t<div class="curated-heading"></div>\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t</div>
\t\t\t
\t\t</div>
\t\t\t<div class="my-account-section">
    <div class="heading">
        <span class="a-icon-arrowback"></span>
        <a href="#" target="_self" class="a-link my-acount-title">My Account</a>
    </div>
    <ul>
        <li>
            <a href="https://www.stories.com/en_eur/my-account" target="_self" class="a-link" id="profile">Details</a>
        </li>
        <li>
            <a href="https://www.stories.com/en_eur/my-account/orders" target="_self" class="a-link" id="orders">Orders</a>
        </li>
\t\t</ul>
</div>

<script>
var pagePathName= window.location.pathname;
 var pageTitle=pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
 if(pageTitle=='profile'){
    $('.my-account-section #profile').addClass('has-underline')
 }
 else if(pageTitle=='orders'){
      $('.my-account-section #orders').addClass('has-underline')

 }else if(pageTitle=='payment-details'){
      $('.my-account-section #payment-details').addClass('has-underline')


 }else{
      $('.my-account-section #address-book').addClass('has-underline')

 }
</script>
\t\t</div>
\t\t<div class="shipping-to">
\t\t\t<a href="#" target="_self" class="a-link open-lightbox" data-classes="is-country-selector" data-template="country-selector">Shipping to: <span class="trigger" id="countryName"></span></a>
\t\t</div>
\t</div>
</nav>
<script>
    var cookieMatch = document.cookie.match(new RegExp('HMCORP_locale' + '=([^;]+)'));
    var countryName = "";
        if (cookieMatch){
            var countryLocale = 'com.day.cq.wcm.scripting.impl.WCMBindingsValuesProvider$ScriptingValueMap@11dec3dd : JcrPropertyMap [node=Node[NodeDelegate{tree=/content/stories/en_eur/jcr:content/header: { jcr:primaryType = nt:unstructured, jcr:mixinTypes = [cq:LiveSyncCancelled], newsLetterLabel = Newsletter, cq:isCancelledForChildren = true, searchFieldLabel = Search products, jcr:lastModifiedBy = jowes, cq:lastRolledout = 2018-05-23T17:11:29.728+02:00, storeLocatorPageLink = /content/stories/en_eur/storelocator, customerServiceLabel = Customer service, searchEnable = true, headerFreeText = Free shipping over £120 / €140 / 1000 SEK / 800 DKK | Free returns, cs_CZ = Czech Republic, da_DK = Denmark, de_AT = Austria, de_DE = Germany, en_GB = United Kingdom, en_IE = Ireland, en_US = United States, es_ES = Spain, fi_FI = Finland, fr_FR = France, hu_HU = Hungary, it_IT = Italy, nl_BE = Belgium, nl_NL = Netherlands, pl_PL = Poland, pt_PT = Portugal, sk_SK = Slovakia, sl_SI = Slovenia, sv_SE = Sweden, localizedTTTAT = Free shipping over €140 | Free returns, localizedTTTBE = Free shipping over €140 | Free returns, localizedTTTDE = Free shipping over €140 | Free returns, localizedTTTDK = Free shipping over 800 DKK | Free returns, localizedTTTES = Free shipping over €140 | Free returns, localizedTTTFI = Free shipping over €140 | Free returns, localizedTTTFR = Free shipping over €140 | Free returns, localizedTTTGB = Free shipping over £120 | Free returns, localizedTTTIE = Free shipping over €140 | Free returns, localizedTTTIT = Free shipping over €140 | Free returns, localizedTTTNL = Free shipping over €140 | Free returns, localizedTTTPL = Free shipping over €140 | Free returns, localizedTTTSE = Free shipping over 1000 SEK | Free returns, localizedTTTUS = Free shipping | Free returns, shippingLabel = Shipping to, signInLabel = Sign in, jcr:lastModified = 2018-08-15T12:25:56.502+02:00, sling:resourceType = appeaser/components/stories/global/header, storeLocatorLabel = Store locator, cq:lastRolledoutBy = maoro, showHeaderFreeText = true, customerServiceLink = /content/stories/en_eur/customer-service, searchResultsLink = /content/stories/en_eur/search, autosuggestsearch = { ... }, account = { ... }, cookieMessage = { ... }, newsletterLightbox = { ... }, warehousemessage = { ... }, ...}}], values={de_DE=Germany, localizedTTTDE=Free shipping over €140 | Free returns, storeLocatorPageLink=/content/stories/en_eur/storelocator, storeLocatorLabel=Store locator, customerServiceLink=/content/stories/en_eur/customer-service, customerServiceLabel=Customer service, newsLetterLabel=Newsletter, showHeaderFreeText=true, shippingLabel=Shipping to, searchEnable=true, searchFieldLabel=Search products, jcr:primaryType=nt:unstructured, jcr:mixinTypes=[Ljava.lang.String;@77b928f2, cq:isCancelledForChildren=true, jcr:lastModifiedBy=jowes, cq:lastRolledout=java.util.GregorianCalendar[time=1527088289728,areFieldsSet=true,areAllFieldsSet=true,lenient=false,zone=sun.util.calendar.ZoneInfo[id="GMT+02:00",offset=7200000,dstSavings=0,useDaylight=false,transitions=0,lastRule=null],firstDayOfWeek=1,minimalDaysInFirstWeek=1,ERA=1,YEAR=2018,MONTH=4,WEEK_OF_YEAR=21,WEEK_OF_MONTH=4,DAY_OF_MONTH=23,DAY_OF_YEAR=143,DAY_OF_WEEK=4,DAY_OF_WEEK_IN_MONTH=4,AM_PM=1,HOUR=5,HOUR_OF_DAY=17,MINUTE=11,SECOND=29,MILLISECOND=728,ZONE_OFFSET=7200000,DST_OFFSET=0], headerFreeText=Free shipping over £120 / €140 / 1000 SEK / 800 DKK | Free returns, cs_CZ=Czech Republic, da_DK=Denmark, de_AT=Austria, en_GB=United Kingdom, en_IE=Ireland, en_US=United States, es_ES=Spain, fi_FI=Finland, fr_FR=France, hu_HU=Hungary, it_IT=Italy, nl_BE=Belgium, nl_NL=Netherlands, pl_PL=Poland, pt_PT=Portugal, sk_SK=Slovakia, sl_SI=Slovenia, sv_SE=Sweden, localizedTTTAT=Free shipping over €140 | Free returns, localizedTTTBE=Free shipping over €140 | Free returns, localizedTTTDK=Free shipping over 800 DKK | Free returns, localizedTTTES=Free shipping over €140 | Free returns, localizedTTTFI=Free shipping over €140 | Free returns, localizedTTTFR=Free shipping over €140 | Free returns, localizedTTTGB=Free shipping over £120 | Free returns, localizedTTTIE=Free shipping over €140 | Free returns, localizedTTTIT=Free shipping over €140 | Free returns, localizedTTTNL=Free shipping over €140 | Free returns, localizedTTTPL=Free shipping over €140 | Free returns, localizedTTTSE=Free shipping over 1000 SEK | Free returns, localizedTTTUS=Free shipping | Free returns, signInLabel=Sign in, jcr:lastModified=java.util.GregorianCalendar[time=1534328756502,areFieldsSet=true,areAllFieldsSet=true,lenient=false,zone=sun.util.calendar.ZoneInfo[id="GMT+02:00",offset=7200000,dstSavings=0,useDaylight=false,transitions=0,lastRule=null],firstDayOfWeek=1,minimalDaysInFirstWeek=1,ERA=1,YEAR=2018,MONTH=7,WEEK_OF_YEAR=33,WEEK_OF_MONTH=3,DAY_OF_MONTH=15,DAY_OF_YEAR=227,DAY_OF_WEEK=4,DAY_OF_WEEK_IN_MONTH=3,AM_PM=1,HOUR=0,HOUR_OF_DAY=12,MINUTE=25,SECOND=56,MILLISECOND=502,ZONE_OFFSET=7200000,DST_OFFSET=0], sling:resourceType=appeaser/components/stories/global/header, cq:lastRolledoutBy=maoro, searchResultsLink=/content/stories/en_eur/search}]'.match(new RegExp(cookieMatch[1] + '=([^,]+)'));
            if (countryLocale){
                countryName = countryLocale[1];
                if(countryName){
\t\t\t\t\t$(".shipping-to").find("#countryName").html(countryName);
                }
            }
        }
</script></header>

<div data-component="OLightbox" class="o-lightbox">
\t<div class="lightbox-wrapper">
\t    <div class="lightbox-header"></div>
\t    <div class="lightbox-content js-content u-clearfix"></div>
\t    <button type="button" class="m-button-icon a-icon-close js-close-button a-button-nostyle"></button>
    </div>
</div>

</div>

<input type="hidden" id="georguri" value="?goeorguri=%2Fen_eur%2Fbags%2Fshoulderbags%2Fproduct.leather-beltbag-black.0675990002.html"/>
<script type="text/html" id="country-selector">
\t\t\t<div class="selectCountryLightbox parbase"><div data-component="OCountrySelector" class="o-country-selector">
    <div class="choose-country-box">
        <div class="a-stories-logo"><svg width="184px" height="31px" viewBox="0 0 184 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
\t\t    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
\t\t    <title>Stories Logo dark</title>
\t\t
\t\t    <defs>
\t\t        <polygon id="path-1" points="32.8035888 24.562947 32.8035888 0.629230704 0.857285311 0.629230704 0.857285311 24.562947"></polygon>
\t\t        <polygon id="path-3" points="0.000555795231 29.3333333 23.3198167 29.3333333 23.3198167 0.672640924 0.000555795231 0.672640924"></polygon>
\t\t    </defs>
\t\t    <g id="stories-logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
\t\t        <g id="Logo" transform="translate(-548.000000, -222.000000)">
\t\t            <g transform="translate(70.000000, 80.000000)" id="Group-2">
\t\t                <g transform="translate(467.000000, 134.000000)">
\t\t                    <g id="WKD-Logo-dark" transform="translate(11.000000, 8.000000)">
\t\t                        <g id="Page-1">
\t\t                            <path d="M51.3007477,1.65129412 C54.1501682,3.58298039 49.335215,7.24015686 49.5286729,9.94313725 C49.5011589,10.7472157 49.9860935,10.8084706 50.9808972,10.3520784 C54.2946168,9.40219608 59.1173084,6.74839216 61.5050093,5.97882353 C62.0673271,5.76227451 62.4095327,5.72862745 62.785271,5.9494902 C63.6184299,6.48611765 63.4223925,7.27552941 63.4051963,7.81819608 C63.3243738,8.92682353 60.8481121,13.7996078 60.3648972,14.6243922 C59.5248598,16.2083922 58.7209346,17.6647059 58.0743551,19.3625882 C57.7459065,20.3340392 58.1259439,20.5436863 58.8585047,19.9423529 C60.0158131,19.2512941 61.5153271,16.9607059 63.4309907,15.1774118 C64.2357757,14.4345882 65.0336822,13.4890196 66.1368224,12.6935686 C67.4798505,11.7203922 69.5029907,10.0190588 70.7239252,11.6988235 C71.1469533,12.276 70.7239252,14.1481569 70.1014206,15.393098 C69.0266542,18.0934902 67.6836262,20.1200784 67.3018692,23.4028235 C67.3018692,23.9118431 67.5065047,24.3294118 67.6165607,24.3923922 C68.655215,24.9945882 70.8520374,23.6383529 71.9973084,22.7393725 C72.6705421,22.2044706 75.1356262,19.9173333 75.5251215,19.4324706 C74.6369346,18.5360784 74.2044486,17.2747451 74.1167477,16.5129412 C73.8983551,14.5700392 75.2843738,12.5581176 76.5586168,11.5426667 C77.5955514,10.7178824 80.0374206,10.0785882 81.001271,11.7247059 C82.179215,13.7849412 79.4338318,17.3377255 78.2928598,18.8647843 C78.9686729,19.2176471 79.9686355,18.6680784 81.6564486,16.5500392 C84.9314766,11.9378039 86.6863551,12.4390588 86.548785,15.7606275 C86.3639252,18.649098 86.677757,18.9355294 88.5985794,15.4638431 C90.5933458,11.8523922 94.5192523,6.01419608 97.0522617,5.87356863 C98.2276262,5.80282353 98.545757,6.72941176 99.0367103,7.81301961 C99.6850093,9.22447059 98.1278879,10.3089412 97.3944673,8.81380392 C95.8192897,5.9494902 90.4402991,16.804549 88.5555888,20.9025882 C86.4456075,25.482902 84.2419065,25.3603922 84.3425047,21.2312941 C84.4001121,17.9865098 85.4671402,15.450902 82.2909907,19.4626667 C80.4552897,21.688549 78.2558879,22.0483137 76.8681495,21.0898039 C76.5319626,21.5323922 75.7400748,22.2881569 75.545757,22.4926275 C73.9903551,24.240549 72.335215,25.7563922 69.8305794,26.9832157 C68.8280374,27.459451 67.6165607,28.3342745 66.5890841,27.6992941 C65.830729,27.2420392 65.1196636,25.8780392 64.9777944,25.036 C64.4911402,21.9499608 66.7988785,18.4989804 67.3018692,15.7847843 C67.3758131,15.3801569 67.0705794,15.1627451 66.5426542,15.525098 C65.1506168,16.3628235 63.0561121,18.6767059 61.681271,20.3340392 C60.9633271,21.2036863 59.8980187,22.7747451 59.6718879,23.0792941 C58.8008972,24.2276078 57.6616449,25.086902 56.4811215,24.4096471 C55.6625794,23.9299608 55.016,21.7713725 55.2980187,20.5195294 C56.1234393,16.902902 59.2308037,12.7945098 60.1078131,9.81113725 C60.168,9.50141176 59.919514,9.4065098 59.7269159,9.46345098 C58.341757,9.81113725 56.9531589,10.5021961 55.5834766,11.1130196 C53.4373832,12.0585882 48.9603364,13.8513725 48.6413458,14.124 C48.3197757,14.4673725 46.7196636,21.9275294 46.1186542,26.2541961 C46.0163364,27.0539608 46.2588037,27.2377255 46.4918131,27.229098 C47.5063925,27.198902 48.350729,26.3094118 48.8975701,25.689098 C50.1090467,24.3130196 51.1236262,22.402902 52.1261682,20.7981961 C52.4993271,20.1683922 52.7951028,20.4177255 53.0186542,20.5997647 C54.0160374,21.4297255 53.5818318,22.6988235 52.7796262,23.9963922 C52.3522991,24.6934902 49.1598131,29.6214902 47.3980561,30.3945098 C46.5958505,30.7542745 45.696486,31.0553725 45.0963364,30.7223529 C44.1170093,30.1857255 43.5555514,28.0012549 43.8091963,26.217098 C44.3362617,22.609098 46.4350654,14.9289412 46.3060935,14.658902 C46.2269907,14.482902 43.6501308,15.8132549 42.9751776,13.7625098 C42.913271,13.5632157 42.7043364,13.4614118 42.4472523,13.6115294 C41.423215,14.2042353 40.8351028,15.0178039 40.466243,15.7796078 C38.6571963,19.6783529 37.6391776,26.1584314 33.5043364,27.6190588 C29.4597757,29.0382745 26.9637383,25.2844706 28.3600748,20.896549 C29.6248598,16.9736471 32.1191776,13.2526275 32.5748785,12.6047059 C33.9093084,10.6773333 36.1198879,7.79231373 37.3605981,9.70847059 C37.6125234,10.1398431 37.8274766,10.5168627 38.3141308,10.3978039 C39.1008598,10.2381961 39.9202617,10.1924706 40.2925607,10.4780392 C40.5943551,10.698902 40.871215,10.9163137 41.3905421,10.7748235 C42.0603364,10.5927843 42.6020187,10.2381961 43.124785,9.83011765 C45.1874766,8.23576471 48.6774579,3.98243137 49.8811963,2.2345098 C50.7384299,0.987843137 50.9576822,1.39333333 51.3007477,1.65129412 M46.2269907,9.34094118 C45.7988037,9.86290196 45.1057944,10.5927843 44.5288598,11.3071373 C43.9175327,12.0551373 44.4067664,12.5831373 45.0103551,12.7142745 C45.9518505,12.8833725 47.1745047,11.609098 47.3825794,10.2381961 C47.6620187,8.24007843 46.8950654,8.54980392 46.2269907,9.34094118 M77.7090467,13.602902 C75.7873645,14.6942745 75.7976822,16.3032941 76.9549907,17.6129412 C77.9669907,16.3628235 78.5456449,15.6812549 79.1879252,14.6425098 C79.8130093,13.6822745 79.4002991,12.6625098 77.7090467,13.602902 M37.1671402,13.1974118 C36.9814206,12.0637647 36.2540187,11.8584314 35.6297944,12.5676078 C33.971215,14.425098 31.3556636,18.4334118 31.0659065,21.692 C30.8948037,24.8349804 33.616972,24.338902 35.0004112,22.4296471 C36.0545421,20.9672941 37.8541308,17.3377255 38.6228037,15.6329412 C39.136972,14.5795294 37.4783925,14.5182745 37.1671402,13.1974118" id="Fill-1" fill="#221F20"></path>
\t\t                            <g id="Group-5" transform="translate(150.467290, 5.900400)">
\t\t                                <mask id="mask-2" fill="white">
\t\t                                    <use xlink:href="#path-1"></use>
\t\t                                </mask>
\t\t                                <g id="Clip-4"></g>
\t\t                                <path d="M24.6255626,19.6011373 C25.1775626,17.9032549 27.006385,20.8098431 28.0888897,21.5716471 C29.2573757,22.3800392 32.2340486,21.3732157 28.9125907,15.9189412 C27.291843,13.2427059 25.9101234,11.0176863 25.2463477,11.0004314 C24.6436187,11.0004314 22.1733757,15.6368235 17.8760299,19.1870196 C16.4246654,20.3767451 14.2665346,21.3421569 12.9639178,20.3922745 C12.4076187,19.9876471 12.1599925,19.3897647 11.9063477,19.0981569 C11.4239925,19.3034902 6.44653458,21.7925098 4.87135701,22.3947059 C1.20855327,23.8009804 -0.557502804,19.4078824 2.21539439,16.2338431 C2.63928224,15.7558824 3.22223551,15.1278039 3.69255327,14.5480392 C5.35887103,12.4886667 7.03550654,10.4249804 7.90563738,7.4234902 C8.20141308,6.29588235 8.62444112,6.36662745 9.14376822,6.9472549 C9.32002991,7.1594902 9.80152523,7.63141176 9.86085234,7.70215686 C10.4936748,8.46568627 10.2563664,8.82976471 9.67513271,10.1092157 C8.96664673,11.6526667 7.75431028,13.3005098 7.23240374,14.0079608 C6.23588037,15.4047451 5.05879626,16.5383922 4.42597383,17.8325098 C3.80690841,19.1680392 4.12933832,19.7995686 4.97711402,19.818549 C5.82488972,19.8125098 10.8891888,17.2924314 11.182385,17.1604314 C11.1600299,16.3373725 11.3285533,15.1191765 11.4901981,14.6058431 C12.1634318,12.4791765 14.0472822,10.0445098 15.2140486,8.1352549 C16.1512449,6.578 17.6559178,3.73266667 19.7220486,4.29690196 C20.5302729,4.54623529 20.7821981,5.0285098 20.9103103,5.37447059 C21.0822729,5.88176471 21.2387589,6.41235294 21.0822729,7.25007843 C20.3161794,11.5491373 16.7995439,15.4323529 14.0318056,17.4330588 C14.6955813,18.6590196 16.8468336,16.9093725 17.516628,16.3692941 C18.5234692,15.5643529 19.4813009,14.4928235 20.286086,13.5903922 C25.6581981,7.55117647 24.347843,5.698 26.1792449,3.01745098 C29.1172262,-1.28678431 30.3974879,1.35321569 29.4121421,2.30223529 C27.1319178,4.48843137 26.1362542,8.11109804 28.1396187,10.8580784 C29.7870206,13.1331373 31.6373383,15.7817647 32.526385,18.4476471 C33.722385,22.0884314 30.856628,25.579098 27.7913944,24.2892941 C25.5257869,23.3342353 24.0426093,21.2653725 24.6255626,19.6011373 M17.7719925,8.27588235 C16.1882168,9.4647451 14.8735626,12.1936078 14.1960299,13.2573725 C14.0318056,13.5196471 13.4333757,14.6282745 13.5073196,15.9189412 C15.4178243,14.1399608 17.1159551,12.0150196 17.7840299,11.069451 C18.9181234,9.4474902 18.6576,7.52356863 17.7719925,8.27588235" id="Fill-3" fill="#221F20" mask="url(#mask-2)"></path>
\t\t                            </g>
\t\t                            <path d="M127.865297,13.4853961 C129.679503,13.2774745 132.344923,12.9763765 133.664736,12.7977882 C134.129895,12.7279059 135.083428,12.8832 135.714531,12.3983373 C136.201185,12.0549647 136.873559,11.8841412 137.580325,11.7814745 C138.962905,11.5977098 138.850269,13.0747294 141.51569,12.1628078 C142.913746,11.6779451 143.567204,11.7150431 145.10369,10.9592784 C146.432961,10.3001412 147.732138,9.09574902 148.87655,9.22429804 C149.455204,9.28555294 149.75012,9.64272941 150.027839,10.0326902 C150.468064,10.8945725 151.051877,11.0050039 151.440512,11.0671216 C153.238381,11.3104157 155.981185,10.0801412 157.191802,10.5451608 C158.235615,10.9592784 158.391241,13.6027294 156.902905,13.9124549 C156.093821,13.9219451 156.14025,12.9056314 154.862568,12.9151216 C152.367391,13.0152 150.868736,12.9634353 149.141372,14.1488471 C148.303054,14.8580235 147.826718,16.5403765 147.591129,17.2340235 C146.736475,19.6264157 145.951465,23.3802196 145.396026,26.0383373 C145.10369,27.4592784 143.926606,28.3185725 142.952437,27.6991216 C141.980849,27.0762196 141.92754,25.7562196 142.308437,24.2981804 C142.886232,22.1853176 145.980699,14.9839843 145.877521,13.8995137 C145.842269,13.5897882 145.251578,13.3723765 144.797596,13.4241412 C143.678979,13.5647686 142.587877,13.9495529 141.527727,14.3973176 C140.531204,14.8243765 140.001559,14.9468863 139.324026,16.3013961 C138.084176,18.8982588 137.662007,20.0034353 137.082493,21.2259451 C136.023204,23.4544157 135.478082,24.4612392 134.01812,26.0512784 C133.09726,27.0632784 131.451578,28.6852392 130.055241,27.274651 C126.447465,23.6312784 129.642531,20.9955922 132.078381,16.7284549 C132.782568,15.3523765 133.208176,15.2755922 131.628699,15.1556706 C129.524736,15.0176314 128.020923,15.0366118 126.136213,15.3463373 C123.840512,15.7846118 124.212811,15.4688471 123.374493,17.4790431 C122.682344,19.1148078 121.77868,21.1086118 121.660026,22.6650039 C121.378867,26.1660235 123.334942,25.4257882 124.866269,22.3457882 C125.787989,20.488298 125.867951,20.7505725 126.447465,21.250102 C127.447428,22.1335529 127.271166,22.8099451 125.64354,25.3196706 C124.941073,26.4041412 124.12769,27.4860235 122.907615,27.8863373 C121.895615,28.1908863 120.558606,28.4177882 119.673858,26.1401412 C118.872512,24.0393569 119.746082,20.3286902 120.648886,18.1088471 C120.934344,17.4307294 121.500961,16.0805333 121.445073,15.431749 C121.323839,13.9029647 116.332624,18.5212392 110.856475,24.6355137 C109.786867,25.8269647 108.43868,27.3885333 106.752587,28.3185725 C105.055316,29.2494745 103.867054,28.8137882 103.026157,27.7638275 C101.63412,25.8882196 104.57726,24.6450039 105.206643,24.1696314 C109.375877,21.3053176 109.755914,20.3692392 109.705185,19.1337882 C109.577073,15.530102 102.522307,13.624298 103.940998,7.5246902 C105.196325,2.18257255 113.558867,0.20774902 114.840849,0.0481411765 C118.058269,-0.347858824 122.539615,1.72186667 119.470082,6.05888627 C118.768475,7.05449412 114.533036,13.319749 113.609596,15.6051608 C112.919166,17.242651 114.025746,17.7318275 115.01883,16.9044549 C115.360176,16.6594353 120.884475,11.8211608 124.307391,8.18382745 C126.688213,5.64476863 129.380288,6.12014118 128.038979,8.53151373 C127.173148,10.0542588 126.70283,10.8755922 126.047652,11.9755922 C124.859391,13.9642196 124.573933,13.9443765 127.865297,13.4853961 M111.504774,15.2531608 C112.206381,15.7699451 112.185746,15.4878275 112.741185,14.650102 C114.273372,12.3508863 117.491652,5.78021961 117.913821,4.17206275 C118.88369,0.583043137 111.116138,3.15057255 109.86769,3.96327843 C105.906531,6.55151373 105.584101,10.4407686 111.504774,15.2531608 M131.408587,21.4114353 C130.746531,23.1645333 131.593447,23.6493961 132.169521,23.6623373 C133.266643,23.6994353 134.274344,22.6598275 135.041297,21.1232784 C135.759241,19.7394353 136.247615,18.6342588 136.883877,17.0554353 C137.287989,16.1935529 135.873596,16.2789647 135.327615,16.5274353 C133.813484,17.3418667 132.817821,18.0898667 131.408587,21.4114353" id="Fill-6" fill="#221F20"></path>
\t\t                            <path d="M161.13095,6.89100392 C161.853193,6.13696471 163.915024,4.85923922 164.122239,7.13084706 C164.21166,8.26018039 163.956295,8.70967059 163.449006,9.43006275 C162.117155,11.1892 159.569529,8.67429804 161.13095,6.89100392" id="Fill-8" fill="#221F20"></path>
\t\t                            <g id="Group-12" transform="translate(0.000000, 1.586675)">
\t\t                                <mask id="mask-4" fill="white">
\t\t                                    <use xlink:href="#path-3"></use>
\t\t                                </mask>
\t\t                                <g id="Clip-11"></g>
\t\t                                <path d="M5.91456822,17.4341804 C6.9644,16.5628078 7.70899813,15.834651 7.70899813,15.706102 C7.69782056,15.4300235 7.19912897,13.8952 6.77610093,12.5752 C4.04103551,5.95276863 9.41486729,-2.26142745 14.4387551,1.71582745 C16.7869047,3.57159216 17.9992411,7.53331765 14.9082131,11.688298 C13.9761757,12.9272 10.9470542,15.9053961 10.9582318,16.0555137 C10.9995028,16.2806902 11.2342318,16.7413961 11.4930355,17.2167686 C11.7862318,17.6645333 12.1679888,18.3219451 12.4551664,18.2900235 C12.8051103,18.2382588 13.3295963,17.8060235 14.1575963,17.3263373 C15.4868673,16.5628078 15.7714654,16.3246902 16.031129,15.3032 C16.2091103,14.6199059 16.7585308,14.2446118 17.1781196,14.4232 C17.6974467,14.6958275 17.9545308,14.8373176 18.5366243,15.1806902 C19.4849981,15.7828863 18.9123626,17.0959843 18.4893346,17.4893961 C17.6974467,18.2512 16.5753907,18.7300235 15.1816336,19.3805333 C14.6889607,19.6315922 13.7638019,20.1017882 13.7638019,20.2217098 C13.7431664,20.3778667 15.0002131,21.9868863 16.2735963,23.6140235 C18.3251103,26.2324549 19.3414093,27.9122196 22.0584187,26.8217098 C22.434157,26.6767686 22.5958019,26.8363765 22.852886,27.135749 C22.9913159,27.2962196 23.1323252,27.4903373 23.2122879,27.6723765 C23.4521757,28.0623373 23.2501196,28.5963765 23.0024935,28.7551216 C18.965671,30.5375529 16.3802131,27.9173961 13.9177084,24.7476706 C12.2152785,22.5606118 11.7191664,21.7047686 11.536886,21.7047686 C11.3184935,21.7099451 7.53015701,24.4698667 5.68499813,25.6647686 C3.78911028,26.9019451 1.41774579,27.4333961 0.322343925,25.8424941 C-1.16255327,23.6623373 2.79946542,20.2406902 5.91456822,17.4341804 M6.66518505,22.0239843 C7.40720374,21.5572392 10.0571477,19.7817098 10.0571477,19.6410824 C10.0519888,19.5159843 8.89554019,17.8370824 8.82761495,17.8370824 C8.71325981,17.8465725 5.7752785,20.7272784 5.29980187,21.3182588 C3.91464299,22.7055529 3.88540935,23.7512 6.66518505,22.0239843 M9.72096075,4.31614118 C8.03916636,6.37033725 8.03916636,8.37104314 8.92477383,11.7003765 C9.38305421,13.3792784 9.57651215,13.9435137 9.80780187,13.9159059 C10.0846617,13.9435137 11.2634654,12.6511216 11.9530355,11.8228863 C13.7147925,9.60304314 14.8230916,7.93621961 14.2074654,5.07190588 C13.3889234,2.2619451 11.2402505,2.67951373 9.72096075,4.31614118" id="Fill-10" fill="#221F20" mask="url(#mask-4)"></path>
\t\t                            </g>
\t\t                        </g>
\t\t                    </g>
\t\t                </g>
\t\t            </g>
\t\t        </g>
\t\t    </g>
\t\t</svg></div>
        <div class="selector-content u-clearfix">
\t\t\t
\t\t\t\t<p class="a-paragraph">Please select your country from the list below so we can display the
correct prices, delivery times and shipping costs for your shipping destination.</p>
\t\t\t

\t\t\t\t<h2 class="a-heading-2">Choose country</h2>
\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.de_AT.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Austria</span></a>
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.nl_BE.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Belgium</span></a>
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.da_DK.en_eur.DKK.jsp" target="_self" class="a-link internal-link m-country-select"><span>Denmark</span></a>
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.fi_FI.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Finland</span></a>
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.fr_FR.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>France</span></a>
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.de_DE.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Germany</span></a>
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.en_IE.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Ireland</span></a>
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.it_IT.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Italy</span></a>
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.nl_NL.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Netherlands</span></a>
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.pl_PL.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Poland</span></a>
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="https://www.stories.com/kr/" target="_self" class="a-link m-country-select"><span>South Korea</span></a>
\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.es_ES.en_eur.EUR.jsp" target="_self" class="a-link internal-link m-country-select"><span>Spain</span></a>
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.sv_SE.en_eur.SEK.jsp" target="_self" class="a-link internal-link m-country-select"><span>Sweden</span></a>
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.en_GB.en_eur.GBP.jsp" target="_self" class="a-link internal-link m-country-select"><span>United Kingdom</span></a>
\t\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/content/stories/page.countryselector.en_US.en_usd.USD.jsp" target="_self" class="a-link internal-link m-country-select"><span>United States</span></a>
\t\t\t\t
\t\t\t
\t\t</div>
\t\t
\t\t\t<p class="a-paragraph warning-text">Can't find your country? We might have a <a
  href="/content/stories/en_eur/storelocator.html" target="_self" class="a-link has-underline">store</a>
     in your area. Join our <a
  href="/content/stories/en_eur/newslettersubscribe.html" target="_self" class="a-link has-underline">newsletter</a>
     to keep up with our next chapters.</p>
\t\t
    </div>
</div>

<script>
\t$('.choose-country-box .warning-text').find('a').addClass('a-link has-underline');
\t$('.choose-country-box .selector-content p').find('a').addClass('a-link has-underline');
\t
\tvar georguri = $('#georguri').val();
\t$("a.internal-link").each(function() {
\t   var $this = $(this);
\t   var _href = $this.attr("href");
\t   $this.attr("href", _href + georguri);
\t});
</script></div>
</script>
    <script>
         $(document).ready(function(){
        $.getJSON("/sling/servlet/default.localizedtextpropertiesreader.stories."+getLang()+"."+getCountryCode()+".json",{property: "localizedTTT"},  function(data) {
        if(data.properties[0] && data.properties.length > 0 && data.properties[0].localizedTTT){
        \tvar localizedTTTMessage= data.properties[0].localizedTTT;
            $("#localizedTTT").html(localizedTTTMessage);
        }
        });
\t\tdisplaySiteBanner();
         });
</script>

<script>
/**
 * JQuery plugin for removing white spaces from hybris minicart call
 *
 */
$(document).ready(function(){
    storiesApp.shared.utils.logInCheck();

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



   /* From WKD global/header.jsp - adapted to stories */
        $('#label-guest').click(function(){
                window.location =$("#contextPath").val()  + "/login";
        });

        $(window).on("load", function (e) {
        console.log("Window Load Stories");

       /*
       * Commented away for preventing bestMatch from appearing on page load if not sort is specified in URL
       */
        /* if($('.is-in-search-results') && $('.is-in-search-results').length) {
            if($('#sortOptions').find('.is-selected').data('value') == null || $('#sortOptions').find('.is-selected').data('value') == "") {
                $("#sortOptions [data-value='bestMatch']").addClass('is-selected');
                buildQueryString();
            }
        }*/
        var isOrderConfirmationPage = false;
        function updateCartCount(){
        \tif(isOrderConfirmationPage){
        \t\treturn;
        \t}
            var nrOfItems = '0';
            var userCookie = storiesApp.shared.utils.getUserCookie();
            if(!userCookie){
            \t\tvar inBag = $('.o-minicart .item-count').html();
            \t\tinBag = inBag.slice(1, inBag.length-1);
            \t\tnrOfItems = inBag;
            }
            if(userCookie && userCookie.cartCount){
                nrOfItems = userCookie.cartCount;
                if(isNaN(nrOfItems)){
                    nrOfItems = '0';
                }
            }
            $('.items-in-bag').html(nrOfItems); // $(.items-in-bag) class for stories
            if(nrOfItems == '0'){
                $('.o-minicart').addClass('is-empty');
            }else{
                $('.o-minicart').removeClass('is-empty');
            }
        }
        appeaser.subscribe(appeaser.Enums.listen.ON_ITEM_ADDED_TO_CART,function(){
            updateCartCount();
        });

        $("button.a-icon-menu").click(function(){
        \tif((appeaser.Utils.isMobile() || appeaser.Utils.isTablet()) && $(".subcategory-section .subcategories .has-underline").length > 0){
       \t\t\t$(".o-main-menu").addClass("is-showing-secondary");
       \t\t\t$(".subcategory-section .subcategories .has-underline").closest(".subcategory-section").addClass("is-visible");
       \t\t}else if((appeaser.Utils.isMobile() || appeaser.Utils.isTablet()) && $(".my-account-content").length > 0){
       \t\t    $(".o-main-menu").addClass("is-showing-secondary");
       \t\t    $(".my-account-section").addClass("is-visible");
       \t\t}else{
       \t\t\t$(".o-main-menu").removeClass("is-showing-secondary");
       \t\t\t$(".subcategory-section").removeClass("is-visible");
                $(".my-account-section").removeClass("is-visible");
       \t\t}
        })

        updateCartCount();

        window.storiesApp.cart.init(); // used for calling the minicart

    });

</script>

 <script>

\t$(document).on('ready',function(){

\t\tvar clickDelay = 200; // Configurable delay in milliseconds
\t\tvar classInComponents = '.o-hero a,.o-product a,.o-layout a,.o-focus-panel a,.o-tag-cloud a,.o-teaser-container a,.o-takeover a,.o-category-listing a'; // Add component class name
\t\t
\t\t$(classInComponents).click(function(e){
            if (e.ctrlKey || e.metaKey || this.target == "_blank") {
                var newTabOpeningClick = true;
            }
            if (!newTabOpeningClick) {
                e.preventDefault();
                var gotoURL = this.getAttribute('href');
                if(gotoURL){
                    anchorClickDelay(gotoURL);
                }
            }
        });

        function anchorClickDelay(gotoURL){
            setTimeout(function(){
                window.location = gotoURL;
            }, clickDelay);
        }
        //AO-20209 Stories ensure link ctrl-click default behavior

        $('.is-newsletterlink').click(function(e){
  \t   \t\te.preventDefault(); // prevent immidiate redirection
  \t   \t\t/* handlers for alternate HTML structure of link
  \t   \t\t* - depending on the order of config of hyperlink
  \t   \t\t* or style in dialog.
  \t   \t\t*/
           var gotoURL = $('.is-newsletterlink').closest('a').attr('href');
           if(!gotoURL){
          \t \tgotoURL = $('.is-newsletterlink').find('a').attr('href');
           }
         \tsetTimeout(function(){
      \t   \t\tTealiumUtils.newsletterCookieBarClicked();
               if(gotoURL){
              \t \twindow.location = gotoURL; // redirection to URL
                 }
         }, clickDelay);
    \t\t});

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
\t\t\t\t\t                        newURL = url.replace(locale,'en_usd');
\t\t\t\t\t                        $(this).attr('href',newURL);
\t\t\t\t\t  }else if(this.getAttribute('hreflang') === 'x-default'){
\t\t\t\t\t\t\t\t\t        newURL = url.replace(locale,'en_eur');
\t\t\t\t\t\t\t\t\t        $(this).attr('href',newURL);
\t\t\t\t\t  }
        })
    });

</script><!-- HeaderLife -->
<img src="/alive/user" alt="" width="1" height="1" style="position: absolute; left: -999px"/>
<div data-component="OPageContent" class="o-page-content ">
\t\t\t<script>
\tvar productArticleDetails = {
\t\t
\t\t\t'articleCode':'0675990002',
\t\t\t'baseProductCode' : '0675990_group_002',
\t\t\t'mainCategorySummary' : 'Shoulderbags - bags_shoulderbags_all',
\t\t\t'name': 'Leather Beltbag',
\t\t
\t\t'0675990002': {
\t\t\t'title': 'Leather Beltbag',
\t\t\t'name': 'Black',
\t\t\t'colorCode': '09',
\t\t\t'description': '<p>Soft leather beltbag with a zipper closure and an adjustable strap.&nbsp;<\\/p><p>Leather zipper tab<\\/p><p>Dimensions: 17cm x 14cm<\\/p><p>6.7&quot; x 5.5&quot;<\\/p><p>Top depth: 7.5cm \\/ 3&quot;&nbsp;<\\/p><p>&nbsp;<\\/p>',
\t\t\t'atelierName': "[DESIGNED IN PARIS]",
\t\t\t'brandName': "",
\t\t\t'colorLoc': "Black",
\t\t\t'pdpLink' : 'https:\\/\\/www.stories.com\\/en_eur\\/bags\\/shoulderbags\\/product.leather-beltbag-black.0675990002.html',
\t\t\t'originCountry': "",
\t\t\t\t
\t\t\t'variants' : [
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t\t\t'variantCode' : '0675990002001',
\t\t\t\t\t\t\t\t\t'sizeCode' : '001',
\t\t\t\t\t\t\t\t\t'sizeName' : 'NOSIZE',
\t\t\t\t\t\t\t\t}
\t\t\t],
\t\t\t
\t\t\t
\t\t\t'productFrontImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'logoImages' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'thumbnail': '//lp.stories.com/app005prod?set=source[02_0675990_002_200],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019093]&call=url[file:/product/style]',
\t\t\t\t\t\t'image': '//lp.stories.com/app005prod?set=source[02_0675990_002_200],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019093]&call=url[file:/product/main]',
\t\t\t\t\t\t'fullscreen': '//lp.stories.com/app005prod?set=source[02_0675990_002_200],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019093]&call=url[file:/product/main]',
\t\t\t\t\t\t'zoom': '//lp.stories.com/app005prod?set=source[02_0675990_002_200],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019093]&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t},
\t\t\t\t\t{
\t\t\t\t\t\t'thumbnail': '//lp.stories.com/app005prod?set=source[02_0675990_002_201],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/style]',
\t\t\t\t\t\t'image': '//lp.stories.com/app005prod?set=source[02_0675990_002_201],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
\t\t\t\t\t\t'fullscreen': '//lp.stories.com/app005prod?set=source[02_0675990_002_201],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
\t\t\t\t\t\t'zoom': '//lp.stories.com/app005prod?set=source[02_0675990_002_201],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t},
\t\t\t\t\t{
\t\t\t\t\t\t'thumbnail': '//lp.stories.com/app005prod?set=source[02_0675990_002_207],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
\t\t\t\t\t\t'image': '//lp.stories.com/app005prod?set=source[02_0675990_002_207],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
\t\t\t\t\t\t'fullscreen': '//lp.stories.com/app005prod?set=source[02_0675990_002_207],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
\t\t\t\t\t\t'zoom': '//lp.stories.com/app005prod?set=source[02_0675990_002_207],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t},
\t\t\t\t\t{
\t\t\t\t\t\t'thumbnail': '//lp.stories.com/app005prod?set=source[02_0675990_002_208],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
\t\t\t\t\t\t'image': '//lp.stories.com/app005prod?set=source[02_0675990_002_208],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
\t\t\t\t\t\t'fullscreen': '//lp.stories.com/app005prod?set=source[02_0675990_002_208],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
\t\t\t\t\t\t'zoom': '//lp.stories.com/app005prod?set=source[02_0675990_002_208],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t},
\t\t\t\t\t{
\t\t\t\t\t\t'thumbnail': '//lp.stories.com/app005prod?set=source[02_0675990_002_209],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/style]',
\t\t\t\t\t\t'image': '//lp.stories.com/app005prod?set=source[02_0675990_002_209],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
\t\t\t\t\t\t'fullscreen': '//lp.stories.com/app005prod?set=source[02_0675990_002_209],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
\t\t\t\t\t\t'zoom': '//lp.stories.com/app005prod?set=source[02_0675990_002_209],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t}
\t\t\t],
\t\t\t'dataSheetImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'thumbnailImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'otherImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'normalImages' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'thumbnail': '//lp.stories.com/app005prod?set=source[02_0675990_002_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/style]',
\t\t\t\t\t\t'image': '//lp.stories.com/app005prod?set=source[02_0675990_002_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
\t\t\t\t\t\t'fullscreen': '//lp.stories.com/app005prod?set=source[02_0675990_002_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
\t\t\t\t\t\t'zoom': '//lp.stories.com/app005prod?set=source[02_0675990_002_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t}
\t\t\t],
\t\t\t'detailImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'images':[
\t\t\t
\t\t\t],
\t\t\t
\t\t\t\t\t'price': '€69',
\t\t\t\t\t'priceOriginal': false,
\t\t\t\t\t'priceValue': '69.0',
\t\t\t\t\t'priceSaleValue': null,
\t\t\t\t
                'promoMarkerUrl': '//www.monki.com/',
\t\t\t\t'promoMarkerAlt': '',
\t\t\t\t'promoMarkerText': '',
                'promoMarkerLegalText': '',
                'promoMarkerLabelText': '€69',
                'promoMarkerStyle': '',
\t\t\t
\t\t\t'compositions': [
\t\t\t\t
\t\t\t\t\t'Shell: Calf Leather 100%',
\t\t\t\t\t'Lining: Cotton 100%'
\t\t\t\t],
\t\t\t
\t\t\t
\t\t\t'url': 'https:\\/\\/www.stories.com\\/en_eur\\/bags\\/shoulderbags\\/product.leather-beltbag-black.0675990002.html'
\t\t\t
\t\t},
\t\t'0675990003': {
\t\t\t'title': 'Leather Beltbag',
\t\t\t'name': 'Green',
\t\t\t'colorCode': '96',
\t\t\t'description': '<p>Soft leather beltbag with a zipper closure and an adjustable strap.&nbsp;<\\/p><p>Leather zipper tab<\\/p><p>Dimensions: 17cm x 14cm<\\/p><p>6.7&quot; x 5.5&quot;<\\/p><p>Top depth: 7.5cm \\/ 3&quot;&nbsp;<\\/p><p>&nbsp;<\\/p>',
\t\t\t'atelierName': "[DESIGNED IN PARIS]",
\t\t\t'brandName': "",
\t\t\t'colorLoc': "Green",
\t\t\t'pdpLink' : 'https:\\/\\/www.stories.com\\/en_eur\\/bags\\/shoulderbags\\/product.leather-beltbag-green.0675990003.html',
\t\t\t'originCountry': "",
\t\t\t\t
\t\t\t\t'styleWithArticles' : [
\t\t\t\t\t
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'code':'0501679003',
\t\t\t\t\t\t\t'name': 'Oversized Double Breasted Blazer',
\t\t\t\t\t\t\t'brandName': '',
\t\t\t\t\t\t\t'url':'https://www.stories.com/en_eur/clothing/blazers/product.oversized-double-breasted-blazer-grey.0501679003.html',
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t'imageUrl':'//lp.stories.com/app005prod?set=source[02_0501679_003_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'imageAlt':'Front image of Stories oversized double breasted blazer in grey',
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t'price': '€149',
\t\t\t\t\t\t\t\t\t'priceOriginal': false,
\t\t\t\t\t\t\t\t\t'priceValue': '149.0',
\t\t\t\t\t\t\t\t\t'priceSaleValue': null,
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t'colorName':'Grey',
\t\t\t\t\t\t\t'color':[
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t\t\t\t'colorAlt': 'Fabric Swatch image of Stories oversized double breasted blazer in grey',
\t\t\t\t\t\t\t\t\t\t'colorSrc': '//lp.stories.com/app005prod?set=source[04_0501679_003_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2018082]&call=url[file:/product/style]'
\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t],
\t\t\t\t\t\t\t'marker': [
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t]
\t\t\t\t\t\t},
\t\t\t\t\t\t{
\t\t\t\t\t\t\t'code':'0707156002',
\t\t\t\t\t\t\t'name': 'Low Leather Cowboy Boots',
\t\t\t\t\t\t\t'brandName': '',
\t\t\t\t\t\t\t'url':'https://www.stories.com/en_eur/shoes/boots/ankleboots/product.low-leather-cowboy-boots-black.0707156002.html',
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t'imageUrl':'//lp.stories.com/app005prod?set=source[02_0707156_002_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019092]&call=url[file:/product/style]',
\t\t\t\t\t\t\t'imageAlt':'Front image of Stories low leather cowboy boots in black',
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t'price': '€110',
\t\t\t\t\t\t\t\t\t'priceOriginal': false,
\t\t\t\t\t\t\t\t\t'priceValue': '110.0',
\t\t\t\t\t\t\t\t\t'priceSaleValue': null,
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t'colorName':'Black',
\t\t\t\t\t\t\t'color':[
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t\t\t\t'colorAlt': 'Fabric Swatch image of Stories low leather cowboy boots in black',
\t\t\t\t\t\t\t\t\t\t'colorSrc': '//lp.stories.com/app005prod?set=source[04_0707156_002_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019091]&call=url[file:/product/style]'
\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t],
\t\t\t\t\t\t\t'marker': [
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t]
\t\t\t\t\t\t}
\t\t\t\t],
\t\t\t
\t\t\t'variants' : [
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t\t\t'variantCode' : '0675990003001',
\t\t\t\t\t\t\t\t\t'sizeCode' : '001',
\t\t\t\t\t\t\t\t\t'sizeName' : 'NOSIZE',
\t\t\t\t\t\t\t\t}
\t\t\t],
\t\t\t
\t\t\t
\t\t\t'productFrontImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'logoImages' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'thumbnail': '//lp.stories.com/app005prod?set=source[02_0675990_003_202],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
\t\t\t\t\t\t'image': '//lp.stories.com/app005prod?set=source[02_0675990_003_202],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
\t\t\t\t\t\t'fullscreen': '//lp.stories.com/app005prod?set=source[02_0675990_003_202],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
\t\t\t\t\t\t'zoom': '//lp.stories.com/app005prod?set=source[02_0675990_003_202],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t},
\t\t\t\t\t{
\t\t\t\t\t\t'thumbnail': '//lp.stories.com/app005prod?set=source[02_0675990_003_203],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
\t\t\t\t\t\t'image': '//lp.stories.com/app005prod?set=source[02_0675990_003_203],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
\t\t\t\t\t\t'fullscreen': '//lp.stories.com/app005prod?set=source[02_0675990_003_203],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
\t\t\t\t\t\t'zoom': '//lp.stories.com/app005prod?set=source[02_0675990_003_203],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t}
\t\t\t],
\t\t\t'dataSheetImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'thumbnailImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'otherImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'normalImages' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'thumbnail': '//lp.stories.com/app005prod?set=source[02_0675990_003_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
\t\t\t\t\t\t'image': '//lp.stories.com/app005prod?set=source[02_0675990_003_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
\t\t\t\t\t\t'fullscreen': '//lp.stories.com/app005prod?set=source[02_0675990_003_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
\t\t\t\t\t\t'zoom': '//lp.stories.com/app005prod?set=source[02_0675990_003_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t}
\t\t\t],
\t\t\t'detailImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'images':[
\t\t\t
\t\t\t],
\t\t\t
\t\t\t\t\t'price': '€69',
\t\t\t\t\t'priceOriginal': false,
\t\t\t\t\t'priceValue': '69.0',
\t\t\t\t\t'priceSaleValue': null,
\t\t\t\t
                'promoMarkerUrl': '//www.monki.com/',
\t\t\t\t'promoMarkerAlt': '',
\t\t\t\t'promoMarkerText': '',
                'promoMarkerLegalText': '',
                'promoMarkerLabelText': '€69',
                'promoMarkerStyle': '',
\t\t\t
\t\t\t'compositions': [
\t\t\t\t
\t\t\t\t\t'Shell: Cow leather 100%',
\t\t\t\t\t'Lining: Cotton 100%'
\t\t\t\t],
\t\t\t
\t\t\t
\t\t\t'url': 'https:\\/\\/www.stories.com\\/en_eur\\/bags\\/shoulderbags\\/product.leather-beltbag-black.0675990002.html'
\t\t\t
\t\t},
\t\t'0675990001': {
\t\t\t'title': 'Leather Beltbag',
\t\t\t'name': 'Camel',
\t\t\t'colorCode': '33',
\t\t\t'description': '<p>Soft leather beltbag with a zipper closure and an adjustable strap.&nbsp;<\\/p><p>Leather zipper tab<\\/p><p>Dimensions: 17cm x 14cm<\\/p><p>6.7&quot; x 5.5&quot;<\\/p><p>Top depth: 7.5cm \\/ 3&quot;&nbsp;<\\/p><p>&nbsp;<\\/p>',
\t\t\t'atelierName': "[DESIGNED IN PARIS]",
\t\t\t'brandName': "",
\t\t\t'colorLoc': "Camel",
\t\t\t'pdpLink' : 'https:\\/\\/www.stories.com\\/en_eur\\/bags\\/shoulderbags\\/product.leather-beltbag-orange.0675990001.html',
\t\t\t'originCountry': "",
\t\t\t\t
\t\t\t'variants' : [
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t{
\t\t\t\t\t\t\t\t\t'variantCode' : '0675990001001',
\t\t\t\t\t\t\t\t\t'sizeCode' : '001',
\t\t\t\t\t\t\t\t\t'sizeName' : 'NOSIZE',
\t\t\t\t\t\t\t\t}
\t\t\t],
\t\t\t
\t\t\t
\t\t\t'productFrontImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'logoImages' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'thumbnail': '//lp.stories.com/app005prod?set=source[02_0675990_001_201],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/style]',
\t\t\t\t\t\t'image': '//lp.stories.com/app005prod?set=source[02_0675990_001_201],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
\t\t\t\t\t\t'fullscreen': '//lp.stories.com/app005prod?set=source[02_0675990_001_201],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
\t\t\t\t\t\t'zoom': '//lp.stories.com/app005prod?set=source[02_0675990_001_201],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t},
\t\t\t\t\t{
\t\t\t\t\t\t'thumbnail': '//lp.stories.com/app005prod?set=source[02_0675990_001_209],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/style]',
\t\t\t\t\t\t'image': '//lp.stories.com/app005prod?set=source[02_0675990_001_209],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
\t\t\t\t\t\t'fullscreen': '//lp.stories.com/app005prod?set=source[02_0675990_001_209],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
\t\t\t\t\t\t'zoom': '//lp.stories.com/app005prod?set=source[02_0675990_001_209],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t}
\t\t\t],
\t\t\t'dataSheetImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'thumbnailImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'otherImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'normalImages' : [
\t\t\t\t\t
\t\t\t\t\t{
\t\t\t\t\t\t'thumbnail': '//lp.stories.com/app005prod?set=source[02_0675990_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/style]',
\t\t\t\t\t\t'image': '//lp.stories.com/app005prod?set=source[02_0675990_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
\t\t\t\t\t\t'fullscreen': '//lp.stories.com/app005prod?set=source[02_0675990_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
\t\t\t\t\t\t'zoom': '//lp.stories.com/app005prod?set=source[02_0675990_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]&zoom=zoom'
\t\t\t\t\t}
\t\t\t],
\t\t\t'detailImages' : [
\t\t\t\t\t
\t\t\t],
\t\t\t'images':[
\t\t\t
\t\t\t],
\t\t\t
\t\t\t\t\t'price': '€69',
\t\t\t\t\t'priceOriginal': false,
\t\t\t\t\t'priceValue': '69.0',
\t\t\t\t\t'priceSaleValue': null,
\t\t\t\t
                'promoMarkerUrl': '//www.monki.com/',
\t\t\t\t'promoMarkerAlt': '',
\t\t\t\t'promoMarkerText': '',
                'promoMarkerLegalText': '',
                'promoMarkerLabelText': '€69',
                'promoMarkerStyle': '',
\t\t\t
\t\t\t'compositions': [
\t\t\t\t
\t\t\t\t\t'Lining: Cotton 100%',
\t\t\t\t\t'Shell: Calf Leather 100%'
\t\t\t\t],
\t\t\t
\t\t\t
\t\t\t'url': 'https:\\/\\/www.stories.com\\/en_eur\\/bags\\/shoulderbags\\/product.leather-beltbag-black.0675990002.html'
\t\t\t
\t\t}
\t};
</script>
 <!-- OTHER STORIES PDP  -->
\t\t<div class="content-section">
\t\t\t<div class="u-cols-sm-8-8 u-cols-md-12-12 u-cols-lg-18-24">
\t\t\t\t<div id="productGallery" data-component="OProductGallery" class="o-product-gallery">
        <div class="o-slider">
            <div class="a-heading-2 slider-title u-align-center"></div>
            <div class="slider" id="sliderWrapper">
                <div class="swiper-wrapper" id="imageContainer">
                    <div class="swiper-slide">
                            <img class="a-image default-image" src="//lp.stories.com/app005prod?set=source[02_0675990_002_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]" data-zoom-src="//lp.stories.com/app005prod?set=source[02_0675990_002_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/zoom]"  alt="Front image of Stories  in black"/>
                            <img class="a-image zoom-image" src="//lp.stories.com/app005prod?set=source[02_0675990_002_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]" data-zoom-src="//lp.stories.com/app005prod?set=source[02_0675990_002_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/zoom]"  alt="Front image of Stories  in black"/>
                        </div>
                    <div class="swiper-slide">
                            <img class="a-image default-image" src="//lp.stories.com/app005prod?set=source[02_0675990_002_200],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019093]&call=url[file:/product/main]" data-zoom-src="//lp.stories.com/app005prod?set=source[02_0675990_002_200],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019093]&call=url[file:/product/zoom]"  alt="Back image of Stories leather beltbag in black"/>
                            <img class="a-image zoom-image" src="//lp.stories.com/app005prod?set=source[02_0675990_002_200],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019093]&call=url[file:/product/main]" data-zoom-src="//lp.stories.com/app005prod?set=source[02_0675990_002_200],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019093]&call=url[file:/product/zoom]"  alt="Back image of Stories leather beltbag in black"/>
                        </div>
                    <div class="swiper-slide">
                            <img class="a-image default-image" src="//lp.stories.com/app005prod?set=source[02_0675990_002_201],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]" data-zoom-src="//lp.stories.com/app005prod?set=source[02_0675990_002_201],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/zoom]"  alt="Back image of Stories  in black"/>
                            <img class="a-image zoom-image" src="//lp.stories.com/app005prod?set=source[02_0675990_002_201],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]" data-zoom-src="//lp.stories.com/app005prod?set=source[02_0675990_002_201],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/zoom]"  alt="Back image of Stories  in black"/>
                        </div>
                    <div class="swiper-slide">
                            <img class="a-image default-image" src="//lp.stories.com/app005prod?set=source[02_0675990_002_207],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]" data-zoom-src="//lp.stories.com/app005prod?set=source[02_0675990_002_207],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/zoom]"  alt="Back image of Stories leather fanny pack in black"/>
                            <img class="a-image zoom-image" src="//lp.stories.com/app005prod?set=source[02_0675990_002_207],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]" data-zoom-src="//lp.stories.com/app005prod?set=source[02_0675990_002_207],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/zoom]"  alt="Back image of Stories leather fanny pack in black"/>
                        </div>
                    <div class="swiper-slide">
                            <img class="a-image default-image" src="//lp.stories.com/app005prod?set=source[02_0675990_002_208],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]" data-zoom-src="//lp.stories.com/app005prod?set=source[02_0675990_002_208],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/zoom]"  alt="Back image of Stories leather fanny pack in black"/>
                            <img class="a-image zoom-image" src="//lp.stories.com/app005prod?set=source[02_0675990_002_208],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]" data-zoom-src="//lp.stories.com/app005prod?set=source[02_0675990_002_208],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/zoom]"  alt="Back image of Stories leather fanny pack in black"/>
                        </div>
                    <div class="swiper-slide">
                            <img class="a-image default-image" src="//lp.stories.com/app005prod?set=source[02_0675990_002_209],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]" data-zoom-src="//lp.stories.com/app005prod?set=source[02_0675990_002_209],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/zoom]"  alt="Back image of Stories  in black"/>
                            <img class="a-image zoom-image" src="//lp.stories.com/app005prod?set=source[02_0675990_002_209],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]" data-zoom-src="//lp.stories.com/app005prod?set=source[02_0675990_002_209],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/zoom]"  alt="Back image of Stories  in black"/>
                        </div>
                    </div>
            </div>
        </div>
    </div></div>\t
\t\t\t<div class="u-cols-spacer u-cols-lg-1-24 u-not-mobile u-not-tablet"></div>\t\t\t
\t\t\t<div class="u-cols-sm-8-8 u-cols-md-12-12 u-cols-lg-5-24 u-float-right u-no-padding">
\t\t\t\t<!-- Condition when get-single-article-by-code is called -->
   \t\t<!-- To Do remove the condition and call get-single-article-by-code service-->
   \t<script type="text/javascript">
   function loadSizesByCodeOnReady(code){\t
   \tvar articlesIds={
   \t\t
   \t\t\t"0675990002" : "size_0675990002",
   \t\t\t"0675990003" : "size_0675990003",
   \t\t\t"0675990001" : "size_0675990001"
   \t};\t
   \tstoriesApp.productDetails.loadSizesByCode(code, false, articlesIds, 'en_eur');
   }

   function loadSizes(caller){\t\t
   \tcaller = $(caller);
   \tvar swatchIsDisabled = caller.hasClass('is-disabled');
   \tvar isSoldOut = caller.hasClass('is-sold-out');
   \tvar isComingSoon = caller.hasClass('is-coming-soon');

   \tstoriesApp.productDetails.loadSizes(caller, 'en_eur');
   \t\t//var isSelected = $('.m-swatches .is-selected').hasClass("is-disabled");
\t\t
\tif($('#sizesDropdown').hasClass('is-filled')) {
\t\t$('#sizesDropdown').removeClass('is-filled');
\t}
\t
   \tif(!swatchIsDisabled){

   \t\t$('#sizesDropdown').removeClass('is-disabled');
   \t\t$('#submitAddToBag').removeAttr('disabled');
   \t\tif($('#submitAddToBag').hasClass('out-of-stock')) {
\t\t   \t$('#submitAddToBag').attr('disabled', true);
\t\t}
   \t\tif($('#selectSize').val() != 'NOSIZE'){
   \t\t\t$('#sizesDropdown').removeClass('is-filled');
   \t\t\t$("#selectSizeLabel").text('CHOOSE SIZE'); // to be handled serverside\t
   \t\t}
   \t} else {
   \t\t$('#sizesDropdown').addClass('is-disabled');
   \t\t$('#submitAddToBag').attr('disabled', true);
   \t\t$("#selectSizeLabel").text('OUT OF STOCK'); // add sold out message in #sizesdropdown

           $('.m-swatches').find('.is-selected').removeClass('is-selected');
           caller.addClass('is-selected');
   \t}
\tif(isSoldOut) {
\t\tif($('.o-product-information .list-wrapper li ul li.is-selected').hasClass('is-coming-soon'))\t{
\t\t\t$('button.add-to-bag span').html($('button.add-to-bag').data('coming-soon'));
\t\t}
\t\telse if($('.o-product-information .list-wrapper li ul li.is-selected').hasClass('is-discontinued'))\t{
\t\t\t$('button.add-to-bag span').html($('button.add-to-bag').data('discontinued'));
\t\t}else {
\t\t\t$('button.add-to-bag span').html($('button.add-to-bag').data('out-of-stock'));
\t\t}
\t\t$('#sizesDropdown .placeholder').addClass('is-sold-out');
        $('button.add-to-bag').attr('disabled', true);
        if (caller.parents('#swatchDropdown').siblings('#sizesDropdown').hasClass('is-one-option')) {
        $('button.add-to-bag').addClass('out-of-stock');
        }
   \t}else{
   \t\t$('button.add-to-bag span').text('ADD TO BAG');
\t\t$('#sizesDropdown .placeholder').removeClass('is-sold-out');
        $('button.add-to-bag').removeAttr('disabled');
        if (caller.parents('#swatchDropdown').siblings('#sizesDropdown').hasClass('is-one-option')) {
        $('button.add-to-bag').removeClass('out-of-stock');
        }
   \t}
\tif(!isSoldOut){
        if(isComingSoon){
        \tif($('.o-product-information .list-wrapper li ul li.is-selected').hasClass('is-coming-soon')){
\t\t\t\t$('button.add-to-bag span').html($('button.add-to-bag').data('coming-soon'));
            }
            $('#sizesDropdown .placeholder').addClass('is-coming-soon');
\t\t\t$('button.add-to-bag').attr('disabled', true);
\t\t\t$('button.add-to-bag').addClass('is-coming-soon');
        }else{
           $('button.add-to-bag span').text('ADD TO BAG');
           $('#sizesDropdown .placeholder').removeClass('is-coming-soon');
\t\t   $('button.add-to-bag').removeAttr('disabled');
\t\t   $('button.add-to-bag').removeClass('is-coming-soon');
        }
\t}
   };
</script>
   \t<style>
   #scentColorName{
   border: 1px solid #000000;
   margin-top: 18px;
   margin-bottom: 8px;
   }
   #scentColorName label{
   line-height: 38px;
   padding: 0 40px;
   text-align: center;
   margin: 0;
   font-family: 'Courier New';
   font-weight: normal;
   font-size: 12px;
   }
</style>
<div data-component="OProductInformation" class="o-product-information">
   <form data-component="OForm" class="o-form add-to-cart details-section" action="#" method="POST">
      <div class="overlay"></div>
      <p class="a-paragraph product-label" id="atelier-label">DESIGNED IN PARIS</p>
      <h2 class="a-heading-2 q-mega product-name" id="productTitle">Leather Beltbag</h2>
      <div class="m-product-price" id="product-price">
         <span class="is-regular" >
\t\t\t€69</span>
\t</div>
      <div id="productMarkers" data-component="MProductMarkers" class="m-product-marker" style="display:none;">
      </div>
\t\t\t<div id="swatchDropdown" data-component="MDropdown" class="m-dropdown is-filled pdp-dropdown " data-selected="0675990002" data-value="Black">
               <img id="imgSwatch_0675990002" class="a-image placeholder-image" src="https://lp.stories.com/app005prod%3Fset%3Dsource%5B04_0675990_002_001%5D%2Ctype%5BFABRICSWATCH%5D%2Cdevice%5B%5D%2Cquality%5B80%5D%2CImageVersion%5B2018081%5D%26call%3Durl%5Bfile%3A%2Fproduct%2Fmain%5D" alt="Fabric Swatch image of Stories  in black"/>
               <button type="button" class="a-button-nostyle placeholder">
               Black</button>
               <button type="button" class="a-icon-close a-button-nostyle"></button>
               <input name="selectColor" class="js-input"/>
               <span class="a-icon-arrow-down-small" style=""></span>
               <ul class="list-wrapper">
                  <li>
                     <ul class="options">
                        <li id="swatch_0675990002" class="a-option" data-articlecode="0675990002" data-value="black" onclick="loadSizes(this);trackProductVariant(this);">
                              <img class="a-image option-swatch" src="https://lp.stories.com/app005prod%3Fset%3Dsource%5B04_0675990_002_001%5D%2Ctype%5BFABRICSWATCH%5D%2Cdevice%5B%5D%2Cquality%5B80%5D%2CImageVersion%5B2018081%5D%26call%3Durl%5Bfile%3A%2Fproduct%2Fmain%5D" alt="Fabric Swatch image of Stories  in black"/>
                              Black</li>
                        <li id="swatch_0675990003" class="a-option" data-articlecode="0675990003" data-value="green" onclick="loadSizes(this);trackProductVariant(this);">
                              <img class="a-image option-swatch" src="https://lp.stories.com/app005prod%3Fset%3Dsource%5B04_0675990_003_001%5D%2Ctype%5BFABRICSWATCH%5D%2Cdevice%5B%5D%2Cquality%5B80%5D%2CImageVersion%5B2018081%5D%26call%3Durl%5Bfile%3A%2Fproduct%2Fmain%5D" alt="Fabric Swatch image of Stories leather beltbag in green"/>
                              Green</li>
                        <li id="swatch_0675990001" class="a-option" data-articlecode="0675990001" data-value="camel" onclick="loadSizes(this);trackProductVariant(this);">
                              <img class="a-image option-swatch" src="https://lp.stories.com/app005prod%3Fset%3Dsource%5B04_0675990_001_001%5D%2Ctype%5BFABRICSWATCH%5D%2Cdevice%5B%5D%2Cquality%5B80%5D%2CImageVersion%5B2018081%5D%26call%3Durl%5Bfile%3A%2Fproduct%2Fmain%5D" alt="Fabric Swatch image of Stories  in orange"/>
                              Camel</li>
                        </ul>
                     <ul class="bottom-option">
                        <li>Cancel</li>
                     </ul>
                  </li>
               </ul>
               <span class="error-msg"></span>
            </div>
            <div id="sizesDropdown" data-component="MDropdown" class="m-dropdown size-dropdown pdp-dropdown is-one-option">
\t\t\t\t  <button type="button" class="a-button-nostyle placeholder"><span id="oneSizeSpan">NOSIZE</span></button>
                     <button type="button" class="a-icon-close a-button-nostyle"></button><input id="selectSize" name="selectSize" class="js-input"><span class="a-icon-arrow-down-small"></span>
                     <ul class="list-wrapper">
                        <li>
                           <ul class="options"></ul>
                           <ul class="bottom-option">
                              <li>Cancel</li>
                           </ul>
                        </li>
                     </ul>
                     <span class="error-msg"></span>
                  </div>
                  <button type="" class="a-button is-primary add-to-bag" data-out-of-stock='OUT OF STOCK' data-coming-soon='COMING SOON' data-discontinued='SOLD OUT'><span>Add to bag</span></button><span class="size-error-message">Please select an available size</span>
                     </form>
   <div class="info-section">
      <div class="free-shipping">
         <p class="a-paragraph free-text" data-content="localizedTTT"></p>
      </div>
      <div id="product-description" class="free-text"></div>
      <div class="size-guide">
         <a href="#" target="_self" class="a-link open-lightbox size-guide-link" data-template="size-guide-template" data-classes="is-large">Size Guide</a>
      </div>
      <div data-component="OAccordion" class="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="product-details">
         <div class="accordion-header">
            <a href="#" target="_self" class="a-link a-link accordion-title js-accordion-toggle no-styling">
               <h3 class="a-heading-3">DETAILS</h3>
            </a>
         </div>
         <div class="accordion-content free-text">
            <div class="accordion-inner-content">
               <p class="a-paragraph free-text">
                  <p class="a-paragraph">
                        <span id="articleCompositions">
                           <span> Shell: Calf Leather 100%</span>
                           <span> Lining: Cotton 100%</span>
                           </span>
                     </p>
                  </p>
               <p class="a-paragraph free-text">Product No. <span id="product-number">0675990002</span></p>
               </div>
         </div>
      </div>
      <div data-component="OAccordion" class="o-accordion is-visible" data-exclusive="data-exclusive" data-exclusive-group="product-details">
         <div class="accordion-header">
            <a href="#" target="_self" class="a-link a-link accordion-title js-accordion-toggle no-styling">
               <h3 class="a-heading-3">SHIPPING & PAYMENT</h3>
            </a>
         </div>
         <div class="accordion-content">
            <div class="accordion-inner-content">
               <p class="a-paragraph free-text">
                  <span data-content="localized"></span>
                  <a href="#" target="_self" class="a-link delivery-policies-link open-lightbox" data-template="privacy-policy-template" data-classes="is-large" data-container=".o-customer-service" onclick="deliveryPoliciesClick(this, '/en_eur/customer-service/contact.html')">Customer service</a>
\t               </p>
               <div>
\t<script type="text/x-handlebars-template" id="privacy-policy-template">
\t\t<h1 style="text-align: center;">Contact us</h1>
 <p style="text-align: center;">
  <img
    src="/content/dam/Stories/Images/201909/campaigns/1913-101/IM_19_13_021.jpg" width="50%" /></p>
 <p>Whether you have a question about your order or would like some
  style tips, we’re happy to help. You can reach our customer service
  team at the numbers and email address below. We look forward to
  hearing from you!</p>
 <p>We please ask you to contact customer service using the same email
  address that is registered to your &amp; Other Stories account so we
  can help you as efficiently and quickly as possible.</p>

\t</script>
</div>

</div>
         </div>
      </div>
      <div data-component="OAccordion" class="o-accordion" data-exclusive="true" data-exclusive-group="product-details">
         <div class="accordion-header">
            <a href="#" target="_self" class="a-link a-link accordion-title js-accordion-toggle no-styling">
               <h3 class="a-heading-3">SHARE</h3>
            </a>
         </div>
         <div class="accordion-content u-clearfix">
             <div class="accordion-inner-content">
                 <div class="share parbase"><div id="share" class="o-share u-clearfix">
    <div id="fb-root"></div>
    \t<script>!function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk');</script>

        <div data-href="https://www.stories.com/content/stories/en_eur/productpage.0675990002.html" data-layout="button" class="fb-share-button share-button" data-build-url="facebook"></div>


    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
    <div class="share-button">
         <a href="https://twitter.com/home=" class="twitter-share-button" data-build-url="twitter">
            Tweet
        </a>
    </div>
    <script src="//assets.pinterest.com/js/pinit.js" async=""></script>
    <div class="share-button">
        <a data-pin-do="buttonPin" href="https://www.pinterest.com/pin/create/button/" data-build-url="pinterest">
            <img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png" alt="Pinterest share">
        </a>
    </div>
    <div class="share-button" id="googleplus">
\t\t<script src="https://apis.google.com/js/platform.js" async="async" defer="defer"></script>
\t    <div class="share-button">
\t    \t<div data-action="share" data-annotation="none" class="g-plus"></div>
\t    </div>
    </div>
\t<div class="share-button" id="tumblr">
\t    <script async="async" src="https://assets.tumblr.com/share-button.js" id="tumblr-js"></script>
\t    <div class="share-button">
\t    \t<a href="http://tumblr.com/widgets/share/tool" class="tumblr-share-button" data-build-url="tumblr"></a>
\t    </div>
\t</div>
\t<script>
\t\t$("[data-build-url]").each(function(index, item){
\t\t\tlet url = '';
      \tif($(item).data('build-url') == 'facebook'){
\t\t\t\t$(item).attr('data-href', window.location.href);
\t\t\t}
      \telse if($(item).data('build-url') == 'twitter'){
\t\t\t\turl = '?status=' + window.location.href + '&url=' + window.location.href;
\t\t\t\t$(item).attr('href',$(item).attr('href')+url);
\t\t    }
      \telse if($(item).data('build-url') == 'pinterest'){
\t\t    \turl = '?url=' + window.location.href;
\t\t    \t$(item).attr('href',$(item).attr('href')+url);
\t\t    }
      \telse if($(item).data('build-url') == 'tumblr'){
\t\t    \turl = '?canonicalUrl=' + window.location.href;
\t\t    \t$(item).attr('href',$(item).attr('href')+url);\t\t    }\t\t
\t\t
\t\t});
\t\t
\t\tfunction updateShareButton(){
\t\t\t$("[data-build-url]").each(function(index, item){
\t\t\t\tlet url = '';
\t\t\t\tif($(item).data('build-url') == 'facebook'){
\t\t\t\t\t$(item).attr('data-href', window.location.href);
\t\t\t\t}
                        else if($(item).data('build-url') == 'twitter'){
\t\t\t\t\turl = '?status=' + window.location.href + '&url=' + window.location.href;
                                    $(item).attr('href','https://twitter.com/home='+url);
                }
                        else if($(item).data('build-url') == 'pinterest'){
                     url = '?url=' + window.location.href;
                                    $(item).attr('href','https://www.pinterest.com/pin/create/button/'+url);
\t\t\t    }
                         else if($(item).data('build-url') == 'tumbler'){
\t\t\t    \turl = '?url=' + window.location.href;
                                    $(item).attr('href','http://tumblr.com/widgets/share/tool'+url);
\t\t\t    }
\t\t\t});
\t\t}
\t</script>

</div>

</div>
</div>
         </div>
      </div>
   </div>
</div>
<script type="text/x-handlebars-template" id="size-guide-template">
\t<div class="o-sizeguide">
\t\t </div>
</script>


</div>\t\t\t
\t\t\t<div class="u-cols-sm-8-8 u-cols-md-12-12 u-cols-lg-18-24">
\t\t\t\t<div class="stylewith parbase"></div>
<!-- STORIES PRA 1 -->
\t\t<div data-component="OSlider" data-slides-desktop="3" data-slides-tablet="3" data-slides-mobile="2" class="o-slider o-pra-component carousel" data-ng-app="praAppModule" data-ng-controller="PRAController as cartPRACtrl" data-ng-init="cartPRACtrl.initCartContext('en_eur','product-detail-page')" data-ng-cloak>
\t\t\t<span class="nodeName" hidden>product</span>
    \t\t<span class="propTitle" hidden>{{cartPRACtrl.pra1Panel.name}}</span>
\t\t\t<div class="a-heading-2 slider-title u-align-center">{{cartPRACtrl.pra1Panel.name}}</div>
    \t\t<div class="slider" id="praSlider">
    \t\t\t<div class="o-product" reload-slider-on-update data-ng-repeat="product in cartPRACtrl.pra1Panel.products" onclick="trackProductClick(this,'.o-product')" data-ng-click="cartPRACtrl.notifyClick($event, product.variantData[0].ticket,product.variantData[0].varticleCode,'PRA1')">
\t\t\t\t\t<a data-ng-href="{{cartPRACtrl.transformLinkToCurrentContextPath(product.variantData[0].vlinkPdp)}}" target="_self" class="a-link full-area-link"></a>
\t\t\t\t\t\t<div class="product-image">
\t\t\t\t\t\t\t<div class="m-product-image">
\t\t\t\t\t\t\t\t<img class="a-image" data-ng-src="{{product.variantData[0].vstillLifeImage}}" alt=""/>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="description">
\t\t\t\t\t\t   <div class="product-title">
\t\t\t\t\t\t\t<p class="a-paragraph">
\t\t\t\t\t\t\t\t{{product.productName}}
\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div data-ng-if="product.productMarkerText" data-component="MProductMarkers" class="m-product-marker" style="{{product.productMarkerStyle}}">
                               <div class="marker-text product-markers"><span>{{product.productMarkerText}}</span></div>
                            </div>
\t\t\t\t\t\t\t<div class="product-colours" data-ng-switch="product.scentProduct">
\t\t\t\t\t\t\t\t  <span data-ng-switch-when="true">
\t\t\t\t\t\t\t\t  \t<span data-ng-switch="product.variantData.length > 1">\t\t\t\t\t\t\t\t  \t
\t\t\t\t\t\t\t\t  \t\t<span data-ng-switch-when="true">
\t\t\t\t\t\t\t\t\t  \t\tScents  ({{product.variantData.length}})
\t\t\t\t\t\t\t\t\t  \t  </span>\t\t\t\t\t\t\t  \t\t
\t\t\t\t\t\t\t\t\t  \t  <span data-ng-switch-default>
\t\t\t\t\t\t\t\t\t  \t\t -
\t\t\t\t\t\t\t\t\t  \t  </span>\t\t\t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t
\t\t\t\t\t\t\t\t  \t  </span>
\t\t\t\t\t\t\t\t  </span>
\t\t\t\t\t\t\t      <span data-ng-switch-default>
\t\t\t\t\t\t\t      \t<span data-ng-switch="product.variantData.length > 1">\t\t\t\t\t\t\t\t  \t
\t\t\t\t\t\t\t\t  \t\t<span data-ng-switch-when="true">
\t\t\t\t\t\t\t\t\t  \t\tColours  ({{product.variantData.length}})
\t\t\t\t\t\t\t\t\t  \t  </span>\t\t\t\t\t\t\t  \t\t
\t\t\t\t\t\t\t\t\t  \t  <span data-ng-switch-default>
\t\t\t\t\t\t\t\t\t  \t\t -
\t\t\t\t\t\t\t\t\t  \t  </span>\t\t\t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t
\t\t\t\t\t\t\t\t  \t  </span>
\t\t\t\t\t\t\t\t  </span>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class="m-product-price">
\t\t\t\t\t\t\t    <span data-ng-show="product.variantData[0].vformattedOldPrice" class="is-deprecated">{{product.variantData[0].vformattedOldPrice}}</span>
\t\t                        <span data-ng-show="product.variantData[0].vformattedOldPrice" class="is-reduced">{{product.variantData[0].vformattedPrice}}</span>
\t\t                        <span data-ng-hide="product.variantData[0].vformattedOldPrice" class="is-regular">{{product.variantData[0].vformattedPrice}}</span>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class="product-promo-marker marker-text" style="{{product.promotionMarkerStyle}}">
\t\t\t\t\t\t\t\t<span>{{product.promotionMarkerText}}</span>\t\t\t
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<!-- STORIES PRA 1 DETAILS -->
\t\t\t\t\t\t\t<div class="producttile-details" hidden>
\t\t                        <span class="articleCode">{{product.variantData[0].varticleCode}}</span>
\t\t                        <span class="baseProductCode">{{product.productKey}}</span>
\t\t                        <span class="productName">{{product.variantData[0].varticleName}}</span>
\t\t                        <span class="productCategory">{{product.mainCategory}}</span>
\t\t                        <span class="currencyCode"></span>
\t\t                        <span class="price">{{product.variantData[0].vformattedPrice}}</span>
\t\t                        <span data-ng-if="product.variantData[0].vformattedOldPrice" class="originalPrice">{{product.variantData[0].vformattedOldPrice}}</span>
\t\t                        <span data-ng-if="!product.variantData[0].vformattedOldPrice" class="originalPrice">{{product.variantData[0].vformattedPrice}}</span>
                       \t\t\t<span class="brandName">{{product.variantData[0].vbrandName}}</span>
\t\t\t\t\t\t\t\t<span class="colorLoc">{{product.variantData[0].vcolorLoc}}</span>
\t\t\t\t\t\t\t\t<span class="atelierName">{{product.variantData[0].vatelierName}}</span>
\t\t\t\t\t\t\t\t<span class="originCountry">{{product.variantData[0].voriginCountry}}</span>
                        </div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
</div>
\t\t\t<div class="u-cols-sm-8-8 u-cols-md-12-12 u-cols-lg-18-24 u-no-padding">
               <div data-component="OOlapicgallery" class="o-olapic-gallery on-page has-4" data-count="4" data-api-key="a946307bb26d7395a92921f2a0f8b732a954e517c3da2c9902cc256afff4a9ee" data-product-id="0675990002" data-media-type="recent" data-template="olapic-image">
\t<div class="content">
\t\t<div class="olapic-text-container">
\t\t\t<h2 class="a-heading-2">Me & Other Stories</h2>
\t\t\t<p class="a-paragraph">We love when you inspire us with your personal style stories! Share your wardrobe treasures from & Other Stories on Instagram, mention @andotherstories in your caption, tag @andotherstories in your post or use hashtag #andotherstories to have a chance of being featured on stories.com.
<br><br>
<a href="https://www.stories.com/en/about/me-and-other-stories.html" style="color:black; border-bottom: 1px solid black;">Visit the full gallery here.</a></p>
\t\t\t<p class="a-paragraph is-richtext"></p>
\t\t</div>
       \t<div class="promotion-data stories-olapic-gallery" hidden>
           \t\t<span class="promo_id">olapic-product-gallery</span>
           \t\t<span class="promo_name">olapic-product-gallery</span>
           \t\t<span class="promo_creative">olapic-product-gallery</span>
           \t</div>
        <div class="js-placeholder u-clearfix">
\t\t\t<div class="olapic-item-container"></div>
\t\t</div>
\t\t<div class="button-container">
\t\t\t<a href="#" target="_self" class="a-link has-underline"></a>
\t\t</div>
\t</div>
</div>

<script type="text/x-handlebars-template" id="olapic-image">
<div class="o-olapic-image" data-template="olapic-gallery">
<div class="overlay" onclick="trackOlapicOverlay(this,'.content')">
</div><div class="m-instagram-user u-clearfix"><img class="a-image" alt="user avatar"><span></span></div></div>
</script>

<script type="text/x-handlebars-template" id="olapic-gallery"><div data-component="OOlapicStyleSlider" class="o-olapic-slider" data-template="olapic-slide"></div></script>

<script type="text/x-handlebars-template" id="olapic-style-slide">{{#each media}}<div class="o-olapic-slide" data-component="OOlapicStyleSlide">
\t<div class="olapic-big-image"><img class="a-image" src="{{images.normal}}"></div><div class="olapic-info"><div class="m-instagram-user big u-clearfix">
\t<a href="https://instagram.com/{{uploader.username}}" target="_blank" class="a-link no-styling"><img class="a-image" src="{{uploader.avatar_url}}" alt="user avatar"></a>
\t<div class="user-info"><a href="https://instagram.com/{{uploader.username}}" target="_blank" class="a-link">{{uploader.username}}</a><span>{{uploader.name}}</span>
\t</div></div>
\t<div class="olapic-slider">{{#each stream }}<div class="slide">
\t<div class="o-product"><a href="{{product_url}}" target="_self" class="a-link"><div class="product-image">
\t<img class="a-image" src="{{baseimage.base_image.images.normal}}"></div><div class="description">
\t<h3 class="a-heading-3 product-title">{{name}}</h3><div class="product-colours">Colours ({{product_info.color}})</div>
\t<div class="m-product-price"><span class="is-regular">{{product_info.price}}</span></div></div></a></div>
\t<a class="a-button is-primary" href="{{product_url}}">SHOP NOW</a></div>{{/each}}</div><div class="olapic-icon"></div>
\t<div class="olapic-share"><div class="o-share-custom">
\t<a href="https://www.facebook.com/sharer/sharer.php?s=100&amp;u={{product_url}}" target="_blank" class="a-link">
\t<span class="a-icon-social-facebook"></span></a>
\t<a href="http://pinterest.com/pin/create/button/?url={{product_url}}&amp;media=p[images][0]"
\ttarget="_blank" class="a-link"><span class="a-icon-social-pinterest"></span></a>
\t<a href="https://twitter.com/home?status={{product_url}}" target="_blank" class="a-link">
\t<span class="a-icon-social-twitter"></span></a>
\t<a href="http://www.tumblr.com/share?v=3&amp;u={{product_url}}&amp;t=[TITLE]" target="_blank" class="a-link">
\t<span class="a-icon-social-tumblr"></span></a>
\t<a href="https://plus.google.com/share?url={{product_url}}" target="_blank" class="a-link">
\t<span class="a-icon-social-google-plus"></span></a></div></div></div></div>{{/each}}
</script></div>
\t\t</div>
\t<script type="text/javascript">
\tfunction loadSwatchSize() {
\t\tif ('0675990002' !== '') {
\t\t\tvar variantList = [];
\t\t\tvar variantCodes = storiesApp.productDetails.getAllProductVariantCodes();
\t\t\t$(variantCodes).each(function(index,value){
\t\t\t\tvariantList.push(value);
\t\t\t});
\t\t\tstoriesApp.productDetails.getAvailability( variantList, 'en_eur', action);
\t\t}
\t}
\t
\tfunction action(data){
\t\tvar variantCodes = storiesApp.productDetails.getAllProductVariantCodes();
\t\tstoriesApp.productDetails.initVariantMap();
\t\t$.each(data, function(index, variantCode) {
\t\t\tstoriesApp.productDetails.variantAvailabilityMap[variantCode] = true;
\t\t});
\t\tstoriesApp.productDetails.updateSizesAvailability();
\t\t
\t\tvar articleSelected = $('#swatchDropdown').data('selected');
\t\tif($('#swatch_'+articleSelected).hasClass('is-sold-out')) {
\t\t    $('#swatchDropdown .placeholder').addClass('is-sold-out');
\t\t}else if($('#swatch_'+articleSelected).hasClass('is-coming-soon')) {
            $('#swatchDropdown .placeholder').addClass('is-coming-soon');
\t\t}
\t\tif($('#swatchDropdown .list-wrapper li ul.options li.is-coming-soon').length){
\t\t\tvar $remCs=$('#swatchDropdown .list-wrapper li ul.options li.is-coming-soon').detach();
\t\t\t$('#swatchDropdown .list-wrapper li ul.options').append($remCs);
\t\t\t}

\t\t\tif ($('#swatchDropdown .list-wrapper li ul.options li.is-sold-out:not(.is-coming-soon):not(.is-discontinued)').length) {
\t\t\tvar $remSo=$('#swatchDropdown .list-wrapper li ul.options li.is-sold-out:not(.is-coming-soon):not(.is-discontinued)').detach();
\t\t\t$('#swatchDropdown .list-wrapper li ul.options').append($remSo);
\t\t\t}

\t\t\tif($('#swatchDropdown .list-wrapper li ul.options li.is-discontinued').length) {
\t\t\tvar $remUn=$('#swatchDropdown .list-wrapper li ul.options li.is-discontinued').detach();
\t\t\t$('#swatchDropdown .list-wrapper li ul.options').append($remUn);
\t\t\t}
\t}
\t
\tfunction deliveryPoliciesClick(caller, url){
\t\tvar container = $(caller).data('container');
\t\tstoriesApp.shared.utils.ajaxInjectLightbox(url, container);
\t}

</script><script type="text/javascript">
    if(document.cookie.indexOf("productId=") > -1){
\t\tdocument.cookie = 'comingFromPdp='+window.location.href+'; path=/';
    }
</script></div>
\t
\t    <div class="u-clearfix"></div>
\t    <!-- Footer -->
\t\t<style>
\t.lightboxPaddig{
\t\tpadding:30px;
\t}
</style>

<script>
\t$(document).ready(function(){
\t\tappeaser.subscribe(appeaser.Enums.listen.ON_LIGHTBOX_LEVEL_CHANGED, function(){
\t        if(this.contextEl && this.contextEl.activeElement){
\t            if ($(this.contextEl.activeElement).attr('data-template') == 'privacyPolicy') {
\t            \t$('div.u-align-to-logo[data-container]').removeAttr('class');
\t        \t}
\t        }
\t\t});
\t});
</script>

<footer data-component="OFooter" class="o-footer u-clearfix">
\t<div class="border-line"></div>
\t<div class="contain">
\t\t<div class="o-follow-us">
\t\t\t<a href="https://www.facebook.com/andotherstories" target="_blank" class="a-link"><span class="a-icon-social-facebook"></span></a><a href="https://www.pinterest.com/andotherstories" target="_blank" class="a-link"><span class="a-icon-social-pinterest"></span></a><a href="https://instagram.com/andotherstories#" target="_blank" class="a-link"><span class="a-icon-social-instagram"></span></a><a href="https://www.youtube.com/user/andotherstories" target="_blank" class="a-link"><span class="a-icon-social-youtube"></span></a></div>
\t\t<div class="sign-up-info">
\t\t\t<p class="a-paragraph">Join our newsletter and get a 10% off treat.</p>
\t\t\t<a href="#" target="_self" class="a-link open-lightbox sign-up" data-template="newsletter-signup" data-classes="is-medium no-centering">Sign up now</a>
\t\t</div>

\t\t<div class="o-footer-menu u-clearfix"><div class="footer-menu-list">
\t\t\t\t\t<div class="nav1 navgroup parbase"><h2 class="a-heading-2">
\t
\t\t<a href="/en_eur/about/about-us.html" target="_self" class="a-link">About</a>
\t
</h2>
<div class="o-list js-o-list">
\t<ul>
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/about/about-us.html" target="_self" class="a-link">About us</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/about/me-and-other-stories.html" target="_self" class="a-link">Me &amp; Other Stories</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/about/co-labs.html" target="_self" class="a-link">Co-labs</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/about/values-sustainability.html" target="_self" class="a-link">Values &amp; Sustainability</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/customer-service/payment-options.html" target="_self" class="a-link">Student discount</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t</ul>
</div>

</div>
</div><div class="footer-menu-list">
\t\t\t\t\t<div class="nav2 navgroup parbase"><h2 class="a-heading-2">
\t
\t\t<a href="/en_eur/customer-service.html" target="_self" class="a-link">Help</a>
\t
</h2>
<div class="o-list js-o-list">
\t<ul>
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/customer-service/size-guide.html" target="_self" class="a-link">Size guide</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/customer-service/product-care.html" target="_self" class="a-link">Product care</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/customer-service/recycling.html" target="_self" class="a-link">Recycling</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/customer-service/delivery-methods.html" target="_self" class="a-link">Delivery</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/customer-service/payment-options.html" target="_self" class="a-link">Payment</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/customer-service/return-and-refund-policy.html" target="_self" class="a-link">Return &amp; refund</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/customer-service/privacy-notice.html" target="_self" class="a-link">Privacy notice</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t</ul>
</div>

</div>
</div><div class="footer-menu-list">
\t\t\t\t\t<div class="nav3 navgroup parbase"><h2 class="a-heading-2">
\t
\t\t<a href="#" target="_self" class="a-link"></a>Contact
\t
</h2>
<div class="o-list js-o-list">
\t<ul>
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/customer-service/contact.html" target="_self" class="a-link">Contact us</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/customer-service/career.html" target="_self" class="a-link">Career</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t    \t<a href="http://press.stories.com/" target="_blank" class="a-link">Press</a>
\t\t
\t\t
\t\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/customer-service/affiliates.html" target="_self" class="a-link">Affiliates</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t
\t   <li>
\t\t\t
\t\t\t
\t\t\t
\t\t
\t\t
\t\t\t
\t\t\t\t
\t\t\t\t\t<a href="/en_eur/storelocator.html" target="_self" class="a-link">Store locator</a>
\t\t\t\t
\t\t
\t\t
\t   </li>
\t</ul>
</div>

</div>
</div>
\t\t\t</div>

\t\t<p class="a-paragraph is-richtext brand-info">
\t\t\t&amp; Other Stories is a one-stop styling destination filled with collections from three design ateliers in Paris, Stockholm and Los Angeles.<br>
<br>
© &amp; Other Stories<br> <br></p>
\t</div>
\t<script type="text/javascript" src="/etc/designs/appeaser/shared/clientlibs/components.min.js"></script>
<script type="text/x-handlebars-template" id="newsletter-signup">
    \t\t<div data-component="ONewsletterSignUp" data-expires="30" class="o-newsletter-signup">
        \t\t<div class="newsletter_bdc3 newsletter parbase"><form data-component="OForm" class="o-form" id="newsletterSubscribeForm" action="javascript:subscribeNewsLetterWithPopup('/en_eur/fashionNews/subscribe', '/en_eur/subscribeconfirmation.html')" onsubmit='TealiumUtils.trackErrorMessage(this,"newsletter")'>
    <input type="hidden"  id="enablePersonal" value="true" name="enablePersonal">
    <h2 class="a-heading-2">Sign up and get 10% off</h2>
    <p class="a-paragraph detail-text">Keep up with our latest news and world of wardrobe treasures and receive
10% off one purchase.<br />
       <br />
       With love from our ateliers in Paris, Los Angeles and Stockholm.</p>
    <div class="m-error js-m-error is-hidden">
        <span class="has-error"></span>
    </div>
    <div data-component="MInput" class="m-input email">
        <label class="a-label js-a-label" for="txt-email"></label>
        <input id="txt-email" class="a-input js-a-input" type="email" required="required" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" data-validation-required-text="Please enter email address" data-validation-pattern-text="Please enter a valid email address" />
        <label class="a-label js-a-label" data-placeholder="Your email" for="txt-email">Email</label>
    </div>
    <div class="m-checkbox u-clearfix m-checkbox-age" id="age">
        <input type="checkbox" class="a-checkbox" id="connected_age" required="required" data-validation-required-text="" />
        <label class="a-label js-a-label custom-box" for="connected_age"></label>
        <label class="a-label js-a-label" for="connected_age">
        <label id="newsLetter-SignUpMessage"></label>
        <a href="/en_eur/customer-service/privacy-notice/direct-marketing.html" target="_blank" id="privacylightbox" class="a-link open-in-lightbox has-underline" data-template="privacyPolicy" data-classes="lightboxPaddig is-flexible"> privacy notice</a>.</label>

    </div>
    <p class="a-paragraph subscribe-agree">By clicking “subscribe”, I agree that my information can be used for marketing segmentation.</p>
    <button type="submit" class="a-button is-primary">
        <span>Subscribe</span>
    </button>

</form>

<script>

 $(document).ready(function(){
        if($(".o-lightbox ").find(".o-newsletter-signup").length > 0){
 \t\t$('#privacylightbox').removeClass('open-lightbox');
\t\t}
       });
\tfunction privacy() {\t
\t\tvar url = '/en_eur/customer-service/privacy-notice/direct-marketing.html';

\t\t$.ajax({
\t\t\t"url" : url,
\t\t\t"success" : function(data) {

\t\t\t\tdata = $(data).find('.parsys');
\t\t\t\t$('.lightbox-content').html(data);
\t\t\t\tappeaser.publish(appeaser.Enums.trigger.SHOW_LIGHTBOX, {
\t\t\t\t\t'template' : 'refundPolicy',
\t\t\t\t\t'classes' : 'customerservice'

\t\t\t\t});
\t\t\t}

\t\t});
\t}
\t
\tvar localizedMessage;
\t$.getJSON("/sling/servlet/default.newsletterpropertiesreader.stories."+getLang()+"."+getCountryCode()+".json",  function(data) {
\t\tlocalizedMessage= data.properties[0].localized;
\t\t$( "#newsLetter-SignUpMessage" ).text( localizedMessage );
\t});
\t
\t/*
\t\tThe timeout is for tracking the newsletter lightbox on pageload.
\t\tGiving some time for needed Tealium resources to load.
\t*/
\t\tsetTimeout(function(){
\t\t\tif($('#newsletterSubscribeForm').parents('.o-lightbox').length){
\t\t\t\tTealiumUtils.trackFunnelLocation('newsletter_signup_start', 'lightbox');
\t\t\t}
\t\t}, 1000);

</script></div>
</div>
\t\t</script>
</footer>
<script type="text/x-handlebars-template" id="privacyPolicy">
\t<div class="content-section">
\t<div class="o-customer-service">
\t\t<div class="customerservicepar parsys"><div class="text parbase section"><span class="richTextSpan">
\t<div class="richtextWrapper is-richtext">
\t    <h1 style="text-align: center;">Privacy Notice Direct Marketing</h1>
 <p>
  <b>Why do we use your personal data?</b></p>
 <p> </p>
 <p>We will use your personal data to send you marketing offers,
  information surveys and invitations through e-mails, text messages,
  phone calls and postal mail.</p>
 <p> </p>
 <p>In order to optimize your experience of &amp; Other Stories we will
  provide you with relevant information, recommend products, send you
  reminders of products left in your shopping bag and send you
  personalized offers. All these great services are based on your
  previous purchases, what you have clicked on and information you have
  submitted to us.</p>
 <p> </p>
 <p>
  <b>What types of personal data do we process?</b></p>
 <p> </p>
 <p>We will process following categories of personal data </p>
 <p>* Contact information such as e-mail address, telephone number and
  postal code</p>
 <p>* If you want updates for kids (if you choose to provide that to us)</p>
 <p>* Gender (if you choose to provide that to us)</p>
 <p>* What products and offers you have clicked on</p>
 <p> </p>
 <p>If you have a &amp; Other Stories account we will also process your
  personal data submitted in relation to the account and membership such as </p>
 <p>* Name </p>
 <p>* Address </p>
 <p>* Age</p>
 <p>* Shopping history </p>
 <p>* How you navigated and clicked on the site</p>
 <p> </p>
 <p>
  <b>Who has access to your personal data?</b></p>
 <p> </p>
 <p>Data that is forwarded to third parties is only used to provide you
  with the service mentioned above, to media agencies and technical
  suppliers for distribution of physical and digital direct marketing. </p>
 <p> </p>
 <p>We never pass on, sell or swap your data for marketing purposes to
  third parties outside the H&amp;M group. </p>
 <p> </p>
 <p>
  <b>What is the legal ground to process your personal data?</b></p>
 <p> </p>
 <p>The processing of your personal data is based on your consent when
  you agree to direct marketing. Except for postal marketing, including
  catalogues, that will be sent to you based on our legitimate interest.</p>
 <p> </p>
 <p>Your right to withdraw your consent:</p>
 <p>You have the right to withdraw your consent for the processing of
  your personal data at any time and object to direct marketing. When
  you do so &amp; Other Stories won't be able to send you any further
  direct marketing offers or information based on your consent.</p>
 <p> </p>
 <p>You can opt out from direct marketing by the following means:</p>
 <p>* Following the instruction in each marketing post</p>
 <p>* By editing the settings of your &amp; Other Stories account</p>
 <p> </p>
 <p>
  <b>How long do we save your data?</b></p>
 <p> </p>
 <p>We will keep your data for direct marketing until you withdraw your
  consent.  For e-mail marketing we will consider you an inactive
  customer if you haven't opened an e-mail for within the last year.
  After this time period your personal data will be deleted.</p>
 <p> </p>
 <p>Read our <a
    href="/content/stories/en_eur/customer-service/privacy-notice.html"
    class="underline overlay-trigger" target="_blank">privacy notice</a>.</p>

\t</div>
</span></div>
</div>
</div>\t\t
</div><script>
\t    // Adding missing classes to elements that are present on the privacy policy page but not in the lightbox
        $('.richtextWrapper:not(:has(p))').wrapInner("<p></p>");
        $('.richTextSpan').find('h1').addClass('a-heading-1 customer-service-heading');
        $('.richTextSpan').find('h2').addClass('a-heading-2 customer-service-heading');
        $('.richTextSpan').find('h3').addClass('a-heading-3 customer-service-heading');
        $('.richTextSpan').find('a').removeClass().addClass('a-link');
        $('.richTextSpan').find('p').addClass('a-paragraph');
        $('.accordion-inner-content').find('p').addClass('a-paragraph');
        // The {{!}} must be included so the script can run inside the handlebars script
    <{{!}}/script>
</script><!-- /Footer -->
<!--[if lt IE 9]>
<link rel="stylesheet" href="/etc/designs/hm/clientlibs/desktop/ie8.min.css" type="text/css">
<script type="text/javascript" src="/etc/designs/hm/clientlibs/desktop/ie8.min.js"></script>
<![endif]-->
<!--[if gte IE 9]><!-->
<!--<![endif]-->
<script type="text/javascript" src="/etc/designs/hm/clientlibs/desktop.min.js"></script>
<script>
storiesApp.shared.variables.addToCartServiceUrl = '/en_eur/cart/add';
loadSizesByCodeOnReady('0675990002');
if ('com.hm.appeaser.aem.integration.product.AppProduct@7f9336c8' !== '') {
\tloadSwatchSize(storiesApp.productDetails.selectedArticle);
}else if(false){
\tloadSwatchSize(storiesApp.productDetails.selectedArticle);
}


storiesApp.init();


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
\tvar areaAttr = "osa_area_0675990002";
\tvar osaArea = "";
\tif(sessionStorage){
\t\tosaArea = sessionStorage.getItem(areaAttr);
\t\tsessionStorage.removeItem(areaAttr);
\t}else if(localStorage){
\t\tosaArea = localStorage.getItem(areaAttr);
\t\tlocalStorage.removeItem(areaAttr);
\t}
\tif(osaArea == null){
\t\tosaArea = "";
\t}
\treturn osaArea;
}
function getOsaType(){
\tvar typeAttr = "osa_type_0675990002";
\tvar osaType = "";\t
\tif(sessionStorage){
\t\tosaType = sessionStorage.getItem(typeAttr);
\t\tsessionStorage.removeItem(typeAttr);
\t}else if(localStorage){
\t\tosaType = localStorage.getItem(typeAttr);
\t\tlocalStorage.removeItem(typeAttr);
\t}
\tif(osaType == null){
\t\tosaType = "";
\t}
\treturn osaType;
}
function getVirtualCategory(){
\tvar vcAttr = "vc_0675990002";
\tvar virtualCategory = "";\t
\tif(sessionStorage){
\t\tvirtualCategory = sessionStorage.getItem(vcAttr);
\t\tsessionStorage.removeItem(vcAttr);
\t}else if(localStorage){
\t\tvirtualCategory = localStorage.getItem(vcAttr);
\t\tlocalStorage.removeItem(vcAttr);
\t}
\tif(virtualCategory == null){
\t\tvirtualCategory = "";
\t}
\treturn virtualCategory;
}
</script>
<script src="/etc/designs/appeaser/stories/clientlibs/pattern-lib/frontend.min.js"></script>
\t\t<script src="/etc/designs/appeaser/stories/clientlibs/pattern-lib/controllers.min.js"></script>\t\t
\t<script>
var trackAddProduct = function(productColor, productSizeCode) {
\t  /*Fix for defect 10148: Added productColor and productSizeCode as parameters to the trackAddToCart*/
\t  /*var color = this.getSelectedColor();*/
\t
\t  var color = productColor;
\t  if(typeof(trackShopAction5) == 'function') {
\t    trackShopAction5(color, this.getSelectedSize(), productArticleDetails[color].priceValue, productArticleDetails[color].priceSaleValue, this.isCartStarter ? 'YES' : 'NO');
\t  }
\t  if(typeof(trackGoogleAnalyticsAddItem) == 'function') {
\t    trackGoogleAnalyticsAddItem(productArticleDetails[color].priceValue, productArticleDetails[color].priceSaleValue);
\t  }
\t  if(typeof(trackAddToCart) == 'function') {
\t    trackAddToCart(color, productSizeCode, productArticleDetails);
\t  }
\t  if(!hm.cookies.readCookie('cartStarted')) {
\t    hm.cookies.createCookie('cartStarted', true);
\t  }
\t};

// \tvar _sliderStatus = {};
\t
\t$(window).on("load", function (e) {
//
// \t\t\t$('.slick-slider .a-image').each(function(){
// \t\t\t\t$(this).load(function(e){
// \t\t\t\t\tvar src = e.currentTarget.src;
// \t\t\t\t\tif(!src || !_sliderStatus[src]){
//
// \t\t\t\t\t\tappeaser.publish(appeaser.Enums.trigger.RE_INITIALIZE_SLIDER,$('.slick-slider'));
// \t\t\t\t\t\t_sliderStatus[src]='loaded';
// \t\t\t\t\t}
// \t\t\t\t});
// \t\t\t});
// // \t\t\t_sliderStatus = 'loaded';\t
// \t\t}
\t\tappeaser.publish(appeaser.Enums.trigger.RE_INITIALIZE_SLIDER,$('.slick-slider'));
\t});
// \t\t$('.slick-slider .a-image').load(function(e){
//
// \t\t\t\tappeaser.publish(appeaser.Enums.trigger.RE_INITIALIZE_SLIDER,$('.slick-slider'));
// \t\t\t});
\t\t\t
\t\t
\t
appeaser.subscribe(appeaser.Enums.trigger.ADD_ITEM_TO_CART,function(formData){
\tstoriesApp.productDetails.defaultAddToCart(formData,function(data, qty, articleCode, productSize,textStatus, xhr){
\t\t// On Success
\t\tvar oneSize = $('#oneSizeSpan');
\t\tif (oneSize && oneSize.length){
\t\t\ttrackAddProduct(articleCode, oneSize.text());
\t\t}
\t\telse {
\t\t\ttrackAddProduct(articleCode, formData.selectSize);
\t\t}\t

        // get the image for the cart popup
\t\tvar cartHtmlFragment = data.cartPopupHtml;
\t\tvar tempElement = $( '<div></div>' );
\t\ttempElement.html(cartHtmlFragment);
\t\tvar cartHtmlFragmentImg = $('.product-detail-item-added-item-image', tempElement);
    \tvar src =  cartHtmlFragmentImg.attr("src");

    \tvar badResponse = data.result === false || typeof data.errorCode !== 'undefined';
        var hasMaxItem = data.errorCode === 'maxVariantNumberReached' ;
    \tvar hasMaxOrderLines = data.errorCode === 'maxOrderLinesReached' ;
    \tvar mCartAddition = $('.m-cart-addition');
    \tvar showPopup = (badResponse && hasMaxItem) || !badResponse;
    \tif(showPopup){
    \t\tif(badResponse){
    \t\t\tif(hasMaxItem && !mCartAddition.hasClass('has-max-items')){
     \t    \t\tmCartAddition.addClass('has-max-items');
    \t\t\t}
    \t\t} else if(!badResponse){
    \t\t\tif(mCartAddition.hasClass('has-max-items')){
 \t    \t\t\tmCartAddition.removeClass('has-max-items');
 \t    \t\t}\t    \t\t\t
    \t\t}
    \t\tappeaser.publish(appeaser.Enums.listen.ON_ITEM_ADDED_TO_CART, src);
\t    \tappeaser.publish(appeaser.Enums.trigger.UPDATE_SHOPPING_BAG_QTY, storiesApp.shared.utils.getCartCount());
    \t}
\t\t//appeaser.publish(appeaser.Enums.listen.ON_ITEM_ADDED_TO_CART, src);
    \t//appeaser.publish(appeaser.Enums.trigger.UPDATE_SHOPPING_BAG_QTY, storiesApp.shared.utils.getCartCount());
    },function(xhr){
    \tconsole.log("Error calling services.");
    });
});
// appeaser.subscribe(appeaser.Enums.listen.ON_ITEM_ADDED_TO_CART,function(){
// \tstoriesApp.shared.utils.updateCartCount();
// });
</script>
<div class="tealiumProductviewtag productview parbase"><script id="tealiumScript">initHMCookies(); initImpression(); utag_data = {product_id : ["0675990002"], product_name : ["Leather Beltbag"], product_view_type : "pdp", product_category : [TealiumUtils.getProductCategory()], product_color: [TealiumUtils.getArticleColor()], product_size : [""], product_origin: [TealiumUtils.getProductOrigin()], product_variant: [TealiumUtils.getProductColorLoc()], product_atelier: [TealiumUtils.getProductAtelier()], product_brand: [TealiumUtils.getBrandNameorExternalBrandName()], product_action : "detail", product_price : [TealiumUtils.getProductPrice()], product_original_price : [TealiumUtils.getProductOriginalPrice()], product_material : [TealiumUtils.getArticleMaterial()], region_currency : TealiumUtils.getRegionCurrency(), customer_id : TealiumUtils.getCustomerData()[0], customer_email : TealiumUtils.getCustomerData()[1], customer_zip : TealiumUtils.getCustomerData()[2], customer_city : TealiumUtils.getCustomerData()[3], customer_state : TealiumUtils.getCustomerData()[4], customer_country : TealiumUtils.getCustomerData()[8], event_type: "", session_touchpoint : getTouchpoint() , session_login_status : TealiumUtils.getSessionLoginStatus(), page_id : "PRODUCT DETAIL : 0675990002 : Leather Beltbag", page_type : "productpage", category_id : "Shoulderbags", category_path : TealiumUtils.getCategoryPath('true','Leather Beltbag'), region_market : hm.multiCountry.getCountryCode('HMCORP_locale'), region_locale : hm.multiCountry.getLocale('HMCORP_locale','en'), content_category: TealiumUtils.getContentCategory(), content_action: TealiumUtils.getContentAction(), content_id: TealiumUtils.getContentId(), content_count: TealiumUtils.getContentCount(), list_action: '', customer_id : TealiumUtils.getCustomerData()[0], customer_email : TealiumUtils.getCustomerData()[1], customer_zip : TealiumUtils.getCustomerData()[2], customer_city : TealiumUtils.getCustomerData()[3], customer_state : TealiumUtils.getCustomerData()[4], customer_country : TealiumUtils.getCustomerData()[8], event_type: ""}; utagTealiumTrack(function(a,b,c,d){a=getTealiumURL('brands-stories');b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);});</script> </div>
<script>
\t$(document).ready(function() {
\t\t
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
</script><script type="text/javascript">var _cf = _cf || []; _cf.push(['_setFsp', true]); _cf.push(['_setBm', true]); _cf.push(['_setAu', '/public/52f975002166dbfceffe9ad931d03']);</script><script type="text/javascript" src="/public/52f975002166dbfceffe9ad931d03"></script></body></html>
`,
};
