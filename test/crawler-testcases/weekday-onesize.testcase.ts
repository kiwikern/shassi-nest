/* eslint-disable max-len */
import { WeekdayCrawler } from '../../src/crawler/crawlers/weekday.crawler';

export const weekdayOneSizeTestCase = {
  crawlerType: WeekdayCrawler,

  url:
    'https://www.weekday.com/en_eur/women/accessories/product.eye-webbing-key-ring-black.0622708001.html',

  sizes: [{ id: '0622708001001', isAvailable: true, name: 'NOSIZE' }],

  sizeChecks: [
    { size: '0622708001001', isAvailable: true, isLowInStock: false },
    { size: 'sizedoesnotexist', isAvailable: false, isLowInStock: false },
  ],

  name: 'Eye Webbing Key Ring',

  priceChecks: [
    { size: '0622708001001', price: 10 },
    { size: 'unknown-size', price: 10 },
  ],

  testResponse: {
    weekdayApp: {
      productDetails: {
        availableVariants: ['0622708001001'],
        lowInStockVariants: [],
      },
    },
    productArticleDetails: {
      articleCode: '0622708001',
      baseProductCode: '0622708_group_001',
      mainCategorySummary: 'Accessories - women_accessories_all',
      name: 'Eye Webbing Key Ring',

      '0622708001': {
        title: 'Eye Webbing Key Ring',
        name: 'Black',
        colorCode: '09',
        description:
          '<p>The Eye Webbing Key Ring consists of two silver tone rings - the smaller one with a hook clasp that can be easily attached to a belt loop or a bag as a standout accessory or simply hold your keys visible and in place. A utility style webbing loop connects the piece.</p><p>- Eye Webbing Key Ring is 13,5 cm long.&nbsp;</p><p>&nbsp;</p>',
        atelierName: '',
        brandName: '',
        colorLoc: 'Black',
        pdpLink:
          'https://www.weekday.com/en_eur/women/accessories/product.eye-webbing-key-ring-black.0622708001.html',
        originCountry: '',

        variants: [
          {
            variantCode: '0622708001001',
            sizeCode: '001',
            sizeName: 'NOSIZE',
          },
        ],

        productFrontImages: [],
        logoImages: [],
        dataSheetImages: [],
        thumbnailImages: [],
        otherImages: [],
        normalImages: [
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[02_0622708_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018085]&call=url[file:/product/main]&zoom=zoom',
          },
        ],
        detailImages: [],
        images: [],

        price: '€10',
        priceOriginal: false,
        priceValue: '10.0',
        priceSaleValue: null,

        promoMarkerUrl: '//www.monki.com/',
        promoMarkerAlt: '',
        promoMarkerLegalText: '',
        promoMarkerLabelText: '€10',
        promoMarkerIconText: '',

        compositions: ['Steel 60%; Zinc 35%; Polyester 5%'],

        url: '/en_eur/productpage.0622708001.html',
      },
    },
  },
};
