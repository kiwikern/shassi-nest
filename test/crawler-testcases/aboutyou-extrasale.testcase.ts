import { AboutyouCrawler } from '../../src/crawler/crawlers/aboutyou.crawler';

export const aboutyouExtrasaleTestCase = {
  crawlerType: AboutyouCrawler,

  url: 'https://aboutyou-3832254',

  sizes: [
    { id: 'variants:35449710', isAvailable: false, name: 'XS' },
    { id: 'variants:34748787', isAvailable: true, name: 'S' },
    { id: 'variants:34748788', isAvailable: true, name: 'M' },
    { id: 'variants:34748789', isAvailable: true, name: 'L' },
    { id: 'variants:34748790', isAvailable: true, name: 'XL' },
    { id: 'variants:35449709', isAvailable: false, name: 'XXXL' },
  ],

  sizeChecks: [
    { size: 'variants:35449710', isAvailable: false, isLowInStock: false },
    { size: 'variants:34748787', isAvailable: true, isLowInStock: true },
    { size: 'sizedoesnotexist', isAvailable: false, isLowInStock: false },
  ],

  name: 'T-Shirt',

  priceChecks: [
    { size: 'variants:35449710', price: 26.96 },
    { size: 'variants:34748787', price: 19.71 },
    { size: 'unknown-size', price: 19.71 },
  ],

  testResponse: {
    data: {
      type: 'products',
      id: '3832254',
      attributes: {
        name: 'T-Shirt',
        isActive: true,
        isSale: true,
        isNew: false,
        url: '/p/adidas-performance/t-shirt-3832254',
        price: { min: 2190, max: 2995, maxSavings: 27 },
        campaignPrice: { min: 1971, max: 2696, maxSavings: 10 },
        saleLabel: '-27%',
        saleLabelPrefix: true,
        categoryId: 194960,
        styleKey: 'ADI0132-5',
        gender: 'male',
        oldPrice: 2990,
        isPremium: false,
        isSustainable: false,
        isCertified: false,
        isBioCotton: false,
        isSustainableMaterial: false,
        pack: null,
        isKids: false,
        detailColors: { 38747: 'blau' },
      },
      relationships: {
        variants: {
          data: [
            { type: 'variants', id: '35449710' },
            { type: 'variants', id: '34748787' },
            {
              type: 'variants',
              id: '34748788',
            },
            { type: 'variants', id: '34748789' },
            { type: 'variants', id: '34748790' },
            { type: 'variants', id: '35449709' },
          ],
        },
      },
    },
    included: {
      'attributes:25530': {
        type: 'attributes',
        id: '25530',
        attributes: { name: 'XS', slug: 'xs' },
      },
      'attributes:41271': {
        type: 'attributes',
        id: '41271',
        attributes: { name: 'XS', slug: 'xs' },
      },
      'attributes:41274': {
        type: 'attributes',
        id: '41274',
        attributes: { name: 'XS', slug: 'xs' },
      },
      'attributes:41277': {
        type: 'attributes',
        id: '41277',
        attributes: { name: 'XS', slug: 'xs' },
      },
      'attributes:41403': {
        type: 'attributes',
        id: '41403',
        attributes: { name: '50', slug: '50' },
      },
      'attributes:41058': {
        type: 'attributes',
        id: '41058',
        attributes: { name: 'equal', slug: 'equal' },
      },
      'attributes:25508': {
        type: 'attributes',
        id: '25508',
        attributes: { name: 'S', slug: 's' },
      },
      'attributes:41187': {
        type: 'attributes',
        id: '41187',
        attributes: { name: 'S', slug: 's' },
      },
      'attributes:41190': {
        type: 'attributes',
        id: '41190',
        attributes: { name: 'S', slug: 's' },
      },
      'attributes:41193': {
        type: 'attributes',
        id: '41193',
        attributes: { name: 'S', slug: 's' },
      },
      'attributes:41268': {
        type: 'attributes',
        id: '41268',
        attributes: { name: '100', slug: '100' },
      },
      'attributes:25507': {
        type: 'attributes',
        id: '25507',
        attributes: { name: 'M', slug: 'm' },
      },
      'attributes:41151': {
        type: 'attributes',
        id: '41151',
        attributes: { name: 'M', slug: 'm' },
      },
      'attributes:41154': {
        type: 'attributes',
        id: '41154',
        attributes: { name: 'M', slug: 'm' },
      },
      'attributes:41157': {
        type: 'attributes',
        id: '41157',
        attributes: { name: 'M', slug: 'm' },
      },
      'attributes:41865': {
        type: 'attributes',
        id: '41865',
        attributes: { name: '150', slug: '150' },
      },
      'attributes:25510': {
        type: 'attributes',
        id: '25510',
        attributes: { name: 'L', slug: 'l' },
      },
      'attributes:41163': {
        type: 'attributes',
        id: '41163',
        attributes: { name: 'L', slug: 'l' },
      },
      'attributes:41166': {
        type: 'attributes',
        id: '41166',
        attributes: { name: 'L', slug: 'l' },
      },
      'attributes:41169': {
        type: 'attributes',
        id: '41169',
        attributes: { name: 'L', slug: 'l' },
      },
      'attributes:41055': {
        type: 'attributes',
        id: '41055',
        attributes: { name: '200', slug: '200' },
      },
      'attributes:25509': {
        type: 'attributes',
        id: '25509',
        attributes: { name: 'XL', slug: 'xl' },
      },
      'attributes:41175': {
        type: 'attributes',
        id: '41175',
        attributes: { name: 'XL', slug: 'xl' },
      },
      'attributes:41178': {
        type: 'attributes',
        id: '41178',
        attributes: { name: 'XL', slug: 'xl' },
      },
      'attributes:41181': {
        type: 'attributes',
        id: '41181',
        attributes: { name: 'XL', slug: 'xl' },
      },
      'attributes:41280': {
        type: 'attributes',
        id: '41280',
        attributes: { name: '250', slug: '250' },
      },
      'attributes:25505': {
        type: 'attributes',
        id: '25505',
        attributes: { name: 'XXXL', slug: 'xxxl' },
      },
      'attributes:41283': {
        type: 'attributes',
        id: '41283',
        attributes: { name: 'XXXL', slug: 'xxxl' },
      },
      'attributes:41286': {
        type: 'attributes',
        id: '41286',
        attributes: { name: 'XXXL', slug: 'xxxl' },
      },
      'attributes:41289': {
        type: 'attributes',
        id: '41289',
        attributes: { name: 'XXXL', slug: 'xxxl' },
      },
      'attributes:41196': {
        type: 'attributes',
        id: '41196',
        attributes: { name: '350', slug: '350' },
      },
      'attribute-groups:e20cf68e02f54326add552fb38d2be92': {
        type: 'attribute-groups',
        id: 'e20cf68e02f54326add552fb38d2be92',
        attributes: {
          groupId: 2,
          name: 'vendor_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '25530' }] },
        },
      },
      'attribute-groups:3784a12b9b94f31d66cb4b77ea6f6a6d': {
        type: 'attribute-groups',
        id: '3784a12b9b94f31d66cb4b77ea6f6a6d',
        attributes: {
          groupId: 7,
          name: 'bi_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41271' }] },
        },
      },
      'attribute-groups:6f3fcd08faba158de295b029c2cba0c3': {
        type: 'attribute-groups',
        id: '6f3fcd08faba158de295b029c2cba0c3',
        attributes: {
          groupId: 8,
          name: 'shop_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41274' }] },
        },
      },
      'attribute-groups:5df5e003c38e73b81d1dc5e1f589087c': {
        type: 'attribute-groups',
        id: '5df5e003c38e73b81d1dc5e1f589087c',
        attributes: {
          groupId: 9,
          name: 'category_shop_filter_sizes',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41277' }] },
        },
      },
      'attribute-groups:9f2f9664e8cb47cff3400acb656b73ed': {
        type: 'attribute-groups',
        id: '9f2f9664e8cb47cff3400acb656b73ed',
        attributes: {
          groupId: 10,
          name: 'sort',
          frontendName: 'Sortierung',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41403' }] },
        },
      },
      'attribute-groups:e8727cf6a2846b036a0861212d4dc31e': {
        type: 'attribute-groups',
        id: 'e8727cf6a2846b036a0861212d4dc31e',
        attributes: {
          groupId: 11,
          name: 'size_translation_type',
          frontendName: '\u00dcbersetzung',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41058' }] },
        },
      },
      'attribute-groups:a0aa2235a2cd733753ac38adf76d6491': {
        type: 'attribute-groups',
        id: 'a0aa2235a2cd733753ac38adf76d6491',
        attributes: {
          groupId: 2,
          name: 'vendor_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '25508' }] },
        },
      },
      'attribute-groups:16611e3fbd0703e7378e61c277a8a425': {
        type: 'attribute-groups',
        id: '16611e3fbd0703e7378e61c277a8a425',
        attributes: {
          groupId: 7,
          name: 'bi_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41187' }] },
        },
      },
      'attribute-groups:0fdf454f708b1c740ba4b6483cd7446a': {
        type: 'attribute-groups',
        id: '0fdf454f708b1c740ba4b6483cd7446a',
        attributes: {
          groupId: 8,
          name: 'shop_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41190' }] },
        },
      },
      'attribute-groups:f7e3147c3eb5d010859e620c66f3de05': {
        type: 'attribute-groups',
        id: 'f7e3147c3eb5d010859e620c66f3de05',
        attributes: {
          groupId: 9,
          name: 'category_shop_filter_sizes',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41193' }] },
        },
      },
      'attribute-groups:414a9f30c750c5d85cf6ec54d1fb5785': {
        type: 'attribute-groups',
        id: '414a9f30c750c5d85cf6ec54d1fb5785',
        attributes: {
          groupId: 10,
          name: 'sort',
          frontendName: 'Sortierung',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41268' }] },
        },
      },
      'attribute-groups:b08b24df6a17aa5b25e28081dbd90cda': {
        type: 'attribute-groups',
        id: 'b08b24df6a17aa5b25e28081dbd90cda',
        attributes: {
          groupId: 2,
          name: 'vendor_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '25507' }] },
        },
      },
      'attribute-groups:062866a0efbef60781b638f5272f26a5': {
        type: 'attribute-groups',
        id: '062866a0efbef60781b638f5272f26a5',
        attributes: {
          groupId: 7,
          name: 'bi_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41151' }] },
        },
      },
      'attribute-groups:b5288e590c8cc0fea837afb52c034f46': {
        type: 'attribute-groups',
        id: 'b5288e590c8cc0fea837afb52c034f46',
        attributes: {
          groupId: 8,
          name: 'shop_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41154' }] },
        },
      },
      'attribute-groups:84bfa78d69ca3dc5e2d29eca3630c925': {
        type: 'attribute-groups',
        id: '84bfa78d69ca3dc5e2d29eca3630c925',
        attributes: {
          groupId: 9,
          name: 'category_shop_filter_sizes',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41157' }] },
        },
      },
      'attribute-groups:d94c50cc098f17f28cb758deee7b0376': {
        type: 'attribute-groups',
        id: 'd94c50cc098f17f28cb758deee7b0376',
        attributes: {
          groupId: 10,
          name: 'sort',
          frontendName: 'Sortierung',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41865' }] },
        },
      },
      'attribute-groups:3020377ae3c5ae4fca98534356daf70b': {
        type: 'attribute-groups',
        id: '3020377ae3c5ae4fca98534356daf70b',
        attributes: {
          groupId: 2,
          name: 'vendor_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '25510' }] },
        },
      },
      'attribute-groups:6ca243ae0426fcdcaf0d3706ea101ed0': {
        type: 'attribute-groups',
        id: '6ca243ae0426fcdcaf0d3706ea101ed0',
        attributes: {
          groupId: 7,
          name: 'bi_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41163' }] },
        },
      },
      'attribute-groups:f98ec4612c07c080ec4c675df40f0f26': {
        type: 'attribute-groups',
        id: 'f98ec4612c07c080ec4c675df40f0f26',
        attributes: {
          groupId: 8,
          name: 'shop_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41166' }] },
        },
      },
      'attribute-groups:550a44ee9514b146855769b8bed0eb55': {
        type: 'attribute-groups',
        id: '550a44ee9514b146855769b8bed0eb55',
        attributes: {
          groupId: 9,
          name: 'category_shop_filter_sizes',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41169' }] },
        },
      },
      'attribute-groups:82bfc34f2d4c5f055e6cd8841e93bbf7': {
        type: 'attribute-groups',
        id: '82bfc34f2d4c5f055e6cd8841e93bbf7',
        attributes: {
          groupId: 10,
          name: 'sort',
          frontendName: 'Sortierung',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41055' }] },
        },
      },
      'attribute-groups:40306ad49ec20bc0c70316421c2fdec4': {
        type: 'attribute-groups',
        id: '40306ad49ec20bc0c70316421c2fdec4',
        attributes: {
          groupId: 2,
          name: 'vendor_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '25509' }] },
        },
      },
      'attribute-groups:577650eca892ce42bb279ee45000648d': {
        type: 'attribute-groups',
        id: '577650eca892ce42bb279ee45000648d',
        attributes: {
          groupId: 7,
          name: 'bi_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41175' }] },
        },
      },
      'attribute-groups:b2d6058a66c40e1394a2f2a5041e2ba1': {
        type: 'attribute-groups',
        id: 'b2d6058a66c40e1394a2f2a5041e2ba1',
        attributes: {
          groupId: 8,
          name: 'shop_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41178' }] },
        },
      },
      'attribute-groups:a187c9949827794f08bfbbe305f4a0d0': {
        type: 'attribute-groups',
        id: 'a187c9949827794f08bfbbe305f4a0d0',
        attributes: {
          groupId: 9,
          name: 'category_shop_filter_sizes',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41181' }] },
        },
      },
      'attribute-groups:bde4f444fb242f1934f57c6f090503d2': {
        type: 'attribute-groups',
        id: 'bde4f444fb242f1934f57c6f090503d2',
        attributes: {
          groupId: 10,
          name: 'sort',
          frontendName: 'Sortierung',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41280' }] },
        },
      },
      'attribute-groups:1c8652e4081014dd53d02e1229549b6b': {
        type: 'attribute-groups',
        id: '1c8652e4081014dd53d02e1229549b6b',
        attributes: {
          groupId: 2,
          name: 'vendor_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '25505' }] },
        },
      },
      'attribute-groups:2f80c4ead8a36b9a716612e998f0d890': {
        type: 'attribute-groups',
        id: '2f80c4ead8a36b9a716612e998f0d890',
        attributes: {
          groupId: 7,
          name: 'bi_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41283' }] },
        },
      },
      'attribute-groups:88c470af4f822b6ccf65fba2b2588fce': {
        type: 'attribute-groups',
        id: '88c470af4f822b6ccf65fba2b2588fce',
        attributes: {
          groupId: 8,
          name: 'shop_size',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41286' }] },
        },
      },
      'attribute-groups:7de0c82ecd22e7ade3232fadfbe4040b': {
        type: 'attribute-groups',
        id: '7de0c82ecd22e7ade3232fadfbe4040b',
        attributes: {
          groupId: 9,
          name: 'category_shop_filter_sizes',
          frontendName: 'Gr\u00f6\u00dfe',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41289' }] },
        },
      },
      'attribute-groups:2d794bf77ee25080efaa3856cf89109e': {
        type: 'attribute-groups',
        id: '2d794bf77ee25080efaa3856cf89109e',
        attributes: {
          groupId: 10,
          name: 'sort',
          frontendName: 'Sortierung',
          type: '',
          sort: 0,
        },
        relationships: {
          attributes: { data: [{ type: 'attributes', id: '41196' }] },
        },
      },
      'variants:35449710': {
        type: 'variants',
        id: '35449710',
        attributes: {
          price: { current: 2995, old: 0, reduction: 0 },
          campaignPrice: { current: 2696, reduction: 10 },
          quantity: 0,
          saleLabel: null,
          merchantId: 131,
          merchantProductVariantId: 'CD7170-290',
          productIsActive: true,
          sizes: { shop: 'XS', vendor: 'XS', length: null, cupSize: null },
        },
        relationships: {
          sizes: {
            data: [
              {
                type: 'attribute-groups',
                id: 'e20cf68e02f54326add552fb38d2be92',
              },
              {
                type: 'attribute-groups',
                id: '3784a12b9b94f31d66cb4b77ea6f6a6d',
              },
              {
                type: 'attribute-groups',
                id: '6f3fcd08faba158de295b029c2cba0c3',
              },
              {
                type: 'attribute-groups',
                id: '5df5e003c38e73b81d1dc5e1f589087c',
              },
              {
                type: 'attribute-groups',
                id: '9f2f9664e8cb47cff3400acb656b73ed',
              },
              {
                type: 'attribute-groups',
                id: 'e8727cf6a2846b036a0861212d4dc31e',
              },
            ],
          },
        },
      },
      'variants:34748787': {
        type: 'variants',
        id: '34748787',
        attributes: {
          price: { current: 2190, old: 2990, reduction: 27 },
          campaignPrice: { current: 1971, reduction: 10 },
          quantity: 1,
          saleLabel: '-27%',
          merchantId: 130,
          merchantProductVariantId: 'ADI0132001000001',
          productIsActive: true,
          sizes: { shop: 'S', vendor: 'S', length: null, cupSize: null },
        },
        relationships: {
          sizes: {
            data: [
              {
                type: 'attribute-groups',
                id: 'a0aa2235a2cd733753ac38adf76d6491',
              },
              {
                type: 'attribute-groups',
                id: '16611e3fbd0703e7378e61c277a8a425',
              },
              {
                type: 'attribute-groups',
                id: '0fdf454f708b1c740ba4b6483cd7446a',
              },
              {
                type: 'attribute-groups',
                id: 'f7e3147c3eb5d010859e620c66f3de05',
              },
              {
                type: 'attribute-groups',
                id: '414a9f30c750c5d85cf6ec54d1fb5785',
              },
              {
                type: 'attribute-groups',
                id: 'e8727cf6a2846b036a0861212d4dc31e',
              },
            ],
          },
        },
      },
      'variants:34748788': {
        type: 'variants',
        id: '34748788',
        attributes: {
          price: { current: 2995, old: 0, reduction: 0 },
          campaignPrice: { current: 2696, reduction: 10 },
          quantity: 44,
          saleLabel: null,
          merchantId: 131,
          merchantProductVariantId: 'CD7170-330',
          productIsActive: true,
          sizes: { shop: 'M', vendor: 'M', length: null, cupSize: null },
        },
        relationships: {
          sizes: {
            data: [
              {
                type: 'attribute-groups',
                id: 'b08b24df6a17aa5b25e28081dbd90cda',
              },
              {
                type: 'attribute-groups',
                id: '062866a0efbef60781b638f5272f26a5',
              },
              {
                type: 'attribute-groups',
                id: 'b5288e590c8cc0fea837afb52c034f46',
              },
              {
                type: 'attribute-groups',
                id: '84bfa78d69ca3dc5e2d29eca3630c925',
              },
              {
                type: 'attribute-groups',
                id: 'd94c50cc098f17f28cb758deee7b0376',
              },
              {
                type: 'attribute-groups',
                id: 'e8727cf6a2846b036a0861212d4dc31e',
              },
            ],
          },
        },
      },
      'variants:34748789': {
        type: 'variants',
        id: '34748789',
        attributes: {
          price: { current: 2190, old: 2990, reduction: 27 },
          campaignPrice: { current: 1971, reduction: 10 },
          quantity: 6,
          saleLabel: '-27%',
          merchantId: 130,
          merchantProductVariantId: 'ADI0132001000003',
          productIsActive: true,
          sizes: { shop: 'L', vendor: 'L', length: null, cupSize: null },
        },
        relationships: {
          sizes: {
            data: [
              {
                type: 'attribute-groups',
                id: '3020377ae3c5ae4fca98534356daf70b',
              },
              {
                type: 'attribute-groups',
                id: '6ca243ae0426fcdcaf0d3706ea101ed0',
              },
              {
                type: 'attribute-groups',
                id: 'f98ec4612c07c080ec4c675df40f0f26',
              },
              {
                type: 'attribute-groups',
                id: '550a44ee9514b146855769b8bed0eb55',
              },
              {
                type: 'attribute-groups',
                id: '82bfc34f2d4c5f055e6cd8841e93bbf7',
              },
              {
                type: 'attribute-groups',
                id: 'e8727cf6a2846b036a0861212d4dc31e',
              },
            ],
          },
        },
      },
      'variants:34748790': {
        type: 'variants',
        id: '34748790',
        attributes: {
          price: { current: 2995, old: 0, reduction: 0 },
          campaignPrice: { current: 2696, reduction: 10 },
          quantity: 56,
          saleLabel: null,
          merchantId: 131,
          merchantProductVariantId: 'CD7170-370',
          productIsActive: true,
          sizes: { shop: 'XL', vendor: 'XL', length: null, cupSize: null },
        },
        relationships: {
          sizes: {
            data: [
              {
                type: 'attribute-groups',
                id: '40306ad49ec20bc0c70316421c2fdec4',
              },
              {
                type: 'attribute-groups',
                id: '577650eca892ce42bb279ee45000648d',
              },
              {
                type: 'attribute-groups',
                id: 'b2d6058a66c40e1394a2f2a5041e2ba1',
              },
              {
                type: 'attribute-groups',
                id: 'a187c9949827794f08bfbbe305f4a0d0',
              },
              {
                type: 'attribute-groups',
                id: 'bde4f444fb242f1934f57c6f090503d2',
              },
              {
                type: 'attribute-groups',
                id: 'e8727cf6a2846b036a0861212d4dc31e',
              },
            ],
          },
        },
      },
      'variants:35449709': {
        type: 'variants',
        id: '35449709',
        attributes: {
          price: { current: 2995, old: 0, reduction: 0 },
          campaignPrice: { current: 2696, reduction: 10 },
          quantity: 0,
          saleLabel: null,
          merchantId: 131,
          merchantProductVariantId: 'CD7170-410',
          productIsActive: true,
          sizes: { shop: 'XXXL', vendor: 'XXXL', length: null, cupSize: null },
        },
        relationships: {
          sizes: {
            data: [
              {
                type: 'attribute-groups',
                id: '1c8652e4081014dd53d02e1229549b6b',
              },
              {
                type: 'attribute-groups',
                id: '2f80c4ead8a36b9a716612e998f0d890',
              },
              {
                type: 'attribute-groups',
                id: '88c470af4f822b6ccf65fba2b2588fce',
              },
              {
                type: 'attribute-groups',
                id: '7de0c82ecd22e7ade3232fadfbe4040b',
              },
              {
                type: 'attribute-groups',
                id: '2d794bf77ee25080efaa3856cf89109e',
              },
              {
                type: 'attribute-groups',
                id: 'e8727cf6a2846b036a0861212d4dc31e',
              },
            ],
          },
        },
      },
    },
  },
};
