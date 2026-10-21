// Derived pricing values and shared pricing copy. Edit ../pricing.json, not this file.
import pricing from '../pricing.json'

const toBaisa = n => Math.round(Number(n) * 1000)

export const PACKAGE = pricing.packagePrice
export const INSTALLATION = pricing.installationPrice
export const TOTAL = (toBaisa(PACKAGE) + toBaisa(INSTALLATION)) / 1000
export const VAT_ADDED = pricing.vat.added

/** 599 -> '599.000' */
export const omr3 = n => (toBaisa(n) / 1000).toFixed(3)
/** 599 -> '599', 12.5 -> '12.500' */
export const omr = n => (toBaisa(n) % 1000 === 0 ? String(toBaisa(n) / 1000) : omr3(n))

const threshold = Number(pricing.vat.threshold).toLocaleString('en-US')
const fill = s => s.replaceAll('{threshold}', threshold)

export const VAT = {
  en: { statement: fill(pricing.vat.statement.en), short: pricing.vat.short.en, detail: fill(pricing.vat.detail.en) },
  ar: { statement: fill(pricing.vat.statement.ar), short: pricing.vat.short.ar, detail: fill(pricing.vat.detail.ar) },
}

// Approved customer-facing pricing summary (keep wording in sync with the commercial decision).
export const PRICE_SUMMARY = {
  en: `Mojeeb starter package: OMR ${omr(PACKAGE)}. Standard professional installation: OMR ${omr(INSTALLATION)} fixed. Total with standard installation: OMR ${omr(TOTAL)}. ${VAT.en.statement} Additional network work, external AI-provider usage, telecommunications charges and optional FSS Cloud services are priced separately where applicable.`,
  ar: `باقة مُجيب الأساسية: ${omr(PACKAGE)} ر.ع. التركيب الاحترافي الاعتيادي: ${omr(INSTALLATION)} ر.ع بسعر ثابت. الإجمالي مع التركيب الاعتيادي: ${omr(TOTAL)} ر.ع. ${VAT.ar.statement} وتُسعّر أعمال الشبكة الإضافية ورسوم مزوّد الذكاء الاصطناعي ورسوم الاتصالات وخدمات بوابة FSS السحابية الاختيارية بشكل منفصل عند انطباقها.`,
}
