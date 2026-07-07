<template>
  <section class="vg-hero">
    <div class="container vg-hero-inner">
      <p class="vg-eyebrow">{{ t('voicegateDemo.hero.eyebrow') }}</p>
      <h1>{{ t('voicegateDemo.hero.headline') }}</h1>
      <p class="vg-hero-sub">{{ t('voicegateDemo.hero.sub') }}</p>
      <div class="cta-row vg-cta-row">
        <router-link :to="{ path: '/voicegate-demo', hash: '#demo' }" class="btn btn-primary">
          {{ t('voicegateDemo.hero.ctaDemo') }}
        </router-link>
        <a :href="whatsappUrl" target="_blank" rel="noopener" class="btn btn-ghost vg-whatsapp-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          {{ t('voicegateDemo.hero.ctaWhatsapp') }}
        </a>
      </div>
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
.vg-hero {
  padding: 80px 0 64px;
  background: radial-gradient(ellipse 1200px 500px at 50% -5%, rgba(184,136,90,0.12), transparent 70%);
  text-align: center;
}

.vg-hero-inner {
  max-width: 760px;
  margin: 0 auto;
}

.vg-eyebrow {
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--brand);
  font-weight: 600;
  margin: 0 0 14px;
}

h1 {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 18px;
  letter-spacing: -0.02em;
}

.vg-hero-sub {
  color: var(--muted);
  font-size: 17px;
  line-height: 1.7;
  margin: 0 0 32px;
}

.vg-cta-row {
  justify-content: center;
}

.vg-whatsapp-btn svg { flex-shrink: 0; }

@media (max-width: 900px) {
  h1 { font-size: 34px; }
  .vg-hero-sub { font-size: 16px; }
  .vg-hero { padding: 56px 0 44px; }
}
@media (max-width: 640px) {
  h1 { font-size: 28px; letter-spacing: -0.01em; }
  .vg-hero { padding: 40px 0 32px; }
  .vg-cta-row { flex-direction: column; align-items: stretch; gap: 10px; }
  .vg-cta-row .btn { text-align: center; justify-content: center; width: 100%; }
  .vg-hero-sub { font-size: 15px; }
}
</style>
