/* eslint-disable max-len */
import { StoriesCrawler } from '../../src/crawler/crawlers/stories.crawler';

export const storiesOneSizeTestCase = {
  crawlerType: StoriesCrawler,

  url:
    'https://www.stories.com/en_eur/bags/bum-bags/product.leather-beltbag-black.0675990002.html',

  sizes: [{ id: '0901197001', name: 'NOSIZE', isAvailable: true }],

  sizeChecks: [
    { size: '0901197001', isAvailable: true, isLowInStock: true },
    { size: 'sizedoesnotexist', isAvailable: false, isLowInStock: false },
  ],

  name: 'Croc Embossed Leather Shoulder Bag',

  priceChecks: [
    { size: '0901197001', price: 129 },
    { size: 'unknown-size', price: 129 },
  ],

  testResponse: {
    productArticleDetails: {
      articleCode: '0901197001',
      baseProductCode: '0901197_group_001',
      ancestorProductCode: '0901197',
      mainCategorySummary: 'Shoulderbags - bags_shoulderbags_all',
      name: 'Croc Embossed Leather Shoulder Bag',
      styleWithArticles: [
        '0903568001',
        '0804669001',
        '0913807002',
        '0770931001',
        '0884588001',
      ],
      '0901197001': {
        title: 'Croc Embossed Leather Shoulder Bag',
        name: 'Croc Black',
        colorCode: '09',
        description:
          'Croc embossed leather shoulder bag with a curved silhouette to sit comfortably under the arm. Featuring gold-toned hardware, O-ring connectors and a zipper closure.\n<p>One main compartment</p>\n<p>Dimensions of bag: 21cm x 24cm<p>\n<p>8.2" x 9.4"</p>',
        atelierName: '[DESIGNED IN PARIS]',
        brandName: '',
        colorLoc: 'Croc Black',
        pdpLink:
          'https://www.stories.com/de_de/bags/shoulderbags/product.croc-embossed-leather-shoulder-bag-black.0901197001.html',
        originCountry: '',
        styleWithArticles: [
          {
            code: '0903568001',
            name: 'Locker geschnittener Blazer aus Wollmischung',
            brandName: '',
            url:
              'https://www.stories.com/de_de/clothing/blazers/product.relaxed-wool-blend-blazer-beige.0903568001.html',
            imageUrl:
              'set=source[/fd/47/fd47984c669900a5fcfbc9eda7affbe07dc7e7d6.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],ImageVersion[1]&call=url[file:/product/dynamic.chain]',
            imageAlt:
              'Stillleben Vorne Bild von Stories Locker geschnittener Blazer aus Wollmischung in Beige',
            price: '€179',
            priceOriginal: false,
            priceValue: '179.0',
            priceSaleValue: null,
            colorName: 'Beige',
            color: [
              {
                colorAlt:
                  'Stoffmuster Kein Winkel Bild von Stories Locker geschnittener Blazer aus Wollmischung in Beige',
                colorSrc:
                  '//lp.stories.com/app005prod?set=source[/36/86/36863c5e9dcaf43abc15eb9917aa5a034b000c23.jpg],origin[dam],type[FABRICSWATCH],device[],quality[80],ImageVersion[1]&call=url[file:/product/style]',
              },
            ],
            marker: [],
          },
          {
            code: '0804669001',
            name: 'Schlaghose aus Wollmix',
            brandName: '',
            url:
              'https://www.stories.com/de_de/clothing/trousers/product.wool-blend-kick-flare-trousers-black.0804669001.html',
            imageUrl:
              'set=source[/c7/30/c7304fe2e8ede1a05d8739073e1b4b89247eaad7.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],ImageVersion[1]&call=url[file:/product/dynamic.chain]',
            imageAlt:
              'Stillleben Vorne Bild von Stories Schlaghose aus Wollmix in Schwarz',
            price: '€89',
            priceOriginal: false,
            priceValue: '89.0',
            priceSaleValue: null,
            colorName: 'Schwarz',
            color: [
              {
                colorAlt:
                  'Stoffmuster Kein Winkel Bild von Stories Schlaghose aus Wollmix in Schwarz',
                colorSrc:
                  '//lp.stories.com/app005prod?set=source[/e4/64/e464d5e137b1530143c1565f3e0e6135055c7282.jpg],origin[dam],type[FABRICSWATCH],device[],quality[80],ImageVersion[1]&call=url[file:/product/style]',
              },
            ],
            marker: [],
          },
          {
            code: '0913807002',
            name: 'Schmaler Lederstiefel mit Blockabsatz',
            brandName: '',
            url:
              'https://www.stories.com/de_de/shoes/boots/ankleboots/product.slim-block-heel-leather-boots-black.0913807002.html',
            imageUrl:
              'set=source[/82/fb/82fbd6a3aeb14089f5c343c1191fe5410e5fcdf3.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],ImageVersion[1]&call=url[file:/product/dynamic.chain]',
            imageAlt:
              'Stillleben Vorne Bild von Stories Schmaler Lederstiefel mit Blockabsatz in Schwarz',
            price: '€129',
            priceOriginal: false,
            priceValue: '129.0',
            priceSaleValue: null,
            colorName: 'Schwarz',
            color: [
              {
                colorAlt:
                  'Stoffmuster Kein Winkel Bild von Stories Schmaler Lederstiefel mit Blockabsatz in Schwarz',
                colorSrc:
                  '//lp.stories.com/app005prod?set=source[/d6/60/d660b3505511e28cbe05742c99e20d160635f99b.jpg],origin[dam],type[FABRICSWATCH],device[],quality[80],ImageVersion[1]&call=url[file:/product/style]',
              },
            ],
            marker: [],
          },
          {
            code: '0770931001',
            name: 'Tropfenförmige Creolenohrringe',
            brandName: '',
            url:
              'https://www.stories.com/de_de/jewellery/earrings/hoops/product.droplet-hoop-earrings-gold.0770931001.html',
            imageUrl:
              'set=source[02_0770931_001_001],type[PRODUCT],ImageVersion[2019092]&call=url[file:/product/dynamic.chain]',
            imageAlt:
              'Stillleben Vorne Bild von Stories Tropfenförmige Creolenohrringe in Gold',
            price: '€17',
            priceOriginal: false,
            priceValue: '17.0',
            priceSaleValue: null,
            colorName: 'Gold',
            color: [
              {
                colorAlt:
                  'Stoffmuster Kein Winkel Bild von Stories Tropfenförmige Creolenohrringe in Gold',
                colorSrc:
                  '//lp.stories.com/app005prod?set=source[04_0770931_001_001],type[FABRICSWATCH],device[],quality[80],ImageVersion[2019091]&call=url[file:/product/style]',
              },
            ],
            marker: [],
          },
          {
            code: '0884588001',
            name: 'Schlichte Halskette',
            brandName: '',
            url:
              'https://www.stories.com/de_de/jewellery/necklaces/product.simple-chain-necklace-gold.0884588001.html',
            imageUrl:
              'set=source[02_0884588_001_1],type[PRODUCT],ImageVersion[202001221507]&call=url[file:/product/dynamic.chain]',
            imageAlt:
              'Stillleben Vorne Bild von Stories Schlichte Halskette in Gold',
            price: '€25',
            priceOriginal: false,
            priceValue: '25.0',
            priceSaleValue: null,
            colorName: 'Gold',
            color: [
              {
                colorAlt:
                  'Stoffmuster Kein Winkel Bild von Stories Schlichte Halskette in Gold',
                colorSrc:
                  '//lp.stories.com/app005prod?set=source[/64/dd/64ddf79294d8b17c8f70d0cd8846bdf222a796c8.jpg],origin[dam],type[FABRICSWATCH],device[],quality[80],ImageVersion[9]&call=url[file:/product/style]',
              },
            ],
            marker: [],
          },
        ],
        variants: [
          {
            variantCode: '0901197001001',
            sizeCode: '001',
            sizeName: 'ONESIZE',
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
              '//lp.stories.com/app005prod?set=source[/ce/e4/cee49aa33bb15d0423336f33eeb4651086ed2b61.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/style]',
            image:
              'set=source[/ce/e4/cee49aa33bb15d0423336f33eeb4651086ed2b61.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],ImageVersion[1]&call=url[file:/product/dynamic.chain]',
            fullscreen:
              'set=source[/ce/e4/cee49aa33bb15d0423336f33eeb4651086ed2b61.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],ImageVersion[1]&call=url[file:/product/dynamic.chain]',
            zoom:
              '//lp.stories.com/app005prod?set=source[/ce/e4/cee49aa33bb15d0423336f33eeb4651086ed2b61.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]&zoom=zoom',
          },
        ],
        detailImages: [],
        images: [],
        vAssets: [
          {
            thumbnail:
              '//lp.stories.com/app005prod?set=source[/ce/e4/cee49aa33bb15d0423336f33eeb4651086ed2b61.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/style]',
            image:
              'set=source[/ce/e4/cee49aa33bb15d0423336f33eeb4651086ed2b61.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],ImageVersion[1]&call=url[file:/product/dynamic.chain]',
            fullscreen:
              'set=source[/ce/e4/cee49aa33bb15d0423336f33eeb4651086ed2b61.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],ImageVersion[1]&call=url[file:/product/dynamic.chain]',
            zoom:
              '//lp.stories.com/app005prod?set=source[/ce/e4/cee49aa33bb15d0423336f33eeb4651086ed2b61.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]&zoom=zoom',
          },
          {
            thumbnail:
              '//lp.stories.com/app005prod?set=source[/e0/a7/e0a72df18cfa8279ac58b942c4b3470f665f8bfe.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/style]',
            image:
              'set=source[/e0/a7/e0a72df18cfa8279ac58b942c4b3470f665f8bfe.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],ImageVersion[1]&call=url[file:/product/dynamic.chain]',
            fullscreen:
              'set=source[/e0/a7/e0a72df18cfa8279ac58b942c4b3470f665f8bfe.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],ImageVersion[1]&call=url[file:/product/dynamic.chain]',
            zoom:
              '//lp.stories.com/app005prod?set=source[/e0/a7/e0a72df18cfa8279ac58b942c4b3470f665f8bfe.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]&zoom=zoom',
          },
          {
            thumbnail:
              '//lp.stories.com/app005prod?set=source[/52/52/5252ee90ec97a6771e59a6c54ccb2d19508b7e1f.jpg],origin[dam],type[ENVIRONMENT],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/style]',
            image:
              'set=source[/52/52/5252ee90ec97a6771e59a6c54ccb2d19508b7e1f.jpg],origin[dam],type[ENVIRONMENT],ImageVersion[1]&call=url[file:/product/dynamic.chain]',
            fullscreen:
              'set=source[/52/52/5252ee90ec97a6771e59a6c54ccb2d19508b7e1f.jpg],origin[dam],type[ENVIRONMENT],ImageVersion[1]&call=url[file:/product/dynamic.chain]',
            zoom:
              '//lp.stories.com/app005prod?set=source[/52/52/5252ee90ec97a6771e59a6c54ccb2d19508b7e1f.jpg],origin[dam],type[ENVIRONMENT],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]&zoom=zoom',
          },
          {
            thumbnail:
              '//lp.stories.com/app005prod?set=source[/34/51/345168d135744ffd65d7a48cba2b05e847107de9.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/style]',
            image:
              'set=source[/34/51/345168d135744ffd65d7a48cba2b05e847107de9.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],ImageVersion[1]&call=url[file:/product/dynamic.chain]',
            fullscreen:
              'set=source[/34/51/345168d135744ffd65d7a48cba2b05e847107de9.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],ImageVersion[1]&call=url[file:/product/dynamic.chain]',
            zoom:
              '//lp.stories.com/app005prod?set=source[/34/51/345168d135744ffd65d7a48cba2b05e847107de9.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]&zoom=zoom',
          },
        ],
        price: '€129',
        priceOriginal: false,
        priceValue: '129.0',
        priceSaleValue: null,
        promoMarkerUrl: '//www.monki.com/',
        promoMarkerAlt: '',
        promoMarkerText: '',
        promoMarkerLegalText: '',
        promoMarkerLabelText: '€129',
        promoMarkerStyle: '',
        compositions: [
          'Außenmaterial: Baumwolle 100%, Beschichtetes leder 100%',
        ],
        url:
          'https://www.stories.com/de_de/bags/shoulderbags/product.croc-embossed-leather-shoulder-bag-black.0901197001.html',
      },
    },
    storiesApp: {
      shared: {
        constants: {
          PATTERNLIB_PATH: '/etc/designs/appeaser/p11/clientlibs/pattern-lib/',
        },
        variables: {
          addToCartServiceUrl: '',
        },
        utils: {},
      },
      productDetails: {
        availableVariants: [],
        selectedArticle: '',
        selectedArticleAvailableVariants: [],
        variantAvailabilityMap: {},
      },
      cart: {
        miniCartStarted: true,
      },
      quickBuy: {
        selectedArticle: '',
        product: {},
        selectedArticleAvailableVariants: [],
        variantAvailabilityMap: {},
      },
      productDet: {
        availableVariants: ['0901197001001'],
        lowInStockVariants: [],
        selectedArticle: '0901197001',
        selectedArticleAvailableVariants: ['0901197001001'],
        variantAvailabilityMap: {
          '0901197001001': true,
        },
        lowVariantAvailabilityMap: {
          '0901197001001': false,
        },
      },
    },
  },
};
