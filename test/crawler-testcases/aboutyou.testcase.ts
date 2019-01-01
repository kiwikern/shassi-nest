import { AboutyouCrawler } from '../../src/crawler/crawlers/aboutyou.crawler';

export const aboutyouTestCase = {
  crawlerType: AboutyouCrawler,

  url: 'https://aboutyou-293828',

  sizes: [
    { id: 'variants:35293185', isAvailable: true, name: 'XS' },
    { id: 'variants:35293186', isAvailable: true, name: 'S' },
    { id: 'variants:35293187', isAvailable: true, name: 'M' },
    { id: 'variants:35293188', isAvailable: false, name: 'L' },
    { id: 'variants:35293189', isAvailable: true, name: 'XL' },
    { id: 'variants:35293190', isAvailable: true, name: 'XXL' },
  ],

  sizeChecks: [
    { size: 'variants:35293185', isAvailable: true },
    { size: 'variants:35293188', isAvailable: false },
    { size: 'sizedoesnotexist', isAvailable: false },
  ],

  name: 'Hoodie',

  priceChecks: [
    { size: 'variants:35293189', price: 29.99 },
    { size: 'variants:35293188', price: 29.90 },
    { size: 'unknown-size', price: 29.90 },
  ],

  testResponse: {
    data: {
      type: 'products',
      id: '3924766',
      attributes: {
        name: 'Hoodie',
        isActive: true,
        isSale: false,
        isNew: false,
        url: '\\/p\\/jack-und-jones\\/hoodie-3924766',
        price: { min: 2990, max: 2999, maxSavings: 0 },
        campaignPrice: { min: 0, max: 0, maxSavings: 0 },
        saleLabel: null,
        saleLabelPrefix: false,
        categoryId: 20945,
        styleKey: 'JAC0907-5',
        gender: 'male',
        oldPrice: null,
        isPremium: false,
        isSustainable: false,
        isCertified: false,
        isBioCotton: false,
        isSustainableMaterial: false,
        pack: null,
        isKids: false,
        detailColors: { 38905: 'schwarz' },
      },
      relationships: {
        variants: {
          data: [{ type: 'variants', id: '35293185' }, {
            type: 'variants',
            id: '35293186',
          }, { type: 'variants', id: '35293187' }, { type: 'variants', id: '35293188' }, {
            type: 'variants',
            id: '35293189',
          }, { type: 'variants', id: '35293190' }],
        },
      },
    }, included: {
      'attributes:25530': { type: 'attributes', id: '25530', attributes: { name: 'XS', slug: 'xs' } },
      'attributes:41271': { type: 'attributes', id: '41271', attributes: { name: 'XS', slug: 'xs' } },
      'attributes:41274': { type: 'attributes', id: '41274', attributes: { name: 'XS', slug: 'xs' } },
      'attributes:41277': { type: 'attributes', id: '41277', attributes: { name: 'XS', slug: 'xs' } },
      'attributes:41280': { type: 'attributes', id: '41280', attributes: { name: '250', slug: '250' } },
      'attributes:41058': { type: 'attributes', id: '41058', attributes: { name: 'equal', slug: 'equal' } },
      'attributes:25508': { type: 'attributes', id: '25508', attributes: { name: 'S', slug: 's' } },
      'attributes:41187': { type: 'attributes', id: '41187', attributes: { name: 'S', slug: 's' } },
      'attributes:41190': { type: 'attributes', id: '41190', attributes: { name: 'S', slug: 's' } },
      'attributes:41193': { type: 'attributes', id: '41193', attributes: { name: 'S', slug: 's' } },
      'attributes:41196': { type: 'attributes', id: '41196', attributes: { name: '350', slug: '350' } },
      'attributes:25507': { type: 'attributes', id: '25507', attributes: { name: 'M', slug: 'm' } },
      'attributes:41151': { type: 'attributes', id: '41151', attributes: { name: 'M', slug: 'm' } },
      'attributes:41154': { type: 'attributes', id: '41154', attributes: { name: 'M', slug: 'm' } },
      'attributes:41157': { type: 'attributes', id: '41157', attributes: { name: 'M', slug: 'm' } },
      'attributes:41160': { type: 'attributes', id: '41160', attributes: { name: '450', slug: '450' } },
      'attributes:25510': { type: 'attributes', id: '25510', attributes: { name: 'L', slug: 'l' } },
      'attributes:41163': { type: 'attributes', id: '41163', attributes: { name: 'L', slug: 'l' } },
      'attributes:41166': { type: 'attributes', id: '41166', attributes: { name: 'L', slug: 'l' } },
      'attributes:41169': { type: 'attributes', id: '41169', attributes: { name: 'L', slug: 'l' } },
      'attributes:41172': { type: 'attributes', id: '41172', attributes: { name: '550', slug: '550' } },
      'attributes:25509': { type: 'attributes', id: '25509', attributes: { name: 'XL', slug: 'xl' } },
      'attributes:41175': { type: 'attributes', id: '41175', attributes: { name: 'XL', slug: 'xl' } },
      'attributes:41178': { type: 'attributes', id: '41178', attributes: { name: 'XL', slug: 'xl' } },
      'attributes:41181': { type: 'attributes', id: '41181', attributes: { name: 'XL', slug: 'xl' } },
      'attributes:41184': { type: 'attributes', id: '41184', attributes: { name: '650', slug: '650' } },
      'attributes:25506': { type: 'attributes', id: '25506', attributes: { name: 'XXL', slug: 'xxl' } },
      'attributes:41139': { type: 'attributes', id: '41139', attributes: { name: 'XXL', slug: 'xxl' } },
      'attributes:41142': { type: 'attributes', id: '41142', attributes: { name: 'XXL', slug: 'xxl' } },
      'attributes:41145': { type: 'attributes', id: '41145', attributes: { name: 'XXL', slug: 'xxl' } },
      'attributes:41148': { type: 'attributes', id: '41148', attributes: { name: '750', slug: '750' } },
      'attribute-groups:e20cf68e02f54326add552fb38d2be92': {
        type: 'attribute-groups',
        id: 'e20cf68e02f54326add552fb38d2be92',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25530' }] } },
      },
      'attribute-groups:3784a12b9b94f31d66cb4b77ea6f6a6d': {
        type: 'attribute-groups',
        id: '3784a12b9b94f31d66cb4b77ea6f6a6d',
        attributes: { groupId: 7, name: 'bi_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41271' }] } },
      },
      'attribute-groups:6f3fcd08faba158de295b029c2cba0c3': {
        type: 'attribute-groups',
        id: '6f3fcd08faba158de295b029c2cba0c3',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41274' }] } },
      },
      'attribute-groups:5df5e003c38e73b81d1dc5e1f589087c': {
        type: 'attribute-groups',
        id: '5df5e003c38e73b81d1dc5e1f589087c',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41277' }] } },
      },
      'attribute-groups:bde4f444fb242f1934f57c6f090503d2': {
        type: 'attribute-groups',
        id: 'bde4f444fb242f1934f57c6f090503d2',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41280' }] } },
      },
      'attribute-groups:e8727cf6a2846b036a0861212d4dc31e': {
        type: 'attribute-groups',
        id: 'e8727cf6a2846b036a0861212d4dc31e',
        attributes: { groupId: 11, name: 'size_translation_type', frontendName: '\u00dcbersetzung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41058' }] } },
      },
      'attribute-groups:a0aa2235a2cd733753ac38adf76d6491': {
        type: 'attribute-groups',
        id: 'a0aa2235a2cd733753ac38adf76d6491',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25508' }] } },
      },
      'attribute-groups:16611e3fbd0703e7378e61c277a8a425': {
        type: 'attribute-groups',
        id: '16611e3fbd0703e7378e61c277a8a425',
        attributes: { groupId: 7, name: 'bi_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41187' }] } },
      },
      'attribute-groups:0fdf454f708b1c740ba4b6483cd7446a': {
        type: 'attribute-groups',
        id: '0fdf454f708b1c740ba4b6483cd7446a',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41190' }] } },
      },
      'attribute-groups:f7e3147c3eb5d010859e620c66f3de05': {
        type: 'attribute-groups',
        id: 'f7e3147c3eb5d010859e620c66f3de05',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41193' }] } },
      },
      'attribute-groups:2d794bf77ee25080efaa3856cf89109e': {
        type: 'attribute-groups',
        id: '2d794bf77ee25080efaa3856cf89109e',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41196' }] } },
      },
      'attribute-groups:b08b24df6a17aa5b25e28081dbd90cda': {
        type: 'attribute-groups',
        id: 'b08b24df6a17aa5b25e28081dbd90cda',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25507' }] } },
      },
      'attribute-groups:062866a0efbef60781b638f5272f26a5': {
        type: 'attribute-groups',
        id: '062866a0efbef60781b638f5272f26a5',
        attributes: { groupId: 7, name: 'bi_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41151' }] } },
      },
      'attribute-groups:b5288e590c8cc0fea837afb52c034f46': {
        type: 'attribute-groups',
        id: 'b5288e590c8cc0fea837afb52c034f46',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41154' }] } },
      },
      'attribute-groups:84bfa78d69ca3dc5e2d29eca3630c925': {
        type: 'attribute-groups',
        id: '84bfa78d69ca3dc5e2d29eca3630c925',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41157' }] } },
      },
      'attribute-groups:0821ea41c6c7c4130c3aac322939ee0d': {
        type: 'attribute-groups',
        id: '0821ea41c6c7c4130c3aac322939ee0d',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41160' }] } },
      },
      'attribute-groups:3020377ae3c5ae4fca98534356daf70b': {
        type: 'attribute-groups',
        id: '3020377ae3c5ae4fca98534356daf70b',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25510' }] } },
      },
      'attribute-groups:6ca243ae0426fcdcaf0d3706ea101ed0': {
        type: 'attribute-groups',
        id: '6ca243ae0426fcdcaf0d3706ea101ed0',
        attributes: { groupId: 7, name: 'bi_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41163' }] } },
      },
      'attribute-groups:f98ec4612c07c080ec4c675df40f0f26': {
        type: 'attribute-groups',
        id: 'f98ec4612c07c080ec4c675df40f0f26',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41166' }] } },
      },
      'attribute-groups:550a44ee9514b146855769b8bed0eb55': {
        type: 'attribute-groups',
        id: '550a44ee9514b146855769b8bed0eb55',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41169' }] } },
      },
      'attribute-groups:348616c90c4b6c55d6c19289f8c9a6f8': {
        type: 'attribute-groups',
        id: '348616c90c4b6c55d6c19289f8c9a6f8',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41172' }] } },
      },
      'attribute-groups:40306ad49ec20bc0c70316421c2fdec4': {
        type: 'attribute-groups',
        id: '40306ad49ec20bc0c70316421c2fdec4',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25509' }] } },
      },
      'attribute-groups:577650eca892ce42bb279ee45000648d': {
        type: 'attribute-groups',
        id: '577650eca892ce42bb279ee45000648d',
        attributes: { groupId: 7, name: 'bi_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41175' }] } },
      },
      'attribute-groups:b2d6058a66c40e1394a2f2a5041e2ba1': {
        type: 'attribute-groups',
        id: 'b2d6058a66c40e1394a2f2a5041e2ba1',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41178' }] } },
      },
      'attribute-groups:a187c9949827794f08bfbbe305f4a0d0': {
        type: 'attribute-groups',
        id: 'a187c9949827794f08bfbbe305f4a0d0',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41181' }] } },
      },
      'attribute-groups:c31c1961a437335ab5ea61ba3792865f': {
        type: 'attribute-groups',
        id: 'c31c1961a437335ab5ea61ba3792865f',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41184' }] } },
      },
      'attribute-groups:4323eb18fef0796c8945c043ddf1e001': {
        type: 'attribute-groups',
        id: '4323eb18fef0796c8945c043ddf1e001',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25506' }] } },
      },
      'attribute-groups:b80a316dd553252bec90a126007bca46': {
        type: 'attribute-groups',
        id: 'b80a316dd553252bec90a126007bca46',
        attributes: { groupId: 7, name: 'bi_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41139' }] } },
      },
      'attribute-groups:90f6d75d55947b999292d7f81fa8e355': {
        type: 'attribute-groups',
        id: '90f6d75d55947b999292d7f81fa8e355',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41142' }] } },
      },
      'attribute-groups:30a069936479722e6a5d1aeb21643c84': {
        type: 'attribute-groups',
        id: '30a069936479722e6a5d1aeb21643c84',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41145' }] } },
      },
      'attribute-groups:5f4f9fb01dd0d6dc86dedab79fb80403': {
        type: 'attribute-groups',
        id: '5f4f9fb01dd0d6dc86dedab79fb80403',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41148' }] } },
      },
      'variants:35293185': {
        type: 'variants',
        id: '35293185',
        attributes: {
          price: { current: 2990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 21,
          saleLabel: null,
          merchantId: 5,
          merchantProductVariantId: 'JAC0907001000001',
          productIsActive: true,
          sizes: { shop: 'XS', vendor: 'XS', length: null, cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'e20cf68e02f54326add552fb38d2be92' }, {
              type: 'attribute-groups',
              id: '3784a12b9b94f31d66cb4b77ea6f6a6d',
            }, { type: 'attribute-groups', id: '6f3fcd08faba158de295b029c2cba0c3' }, {
              type: 'attribute-groups',
              id: '5df5e003c38e73b81d1dc5e1f589087c',
            }, { type: 'attribute-groups', id: 'bde4f444fb242f1934f57c6f090503d2' }, {
              type: 'attribute-groups',
              id: 'e8727cf6a2846b036a0861212d4dc31e',
            }],
          },
        },
      },
      'variants:35293186': {
        type: 'variants',
        id: '35293186',
        attributes: {
          price: { current: 2999, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 13,
          saleLabel: null,
          merchantId: 120,
          merchantProductVariantId: '5713738734950',
          productIsActive: true,
          sizes: { shop: 'S', vendor: 'S', length: null, cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'a0aa2235a2cd733753ac38adf76d6491' }, {
              type: 'attribute-groups',
              id: '16611e3fbd0703e7378e61c277a8a425',
            }, { type: 'attribute-groups', id: '0fdf454f708b1c740ba4b6483cd7446a' }, {
              type: 'attribute-groups',
              id: 'f7e3147c3eb5d010859e620c66f3de05',
            }, { type: 'attribute-groups', id: '2d794bf77ee25080efaa3856cf89109e' }, {
              type: 'attribute-groups',
              id: 'e8727cf6a2846b036a0861212d4dc31e',
            }],
          },
        },
      },
      'variants:35293187': {
        type: 'variants',
        id: '35293187',
        attributes: {
          price: { current: 2990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 1,
          saleLabel: null,
          merchantId: 5,
          merchantProductVariantId: 'JAC0907001000003',
          productIsActive: true,
          sizes: { shop: 'M', vendor: 'M', length: null, cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'b08b24df6a17aa5b25e28081dbd90cda' }, {
              type: 'attribute-groups',
              id: '062866a0efbef60781b638f5272f26a5',
            }, { type: 'attribute-groups', id: 'b5288e590c8cc0fea837afb52c034f46' }, {
              type: 'attribute-groups',
              id: '84bfa78d69ca3dc5e2d29eca3630c925',
            }, { type: 'attribute-groups', id: '0821ea41c6c7c4130c3aac322939ee0d' }, {
              type: 'attribute-groups',
              id: 'e8727cf6a2846b036a0861212d4dc31e',
            }],
          },
        },
      },
      'variants:35293188': {
        type: 'variants',
        id: '35293188',
        attributes: {
          price: { current: 2990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 0,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'JAC0907001000004',
          productIsActive: true,
          sizes: { shop: 'L', vendor: 'L', length: null, cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: '3020377ae3c5ae4fca98534356daf70b' }, {
              type: 'attribute-groups',
              id: '6ca243ae0426fcdcaf0d3706ea101ed0',
            }, { type: 'attribute-groups', id: 'f98ec4612c07c080ec4c675df40f0f26' }, {
              type: 'attribute-groups',
              id: '550a44ee9514b146855769b8bed0eb55',
            }, { type: 'attribute-groups', id: '348616c90c4b6c55d6c19289f8c9a6f8' }, {
              type: 'attribute-groups',
              id: 'e8727cf6a2846b036a0861212d4dc31e',
            }],
          },
        },
      },
      'variants:35293189': {
        type: 'variants',
        id: '35293189',
        attributes: {
          price: { current: 2999, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 4,
          saleLabel: null,
          merchantId: 120,
          merchantProductVariantId: '5713738734974',
          productIsActive: true,
          sizes: { shop: 'XL', vendor: 'XL', length: null, cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: '40306ad49ec20bc0c70316421c2fdec4' }, {
              type: 'attribute-groups',
              id: '577650eca892ce42bb279ee45000648d',
            }, { type: 'attribute-groups', id: 'b2d6058a66c40e1394a2f2a5041e2ba1' }, {
              type: 'attribute-groups',
              id: 'a187c9949827794f08bfbbe305f4a0d0',
            }, { type: 'attribute-groups', id: 'c31c1961a437335ab5ea61ba3792865f' }, {
              type: 'attribute-groups',
              id: 'e8727cf6a2846b036a0861212d4dc31e',
            }],
          },
        },
      },
      'variants:35293190': {
        type: 'variants',
        id: '35293190',
        attributes: {
          price: { current: 2999, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 1,
          saleLabel: null,
          merchantId: 120,
          merchantProductVariantId: '5713738734981',
          productIsActive: true,
          sizes: { shop: 'XXL', vendor: 'XXL', length: null, cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: '4323eb18fef0796c8945c043ddf1e001' }, {
              type: 'attribute-groups',
              id: 'b80a316dd553252bec90a126007bca46',
            }, { type: 'attribute-groups', id: '90f6d75d55947b999292d7f81fa8e355' }, {
              type: 'attribute-groups',
              id: '30a069936479722e6a5d1aeb21643c84',
            }, { type: 'attribute-groups', id: '5f4f9fb01dd0d6dc86dedab79fb80403' }, {
              type: 'attribute-groups',
              id: 'e8727cf6a2846b036a0861212d4dc31e',
            }],
          },
        },
      },
    },
  },
};
