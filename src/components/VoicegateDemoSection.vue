<template>
  <section id="demo" class="section vg-demo-section">
    <div class="container vg-demo-grid">
      <div class="vg-demo-copy">
        <p class="section-label">{{ t('voicegateDemo.demo.label') }}</p>
        <h2 class="section-title">{{ t('voicegateDemo.demo.title') }}</h2>
        <p class="vg-demo-text">{{ t('voicegateDemo.demo.text') }}</p>
        <div class="vg-offer-note">
          <span class="vg-offer-price" dir="ltr">{{ omr(PACKAGE) }} <small>{{ lang === 'ar' ? 'ر.ع' : 'OMR' }}</small></span>
          <span>{{ lang === 'ar' ? `عرض لفترة محدودة · مُجيب مع نظام PBX مدمج · التركيب مجاناً (بقيمة ${omr(INSTALLATION)} ر.ع) · البوابة مجاناً لمدة ${PORTAL_FREE_MONTHS} أشهر (بقيمة ${omr(PORTAL_VALUE)} ر.ع)` : `Limited-time offer · MOJEEB with built-in PBX · FREE installation (worth OMR ${omr(INSTALLATION)}) · ${PORTAL_FREE_MONTHS}-month portal FREE (worth OMR ${omr(PORTAL_VALUE)})` }}</span>
        </div>
        <p class="vg-demo-support">{{ lang === 'ar' ? 'للاستفسار الفوري اتصل بنا، وسيرد عليك مُجيب.' : 'For an immediate enquiry, call us. Mojeeb answers.' }}</p>
        <a :href="phoneHref()" class="btn btn-ghost vg-wa">
          <MarketingIcon name="phone" :size="18" />
          <span>{{ lang === 'ar' ? 'اتصل بنا' : 'Call us' }} <bdi dir="ltr">+968 2420 2829</bdi></span>
        </a>
      </div>
      <div class="card form-card">
        <form v-if="!submitted" @submit.prevent="handleSubmit" novalidate>
          <div class="field" :class="{ invalid: errors.name }">
            <label :for="id('name')">{{ t('voicegateDemo.demo.nameLabel') }} <span aria-hidden="true">*</span></label>
            <input :id="id('name')" v-model.trim="form.name" type="text" autocomplete="name" maxlength="200" required :aria-invalid="!!errors.name" :aria-describedby="errors.name ? id('name-err') : null" />
            <small v-if="errors.name" :id="id('name-err')" class="field-error">{{ errors.name }}</small>
          </div>
          <div class="field" :class="{ invalid: errors.company }">
            <label :for="id('company')">{{ t('voicegateDemo.demo.companyLabel') }} <span aria-hidden="true">*</span></label>
            <input :id="id('company')" v-model.trim="form.company" type="text" autocomplete="organization" maxlength="200" required :aria-invalid="!!errors.company" :aria-describedby="errors.company ? id('company-err') : null" />
            <small v-if="errors.company" :id="id('company-err')" class="field-error">{{ errors.company }}</small>
          </div>
          <div class="field-row">
            <div class="field" :class="{ invalid: errors.phone }">
              <label :for="id('phone')">{{ t('voicegateDemo.demo.phoneLabel') }} <span aria-hidden="true">*</span></label>
              <input :id="id('phone')" v-model.trim="form.phone" type="tel" autocomplete="tel" inputmode="tel" maxlength="30" required dir="ltr" :aria-invalid="!!errors.phone" :aria-describedby="errors.phone ? id('phone-err') : null" />
              <small v-if="errors.phone" :id="id('phone-err')" class="field-error">{{ errors.phone }}</small>
            </div>
            <div class="field" :class="{ invalid: errors.email }">
              <label :for="id('email')">{{ t('voicegateDemo.demo.emailLabel') }} <span aria-hidden="true">*</span></label>
              <input :id="id('email')" v-model.trim="form.email" type="email" autocomplete="email" maxlength="200" required dir="ltr" :aria-invalid="!!errors.email" :aria-describedby="errors.email ? id('email-err') : null" />
              <small v-if="errors.email" :id="id('email-err')" class="field-error">{{ errors.email }}</small>
            </div>
          </div>
          <div class="field" :class="{ invalid: errors.businessType }">
            <label :for="id('btype')">{{ t('voicegateDemo.demo.businessTypeLabel') }} <span aria-hidden="true">*</span></label>
            <select :id="id('btype')" v-model="form.businessType" required :aria-invalid="!!errors.businessType" :aria-describedby="errors.businessType ? id('btype-err') : null">
              <option value="" disabled>{{ t('voicegateDemo.demo.businessTypePlaceholder') }}</option>
              <option v-for="type in t('voicegateDemo.demo.businessTypes', [])" :key="type" :value="type">{{ type }}</option>
            </select>
            <small v-if="errors.businessType" :id="id('btype-err')" class="field-error">{{ errors.businessType }}</small>
          </div>
          <div class="field">
            <label :for="id('message')">{{ t('voicegateDemo.demo.messageLabel') }}</label>
            <textarea :id="id('message')" v-model.trim="form.message" rows="4" maxlength="5000"></textarea>
          </div>
          <div class="visually-hidden" aria-hidden="true">
            <label :for="id('site')">Website</label>
            <input :id="id('site')" v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
          </div>
          <p class="form-note">{{ t('voicegateDemo.demo.note') }}</p>
          <p v-if="errorMessage" class="form-error" role="alert">{{ errorMessage }}</p>
          <button type="submit" class="btn btn-primary submit-btn" :disabled="submitting" :aria-busy="submitting">
            <span v-if="submitting" class="spinner" aria-hidden="true"></span>
            {{ submitting ? (lang === 'ar' ? 'جارٍ الإرسال...' : 'Sending…') : t('voicegateDemo.demo.submit') }}
          </button>
        </form>
        <div v-else class="success-state" role="status" tabindex="-1" ref="successEl">
          <div class="success-check"><MarketingIcon name="check" :size="28" /></div>
          <h3>{{ t('voicegateDemo.demo.successTitle') }}</h3>
          <p>{{ t('voicegateDemo.demo.successText') }}</p>
          <button class="btn btn-ghost" @click="reset">{{ t('voicegateDemo.demo.sendAnother') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, nextTick } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { useContactSubmit, formError, EMAIL_RE } from '../composables/useContactSubmit.js'
import { PACKAGE, INSTALLATION, PORTAL_FREE_MONTHS, PORTAL_VALUE, omr, phoneHref } from '../pricing.js'
import MarketingIcon from './MarketingIcon.vue'

const { t, lang } = useLanguage()
const { submitting, submit } = useContactSubmit()
const id = (k) => `mojeb-demo-${k}`
const blank = () => ({ name: '', company: '', phone: '', email: '', businessType: '', message: '', website: '' })
const form = ref(blank())
const errors = ref({})
const submitted = ref(false)
const errorMessage = ref('')
const successEl = ref(null)

function validate() {
  const f = form.value, e = {}, L = lang.value
  if (!f.name) e.name = formError(L, 'name')
  if (!f.company) e.company = formError(L, 'required')
  if (f.phone.replace(/\D/g, '').length < 7) e.phone = L === 'ar' ? 'يرجى إدخال رقم هاتف صحيح.' : 'Please enter a valid phone number.'
  if (!EMAIL_RE.test(f.email)) e.email = formError(L, 'email')
  if (!f.businessType) e.businessType = formError(L, 'required')
  errors.value = e
  return Object.keys(e).length === 0
}

async function handleSubmit() {
  if (submitting.value) return
  errorMessage.value = ''
  if (!validate()) {
    errorMessage.value = formError(lang.value, 'invalid')
    await nextTick()
    document.querySelector('.vg-demo-section [aria-invalid="true"]')?.focus()
    return
  }
  const f = form.value
  // The public contact endpoint has no dedicated phone / business-type fields,
  // so they are carried in the message body (always > the 20-character minimum).
  const result = await submit({
    name: f.name,
    email: f.email,
    company: f.company,
    message: `MOJEEB demo request (pre-launch; OMR ${omr(PACKAGE)} MOJEEB + PBX package, free standard installation (normally OMR ${omr(INSTALLATION)}), ${PORTAL_FREE_MONTHS} months free portal)\nPhone: ${f.phone}\nBusiness type: ${f.businessType}\nMessage: ${f.message || '-'}`,
    website: f.website,
    language: lang.value,
    source: 'marketing_website',
  })
  if (result.ok) {
    submitted.value = true
    await nextTick()
    successEl.value?.focus()
    return
  }
  if (result.reason === 'busy') return
  if (result.reason === 'invalid') {
    const fe = result.fields || {}
    errors.value = {
      ...(fe.name && { name: formError(lang.value, 'name') }),
      ...(fe.email && { email: formError(lang.value, 'email') }),
      ...(fe.company && { company: formError(lang.value, 'required') }),
    }
  }
  errorMessage.value = formError(lang.value, result.reason)
}

function reset() { form.value = blank(); errors.value = {}; submitted.value = false; errorMessage.value = '' }
</script>
<style scoped>
.vg-demo-section { background:#edf8fb; }
.vg-demo-grid { display:grid; grid-template-columns:.9fr 1.1fr; gap:60px; align-items:start; }
.vg-demo-copy { padding-top:24px; }
.vg-demo-text { color:var(--muted); font-size:16px; line-height:1.8; margin:0 0 22px; }
.vg-offer-note { display:flex; align-items:center; gap:14px; flex-wrap:wrap; padding:14px 18px; border-radius:16px; background:linear-gradient(130deg,#009f9f,#08678c); color:#e4fffd; font-size:13px; font-weight:700; margin-bottom:22px; }
.vg-offer-price { font-size:30px; font-weight:900; color:#fff; letter-spacing:-.02em; line-height:1; }
.vg-offer-price small { font-size:14px; font-weight:800; }
.vg-demo-support { font-size:13px; color:var(--muted); margin:0 0 14px; }
.vg-wa { gap:8px; color:#0b6b52; border-color:#9fd9c5; background:#fff; }
.form-card { padding:32px; }
.field-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
.field { display:flex; flex-direction:column; gap:6px; margin-bottom:17px; min-width:0; }
.field label { font-size:13px; font-weight:700; }
.field label span { color:var(--brand-dark); }
.field input,.field select,.field textarea { width:100%; padding:12px 14px; font-size:15px; border:1px solid #cddfe9; background:#fff; color:var(--fg); border-radius:11px; resize:vertical; }
.field input:focus,.field select:focus,.field textarea:focus { outline:2px solid rgba(0,189,181,.28); border-color:var(--brand); }
.field.invalid input,.field.invalid select { border-color:var(--error); }
.field-error { color:#b62133; font-size:12px; }
.form-note { color:var(--muted); font-size:12px; margin:0 0 17px; }
.form-error { color:#b62133; background:#fff1f2; border:1px solid #f6c9cf; border-radius:10px; padding:10px 12px; font-size:13px; margin:0 0 16px; }
.submit-btn { width:100%; }
.spinner { width:16px; height:16px; border-radius:50%; border:2px solid rgba(6,35,54,.25); border-top-color:#062336; animation:spin .8s linear infinite; }
@keyframes spin { to { transform:rotate(360deg); } }
.success-state { display:flex; flex-direction:column; gap:14px; align-items:center; text-align:center; padding:28px 12px; outline:none; }
.success-check { display:grid; place-items:center; width:57px; height:57px; border-radius:50%; color:#047e72; background:#d8faf2; }
.success-state h3 { margin:0; }
.success-state p { margin:0 0 14px; color:var(--muted); }
@media(max-width:800px) { .vg-demo-grid { grid-template-columns:1fr; gap:32px; } .vg-demo-copy { padding:0; } }
@media(max-width:600px) { .form-card { padding:20px; } .field-row { grid-template-columns:1fr; gap:0; } .field input,.field select,.field textarea { font-size:16px; } }
</style>
