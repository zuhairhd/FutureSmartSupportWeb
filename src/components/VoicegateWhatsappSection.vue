<template>
  <section id="whatsapp" class="section vg-whatsapp-section">
    <div class="container vg-whatsapp-inner">
      <p class="section-label">{{ t('voicegateDemo.whatsapp.label') }}</p>
      <h2 class="section-title">{{ t('voicegateDemo.whatsapp.title') }}</h2>
      <p class="vg-whatsapp-text">{{ t('voicegateDemo.whatsapp.text') }}</p>
      <a :href="whatsappUrl" target="_blank" rel="noopener" class="btn btn-primary vg-whatsapp-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="17" height="17" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
        {{ t('voicegateDemo.whatsapp.button') }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'
import { WHATSAPP_URL } from '../constants.js'

const { t } = useLanguage()
const whatsappUrl = WHATSAPP_URL
</script>

<style scoped>
.vg-whatsapp-section {
  background: radial-gradient(ellipse 900px 400px at 50% 50%, rgba(111,191,115,0.06), transparent 70%);
  text-align: center;
}

.vg-whatsapp-inner {
  max-width: 560px;
  margin: 0 auto;
}

.vg-whatsapp-text {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.7;
  margin: 0 0 28px;
}

.vg-whatsapp-btn {
  padding: 13px 26px;
  font-size: 16px;
}
.vg-whatsapp-btn svg { flex-shrink: 0; }

@media (max-width: 640px) {
  .vg-whatsapp-text { font-size: 15px; }
  .vg-whatsapp-btn { width: 100%; }
}
</style>
