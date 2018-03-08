const UnihanReadingType = {
  KOREAN: 'kKorean',
  CANTONESE: 'kCantonese',
  VIETNAMESE: 'kVietnamese',
  JAPANESE_KUN: 'kJapaneseKun',
  JAPANESE_ON: 'kJapaneseOn',
  HANGUL: 'kHangul',
  TANG: 'kTang',
  XHC1983: 'kXHC1983',
  HANYU_PINYIN: 'kHanyuPinyin',
  HANYU_SIMPLIFIED: 'hans',
  HANYU_TRADITIONAL: 'hant',
}

const UnihanVariantType = {
  Z_VARIANT: 'kZVariant',
  SEMANTIC_VARIANT: 'kSemanticVariant',
  SPECIALIZED_SEMANTIC_VARIANT: 'kSpecializedSemanticVariant',
  SIMPLIFIED_VARIANT: 'kSimplifiedVariant',
  TRADITIONAL_VARIANT: 'kTraditionalVariant',
}

module.exports = {
  UnihanVariantType,
  UnihanReadingType
}