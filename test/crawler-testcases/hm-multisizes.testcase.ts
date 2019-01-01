/* tslint:disable */
import { HmCrawler } from '../../src/crawler/crawlers/hm.crawler';

export const hmMultiSizesTestCase = {
  crawlerType: HmCrawler,

  sizes: [
    { id: 'option-variant-59876-E-003', isAvailable: false, name: 'XS' },
    { id: 'option-variant-59876-E-004', isAvailable: false, name: 'S' },
    { id: 'option-variant-59876-E-005', isAvailable: false, name: 'M' },
    { id: 'option-variant-59876-E-006', isAvailable: false, name: 'L' },
    { id: 'option-variant-59876-E-007', isAvailable: true, name: 'XL' },
    { id: 'option-variant-59876-E-008', isAvailable: true, name: 'XXL' },
  ],

  sizeChecks: [
    { size: 'option-variant-59876-E-007', isAvailable: true },
    { size: 'option-variant-59876-E-003', isAvailable: false },
    { size: 'sizedoesnotexist', isAvailable: false },
  ],

  name: 'Rollkragenpullover',

  priceChecks: [
    { size: 'option-variant-59876-E-007', price: 29.99 },
  ],

  testResponse: `<!DOCTYPE html>
<html lang="de" class="no-touch desktop">
    <head>
        <meta name="keywords" content="" />
        <meta name="robots" content="index,follow"/>
        <meta name="description" content="Graumeliert. PREMIUM QUALITÄT. Feinstrickpullover aus Premium Cotton. Modell mit Rollkragen und Rippenbündchen an Ärmelabschlüssen und Saum."/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="H&M Rollkragenpullover 29,99"/>
        <meta property="og:description" content="Graumeliert. PREMIUM QUALITÄT. Feinstrickpullover aus Premium Cotton. Modell mit Rollkragen und Rippenbündchen an Ärmelabschlüssen und Saum."/>
        <meta property="og:site_name" content="H&M"/>
        <meta property="og:image" content="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BL%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"/>
        <script type="text/javascript" src="/dtmonitor/dtagent630_jp_1305.js" data-dtconfig="rid=RID_-686964911|rpid=1279824171|domain=hm.com|tp=500,50,3|doNotInstrument=clk|reportUrl=/dtmonitor/dynaTraceMonitor"></script><link rel="canonical" href="https://www.hm.com/de/product/59876?article=59876-E" />
        <link rel="shortcut icon" type="image/x-icon"
      href="//s1-cdn.hm.com/global/hm-pattern-lib/6.2.20/images/favicon.ico"/>
<noscript>
    <style type="text/css">
        html {
            background: #fff !important;
        }
        body * {
            display: none;
        }

        noscript, .noscript-wrapper, .noscript-wrapper * {
            display: block;
        }

        .outer-vertical-alignment-wrapper {
            display: table !important;
            position: absolute;
            height: 100%;
            width: 100%;
        }

        .middle-vertical-alignment-wrapper {
            display: table-cell !important;;
            vertical-align: middle;
        }

        .inner-vertical-alignment-wrapper {
            margin-left: auto;
            margin-right: auto;
        }

        .noscript-warning {
            width: 489px;
            margin: 0 auto;
        }
        .noscript-warning figure {
            width: 148px;
            margin: 0 auto;
            margin-bottom: 80px;
            /*margin-top: 180px;*/
        }
        .noscript-warning figure img {
            width: 100%;
        }
        .noscript-warning h1 {
            font-size: 20px;
            line-height: 25px;
            text-align: left;
            font-family: 'HMAmpersand-DemiBold', 'HM Ampersand Demi Bold', Arial, sans-serif;
            margin-bottom: 20px;
        }
        .noscript-warning p {
            font-family: 'HMAmpersand-Light', 'HM Ampersand Light', Arial, sans-serif;
            font-size: 14px;
            line-height: 17px;
            padding-bottom: 20px;
        }
        .noscript-warning p.javascript-regards {
            padding-bottom: 0px;
        }
        .noscript-warning p.javascript-signature {
            padding-bottom: 110px;
        }
        .noscript-warning .button {
            font-family: 'HMAmpersand-Bold', 'HM Ampersand Bold', Arial, sans-serif;
            font-size: 13px;
            line-height: 16px;
            text-decoration: initial;
            text-align: center;
            color: #fff;
            background: #000;
            border-radius: 0;
            -webkit-box-shadow: none;
            box-shadow: none;
            border: none;
            padding: 12px 32px;
            margin: 0 auto;
            margin: 0 auto;
            width: 140px;

        }
    </style>
</noscript>

<script type="text/javascript">
    var hm = hm || {};
    hm.translations = hm.translations || {};
    hm.translations.labels = hm.translations.labels || {};


    hm.translations.labels['productdetailpage.shop.is.closed'] ='Der Onlineshop wird zurzeit für Sie aktualisiert. Wir sind bald zurück, versuchen Sie es bitte in Kürze wieder.';

    hm.translations.labels['productdetailpage.selected.stores'] ='Nur in ausgewählten Geschäften erhältlich.';

    hm.translations.labels['warning.product.order.quantity.restriction'] ='Sie haben die höchstmögliche Anzahl des Artikels pro Kunde erreicht.';

    hm.translations.labels['warning.product.offer.quantity.restriction'] ='Dieser Artikel ist auf eine bestimmte Anzahl pro Kunde beschränkt.';

    hm.translations.labels['warning.product.row.quantity.restriction'] ='You\\'ve reached the maximum number of rows in your shopping bag.';

    hm.translations.labels['productdetailpage.sold.out'] ='Der Artikel ist ausverkauft.';

    hm.translations.labels['productdetailpage.soon.available'] ='Der gewählte Artikel ist noch nicht erhältlich. Bitte versuchen Sie es später erneut.';

    hm.translations.labels['productdetailpage.quicklook.label.view.deviation'] ='Wichtige Produktinformationen';

    hm.translations.labels['productdetailpage.select.size'] ='Bitte Größe wählen';

    hm.translations.labels['productdetailpage.price.from'] ='ab';

    hm.translations.labels['label.previous'] ='Vorige Seite';

    hm.translations.labels['label.next'] ='Nächste Seite';

    hm.translations.labels['productdetailpage.quicklook.label.view.deviation'] ='Wichtige Produktinformationen';

    hm.translations.labels['productdetailpage.quicklook.label.view.full.details'] ='Details ansehen';

    hm.translations.labels['label.color'] ='Farbe';

    hm.translations.labels['label.size'] ='Grösse';

    hm.translations.labels['productdetailpage.label.select.size'] ='Größe wählen';

    hm.translations.labels['button.add.to.bag'] ='In die Einkaufstasche';

    hm.translations.labels['button.replace.in.bag'] ='Ersetzen';

    hm.translations.labels['marker.label.conscious'] ='CONSCIOUS';

    hm.translations.labels['marker.label.premiumQuality'] ='PREMIUM QUALITY';

    hm.translations.labels['marker.label.onlineExclusive'] ='Online Exclusive';

    hm.translations.labels['marker.label.newArrival'] ='Neu';

    hm.translations.labels['favorites.remove.error.header.text'] ='Artikel nicht zu den Favoriten hinzugefügt';

    hm.translations.labels['favorites.remove.error.message.text'] ='Sorry , we were unable to remove your item from favorites.<br\\/><br\\/>Please try again later.';

    hm.translations.labels['favorites.add.error.header.text'] ='Artikel nicht zu den Favoriten hinzugefügt';

    hm.translations.labels['favorites.add.error.message.text'] ='Sorry , we were unable to move your item to favorites.<br\\/><br\\/>Please try again later.';

    hm.translations.labels['favorites.max.amount.reached.title'] ='Favorites is full';

    hm.translations.labels['favorites.max.amount.reached.text'] ='Sorry, Favorites is full so we can´t add this item. If you really love this item, delete one of your saved items to make room!';


    hm.search = hm.search || {};
    hm.search.apiUrl = '//api.hm.com/v2/de/de/search';

</script>

<link href="//s1-cdn.hm.com/hm.com/hm-comp-navigation/2.16.0/css/navigation.min.css" rel="stylesheet" />
<link rel="stylesheet" type="text/css" href="//s1-cdn.hm.com/global/hm-fonts/1.25.25/css/icon-fonts.css"/><script type="text/javascript" src="//s1-cdn.hm.com/libs/headjs/0.2.20/js/head.min.js"></script>

        <script type="text/javascript" src="//s1-cdn.hm.com/hm.com/ecom-web-static/1.94.0/desktop/js/common.js" ></script>
<script language="javascript">window['optimizely'] = window['optimizely'] || [];window['optimizely'].push(["setCookieExpiration", 360]);</script><script src="https://cdn-pci.optimizely.com/public/2125530039/s/j_pdp.js"></script><title>Rollkragenpullover | Graumeliert | HERREN | H&M DE</title>

        <link rel="stylesheet" type="text/css" href="//s1-cdn.hm.com/hm.com/ecom-web-static/1.94.0/desktop/css/main.css" />
<link rel="stylesheet" type="text/css" href="//s1-cdn.hm.com/global/hm-fonts/1.25.25/css/fonts_de_de.css"/>









<link rel="stylesheet" type="text/css" href="//s1-cdn.hm.com/hm.com/ecom-web-static/1.94.0/desktop/css/product.css" />

<link rel="stylesheet" type="text/css" href="//s1-cdn.hm.com/hm.com/ecom-web-static/1.94.0/desktop/css/product-related.css" />




<style type="text/css">
    #option-article-59876-C {
        background-image: url(//lp.hm.com/hmprod?set=source[/fabric/2018/E5F20D52-9511-42F0-A4F7-198DC59E20E8.jpg]&call=url[file:/product/fabric]);
    }
    #option-article-59876-E {
        background-image: url(//lp.hm.com/hmprod?set=source[/fabric/2018/CBC7E43F-5381-4C75-A2A9-8844EE683725.jpg]&call=url[file:/product/fabric]);
    }
    #option-article-59876-F {
        background-image: url(//lp.hm.com/hmprod?set=source[/fabric/2018/DB1AC971-2F33-4ABD-B0E5-C1DE3A416AC3.jpg]&call=url[file:/product/fabric]);
    }
    #option-article-59876-G {
        background-image: url(//lp.hm.com/hmprod?set=source[/fabric/2018/4D9F1ECA-5E65-48DC-862F-BD3B82EE8F16.jpg]&call=url[file:/product/fabric]);
    }
</style>
<script type="text/javascript">
			</script>

        <script type="text/javascript">
    hm.data.locale = 'de_DE';
    hm.data.restUrl = 'https://api.hm.com';
    hm.data.autosuggestDisabled = 'false';

    hm.moduleConfig = {
        locale : 'de_DE',
        properties : {
            apiBaseUrl : '//api.hm.com' + '/de' + '/property'
        }
    };
</script></head>

	<body class="">
        <body  data-navigation-dependant="true">
    <div class="topbar-container"></div>
    <div class="navigation-container"></div>

    <div id="branding-background"></div>
    <noscript>
        <div class="noscript-wrapper outer-vertical-alignment-wrapper">
            <div class="middle-vertical-alignment-wrapper">
                <div class="inner-vertical-alignment-wrapper">
                    <div class="noscript-warning">
                        <figure>
                            <a href="http://www.hm.com">
                                <img src="//s1-cdn.hm.com/hm.com/ecom-image-static/1.67.0-29/common/logotype.png?1" alt="H&amp;M">
                            </a>
                        </figure>
                        <h1>Hi there!</h1>
                        <p class="javascript-message">To get the most out of this site, please activate javascript in your browser and reload the page.</p>
                        <p class="javascript-regards">You are the best,</p>
                        <p class="javascript-signature">H&M</p>
                        <a href="." class="button">TRY AGAIN</a>
                    </div>
                </div>
            </div>
        </div>
    </noscript>
</body><div>






</div><div id="main">
            <div id="content">

























<div id="product-breadcrumbs" class="clearfix">
    <ul class="breadcrumbs" />
</div>

<form action="https://www.hm.com/de/bag/add" method="post" id="product" name="pdp-addToBag">
<input type="hidden" name="article" id="input-article" value="59876-E"/>
<input type="hidden" name="artnr" id="input-activity-article"
       value="212704"/>
<input type="hidden" name="stockSize" id="input-size" value=""/>
<input type="hidden" name="prevArticle" id="input-prevArticle"
       value=""/>
<input type="hidden" name="prevStockSize" id="input-prevStockSize"
       value=""/>
<input type="hidden" name="webShopOriginCode" id="input-shopOrigin"
       value="PD"/>
<input type="hidden" name="campaign" id="input-campaign" value=""/>
<input type="hidden" name="campaignType" id="input-campaignType"
       value=""/>
<input type="hidden" name="piaType" id="input-piaType"
       value=""/>
<input type="hidden" name="piaDept" id="input-piaDept"
       value=""/>
<input type="hidden" name="ugcShown" id="input-ugcShown"
       value=""/>

<!-- Render non promotional marker Conscious, Premium Quality, online exclusive-->
<div class="product-markers">
    <div class="product-marker premium"><span class="wrapper"><span class="inner">PREMIUM QUALITY</span></span></div>
</div>
<h1>
    Rollkragenpullover

    <span class="price" id="text-price">

        <span class="actual-price">29,99</span>

    </span>
</h1>

<div class="textual-markers-container">



</div>

<div class="details">
    <dl class="options">
        <dt>Farbe:</dt>
        <dd>

            <span class="selected" id="text-selected-article">Graumeliert</span>
            <ul class="options articles clearfix" id="options-articles">










                    <li

                            id="option-article-59876-C"><a
                            href="?article=59876-C"><span>Schwarz</span></a></li>











                    <li
                            class="act"
                            id="option-article-59876-E"><a
                            href="?article=59876-E"><span>Graumeliert</span></a></li>









                    <li

                            id="option-article-59876-F"><a
                            href="?article=59876-F"><span>Dunkelblau</span></a></li>









                    <li

                            id="option-article-59876-G"><a
                            href="?article=59876-G"><span>Beigemeliert</span></a></li>

            </ul>
        </dd>

            <dt>Grösse:</dt>
            <dd>
                <span class="selected" id="text-selected-variant">



                    Größe wählen

                </span>

                    <ul class="options variants clearfix" id="options-variants">






                            <li
                                    class="width2 soldOut"
                                    id="option-variant-59876-E-003">
                                <a href="?article=59876-E&variant=003"><span>XS</span></a>
                            </li>






                            <li
                                    class="width1 soldOut"
                                    id="option-variant-59876-E-004">
                                <a href="?article=59876-E&variant=004"><span>S</span></a>
                            </li>






                            <li
                                    class="width1 soldOut"
                                    id="option-variant-59876-E-005">
                                <a href="?article=59876-E&variant=005"><span>M</span></a>
                            </li>






                            <li
                                    class="width1 soldOut"
                                    id="option-variant-59876-E-006">
                                <a href="?article=59876-E&variant=006"><span>L</span></a>
                            </li>




                            <li
                                    class="width2"
                                    id="option-variant-59876-E-007">
                                <a href="?article=59876-E&variant=007"><span>XL</span></a>
                            </li>




                            <li
                                    class="width3"
                                    id="option-variant-59876-E-008">
                                <a href="?article=59876-E&variant=008"><span>XXL</span></a>
                            </li>

                    </ul>

            </dd>

    </dl>


        <p id="text-stockLevelInfo" class="stockInfo"></p>


        <p><a href="https://www.hm.com/de/sizeguide/sizeguide_men" title="Grössentabellen" id="link-sizeFit">Grössentabellen</a></p>



</div>
<div class="btnContainer">

        <div class="addToBag">








            <button type="submit" class="btn bag large disabled noSize" disabled="disabled" id="btn-addToBag" data-add-to-bag-title="In die Einkaufstasche">
                    <span>



                                <span>
                                    In die Einkaufstasche
                                </span>


                    </span>
            </button>
        </div>

            <div class="findInStore">
                <button type="button" id="btn-findInStore" data-locale="de_DE" data-api-url="https://api.hm.com" data-sis-api-url="https://www2.hm.com/de_de/sis/" class="btn large ">
                    <span>Verfügbarkeit im Geschäft</span>
                </button>
            </div>


</div>
<p class="delivery-text">Als H&M-Clubmitglied können Sie sich immer über kostenlosen Standardversand auf hm.com freuen!  Unsere Standardversandkosten betragen 4,99 €.</p>
<div class="description">


    <h3 class="expanded">Produktbeschreibung</h3>



    <h4>Beschreibung </h4>
    <p>


            PREMIUM QUALITÄT. Feinstrickpullover aus Premium Cotton. Modell mit Rollkragen und Rippenbündchen an Ärmelabschlüssen und Saum.

		<span class="deviation" id="text-deviation">

		</span>
    </p>

    <h4>Details </h4>
    <p>
        <span id="text-information">100% Baumwolle.</span>


            <span id="text-careInstruction">Maschinenwäsche 30˚</span>

    </p>


        <p>
            Art.-Nr.
            <span id="text-activityArticleNumber">
            	21-2704
			</span>
        </p>


		<p>
			Product No.
			<span id="text-castorArticleId">
				0461327006
			</span>
		</p>






    	<div>


<div class="editorial"><h3>Lieferung und Bezahlung</h3><h4>Lieferung</h4><p>Der Versand erfolgt nur an Wohnadressen oder Abholstationen in Deutschland. Wir bieten Standardlieferung, Wunschlieferung und Express Lieferung.&nbsp;Unsere Standardversandkosten betragen 4,99 &euro;.</p><h4>Bezahlung</h4> <p>Wir akzeptieren Kreditkartenzahlungen mit Visa, MasterCard und American Express Symbol. Sie haben auch die M&ouml;glichkeit mit Rechnung - zahlbar innerhalb von 14 Tagen, Zahlung im n&auml;chsten Monat,<span style="font-size: 11.0pt;">&nbsp;</span>in monatlichen Raten oder per H&amp;M-Geschenkkarte zu bezahlen. Sie k&ouml;nnen an der Kasse die gew&uuml;nschte Zahlungsmethode ausw&auml;hlen.</p></div></div>


</div>

</form>



<div id="images" class="article-59876-E LOOKBOOK btg">
    <div id="product-image-box" class="zoomable">
        <img src="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                             data-src="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                             data-image="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                             data-zoom-image="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                             alt=""
                                             id="product-image"
                                             class="LOOKBOOK lazyload"
                                             data-type="LOOKBOOK" />
        <div class="product-nav">

                <button class="btn btn-favorite" data-article="59876-E" data-product-name="Rollkragenpullover"></button>

            <div class="fullscreen">
                <a href="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" class="fullscreen" title="">
                    Vollbildansicht
                </a>
            </div>
        </div>
    </div>
    <a href="#" class="prev disabled">Vorige Seite</a>

    <div class="thumbs">
        <ul id="product-thumbs" class="large items">

                <li class="act">
                    <a href="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" data-zoom-image="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" title="" class="LOOKBOOK" data-code="Fashion 0461327 006 181123 123543 52140">
                        <div class="product-image">
                            <img src="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                                                 alt="" />
                        </div>
                    </a>
                </li>

                <li >
                    <a href="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" data-zoom-image="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" title="" class="LOOKBOOK" data-code="Fashion 0461327 006 181123 123543 52170">
                        <div class="product-image">
                            <img src="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                                                 alt="" />
                        </div>
                    </a>
                </li>

                <li >
                    <a href="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" data-zoom-image="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" title="" class="LOOKBOOK" data-code="Fashion 0461327 006 181123 123543 52212">
                        <div class="product-image">
                            <img src="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                                                 alt="" />
                        </div>
                    </a>
                </li>

                <li >
                    <a href="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" data-zoom-image="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" title="" class="LOOKBOOK" data-code="Fashion 0461327 006 181123 123543 53509">
                        <div class="product-image">
                            <img src="//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                                                 alt="" />
                        </div>
                    </a>
                </li>

                <li >
                    <a href="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%209bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" data-zoom-image="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%209bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" title="" class="DESCRIPTIVE_STILL_LIFE" data-code="SL_I00 0461327 006 99 9bce87b815c0097e54c0d7dc4cb56592c9f2a89e">
                        <div class="product-image">
                            <img src="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%209bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                                                 alt="" />
                        </div>
                    </a>
                </li>

                <li >
                    <a href="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%206bd5285c249602208f23db972b3bbfc3e53b219a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" data-zoom-image="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%206bd5285c249602208f23db972b3bbfc3e53b219a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" title="" class="DESCRIPTIVE_DETAIL" data-code="SL_I00 0461327 006 99 6bd5285c249602208f23db972b3bbfc3e53b219a">
                        <div class="product-image">
                            <img src="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%206bd5285c249602208f23db972b3bbfc3e53b219a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                                                 alt="" />
                        </div>
                    </a>
                </li>

        </ul>
    </div>
    <a href="#" class="next disabled">Nächste Seite</a>

    <div class="promo" id="product-promos">

    </div>
</div>

<div class="sortablePDPArea">
    <div id="user-generated-content" class="clearfix above"></div>





            <div class="related-area pdp clearfix below" ng-cloak ng-app="hm.common.related">
                <related backend-pra-areas="PRA9,PRA1" show-pra-areas="PRA1,PRA9,Fashion 0461327 006 181123 123543 52140" api-url="//api.hm.com/v2/de/de/recommendation/pdp?deviceType=desktop&productCode=59876&articleCode=59876-E&locale=de_DE" quicklook-button="true"></related>
            </div>


</div>



<!-- Google AdWords Remarketing Script Data -->
<script type="text/javascript">// <![CDATA[
var google_tag_params = {
 ecomm_pagetype: 'product',
 ecomm_prodid: ['59876-E'],  // list of article ids
 ecomm_totalvalue: 29.99  // total product value, in local currency
};
// ]]></script>
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1047578664;
var google_conversion_label = "DUx6CN6HgAgQqJDD8wM";
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1047578664/?value=0&amp;label=DUx6CN6HgAgQqJDD8wM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>





<script>
    hm.data.productImages = [];





            var imageData = {
                articleCode: '59876-C',
                code: 'Fashion 0461327 001 181210 143025 51071',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-C',
                code: 'Fashion 0461327 001 181210 143025 51056',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_80357f919f904a8d9c5a8ca8e9483c601baabce4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_80357f919f904a8d9c5a8ca8e9483c601baabce4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_80357f919f904a8d9c5a8ca8e9483c601baabce4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-C',
                code: 'Fashion 0461327 001 181210 143025 51053',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1a52dfcb504e1ac3990a1d91c923b3ebce2d96c8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1a52dfcb504e1ac3990a1d91c923b3ebce2d96c8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1a52dfcb504e1ac3990a1d91c923b3ebce2d96c8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-C',
                code: 'Fashion 0461327 001 181210 143025 51058',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_44ef01b176cba7a00bbaece6110501aef6be4732.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_44ef01b176cba7a00bbaece6110501aef6be4732.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_44ef01b176cba7a00bbaece6110501aef6be4732.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-C',
                code: 'SL_I00 0461327 001 99 da621f43b89675cb8c6d53691a0e6d13e62bff8d',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20da621f43b89675cb8c6d53691a0e6d13e62bff8d.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20da621f43b89675cb8c6d53691a0e6d13e62bff8d.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20da621f43b89675cb8c6d53691a0e6d13e62bff8d.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'DESCRIPTIVE_STILL_LIFE',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-C',
                code: 'SL_I00 0461327 001 99 bf11995b0e6e1331eab22fb5f3f2961077a28268',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20bf11995b0e6e1331eab22fb5f3f2961077a28268.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20bf11995b0e6e1331eab22fb5f3f2961077a28268.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20bf11995b0e6e1331eab22fb5f3f2961077a28268.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'DESCRIPTIVE_DETAIL',
                alttext: ''
            };
            hm.data.productImages.push(imageData);





            var imageData = {
                articleCode: '59876-E',
                code: 'Fashion 0461327 006 181123 123543 52140',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-E',
                code: 'Fashion 0461327 006 181123 123543 52170',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-E',
                code: 'Fashion 0461327 006 181123 123543 52212',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-E',
                code: 'Fashion 0461327 006 181123 123543 53509',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-E',
                code: 'SL_I00 0461327 006 99 9bce87b815c0097e54c0d7dc4cb56592c9f2a89e',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%209bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%209bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%209bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'DESCRIPTIVE_STILL_LIFE',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-E',
                code: 'SL_I00 0461327 006 99 6bd5285c249602208f23db972b3bbfc3e53b219a',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%206bd5285c249602208f23db972b3bbfc3e53b219a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%206bd5285c249602208f23db972b3bbfc3e53b219a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%206bd5285c249602208f23db972b3bbfc3e53b219a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'DESCRIPTIVE_DETAIL',
                alttext: ''
            };
            hm.data.productImages.push(imageData);





            var imageData = {
                articleCode: '59876-F',
                code: 'Fashion 0461327 007 181210 143657 51507',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-F',
                code: 'Fashion 0461327 007 181210 143657 51502',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_a70222355d3721baeca75aed615d9164723cb5a8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_a70222355d3721baeca75aed615d9164723cb5a8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_a70222355d3721baeca75aed615d9164723cb5a8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-F',
                code: 'Fashion 0461327 007 181210 143657 51504',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d796b3e98eb968759f21a9c2dbab28b427513b24.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d796b3e98eb968759f21a9c2dbab28b427513b24.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d796b3e98eb968759f21a9c2dbab28b427513b24.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-F',
                code: 'Fashion 0461327 007 181210 143657 51510',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_7a9f54b4e1c0d785fa60e404fc399d94d204ad7e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_7a9f54b4e1c0d785fa60e404fc399d94d204ad7e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_7a9f54b4e1c0d785fa60e404fc399d94d204ad7e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-F',
                code: 'SL_I00 0461327 007 99 b6a2b229e44450e8354ce08e667ab4656cdc7dda',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%20b6a2b229e44450e8354ce08e667ab4656cdc7dda.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%20b6a2b229e44450e8354ce08e667ab4656cdc7dda.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%20b6a2b229e44450e8354ce08e667ab4656cdc7dda.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'DESCRIPTIVE_STILL_LIFE',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-F',
                code: 'SL_I00 0461327 007 99 88b7751348e58a8d97861b8cf326c802004928d2',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%2088b7751348e58a8d97861b8cf326c802004928d2.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%2088b7751348e58a8d97861b8cf326c802004928d2.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%2088b7751348e58a8d97861b8cf326c802004928d2.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'DESCRIPTIVE_DETAIL',
                alttext: ''
            };
            hm.data.productImages.push(imageData);





            var imageData = {
                articleCode: '59876-G',
                code: 'Fashion 0461327 008 181210 143929 43521',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-G',
                code: 'Fashion 0461327 008 181210 143929 43519',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_b78723295d50da39eed539f8aa688192c26a51ce.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_b78723295d50da39eed539f8aa688192c26a51ce.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_b78723295d50da39eed539f8aa688192c26a51ce.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'LOOKBOOK',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '59876-G',
                code: 'SL_I00 0461327 008 99 4f5a4fdc4261f5df647c0bcb4763a6a89b64500e',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20008%2099%204f5a4fdc4261f5df647c0bcb4763a6a89b64500e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20008%2099%204f5a4fdc4261f5df647c0bcb4763a6a89b64500e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20008%2099%204f5a4fdc4261f5df647c0bcb4763a6a89b64500e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'DESCRIPTIVE_STILL_LIFE',
                alttext: ''
            };
            hm.data.productImages.push(imageData);


</script>
<div class="footer-container"></div>
            </div>
        </div>

        <script type="text/html" id="tpl-tooltip-emptyBag">
    <p>Ihre Einkaufstasche ist leer.</p>
</script>

<script type="text/html" id="tpl-tooltip-shopClosed">
    <p>Wir haben leider geschlossen, bitte versuchen Sie es später.</p>
</script>

<script type="text/html" id="tpl-tooltip">
    <p><?= message ?></p>
</script>

<script type="text/html" id="tpl-alert">
    <p><strong><?= title ?></strong></p>
    <p><?= message ?></p>
    <button class="btn confirm"><span><span><? if (typeof button != 'undefined') { ?><?= button ?><? } else { ?>Ok<? } ?></span></span></button>
</script>













<script type="text/javascript" src="//s1-cdn.hm.com/hm.com/ecom-web-static/1.94.0/desktop/js/product.js" ></script>


<script type="text/javascript">
    hm = hm || {};
    hm.moduleConfig = hm.moduleConfig || {};
</script>

<script type="text/javascript">
    hm.related = hm.related || {};
    hm.related.previousLabel='Vorige Seite';
    hm.related.nextLabel='Nächste Seite';
    hm.related.quicklookButtonLabel='Shop Now';
</script>

<script type="text/html" id="tpl-breadcrumbs">
    <? for (var i = 0; i < breadcrumbs.length - 1; ++i) {?>
        <li><a href="<?= breadcrumbs[i].url ?>"><?= breadcrumbs[i].label ?></a> / </li>
    <? } ?>
    <li><strong>Rollkragenpullover</strong></li>
</script>
<script type="text/html" id="tpl-options-variants">
    <li id="option-variant-<?=articleId?>-<?=variant.size.id?>" class="width<?=variant.size.name.length?> <? if (!variant.availableForPurchase && !variant.soonAvailable) { ?> soldOut<? } ?>"><a href="#" title="<?=variant.size.name?>"><span><?=variant.size.name?></span></a></li>
</script>
<script type="text/html" id="tpl-selected-variant">
    <? if (name) {?><?=prefix?> <?=name?> <?=suffix?><?} else {?>Bitte Größe wählen<? } ?>
</script>
<script type="text/html" id="tpl-price">
    <? if (multiPrice) { ?><span class="from">ab</span> <? } ?><span <? if (oldPrice) {?>class="new"<? } ?>><?=price?></span> <?if (oldPrice) {?><span class="old"><?=oldPrice?></span><?}?>
</script>

<script type="text/html" id="tpl-stockLevelInformation">
    <span><?=stockLevelText?></span>
</script>

<script type="text/html" id="tpl-availability">
    <span class="false"><span><?=longAvailabilityText?></span></span>
</script>
<script type="text/html" id="tpl-tooltip-altArticle">
    <p>Hier klicken, für weitere Optionen.</p>
</script>
<script type="text/html" id="tpl-tooltip-altVariant">
    <p>Hier klicken, um nach verfügbaren Größen <?= name ?> zu suchen.</p>
</script>
<script type="text/html" id="tpl-tooltip-shopClosed">
    <p>Der Onlineshop wird zurzeit für Sie aktualisiert. Wir sind bald zurück, versuchen Sie es bitte in Kürze wieder.</p>
</script>
<script type="text/html" id="tpl-tooltip-maxRows">
    <p>You've reached the maximum number of rows in your shopping bag.</p>
</script>
<script type="text/html" id="tpl-tooltip-maxQty">
    <p>Sie haben die höchstmögliche Anzahl des Artikels pro Kunde erreicht.</p>
</script>
<script type="text/html" id="tpl-tooltip-maxQtyErp">
    <p>Dieser Artikel ist auf eine bestimmte Anzahl pro Kunde beschränkt.</p>
</script>
<script type="text/html" id="tpl-tooltip-soonAvailable">
    <p>Der gewählte Artikel ist noch nicht erhältlich. Bitte versuchen Sie es später erneut.</p>
</script>
<script type="text/html" id="tpl-tooltip-selectedStores">
    <p>Nur in ausgewählten Geschäften erhältlich.</p>
</script>
<script type="text/html" id="tpl-tooltip-soldOut">
    <p>Der Artikel ist ausverkauft.</p>
</script>
<script type="text/html" id="tpl-tooltip-noSize">
    <p>Bitte Größe wählen</p>
</script>
<script type="text/html" id="tpl-fullscreen">
    <a href="<?= fullsizeImage ?>" class="fullscreen" title="<?= alttext ?>">Vollbildansicht</a>
</script>
<script type="text/html" id="tpl-tooltip-notAvailableInStore">
    <p>Im Geschäft nicht verfügbar/nicht vorrätig.</p>
</script>
<script type="text/html" id="tpl-thumb">
    <li>
        <a href="<?= mainImage ?>" class="<?= type ?>" data-zoom-image="<?= fullsizeImage ?>" data-type="<?= type ?>" data-code="<?= code ?>">
            <div class="product-image">
                <img src="<?= thumbImage ?>" alt="<?= alttext ?>" />
            </div>
        </a>
    </li>
</script>
<script type="text/html" id="tpl-promo">
    <img src="//lp.hm.com/hmprod?set=text[<?= productController.escapeHtml(markerText) ?>],active[true],size[60],language[de]&call=url[file:/text/promotionMarker]" alt="<?= productController.escapeHtml(description) ?>" />
</script>
<script type="text/html" id="tpl-marker-conscious">
    <div class="product-marker conscious"><span class="wrapper"><span class="inner">CONSCIOUS</span></span></div>
</script>
<script type="text/html" id="tpl-marker-premium">
    <div class="product-marker premium"><span class="wrapper"><span class="inner">PREMIUM QUALITY</span></span></div>
</script>
<script type="text/html" id="tpl-marker-energy">
    <div class="product-marker energy"><span class="wrapper"><span class="inner">A++</span></span></div>
</script>
<script type="text/html" id="tpl-marker-designCollection">

</script>

<script type="text/html" id="tpl-textual-markers-new-arrival">
	<div class="textual-markers"><span>Neu</span></div>
</script>
<script type="text/html" id="tpl-textual-markers-online-exclusive">
	<div class="textual-markers"><span>Online Exclusive</span></div>
</script>
<script type="text/html" id="tpl-textual-markers-new-arrival-and-online-exclusive">
	<div class="textual-markers"><span>Neu, Online Exclusive</span></div>
</script>

<script type="text/javascript">
    hm.data.breadcrumbs = [[{"id":"men","enabled":true,"marked":false,"titleText":"","external":false,"label":"HERREN","userNotification":"","tooltip":"","url":"https://www.hm.com/de/department/MEN","linkGroup":false},{"id":"men/jumpers_cardigans","enabled":true,"marked":false,"titleText":"","external":false,"label":"Strickjacken & Pullover","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/jumpers_cardigans","linkGroup":false},{"id":"","enabled":true,"marked":false,"titleText":"","external":false,"label":"Rollkragenpullover","userNotification":"","tooltip":"","url":"#","linkGroup":false}],[{"id":"men","enabled":true,"marked":false,"titleText":"","external":false,"label":"HERREN","userNotification":"","tooltip":"","url":"https://www.hm.com/de/department/MEN","linkGroup":false},{"id":"men/jumpers_cardigans","enabled":true,"marked":false,"titleText":"","external":false,"label":"Strickjacken & Pullover","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/jumpers_cardigans","linkGroup":false},{"id":"men/jumpers_cardigans/turtleneck","enabled":true,"marked":false,"titleText":"","external":false,"label":"Rollkragenpullover","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/jumpers_cardigans/turtleneck","linkGroup":false},{"id":"","enabled":true,"marked":false,"titleText":"","external":false,"label":"Rollkragenpullover","userNotification":"","tooltip":"","url":"#","linkGroup":false}],[{"id":"men","enabled":true,"marked":false,"titleText":"","external":false,"label":"HERREN","userNotification":"","tooltip":"","url":"https://www.hm.com/de/department/MEN","linkGroup":false},{"id":"men/jumpers_cardigans","enabled":true,"marked":false,"titleText":"","external":false,"label":"Strickjacken & Pullover","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/jumpers_cardigans","linkGroup":false},{"id":"men/jumpers_cardigans/jumpers","enabled":true,"marked":false,"titleText":"","external":false,"label":"Pullover","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/jumpers_cardigans/jumpers","linkGroup":false},{"id":"","enabled":true,"marked":false,"titleText":"","external":false,"label":"Rollkragenpullover","userNotification":"","tooltip":"","url":"#","linkGroup":false}],[{"id":"men","enabled":true,"marked":false,"titleText":"","external":false,"label":"HERREN","userNotification":"","tooltip":"","url":"https://www.hm.com/de/department/MEN","linkGroup":false},{"id":"men/modern-classic","enabled":true,"marked":false,"titleText":"","external":false,"label":"Modern Classics","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/modern-classic","linkGroup":false},{"id":"men/modern-classic/cardigans_jumpers","enabled":true,"marked":false,"titleText":"","external":false,"label":"Strickjacken & Pullover","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/modern-classic/cardigans_jumpers","linkGroup":false},{"id":"","enabled":true,"marked":false,"titleText":"","external":false,"label":"Rollkragenpullover","userNotification":"","tooltip":"","url":"#","linkGroup":false}],[{"id":"men","enabled":true,"marked":false,"titleText":"","external":false,"label":"HERREN","userNotification":"","tooltip":"","url":"https://www.hm.com/de/department/MEN","linkGroup":false},{"id":"men/premium-quality","enabled":true,"marked":false,"titleText":"","external":false,"label":"Premium Quality","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/premium-quality","linkGroup":false},{"id":"men/premium-quality/cardigans-jumpers","enabled":true,"marked":false,"titleText":"","external":false,"label":"Strickjacken & Pullover","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/premium-quality/cardigans-jumpers","linkGroup":false},{"id":"","enabled":true,"marked":false,"titleText":"","external":false,"label":"Rollkragenpullover","userNotification":"","tooltip":"","url":"#","linkGroup":false}],[{"id":"men","enabled":true,"marked":false,"titleText":"","external":false,"label":"HERREN","userNotification":"","tooltip":"","url":"https://www.hm.com/de/department/MEN","linkGroup":false},{"id":"men/premium-quality","enabled":true,"marked":false,"titleText":"","external":false,"label":"Premium Quality","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/premium-quality","linkGroup":false},{"id":"","enabled":true,"marked":false,"titleText":"","external":false,"label":"Rollkragenpullover","userNotification":"","tooltip":"","url":"#","linkGroup":false}],[{"id":"men","enabled":true,"marked":false,"titleText":"","external":false,"label":"HERREN","userNotification":"","tooltip":"","url":"https://www.hm.com/de/department/MEN","linkGroup":false},{"id":"men/modern-classic","enabled":true,"marked":false,"titleText":"","external":false,"label":"Modern Classics","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/modern-classic","linkGroup":false},{"id":"","enabled":true,"marked":false,"titleText":"","external":false,"label":"Rollkragenpullover","userNotification":"","tooltip":"","url":"#","linkGroup":false}],[{"id":"men","enabled":true,"marked":false,"titleText":"","external":false,"label":"HERREN","userNotification":"","tooltip":"","url":"https://www.hm.com/de/department/MEN","linkGroup":false},{"id":"","enabled":true,"marked":false,"titleText":"","external":false,"label":"Rollkragenpullover","userNotification":"","tooltip":"","url":"#","linkGroup":false}],[{"id":"men","enabled":true,"marked":false,"titleText":"","external":false,"label":"HERREN","userNotification":"","tooltip":"","url":"https://www.hm.com/de/department/MEN","linkGroup":false},{"id":"men/premium-quality","enabled":true,"marked":false,"titleText":"","external":false,"label":"Premium Quality","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/premium-quality","linkGroup":false},{"id":"men/premium-quality/tops","enabled":true,"marked":false,"titleText":"","external":false,"label":"Tops","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/premium-quality/tops","linkGroup":false},{"id":"","enabled":true,"marked":false,"titleText":"","external":false,"label":"Rollkragenpullover","userNotification":"","tooltip":"","url":"#","linkGroup":false}],[{"id":"men","enabled":true,"marked":false,"titleText":"","external":false,"label":"HERREN","userNotification":"","tooltip":"","url":"https://www.hm.com/de/department/MEN","linkGroup":false},{"id":"men/acc-shoesmen","enabled":true,"marked":false,"titleText":"","external":false,"label":"Accessories & Schuhe","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/acc-shoesmen","linkGroup":false},{"id":"","enabled":true,"marked":false,"titleText":"","external":false,"label":"Rollkragenpullover","userNotification":"","tooltip":"","url":"#","linkGroup":false}],[{"id":"men","enabled":true,"marked":false,"titleText":"","external":false,"label":"HERREN","userNotification":"","tooltip":"","url":"https://www.hm.com/de/department/MEN","linkGroup":false},{"id":"men/modern-classic","enabled":true,"marked":false,"titleText":"","external":false,"label":"Modern Classics","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/modern-classic","linkGroup":false},{"id":"men/modern-classic/tops","enabled":true,"marked":false,"titleText":"","external":false,"label":"Tops","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/modern-classic/tops","linkGroup":false},{"id":"","enabled":true,"marked":false,"titleText":"","external":false,"label":"Rollkragenpullover","userNotification":"","tooltip":"","url":"#","linkGroup":false}],[{"id":"men","enabled":true,"marked":false,"titleText":"","external":false,"label":"HERREN","userNotification":"","tooltip":"","url":"https://www.hm.com/de/department/MEN","linkGroup":false},{"id":"men/from-the-beach-to-the-bar","enabled":true,"marked":false,"titleText":"","external":false,"label":"Vom Strand an die Bar ","userNotification":"","tooltip":"","url":"https://www.hm.com/de/products/men/from-the-beach-to-the-bar","linkGroup":false},{"id":"","enabled":true,"marked":false,"titleText":"","external":false,"label":"Rollkragenpullover","userNotification":"","tooltip":"","url":"#","linkGroup":false}]];
    hm.data.product = {"description":"PREMIUM QUALITÄT. Feinstrickpullover aus Premium Cotton. Modell mit Rollkragen und Rippenbündchen an Ärmelabschlüssen und Saum.","shortName":null,"soldOut":false,"hazmats":[],"designer":null,"collaborations":[],"titleName":null,"articles":{"59876-C":{"description":"Schwarz","variants":{"003":{"size":{"name":"XS","id":"003","prefix":"Gr.","suffix":null,"sortOrder":1},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"701042","variantCode":"59876-C-01"},"004":{"size":{"name":"S","id":"004","prefix":"Gr.","suffix":null,"sortOrder":2},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"701042","variantCode":"59876-C-02"},"005":{"size":{"name":"M","id":"005","prefix":"Gr.","suffix":null,"sortOrder":3},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"701042","variantCode":"59876-C-03"},"006":{"size":{"name":"L","id":"006","prefix":"Gr.","suffix":null,"sortOrder":4},"soldOut":false,"visible":true,"notAvailable":false,"stockLevelLow":true,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":true,"availabilityText":"","longAvailabilityText":"","stockLevelText":"Geringer Bestand","soonAvailable":false,"activityArticleNumber":"701042","variantCode":"59876-C-04"},"007":{"size":{"name":"XL","id":"007","prefix":"Gr.","suffix":null,"sortOrder":5},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"701042","variantCode":"59876-C-05"},"008":{"size":{"name":"XXL","id":"008","prefix":"Gr.","suffix":null,"sortOrder":6},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"701042","variantCode":"59876-C-06"}},"productName":"Rollkragenpullover","deviation":null,"sizeRange":null,"soldOut":false,"colour":{"code":"09090","name":null,"rgb":"000000","selectable":false,"selected":false},"images":[{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"RIGHT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":4,"articleCode":"59876-C","hero":true,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522063000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":3496,"zoomAreaCropWidth":2990,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg]&set=key[rotate],value[0]&set=key[width],value[2990]&set=key[height],value[3496]&set=key[x],value[-327]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1513206000000,"validityEndDate":1596146400000,"zoomAreaX":-327,"zoomAreaY":0,"url":"/environment/2018/I00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg","alttext":null,"code":"Fashion 0461327 001 181210 143025 51071","mime":"image/jpeg"},{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":5,"articleCode":"59876-C","hero":false,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_80357f919f904a8d9c5a8ca8e9483c601baabce4.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522063000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":3496,"zoomAreaCropWidth":2990,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_80357f919f904a8d9c5a8ca8e9483c601baabce4.jpg]&set=key[rotate],value[0]&set=key[width],value[2990]&set=key[height],value[3496]&set=key[x],value[-327]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1513206000000,"validityEndDate":1596146400000,"zoomAreaX":-327,"zoomAreaY":0,"url":"/environment/2018/I00_0000_80357f919f904a8d9c5a8ca8e9483c601baabce4.jpg","alttext":null,"code":"Fashion 0461327 001 181210 143025 51056","mime":"image/jpeg"},{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"LEFT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":6,"articleCode":"59876-C","hero":false,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_1a52dfcb504e1ac3990a1d91c923b3ebce2d96c8.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522063000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":3496,"zoomAreaCropWidth":2990,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_1a52dfcb504e1ac3990a1d91c923b3ebce2d96c8.jpg]&set=key[rotate],value[0]&set=key[width],value[2990]&set=key[height],value[3496]&set=key[x],value[-327]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1513206000000,"validityEndDate":1596146400000,"zoomAreaX":-327,"zoomAreaY":0,"url":"/environment/2018/I00_0000_1a52dfcb504e1ac3990a1d91c923b3ebce2d96c8.jpg","alttext":null,"code":"Fashion 0461327 001 181210 143025 51053","mime":"image/jpeg"},{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"BACK","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":3,"articleCode":"59876-C","hero":false,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_44ef01b176cba7a00bbaece6110501aef6be4732.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522063000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":3496,"zoomAreaCropWidth":2990,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_44ef01b176cba7a00bbaece6110501aef6be4732.jpg]&set=key[rotate],value[0]&set=key[width],value[2990]&set=key[height],value[3496]&set=key[x],value[-327]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1513206000000,"validityEndDate":1596146400000,"zoomAreaX":-327,"zoomAreaY":0,"url":"/environment/2018/I00_0000_44ef01b176cba7a00bbaece6110501aef6be4732.jpg","alttext":null,"code":"Fashion 0461327 001 181210 143025 51058","mime":"image/jpeg"},{"type":"DESCRIPTIVE_STILL_LIFE","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":1,"articleCode":"59876-C","hero":true,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/model/2018/I00 0461327 001 99 da621f43b89675cb8c6d53691a0e6d13e62bff8d.jpg],rotate[],width[],height[],x[],y[],type[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1545095450000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":null,"zoomAreaCropWidth":null,"zoomAreaRotation":null,"lpImageVersion":"2","zoomAreaParams":"key[source],value[/model/2018/I00 0461327 001 99 da621f43b89675cb8c6d53691a0e6d13e62bff8d.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":null,"zoomAreaY":null,"url":"/model/2018/I00 0461327 001 99 da621f43b89675cb8c6d53691a0e6d13e62bff8d.jpg","alttext":null,"code":"SL_I00 0461327 001 99 da621f43b89675cb8c6d53691a0e6d13e62bff8d","mime":"image/jpeg"},{"type":"DESCRIPTIVE_DETAIL","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":2,"articleCode":"59876-C","hero":false,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/model/2018/I00 0461327 001 99 bf11995b0e6e1331eab22fb5f3f2961077a28268.jpg],rotate[],width[],height[],x[],y[],type[DESCRIPTIVE_DETAIL]&set=key[hmver],value[2]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1545095450000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":null,"zoomAreaCropWidth":null,"zoomAreaRotation":null,"lpImageVersion":"2","zoomAreaParams":"key[source],value[/model/2018/I00 0461327 001 99 bf11995b0e6e1331eab22fb5f3f2961077a28268.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[DESCRIPTIVE_DETAIL]&set=key[hmver],value[2]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":null,"zoomAreaY":null,"url":"/model/2018/I00 0461327 001 99 bf11995b0e6e1331eab22fb5f3f2961077a28268.jpg","alttext":null,"code":"SL_I00 0461327 001 99 bf11995b0e6e1331eab22fb5f3f2961077a28268","mime":"image/jpeg"}],"code":"59876-C","productCode":"59876","notAvailable":false,"castorArticleId":"0461327001","medias":[{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 001 181210 143025 51071","mime":"image/jpeg"},{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_80357f919f904a8d9c5a8ca8e9483c601baabce4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_80357f919f904a8d9c5a8ca8e9483c601baabce4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_80357f919f904a8d9c5a8ca8e9483c601baabce4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_80357f919f904a8d9c5a8ca8e9483c601baabce4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_80357f919f904a8d9c5a8ca8e9483c601baabce4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_80357f919f904a8d9c5a8ca8e9483c601baabce4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_80357f919f904a8d9c5a8ca8e9483c601baabce4.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 001 181210 143025 51056","mime":"image/jpeg"},{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1a52dfcb504e1ac3990a1d91c923b3ebce2d96c8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1a52dfcb504e1ac3990a1d91c923b3ebce2d96c8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1a52dfcb504e1ac3990a1d91c923b3ebce2d96c8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1a52dfcb504e1ac3990a1d91c923b3ebce2d96c8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1a52dfcb504e1ac3990a1d91c923b3ebce2d96c8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1a52dfcb504e1ac3990a1d91c923b3ebce2d96c8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1a52dfcb504e1ac3990a1d91c923b3ebce2d96c8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 001 181210 143025 51053","mime":"image/jpeg"},{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_44ef01b176cba7a00bbaece6110501aef6be4732.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_44ef01b176cba7a00bbaece6110501aef6be4732.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_44ef01b176cba7a00bbaece6110501aef6be4732.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_44ef01b176cba7a00bbaece6110501aef6be4732.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_44ef01b176cba7a00bbaece6110501aef6be4732.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_44ef01b176cba7a00bbaece6110501aef6be4732.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_44ef01b176cba7a00bbaece6110501aef6be4732.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 001 181210 143025 51058","mime":"image/jpeg"},{"type":"DESCRIPTIVE_STILL_LIFE","url":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20da621f43b89675cb8c6d53691a0e6d13e62bff8d.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20da621f43b89675cb8c6d53691a0e6d13e62bff8d.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20da621f43b89675cb8c6d53691a0e6d13e62bff8d.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20da621f43b89675cb8c6d53691a0e6d13e62bff8d.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20da621f43b89675cb8c6d53691a0e6d13e62bff8d.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20da621f43b89675cb8c6d53691a0e6d13e62bff8d.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20da621f43b89675cb8c6d53691a0e6d13e62bff8d.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"SL_I00 0461327 001 99 da621f43b89675cb8c6d53691a0e6d13e62bff8d","mime":"image/jpeg"},{"type":"DESCRIPTIVE_DETAIL","url":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20bf11995b0e6e1331eab22fb5f3f2961077a28268.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20bf11995b0e6e1331eab22fb5f3f2961077a28268.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20bf11995b0e6e1331eab22fb5f3f2961077a28268.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20bf11995b0e6e1331eab22fb5f3f2961077a28268.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20bf11995b0e6e1331eab22fb5f3f2961077a28268.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20bf11995b0e6e1331eab22fb5f3f2961077a28268.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20001%2099%20bf11995b0e6e1331eab22fb5f3f2961077a28268.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"SL_I00 0461327 001 99 bf11995b0e6e1331eab22fb5f3f2961077a28268","mime":"image/jpeg"}],"licence":null,"premiumQuality":true,"energyCertification":false,"onlineExclusive":false,"fabricSwatch":{"url":"/fabric/2018/E5F20D52-9511-42F0-A4F7-198DC59E20E8.jpg","alttext":null,"code":"Fabric 0461327 181210 105001","mime":"image/jpeg"},"onSale":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"selectedImage":{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"RIGHT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":4,"articleCode":"59876-C","hero":true,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522063000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":3496,"zoomAreaCropWidth":2990,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg]&set=key[rotate],value[0]&set=key[width],value[2990]&set=key[height],value[3496]&set=key[x],value[-327]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1513206000000,"validityEndDate":1596146400000,"zoomAreaX":-327,"zoomAreaY":0,"url":"/environment/2018/I00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg","alttext":null,"code":"Fashion 0461327 001 181210 143025 51071","mime":"image/jpeg"},"afterShopExposure":false,"nonVipPrice":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"careInstruction":{"text":"Maschinenwäsche 30˚","icon":null},"availableForPurchase":true,"availabilityText":"","composition":"100% Baumwolle","hasMaxOrderQuantity":false,"longAvailabilityText":"","shortInformation":"100% Baumwolle. Maschinenwäsche 30˚.","availableInStore":true,"soonAvailable":false,"currentActivityArticleNumber":"701042","catalogActivityArticleNumber":"70-1042","sizeSortedVariants":[{"size":{"name":"XS","id":"003","prefix":"Gr.","suffix":null,"sortOrder":1},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"701042","variantCode":"59876-C-01"},{"size":{"name":"S","id":"004","prefix":"Gr.","suffix":null,"sortOrder":2},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"701042","variantCode":"59876-C-02"},{"size":{"name":"M","id":"005","prefix":"Gr.","suffix":null,"sortOrder":3},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"701042","variantCode":"59876-C-03"},{"size":{"name":"L","id":"006","prefix":"Gr.","suffix":null,"sortOrder":4},"soldOut":false,"visible":true,"notAvailable":false,"stockLevelLow":true,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":true,"availabilityText":"","longAvailabilityText":"","stockLevelText":"Geringer Bestand","soonAvailable":false,"activityArticleNumber":"701042","variantCode":"59876-C-04"},{"size":{"name":"XL","id":"007","prefix":"Gr.","suffix":null,"sortOrder":5},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"701042","variantCode":"59876-C-05"},{"size":{"name":"XXL","id":"008","prefix":"Gr.","suffix":null,"sortOrder":6},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"701042","variantCode":"59876-C-06"}],"selectedMedia":{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 001 181210 143025 51071","mime":"image/jpeg"},"productLink":{"url":"https://www.hm.com/de/product/59876","linkGroup":false},"information":"100% Baumwolle.","share":{"titleText":"H&M Rollkragenpullover 29,99","pageUrl":"https://www.hm.com/de/product/59876?article=59876-C","price":"29,99","twitterText":"H&M Rollkragenpullover 29,99","smallImageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BL%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","largeImageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_ba477276d1c3ae22667fb19348140f22bceae73d.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BL%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},"codes":["003","004","005","006","007","008"],"conscious":false,"offers":[],"saleOffer":null,"multiPrice":false},"59876-E":{"description":"Graumeliert","variants":{"003":{"size":{"name":"XS","id":"003","prefix":"Gr.","suffix":null,"sortOrder":1},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"212704","variantCode":"59876-E-01"},"004":{"size":{"name":"S","id":"004","prefix":"Gr.","suffix":null,"sortOrder":2},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"212704","variantCode":"59876-E-02"},"005":{"size":{"name":"M","id":"005","prefix":"Gr.","suffix":null,"sortOrder":3},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"212704","variantCode":"59876-E-03"},"006":{"size":{"name":"L","id":"006","prefix":"Gr.","suffix":null,"sortOrder":4},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"212704","variantCode":"59876-E-04"},"007":{"size":{"name":"XL","id":"007","prefix":"Gr.","suffix":null,"sortOrder":5},"soldOut":false,"visible":true,"notAvailable":false,"stockLevelLow":true,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":true,"availabilityText":"","longAvailabilityText":"","stockLevelText":"Geringer Bestand","soonAvailable":false,"activityArticleNumber":"212704","variantCode":"59876-E-05"},"008":{"size":{"name":"XXL","id":"008","prefix":"Gr.","suffix":null,"sortOrder":6},"soldOut":false,"visible":true,"notAvailable":false,"stockLevelLow":true,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":true,"availabilityText":"","longAvailabilityText":"","stockLevelText":"Geringer Bestand","soonAvailable":false,"activityArticleNumber":"212704","variantCode":"59876-E-06"}},"productName":"Rollkragenpullover","deviation":null,"sizeRange":null,"soldOut":false,"colour":{"code":"07194","name":null,"rgb":"807774","selectable":false,"selected":false},"images":[{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":5,"articleCode":"59876-E","hero":true,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522088000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":15699,"zoomAreaCropWidth":13426,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg]&set=key[rotate],value[0]&set=key[width],value[13426]&set=key[height],value[15699]&set=key[x],value[-580]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1513206000000,"validityEndDate":1596146400000,"zoomAreaX":-580,"zoomAreaY":0,"url":"/environment/2018/I00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg","alttext":null,"code":"Fashion 0461327 006 181123 123543 52140","mime":"image/jpeg"},{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":6,"articleCode":"59876-E","hero":false,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522088000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":15699,"zoomAreaCropWidth":13426,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg]&set=key[rotate],value[0]&set=key[width],value[13426]&set=key[height],value[15699]&set=key[x],value[-580]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1513206000000,"validityEndDate":1596146400000,"zoomAreaX":-580,"zoomAreaY":0,"url":"/environment/2018/I00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg","alttext":null,"code":"Fashion 0461327 006 181123 123543 52170","mime":"image/jpeg"},{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"RIGHT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":4,"articleCode":"59876-E","hero":false,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522088000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":15699,"zoomAreaCropWidth":13426,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg]&set=key[rotate],value[0]&set=key[width],value[13426]&set=key[height],value[15699]&set=key[x],value[-580]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1513206000000,"validityEndDate":1596146400000,"zoomAreaX":-580,"zoomAreaY":0,"url":"/environment/2018/I00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg","alttext":null,"code":"Fashion 0461327 006 181123 123543 52212","mime":"image/jpeg"},{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"BACK","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":3,"articleCode":"59876-E","hero":false,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522088000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":15699,"zoomAreaCropWidth":13426,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg]&set=key[rotate],value[0]&set=key[width],value[13426]&set=key[height],value[15699]&set=key[x],value[-580]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1513206000000,"validityEndDate":1596146400000,"zoomAreaX":-580,"zoomAreaY":0,"url":"/environment/2018/I00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg","alttext":null,"code":"Fashion 0461327 006 181123 123543 53509","mime":"image/jpeg"},{"type":"DESCRIPTIVE_STILL_LIFE","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":1,"articleCode":"59876-E","hero":true,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/model/2018/I00 0461327 006 99 9bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg],rotate[],width[],height[],x[],y[],type[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1542849128000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":null,"zoomAreaCropWidth":null,"zoomAreaRotation":null,"lpImageVersion":"2","zoomAreaParams":"key[source],value[/model/2018/I00 0461327 006 99 9bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":null,"zoomAreaY":null,"url":"/model/2018/I00 0461327 006 99 9bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg","alttext":null,"code":"SL_I00 0461327 006 99 9bce87b815c0097e54c0d7dc4cb56592c9f2a89e","mime":"image/jpeg"},{"type":"DESCRIPTIVE_DETAIL","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":2,"articleCode":"59876-E","hero":false,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/model/2018/I00 0461327 006 99 6bd5285c249602208f23db972b3bbfc3e53b219a.jpg],rotate[],width[],height[],x[],y[],type[DESCRIPTIVE_DETAIL]&set=key[hmver],value[2]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1542849128000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":null,"zoomAreaCropWidth":null,"zoomAreaRotation":null,"lpImageVersion":"2","zoomAreaParams":"key[source],value[/model/2018/I00 0461327 006 99 6bd5285c249602208f23db972b3bbfc3e53b219a.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[DESCRIPTIVE_DETAIL]&set=key[hmver],value[2]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":null,"zoomAreaY":null,"url":"/model/2018/I00 0461327 006 99 6bd5285c249602208f23db972b3bbfc3e53b219a.jpg","alttext":null,"code":"SL_I00 0461327 006 99 6bd5285c249602208f23db972b3bbfc3e53b219a","mime":"image/jpeg"}],"code":"59876-E","productCode":"59876","notAvailable":false,"castorArticleId":"0461327006","medias":[{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 006 181123 123543 52140","mime":"image/jpeg"},{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_5680d1d4436ad808474531ddaf89b5237c4b30b0.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 006 181123 123543 52170","mime":"image/jpeg"},{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_1dc406926f16d5b3b7ec082ab5d702bdf47b1743.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 006 181123 123543 52212","mime":"image/jpeg"},{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_4e94c9b9720603af382589dd0b97a75b313ff667.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 006 181123 123543 53509","mime":"image/jpeg"},{"type":"DESCRIPTIVE_STILL_LIFE","url":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%209bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%209bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%209bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%209bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%209bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%209bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%209bce87b815c0097e54c0d7dc4cb56592c9f2a89e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"SL_I00 0461327 006 99 9bce87b815c0097e54c0d7dc4cb56592c9f2a89e","mime":"image/jpeg"},{"type":"DESCRIPTIVE_DETAIL","url":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%206bd5285c249602208f23db972b3bbfc3e53b219a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%206bd5285c249602208f23db972b3bbfc3e53b219a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%206bd5285c249602208f23db972b3bbfc3e53b219a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%206bd5285c249602208f23db972b3bbfc3e53b219a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%206bd5285c249602208f23db972b3bbfc3e53b219a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%206bd5285c249602208f23db972b3bbfc3e53b219a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20006%2099%206bd5285c249602208f23db972b3bbfc3e53b219a.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"SL_I00 0461327 006 99 6bd5285c249602208f23db972b3bbfc3e53b219a","mime":"image/jpeg"}],"licence":null,"premiumQuality":true,"energyCertification":false,"onlineExclusive":false,"fabricSwatch":{"url":"/fabric/2018/CBC7E43F-5381-4C75-A2A9-8844EE683725.jpg","alttext":null,"code":"Fabric 0461327 181123 123520","mime":"image/jpeg"},"onSale":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"selectedImage":{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":5,"articleCode":"59876-E","hero":true,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522088000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":15699,"zoomAreaCropWidth":13426,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg]&set=key[rotate],value[0]&set=key[width],value[13426]&set=key[height],value[15699]&set=key[x],value[-580]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1513206000000,"validityEndDate":1596146400000,"zoomAreaX":-580,"zoomAreaY":0,"url":"/environment/2018/I00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg","alttext":null,"code":"Fashion 0461327 006 181123 123543 52140","mime":"image/jpeg"},"afterShopExposure":false,"nonVipPrice":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"careInstruction":{"text":"Maschinenwäsche 30˚","icon":null},"availableForPurchase":true,"availabilityText":"","composition":"100% Baumwolle","hasMaxOrderQuantity":false,"longAvailabilityText":"","shortInformation":"100% Baumwolle. Maschinenwäsche 30˚.","availableInStore":true,"soonAvailable":false,"currentActivityArticleNumber":"212704","catalogActivityArticleNumber":"21-2704","sizeSortedVariants":[{"size":{"name":"XS","id":"003","prefix":"Gr.","suffix":null,"sortOrder":1},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"212704","variantCode":"59876-E-01"},{"size":{"name":"S","id":"004","prefix":"Gr.","suffix":null,"sortOrder":2},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"212704","variantCode":"59876-E-02"},{"size":{"name":"M","id":"005","prefix":"Gr.","suffix":null,"sortOrder":3},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"212704","variantCode":"59876-E-03"},{"size":{"name":"L","id":"006","prefix":"Gr.","suffix":null,"sortOrder":4},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"212704","variantCode":"59876-E-04"},{"size":{"name":"XL","id":"007","prefix":"Gr.","suffix":null,"sortOrder":5},"soldOut":false,"visible":true,"notAvailable":false,"stockLevelLow":true,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":true,"availabilityText":"","longAvailabilityText":"","stockLevelText":"Geringer Bestand","soonAvailable":false,"activityArticleNumber":"212704","variantCode":"59876-E-05"},{"size":{"name":"XXL","id":"008","prefix":"Gr.","suffix":null,"sortOrder":6},"soldOut":false,"visible":true,"notAvailable":false,"stockLevelLow":true,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":true,"availabilityText":"","longAvailabilityText":"","stockLevelText":"Geringer Bestand","soonAvailable":false,"activityArticleNumber":"212704","variantCode":"59876-E-06"}],"selectedMedia":{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 006 181123 123543 52140","mime":"image/jpeg"},"productLink":{"url":"https://www.hm.com/de/product/59876","linkGroup":false},"information":"100% Baumwolle.","share":{"titleText":"H&M Rollkragenpullover 29,99","pageUrl":"https://www.hm.com/de/product/59876?article=59876-E","price":"29,99","twitterText":"H&M Rollkragenpullover 29,99","smallImageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BL%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","largeImageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d1004676da91e26037258d8ec7bca6741a401c27.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BL%5D%2Csr_x%5B-580%5D%2Csr_y%5B0%5D%2Csr_height%5B15699%5D%2Csr_width%5B13426%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},"codes":["003","004","005","006","007","008"],"conscious":false,"offers":[],"saleOffer":null,"multiPrice":false},"59876-F":{"description":"Dunkelblau","variants":{"003":{"size":{"name":"XS","id":"003","prefix":"Gr.","suffix":null,"sortOrder":1},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"533134","variantCode":"59876-F-01"},"004":{"size":{"name":"S","id":"004","prefix":"Gr.","suffix":null,"sortOrder":2},"soldOut":false,"visible":true,"notAvailable":false,"stockLevelLow":true,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":true,"availabilityText":"","longAvailabilityText":"","stockLevelText":"Geringer Bestand","soonAvailable":false,"activityArticleNumber":"533134","variantCode":"59876-F-02"},"005":{"size":{"name":"M","id":"005","prefix":"Gr.","suffix":null,"sortOrder":3},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"533134","variantCode":"59876-F-03"},"006":{"size":{"name":"L","id":"006","prefix":"Gr.","suffix":null,"sortOrder":4},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"533134","variantCode":"59876-F-04"},"007":{"size":{"name":"XL","id":"007","prefix":"Gr.","suffix":null,"sortOrder":5},"soldOut":false,"visible":true,"notAvailable":false,"stockLevelLow":true,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":true,"availabilityText":"","longAvailabilityText":"","stockLevelText":"Geringer Bestand","soonAvailable":false,"activityArticleNumber":"533134","variantCode":"59876-F-05"},"008":{"size":{"name":"XXL","id":"008","prefix":"Gr.","suffix":null,"sortOrder":6},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"533134","variantCode":"59876-F-06"}},"productName":"Rollkragenpullover","deviation":null,"sizeRange":null,"soldOut":false,"colour":{"code":"73206","name":null,"rgb":"1c0939","selectable":false,"selected":false},"images":[{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"RIGHT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":5,"articleCode":"59876-F","hero":true,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522064000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":3496,"zoomAreaCropWidth":2990,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg]&set=key[rotate],value[0]&set=key[width],value[2990]&set=key[height],value[3496]&set=key[x],value[-327]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":-327,"zoomAreaY":0,"url":"/environment/2018/I00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg","alttext":null,"code":"Fashion 0461327 007 181210 143657 51507","mime":"image/jpeg"},{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":4,"articleCode":"59876-F","hero":false,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_a70222355d3721baeca75aed615d9164723cb5a8.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522064000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":3496,"zoomAreaCropWidth":2990,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_a70222355d3721baeca75aed615d9164723cb5a8.jpg]&set=key[rotate],value[0]&set=key[width],value[2990]&set=key[height],value[3496]&set=key[x],value[-327]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":-327,"zoomAreaY":0,"url":"/environment/2018/I00_0000_a70222355d3721baeca75aed615d9164723cb5a8.jpg","alttext":null,"code":"Fashion 0461327 007 181210 143657 51502","mime":"image/jpeg"},{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"RIGHT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":3,"articleCode":"59876-F","hero":false,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_d796b3e98eb968759f21a9c2dbab28b427513b24.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522064000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":3496,"zoomAreaCropWidth":2990,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_d796b3e98eb968759f21a9c2dbab28b427513b24.jpg]&set=key[rotate],value[0]&set=key[width],value[2990]&set=key[height],value[3496]&set=key[x],value[-327]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":-327,"zoomAreaY":0,"url":"/environment/2018/I00_0000_d796b3e98eb968759f21a9c2dbab28b427513b24.jpg","alttext":null,"code":"Fashion 0461327 007 181210 143657 51504","mime":"image/jpeg"},{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"BACK","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":6,"articleCode":"59876-F","hero":false,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_7a9f54b4e1c0d785fa60e404fc399d94d204ad7e.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522064000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":3496,"zoomAreaCropWidth":2990,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_7a9f54b4e1c0d785fa60e404fc399d94d204ad7e.jpg]&set=key[rotate],value[0]&set=key[width],value[2990]&set=key[height],value[3496]&set=key[x],value[-327]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":-327,"zoomAreaY":0,"url":"/environment/2018/I00_0000_7a9f54b4e1c0d785fa60e404fc399d94d204ad7e.jpg","alttext":null,"code":"Fashion 0461327 007 181210 143657 51510","mime":"image/jpeg"},{"type":"DESCRIPTIVE_STILL_LIFE","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":1,"articleCode":"59876-F","hero":true,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/model/2018/I00 0461327 007 99 b6a2b229e44450e8354ce08e667ab4656cdc7dda.jpg],rotate[],width[],height[],x[],y[],type[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1542849093000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":null,"zoomAreaCropWidth":null,"zoomAreaRotation":null,"lpImageVersion":"2","zoomAreaParams":"key[source],value[/model/2018/I00 0461327 007 99 b6a2b229e44450e8354ce08e667ab4656cdc7dda.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":null,"zoomAreaY":null,"url":"/model/2018/I00 0461327 007 99 b6a2b229e44450e8354ce08e667ab4656cdc7dda.jpg","alttext":null,"code":"SL_I00 0461327 007 99 b6a2b229e44450e8354ce08e667ab4656cdc7dda","mime":"image/jpeg"},{"type":"DESCRIPTIVE_DETAIL","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":2,"articleCode":"59876-F","hero":false,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/model/2018/I00 0461327 007 99 88b7751348e58a8d97861b8cf326c802004928d2.jpg],rotate[],width[],height[],x[],y[],type[DESCRIPTIVE_DETAIL]&set=key[hmver],value[2]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1542849093000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":null,"zoomAreaCropWidth":null,"zoomAreaRotation":null,"lpImageVersion":"2","zoomAreaParams":"key[source],value[/model/2018/I00 0461327 007 99 88b7751348e58a8d97861b8cf326c802004928d2.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[DESCRIPTIVE_DETAIL]&set=key[hmver],value[2]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":null,"zoomAreaY":null,"url":"/model/2018/I00 0461327 007 99 88b7751348e58a8d97861b8cf326c802004928d2.jpg","alttext":null,"code":"SL_I00 0461327 007 99 88b7751348e58a8d97861b8cf326c802004928d2","mime":"image/jpeg"}],"code":"59876-F","productCode":"59876","notAvailable":false,"castorArticleId":"0461327007","medias":[{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 007 181210 143657 51507","mime":"image/jpeg"},{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_a70222355d3721baeca75aed615d9164723cb5a8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_a70222355d3721baeca75aed615d9164723cb5a8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_a70222355d3721baeca75aed615d9164723cb5a8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_a70222355d3721baeca75aed615d9164723cb5a8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_a70222355d3721baeca75aed615d9164723cb5a8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_a70222355d3721baeca75aed615d9164723cb5a8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_a70222355d3721baeca75aed615d9164723cb5a8.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 007 181210 143657 51502","mime":"image/jpeg"},{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d796b3e98eb968759f21a9c2dbab28b427513b24.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d796b3e98eb968759f21a9c2dbab28b427513b24.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d796b3e98eb968759f21a9c2dbab28b427513b24.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d796b3e98eb968759f21a9c2dbab28b427513b24.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d796b3e98eb968759f21a9c2dbab28b427513b24.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d796b3e98eb968759f21a9c2dbab28b427513b24.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_d796b3e98eb968759f21a9c2dbab28b427513b24.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 007 181210 143657 51504","mime":"image/jpeg"},{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_7a9f54b4e1c0d785fa60e404fc399d94d204ad7e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_7a9f54b4e1c0d785fa60e404fc399d94d204ad7e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_7a9f54b4e1c0d785fa60e404fc399d94d204ad7e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_7a9f54b4e1c0d785fa60e404fc399d94d204ad7e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_7a9f54b4e1c0d785fa60e404fc399d94d204ad7e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_7a9f54b4e1c0d785fa60e404fc399d94d204ad7e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_7a9f54b4e1c0d785fa60e404fc399d94d204ad7e.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 007 181210 143657 51510","mime":"image/jpeg"},{"type":"DESCRIPTIVE_STILL_LIFE","url":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%20b6a2b229e44450e8354ce08e667ab4656cdc7dda.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%20b6a2b229e44450e8354ce08e667ab4656cdc7dda.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%20b6a2b229e44450e8354ce08e667ab4656cdc7dda.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%20b6a2b229e44450e8354ce08e667ab4656cdc7dda.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%20b6a2b229e44450e8354ce08e667ab4656cdc7dda.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%20b6a2b229e44450e8354ce08e667ab4656cdc7dda.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%20b6a2b229e44450e8354ce08e667ab4656cdc7dda.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"SL_I00 0461327 007 99 b6a2b229e44450e8354ce08e667ab4656cdc7dda","mime":"image/jpeg"},{"type":"DESCRIPTIVE_DETAIL","url":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%2088b7751348e58a8d97861b8cf326c802004928d2.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%2088b7751348e58a8d97861b8cf326c802004928d2.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%2088b7751348e58a8d97861b8cf326c802004928d2.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%2088b7751348e58a8d97861b8cf326c802004928d2.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%2088b7751348e58a8d97861b8cf326c802004928d2.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%2088b7751348e58a8d97861b8cf326c802004928d2.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20007%2099%2088b7751348e58a8d97861b8cf326c802004928d2.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"SL_I00 0461327 007 99 88b7751348e58a8d97861b8cf326c802004928d2","mime":"image/jpeg"}],"licence":null,"premiumQuality":true,"energyCertification":false,"onlineExclusive":false,"fabricSwatch":{"url":"/fabric/2018/DB1AC971-2F33-4ABD-B0E5-C1DE3A416AC3.jpg","alttext":null,"code":"Fabric 0461327 181210 105310","mime":"image/jpeg"},"onSale":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"selectedImage":{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"RIGHT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":5,"articleCode":"59876-F","hero":true,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522064000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":3496,"zoomAreaCropWidth":2990,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg]&set=key[rotate],value[0]&set=key[width],value[2990]&set=key[height],value[3496]&set=key[x],value[-327]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":-327,"zoomAreaY":0,"url":"/environment/2018/I00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg","alttext":null,"code":"Fashion 0461327 007 181210 143657 51507","mime":"image/jpeg"},"afterShopExposure":false,"nonVipPrice":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"careInstruction":{"text":"Maschinenwäsche 30˚","icon":null},"availableForPurchase":true,"availabilityText":"","composition":"100% Baumwolle","hasMaxOrderQuantity":false,"longAvailabilityText":"","shortInformation":"100% Baumwolle. Maschinenwäsche 30˚.","availableInStore":true,"soonAvailable":false,"currentActivityArticleNumber":"533134","catalogActivityArticleNumber":"53-3134","sizeSortedVariants":[{"size":{"name":"XS","id":"003","prefix":"Gr.","suffix":null,"sortOrder":1},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"533134","variantCode":"59876-F-01"},{"size":{"name":"S","id":"004","prefix":"Gr.","suffix":null,"sortOrder":2},"soldOut":false,"visible":true,"notAvailable":false,"stockLevelLow":true,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":true,"availabilityText":"","longAvailabilityText":"","stockLevelText":"Geringer Bestand","soonAvailable":false,"activityArticleNumber":"533134","variantCode":"59876-F-02"},{"size":{"name":"M","id":"005","prefix":"Gr.","suffix":null,"sortOrder":3},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"533134","variantCode":"59876-F-03"},{"size":{"name":"L","id":"006","prefix":"Gr.","suffix":null,"sortOrder":4},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"533134","variantCode":"59876-F-04"},{"size":{"name":"XL","id":"007","prefix":"Gr.","suffix":null,"sortOrder":5},"soldOut":false,"visible":true,"notAvailable":false,"stockLevelLow":true,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":true,"availabilityText":"","longAvailabilityText":"","stockLevelText":"Geringer Bestand","soonAvailable":false,"activityArticleNumber":"533134","variantCode":"59876-F-05"},{"size":{"name":"XXL","id":"008","prefix":"Gr.","suffix":null,"sortOrder":6},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"533134","variantCode":"59876-F-06"}],"selectedMedia":{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 007 181210 143657 51507","mime":"image/jpeg"},"productLink":{"url":"https://www.hm.com/de/product/59876","linkGroup":false},"information":"100% Baumwolle.","share":{"titleText":"H&M Rollkragenpullover 29,99","pageUrl":"https://www.hm.com/de/product/59876?article=59876-F","price":"29,99","twitterText":"H&M Rollkragenpullover 29,99","smallImageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BL%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","largeImageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_38f19afe6b7ed17d56879365c5ee6520bdac3058.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BL%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},"codes":["003","004","005","006","007","008"],"conscious":false,"offers":[],"saleOffer":null,"multiPrice":false},"59876-G":{"description":"Beigemeliert","variants":{"003":{"size":{"name":"XS","id":"003","prefix":"Gr.","suffix":null,"sortOrder":1},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"207576","variantCode":"59876-G-01"},"004":{"size":{"name":"S","id":"004","prefix":"Gr.","suffix":null,"sortOrder":2},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"207576","variantCode":"59876-G-02"},"005":{"size":{"name":"M","id":"005","prefix":"Gr.","suffix":null,"sortOrder":3},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"207576","variantCode":"59876-G-03"},"006":{"size":{"name":"L","id":"006","prefix":"Gr.","suffix":null,"sortOrder":4},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"207576","variantCode":"59876-G-04"},"007":{"size":{"name":"XL","id":"007","prefix":"Gr.","suffix":null,"sortOrder":5},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"207576","variantCode":"59876-G-05"},"008":{"size":{"name":"XXL","id":"008","prefix":"Gr.","suffix":null,"sortOrder":6},"soldOut":false,"visible":true,"notAvailable":false,"stockLevelLow":true,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":true,"availabilityText":"","longAvailabilityText":"","stockLevelText":"Geringer Bestand","soonAvailable":false,"activityArticleNumber":"207576","variantCode":"59876-G-06"}},"productName":"Rollkragenpullover","deviation":null,"sizeRange":null,"soldOut":false,"colour":{"code":"12228","name":null,"rgb":"000000","selectable":false,"selected":false},"images":[{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"LEFT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":3,"articleCode":"59876-G","hero":true,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[2]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522064000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":3496,"zoomAreaCropWidth":2990,"zoomAreaRotation":0,"lpImageVersion":"2","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg]&set=key[rotate],value[0]&set=key[width],value[2990]&set=key[height],value[3496]&set=key[x],value[-327]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[2]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":-327,"zoomAreaY":0,"url":"/environment/2018/I00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg","alttext":null,"code":"Fashion 0461327 008 181210 143929 43521","mime":"image/jpeg"},{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"BACK","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":2,"articleCode":"59876-G","hero":false,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_b78723295d50da39eed539f8aa688192c26a51ce.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[1]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522064000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":3496,"zoomAreaCropWidth":2990,"zoomAreaRotation":0,"lpImageVersion":"1","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_b78723295d50da39eed539f8aa688192c26a51ce.jpg]&set=key[rotate],value[0]&set=key[width],value[2990]&set=key[height],value[3496]&set=key[x],value[-327]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[1]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":-327,"zoomAreaY":0,"url":"/environment/2018/I00_0000_b78723295d50da39eed539f8aa688192c26a51ce.jpg","alttext":null,"code":"Fashion 0461327 008 181210 143929 43519","mime":"image/jpeg"},{"type":"DESCRIPTIVE_STILL_LIFE","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":1,"articleCode":"59876-G","hero":true,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/model/2018/I00 0461327 008 99 4f5a4fdc4261f5df647c0bcb4763a6a89b64500e.jpg],rotate[],width[],height[],x[],y[],type[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1545095449000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":null,"zoomAreaCropWidth":null,"zoomAreaRotation":null,"lpImageVersion":"2","zoomAreaParams":"key[source],value[/model/2018/I00 0461327 008 99 4f5a4fdc4261f5df647c0bcb4763a6a89b64500e.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":null,"zoomAreaY":null,"url":"/model/2018/I00 0461327 008 99 4f5a4fdc4261f5df647c0bcb4763a6a89b64500e.jpg","alttext":null,"code":"SL_I00 0461327 008 99 4f5a4fdc4261f5df647c0bcb4763a6a89b64500e","mime":"image/jpeg"}],"code":"59876-G","productCode":"59876","notAvailable":false,"castorArticleId":"0461327008","medias":[{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 008 181210 143929 43521","mime":"image/jpeg"},{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_b78723295d50da39eed539f8aa688192c26a51ce.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_b78723295d50da39eed539f8aa688192c26a51ce.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_b78723295d50da39eed539f8aa688192c26a51ce.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_b78723295d50da39eed539f8aa688192c26a51ce.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_b78723295d50da39eed539f8aa688192c26a51ce.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_b78723295d50da39eed539f8aa688192c26a51ce.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_b78723295d50da39eed539f8aa688192c26a51ce.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 008 181210 143929 43519","mime":"image/jpeg"},{"type":"DESCRIPTIVE_STILL_LIFE","url":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20008%2099%204f5a4fdc4261f5df647c0bcb4763a6a89b64500e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20008%2099%204f5a4fdc4261f5df647c0bcb4763a6a89b64500e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20008%2099%204f5a4fdc4261f5df647c0bcb4763a6a89b64500e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20008%2099%204f5a4fdc4261f5df647c0bcb4763a6a89b64500e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20008%2099%204f5a4fdc4261f5df647c0bcb4763a6a89b64500e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20008%2099%204f5a4fdc4261f5df647c0bcb4763a6a89b64500e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200461327%20008%2099%204f5a4fdc4261f5df647c0bcb4763a6a89b64500e.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"SL_I00 0461327 008 99 4f5a4fdc4261f5df647c0bcb4763a6a89b64500e","mime":"image/jpeg"}],"licence":null,"premiumQuality":true,"energyCertification":false,"onlineExclusive":false,"fabricSwatch":{"url":"/fabric/2018/4D9F1ECA-5E65-48DC-862F-BD3B82EE8F16.jpg","alttext":null,"code":"Fabric 0461327 181210 105527","mime":"image/jpeg"},"onSale":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"selectedImage":{"type":"LOOKBOOK","provider":"PhotoStudio2","order":null,"facingIndicator":"LEFT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":3,"articleCode":"59876-G","hero":true,"multipack":false,"inPackage":false,"breakingTheGrid":false,"breakingTheGridParams":"source[/environment/2018/I00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg],rotate[],width[],height[],x[],y[],type[LOOKBOOK]&set=key[hmver],value[2]","breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"modifiedtime":1544522064000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":3496,"zoomAreaCropWidth":2990,"zoomAreaRotation":0,"lpImageVersion":"2","zoomAreaParams":"key[source],value[/environment/2018/I00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg]&set=key[rotate],value[0]&set=key[width],value[2990]&set=key[height],value[3496]&set=key[x],value[-327]&set=key[y],value[0]&set=key[type],value[LOOKBOOK]&set=key[hmver],value[2]","validityStartDate":1544655600000,"validityEndDate":1607814000000,"zoomAreaX":-327,"zoomAreaY":0,"url":"/environment/2018/I00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg","alttext":null,"code":"Fashion 0461327 008 181210 143929 43521","mime":"image/jpeg"},"afterShopExposure":false,"nonVipPrice":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"careInstruction":{"text":"Maschinenwäsche 30˚","icon":null},"availableForPurchase":true,"availabilityText":"","composition":"100% Baumwolle","hasMaxOrderQuantity":false,"longAvailabilityText":"","shortInformation":"100% Baumwolle. Maschinenwäsche 30˚.","availableInStore":true,"soonAvailable":false,"currentActivityArticleNumber":"207576","catalogActivityArticleNumber":"20-7576","sizeSortedVariants":[{"size":{"name":"XS","id":"003","prefix":"Gr.","suffix":null,"sortOrder":1},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"207576","variantCode":"59876-G-01"},{"size":{"name":"S","id":"004","prefix":"Gr.","suffix":null,"sortOrder":2},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"207576","variantCode":"59876-G-02"},{"size":{"name":"M","id":"005","prefix":"Gr.","suffix":null,"sortOrder":3},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"207576","variantCode":"59876-G-03"},{"size":{"name":"L","id":"006","prefix":"Gr.","suffix":null,"sortOrder":4},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"207576","variantCode":"59876-G-04"},{"size":{"name":"XL","id":"007","prefix":"Gr.","suffix":null,"sortOrder":5},"soldOut":true,"visible":true,"notAvailable":false,"stockLevelLow":false,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":false,"availabilityText":"Ausverkauft","longAvailabilityText":"Ausverkauft","stockLevelText":"","soonAvailable":false,"activityArticleNumber":"207576","variantCode":"59876-G-05"},{"size":{"name":"XXL","id":"008","prefix":"Gr.","suffix":null,"sortOrder":6},"soldOut":false,"visible":true,"notAvailable":false,"stockLevelLow":true,"price":{"priceWithoutCurrency":"29.99","vip":false,"activityType":"REGULAR","oldPrice":null,"discount":null,"onSale":false,"price":"29,99","multiPricePrefix":null,"multiPrice":false},"afterShopExposure":false,"availableForPurchase":true,"availabilityText":"","longAvailabilityText":"","stockLevelText":"Geringer Bestand","soonAvailable":false,"activityArticleNumber":"207576","variantCode":"59876-G-06"}],"selectedMedia":{"type":"LOOKBOOK","url":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null,"code":"Fashion 0461327 008 181210 143929 43521","mime":"image/jpeg"},"productLink":{"url":"https://www.hm.com/de/product/59876","linkGroup":false},"information":"100% Baumwolle.","share":{"titleText":"H&M Rollkragenpullover 29,99","pageUrl":"https://www.hm.com/de/product/59876?article=59876-G","price":"29,99","twitterText":"H&M Rollkragenpullover 29,99","smallImageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BL%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","largeImageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fenvironment%2F2018%2FI00_0000_fb0d8e77fe35942edb981cb23ed5c1ae3f7d0b96.jpg%5D%2Cmedia_type%5BLOOKBOOK%5D%2Ctshirt_size%5BL%5D%2Cquality%5BL%5D%2Csr_x%5B-327%5D%2Csr_y%5B0%5D%2Csr_height%5B3496%5D%2Csr_width%5B2990%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},"codes":["003","004","005","006","007","008"],"conscious":false,"offers":[],"saleOffer":null,"multiPrice":false}},"afterShopExposure":false,"sellingText":null,"safetyInformations":[],"certifications":[],"metricCategoryID":"MEN_MODERN-CLASSICS_CARDIGANS_JUMPERS_M117","availableForPurchase":true,"newProduct":false,"unlocalizedName":"Premium cotton polo-neck","availabilityText":"","longAvailabilityText":"","sameProduct":null,"soonAvailable":false,"metaSellingText":null,"metaDescription":null,"codes":["59876-C","59876-E","59876-F","59876-G"],"name":"Rollkragenpullover","code":"59876"};
</script>





<script type="text/javascript">
    hm.moduleConfig.newImageRatio = {
        enabled: true
    };
</script>








    <script>
        hm.moduleConfig.findInStoreEnabled = true;
        hm.moduleConfig.findInStoreLocatorGmapsUrl = "https://maps.googleapis.com/maps/api/js?client=gme-hmhennesmauritzab&v=3.20&libraries=places&language=en";
        hm.moduleConfig.findInStoreLocatorJsUrl = "//s1-cdn.hm.com/global/hm-store-locator/0.0.93/js/hm-store-locator.min.js";
        hm.moduleConfig.findInStoreLocatorCssUrl = "//s1-cdn.hm.com/global/hm-store-locator/0.0.93/css/hm-store-locator.css";
    </script>













    <script type="text/javascript">

        var articles = [];


            articles.push('59876-C');


            articles.push('59876-E');


            articles.push('59876-F');


            articles.push('59876-G');



        hm.moduleConfig.ugc = {
            apiBaseUrl: 'https://api.hm.com/v2/de/de/products/ugc',
            authToken: '769232be10c0c04fe0aec99aa932961ef53a3095764627d8eaf5dfcfd20fad29',
            imageOrder: 'rated',
            itemCount: 12,
            containerID: 'user-generated-content',
            params: {
                articleCodes: articles,
                imageSize: 'M',
                imageQuality: 'H',
                searchOrders: null,
                includeCategory: null,
                concealSoldOut: true
            },
            url: '//s1-cdn.hm.com/hm.com/hm.com-comp-user-generated-content/1.4.0/js/ugc.min.js'
         };
    </script>










    <script type="text/javascript">
    hm.moduleConfig.favorites = {
        enabled: true,
        patternLibImagesPath: "//s1-cdn.hm.com/global/hm-pattern-lib/6.2.20/images",
        favoritesCacheAgeMinutes: 5
    };
</script>


    <script type="text/javascript">
        hm.data.hmFavoriteData = {
            "myFeedApiUrl": "https://myfeed.hm.com",
            "deviceType": "desktop",
            "country": 'DE',
            "language": 'de',
            "type": "ARTICLE",
            "errorMessage": {
                addTitle: "Artikel nicht zu den Favoriten hinzugefügt",
                addMessage: "Sorry , we were unable to move your item to favorites.<br/><br/>Please try again later.",
                removeTitle: "Artikel nicht zu den Favoriten hinzugefügt",
                removeMessage: "Sorry , we were unable to remove your item from favorites.<br/><br/>Please try again later."
            }
        };
    </script>


    <script async type="text/javascript" src="//s1-cdn.hm.com/global/hm-favorites-client/1.1.12/js/favorites.min.js"></script>






<script type='text/javascript' id='tealium-tracker-data'>var utag_data={session_touchpoint:"DESKTOP",session_market:"DE",session_locale:"de_DE",page_id:"Product Detail59876 - Premium cotton polo-neck",page_category:"MEN_MODERN-CLASSICS_CARDIGANS_JUMPERS_M117",page_filter_count:"0",page_osa_area:"",page_osa_type:"",session_touchpoint:"DESKTOP",session_market:"DE",product_id:["59876"],product_name:["Premium cotton polo-neck"],product_virtual_category:"",product_category:["MEN_MODERN-CLASSICS_CARDIGANS_JUMPERS_M117"],product_view_type:"PDP",session_locale:"de_DE"}</script><script type="text/javascript" id="tealium-tracker-tag">  (function(a,b,c,d){  a='//tags.tiqcdn.com/utag/hm/de/prod/utag.js'; b=document;  c='script';   d=b.createElement(c);  d.src=a;  d.type='text/java'+c;  d.async=true;  a=b.getElementsByTagName(c)[0];  a.parentNode.insertBefore(d,a);   hm.metrics.tealium(); })();  </script><script	type="text/javascript">
 (function	()	{
 var	s =	document.createElement('script');
 s.type	=	'text/javascript';
 s.src	=	'https://account.psplugin.com/C71E35D6-503B-48C6-80D9-4355BB48B2B4/engage.js';
  document.getElementsByTagName('head')[0].appendChild(s);
 }());
 </script><script type="text/javascript">
    hm.moduleConfig.navigation = hm.moduleConfig.navigation || {};
    hm.moduleConfig.navigation.baseNavigationApiUrl = '//api.hm.com/v2/de/de/navigation';
    hm.moduleConfig.navigation.search = {
        autoSuggestEnabled: true,
        autoSuggestUrl: '//api.hm.com/v2/de/de/search/autocomplete',
        guideUrl: '//api.hm.com/v2/de/de/search/guide',
        previewUrl: '//api.hm.com/v2/de/de/search/preview'
    };
    hm.moduleConfig.navigation.cdnBaseUrl = '//s1-cdn.hm.com';
    hm.moduleConfig.navigation.cdnImageStaticVersion = '1.67.0-29';
</script>
<script src="//s1-cdn.hm.com/hm.com/hm-comp-navigation/2.16.0/js/navigation.min.js"></script>
<script type="text/javascript">
    PubSub.subscribe('notificationActive', function (msg, enabled) {
        var topbarContainer = document.getElementsByClassName('topbar-container')[0],
            navigationContainer = document.getElementsByClassName('navigation-container')[0],
            hasCookieClass = 'has-cookie-message';

        if (navigationContainer && topbarContainer) {
            navigationContainer.style.marginTop = enabled ? parseInt(topbarContainer.scrollHeight) + 'px' : '';
            enabled ? navigationContainer.classList.add(hasCookieClass) : navigationContainer.classList.remove(hasCookieClass);
        }
    });
</script>

<script type="text/javascript" src="//s1-cdn.hm.com/hm.com/hm-comp-message/1.13.0/js/message.min.js" async></script>

<script type="text/javascript">
        window.hm = window.hm || {};
        hm.data = hm.data || {};
        hm.data.productSessionTracking = hm.data.productSessionTracking || {};
        hm.data.productSessionTracking.apiUrl = '//api.hm.com/v2/de/de/products/tracking/info';
        hm.data.productSessionTracking.logLevel = hm.url.getHost().match(/localhost|wks|secc|test|dev/) ? 'debug' : 'error';
        hm.data.productSessionTracking.deviceType = 'desktop';
    </script>
    <script type="text/javascript" src="//s1-cdn.hm.com/global/session-tracking/1.0.16/js/tracking.min.js"></script>
    <script type="text/javascript">
        $(function () {
            PubSub.publish('hm.tracking.ticket.send', 'send stored tickets on page load');
        });
    </script>
</body>
</html>
`,
};
