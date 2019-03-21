import { AboutyouCrawler } from '../../src/crawler/crawlers/aboutyou.crawler';

export const aboutyouSizeWithLengthTestCase = {
  crawlerType: AboutyouCrawler,

  url: 'https://www.aboutyou.de/p/levi-s/jeans-511-3634233',

  sizes: [
    { id: 'variants:33949417', isAvailable: true, name: '29/32' },
    { id: 'variants:33949416', isAvailable: true, name: '29/30' },
    { id: 'variants:33623660', isAvailable: true, name: '30/34' },
    { id: 'variants:33623673', isAvailable: true, name: '30/30' },
    { id: 'variants:33623665', isAvailable: true, name: '30/32' },
    { id: 'variants:33623656', isAvailable: true, name: '31/34' },
    { id: 'variants:33623666', isAvailable: true, name: '31/32' },
    { id: 'variants:33623668', isAvailable: true, name: '31/30' },
    { id: 'variants:33623667', isAvailable: true, name: '32/32' },
    { id: 'variants:33623669', isAvailable: true, name: '32/30' },
    { id: 'variants:33623657', isAvailable: true, name: '32/34' },
    { id: 'variants:33623661', isAvailable: true, name: '33/32' },
    { id: 'variants:33623670', isAvailable: true, name: '33/30' },
    { id: 'variants:33623658', isAvailable: true, name: '33/34' },
    { id: 'variants:33623671', isAvailable: false, name: '34/30' },
    { id: 'variants:33623659', isAvailable: true, name: '34/34' },
    { id: 'variants:33623662', isAvailable: true, name: '34/32' },
    { id: 'variants:33623672', isAvailable: false, name: '36/30' },
    { id: 'variants:33623663', isAvailable: true, name: '36/32' },
    { id: 'variants:33623654', isAvailable: true, name: '36/34' },
    { id: 'variants:33623655', isAvailable: false, name: '38/34' },
    { id: 'variants:33623664', isAvailable: false, name: '38/32' },

  ],

  sizeChecks: [
    { size: 'variants:33623654', isAvailable: true, isLowInStock: false },
    { size: 'variants:33623671', isAvailable: false, isLowInStock: false },
    { size: 'sizedoesnotexist', isAvailable: false, isLowInStock: false },
  ],

  name: 'Jeans \'511\'',

  priceChecks: [
    { size: 'variants:33623654', price: 99.90 },
    { size: 'variants:35293188', price: 99.90 },
    { size: 'unknown-size', price: 99.90 },
  ],

  testResponse: {
    data: {
      type: 'products',
      id: '3634233',
      attributes: {
        name: 'Jeans \'511\'',
        isActive: true,
        isSale: false,
        isNew: false,
        url: '\/p\/levi-s\/jeans-511-3634233',
        price: { min: 9990, max: 9990, maxSavings: 0 },
        campaignPrice: { min: 0, max: 0, maxSavings: 0 },
        saleLabel: null,
        saleLabelPrefix: false,
        categoryId: 20986,
        styleKey: '551911300-1',
        gender: 'male',
        oldPrice: null,
        isPremium: false,
        isSustainable: false,
        isCertified: false,
        isBioCotton: false,
        isSustainableMaterial: false,
        pack: null,
        isKids: false,
        detailColors: { 38906: 'black denim' },
      },
      relationships: {
        variants: {
          data: [{ type: 'variants', id: '33949417' }, { type: 'variants', id: '33949416' }, {
            type: 'variants',
            id: '33623660',
          }, { type: 'variants', id: '33623673' }, { type: 'variants', id: '33623665' }, { type: 'variants', id: '33623656' }, {
            type: 'variants',
            id: '33623666',
          }, { type: 'variants', id: '33623668' }, { type: 'variants', id: '33623667' }, { type: 'variants', id: '33623669' }, {
            type: 'variants',
            id: '33623657',
          }, { type: 'variants', id: '33623661' }, { type: 'variants', id: '33623670' }, { type: 'variants', id: '33623658' }, {
            type: 'variants',
            id: '33623671',
          }, { type: 'variants', id: '33623659' }, { type: 'variants', id: '33623662' }, { type: 'variants', id: '33623672' }, {
            type: 'variants',
            id: '33623663',
          }, { type: 'variants', id: '33623654' }, { type: 'variants', id: '33623655' }, { type: 'variants', id: '33623664' }],
        },
      },
    }, included: {
      'attributes:25502': { type: 'attributes', id: '25502', attributes: { name: '29', slug: '29' } },
      'attributes:25960': { type: 'attributes', id: '25960', attributes: { name: '32', slug: '32' } },
      'attributes:41796': { type: 'attributes', id: '41796', attributes: { name: 'XS\/S', slug: 'xss' } },
      'attributes:41187': { type: 'attributes', id: '41187', attributes: { name: 'S', slug: 's' } },
      'attributes:41361': { type: 'attributes', id: '41361', attributes: { name: '29', slug: '29' } },
      'attributes:41364': { type: 'attributes', id: '41364', attributes: { name: '29', slug: '29' } },
      'attributes:41073': { type: 'attributes', id: '41073', attributes: { name: '300', slug: '300' } },
      'attributes:41058': { type: 'attributes', id: '41058', attributes: { name: 'equal', slug: 'equal' } },
      'attributes:25959': { type: 'attributes', id: '25959', attributes: { name: '30', slug: '30' } },
      'attributes:25511': { type: 'attributes', id: '25511', attributes: { name: '30', slug: '30' } },
      'attributes:25961': { type: 'attributes', id: '25961', attributes: { name: '34', slug: '34' } },
      'attributes:41373': { type: 'attributes', id: '41373', attributes: { name: '30', slug: '30' } },
      'attributes:41376': { type: 'attributes', id: '41376', attributes: { name: '30', slug: '30' } },
      'attributes:41196': { type: 'attributes', id: '41196', attributes: { name: '350', slug: '350' } },
      'attributes:25532': { type: 'attributes', id: '25532', attributes: { name: '31', slug: '31' } },
      'attributes:41385': { type: 'attributes', id: '41385', attributes: { name: '31', slug: '31' } },
      'attributes:41388': { type: 'attributes', id: '41388', attributes: { name: '31', slug: '31' } },
      'attributes:41085': { type: 'attributes', id: '41085', attributes: { name: '400', slug: '400' } },
      'attributes:25521': { type: 'attributes', id: '25521', attributes: { name: '32', slug: '32' } },
      'attributes:41397': { type: 'attributes', id: '41397', attributes: { name: '32', slug: '32' } },
      'attributes:41400': { type: 'attributes', id: '41400', attributes: { name: '32', slug: '32' } },
      'attributes:41160': { type: 'attributes', id: '41160', attributes: { name: '450', slug: '450' } },
      'attributes:25524': { type: 'attributes', id: '25524', attributes: { name: '33', slug: '33' } },
      'attributes:42246': { type: 'attributes', id: '42246', attributes: { name: 'S\/M', slug: 'sm' } },
      'attributes:41151': { type: 'attributes', id: '41151', attributes: { name: 'M', slug: 'm' } },
      'attributes:41850': { type: 'attributes', id: '41850', attributes: { name: '33', slug: '33' } },
      'attributes:41853': { type: 'attributes', id: '41853', attributes: { name: '33', slug: '33' } },
      'attributes:41097': { type: 'attributes', id: '41097', attributes: { name: '500', slug: '500' } },
      'attributes:25472': { type: 'attributes', id: '25472', attributes: { name: '34', slug: '34' } },
      'attributes:41262': { type: 'attributes', id: '41262', attributes: { name: '34', slug: '34' } },
      'attributes:41265': { type: 'attributes', id: '41265', attributes: { name: '34', slug: '34' } },
      'attributes:41172': { type: 'attributes', id: '41172', attributes: { name: '550', slug: '550' } },
      'attributes:25474': { type: 'attributes', id: '25474', attributes: { name: '36', slug: '36' } },
      'attributes:41805': { type: 'attributes', id: '41805', attributes: { name: 'M\/L', slug: 'ml' } },
      'attributes:41163': { type: 'attributes', id: '41163', attributes: { name: 'L', slug: 'l' } },
      'attributes:41049': { type: 'attributes', id: '41049', attributes: { name: '36', slug: '36' } },
      'attributes:41052': { type: 'attributes', id: '41052', attributes: { name: '36', slug: '36' } },
      'attributes:41184': { type: 'attributes', id: '41184', attributes: { name: '650', slug: '650' } },
      'attributes:25471': { type: 'attributes', id: '25471', attributes: { name: '38', slug: '38' } },
      'attributes:41067': { type: 'attributes', id: '41067', attributes: { name: '38', slug: '38' } },
      'attributes:41070': { type: 'attributes', id: '41070', attributes: { name: '38', slug: '38' } },
      'attributes:41148': { type: 'attributes', id: '41148', attributes: { name: '750', slug: '750' } },
      'attribute-groups:bf5496702033e87c7feca2fb50e4b001': {
        type: 'attribute-groups',
        id: 'bf5496702033e87c7feca2fb50e4b001',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25502' }] } },
      },
      'attribute-groups:9c58d3fecf3bcd8844a2d8482f726ebe': {
        type: 'attribute-groups',
        id: '9c58d3fecf3bcd8844a2d8482f726ebe',
        attributes: { groupId: 5, name: 'length', frontendName: 'Hosenbeinl\u00e4nge', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25960' }] } },
      },
      'attribute-groups:e6d74f14a3736311951ae915e9bbbd3f': {
        type: 'attribute-groups',
        id: 'e6d74f14a3736311951ae915e9bbbd3f',
        attributes: { groupId: 7, name: 'bi_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41796' }, { type: 'attributes', id: '41187' }] } },
      },
      'attribute-groups:703fa06dca91f9924752f50fcf678ba6': {
        type: 'attribute-groups',
        id: '703fa06dca91f9924752f50fcf678ba6',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41361' }] } },
      },
      'attribute-groups:b4aef78a448a6d79ca738231809a4fdd': {
        type: 'attribute-groups',
        id: 'b4aef78a448a6d79ca738231809a4fdd',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41364' }] } },
      },
      'attribute-groups:eda4e0affc91a523e2dfcfbefdb78e7b': {
        type: 'attribute-groups',
        id: 'eda4e0affc91a523e2dfcfbefdb78e7b',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41073' }] } },
      },
      'attribute-groups:e8727cf6a2846b036a0861212d4dc31e': {
        type: 'attribute-groups',
        id: 'e8727cf6a2846b036a0861212d4dc31e',
        attributes: { groupId: 11, name: 'size_translation_type', frontendName: '\u00dcbersetzung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41058' }] } },
      },
      'attribute-groups:ba3b9990794cccb90fe2463ae5db0e58': {
        type: 'attribute-groups',
        id: 'ba3b9990794cccb90fe2463ae5db0e58',
        attributes: { groupId: 5, name: 'length', frontendName: 'Hosenbeinl\u00e4nge', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25959' }] } },
      },
      'attribute-groups:2164fe843a115b1c6bc462eb76df4477': {
        type: 'attribute-groups',
        id: '2164fe843a115b1c6bc462eb76df4477',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25511' }] } },
      },
      'attribute-groups:3161f10da6eb9e20672fc7b9ca22829f': {
        type: 'attribute-groups',
        id: '3161f10da6eb9e20672fc7b9ca22829f',
        attributes: { groupId: 5, name: 'length', frontendName: 'Hosenbeinl\u00e4nge', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25961' }] } },
      },
      'attribute-groups:e65583cff9055c6daadb2a335994db00': {
        type: 'attribute-groups',
        id: 'e65583cff9055c6daadb2a335994db00',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41373' }] } },
      },
      'attribute-groups:07fdcd9f5c75439d0b93c4e389e9c9dd': {
        type: 'attribute-groups',
        id: '07fdcd9f5c75439d0b93c4e389e9c9dd',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41376' }] } },
      },
      'attribute-groups:2d794bf77ee25080efaa3856cf89109e': {
        type: 'attribute-groups',
        id: '2d794bf77ee25080efaa3856cf89109e',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41196' }] } },
      },
      'attribute-groups:f608db504ceddc9c0f9d1760b8376b2d': {
        type: 'attribute-groups',
        id: 'f608db504ceddc9c0f9d1760b8376b2d',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25532' }] } },
      },
      'attribute-groups:16611e3fbd0703e7378e61c277a8a425': {
        type: 'attribute-groups',
        id: '16611e3fbd0703e7378e61c277a8a425',
        attributes: { groupId: 7, name: 'bi_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41187' }] } },
      },
      'attribute-groups:43a65c3380ff6dd63f073ef3b1dbea82': {
        type: 'attribute-groups',
        id: '43a65c3380ff6dd63f073ef3b1dbea82',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41385' }] } },
      },
      'attribute-groups:ced95db3cad82ea4300506af23a0ffae': {
        type: 'attribute-groups',
        id: 'ced95db3cad82ea4300506af23a0ffae',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41388' }] } },
      },
      'attribute-groups:13e1e73cfc6aaed0c12dddadbe187379': {
        type: 'attribute-groups',
        id: '13e1e73cfc6aaed0c12dddadbe187379',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41085' }] } },
      },
      'attribute-groups:7dd5c78aa4c3769e34ff3623cd132848': {
        type: 'attribute-groups',
        id: '7dd5c78aa4c3769e34ff3623cd132848',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25521' }] } },
      },
      'attribute-groups:8356e90404fe77c6cdb1300ebb789605': {
        type: 'attribute-groups',
        id: '8356e90404fe77c6cdb1300ebb789605',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41397' }] } },
      },
      'attribute-groups:bf6188b5980f6335eaf210b19f072398': {
        type: 'attribute-groups',
        id: 'bf6188b5980f6335eaf210b19f072398',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41400' }] } },
      },
      'attribute-groups:0821ea41c6c7c4130c3aac322939ee0d': {
        type: 'attribute-groups',
        id: '0821ea41c6c7c4130c3aac322939ee0d',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41160' }] } },
      },
      'attribute-groups:e779077fa3185bc649acdfd266b3da34': {
        type: 'attribute-groups',
        id: 'e779077fa3185bc649acdfd266b3da34',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25524' }] } },
      },
      'attribute-groups:fc7a718fac333579cb5ae1d83f4602cc': {
        type: 'attribute-groups',
        id: 'fc7a718fac333579cb5ae1d83f4602cc',
        attributes: { groupId: 7, name: 'bi_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '42246' }, { type: 'attributes', id: '41151' }] } },
      },
      'attribute-groups:7eb5eb6a1d0482d66c9963b69c64438d': {
        type: 'attribute-groups',
        id: '7eb5eb6a1d0482d66c9963b69c64438d',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41850' }] } },
      },
      'attribute-groups:772c47753ed16588acc9455781297036': {
        type: 'attribute-groups',
        id: '772c47753ed16588acc9455781297036',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41853' }] } },
      },
      'attribute-groups:f228a0436db817d0376b91100056aba8': {
        type: 'attribute-groups',
        id: 'f228a0436db817d0376b91100056aba8',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41097' }] } },
      },
      'attribute-groups:e1fbe78c1417af332a8c338642139adb': {
        type: 'attribute-groups',
        id: 'e1fbe78c1417af332a8c338642139adb',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25472' }] } },
      },
      'attribute-groups:062866a0efbef60781b638f5272f26a5': {
        type: 'attribute-groups',
        id: '062866a0efbef60781b638f5272f26a5',
        attributes: { groupId: 7, name: 'bi_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41151' }] } },
      },
      'attribute-groups:d1bf3953566157392ebe66b903fb0d92': {
        type: 'attribute-groups',
        id: 'd1bf3953566157392ebe66b903fb0d92',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41262' }] } },
      },
      'attribute-groups:201b7fb4d141cbdfd01952044800a731': {
        type: 'attribute-groups',
        id: '201b7fb4d141cbdfd01952044800a731',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41265' }] } },
      },
      'attribute-groups:348616c90c4b6c55d6c19289f8c9a6f8': {
        type: 'attribute-groups',
        id: '348616c90c4b6c55d6c19289f8c9a6f8',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41172' }] } },
      },
      'attribute-groups:bf294ba62509ca8b6bcd8d83e79dd0af': {
        type: 'attribute-groups',
        id: 'bf294ba62509ca8b6bcd8d83e79dd0af',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25474' }] } },
      },
      'attribute-groups:9a5db333bd086a41523c0dc1ac863e5c': {
        type: 'attribute-groups',
        id: '9a5db333bd086a41523c0dc1ac863e5c',
        attributes: { groupId: 7, name: 'bi_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41805' }, { type: 'attributes', id: '41163' }] } },
      },
      'attribute-groups:548f9d520dda9417a48f8cca36520326': {
        type: 'attribute-groups',
        id: '548f9d520dda9417a48f8cca36520326',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41049' }] } },
      },
      'attribute-groups:d173ceaae6f1ac5c73d79d51363b9d78': {
        type: 'attribute-groups',
        id: 'd173ceaae6f1ac5c73d79d51363b9d78',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41052' }] } },
      },
      'attribute-groups:c31c1961a437335ab5ea61ba3792865f': {
        type: 'attribute-groups',
        id: 'c31c1961a437335ab5ea61ba3792865f',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41184' }] } },
      },
      'attribute-groups:d31b75c137bc1e23026636220ce2a14c': {
        type: 'attribute-groups',
        id: 'd31b75c137bc1e23026636220ce2a14c',
        attributes: { groupId: 2, name: 'vendor_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '25471' }] } },
      },
      'attribute-groups:6ca243ae0426fcdcaf0d3706ea101ed0': {
        type: 'attribute-groups',
        id: '6ca243ae0426fcdcaf0d3706ea101ed0',
        attributes: { groupId: 7, name: 'bi_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41163' }] } },
      },
      'attribute-groups:215befe452a36b0955178c4626e3a315': {
        type: 'attribute-groups',
        id: '215befe452a36b0955178c4626e3a315',
        attributes: { groupId: 8, name: 'shop_size', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41067' }] } },
      },
      'attribute-groups:ec9efb18bf4efa0d833db432bb489796': {
        type: 'attribute-groups',
        id: 'ec9efb18bf4efa0d833db432bb489796',
        attributes: { groupId: 9, name: 'category_shop_filter_sizes', frontendName: 'Gr\u00f6\u00dfe', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41070' }] } },
      },
      'attribute-groups:5f4f9fb01dd0d6dc86dedab79fb80403': {
        type: 'attribute-groups',
        id: '5f4f9fb01dd0d6dc86dedab79fb80403',
        attributes: { groupId: 10, name: 'sort', frontendName: 'Sortierung', type: '', sort: 0 },
        relationships: { attributes: { data: [{ type: 'attributes', id: '41148' }] } },
      },
      'variants:33949417': {
        type: 'variants',
        id: '33949417',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 4,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000002',
          productIsActive: true,
          sizes: { shop: '29', vendor: '29', length: '32', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'bf5496702033e87c7feca2fb50e4b001' }, {
              type: 'attribute-groups',
              id: '9c58d3fecf3bcd8844a2d8482f726ebe',
            }, { type: 'attribute-groups', id: 'e6d74f14a3736311951ae915e9bbbd3f' }, {
              type: 'attribute-groups',
              id: '703fa06dca91f9924752f50fcf678ba6',
            }, { type: 'attribute-groups', id: 'b4aef78a448a6d79ca738231809a4fdd' }, {
              type: 'attribute-groups',
              id: 'eda4e0affc91a523e2dfcfbefdb78e7b',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33949416': {
        type: 'variants',
        id: '33949416',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 7,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000001',
          productIsActive: true,
          sizes: { shop: '29', vendor: '29', length: '30', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'bf5496702033e87c7feca2fb50e4b001' }, {
              type: 'attribute-groups',
              id: 'ba3b9990794cccb90fe2463ae5db0e58',
            }, { type: 'attribute-groups', id: 'e6d74f14a3736311951ae915e9bbbd3f' }, {
              type: 'attribute-groups',
              id: '703fa06dca91f9924752f50fcf678ba6',
            }, { type: 'attribute-groups', id: 'b4aef78a448a6d79ca738231809a4fdd' }, {
              type: 'attribute-groups',
              id: 'eda4e0affc91a523e2dfcfbefdb78e7b',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623660': {
        type: 'variants',
        id: '33623660',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 6,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000005',
          productIsActive: true,
          sizes: { shop: '30', vendor: '30', length: '34', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: '2164fe843a115b1c6bc462eb76df4477' }, {
              type: 'attribute-groups',
              id: '3161f10da6eb9e20672fc7b9ca22829f',
            }, { type: 'attribute-groups', id: 'e6d74f14a3736311951ae915e9bbbd3f' }, {
              type: 'attribute-groups',
              id: 'e65583cff9055c6daadb2a335994db00',
            }, { type: 'attribute-groups', id: '07fdcd9f5c75439d0b93c4e389e9c9dd' }, {
              type: 'attribute-groups',
              id: '2d794bf77ee25080efaa3856cf89109e',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623673': {
        type: 'variants',
        id: '33623673',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 10,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000003',
          productIsActive: true,
          sizes: { shop: '30', vendor: '30', length: '30', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: '2164fe843a115b1c6bc462eb76df4477' }, {
              type: 'attribute-groups',
              id: 'ba3b9990794cccb90fe2463ae5db0e58',
            }, { type: 'attribute-groups', id: 'e6d74f14a3736311951ae915e9bbbd3f' }, {
              type: 'attribute-groups',
              id: 'e65583cff9055c6daadb2a335994db00',
            }, { type: 'attribute-groups', id: '07fdcd9f5c75439d0b93c4e389e9c9dd' }, {
              type: 'attribute-groups',
              id: '2d794bf77ee25080efaa3856cf89109e',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623665': {
        type: 'variants',
        id: '33623665',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 9,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000004',
          productIsActive: true,
          sizes: { shop: '30', vendor: '30', length: '32', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: '2164fe843a115b1c6bc462eb76df4477' }, {
              type: 'attribute-groups',
              id: '9c58d3fecf3bcd8844a2d8482f726ebe',
            }, { type: 'attribute-groups', id: 'e6d74f14a3736311951ae915e9bbbd3f' }, {
              type: 'attribute-groups',
              id: 'e65583cff9055c6daadb2a335994db00',
            }, { type: 'attribute-groups', id: '07fdcd9f5c75439d0b93c4e389e9c9dd' }, {
              type: 'attribute-groups',
              id: '2d794bf77ee25080efaa3856cf89109e',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623656': {
        type: 'variants',
        id: '33623656',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 7,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000008',
          productIsActive: true,
          sizes: { shop: '31', vendor: '31', length: '34', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'f608db504ceddc9c0f9d1760b8376b2d' }, {
              type: 'attribute-groups',
              id: '3161f10da6eb9e20672fc7b9ca22829f',
            }, { type: 'attribute-groups', id: '16611e3fbd0703e7378e61c277a8a425' }, {
              type: 'attribute-groups',
              id: '43a65c3380ff6dd63f073ef3b1dbea82',
            }, { type: 'attribute-groups', id: 'ced95db3cad82ea4300506af23a0ffae' }, {
              type: 'attribute-groups',
              id: '13e1e73cfc6aaed0c12dddadbe187379',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623666': {
        type: 'variants',
        id: '33623666',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 14,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000007',
          productIsActive: true,
          sizes: { shop: '31', vendor: '31', length: '32', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'f608db504ceddc9c0f9d1760b8376b2d' }, {
              type: 'attribute-groups',
              id: '9c58d3fecf3bcd8844a2d8482f726ebe',
            }, { type: 'attribute-groups', id: '16611e3fbd0703e7378e61c277a8a425' }, {
              type: 'attribute-groups',
              id: '43a65c3380ff6dd63f073ef3b1dbea82',
            }, { type: 'attribute-groups', id: 'ced95db3cad82ea4300506af23a0ffae' }, {
              type: 'attribute-groups',
              id: '13e1e73cfc6aaed0c12dddadbe187379',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623668': {
        type: 'variants',
        id: '33623668',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 9,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000006',
          productIsActive: true,
          sizes: { shop: '31', vendor: '31', length: '30', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'f608db504ceddc9c0f9d1760b8376b2d' }, {
              type: 'attribute-groups',
              id: 'ba3b9990794cccb90fe2463ae5db0e58',
            }, { type: 'attribute-groups', id: '16611e3fbd0703e7378e61c277a8a425' }, {
              type: 'attribute-groups',
              id: '43a65c3380ff6dd63f073ef3b1dbea82',
            }, { type: 'attribute-groups', id: 'ced95db3cad82ea4300506af23a0ffae' }, {
              type: 'attribute-groups',
              id: '13e1e73cfc6aaed0c12dddadbe187379',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623667': {
        type: 'variants',
        id: '33623667',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 23,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000010',
          productIsActive: true,
          sizes: { shop: '32', vendor: '32', length: '32', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: '7dd5c78aa4c3769e34ff3623cd132848' }, {
              type: 'attribute-groups',
              id: '9c58d3fecf3bcd8844a2d8482f726ebe',
            }, { type: 'attribute-groups', id: '16611e3fbd0703e7378e61c277a8a425' }, {
              type: 'attribute-groups',
              id: '8356e90404fe77c6cdb1300ebb789605',
            }, { type: 'attribute-groups', id: 'bf6188b5980f6335eaf210b19f072398' }, {
              type: 'attribute-groups',
              id: '0821ea41c6c7c4130c3aac322939ee0d',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623669': {
        type: 'variants',
        id: '33623669',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 7,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000009',
          productIsActive: true,
          sizes: { shop: '32', vendor: '32', length: '30', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: '7dd5c78aa4c3769e34ff3623cd132848' }, {
              type: 'attribute-groups',
              id: 'ba3b9990794cccb90fe2463ae5db0e58',
            }, { type: 'attribute-groups', id: '16611e3fbd0703e7378e61c277a8a425' }, {
              type: 'attribute-groups',
              id: '8356e90404fe77c6cdb1300ebb789605',
            }, { type: 'attribute-groups', id: 'bf6188b5980f6335eaf210b19f072398' }, {
              type: 'attribute-groups',
              id: '0821ea41c6c7c4130c3aac322939ee0d',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623657': {
        type: 'variants',
        id: '33623657',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 14,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000011',
          productIsActive: true,
          sizes: { shop: '32', vendor: '32', length: '34', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: '7dd5c78aa4c3769e34ff3623cd132848' }, {
              type: 'attribute-groups',
              id: '3161f10da6eb9e20672fc7b9ca22829f',
            }, { type: 'attribute-groups', id: '16611e3fbd0703e7378e61c277a8a425' }, {
              type: 'attribute-groups',
              id: '8356e90404fe77c6cdb1300ebb789605',
            }, { type: 'attribute-groups', id: 'bf6188b5980f6335eaf210b19f072398' }, {
              type: 'attribute-groups',
              id: '0821ea41c6c7c4130c3aac322939ee0d',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623661': {
        type: 'variants',
        id: '33623661',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 12,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000013',
          productIsActive: true,
          sizes: { shop: '33', vendor: '33', length: '32', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'e779077fa3185bc649acdfd266b3da34' }, {
              type: 'attribute-groups',
              id: '9c58d3fecf3bcd8844a2d8482f726ebe',
            }, { type: 'attribute-groups', id: 'fc7a718fac333579cb5ae1d83f4602cc' }, {
              type: 'attribute-groups',
              id: '7eb5eb6a1d0482d66c9963b69c64438d',
            }, { type: 'attribute-groups', id: '772c47753ed16588acc9455781297036' }, {
              type: 'attribute-groups',
              id: 'f228a0436db817d0376b91100056aba8',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623670': {
        type: 'variants',
        id: '33623670',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 4,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000012',
          productIsActive: true,
          sizes: { shop: '33', vendor: '33', length: '30', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'e779077fa3185bc649acdfd266b3da34' }, {
              type: 'attribute-groups',
              id: 'ba3b9990794cccb90fe2463ae5db0e58',
            }, { type: 'attribute-groups', id: 'fc7a718fac333579cb5ae1d83f4602cc' }, {
              type: 'attribute-groups',
              id: '7eb5eb6a1d0482d66c9963b69c64438d',
            }, { type: 'attribute-groups', id: '772c47753ed16588acc9455781297036' }, {
              type: 'attribute-groups',
              id: 'f228a0436db817d0376b91100056aba8',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623658': {
        type: 'variants',
        id: '33623658',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 12,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000014',
          productIsActive: true,
          sizes: { shop: '33', vendor: '33', length: '34', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'e779077fa3185bc649acdfd266b3da34' }, {
              type: 'attribute-groups',
              id: '3161f10da6eb9e20672fc7b9ca22829f',
            }, { type: 'attribute-groups', id: 'fc7a718fac333579cb5ae1d83f4602cc' }, {
              type: 'attribute-groups',
              id: '7eb5eb6a1d0482d66c9963b69c64438d',
            }, { type: 'attribute-groups', id: '772c47753ed16588acc9455781297036' }, {
              type: 'attribute-groups',
              id: 'f228a0436db817d0376b91100056aba8',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623671': {
        type: 'variants',
        id: '33623671',
        attributes: {
          price: { current: 9699, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 0,
          saleLabel: null,
          merchantId: 0,
          merchantProductVariantId: null,
          productIsActive: true,
          sizes: { shop: '34', vendor: '34', length: '30', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'e1fbe78c1417af332a8c338642139adb' }, {
              type: 'attribute-groups',
              id: 'ba3b9990794cccb90fe2463ae5db0e58',
            }, { type: 'attribute-groups', id: '062866a0efbef60781b638f5272f26a5' }, {
              type: 'attribute-groups',
              id: 'd1bf3953566157392ebe66b903fb0d92',
            }, { type: 'attribute-groups', id: '201b7fb4d141cbdfd01952044800a731' }, {
              type: 'attribute-groups',
              id: '348616c90c4b6c55d6c19289f8c9a6f8',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623659': {
        type: 'variants',
        id: '33623659',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 9,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000016',
          productIsActive: true,
          sizes: { shop: '34', vendor: '34', length: '34', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'e1fbe78c1417af332a8c338642139adb' }, {
              type: 'attribute-groups',
              id: '3161f10da6eb9e20672fc7b9ca22829f',
            }, { type: 'attribute-groups', id: '062866a0efbef60781b638f5272f26a5' }, {
              type: 'attribute-groups',
              id: 'd1bf3953566157392ebe66b903fb0d92',
            }, { type: 'attribute-groups', id: '201b7fb4d141cbdfd01952044800a731' }, {
              type: 'attribute-groups',
              id: '348616c90c4b6c55d6c19289f8c9a6f8',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623662': {
        type: 'variants',
        id: '33623662',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 11,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000015',
          productIsActive: true,
          sizes: { shop: '34', vendor: '34', length: '32', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'e1fbe78c1417af332a8c338642139adb' }, {
              type: 'attribute-groups',
              id: '9c58d3fecf3bcd8844a2d8482f726ebe',
            }, { type: 'attribute-groups', id: '062866a0efbef60781b638f5272f26a5' }, {
              type: 'attribute-groups',
              id: 'd1bf3953566157392ebe66b903fb0d92',
            }, { type: 'attribute-groups', id: '201b7fb4d141cbdfd01952044800a731' }, {
              type: 'attribute-groups',
              id: '348616c90c4b6c55d6c19289f8c9a6f8',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623672': {
        type: 'variants',
        id: '33623672',
        attributes: {
          price: { current: 9799, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 0,
          saleLabel: null,
          merchantId: 0,
          merchantProductVariantId: null,
          productIsActive: true,
          sizes: { shop: '36', vendor: '36', length: '30', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'bf294ba62509ca8b6bcd8d83e79dd0af' }, {
              type: 'attribute-groups',
              id: 'ba3b9990794cccb90fe2463ae5db0e58',
            }, { type: 'attribute-groups', id: '9a5db333bd086a41523c0dc1ac863e5c' }, {
              type: 'attribute-groups',
              id: '548f9d520dda9417a48f8cca36520326',
            }, { type: 'attribute-groups', id: 'd173ceaae6f1ac5c73d79d51363b9d78' }, {
              type: 'attribute-groups',
              id: 'c31c1961a437335ab5ea61ba3792865f',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623663': {
        type: 'variants',
        id: '33623663',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 4,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000017',
          productIsActive: true,
          sizes: { shop: '36', vendor: '36', length: '32', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'bf294ba62509ca8b6bcd8d83e79dd0af' }, {
              type: 'attribute-groups',
              id: '9c58d3fecf3bcd8844a2d8482f726ebe',
            }, { type: 'attribute-groups', id: '9a5db333bd086a41523c0dc1ac863e5c' }, {
              type: 'attribute-groups',
              id: '548f9d520dda9417a48f8cca36520326',
            }, { type: 'attribute-groups', id: 'd173ceaae6f1ac5c73d79d51363b9d78' }, {
              type: 'attribute-groups',
              id: 'c31c1961a437335ab5ea61ba3792865f',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623654': {
        type: 'variants',
        id: '33623654',
        attributes: {
          price: { current: 9990, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 6,
          saleLabel: null,
          merchantId: 130,
          merchantProductVariantId: 'LEV0008008000018',
          productIsActive: true,
          sizes: { shop: '36', vendor: '36', length: '34', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'bf294ba62509ca8b6bcd8d83e79dd0af' }, {
              type: 'attribute-groups',
              id: '3161f10da6eb9e20672fc7b9ca22829f',
            }, { type: 'attribute-groups', id: '9a5db333bd086a41523c0dc1ac863e5c' }, {
              type: 'attribute-groups',
              id: '548f9d520dda9417a48f8cca36520326',
            }, { type: 'attribute-groups', id: 'd173ceaae6f1ac5c73d79d51363b9d78' }, {
              type: 'attribute-groups',
              id: 'c31c1961a437335ab5ea61ba3792865f',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623655': {
        type: 'variants',
        id: '33623655',
        attributes: {
          price: { current: 9699, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 0,
          saleLabel: null,
          merchantId: 0,
          merchantProductVariantId: null,
          productIsActive: true,
          sizes: { shop: '38', vendor: '38', length: '34', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'd31b75c137bc1e23026636220ce2a14c' }, {
              type: 'attribute-groups',
              id: '3161f10da6eb9e20672fc7b9ca22829f',
            }, { type: 'attribute-groups', id: '6ca243ae0426fcdcaf0d3706ea101ed0' }, {
              type: 'attribute-groups',
              id: '215befe452a36b0955178c4626e3a315',
            }, { type: 'attribute-groups', id: 'ec9efb18bf4efa0d833db432bb489796' }, {
              type: 'attribute-groups',
              id: '5f4f9fb01dd0d6dc86dedab79fb80403',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
      'variants:33623664': {
        type: 'variants',
        id: '33623664',
        attributes: {
          price: { current: 9699, old: 0, reduction: 0 },
          campaignPrice: { current: 0, reduction: 0 },
          quantity: 0,
          saleLabel: null,
          merchantId: 0,
          merchantProductVariantId: null,
          productIsActive: true,
          sizes: { shop: '38', vendor: '38', length: '32', cupSize: null },
        },
        relationships: {
          sizes: {
            data: [{ type: 'attribute-groups', id: 'd31b75c137bc1e23026636220ce2a14c' }, {
              type: 'attribute-groups',
              id: '9c58d3fecf3bcd8844a2d8482f726ebe',
            }, { type: 'attribute-groups', id: '6ca243ae0426fcdcaf0d3706ea101ed0' }, {
              type: 'attribute-groups',
              id: '215befe452a36b0955178c4626e3a315',
            }, { type: 'attribute-groups', id: 'ec9efb18bf4efa0d833db432bb489796' }, {
              type: 'attribute-groups',
              id: '5f4f9fb01dd0d6dc86dedab79fb80403',
            }, { type: 'attribute-groups', id: 'e8727cf6a2846b036a0861212d4dc31e' }],
          },
        },
      },
    },
  },
};
