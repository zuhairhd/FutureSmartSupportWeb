// Derived campaign values and shared offer copy. Edit ../pricing.json, not this file.
import pricing from '../pricing.json'
import { WHATSAPP_NUMBER } from './constants.js'

const toBaisa = n => Math.round(Number(n) * 1000)

export const PACKAGE = pricing.packagePrice
export const INSTALLATION = pricing.installationPrice
export const INSTALLATION_FREE = pricing.installationFreeDuringOffer
export const PORTAL_FREE_MONTHS = pricing.portalFreeMonths
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

const P = omr(PACKAGE), I = omr(INSTALLATION), M = PORTAL_FREE_MONTHS

// Complete offer in one sentence group, reused by the offer panel, Terms and the demo section.
export const OFFER_SUMMARY = {
  en: `MOJEEB package: OMR ${P}. Includes the MOJEEB AI appliance, an in-house PBX system, one Grandstream HT813 gateway and one IP desk phone. Standard installation (regular fixed price OMR ${I}): FREE during this limited-time offer. Portal subscription: FREE for the first ${M} months. ${VAT.en.statement} Additional phones, additional network work, external AI-provider usage, telecommunications charges and portal access after the free period are priced separately where applicable.`,
  ar: `باقة مُجيب: ${P} ر.ع. تشمل جهاز مُجيب الذكي ونظام سنترال داخلي (PBX) وبوابة Grandstream HT813 واحدة وهاتف IP مكتبياً واحداً. التركيب الاعتيادي (سعره الثابت المعتاد ${I} ر.ع): مجانًا خلال فترة العرض. اشتراك البوابة: مجانًا لأول ${M} أشهر. ${VAT.ar.statement} وتُسعّر الهواتف الإضافية وأعمال الشبكة الإضافية ورسوم مزوّد الذكاء الاصطناعي ورسوم الاتصالات والاشتراك في البوابة بعد الفترة المجانية بشكل منفصل عند انطباقها.`,
}

// Approved one-phone wording (brochure campaign).
export const PHONES_NOTE = {
  en: 'One IP phone included. Add more compatible phones and connect your team with internal extensions. Additional phones are not included.',
  ar: 'يشمل العرض هاتف IP واحدًا، مع إمكانية إضافة هواتف متوافقة أخرى وربط موظفي الشركة بتحويلات داخلية. الهواتف الإضافية غير مشمولة بالعرض.',
}

export const WHATSAPP_MESSAGE = {
  en: `Hello, I'm interested in the MOJEEB + PBX package for OMR ${P}. Please arrange a demonstration for my business.`,
  ar: `مرحبًا، أنا مهتم بباقة مُجيب مع نظام PBX بسعر ${P} ريالًا عُمانيًا، وأرغب في عرض توضيحي لشركتي.`,
}

export const whatsappHref = lang => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE[lang] || WHATSAPP_MESSAGE.en)}`
