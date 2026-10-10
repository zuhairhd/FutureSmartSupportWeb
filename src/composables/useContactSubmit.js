import { ref } from 'vue'

export const CONTACT_API_URL = 'https://api.futuresmartsupport.com/api/v1/public/contact/'
// Mirrors MIN_MESSAGE_LEN in the backend serializer (public/serializers.py).
export const MIN_MESSAGE_LENGTH = 20
const TIMEOUT_MS = 15000

/**
 * Submits to the public contact endpoint.
 * Resolves { ok: true } only when the API returns HTTP 2xx with { success: true }.
 * Otherwise resolves { ok: false, reason } where reason is
 * 'invalid' (400, with `fields`), 'rate_limited' (429), 'network' or 'server'.
 * Never logs the payload: it contains customer personal data.
 */
export function useContactSubmit() {
  const submitting = ref(false)

  async function submit(payload) {
    if (submitting.value) return { ok: false, reason: 'busy' }
    submitting.value = true
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })
      const body = await res.json().catch(() => ({}))
      if (res.ok && body.success === true) return { ok: true }
      if (res.status === 400) return { ok: false, reason: 'invalid', fields: body.fields || {} }
      if (res.status === 429) return { ok: false, reason: 'rate_limited' }
      return { ok: false, reason: 'server' }
    } catch {
      return { ok: false, reason: 'network' }
    } finally {
      clearTimeout(timer)
      submitting.value = false
    }
  }

  return { submitting, submit }
}

const ERRORS = {
  en: {
    invalid: 'Please check the highlighted details and try again.',
    rate_limited: 'Too many requests were sent from this connection. Please try again later or contact us on WhatsApp.',
    network: 'We could not reach our server. Please check your connection and try again, or contact us on WhatsApp.',
    server: 'Your request could not be sent. Please try again or contact us on WhatsApp.',
    name: 'Please enter your name.',
    email: 'Please enter a valid email address.',
    message: `Please write at least ${MIN_MESSAGE_LENGTH} characters.`,
    required: 'This field is required.',
  },
  ar: {
    invalid: 'يرجى مراجعة البيانات المحددة والمحاولة مرة أخرى.',
    rate_limited: 'تم إرسال عدد كبير من الطلبات من هذا الاتصال. يرجى المحاولة لاحقاً أو التواصل معنا عبر واتساب.',
    network: 'تعذّر الاتصال بالخادم. يرجى التحقق من اتصالك والمحاولة مرة أخرى، أو التواصل معنا عبر واتساب.',
    server: 'تعذّر إرسال طلبك. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.',
    name: 'يرجى إدخال الاسم.',
    email: 'يرجى إدخال بريد إلكتروني صحيح.',
    message: `يرجى كتابة ${MIN_MESSAGE_LENGTH} حرفاً على الأقل.`,
    required: 'هذا الحقل مطلوب.',
  },
}

export function formError(lang, key) {
  return (ERRORS[lang] || ERRORS.en)[key]
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
