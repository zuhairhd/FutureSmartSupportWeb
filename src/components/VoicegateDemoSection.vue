<template>
  <section id="demo" class="section vg-demo-section">
    <div class="container vg-demo-grid">
      <div class="vg-demo-copy">
        <p class="section-label">{{ t('voicegateDemo.demo.label') }}</p>
        <h2 class="section-title">{{ t('voicegateDemo.demo.title') }}</h2>
        <p class="vg-demo-text">{{ t('voicegateDemo.demo.text') }}</p>
      </div>

      <div class="card form-card">
        <form v-if="!submitted" @submit.prevent="handleSubmit" novalidate>
          <div class="field">
            <label :for="'vg-name-' + uid">{{ t('voicegateDemo.demo.nameLabel') }}</label>
            <input :id="'vg-name-' + uid" type="text" v-model="form.name" required dir="auto" />
          </div>
          <div class="field">
            <label :for="'vg-company-' + uid">{{ t('voicegateDemo.demo.companyLabel') }}</label>
            <input :id="'vg-company-' + uid" type="text" v-model="form.company" required dir="auto" />
          </div>
          <div class="field">
            <label :for="'vg-phone-' + uid">{{ t('voicegateDemo.demo.phoneLabel') }}</label>
            <input :id="'vg-phone-' + uid" type="tel" v-model="form.phone" required dir="auto" />
          </div>
          <div class="field">
            <label :for="'vg-email-' + uid">{{ t('voicegateDemo.demo.emailLabel') }}</label>
            <input :id="'vg-email-' + uid" type="email" v-model="form.email" required dir="auto" />
          </div>
          <div class="field">
            <label :for="'vg-btype-' + uid">{{ t('voicegateDemo.demo.businessTypeLabel') }}</label>
            <select :id="'vg-btype-' + uid" v-model="form.businessType" required dir="auto">
              <option value="" disabled>{{ t('voicegateDemo.demo.businessTypePlaceholder') }}</option>
              <option v-for="type in t('voicegateDemo.demo.businessTypes', [])" :key="type" :value="type">{{ type }}</option>
            </select>
          </div>
          <div class="field">
            <label :for="'vg-message-' + uid">{{ t('voicegateDemo.demo.messageLabel') }}</label>
            <textarea :id="'vg-message-' + uid" v-model="form.message" rows="4" dir="auto"></textarea>
          </div>
          <p class="form-note">{{ t('voicegateDemo.demo.note') }}</p>
          <button type="submit" class="btn btn-primary submit-btn">
            {{ t('voicegateDemo.demo.submit') }}
          </button>
        </form>

        <div v-else class="success-state">
          <div class="success-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="28" height="28">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h3>{{ t('voicegateDemo.demo.successTitle') }}</h3>
          <p>{{ t('voicegateDemo.demo.successText') }}</p>
          <button class="btn btn-ghost" @click="reset">{{ t('voicegateDemo.demo.sendAnother') }}</button>
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

const form = ref({ name: '', company: '', phone: '', email: '', businessType: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  // TODO: No backend submission endpoint exists yet for this demo request form.
  // Wire this up before relying on it to capture real leads — e.g. a dedicated
  // /api/v1/public/demo-request/ endpoint, or extend the existing contact
  // endpoint used in ContactSection.vue (https://api.futuresmartsupport.com/api/v1/public/contact/).
  submitted.value = true
}

function reset() {
  form.value = { name: '', company: '', phone: '', email: '', businessType: '', message: '' }
  submitted.value = false
}
</script>

<style scoped>
.vg-demo-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 56px;
  align-items: start;
}

.vg-demo-text {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.75;
  margin: 0;
}

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
.field select,
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
.field select { cursor: pointer; }
.field input:focus,
.field select:focus,
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
.submit-btn { width: 100%; }

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
  .vg-demo-grid { grid-template-columns: 1fr; gap: 36px; }
}
@media (max-width: 640px) {
  .form-card { padding: 20px 16px; }
  .field input,
  .field select,
  .field textarea { font-size: 16px; padding: 10px 12px; }
  .vg-demo-text { font-size: 15px; }
  .success-state h3 { font-size: 18px; }
}
</style>
