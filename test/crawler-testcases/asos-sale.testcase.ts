/* eslint-disable max-len */
import { AsosCrawler } from '../../src/crawler/crawlers/asos.crawler';

export const asosTestCase = {
  crawlerType: AsosCrawler,

  url:
    'https://www.asos.com/de/river-island/river-island-kurze-wattierte-steppjacke-in-schwarz-mit-kunstpelz-an-der-kapuze/prd/12044209?clr=schwarz&colourWayId=16460403&SearchQuery=river+island+%E2%80%93+schwarze+steppjacke+mit+kapuze&SearchRedirect=true',

  sizes: [
    { id: '12044379', isAvailable: false, name: 'EU 32' },
    { id: '12044225', isAvailable: false, name: 'EU 34' },
    { id: '12044422', isAvailable: true, name: 'EU 36' },
    { id: '12044397', isAvailable: false, name: 'EU 38' },
    { id: '12044448', isAvailable: false, name: 'EU 40' },
    { id: '12044387', isAvailable: false, name: 'EU 42' },
    { id: '12044456', isAvailable: false, name: 'EU 44' },
  ],

  sizeChecks: [
    { size: '12044379', isAvailable: false, isLowInStock: false },
    { size: '12044422', isAvailable: true, isLowInStock: true },
  ],

  name:
    'River Island – Kurze, wattierte Steppjacke in Schwarz mit Kunstpelz an der Kapuze',

  priceChecks: [{ size: '12044379', price: 48.49 }],

  testResponse: {
    id: 12044209,
    name:
      'River Island – Kurze, wattierte Steppjacke in Schwarz mit Kunstpelz an der Kapuze',
    description:
      '<a href="/women/coats-jackets/cat/?cid=2641"><strong>Mantel</strong></a> von <a href="/women/a-to-z-of-brands/river-island/cat/?cid=12268"><strong>River Island</strong></a><ul>    <li>Es hat schon deine Aufmerksamkeit</li><li>Kapuze mit Kunstpelzbesatz</li><li>mit Reißverschluss</li><li>Taillengürtel</li><li>Seitentaschen</li><li>Normale Passform</li><li>Bestelle einfach deine übliche Größe</li></ul>',
    alternateNames: [
      {
        locale: 'en-GB',
        title:
          'River Island short quilted padded jacket with fur hood in black',
      },
      {
        locale: 'da-DK',
        title:
          'River Island - Sort, kort, foret jakke i vatteret stil med pelshætte',
      },
      {
        locale: 'de-DE',
        title:
          'River Island – Kurze, wattierte Steppjacke in Schwarz mit Kunstpelz an der Kapuze',
      },
      {
        locale: 'en-AU',
        title:
          'River Island short quilted padded jacket with fur hood in black',
      },
      {
        locale: 'en-US',
        title:
          'River Island short quilted padded jacket with fur hood in black',
      },
      {
        locale: 'es-ES',
        title:
          'Chaqueta acolchada corta con capucha con piel sintética de River Island',
      },
      {
        locale: 'fr-FR',
        title:
          'River Island - Doudoune courte matelassée avec capuche en fausse fourrure - Noir',
      },
      {
        locale: 'it-IT',
        title:
          'River Island - Piumino corto trapuntato con cappuccio con pelliccia sintetica nero',
      },
      {
        locale: 'nl-NL',
        title:
          'River Island - Kort gewatteerd jack met capuchon van bont in zwart',
      },
      {
        locale: 'pl-PL',
        title:
          'River Island - Czarna, krótka pikowana i ocieplana kurtka z futerkowym kapturem',
      },
      {
        locale: 'ru-RU',
        title:
          'Черная короткая стеганая дутая куртка с искусственным мехом на капюшоне River Island',
      },
      {
        locale: 'sv-SE',
        title: 'River Island – Svart kort vadderad jacka med pälshuva',
      },
    ],
    localisedData: null,
    gender: 'Women',
    productCode: '1456681',
    pdpLayout: null,
    brand: {
      brandId: 12983,
      name: 'River Island',
      description:
        '<a href="/women/a-to-z-of-brands/river-island/cat/?cid=12268"><strong>River Island</strong></a> begleitet dich von Party zu Party mit seinen trendigen Modellen. Freu dich auf ausgefallene Partykleider, feminine Details, auffallende Jacken und cooles Denim inklusive Skinny-Jeans und süßer Jeansshorts, genauso wie auf die trendsetzende Schuh- und Bademode.',
    },
    sizeGuide:
      'assets.asosservices.com/asos-ui/SizeGuides/2.0/size-guide.html?productType=1494&brand=12983&store=DE&division=7&sizeSchema=DE',
    isNoSize: false,
    isOneSize: false,
    isInStock: true,
    countryOfManufacture: null,
    webCategories: [
      {
        id: 2641,
      },
      {
        id: 15146,
      },
      {
        id: 16254,
      },
      {
        id: 21184,
      },
    ],
    variants: [
      {
        id: 12044379,
        name:
          'River Island – Kurze, wattierte Steppjacke in Schwarz mit Kunstpelz an der Kapuze',
        sizeId: 9525,
        brandSize: 'EU 32',
        sizeDescription: '',
        sizeOrder: 54,
        sku: '8426659',
        isLowInStock: false,
        isInStock: false,
        isAvailable: false,
        colourWayId: 16460403,
        colourCode: 'BK1',
        colour: 'Schwarz',
        price: {
          current: {
            value: 48.49,
            text: '48,49 €',
            versionId: 'CLRP000002000400084266590000166953',
            conversionId: null,
          },
          previous: {
            value: 97.99,
            text: '97,99 €',
            versionId: 'CLRP000002000400084266590000166953',
            conversionId: null,
          },
          rrp: {
            value: null,
            text: null,
            versionId: 'CLRP000002000400084266590000166953',
            conversionId: null,
          },
          xrp: {
            value: 35.07,
            text: '35,07 €',
            versionId: 'CLRP000002000400084266590000166953',
            conversionId: '0',
          },
          currency: 'EUR',
          isMarkedDown: true,
          isOutletPrice: false,
          startDateTime: '2020-01-27T15:48:04Z',
        },
        isPrimary: true,
      },
      {
        id: 12044225,
        name:
          'River Island – Kurze, wattierte Steppjacke in Schwarz mit Kunstpelz an der Kapuze',
        sizeId: 9521,
        brandSize: 'EU 34',
        sizeDescription: '',
        sizeOrder: 63,
        sku: '8426660',
        isLowInStock: false,
        isInStock: false,
        isAvailable: false,
        colourWayId: 16460403,
        colourCode: 'BK1',
        colour: 'Schwarz',
        price: {
          current: {
            value: 48.49,
            text: '48,49 €',
            versionId: 'CLRP000002000400084266600000166953',
            conversionId: null,
          },
          previous: {
            value: 97.99,
            text: '97,99 €',
            versionId: 'CLRP000002000400084266600000166953',
            conversionId: null,
          },
          rrp: {
            value: null,
            text: null,
            versionId: 'CLRP000002000400084266600000166953',
            conversionId: null,
          },
          xrp: {
            value: 35.07,
            text: '35,07 €',
            versionId: 'CLRP000002000400084266600000166953',
            conversionId: '0',
          },
          currency: 'EUR',
          isMarkedDown: true,
          isOutletPrice: false,
          startDateTime: '2020-01-27T15:48:04Z',
        },
        isPrimary: true,
      },
      {
        id: 12044422,
        name:
          'River Island – Kurze, wattierte Steppjacke in Schwarz mit Kunstpelz an der Kapuze',
        sizeId: 9520,
        brandSize: 'EU 36',
        sizeDescription: '',
        sizeOrder: 68,
        sku: '8426661',
        isLowInStock: true,
        isInStock: true,
        isAvailable: false,
        colourWayId: 16460403,
        colourCode: 'BK1',
        colour: 'Schwarz',
        price: {
          current: {
            value: 48.49,
            text: '48,49 €',
            versionId: 'CLRP000002000400084266610000166953',
            conversionId: null,
          },
          previous: {
            value: 97.99,
            text: '97,99 €',
            versionId: 'CLRP000002000400084266610000166953',
            conversionId: null,
          },
          rrp: {
            value: null,
            text: null,
            versionId: 'CLRP000002000400084266610000166953',
            conversionId: null,
          },
          xrp: {
            value: 35.07,
            text: '35,07 €',
            versionId: 'CLRP000002000400084266610000166953',
            conversionId: '0',
          },
          currency: 'EUR',
          isMarkedDown: true,
          isOutletPrice: false,
          startDateTime: '2020-01-27T15:48:04Z',
        },
        isPrimary: true,
      },
      {
        id: 12044397,
        name:
          'River Island – Kurze, wattierte Steppjacke in Schwarz mit Kunstpelz an der Kapuze',
        sizeId: 9522,
        brandSize: 'EU 38',
        sizeDescription: '',
        sizeOrder: 82,
        sku: '8426662',
        isLowInStock: false,
        isInStock: false,
        isAvailable: false,
        colourWayId: 16460403,
        colourCode: 'BK1',
        colour: 'Schwarz',
        price: {
          current: {
            value: 48.49,
            text: '48,49 €',
            versionId: 'CLRP000002000400084266620000166953',
            conversionId: null,
          },
          previous: {
            value: 97.99,
            text: '97,99 €',
            versionId: 'CLRP000002000400084266620000166953',
            conversionId: null,
          },
          rrp: {
            value: null,
            text: null,
            versionId: 'CLRP000002000400084266620000166953',
            conversionId: null,
          },
          xrp: {
            value: 35.07,
            text: '35,07 €',
            versionId: 'CLRP000002000400084266620000166953',
            conversionId: '0',
          },
          currency: 'EUR',
          isMarkedDown: true,
          isOutletPrice: false,
          startDateTime: '2020-01-27T15:48:04Z',
        },
        isPrimary: true,
      },
      {
        id: 12044448,
        name:
          'River Island – Kurze, wattierte Steppjacke in Schwarz mit Kunstpelz an der Kapuze',
        sizeId: 9523,
        brandSize: 'EU 40',
        sizeDescription: '',
        sizeOrder: 84,
        sku: '8426663',
        isLowInStock: false,
        isInStock: false,
        isAvailable: false,
        colourWayId: 16460403,
        colourCode: 'BK1',
        colour: 'Schwarz',
        price: {
          current: {
            value: 48.49,
            text: '48,49 €',
            versionId: 'CLRP000002000400084266630000166953',
            conversionId: null,
          },
          previous: {
            value: 97.99,
            text: '97,99 €',
            versionId: 'CLRP000002000400084266630000166953',
            conversionId: null,
          },
          rrp: {
            value: null,
            text: null,
            versionId: 'CLRP000002000400084266630000166953',
            conversionId: null,
          },
          xrp: {
            value: 35.07,
            text: '35,07 €',
            versionId: 'CLRP000002000400084266630000166953',
            conversionId: '0',
          },
          currency: 'EUR',
          isMarkedDown: true,
          isOutletPrice: false,
          startDateTime: '2020-01-27T15:48:04Z',
        },
        isPrimary: true,
      },
      {
        id: 12044387,
        name:
          'River Island – Kurze, wattierte Steppjacke in Schwarz mit Kunstpelz an der Kapuze',
        sizeId: 9526,
        brandSize: 'EU 42',
        sizeDescription: '',
        sizeOrder: 97,
        sku: '8426664',
        isLowInStock: false,
        isInStock: false,
        isAvailable: false,
        colourWayId: 16460403,
        colourCode: 'BK1',
        colour: 'Schwarz',
        price: {
          current: {
            value: 48.49,
            text: '48,49 €',
            versionId: 'CLRP000002000400084266640000166953',
            conversionId: null,
          },
          previous: {
            value: 97.99,
            text: '97,99 €',
            versionId: 'CLRP000002000400084266640000166953',
            conversionId: null,
          },
          rrp: {
            value: null,
            text: null,
            versionId: 'CLRP000002000400084266640000166953',
            conversionId: null,
          },
          xrp: {
            value: 35.07,
            text: '35,07 €',
            versionId: 'CLRP000002000400084266640000166953',
            conversionId: '0',
          },
          currency: 'EUR',
          isMarkedDown: true,
          isOutletPrice: false,
          startDateTime: '2020-01-27T15:48:04Z',
        },
        isPrimary: true,
      },
      {
        id: 12044456,
        name:
          'River Island – Kurze, wattierte Steppjacke in Schwarz mit Kunstpelz an der Kapuze',
        sizeId: 9524,
        brandSize: 'EU 44',
        sizeDescription: '',
        sizeOrder: 106,
        sku: '8426665',
        isLowInStock: false,
        isInStock: false,
        isAvailable: false,
        colourWayId: 16460403,
        colourCode: 'BK1',
        colour: 'Schwarz',
        price: {
          current: {
            value: 48.49,
            text: '48,49 €',
            versionId: 'CLRP000002000400084266650000166953',
            conversionId: null,
          },
          previous: {
            value: 97.99,
            text: '97,99 €',
            versionId: 'CLRP000002000400084266650000166953',
            conversionId: null,
          },
          rrp: {
            value: null,
            text: null,
            versionId: 'CLRP000002000400084266650000166953',
            conversionId: null,
          },
          xrp: {
            value: 35.07,
            text: '35,07 €',
            versionId: 'CLRP000002000400084266650000166953',
            conversionId: '0',
          },
          currency: 'EUR',
          isMarkedDown: true,
          isOutletPrice: false,
          startDateTime: '2020-01-27T15:48:04Z',
        },
        isPrimary: true,
      },
    ],
    media: {
      images: [
        {
          url:
            'images.asos-media.com/products/river-island-kurze-wattierte-steppjacke-in-schwarz-mit-kunstpelz-an-der-kapuze/12044209-1-black',
          type: 'Standard1',
          colourWayId: 16460403,
          colourCode: 'BK1',
          colour: 'Black',
          isPrimary: true,
        },
        {
          url:
            'images.asos-media.com/products/river-island-kurze-wattierte-steppjacke-in-schwarz-mit-kunstpelz-an-der-kapuze/12044209-2',
          type: 'Standard2',
          colourWayId: null,
          colourCode: '',
          colour: '',
          isPrimary: false,
        },
        {
          url:
            'images.asos-media.com/products/river-island-kurze-wattierte-steppjacke-in-schwarz-mit-kunstpelz-an-der-kapuze/12044209-3',
          type: 'Standard3',
          colourWayId: null,
          colourCode: '',
          colour: '',
          isPrimary: false,
        },
        {
          url:
            'images.asos-media.com/products/river-island-kurze-wattierte-steppjacke-in-schwarz-mit-kunstpelz-an-der-kapuze/12044209-4',
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
            'video.asos-media.com/products/river-island-kurze-wattierte-steppjacke-in-schwarz-mit-kunstpelz-an-der-kapuze/12044209-catwalk-AVS',
          colourWayId: 16460403,
          colourCode: 'BK1',
        },
      ],
      spinset: [],
      swatchSprite: [],
    },
    badges: [],
    info: {
      aboutMe:
        'weiches gewebtes Material<br>Ohne Stretchanteil<br><br><div>Rückseite: 100% Polyester, Futter: 100% Polyester, Hauptteil: 100% Polyurethane, Kunstpelz: 56% Modacryl, 44% Acryl.</div><br><br>',
      sizeAndFit:
        '<br>Model trägt EU-Größe 36 (UK-Größe 8, US-Größe 4)<br />Größe des Models: 179 cm / 5 Fuß 10,5 Zoll',
      careInfo:
        '<div>Nur hier für die Waschanleitung?</div><div>Jap, dachten wir uns schon.</div><div><br></div><div>So waschen wie auf dem Pflegeetikett angegeben</div>',
    },
    associatedProductGroups: [
      {
        id: 12044209,
        name: null,
        type: 'CTL',
        url:
          'api.asos.com/product/catalogue/v3/productgroups/ctl/12044209?store=DE',
      },
    ],
    shippingRestriction: null,
    price: {
      current: {
        value: 48.49,
        text: '48,49 €',
        versionId: 'CLRP000002000400084266640000166953',
        conversionId: null,
      },
      previous: {
        value: 97.99,
        text: '97,99 €',
        versionId: 'CLRP000002000400084266640000166953',
        conversionId: null,
      },
      rrp: {
        value: null,
        text: null,
        versionId: 'CLRP000002000400084266640000166953',
        conversionId: null,
      },
      xrp: {
        value: 35.07,
        text: '35,07 €',
        versionId: 'CLRP000002000400084266640000166953',
        conversionId: '0',
      },
      currency: 'EUR',
      isMarkedDown: true,
      isOutletPrice: false,
      startDateTime: '2020-01-27T15:48:04Z',
    },
    isDeadProduct: false,
  },
};
