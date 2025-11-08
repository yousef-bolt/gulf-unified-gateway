export interface Country {
  code: string;
  name: string;
  nameAr: string;
  currency: string;
  locale: string;
  flag: string;
  primaryColor: string;
  secondaryColor: string;
}

export const COUNTRIES: Country[] = [
  {
    code: "SA",
    name: "Saudi Arabia",
    nameAr: "المملكة العربية السعودية",
    currency: "SAR",
    locale: "ar-SA",
    flag: "🇸🇦",
    primaryColor: "hsl(210 95% 50%)",
    secondaryColor: "hsl(140 70% 45%)",
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    nameAr: "الإمارات العربية المتحدة",
    currency: "AED",
    locale: "ar-AE",
    flag: "🇦🇪",
    primaryColor: "hsl(0 75% 45%)",
    secondaryColor: "hsl(140 65% 40%)",
  },
  {
    code: "KW",
    name: "Kuwait",
    nameAr: "دولة الكويت",
    currency: "KWD",
    locale: "ar-KW",
    flag: "🇰🇼",
    primaryColor: "hsl(210 85% 50%)",
    secondaryColor: "hsl(140 70% 45%)",
  },
  {
    code: "QA",
    name: "Qatar",
    nameAr: "دولة قطر",
    currency: "QAR",
    locale: "ar-QA",
    flag: "🇶🇦",
    primaryColor: "hsl(350 85% 40%)",
    secondaryColor: "hsl(40 90% 55%)",
  },
  {
    code: "OM",
    name: "Oman",
    nameAr: "سلطنة عمان",
    currency: "OMR",
    locale: "ar-OM",
    flag: "🇴🇲",
    primaryColor: "hsl(0 80% 50%)",
    secondaryColor: "hsl(140 65% 40%)",
  },
  {
    code: "BH",
    name: "Bahrain",
    nameAr: "مملكة البحرين",
    currency: "BHD",
    locale: "ar-BH",
    flag: "🇧🇭",
    primaryColor: "hsl(0 85% 50%)",
    secondaryColor: "hsl(0 0% 95%)",
  },
];

export const getCountryByCode = (code: string): Country | undefined => {
  return COUNTRIES.find((c) => c.code === code);
};

export const formatCurrency = (amount: number, currency: string): string => {
  const currencySymbols: Record<string, string> = {
    SAR: "ر.س",
    AED: "د.إ",
    KWD: "د.ك",
    QAR: "ر.ق",
    OMR: "ر.ع",
    BHD: "د.ب",
  };
  
  return `${amount.toLocaleString("ar")} ${currencySymbols[currency] || currency}`;
};

export const getPhoneNumberFormat = (countryCode: string): { placeholder: string; pattern: string; prefix: string } => {
  const formats: Record<string, { placeholder: string; pattern: string; prefix: string }> = {
    SA: {
      placeholder: "+966 5X XXX XXXX",
      pattern: "^\\+966[0-9]{9}$",
      prefix: "+966"
    },
    AE: {
      placeholder: "+971 5X XXX XXXX",
      pattern: "^\\+971[0-9]{9}$",
      prefix: "+971"
    },
    KW: {
      placeholder: "+965 XXXX XXXX",
      pattern: "^\\+965[0-9]{8}$",
      prefix: "+965"
    },
    QA: {
      placeholder: "+974 XXXX XXXX",
      pattern: "^\\+974[0-9]{8}$",
      prefix: "+974"
    },
    OM: {
      placeholder: "+968 XXXX XXXX",
      pattern: "^\\+968[0-9]{8}$",
      prefix: "+968"
    },
    BH: {
      placeholder: "+973 XXXX XXXX",
      pattern: "^\\+973[0-9]{8}$",
      prefix: "+973"
    },
  };
  
  return formats[countryCode] || formats.SA;
};

export const getCountryCodeFromServiceKey = (serviceKey: string): string => {
  const key = serviceKey.toLowerCase();
  
  // Check for country codes in service key
  if (key.includes('kw') || key.includes('kuwait')) return 'KW';
  if (key.includes('qa') || key.includes('qatar')) return 'QA';
  if (key.includes('om') || key.includes('oman')) return 'OM';
  if (key.includes('bh') || key.includes('bahrain')) return 'BH';
  if (key.includes('ae') || key.includes('uae') || key.includes('emirates')) return 'AE';
  if (key.includes('sa') || key.includes('saudi')) return 'SA';
  
  // Default to Saudi Arabia
  return 'SA';
};
