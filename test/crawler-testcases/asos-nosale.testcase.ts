/* tslint:disable:max-line-length */
import { AsosCrawler } from '../../src/crawler/crawlers/asos.crawler';

/**
 * Has a new JSON parse algorithm. See commit hisotry.
 */
export const asosNoSaleTestCase = {
  crawlerType: AsosCrawler,

  url: 'https://www.asos.de/asos-design/asos-design-extrem-enge-jeans-in-schwarz/prd/6655290',

  sizes: [
    { id: '6655296', name: 'W26 L30', isAvailable: true },
    { id: '6655295', name: 'W26 L32', isAvailable: true },
    { id: '6655298', name: 'W28 L30', isAvailable: false },
    { id: '6655297', name: 'W28 L32', isAvailable: false },
    { id: '8114874', name: 'W29 L30', isAvailable: true },
    { id: '8114851', name: 'W29 L32', isAvailable: false },
    { id: '6655303', name: 'W30 L30', isAvailable: true },
    { id: '6655301', name: 'W30 L32', isAvailable: false },
    { id: '6655299', name: 'W30 L34', isAvailable: true },
    { id: '8114885', name: 'W31 L30', isAvailable: false },
    { id: '8114844', name: 'W31 L32', isAvailable: false },
    { id: '8114881', name: 'W31 L34', isAvailable: false },
    { id: '6655310', name: 'W32 L30', isAvailable: false },
    { id: '6655307', name: 'W32 L32', isAvailable: false },
    { id: '6655305', name: 'W32 L34', isAvailable: false },
    { id: '8114852', name: 'W33 L30', isAvailable: true },
    { id: '8114893', name: 'W33 L32', isAvailable: false },
    { id: '8114840', name: 'W33 L34', isAvailable: false },
    { id: '6655318', name: 'W34 L30', isAvailable: true },
    { id: '6655315', name: 'W34 L32', isAvailable: false },
    { id: '6655312', name: 'W34 L34', isAvailable: false },
    { id: '8346357', name: 'W36 L30', isAvailable: false },
    { id: '6655300', name: 'W36 L32', isAvailable: false },
    { id: '6655321', name: 'W36 L34', isAvailable: false },
    { id: '8346465', name: 'W38 L30', isAvailable: true },
    { id: '6655304', name: 'W38 L32', isAvailable: false },
    { id: '6655302', name: 'W38 L34', isAvailable: false },
    { id: '6655306', name: 'W40 L32', isAvailable: false },
  ],

  sizeChecks: [
    { size: '6655296', isAvailable: true, isLowInStock: true },
    { size: '6655295', isAvailable: true, isLowInStock: false },
    { size: '6655298', isAvailable: false, isLowInStock: false },
    { size: 'sizedoesnotexist', isAvailable: false, isLowInStock: false },
  ],

  name: 'ASOS DESIGN – Extrem enge Jeans in Schwarz',

  priceChecks: [
    { size: '6655296', price: 33.99 },
    { size: '6655298', price: 33.99 },
    { size: 'unknown-size', price: 33.99 },
  ],

  secondResponse: [{
    productId: 6655290,
    productCode: '711297',
    productPrice: {
      current: {
        value: 33.99,
        text: '33,99 €',
      },
      previous: {
        value: 0,
        text: '0,00 €',
      },
      rrp: {
        value: 0,
        text: '0,00 €',
      },
      xrp: {
        value: 23.45,
        text: '£23.45',
      },
      currency: 'EUR',
      isMarkedDown: false,
      isOutletPrice: false,
    },
    variants: [
      {
        variantId: 6655296,
        sku: '4862172',
        isInStock: true,
        isLowInStock: true,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655295,
        sku: '4862171',
        isInStock: true,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655298,
        sku: '4862174',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655297,
        sku: '4862173',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 8114874,
        sku: '6102859',
        isInStock: true,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 8114851,
        sku: '6102860',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655303,
        sku: '4862177',
        isInStock: true,
        isLowInStock: true,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655301,
        sku: '4862176',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655299,
        sku: '4862175',
        isInStock: true,
        isLowInStock: true,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 8114885,
        sku: '6102861',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 8114844,
        sku: '6102862',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 8114881,
        sku: '6102863',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655310,
        sku: '4862180',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655307,
        sku: '4862179',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655305,
        sku: '4862178',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 8114852,
        sku: '6102864',
        isInStock: true,
        isLowInStock: true,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 8114893,
        sku: '6102865',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 8114840,
        sku: '6102866',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655318,
        sku: '4862183',
        isInStock: true,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655315,
        sku: '4862182',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655312,
        sku: '4862181',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 8346357,
        sku: '6301163',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655300,
        sku: '4862185',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655321,
        sku: '4862184',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 8346465,
        sku: '6301164',
        isInStock: true,
        isLowInStock: true,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655304,
        sku: '4862187',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655302,
        sku: '4862186',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
      {
        variantId: 6655306,
        sku: '4862188',
        isInStock: false,
        isLowInStock: false,
        price: {
          current: {
            value: 33.99,
            text: '33,99 €',
          },
          previous: {
            value: 33.99,
            text: '33,99 €',
          },
          rrp: {
            value: 0,
            text: '0,00 €',
          },
          xrp: {
            value: 23.45,
            text: '£23.45',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
        },
      },
    ],
  }],

  testResponse: `
    <!DOCTYPE html>
      <!--10.0.9181--><html lang="de-DE" data-platform="desktop">
      <head><meta charSet="utf-8"/><title>ASOS DESIGN – Extrem enge Jeans in Schwarz | ASOS</title><meta name="description" content="ASOS DESIGN – Extrem enge Jeans in Schwarz auf ASOS shoppen. Mode Online entdecken."/><meta name="p:domain_verify" content="7d543da16a86f7ad75c452097bfa9e47"/><meta name="msvalidate.01" content="0BC251BA275FCFB5D0505FEBC89F03B6"/><meta property="fb:app_id" content="123073601043263"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link href="https://plus.google.com/103410992963919123763/" rel="publisher"/><meta name="Slurp" content="NOODP"/><meta name="Slurp" content="NOYDIR"/><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/><link rel="manifest" href="/manifest.json"/><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d2d2d"/><link rel="preload" href="https://assets.asosservices.com/MasterLayout/WebFonts/FTN45__W/FTN45__W.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/><link rel="preload" href="https://assets.asosservices.com/MasterLayout/WebFonts/FTN75__W/FTN75__W.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/><meta name="theme-color" content="#525050"/>
    <link rel="alternate" hreflang="en-GB" href="https://www.asos.com/asos-design/asos-design-extreme-super-skinny-jeans-in-black/prd/6655290" />
    <link rel="alternate" hreflang="en-US" href="https://us.asos.com/asos-design/asos-design-extreme-super-skinny-jeans-in-black/prd/6655290" />
    <link rel="alternate" hreflang="fr-FR" href="https://www.asos.fr/asos-design/asos-design-jean-extreme-skinny-noir/prd/6655290" />
    <link rel="alternate" hreflang="de-DE" href="https://www.asos.de/asos-design/asos-design-extrem-enge-jeans-in-schwarz/prd/6655290" />
    <link rel="alternate" hreflang="it-IT" href="https://www.asos.com/it/asos-design/asos-design-jeans-extreme-skinny-neri/prd/6655290" />
    <link rel="alternate" hreflang="es-ES" href="https://www.asos.com/es/asos-design/vaqueros-muy-ajustados-negros-de-asos-design/prd/6655290" />
    <link rel="alternate" hreflang="en-AU" href="https://www.asos.com/au/asos-design/asos-design-extreme-super-skinny-jeans-in-black/prd/6655290" />
    <link rel="alternate" hreflang="ru-RU" href="https://www.asos.com/ru/asos-design/chernye-superoblegayuschie-dzhinsy-asos-design/prd/6655290" />
    <link rel="alternate" hreflang="sv-SE" href="https://www.asos.com/se/asos-design/asos-design-svarta-jeans-i-extreme-super-skinny-passform/prd/6655290" />
    <link rel="alternate" hreflang="nl-NL" href="https://www.asos.com/nl/asos-design/asos-design-extreme-superskinny-jeans-in-zwart/prd/6655290" />
<link rel="canonical" href="https://www.asos.de/asos-design/asos-design-extrem-enge-jeans-in-schwarz/prd/6655290"/><script src="https://assets.asosservices.com/sitechromepublisher/10.0.9181//dist/client.newrelicclient.d1d20c.js" type="text/javascript"></script><link href="https://assets.asosservices.com/sitechromepublisher/10.0.9181//dist/client.sitechrome.67068a.css" rel="stylesheet"/><link href="https://assets.asosservices.com/productpg/Asos.Product.Page.Sprite.37f76d08.css" rel="stylesheet"/><link href="https://assets.asosservices.com/productpg/Asos.Product.Page.Web.607bd96b.css" rel="stylesheet"/><script type="text/javascript" src="https://assets.asosservices.com/MasterLayout/Javascript/MasterLayout/core.0.4.3.min.js"></script><meta property="og:title" content="ASOS DESIGN – Extrem enge Jeans in Schwarz | ASOS" />
<meta property="og:image" content="https://images.asos-media.com/products/asos-design-extrem-enge-jeans-in-schwarz/6655290-1-black" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:site_name" content="ASOS" />
<meta property="og:description" content="ASOS DESIGN – Extrem enge Jeans in Schwarz auf ASOS shoppen. Mode Online entdecken." />
<meta property="og:url" content="https://www.asos.de/asos-design/asos-design-extrem-enge-jeans-in-schwarz/prd/6655290" />
<meta property="og:type" content="product" />
<meta property="og:locale" content="de_DE" />

<script src="https://resources.asosservices.com/res/analytics/product.js"></script>
<script src="//ci.asosservices.com/core/shared-libs-1.0.16.min.js"></script><script src="https://assets.asosservices.com/identity/widgets/standalone/sdk.3.1.2.min.js"></script><script src="https://assets.asosservices.com/asos-ui/sdk/bag-sdk-5.0.0.min.js"></script><script src="https://assets.asosservices.com/asos-ui/sdk/saved-items-sdk-3.0.2.min.js"></script><script src="https://assets.asosservices.com/asos-ui/manifest/windowManifest.js"></script><script src="https://assets.asosservices.com/asos-ui/manifest/featuresManifest.js"></script><script>bazadebezolkohpepadr="842187081"</script><script type="text/javascript" src="https://www.asos.de/akam/10/3232c258" defer></script></head>
      <body>
      <script charSet="UTF-8">window.__chromeConfig={"API_BASE":"\u002F\u002Fapi.asos.com","API_XSITEORIGIN_BASE":"","APP_DOWNLOAD_APP_STORE_URI":"https:\u002F\u002Fc00.adobe.com\u002Fv2\u002Fgb\u002Ff8077542-cbcf-49fe-9d22-48f32990573d\u002Furpq1sgm\u002Fi\u002F457876088","APP_DOWNLOAD_PLAY_STORE_URI":"https:\u002F\u002Fc00.adobe.com\u002Fb5c2c04c-c0b3-4dbe-b038-e1f9e2c2c0eb\u002F5085h1iw\u002Fg\u002Fcom.asos.app","ASOS_ENVIRONMENT":"prod","CONTENT_API_PATH":"\u002Fapi\u002Ffashion\u002Fcontentapi\u002Fv1\u002Fcomponents\u002F","COUNTRY_API_DOMAIN":"\u002F\u002Fapi.asos.com","EASTEREGG_XMAS":"inactive","ENVIRONMENT_MODE":"prod","FEATURE_FLAG_GDPR":"false","FEATURE_FLAG_MYACCOUNT_DROPDOWN":"false","IDENTITY_SDK_AUTH_HOST":"https:\u002F\u002Fmy.asos.com\u002Fidentity","IDENTITY_SDK_CLIENT_ID":"D91F2DAA-898C-4E10-9102-D6C974AFBD59","IDENTITY_SDK_CUSTOMER_API_URL":"https:\u002F\u002Fapi.asos.com","IDENTITY_SDK_IDENTITY_ORIGIN":"","IDENTITY_SDK_VERSION":"3.1.2","IFRAME_URL":"https:\u002F\u002Fwww.asos.com\u002Fweb\u002Fiframe.html","MARKETPLACE_URL":"https:\u002F\u002Fmarketplace.asos.com","MY_ACCOUNT_BASE_URL":"https:\u002F\u002Fmy.asos.com\u002Fmy-account","NAVIGATION_API_DOMAIN":"https:\u002F\u002Fapi.asos.com","NAVIGATION_API_PATH":"\u002Ffashion\u002Fnavigation\u002Fv2\u002Ftree","NAVIGATION_SUBTREE_API_PATH":"\u002Ffashion\u002Fnavigation\u002Fv2\u002Ftree\u002Fnavigation","PREFERENCES_API_DOMAIN":"https:\u002F\u002Fapi.asos.com","SDK_BAG_API_URL":"","SDK_BAG_VERSION":"5.0.0","SDK_IDENTITY_VERSION":"2.2.3","SDK_PAYMENT_OPTIONS_API_URL":"","SDK_POST_MESSAGE_URL":"","SDK_PRODUCT_CATALOGUE_API_URL":"","SDK_SAVED_ITEMS_API_URL":"","SDK_SAVED_ITEMS_VERSION":"3.0.2","SDK_SUBSCRIPTION_OPTIONS_API_URL":"","SDK_X_SITE_ORIGIN":"","SEARCH_API_DOMAIN":"http:\u002F\u002Fapi.asos.com","WEB_ANALYTICS_URL":"\u002F\u002Fci.asosservices.com\u002Fresources\u002Ftest\u002Fanalytics\u002Fsitechrome.js"};</script>
      <script charSet="UTF-8">window.__siteChromeTokenValues = {"gender":"Men"}
      </script>
      <script charSet="UTF-8">window.__siteChromeInitialStore = {"version":"10","buildVersion":"10.0.9181","layout":{"viewportCategory":"large-viewport","isSidePanelOpen":false,"isCookieMessageOpen":false,"gender":"default","platform":"desktop"},"navigation":{"countryCode":"DE","tree":[{"id":"7276d7f9-b810-4743-8c11-eccb260bbecd","alias":"MW","label":"Herren","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fmen\u002F","linkType":"internal","type":"link","labelPath":[null,"Herren"],"gender":"MW","excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[{"id":"ae28af2b-e3ca-4f2f-a559-9a976a0812d4","alias":null,"label":"Home","subtitle":null,"type":"container","labelPath":[null,"Herren","Home"],"gender":"MW","excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":7,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"noTitle","items":[{"id":"47989db5-0597-43e6-9bee-1348c35590b0","alias":null,"label":"Home","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fmen\u002F","linkType":"internal","type":"link","labelPath":[null,"Herren","Home","Home"],"gender":"MW","excludes":["large-viewport"],"largeScreenPriority":0,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw-gl-home-june-refresh-1m","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw-gl-home-june-refresh-1m","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]}]},{"id":"73db696f-573b-4ff1-8b7f-ccaaea478697","alias":null,"label":"SPEND AND SAVE TEMP","subtitle":null,"type":"container","labelPath":[null,"Herren","SPEND AND SAVE TEMP"],"gender":"MW","excludes":["large-viewport"],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":1,"smallAndMediumLayout":"carousel","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"noTitle","items":[]},{"id":"125a5aba-3f29-4223-8ffc-d1e06d61ec1b","alias":null,"label":"App and Mobile Top Level","subtitle":null,"type":"container","labelPath":[null,"Herren","App and Mobile Top Level"],"gender":"MW","excludes":["large-viewport"],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":1,"smallAndMediumLayout":"carousel","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"noTitle","items":[{"id":"4929aea9-4e19-448a-b01c-ccd43211c954","alias":null,"label":"20% auf T-Shirts & Sweater","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fherren\u002Fctas\u002Fwerbeaktion-5\u002Fcat\u002F?cid=28035","linkType":"category","type":"link","labelPath":[null,"Herren","App and Mobile Top Level","20% auf T-Shirts & Sweater"],"gender":"MW","excludes":["large-viewport"],"largeScreenPriority":0,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fgl_20off_textures_200319","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fgl_20off_textures_200319","largeScreenStyleType":"dark","smallAndMediumStyleType":"light","items":[]}]},{"id":"bb2385ab-3f26-48cd-80f3-e7414bfb112b","alias":null,"label":"Kategories","subtitle":null,"type":"container","labelPath":[null,"Herren","Kategories"],"gender":"MW","excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":1,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"noTitle","smallAndMediumStyleType":"noTitle","items":[{"id":"029c47b3-2111-43e9-9138-0d00ecf0b3db","alias":"MW_NI","label":"Neu","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Herren","Kategories","Neu"],"gender":"MW","excludes":[],"largeScreenPriority":8,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_newin_1m_1433591","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_newin_1m_1433591","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"e87ba617-daa1-4b64-8f36-ab92e61283f7","alias":null,"label":"Bekleidung","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Herren","Kategories","Bekleidung"],"gender":"MW","excludes":[],"largeScreenPriority":7,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002FClothing_MW_1M_1164406_160318","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002FClothing_MW_1M_1164406_160318","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"87a52035-f6fa-401f-bd58-0d259e403cbb","alias":null,"label":"Schuhe","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Herren","Kategories","Schuhe"],"gender":"MW","excludes":[],"largeScreenPriority":6,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_shoes_1M_1289337-2","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_toplevel_shoes_global_1m_1327912","largeScreenStyleType":"light","smallAndMediumStyleType":"dark","items":[]},{"id":"2c33cef8-8fb2-43b6-949b-070d685b176e","alias":null,"label":"Activewear","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Herren","Kategories","Activewear"],"gender":"MW","excludes":[],"largeScreenPriority":4,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_activewear_1m_1431492","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_activewear_1m_1431492","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"0502a9b2-d1e8-4b34-9741-1141607c715e","alias":null,"label":"Accessoires","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Herren","Kategories","Accessoires"],"gender":"MW","excludes":[],"largeScreenPriority":5,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_top_level_accessories_1m_1376827","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_top_level_accessories_1m_1376827","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"e5b71413-6f8c-4957-8ff1-67620c1db627","alias":null,"label":"Pflegen + Schminken","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Herren","Kategories","Pflegen + Schminken"],"gender":"MW","excludes":[],"largeScreenPriority":3,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002FMW_FaceBody_1M_1147668_060318","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_toplevel_face%26body_1m_1414661","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"afae803d-45c2-4e2d-8530-140ef9874cc3","alias":null,"label":"Wohnen + Geschenke","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Herren","Kategories","Wohnen + Geschenke"],"gender":"MW","excludes":[],"largeScreenPriority":2,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_top_level_living_and_gifts_1m_1447268","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_top_level_living_and_gifts_1m_1447268","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"03b93067-d1b1-44c4-9301-37479c7217cb","alias":null,"label":"Marken","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Herren","Kategories","Marken"],"gender":"MW","excludes":[],"largeScreenPriority":1,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_toplevel_brands_global_1m_1371437","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_toplevel_brands_global_1m_1371437","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"c42067f4-5f16-440a-ab2f-5163739caf68","alias":null,"label":"Outlet","subtitle":"Bis zu 70% rabatt","link":null,"linkType":"","type":"link","labelPath":[null,"Herren","Kategories","Outlet"],"gender":"MW","excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_toplevel_outlet_global_1m_1421138","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw_sr_toplevel_outlet_global_1m_1421138","largeScreenStyleType":"sale","smallAndMediumStyleType":"sale","items":[]}]},{"id":"757a9e66-ae23-488b-9922-4ce629fc1773","alias":"MW_Discover_More","label":"Mehr entdecken","subtitle":null,"type":"container","labelPath":[null,"Herren","Mehr entdecken"],"gender":"MW","excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":1,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[{"id":"a3ed6672-26b2-486b-88d1-b874034f0fd6","alias":null,"label":"Marketplace","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Herren","Mehr entdecken","Marketplace"],"gender":"MW","excludes":[],"largeScreenPriority":2,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002FMW_Toplevel_Marketplace_1m","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002FMW_Toplevel_Marketplace_1m","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"4526f3e4-33ef-4133-bd56-e01ce63a949b","alias":null,"label":"Inspiration","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Herren","Mehr entdecken","Inspiration"],"gender":"MW","excludes":[],"largeScreenPriority":1,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002FMen-Inspiration-Inspiration-Background-image-42979-164","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002FMen-Inspiration-Inspiration-Background-image-42979-164","largeScreenStyleType":"noTitle","smallAndMediumStyleType":"dark","items":[]}]},{"id":"ddb52d2c-3d44-4959-8c5e-345ba97c87e6","alias":"MW_More_ASOS","label":"Mehr ASOS","subtitle":null,"type":"container","labelPath":[null,"Herren","Mehr ASOS"],"gender":"MW","excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":6,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[{"id":"285ec254-0ff0-44bf-ad4f-256878dea79e","alias":"app_download","label":"DIE APP DOWNLOADEN","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fdiscover\u002Four-apps\u002F","linkType":"internal","type":"link","labelPath":[null,"Herren","Mehr ASOS","DIE APP DOWNLOADEN"],"gender":"MW","excludes":["large-viewport"],"largeScreenPriority":0,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw-moreasos-app-6m","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw-moreasos-app-6m","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"b654a775-06f8-495d-abde-4f84d4e2cc84","alias":null,"label":"Unbegrenzte Lieferung am nächsten Werktag","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fkundenservice\u002Fpremier-lieferung\u002F","linkType":"internal","type":"link","labelPath":[null,"Herren","Mehr ASOS","Unbegrenzte Lieferung am nächsten Werktag"],"gender":"MW","excludes":["large-viewport"],"largeScreenPriority":0,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fpremier-feb-2018-de-6m","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fpremier-feb-2018-de-6m","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"6662cf5a-d7b6-4ac7-a033-5d46cacdec75","alias":null,"label":"10% Studentenrabatt","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fdiscover\u002Fstudents\u002Funidays\u002F","linkType":"internal","type":"link","labelPath":[null,"Herren","Mehr ASOS","10% Studentenrabatt"],"gender":"MW","excludes":["large-viewport"],"largeScreenPriority":0,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fstudents-feb-2018-6m","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fstudents-feb-2018-6m","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]}]}]},{"id":"f3a16d47-65ce-4cd8-b08c-d59f6063e695","alias":"WW","label":"Damen","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fwomen\u002F","linkType":"internal","type":"link","labelPath":[null,"Damen"],"gender":"WW","excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[{"id":"619609e1-8076-4026-a161-83d99eb9edba","alias":null,"label":"Home","subtitle":null,"type":"container","labelPath":[null,"Damen","Home"],"gender":"WW","excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":7,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"noTitle","items":[{"id":"6f523749-e60d-4c56-bcbc-8c3ab412511c","alias":null,"label":"Home","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fwomen\u002F","linkType":"internal","type":"link","labelPath":[null,"Damen","Home","Home"],"gender":"WW","excludes":["large-viewport"],"largeScreenPriority":0,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww-gl-home-june-refresh-1m","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww-newpeak-home","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]}]},{"id":"8a30c3c9-6134-4e82-b910-29f6fe28d35b","alias":null,"label":"App and Mob Top Level","subtitle":null,"type":"container","labelPath":[null,"Damen","App and Mob Top Level"],"gender":"WW","excludes":["large-viewport"],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":1,"smallAndMediumLayout":"carousel","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"noTitle","items":[{"id":"810474a4-d275-45a4-aafa-8930e2f1d925","alias":null,"label":"-20% bad-, schoenen, enz.","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fdamen\u002Fctas\u002Fwerbeaktion-7\u002Fcat\u002F?cid=28244","linkType":"category","type":"link","labelPath":[null,"Damen","App and Mob Top Level","-20% bad-, schoenen, enz."],"gender":"WW","excludes":["large-viewport"],"largeScreenPriority":0,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_de_promo_wk30","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_de_promo_wk30","largeScreenStyleType":"dark","smallAndMediumStyleType":"noTitle","items":[]}]},{"id":"aa8928ea-caab-4396-8835-28c56a57982f","alias":null,"label":"Categories","subtitle":null,"type":"container","labelPath":[null,"Damen","Categories"],"gender":"WW","excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":1,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"noTitle","smallAndMediumStyleType":"noTitle","items":[{"id":"1020946c-8949-4e9c-9719-43435002bcd4","alias":"WW_NI","label":"Neu","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Damen","Categories","Neu"],"gender":"WW","excludes":[],"largeScreenPriority":8,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_newin_1m_1402727","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_newin_1m_1402727","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"96b432e3-d374-4293-8145-b00772447cde","alias":null,"label":"Bekleidung","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Damen","Categories","Bekleidung"],"gender":"WW","excludes":[],"largeScreenPriority":7,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_clothing_toplevel_1m_1378424","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_clothing_toplevel_1m_1378424","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"0edf7894-4f2f-42fb-896d-3e91a01704b1","alias":null,"label":"Schuhe","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fwomen\u002Fshoes\u002Fcat\u002F?cid=4172","linkType":"","type":"link","labelPath":[null,"Damen","Categories","Schuhe"],"gender":"WW","excludes":[],"largeScreenPriority":6,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_toplevel_shoes_global_1m_1411157","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_toplevel_shoes_global_1m_1411157","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"d21e53a8-79e6-491d-91b3-8c0e2c21a3a1","alias":null,"label":"Activewear","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Damen","Categories","Activewear"],"gender":"WW","excludes":[],"largeScreenPriority":4,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_activewear_1m_1345715","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_activewear_1m_1345715","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"415ffca1-8c1a-48a7-8997-9cc4929a7134","alias":null,"label":"Accessoires","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Damen","Categories","Accessoires"],"gender":"WW","excludes":[],"largeScreenPriority":5,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002FWomen-Accessories-Accessories-Background-image-42979-57-02","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002FWomen-Accessories-Accessories-Background-image-42979-57-02","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"b2164f1d-48aa-417d-9d1a-5cffa7eb1bb2","alias":null,"label":"Pflegen + Schminken","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Damen","Categories","Pflegen + Schminken"],"gender":"WW","excludes":[],"largeScreenPriority":3,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_top_level_face_and_body_1m_1353675","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_top_level_face_and_body_1m_1353675","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"31c83989-24f4-452d-a984-0a9afd03c369","alias":null,"label":"Wohnen + Geschenke","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Damen","Categories","Wohnen + Geschenke"],"gender":"WW","excludes":[],"largeScreenPriority":2,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_toplevel_living%2bgifts_1m_1391086","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_toplevel_living%2bgifts_1m_1391086","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"796c1478-6471-4acf-a952-049a9154b668","alias":null,"label":"Marken","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Damen","Categories","Marken"],"gender":"WW","excludes":[],"largeScreenPriority":1,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_toplevel_brands_global_1m_1350675","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_toplevel_brands_global_1m_1350675","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"a92844a0-3b5b-41b6-ad85-9ca81f5c24f1","alias":null,"label":"Outlet","subtitle":"Bis zu 70% rabatt","link":null,"linkType":"","type":"link","labelPath":[null,"Damen","Categories","Outlet"],"gender":"WW","excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_toplevel_outlet_global_1m_1429515","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww_sr_toplevel_outlet_global_1m_1429515","largeScreenStyleType":"sale","smallAndMediumStyleType":"sale","items":[]}]},{"id":"462ef637-83db-42a5-b5df-51a6cee2868e","alias":"WW_Discover_More","label":"Mehr entdecken","subtitle":null,"type":"container","labelPath":[null,"Damen","Mehr entdecken"],"gender":"WW","excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":1,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[{"id":"58b7bec6-2318-4e4e-a97d-e5acdb8cb269","alias":null,"label":"Marketplace","subtitle":"30% AUF AUSGEWÄHLTE TEILE","link":null,"linkType":"","type":"link","labelPath":[null,"Damen","Mehr entdecken","Marketplace"],"gender":"WW","excludes":[],"largeScreenPriority":1,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002FWW_Toplevel_Marketplace_1m","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002FWW_Toplevel_Marketplace_1m","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"f801c24f-60c9-459a-a021-ea6a313adf0a","alias":null,"label":"Inspiration","subtitle":null,"link":null,"linkType":"","type":"link","labelPath":[null,"Damen","Mehr entdecken","Inspiration"],"gender":"WW","excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002FWomen-Brands-Brands-Background-image-42979-163-02","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002FWomen-Brands-Brands-Background-image-42979-163-02","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]}]},{"id":"ab500a3c-4c32-4ec2-993e-979e7fb7d9c2","alias":"WW_More_ASOS","label":"Mehr ASOS","subtitle":null,"type":"container","labelPath":[null,"Damen","Mehr ASOS"],"gender":"WW","excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":6,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[{"id":"d9c455df-1dc2-45c6-9259-a39af221fc05","alias":null,"label":"Unbegrenzte Lieferung am nächsten Werktag","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fkundenservice\u002Fpremier-lieferung\u002F","linkType":"internal","type":"link","labelPath":[null,"Damen","Mehr ASOS","Unbegrenzte Lieferung am nächsten Werktag"],"gender":"WW","excludes":["large-viewport"],"largeScreenPriority":0,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fpremier-feb-2018-de-6m","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fww-moreasos-premier-6m","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"30c1468c-cb5a-4b39-b9e2-ba3a1bca08e0","alias":null,"label":"10% Studentenrabatt","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fdiscover\u002Fstudents\u002Funidays\u002F","linkType":"internal","type":"link","labelPath":[null,"Damen","Mehr ASOS","10% Studentenrabatt"],"gender":"WW","excludes":["large-viewport"],"largeScreenPriority":0,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fstudents-feb-2018-6m","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fstudents-feb-2018-6m","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"141e7ee1-117f-4062-9fba-64617dad2766","alias":"app_download","label":"DIE APP DOWNLOADEN","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fdiscover\u002Four-apps\u002F","linkType":"internal","type":"link","labelPath":[null,"Damen","Mehr ASOS","DIE APP DOWNLOADEN"],"gender":"WW","excludes":["large-viewport"],"largeScreenPriority":0,"smallAndMediumImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw-moreasos-app-6m","largeScreenImageUrl":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmw-moreasos-app-6m","largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]}]}]}],"footer":[{"id":"bf83f496-32c3-4a13-99e4-03591f384ff0","alias":null,"label":"Hilfe & Informationen","subtitle":null,"type":"container","labelPath":[null,"Hilfe & Informationen"],"gender":null,"excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":0,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[{"id":"cae1c77d-03dc-4576-9d56-f79a6107b616","alias":null,"label":"Hilfe","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fkundenservice\u002Fkundenbetreuung\u002Fhilfe\u002F","linkType":"internal","type":"link","labelPath":[null,"Hilfe & Informationen","Hilfe"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"943dcfe2-0f7d-462c-aa87-49551dc11582","alias":"track_my_order","label":"Sendungsverfolgung","subtitle":null,"link":"https:\u002F\u002Fmy.asos.com\u002Fmy-account\u002Forders","linkType":"internal","type":"link","labelPath":[null,"Hilfe & Informationen","Sendungsverfolgung"],"gender":"track_my_order","excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"cdde35c1-8dc6-4155-be76-5375557cc130","alias":null,"label":"Lieferung & Rücksendung","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fkundenservice\u002Flieferung\u002F","linkType":"internal","type":"link","labelPath":[null,"Hilfe & Informationen","Lieferung & Rücksendung"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"be777d74-74eb-45b5-94b9-847bc920b707","alias":null,"label":"Premier-Lieferung","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fkundenservice\u002Fpremier-lieferung\u002F","linkType":"internal","type":"link","labelPath":[null,"Hilfe & Informationen","Premier-Lieferung"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"b8153015-5677-4868-ba6f-f62d7acb0b76","alias":null,"label":"10% Studentenrabatt","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fentdecken\u002Fstudents\u002Fasos-on-campus\u002Fstudent-validation\u002F","linkType":"internal","type":"link","labelPath":[null,"Hilfe & Informationen","10% Studentenrabatt"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]}]},{"id":"40c844fa-6ad4-405f-acba-2e7da3f29601","alias":null,"label":"Mehr Über ASOS","subtitle":null,"type":"container","labelPath":[null,"Mehr Über ASOS"],"gender":null,"excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":0,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[{"id":"53efc998-db49-4cc7-a581-a778493c8025","alias":null,"label":"Über uns","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fabout\u002F","linkType":"internal","type":"link","labelPath":[null,"Mehr Über ASOS","Über uns"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"cf11aaa6-e505-4786-b8c8-365831b8f44f","alias":null,"label":"Karriere bei ASOS","subtitle":null,"link":"https:\u002F\u002Fasoscareers.asos.com\u002F","linkType":"external","type":"link","labelPath":[null,"Mehr Über ASOS","Karriere bei ASOS"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"a6ae2b02-2054-4ba5-b148-e6a30d99101d","alias":null,"label":"Unternehmensverantwortung","subtitle":null,"link":"https:\u002F\u002Fwww.asosplc.com\u002Fcorporate-responsibility.aspx","linkType":"external","type":"link","labelPath":[null,"Mehr Über ASOS","Unternehmensverantwortung"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"84eb9f88-75aa-4d44-805b-b4788a8b4631","alias":null,"label":"Investoren","subtitle":null,"link":"https:\u002F\u002Fwww.asosplc.com\u002F","linkType":"external","type":"link","labelPath":[null,"Mehr Über ASOS","Investoren"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]}]},{"id":"4f996f67-d7dc-4271-844d-afd81294e500","alias":null,"label":"Weitere ASOS-Sites","subtitle":null,"type":"container","labelPath":[null,"Weitere ASOS-Sites"],"gender":null,"excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":0,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[{"id":"81ae06be-738d-46c1-ae78-0043c33c2b11","alias":null,"label":"Geschenkgutscheine","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fgift-vouchers\u002F?ctaref=global%20footer|gift%20vouchers","linkType":"internal","type":"link","labelPath":[null,"Weitere ASOS-Sites","Geschenkgutscheine"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"10511d26-bbd4-46d4-827b-850f5ebf4f3f","alias":null,"label":"Mobile Seite & ASOS Apps","subtitle":null,"link":"https:\u002F\u002Fwww.asos.de\u002Fentdecken\u002Funsere-apps\u002F","linkType":"internal","type":"link","labelPath":[null,"Weitere ASOS-Sites","Mobile Seite & ASOS Apps"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"dea39e4a-46db-45a5-b437-9cd24cca7eef","alias":null,"label":"ASOS Marketplace","subtitle":null,"link":"https:\u002F\u002Fmarketplace.asos.com\u002F","linkType":"external","type":"link","labelPath":[null,"Weitere ASOS-Sites","ASOS Marketplace"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]}]}]},"regionalStore":{"storeCode":"DE","siteId":4,"defaultLanguage":"de-DE","defaultSizeSchema":"DE","defaultCurrency":"EUR","paymentProviders":[{"name":"klarna","logo":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fklarna-de-png"},{"name":"paypal","logo":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fpay-pal-png"},{"name":"visa","logo":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fvisa-png"},{"name":"mastercard","logo":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fmastercard-png"},{"name":"sofort","logo":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fsofort-png"},{"name":"americanexpress","logo":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Famerican-express-png"},{"name":"visaelectron","logo":"https:\u002F\u002Fimages.asos-media.com\u002Fnavigation\u002Fvisa-electron-png"}],"storeUrls":{"default":"https:\u002F\u002Fwww.asos.de\u002F","women":"https:\u002F\u002Fwww.asos.de\u002Fdamen\u002F","men":"https:\u002F\u002Fwww.asos.de\u002Fherren\u002F","secure":"https:\u002F\u002Fsecure.asos.com\u002Fde\u002F"},"socialLinks":{"default":{"Facebook":"https:\u002F\u002Fwww.facebook.com\u002FASOS\u002F","Instagram":"https:\u002F\u002Fwww.instagram.com\u002Fasos_de\u002F","Snapchat":"https:\u002F\u002Fwww.snapchat.com\u002Fadd\u002Fasosfashion"},"women":{"Facebook":"https:\u002F\u002Fwww.facebook.com\u002FASOS\u002F","Instagram":"https:\u002F\u002Fwww.instagram.com\u002Fasos_de\u002F","Snapchat":"https:\u002F\u002Fwww.snapchat.com\u002Fadd\u002Fasosfashion"},"men":{"Facebook":"https:\u002F\u002Fwww.facebook.com\u002FASOS\u002F","Instagram":"http:\u002F\u002Fwww.instagram.com\u002Fasos_de\u002F","Snapchat":"https:\u002F\u002Fwww.snapchat.com\u002Fadd\u002Fasosfashion"}},"countryName":"Germany","countryCode":"DE","countryFlag":"https:\u002F\u002Fassets.asosservices.com\u002Fstoresa\u002Fimages\u002Fflags\u002Fde.png","keyStoreDataversion":"p1swt7e-15","variants":{"fcnu4gt-12":{"siteId":4,"storeCode":"DE","defaultLanguage":"de-DE","defaultSizeSchema":"DE","defaultCurrency":"EUR","url":"www.asos.de","countryCode":"DE","imageUrl":"https:\u002F\u002Fassets.asosservices.com\u002Fstoresa\u002Fimages\u002Fflags\u002Fde.png","name":"Germany","majorCountry":null,"isDefaultCountry":false,"currencies":[{"currency":"EUR","symbol":"€","text":"€ EUR","isPrimary":true,"currencyId":19},{"currency":"CHF","symbol":"₣","text":"₣ CHF","isPrimary":false,"currencyId":14}],"languages":[{"language":"de-DE","name":"German","text":"German","languageShort":"de","isPrimary":true}],"sizeSchemas":[{"sizeSchema":"UK","text":"UK","isPrimary":false},{"sizeSchema":"US","text":"US","isPrimary":false},{"sizeSchema":"DE","text":"DE","isPrimary":true}],"keyStoreDataversion":"fcnu4gt-12","storeUrls":{"default":"https:\u002F\u002Fwww.asos.de\u002F","women":"https:\u002F\u002Fwww.asos.de\u002Fdamen\u002F","men":"https:\u002F\u002Fwww.asos.de\u002Fherren\u002F","secure":"https:\u002F\u002Fsecure.asos.com\u002Fde\u002F"}},"rja8w2a-13":{"siteId":4,"storeCode":"DE","defaultLanguage":"de-DE","defaultSizeSchema":"DE","defaultCurrency":"EUR","url":"www.asos.de","countryCode":"DE","imageUrl":"https:\u002F\u002Fassets.asosservices.com\u002Fstoresa\u002Fimages\u002Fflags\u002Fde.png","name":"Germany","majorCountry":null,"isDefaultCountry":false,"currencies":[{"currency":"EUR","symbol":"€","text":"€ EUR","isPrimary":true,"currencyId":19},{"currency":"CHF","symbol":"₣","text":"₣ CHF","isPrimary":false,"currencyId":14}],"languages":[{"language":"de-DE","name":"German","text":"German","languageShort":"de","isPrimary":true}],"sizeSchemas":[{"sizeSchema":"UK","text":"UK","isPrimary":false},{"sizeSchema":"US","text":"US","isPrimary":false},{"sizeSchema":"DE","text":"DE","isPrimary":true}],"keyStoreDataversion":"rja8w2a-13","storeUrls":{"default":"https:\u002F\u002Fwww.asos.de\u002F","women":"https:\u002F\u002Fwww.asos.de\u002Fdamen\u002F","men":"https:\u002F\u002Fwww.asos.de\u002Fherren\u002F","secure":"https:\u002F\u002Fsecure.asos.com\u002Fde\u002F"}},"zk2a8dh-14":{"siteId":4,"storeCode":"DE","defaultLanguage":"de-DE","defaultSizeSchema":"DE","defaultCurrency":"EUR","url":"www.asos.de","countryCode":"DE","imageUrl":"https:\u002F\u002Fassets.asosservices.com\u002Fstoresa\u002Fimages\u002Fflags\u002Fde.png","name":"Germany","majorCountry":null,"isDefaultCountry":false,"currencies":[{"currency":"EUR","symbol":"€","text":"€ EUR","isPrimary":true,"currencyId":19},{"currency":"CHF","symbol":"₣","text":"₣ CHF","isPrimary":false,"currencyId":14}],"languages":[{"language":"de-DE","name":"German","text":"German","languageShort":"de","isPrimary":true}],"sizeSchemas":[{"sizeSchema":"UK","text":"UK","isPrimary":false},{"sizeSchema":"US","text":"US","isPrimary":false},{"sizeSchema":"DE","text":"DE","isPrimary":true}],"keyStoreDataversion":"zk2a8dh-14","storeUrls":{"default":"https:\u002F\u002Fwww.asos.de\u002F","women":"https:\u002F\u002Fwww.asos.de\u002Fdamen\u002F","men":"https:\u002F\u002Fwww.asos.de\u002Fherren\u002F","secure":"https:\u002F\u002Fsecure.asos.com\u002Fde\u002F"}}},"currencies":[{"currency":"EUR","symbol":"€","text":"€ EUR","isPrimary":true,"currencyId":19},{"currency":"CHF","symbol":"₣","text":"₣ CHF","isPrimary":false,"currencyId":14}],"phrases":{"GDPR":{"ContactPreferences":{"Header":"Du hast es in der Hand %{name}","Description":"Bist du noch happy mit den Infos, die du von uns bekommst? Wenn nicht, kannst du sie einfach in deinen Kontakteinstellungen bearbeiten.","Channels":"Verschickt per E-Mail, SMS oder beides","EditButton":"Einstellungen bearbeiten","KeepButton":"Weiterhin erhalten","LoginButton":"Einstellungen bearbeiten","OptOutButton":"Abmelden","PrivacyLink":"Datenschutzrichtlinie","Terms":"Allgemeinen Geschäftsbedingungen","Deadline":{"Header":"Das Gesetzt hat sich geändert","Description":"Deshalb hast du in letzter Zeit keine Mails mehr von uns bekommen. Wenn du wieder auf dem Laufenden sein willst, meld dich neu an und sag uns, welche News du wirklich lesen willst.","KeepButton":"Für News anmelden","OptOutButton":"Keine News mehr erhalten"}},"GreetingButton":"Inhalte auswählen","GreetingButtonError":"Nochmal versuchen","Greeting":"Was willst du von uns erfahren?","GreetingLabel":"Hi %{name}. %{greeting}","GreetingLabelError":"Oopsie! Da ist wohl was schiefgelaufen. Versuch's bitte nochmal.","InConfirmationBody":"Erledigt! Und denk dran: Diese Infos kannst du jederzeit in deinen Kontakteinstellungen bearbeiten.","InConfirmationHeading":"Geschafft!","OutConfirmationBody":"Du wurdest jetzt erfolgreich abgemeldet. Es kann allerdings bis zu 7 Tage dauern bis die Änderung in Kraft tritt. Sehnsucht nach uns? Du kannst dich in den Kontakteinstellung jederzeit wieder anmelden.","OutConfirmationHeading":"Oh, schade!","PreferencesButton":"Kontakteinstellungen bearbeiten","ShoppingButton":"Jetzt shoppen"},"MyAccountLinks":{"ContactPreferences":"Kontakteinstellungen","Greeting":"Hallo %{name}","MyAccount":"Mein Konto","MyOrders":"Meine Bestellungen","ReturnsInformation":"Informationen zur Rücksendung","ReturnsInformationLink":"kundenservice\u002Fkundenbetreuung\u002Fhilfe\u002F?help=\u002Fapp\u002Ftopiclanding\u002Fp\u002F90","SignInLabel":"Anmelden","SignOutLabel":"Abmelden","SignUpLabel":"Registrieren","SignUpLink":"\u002Fregister","Welcome":"Willkommen"},"MiscBar":{"Marketplace":"Marketplace","Help":"Hilfe und FAQ","HelpLink":"kundenservice\u002Fkundenbetreuung\u002Fhilfe\u002F"},"Header":{"HomeAlt":"ASOS-Logo, zurück zur Startseite","WomenFloor":"DAMEN","WomensProductsAriaLabel":"Produkte für Mädels","MenFloor":"HERREN","MensProductsAriaLabel":"Produkte für Jungs"},"LegalBar":{"Privacy":"Datenschutz und Cookies","PrivacyLink":"datenschutz\u002F","Terms":"AGB","TermsLink":"allgemeine-geschaftsbedingungen\u002F","Accessibility":"Barrierefreiheit","AccessibilityLink":"barrierefreiheit\u002F"},"SidePanel":{"NavigationLabel":"Hauptmenü","CloseNavigationLabel":"Hauptmenü schließen"},"SearchBar":{"Label":"Nach Artikeln, Marken und Inspiration suchen","RecentSearches":"Zuletzt gesucht","ClearRecentSearchesLabel":"Letzte Suchanfragen löschen","ClearRecentSearchesText":"Löschen","Placeholder":"Suche"},"Burger":{"OpenNavigationLabel":"Hauptmenü öffnen"},"Icon":{"Search":"Suche","Close":"Schließen","MyAccount":"Mein Konto","SavedItems":"Gespeichert","Bag":"Tasche"},"Bag":{"Link":"bag"},"MiniBag":{"Name":"Name","Price":"Preis","Color":"Farbe","Quantity":"Anzahl","Qty":"Anz.","Size":"Größe","RRP":"UVP","ItemCount":"%{smart_count} Artikel |||| %{smart_count} Artikel","MyBag":"Meine Tasche","Footer":{"BagLinks":{"Bag":{"Text":"Tasche Anzeigen"},"Checkout":{"Text":"Kasse"}},"DeliveryProposition":{"Title":"Kostenloser Versand Weltweit*","Description":"Mehr Infos ","LinkText":"hier","DeliveryInformationLink":"kundenservice\u002Flieferung\u002F"},"MaximumItemsMessage":"Hier können nur 20 Artikel angezeigt werden.","ViewBagMessage":{"PartOne":"Bitte klicke auf ","Link":"meine Tasche anzeigen","PartTwo":", um alle Artikel zu sehen."}},"reservationMessage":"Der Artikel liegt in deiner Tasche und ist für 60 Minuten reserviert.","subscriptionConfirmationMessage":"Der Artikel liegt in deiner Tasche.","voucherConfirmationMessage":"Der Artikel liegt in deiner Tasche.","ErrorMessage":{"firstLine":"Oopsie! Es ist ein Problem aufgetreten.","secondLine":"Bitte versuche es später noch einmal."},"DismissNotificationBtnText":"Meldung ignorieren","DeleteBagItemText":"Artikel löschen","SubTotal":{"Title":"Zwischensumme","USSalesTax":"(ohne mehrwertsteuer)"},"ItemDeleted":"Artikel gelöscht"},"SavedItems":{"Link":"saved-items"},"CountrySelectorButton":{"Heading":"Einkaufen aus","ChangeCountry":"Land auswählen","ChangeButton":"Ändern","LocationText":"Du bist in"},"CookieDisclaimer":{"summary":"ASOS verwendet Cookies.","readMore":"Mehr Infos zu unseren Cookie-Richtlinien.","link":"entdecken\u002Fmarketing-terms-and-conditions\u002Fprivacy-policy-cookies\u002F?r=1"},"Errors":{"SomethingDoesntLookRight":"Hoppla! Irgend etwas scheint nicht korrekt zu sein."},"UnsupportedBrowserMessage":{"Header":"Browser-Unterstützung","Details":"Für ein optimales Nutzererlebnis bei ASOS empfehlen wir die Verwendung der neuesten Versionen von Chrome, Firefox, Safari oder Internet Explorer."},"Accessibility":{"SkipToContent":"Zum Hauptinhalt überspringen"}}},"countrySelector":{"alternateUrls":{}},"features":{"features":{"stc-welcome-mat-changes":false,"stc-use-modern-search-url":true,"stc-gdpr-phase-two":true,"stc-gdpr-deadline-copy":true,"stc-global-banner-content-api":true,"gbl-should-use-https":true,"stc-minibag-dropdown":true,"stc-halloween":false,"gbl-us-sales-tax":true,"web-event-icon":{"christmas":false,"halloween":false,"valentines":false,"stPatricks":false},"stc-mdot-disabled":true,"acc-alist-end-pt2":true,"acc-alist-end-pt3":true,"acc-int-vouchers":true},"mvt":{"t1257-category-header-test-web":false}}}
        window.__siteChromeInitialStore.countrySelector.alternateUrls["en-GB"] = {languageCode: "en-GB", url: "https://www.asos.com/asos-design/asos-design-extreme-super-skinny-jeans-in-black/prd/6655290" };window.__siteChromeInitialStore.countrySelector.alternateUrls["en-US"] = {languageCode: "en-US", url: "https://us.asos.com/asos-design/asos-design-extreme-super-skinny-jeans-in-black/prd/6655290" };window.__siteChromeInitialStore.countrySelector.alternateUrls["fr-FR"] = {languageCode: "fr-FR", url: "https://www.asos.fr/asos-design/asos-design-jean-extreme-skinny-noir/prd/6655290" };window.__siteChromeInitialStore.countrySelector.alternateUrls["de-DE"] = {languageCode: "de-DE", url: "https://www.asos.de/asos-design/asos-design-extrem-enge-jeans-in-schwarz/prd/6655290" };window.__siteChromeInitialStore.countrySelector.alternateUrls["it-IT"] = {languageCode: "it-IT", url: "https://www.asos.com/it/asos-design/asos-design-jeans-extreme-skinny-neri/prd/6655290" };window.__siteChromeInitialStore.countrySelector.alternateUrls["es-ES"] = {languageCode: "es-ES", url: "https://www.asos.com/es/asos-design/vaqueros-muy-ajustados-negros-de-asos-design/prd/6655290" };window.__siteChromeInitialStore.countrySelector.alternateUrls["en-AU"] = {languageCode: "en-AU", url: "https://www.asos.com/au/asos-design/asos-design-extreme-super-skinny-jeans-in-black/prd/6655290" };window.__siteChromeInitialStore.countrySelector.alternateUrls["ru-RU"] = {languageCode: "ru-RU", url: "https://www.asos.com/ru/asos-design/chernye-superoblegayuschie-dzhinsy-asos-design/prd/6655290" };window.__siteChromeInitialStore.countrySelector.alternateUrls["sv-SE"] = {languageCode: "sv-SE", url: "https://www.asos.com/se/asos-design/asos-design-svarta-jeans-i-extreme-super-skinny-passform/prd/6655290" };window.__siteChromeInitialStore.countrySelector.alternateUrls["nl-NL"] = {languageCode: "nl-NL", url: "https://www.asos.com/nl/asos-design/asos-design-extreme-superskinny-jeans-in-zwart/prd/6655290" };
      </script>
        <script src="https://assets.asosservices.com/shared/dll.vendor.cc8860.js"></script>
<script src="https://assets.asosservices.com/sitechromepublisher/10.0.9181//dist/client.sitechrome.72d459.js"></script>
        <div id="chrome-header"><header data-reactroot=""><a href="#chrome-app-container" class="_2ddmVSH" data-testid="skip-to-content">Zum Hauptinhalt überspringen</a><div class="_3lW8Y31" data-testid="unsupported-browser-message"><div class="_1eJmCBp"><div class="_23QFXRT"><div class="_2PQizAW">Browser-Unterstützung</div><div class="_3CnPFRy">Für ein optimales Nutzererlebnis bei ASOS empfehlen wir die Verwendung der neuesten Versionen von Chrome, Firefox, Safari oder Internet Explorer.</div></div></div></div><div class="_2mW0vnV" data-testid="topbar"><div class="_2kDR6LR"><ul class="_2gP-s5Y"><li><a href="https://marketplace.asos.com?ctaref=Global%20nav" data-testid="marketplace">Marketplace</a></li><li><a href="https://www.asos.de/kundenservice/kundenbetreuung/hilfe/" data-testid="help">Hilfe und FAQ</a></li><li><div class="_2yzMbJD" data-testid="country-selector"><button class="YvZ3lbB" data-testid="country-selector-btn" type="button" aria-label="Einkaufen aus Germany. Land auswählen"><img src="https://assets.asosservices.com/storesa/images/flags/de.png" alt="Germany" class="_2S5PiQY"/></button></div></li></ul></div></div><div class="_2qbxfQF headroom-wrapper"><div id="chrome-sticky-header" class="headroom headroom--unfixed"><div class="_2tINcUI"><div class="_1UGQQJn" data-testid="header"><button class="_387JN2Z" aria-label="Hauptmenü öffnen" tabindex="0" data-testid="burger-menu-button"></button><a class="_25irHcd" href="https://www.asos.de/" data-testid="asoslogo"><svg class="_23G0l8x" width="104" height="30" viewBox="0 0 104 30" role="img" aria-labelledby="home-logo"><title id="home-logo">ASOS-Logo, zurück zur Startseite</title><path fill="#FFF" fill-rule="evenodd" d="M71.83 21.983c-1.558 1.666-3.56 2.51-5.95 2.51-2.387 0-4.39-.844-5.947-2.51-1.488-1.587-2.343-4.124-2.343-6.96 0-2.766.864-5.27 2.37-6.867 1.572-1.667 3.565-2.516 5.92-2.523 2.36.007 4.35.856 5.924 2.523 1.506 1.598 2.37 4.1 2.37 6.867 0 2.836-.855 5.373-2.343 6.96zm-20.915-6.96c0 .128.005.255.008.38-2.39-2.166-5.845-2.974-7.957-3.394-3.907-.82-6.89-1.58-6.89-4.35 0-1.96 1.757-3.38 5.132-3.14 3.085.224 4.384 2.102 4.74 3.914.05.3.19.515.53.517l5.547.05c.026 0 .048-.003.072-.004-.783 1.816-1.182 3.84-1.182 6.015zM41.48 25.19c-2.683 0-5.64-.95-6.32-4.624-.06-.35-.225-.496-.495-.503l-5.364-.07v-9.446c.71 2.768 3.04 4.684 8.09 5.816 3.38.806 9.24 1.318 9.24 4.774 0 2.408-1.78 4.11-5.15 4.054zm-26.714-.69c-4.327 0-8.29-3.394-8.29-9.47 0-4.77 2.97-9.39 8.32-9.39 2.315 0 8.188.79 8.188 9.39 0 8.62-6.132 9.47-8.218 9.47zm65.922-11.792c1.232 1.636 3.453 2.848 7.063 3.657 3.38.805 9.25 1.318 9.25 4.775 0 2.403-1.78 4.11-5.15 4.05-2.68 0-5.64-.95-6.32-4.625-.052-.35-.22-.497-.49-.504L80.06 20c.523-1.54.79-3.21.79-4.974 0-.793-.056-1.566-.16-2.317zM91.474 30c5.95 0 12.965-2.208 12.416-9.366-.606-6.355-7.244-7.964-10.562-8.625-3.907-.82-6.892-1.58-6.892-4.35 0-1.96 1.758-3.38 5.134-3.14 3.084.224 4.384 2.102 4.74 3.914.05.3.19.515.53.517l5.546.048c.422.002.554-.216.5-.516C101.8 1.874 96.246 0 91.133 0 86.03 0 79.88 1.43 79.443 7.754c-.015.246-.02.486-.02.722-.814-1.683-1.985-3.23-3.495-4.597C73.142 1.37 69.666.03 65.878 0h-.127c-1.81 0-3.58.333-5.26.99a15.26 15.26 0 0 0-4.65 2.888c-1.43 1.295-2.56 2.747-3.36 4.327C51.27 1.822 45.81 0 40.77 0 36.084 0 30.517 1.208 29.3 6.305v-5.06a.49.49 0 0 0-.49-.488h-5.224c-.27 0-.49.22-.49.49V2.61c0 .23-.155.31-.343.175-1.858-1.34-4.607-2.782-7.915-2.782-1.86 0-3.635.326-5.277.968-1.64.65-3.2 1.63-4.64 2.92C3.29 5.37 2.05 7.05 1.23 8.9.417 10.742 0 12.807 0 15.027 0 17.1.367 19.043 1.088 20.8c.722 1.756 1.82 3.382 3.267 4.83 1.446 1.45 3.063 2.553 4.804 3.276 1.74.722 3.66 1.09 5.7 1.09 3.51 0 6.15-1.493 7.88-2.85.19-.144.342-.067.342.17v1.435c0 .27.22.49.49.49H28.8c.27 0 .49-.22.49-.49v-4.83C31.766 29.7 38.04 30 41.113 30c5.137 0 11.06-1.647 12.234-6.7.55.818 1.192 1.597 1.924 2.33 2.8 2.807 6.47 4.316 10.62 4.362h.17c1.97 0 3.87-.377 5.648-1.12a14.82 14.82 0 0 0 4.79-3.242 15.25 15.25 0 0 0 2.594-3.43c1.86 7.438 9.035 7.8 12.387 7.8z"></path></svg></a><ul class="_2htQAml _3nGd4mQ" data-testid="floornav"><li><a class="_1DZnw9e" data-testid="women-floor" href="https://www.asos.de/damen/" aria-label="Produkte für Mädels">DAMEN</a></li><li><a class="_1DZnw9e" data-testid="men-floor" href="https://www.asos.de/herren/" aria-label="Produkte für Jungs">HERREN</a></li></ul><div class="_AXFL6D"><div class="_2OrxWsX" aria-hidden="true" data-testid="search-overlay-shadow"></div><form action="//www.asos.de/search/" method="get" class="_2Idp6BM" data-testid="search-form"><div class="_3mgvuXW" data-testid="search-field"><label for="chrome-search"><span class="_1eJyqnP">Nach Artikeln, Marken und Inspiration suchen</span><input type="search" id="chrome-search" name="q" role="combobox" class="_2z-tgin" autoComplete="off" placeholder="Suche" data-testid="search-input" aria-autocomplete="both" aria-controls="search-results" aria-expanded="false" maxLength="150"/></label><button class="_1PEaSbT" type="submit" data-testid="search-button-inline" disabled=""><svg viewBox="0 0 17 17" role="img" aria-labelledby="search-icon"><title id="search-icon">Suche</title><path fill="currentColor" fill-rule="nonzero" d="M7.65 15.3a7.65 7.65 0 1 1 5.997-2.9c-.01.012 3.183 3.297 3.183 3.297l-1.22 1.18s-3.144-3.283-3.154-3.275A7.618 7.618 0 0 1 7.65 15.3zm0-2a5.65 5.65 0 1 0 0-11.3 5.65 5.65 0 0 0 0 11.3z"></path></svg></button><section class="_15ReAU2"></section></div></form></div><ul class="_1OLInBo" data-testid="widgets"><li class="_2F9qY-C _46ucpdl"><div><div><div id="myAccountDropdown" class="xLEaimc" role="presentation"><button type="button" icon="accountUnfilled" data-testid="accountIcon" class="_3TGKcxB wN7TsRy" aria-expanded="false" aria-controls="myaccount-dropdown" aria-label="Mein Konto"><span class="_31xW4F2 OLtHnkd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" focusable="false">
  <path fill="#fff" d="M14 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm2 0A6 6 0 1 1 4 6a6 6 0 0 1 12 0zm-6 9c-3.068 0-5.67 1.223-7.035 3h14.07c-1.365-1.777-3.967-3-7.035-3zm10 5H0c.553-4.006 4.819-7 10-7s9.447 2.994 10 7z"></path>
</svg>
</span></button><div class="_1__Ug8F" data-testid="myaccount-dropdown" id="myaccount-dropdown"><div class="_2jIx_En"><div class="_2Ydfmv-"><div class="Zb-NiHG"><div class="VbnjanM"><span class="_1GV6Ntf"><a class="_1k1reGo" href="https://my.asos.com/my-account?lang=de-DE&amp;store=DE&amp;country=DE&amp;keyStoreDataversion=p1swt7e-15" data-testid="signin-link" tabindex="-1">Anmelden</a><div class="_1tXI178"></div><a class="_1k1reGo" href="https://my.asos.com/identity/register?lang=de-DE&amp;store=DE&amp;country=DE&amp;keyStoreDataversion=p1swt7e-15&amp;returnUrl=false" data-testid="signup-link" tabindex="-1">Registrieren</a></span></div><button type="button" icon="close" class="_3TGKcxB _3rZlkmo" tabindex="-1" data-testid="myaccount-close-btn" aria-label="Schließen"><span class="_31xW4F2 OLtHnkd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" focusable="false">
    <path d="M9.97 8.274L2.335.637.637 2.334 8.274 9.97.637 17.607l1.697 1.697 7.637-7.636 7.636 7.636 1.697-1.697-7.636-7.636 7.636-7.637L17.607.637 9.971 8.274z"/>
</svg>
</span></button></div><div class="_4dx9Nn7"><a href="https://my.asos.com/my-account?country=DE&amp;keyStoreDataversion=p1swt7e-15&amp;lang=de-DE&amp;nlid=nav%20header&amp;store=DE" class="_1U-LQGT CbK3vyi" tabindex="-1" data-testid="myaccount-link">Mein Konto</a><a href="https://my.asos.com/my-account/orders?country=DE&amp;keyStoreDataversion=p1swt7e-15&amp;lang=de-DE&amp;nlid=nav%20header&amp;store=DE" class="_1U-LQGT sEG4Jt8" tabindex="-1" data-testid="myorders-link">Meine Bestellungen</a><a href="https://www.asos.de/kundenservice/kundenbetreuung/hilfe/?help=/app/topiclanding/p/90&amp;nlid=nav%20header" class="_1U-LQGT gWnk_r7" tabindex="-1" data-testid="returnsinformation-link">Informationen zur Rücksendung</a><a href="https://my.asos.com/my-account/contact-preferences?country=DE&amp;keyStoreDataversion=p1swt7e-15&amp;lang=de-DE&amp;nlid=nav%20header&amp;store=DE" class="_1U-LQGT lWdTQ9X" tabindex="-1" data-testid="contactpreferences-link">Kontakteinstellungen</a></div></div></div></div></div></div></div></li><li class="_2F9qY-C"><a type="a" href="https://www.asos.de/saved-items?nlid=nav header" icon="heartUnfilled" data-testid="savedItemsIcon" class="_3TGKcxB wN7TsRy" aria-label="Gespeichert"><span class="_31xW4F2 OLtHnkd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18">
    <path fill="#FFF" fill-rule="nonzero" d="M10.618 15.474a21.327 21.327 0 0 0 3.137-2.076c2.697-2.166 4.249-4.619 4.245-7.299-.003-2.284-1.757-4.101-3.881-4.099-1.016 0-1.97.417-2.69 1.158l-1.43 1.467-1.432-1.463a3.748 3.748 0 0 0-2.695-1.151C3.749 2.013 1.998 3.837 2 6.12c.003 2.677 1.559 5.123 4.256 7.281a21.32 21.32 0 0 0 3.756 2.39c.191-.096.394-.202.606-.318zM9.996 1.763l.203-.2A5.726 5.726 0 0 1 14.116 0c3.246-.004 5.88 2.725 5.884 6.097C20.01 13.845 10.014 18 10.014 18S.01 13.87 0 6.124C-.003 2.752 2.624.014 5.87.01A5.733 5.733 0 0 1 9.79 1.564l.205.199z"/>
</svg>
</span></a></li><li class="_2F9qY-C"><a type="a" href="https://www.asos.de/bag?nlid=nav header" icon="bagUnfilled" data-testid="bagIcon" class="_3TGKcxB wN7TsRy" aria-label="Tasche %{smart_count} Artikel |||| %{smart_count} Artikel"><span class="_31xW4F2 OLtHnkd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path fill="#FFF" fill-rule="nonzero" d="M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0 1 10 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z"/>
</svg>
</span></a></li></ul></div></div><div><div><nav aria-hidden="true" class="_3kg3G5e _3VhrZsw" data-testid="primarynav-large"><div class="_25By0Z8"><div class="_3r7rW4o" role="tablist"><button data-id="1020946c-8949-4e9c-9719-43435002bcd4" data-index="0" role="tab" tabindex="0" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Neu</span></span></button><button data-id="96b432e3-d374-4293-8145-b00772447cde" data-index="1" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Bekleidung</span></span></button><button data-id="0edf7894-4f2f-42fb-896d-3e91a01704b1" data-index="2" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Schuhe</span></span></button><button data-id="415ffca1-8c1a-48a7-8997-9cc4929a7134" data-index="3" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Accessoires</span></span></button><button data-id="d21e53a8-79e6-491d-91b3-8c0e2c21a3a1" data-index="4" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Activewear</span></span></button><button data-id="b2164f1d-48aa-417d-9d1a-5cffa7eb1bb2" data-index="5" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Pflegen + Schminken</span></span></button><button data-id="31c83989-24f4-452d-a984-0a9afd03c369" data-index="6" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Wohnen + Geschenke</span></span></button><button data-id="796c1478-6471-4acf-a952-049a9154b668" data-index="7" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Marken</span></span></button><button data-id="a92844a0-3b5b-41b6-ad85-9ca81f5c24f1" data-index="8" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class="_2mZjF9Z"><span>Outlet</span></span></button><button data-id="58b7bec6-2318-4e4e-a97d-e5acdb8cb269" data-index="9" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Marketplace</span></span></button><button data-id="f801c24f-60c9-459a-a021-ea6a313adf0a" data-index="10" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Inspiration</span></span></button></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="1020946c-8949-4e9c-9719-43435002bcd4" data-testid="secondarynav-flyout"><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NEUE ARTIKEL</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/neu/cat/?cid=27108&amp;nlid=ww|neu|neue+artikel" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/neu/neu-in-bekleidung/cat/?cid=2623&amp;nlid=ww|neu|neue+artikel" target="_self">Bekleidung</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/neu/neu-in-schuhe/cat/?cid=6992&amp;nlid=ww|neu|neue+artikel" target="_self">Schuhe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/neu/accessoires/cat/?cid=27109&amp;nlid=ww|neu|neue+artikel" target="_self">Accessoires</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/neu/neu/cat/?cid=2426&amp;nlid=ww|neu|neue+artikel" target="_self">Pflegen + Schminken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/neu/wohnen-geschenke/cat/?cid=28354&amp;nlid=ww|neu|neue+artikel" target="_self">Wohnen + Geschenke</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/neu-in-wieder-vorratig/cat/?cid=17204&amp;nlid=ww|neu|neue+artikel" target="_self">Wieder vorrätig</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/women/new-in/cat/?cid=27108&amp;refine=brand:53,13511,13510,13512,14162&amp;nlid=ww|neu|neue+artikel" target="_self">ASOS DESIGN</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH KATEGORIE SHOPPEN</span></div><div class="_3j3wPvK"><a class="_3V0KF--" href="https://www.asos.de/damen/curve-groe-groen/neu/cat/?cid=9578&amp;nlid=ww|neu|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/WW_NewIn_Plus_5WL_1315148?&amp;$n_240w$)" title="ASOS Curve &amp; Große Größen"></div></div><span>ASOS Curve &amp; Große Größen</span></a><a class="_3V0KF--" href="https://www.asos.de/damen/umstandsmode/neu/cat/?cid=8342&amp;nlid=ww|neu|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/WW_NewIn_Maternity_2M_1202156_220218?&amp;$n_240w$)" title="Umstandsmode"></div></div><span>Umstandsmode</span></a><a class="_3V0KF--" href="https://www.asos.de/damen/petite/neu/cat/?cid=8349&amp;nlid=ww|neu|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/WW_NewIn_Petite_2M_1215017_220218?&amp;$n_240w$)" title="Petite"></div></div><span>Petite</span></a><a class="_3V0KF--" href="https://www.asos.de/damen/tall/neu/cat/?cid=20298&amp;nlid=ww|neu|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_new+in_tall_3m_1328634?&amp;$n_240w$)" title="Tall"></div></div><span>Tall</span></a></div></section><section class="_1QmxDO_ YlqXo8e"><div><span class="_2HjZSOc">Neue Auswahl</span></div><div class="_1NtxSD3"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/ctas/f-s-modetrends-5/cat/?cid=20240&amp;nlid=ww|neu|neue+auswahl" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_asos_design_print_2wl?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">ASOS DESIGN: Animal-Print</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/ctas/online-mode-7/cat/?cid=13502&amp;nlid=ww|neu|neue+auswahl" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_broderie_2wl?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Lochspitze</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="96b432e3-d374-4293-8145-b00772447cde" data-testid="secondarynav-flyout"><section class="_1QmxDO_ YlqXo8e"><div><span class="_2HjZSOc">NACH PRODUKT SHOPPEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/neu/neu-in-bekleidung/cat/?cid=2623&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Neuzugänge</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/activewear/cat/?cid=26091&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Activewear</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/anzuge-einzelteile/cat/?cid=13632&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Anzüge &amp; smarte Teile</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/bademode-strandkleidung/cat/?cid=2238&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Bademode &amp; Strandkleidung</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/exklusiv/cat/?cid=16979&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Exklusiv bei ASOS </a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/hosen-leggings/cat/?cid=2640&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Hosen &amp; Leggings</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/jeans/cat/?cid=3630&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Jeans</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/jumpsuits-und-kurze-jumpsuits/cat/?cid=7618&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Jumpsuits &amp; kurze Jumpsuits</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/oberteile/kapuzenpullis-sweatshirts/cat/?cid=11321&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Kapuzenpullis &amp; Sweatshirts</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/kleider/cat/?cid=8799&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Kleider</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/kombiteile/cat/?cid=19632&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Kombiteile</a></li></ul><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/lingerie-nachtwasche/cat/?cid=6046&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Lingerie &amp; Nachtwäsche</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/loungewear/cat/?cid=21867&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Loungewear</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/mantel-jacken/cat/?cid=2641&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Mäntel &amp; Jacken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/oberteile/cat/?cid=4169&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Oberteile</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pullover-strickjacken/cat/?cid=2637&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Pullover &amp; Strickjacken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/rocke/cat/?cid=2639&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Röcke</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/shorts/cat/?cid=9263&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Shorts</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/socken-strumpfhosen/cat/?cid=7657&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Socken &amp; Strumpfhosen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/special-offer-multipacks/cat/?cid=19224&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">SPECIAL OFFER: Multipacks</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/trainingsanzuge/cat/?cid=27953&amp;nlid=ww|bekleidung|nach+produkt+shoppen" target="_self">Trainingsanzüge</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH KATEGORIE SHOPPEN</span></div><div class="_3j3wPvK"><a class="_3V0KF--" href="https://www.asos.de/damen/curve-groe-groen/cat/?cid=9577&amp;nlid=ww|bekleidung|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_sr_clothing_asoscurve%26plus_global_6wl_1383314?&amp;$n_240w$)" title="ASOS Curve &amp; große Größen"></div></div><span>ASOS Curve &amp; große Größen</span></a><a class="_3V0KF--" href="https://www.asos.de/damen/umstandsmode/cat/?cid=5813&amp;nlid=ww|bekleidung|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_sr_clothing_maternity_global_6wl_1348901?&amp;$n_240w$)" title="Umstandsmode"></div></div><span>Umstandsmode</span></a><a class="_3V0KF--" href="https://www.asos.de/damen/petite/cat/?cid=4177&amp;nlid=ww|bekleidung|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_sr_clothing_petite_global_6wl_1414432?&amp;$n_240w$)" title="Petite"></div></div><span>Petite</span></a><a class="_3V0KF--" href="https://www.asos.de/damen/tall/cat/?cid=18984&amp;nlid=ww|bekleidung|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_sr_clothing_tall_global_6wl_1384651?&amp;$n_240w$)" title="Tall"></div></div><span>Tall</span></a></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH ANLASS SHOPPEN</span></div><div class="_3rpsc2u"><div class="_3X9INkc"><a href="https://www.asos.de/damen/ctas/russland-online-fashion-6/cat/?cid=17413&amp;nlid=ww|bekleidung|nach+anlass+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_clothing_shopbyedit_spring_2m_1369807?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Frühling</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/besondere-anlasse/cat/?cid=15495&amp;nlid=ww|bekleidung|nach+anlass+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_clothing_shop+by+occasion_ball+season_5wl_1349523?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Anlass-Styles</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/ctas/deutschland-online-fashion-5/cat/?cid=15350&amp;nlid=ww|bekleidung|nach+anlass+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/WW_ShopOccasion_CivicService_5WL_1234520_210318?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Hochzeit</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/besondere-anlasse/hochzeits-outfits/cat/?cid=15493&amp;nlid=ww|bekleidung|nach+anlass+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_clothing_shop_by_occasion_wedding_guest_outfits_5wl_1365850?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Hochzeitsgäste</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/urlaub/cat/?cid=14626&amp;nlid=ww|bekleidung|nach+anlass+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_clothing_shop_by_occasion_holiday_5wl_1365850?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Urlaub</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/buro-outfits/cat/?cid=19645&amp;nlid=ww|bekleidung|nach+anlass+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_clothing_shop_by_occasion_workwear_5wl_1365850?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Büro</span></a></div></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="0edf7894-4f2f-42fb-896d-3e91a01704b1" data-testid="secondarynav-flyout"><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH PRODUKT SHOPPEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/schuhe/cat/?cid=4172&amp;nlid=ww|schuhe|nach+produkt+shoppen" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/neu/neu-in-schuhe/cat/?cid=6992&amp;nlid=ww|schuhe|nach+produkt+shoppen" target="_self">Neuzugänge</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/schuhe/absatzschuhe/cat/?cid=6461&amp;nlid=ww|schuhe|nach+produkt+shoppen" target="_self">Absatzschuhe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/schuhe/espadrilles/cat/?cid=13219&amp;nlid=ww|schuhe|nach+produkt+shoppen" target="_self">Espadrilles</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/schuhe/flache-schuhe/cat/?cid=6459&amp;nlid=ww|schuhe|nach+produkt+shoppen" target="_self">Flache Schuhe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/schuhe/hausschuhe/cat/?cid=6457&amp;nlid=ww|schuhe|nach+produkt+shoppen" target="_self">Hausschuhe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/schuhe/sandalen/cat/?cid=6458&amp;nlid=ww|schuhe|nach+produkt+shoppen" target="_self">Sandalen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/schuhe/slipper/cat/?cid=13692&amp;nlid=ww|schuhe|nach+produkt+shoppen" target="_self">Slipper</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/schuhe/sneaker/cat/?cid=6456&amp;nlid=ww|schuhe|nach+produkt+shoppen" target="_self">Sneaker</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/schuhe/stiefel/cat/?cid=6455&amp;nlid=ww|schuhe|nach+produkt+shoppen" target="_self">Stiefel</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">Nach Marke shoppen</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/adidas/cat/?cid=5906&amp;refine=attribute_10992:61388&amp;nlid=ww|schuhe|nach+marke+shoppen" target="_self">adidas</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/asos-design/cat/?cid=27869&amp;refine=attribute_10992:61388&amp;nlid=ww|schuhe|nach+marke+shoppen" target="_self">ASOS DESIGN</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/converse/cat/?cid=2611&amp;refine=attribute_10992:61388&amp;nlid=ww|schuhe|nach+marke+shoppen" target="_self">Converse</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/dr-martens/cat/?cid=4650&amp;refine=attribute_10992:61388&amp;nlid=ww|schuhe|nach+marke+shoppen" target="_self">Dr Martens</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/new-balance/cat/?cid=15892&amp;refine=attribute_10992:61388&amp;nlid=ww|schuhe|nach+marke+shoppen" target="_self">New Balance</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/nike/cat/?cid=5897&amp;refine=attribute_10992:61388&amp;nlid=ww|schuhe|nach+marke+shoppen" target="_self">Nike</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/puma/cat/?cid=4530&amp;refine=attribute_10992:61388&amp;nlid=ww|schuhe|nach+marke+shoppen" target="_self">Puma</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/reebok/cat/?cid=6769&amp;refine=attribute_10992:61388&amp;nlid=ww|schuhe|nach+marke+shoppen" target="_self">Reebok</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/ugg/cat/?cid=2609&amp;refine=attribute_10992:61388&amp;nlid=ww|schuhe|nach+marke+shoppen" target="_self">Ugg</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/vans/cat/?cid=14751&amp;refine=attribute_10992:61388&amp;nlid=ww|schuhe|nach+marke+shoppen" target="_self">Vans</a></li></ul></div></section><section class="_1QmxDO_ YlqXo8e"><div class="_1NtxSD3"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/schuhe/sandalen-mit-absatz/cat/?cid=17169&amp;nlid=ww|schuhe|neue+themen" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_shoes_heeledsandals_2wl_1361509?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Sandalen mit Absatz</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/ctas/online-mode-14/cat/?cid=13511&amp;nlid=ww|schuhe|neue+themen" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_shoes_mules_2wl_1388447?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Mules</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="415ffca1-8c1a-48a7-8997-9cc4929a7134" data-testid="secondarynav-flyout"><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH PRODUKT SHOPPEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/accessoires/cat/?cid=4174&amp;nlid=ww|accessoires|nach+produkt+shoppen" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/neu/accessoires/cat/?cid=27109&amp;nlid=ww|accessoires|nach+produkt+shoppen" target="_self">Neuzugänge</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/accessoires/gurtel/cat/?cid=6448&amp;nlid=ww|accessoires|nach+produkt+shoppen" target="_self">Gürtel</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/accessoires/haarschmuck/cat/?cid=11412&amp;nlid=ww|accessoires|nach+produkt+shoppen" target="_self">Haarschmuck</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/accessoires/handschuhe/cat/?cid=11990&amp;nlid=ww|accessoires|nach+produkt+shoppen" target="_self">Handschuhe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/accessoires/hute/cat/?cid=6449&amp;nlid=ww|accessoires|nach+produkt+shoppen" target="_self">Mützen &amp; Hüte</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/accessoires/schals/cat/?cid=6452&amp;nlid=ww|accessoires|nach+produkt+shoppen" target="_self">Schals</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/schmuck-uhren/cat/?cid=4175&amp;nlid=ww|accessoires|nach+produkt+shoppen" target="_self">Schmuck &amp; Uhren</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/socken-strumpfhosen/cat/?cid=7657&amp;nlid=ww|accessoires|nach+produkt+shoppen" target="_self">Socken &amp; Strumpfhosen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/sonnenbrillen/cat/?cid=4545&amp;nlid=ww|accessoires|nach+produkt+shoppen" target="_self">Sonnenbrillen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/taschen-geldborsen/cat/?cid=8730&amp;nlid=ww|accessoires|nach+produkt+shoppen" target="_self">Taschen &amp; Geldbörsen</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">Nach Marke shoppen</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/asos-design/cat/?cid=27869&amp;refine=attribute_10992:61384,61387&amp;nlid=ww|accessoires|nach+marke+shoppen" target="_self">ASOS DESIGN</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/women/a-to-z-of-brands/aldo/cat/?cid=11476&amp;refine=attribute_10992:61384,61387&amp;nlid=ww|accessoires|nach+marke+shoppen" target="_self">ALDO</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/monki/cat/?cid=17556&amp;refine=attribute_10992:61384,61387&amp;nlid=ww|accessoires|nach+marke+shoppen" target="_self">Monki</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/women/a-to-z-of-brands/orelia/cat/?cid=12388&amp;nlid=ww|accessoires|nach+marke+shoppen" target="_self">Orelia</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/women/a-to-z-of-brands/ray-ban/cat/?cid=4763&amp;nlid=ww|accessoires|nach+marke+shoppen" target="_self">Ray-Ban</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/women/a-to-z-of-brands/skinnydip/cat/?cid=18767&amp;nlid=ww|accessoires|nach+marke+shoppen" target="_self">Skinnydip</a></li><li><a class="_2Aejr0d _1iUbby0" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/cat/?cid=1340&amp;nlid=ww|accessoires|nach+marke+shoppen" target="_self">Marken A-Z</a></li></ul></div></section><section class="_1QmxDO_ YlqXo8e"><div class="_1NtxSD3"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/ctas/h-w-modetrends-8/cat/?cid=20255&amp;nlid=ww|accessoires|neue+themen" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_accessories_naturals_2wl_1456069?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Accessoires aus Holz</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/ctas/f-s-modetrends-9/cat/?cid=20245&amp;nlid=ww|accessoires|neue+themen" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_accessories_goldplated_2wl_1413688?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Vergoldeter Schmuck</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="d21e53a8-79e6-491d-91b3-8c0e2c21a3a1" data-testid="secondarynav-flyout"><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH PRODUKT SHOPPEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/activewear/cat/?cid=26091&amp;nlid=ww|activewear|nach+produkt+shoppen" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/activewear/accessoires/cat/?cid=27162&amp;nlid=ww|activewear|nach+produkt+shoppen" target="_self">Accessoires</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/activewear/jacken/cat/?cid=27166&amp;nlid=ww|activewear|nach+produkt+shoppen" target="_self">Jacken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/activewear/leggings/cat/?cid=27163&amp;nlid=ww|activewear|nach+produkt+shoppen" target="_self">Leggings &amp; Hosen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/activewear/oberteile/cat/?cid=27167&amp;nlid=ww|activewear|nach+produkt+shoppen" target="_self">Oberteile</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/activewear/schuhe/cat/?cid=27165&amp;nlid=ww|activewear|nach+produkt+shoppen" target="_self">Schuhe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/activewear/shorts/cat/?cid=27164&amp;nlid=ww|activewear|nach+produkt+shoppen" target="_self">Shorts</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/activewear/sport-bhs/cat/?cid=27168&amp;nlid=ww|activewear|nach+produkt+shoppen" target="_self">Sport-BHs</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH AKTIVITÄT SHOPPEN</span></div><div class="_3rpsc2u"><div class="_3X9INkc"><a href="https://www.asos.de/damen/activewear/bademode/cat/?cid=27174&amp;nlid=ww|activewear|nach+aktivit%C3%A4t+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_sr_activewear_shopbyactivity_swim_3m_1409779?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Bademode</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/activewear/gym-und-training/cat/?cid=27171&amp;nlid=ww|activewear|nach+aktivit%C3%A4t+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_activewear_gym+training_3m_1271192?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Gym &amp; Training</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/activewear/laufen/cat/?cid=27172&amp;nlid=ww|activewear|nach+aktivit%C3%A4t+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_activewear_running_3m_1253190?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Laufen</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/activewear/outdoor/cat/?cid=27173&amp;nlid=ww|activewear|nach+aktivit%C3%A4t+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_sr_activewear_shopbyactivity_outdoors_3m_1447220?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Outdoor</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/activewear/ski-snowboard/cat/?cid=27519&amp;nlid=ww|activewear|nach+aktivit%C3%A4t+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_sr_activewear_shopbyactivity_ski%26snowboard_3m_1321550?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Ski &amp; Snowboard</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/activewear/yoga-und-studio/cat/?cid=27175&amp;nlid=ww|activewear|nach+aktivit%C3%A4t+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_sr_activewear_shopbyactivity_yoga%26studio_3m_1384910?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Yoga &amp; Studio</span></a></div></div></section><section class="_1QmxDO_ YlqXo8e"><div class="_1NtxSD3"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/ctas/f-s-modetrends-2/cat/?cid=20236&amp;nlid=ww|activewear|neue+themen" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_activewear_curveactivewear_2wl_1401159?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Große Größen: Activewear</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/activewear/accessoires/cat/?cid=27162&amp;nlid=ww|activewear|neue+themen" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_activewear_homegym_2wl_1384888?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Heimsport</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="b2164f1d-48aa-417d-9d1a-5cffa7eb1bb2" data-testid="secondarynav-flyout"><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH PRODUKT SHOPPEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d _2rDFtsg" data-testid="text-link" href="https://www.asos.de/damen/ctas/werbeaktion-1/cat/?cid=28020&amp;nlid=ww|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Bis zu 30% auf Pflege + Schminke</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/women/face-body/cat/?cid=1314&amp;nlid=ww|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/neu/neu/cat/?cid=2426&amp;nlid=ww|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Neuzugänge</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/women/face-body/beauty-gifts/cat/?cid=14312&amp;nlid=ww|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Geschenke</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/korperpflege/cat/?cid=4896&amp;nlid=ww|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Körperpflege</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/make-up/cat/?cid=5020&amp;nlid=ww|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Make-up</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/zubehor-accessoires/cat/?cid=16793&amp;nlid=ww|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Zubehör &amp; Accessoires</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/haarpflege/cat/?cid=5021&amp;nlid=ww|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Haarpflege</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/hautpflege/cat/?cid=4540&amp;nlid=ww|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Hautpflege</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/geschenke-beauty/make-up-sets/cat/?cid=14518&amp;nlid=ww|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Make-up-Sets</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/haarpflege/styling-zubehor/cat/?cid=18626&amp;nlid=ww|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Styling-Zubehör</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">Nach Marke shoppen</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/women/face-body/a-to-z-of-brands/asos-makeup/cat/?cid=27368&amp;nlid=ww|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">ASOS DESIGN Makeup</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/bareminerals/cat/?cid=28594&amp;nlid=ww|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">bareMinerals</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/a-to-z-of-brands/clinique/cat/?cid=14097&amp;nlid=ww|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">Clinique</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/a-to-z-of-brands/ghd/cat/?cid=1904&amp;nlid=ww|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">GHD</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/a-to-z-of-brands/mac/cat/?cid=27849&amp;nlid=ww|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">MAC</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/a-to-z-of-brands/nars/cat/?cid=12778&amp;nlid=ww|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">NARS</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/a-to-z-of-brands/nyx-professional-makeup/cat/?cid=21703&amp;nlid=ww|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">NYX Professional Makeup</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/a-to-z-of-brands/pixi/cat/?cid=5109&amp;nlid=ww|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">Pixi</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/a-to-z-of-brands/the-ordinary/cat/?cid=25861&amp;nlid=ww|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">The Ordinary</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/a-to-z-of-brands/too-faced/cat/?cid=2852&amp;nlid=ww|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">Too Faced</a></li><li><a class="_2Aejr0d _1iUbby0" data-testid="text-link" href="https://www.asos.de/women/beauty/a-to-z-of-brands/cat/?cid=2373&amp;nlid=ww|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">Alle anzeigen</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div class="_1NtxSD3 _26_yujQ"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/neu/neu-in-pflegen-schminken/cat/?cid=2426&amp;nlid=ww|pflegen+%2B+schminken|desktop+only+ctas+(left)" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_face+%26+body_new+in_3wl_1428012?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Neu in</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/pflegen-schminken/a-to-z-of-brands/glamglow/cat/?cid=16069&amp;nlid=ww|pflegen+%2B+schminken|desktop+only+ctas+(left)" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_face%26body_glamglow_3wl_1421378?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Glamglow</span></a></div></section><section class="_1QmxDO_ nEoIIe5"><div class="_1NtxSD3 _26_yujQ"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/entdecken/pflegen-schminken/?nlid=ww|pflegen+%2B+schminken|neue+themen" target="_self"><img alt="" src="https://images.asos-media.com/navigation/uk_faceandbody_hub_ww_3WL?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Inspirier mich</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/ctas/online-mode-12/cat/?cid=13494&amp;nlid=ww|pflegen+%2B+schminken|neue+themen" target="_self"><img alt="" src="https://images.asos-media.com/navigation/korean_beauty_3wl_1051298?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Korean Beauty</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="31c83989-24f4-452d-a984-0a9afd03c369" data-testid="secondarynav-flyout"><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">Geschenke kaufen</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/geschenke-fur-sie/cat/?cid=16095&amp;nlid=ww|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d _1iUbby0" data-testid="text-link" href="https://www.asos.de/herren/geschenke/cat/?cid=16091&amp;nlid=ww|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Geschenke für Ihn</a></li><li><a class="_2Aejr0d _1iUbby0" data-testid="text-link" href="https://www.asos.de/damen/geschenke-fur-sie/cat/?cid=16095&amp;nlid=ww|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Geschenke für Sie</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/neu/wohnen-und-geschenke/cat/?cid=28354&amp;nlid=ww|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Neuzugänge</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/geschenke-fur-sie/schreibwaren/cat/?cid=18397&amp;nlid=ww|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Bücher &amp; Briefpapier</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/gift-vouchers/?nlid=ww|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Geschenkgutscheine</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/geschenke-fur-sie/grukarten-geschenkpapier/cat/?cid=19872&amp;nlid=ww|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Grußkarten &amp; Geschenkpapier</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/geschenke-beauty/cat/?cid=14312&amp;nlid=ww|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Pflegen + Schminken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/schmuck-uhren/cat/?cid=4175&amp;nlid=ww|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Schmuck &amp; Uhren</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/accessoires/accessoires-fur-gerate/cat/?cid=14536&amp;nlid=ww|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Technik &amp; Zubehör</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/geschenke-fur-sie/witzige-prasente/cat/?cid=19873&amp;nlid=ww|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Witzige Geschenke</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">Wohnaccessoires kaufen</span></div><div class="_3rpsc2u"><div class="_3X9INkc"><a href="https://www.asos.de/damen/wohnen/cat/?cid=28335&amp;nlid=ww|wohnen+%2B+geschenke|wohnaccessoires+kaufen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/WW_Living%2bGifts_Living_5WL_1322831?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Alle anzeigen</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/neu/wohnen-und-geschenke/cat/?cid=28354&amp;nlid=ww|wohnen+%2B+geschenke|wohnaccessoires+kaufen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_living%26gifts_newin_5wl_1329720?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Neuzugänge</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/wohnen/bett-bad/cat/?cid=28341&amp;nlid=ww|wohnen+%2B+geschenke|wohnaccessoires+kaufen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_living%26gifts_bed%26bath_5wl_1318445?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Bett &amp; Bad</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/geschenke-fur-sie/accessoires-furs-haus/cat/?cid=18396&amp;nlid=ww|wohnen+%2B+geschenke|wohnaccessoires+kaufen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_living%26gifts_accessories_5wl_1334774?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Deko</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/damen/wohnen/kuche-bar/cat/?cid=28339&amp;nlid=ww|wohnen+%2B+geschenke|wohnaccessoires+kaufen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_living%26gifts_bar%26kitchen_5wl_1334782?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Küche &amp; Bar</span></a></div></div></section><section class="_1QmxDO_ YlqXo8e"><div class="_1NtxSD3"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/gift-vouchers/?nlid=ww|wohnen+%2B+geschenke|neue+themen" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_gift_voucher_2wl?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Geschenkgutscheine</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/wohnen/kuche-bar/cat/?cid=28339&amp;nlid=ww|wohnen+%2B+geschenke|neue+themen" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_living%26gifts_takeaway_2wl_1436161?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Küche &amp; Bar</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="796c1478-6471-4acf-a952-049a9154b668" data-testid="secondarynav-flyout"><section class="_1QmxDO_ YlqXo8e"><div><span class="_2HjZSOc">GROSSE MARKEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/asos-collection/cat/?cid=4877&amp;nlid=ww|marken|grosse+marken" target="_self">ASOS Marken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/asos-design/cat/?cid=27869&amp;nlid=ww|marken|grosse+marken" target="_self">ASOS DESIGN</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/asos-edition/cat/?cid=27673&amp;nlid=ww|marken|grosse+marken" target="_self">ASOS EDITION</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/asos-made-in/cat/?cid=25655&amp;nlid=ww|marken|grosse+marken" target="_self">ASOS MADE IN KENYA</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/a-to-z-of-brands/asos-supply/cat/?cid=28698&amp;nlid=ww|marken|grosse+marken" target="_self">ASOS SUPPLY</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/asos-white/cat/?cid=11761&amp;nlid=ww|marken|grosse+marken" target="_self">ASOS WHITE</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/asos-4505/cat/?cid=27792&amp;nlid=ww|marken|grosse+marken" target="_self">ASOS 4505</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/adidas/cat/?cid=5906&amp;nlid=ww|marken|grosse+marken" target="_self">adidas</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/chi-chi/cat/?cid=19316&amp;nlid=ww|marken|grosse+marken" target="_self">Chi Chi London</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/collusion/cat/?cid=28477&amp;nlid=ww|marken|grosse+marken" target="_self">COLLUSION</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/miss-selfridge/cat/?cid=25520&amp;nlid=ww|marken|grosse+marken" target="_self">Miss Selfridge</a></li></ul><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/monki/cat/?cid=17556&amp;nlid=ww|marken|grosse+marken" target="_self">Monki</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/new-look/cat/?cid=15872&amp;nlid=ww|marken|grosse+marken" target="_self">New Look</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/nike/cat/?cid=5897&amp;nlid=ww|marken|grosse+marken" target="_self">Nike</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/reclaimed-vintage/cat/?cid=10597&amp;nlid=ww|marken|grosse+marken" target="_self">Reclaimed Vintage</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/river-island/cat/?cid=12268&amp;nlid=ww|marken|grosse+marken" target="_self">River Island</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/weekday/cat/?cid=19511&amp;nlid=ww|marken|grosse+marken" target="_self">Weekday</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/alle-designer-anzeigen/cat/?cid=15210&amp;nlid=ww|marken|grosse+marken" target="_self">Premium-Marken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/free-people/cat/?cid=7610&amp;nlid=ww|marken|grosse+marken" target="_self">Free People</a></li><li><a class="_2Aejr0d _1iUbby0" data-testid="text-link" href="https://www.asos.de/damen/a-to-z-of-brands/cat/?cid=1340&amp;nlid=ww|marken|grosse+marken" target="_self">Alle Marken ansehen</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div class="_1NtxSD3 _26_yujQ"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/a-to-z-of-brands/asos-design/cat/?cid=27869&amp;nlid=ww|marken|marken-favoriten" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_wk27_brands_asosdesign_3wl_1377851?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">ASOS DESIGN</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/a-to-z-of-brands/cheap-monday/cat/?cid=4419&amp;nlid=ww|marken|marken-favoriten" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_brands_cheapmonday_3wl_1418636?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Cheap Monday</span></a></div></section><section class="_1QmxDO_ nEoIIe5"><div class="_1NtxSD3 _26_yujQ"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/a-to-z-of-brands/collusion/cat/?cid=28477&amp;nlid=ww|marken|desktop+only+ctas+(right)" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_brands_collusion_3wl_1382247?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">COLLUSION</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/a-to-z-of-brands/needle-thread/cat/?cid=17175&amp;nlid=ww|marken|desktop+only+ctas+(right)" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_brands_needle%26thread_3wl_1402819?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Needle &amp; Thread</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="a92844a0-3b5b-41b6-ad85-9ca81f5c24f1" data-testid="secondarynav-flyout"><section class="_1QmxDO_ YlqXo8e"><div><span class="_2HjZSOc">NACH PRODUKT SHOPPEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/cat/?cid=27391&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/neu-in-bekleidung/cat/?cid=27412&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Neu: Bekleidung</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/neu-in-schuhe-accessoires/cat/?cid=27413&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Neu: Schuhe &amp; Accessoires</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/accessoires/cat/?cid=27392&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Accessoires</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/activewear/cat/?cid=27393&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Activewear</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/sale/anzuge-blazer/cat/?cid=15620&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Anzüge &amp; Blazer</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/bademode-strandkleidung/cat/?cid=27428&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Bademode &amp; Strandkleidung</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/hosen-leggings/cat/?cid=27420&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Hosen &amp; Leggings</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/jacken-mantel/cat/?cid=27403&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Jacken &amp; Mäntel</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/jeans/cat/?cid=27405&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Jeans</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/overalls/cat/?cid=27407&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Jumpsuits &amp; kurze Jumpsuits</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/kleider/cat/?cid=27399&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Kleider</a></li></ul><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/lingerie-nachtwasche/cat/?cid=27410&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Lingerie &amp; Nachtwäsche</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/oberteile/cat/?cid=27421&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Oberteile</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/face-body/cat/?cid=28370&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Pflegen + Schminken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/rocke/cat/?cid=27418&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Röcke</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/schmuck-uhren/cat/?cid=27406&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Schmuck &amp; Uhren</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/schuhe/cat/?cid=27416&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Schuhe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/shorts/cat/?cid=27417&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Shorts</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/sonnenbrillen/cat/?cid=27419&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Sonnenbrillen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/strickmode/cat/?cid=27409&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Strickmode</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/taschen-geldborsen/cat/?cid=27394&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Taschen &amp; Geldbörsen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/outlet/geschenke/cat/?cid=27400&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Wohnen + Geschenke</a></li><li><a class="_2Aejr0d _1iUbby0" data-testid="text-link" href="https://www.asos.de/damen/sale/a-to-z-of-brands/cat/?cid=5526&amp;nlid=ww|outlet|nach+produkt+shoppen" target="_self">Marken A-Z</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH KATEGORIE SHOPPEN</span></div><div class="_3j3wPvK"><a class="_3V0KF--" href="https://www.asos.de/damen/outlet/groe-groen/cat/?cid=27395&amp;nlid=ww|outlet|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_outlet_asos+curve+and+plus+size_3m_1164433?&amp;$n_240w$)" title="ASOS Curve &amp; Große Größen"></div></div><span>ASOS Curve &amp; Große Größen</span></a><a class="_3V0KF--" href="https://www.asos.de/damen/outlet/mode-fur-schwangere/cat/?cid=27411&amp;nlid=ww|outlet|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_outlet_maternity_3m_1304986?&amp;$n_240w$)" title="Umstandsmode"></div></div><span>Umstandsmode</span></a><a class="_3V0KF--" href="https://www.asos.de/damen/outlet/petite/cat/?cid=27415&amp;nlid=ww|outlet|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_outlet_petite_3m_1286734?&amp;$n_240w$)" title="Petite"></div></div><span>Petite</span></a><a class="_3V0KF--" href="https://www.asos.de/damen/outlet/tall/cat/?cid=27424&amp;nlid=ww|outlet|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_outlet_tall_3m_1349074?&amp;$n_240w$)" title="Tall"></div></div><span>Tall</span></a></div></section><section class="_1QmxDO_ nEoIIe5"><div class="_1NtxSD3 _26_yujQ"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/outlet/weitere-reduktionen/cat/?cid=27476&amp;nlid=ww|outlet|ctas" target="_self"><img alt="" src="https://images.asos-media.com/navigation/WW_Outlet_FurtherReductions_4WL_1022883?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _3t_t-Xe _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">WEITERE REDUZIERUNGEN: BIS ZU 70%</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/outlet/ctas/auswahl-aus-dem-outlet/outlet-auswahl-8/cat/?cid=28612&amp;nlid=ww|outlet|ctas" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_outlet_occasionwearedit_4wl_1369144?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _3t_t-Xe _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Besondere Anlässe</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/damen/outlet/designer-marken/cat/?cid=27398&amp;nlid=ww|outlet|ctas" target="_self"><img alt="" src="https://images.asos-media.com/navigation/ww_outlet_designer_4wl_1396227?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _3t_t-Xe _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Designer-Marken</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="58b7bec6-2318-4e4e-a97d-e5acdb8cb269" data-testid="secondarynav-flyout"><section class="_1QmxDO_ _3iT6Z7q"><div class="lxl1m4p"><a class="cEafYrU" href="https://marketplace.asos.com/women?nlid=ww|marketplace|ctasHomepage&amp;nlid=ww|marketplace|ctas" target="_blank"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_marketplace_explore_7wl_4m?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">ASOS MARKETPLACE</span></div><span class="_2DUsWiv">Shoppe in mehr als 700 Boutiquen</span></a><a class="cEafYrU" href="https://marketplace.asos.com/women/just-in?tab=boutique&amp;f:condition=12109&amp;nlid=ww|marketplace|ctasVintage&amp;nlid=ww|marketplace|ctas&amp;nlid=ww|marketplace|ctas" target="_blank"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_marketplace_vintage_7wl_4m?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">VINTAGE</span></div><span class="_2DUsWiv">Geh auf Schatzsuche</span></a><a class="cEafYrU" href="https://marketplace.asos.com/women/featured/womens-vintage-90s-clothing?nlid=ww|marketplace|ctas|grunge&amp;nlid=ww|marketplace|ctas" target="_blank"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_marketplace_grunge_7wl_4m?&amp;$n_320w$)"></div><div class="_9q4POoy _3QYsQtS"></div><span class="_3skrDb5 _3QYsQtS">NINETIES GRUNGE SHOPPEN</span></div><span class="_2DUsWiv">Normcore-Vibes und Vintage-Kleider</span></a><a class="cEafYrU" href="https://marketplace.asos.com/women/featured/y2k?nlid=mw|marketplace|ctasY2K&amp;nlid=ww|marketplace|ctas" target="_blank"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/y2k_marketplace_wk21_1601?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">NULLERJAHRE SHOPPEN</span></div><span class="_2DUsWiv">Styles, die du schon 2007 geliebt hast</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="f801c24f-60c9-459a-a021-ea6a313adf0a" data-testid="secondarynav-flyout"><section class="_1QmxDO_ _3iT6Z7q"><div class="lxl1m4p"><a class="cEafYrU" href="https://www.asos.de/entdecken/insiders/?nlid=ww|inspiration|ctas" target="_self"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/insider_ww-nav-1805-4wl?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">ASOS INSIDER</span></div><span class="_2DUsWiv">Tipps von deinen Style-Favs</span></a><a class="cEafYrU" href="https://www.asos.de/damen/mode-updates/?nlid=ww|inspiration|ctas" target="_self"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_inspo_250118_4m?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">STYLE FEED</span></div><span class="_2DUsWiv">Trends, Shopping-Tipps &amp; Outfit-Ideen</span></a><a class="cEafYrU" href="https://www.asos.de/shop-the-magazine/cat/?cid=27919&amp;nlid=ww|inspiration|ctas" target="_self"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/unisex_shopthemag_inspiration_4m?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">ASOS Magazin shoppen</span></div><span class="_2DUsWiv">Shoppe die Styles aus dem ASOS Magazin</span></a><a class="cEafYrU" href="https://www.asos.de/damen/eco-marken/cat/?cid=10062&amp;nlid=ww|inspiration|ctas" target="_self"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww-inspiration-ecoedit-4m?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">ECO EDIT</span></div><span class="_2DUsWiv">Nachhaltige und faire Styles</span></a></div></section></div></div></div></div></div></nav></div><div><nav aria-hidden="true" class="_3kg3G5e _3VhrZsw" data-testid="primarynav-large"><div class="_25By0Z8"><div class="_3r7rW4o" role="tablist"><button data-id="029c47b3-2111-43e9-9138-0d00ecf0b3db" data-index="0" role="tab" tabindex="0" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Neu</span></span></button><button data-id="e87ba617-daa1-4b64-8f36-ab92e61283f7" data-index="1" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Bekleidung</span></span></button><button data-id="87a52035-f6fa-401f-bd58-0d259e403cbb" data-index="2" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Schuhe</span></span></button><button data-id="0502a9b2-d1e8-4b34-9741-1141607c715e" data-index="3" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Accessoires</span></span></button><button data-id="2c33cef8-8fb2-43b6-949b-070d685b176e" data-index="4" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Activewear</span></span></button><button data-id="e5b71413-6f8c-4957-8ff1-67620c1db627" data-index="5" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Pflegen + Schminken</span></span></button><button data-id="afae803d-45c2-4e2d-8530-140ef9874cc3" data-index="6" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Wohnen + Geschenke</span></span></button><button data-id="03b93067-d1b1-44c4-9301-37479c7217cb" data-index="7" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Marken</span></span></button><button data-id="c42067f4-5f16-440a-ab2f-5163739caf68" data-index="8" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class="_2mZjF9Z"><span>Outlet</span></span></button><button data-id="a3ed6672-26b2-486b-88d1-b874034f0fd6" data-index="9" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Marketplace</span></span></button><button data-id="4526f3e4-33ef-4133-bd56-e01ce63a949b" data-index="10" role="tab" tabindex="-1" class="_2Ac9WRp" data-testid="primarynav-button"><span class=""><span>Inspiration</span></span></button></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="029c47b3-2111-43e9-9138-0d00ecf0b3db" data-testid="secondarynav-flyout"><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NEUE ARTIKEL</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/neu/cat/?cid=27110&amp;nlid=mw|neu|neue+artikel" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/neu/neu-in-bekleidung/cat/?cid=6993&amp;nlid=mw|neu|neue+artikel" target="_self">Bekleidung</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/neu/neu-in-schuhe/cat/?cid=17184&amp;nlid=mw|neu|neue+artikel" target="_self">Schuhe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/neu/accessoires/cat/?cid=27112&amp;nlid=mw|neu|neue+artikel" target="_self">Accessoires</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/neu/pflegen-schminken/cat/?cid=27140&amp;nlid=mw|neu|neue+artikel" target="_self">Pflegen + Schminken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/neu/wohnen-geschenke/cat/?cid=28352&amp;nlid=mw|neu|neue+artikel" target="_self">Wohnen + Geschenke</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/neu-in-wieder-vorratig/cat/?cid=17010&amp;nlid=mw|neu|neue+artikel" target="_self">Wieder vorrätig</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/neu/cat/?cid=27110&amp;refine=brand:53&amp;nlid=mw|neu|neue+artikel" target="_self">ASOS DESIGN</a></li></ul></div></section><section class="_1QmxDO_ _1D_SQB6"><div><span class="_2HjZSOc">NEUE THEMEN</span></div><div class="_1NtxSD3"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/ctas/online-mode-39/cat/?cid=19842&amp;nlid=mw|neu|neue+themen" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_asos_design_print_2wl?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">ASOS DESIGN: Animal-Print</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/kombiteile/cat/?cid=28291&amp;nlid=mw|neu|neue+themen" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_wk29_co_ords_gbl_2wl?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Zweiteiler</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/a-to-z-of-brands/asos-white/cat/?cid=28295&amp;nlid=mw|neu|neue+themen" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_new_in_asos_white_2wl_1413265?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">ASOS WHITE</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="e87ba617-daa1-4b64-8f36-ab92e61283f7" data-testid="secondarynav-flyout"><section class="_1QmxDO_ YlqXo8e"><div><span class="_2HjZSOc">NACH PRODUKT SHOPPEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/neu/neu-in-bekleidung/cat/?cid=6993&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Neuzugänge</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/activewear/cat/?cid=26090&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Activewear</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/anzuge/cat/?cid=5678&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Anzüge</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/bademode/cat/?cid=13210&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Bademode</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/hemden/cat/?cid=3602&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Hemden</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/hosen-chinohosen/cat/?cid=4910&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Hosen &amp; Chinohosen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/jacken-mantel/cat/?cid=3606&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Jacken &amp; Mäntel</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/jeans/cat/?cid=4208&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Jeans</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/kapuzenpullis-sweatshirts/cat/?cid=5668&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Kapuzenpullis &amp; Sweatshirts</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/kombiteile/cat/?cid=28291&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Kombiteile</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/loungewear/cat/?cid=18797&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Loungewear &amp; Schlafanzüge</a></li></ul><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/polohemden/cat/?cid=4616&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Polohemden</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/pullover-strickjacken/cat/?cid=7617&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Pullover &amp; Strickjacken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/shorts/cat/?cid=7078&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Shorts</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/unterwasche-socken/socken/cat/?cid=16329&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Socken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/special-offer-multipacks/cat/?cid=20831&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">SPECIAL OFFER: Multipacks</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/t-shirts-tragershirts/cat/?cid=7616&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">T-Shirts &amp; Trägershirts</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/trainingsanzuge/cat/?cid=26776&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Trainingsanzüge &amp; Trainingshosen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/unterwasche-socken/unterwasche/cat/?cid=20317&amp;nlid=mw|bekleidung|nach+produkt+shoppen" target="_self">Unterwäsche</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH KATEGORIE SHOPPEN</span></div><div class="_3j3wPvK"><a class="_3V0KF--" href="https://www.asos.de/herren/groe-groen/cat/?cid=25997&amp;nlid=mw|bekleidung|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_sr_clothing_plussize_global_6wl_1367625?&amp;$n_240w$)" title="Große Größen"></div></div><span>Große Größen</span></a><a class="_3V0KF--" href="https://www.asos.de/herren/tall/cat/?cid=20753&amp;nlid=mw|bekleidung|nach+kategorie+shoppen" target="_self"><div class="_2GC-7QL"><div aria-hidden="true" class="_38TV2Q5" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_sr_clothing_tall_global_6wl_1343680?&amp;$n_240w$)" title="Tall"></div></div><span>Tall</span></a></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH ANLASS SHOPPEN</span></div><div class="_3rpsc2u"><div class="_3X9INkc"><a href="https://www.asos.de/herren/ctas/russische-online-mode-4/cat/?cid=19902&amp;nlid=mw|bekleidung|nach+anlass+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_clothing_shopbyedit_spring_5wl_1435035?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Frühling</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/herren/besondere-anlasse/cat/?cid=21050&amp;nlid=mw|bekleidung|nach+anlass+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_clothing_shopbyoccasion_ballseason_5wl_1320678?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Anlass-Styles</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/herren/besondere-anlasse/hochzeitskleidung/cat/?cid=21809&amp;nlid=mw|bekleidung|nach+anlass+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_clothing_shopbyedit_weddingattire_5wl_1378504?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Hochzeit</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/herren/buro-outfits/cat/?cid=18423&amp;nlid=mw|bekleidung|nach+anlass+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_clothing_shopbyedit_workwear_5wl_1407280?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Büro</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/herren/urlaub/cat/?cid=14627&amp;nlid=mw|bekleidung|nach+anlass+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_clothing_shopbyedit_holiday_5wl_1369744?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Urlaub</span></a></div></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="87a52035-f6fa-401f-bd58-0d259e403cbb" data-testid="secondarynav-flyout"><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH PRODUKT SHOPPEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/schuhe-stiefel-sneaker/cat/?cid=4209&amp;nlid=mw|schuhe|nach+produkt+shoppen" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/neu/neu-in-schuhe/cat/?cid=17184&amp;nlid=mw|schuhe|nach+produkt+shoppen" target="_self">Neuzugänge</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/schuhe-stiefel-sneaker/espadrilles/cat/?cid=11246&amp;nlid=mw|schuhe|nach+produkt+shoppen" target="_self">Espadrilles</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/schuhe-stiefel-sneaker/flip-flops/cat/?cid=17514&amp;nlid=mw|schuhe|nach+produkt+shoppen" target="_self">Flipflops &amp; Slider</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/schuhe-stiefel-sneaker/hausschuhe/cat/?cid=14328&amp;nlid=mw|schuhe|nach+produkt+shoppen" target="_self">Hausschuhe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/schuhe-stiefel-sneaker/sandalen/cat/?cid=6593&amp;nlid=mw|schuhe|nach+produkt+shoppen" target="_self">Sandalen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/schuhe-stiefel-sneaker/schuhe/cat/?cid=27116&amp;nlid=mw|schuhe|nach+produkt+shoppen" target="_self">Schuhe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/schuhe-stiefel-sneaker/slipper/cat/?cid=11247&amp;nlid=mw|schuhe|nach+produkt+shoppen" target="_self">Slipper</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/schuhe-stiefel-sneaker/sneaker/cat/?cid=5775&amp;nlid=mw|schuhe|nach+produkt+shoppen" target="_self">Sneaker</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/schuhe-stiefel-sneaker/stiefel/cat/?cid=5774&amp;nlid=mw|schuhe|nach+produkt+shoppen" target="_self">Stiefel</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">Nach Marke shoppen</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/adidas/cat/?cid=7113&amp;refine=attribute_10992:61388&amp;nlid=mw|schuhe|nach+marke+shoppen" target="_self">Adidas</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/asos-design/cat/?cid=27871&amp;refine=attribute_10992:61388&amp;nlid=mw|schuhe|nach+marke+shoppen" target="_self">ASOS DESIGN</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/dr-martens/cat/?cid=4747&amp;refine=attribute_10992:61388&amp;nlid=mw|schuhe|nach+marke+shoppen" target="_self">Dr Martens</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/nike/cat/?cid=4766&amp;refine=attribute_10992:61388&amp;nlid=mw|schuhe|nach+marke+shoppen" target="_self">Nike</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/puma/cat/?cid=3355&amp;refine=attribute_10992:61388&amp;nlid=mw|schuhe|nach+marke+shoppen" target="_self">Puma</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/reebok/cat/?cid=5227&amp;refine=attribute_10992:61388&amp;nlid=mw|schuhe|nach+marke+shoppen" target="_self">Reebok</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/lacoste/cat/?cid=7368&amp;refine=attribute_900:8148,1562,1608&amp;nlid=mw|schuhe|nach+marke+shoppen" target="_self">Lacoste</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/timberland/cat/?cid=7277&amp;refine=attribute_10992:61388&amp;nlid=mw|schuhe|nach+marke+shoppen" target="_self">Timberland</a></li></ul></div></section><section class="_1QmxDO_ YlqXo8e"><div class="_1NtxSD3"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/ctas/online-mode-28/cat/?cid=16776&amp;nlid=mw|schuhe|neue+auswahl" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_shoes_newseasonfootwear_2wl_1381095?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Neu: Schuhe</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/schuhe-stiefel-sneaker/schicke-schuhe/cat/?cid=5773&amp;nlid=mw|schuhe|neue+auswahl" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_shoes_smartshoes_2wl_1427352?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Schicke Schuhe</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="0502a9b2-d1e8-4b34-9741-1141607c715e" data-testid="secondarynav-flyout"><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH PRODUKT SHOPPEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/accessoires/cat/?cid=4210&amp;nlid=mw|accessoires|nach+produkt+shoppen" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/neu/accessoires/cat/?cid=27112&amp;nlid=mw|accessoires|nach+produkt+shoppen" target="_self">Neuzugänge</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/accessoires/brieftaschen/cat/?cid=6516&amp;nlid=mw|accessoires|nach+produkt+shoppen" target="_self">Brieftaschen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/accessoires/gurtel/cat/?cid=6474&amp;nlid=mw|accessoires|nach+produkt+shoppen" target="_self">Gürtel</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/accessoires/handschuhe/cat/?cid=11854&amp;nlid=mw|accessoires|nach+produkt+shoppen" target="_self">Handschuhe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/accessoires/krawatten/cat/?cid=6520&amp;nlid=mw|accessoires|nach+produkt+shoppen" target="_self">Krawatten</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/accessoires/mutzen-hute/cat/?cid=6517&amp;nlid=mw|accessoires|nach+produkt+shoppen" target="_self">Mützen &amp; Hüte</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/accessoires/schals/cat/?cid=6518&amp;nlid=mw|accessoires|nach+produkt+shoppen" target="_self">Schals</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/schmuck-uhren/cat/?cid=5034&amp;nlid=mw|accessoires|nach+produkt+shoppen" target="_self">Schmuck &amp; Uhren</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/unterwasche-socken/socken/cat/?cid=16329&amp;nlid=mw|accessoires|nach+produkt+shoppen" target="_self">Socken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/sonnenbrillen/cat/?cid=6519&amp;nlid=mw|accessoires|nach+produkt+shoppen" target="_self">Sonnenbrillen</a></li></ul><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/taschen/cat/?cid=9265&amp;nlid=mw|accessoires|nach+produkt+shoppen" target="_self">Taschen</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">Nach Marke shoppen</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/asos-design/cat/?cid=27871&amp;refine=attribute_10992:61384,61387&amp;nlid=mw|accessoires|nach+marke+shoppen" target="_self">ASOS DESIGN</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/men/a-to-z-of-brands/aj-morgan/cat/?cid=15935&amp;nlid=mw|accessoires|nach+marke+shoppen" target="_self">AJ Morgan</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/armani-exchange/cat/?cid=7551&amp;nlid=mw|accessoires|nach+marke+shoppen" target="_self">Armani Exchange</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/men/a-to-z-of-brands/fitbit/cat/?cid=26707&amp;nlid=mw|accessoires|nach+marke+shoppen" target="_self">Fitbit</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/fjallraven/cat/?cid=13689&amp;refine=attribute_10992:61384,61387&amp;nlid=mw|accessoires|nach+marke+shoppen" target="_self">Fjallraven</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/men/a-to-z-of-brands/herschel/cat/?cid=13548&amp;refine=attribute_10992:61384,61387&amp;nlid=mw|accessoires|nach+marke+shoppen" target="_self">Herschel</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/men/a-to-z-of-brands/michael-kors/cat/?cid=7403&amp;nlid=mw|accessoires|nach+marke+shoppen" target="_self">Michael Kors</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/men/a-to-z-of-brands/new-era/cat/?cid=7475&amp;refine=attribute_10992:61384,61387&amp;nlid=mw|accessoires|nach+marke+shoppen" target="_self">New Era</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/men/a-to-z-of-brands/ray-ban/cat/?cid=4497&amp;nlid=mw|accessoires|nach+marke+shoppen" target="_self">Ray-Ban</a></li></ul></div></section><section class="_1QmxDO_ YlqXo8e"><div class="_1NtxSD3"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/ctas/online-mode-22/cat/?cid=16770&amp;nlid=mw|accessoires|new+edits" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_accessories_occasionwear_2wl_1434812?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Besondere Anlässe</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/ctas/online-mode-25/cat/?cid=16773&amp;nlid=mw|accessoires|new+edits" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_accessories_holiday_2wl_1381012?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Accessoires für den Urlaub</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="2c33cef8-8fb2-43b6-949b-070d685b176e" data-testid="secondarynav-flyout"><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH PRODUKT SHOPPEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/activewear/cat/?cid=26090&amp;nlid=mw|activewear|nach+produkt+shoppen" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/activewear/accessoires/cat/?cid=27176&amp;nlid=mw|activewear|nach+produkt+shoppen" target="_self">Accessoires</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/activewear/bademode/cat/?cid=27186&amp;nlid=mw|activewear|nach+produkt+shoppen" target="_self">Bademode</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/activewear/hosen-und-strumpfhosen/cat/?cid=27177&amp;nlid=mw|activewear|nach+produkt+shoppen" target="_self">Hosen &amp; Leggings</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/activewear/jacken/cat/?cid=27180&amp;nlid=mw|activewear|nach+produkt+shoppen" target="_self">Jacken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/activewear/oberteile/cat/?cid=27181&amp;nlid=mw|activewear|nach+produkt+shoppen" target="_self">Oberteile</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/activewear/schuhe/cat/?cid=27179&amp;nlid=mw|activewear|nach+produkt+shoppen" target="_self">Schuhe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/activewear/shorts/cat/?cid=27178&amp;nlid=mw|activewear|nach+produkt+shoppen" target="_self">Shorts</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH AKTIVITÄT SHOPPEN</span></div><div class="_3rpsc2u"><div class="_3X9INkc"><a href="https://www.asos.de/herren/activewear/ski-snowboard/cat/?cid=27520&amp;nlid=mw|activewear|nach+aktivit%C3%A4t+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_sr_activewear_shopbyactivity_ski%26snowboard_3m_1351733?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Ski &amp; Snowboard</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/herren/activewear/fuball/cat/?cid=27182&amp;nlid=mw|activewear|nach+aktivit%C3%A4t+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_sr_activewear_shopbyactivity_football_3m_1346093?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Fußball</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/herren/activewear/golf/cat/?cid=27185&amp;nlid=mw|activewear|nach+aktivit%C3%A4t+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_sr_activewear_shopbyactivity_golf_3m_1416633?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Golf</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/herren/activewear/gym-und-training/cat/?cid=27183&amp;nlid=mw|activewear|nach+aktivit%C3%A4t+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_sr_activewear_shopbyactivity_gym_3m_1394767?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Gym &amp; Training</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/herren/activewear/laufen/cat/?cid=27191&amp;nlid=mw|activewear|nach+aktivit%C3%A4t+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_sr_activewear_shopbyactivity_running_3m_1405666?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Laufen</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/herren/activewear/outdoor/cat/?cid=27184&amp;nlid=mw|activewear|nach+aktivit%C3%A4t+shoppen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_sr_activewear_shopbyactivity_outdoors_3m_1414496?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Outdoor</span></a></div></div></section><section class="_1QmxDO_ YlqXo8e"><div class="_1NtxSD3"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/activewear/gym-und-training/cat/?cid=27183&amp;nlid=mw|activewear|neue+auswahl" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_activewear_gym%26training_2wl_1373117?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Gym und Training</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/a-to-z-of-brands/nike/cat/?cid=4766&amp;nlid=mw|activewear|neue+auswahl" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_activewear_nike_2wl_1346630?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Nike</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="e5b71413-6f8c-4957-8ff1-67620c1db627" data-testid="secondarynav-flyout"><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">NACH PRODUKT SHOPPEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/men/face-body/cat/?cid=19517&amp;nlid=mw|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/neu/pflegen-schminken/cat/?cid=27140&amp;nlid=mw|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Neuzugänge</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/ctas/online-mode-35/cat/?cid=19838&amp;nlid=mw|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Bestseller</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/pflegen-schminken/korperpflege/cat/?cid=27142&amp;nlid=mw|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Körperpflege</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/ctas/online-mode-27/cat/?cid=16775&amp;nlid=mw|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Geschenke</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/pflegen-schminken/haarpflege/cat/?cid=27143&amp;nlid=mw|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Haarpflege</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/pflegen-schminken/make-up/cat/?cid=27149&amp;nlid=mw|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Make-up</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/pflegen-schminken/rasier-und-bartpflege/cat/?cid=25399&amp;nlid=mw|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Rasur &amp; Bartpflege</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/pflegen-schminken/hautpflege/cat/?cid=27150&amp;nlid=mw|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Hautpflege</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/pflegen-schminken/zubehor-accessoires/cat/?cid=27141&amp;nlid=mw|pflegen+%2B+schminken|nach+produkt+shoppen" target="_self">Zubehör &amp; Accessoires</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">Nach Marke shoppen</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/clinique/cat/?cid=28213&amp;nlid=mw|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">Clinique</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/elemis/cat/?cid=20367&amp;nlid=mw|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">Elemis</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/hanz-de-fuko/cat/?cid=21828&amp;nlid=mw|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">Hanz de Fuko</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/men/a-to-z-of-brands/house-99/cat/?cid=27804&amp;nlid=mw|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">House 99</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/lab-series/cat/?cid=27959&amp;nlid=mw|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">Lab Series</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/mac/cat/?cid=28558&amp;nlid=mw|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">MAC</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/mmuk/cat/?cid=26857&amp;nlid=mw|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">MMUK</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/murdock-london/cat/?cid=26967&amp;nlid=mw|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">Murdock London</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/uppercut-deluxe/cat/?cid=19093&amp;nlid=mw|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">Uppercut Deluxe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/a-to-z-of-brands/ghd/cat/?cid=1904&amp;nlid=mw|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">GHD</a></li><li><a class="_2Aejr0d _1iUbby0" data-testid="text-link" href="https://www.asos.de/damen/pflegen-schminken/a-to-z-of-brands/cat/?cid=2373&amp;nlid=mw|pflegen+%2B+schminken|nach+marke+shoppen" target="_self">Alle anzeigen</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div class="_1NtxSD3 _26_yujQ"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/entdecken/pflegen-schminken/?nlid=mw|pflegen+%2B+schminken|ctas" target="_self"><img alt="" src="https://images.asos-media.com/navigation/uk_faceandbody_hub_mw_3WL?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Inspiration</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/pflegen-schminken/rasier-und-bartpflege/cat/?cid=25399&amp;nlid=mw|pflegen+%2B+schminken|ctas" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_face%26body_shavingbeard_3wl_1458362?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Rasier- und Bartpflege</span></a></div></section><section class="_1QmxDO_ nEoIIe5"><div class="_1NtxSD3 _26_yujQ"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/ctas/online-mode-35/cat/?cid=19838&amp;nlid=mw|pflegen+%2B+schminken|neue+auswahl" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_face%26body_bestsellers_3wl_1417131?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Bestsellers</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/a-to-z-of-brands/clinique/cat/?cid=28213&amp;nlid=mw|pflegen+%2B+schminken|neue+auswahl" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_face%26body_clinique_3wl_1322837?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Clinique</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="afae803d-45c2-4e2d-8530-140ef9874cc3" data-testid="secondarynav-flyout"><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">Geschenke kaufen</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/geschenke/cat/?cid=16091&amp;nlid=mw|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d _1iUbby0" data-testid="text-link" href="https://www.asos.de/herren/geschenke/cat/?cid=16091&amp;nlid=mw|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Geschenke für Ihn</a></li><li><a class="_2Aejr0d _1iUbby0" data-testid="text-link" href="https://www.asos.de/damen/geschenke-fur-sie/cat/?cid=16095&amp;nlid=mw|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Geschenke für Sie</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/neu/wohnen-und-geschenke/cat/?cid=28352&amp;nlid=mw|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Neuzugänge</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/geschenke/schreibwaren/cat/?cid=20989&amp;nlid=mw|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Bücher &amp; Schreibwaren</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/gift-vouchers/?nlid=mw|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Geschenkgutscheine</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/geschenke/grukarten-geschenkpapier/cat/?cid=27575&amp;nlid=mw|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Grußkarten &amp; Geschenkpapier</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/ctas/online-mode-27/cat/?cid=16775&amp;nlid=mw|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Pflegen + Schminken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/schmuck-uhren/cat/?cid=5034&amp;nlid=mw|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Schmuck &amp; Uhren</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/accessoires/technik/cat/?cid=14388&amp;nlid=mw|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Technik &amp; Zubehör</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/geschenke/witzige-prasente/cat/?cid=20279&amp;nlid=mw|wohnen+%2B+geschenke|geschenke+kaufen" target="_self">Witzige Geschenke</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">Wohnaccessoires kaufen</span></div><div class="_3rpsc2u"><div class="_3X9INkc"><a href="https://www.asos.de/herren/wohnen/cat/?cid=28338&amp;nlid=mw|wohnen+%2B+geschenke|wohnaccessoires+kaufen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/WW_Living%2bGifts_Living_5WL_1322831?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Alle anzeigen</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/herren/neu/wohnen-geschenke/cat/?cid=28352&amp;nlid=mw|wohnen+%2B+geschenke|wohnaccessoires+kaufen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/ww_living%26gifts_newin_5wl_1329720?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Neuzugänge</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/herren/wohnen/bett-bad/cat/?cid=28342&amp;nlid=mw|wohnen+%2B+geschenke|wohnaccessoires+kaufen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/WW_Living%2bGifts_Living_Bed_5WL_1315280?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Bett &amp; Bad</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/herren/wohnen/accessoires-furs-haus/cat/?cid=27576&amp;nlid=mw|wohnen+%2B+geschenke|wohnaccessoires+kaufen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/WW_Living%2bGifts_Living_Accessories_5WL_1265360?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Deko</span></a></div><div class="_3X9INkc"><a href="https://www.asos.de/herren/wohnen/kuche-bar/cat/?cid=28340&amp;nlid=mw|wohnen+%2B+geschenke|wohnaccessoires+kaufen" target="_self"><div class="tIg6Zov"><div aria-hidden="true" class="CzRt8da" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/WW_Living%2bGifts_BarKitchen_5WL_1282186?&amp;$n_240w$)"></div></div><span class="_1dHc1LM">Küche &amp; Bar</span></a></div></div></section><section class="_1QmxDO_ YlqXo8e"><div class="_1NtxSD3"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/geschenke/gadgets-fur-herren/cat/?cid=14388&amp;nlid=mw|wohnen+%2B+geschenke|neue+auswahl" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_living%26gifts_tech_2wl_1409190?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Gadgets</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/wohnen/kuche-bar/cat/?cid=28340&amp;nlid=mw|wohnen+%2B+geschenke|neue+auswahl" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_living%26gifts_kitchen%26bar_2wl_1356437?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Küche &amp; Bar</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="03b93067-d1b1-44c4-9301-37479c7217cb" data-testid="secondarynav-flyout"><section class="_1QmxDO_ YlqXo8e"><div><span class="_2HjZSOc">GROSSE MARKEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/asos-collection/cat/?cid=3159&amp;nlid=mw|marken|grosse+marken" target="_self">ASOS Marken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/asos-design/cat/?cid=27871&amp;nlid=mw|marken|grosse+marken" target="_self">ASOS DESIGN</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/asos-edition/cat/?cid=27866&amp;nlid=mw|marken|grosse+marken" target="_self">ASOS EDITION</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/a-to-z-of-brands/asos-supply/cat/?cid=28698&amp;nlid=mw|marken|grosse+marken" target="_self">ASOS SUPPLY</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/asos-white/cat/?cid=28295&amp;nlid=mw|marken|grosse+marken" target="_self">ASOS WHITE</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/asos-4505/cat/?cid=27791&amp;nlid=mw|marken|grosse+marken" target="_self">ASOS 4505</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/abercrombie-and-fitch/cat/?cid=19971&amp;nlid=mw|marken|grosse+marken" target="_self">Abercrombie &amp; Fitch</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/adidas/cat/?cid=7113&amp;nlid=mw|marken|grosse+marken" target="_self">adidas</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/cheap-monday/cat/?cid=4671&amp;nlid=mw|marken|grosse+marken" target="_self">Cheap Monday</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/collusion/cat/?cid=28479&amp;nlid=mw|marken|grosse+marken" target="_self">COLLUSION</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/ellesse/cat/?cid=19763&amp;nlid=mw|marken|grosse+marken" target="_self">ellesse</a></li></ul><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/fred-perry/cat/?cid=4562&amp;nlid=mw|marken|grosse+marken" target="_self">Fred Perry</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/new-balance/cat/?cid=3792&amp;nlid=mw|marken|grosse+marken" target="_self">New Balance</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/nike/cat/?cid=4766&amp;nlid=mw|marken|grosse+marken" target="_self">Nike</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/polo-ralph-lauren/cat/?cid=4280&amp;nlid=mw|marken|grosse+marken" target="_self">Polo Ralph Lauren</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/reclaimed-vintage/cat/?cid=11248&amp;nlid=mw|marken|grosse+marken" target="_self">Reclaimed Vintage</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/religion/cat/?cid=1607&amp;nlid=mw|marken|grosse+marken" target="_self">Religion</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/river-island/cat/?cid=12269&amp;nlid=mw|marken|grosse+marken" target="_self">River Island</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/men/a-to-z-of-brands/swatch/cat/?cid=28169&amp;nlid=mw|marken|grosse+marken" target="_self">Swatch</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/tommy-hilfiger/cat/?cid=5247&amp;nlid=mw|marken|grosse+marken" target="_self">Tommy Hilfiger</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/vans/cat/?cid=2465&amp;nlid=mw|marken|grosse+marken" target="_self">Vans</a></li><li><a class="_2Aejr0d _1iUbby0" data-testid="text-link" href="https://www.asos.de/herren/a-to-z-of-brands/cat/?cid=1361&amp;nlid=mw|marken|grosse+marken" target="_self">Alle Marken ansehen</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div class="_1NtxSD3 _26_yujQ"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/a-to-z-of-brands/collusion/cat/?cid=28479&amp;nlid=mw|marken|ctas" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_brands_collusion_3wl_1417960?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">COLLUSION</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/a-to-z-of-brands/asos-white/cat/?cid=28295&amp;nlid=mw|marken|ctas" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_brands_asoswhite_3wl_1402558?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">ASOS WHITE</span></a></div></section><section class="_1QmxDO_ nEoIIe5"><div class="_1NtxSD3 _26_yujQ"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/a-to-z-of-brands/asos-design/cat/?cid=27871&amp;nlid=mw|marken|ctas" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_brands_asosdesign_3wl_1432618?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">ASOS DESIGN</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/a-to-z-of-brands/river-island/cat/?cid=12269&amp;nlid=mw|marken|ctas" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_brands_riverisland_3wl_1460074?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _2_fWyUH _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">River Island</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="c42067f4-5f16-440a-ab2f-5163739caf68" data-testid="secondarynav-flyout"><section class="_1QmxDO_ YlqXo8e"><div><span class="_2HjZSOc">NACH PRODUKT SHOPPEN</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/neu/cat/?cid=27441&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Neuzugänge</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/cat/?cid=27396&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Alle anzeigen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/accessoires/cat/?cid=27402&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Accessoires</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/activewear/cat/?cid=27404&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Activewear</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/anzuge-co/cat/?cid=27440&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Anzüge &amp; Co</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/bademode/cat/?cid=27453&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Bademode</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/hemden/cat/?cid=27435&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Hemden</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/hosen-chinohosen/cat/?cid=27445&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Hosen &amp; Chinohosen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/jacken-mantel/cat/?cid=27427&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Jacken &amp; Mäntel</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/jeans/cat/?cid=27429&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Jeans</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/kapuzenpullis-sweatshirts/cat/?cid=27426&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Kapuzenpullis &amp; Sweatshirts</a></li></ul><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/loungewear/cat/?cid=27439&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Loungewear</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/pullover-strickjacken/cat/?cid=27433&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Pullover &amp; Strickjacken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/schmuck-uhren/cat/?cid=27432&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Schmuck &amp; Uhren</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/schuhe-turnschuhe/cat/?cid=27437&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Schuhe &amp; Turnschuhe</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/shorts/cat/?cid=27447&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Shorts</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/sonnenbrillen/cat/?cid=27442&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Sonnenbrillen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/t-shirts-tragershirts/cat/?cid=27449&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">T-Shirts &amp; Trägershirts</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/taschen/cat/?cid=27414&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Taschen</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/unterwasche-socken/cat/?cid=27452&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Unterwäsche &amp; Socken</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/outlet/geschenke/cat/?cid=27479&amp;nlid=mw|outlet|nach+produkt+shoppen" target="_self">Wohnen + Geschenke</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div><span class="_2HjZSOc">Nach Marke shoppen</span></div><div><ul class="z36sLT1"><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/sale/a-to-z-of-brands/adidas/cat/?cid=11950&amp;nlid=mw|outlet|nach+marke+shoppen" target="_self">adidas</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/sale/a-to-z-of-brands/brave-soul/cat/?cid=17290&amp;nlid=mw|outlet|nach+marke+shoppen" target="_self">Brave Soul</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/sale/a-to-z-of-brands/calvin-klein/cat/?cid=8473&amp;nlid=mw|outlet|nach+marke+shoppen" target="_self">Calvin Klein</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/sale/a-to-z-of-brands/dune/cat/?cid=27949&amp;nlid=mw|outlet|nach+marke+shoppen" target="_self">Dune</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/men/sale/a-to-z-of-brands/french-connection/cat/?cid=8484&amp;nlid=mw|outlet|nach+marke+shoppen" target="_self">French Connection</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/sale/a-to-z-of-brands/kurt-geiger/cat/?cid=9634&amp;nlid=mw|outlet|nach+marke+shoppen" target="_self">Kurt Geiger</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/sale/a-to-z-of-brands/original-penguin/cat/?cid=10267&amp;nlid=mw|outlet|nach+marke+shoppen" target="_self">Original Penguin</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/men/sale/a-to-z-of-brands/puma/cat/?cid=9839&amp;nlid=mw|outlet|nach+marke+shoppen" target="_self">Puma</a></li><li><a class="_2Aejr0d" data-testid="text-link" href="https://www.asos.de/herren/sale/a-to-z-of-brands/kappa/cat/pgecategory.aspx?cid=27968&amp;nlid=mw|outlet|nach+marke+shoppen" target="_self">Kappa</a></li><li><a class="_2Aejr0d _1iUbby0" data-testid="text-link" href="https://www.asos.de/herren/sale/a-to-z-of-brands/cat/?cid=8420&amp;nlid=mw|outlet|nach+marke+shoppen" target="_self">Alle anzeigen</a></li></ul></div></section><section class="_1QmxDO_ nEoIIe5"><div class="_1NtxSD3 _26_yujQ"><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/outlet/weitere-reduktionen/cat/?cid=27477&amp;nlid=mw|outlet|neue+auswahl" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_outlet_furtherreductions_4wl_1281925?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _3t_t-Xe _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">WEITERE REDUZIERUNGEN: BIS ZU 70%</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/ctas/online-mode-24/cat/?cid=16772&amp;nlid=mw|outlet|neue+auswahl" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_outlet_occasionwear_4wl_1380818?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _3t_t-Xe _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Besondere Anlässe</span></a><a class="_2uD85Ca" data-testid="marketing-image" href="https://www.asos.de/herren/ctas/online-mode-23/cat/?cid=16771&amp;nlid=mw|outlet|neue+auswahl" target="_self"><img alt="" src="https://images.asos-media.com/navigation/mw_outlet_bestofbrands_4wl_1444741?&amp;$n_320w$" class="_2PBH9Tw"/><div class="zgb64R9 _3t_t-Xe _2Qt4a5S"></div><span class="_3ORur7s _30YKIbT">Top-Marken</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="a3ed6672-26b2-486b-88d1-b874034f0fd6" data-testid="secondarynav-flyout"><section class="_1QmxDO_ _3iT6Z7q"><div class="lxl1m4p"><a class="cEafYrU" href="https://marketplace.asos.com/men?nlid=mw|marketplace|ctasHomepage&amp;nlid=mw|marketplace|ctas" target="_blank"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_marketplace_explore_7wl_4m?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">ASOS MARKETPLACE</span></div><span class="_2DUsWiv">Shoppe in mehr als 700 Boutiquen</span></a><a class="cEafYrU" href="https://marketplace.asos.com/men/featured/mens-vintage-sportswear?nlid=mw|marketplace|ctasVintageSportswear&amp;nlid=mw|marketplace|ctas" target="_blank"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_marketplace_vintage_7wl_4m?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">RETRO-SPORTSWEAR</span></div><span class="_2DUsWiv">Klassiker von deinen liebsten 90s-Brands</span></a><a class="cEafYrU" href="https://marketplace.asos.com/men/featured/mens-vintage-90s-clothing?nlid=mw|marketplace|ctas|grunge&amp;nlid=mw|marketplace|ctas" target="_blank"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw_marketplace_grunge_7wl_4m?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">NINETIES GRUNGE SHOPPEN</span></div><span class="_2DUsWiv">Mehr als nur Bandshirts</span></a><a class="cEafYrU" href="https://marketplace.asos.com/men/featured/mens-cosy-stuff?nlid=mw|marketplace|ctasStreetwearBrands&amp;nlid=mw|marketplace|ctas" target="_blank"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/streetwear_marketplace_wk21_1601?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">STREETWEAR SHOPPEN</span></div><span class="_2DUsWiv">Straßentaugliche Styles von Indie-Brands</span></a></div></section></div></div></div></div><div role="tabpanel" class="tabpanel"><div class="_1c4zf5o" data-testid="secondarynav-container"><div class="rbfmVpk" aria-hidden="true" data-testid="backdrop"></div><div class="_1Exx-PU"><div class="_1dZZci7 _20X3gNb" data-id="4526f3e4-33ef-4133-bd56-e01ce63a949b" data-testid="secondarynav-flyout"><section class="_1QmxDO_ _3iT6Z7q"><div class="lxl1m4p"><a class="cEafYrU" href="https://www.asos.de/entdecken/insiders/?nlid=mw|inspiration|ctas" target="_self"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/insider_mw-nav-1805-4wl?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">ASOS INSIDER</span></div><span class="_2DUsWiv">Folge den Insidern für Styling-Tipps und mehr</span></a><a class="cEafYrU" href="https://www.asos.de/herren/mode-updates/?nlid=mw|inspiration|ctas" target="_self"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/mw-inspiration-stylefeed-4m?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">STYLE FEED</span></div><span class="_2DUsWiv">Tipps. Outfits. Inspiration.</span></a><a class="cEafYrU" href="https://www.asos.de/shop-the-magazine/cat/?cid=27919&amp;nlid=mw|inspiration|ctas" target="_self"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/unisex_shopthemag_inspiration_4m?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">ASOS Magazin shoppen</span></div><span class="_2DUsWiv">Shoppe die Styles aus dem ASOS Magazin</span></a><a class="cEafYrU" href="/fashion-discovery/?nlid=mw|inspiration|ctas" target="_blank"><div class="Es0d-oL"><div aria-hidden="true" class="_3ARlt8n" role="presentation" style="background-image:url(https://images.asos-media.com/navigation/unisex_fashion_discovery_finalists_4m?&amp;$n_320w$)"></div><div class="_9q4POoy _1VbtZ8X"></div><span class="_3skrDb5 _1VbtZ8X">Fashion Discovery</span></div><span class="_2DUsWiv">Diese neue Marke gibt&#x27;s bald bei ASOS</span></a></div></section></div></div></div></div></div></nav></div></div><div id="sc-sticky-header-portal"></div></div></div><section id="globalBannerComponent" class="src-GlobalBanner-GlobalBanner_globalBanner"><div class="src-GlobalBanner-GlobalBanner_loading"></div></section></header></div>
        <div id="chrome-breadcrumb">
          <div><nav class="_26dhdzA">
      <ol class="_3_HulsW">
            <li><a href="https://www.asos.de">Startseite</a></li>
            <li>ASOS DESIGN – Extrem enge Jeans in Schwarz</li>
      </ol>
      </nav></div>
        </div>
        <main id="chrome-app-container">
          <!-- PDP: 2.0.1462 -->

<script type="text/javascript">
  if (!window.asos) {
  window.asos = {};
}
if (!window.asos.performance) {
  window.asos.performance = {};
}
// Provide a sham (dummy functions) if the browser does not support the User Timing API
if (
  performance === undefined ||
  performance.mark === undefined ||
  performance.measure === undefined
) {
  window.asos.performance.mark = function() {};
  window.asos.performance.measure = function() {};
  window.asos.performance.markAndMeasure = function() {};
} else {
  window.asos.performance.executedEvents = [];
  window.asos.performance.mark = function(name) {
    performance.mark(name);
  };
  window.asos.performance.measure = function(name, startMark, endMark) {
    if (window.asos.performance.executedEvents.indexOf(name) !== -1) {
      return;
    }
    if (startMark === undefined) {
      startMark = "fetchStart";
    }
    performance.measure(name, startMark, endMark);
    window.asos.performance.executedEvents.push(name);
  };
  window.asos.performance.markAndMeasure = function(name, startMark) {
    window.asos.performance.mark(name);
    window.asos.performance.measure(name, startMark, name);
  };
}

  window.asos.performance.markAndMeasure('pdp:start');
</script>

<script src="https://cdns.gigya.com/JS/gigya.js?apiKey=3_Gl66L3LpFTiwZ8jWQ9x_4MLyUUHPRmPtRni0hzJ9RH5WA2Ro6tUv47yNXtKn3HQ8"></script>

<div class="asos-product" id="asos-product">
  <section id="core-product" class="core-product-container">
    <div class="layout-width">
      <div id="gallery-content" class="gallery-content-wrapper">
        <div class="product-gallery-static">

          <img src="https://images.asos-media.com/products/asos-design-extrem-enge-jeans-in-schwarz/6655290-1-black?$XXL$&wid=513&fit=constrain" alt="Bild 1 von ASOS DESIGN – Extrem enge Jeans in Schwarz" onload="window.asos.performance.markAndMeasure('pdp:hero_image_displayed');" />
        </div>
        <div class="product-gallery" data-bind='component: { name: "product-gallery", params: {state: state,  data: { rootElement: $element, id: product.id, images: product.images, map: product.colourImageMap, localisedMap: product.localisedColourImageMap, defaultColour: product.defaultColour, media: product.media, playerParams: { scene7: { imageServer: "https://images.asos-media.com", videoServer: "https://video.asos-media.com" }}}}}'>
          <div class="product-carousel">
    <div class="window">
        <ul>
            <li>

                <img src="https://images.asos-media.com/products/asos-design-extrem-enge-jeans-in-schwarz/6655290-1-black?$XXL$&wid=513&fit=constrain" alt="Bild 1 von ASOS DESIGN – Extrem enge Jeans in Schwarz"/>
            </li>
        </ul>
    </div>
</div>
<div class="thumbnails">
    <ul>

            <li class="image-thumbnail mobile-hide active">
                <a href="#">
                    <img src="https://images.asos-media.com/products/asos-design-extrem-enge-jeans-in-schwarz/6655290-1-black?$S$&wid=40&fit=constrain" alt="Bild 1 von ASOS DESIGN – Extrem enge Jeans in Schwarz" />
                </a>
            </li>

            <li class="image-thumbnail mobile-hide ">
                <a href="#">
                    <img src="https://images.asos-media.com/products/asos-design-extrem-enge-jeans-in-schwarz/6655290-2?$S$&wid=40&fit=constrain" alt="Bild 2 von ASOS DESIGN – Extrem enge Jeans in Schwarz" />
                </a>
            </li>

            <li class="image-thumbnail mobile-hide ">
                <a href="#">
                    <img src="https://images.asos-media.com/products/asos-design-extrem-enge-jeans-in-schwarz/6655290-3?$S$&wid=40&fit=constrain" alt="Bild 3 von ASOS DESIGN – Extrem enge Jeans in Schwarz" />
                </a>
            </li>

            <li class="image-thumbnail mobile-hide ">
                <a href="#">
                    <img src="https://images.asos-media.com/products/asos-design-extrem-enge-jeans-in-schwarz/6655290-4?$S$&wid=40&fit=constrain" alt="Bild 4 von ASOS DESIGN – Extrem enge Jeans in Schwarz" />
                </a>
            </li>

    </ul>
</div>

        </div>
      </div>

      <div class="layout-aside" id="aside-content">
        <div class="product-hero">
            <!-- ko if: state.productData.isInStock -->
            <div class="social-share-icon-mobile"><a href="#"></a></div>
            <!-- /ko -->
            <!-- ko if: !state.productData.isInStock; -->
            <h3 class="product-out-of-stock-label" data-bind="text:state.resources.OutOfStock"></h3>
            <!-- /ko -->
            <h1>ASOS DESIGN – Extrem enge Jeans in Schwarz</h1>
<script type="text/javascript">window.asos.performance.markAndMeasure('pdp:title_displayed');</script>
            <div class="product-price" id="product-price" data-bind='component: { name: "product-price", params: {state: state, showGermanVatMessage: true } }'></div>
<!-- ko if: state.productData.isInStock -->
<div class="delivery-and-returns" data-bind='component: { name: "delivery-and-returns", params: {state: state, hideDeliveryLink: false}}'></div>
<!-- /ko -->

        </div>

        <div class="out-of-stock" data-bind='component: { name: "out-of-stock", params: {state: state, data: product}}'></div>

        <div id="product-colour" data-bind='component:{
                            name: "product-colour",
                            params: {
                                hideLabels: false,
                                useShortSelectColourLabel: false,
                                state: state,
                                data: product,
                                hideOnOutOfStock : true}
                            }'></div>

        <div
                class="component fit-analytics"
                data-bind='component: {
                        name: "fit-analytics",
                        params: {
                            state: state,
                            data: product
                        }
                     }'></div>
        <div id="shipping-restrictions" data-bind='component:{
                            name: "shipping-restrictions",
                            params: { state: state, data: product}
                            }'></div>
      </div>

      <div class="stock-price-retry-oos layout-aside" id="aside-content-oos">
        <div class="out-of-stock" data-bind='component: { name: "out-of-stock", params: {state: state, data: product}}'></div>
      </div>
      <div class="stock-price-retry layout-aside" id="aside-content-retry">
        <div data-bind='component: { name: "stock-price-retry", params: {state: state }}'></div>
      </div>
    </div>
  </section>
  <section class="product-description">
    <div class="layout-width">
      <div class="product-details" id="product-details">
   <div class="overflow-container" data-bind="css: { open: isOpen()}, style: {'max-height':containerHeight()}">

      <div class="col">
         <div class="product-description">
            <h4>Produktbeschreibung</h4>
            <span><a href="https://www.asos.de/men/jeans/extreme-super-skinny-jeans/cat/?cid=20991"><strong>extrem enge Röhrenjeans</strong></a> von <a href="https://www.asos.de/men/a-to-z-of-brands/asos-collection/cat/?cid=3159"><strong>ASOS DESIGN</strong></a><ul>    <li>Diese Ohrringe sind ein Muss </li><li>Reißverschluss</li><li>funktionale Taschen</li><li>super-enge Passform</li><li>der engste Schnitt für einen Sitz wie aufgesprüht</li></ul></span>
         </div>
      </div>


      <div class="col">
         <div class="product-code">
            <h4>PRODUKTCODE</h4>
            <span>711297</span>
         </div>

         <div class="brand-description">
            <h4>Marke</h4>
            <span>Für einen Look, mit dem du ganz selbstbewusst deinen eigenen Stil zeigen kannst. <a href="https://www.asos.de/men/a-to-z-of-brands/asos-collection/cat/?cid=3159"><strong>ASOS DESIGN</strong></a> greift die neuesten Trends auf und verleiht ihnen den besonderen ASOS-Stil. Alles, was du benötigst, einschließlich unserer Plus- und Tall-Kollektionen sowie unserer <a href="https://www.asos.de/men/a-to-z-of-brands/asos-collection/cat/?cid=3159"><strong>ASOS DESIGN</strong></a> Make-up-Kollektion – für einen coolen Look, den du jeden Tag neu gestalten kannst. Damit du tagsüber und am Abend immer besonders gut aussiehst.</span>
         </div>


         <div class="more-info">
            <h4>Mehr Infos</h4>
            <ul class="badges">

               <li>
                  <a href="https://www.asos.de" target="_blank">
                     <img src="https://images.asos.com/webcontent/greenroom/cmia.png" alt="Made in Africa" title="Made in Africa" />
                  </a>
               </li>

               <li>
                  <a href="https://www.asos.de/Women/GreenRoom/Cat/pgecategory.aspx?cid=10062" target="_blank">
                     <img src="https://images.asos.com/webcontent/greenroom/vintage.png" alt="Eco Edit" title="Eco Edit" />
                  </a>
               </li>

            </ul>
         </div>

      </div>


      <div class="col">

         <div class="size-and-fit">
            <h4>GRÖSSE &amp; PASSFORM</h4>
            <span><br>Model ist 188 cm/6 Fuß 2 Zoll groß<br>Das Model trägt: W 32 Zoll, reguläre Passform</span>
         </div>



         <div class="care-info">
            <h4>SO PFLEGST DU MICH</h4>
            <span><div>Pflegehinweise auf dem Etikett beachten</div><div>Kleider haben auch Bedürfnisse</div></span>
         </div>



         <div class="about-me">
            <h4>ÜBER MICH</h4>
            <span>Stretch-Denim<br><div>Unterstützt den nachhaltigen Anbau von Cotton Made In Africa (CMIA) </div><div>Das ist mehr als nur eine durchschnittliche Baumwollhose</div><div>Ziel der Initiative ist es, die Lebensbedingungen der Farmer in Afrika zu verbessern</div><div>Das ist fair, oder?</div><br>Hauptmaterialien: 90% Baumwolle, 8% Polyester, 2% Elastan.<br><br></span>
         </div>

      </div>

      <div class="show-more" data-bind="click:toggle">
         <div class="fade">
            <a href="#" data-bind="css: { show: isOpen() === false}">MEHR ANZEIGEN</a>
            <a href="#" data-bind="css: { show: isOpen()}">WENIGER ANZEIGEN</a>
         </div>
      </div>
   </div>
</div>
    </div>
  </section>


  <div id="lower-content">
    <div class="component might-like" data-bind='component: { name: "might-like", params: {state: state, data: product}}'></div>

    <!-- ko if: product.isInStock-->
    <div class="component buy-the-look" data-bind='component: { name: "buy-the-look", params: {state: state, data: product, render: product.isInStock, showGermanVatMessage: true}}'></div>
    <!-- /ko -->

    <!-- ko if: !product.isInStock-->
    <div class="component buy-the-look" data-bind='component: { name: "buy-the-look", params: {state: state, data: product, render: !product.isInStock, showGermanVatMessage: true}}'></div>
    <!-- /ko -->

    <div class="component social-share" id="social-share" data-bind='component: { name: "social-share", params: {state: state,data: product}}'></div>
    <div class="component" data-bind='component: { name: "recently-viewed", params: {state: state, data: product,expiryInDays: 30}}'></div>
    <div data-bind='component: { name: "toast", params: {state: state}}'></div>
    <a class="component back-to-top" data-bind="scrollToTop"><span class="product-forward">Nach oben</span></a>

  </div>

  <dialog id="modal">
    <div class="modal-window" role="region">
        <div class="loader fullwidth"></div>
        <div class="modal-title">
            <h1></h1>
            <div class="modal-close">
                <button class="link"><span class="product-close">close</span></button>
            </div>
        </div>
        <div class="modal-scroll">
            <div class="modal-content">
            </div>
        </div>
        <iframe class="modal-iframe"></iframe>
    </div>
</dialog>

  <div class="schema-org">


<div itemscope itemtype="https://schema.org/Product">
    <img itemprop="image" src="https://images.asos-media.com/products/asos-design-extrem-enge-jeans-in-schwarz/6655290-1-black" alt="Bild 1 von ASOS DESIGN – Extrem enge Jeans in Schwarz" />
    <link itemprop="itemCondition" href="https://schema.org/NewCondition" />
    <span itemprop="productID">6655290</span>
    <span itemprop="sku">6655290</span>
    <span itemprop="brand" itemscope itemtype="https://schema.org/Brand">
        <span itemprop="name">ASOS DESIGN</span>
    </span>
    <span itemprop="name">ASOS DESIGN – Extrem enge Jeans in Schwarz</span>
    <span itemprop="description">ASOS DESIGN – Extrem enge Jeans in Schwarz auf ASOS shoppen. Mode Online entdecken.</span>
    <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <link itemprop="availability" href="https://schema.org/InStock" />
        <meta itemprop="priceCurrency" content="EUR" />
        <span itemprop="price">33.99</span>
        <span itemprop="eligibleRegion">DE</span>
        <span itemprop="seller" itemscope itemtype="https://schema.org/Organization">
            <span itemprop="name">ASOS</span>
        </span>
    </span>
</div>

  </div>
</div>

        </main>
        <div id="chrome-footer"><footer class="_170bFmT" data-testid="footer" data-reactroot=""><div class="SKoJwiD"><div class="G2lBJZk"><div class="_2WkalZ6" data-testid="social-links-bar"><a title="Facebook" class="_1gagYVR i8FxB9X" href="https://www.facebook.com/ASOS/" target="_blank" data-testid="social-link">Facebook</a><a title="Instagram" class="_1gagYVR EOORuiO" href="https://www.instagram.com/asos_de/" target="_blank" data-testid="social-link">Instagram</a><a title="Snapchat" class="_1gagYVR uQdwP38" href="https://www.snapchat.com/add/asosfashion" target="_blank" data-testid="social-link">Snapchat</a></div><div class="d3hEogn"><span class="_2t5mfE3"><img src="https://images.asos-media.com/navigation/klarna-de-png" alt="klarna"/></span><span class="_2t5mfE3"><img src="https://images.asos-media.com/navigation/pay-pal-png" alt="paypal"/></span><span class="_2t5mfE3"><img src="https://images.asos-media.com/navigation/visa-png" alt="visa"/></span><span class="_2t5mfE3"><img src="https://images.asos-media.com/navigation/mastercard-png" alt="mastercard"/></span><span class="_2t5mfE3"><img src="https://images.asos-media.com/navigation/sofort-png" alt="sofort"/></span><span class="_2t5mfE3"><img src="https://images.asos-media.com/navigation/american-express-png" alt="americanexpress"/></span><span class="_2t5mfE3"><img src="https://images.asos-media.com/navigation/visa-electron-png" alt="visaelectron"/></span></div></div><div class="HZ254Fm"></div><div class="_2kRRN8_"></div><div class="_1gmIo4T"><div class="_1ysB59M"><details class="Rg3LvF7" open="" data-testid="footer-links"><summary class="AyPVvkm" tabindex="-1">Hilfe &amp; Informationen</summary><a class="_26xJFIo" href="https://www.asos.de/kundenservice/kundenbetreuung/hilfe/" target="_self">Hilfe</a><a class="_26xJFIo" href="https://my.asos.com/my-account/orders?country=DE&amp;keyStoreDataversion=p1swt7e-15&amp;lang=de-DE&amp;store=DE" target="_self">Sendungsverfolgung</a><a class="_26xJFIo" href="https://www.asos.de/kundenservice/lieferung/" target="_self">Lieferung &amp; Rücksendung</a><a class="_26xJFIo" href="https://www.asos.de/kundenservice/premier-lieferung/" target="_self">Premier-Lieferung</a><a class="_26xJFIo" href="https://www.asos.de/entdecken/students/asos-on-campus/student-validation/" target="_self">10% Studentenrabatt</a></details><details class="Rg3LvF7" open="" data-testid="footer-links"><summary class="AyPVvkm" tabindex="-1">Mehr Über ASOS</summary><a class="_26xJFIo" href="https://www.asos.de/about/" target="_self">Über uns</a><a class="_26xJFIo" href="https://asoscareers.asos.com/" target="_blank">Karriere bei ASOS</a><a class="_26xJFIo" href="https://www.asosplc.com/corporate-responsibility.aspx" target="_blank">Unternehmensverantwortung</a><a class="_26xJFIo" href="https://www.asosplc.com/" target="_blank">Investoren</a></details><details class="Rg3LvF7" open="" data-testid="footer-links"><summary class="AyPVvkm" tabindex="-1">Weitere ASOS-Sites</summary><a class="_26xJFIo" href="https://www.asos.de/gift-vouchers/?ctaref=global%20footer|gift%20vouchers" target="_self">Geschenkgutscheine</a><a class="_26xJFIo" href="https://www.asos.de/entdecken/unsere-apps/" target="_self">Mobile Seite &amp; ASOS Apps</a><a class="_26xJFIo" href="https://marketplace.asos.com/?ctaref=Global%20footer" target="_blank">ASOS Marketplace</a></details><div class="_3RAMPY8"><div class="_2yzMbJD _3n7i0ux" data-testid="country-selector"><span class="_3g4nBO9">Einkaufen aus</span><button class="YvZ3lbB" data-testid="country-selector-btn" type="button" aria-label="Einkaufen aus Germany. Land auswählen"><span class="_2F4ufl5">Du bist in</span><img src="https://assets.asosservices.com/storesa/images/flags/de.png" alt="Germany" class="_2S5PiQY"/><span class="Tg743C9">Ändern</span></button></div></div></div></div></div><div class="_2jz2mjA"><div class="nUQMpvx" data-testid="legalbar"><p class="_28lMicj">© <!-- -->2019<!-- --> ASOS</p><ul class="W1vTixy"><li><a href="https://www.asos.de/datenschutz/">Datenschutz und Cookies</a></li><li><a href="https://www.asos.de/allgemeine-geschaftsbedingungen/">AGB</a></li><li class="_2xktXa3"><a href="https://www.asos.de/barrierefreiheit/">Barrierefreiheit</a></li></ul></div></div></footer></div>
        <div id="chrome-welcome-mat"></div>
        <script src="https://assets.asosservices.com/productpg/Asos.Product.Page.Web.65b32a4e.js"></script><script type="text/javascript">
  define('Product.Config', [], function() {
    return {
            ymalApiUrl: "/api/product/search/v1/recommendations/",
            recsApiUrl: "/api/customer/recommendation/v2/customer/me/recommendations",
            locationServiceUrl: "#{LOCATION_SERVICE_URL}",
            fullProductUrl: "/api/product/catalogue/v2/products/",
            stockPriceUrl: "/api/product/catalogue/v2/stockprice?productIds=",
            recommendationsApiVersion: "v2",
            buyTheLookApiUrl: "/api/product/catalogue/v2/productgroups/ctl/",
            storeApiClientUrl: "/api/fashion/store/v2/stores/countries"
    }
  });
  define('PageConfig', function() {
    var webContext = window.__siteChrome.context.getWebContext();
    return {
      storeCode: webContext.storeId,
      countryCode: webContext.browseCountry,
      geoCountryCode: webContext.geoCountry,
      currency: webContext.browseCurrency,
      language: webContext.browseLanguage,
      languageShort: webContext.browseLanguage.substring(0, 2),
      sizeSchema: webContext.browseSizeSchema,
      keyStoreDataversion: webContext.keyStoreDataversion,
      siteChromeTemplateVersion: webContext.templateVersion,
      gender: 'Men',
      siteDomain: 'https://www.asos.de',
      platform: document.getElementsByTagName("HTML")[0].getAttribute("data-platform").toLowerCase(),
      storeId: 4,
      shouldUseHttps: true,
      pageTitle: document.title,
      breadcrumb: 'Startseite/ASOS DESIGN – Extrem enge Jeans in Schwarz',
      flagsCssPath: 'https://assets.asosservices.com/productpg/Asos.Product.Page.Web.Flags.34adc8d8.css',
      version: '2.0.1462'
    };
  });

  waitForSdks = function() {
    return new Promise(function (resolve) {
      var firstCheck = true;
      var bagSdkEmitter;
      var savedItemsSdkEmitter;

      function checkSdksLoaded() {
        var sdks = Object.keys(window.__sdk);
        if (sdks.indexOf("bag") !== -1 && sdks.indexOf("savedItems") !== -1) {
          if (bagSdkEmitter && savedItemsSdkEmitter) {
            bagSdkEmitter.remove();
            savedItemsSdkEmitter.remove();
          }
          return resolve();
        }
        if (firstCheck) {
          bagSdkEmitter = window.analyticsEventEmitter.addListener("bag-sdk-ready", checkSdksLoaded);
          savedItemsSdkEmitter = window.analyticsEventEmitter.addListener("savedItems-sdk-ready", checkSdksLoaded);
          firstCheck = false;
        }
      }

      checkSdksLoaded();
    });
  }

  waitForSdks().then(function() {
    require(['Pages/FullProduct'], function (view) {
      view(
        {"productCode":"711297","name":"ASOS DESIGN – Extrem enge Jeans in Schwarz","gender":"Men","id":6655290,"isNoSize":false,"isOneSize":false,"isInStock":true,"brandName":"ASOS DESIGN","variants":[{"variantId":6655296,"size":"W26 L30","sizeId":8024,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":22},{"variantId":6655295,"size":"W26 L32","sizeId":8023,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":23},{"variantId":6655298,"size":"W28 L30","sizeId":4331,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":26},{"variantId":6655297,"size":"W28 L32","sizeId":4403,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":27},{"variantId":8114874,"size":"W29 L30","sizeId":8027,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":29},{"variantId":8114851,"size":"W29 L32","sizeId":8025,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":30},{"variantId":6655303,"size":"W30 L30","sizeId":4312,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":33},{"variantId":6655301,"size":"W30 L32","sizeId":4829,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":34},{"variantId":6655299,"size":"W30 L34","sizeId":4404,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":35},{"variantId":8114885,"size":"W31 L30","sizeId":8026,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":39},{"variantId":8114844,"size":"W31 L32","sizeId":4256,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":40},{"variantId":8114881,"size":"W31 L34","sizeId":4897,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":41},{"variantId":6655310,"size":"W32 L30","sizeId":4517,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":44},{"variantId":6655307,"size":"W32 L32","sizeId":4257,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":45},{"variantId":6655305,"size":"W32 L34","sizeId":4898,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":46},{"variantId":8114852,"size":"W33 L30","sizeId":8029,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":52},{"variantId":8114893,"size":"W33 L32","sizeId":4253,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":53},{"variantId":8114840,"size":"W33 L34","sizeId":8146,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":54},{"variantId":6655318,"size":"W34 L30","sizeId":4333,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":57},{"variantId":6655315,"size":"W34 L32","sizeId":4405,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":58},{"variantId":6655312,"size":"W34 L34","sizeId":4806,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":59},{"variantId":8346357,"size":"W36 L30","sizeId":4319,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":66},{"variantId":6655300,"size":"W36 L32","sizeId":4831,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":68},{"variantId":6655321,"size":"W36 L34","sizeId":4407,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":70},{"variantId":8346465,"size":"W38 L30","sizeId":21235,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":79},{"variantId":6655304,"size":"W38 L32","sizeId":4899,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":80},{"variantId":6655302,"size":"W38 L34","sizeId":8091,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":82},{"variantId":6655306,"size":"W40 L32","sizeId":9214,"colour":"Schwarz","colourCode":"BK1","isPrimary":true,"sizeOrder":90}],"images":[{"isPrimary":true,"colour":"Black","colourCode":"BK1","imageType":"Standard1","url":"https://images.asos-media.com/products/asos-design-extrem-enge-jeans-in-schwarz/6655290-1-black","productId":6655290,"alternateText":"Bild 1 von ASOS DESIGN – Extrem enge Jeans in Schwarz","isVisible":true},{"isPrimary":false,"colour":"","colourCode":"","imageType":"Standard2","url":"https://images.asos-media.com/products/asos-design-extrem-enge-jeans-in-schwarz/6655290-2","productId":6655290,"alternateText":"Bild 2 von ASOS DESIGN – Extrem enge Jeans in Schwarz","isVisible":true},{"isPrimary":false,"colour":"","colourCode":"","imageType":"Standard3","url":"https://images.asos-media.com/products/asos-design-extrem-enge-jeans-in-schwarz/6655290-3","productId":6655290,"alternateText":"Bild 3 von ASOS DESIGN – Extrem enge Jeans in Schwarz","isVisible":true},{"isPrimary":false,"colour":"","colourCode":"","imageType":"Standard4","url":"https://images.asos-media.com/products/asos-design-extrem-enge-jeans-in-schwarz/6655290-4","productId":6655290,"alternateText":"Bild 4 von ASOS DESIGN – Extrem enge Jeans in Schwarz","isVisible":true}],"colourImageMap":{"black":0},"localisedColourImageMap":{"schwarz":0},"price":{"currency":"EUR","current":33.99,"previous":0,"rrp":0},"media":{"catwalkUrl":"https://video.asos-media.com/products/asos-design-extrem-enge-jeans-in-schwarz/6655290-catwalk-AVS","threeSixtyUrl":""},"buyTheLookId":6655290,"sizeGuideVisible":true,"sizeGuide":"https://assets.asosservices.com/asos-ui/SizeGuides/2.0/size-guide.html?productType=1497&brand=53&store=DE&division=5&sizeSchema=DE","shippingRestrictions":{"shippingRestrictionsLabel":null,"shippingRestrictionsVisible":false}},
        {"360":"360","AboutMeTitle":"ÜBER MICH","AddToBag":"In meine Tasche","AMP_VP_ErrorPage_HeaderText":"Oopsie!","AMP_SV_ErrorPage_MessageText":"Da ist was schiefgelaufen. Bitte überprüfe deine Internetverbindung und lade das Video nochmal.","AMP_VP_ErrorPage_RefreshButtonText":"Aktualisieren","AMP_VP_ReplayPage_ReplayButtonText":"Wiederholung","AMP_VP_ReplayPage_ReturnButtonText":"Zurück zur Galerie","AMP_VP_UnsupportedPage_CloseButtonText":"Schließen / SCHLIESSEN","AMP_VP_UnsupportedPage_HeaderText":"[BrowserName] wird nicht unterstützt","AMP_VP_UnsupportedPage_MessageText":"Bitte aktualisiere deinen Browser, um dieses Video anzusehen.","BrandDescriptionTitle":"Marke","BuyTheLook":"DEN LOOK SHOPPEN","CareInfoTitle":"SO PFLEGST DU MICH","Catwalk":"Video","Clear":"LEEREN","Colour":"FARBE","DeliveryReturnsLink":"Gratis Versand & Rückversand*","ErrorMaxDescription":"Du hast die maximale Anzahl an Artikeln erreicht, die du pro Bestellung kaufen kannst. Bitte tätige eine Bestellung oder korrigiere deine Artikelauswahl. Dieser Artikel wurde nicht in deine Tasche gelegt.","ErrorMaxTitle":"KEIN PLATZ MEHR!","ErrorNotSaved":"Oopsie! Der Artikel konnte nicht gespeichert werden. Bitte versuche es nochmal.","From":"Von","GoToFullProduct":"PRODUKTSEITE AUFRUFEN","Home":"Startseite","ImageAltPrefixFormat":"Bild %{index} von","ItemsSelectedFormat":"AUSGEWÄHLTE ARTIKEL: {0}","LowInStock":"FAST VERGRIFFEN","MightLike":"DAS KÖNNTE DIR AUCH GEFALLEN","MoreFrom":"MEHR VON:","MoreInfo":"Mehr Infos","NotAvailable":"Nicht verfügbar","OutOfStock":"Vergriffen","OutOfStockBuyTheLook":"VERGRIFFEN","OutOfStockMixAndMatch":"Vergriffen","OutOfStockMoreFrom":" oder von mehr erkunden :","OutOfStockYouMightLike":"Sie können diese und <a>ähnliche Artikel wie </a> stattdessen","ProductCode":"PRODUKTCODE","ProductDescriptionTitle":"Produktbeschreibung","ProductInformation":"PRODUKTINFORMATIONEN","RecentlyViewed":"ZULETZT ANGESEHEN","Rrp":"RRP","SaveForLater":"Auf die Merkliste","SearchResultsFor":"Suchergebnisse für %{searchQuery}","SelectColour":"Bitte auswählen","SelectColourFrom":"Bitte wähle eine von {0} Farben","SelectSize":"Bitte auswählen","ShippingRestrictionsFilterLabel":"LAND SUCHEN:","ShippingRestrictionsHeading":"LIEFERBESCHRÄNKUNGEN","ShippingRestrictionsNoMatches":"Es wurden leider keine passenden Ergebnisse gefunden.","ShippingTitle":"VERSANDOPTIONEN FÜR DEUTSCHLAND","ShowLess":"WENIGER ANZEIGEN","ShowMore":"MEHR ANZEIGEN","Size":"GRÖSSE","SizeAndFitTitle":"GRÖSSE & PASSFORM","SizeGuide":"Größentabelle","SocialCopyButton":"Kopiert","SocialShare":"TEILEN","SuccessSave":"Artikel für 60 Tage gespeichert. <a href=\\"/saved-items\\">Gespeicherte Artikel ansehen</a>","AddToBagSuccess":"Hinzugefügt","BackToTop":"Nach oben","DoubleTapZoom":"Doppelklicken für Zoom","AMP_SV_HintPage_DragText":"Ziehen, um zur 360°-Ansicht zu gelangen","ItemSaved":"Artikel für 60 Tage gespeichert. Anzeigen","OnlyShips":"DIESER ARTIKEL WIRD NUR IN DIE FOLGENDEN LÄNDER VERSCHICKT:","OopsNoProduct":"Oopsie! Du hast noch keine Produkte ausgewählt, die zur Tasche hinzugefügt werden sollen","OopsNothingAdded":"Oopsie! Da ist was schiefgelaufen. Die Produkte wurden nicht zu deiner Tasche hinzugefügt. Bitte schau dir deine Auswahl an und probier's noch mal.","OopsTryAgain":"Oopsie! Das ist uns jetzt etwas peinlich. Bitte versuche es später noch einmal.","AddItemsToBagMixAndMatch":"ARTIKEL IN MEINE TASCHE","AddItemsToBagMixAndMatchSuccess":"ARTIKEL HINZUGEFÜGT","AddItemToBagMixAndMatch":"ARTIKEL IN MEINE TASCHE","AddItemToBagMixAndMatchSuccess":"ARTIKEL HINZUGEFÜGT","AddToBagTryAgain":"ERNEUT VERSUCHEN","SelectColourPrompt":"Bitte wähle aus den verfügbaren Farben und Größen.","SelectSizePrompt":"Bitte wähle aus den verfügbaren Farben und Größen.","SelectSizePromptMixAndMatch":"Oopsie! Du hast noch keine Produkte ausgewählt, die zur Tasche hinzugefügt werden sollen","AMP_VP_ErrorPage_MessageText":"Da ist was schiefgelaufen. Bitte überprüfe deine Internetverbindung und lade das Video nochmal.","GermanVatMessage":"inkl. MwSt.","MoreInfoTitle":"Mehr Infos","MetaDescriptionFormat":"%{productName} auf ASOS shoppen. Mode Online entdecken.","AMP_SV_HintPage_TapText":"Doppelklicken für Zoom","DeliveryUrl":"/kundenservice/lieferung/","DeliveryReturnsShippingOnlyLink":"Free Shipping Worldwide*","StockPriceRetryButton":"ERNEUT VERSUCHEN","StockPriceRetryContent":"Oopsie! Das ist uns jetzt etwas peinlich. Bitte versuche es später noch einmal.","StockPriceRetryTitle":"DAS GING SCHIEF","MightLikeOutOfStock":"ÄHNLICHE ARTIKEL","DeliveryAndReturnsCountriesCancelLabel":"Abbrechen","DeliveryAndReturnsCountriesClearLabel":"LEEREN","DeliveryAndReturnsCountriesFilterLabel":"LAND SUCHEN:","DeliveryAndReturnsCountriesHeading":"LAND AUSWÄHLEN","DeliveryAndReturnsCountriesNoMatches":"Es wurden leider keine passenden Ergebnisse gefunden.","DeliveryAndReturnsTechnicalDifficulties":"Sorry, wir haben gerade technische Probleme. Bitte versuche es später nochmal!","DeliveryAndReturnsTechnicalDifficultiesTitle":"Versandoptionen","AddToBagToastMessage":"Dieser Artikel wurde für 60 Minuten reserviert","Fit_Analytics_Lower_Header":"Hilfe bei der Größenbestimmung","Fit_Analytics_Lower_Intro":"Immer noch nicht sicher, welche Größe du brauchst?","Fit_Analytics_Lower_Rec_Complete":"{#}Sieh dir unsere {sizeGuide=\\"Größentabelle\\"} an.","Fit_Analytics_Lower_Rec_None":"Finde deine empfohlene Größe{#}oder sieh dir unsere {sizeGuide=\\"Größentabelle\\"} an.","Fit_Analytics_Lower_Rec_Partial":"Verfeinere deine Größenempfehlung{#}oder sieh dir unsere {sizeGuide=\\"Größentabelle\\"} an.","Fit_Analytics_Rec_Complete":"Deine vom Passform-Assistent empfohlene Größe ist {size}","Fit_Analytics_Rec_None":"Deine vom Passform-Assistent empfohlene Größe finden","Fit_Analytics_Rec_OOS":"Deine vom Passform-Assistent empfohlene Größe, {size}, ist ausverkauft.","Fit_Analytics_Rec_Partial":"Deine vom Passform-Assistent empfohlene Größe ist {size}","DeliveryAndReturnsModalAriaLabel":"Versandoptionen-Dialog","DeliveryAndReturnsCountrySelectorModalAriaLabel":"Versandland wählen"},
        {"deliveryAndReturnsModalEnabled":true,"recommendationsEnabledStores":["com","us","au","de","es","it","fr","ru","row","roe","nl","se"],"fitAnalyticsEnabledStores":["com","us","au","de","es","it","fr","ru","row","roe","nl","se"],"fitAnalyticsEnabledStoresMobile":["com","us","au","de","es","it","fr","ru","row","roe","nl","se"]}
      );
    });
  });
</script>
        <script>
          var t = document.createElement("script")
            , i = document.getElementsByTagName("script")[0];
          t.async = !0,
          t.src = "//s.btstatic.com/tag.js#site=ydg7T9K",
          i.parentNode.insertBefore(t, i)
        </script>
      <script type="text/javascript">var _cf = _cf || []; _cf.push(['_setFsp', true]); _cf.push(['_setBm', true]); _cf.push(['_setAu', '/assets/d039aa622130169c4fea348bc97d']);</script><script type="text/javascript" src="/assets/d039aa622130169c4fea348bc97d"></script><noscript><img src="https://www.asos.de/akam/10/pixel_3232c258?a=dD1lNDA1MjBmNTQ0ZDE0MTRiMTM1MTE4ZDNmZjdjZmMzYTdlMTg4NTI5JmpzPW9mZg==" style="visibility: hidden; position: absolute; left: -999px; top: -999px;" /></noscript></body>
    </html>
  `,
};
