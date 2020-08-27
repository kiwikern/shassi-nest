/* eslint-disable max-len */
import { WeekdayCrawler } from '../../src/crawler/crawlers/weekday.crawler';

export const weekdayTestCase = {
  crawlerType: WeekdayCrawler,

  url:
    'https://www.weekday.com/en_eur/men/shirts/product.split-velvet-shirt-blue.0566155004.html',

  sizes: [
    { id: '0566155004002', isAvailable: true, name: 'S' },
    { id: '0566155004003', isAvailable: true, name: 'M' },
    { id: '0566155004004', isAvailable: true, name: 'L' },
    { id: '0566155004005', isAvailable: true, name: 'XL' },
  ],

  sizeChecks: [
    { size: '0566155004002', isAvailable: true, isLowInStock: false },
    { size: '0566155004004', isAvailable: true, isLowInStock: true },
    { size: 'sizedoesnotexist', isAvailable: false, isLowInStock: false },
  ],

  name: 'Spit Velvet Shirt',

  priceChecks: [
    { size: '0566155004002', price: 30 },
    { size: 'unknown-size', price: 30 },
  ],

  testResponse: {
    weekdayApp: {
      productDetails: {
        availableVariants: [
          '0566155004003',
          '0566155005004',
          '0566155004002',
          '0566155005003',
          '0566155005002',
          '0566155004005',
          '0566155004004',
          '0566155005005',
        ],
        lowInStockVariants: ['0566155004004'],
      },
    },
    productArticleDetails: {
      articleCode: '0566155005',
      baseProductCode: '0566155_group_005',
      mainCategorySummary: 'Shirts - men_shirts',
      name: 'Spit Velvet Shirt',

      styleWithArticles: ['0410605001', '0458905001'],

      '0566155004': {
        title: 'Spit Velvet Shirt',
        name: 'Blue',
        colorCode: '76',
        description:
          '<p>The Spit Velvet Shirt has an elegant style with fine velvet material and minimal details. Cut in a regular fit, it has a down- pointed collar, a thin button placket along the front and buttons in a lighter colour.  </p><p>- The model is 188 cm tall and wears size medium, that measures 114 cm in chest circumference, 78 cm in length and 67 cm in sleeve length.</p>',
        atelierName: '',
        brandName: '',
        colorLoc: 'Blue',
        pdpLink:
          'https://www.weekday.com/en_eur/men/shirts/product.spit-velvet-shirt-blue.0566155004.html',
        originCountry: '',

        variants: [
          {
            variantCode: '0566155004002',
            sizeCode: '002',
            sizeName: 'S',
          },
          {
            variantCode: '0566155004003',
            sizeCode: '003',
            sizeName: 'M',
          },
          {
            variantCode: '0566155004004',
            sizeCode: '004',
            sizeName: 'L',
          },
          {
            variantCode: '0566155004005',
            sizeCode: '005',
            sizeName: 'XL',
          },
        ],

        productFrontImages: [],
        logoImages: [],
        dataSheetImages: [
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]&zoom=zoom',
          },
        ],
        thumbnailImages: [
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]&zoom=zoom',
          },
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]&zoom=zoom',
          },
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_005],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_005],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_005],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_005],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]&zoom=zoom',
          },
        ],
        otherImages: [
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[01_0566155_004_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/main]&zoom=zoom',
          },
        ],
        normalImages: [
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[02_0566155_004_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[02_0566155_004_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[02_0566155_004_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[02_0566155_004_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]&zoom=zoom',
          },
        ],
        detailImages: [
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[03_0566155_004_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[03_0566155_004_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[03_0566155_004_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[03_0566155_004_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]&zoom=zoom',
          },
        ],
        images: [
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[03_0566155_004_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[03_0566155_004_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[03_0566155_004_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[03_0566155_004_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]&zoom=zoom',
          },
        ],

        price: '€30',
        priceOriginal: '€60',
        priceValue: '60.0',
        priceSaleValue: '30.0',

        promoMarkerUrl: '//www.monki.com/',
        promoMarkerAlt: '',
        promoMarkerLegalText: '',
        promoMarkerLabelText: '€30',
        promoMarkerIconText: '',

        compositions: ['Cotton 71%; Viscose 27%; Elastane 2%'],

        url: '/en_eur/productpage.0566155004.html',
      },
      '0566155005': {
        title: 'Spit Velvet Shirt',
        name: 'Red',
        colorCode: '49',
        description:
          '<p>The Spit Velvet Shirt has an elegant style with fine velvet material and minimal details. Cut in a regular fit, it has a down- pointed collar, a thin button placket along the front and buttons in a lighter colour.  </p><p>- The model is 188 cm tall and wears size medium, that measures 114 cm in chest circumference, 78 cm in length and 67 cm in sleeve length.</p>',
        atelierName: '',
        brandName: '',
        colorLoc: 'Red',
        pdpLink:
          'https://www.weekday.com/en_eur/men/shirts/product.spit-velvet-shirt-red.0566155005.html',
        originCountry: '',

        styleWithArticles: [
          {
            code: '0410605001',
            name: 'Alan T-shirt',
            brandName: 'Weekday',
            url: '/en_eur/productpage.0410605001.html',

            imageUrl:
              '//lp.weekday.com/app003prod?set=source[02_0410605_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2]&call=url[file:/product/style]',
            imageAlt: 'Front image of Weekday alan t-shirt in black',

            price: '€10',
            priceOriginal: false,
            priceValue: '10.0',
            priceSaleValue: null,

            colorName: 'Black',
            color: [
              {
                colorAlt:
                  'Fabric Swatch image of Weekday alan t-shirt in black',
                colorSrc:
                  '//lp.weekday.com/app003prod?set=source[04_0410605_001_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[1]&call=url[file:/product/style]',
              },
            ],
            marker: [
              {
                text: 'Organic Cotton',
                color: '#282828',
              },
            ],
          },
          {
            code: '0458905001',
            name: 'Riffle Trousers ',
            brandName: 'Weekday',
            url: '/en_eur/productpage.0458905001.html',

            imageUrl:
              '//lp.weekday.com/app003prod?set=source[02_0458905_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019091]&call=url[file:/product/style]',
            imageAlt: 'Front image of Weekday riffle trousers  in black',

            price: '€50',
            priceOriginal: false,
            priceValue: '50.0',
            priceSaleValue: null,

            colorName: 'Black',
            color: [
              {
                colorAlt:
                  'Fabric Swatch image of Weekday riffle trousers  in black',
                colorSrc:
                  '//lp.weekday.com/app003prod?set=source[04_0458905_001_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019091]&call=url[file:/product/style]',
              },
            ],
            marker: [],
          },
        ],

        variants: [
          {
            variantCode: '0566155005002',
            sizeCode: '002',
            sizeName: 'S',
          },
          {
            variantCode: '0566155005003',
            sizeCode: '003',
            sizeName: 'M',
          },
          {
            variantCode: '0566155005004',
            sizeCode: '004',
            sizeName: 'L',
          },
          {
            variantCode: '0566155005005',
            sizeCode: '005',
            sizeName: 'XL',
          },
        ],

        productFrontImages: [],
        logoImages: [],
        dataSheetImages: [
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[01_0566155_005_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[01_0566155_005_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[01_0566155_005_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[01_0566155_005_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]&zoom=zoom',
          },
        ],
        thumbnailImages: [
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[01_0566155_005_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[01_0566155_005_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[01_0566155_005_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[01_0566155_005_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]&zoom=zoom',
          },
        ],
        otherImages: [
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[01_0566155_005_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[01_0566155_005_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[01_0566155_005_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[01_0566155_005_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]&zoom=zoom',
          },
        ],
        normalImages: [
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[02_0566155_005_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[02_0566155_005_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[02_0566155_005_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[02_0566155_005_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]&zoom=zoom',
          },
        ],
        detailImages: [
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[03_0566155_005_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[03_0566155_005_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[03_0566155_005_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[03_0566155_005_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]&zoom=zoom',
          },
        ],
        images: [
          {
            thumbnail:
              '//lp.weekday.com/app003prod?set=source[03_0566155_005_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/style]',
            image:
              '//lp.weekday.com/app003prod?set=source[03_0566155_005_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            fullscreen:
              '//lp.weekday.com/app003prod?set=source[03_0566155_005_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]',
            zoom:
              '//lp.weekday.com/app003prod?set=source[03_0566155_005_001],type[DETAIL],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]&zoom=zoom',
          },
        ],

        price: '€20',
        priceOriginal: '€60',
        priceValue: '60.0',
        priceSaleValue: '20.0',

        promoMarkerUrl: '//www.monki.com/',
        promoMarkerAlt: '',
        promoMarkerLegalText: '',
        promoMarkerLabelText: '€20',
        promoMarkerIconText: '',

        compositions: ['Cotton 71%; Viscose 27%; Elastane 2%'],

        url: '/en_eur/productpage.0566155005.html',
      },
    },
  },
};
