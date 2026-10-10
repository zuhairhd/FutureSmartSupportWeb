<template>
  <section id="contact" class="section contact-section">
    <div class="container contact-grid">
      <div class="contact-copy">
        <p class="section-label">{{ t('contact.label') }}</p>
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="contact-sub">{{ t('contact.sub') }}</p>
        <p class="contact-email">
          {{ t('contact.emailLabel') }}
          <a href="mailto:majid@FutureSmartSupport.com">majid@FutureSmartSupport.com</a>
        </p>
      </div>

      <div class="card form-card">
        <form v-if="!submitted" @submit.prevent="handleSubmit" novalidate>
          <div class="field">
            <label :for="'name-' + uid">{{ t('contact.nameLabel') }}</label>
            <input :id="'name-' + uid" type="text" name="name" v-model="form.name" :aria-invalid="!!fieldErrors.name" required dir="auto" autocomplete="name" />
            <small v-if="fieldErrors.name" class="field-error">{{ fieldErrors.name }}</small>
          </div>
          <div class="field">
            <label :for="'email-' + uid">{{ t('contact.emailFieldLabel') }}</label>
            <input :id="'email-' + uid" type="email" name="email" v-model="form.email" :aria-invalid="!!fieldErrors.email" required dir="ltr" autocomplete="email" />
            <small v-if="fieldErrors.email" class="field-error">{{ fieldErrors.email }}</small>
          </div>
          <div class="field">
            <label :for="'company-' + uid">{{ t('contact.companyLabel') }}</label>
            <input :id="'company-' + uid" type="text" name="company" v-model="form.company" dir="auto" />
          </div>
          <div class="field">
            <label :for="'message-' + uid">{{ t('contact.messageLabel') }}</label>
            <textarea :id="'message-' + uid" name="message" v-model="form.message" :aria-invalid="!!fieldErrors.message" rows="5" required dir="auto"></textarea>
            <small v-if="fieldErrors.message" class="field-error">{{ fieldErrors.message }}</small>
          </div>
          <div class="visually-hidden" aria-hidden="true">
            <label :for="'website-' + uid">Website</label>
            <input :id="'website-' + uid" type="text" v-model="form.website" tabindex="-1" autocomplete="off" />
          </div>
          <p v-if="errorMsg" class="form-error" role="alert">{{ errorMsg }}</p>
          <p class="form-note">{{ t('contact.note') }}</p>
          <button type="submit" class="btn btn-primary submit-btn" :disabled="submitting">
            {{ submitting ? t('contact.submitting') : t('contact.submit') }}
          </button>
        </form>

        <div v-else class="success-state" role="status">
          <div class="success-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="28" height="28">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h3>{{ t('contact.successTitle') }}</h3>
          <p>{{ t('contact.successText') }}</p>
          <button class="btn btn-ghost" @click="reset">{{ t('contact.sendAnother') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { useContactSubmit, formError, EMAIL_RE, MIN_MESSAGE_LENGTH } from '../composables/useContactSubmit.js'

const { t, lang } = useLanguage()
const { submitting, submit } = useContactSubmit()
const uid = Math.random().toString(36).slice(2, 7)

const form = ref({ name: '', email: '', company: '', message: '', website: '' })
const submitted = ref(false)
const errorMsg = ref('')
const fieldErrors = ref({})

function validate() {
  const f = form.value, e = {}, L = lang.value
  if (!f.name.trim()) e.name = formError(L, 'name')
  if (!EMAIL_RE.test(f.email.trim())) e.email = formError(L, 'email')
  if (f.message.trim().length < MIN_MESSAGE_LENGTH) e.message = formError(L, 'message')
  fieldErrors.value = e
  return Object.keys(e).length === 0
}

async function handleSubmit() {
  if (submitting.value) return
  errorMsg.value = ''
  if (!validate()) { errorMsg.value = formError(lang.value, 'invalid'); return }
  const result = await submit({
    ...form.value,
    language: lang.value,
    source: 'marketing_website',
  })
  if (result.ok) { submitted.value = true; return }
  if (result.reason === 'busy') return
  if (result.reason === 'invalid') {
    const fe = result.fields || {}
    fieldErrors.value = {
      ...(fe.name && { name: formError(lang.value, 'name') }),
      ...(fe.email && { email: formError(lang.value, 'email') }),
      ...(fe.message && { message: formError(lang.value, 'message') }),
    }
  }
  errorMsg.value = result.reason === 'server' ? t('contact.errorText') : formError(lang.value, result.reason)
}

function reset() {
  form.value = { name: '', email: '', company: '', message: '', website: '' }
  submitted.value = false
  errorMsg.value = ''
  fieldErrors.value = {}
}
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 56px;
  align-items: start;
}

.contact-sub {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.7;
  margin: 0 0 20px;
}
.contact-email {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}
.contact-email a {
  color: var(--brand);
  text-decoration: underline;
  /* Long email addresses must wrap rather than overflow */
  overflow-wrap: break-word;
  word-break: break-all;
}
.contact-email a:hover { opacity: 0.85; }

/* Form */
.form-card { padding: 28px; }

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
}
.field label {
  font-size: 13px;
  color: var(--muted);
  font-weight: 500;
}
.field input,
.field textarea {
  width: 100%;
  padding: 11px 14px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--fg);
  font-family: inherit;
  font-size: 15px;
  transition: border-color 0.2s;
  resize: vertical;
}
.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--brand);
}

.form-note {
  font-size: 12px;
  color: var(--muted);
  margin: 0 0 16px;
  line-height: 1.5;
}
.field-error { font-size: 12px; color: #b62133; }
.field input[aria-invalid="true"],
.field textarea[aria-invalid="true"] { border-color: var(--error); }
.form-error {
  font-size: 13px;
  color: var(--error);
  margin: 0 0 12px;
  line-height: 1.5;
}
.submit-btn { width: 100%; }

/* Success state */
.success-state {
  text-align: center;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.success-check {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(111,191,115,0.15);
  border: 1.5px solid var(--success);
  display: grid;
  place-items: center;
  color: var(--success);
}
.success-state h3 { margin: 0; font-size: 20px; color: var(--success); }
.success-state p { color: var(--muted); margin: 0; font-size: 15px; }

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 36px; }
}
@media (max-width: 640px) {
  .form-card { padding: 20px 16px; }
  /* 16px prevents iOS auto-zoom on input focus */
  .field input,
  .field textarea { font-size: 16px; padding: 10px 12px; }
  .contact-sub { font-size: 15px; }
  .success-state h3 { font-size: 18px; }
}
</style>
