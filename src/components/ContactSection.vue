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
            <input :id="'name-' + uid" type="text" name="name" v-model="form.name" required dir="auto" />
          </div>
          <div class="field">
            <label :for="'email-' + uid">{{ t('contact.emailFieldLabel') }}</label>
            <input :id="'email-' + uid" type="email" name="email" v-model="form.email" required dir="auto" />
          </div>
          <div class="field">
            <label :for="'company-' + uid">{{ t('contact.companyLabel') }}</label>
            <input :id="'company-' + uid" type="text" name="company" v-model="form.company" dir="auto" />
          </div>
          <div class="field">
            <label :for="'message-' + uid">{{ t('contact.messageLabel') }}</label>
            <textarea :id="'message-' + uid" name="message" v-model="form.message" rows="5" required dir="auto"></textarea>
          </div>
          <p v-if="errorMsg" class="form-error">{{ errorMsg }}</p>
          <p class="form-note">{{ t('contact.note') }}</p>
          <button type="submit" class="btn btn-primary submit-btn" :disabled="submitting">
            {{ submitting ? t('contact.submitting') : t('contact.submit') }}
          </button>
        </form>

        <div v-else class="success-state">
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

const { t } = useLanguage()
const uid = Math.random().toString(36).slice(2, 7)

const form = ref({ name: '', email: '', company: '', message: '' })
const submitting = ref(false)
const submitted = ref(false)
const errorMsg = ref('')

async function handleSubmit() {
  submitting.value = true
  errorMsg.value = ''
  try {
    const data = new FormData()
    Object.entries(form.value).forEach(([k, v]) => data.append(k, v))
    const res = await fetch('https://formspree.io/f/xwproqvw', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    if (res.ok) {
      submitted.value = true
    } else {
      throw new Error('server')
    }
  } catch {
    errorMsg.value = t('contact.errorText')
  } finally {
    submitting.value = false
  }
}

function reset() {
  form.value = { name: '', email: '', company: '', message: '' }
  submitted.value = false
  errorMsg.value = ''
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
  background: rgba(255,255,255,0.03);
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
</style>
