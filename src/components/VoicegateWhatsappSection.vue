<template>
  <section id="whatsapp" class="section vg-whatsapp-section">
    <div class="container vg-whatsapp-inner">
      <p class="section-label">{{ t('voicegateDemo.whatsapp.label') }}</p>
      <h2 class="section-title">{{ t('voicegateDemo.whatsapp.title') }}</h2>
      <p class="vg-whatsapp-text">{{ t('voicegateDemo.whatsapp.text') }}</p>
      <a :href="PHONE_URL" class="btn btn-primary vg-whatsapp-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="17" height="17" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        {{ t('voicegateDemo.whatsapp.button') }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'
import { PHONE_URL } from '../constants.js'

const { t } = useLanguage()
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
