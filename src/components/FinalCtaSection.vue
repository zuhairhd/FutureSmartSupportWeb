<template>
  <section class="section final-cta-section">
    <div class="container final-cta-inner">
      <div class="final-cta-accent" aria-hidden="true"></div>
      <h2 class="final-cta-title">{{ t('finalCta.title') }}</h2>
      <p class="final-cta-sub">{{ t('finalCta.sub') }}</p>
      <div class="final-cta-actions">
        <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-primary final-cta-btn">
          {{ t('finalCta.ctaPrimary') }}
        </router-link>
        <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-ghost">
          {{ t('finalCta.ctaSecondary') }}
        </router-link>
      </div>
      <p class="final-cta-trust">{{ t('finalCta.trust') }}</p>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'
const { t } = useLanguage()
</script>

<style scoped>
.final-cta-section {
  background: radial-gradient(ellipse 1000px 400px at 50% 50%, rgba(184,136,90,0.1), transparent 70%);
  text-align: center;
}

.final-cta-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.final-cta-accent {
  width: 1px;
  height: 56px;
  background: linear-gradient(180deg, transparent, var(--brand), transparent);
  margin-bottom: 32px;
}

.final-cta-title {
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 16px;
  max-width: 640px;
}

.final-cta-sub {
  color: var(--muted);
  font-size: 17px;
  line-height: 1.65;
  margin: 0 0 36px;
  max-width: 520px;
}

.final-cta-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 24px;
}

.final-cta-btn {
  padding: 14px 28px;
  font-size: 16px;
}

.final-cta-trust {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
  opacity: 0.7;
  letter-spacing: 0.02em;
}

@media (max-width: 640px) {
  .final-cta-title { font-size: 26px; }
  .final-cta-sub { font-size: 15px; }
  .final-cta-actions { flex-direction: column; align-items: stretch; width: 100%; max-width: 320px; }
  .final-cta-actions .btn { justify-content: center; }
  .final-cta-accent { height: 40px; margin-bottom: 24px; }
}
</style>
