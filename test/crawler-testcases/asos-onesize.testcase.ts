/* eslint-disable max-len */
import { AsosCrawler } from '../../src/crawler/crawlers/asos.crawler';

export const asosOneSizeTestCase = {
  crawlerType: AsosCrawler,

  url:
    'https://www.asos.com/de/eastpak/eastpak-springer-grune-gurteltasche-aus-netzstoff-2-l/prd/13653434?clr=grun&colourWayId=16555119&SearchQuery=&cid=4711',

  sizes: [{ id: '13653485', isAvailable: true, name: 'No Size' }],

  sizeChecks: [
    { size: '13653485', isAvailable: true, isLowInStock: false },
    { size: 'sizedoesnotexist', isAvailable: false, isLowInStock: false },
  ],

  name: 'Eastpak – Springer – Grüne Gürteltasche aus Netzstoff, 2 L',

  priceChecks: [{ size: '13653485', price: 27 }],

  testResponse: {
    id: 13653434,
    name: 'Eastpak – Springer – Grüne Gürteltasche aus Netzstoff, 2 L',
    description:
      '<a href="/Men/Bags/Bum-Bags/Cat/pgecategory.aspx?cid=19787"><strong>Gürteltasche</strong></a> von <a href="/Men/A-To-Z-Of-Brands/Eastpak/Cat/pgecategory.aspx?cid=4711"><strong>Eastpak</strong></a><ul>    <li>Neue Tasche, neues Leben</li>    <li>verstellbarer Umhängeriemen</li>    <li>Sicherheitsverschluss</li>    <li>Markentypisches Design</li>    <li>Reißverschluss</li></ul>',
    alternateNames: [
      {
        locale: 'en-GB',
        title: 'Eastpak Springer bum bag in green mesh 2l',
      },
      {
        locale: 'da-DK',
        title: 'Eastpak - Springer - Bæltetaske i grøn mesh 2l',
      },
      {
        locale: 'de-DE',
        title: 'Eastpak – Springer – Grüne Gürteltasche aus Netzstoff, 2 L',
      },
      {
        locale: 'en-AU',
        title: 'Eastpak Springer bum bag in green mesh 2l',
      },
      {
        locale: 'en-US',
        title: 'Eastpak Springer fanny pack in green mesh 2l',
      },
      {
        locale: 'es-ES',
        title: 'Riñonera de 2l de malla verde Springer de Eastpak',
      },
      {
        locale: 'fr-FR',
        title: 'Eastpak - Springer - Sac banane 2 L en tulle - Vert',
      },
      {
        locale: 'it-IT',
        title: 'Eastpak - Springer - Marsupio in rete verde da 2 L',
      },
      {
        locale: 'nl-NL',
        title: 'Eastpak - Springer - Heuptasje met mesh in groen 2L',
      },
      {
        locale: 'pl-PL',
        title:
          'Eastpak Springer – Zielona siateczkowa saszetka o pojemności 2 l',
      },
      {
        locale: 'ru-RU',
        title:
          'Зеленая сумка-кошелек объемом 2 литра с сетчатой отделкой Eastpak',
      },
      {
        locale: 'sv-SE',
        title: 'Eastpak – Springer – Grön magväska i mesh, 2 l',
      },
    ],
    localisedData: null,
    gender: 'Men',
    productCode: '1583461',
    pdpLayout: null,
    brand: {
      brandId: 173,
      name: 'Eastpak',
      description:
        'Einfach alles einpacken mit <a href="/Men/A-To-Z-Of-Brands/Eastpak/Cat/pgecategory.aspx?cid=4711"><strong>Eastpaks</strong></a> Gürteltaschen, Rucksäcken und Beuteltaschen. Aus stabilen, ausdauernden Materialien gefertigt und speziell auf die Gegebenheiten unter freiem Himmel und unterwegs ausgelegt.',
    },
    sizeGuide:
      'assets.asosservices.com/asos-ui/SizeGuides/2.0/size-guide.html?productType=1427&brand=173&store=DE&division=5&sizeSchema=DE',
    isNoSize: true,
    isOneSize: false,
    isInStock: true,
    countryOfManufacture: null,
    webCategories: [
      {
        id: 4210,
      },
      {
        id: 9265,
      },
      {
        id: 16366,
      },
      {
        id: 22737,
      },
      {
        id: 27112,
      },
    ],
    variants: [
      {
        id: 13653485,
        name: 'Eastpak – Springer – Grüne Gürteltasche aus Netzstoff, 2 L',
        sizeId: 4601,
        brandSize: 'No Size',
        sizeDescription: '',
        sizeOrder: 34,
        sku: '9213985',
        isLowInStock: false,
        isInStock: true,
        isAvailable: false,
        colourWayId: 16555119,
        colourCode: 'GR1',
        colour: 'Grün',
        price: {
          current: {
            value: 27.0,
            text: '27,00 €',
            versionId: 'REGP000002000400092139850000166983',
            conversionId: null,
          },
          previous: {
            value: 27.0,
            text: '27,00 €',
            versionId: 'REGP000002000400092139850000166983',
            conversionId: null,
          },
          rrp: {
            value: null,
            text: null,
            versionId: 'REGP000002000400092139850000166983',
            conversionId: null,
          },
          xrp: {
            value: 19.53,
            text: '19,53 €',
            versionId: 'REGP000002000400092139850000166983',
            conversionId: '0',
          },
          currency: 'EUR',
          isMarkedDown: false,
          isOutletPrice: false,
          startDateTime: '2019-10-02T22:43:25Z',
        },
        isPrimary: true,
      },
    ],
    media: {
      images: [
        {
          url:
            'images.asos-media.com/products/eastpak-springer-grune-gurteltasche-aus-netzstoff-2-l/13653434-1-green',
          type: 'Standard1',
          colourWayId: 16555119,
          colourCode: 'GR1',
          colour: 'Green',
          isPrimary: true,
        },
        {
          url:
            'images.asos-media.com/products/eastpak-springer-grune-gurteltasche-aus-netzstoff-2-l/13653434-2',
          type: 'Standard2',
          colourWayId: null,
          colourCode: '',
          colour: '',
          isPrimary: false,
        },
        {
          url:
            'images.asos-media.com/products/eastpak-springer-grune-gurteltasche-aus-netzstoff-2-l/13653434-3',
          type: 'Standard3',
          colourWayId: null,
          colourCode: '',
          colour: '',
          isPrimary: false,
        },
        {
          url:
            'images.asos-media.com/products/eastpak-springer-grune-gurteltasche-aus-netzstoff-2-l/13653434-4',
          type: 'Standard4',
          colourWayId: null,
          colourCode: '',
          colour: '',
          isPrimary: false,
        },
      ],
      catwalk: [
        {
          url:
            'video.asos-media.com/products/eastpak-springer-grune-gurteltasche-aus-netzstoff-2-l/13653434-catwalk-AVS',
          colourWayId: 16555119,
          colourCode: 'GR1',
        },
      ],
      spinset: [],
      swatchSprite: [],
    },
    badges: [],
    info: {
      aboutMe:
        'fest gewebter Stoff<br>Vielseitig und zuverlässig<br><br>Obermaterial: 100% Polyester.',
      sizeAndFit: null,
      careInfo: 'Mit feuchtem Tuch oder Schwamm abwischen',
    },
    associatedProductGroups: [],
    shippingRestriction: null,
    price: {
      current: {
        value: 27.0,
        text: '27,00 €',
        versionId: 'REGP000002000400092139850000166983',
        conversionId: null,
      },
      previous: {
        value: 27.0,
        text: '27,00 €',
        versionId: 'REGP000002000400092139850000166983',
        conversionId: null,
      },
      rrp: {
        value: null,
        text: null,
        versionId: 'REGP000002000400092139850000166983',
        conversionId: null,
      },
      xrp: {
        value: 19.53,
        text: '19,53 €',
        versionId: 'REGP000002000400092139850000166983',
        conversionId: '0',
      },
      currency: 'EUR',
      isMarkedDown: false,
      isOutletPrice: false,
      startDateTime: '2019-10-02T22:43:25Z',
    },
    isDeadProduct: false,
  },
};
