// Derived campaign values and shared offer copy. Edit ../pricing.json, not this file.
import pricing from '../pricing.json'
import { PHONE_URL } from './constants.js'

const toBaisa = n => Math.round(Number(n) * 1000)

export const PACKAGE = pricing.packagePrice
export const INSTALLATION = pricing.installationPrice
export const INSTALLATION_FREE = pricing.installationFreeDuringOffer
export const PORTAL_FREE_MONTHS = pricing.portalFreeMonths
export const PORTAL_MONTHLY = pricing.portalMonthly
export const AI_PLAN_MONTHLY = pricing.aiPlanMonthly
export const AI_PLAN_MINUTES = pricing.aiPlanMinutes
export const PRICE_GUARANTEE_MONTHS = pricing.priceGuaranteeMonths
export const INCLUDED_PHONES = pricing.includedIpPhones
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

const P = omr(PACKAGE), M = PORTAL_FREE_MONTHS, PM = omr(PORTAL_MONTHLY), A = omr(AI_PLAN_MONTHLY), MIN = AI_PLAN_MINUTES

// Complete offer in one sentence group, reused by the offer panel, Terms and the demo section.
export const OFFER_SUMMARY = {
  en: `MOJEEB package: OMR ${P} one-time, no VAT added, standard installation free. Includes the MOJEEB appliance, phone-line gateway and one IP desk phone with in-house PBX. Business Portal + CRM: ${M} months free, then OMR ${PM} a month with remote technical support. AI plan: OMR ${A} a month for ${MIN} minutes, or use your own AI account. ${VAT.en.statement} Extra phones, cabling and non-standard work are quoted separately.`,
  ar: `باقة مُجيب: ${P} ر.ع. دفعة واحدة، دون ضريبة مضافة، والتركيب القياسي مجاني. تشمل جهاز مُجيب وبوابة خط الهاتف وهاتفاً مكتبياً واحداً مع سنترال داخلي. بوابة الأعمال + CRM: ${M} أشهر مجاناً، ثم ${PM} ر.ع. شهرياً مع الدعم الفني عن بُعد. خطة الذكاء الاصطناعي: ${A} ر.ع. شهرياً لكل ${MIN} دقيقة، أو استخدم حسابك الخاص. ${VAT.ar.statement} الهواتف الإضافية والتمديدات والأعمال غير القياسية تُسعَّر منفصلة.`,
}

// Approved one-phone wording (brochure campaign).
export const PHONES_NOTE = {
  en: 'One IP phone included. Add more compatible phones and connect your team with internal extensions. Additional phones are not included.',
  ar: 'يشمل العرض هاتف IP واحدًا، مع إمكانية إضافة هواتف متوافقة أخرى وربط موظفي الشركة بتحويلات داخلية. الهواتف الإضافية غير مشمولة بالعرض.',
}

export const phoneHref = () => PHONE_URL
