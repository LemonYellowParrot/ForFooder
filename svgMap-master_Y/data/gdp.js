var svgMapDataGPD = {
  data: {
    gdp: {
      name: 'GDP per capita',
      format: '{0} USD',
      thousandSeparator: ',',
      thresholdMax: 50000,
      thresholdMin: 1000
    },
    change: {
      name: 'Change to year before',
      format: '{0} %'
    },
    gdpAdjusted: {
      name: 'Purchasing Power Parity',
      format: '{0} USD',
      thousandSeparator: ',',
      thresholdMax: 50000,
      thresholdMin: 1000
    },
    changeAdjusted: {
      name: 'Change to year before',
      format: '{0} %'
    }
  },
  applyData: 'gdpAdjusted',
  values: {
    US: {},//United States
    CA: {},//Canada
    MX: {}, //Mexico
    HU: {}, //Hungary
    CZ: {}, //Czech Republic
    RU: {}, //Russia
    RO: {}, //Romania
    BG: {}, //Bulgaria
    DK: {}, //Denmark
    SE: {}, // Sweden
    NO: {}, //Norway
    IE: {}, // Ireland
    FR: {}, //France
    NL: {},//Netherlands
    BE: {}, //Belgium
    AU: {}, //Austria
    DE: {}, //Germany
    ES: {}, //Spain
    MA: {}, //Morocco
    IT: {}, //Italy
    GR: {}, //Greece
    PT: {}, //Portugal
    PE: {}, //Peru
    BR: {}, //Brazil
    VE: {}, //Venezuela
    CL: {}, //Chile
    AR: {}, //Argentina
    KR: {}, //Korea(South, North)
    CN: {}, //China
    JP: {}, //Japan
    TR: {}, //Turkey
    SA: {}, //Saudi Arabia
    LB: {}, //Lebanon
    IR: {}, //Iran
    JO: {},//Jordan
    IQ: {},//Iraq
    AZ: {},//Azerbaijan
    UZ: {},//Uzbekistan
    PK: {},//Pakistan
    KZ: {},//Kazakhstan
    TH: {}, //Thailand
    VN: {}, //Vietnam
    PH: {}, //Philippines
    MY: {}, //Malaysia
    IN: {}, //India
    SG: {}, //Singapore
    EG: {}, //Egypt
    ET: {}, //Ethiopia
    KE: {}, //Kenya
    CD: {},//'Congo'
    DZ: {},//'Algeria'
    NG: {},//'Nigeria'
    SD: {},//'Sudan'
    AO: {},//'Angola'
    ZM: {},// 'Zambia'
    AU: {},//'Australia', 
    PG: {},//'Papua New Guinea',
    GU: {},//'Guam',
    AS: {}// 'American Samoa',
    
  }
}