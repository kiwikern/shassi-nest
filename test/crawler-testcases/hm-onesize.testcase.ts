/* tslint:disable:max-line-length */
import { HmCrawler } from '../../src/crawler/crawlers/hm.crawler';

export const hmOneSizeTestCase = {
  crawlerType: HmCrawler,

  sizes: [
    { id: 'ONESIZE', isAvailable: true, name: 'No size' },
  ],

  sizeChecks: [
    { size: 'ONESIZE', isAvailable: true },
    { size: 'sizedoesnotexist', isAvailable: false },
  ],

  name: 'Schmuckschatulle aus Klarglas',

  priceChecks: [
    { size: 'ONESIZE', price: 24.99 },
    { size: 'nonexist', price: 24.99 },
  ],

  testResponse: `<!DOCTYPE html>
<html lang="de" class="no-touch desktop">
    <head>
        <meta name="keywords" content="" />
        <meta name="robots" content="index,follow"/>
        <meta name="description" content="Goldfarben. Rechteckige Schmuckschatulle aus Klarglas mit Metallrahmen und einem Boden aus Spiegelglas. Vorn ein kleiner Verschlusshaken und an der einen"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="H&M Schmuckschatulle aus Klarglas 24,99"/>
        <meta property="og:description" content="Goldfarben. Rechteckige Schmuckschatulle aus Klarglas mit Metallrahmen und einem Boden aus Spiegelglas. Vorn ein kleiner Verschlusshaken und an der einen"/>
        <meta property="og:site_name" content="H&M"/>
        <meta property="og:image" content="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BL%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"/>
        <script type="text/javascript" src="/dtmonitor/dtagent630_jp_1305.js" data-dtconfig="rid=RID_-2144555542|rpid=1847791244|domain=hm.com|tp=500,50,3|doNotInstrument=clk|reportUrl=/dtmonitor/dynaTraceMonitor"></script><link rel="canonical" href="https://www.hm.com/de/product/39800?article=39800-A" />
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
<script language="javascript">window['optimizely'] = window['optimizely'] || [];window['optimizely'].push(["setCookieExpiration", 360]);</script><script src="https://cdn-pci.optimizely.com/public/2125530039/s/j_pdp.js"></script><title>Schmuckschatulle aus Klarglas | Goldfarben | H&M HOME | H&M DE</title>

        <link rel="stylesheet" type="text/css" href="//s1-cdn.hm.com/hm.com/ecom-web-static/1.94.0/desktop/css/main.css" />
<link rel="stylesheet" type="text/css" href="//s1-cdn.hm.com/global/hm-fonts/1.25.25/css/fonts_de_de.css"/>









<link rel="stylesheet" type="text/css" href="//s1-cdn.hm.com/hm.com/ecom-web-static/1.94.0/desktop/css/product.css" />

<link rel="stylesheet" type="text/css" href="//s1-cdn.hm.com/hm.com/ecom-web-static/1.94.0/desktop/css/product-related.css" />




<style type="text/css">
    #option-article-39800-A {
        background-image: url(//lp.hm.com/hmprod?set=source[/fabric/2018/766DA97A-9E8D-4B7F-9144-92E135CB10FA.jpg]&call=url[file:/product/fabric]);
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
<input type="hidden" name="article" id="input-article" value="39800-A"/>
<input type="hidden" name="artnr" id="input-activity-article"
       value="261041"/>
<input type="hidden" name="stockSize" id="input-size" value="000"/>
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

</div>
<h1>
    Schmuckschatulle aus Klarglas

    <span class="price" id="text-price">

        <span class="actual-price">24,99</span>

    </span>
</h1>

<div class="textual-markers-container">


    <div class="textual-markers"><span>Neu</span></div>
</div>

<div class="details">
    <dl class="options">
        <dt>Farbe:</dt>
        <dd>

            <span class="selected" id="text-selected-article">Goldfarben</span>
            <ul class="options articles clearfix" id="options-articles">












                    <li
                            class="act"
                            id="option-article-39800-A"><a
                            href="?article=39800-A"><span>Goldfarben</span></a></li>

            </ul>
        </dd>

            <dt>Grösse:</dt>
            <dd>
                <span class="selected" id="text-selected-variant">




                         No size




                </span>

            </dd>

    </dl>


        <p id="text-stockLevelInfo" class="stockInfo"></p>




</div>
<div class="btnContainer">

        <div class="addToBag">






            <button type="submit" class="btn bag large "  id="btn-addToBag" data-add-to-bag-title="In die Einkaufstasche">
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


            Rechteckige Schmuckschatulle aus Klarglas mit Metallrahmen und einem Boden aus Spiegelglas. Vorn ein kleiner Verschlusshaken und an der einen Seite ein Kettchen. Drei Innenfächer. Wattierte Unterseite. Größe 5,5x16x25 cm.

		<span class="deviation" id="text-deviation">

		</span>
    </p>

    <h4>Details </h4>
    <p>
        <span id="text-information">50% Metall, 50% Glas.</span>


            <span id="text-careInstruction"></span>

    </p>


        <p>
            Art.-Nr.
            <span id="text-activityArticleNumber">
            	26-1041
			</span>
        </p>


		<p>
			Product No.
			<span id="text-castorArticleId">
				0348542001
			</span>
		</p>






    	<div>


<div class="editorial"><h3>Lieferung und Bezahlung</h3><h4>Lieferung</h4><p>Der Versand erfolgt nur an Wohnadressen oder Abholstationen in Deutschland. Wir bieten Standardlieferung, Wunschlieferung und Express Lieferung.&nbsp;Unsere Standardversandkosten betragen 4,99 &euro;.</p><h4>Bezahlung</h4> <p>Wir akzeptieren Kreditkartenzahlungen mit Visa, MasterCard und American Express Symbol. Sie haben auch die M&ouml;glichkeit mit Rechnung - zahlbar innerhalb von 14 Tagen, Zahlung im n&auml;chsten Monat,<span style="font-size: 11.0pt;">&nbsp;</span>in monatlichen Raten oder per H&amp;M-Geschenkkarte zu bezahlen. Sie k&ouml;nnen an der Kasse die gew&uuml;nschte Zahlungsmethode ausw&auml;hlen.</p></div></div>


</div>

</form>



<div id="images" class="article-39800-A DESCRIPTIVE_STILL_LIFE btg">
    <div id="product-image-box" class="zoomable">
        <img src="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                             data-src="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                             data-image="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                             data-zoom-image="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                             alt=""
                                             id="product-image"
                                             class="DESCRIPTIVE_STILL_LIFE lazyload"
                                             data-type="DESCRIPTIVE_STILL_LIFE" />
        <div class="product-nav">

                <button class="btn btn-favorite" data-article="39800-A" data-product-name="Schmuckschatulle aus Klarglas"></button>

            <div class="fullscreen">
                <a href="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" class="fullscreen" title="">
                    Vollbildansicht
                </a>
            </div>
        </div>
    </div>
    <a href="#" class="prev disabled">Vorige Seite</a>

    <div class="thumbs">
        <ul id="product-thumbs" class="large items">

                <li class="act">
                    <a href="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" data-zoom-image="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" title="" class="DESCRIPTIVE_STILL_LIFE" data-code="SL_I00 0348542 001 99 a28789b45fa64ea63691c5e6db98fc87401fb468">
                        <div class="product-image">
                            <img src="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                                                 alt="" />
                        </div>
                    </a>
                </li>

                <li >
                    <a href="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%203f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" data-zoom-image="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%203f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" title="" class="DESCRIPTIVE_STILL_LIFE" data-code="SL_I00 0348542 001 99 3f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26">
                        <div class="product-image">
                            <img src="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%203f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
                                                                 alt="" />
                        </div>
                    </a>
                </li>

                <li >
                    <a href="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%2073aa219bdedb87242c6440faa504e17d574609a0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" data-zoom-image="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%2073aa219bdedb87242c6440faa504e17d574609a0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D" title="" class="DESCRIPTIVE_DETAIL" data-code="SL_I00 0348542 001 99 73aa219bdedb87242c6440faa504e17d574609a0">
                        <div class="product-image">
                            <img src="//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%2073aa219bdedb87242c6440faa504e17d574609a0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"
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
                <related backend-pra-areas="PRA9,PRA1" show-pra-areas="PRA1,PRA9,SL_I00 0348542 001 99 a28789b45fa64ea63691c5e6db98fc87401fb468" api-url="//api.hm.com/v2/de/de/recommendation/pdp?deviceType=desktop&productCode=39800&articleCode=39800-A&locale=de_DE" quicklook-button="true"></related>
            </div>


</div>



<!-- Google AdWords Remarketing Script Data -->
<script type="text/javascript">// <![CDATA[
var google_tag_params = {
 ecomm_pagetype: 'product',
 ecomm_prodid: ['39800-A'],  // list of article ids
 ecomm_totalvalue: 24.99  // total product value, in local currency
};
// ]]></script>
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1047578664;
var google_conversion_label = "r9awCKadgAgQqJDD8wM";
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1047578664/?value=0&amp;label=r9awCKadgAgQqJDD8wM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>





<script>
    hm.data.productImages = [];





            var imageData = {
                articleCode: '39800-A',
                code: 'SL_I00 0348542 001 99 a28789b45fa64ea63691c5e6db98fc87401fb468',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'DESCRIPTIVE_STILL_LIFE',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '39800-A',
                code: 'SL_I00 0348542 001 99 3f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%203f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%203f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%203f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'DESCRIPTIVE_STILL_LIFE',
                alttext: ''
            };
            hm.data.productImages.push(imageData);

            var imageData = {
                articleCode: '39800-A',
                code: 'SL_I00 0348542 001 99 73aa219bdedb87242c6440faa504e17d574609a0',
                thumbImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%2073aa219bdedb87242c6440faa504e17d574609a0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                mainImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%2073aa219bdedb87242c6440faa504e17d574609a0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                fullsizeImage: "//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%2073aa219bdedb87242c6440faa504e17d574609a0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D",
                type: 'DESCRIPTIVE_DETAIL',
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
    <li><strong>Schmuckschatulle aus Klarglas</strong></li>
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
    hm.data.breadcrumbs = [[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"home/decorations","enabled":true,"label":"Dekoration","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/decorations","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}],[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"home/livingroom","enabled":true,"label":"Wohnzimmer","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/livingroom","linkGroup":false},{"id":"home/livingroom/decorations","enabled":true,"label":"Dekoration","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/livingroom/decorations","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}],[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"home/bedroom","enabled":true,"label":"Schlafzimmer","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/bedroom","linkGroup":false},{"id":"home/bedroom/decorations","enabled":true,"label":"Dekoration","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/bedroom/decorations","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}],[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"home/livingroom","enabled":true,"label":"Wohnzimmer","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/livingroom","linkGroup":false},{"id":"home/livingroom/decorations","enabled":true,"label":"Dekoration","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/livingroom/decorations","linkGroup":false},{"id":"home/livingroom/decorations/small-storage","enabled":true,"label":"kleine Aufbewahrung","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/livingroom/decorations/small-storage","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}],[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"home/livingroom","enabled":true,"label":"Wohnzimmer","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/livingroom","linkGroup":false},{"id":"home/livingroom/storage","enabled":true,"label":"Aufbewahrung","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/livingroom/storage","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}],[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"home/bedroom","enabled":true,"label":"Schlafzimmer","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/bedroom","linkGroup":false},{"id":"home/bedroom/storage","enabled":true,"label":"Aufbewahrung","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/bedroom/storage","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}],[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"home/storage","enabled":true,"label":"Aufbewahrung","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/storage","linkGroup":false},{"id":"home/storage/small-storage","enabled":true,"label":"Kleine Aufbewahrung","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/storage/small-storage","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}],[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"home/new","enabled":true,"label":"Neuheiten","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/new","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}],[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"home/storage","enabled":true,"label":"Aufbewahrung","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/storage","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}],[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"home/livingroom","enabled":true,"label":"Wohnzimmer","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/livingroom","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}],[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}],[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"home/ceuh-gifts-home","enabled":true,"label":"Perfekte Geschenke","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/ceuh-gifts-home","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}],[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"home/livingroom","enabled":true,"label":"Wohnzimmer","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/livingroom","linkGroup":false},{"id":"home/livingroom/decorations","enabled":true,"label":"Dekoration","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/livingroom/decorations","linkGroup":false},{"id":"home/livingroom/decorations/storage","enabled":true,"label":"Aufbewahrung","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/livingroom/decorations/storage","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}],[{"id":"home","enabled":true,"label":"H&M HOME","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/department/HOME","linkGroup":false},{"id":"home/livingroom","enabled":true,"label":"Wohnzimmer","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/livingroom","linkGroup":false},{"id":"home/livingroom/livingroominspiration","enabled":true,"label":"Inspiration","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"https://www.hm.com/de/products/home/livingroom/livingroominspiration","linkGroup":false},{"id":"","enabled":true,"label":"Schmuckschatulle aus Klarglas","tooltip":"","external":false,"marked":false,"titleText":"","userNotification":"","url":"#","linkGroup":false}]];
    hm.data.product = {"description":"Rechteckige Schmuckschatulle aus Klarglas mit Metallrahmen und einem Boden aus Spiegelglas. Vorn ein kleiner Verschlusshaken und an der einen Seite ein Kettchen. Drei Innenfächer. Wattierte Unterseite. Größe 5,5x16x25 cm.","shortName":null,"availableForPurchase":true,"titleName":null,"articles":{"39800-A":{"description":"Goldfarben","variants":{"000":{"size":{"name":" No size","id":"000","prefix":null,"suffix":null,"sortOrder":1},"visible":true,"availableForPurchase":true,"price":{"multiPricePrefix":null,"oldPrice":null,"onSale":false,"price":"24,99","discount":null,"activityType":"REGULAR","multiPrice":false,"vip":false,"priceWithoutCurrency":"24.99"},"availabilityText":"","longAvailabilityText":"","stockLevelText":"","soonAvailable":false,"soldOut":false,"afterShopExposure":false,"activityArticleNumber":"261041","variantCode":"39800-A-01","notAvailable":false,"stockLevelLow":false}},"productName":"Schmuckschatulle aus Klarglas","sizeSortedVariants":[{"size":{"name":" No size","id":"000","prefix":null,"suffix":null,"sortOrder":1},"visible":true,"availableForPurchase":true,"price":{"multiPricePrefix":null,"oldPrice":null,"onSale":false,"price":"24,99","discount":null,"activityType":"REGULAR","multiPrice":false,"vip":false,"priceWithoutCurrency":"24.99"},"availabilityText":"","longAvailabilityText":"","stockLevelText":"","soonAvailable":false,"soldOut":false,"afterShopExposure":false,"activityArticleNumber":"261041","variantCode":"39800-A-01","notAvailable":false,"stockLevelLow":false}],"selectedMedia":{"type":"DESCRIPTIVE_STILL_LIFE","url":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","code":"SL_I00 0348542 001 99 a28789b45fa64ea63691c5e6db98fc87401fb468","mime":"image/jpeg","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null},"productLink":{"url":"https://www.hm.com/de/product/39800","linkGroup":false},"code":"39800-A","productCode":"39800","licence":null,"availableForPurchase":true,"information":"50% Metall, 50% Glas.","onSale":false,"price":{"multiPricePrefix":null,"oldPrice":null,"onSale":false,"price":"24,99","discount":null,"activityType":"REGULAR","multiPrice":false,"vip":false,"priceWithoutCurrency":"24.99"},"medias":[{"type":"DESCRIPTIVE_STILL_LIFE","url":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","code":"SL_I00 0348542 001 99 a28789b45fa64ea63691c5e6db98fc87401fb468","mime":"image/jpeg","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null},{"type":"DESCRIPTIVE_STILL_LIFE","url":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%203f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","code":"SL_I00 0348542 001 99 3f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26","mime":"image/jpeg","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%203f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%203f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%203f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%203f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%203f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%203f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null},{"type":"DESCRIPTIVE_DETAIL","url":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%2073aa219bdedb87242c6440faa504e17d574609a0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","code":"SL_I00 0348542 001 99 73aa219bdedb87242c6440faa504e17d574609a0","mime":"image/jpeg","sizes":[{"value":"XS","height":"300","width":"200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%2073aa219bdedb87242c6440faa504e17d574609a0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"S","height":"600","width":"400","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%2073aa219bdedb87242c6440faa504e17d574609a0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BS%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"M","height":"900","width":"600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%2073aa219bdedb87242c6440faa504e17d574609a0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BM%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"L","height":"1200","width":"800","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%2073aa219bdedb87242c6440faa504e17d574609a0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XL","height":"1800","width":"1200","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%2073aa219bdedb87242c6440faa504e17d574609a0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"},{"value":"XXL","height":"2400","width":"1600","imageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%2073aa219bdedb87242c6440faa504e17d574609a0.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_DETAIL%5D%2Ctshirt_size%5BXXL%5D%2Cquality%5BH%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D"}],"alttext":null}],"premiumQuality":false,"energyCertification":false,"onlineExclusive":false,"fabricSwatch":{"url":"/fabric/2018/766DA97A-9E8D-4B7F-9144-92E135CB10FA.jpg","code":"Fabric 0348542 181025 073106","mime":"image/jpeg","alttext":null},"castorArticleId":"0348542001","availabilityText":"","composition":"50% Metall, 50% Glas","hasMaxOrderQuantity":false,"longAvailabilityText":"","shortInformation":"50% Metall, 50% Glas.","availableInStore":true,"soonAvailable":false,"codes":["000"],"conscious":false,"offers":[],"saleOffer":null,"multiPrice":false,"deviation":null,"sizeRange":null,"soldOut":false,"colour":{"code":"05102","name":null,"rgb":"93590d","selectable":false,"selected":false},"images":[{"type":"DESCRIPTIVE_STILL_LIFE","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":3,"hero":true,"multipack":false,"inPackage":false,"articleCode":"39800-A","breakingTheGrid":false,"breakingTheGridParams":"source[/model/2018/I00 0348542 001 99 a28789b45fa64ea63691c5e6db98fc87401fb468.jpg],rotate[],width[],height[],x[],y[],type[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","modifiedtime":1541207484000,"validityStartDate":1544655600000,"validityEndDate":1607814000000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":null,"zoomAreaCropWidth":null,"zoomAreaRotation":null,"lpImageVersion":"2","zoomAreaX":null,"zoomAreaY":null,"breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"zoomAreaParams":"key[source],value[/model/2018/I00 0348542 001 99 a28789b45fa64ea63691c5e6db98fc87401fb468.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","url":"/model/2018/I00 0348542 001 99 a28789b45fa64ea63691c5e6db98fc87401fb468.jpg","code":"SL_I00 0348542 001 99 a28789b45fa64ea63691c5e6db98fc87401fb468","mime":"image/jpeg","alttext":null},{"type":"DESCRIPTIVE_STILL_LIFE","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":2,"hero":false,"multipack":false,"inPackage":false,"articleCode":"39800-A","breakingTheGrid":false,"breakingTheGridParams":"source[/model/2018/I00 0348542 001 99 3f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg],rotate[],width[],height[],x[],y[],type[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","modifiedtime":1541207484000,"validityStartDate":1544655600000,"validityEndDate":1607814000000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":null,"zoomAreaCropWidth":null,"zoomAreaRotation":null,"lpImageVersion":"2","zoomAreaX":null,"zoomAreaY":null,"breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"zoomAreaParams":"key[source],value[/model/2018/I00 0348542 001 99 3f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","url":"/model/2018/I00 0348542 001 99 3f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26.jpg","code":"SL_I00 0348542 001 99 3f7d704cc4e6d1a1361a78f06ae8bb4dfaa0ec26","mime":"image/jpeg","alttext":null},{"type":"DESCRIPTIVE_DETAIL","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":1,"hero":false,"multipack":false,"inPackage":false,"articleCode":"39800-A","breakingTheGrid":false,"breakingTheGridParams":"source[/model/2018/I00 0348542 001 99 73aa219bdedb87242c6440faa504e17d574609a0.jpg],rotate[],width[],height[],x[],y[],type[DESCRIPTIVE_DETAIL]&set=key[hmver],value[2]","modifiedtime":1541207484000,"validityStartDate":1544655600000,"validityEndDate":1607814000000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":null,"zoomAreaCropWidth":null,"zoomAreaRotation":null,"lpImageVersion":"2","zoomAreaX":null,"zoomAreaY":null,"breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"zoomAreaParams":"key[source],value[/model/2018/I00 0348542 001 99 73aa219bdedb87242c6440faa504e17d574609a0.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[DESCRIPTIVE_DETAIL]&set=key[hmver],value[2]","url":"/model/2018/I00 0348542 001 99 73aa219bdedb87242c6440faa504e17d574609a0.jpg","code":"SL_I00 0348542 001 99 73aa219bdedb87242c6440faa504e17d574609a0","mime":"image/jpeg","alttext":null}],"currentActivityArticleNumber":"261041","catalogActivityArticleNumber":"26-1041","selectedImage":{"type":"DESCRIPTIVE_STILL_LIFE","provider":"PhotoStudio2","order":null,"facingIndicator":"FRONT","angleIdentifier":"CENTRE","exifDimensionWidth":2333,"exifDimensionHeight":3500,"runningNumber":3,"hero":true,"multipack":false,"inPackage":false,"articleCode":"39800-A","breakingTheGrid":false,"breakingTheGridParams":"source[/model/2018/I00 0348542 001 99 a28789b45fa64ea63691c5e6db98fc87401fb468.jpg],rotate[],width[],height[],x[],y[],type[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","modifiedtime":1541207484000,"validityStartDate":1544655600000,"validityEndDate":1607814000000,"breakingTheGridZoomAreaX":null,"breakingTheGridZoomAreaY":null,"zoomAreaCropHeight":null,"zoomAreaCropWidth":null,"zoomAreaRotation":null,"lpImageVersion":"2","zoomAreaX":null,"zoomAreaY":null,"breakingTheGridZoomAreaCropHeight":null,"breakingTheGridZoomAreaCropWidth":null,"breakingTheGridZoomAreaRotation":null,"zoomAreaParams":"key[source],value[/model/2018/I00 0348542 001 99 a28789b45fa64ea63691c5e6db98fc87401fb468.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[DESCRIPTIVE_STILL_LIFE]&set=key[hmver],value[2]","url":"/model/2018/I00 0348542 001 99 a28789b45fa64ea63691c5e6db98fc87401fb468.jpg","code":"SL_I00 0348542 001 99 a28789b45fa64ea63691c5e6db98fc87401fb468","mime":"image/jpeg","alttext":null},"afterShopExposure":false,"share":{"twitterText":"H&M Schmuckschatulle aus Klarglas 24,99","smallImageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BL%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","largeImageUrl":"//lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FI00%200348542%20001%2099%20a28789b45fa64ea63691c5e6db98fc87401fb468.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BL%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D","price":"24,99","pageUrl":"https://www.hm.com/de/product/39800?article=39800-A","titleText":"H&M Schmuckschatulle aus Klarglas 24,99"},"nonVipPrice":{"multiPricePrefix":null,"oldPrice":null,"onSale":false,"price":"24,99","discount":null,"activityType":"REGULAR","multiPrice":false,"vip":false,"priceWithoutCurrency":"24.99"},"careInstruction":{"text":"","icon":null},"notAvailable":false}},"metaSellingText":null,"metaDescription":null,"unlocalizedName":"Clear glass jewellery box","availabilityText":"","longAvailabilityText":"","sameProduct":null,"soonAvailable":false,"codes":["39800-A"],"soldOut":false,"hazmats":[],"designer":null,"newProduct":true,"afterShopExposure":false,"collaborations":[],"sellingText":null,"safetyInformations":[],"certifications":[],"metricCategoryID":"HOME_DECORATIONS_H695","name":"Schmuckschatulle aus Klarglas","code":"39800"};
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


            articles.push('39800-A');



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






<script type='text/javascript' id='tealium-tracker-data'>var utag_data={session_touchpoint:"DESKTOP",session_market:"DE",session_locale:"de_DE",page_filter_count:"0",page_id:"Product Detail39800 - Clear glass jewellery box",page_category:"HOME_DECORATIONS_H695",page_osa_area:"",page_osa_type:"",session_touchpoint:"DESKTOP",session_market:"DE",product_id:["39800"],product_name:["Clear glass jewellery box"],product_category:["HOME_DECORATIONS_H695"],product_view_type:"PDP",product_virtual_category:"PRA9",session_locale:"de_DE"}</script><script type="text/javascript" id="tealium-tracker-tag">  (function(a,b,c,d){  a='//tags.tiqcdn.com/utag/hm/de/prod/utag.js'; b=document;  c='script';   d=b.createElement(c);  d.src=a;  d.type='text/java'+c;  d.async=true;  a=b.getElementsByTagName(c)[0];  a.parentNode.insertBefore(d,a);   hm.metrics.tealium(); })();  </script><script	type="text/javascript">
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
