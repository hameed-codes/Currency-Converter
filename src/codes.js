const countryList = {
  AFN: "AF", // Afghan Afghani - Afghanistan
  ALL: "AL", // Albanian Lek - Albania
  DZD: "DZ", // Algerian Dinar - Algeria
  AOA: "AO", // Angolan Kwanza - Angola
  XCD: "AG", // East Caribbean Dollar - Antigua and Barbuda
  ARS: "AR", // Argentine Peso - Argentina
  AMD: "AM", // Armenian Dram - Armenia
  AUD: "AU", // Australian Dollar - Australia
  AZN: "AZ", // Azerbaijani Manat - Azerbaijan
  BSD: "BS", // Bahamian Dollar - Bahamas
  BHD: "BH", // Bahraini Dinar - Bahrain
  BDT: "BD", // Bangladeshi Taka - Bangladesh
  BBD: "BB", // Barbadian Dollar - Barbados
  BYN: "BY", // Belarusian Ruble - Belarus
  BZD: "BZ", // Belize Dollar - Belize
  XOF: "SN", // West African CFA Franc - Senegal (main rep)
  BTN: "BT", // Bhutanese Ngultrum - Bhutan
  BOB: "BO", // Bolivian Boliviano - Bolivia
  BAM: "BA", // Bosnia-Herzegovina Convertible Mark - Bosnia
  BWP: "BW", // Botswana Pula - Botswana
  BRL: "BR", // Brazilian Real - Brazil
  BND: "BN", // Brunei Dollar - Brunei
  BGN: "BG", // Bulgarian Lev - Bulgaria
  BIF: "BI", // Burundian Franc - Burundi
  CVE: "CV", // Cape Verdean Escudo - Cabo Verde
  KHR: "KH", // Cambodian Riel - Cambodia
  XAF: "CM", // Central African CFA Franc - Cameroon (main rep)
  CAD: "CA", // Canadian Dollar - Canada
  CDF: "CD", // Congolese Franc - Congo DRC
  CRC: "CR", // Costa Rican Colón - Costa Rica
  CUP: "CU", // Cuban Peso - Cuba
  CZK: "CZ", // Czech Koruna - Czech Republic
  DKK: "DK", // Danish Krone - Denmark
  DJF: "DJ", // Djiboutian Franc - Djibouti
  DOP: "DO", // Dominican Peso - Dominican Republic
  EGP: "EG", // Egyptian Pound - Egypt
  ERN: "ER", // Eritrean Nakfa - Eritrea
  EUR: "DE", // Euro - Germany (main rep)
  SZL: "SZ", // Swazi Lilangeni - Eswatini
  ETB: "ET", // Ethiopian Birr - Ethiopia
  FJD: "FJ", // Fijian Dollar - Fiji
  GMD: "GM", // Gambian Dalasi - Gambia
  GEL: "GE", // Georgian Lari - Georgia
  GHS: "GH", // Ghanaian Cedi - Ghana
  GTQ: "GT", // Guatemalan Quetzal - Guatemala
  GNF: "GN", // Guinean Franc - Guinea
  GYD: "GY", // Guyanese Dollar - Guyana
  HTG: "HT", // Haitian Gourde - Haiti
  HNL: "HN", // Honduran Lempira - Honduras
  HUF: "HU", // Hungarian Forint - Hungary
  ISK: "IS", // Icelandic Króna - Iceland
  INR: "IN", // Indian Rupee - India
  IDR: "ID", // Indonesian Rupiah - Indonesia
  IRR: "IR", // Iranian Rial - Iran
  IQD: "IQ", // Iraqi Dinar - Iraq
  ILS: "IL", // Israeli New Shekel - Israel
  JMD: "JM", // Jamaican Dollar - Jamaica
  JPY: "JP", // Japanese Yen - Japan
  JOD: "JO", // Jordanian Dinar - Jordan
  KZT: "KZ", // Kazakhstani Tenge - Kazakhstan
  KES: "KE", // Kenyan Shilling - Kenya
  KPW: "KP", // North Korean Won - North Korea
  KRW: "KR", // South Korean Won - South Korea
  KWD: "KW", // Kuwaiti Dinar - Kuwait
  KGS: "KG", // Kyrgyzstani Som - Kyrgyzstan
  LAK: "LA", // Lao Kip - Laos
  LBP: "LB", // Lebanese Pound - Lebanon
  LSL: "LS", // Lesotho Loti - Lesotho
  LRD: "LR", // Liberian Dollar - Liberia
  LYD: "LY", // Libyan Dinar - Libya
  CHF: "CH", // Swiss Franc - Switzerland
  MGA: "MG", // Malagasy Ariary - Madagascar
  MWK: "MW", // Malawian Kwacha - Malawi
  MYR: "MY", // Malaysian Ringgit - Malaysia
  MVR: "MV", // Maldivian Rufiyaa - Maldives
  MRU: "MR", // Mauritanian Ouguiya - Mauritania
  MUR: "MU", // Mauritian Rupee - Mauritius
  MXN: "MX", // Mexican Peso - Mexico
  MDL: "MD", // Moldovan Leu - Moldova
  MNT: "MN", // Mongolian Tögrög - Mongolia
  MAD: "MA", // Moroccan Dirham - Morocco
  MZN: "MZ", // Mozambican Metical - Mozambique
  MMK: "MM", // Myanmar Kyat - Myanmar
  NAD: "NA", // Namibian Dollar - Namibia
  NPR: "NP", // Nepalese Rupee - Nepal
  NZD: "NZ", // New Zealand Dollar - New Zealand
  NIO: "NI", // Nicaraguan Córdoba - Nicaragua
  NGN: "NG", // Nigerian Naira - Nigeria
  MKD: "MK", // Macedonian Denar - North Macedonia
  NOK: "NO", // Norwegian Krone - Norway
  OMR: "OM", // Omani Rial - Oman
  PKR: "PK", // Pakistani Rupee - Pakistan
  PAB: "PA", // Panamanian Balboa - Panama
  PGK: "PG", // Papua New Guinean Kina - Papua New Guinea
  PYG: "PY", // Paraguayan Guaraní - Paraguay
  PEN: "PE", // Peruvian Sol - Peru
  PHP: "PH", // Philippine Peso - Philippines
  PLN: "PL", // Polish Złoty - Poland
  QAR: "QA", // Qatari Riyal - Qatar
  RON: "RO", // Romanian Leu - Romania
  RUB: "RU", // Russian Ruble - Russia
  RWF: "RW", // Rwandan Franc - Rwanda
  WST: "WS", // Samoan Tālā - Samoa
  STN: "ST", // São Tomé and Príncipe Dobra - São Tomé
  SAR: "SA", // Saudi Riyal - Saudi Arabia
  RSD: "RS", // Serbian Dinar - Serbia
  SCR: "SC", // Seychellois Rupee - Seychelles
  SLL: "SL", // Sierra Leonean Leone - Sierra Leone
  SGD: "SG", // Singapore Dollar - Singapore
  SBD: "SB", // Solomon Islands Dollar - Solomon Islands
  SOS: "SO", // Somali Shilling - Somalia
  ZAR: "ZA", // South African Rand - South Africa
  SSP: "SS", // South Sudanese Pound - South Sudan
  LKR: "LK", // Sri Lankan Rupee - Sri Lanka
  SDG: "SD", // Sudanese Pound - Sudan
  SRD: "SR", // Surinamese Dollar - Suriname
  SEK: "SE", // Swedish Krona - Sweden
  SYP: "SY", // Syrian Pound - Syria
  TWD: "TW", // New Taiwan Dollar - Taiwan
  TJS: "TJ", // Tajikistani Somoni - Tajikistan
  TZS: "TZ", // Tanzanian Shilling - Tanzania
  THB: "TH", // Thai Baht - Thailand
  TOP: "TO", // Tongan Paʻanga - Tonga
  TTD: "TT", // Trinidad and Tobago Dollar - Trinidad
  TND: "TN", // Tunisian Dinar - Tunisia
  TRY: "TR", // Turkish Lira - Turkey
  TMT: "TM", // Turkmenistan Manat - Turkmenistan
  UGX: "UG", // Ugandan Shilling - Uganda
  UAH: "UA", // Ukrainian Hryvnia - Ukraine
  AED: "AE", // UAE Dirham - United Arab Emirates
  GBP: "GB", // British Pound - United Kingdom
  USD: "US", // US Dollar - United States
  UYU: "UY", // Uruguayan Peso - Uruguay
  UZS: "UZ", // Uzbekistani Som - Uzbekistan
  VUV: "VU", // Vanuatu Vatu - Vanuatu
  VES: "VE", // Venezuelan Bolívar - Venezuela
  VND: "VN", // Vietnamese Đồng - Vietnam
  YER: "YE", // Yemeni Rial - Yemen
  ZMW: "ZM", // Zambian Kwacha - Zambia
  ZWL: "ZW", // Zimbabwean Dollar - Zimbabwe

  // Territories
  AWG: "AW", // Aruban Florin - Aruba
  BMD: "BM", // Bermudian Dollar - Bermuda
  KYD: "KY", // Cayman Islands Dollar - Cayman Islands
  FKP: "FK", // Falkland Islands Pound - Falkland Islands
  GIP: "GI", // Gibraltar Pound - Gibraltar
  HKD: "HK", // Hong Kong Dollar - Hong Kong
  MOP: "MO", // Macanese Pataca - Macao
  XPF: "PF", // CFP Franc - French Polynesia
  SHP: "SH", // Saint Helena Pound - Saint Helena
  ANG: "CW", // Netherlands Antillean Guilder - Curaçao
};